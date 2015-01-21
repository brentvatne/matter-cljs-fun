(ns matter-cljs-fun.core
  (:require [weasel.repl :as ws-repl]))

(ws-repl/connect "ws://localhost:9001")

(enable-console-print!)

;; Set up some helpers
(def Matter (.-Matter js/window))
(def Engine (.-Engine Matter))
(def World (.-World Matter))
(def Body (.-Body Matter))
(def Bodies (.-Bodies Matter))
(def Constraint (.-Constraint Matter))
(def Composites (.-Composites Matter))

;; Initialize the engine
(def engine-options
  {:render {:options {:showAngleIndicator false
                      :wireframes false}}})
(def engine
  (.create Engine (.-body js/document) (clj->js engine-options)))
(def world
  (.-world engine))

;; Set up the pins
(def pin-cols 25)
(def pin-rows 19)
(def start-x 0)
(def start-y 10)
(def pin-radius 5)
(def row-space 28)
(def col-space 28)

(defn position->pin-black [x y col row]
    (.circle Bodies x y pin-radius #js {:isStatic true :render #js {:fillStyle "#000000"}}))

(defn position->pin-grey [x y col row]
    (.circle Bodies x y pin-radius #js {:isStatic true :render #js {:fillStyle "#cccccc"}}))

; (defn position->pin [x y col row]
;   (let [offset-x ((if (odd? row) (+ x (/ 2 row-space)) x))]
;     (.circle Bodies offset-x y pin-radius #js {:isStatic true})))

(def pin-stack
  (.stack Composites start-x start-y pin-cols (/ pin-rows 2) row-space (* 2 col-space) position->pin-black))

(def pin-stack-offset
  (.stack Composites (+ start-x (/ row-space 1.25)) (+ (+ col-space (/ pin-radius 1)) start-y) pin-cols (/ pin-rows 2) row-space (* 2 col-space) position->pin-grey))

;; Add the ball
(def ball-radius 9)
(def ball
  (.circle Bodies 300 0 ball-radius #js {:density 0.000001 :frictionAir 0.001}))

;; Set up some basics
(def ground
  (.rectangle Bodies 400 595 800 10 #js {:isStatic true}))

(def left-wall
  (.rectangle Bodies 0 300 10 600 #js {:isStatic true}))

(def right-wall
  (.rectangle Bodies 800 300 10 600 #js {:isStatic true}))

;; Actually run it
(.add World world #js [pin-stack pin-stack-offset ground left-wall right-wall ball])
(.run Engine engine)

(defn add-ball [x]
  (let [new-ball (.circle Bodies x 0 ball-radius #js {:density 0.000001 :frictionAir 0.001})]
      (.log js/console new-ball)
      (.add World world #js [new-ball])))

(defn add-random-ball []
  (add-ball (* 800 (.random js/Math))))

(defn add-click-handlers []
  (.addEventListener (.getElementById js/document "add-ball")
                    "click"
                    add-random-ball)
  (.addEventListener (.getElementById js/document "make-it-rain")
                     "click"
                     (fn [e]
                       (doseq [x (range 100)]
                         (add-random-ball)))))

(.addEventListener js/document "DOMContentLoaded" add-click-handlers)
