(ns matter-cljs-fun.util
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [>! <! put! chan alts! dropping-buffer]]
            [goog.events :as events]
            [figwheel.client :as fw]
            [goog.dom.classes :as classes])
  (:import [goog.events EventType]))

;; Set up some helpers
(def Matter (.-Matter js/window))
(def Engine (.-Engine Matter))
(def Events (.-Events Matter))
(def World (.-World Matter))
(def Body (.-Body Matter))
(def Bodies (.-Bodies Matter))
(def Constraint (.-Constraint Matter))
(def Composites (.-Composites Matter))
(def Composite (.-Composite Matter))

(defn before-tick [engine handler]
  (.on Events engine "beforeTick" handler))

(defn on-tick [engine handler]
  (.on Events engine "tick" handler))

(defn after-tick [engine handler]
  (.on Events engine "afterTick" handler))

;; Dom utility functions
(defn add-event-listener [event id fun]
  (.addEventListener (.getElementById js/document id) event fun))

(def on-click
  "Given an id and callback handler it fires the callback when the
  element with the id is clicked"
  (partial add-event-listener "click"))

(defn by-id
  "Short-hand for document.getElementById(id)"
  [id]
  (.getElementById js/document id))

(defn set-html!
  "Given a CSS id, replace the matching DOM element's
  content with the supplied string."
  [id s]
  (set! (.-innerHTML (by-id id)) s))

;; Channel functions
(defn events->chan
  "Given a target DOM element and event type return a channel of
  observed events. Can supply the channel to receive events as third
  optional argument."
  ([el event-type] (events->chan el event-type (chan)))
  ([el event-type c]
   (events/listen el event-type
     (fn [e] (put! c e)))
   c))

(defn keys-chan
  "Return a channel of :left and :right events
  sourced from left and right arrow key presses."
  []
  (events->chan js/window EventType.KEYDOWN
    (chan (dropping-buffer 1) (comp (map #(.-keyCode %))
                  (filter #{37 39 32})
                  (map {37 :left 39 :right 32 :space})))))

(defn stringify [obj]
 (.stringify js/JSON (.decycle js/JSON obj)))
