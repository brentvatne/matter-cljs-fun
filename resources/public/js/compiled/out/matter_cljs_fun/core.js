// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('matter_cljs_fun.core')) {
goog.provide('matter_cljs_fun.core');
}
goog.require('cljs.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
matter_cljs_fun.core.Matter = window.Matter;
matter_cljs_fun.core.Engine = matter_cljs_fun.core.Matter.Engine;
matter_cljs_fun.core.World = matter_cljs_fun.core.Matter.World;
matter_cljs_fun.core.Body = matter_cljs_fun.core.Matter.Body;
matter_cljs_fun.core.Bodies = matter_cljs_fun.core.Matter.Bodies;
matter_cljs_fun.core.Constraint = matter_cljs_fun.core.Matter.Constraint;
matter_cljs_fun.core.Composites = matter_cljs_fun.core.Matter.Composites;
matter_cljs_fun.core.Composite = matter_cljs_fun.core.Matter.Composite;
matter_cljs_fun.core.scene_width = (595);
matter_cljs_fun.core.scene_height = (620);
matter_cljs_fun.core.pin_cols = (15);
matter_cljs_fun.core.pin_rows = (16);
matter_cljs_fun.core.start_x = (1);
matter_cljs_fun.core.start_y = (37);
matter_cljs_fun.core.pin_radius = (5);
matter_cljs_fun.core.row_space = (32);
matter_cljs_fun.core.col_space = (32);
matter_cljs_fun.core.ground_width = (2);
matter_cljs_fun.core.left_wall_width = (2);
matter_cljs_fun.core.right_wall_width = (2);
matter_cljs_fun.core.ball_radius = (10);
matter_cljs_fun.core.engine_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"showAngleIndicator","showAngleIndicator",-1460751489),false,new cljs.core.Keyword(null,"wireframes","wireframes",-1841146676),false,new cljs.core.Keyword(null,"width","width",-384071477),matter_cljs_fun.core.scene_width,new cljs.core.Keyword(null,"height","height",1025178622),matter_cljs_fun.core.scene_height], null)], null)], null);
if(typeof matter_cljs_fun.core.engine !== 'undefined'){
} else {
matter_cljs_fun.core.engine = matter_cljs_fun.core.Engine.create(document.getElementById("canvas-container"),cljs.core.clj__GT_js.call(null,matter_cljs_fun.core.engine_options));
}
if(typeof matter_cljs_fun.core.world !== 'undefined'){
} else {
matter_cljs_fun.core.world = matter_cljs_fun.core.engine.world;
}
matter_cljs_fun.core.position__GT_pin_black = (function position__GT_pin_black(x,y,col,row){
return matter_cljs_fun.core.Bodies.circle(x,y,matter_cljs_fun.core.pin_radius,{"render": {"fillStyle": "#000000"}, "isStatic": true});
});
matter_cljs_fun.core.position__GT_pin_grey = (function position__GT_pin_grey(x,y,col,row){
return matter_cljs_fun.core.Bodies.circle(x,y,matter_cljs_fun.core.pin_radius,{"render": {"fillStyle": "#cccccc"}, "isStatic": true});
});
matter_cljs_fun.core.create_pin_stack_rows = (function create_pin_stack_rows(){
return matter_cljs_fun.core.Composites.stack(matter_cljs_fun.core.start_x,matter_cljs_fun.core.start_y,matter_cljs_fun.core.pin_cols,(matter_cljs_fun.core.pin_rows / (2)),matter_cljs_fun.core.row_space,((2) * matter_cljs_fun.core.col_space),matter_cljs_fun.core.position__GT_pin_black);
});
matter_cljs_fun.core.create_pin_stack_offset_rows = (function create_pin_stack_offset_rows(){
return matter_cljs_fun.core.Composites.stack((matter_cljs_fun.core.start_x + (matter_cljs_fun.core.row_space / 1.25)),((matter_cljs_fun.core.col_space + (matter_cljs_fun.core.pin_radius / (1))) + matter_cljs_fun.core.start_y),matter_cljs_fun.core.pin_cols,(matter_cljs_fun.core.pin_rows / (2)),matter_cljs_fun.core.row_space,((2) * matter_cljs_fun.core.col_space),matter_cljs_fun.core.position__GT_pin_grey);
});
matter_cljs_fun.core.add_ball = (function add_ball(x){
var new_ball = matter_cljs_fun.core.Bodies.circle(x,(0),matter_cljs_fun.core.ball_radius,{"frictionAir": 0.02, "density": (1)});
return matter_cljs_fun.core.World.add(matter_cljs_fun.core.world,[new_ball]);
});
matter_cljs_fun.core.add_random_ball = (function add_random_ball(){
return matter_cljs_fun.core.add_ball.call(null,(matter_cljs_fun.core.scene_width * Math.random()));
});
matter_cljs_fun.core.ground = matter_cljs_fun.core.Bodies.rectangle((matter_cljs_fun.core.scene_width / (2)),matter_cljs_fun.core.scene_height,matter_cljs_fun.core.scene_width,matter_cljs_fun.core.ground_width,{"isStatic": true});
matter_cljs_fun.core.left_wall = matter_cljs_fun.core.Bodies.rectangle((0),(matter_cljs_fun.core.scene_height / (2)),matter_cljs_fun.core.left_wall_width,matter_cljs_fun.core.scene_height,{"isStatic": true});
matter_cljs_fun.core.right_wall = matter_cljs_fun.core.Bodies.rectangle(matter_cljs_fun.core.scene_width,(matter_cljs_fun.core.scene_height / (2)),matter_cljs_fun.core.right_wall_width,matter_cljs_fun.core.scene_height,{"isStatic": true});
matter_cljs_fun.core.clear_composites = (function clear_composites(){

var seq__15006 = cljs.core.seq.call(null,matter_cljs_fun.core.Composite.allComposites(matter_cljs_fun.core.world));
var chunk__15007 = null;
var count__15008 = (0);
var i__15009 = (0);
while(true){
if((i__15009 < count__15008)){
var composite = cljs.core._nth.call(null,chunk__15007,i__15009);
matter_cljs_fun.core.Composite.removeComposite(matter_cljs_fun.core.world,composite);

var G__15010 = seq__15006;
var G__15011 = chunk__15007;
var G__15012 = count__15008;
var G__15013 = (i__15009 + (1));
seq__15006 = G__15010;
chunk__15007 = G__15011;
count__15008 = G__15012;
i__15009 = G__15013;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15006);
if(temp__4126__auto__){
var seq__15006__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15006__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__15006__$1);
var G__15014 = cljs.core.chunk_rest.call(null,seq__15006__$1);
var G__15015 = c__12974__auto__;
var G__15016 = cljs.core.count.call(null,c__12974__auto__);
var G__15017 = (0);
seq__15006 = G__15014;
chunk__15007 = G__15015;
count__15008 = G__15016;
i__15009 = G__15017;
continue;
} else {
var composite = cljs.core.first.call(null,seq__15006__$1);
matter_cljs_fun.core.Composite.removeComposite(matter_cljs_fun.core.world,composite);

var G__15018 = cljs.core.next.call(null,seq__15006__$1);
var G__15019 = null;
var G__15020 = (0);
var G__15021 = (0);
seq__15006 = G__15018;
chunk__15007 = G__15019;
count__15008 = G__15020;
i__15009 = G__15021;
continue;
}
} else {
return null;
}
}
break;
}
});
matter_cljs_fun.core.clear_statics = (function clear_statics(){

var bodies = matter_cljs_fun.core.Composite.allBodies(matter_cljs_fun.core.world);
var seq__15027 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bodies){
return (function (p1__15022_SHARP_){
return p1__15022_SHARP_.isStatic;
});})(bodies))
,bodies));
var chunk__15028 = null;
var count__15029 = (0);
var i__15030 = (0);
while(true){
if((i__15030 < count__15029)){
var static$ = cljs.core._nth.call(null,chunk__15028,i__15030);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,static$);

var G__15031 = seq__15027;
var G__15032 = chunk__15028;
var G__15033 = count__15029;
var G__15034 = (i__15030 + (1));
seq__15027 = G__15031;
chunk__15028 = G__15032;
count__15029 = G__15033;
i__15030 = G__15034;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15027);
if(temp__4126__auto__){
var seq__15027__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15027__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__15027__$1);
var G__15035 = cljs.core.chunk_rest.call(null,seq__15027__$1);
var G__15036 = c__12974__auto__;
var G__15037 = cljs.core.count.call(null,c__12974__auto__);
var G__15038 = (0);
seq__15027 = G__15035;
chunk__15028 = G__15036;
count__15029 = G__15037;
i__15030 = G__15038;
continue;
} else {
var static$ = cljs.core.first.call(null,seq__15027__$1);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,static$);

var G__15039 = cljs.core.next.call(null,seq__15027__$1);
var G__15040 = null;
var G__15041 = (0);
var G__15042 = (0);
seq__15027 = G__15039;
chunk__15028 = G__15040;
count__15029 = G__15041;
i__15030 = G__15042;
continue;
}
} else {
return null;
}
}
break;
}
});
matter_cljs_fun.core.clear_dynamics = (function clear_dynamics(){

var bodies = matter_cljs_fun.core.Composite.allBodies(matter_cljs_fun.core.world);
var seq__15048 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bodies){
return (function (p1__15043_SHARP_){
return cljs.core.not.call(null,p1__15043_SHARP_.isStatic);
});})(bodies))
,bodies));
var chunk__15049 = null;
var count__15050 = (0);
var i__15051 = (0);
while(true){
if((i__15051 < count__15050)){
var dynamic = cljs.core._nth.call(null,chunk__15049,i__15051);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,dynamic);

var G__15052 = seq__15048;
var G__15053 = chunk__15049;
var G__15054 = count__15050;
var G__15055 = (i__15051 + (1));
seq__15048 = G__15052;
chunk__15049 = G__15053;
count__15050 = G__15054;
i__15051 = G__15055;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15048);
if(temp__4126__auto__){
var seq__15048__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15048__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__15048__$1);
var G__15056 = cljs.core.chunk_rest.call(null,seq__15048__$1);
var G__15057 = c__12974__auto__;
var G__15058 = cljs.core.count.call(null,c__12974__auto__);
var G__15059 = (0);
seq__15048 = G__15056;
chunk__15049 = G__15057;
count__15050 = G__15058;
i__15051 = G__15059;
continue;
} else {
var dynamic = cljs.core.first.call(null,seq__15048__$1);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,dynamic);

var G__15060 = cljs.core.next.call(null,seq__15048__$1);
var G__15061 = null;
var G__15062 = (0);
var G__15063 = (0);
seq__15048 = G__15060;
chunk__15049 = G__15061;
count__15050 = G__15062;
i__15051 = G__15063;
continue;
}
} else {
return null;
}
}
break;
}
});
matter_cljs_fun.core.create_statics_and_composites = (function create_statics_and_composites(){

var pin_stack = matter_cljs_fun.core.create_pin_stack_rows.call(null);
var pin_stack_offset = matter_cljs_fun.core.create_pin_stack_offset_rows.call(null);
var statics = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pin_stack,pin_stack_offset,matter_cljs_fun.core.ground,matter_cljs_fun.core.left_wall,matter_cljs_fun.core.right_wall], null);
return matter_cljs_fun.core.World.add(matter_cljs_fun.core.world,cljs.core.clj__GT_js.call(null,statics));
});
matter_cljs_fun.core.add_event_listener = (function add_event_listener(event,id,fun){
return document.getElementById(id).addEventListener(event,fun);
});
matter_cljs_fun.core.on_click = cljs.core.partial.call(null,matter_cljs_fun.core.add_event_listener,"click");
matter_cljs_fun.core.initialize = (function initialize(){

matter_cljs_fun.core.add_random_ball.call(null);

matter_cljs_fun.core.create_statics_and_composites.call(null);

matter_cljs_fun.core.Engine.run(matter_cljs_fun.core.engine);

matter_cljs_fun.core.on_click.call(null,"add-ball",matter_cljs_fun.core.add_random_ball);

matter_cljs_fun.core.on_click.call(null,"make-it-rain",(function (e){
var seq__15068 = cljs.core.seq.call(null,cljs.core.range.call(null,(100)));
var chunk__15069 = null;
var count__15070 = (0);
var i__15071 = (0);
while(true){
if((i__15071 < count__15070)){
var x = cljs.core._nth.call(null,chunk__15069,i__15071);
matter_cljs_fun.core.add_random_ball.call(null);

var G__15072 = seq__15068;
var G__15073 = chunk__15069;
var G__15074 = count__15070;
var G__15075 = (i__15071 + (1));
seq__15068 = G__15072;
chunk__15069 = G__15073;
count__15070 = G__15074;
i__15071 = G__15075;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15068);
if(temp__4126__auto__){
var seq__15068__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15068__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__15068__$1);
var G__15076 = cljs.core.chunk_rest.call(null,seq__15068__$1);
var G__15077 = c__12974__auto__;
var G__15078 = cljs.core.count.call(null,c__12974__auto__);
var G__15079 = (0);
seq__15068 = G__15076;
chunk__15069 = G__15077;
count__15070 = G__15078;
i__15071 = G__15079;
continue;
} else {
var x = cljs.core.first.call(null,seq__15068__$1);
matter_cljs_fun.core.add_random_ball.call(null);

var G__15080 = cljs.core.next.call(null,seq__15068__$1);
var G__15081 = null;
var G__15082 = (0);
var G__15083 = (0);
seq__15068 = G__15080;
chunk__15069 = G__15081;
count__15070 = G__15082;
i__15071 = G__15083;
continue;
}
} else {
return null;
}
}
break;
}
}));

return matter_cljs_fun.core.on_click.call(null,"clear-balls",matter_cljs_fun.core.clear_dynamics);
});
document.addEventListener("DOMContentLoaded",matter_cljs_fun.core.initialize);
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
matter_cljs_fun.core.Engine.render(matter_cljs_fun.core.engine);

matter_cljs_fun.core.clear_composites.call(null);

matter_cljs_fun.core.clear_statics.call(null);

matter_cljs_fun.core.create_statics_and_composites.call(null);

return matter_cljs_fun.core.add_random_ball.call(null);
})], null));

//# sourceMappingURL=core.js.map?rel=1421968768010