// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('matter_cljs_fun.pong')) {
goog.provide('matter_cljs_fun.pong');
}
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('om_tools.dom');
goog.require('matter_cljs_fun.util');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('figwheel.client');
goog.require('om.dom');
goog.require('goog.events');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
matter_cljs_fun.pong.scene_width = (500);
matter_cljs_fun.pong.scene_height = (500);
matter_cljs_fun.pong.rectangle = (function rectangle(m){

return matter_cljs_fun.util.Bodies.rectangle(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m),cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$2(m,cljs.core.PersistentArrayMap.EMPTY)));
});
matter_cljs_fun.pong.left_wall = matter_cljs_fun.pong.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(matter_cljs_fun.pong.scene_height / (2)),new cljs.core.Keyword(null,"w","w",354169001),(10),new cljs.core.Keyword(null,"h","h",1109658740),matter_cljs_fun.pong.scene_height,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"isStatic","isStatic",1002568003),true], null)], null));
matter_cljs_fun.pong.right_wall = matter_cljs_fun.pong.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),matter_cljs_fun.pong.scene_width,new cljs.core.Keyword(null,"y","y",-1757859776),(matter_cljs_fun.pong.scene_height / (2)),new cljs.core.Keyword(null,"w","w",354169001),(10),new cljs.core.Keyword(null,"h","h",1109658740),matter_cljs_fun.pong.scene_height,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"isStatic","isStatic",1002568003),true], null)], null));
matter_cljs_fun.pong.engine_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"showAngleIndicator","showAngleIndicator",-1460751489),false,new cljs.core.Keyword(null,"wireframes","wireframes",-1841146676),false,new cljs.core.Keyword(null,"width","width",-384071477),matter_cljs_fun.pong.scene_width,new cljs.core.Keyword(null,"height","height",1025178622),matter_cljs_fun.pong.scene_height], null)], null)], null);
if(typeof matter_cljs_fun.pong.user_paddle !== 'undefined'){
} else {
matter_cljs_fun.pong.user_paddle = matter_cljs_fun.util.Bodies.rectangle((50),(matter_cljs_fun.pong.scene_height - (50)),(50),(20));
}
if(typeof matter_cljs_fun.pong.cpu_paddle !== 'undefined'){
} else {
matter_cljs_fun.pong.cpu_paddle = matter_cljs_fun.util.Bodies.rectangle((50),(50),(50),(20));
}
matter_cljs_fun.pong.log_user_paddle = (function log_user_paddle(){
return console.log(matter_cljs_fun.pong.user_paddle);
});
goog.exportSymbol('matter_cljs_fun.pong.log_user_paddle', matter_cljs_fun.pong.log_user_paddle);
if(typeof matter_cljs_fun.pong.engine !== 'undefined'){
} else {
matter_cljs_fun.pong.engine = matter_cljs_fun.util.Engine.create(document.getElementById("canvas-container"),cljs.core.clj__GT_js.call(null,matter_cljs_fun.pong.engine_options));
}
if(typeof matter_cljs_fun.pong.world !== 'undefined'){
} else {
matter_cljs_fun.pong.world = (function (){
(matter_cljs_fun.pong.engine["world"]["gravity"]["y"] = (0));

return matter_cljs_fun.pong.engine.world;
})()
;
}
matter_cljs_fun.pong.pos = (function pos(body){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(matter_cljs_fun.pong.user_paddle["position"]["x"]),new cljs.core.Keyword(null,"y","y",-1757859776),(matter_cljs_fun.pong.user_paddle["position"]["y"])], null);
});
matter_cljs_fun.pong.pos_x = (function pos_x(body){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(matter_cljs_fun.pong.pos.call(null,body));
});
matter_cljs_fun.pong.pos_y = (function pos_y(body){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(matter_cljs_fun.pong.pos.call(null,body));
});
matter_cljs_fun.pong.translate = (function translate(body,x,y){
return matter_cljs_fun.util.Body.translate(body,{"y": y, "x": x});
});
matter_cljs_fun.pong.velocity_x = (function velocity_x(body){
return (body["velocity"]["x"]);
});
matter_cljs_fun.pong.abs = (function abs(n){
var x__12924__auto__ = n;
var y__12925__auto__ = (- n);
return ((x__12924__auto__ > y__12925__auto__) ? x__12924__auto__ : y__12925__auto__);
});
matter_cljs_fun.pong.current_direction = (function current_direction(paddle){
var v = matter_cljs_fun.pong.velocity_x.call(null,paddle);
console.log(v);

if((v > 0.7)){
return new cljs.core.Keyword(null,"right","right",-452581833);
} else {
if((v < -0.7)){
return new cljs.core.Keyword(null,"left","left",-399115937);
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);

}
}
});
matter_cljs_fun.pong.apply_force = (function apply_force(body,strength){
var x_src = matter_cljs_fun.pong.pos_x.call(null,body);
var y_src = matter_cljs_fun.pong.pos_y.call(null,body);
matter_cljs_fun.util.Body.applyForce(body,{"y": y_src, "x": (x_src + (100))},{"y": (0), "x": strength});

return (body["torque"] = (0));
});
matter_cljs_fun.pong.brake_force = (function brake_force(paddle){
var dir = matter_cljs_fun.pong.current_direction.call(null,paddle);
var v = matter_cljs_fun.pong.velocity_x.call(null,paddle);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),dir)){
return -0.002;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),dir)){
return 0.002;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),dir)){
return (0);
} else {
return null;
}
}
}
});
matter_cljs_fun.pong.slam_brakes_BANG_ = (function slam_brakes_BANG_(paddle){
var f = matter_cljs_fun.pong.brake_force.call(null,paddle);
return matter_cljs_fun.util.Body.resetForcesAll(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [paddle], null));
});
matter_cljs_fun.pong.move_paddle_BANG_ = (function move_paddle_BANG_(paddle,direction){
var dir = direction.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),(-1),new cljs.core.Keyword(null,"right","right",-452581833),(1)], null));
var current_dir = matter_cljs_fun.pong.current_direction.call(null,paddle);
var x = matter_cljs_fun.pong.pos_x.call(null,paddle);
var x_offset = ((3) * dir);
if(((matter_cljs_fun.pong.velocity_x.call(null,paddle) < (20))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),direction))){
matter_cljs_fun.pong.apply_force.call(null,paddle,0.005);
} else {
}

if(((matter_cljs_fun.pong.velocity_x.call(null,paddle) > (-20))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),direction))){
matter_cljs_fun.pong.apply_force.call(null,paddle,-0.005);
} else {
}

if(cljs.core._EQ_.call(null,current_dir,direction)){
return null;
} else {
return matter_cljs_fun.pong.slam_brakes_BANG_.call(null,paddle);
}
});
matter_cljs_fun.pong.accept_user_input_BANG_ = (function accept_user_input_BANG_(){
var c__14525__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14525__auto__){
return (function (){
var f__14526__auto__ = (function (){var switch__14510__auto__ = ((function (c__14525__auto__){
return (function (state_43949){
var state_val_43950 = (state_43949[(1)]);
if((state_val_43950 === (7))){
var inst_43944 = (state_43949[(2)]);
var state_43949__$1 = (function (){var statearr_43951 = state_43949;
(statearr_43951[(7)] = inst_43944);

return statearr_43951;
})();
var statearr_43952_43967 = state_43949__$1;
(statearr_43952_43967[(2)] = null);

(statearr_43952_43967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43950 === (6))){
var inst_43937 = (state_43949[(8)]);
var inst_43942 = matter_cljs_fun.pong.move_paddle_BANG_.call(null,matter_cljs_fun.pong.user_paddle,inst_43937);
var state_43949__$1 = state_43949;
var statearr_43953_43968 = state_43949__$1;
(statearr_43953_43968[(2)] = inst_43942);

(statearr_43953_43968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43950 === (5))){
var inst_43940 = matter_cljs_fun.pong.slam_brakes_BANG_.call(null,matter_cljs_fun.pong.user_paddle);
var state_43949__$1 = state_43949;
var statearr_43954_43969 = state_43949__$1;
(statearr_43954_43969[(2)] = inst_43940);

(statearr_43954_43969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43950 === (4))){
var inst_43937 = (state_43949[(8)]);
var inst_43937__$1 = (state_43949[(2)]);
var inst_43938 = cljs.core._EQ_.call(null,inst_43937__$1,new cljs.core.Keyword(null,"space","space",348133475));
var state_43949__$1 = (function (){var statearr_43955 = state_43949;
(statearr_43955[(8)] = inst_43937__$1);

return statearr_43955;
})();
if(inst_43938){
var statearr_43956_43970 = state_43949__$1;
(statearr_43956_43970[(1)] = (5));

} else {
var statearr_43957_43971 = state_43949__$1;
(statearr_43957_43971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43950 === (3))){
var inst_43947 = (state_43949[(2)]);
var state_43949__$1 = state_43949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43949__$1,inst_43947);
} else {
if((state_val_43950 === (2))){
var inst_43933 = matter_cljs_fun.pong.velocity_x.call(null,matter_cljs_fun.pong.user_paddle);
var inst_43934 = console.log(inst_43933);
var inst_43935 = matter_cljs_fun.util.keys_chan.call(null);
var state_43949__$1 = (function (){var statearr_43958 = state_43949;
(statearr_43958[(9)] = inst_43934);

return statearr_43958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43949__$1,(4),inst_43935);
} else {
if((state_val_43950 === (1))){
var state_43949__$1 = state_43949;
var statearr_43959_43972 = state_43949__$1;
(statearr_43959_43972[(2)] = null);

(statearr_43959_43972[(1)] = (2));


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
});})(c__14525__auto__))
;
return ((function (switch__14510__auto__,c__14525__auto__){
return (function() {
var state_machine__14511__auto__ = null;
var state_machine__14511__auto____0 = (function (){
var statearr_43963 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43963[(0)] = state_machine__14511__auto__);

(statearr_43963[(1)] = (1));

return statearr_43963;
});
var state_machine__14511__auto____1 = (function (state_43949){
while(true){
var ret_value__14512__auto__ = (function (){try{while(true){
var result__14513__auto__ = switch__14510__auto__.call(null,state_43949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14513__auto__;
}
break;
}
}catch (e43964){if((e43964 instanceof Object)){
var ex__14514__auto__ = e43964;
var statearr_43965_43973 = state_43949;
(statearr_43965_43973[(5)] = ex__14514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43974 = state_43949;
state_43949 = G__43974;
continue;
} else {
return ret_value__14512__auto__;
}
break;
}
});
state_machine__14511__auto__ = function(state_43949){
switch(arguments.length){
case 0:
return state_machine__14511__auto____0.call(this);
case 1:
return state_machine__14511__auto____1.call(this,state_43949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14511__auto____0;
state_machine__14511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14511__auto____1;
return state_machine__14511__auto__;
})()
;})(switch__14510__auto__,c__14525__auto__))
})();
var state__14527__auto__ = (function (){var statearr_43966 = f__14526__auto__.call(null);
(statearr_43966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14525__auto__);

return statearr_43966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14527__auto__);
});})(c__14525__auto__))
);

return c__14525__auto__;
});
matter_cljs_fun.pong.add_bodies = (function add_bodies(bodies){
return matter_cljs_fun.util.World.add(matter_cljs_fun.pong.world,cljs.core.clj__GT_js.call(null,bodies));
});
matter_cljs_fun.pong.build_world = (function build_world(){
return matter_cljs_fun.pong.add_bodies.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_cljs_fun.pong.user_paddle,matter_cljs_fun.pong.cpu_paddle,matter_cljs_fun.pong.left_wall,matter_cljs_fun.pong.right_wall], null));
});
matter_cljs_fun.pong.display_statistics_BANG_ = (function display_statistics_BANG_(paddle,dom_id){
var c__14525__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14525__auto__){
return (function (){
var f__14526__auto__ = (function (){var switch__14510__auto__ = ((function (c__14525__auto__){
return (function (state_44018){
var state_val_44019 = (state_44018[(1)]);
if((state_val_44019 === (4))){
var inst_44013 = (state_44018[(2)]);
var state_44018__$1 = (function (){var statearr_44020 = state_44018;
(statearr_44020[(7)] = inst_44013);

return statearr_44020;
})();
var statearr_44021_44031 = state_44018__$1;
(statearr_44021_44031[(2)] = null);

(statearr_44021_44031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44019 === (3))){
var inst_44016 = (state_44018[(2)]);
var state_44018__$1 = state_44018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44018__$1,inst_44016);
} else {
if((state_val_44019 === (2))){
var inst_44004 = matter_cljs_fun.pong.velocity_x.call(null,paddle);
var inst_44005 = matter_cljs_fun.pong.pos.call(null,paddle);
var inst_44006 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_44005);
var inst_44007 = matter_cljs_fun.pong.pos.call(null,paddle);
var inst_44008 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_44007);
var inst_44009 = [cljs.core.str("Velocity: "),cljs.core.str(inst_44004)].join('');
var inst_44010 = matter_cljs_fun.util.set_html_BANG_.call(null,dom_id,inst_44009);
var inst_44011 = cljs.core.async.timeout.call(null,(100));
var state_44018__$1 = (function (){var statearr_44022 = state_44018;
(statearr_44022[(8)] = inst_44010);

(statearr_44022[(9)] = inst_44008);

(statearr_44022[(10)] = inst_44006);

return statearr_44022;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44018__$1,(4),inst_44011);
} else {
if((state_val_44019 === (1))){
var state_44018__$1 = state_44018;
var statearr_44023_44032 = state_44018__$1;
(statearr_44023_44032[(2)] = null);

(statearr_44023_44032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__14525__auto__))
;
return ((function (switch__14510__auto__,c__14525__auto__){
return (function() {
var state_machine__14511__auto__ = null;
var state_machine__14511__auto____0 = (function (){
var statearr_44027 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44027[(0)] = state_machine__14511__auto__);

(statearr_44027[(1)] = (1));

return statearr_44027;
});
var state_machine__14511__auto____1 = (function (state_44018){
while(true){
var ret_value__14512__auto__ = (function (){try{while(true){
var result__14513__auto__ = switch__14510__auto__.call(null,state_44018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14513__auto__;
}
break;
}
}catch (e44028){if((e44028 instanceof Object)){
var ex__14514__auto__ = e44028;
var statearr_44029_44033 = state_44018;
(statearr_44029_44033[(5)] = ex__14514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44034 = state_44018;
state_44018 = G__44034;
continue;
} else {
return ret_value__14512__auto__;
}
break;
}
});
state_machine__14511__auto__ = function(state_44018){
switch(arguments.length){
case 0:
return state_machine__14511__auto____0.call(this);
case 1:
return state_machine__14511__auto____1.call(this,state_44018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14511__auto____0;
state_machine__14511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14511__auto____1;
return state_machine__14511__auto__;
})()
;})(switch__14510__auto__,c__14525__auto__))
})();
var state__14527__auto__ = (function (){var statearr_44030 = f__14526__auto__.call(null);
(statearr_44030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14525__auto__);

return statearr_44030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14527__auto__);
});})(c__14525__auto__))
);

return c__14525__auto__;
});
matter_cljs_fun.pong.clear_paddles = (function clear_paddles(){

var seq__44039 = cljs.core.seq.call(null,matter_cljs_fun.util.Composite.allComposites(matter_cljs_fun.pong.world));
var chunk__44040 = null;
var count__44041 = (0);
var i__44042 = (0);
while(true){
if((i__44042 < count__44041)){
var composite = cljs.core._nth.call(null,chunk__44040,i__44042);
matter_cljs_fun.util.Composite.removeComposite(matter_cljs_fun.pong.world,composite);

var G__44043 = seq__44039;
var G__44044 = chunk__44040;
var G__44045 = count__44041;
var G__44046 = (i__44042 + (1));
seq__44039 = G__44043;
chunk__44040 = G__44044;
count__44041 = G__44045;
i__44042 = G__44046;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__44039);
if(temp__4126__auto__){
var seq__44039__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44039__$1)){
var c__13394__auto__ = cljs.core.chunk_first.call(null,seq__44039__$1);
var G__44047 = cljs.core.chunk_rest.call(null,seq__44039__$1);
var G__44048 = c__13394__auto__;
var G__44049 = cljs.core.count.call(null,c__13394__auto__);
var G__44050 = (0);
seq__44039 = G__44047;
chunk__44040 = G__44048;
count__44041 = G__44049;
i__44042 = G__44050;
continue;
} else {
var composite = cljs.core.first.call(null,seq__44039__$1);
matter_cljs_fun.util.Composite.removeComposite(matter_cljs_fun.pong.world,composite);

var G__44051 = cljs.core.next.call(null,seq__44039__$1);
var G__44052 = null;
var G__44053 = (0);
var G__44054 = (0);
seq__44039 = G__44051;
chunk__44040 = G__44052;
count__44041 = G__44053;
i__44042 = G__44054;
continue;
}
} else {
return null;
}
}
break;
}
});
matter_cljs_fun.pong.clear_statics = (function clear_statics(){

var bodies = matter_cljs_fun.util.Composite.allBodies(matter_cljs_fun.pong.world);
var seq__44060 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bodies){
return (function (p1__44055_SHARP_){
return p1__44055_SHARP_.isStatic;
});})(bodies))
,bodies));
var chunk__44061 = null;
var count__44062 = (0);
var i__44063 = (0);
while(true){
if((i__44063 < count__44062)){
var static$ = cljs.core._nth.call(null,chunk__44061,i__44063);
matter_cljs_fun.util.Composite.removeBody(matter_cljs_fun.pong.world,static$);

var G__44064 = seq__44060;
var G__44065 = chunk__44061;
var G__44066 = count__44062;
var G__44067 = (i__44063 + (1));
seq__44060 = G__44064;
chunk__44061 = G__44065;
count__44062 = G__44066;
i__44063 = G__44067;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__44060);
if(temp__4126__auto__){
var seq__44060__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44060__$1)){
var c__13394__auto__ = cljs.core.chunk_first.call(null,seq__44060__$1);
var G__44068 = cljs.core.chunk_rest.call(null,seq__44060__$1);
var G__44069 = c__13394__auto__;
var G__44070 = cljs.core.count.call(null,c__13394__auto__);
var G__44071 = (0);
seq__44060 = G__44068;
chunk__44061 = G__44069;
count__44062 = G__44070;
i__44063 = G__44071;
continue;
} else {
var static$ = cljs.core.first.call(null,seq__44060__$1);
matter_cljs_fun.util.Composite.removeBody(matter_cljs_fun.pong.world,static$);

var G__44072 = cljs.core.next.call(null,seq__44060__$1);
var G__44073 = null;
var G__44074 = (0);
var G__44075 = (0);
seq__44060 = G__44072;
chunk__44061 = G__44073;
count__44062 = G__44074;
i__44063 = G__44075;
continue;
}
} else {
return null;
}
}
break;
}
});
if(typeof matter_cljs_fun.pong.variable_controls_state !== 'undefined'){
} else {
matter_cljs_fun.pong.variable_controls_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"torque","torque",441434595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),(0)], null),new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),(0)], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),(0)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),(0)], null)], null));
}
cljs.core.add_watch.call(null,matter_cljs_fun.pong.variable_controls_state,new cljs.core.Keyword(null,"paddle-updater","paddle-updater",-94631563),(function (key,atom,old_state,new_state){
return null;
}));

var ufv___44093 = schema.utils.use_fn_validation;
var output_schema44077_44094 = schema.core.Any;
var input_schema44078_44095 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker44079_44096 = schema.core.checker.call(null,input_schema44078_44095);
var output_checker44080_44097 = schema.core.checker.call(null,output_schema44077_44094);
/**
* Inputs: [data owner]
*/
matter_cljs_fun.pong.pretty_user_paddle_data = ((function (ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097){
return (function pretty_user_paddle_data(G__44081,G__44082){
var validate__17832__auto__ = ufv___44093.get_cell();
if(cljs.core.truth_(validate__17832__auto__)){
var args__17833__auto___44098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44081,G__44082], null);
var temp__4126__auto___44099 = input_checker44079_44096.call(null,args__17833__auto___44098);
if(cljs.core.truth_(temp__4126__auto___44099)){
var error__17834__auto___44100 = temp__4126__auto___44099;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"pretty-user-paddle-data","pretty-user-paddle-data",-1646544436,null),cljs.core.pr_str.call(null,error__17834__auto___44100)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17834__auto___44100,new cljs.core.Keyword(null,"value","value",305978217),args__17833__auto___44098,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44078_44095,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17835__auto__ = (function (){var data = G__44081;
var owner = G__44082;
while(true){
if(typeof matter_cljs_fun.pong.t44088 !== 'undefined'){
} else {

/**
* @constructor
*/
matter_cljs_fun.pong.t44088 = (function (G__44081,owner,validate__17832__auto__,data,pretty_user_paddle_data,output_schema44077,input_checker44079,G__44082,output_checker44080,input_schema44078,ufv__,meta44089){
this.G__44081 = G__44081;
this.owner = owner;
this.validate__17832__auto__ = validate__17832__auto__;
this.data = data;
this.pretty_user_paddle_data = pretty_user_paddle_data;
this.output_schema44077 = output_schema44077;
this.input_checker44079 = input_checker44079;
this.G__44082 = G__44082;
this.output_checker44080 = output_checker44080;
this.input_schema44078 = input_schema44078;
this.ufv__ = ufv__;
this.meta44089 = meta44089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
matter_cljs_fun.pong.t44088.prototype.om$core$IDisplayName$ = true;

matter_cljs_fun.pong.t44088.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097){
return (function (_){
var self__ = this;
var ___$1 = this;
return "pretty-user-paddle-data";
});})(validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097))
;

matter_cljs_fun.pong.t44088.prototype.om$core$IRender$ = true;

matter_cljs_fun.pong.t44088.prototype.om$core$IRender$render$arity$1 = ((function (validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097){
return (function (_){
var self__ = this;
var ___$1 = this;
var p = matter_cljs_fun.pong.user_paddle;
var data__$1 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),p.velocity.x,new cljs.core.Keyword(null,"angle","angle",1622094254),p.angle,new cljs.core.Keyword(null,"torque","torque",441434595),p.torque,new cljs.core.Keyword(null,"speed","speed",1257663751),p.speed,new cljs.core.Keyword(null,"angular-speed","angular-speed",-174550885),p.angularSpeed,new cljs.core.Keyword(null,"motion","motion",36831425),p.motion,new cljs.core.Keyword(null,"inertia","inertia",-1478343701),p.inertia,new cljs.core.Keyword(null,"inverse-intertia","inverse-intertia",-1578033885),p.inverseInertia], null);
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.map.call(null,((function (p,data__$1,___$1,validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097){
return (function (p__44091){
var vec__44092 = p__44091;
var k = cljs.core.nth.call(null,vec__44092,(0),null);
var v = cljs.core.nth.call(null,vec__44092,(1),null);
return om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.label,[cljs.core.str(k.name),cljs.core.str(": "),cljs.core.str(v.toFixed((2)))].join(''),cljs.core.PersistentVector.EMPTY),cljs.core.PersistentVector.EMPTY);
});})(p,data__$1,___$1,validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097))
,data__$1),cljs.core.PersistentVector.EMPTY);
});})(validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097))
;

matter_cljs_fun.pong.t44088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097){
return (function (_44090){
var self__ = this;
var _44090__$1 = this;
return self__.meta44089;
});})(validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097))
;

matter_cljs_fun.pong.t44088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097){
return (function (_44090,meta44089__$1){
var self__ = this;
var _44090__$1 = this;
return (new matter_cljs_fun.pong.t44088(self__.G__44081,self__.owner,self__.validate__17832__auto__,self__.data,self__.pretty_user_paddle_data,self__.output_schema44077,self__.input_checker44079,self__.G__44082,self__.output_checker44080,self__.input_schema44078,self__.ufv__,meta44089__$1));
});})(validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097))
;

matter_cljs_fun.pong.t44088.cljs$lang$type = true;

matter_cljs_fun.pong.t44088.cljs$lang$ctorStr = "matter-cljs-fun.pong/t44088";

matter_cljs_fun.pong.t44088.cljs$lang$ctorPrWriter = ((function (validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097){
return (function (this__13194__auto__,writer__13195__auto__,opt__13196__auto__){
return cljs.core._write.call(null,writer__13195__auto__,"matter-cljs-fun.pong/t44088");
});})(validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097))
;

matter_cljs_fun.pong.__GT_t44088 = ((function (validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097){
return (function __GT_t44088(G__44081__$1,owner__$1,validate__17832__auto____$1,data__$1,pretty_user_paddle_data__$1,output_schema44077__$1,input_checker44079__$1,G__44082__$1,output_checker44080__$1,input_schema44078__$1,ufv____$1,meta44089){
return (new matter_cljs_fun.pong.t44088(G__44081__$1,owner__$1,validate__17832__auto____$1,data__$1,pretty_user_paddle_data__$1,output_schema44077__$1,input_checker44079__$1,G__44082__$1,output_checker44080__$1,input_schema44078__$1,ufv____$1,meta44089));
});})(validate__17832__auto__,ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097))
;

}

return (new matter_cljs_fun.pong.t44088(G__44081,owner,validate__17832__auto__,data,pretty_user_paddle_data,output_schema44077_44094,input_checker44079_44096,G__44082,output_checker44080_44097,input_schema44078_44095,ufv___44093,null));
break;
}
})();
if(cljs.core.truth_(validate__17832__auto__)){
var temp__4126__auto___44101 = output_checker44080_44097.call(null,o__17835__auto__);
if(cljs.core.truth_(temp__4126__auto___44101)){
var error__17834__auto___44102 = temp__4126__auto___44101;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"pretty-user-paddle-data","pretty-user-paddle-data",-1646544436,null),cljs.core.pr_str.call(null,error__17834__auto___44102)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17834__auto___44102,new cljs.core.Keyword(null,"value","value",305978217),o__17835__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44077_44094,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17835__auto__;
});})(ufv___44093,output_schema44077_44094,input_schema44078_44095,input_checker44079_44096,output_checker44080_44097))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,matter_cljs_fun.pong.pretty_user_paddle_data),schema.core.make_fn_schema.call(null,output_schema44077_44094,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44078_44095], null)));

matter_cljs_fun.pong.__GT_pretty_user_paddle_data = (function() {
var __GT_pretty_user_paddle_data = null;
var __GT_pretty_user_paddle_data__1 = (function (cursor__19649__auto__){
return om.core.build.call(null,matter_cljs_fun.pong.pretty_user_paddle_data,cursor__19649__auto__);
});
var __GT_pretty_user_paddle_data__2 = (function (cursor__19649__auto__,m44076){
return om.core.build.call(null,matter_cljs_fun.pong.pretty_user_paddle_data,cursor__19649__auto__,m44076);
});
__GT_pretty_user_paddle_data = function(cursor__19649__auto__,m44076){
switch(arguments.length){
case 1:
return __GT_pretty_user_paddle_data__1.call(this,cursor__19649__auto__);
case 2:
return __GT_pretty_user_paddle_data__2.call(this,cursor__19649__auto__,m44076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_pretty_user_paddle_data.cljs$core$IFn$_invoke$arity$1 = __GT_pretty_user_paddle_data__1;
__GT_pretty_user_paddle_data.cljs$core$IFn$_invoke$arity$2 = __GT_pretty_user_paddle_data__2;
return __GT_pretty_user_paddle_data;
})()
;
matter_cljs_fun.pong.update_after_render = (function update_after_render(){
return matter_cljs_fun.util.on_tick.call(null,matter_cljs_fun.pong.engine,(function (){
return om.core.root.call(null,matter_cljs_fun.pong.pretty_user_paddle_data,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),matter_cljs_fun.util.by_id.call(null,"user-paddle-data")], null));
}));
});
matter_cljs_fun.pong.update_after_render.call(null);

var ufv___44116 = schema.utils.use_fn_validation;
var output_schema44104_44117 = schema.core.Any;
var input_schema44105_44118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker44106_44119 = schema.core.checker.call(null,input_schema44105_44118);
var output_checker44107_44120 = schema.core.checker.call(null,output_schema44104_44117);
/**
* Inputs: [data owner]
*/
matter_cljs_fun.pong.torque_slider = ((function (ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120){
return (function torque_slider(G__44108,G__44109){
var validate__17832__auto__ = ufv___44116.get_cell();
if(cljs.core.truth_(validate__17832__auto__)){
var args__17833__auto___44121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44108,G__44109], null);
var temp__4126__auto___44122 = input_checker44106_44119.call(null,args__17833__auto___44121);
if(cljs.core.truth_(temp__4126__auto___44122)){
var error__17834__auto___44123 = temp__4126__auto___44122;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"torque-slider","torque-slider",-886843362,null),cljs.core.pr_str.call(null,error__17834__auto___44123)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17834__auto___44123,new cljs.core.Keyword(null,"value","value",305978217),args__17833__auto___44121,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44105_44118,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17835__auto__ = (function (){var data = G__44108;
var owner = G__44109;
while(true){
if(typeof matter_cljs_fun.pong.t44113 !== 'undefined'){
} else {

/**
* @constructor
*/
matter_cljs_fun.pong.t44113 = (function (owner,validate__17832__auto__,data,output_schema44104,input_schema44105,G__44108,input_checker44106,G__44109,ufv__,torque_slider,output_checker44107,meta44114){
this.owner = owner;
this.validate__17832__auto__ = validate__17832__auto__;
this.data = data;
this.output_schema44104 = output_schema44104;
this.input_schema44105 = input_schema44105;
this.G__44108 = G__44108;
this.input_checker44106 = input_checker44106;
this.G__44109 = G__44109;
this.ufv__ = ufv__;
this.torque_slider = torque_slider;
this.output_checker44107 = output_checker44107;
this.meta44114 = meta44114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
matter_cljs_fun.pong.t44113.prototype.om$core$IDisplayName$ = true;

matter_cljs_fun.pong.t44113.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120){
return (function (_){
var self__ = this;
var ___$1 = this;
return "torque-slider";
});})(validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120))
;

matter_cljs_fun.pong.t44113.prototype.om$core$IRender$ = true;

matter_cljs_fun.pong.t44113.prototype.om$core$IRender$render$arity$1 = ((function (validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.label,[cljs.core.str("Torque"),cljs.core.str(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": om_tools.dom.format_opts.call(null,((function (___$1,validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120){
return (function (e){
var v = (e["target"]["value"]);
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"val","val",128701612),v);

return (matter_cljs_fun.pong.user_paddle["torque"] = v);
});})(___$1,validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120))
), "id": "torque-slider", "step": 0.1, "max": (1), "min": (0), "type": "range"})],null)));
});})(validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120))
;

matter_cljs_fun.pong.t44113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120){
return (function (_44115){
var self__ = this;
var _44115__$1 = this;
return self__.meta44114;
});})(validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120))
;

matter_cljs_fun.pong.t44113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120){
return (function (_44115,meta44114__$1){
var self__ = this;
var _44115__$1 = this;
return (new matter_cljs_fun.pong.t44113(self__.owner,self__.validate__17832__auto__,self__.data,self__.output_schema44104,self__.input_schema44105,self__.G__44108,self__.input_checker44106,self__.G__44109,self__.ufv__,self__.torque_slider,self__.output_checker44107,meta44114__$1));
});})(validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120))
;

matter_cljs_fun.pong.t44113.cljs$lang$type = true;

matter_cljs_fun.pong.t44113.cljs$lang$ctorStr = "matter-cljs-fun.pong/t44113";

matter_cljs_fun.pong.t44113.cljs$lang$ctorPrWriter = ((function (validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120){
return (function (this__13194__auto__,writer__13195__auto__,opt__13196__auto__){
return cljs.core._write.call(null,writer__13195__auto__,"matter-cljs-fun.pong/t44113");
});})(validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120))
;

matter_cljs_fun.pong.__GT_t44113 = ((function (validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120){
return (function __GT_t44113(owner__$1,validate__17832__auto____$1,data__$1,output_schema44104__$1,input_schema44105__$1,G__44108__$1,input_checker44106__$1,G__44109__$1,ufv____$1,torque_slider__$1,output_checker44107__$1,meta44114){
return (new matter_cljs_fun.pong.t44113(owner__$1,validate__17832__auto____$1,data__$1,output_schema44104__$1,input_schema44105__$1,G__44108__$1,input_checker44106__$1,G__44109__$1,ufv____$1,torque_slider__$1,output_checker44107__$1,meta44114));
});})(validate__17832__auto__,ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120))
;

}

return (new matter_cljs_fun.pong.t44113(owner,validate__17832__auto__,data,output_schema44104_44117,input_schema44105_44118,G__44108,input_checker44106_44119,G__44109,ufv___44116,torque_slider,output_checker44107_44120,null));
break;
}
})();
if(cljs.core.truth_(validate__17832__auto__)){
var temp__4126__auto___44124 = output_checker44107_44120.call(null,o__17835__auto__);
if(cljs.core.truth_(temp__4126__auto___44124)){
var error__17834__auto___44125 = temp__4126__auto___44124;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"torque-slider","torque-slider",-886843362,null),cljs.core.pr_str.call(null,error__17834__auto___44125)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17834__auto___44125,new cljs.core.Keyword(null,"value","value",305978217),o__17835__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44104_44117,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17835__auto__;
});})(ufv___44116,output_schema44104_44117,input_schema44105_44118,input_checker44106_44119,output_checker44107_44120))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,matter_cljs_fun.pong.torque_slider),schema.core.make_fn_schema.call(null,output_schema44104_44117,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44105_44118], null)));

matter_cljs_fun.pong.__GT_torque_slider = (function() {
var __GT_torque_slider = null;
var __GT_torque_slider__1 = (function (cursor__19649__auto__){
return om.core.build.call(null,matter_cljs_fun.pong.torque_slider,cursor__19649__auto__);
});
var __GT_torque_slider__2 = (function (cursor__19649__auto__,m44103){
return om.core.build.call(null,matter_cljs_fun.pong.torque_slider,cursor__19649__auto__,m44103);
});
__GT_torque_slider = function(cursor__19649__auto__,m44103){
switch(arguments.length){
case 1:
return __GT_torque_slider__1.call(this,cursor__19649__auto__);
case 2:
return __GT_torque_slider__2.call(this,cursor__19649__auto__,m44103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_torque_slider.cljs$core$IFn$_invoke$arity$1 = __GT_torque_slider__1;
__GT_torque_slider.cljs$core$IFn$_invoke$arity$2 = __GT_torque_slider__2;
return __GT_torque_slider;
})()
;

var ufv___44139 = schema.utils.use_fn_validation;
var output_schema44127_44140 = schema.core.Any;
var input_schema44128_44141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker44129_44142 = schema.core.checker.call(null,input_schema44128_44141);
var output_checker44130_44143 = schema.core.checker.call(null,output_schema44127_44140);
/**
* Inputs: [data owner]
*/
matter_cljs_fun.pong.variable_controls = ((function (ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143){
return (function variable_controls(G__44131,G__44132){
var validate__17832__auto__ = ufv___44139.get_cell();
if(cljs.core.truth_(validate__17832__auto__)){
var args__17833__auto___44144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44131,G__44132], null);
var temp__4126__auto___44145 = input_checker44129_44142.call(null,args__17833__auto___44144);
if(cljs.core.truth_(temp__4126__auto___44145)){
var error__17834__auto___44146 = temp__4126__auto___44145;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"variable-controls","variable-controls",394077354,null),cljs.core.pr_str.call(null,error__17834__auto___44146)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17834__auto___44146,new cljs.core.Keyword(null,"value","value",305978217),args__17833__auto___44144,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44128_44141,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17835__auto__ = (function (){var data = G__44131;
var owner = G__44132;
while(true){
if(typeof matter_cljs_fun.pong.t44136 !== 'undefined'){
} else {

/**
* @constructor
*/
matter_cljs_fun.pong.t44136 = (function (output_schema44127,owner,output_checker44130,validate__17832__auto__,data,G__44131,variable_controls,input_schema44128,G__44132,ufv__,input_checker44129,meta44137){
this.output_schema44127 = output_schema44127;
this.owner = owner;
this.output_checker44130 = output_checker44130;
this.validate__17832__auto__ = validate__17832__auto__;
this.data = data;
this.G__44131 = G__44131;
this.variable_controls = variable_controls;
this.input_schema44128 = input_schema44128;
this.G__44132 = G__44132;
this.ufv__ = ufv__;
this.input_checker44129 = input_checker44129;
this.meta44137 = meta44137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
matter_cljs_fun.pong.t44136.prototype.om$core$IDisplayName$ = true;

matter_cljs_fun.pong.t44136.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143){
return (function (_){
var self__ = this;
var ___$1 = this;
return "variable-controls";
});})(validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143))
;

matter_cljs_fun.pong.t44136.prototype.om$core$IRender$ = true;

matter_cljs_fun.pong.t44136.prototype.om$core$IRender$render$arity$1 = ((function (validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,matter_cljs_fun.pong.torque_slider,new cljs.core.Keyword(null,"torque","torque",441434595).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.PersistentVector.EMPTY);
});})(validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143))
;

matter_cljs_fun.pong.t44136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143){
return (function (_44138){
var self__ = this;
var _44138__$1 = this;
return self__.meta44137;
});})(validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143))
;

matter_cljs_fun.pong.t44136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143){
return (function (_44138,meta44137__$1){
var self__ = this;
var _44138__$1 = this;
return (new matter_cljs_fun.pong.t44136(self__.output_schema44127,self__.owner,self__.output_checker44130,self__.validate__17832__auto__,self__.data,self__.G__44131,self__.variable_controls,self__.input_schema44128,self__.G__44132,self__.ufv__,self__.input_checker44129,meta44137__$1));
});})(validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143))
;

matter_cljs_fun.pong.t44136.cljs$lang$type = true;

matter_cljs_fun.pong.t44136.cljs$lang$ctorStr = "matter-cljs-fun.pong/t44136";

matter_cljs_fun.pong.t44136.cljs$lang$ctorPrWriter = ((function (validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143){
return (function (this__13194__auto__,writer__13195__auto__,opt__13196__auto__){
return cljs.core._write.call(null,writer__13195__auto__,"matter-cljs-fun.pong/t44136");
});})(validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143))
;

matter_cljs_fun.pong.__GT_t44136 = ((function (validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143){
return (function __GT_t44136(output_schema44127__$1,owner__$1,output_checker44130__$1,validate__17832__auto____$1,data__$1,G__44131__$1,variable_controls__$1,input_schema44128__$1,G__44132__$1,ufv____$1,input_checker44129__$1,meta44137){
return (new matter_cljs_fun.pong.t44136(output_schema44127__$1,owner__$1,output_checker44130__$1,validate__17832__auto____$1,data__$1,G__44131__$1,variable_controls__$1,input_schema44128__$1,G__44132__$1,ufv____$1,input_checker44129__$1,meta44137));
});})(validate__17832__auto__,ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143))
;

}

return (new matter_cljs_fun.pong.t44136(output_schema44127_44140,owner,output_checker44130_44143,validate__17832__auto__,data,G__44131,variable_controls,input_schema44128_44141,G__44132,ufv___44139,input_checker44129_44142,null));
break;
}
})();
if(cljs.core.truth_(validate__17832__auto__)){
var temp__4126__auto___44147 = output_checker44130_44143.call(null,o__17835__auto__);
if(cljs.core.truth_(temp__4126__auto___44147)){
var error__17834__auto___44148 = temp__4126__auto___44147;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"variable-controls","variable-controls",394077354,null),cljs.core.pr_str.call(null,error__17834__auto___44148)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17834__auto___44148,new cljs.core.Keyword(null,"value","value",305978217),o__17835__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44127_44140,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17835__auto__;
});})(ufv___44139,output_schema44127_44140,input_schema44128_44141,input_checker44129_44142,output_checker44130_44143))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,matter_cljs_fun.pong.variable_controls),schema.core.make_fn_schema.call(null,output_schema44127_44140,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44128_44141], null)));

matter_cljs_fun.pong.__GT_variable_controls = (function() {
var __GT_variable_controls = null;
var __GT_variable_controls__1 = (function (cursor__19649__auto__){
return om.core.build.call(null,matter_cljs_fun.pong.variable_controls,cursor__19649__auto__);
});
var __GT_variable_controls__2 = (function (cursor__19649__auto__,m44126){
return om.core.build.call(null,matter_cljs_fun.pong.variable_controls,cursor__19649__auto__,m44126);
});
__GT_variable_controls = function(cursor__19649__auto__,m44126){
switch(arguments.length){
case 1:
return __GT_variable_controls__1.call(this,cursor__19649__auto__);
case 2:
return __GT_variable_controls__2.call(this,cursor__19649__auto__,m44126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_variable_controls.cljs$core$IFn$_invoke$arity$1 = __GT_variable_controls__1;
__GT_variable_controls.cljs$core$IFn$_invoke$arity$2 = __GT_variable_controls__2;
return __GT_variable_controls;
})()
;
matter_cljs_fun.pong.render_variable_controls = (function render_variable_controls(){
om.core.root.call(null,matter_cljs_fun.pong.variable_controls,matter_cljs_fun.pong.variable_controls_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),matter_cljs_fun.util.by_id.call(null,"variable-tools-container")], null));

return om.core.root.call(null,matter_cljs_fun.pong.pretty_user_paddle_data,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),matter_cljs_fun.util.by_id.call(null,"user-paddle-data")], null));
});
matter_cljs_fun.pong.initialize = (function initialize(){
matter_cljs_fun.pong.build_world.call(null);

matter_cljs_fun.pong.render_variable_controls.call(null);

matter_cljs_fun.pong.accept_user_input_BANG_.call(null);

return matter_cljs_fun.util.Engine.run(matter_cljs_fun.pong.engine);
});
document.addEventListener("DOMContentLoaded",matter_cljs_fun.pong.initialize);
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
matter_cljs_fun.pong.clear_statics.call(null);

matter_cljs_fun.pong.render_variable_controls.call(null);

matter_cljs_fun.pong.build_world.call(null);

matter_cljs_fun.util.Engine.render(matter_cljs_fun.pong.engine);

return cljs.core.println.call(null,"other stuff");
})], null));

//# sourceMappingURL=pong.js.map?rel=1422156823888