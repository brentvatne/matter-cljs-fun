(ns matter-cljs-fun.pong
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async
             :refer [>! <! put! chan alts! timeout]]
            [matter-cljs-fun.util
             :refer [Matter Engine World Body Bodies Composites Composite
                     on-click keys-chan events->chan on-click]]
            [goog.events :as events]
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

(defn apply-force [body strength]
  ;; If switching direction, should decrease at a much
  ;; faster spead (slam on the breaks)
  (.applyForce Body body
               #js {:x 0 :y 0}
               #js {:x strength :y 0})
  (aset body "torque" 0))

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

(defn brake-force [paddle]
  (let [dir (current-direction paddle)
        v   (velocity-x paddle)]
    (cond
      (= :right dir) (* -0.004)
      (= :left dir)  (* 0.004)
      (= :none dir)  0)))

(defn slam-brakes! [paddle]
  (let [f (brake-force paddle)]
    (.log js/console paddle)
    (apply-force paddle f)))


(defn move-paddle! [paddle direction]
  (let [dir (direction {:left -1 :right 1})
        current-dir (current-direction paddle)
        x (pos-x paddle)
        x-offset (* 3 dir)]
    (when (and (< (velocity-x paddle) 0.6) (= :right direction))
      (apply-force paddle 0.03))
    (when (and (> (velocity-x paddle) -0.6) (= :left direction))
      (apply-force paddle -0.03))
    (.log js/console current-direction)
    (.log js/console direction)
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

(defn initialize []
  (build-world)
  (accept-user-input!)
  (.run Engine engine))

(.addEventListener js/document "DOMContentLoaded" initialize)

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

;; Live reload
(fw/start {:on-jsload (fn []
               (do (clear-statics)
                   (build-world)
                   (.render Engine engine)
                   (println "other stuff")))})
