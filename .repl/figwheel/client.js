// Compiled by ClojureScript 0.0-2665 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23860__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23861__i = 0, G__23861__a = new Array(arguments.length -  0);
while (G__23861__i < G__23861__a.length) {G__23861__a[G__23861__i] = arguments[G__23861__i + 0]; ++G__23861__i;}
  args = new cljs.core.IndexedSeq(G__23861__a,0);
} 
return G__23860__delegate.call(this,args);};
G__23860.cljs$lang$maxFixedArity = 0;
G__23860.cljs$lang$applyTo = (function (arglist__23862){
var args = cljs.core.seq(arglist__23862);
return G__23860__delegate(args);
});
G__23860.cljs$core$IFn$_invoke$arity$variadic = G__23860__delegate;
return G__23860;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__23863){
var map__23865 = p__23863;
var map__23865__$1 = ((cljs.core.seq_QMARK_.call(null,map__23865))?cljs.core.apply.call(null,cljs.core.hash_map,map__23865):map__23865);
var class$ = cljs.core.get.call(null,map__23865__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__23865__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12607__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12595__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12595__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12595__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__14527__auto___23986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___23986,ch){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___23986,ch){
return (function (state_23960){
var state_val_23961 = (state_23960[(1)]);
if((state_val_23961 === (7))){
var inst_23956 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23962_23987 = state_23960__$1;
(statearr_23962_23987[(2)] = inst_23956);

(statearr_23962_23987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (1))){
var state_23960__$1 = state_23960;
var statearr_23963_23988 = state_23960__$1;
(statearr_23963_23988[(2)] = null);

(statearr_23963_23988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (4))){
var inst_23928 = (state_23960[(7)]);
var inst_23928__$1 = (state_23960[(2)]);
var state_23960__$1 = (function (){var statearr_23964 = state_23960;
(statearr_23964[(7)] = inst_23928__$1);

return statearr_23964;
})();
if(cljs.core.truth_(inst_23928__$1)){
var statearr_23965_23989 = state_23960__$1;
(statearr_23965_23989[(1)] = (5));

} else {
var statearr_23966_23990 = state_23960__$1;
(statearr_23966_23990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (13))){
var state_23960__$1 = state_23960;
var statearr_23967_23991 = state_23960__$1;
(statearr_23967_23991[(2)] = null);

(statearr_23967_23991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (6))){
var state_23960__$1 = state_23960;
var statearr_23968_23992 = state_23960__$1;
(statearr_23968_23992[(2)] = null);

(statearr_23968_23992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (3))){
var inst_23958 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23960__$1,inst_23958);
} else {
if((state_val_23961 === (12))){
var inst_23935 = (state_23960[(8)]);
var inst_23944 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23935);
var inst_23945 = cljs.core.first.call(null,inst_23944);
var inst_23946 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23945);
var inst_23947 = console.warn("Figwheel: Not loading code with warnings - ",inst_23946);
var state_23960__$1 = state_23960;
var statearr_23969_23993 = state_23960__$1;
(statearr_23969_23993[(2)] = inst_23947);

(statearr_23969_23993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (2))){
var state_23960__$1 = state_23960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23960__$1,(4),ch);
} else {
if((state_val_23961 === (11))){
var inst_23940 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23970_23994 = state_23960__$1;
(statearr_23970_23994[(2)] = inst_23940);

(statearr_23970_23994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (9))){
var inst_23934 = (state_23960[(9)]);
var inst_23942 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23934,opts);
var state_23960__$1 = state_23960;
if(inst_23942){
var statearr_23971_23995 = state_23960__$1;
(statearr_23971_23995[(1)] = (12));

} else {
var statearr_23972_23996 = state_23960__$1;
(statearr_23972_23996[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (5))){
var inst_23934 = (state_23960[(9)]);
var inst_23928 = (state_23960[(7)]);
var inst_23930 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23931 = (new cljs.core.PersistentArrayMap(null,2,inst_23930,null));
var inst_23932 = (new cljs.core.PersistentHashSet(null,inst_23931,null));
var inst_23933 = figwheel.client.focus_msgs.call(null,inst_23932,inst_23928);
var inst_23934__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23933);
var inst_23935 = cljs.core.first.call(null,inst_23933);
var inst_23936 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23934__$1,opts);
var state_23960__$1 = (function (){var statearr_23973 = state_23960;
(statearr_23973[(9)] = inst_23934__$1);

(statearr_23973[(8)] = inst_23935);

return statearr_23973;
})();
if(cljs.core.truth_(inst_23936)){
var statearr_23974_23997 = state_23960__$1;
(statearr_23974_23997[(1)] = (8));

} else {
var statearr_23975_23998 = state_23960__$1;
(statearr_23975_23998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (14))){
var inst_23950 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23976_23999 = state_23960__$1;
(statearr_23976_23999[(2)] = inst_23950);

(statearr_23976_23999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (10))){
var inst_23952 = (state_23960[(2)]);
var state_23960__$1 = (function (){var statearr_23977 = state_23960;
(statearr_23977[(10)] = inst_23952);

return statearr_23977;
})();
var statearr_23978_24000 = state_23960__$1;
(statearr_23978_24000[(2)] = null);

(statearr_23978_24000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (8))){
var inst_23935 = (state_23960[(8)]);
var inst_23938 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23935);
var state_23960__$1 = state_23960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23960__$1,(11),inst_23938);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14527__auto___23986,ch))
;
return ((function (switch__14512__auto__,c__14527__auto___23986,ch){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_23982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23982[(0)] = state_machine__14513__auto__);

(statearr_23982[(1)] = (1));

return statearr_23982;
});
var state_machine__14513__auto____1 = (function (state_23960){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_23960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e23983){if((e23983 instanceof Object)){
var ex__14516__auto__ = e23983;
var statearr_23984_24001 = state_23960;
(statearr_23984_24001[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24002 = state_23960;
state_23960 = G__24002;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_23960){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_23960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___23986,ch))
})();
var state__14529__auto__ = (function (){var statearr_23985 = f__14528__auto__.call(null);
(statearr_23985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___23986);

return statearr_23985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___23986,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__24003_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24003_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_24007 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24007){
return (function() { 
var G__24008__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24009__i = 0, G__24009__a = new Array(arguments.length -  0);
while (G__24009__i < G__24009__a.length) {G__24009__a[G__24009__i] = arguments[G__24009__i + 0]; ++G__24009__i;}
  args = new cljs.core.IndexedSeq(G__24009__a,0);
} 
return G__24008__delegate.call(this,args);};
G__24008.cljs$lang$maxFixedArity = 0;
G__24008.cljs$lang$applyTo = (function (arglist__24010){
var args = cljs.core.seq(arglist__24010);
return G__24008__delegate(args);
});
G__24008.cljs$core$IFn$_invoke$arity$variadic = G__24008__delegate;
return G__24008;
})()
;})(_STAR_print_fn_STAR_24007))
;

return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24007;
}}catch (e24006){if((e24006 instanceof Error)){
var e = e24006;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e24006;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
figwheel.client.repl_plugin = (function repl_plugin(opts){
return (function (p__24014){
var vec__24015 = p__24014;
var map__24016 = cljs.core.nth.call(null,vec__24015,(0),null);
var map__24016__$1 = ((cljs.core.seq_QMARK_.call(null,map__24016))?cljs.core.apply.call(null,cljs.core.hash_map,map__24016):map__24016);
var msg = map__24016__$1;
var msg_name = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24015,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__24015,map__24016,map__24016__$1,msg,msg_name,_){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24015,map__24016,map__24016__$1,msg,msg_name,_))
);
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__24020){
var vec__24021 = p__24020;
var map__24022 = cljs.core.nth.call(null,vec__24021,(0),null);
var map__24022__$1 = ((cljs.core.seq_QMARK_.call(null,map__24022))?cljs.core.apply.call(null,cljs.core.hash_map,map__24022):map__24022);
var msg = map__24022__$1;
var msg_name = cljs.core.get.call(null,map__24022__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24021,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__24023){
var map__24031 = p__24023;
var map__24031__$1 = ((cljs.core.seq_QMARK_.call(null,map__24031))?cljs.core.apply.call(null,cljs.core.hash_map,map__24031):map__24031);
var on_compile_fail = cljs.core.get.call(null,map__24031__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__24031__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__24031,map__24031__$1,on_compile_fail,on_compile_warning){
return (function (p__24032){
var vec__24033 = p__24032;
var map__24034 = cljs.core.nth.call(null,vec__24033,(0),null);
var map__24034__$1 = ((cljs.core.seq_QMARK_.call(null,map__24034))?cljs.core.apply.call(null,cljs.core.hash_map,map__24034):map__24034);
var msg = map__24034__$1;
var msg_name = cljs.core.get.call(null,map__24034__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24033,(1));
var pred__24035 = cljs.core._EQ_;
var expr__24036 = msg_name;
if(cljs.core.truth_(pred__24035.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24036))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24035.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24036))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24031,map__24031__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__,msg_hist,msg_names,msg){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__,msg_hist,msg_names,msg){
return (function (state_24213){
var state_val_24214 = (state_24213[(1)]);
if((state_val_24214 === (7))){
var inst_24162 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24213__$1 = state_24213;
if(inst_24162){
var statearr_24215_24252 = state_24213__$1;
(statearr_24215_24252[(1)] = (11));

} else {
var statearr_24216_24253 = state_24213__$1;
(statearr_24216_24253[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (20))){
var inst_24203 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24217_24254 = state_24213__$1;
(statearr_24217_24254[(2)] = inst_24203);

(statearr_24217_24254[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (27))){
var inst_24194 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24213__$1,(30),inst_24194);
} else {
if((state_val_24214 === (1))){
var inst_24145 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24213__$1 = state_24213;
if(cljs.core.truth_(inst_24145)){
var statearr_24218_24255 = state_24213__$1;
(statearr_24218_24255[(1)] = (2));

} else {
var statearr_24219_24256 = state_24213__$1;
(statearr_24219_24256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (24))){
var inst_24192 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24213__$1 = state_24213;
if(inst_24192){
var statearr_24220_24257 = state_24213__$1;
(statearr_24220_24257[(1)] = (27));

} else {
var statearr_24221_24258 = state_24213__$1;
(statearr_24221_24258[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (4))){
var inst_24211 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24213__$1,inst_24211);
} else {
if((state_val_24214 === (15))){
var inst_24172 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24173 = figwheel.client.heads_up.append_message.call(null,inst_24172);
var state_24213__$1 = state_24213;
var statearr_24222_24259 = state_24213__$1;
(statearr_24222_24259[(2)] = inst_24173);

(statearr_24222_24259[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (21))){
var inst_24179 = (state_24213[(2)]);
var inst_24180 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24181 = figwheel.client.heads_up.display_warning.call(null,inst_24180);
var state_24213__$1 = (function (){var statearr_24223 = state_24213;
(statearr_24223[(7)] = inst_24179);

return statearr_24223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24213__$1,(22),inst_24181);
} else {
if((state_val_24214 === (13))){
var inst_24207 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24224_24260 = state_24213__$1;
(statearr_24224_24260[(2)] = inst_24207);

(statearr_24224_24260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (22))){
var inst_24183 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24225_24261 = state_24213__$1;
(statearr_24225_24261[(2)] = inst_24183);

(statearr_24225_24261[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (29))){
var inst_24199 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24226_24262 = state_24213__$1;
(statearr_24226_24262[(2)] = inst_24199);

(statearr_24226_24262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (6))){
var inst_24153 = figwheel.client.heads_up.clear.call(null);
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24213__$1,(9),inst_24153);
} else {
if((state_val_24214 === (28))){
var state_24213__$1 = state_24213;
var statearr_24227_24263 = state_24213__$1;
(statearr_24227_24263[(2)] = null);

(statearr_24227_24263[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (25))){
var inst_24201 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24228_24264 = state_24213__$1;
(statearr_24228_24264[(2)] = inst_24201);

(statearr_24228_24264[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (17))){
var inst_24205 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24229_24265 = state_24213__$1;
(statearr_24229_24265[(2)] = inst_24205);

(statearr_24229_24265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (3))){
var inst_24151 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24213__$1 = state_24213;
if(inst_24151){
var statearr_24230_24266 = state_24213__$1;
(statearr_24230_24266[(1)] = (6));

} else {
var statearr_24231_24267 = state_24213__$1;
(statearr_24231_24267[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (12))){
var inst_24170 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24213__$1 = state_24213;
if(inst_24170){
var statearr_24232_24268 = state_24213__$1;
(statearr_24232_24268[(1)] = (15));

} else {
var statearr_24233_24269 = state_24213__$1;
(statearr_24233_24269[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (2))){
var inst_24147 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24213__$1,(5),inst_24147);
} else {
if((state_val_24214 === (23))){
var inst_24187 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24188 = figwheel.client.heads_up.display_warning.call(null,inst_24187);
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24213__$1,(26),inst_24188);
} else {
if((state_val_24214 === (19))){
var inst_24185 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24213__$1 = state_24213;
if(inst_24185){
var statearr_24234_24270 = state_24213__$1;
(statearr_24234_24270[(1)] = (23));

} else {
var statearr_24235_24271 = state_24213__$1;
(statearr_24235_24271[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (11))){
var inst_24164 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24165 = figwheel.client.format_messages.call(null,inst_24164);
var inst_24166 = figwheel.client.heads_up.display_error.call(null,inst_24165);
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24213__$1,(14),inst_24166);
} else {
if((state_val_24214 === (9))){
var inst_24155 = (state_24213[(2)]);
var inst_24156 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24157 = figwheel.client.format_messages.call(null,inst_24156);
var inst_24158 = figwheel.client.heads_up.display_error.call(null,inst_24157);
var state_24213__$1 = (function (){var statearr_24236 = state_24213;
(statearr_24236[(8)] = inst_24155);

return statearr_24236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24213__$1,(10),inst_24158);
} else {
if((state_val_24214 === (5))){
var inst_24149 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24237_24272 = state_24213__$1;
(statearr_24237_24272[(2)] = inst_24149);

(statearr_24237_24272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (14))){
var inst_24168 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24238_24273 = state_24213__$1;
(statearr_24238_24273[(2)] = inst_24168);

(statearr_24238_24273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (26))){
var inst_24190 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24239_24274 = state_24213__$1;
(statearr_24239_24274[(2)] = inst_24190);

(statearr_24239_24274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (16))){
var inst_24175 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24213__$1 = state_24213;
if(inst_24175){
var statearr_24240_24275 = state_24213__$1;
(statearr_24240_24275[(1)] = (18));

} else {
var statearr_24241_24276 = state_24213__$1;
(statearr_24241_24276[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (30))){
var inst_24196 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24242_24277 = state_24213__$1;
(statearr_24242_24277[(2)] = inst_24196);

(statearr_24242_24277[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (10))){
var inst_24160 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24243_24278 = state_24213__$1;
(statearr_24243_24278[(2)] = inst_24160);

(statearr_24243_24278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (18))){
var inst_24177 = figwheel.client.heads_up.clear.call(null);
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24213__$1,(21),inst_24177);
} else {
if((state_val_24214 === (8))){
var inst_24209 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24244_24279 = state_24213__$1;
(statearr_24244_24279[(2)] = inst_24209);

(statearr_24244_24279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14527__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__14512__auto__,c__14527__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_24248 = [null,null,null,null,null,null,null,null,null];
(statearr_24248[(0)] = state_machine__14513__auto__);

(statearr_24248[(1)] = (1));

return statearr_24248;
});
var state_machine__14513__auto____1 = (function (state_24213){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_24213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e24249){if((e24249 instanceof Object)){
var ex__14516__auto__ = e24249;
var statearr_24250_24280 = state_24213;
(statearr_24250_24280[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24281 = state_24213;
state_24213 = G__24281;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_24213){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_24213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__,msg_hist,msg_names,msg))
})();
var state__14529__auto__ = (function (){var statearr_24251 = f__14528__auto__.call(null);
(statearr_24251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_24251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__,msg_hist,msg_names,msg))
);

return c__14527__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__14527__auto___24344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___24344,ch){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___24344,ch){
return (function (state_24327){
var state_val_24328 = (state_24327[(1)]);
if((state_val_24328 === (8))){
var inst_24319 = (state_24327[(2)]);
var state_24327__$1 = (function (){var statearr_24329 = state_24327;
(statearr_24329[(7)] = inst_24319);

return statearr_24329;
})();
var statearr_24330_24345 = state_24327__$1;
(statearr_24330_24345[(2)] = null);

(statearr_24330_24345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24328 === (7))){
var inst_24323 = (state_24327[(2)]);
var state_24327__$1 = state_24327;
var statearr_24331_24346 = state_24327__$1;
(statearr_24331_24346[(2)] = inst_24323);

(statearr_24331_24346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24328 === (6))){
var state_24327__$1 = state_24327;
var statearr_24332_24347 = state_24327__$1;
(statearr_24332_24347[(2)] = null);

(statearr_24332_24347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24328 === (5))){
var inst_24315 = (state_24327[(8)]);
var inst_24317 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24315);
var state_24327__$1 = state_24327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24327__$1,(8),inst_24317);
} else {
if((state_val_24328 === (4))){
var inst_24315 = (state_24327[(8)]);
var inst_24315__$1 = (state_24327[(2)]);
var state_24327__$1 = (function (){var statearr_24333 = state_24327;
(statearr_24333[(8)] = inst_24315__$1);

return statearr_24333;
})();
if(cljs.core.truth_(inst_24315__$1)){
var statearr_24334_24348 = state_24327__$1;
(statearr_24334_24348[(1)] = (5));

} else {
var statearr_24335_24349 = state_24327__$1;
(statearr_24335_24349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24328 === (3))){
var inst_24325 = (state_24327[(2)]);
var state_24327__$1 = state_24327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24327__$1,inst_24325);
} else {
if((state_val_24328 === (2))){
var state_24327__$1 = state_24327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24327__$1,(4),ch);
} else {
if((state_val_24328 === (1))){
var state_24327__$1 = state_24327;
var statearr_24336_24350 = state_24327__$1;
(statearr_24336_24350[(2)] = null);

(statearr_24336_24350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__14527__auto___24344,ch))
;
return ((function (switch__14512__auto__,c__14527__auto___24344,ch){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_24340 = [null,null,null,null,null,null,null,null,null];
(statearr_24340[(0)] = state_machine__14513__auto__);

(statearr_24340[(1)] = (1));

return statearr_24340;
});
var state_machine__14513__auto____1 = (function (state_24327){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_24327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e24341){if((e24341 instanceof Object)){
var ex__14516__auto__ = e24341;
var statearr_24342_24351 = state_24327;
(statearr_24342_24351[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24352 = state_24327;
state_24327 = G__24352;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_24327){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_24327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___24344,ch))
})();
var state__14529__auto__ = (function (){var statearr_24343 = f__14528__auto__.call(null);
(statearr_24343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___24344);

return statearr_24343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___24344,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__){
return (function (state_24373){
var state_val_24374 = (state_24373[(1)]);
if((state_val_24374 === (2))){
var inst_24370 = (state_24373[(2)]);
var inst_24371 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24373__$1 = (function (){var statearr_24375 = state_24373;
(statearr_24375[(7)] = inst_24370);

return statearr_24375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24373__$1,inst_24371);
} else {
if((state_val_24374 === (1))){
var inst_24368 = cljs.core.async.timeout.call(null,(3000));
var state_24373__$1 = state_24373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24373__$1,(2),inst_24368);
} else {
return null;
}
}
});})(c__14527__auto__))
;
return ((function (switch__14512__auto__,c__14527__auto__){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_24379 = [null,null,null,null,null,null,null,null];
(statearr_24379[(0)] = state_machine__14513__auto__);

(statearr_24379[(1)] = (1));

return statearr_24379;
});
var state_machine__14513__auto____1 = (function (state_24373){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_24373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e24380){if((e24380 instanceof Object)){
var ex__14516__auto__ = e24380;
var statearr_24381_24383 = state_24373;
(statearr_24381_24383[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24384 = state_24373;
state_24373 = G__24384;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_24373){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_24373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_24382 = f__14528__auto__.call(null);
(statearr_24382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_24382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24388 = {"detail":url};
return obj24388;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24389){
var map__24395 = p__24389;
var map__24395__$1 = ((cljs.core.seq_QMARK_.call(null,map__24395))?cljs.core.apply.call(null,cljs.core.hash_map,map__24395):map__24395);
var ed = map__24395__$1;
var exception_data = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__24396_24400 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24397_24401 = null;
var count__24398_24402 = (0);
var i__24399_24403 = (0);
while(true){
if((i__24399_24403 < count__24398_24402)){
var msg_24404 = cljs.core._nth.call(null,chunk__24397_24401,i__24399_24403);
console.log(msg_24404);

var G__24405 = seq__24396_24400;
var G__24406 = chunk__24397_24401;
var G__24407 = count__24398_24402;
var G__24408 = (i__24399_24403 + (1));
seq__24396_24400 = G__24405;
chunk__24397_24401 = G__24406;
count__24398_24402 = G__24407;
i__24399_24403 = G__24408;
continue;
} else {
var temp__4126__auto___24409 = cljs.core.seq.call(null,seq__24396_24400);
if(temp__4126__auto___24409){
var seq__24396_24410__$1 = temp__4126__auto___24409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24396_24410__$1)){
var c__13396__auto___24411 = cljs.core.chunk_first.call(null,seq__24396_24410__$1);
var G__24412 = cljs.core.chunk_rest.call(null,seq__24396_24410__$1);
var G__24413 = c__13396__auto___24411;
var G__24414 = cljs.core.count.call(null,c__13396__auto___24411);
var G__24415 = (0);
seq__24396_24400 = G__24412;
chunk__24397_24401 = G__24413;
count__24398_24402 = G__24414;
i__24399_24403 = G__24415;
continue;
} else {
var msg_24416 = cljs.core.first.call(null,seq__24396_24410__$1);
console.log(msg_24416);

var G__24417 = cljs.core.next.call(null,seq__24396_24410__$1);
var G__24418 = null;
var G__24419 = (0);
var G__24420 = (0);
seq__24396_24400 = G__24417;
chunk__24397_24401 = G__24418;
count__24398_24402 = G__24419;
i__24399_24403 = G__24420;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__24421){
var map__24423 = p__24421;
var map__24423__$1 = ((cljs.core.seq_QMARK_.call(null,map__24423))?cljs.core.apply.call(null,cljs.core.hash_map,map__24423):map__24423);
var w = map__24423__$1;
var message = cljs.core.get.call(null,map__24423__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__24430 = cljs.core.seq.call(null,plugins);
var chunk__24431 = null;
var count__24432 = (0);
var i__24433 = (0);
while(true){
if((i__24433 < count__24432)){
var vec__24434 = cljs.core._nth.call(null,chunk__24431,i__24433);
var k = cljs.core.nth.call(null,vec__24434,(0),null);
var plugin = cljs.core.nth.call(null,vec__24434,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24436 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24430,chunk__24431,count__24432,i__24433,pl_24436,vec__24434,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24436.call(null,msg_hist);
});})(seq__24430,chunk__24431,count__24432,i__24433,pl_24436,vec__24434,k,plugin))
);
} else {
}

var G__24437 = seq__24430;
var G__24438 = chunk__24431;
var G__24439 = count__24432;
var G__24440 = (i__24433 + (1));
seq__24430 = G__24437;
chunk__24431 = G__24438;
count__24432 = G__24439;
i__24433 = G__24440;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24430);
if(temp__4126__auto__){
var seq__24430__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24430__$1)){
var c__13396__auto__ = cljs.core.chunk_first.call(null,seq__24430__$1);
var G__24441 = cljs.core.chunk_rest.call(null,seq__24430__$1);
var G__24442 = c__13396__auto__;
var G__24443 = cljs.core.count.call(null,c__13396__auto__);
var G__24444 = (0);
seq__24430 = G__24441;
chunk__24431 = G__24442;
count__24432 = G__24443;
i__24433 = G__24444;
continue;
} else {
var vec__24435 = cljs.core.first.call(null,seq__24430__$1);
var k = cljs.core.nth.call(null,vec__24435,(0),null);
var plugin = cljs.core.nth.call(null,vec__24435,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24445 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24430,chunk__24431,count__24432,i__24433,pl_24445,vec__24435,k,plugin,seq__24430__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24445.call(null,msg_hist);
});})(seq__24430,chunk__24431,count__24432,i__24433,pl_24445,vec__24435,k,plugin,seq__24430__$1,temp__4126__auto__))
);
} else {
}

var G__24446 = cljs.core.next.call(null,seq__24430__$1);
var G__24447 = null;
var G__24448 = (0);
var G__24449 = (0);
seq__24430 = G__24446;
chunk__24431 = G__24447;
count__24432 = G__24448;
i__24433 = G__24449;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__24450){
var map__24452 = p__24450;
var map__24452__$1 = ((cljs.core.seq_QMARK_.call(null,map__24452))?cljs.core.apply.call(null,cljs.core.hash_map,map__24452):map__24452);
var opts = map__24452__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24450 = null;
if (arguments.length > 0) {
var G__24453__i = 0, G__24453__a = new Array(arguments.length -  0);
while (G__24453__i < G__24453__a.length) {G__24453__a[G__24453__i] = arguments[G__24453__i + 0]; ++G__24453__i;}
  p__24450 = new cljs.core.IndexedSeq(G__24453__a,0);
} 
return watch_and_reload__delegate.call(this,p__24450);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24454){
var p__24450 = cljs.core.seq(arglist__24454);
return watch_and_reload__delegate(p__24450);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
