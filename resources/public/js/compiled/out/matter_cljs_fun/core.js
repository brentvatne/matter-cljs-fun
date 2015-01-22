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
matter_cljs_fun.core.pin_cols = (20);
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
matter_cljs_fun.core.clear_pins = (function clear_pins(){

var seq__19757 = cljs.core.seq.call(null,matter_cljs_fun.core.Composite.allComposites(matter_cljs_fun.core.world));
var chunk__19758 = null;
var count__19759 = (0);
var i__19760 = (0);
while(true){
if((i__19760 < count__19759)){
var composite = cljs.core._nth.call(null,chunk__19758,i__19760);
matter_cljs_fun.core.Composite.removeComposite(matter_cljs_fun.core.world,composite);

var G__19761 = seq__19757;
var G__19762 = chunk__19758;
var G__19763 = count__19759;
var G__19764 = (i__19760 + (1));
seq__19757 = G__19761;
chunk__19758 = G__19762;
count__19759 = G__19763;
i__19760 = G__19764;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19757);
if(temp__4126__auto__){
var seq__19757__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19757__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__19757__$1);
var G__19765 = cljs.core.chunk_rest.call(null,seq__19757__$1);
var G__19766 = c__12974__auto__;
var G__19767 = cljs.core.count.call(null,c__12974__auto__);
var G__19768 = (0);
seq__19757 = G__19765;
chunk__19758 = G__19766;
count__19759 = G__19767;
i__19760 = G__19768;
continue;
} else {
var composite = cljs.core.first.call(null,seq__19757__$1);
matter_cljs_fun.core.Composite.removeComposite(matter_cljs_fun.core.world,composite);

var G__19769 = cljs.core.next.call(null,seq__19757__$1);
var G__19770 = null;
var G__19771 = (0);
var G__19772 = (0);
seq__19757 = G__19769;
chunk__19758 = G__19770;
count__19759 = G__19771;
i__19760 = G__19772;
continue;
}
} else {
return null;
}
}
break;
}
});
matter_cljs_fun.core.clear_borders = (function clear_borders(){

var bodies = matter_cljs_fun.core.Composite.allBodies(matter_cljs_fun.core.world);
var seq__19778 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bodies){
return (function (p1__19773_SHARP_){
return p1__19773_SHARP_.isStatic;
});})(bodies))
,bodies));
var chunk__19779 = null;
var count__19780 = (0);
var i__19781 = (0);
while(true){
if((i__19781 < count__19780)){
var static$ = cljs.core._nth.call(null,chunk__19779,i__19781);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,static$);

var G__19782 = seq__19778;
var G__19783 = chunk__19779;
var G__19784 = count__19780;
var G__19785 = (i__19781 + (1));
seq__19778 = G__19782;
chunk__19779 = G__19783;
count__19780 = G__19784;
i__19781 = G__19785;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19778);
if(temp__4126__auto__){
var seq__19778__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19778__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__19778__$1);
var G__19786 = cljs.core.chunk_rest.call(null,seq__19778__$1);
var G__19787 = c__12974__auto__;
var G__19788 = cljs.core.count.call(null,c__12974__auto__);
var G__19789 = (0);
seq__19778 = G__19786;
chunk__19779 = G__19787;
count__19780 = G__19788;
i__19781 = G__19789;
continue;
} else {
var static$ = cljs.core.first.call(null,seq__19778__$1);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,static$);

var G__19790 = cljs.core.next.call(null,seq__19778__$1);
var G__19791 = null;
var G__19792 = (0);
var G__19793 = (0);
seq__19778 = G__19790;
chunk__19779 = G__19791;
count__19780 = G__19792;
i__19781 = G__19793;
continue;
}
} else {
return null;
}
}
break;
}
});
matter_cljs_fun.core.clear_balls = (function clear_balls(){

var bodies = matter_cljs_fun.core.Composite.allBodies(matter_cljs_fun.core.world);
var seq__19799 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bodies){
return (function (p1__19794_SHARP_){
return cljs.core.not.call(null,p1__19794_SHARP_.isStatic);
});})(bodies))
,bodies));
var chunk__19800 = null;
var count__19801 = (0);
var i__19802 = (0);
while(true){
if((i__19802 < count__19801)){
var dynamic = cljs.core._nth.call(null,chunk__19800,i__19802);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,dynamic);

var G__19803 = seq__19799;
var G__19804 = chunk__19800;
var G__19805 = count__19801;
var G__19806 = (i__19802 + (1));
seq__19799 = G__19803;
chunk__19800 = G__19804;
count__19801 = G__19805;
i__19802 = G__19806;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19799);
if(temp__4126__auto__){
var seq__19799__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19799__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__19799__$1);
var G__19807 = cljs.core.chunk_rest.call(null,seq__19799__$1);
var G__19808 = c__12974__auto__;
var G__19809 = cljs.core.count.call(null,c__12974__auto__);
var G__19810 = (0);
seq__19799 = G__19807;
chunk__19800 = G__19808;
count__19801 = G__19809;
i__19802 = G__19810;
continue;
} else {
var dynamic = cljs.core.first.call(null,seq__19799__$1);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,dynamic);

var G__19811 = cljs.core.next.call(null,seq__19799__$1);
var G__19812 = null;
var G__19813 = (0);
var G__19814 = (0);
seq__19799 = G__19811;
chunk__19800 = G__19812;
count__19801 = G__19813;
i__19802 = G__19814;
continue;
}
} else {
return null;
}
}
break;
}
});
matter_cljs_fun.core.create_environment = (function create_environment(){

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

matter_cljs_fun.core.create_environment.call(null);

matter_cljs_fun.core.Engine.run(matter_cljs_fun.core.engine);

matter_cljs_fun.core.on_click.call(null,"add-ball",matter_cljs_fun.core.add_random_ball);

matter_cljs_fun.core.on_click.call(null,"make-it-rain",(function (e){
var seq__19819 = cljs.core.seq.call(null,cljs.core.range.call(null,(100)));
var chunk__19820 = null;
var count__19821 = (0);
var i__19822 = (0);
while(true){
if((i__19822 < count__19821)){
var x = cljs.core._nth.call(null,chunk__19820,i__19822);
matter_cljs_fun.core.add_random_ball.call(null);

var G__19823 = seq__19819;
var G__19824 = chunk__19820;
var G__19825 = count__19821;
var G__19826 = (i__19822 + (1));
seq__19819 = G__19823;
chunk__19820 = G__19824;
count__19821 = G__19825;
i__19822 = G__19826;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19819);
if(temp__4126__auto__){
var seq__19819__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19819__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__19819__$1);
var G__19827 = cljs.core.chunk_rest.call(null,seq__19819__$1);
var G__19828 = c__12974__auto__;
var G__19829 = cljs.core.count.call(null,c__12974__auto__);
var G__19830 = (0);
seq__19819 = G__19827;
chunk__19820 = G__19828;
count__19821 = G__19829;
i__19822 = G__19830;
continue;
} else {
var x = cljs.core.first.call(null,seq__19819__$1);
matter_cljs_fun.core.add_random_ball.call(null);

var G__19831 = cljs.core.next.call(null,seq__19819__$1);
var G__19832 = null;
var G__19833 = (0);
var G__19834 = (0);
seq__19819 = G__19831;
chunk__19820 = G__19832;
count__19821 = G__19833;
i__19822 = G__19834;
continue;
}
} else {
return null;
}
}
break;
}
}));

return matter_cljs_fun.core.on_click.call(null,"clear-balls",matter_cljs_fun.core.clear_balls);
});
document.addEventListener("DOMContentLoaded",matter_cljs_fun.core.initialize);
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
matter_cljs_fun.core.Engine.render(matter_cljs_fun.core.engine);

matter_cljs_fun.core.clear_pins.call(null);

matter_cljs_fun.core.clear_borders.call(null);

matter_cljs_fun.core.create_environment.call(null);

return matter_cljs_fun.core.add_random_ball.call(null);
})], null));

//# sourceMappingURL=core.js.map?rel=1421969702247