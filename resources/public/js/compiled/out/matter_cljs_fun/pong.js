// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('matter_cljs_fun.pong')) {
goog.provide('matter_cljs_fun.pong');
}
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('figwheel.client');
goog.require('goog.events');
goog.require('matter_cljs_fun.util');
goog.require('cljs.core.async');
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
matter_cljs_fun.pong.apply_force = (function apply_force(body,strength){
matter_cljs_fun.util.Body.applyForce(body,{"y": (0), "x": (0)},{"y": (0), "x": strength});

return (body["torque"] = (0));
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
matter_cljs_fun.pong.brake_force = (function brake_force(paddle){
var dir = matter_cljs_fun.pong.current_direction.call(null,paddle);
var v = matter_cljs_fun.pong.velocity_x.call(null,paddle);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),dir)){
return -0.004;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),dir)){
return 0.004;
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
console.log(paddle);

return matter_cljs_fun.pong.apply_force.call(null,paddle,f);
});
matter_cljs_fun.pong.move_paddle_BANG_ = (function move_paddle_BANG_(paddle,direction){
var dir = direction.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),(-1),new cljs.core.Keyword(null,"right","right",-452581833),(1)], null));
var current_dir = matter_cljs_fun.pong.current_direction.call(null,paddle);
var x = matter_cljs_fun.pong.pos_x.call(null,paddle);
var x_offset = ((3) * dir);
if(((matter_cljs_fun.pong.velocity_x.call(null,paddle) < 0.6)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),direction))){
matter_cljs_fun.pong.apply_force.call(null,paddle,0.03);
} else {
}

if(((matter_cljs_fun.pong.velocity_x.call(null,paddle) > -0.6)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),direction))){
matter_cljs_fun.pong.apply_force.call(null,paddle,-0.03);
} else {
}

console.log(matter_cljs_fun.pong.current_direction);

console.log(direction);

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
return (function (state_24877){
var state_val_24878 = (state_24877[(1)]);
if((state_val_24878 === (7))){
var inst_24872 = (state_24877[(2)]);
var state_24877__$1 = (function (){var statearr_24879 = state_24877;
(statearr_24879[(7)] = inst_24872);

return statearr_24879;
})();
var statearr_24880_24895 = state_24877__$1;
(statearr_24880_24895[(2)] = null);

(statearr_24880_24895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (6))){
var inst_24865 = (state_24877[(8)]);
var inst_24870 = matter_cljs_fun.pong.move_paddle_BANG_.call(null,matter_cljs_fun.pong.user_paddle,inst_24865);
var state_24877__$1 = state_24877;
var statearr_24881_24896 = state_24877__$1;
(statearr_24881_24896[(2)] = inst_24870);

(statearr_24881_24896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (5))){
var inst_24868 = matter_cljs_fun.pong.slam_brakes_BANG_.call(null,matter_cljs_fun.pong.user_paddle);
var state_24877__$1 = state_24877;
var statearr_24882_24897 = state_24877__$1;
(statearr_24882_24897[(2)] = inst_24868);

(statearr_24882_24897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (4))){
var inst_24865 = (state_24877[(8)]);
var inst_24865__$1 = (state_24877[(2)]);
var inst_24866 = cljs.core._EQ_.call(null,inst_24865__$1,new cljs.core.Keyword(null,"space","space",348133475));
var state_24877__$1 = (function (){var statearr_24883 = state_24877;
(statearr_24883[(8)] = inst_24865__$1);

return statearr_24883;
})();
if(inst_24866){
var statearr_24884_24898 = state_24877__$1;
(statearr_24884_24898[(1)] = (5));

} else {
var statearr_24885_24899 = state_24877__$1;
(statearr_24885_24899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (3))){
var inst_24875 = (state_24877[(2)]);
var state_24877__$1 = state_24877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24877__$1,inst_24875);
} else {
if((state_val_24878 === (2))){
var inst_24861 = matter_cljs_fun.pong.velocity_x.call(null,matter_cljs_fun.pong.user_paddle);
var inst_24862 = console.log(inst_24861);
var inst_24863 = matter_cljs_fun.util.keys_chan.call(null);
var state_24877__$1 = (function (){var statearr_24886 = state_24877;
(statearr_24886[(9)] = inst_24862);

return statearr_24886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24877__$1,(4),inst_24863);
} else {
if((state_val_24878 === (1))){
var state_24877__$1 = state_24877;
var statearr_24887_24900 = state_24877__$1;
(statearr_24887_24900[(2)] = null);

(statearr_24887_24900[(1)] = (2));


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
var statearr_24891 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24891[(0)] = state_machine__14511__auto__);

(statearr_24891[(1)] = (1));

return statearr_24891;
});
var state_machine__14511__auto____1 = (function (state_24877){
while(true){
var ret_value__14512__auto__ = (function (){try{while(true){
var result__14513__auto__ = switch__14510__auto__.call(null,state_24877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14513__auto__;
}
break;
}
}catch (e24892){if((e24892 instanceof Object)){
var ex__14514__auto__ = e24892;
var statearr_24893_24901 = state_24877;
(statearr_24893_24901[(5)] = ex__14514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24902 = state_24877;
state_24877 = G__24902;
continue;
} else {
return ret_value__14512__auto__;
}
break;
}
});
state_machine__14511__auto__ = function(state_24877){
switch(arguments.length){
case 0:
return state_machine__14511__auto____0.call(this);
case 1:
return state_machine__14511__auto____1.call(this,state_24877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14511__auto____0;
state_machine__14511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14511__auto____1;
return state_machine__14511__auto__;
})()
;})(switch__14510__auto__,c__14525__auto__))
})();
var state__14527__auto__ = (function (){var statearr_24894 = f__14526__auto__.call(null);
(statearr_24894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14525__auto__);

return statearr_24894;
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
matter_cljs_fun.pong.initialize = (function initialize(){
matter_cljs_fun.pong.build_world.call(null);

matter_cljs_fun.pong.accept_user_input_BANG_.call(null);

return matter_cljs_fun.util.Engine.run(matter_cljs_fun.pong.engine);
});
document.addEventListener("DOMContentLoaded",matter_cljs_fun.pong.initialize);
matter_cljs_fun.pong.clear_paddles = (function clear_paddles(){

var seq__24907 = cljs.core.seq.call(null,matter_cljs_fun.util.Composite.allComposites(matter_cljs_fun.pong.world));
var chunk__24908 = null;
var count__24909 = (0);
var i__24910 = (0);
while(true){
if((i__24910 < count__24909)){
var composite = cljs.core._nth.call(null,chunk__24908,i__24910);
matter_cljs_fun.util.Composite.removeComposite(matter_cljs_fun.pong.world,composite);

var G__24911 = seq__24907;
var G__24912 = chunk__24908;
var G__24913 = count__24909;
var G__24914 = (i__24910 + (1));
seq__24907 = G__24911;
chunk__24908 = G__24912;
count__24909 = G__24913;
i__24910 = G__24914;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24907);
if(temp__4126__auto__){
var seq__24907__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24907__$1)){
var c__13394__auto__ = cljs.core.chunk_first.call(null,seq__24907__$1);
var G__24915 = cljs.core.chunk_rest.call(null,seq__24907__$1);
var G__24916 = c__13394__auto__;
var G__24917 = cljs.core.count.call(null,c__13394__auto__);
var G__24918 = (0);
seq__24907 = G__24915;
chunk__24908 = G__24916;
count__24909 = G__24917;
i__24910 = G__24918;
continue;
} else {
var composite = cljs.core.first.call(null,seq__24907__$1);
matter_cljs_fun.util.Composite.removeComposite(matter_cljs_fun.pong.world,composite);

var G__24919 = cljs.core.next.call(null,seq__24907__$1);
var G__24920 = null;
var G__24921 = (0);
var G__24922 = (0);
seq__24907 = G__24919;
chunk__24908 = G__24920;
count__24909 = G__24921;
i__24910 = G__24922;
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
var seq__24928 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bodies){
return (function (p1__24923_SHARP_){
return p1__24923_SHARP_.isStatic;
});})(bodies))
,bodies));
var chunk__24929 = null;
var count__24930 = (0);
var i__24931 = (0);
while(true){
if((i__24931 < count__24930)){
var static$ = cljs.core._nth.call(null,chunk__24929,i__24931);
matter_cljs_fun.util.Composite.removeBody(matter_cljs_fun.pong.world,static$);

var G__24932 = seq__24928;
var G__24933 = chunk__24929;
var G__24934 = count__24930;
var G__24935 = (i__24931 + (1));
seq__24928 = G__24932;
chunk__24929 = G__24933;
count__24930 = G__24934;
i__24931 = G__24935;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24928);
if(temp__4126__auto__){
var seq__24928__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24928__$1)){
var c__13394__auto__ = cljs.core.chunk_first.call(null,seq__24928__$1);
var G__24936 = cljs.core.chunk_rest.call(null,seq__24928__$1);
var G__24937 = c__13394__auto__;
var G__24938 = cljs.core.count.call(null,c__13394__auto__);
var G__24939 = (0);
seq__24928 = G__24936;
chunk__24929 = G__24937;
count__24930 = G__24938;
i__24931 = G__24939;
continue;
} else {
var static$ = cljs.core.first.call(null,seq__24928__$1);
matter_cljs_fun.util.Composite.removeBody(matter_cljs_fun.pong.world,static$);

var G__24940 = cljs.core.next.call(null,seq__24928__$1);
var G__24941 = null;
var G__24942 = (0);
var G__24943 = (0);
seq__24928 = G__24940;
chunk__24929 = G__24941;
count__24930 = G__24942;
i__24931 = G__24943;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
matter_cljs_fun.pong.clear_statics.call(null);

matter_cljs_fun.pong.build_world.call(null);

matter_cljs_fun.util.Engine.render(matter_cljs_fun.pong.engine);

return cljs.core.println.call(null,"other stuff");
})], null));

//# sourceMappingURL=pong.js.map?rel=1422135074155