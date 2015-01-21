(defproject matter-cljs-fun "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2665"]
                 [weasel "0.5.0"]
                 [com.cemerick/piggieback "0.1.5"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ["out/matter_cljs_fun" "matter_cljs_fun.js" "matter_cljs_fun.min.js"]

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.1.5-SNAPSHOT"]]
                   :plugins [[lein-cljsbuild "1.0.3"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :cljsbuild {:builds [{:id "dev"
                                          :source-paths ["src"]
                                          :compiler {
                                            :output-to "matter_cljs_fun.js"
                                            :output-dir "out"
                                            :optimizations :none
                                            :cache-analysis true
                                            :source-map true}}
                                         {:id "release"
                                          :source-paths ["src"]
                                          :compiler {
                                            :output-to "matter_cljs_fun.min.js"
                                            :pretty-print false
                                            :optimizations :advanced}}]}}})
