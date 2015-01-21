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
matter_cljs_fun.core.pin_cols = (30);
matter_cljs_fun.core.pin_rows = (19);
matter_cljs_fun.core.start_x = (15);
matter_cljs_fun.core.start_y = (120);
matter_cljs_fun.core.pin_radius = (5);
matter_cljs_fun.core.row_space = (30);
matter_cljs_fun.core.col_space = (30);
matter_cljs_fun.core.position__GT_pin_black = (function position__GT_pin_black(x,y,col,row){
return matter_cljs_fun.core.Bodies.circle(x,y,matter_cljs_fun.core.pin_radius,{"render": {"fillStyle": "#000000"}, "isStatic": true});
});
matter_cljs_fun.core.position__GT_pin_grey = (function position__GT_pin_grey(x,y,col,row){
return matter_cljs_fun.core.Bodies.circle(x,y,matter_cljs_fun.core.pin_radius,{"render": {"fillStyle": "#cccccc"}, "isStatic": true});
});
matter_cljs_fun.core.pin_stack = matter_cljs_fun.core.Composites.stack(matter_cljs_fun.core.start_x,matter_cljs_fun.core.start_y,matter_cljs_fun.core.pin_cols,(matter_cljs_fun.core.pin_rows / (2)),matter_cljs_fun.core.row_space,((2) * matter_cljs_fun.core.col_space),matter_cljs_fun.core.position__GT_pin_black);
matter_cljs_fun.core.pin_stack_offset = matter_cljs_fun.core.Composites.stack((matter_cljs_fun.core.start_x + (matter_cljs_fun.core.row_space / 1.25)),(30.5 + matter_cljs_fun.core.start_y),matter_cljs_fun.core.pin_cols,(matter_cljs_fun.core.pin_rows / (2)),matter_cljs_fun.core.row_space,((2) * matter_cljs_fun.core.col_space),matter_cljs_fun.core.position__GT_pin_grey);
matter_cljs_fun.core.ball = matter_cljs_fun.core.Bodies.circle((300),(0),(6),{"frictionAir": 0.001, "density": 1.0E-6});
matter_cljs_fun.core.ground = matter_cljs_fun.core.Bodies.rectangle((400),(595),(800),(10),{"isStatic": true});
matter_cljs_fun.core.World.add(matter_cljs_fun.core.world,[matter_cljs_fun.core.pin_stack,matter_cljs_fun.core.pin_stack_offset,matter_cljs_fun.core.ground,matter_cljs_fun.core.ball]);
matter_cljs_fun.core.Engine.run(matter_cljs_fun.core.engine);
matter_cljs_fun.core.add_ball = (function add_ball(x){
var new_ball = matter_cljs_fun.core.Bodies.circle(x,(0),(6),{"frictionAir": 0.001, "density": 1.0E-6});
console.log(new_ball);

return matter_cljs_fun.core.World.add(matter_cljs_fun.core.world,[new_ball]);
});
matter_cljs_fun.core.add_click_handler = (function add_click_handler(){
return document.getElementById("add-ball").addEventListener("click",(function (e){
return matter_cljs_fun.core.add_ball.call(null,((600) * Math.random()));
}));
});
document.addEventListener("DOMContentLoaded",matter_cljs_fun.core.add_click_handler);

//# sourceMappingURL=core.js.map