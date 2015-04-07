(ns om-tut.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [figwheel.client :as fw]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
              [clojure.string :as str]
            [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

;; game logic
(defn new-board [] "---------")

;; (defn contact-view [contact owner]
;;   (reify
;;     om/IRender
;;     (render [this]
;;       (dom/li nil
;;         (dom/span nil (display-name contact))
;;         (dom/button nil "Delete")))))

(defn matches [matcher board]
  (map first (filter #(= (second %) matcher)
             (map-indexed vector board))))

(defn win? [board]
  (def winners [[0 3 6] [1 4 7] [2 5 8] [0 4 8] [2 4 6] [0 1 2] [3 4 5] [6 7 8]])
  (some true?
         (into (map (fn [winner] (every? true? (map (fn [x] (.contains (matches \x board) x)) winner))) winners)
               (map (fn [winner] (every? true? (map (fn [x] (.contains (matches \o board) x)) winner))) winners))))

(defn draw? [board]
  (and (< (count (matches \- board)) 3)
       (not (some true? (map (fn [x] (win? (str/replace board "-" x))) ["x" "o"])))))

(defn move [board place player]
  (if (= \- (get board place))
    (str (subs board 0 place) player (subs board (inc place)))
    false))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text (new-board)}))

(om/root
  (fn [data owner]
    (reify om/IRender
      (render [_]
        (dom/h1 nil (:text data)))))
  app-state
  {:target (. js/document (getElementById "app"))})

(defn game []
  (loop [board  (new-board)
         player \x]
    ;; (print-board board)
    (if (win? board)
      (println "You Win!")
      (if (draw? board)
        (println "Draw!")
        (recur (move board "user-input" player)
               (if (= \x player) \o \x))))))

(swap! app-state assoc :text "Do it live!")
