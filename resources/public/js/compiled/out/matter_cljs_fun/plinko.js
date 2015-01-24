// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('matter_cljs_fun.plinko')) {
goog.provide('matter_cljs_fun.plinko');
}
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('matter_cljs_fun.util');
cljs.core.enable_console_print_BANG_.call(null);
matter_cljs_fun.plinko.scene_width = (595);
matter_cljs_fun.plinko.scene_height = (620);
matter_cljs_fun.plinko.pin_cols = (20);
matter_cljs_fun.plinko.pin_rows = (16);
matter_cljs_fun.plinko.start_x = (1);
matter_cljs_fun.plinko.start_y = (37);
matter_cljs_fun.plinko.pin_radius = (5);
matter_cljs_fun.plinko.row_space = (20);
matter_cljs_fun.plinko.col_space = (32);
matter_cljs_fun.plinko.ground_width = (2);
matter_cljs_fun.plinko.left_wall_width = (2);
matter_cljs_fun.plinko.right_wall_width = (2);
matter_cljs_fun.plinko.ball_radius = (10);
matter_cljs_fun.plinko.engine_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"showAngleIndicator","showAngleIndicator",-1460751489),false,new cljs.core.Keyword(null,"wireframes","wireframes",-1841146676),false,new cljs.core.Keyword(null,"width","width",-384071477),matter_cljs_fun.plinko.scene_width,new cljs.core.Keyword(null,"height","height",1025178622),matter_cljs_fun.plinko.scene_height], null)], null)], null);
if(typeof matter_cljs_fun.plinko.engine !== 'undefined'){
} else {
matter_cljs_fun.plinko.engine = matter_cljs_fun.util.Engine.create(document.getElementById("canvas-container"),cljs.core.clj__GT_js.call(null,matter_cljs_fun.plinko.engine_options));
}
if(typeof matter_cljs_fun.plinko.world !== 'undefined'){
} else {
matter_cljs_fun.plinko.world = matter_cljs_fun.plinko.engine.world;
}
matter_cljs_fun.plinko.position__GT_pin_black = (function position__GT_pin_black(x,y,col,row){
return matter_cljs_fun.util.Bodies.circle(x,y,matter_cljs_fun.plinko.pin_radius,{"render": {"fillStyle": "#000000"}, "isStatic": true});
});
matter_cljs_fun.plinko.position__GT_pin_grey = (function position__GT_pin_grey(x,y,col,row){
return matter_cljs_fun.util.Bodies.circle(x,y,matter_cljs_fun.plinko.pin_radius,{"render": {"fillStyle": "#cccccc"}, "isStatic": true});
});
matter_cljs_fun.plinko.create_pin_stack_rows = (function create_pin_stack_rows(){
return matter_cljs_fun.util.Composites.stack(matter_cljs_fun.plinko.start_x,matter_cljs_fun.plinko.start_y,matter_cljs_fun.plinko.pin_cols,(matter_cljs_fun.plinko.pin_rows / (2)),matter_cljs_fun.plinko.row_space,((2) * matter_cljs_fun.plinko.col_space),matter_cljs_fun.plinko.position__GT_pin_black);
});
matter_cljs_fun.plinko.create_pin_stack_offset_rows = (function create_pin_stack_offset_rows(){
return matter_cljs_fun.util.Composites.stack((matter_cljs_fun.plinko.start_x + (matter_cljs_fun.plinko.row_space / 1.25)),((matter_cljs_fun.plinko.col_space + (matter_cljs_fun.plinko.pin_radius / (1))) + matter_cljs_fun.plinko.start_y),matter_cljs_fun.plinko.pin_cols,(matter_cljs_fun.plinko.pin_rows / (2)),matter_cljs_fun.plinko.row_space,((2) * matter_cljs_fun.plinko.col_space),matter_cljs_fun.plinko.position__GT_pin_grey);
});
matter_cljs_fun.plinko.add_ball = (function add_ball(x){
var new_ball = matter_cljs_fun.util.Bodies.circle(x,(0),matter_cljs_fun.plinko.ball_radius,{"frictionAir": 0.02, "density": (1)});
return matter_cljs_fun.util.World.add(matter_cljs_fun.plinko.world,[new_ball]);
});
matter_cljs_fun.plinko.add_random_ball = (function add_random_ball(){
return matter_cljs_fun.plinko.add_ball.call(null,(matter_cljs_fun.plinko.scene_width * Math.random()));
});
matter_cljs_fun.plinko.ground = matter_cljs_fun.util.Bodies.rectangle((matter_cljs_fun.plinko.scene_width / (2)),matter_cljs_fun.plinko.scene_height,matter_cljs_fun.plinko.scene_width,matter_cljs_fun.plinko.ground_width,{"isStatic": true});
matter_cljs_fun.plinko.left_wall = matter_cljs_fun.util.Bodies.rectangle((0),(matter_cljs_fun.plinko.scene_height / (2)),matter_cljs_fun.plinko.left_wall_width,matter_cljs_fun.plinko.scene_height,{"isStatic": true});
matter_cljs_fun.plinko.right_wall = matter_cljs_fun.util.Bodies.rectangle(matter_cljs_fun.plinko.scene_width,(matter_cljs_fun.plinko.scene_height / (2)),matter_cljs_fun.plinko.right_wall_width,matter_cljs_fun.plinko.scene_height,{"isStatic": true});
matter_cljs_fun.plinko.clear_pins = (function clear_pins(){

var seq__16987 = cljs.core.seq.call(null,matter_cljs_fun.util.Composite.allComposites(matter_cljs_fun.plinko.world));
var chunk__16988 = null;
var count__16989 = (0);
var i__16990 = (0);
while(true){
if((i__16990 < count__16989)){
var composite = cljs.core._nth.call(null,chunk__16988,i__16990);
matter_cljs_fun.util.Composite.removeComposite(matter_cljs_fun.plinko.world,composite);

var G__16991 = seq__16987;
var G__16992 = chunk__16988;
var G__16993 = count__16989;
var G__16994 = (i__16990 + (1));
seq__16987 = G__16991;
chunk__16988 = G__16992;
count__16989 = G__16993;
i__16990 = G__16994;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__16987);
if(temp__4126__auto__){
var seq__16987__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16987__$1)){
var c__13394__auto__ = cljs.core.chunk_first.call(null,seq__16987__$1);
var G__16995 = cljs.core.chunk_rest.call(null,seq__16987__$1);
var G__16996 = c__13394__auto__;
var G__16997 = cljs.core.count.call(null,c__13394__auto__);
var G__16998 = (0);
seq__16987 = G__16995;
chunk__16988 = G__16996;
count__16989 = G__16997;
i__16990 = G__16998;
continue;
} else {
var composite = cljs.core.first.call(null,seq__16987__$1);
matter_cljs_fun.util.Composite.removeComposite(matter_cljs_fun.plinko.world,composite);

var G__16999 = cljs.core.next.call(null,seq__16987__$1);
var G__17000 = null;
var G__17001 = (0);
var G__17002 = (0);
seq__16987 = G__16999;
chunk__16988 = G__17000;
count__16989 = G__17001;
i__16990 = G__17002;
continue;
}
} else {
return null;
}
}
break;
}
});
matter_cljs_fun.plinko.clear_borders = (function clear_borders(){

var bodies = matter_cljs_fun.util.Composite.allBodies(matter_cljs_fun.plinko.world);
var seq__17008 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bodies){
return (function (p1__17003_SHARP_){
return p1__17003_SHARP_.isStatic;
});})(bodies))
,bodies));
var chunk__17009 = null;
var count__17010 = (0);
var i__17011 = (0);
while(true){
if((i__17011 < count__17010)){
var static$ = cljs.core._nth.call(null,chunk__17009,i__17011);
matter_cljs_fun.util.Composite.removeBody(matter_cljs_fun.plinko.world,static$);

var G__17012 = seq__17008;
var G__17013 = chunk__17009;
var G__17014 = count__17010;
var G__17015 = (i__17011 + (1));
seq__17008 = G__17012;
chunk__17009 = G__17013;
count__17010 = G__17014;
i__17011 = G__17015;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17008);
if(temp__4126__auto__){
var seq__17008__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17008__$1)){
var c__13394__auto__ = cljs.core.chunk_first.call(null,seq__17008__$1);
var G__17016 = cljs.core.chunk_rest.call(null,seq__17008__$1);
var G__17017 = c__13394__auto__;
var G__17018 = cljs.core.count.call(null,c__13394__auto__);
var G__17019 = (0);
seq__17008 = G__17016;
chunk__17009 = G__17017;
count__17010 = G__17018;
i__17011 = G__17019;
continue;
} else {
var static$ = cljs.core.first.call(null,seq__17008__$1);
matter_cljs_fun.util.Composite.removeBody(matter_cljs_fun.plinko.world,static$);

var G__17020 = cljs.core.next.call(null,seq__17008__$1);
var G__17021 = null;
var G__17022 = (0);
var G__17023 = (0);
seq__17008 = G__17020;
chunk__17009 = G__17021;
count__17010 = G__17022;
i__17011 = G__17023;
continue;
}
} else {
return null;
}
}
break;
}
});
matter_cljs_fun.plinko.clear_balls = (function clear_balls(){

var bodies = matter_cljs_fun.util.Composite.allBodies(matter_cljs_fun.plinko.world);
var seq__17029 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bodies){
return (function (p1__17024_SHARP_){
return cljs.core.not.call(null,p1__17024_SHARP_.isStatic);
});})(bodies))
,bodies));
var chunk__17030 = null;
var count__17031 = (0);
var i__17032 = (0);
while(true){
if((i__17032 < count__17031)){
var dynamic = cljs.core._nth.call(null,chunk__17030,i__17032);
matter_cljs_fun.util.Composite.removeBody(matter_cljs_fun.plinko.world,dynamic);

var G__17033 = seq__17029;
var G__17034 = chunk__17030;
var G__17035 = count__17031;
var G__17036 = (i__17032 + (1));
seq__17029 = G__17033;
chunk__17030 = G__17034;
count__17031 = G__17035;
i__17032 = G__17036;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17029);
if(temp__4126__auto__){
var seq__17029__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17029__$1)){
var c__13394__auto__ = cljs.core.chunk_first.call(null,seq__17029__$1);
var G__17037 = cljs.core.chunk_rest.call(null,seq__17029__$1);
var G__17038 = c__13394__auto__;
var G__17039 = cljs.core.count.call(null,c__13394__auto__);
var G__17040 = (0);
seq__17029 = G__17037;
chunk__17030 = G__17038;
count__17031 = G__17039;
i__17032 = G__17040;
continue;
} else {
var dynamic = cljs.core.first.call(null,seq__17029__$1);
matter_cljs_fun.util.Composite.removeBody(matter_cljs_fun.plinko.world,dynamic);

var G__17041 = cljs.core.next.call(null,seq__17029__$1);
var G__17042 = null;
var G__17043 = (0);
var G__17044 = (0);
seq__17029 = G__17041;
chunk__17030 = G__17042;
count__17031 = G__17043;
i__17032 = G__17044;
continue;
}
} else {
return null;
}
}
break;
}
});
matter_cljs_fun.plinko.create_environment = (function create_environment(){

var pin_stack = matter_cljs_fun.plinko.create_pin_stack_rows.call(null);
var pin_stack_offset = matter_cljs_fun.plinko.create_pin_stack_offset_rows.call(null);
var statics = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pin_stack,pin_stack_offset,matter_cljs_fun.plinko.ground,matter_cljs_fun.plinko.left_wall,matter_cljs_fun.plinko.right_wall], null);
return matter_cljs_fun.util.World.add(matter_cljs_fun.plinko.world,cljs.core.clj__GT_js.call(null,statics));
});
matter_cljs_fun.plinko.add_event_listener = (function add_event_listener(event,id,fun){
return document.getElementById(id).addEventListener(event,fun);
});
matter_cljs_fun.plinko.on_click = cljs.core.partial.call(null,matter_cljs_fun.plinko.add_event_listener,"click");
matter_cljs_fun.plinko.initialize = (function initialize(){

matter_cljs_fun.plinko.add_random_ball.call(null);

matter_cljs_fun.plinko.create_environment.call(null);

matter_cljs_fun.util.Engine.run(matter_cljs_fun.plinko.engine);

matter_cljs_fun.plinko.on_click.call(null,"add-ball",matter_cljs_fun.plinko.add_random_ball);

matter_cljs_fun.plinko.on_click.call(null,"make-it-rain",(function (e){
var seq__17049 = cljs.core.seq.call(null,cljs.core.range.call(null,(100)));
var chunk__17050 = null;
var count__17051 = (0);
var i__17052 = (0);
while(true){
if((i__17052 < count__17051)){
var x = cljs.core._nth.call(null,chunk__17050,i__17052);
matter_cljs_fun.plinko.add_random_ball.call(null);

var G__17053 = seq__17049;
var G__17054 = chunk__17050;
var G__17055 = count__17051;
var G__17056 = (i__17052 + (1));
seq__17049 = G__17053;
chunk__17050 = G__17054;
count__17051 = G__17055;
i__17052 = G__17056;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17049);
if(temp__4126__auto__){
var seq__17049__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17049__$1)){
var c__13394__auto__ = cljs.core.chunk_first.call(null,seq__17049__$1);
var G__17057 = cljs.core.chunk_rest.call(null,seq__17049__$1);
var G__17058 = c__13394__auto__;
var G__17059 = cljs.core.count.call(null,c__13394__auto__);
var G__17060 = (0);
seq__17049 = G__17057;
chunk__17050 = G__17058;
count__17051 = G__17059;
i__17052 = G__17060;
continue;
} else {
var x = cljs.core.first.call(null,seq__17049__$1);
matter_cljs_fun.plinko.add_random_ball.call(null);

var G__17061 = cljs.core.next.call(null,seq__17049__$1);
var G__17062 = null;
var G__17063 = (0);
var G__17064 = (0);
seq__17049 = G__17061;
chunk__17050 = G__17062;
count__17051 = G__17063;
i__17052 = G__17064;
continue;
}
} else {
return null;
}
}
break;
}
}));

return matter_cljs_fun.plinko.on_click.call(null,"clear-balls",matter_cljs_fun.plinko.clear_balls);
});
document.addEventListener("DOMContentLoaded",matter_cljs_fun.plinko.initialize);
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
matter_cljs_fun.util.Engine.render(matter_cljs_fun.plinko.engine);

matter_cljs_fun.plinko.clear_pins.call(null);

matter_cljs_fun.plinko.clear_borders.call(null);

matter_cljs_fun.plinko.create_environment.call(null);

return matter_cljs_fun.plinko.add_random_ball.call(null);
})], null));

//# sourceMappingURL=plinko.js.map?rel=1422067875914