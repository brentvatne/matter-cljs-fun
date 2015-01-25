// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('matter_cljs_fun.util')) {
goog.provide('matter_cljs_fun.util');
}
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.dom.classes');
goog.require('figwheel.client');
goog.require('goog.events');
goog.require('cljs.core.async');
matter_cljs_fun.util.Matter = window.Matter;
matter_cljs_fun.util.Engine = matter_cljs_fun.util.Matter.Engine;
matter_cljs_fun.util.Events = matter_cljs_fun.util.Matter.Events;
matter_cljs_fun.util.World = matter_cljs_fun.util.Matter.World;
matter_cljs_fun.util.Body = matter_cljs_fun.util.Matter.Body;
matter_cljs_fun.util.Bodies = matter_cljs_fun.util.Matter.Bodies;
matter_cljs_fun.util.Constraint = matter_cljs_fun.util.Matter.Constraint;
matter_cljs_fun.util.Composites = matter_cljs_fun.util.Matter.Composites;
matter_cljs_fun.util.Composite = matter_cljs_fun.util.Matter.Composite;
matter_cljs_fun.util.before_tick = (function before_tick(engine,handler){
return matter_cljs_fun.util.Events.on(engine,"beforeTick",handler);
});
matter_cljs_fun.util.on_tick = (function on_tick(engine,handler){
return matter_cljs_fun.util.Events.on(engine,"tick",handler);
});
matter_cljs_fun.util.after_tick = (function after_tick(engine,handler){
return matter_cljs_fun.util.Events.on(engine,"afterTick",handler);
});
matter_cljs_fun.util.add_event_listener = (function add_event_listener(event,id,fun){
return document.getElementById(id).addEventListener(event,fun);
});
/**
* Given an id and callback handler it fires the callback when the
* element with the id is clicked
*/
matter_cljs_fun.util.on_click = cljs.core.partial.call(null,matter_cljs_fun.util.add_event_listener,"click");
/**
* Short-hand for document.getElementById(id)
*/
matter_cljs_fun.util.by_id = (function by_id(id){
return document.getElementById(id);
});
/**
* Given a CSS id, replace the matching DOM element's
* content with the supplied string.
*/
matter_cljs_fun.util.set_html_BANG_ = (function set_html_BANG_(id,s){
return matter_cljs_fun.util.by_id.call(null,id).innerHTML = s;
});
/**
* Given a target DOM element and event type return a channel of
* observed events. Can supply the channel to receive events as third
* optional argument.
*/
matter_cljs_fun.util.events__GT_chan = (function() {
var events__GT_chan = null;
var events__GT_chan__2 = (function (el,event_type){
return events__GT_chan.call(null,el,event_type,cljs.core.async.chan.call(null));
});
var events__GT_chan__3 = (function (el,event_type,c){
goog.events.listen(el,event_type,(function (e){
return cljs.core.async.put_BANG_.call(null,c,e);
}));

return c;
});
events__GT_chan = function(el,event_type,c){
switch(arguments.length){
case 2:
return events__GT_chan__2.call(this,el,event_type);
case 3:
return events__GT_chan__3.call(this,el,event_type,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
events__GT_chan.cljs$core$IFn$_invoke$arity$2 = events__GT_chan__2;
events__GT_chan.cljs$core$IFn$_invoke$arity$3 = events__GT_chan__3;
return events__GT_chan;
})()
;
/**
* Return a channel of :left and :right events
* sourced from left and right arrow key presses.
*/
matter_cljs_fun.util.keys_chan = (function keys_chan(){
return matter_cljs_fun.util.events__GT_chan.call(null,window,goog.events.EventType.KEYDOWN,cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,(1)),cljs.core.comp.call(null,cljs.core.map.call(null,(function (p1__32774_SHARP_){
return p1__32774_SHARP_.keyCode;
})),cljs.core.filter.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(39),null,(32),null,(37),null], null), null)),cljs.core.map.call(null,new cljs.core.PersistentArrayMap(null, 3, [(37),new cljs.core.Keyword(null,"left","left",-399115937),(39),new cljs.core.Keyword(null,"right","right",-452581833),(32),new cljs.core.Keyword(null,"space","space",348133475)], null)))));
});
matter_cljs_fun.util.stringify = (function stringify(obj){
return JSON.stringify(JSON.decycle(obj));
});

//# sourceMappingURL=util.js.map?rel=1422154587622