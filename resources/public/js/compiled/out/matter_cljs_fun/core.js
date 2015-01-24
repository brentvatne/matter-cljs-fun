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
matter_cljs_fun.core.row_space = (20);
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

var seq__15587 = cljs.core.seq.call(null,matter_cljs_fun.core.Composite.allComposites(matter_cljs_fun.core.world));
var chunk__15588 = null;
var count__15589 = (0);
var i__15590 = (0);
while(true){
if((i__15590 < count__15589)){
var composite = cljs.core._nth.call(null,chunk__15588,i__15590);
matter_cljs_fun.core.Composite.removeComposite(matter_cljs_fun.core.world,composite);

var G__15591 = seq__15587;
var G__15592 = chunk__15588;
var G__15593 = count__15589;
var G__15594 = (i__15590 + (1));
seq__15587 = G__15591;
chunk__15588 = G__15592;
count__15589 = G__15593;
i__15590 = G__15594;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15587);
if(temp__4126__auto__){
var seq__15587__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15587__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__15587__$1);
var G__15595 = cljs.core.chunk_rest.call(null,seq__15587__$1);
var G__15596 = c__12974__auto__;
var G__15597 = cljs.core.count.call(null,c__12974__auto__);
var G__15598 = (0);
seq__15587 = G__15595;
chunk__15588 = G__15596;
count__15589 = G__15597;
i__15590 = G__15598;
continue;
} else {
var composite = cljs.core.first.call(null,seq__15587__$1);
matter_cljs_fun.core.Composite.removeComposite(matter_cljs_fun.core.world,composite);

var G__15599 = cljs.core.next.call(null,seq__15587__$1);
var G__15600 = null;
var G__15601 = (0);
var G__15602 = (0);
seq__15587 = G__15599;
chunk__15588 = G__15600;
count__15589 = G__15601;
i__15590 = G__15602;
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
var seq__15608 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bodies){
return (function (p1__15603_SHARP_){
return p1__15603_SHARP_.isStatic;
});})(bodies))
,bodies));
var chunk__15609 = null;
var count__15610 = (0);
var i__15611 = (0);
while(true){
if((i__15611 < count__15610)){
var static$ = cljs.core._nth.call(null,chunk__15609,i__15611);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,static$);

var G__15612 = seq__15608;
var G__15613 = chunk__15609;
var G__15614 = count__15610;
var G__15615 = (i__15611 + (1));
seq__15608 = G__15612;
chunk__15609 = G__15613;
count__15610 = G__15614;
i__15611 = G__15615;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15608);
if(temp__4126__auto__){
var seq__15608__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15608__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__15608__$1);
var G__15616 = cljs.core.chunk_rest.call(null,seq__15608__$1);
var G__15617 = c__12974__auto__;
var G__15618 = cljs.core.count.call(null,c__12974__auto__);
var G__15619 = (0);
seq__15608 = G__15616;
chunk__15609 = G__15617;
count__15610 = G__15618;
i__15611 = G__15619;
continue;
} else {
var static$ = cljs.core.first.call(null,seq__15608__$1);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,static$);

var G__15620 = cljs.core.next.call(null,seq__15608__$1);
var G__15621 = null;
var G__15622 = (0);
var G__15623 = (0);
seq__15608 = G__15620;
chunk__15609 = G__15621;
count__15610 = G__15622;
i__15611 = G__15623;
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
var seq__15629 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bodies){
return (function (p1__15624_SHARP_){
return cljs.core.not.call(null,p1__15624_SHARP_.isStatic);
});})(bodies))
,bodies));
var chunk__15630 = null;
var count__15631 = (0);
var i__15632 = (0);
while(true){
if((i__15632 < count__15631)){
var dynamic = cljs.core._nth.call(null,chunk__15630,i__15632);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,dynamic);

var G__15633 = seq__15629;
var G__15634 = chunk__15630;
var G__15635 = count__15631;
var G__15636 = (i__15632 + (1));
seq__15629 = G__15633;
chunk__15630 = G__15634;
count__15631 = G__15635;
i__15632 = G__15636;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15629);
if(temp__4126__auto__){
var seq__15629__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15629__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__15629__$1);
var G__15637 = cljs.core.chunk_rest.call(null,seq__15629__$1);
var G__15638 = c__12974__auto__;
var G__15639 = cljs.core.count.call(null,c__12974__auto__);
var G__15640 = (0);
seq__15629 = G__15637;
chunk__15630 = G__15638;
count__15631 = G__15639;
i__15632 = G__15640;
continue;
} else {
var dynamic = cljs.core.first.call(null,seq__15629__$1);
matter_cljs_fun.core.Composite.removeBody(matter_cljs_fun.core.world,dynamic);

var G__15641 = cljs.core.next.call(null,seq__15629__$1);
var G__15642 = null;
var G__15643 = (0);
var G__15644 = (0);
seq__15629 = G__15641;
chunk__15630 = G__15642;
count__15631 = G__15643;
i__15632 = G__15644;
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
var seq__15649 = cljs.core.seq.call(null,cljs.core.range.call(null,(100)));
var chunk__15650 = null;
var count__15651 = (0);
var i__15652 = (0);
while(true){
if((i__15652 < count__15651)){
var x = cljs.core._nth.call(null,chunk__15650,i__15652);
matter_cljs_fun.core.add_random_ball.call(null);

var G__15653 = seq__15649;
var G__15654 = chunk__15650;
var G__15655 = count__15651;
var G__15656 = (i__15652 + (1));
seq__15649 = G__15653;
chunk__15650 = G__15654;
count__15651 = G__15655;
i__15652 = G__15656;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15649);
if(temp__4126__auto__){
var seq__15649__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15649__$1)){
var c__12974__auto__ = cljs.core.chunk_first.call(null,seq__15649__$1);
var G__15657 = cljs.core.chunk_rest.call(null,seq__15649__$1);
var G__15658 = c__12974__auto__;
var G__15659 = cljs.core.count.call(null,c__12974__auto__);
var G__15660 = (0);
seq__15649 = G__15657;
chunk__15650 = G__15658;
count__15651 = G__15659;
i__15652 = G__15660;
continue;
} else {
var x = cljs.core.first.call(null,seq__15649__$1);
matter_cljs_fun.core.add_random_ball.call(null);

var G__15661 = cljs.core.next.call(null,seq__15649__$1);
var G__15662 = null;
var G__15663 = (0);
var G__15664 = (0);
seq__15649 = G__15661;
chunk__15650 = G__15662;
count__15651 = G__15663;
i__15652 = G__15664;
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

//# sourceMappingURL=core.js.map?rel=1421980414491