(ns matter-cljs-fun.pong
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [>! <! put! chan alts! timeout]]
            [matter-cljs-fun.util :as util :refer [Matter Engine World Body Bodies Composites Composite
                                          on-click keys-chan events->chan on-click by-id set-html!
                                          stringify]]
            [goog.events :as events]
            [om.core :as om :include-macros true]
            [om.dom :as om-dom]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            [figwheel.client :as fw]
            [goog.dom.classes :as classes]))

(enable-console-print!)

(def scene-width 500)
(def scene-height 500)

(defn rectangle [m]
  "Creates a rectangle body with the given map options
  :x :y :w :h :options"
  (.rectangle Bodies (:x m) (:y m) (:w m) (:h m) (clj->js (:options m {}))))

(def left-wall
  (rectangle {:x 0 :y (/ scene-height 2) :w 10 :h scene-height
              :options {:isStatic true}}))

(def right-wall
  (rectangle {:x scene-width :y (/ scene-height 2) :w 10 :h scene-height
              :options {:isStatic true}}))

;; Initialize the engine
(def engine-options
  {:render {:options {:showAngleIndicator false
                      :wireframes false
                      :width scene-width
                      :height scene-height}}})

;; Define the paddles
(defonce user-paddle
  (.rectangle Bodies 50 (- scene-height 50) 50 20))

(defonce cpu-paddle
  (.rectangle Bodies 50 50 50 20))

(defn ^:export log-user-paddle []
  (.log js/console user-paddle))

;; We only ever need to define the engine and world once, multiple definitions
;; will interfere with live reload
(defonce engine
  (.create Engine
           (.getElementById js/document "canvas-container")
           (clj->js engine-options)))

;; Set the gravity to zero so that our paddles don't just fall to the ground,
;; and our balls can go in any direction
(defonce world
  (do (aset engine "world" "gravity" "y" 0)
      (.-world engine)))

(defn pos [body]
  {:x (aget user-paddle "position" "x")
   :y (aget user-paddle "position" "y")})

(defn pos-x [body] (:x (pos body)))
(defn pos-y [body] (:y (pos body)))

(defn translate [body x y] (.translate Body body #js {:x x :y y}))
(defn velocity-x [body] (aget body "velocity" "x"))
(defn abs [n] (max n (- n)))

(defn current-direction [paddle]
  (let [v (velocity-x paddle)]
    (.log js/console v)
    (cond
      (> v 0.7) :right
      (< v -0.7) :left
      :else   :none)))

(defn apply-force [body strength]
  ;; If switching direction, should decrease at a much
  ;; faster spead (slam on the breaks)
  (let [x-src (pos-x body)
        y-src (pos-y body)]
    (.applyForce Body body
                 #js {:x (+ x-src 100) :y y-src}
                 #js {:x strength :y 0})
    (aset body "torque" 0)))

(defn brake-force [paddle]
  (let [dir (current-direction paddle)
        v   (velocity-x paddle)]
    (cond
      (= :right dir) (* -0.002)
      (= :left dir)  (* 0.002)
      (= :none dir)  0)))

(defn slam-brakes! [paddle]
  (let [f (brake-force paddle)]
    (.resetForcesAll Body [paddle])))


(defn move-paddle! [paddle direction]
  (let [dir (direction {:left -1 :right 1})
        current-dir (current-direction paddle)
        x (pos-x paddle)
        x-offset (* 3 dir)]
    (when (and (< (velocity-x paddle) 20) (= :right direction))
      (apply-force paddle 0.005))
    (when (and (> (velocity-x paddle) -20) (= :left direction))
      (apply-force paddle -0.005))
    (when-not (= current-dir direction)
      (slam-brakes! paddle))))

(defn accept-user-input! []
  (go-loop []
    (.log js/console (velocity-x user-paddle))
    (let [user-input (<! (keys-chan))]
      (if (= user-input :space)
        (slam-brakes! user-paddle)
        (move-paddle! user-paddle user-input)))
    (recur)))

;; Run it
(defn add-bodies [bodies]
  (.add World world (clj->js bodies)))

(defn build-world []
  (add-bodies [user-paddle cpu-paddle left-wall right-wall]))

(defn display-statistics! [paddle dom-id]
  (go-loop []
    (let [v (velocity-x paddle)
          x (:x (pos paddle))
          y (:y (pos paddle))]
      (set-html! dom-id (str "Velocity: " v)))
      (<! (timeout 100))
    (recur)))

;; Some useful helper functions for live reload
(defn clear-paddles []
  "Clear the paddles"
  (doseq [composite (.allComposites Composite world)]
     (.removeComposite Composite world composite)))

(defn clear-statics []
  "Clear the walls"
  (let [bodies (.allBodies Composite world)]
    (doseq [static (filter #(.-isStatic %) bodies)]
       (.removeBody Composite world static))))

(defonce variable-controls-state
  (atom {:torque {:val 0}
         :acceleration {:val 0}
         :x {:val 0}
         :y {:val 0}}))

(add-watch variable-controls-state :paddle-updater
  (fn [key atom old-state new-state]
    ; (.log js/console key)
    ; (.log js/console atom)
    ; (.log js/console old-state)
    ; (.log js/console (clj->js new-state))
    ))

(defcomponent pretty-user-paddle-data [data owner]
  (render [_]
    (let [p user-paddle
          data {:velocity (.-x (.-velocity p))
                :angle    (.-angle p)
                :torque   (.-torque p)
                :speed    (.-speed p)
                :angular-speed (.-angularSpeed p)
                :motion (.-motion p)
                :inertia (.-inertia p)
                :inverse-intertia (.-inverseInertia p)}]
      (dom/div
        (map (fn [[k v]]
          (dom/div
            (dom/label (str (.-name k) ": " (.toFixed v 2))))) data)))))


(defn update-after-render []
  (util/on-tick engine (fn []
    (om/root pretty-user-paddle-data  (atom {}) {:target (by-id "user-paddle-data")}) )))

(update-after-render)

(defcomponent torque-slider
  [data owner]
  (render [_]
    (dom/div
      (dom/label (str "Torque" (:val data)))
      (dom/input {:type "range" :min 0 :max 1 :step 0.1 :id "torque-slider"
                  :onChange (fn [e]
                              (let [v (aget e "target" "value")]
                                (om/update! data :val v)
                                (aset user-paddle "torque" v)))}))))

(defcomponent variable-controls
  [data owner]
  (render [_]
    (dom/div
      (om/build torque-slider (:torque data)))))

(defn render-variable-controls []
  (om/root variable-controls variable-controls-state
           {:target (by-id "variable-tools-container")})

  (om/root pretty-user-paddle-data  (atom {})
           {:target (by-id "user-paddle-data")}))

(defn initialize []
  (build-world)
  ; (display-statistics! user-paddle "user-paddle-statistics")
  (render-variable-controls)
  (accept-user-input!)
  (.run Engine engine))

(.addEventListener js/document "DOMContentLoaded" initialize)

;; Live reload
(fw/start {:on-jsload (fn []
               (do (clear-statics)
                   (render-variable-controls)
                   (build-world)
                   (.render Engine engine)
                   (println "other stuff")))})
