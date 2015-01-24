(ns matter-cljs-fun.plinko
  (:require
    [matter-cljs-fun.util :refer [Matter Engine World Body Bodies Composites Composite]]
    [figwheel.client :as fw]))

(enable-console-print!)

;; These cannot be changed without refreshing the browser
(def scene-width 595)
(def scene-height 620)

;; These can all be changed and will refresh on the fly
(def pin-cols 20)
(def pin-rows 16)
(def start-x 1)
(def start-y 37)
(def pin-radius 5)
(def row-space 20)
(def col-space 32)

(def ground-width 2)
(def left-wall-width 2)
(def right-wall-width 2)

;; This will refresh for new balls but not for existing
(def ball-radius 10)

;; Initialize the engine
(def engine-options
  {:render {:options {:showAngleIndicator false
                      :wireframes false
                      :width scene-width
                      :height scene-height}}})

;; We only ever need to define the engine and world once, multiple definitions
;; will interfere with live reload
(defonce engine
  (.create Engine
           (.getElementById js/document "canvas-container")
           (clj->js engine-options)))

(defonce world
  (.-world engine))

;; Set up the pins
(defn position->pin-black [x y col row]
    (.circle Bodies x y pin-radius #js {:isStatic true :render #js {:fillStyle "#000000"}}))

(defn position->pin-grey [x y col row]
    (.circle Bodies x y pin-radius #js {:isStatic true :render #js {:fillStyle "#cccccc"}}))

(defn create-pin-stack-rows []
  (.stack Composites start-x start-y pin-cols (/ pin-rows 2) row-space (* 2 col-space) position->pin-black))

(defn create-pin-stack-offset-rows []
  (.stack Composites (+ start-x (/ row-space 1.25)) (+ (+ col-space (/ pin-radius 1)) start-y) pin-cols (/ pin-rows 2) row-space (* 2 col-space) position->pin-grey))

;; The moving pieces
(defn add-ball [x]
  (let [new-ball (.circle Bodies x 0 ball-radius #js {:density 1 :frictionAir 0.02})]
      (.add World world #js [new-ball])))

(defn add-random-ball []
  (add-ball (* scene-width (.random js/Math))))

;; Set up the borders
(def ground
  (.rectangle Bodies (/ scene-width 2) scene-height scene-width ground-width #js {:isStatic true}))

(def left-wall
  (.rectangle Bodies 0 (/ scene-height 2) left-wall-width scene-height #js {:isStatic true}))

(def right-wall
  (.rectangle Bodies scene-width (/ scene-height 2) right-wall-width scene-height #js {:isStatic true}))

;; Some useful helper functions for live reload
(defn clear-pins []
  "Clear the pins"
  (doseq [composite (.allComposites Composite world)]
     (.removeComposite Composite world composite)))

(defn clear-borders []
  "Clear the walls and ground"
  (let [bodies (.allBodies Composite world)]
    (doseq [static (filter #(.-isStatic %) bodies)]
       (.removeBody Composite world static))))

(defn clear-balls []
  "Clear the balls"
  (let [bodies (.allBodies Composite world)]
    (doseq [dynamic (filter #(not (.-isStatic %)) bodies)]
      (.removeBody Composite world dynamic))))

(defn create-environment []
  "Creates walls, ground and pins"
  (let [pin-stack (create-pin-stack-rows)
        pin-stack-offset (create-pin-stack-offset-rows)
        statics [pin-stack pin-stack-offset ground left-wall right-wall]]
    (.add World world (clj->js statics))))

;; Dom utility functions
(defn add-event-listener [event id fun]
  (.addEventListener (.getElementById js/document id) event fun))

(def on-click (partial add-event-listener "click"))

;; Actually run it
(defn initialize []
  "Start it all off by adding event listeners, creating the environment and
  adding a ball"
  (add-random-ball)
  (create-environment)
  (.run Engine engine)
  (on-click "add-ball" add-random-ball)
  (on-click "make-it-rain" (fn [e] (doseq [x (range 100)] (add-random-ball))))
  (on-click "clear-balls" clear-balls))

(.addEventListener js/document "DOMContentLoaded" initialize)

;; Live reload
(fw/start {:on-jsload (fn []
               (do (.render Engine engine)
                   (clear-pins)
                   (clear-borders)
                   (create-environment)
                   (add-random-ball)))})
