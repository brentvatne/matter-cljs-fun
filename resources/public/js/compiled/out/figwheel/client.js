// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client')) {
goog.provide('figwheel.client');
}
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
var G__24366__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24367__i = 0, G__24367__a = new Array(arguments.length -  0);
while (G__24367__i < G__24367__a.length) {G__24367__a[G__24367__i] = arguments[G__24367__i + 0]; ++G__24367__i;}
  args = new cljs.core.IndexedSeq(G__24367__a,0);
} 
return G__24366__delegate.call(this,args);};
G__24366.cljs$lang$maxFixedArity = 0;
G__24366.cljs$lang$applyTo = (function (arglist__24368){
var args = cljs.core.seq(arglist__24368);
return G__24366__delegate(args);
});
G__24366.cljs$core$IFn$_invoke$arity$variadic = G__24366__delegate;
return G__24366;
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
figwheel.client.error_msg_format = (function error_msg_format(p__24369){
var map__24371 = p__24369;
var map__24371__$1 = ((cljs.core.seq_QMARK_.call(null,map__24371))?cljs.core.apply.call(null,cljs.core.hash_map,map__24371):map__24371);
var class$ = cljs.core.get.call(null,map__24371__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__24371__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12187__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12187__auto__)){
return or__12187__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12175__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12175__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12175__auto__;
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
var c__14650__auto___24492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___24492,ch){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___24492,ch){
return (function (state_24466){
var state_val_24467 = (state_24466[(1)]);
if((state_val_24467 === (7))){
var inst_24462 = (state_24466[(2)]);
var state_24466__$1 = state_24466;
var statearr_24468_24493 = state_24466__$1;
(statearr_24468_24493[(2)] = inst_24462);

(statearr_24468_24493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (1))){
var state_24466__$1 = state_24466;
var statearr_24469_24494 = state_24466__$1;
(statearr_24469_24494[(2)] = null);

(statearr_24469_24494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (4))){
var inst_24434 = (state_24466[(7)]);
var inst_24434__$1 = (state_24466[(2)]);
var state_24466__$1 = (function (){var statearr_24470 = state_24466;
(statearr_24470[(7)] = inst_24434__$1);

return statearr_24470;
})();
if(cljs.core.truth_(inst_24434__$1)){
var statearr_24471_24495 = state_24466__$1;
(statearr_24471_24495[(1)] = (5));

} else {
var statearr_24472_24496 = state_24466__$1;
(statearr_24472_24496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (13))){
var state_24466__$1 = state_24466;
var statearr_24473_24497 = state_24466__$1;
(statearr_24473_24497[(2)] = null);

(statearr_24473_24497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (6))){
var state_24466__$1 = state_24466;
var statearr_24474_24498 = state_24466__$1;
(statearr_24474_24498[(2)] = null);

(statearr_24474_24498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (3))){
var inst_24464 = (state_24466[(2)]);
var state_24466__$1 = state_24466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24466__$1,inst_24464);
} else {
if((state_val_24467 === (12))){
var inst_24441 = (state_24466[(8)]);
var inst_24450 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24441);
var inst_24451 = cljs.core.first.call(null,inst_24450);
var inst_24452 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24451);
var inst_24453 = console.warn("Figwheel: Not loading code with warnings - ",inst_24452);
var state_24466__$1 = state_24466;
var statearr_24475_24499 = state_24466__$1;
(statearr_24475_24499[(2)] = inst_24453);

(statearr_24475_24499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (2))){
var state_24466__$1 = state_24466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24466__$1,(4),ch);
} else {
if((state_val_24467 === (11))){
var inst_24446 = (state_24466[(2)]);
var state_24466__$1 = state_24466;
var statearr_24476_24500 = state_24466__$1;
(statearr_24476_24500[(2)] = inst_24446);

(statearr_24476_24500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (9))){
var inst_24440 = (state_24466[(9)]);
var inst_24448 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24440,opts);
var state_24466__$1 = state_24466;
if(inst_24448){
var statearr_24477_24501 = state_24466__$1;
(statearr_24477_24501[(1)] = (12));

} else {
var statearr_24478_24502 = state_24466__$1;
(statearr_24478_24502[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (5))){
var inst_24440 = (state_24466[(9)]);
var inst_24434 = (state_24466[(7)]);
var inst_24436 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24437 = (new cljs.core.PersistentArrayMap(null,2,inst_24436,null));
var inst_24438 = (new cljs.core.PersistentHashSet(null,inst_24437,null));
var inst_24439 = figwheel.client.focus_msgs.call(null,inst_24438,inst_24434);
var inst_24440__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24439);
var inst_24441 = cljs.core.first.call(null,inst_24439);
var inst_24442 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24440__$1,opts);
var state_24466__$1 = (function (){var statearr_24479 = state_24466;
(statearr_24479[(8)] = inst_24441);

(statearr_24479[(9)] = inst_24440__$1);

return statearr_24479;
})();
if(cljs.core.truth_(inst_24442)){
var statearr_24480_24503 = state_24466__$1;
(statearr_24480_24503[(1)] = (8));

} else {
var statearr_24481_24504 = state_24466__$1;
(statearr_24481_24504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (14))){
var inst_24456 = (state_24466[(2)]);
var state_24466__$1 = state_24466;
var statearr_24482_24505 = state_24466__$1;
(statearr_24482_24505[(2)] = inst_24456);

(statearr_24482_24505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (10))){
var inst_24458 = (state_24466[(2)]);
var state_24466__$1 = (function (){var statearr_24483 = state_24466;
(statearr_24483[(10)] = inst_24458);

return statearr_24483;
})();
var statearr_24484_24506 = state_24466__$1;
(statearr_24484_24506[(2)] = null);

(statearr_24484_24506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24467 === (8))){
var inst_24441 = (state_24466[(8)]);
var inst_24444 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24441);
var state_24466__$1 = state_24466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24466__$1,(11),inst_24444);
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
});})(c__14650__auto___24492,ch))
;
return ((function (switch__14594__auto__,c__14650__auto___24492,ch){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_24488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24488[(0)] = state_machine__14595__auto__);

(statearr_24488[(1)] = (1));

return statearr_24488;
});
var state_machine__14595__auto____1 = (function (state_24466){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_24466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e24489){if((e24489 instanceof Object)){
var ex__14598__auto__ = e24489;
var statearr_24490_24507 = state_24466;
(statearr_24490_24507[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24508 = state_24466;
state_24466 = G__24508;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_24466){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_24466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___24492,ch))
})();
var state__14652__auto__ = (function (){var statearr_24491 = f__14651__auto__.call(null);
(statearr_24491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___24492);

return statearr_24491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___24492,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__24509_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24509_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_24513 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24513){
return (function() { 
var G__24514__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24515__i = 0, G__24515__a = new Array(arguments.length -  0);
while (G__24515__i < G__24515__a.length) {G__24515__a[G__24515__i] = arguments[G__24515__i + 0]; ++G__24515__i;}
  args = new cljs.core.IndexedSeq(G__24515__a,0);
} 
return G__24514__delegate.call(this,args);};
G__24514.cljs$lang$maxFixedArity = 0;
G__24514.cljs$lang$applyTo = (function (arglist__24516){
var args = cljs.core.seq(arglist__24516);
return G__24514__delegate(args);
});
G__24514.cljs$core$IFn$_invoke$arity$variadic = G__24514__delegate;
return G__24514;
})()
;})(_STAR_print_fn_STAR_24513))
;

return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24513;
}}catch (e24512){if((e24512 instanceof Error)){
var e = e24512;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e24512;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
figwheel.client.repl_plugin = (function repl_plugin(opts){
return (function (p__24520){
var vec__24521 = p__24520;
var map__24522 = cljs.core.nth.call(null,vec__24521,(0),null);
var map__24522__$1 = ((cljs.core.seq_QMARK_.call(null,map__24522))?cljs.core.apply.call(null,cljs.core.hash_map,map__24522):map__24522);
var msg = map__24522__$1;
var msg_name = cljs.core.get.call(null,map__24522__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24521,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__24521,map__24522,map__24522__$1,msg,msg_name,_){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24521,map__24522,map__24522__$1,msg,msg_name,_))
);
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__24526){
var vec__24527 = p__24526;
var map__24528 = cljs.core.nth.call(null,vec__24527,(0),null);
var map__24528__$1 = ((cljs.core.seq_QMARK_.call(null,map__24528))?cljs.core.apply.call(null,cljs.core.hash_map,map__24528):map__24528);
var msg = map__24528__$1;
var msg_name = cljs.core.get.call(null,map__24528__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24527,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__24529){
var map__24537 = p__24529;
var map__24537__$1 = ((cljs.core.seq_QMARK_.call(null,map__24537))?cljs.core.apply.call(null,cljs.core.hash_map,map__24537):map__24537);
var on_compile_fail = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__24537,map__24537__$1,on_compile_fail,on_compile_warning){
return (function (p__24538){
var vec__24539 = p__24538;
var map__24540 = cljs.core.nth.call(null,vec__24539,(0),null);
var map__24540__$1 = ((cljs.core.seq_QMARK_.call(null,map__24540))?cljs.core.apply.call(null,cljs.core.hash_map,map__24540):map__24540);
var msg = map__24540__$1;
var msg_name = cljs.core.get.call(null,map__24540__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24539,(1));
var pred__24541 = cljs.core._EQ_;
var expr__24542 = msg_name;
if(cljs.core.truth_(pred__24541.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24542))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24541.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24542))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24537,map__24537__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__,msg_hist,msg_names,msg){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__,msg_hist,msg_names,msg){
return (function (state_24719){
var state_val_24720 = (state_24719[(1)]);
if((state_val_24720 === (7))){
var inst_24668 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24719__$1 = state_24719;
if(inst_24668){
var statearr_24721_24758 = state_24719__$1;
(statearr_24721_24758[(1)] = (11));

} else {
var statearr_24722_24759 = state_24719__$1;
(statearr_24722_24759[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (20))){
var inst_24709 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24723_24760 = state_24719__$1;
(statearr_24723_24760[(2)] = inst_24709);

(statearr_24723_24760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (27))){
var inst_24700 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24719__$1 = state_24719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24719__$1,(30),inst_24700);
} else {
if((state_val_24720 === (1))){
var inst_24651 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24719__$1 = state_24719;
if(cljs.core.truth_(inst_24651)){
var statearr_24724_24761 = state_24719__$1;
(statearr_24724_24761[(1)] = (2));

} else {
var statearr_24725_24762 = state_24719__$1;
(statearr_24725_24762[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (24))){
var inst_24698 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24719__$1 = state_24719;
if(inst_24698){
var statearr_24726_24763 = state_24719__$1;
(statearr_24726_24763[(1)] = (27));

} else {
var statearr_24727_24764 = state_24719__$1;
(statearr_24727_24764[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (4))){
var inst_24717 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24719__$1,inst_24717);
} else {
if((state_val_24720 === (15))){
var inst_24678 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24679 = figwheel.client.heads_up.append_message.call(null,inst_24678);
var state_24719__$1 = state_24719;
var statearr_24728_24765 = state_24719__$1;
(statearr_24728_24765[(2)] = inst_24679);

(statearr_24728_24765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (21))){
var inst_24685 = (state_24719[(2)]);
var inst_24686 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24687 = figwheel.client.heads_up.display_warning.call(null,inst_24686);
var state_24719__$1 = (function (){var statearr_24729 = state_24719;
(statearr_24729[(7)] = inst_24685);

return statearr_24729;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24719__$1,(22),inst_24687);
} else {
if((state_val_24720 === (13))){
var inst_24713 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24730_24766 = state_24719__$1;
(statearr_24730_24766[(2)] = inst_24713);

(statearr_24730_24766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (22))){
var inst_24689 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24731_24767 = state_24719__$1;
(statearr_24731_24767[(2)] = inst_24689);

(statearr_24731_24767[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (29))){
var inst_24705 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24732_24768 = state_24719__$1;
(statearr_24732_24768[(2)] = inst_24705);

(statearr_24732_24768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (6))){
var inst_24659 = figwheel.client.heads_up.clear.call(null);
var state_24719__$1 = state_24719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24719__$1,(9),inst_24659);
} else {
if((state_val_24720 === (28))){
var state_24719__$1 = state_24719;
var statearr_24733_24769 = state_24719__$1;
(statearr_24733_24769[(2)] = null);

(statearr_24733_24769[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (25))){
var inst_24707 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24734_24770 = state_24719__$1;
(statearr_24734_24770[(2)] = inst_24707);

(statearr_24734_24770[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (17))){
var inst_24711 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24735_24771 = state_24719__$1;
(statearr_24735_24771[(2)] = inst_24711);

(statearr_24735_24771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (3))){
var inst_24657 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24719__$1 = state_24719;
if(inst_24657){
var statearr_24736_24772 = state_24719__$1;
(statearr_24736_24772[(1)] = (6));

} else {
var statearr_24737_24773 = state_24719__$1;
(statearr_24737_24773[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (12))){
var inst_24676 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24719__$1 = state_24719;
if(inst_24676){
var statearr_24738_24774 = state_24719__$1;
(statearr_24738_24774[(1)] = (15));

} else {
var statearr_24739_24775 = state_24719__$1;
(statearr_24739_24775[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (2))){
var inst_24653 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24719__$1 = state_24719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24719__$1,(5),inst_24653);
} else {
if((state_val_24720 === (23))){
var inst_24693 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24694 = figwheel.client.heads_up.display_warning.call(null,inst_24693);
var state_24719__$1 = state_24719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24719__$1,(26),inst_24694);
} else {
if((state_val_24720 === (19))){
var inst_24691 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24719__$1 = state_24719;
if(inst_24691){
var statearr_24740_24776 = state_24719__$1;
(statearr_24740_24776[(1)] = (23));

} else {
var statearr_24741_24777 = state_24719__$1;
(statearr_24741_24777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (11))){
var inst_24670 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24671 = figwheel.client.format_messages.call(null,inst_24670);
var inst_24672 = figwheel.client.heads_up.display_error.call(null,inst_24671);
var state_24719__$1 = state_24719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24719__$1,(14),inst_24672);
} else {
if((state_val_24720 === (9))){
var inst_24661 = (state_24719[(2)]);
var inst_24662 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24663 = figwheel.client.format_messages.call(null,inst_24662);
var inst_24664 = figwheel.client.heads_up.display_error.call(null,inst_24663);
var state_24719__$1 = (function (){var statearr_24742 = state_24719;
(statearr_24742[(8)] = inst_24661);

return statearr_24742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24719__$1,(10),inst_24664);
} else {
if((state_val_24720 === (5))){
var inst_24655 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24743_24778 = state_24719__$1;
(statearr_24743_24778[(2)] = inst_24655);

(statearr_24743_24778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (14))){
var inst_24674 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24744_24779 = state_24719__$1;
(statearr_24744_24779[(2)] = inst_24674);

(statearr_24744_24779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (26))){
var inst_24696 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24745_24780 = state_24719__$1;
(statearr_24745_24780[(2)] = inst_24696);

(statearr_24745_24780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (16))){
var inst_24681 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24719__$1 = state_24719;
if(inst_24681){
var statearr_24746_24781 = state_24719__$1;
(statearr_24746_24781[(1)] = (18));

} else {
var statearr_24747_24782 = state_24719__$1;
(statearr_24747_24782[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (30))){
var inst_24702 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24748_24783 = state_24719__$1;
(statearr_24748_24783[(2)] = inst_24702);

(statearr_24748_24783[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (10))){
var inst_24666 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24749_24784 = state_24719__$1;
(statearr_24749_24784[(2)] = inst_24666);

(statearr_24749_24784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (18))){
var inst_24683 = figwheel.client.heads_up.clear.call(null);
var state_24719__$1 = state_24719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24719__$1,(21),inst_24683);
} else {
if((state_val_24720 === (8))){
var inst_24715 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24750_24785 = state_24719__$1;
(statearr_24750_24785[(2)] = inst_24715);

(statearr_24750_24785[(1)] = (4));


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
});})(c__14650__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__14594__auto__,c__14650__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_24754 = [null,null,null,null,null,null,null,null,null];
(statearr_24754[(0)] = state_machine__14595__auto__);

(statearr_24754[(1)] = (1));

return statearr_24754;
});
var state_machine__14595__auto____1 = (function (state_24719){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_24719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object)){
var ex__14598__auto__ = e24755;
var statearr_24756_24786 = state_24719;
(statearr_24756_24786[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24787 = state_24719;
state_24719 = G__24787;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_24719){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_24719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__,msg_hist,msg_names,msg))
})();
var state__14652__auto__ = (function (){var statearr_24757 = f__14651__auto__.call(null);
(statearr_24757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_24757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__,msg_hist,msg_names,msg))
);

return c__14650__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__14650__auto___24850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___24850,ch){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___24850,ch){
return (function (state_24833){
var state_val_24834 = (state_24833[(1)]);
if((state_val_24834 === (8))){
var inst_24825 = (state_24833[(2)]);
var state_24833__$1 = (function (){var statearr_24835 = state_24833;
(statearr_24835[(7)] = inst_24825);

return statearr_24835;
})();
var statearr_24836_24851 = state_24833__$1;
(statearr_24836_24851[(2)] = null);

(statearr_24836_24851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (7))){
var inst_24829 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
var statearr_24837_24852 = state_24833__$1;
(statearr_24837_24852[(2)] = inst_24829);

(statearr_24837_24852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (6))){
var state_24833__$1 = state_24833;
var statearr_24838_24853 = state_24833__$1;
(statearr_24838_24853[(2)] = null);

(statearr_24838_24853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (5))){
var inst_24821 = (state_24833[(8)]);
var inst_24823 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24821);
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24833__$1,(8),inst_24823);
} else {
if((state_val_24834 === (4))){
var inst_24821 = (state_24833[(8)]);
var inst_24821__$1 = (state_24833[(2)]);
var state_24833__$1 = (function (){var statearr_24839 = state_24833;
(statearr_24839[(8)] = inst_24821__$1);

return statearr_24839;
})();
if(cljs.core.truth_(inst_24821__$1)){
var statearr_24840_24854 = state_24833__$1;
(statearr_24840_24854[(1)] = (5));

} else {
var statearr_24841_24855 = state_24833__$1;
(statearr_24841_24855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (3))){
var inst_24831 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24833__$1,inst_24831);
} else {
if((state_val_24834 === (2))){
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24833__$1,(4),ch);
} else {
if((state_val_24834 === (1))){
var state_24833__$1 = state_24833;
var statearr_24842_24856 = state_24833__$1;
(statearr_24842_24856[(2)] = null);

(statearr_24842_24856[(1)] = (2));


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
});})(c__14650__auto___24850,ch))
;
return ((function (switch__14594__auto__,c__14650__auto___24850,ch){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_24846 = [null,null,null,null,null,null,null,null,null];
(statearr_24846[(0)] = state_machine__14595__auto__);

(statearr_24846[(1)] = (1));

return statearr_24846;
});
var state_machine__14595__auto____1 = (function (state_24833){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_24833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e24847){if((e24847 instanceof Object)){
var ex__14598__auto__ = e24847;
var statearr_24848_24857 = state_24833;
(statearr_24848_24857[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24858 = state_24833;
state_24833 = G__24858;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_24833){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_24833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___24850,ch))
})();
var state__14652__auto__ = (function (){var statearr_24849 = f__14651__auto__.call(null);
(statearr_24849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___24850);

return statearr_24849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___24850,ch))
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
var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__){
return (function (state_24879){
var state_val_24880 = (state_24879[(1)]);
if((state_val_24880 === (2))){
var inst_24876 = (state_24879[(2)]);
var inst_24877 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24879__$1 = (function (){var statearr_24881 = state_24879;
(statearr_24881[(7)] = inst_24876);

return statearr_24881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24879__$1,inst_24877);
} else {
if((state_val_24880 === (1))){
var inst_24874 = cljs.core.async.timeout.call(null,(3000));
var state_24879__$1 = state_24879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24879__$1,(2),inst_24874);
} else {
return null;
}
}
});})(c__14650__auto__))
;
return ((function (switch__14594__auto__,c__14650__auto__){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_24885 = [null,null,null,null,null,null,null,null];
(statearr_24885[(0)] = state_machine__14595__auto__);

(statearr_24885[(1)] = (1));

return statearr_24885;
});
var state_machine__14595__auto____1 = (function (state_24879){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_24879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e24886){if((e24886 instanceof Object)){
var ex__14598__auto__ = e24886;
var statearr_24887_24889 = state_24879;
(statearr_24887_24889[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24890 = state_24879;
state_24879 = G__24890;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_24879){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_24879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__))
})();
var state__14652__auto__ = (function (){var statearr_24888 = f__14651__auto__.call(null);
(statearr_24888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_24888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__))
);

return c__14650__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24894 = {"detail":url};
return obj24894;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24895){
var map__24901 = p__24895;
var map__24901__$1 = ((cljs.core.seq_QMARK_.call(null,map__24901))?cljs.core.apply.call(null,cljs.core.hash_map,map__24901):map__24901);
var ed = map__24901__$1;
var exception_data = cljs.core.get.call(null,map__24901__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__24901__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__24902_24906 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24903_24907 = null;
var count__24904_24908 = (0);
var i__24905_24909 = (0);
while(true){
if((i__24905_24909 < count__24904_24908)){
var msg_24910 = cljs.core._nth.call(null,chunk__24903_24907,i__24905_24909);
console.log(msg_24910);

var G__24911 = seq__24902_24906;
var G__24912 = chunk__24903_24907;
var G__24913 = count__24904_24908;
var G__24914 = (i__24905_24909 + (1));
seq__24902_24906 = G__24911;
chunk__24903_24907 = G__24912;
count__24904_24908 = G__24913;
i__24905_24909 = G__24914;
continue;
} else {
var temp__4126__auto___24915 = cljs.core.seq.call(null,seq__24902_24906);
if(temp__4126__auto___24915){
var seq__24902_24916__$1 = temp__4126__auto___24915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24902_24916__$1)){
var c__12974__auto___24917 = cljs.core.chunk_first.call(null,seq__24902_24916__$1);
var G__24918 = cljs.core.chunk_rest.call(null,seq__24902_24916__$1);
var G__24919 = c__12974__auto___24917;
var G__24920 = cljs.core.count.call(null,c__12974__auto___24917);
var G__24921 = (0);
seq__24902_24906 = G__24918;
chunk__24903_24907 = G__24919;
count__24904_24908 = G__24920;
i__24905_24909 = G__24921;
continue;
} else {
var msg_24922 = cljs.core.first.call(null,seq__24902_24916__$1);
console.log(msg_24922);

var G__24923 = cljs.core.next.call(null,seq__24902_24916__$1);
var G__24924 = null;
var G__24925 = (0);
var G__24926 = (0);
seq__24902_24906 = G__24923;
chunk__24903_24907 = G__24924;
count__24904_24908 = G__24925;
i__24905_24909 = G__24926;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__24927){
var map__24929 = p__24927;
var map__24929__$1 = ((cljs.core.seq_QMARK_.call(null,map__24929))?cljs.core.apply.call(null,cljs.core.hash_map,map__24929):map__24929);
var w = map__24929__$1;
var message = cljs.core.get.call(null,map__24929__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__24936 = cljs.core.seq.call(null,plugins);
var chunk__24937 = null;
var count__24938 = (0);
var i__24939 = (0);
while(true){
if((i__24939 < count__24938)){
var vec__24940 = cljs.core._nth.call(null,chunk__24937,i__24939);
var k = cljs.core.nth.call(null,vec__24940,(0),null);
var plugin = cljs.core.nth.call(null,vec__24940,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24942 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24936,chunk__24937,count__24938,i__24939,pl_24942,vec__24940,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24942.call(null,msg_hist);
});})(seq__24936,chunk__24937,count__24938,i__24939,pl_24942,vec__24940,k,plugin))
);
} else {
}

var G__24943 = seq__24936;
var G__24944 = chunk__24937;
var G__24945 = count__24938;
var G__24946 = (i__24939 + (1));
seq__24936 = G__24943;
chunk__24937 = G__24944;
count__24938 = G__24945;
i__24939 = G__24946;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24936);
if(temp__4126__auto__){
var seq__24936__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24936__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__24936__$1);
var G__24947 = cljs.core.chunk_rest.call(null,seq__24936__$1);
var G__24948 = c__12974__auto__;
var G__24949 = cljs.core.count.call(null,c__12974__auto__);
var G__24950 = (0);
seq__24936 = G__24947;
chunk__24937 = G__24948;
count__24938 = G__24949;
i__24939 = G__24950;
continue;
} else {
var vec__24941 = cljs.core.first.call(null,seq__24936__$1);
var k = cljs.core.nth.call(null,vec__24941,(0),null);
var plugin = cljs.core.nth.call(null,vec__24941,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24951 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24936,chunk__24937,count__24938,i__24939,pl_24951,vec__24941,k,plugin,seq__24936__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24951.call(null,msg_hist);
});})(seq__24936,chunk__24937,count__24938,i__24939,pl_24951,vec__24941,k,plugin,seq__24936__$1,temp__4126__auto__))
);
} else {
}

var G__24952 = cljs.core.next.call(null,seq__24936__$1);
var G__24953 = null;
var G__24954 = (0);
var G__24955 = (0);
seq__24936 = G__24952;
chunk__24937 = G__24953;
count__24938 = G__24954;
i__24939 = G__24955;
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
var watch_and_reload__delegate = function (p__24956){
var map__24958 = p__24956;
var map__24958__$1 = ((cljs.core.seq_QMARK_.call(null,map__24958))?cljs.core.apply.call(null,cljs.core.hash_map,map__24958):map__24958);
var opts = map__24958__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24956 = null;
if (arguments.length > 0) {
var G__24959__i = 0, G__24959__a = new Array(arguments.length -  0);
while (G__24959__i < G__24959__a.length) {G__24959__a[G__24959__i] = arguments[G__24959__i + 0]; ++G__24959__i;}
  p__24956 = new cljs.core.IndexedSeq(G__24959__a,0);
} 
return watch_and_reload__delegate.call(this,p__24956);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24960){
var p__24956 = cljs.core.seq(arglist__24960);
return watch_and_reload__delegate(p__24956);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1421962949085