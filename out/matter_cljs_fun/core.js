// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('matter_cljs_fun.core')) {
goog.provide('matter_cljs_fun.core');
}
goog.require('cljs.core');
goog.require('weasel.repl');
weasel.repl.connect.call(null,"ws://localhost:9001");
cljs.core.enable_console_print_BANG_.call(null);
matter_cljs_fun.core.Matter = window.Matter;
matter_cljs_fun.core.Engine = matter_cljs_fun.core.Matter.Engine;
matter_cljs_fun.core.World = matter_cljs_fun.core.Matter.World;
matter_cljs_fun.core.Body = matter_cljs_fun.core.Matter.Body;
matter_cljs_fun.core.Bodies = matter_cljs_fun.core.Matter.Bodies;
matter_cljs_fun.core.Constraint = matter_cljs_fun.core.Matter.Constraint;
matter_cljs_fun.core.Composites = matter_cljs_fun.core.Matter.Composites;
matter_cljs_fun.core.engine_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"showAngleIndicator","showAngleIndicator",-1460751489),false,new cljs.core.Keyword(null,"wireframes","wireframes",-1841146676),false], null)], null)], null);
matter_cljs_fun.core.engine = matter_cljs_fun.core.Engine.create(document.body,cljs.core.clj__GT_js.call(null,matter_cljs_fun.core.engine_options));
matter_cljs_fun.core.world = matter_cljs_fun.core.engine.world;
matter_cljs_fun.core.pin_cols = (25);
matter_cljs_fun.core.pin_rows = (19);
matter_cljs_fun.core.start_x = (0);
matter_cljs_fun.core.start_y = (10);
matter_cljs_fun.core.pin_radius = (5);
matter_cljs_fun.core.row_space = (28);
matter_cljs_fun.core.col_space = (28);
matter_cljs_fun.core.position__GT_pin_black = (function position__GT_pin_black(x,y,col,row){
return matter_cljs_fun.core.Bodies.circle(x,y,matter_cljs_fun.core.pin_radius,{"render": {"fillStyle": "#000000"}, "isStatic": true});
});
matter_cljs_fun.core.position__GT_pin_grey = (function position__GT_pin_grey(x,y,col,row){
return matter_cljs_fun.core.Bodies.circle(x,y,matter_cljs_fun.core.pin_radius,{"render": {"fillStyle": "#cccccc"}, "isStatic": true});
});
matter_cljs_fun.core.pin_stack = matter_cljs_fun.core.Composites.stack(matter_cljs_fun.core.start_x,matter_cljs_fun.core.start_y,matter_cljs_fun.core.pin_cols,(matter_cljs_fun.core.pin_rows / (2)),matter_cljs_fun.core.row_space,((2) * matter_cljs_fun.core.col_space),matter_cljs_fun.core.position__GT_pin_black);
matter_cljs_fun.core.pin_stack_offset = matter_cljs_fun.core.Composites.stack((matter_cljs_fun.core.start_x + (matter_cljs_fun.core.row_space / 1.25)),((matter_cljs_fun.core.col_space + (matter_cljs_fun.core.pin_radius / (1))) + matter_cljs_fun.core.start_y),matter_cljs_fun.core.pin_cols,(matter_cljs_fun.core.pin_rows / (2)),matter_cljs_fun.core.row_space,((2) * matter_cljs_fun.core.col_space),matter_cljs_fun.core.position__GT_pin_grey);
matter_cljs_fun.core.ball_radius = (9);
matter_cljs_fun.core.ball = matter_cljs_fun.core.Bodies.circle((300),(0),matter_cljs_fun.core.ball_radius,{"frictionAir": 0.001, "density": 1.0E-6});
matter_cljs_fun.core.ground = matter_cljs_fun.core.Bodies.rectangle((400),(595),(800),(10),{"isStatic": true});
matter_cljs_fun.core.left_wall = matter_cljs_fun.core.Bodies.rectangle((0),(300),(10),(600),{"isStatic": true});
matter_cljs_fun.core.right_wall = matter_cljs_fun.core.Bodies.rectangle((800),(300),(10),(600),{"isStatic": true});
matter_cljs_fun.core.World.add(matter_cljs_fun.core.world,[matter_cljs_fun.core.pin_stack,matter_cljs_fun.core.pin_stack_offset,matter_cljs_fun.core.ground,matter_cljs_fun.core.left_wall,matter_cljs_fun.core.right_wall,matter_cljs_fun.core.ball]);
matter_cljs_fun.core.Engine.run(matter_cljs_fun.core.engine);
matter_cljs_fun.core.add_ball = (function add_ball(x){
var new_ball = matter_cljs_fun.core.Bodies.circle(x,(0),matter_cljs_fun.core.ball_radius,{"frictionAir": 0.001, "density": 1.0E-6});
console.log(new_ball);

return matter_cljs_fun.core.World.add(matter_cljs_fun.core.world,[new_ball]);
});
matter_cljs_fun.core.add_random_ball = (function add_random_ball(){
return matter_cljs_fun.core.add_ball.call(null,((800) * Math.random()));
});
matter_cljs_fun.core.add_click_handlers = (function add_click_handlers(){
document.getElementById("add-ball").addEventListener("click",matter_cljs_fun.core.add_random_ball);

return document.getElementById("make-it-rain").addEventListener("click",(function (e){
var seq__11724 = cljs.core.seq.call(null,cljs.core.range.call(null,(100)));
var chunk__11725 = null;
var count__11726 = (0);
var i__11727 = (0);
while(true){
if((i__11727 < count__11726)){
var x = cljs.core._nth.call(null,chunk__11725,i__11727);
matter_cljs_fun.core.add_random_ball.call(null);

var G__11728 = seq__11724;
var G__11729 = chunk__11725;
var G__11730 = count__11726;
var G__11731 = (i__11727 + (1));
seq__11724 = G__11728;
chunk__11725 = G__11729;
count__11726 = G__11730;
i__11727 = G__11731;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11724);
if(temp__4126__auto__){
var seq__11724__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11724__$1)){
var c__4528__auto__ = cljs.core.chunk_first.call(null,seq__11724__$1);
var G__11732 = cljs.core.chunk_rest.call(null,seq__11724__$1);
var G__11733 = c__4528__auto__;
var G__11734 = cljs.core.count.call(null,c__4528__auto__);
var G__11735 = (0);
seq__11724 = G__11732;
chunk__11725 = G__11733;
count__11726 = G__11734;
i__11727 = G__11735;
continue;
} else {
var x = cljs.core.first.call(null,seq__11724__$1);
matter_cljs_fun.core.add_random_ball.call(null);

var G__11736 = cljs.core.next.call(null,seq__11724__$1);
var G__11737 = null;
var G__11738 = (0);
var G__11739 = (0);
seq__11724 = G__11736;
chunk__11725 = G__11737;
count__11726 = G__11738;
i__11727 = G__11739;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
document.addEventListener("DOMContentLoaded",matter_cljs_fun.core.add_click_handlers);

//# sourceMappingURL=core.js.map