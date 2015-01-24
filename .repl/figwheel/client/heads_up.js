// Compiled by ClojureScript 0.0-2665 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24605_24613 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24606_24614 = null;
var count__24607_24615 = (0);
var i__24608_24616 = (0);
while(true){
if((i__24608_24616 < count__24607_24615)){
var k_24617 = cljs.core._nth.call(null,chunk__24606_24614,i__24608_24616);
e.setAttribute(cljs.core.name.call(null,k_24617),cljs.core.get.call(null,attrs,k_24617));

var G__24618 = seq__24605_24613;
var G__24619 = chunk__24606_24614;
var G__24620 = count__24607_24615;
var G__24621 = (i__24608_24616 + (1));
seq__24605_24613 = G__24618;
chunk__24606_24614 = G__24619;
count__24607_24615 = G__24620;
i__24608_24616 = G__24621;
continue;
} else {
var temp__4126__auto___24622 = cljs.core.seq.call(null,seq__24605_24613);
if(temp__4126__auto___24622){
var seq__24605_24623__$1 = temp__4126__auto___24622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24605_24623__$1)){
var c__13396__auto___24624 = cljs.core.chunk_first.call(null,seq__24605_24623__$1);
var G__24625 = cljs.core.chunk_rest.call(null,seq__24605_24623__$1);
var G__24626 = c__13396__auto___24624;
var G__24627 = cljs.core.count.call(null,c__13396__auto___24624);
var G__24628 = (0);
seq__24605_24613 = G__24625;
chunk__24606_24614 = G__24626;
count__24607_24615 = G__24627;
i__24608_24616 = G__24628;
continue;
} else {
var k_24629 = cljs.core.first.call(null,seq__24605_24623__$1);
e.setAttribute(cljs.core.name.call(null,k_24629),cljs.core.get.call(null,attrs,k_24629));

var G__24630 = cljs.core.next.call(null,seq__24605_24623__$1);
var G__24631 = null;
var G__24632 = (0);
var G__24633 = (0);
seq__24605_24613 = G__24630;
chunk__24606_24614 = G__24631;
count__24607_24615 = G__24632;
i__24608_24616 = G__24633;
continue;
}
} else {
}
}
break;
}

var seq__24609_24634 = cljs.core.seq.call(null,children);
var chunk__24610_24635 = null;
var count__24611_24636 = (0);
var i__24612_24637 = (0);
while(true){
if((i__24612_24637 < count__24611_24636)){
var ch_24638 = cljs.core._nth.call(null,chunk__24610_24635,i__24612_24637);
e.appendChild(ch_24638);

var G__24639 = seq__24609_24634;
var G__24640 = chunk__24610_24635;
var G__24641 = count__24611_24636;
var G__24642 = (i__24612_24637 + (1));
seq__24609_24634 = G__24639;
chunk__24610_24635 = G__24640;
count__24611_24636 = G__24641;
i__24612_24637 = G__24642;
continue;
} else {
var temp__4126__auto___24643 = cljs.core.seq.call(null,seq__24609_24634);
if(temp__4126__auto___24643){
var seq__24609_24644__$1 = temp__4126__auto___24643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24609_24644__$1)){
var c__13396__auto___24645 = cljs.core.chunk_first.call(null,seq__24609_24644__$1);
var G__24646 = cljs.core.chunk_rest.call(null,seq__24609_24644__$1);
var G__24647 = c__13396__auto___24645;
var G__24648 = cljs.core.count.call(null,c__13396__auto___24645);
var G__24649 = (0);
seq__24609_24634 = G__24646;
chunk__24610_24635 = G__24647;
count__24611_24636 = G__24648;
i__24612_24637 = G__24649;
continue;
} else {
var ch_24650 = cljs.core.first.call(null,seq__24609_24644__$1);
e.appendChild(ch_24650);

var G__24651 = cljs.core.next.call(null,seq__24609_24644__$1);
var G__24652 = null;
var G__24653 = (0);
var G__24654 = (0);
seq__24609_24634 = G__24651;
chunk__24610_24635 = G__24652;
count__24611_24636 = G__24653;
i__24612_24637 = G__24654;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__24655__i = 0, G__24655__a = new Array(arguments.length -  2);
while (G__24655__i < G__24655__a.length) {G__24655__a[G__24655__i] = arguments[G__24655__i + 2]; ++G__24655__i;}
  children = new cljs.core.IndexedSeq(G__24655__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__24656){
var t = cljs.core.first(arglist__24656);
arglist__24656 = cljs.core.next(arglist__24656);
var attrs = cljs.core.first(arglist__24656);
var children = cljs.core.rest(arglist__24656);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__13506__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13507__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13508__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13509__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13510__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__13506__auto__,prefer_table__13507__auto__,method_cache__13508__auto__,cached_hierarchy__13509__auto__,hierarchy__13510__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__13506__auto__,prefer_table__13507__auto__,method_cache__13508__auto__,cached_hierarchy__13509__auto__,hierarchy__13510__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13510__auto__,method_table__13506__auto__,prefer_table__13507__auto__,method_cache__13508__auto__,cached_hierarchy__13509__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__24657,st_map){
var map__24661 = p__24657;
var map__24661__$1 = ((cljs.core.seq_QMARK_.call(null,map__24661))?cljs.core.apply.call(null,cljs.core.hash_map,map__24661):map__24661);
var container_el = cljs.core.get.call(null,map__24661__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24661,map__24661__$1,container_el){
return (function (p__24662){
var vec__24663 = p__24662;
var k = cljs.core.nth.call(null,vec__24663,(0),null);
var v = cljs.core.nth.call(null,vec__24663,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24661,map__24661__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__24664,dom_str){
var map__24666 = p__24664;
var map__24666__$1 = ((cljs.core.seq_QMARK_.call(null,map__24666))?cljs.core.apply.call(null,cljs.core.hash_map,map__24666):map__24666);
var c = map__24666__$1;
var content_area_el = cljs.core.get.call(null,map__24666__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__24667){
var map__24669 = p__24667;
var map__24669__$1 = ((cljs.core.seq_QMARK_.call(null,map__24669))?cljs.core.apply.call(null,cljs.core.hash_map,map__24669):map__24669);
var content_area_el = cljs.core.get.call(null,map__24669__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__){
return (function (state_24711){
var state_val_24712 = (state_24711[(1)]);
if((state_val_24712 === (2))){
var inst_24696 = (state_24711[(7)]);
var inst_24705 = (state_24711[(2)]);
var inst_24706 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24707 = ["auto"];
var inst_24708 = cljs.core.PersistentHashMap.fromArrays(inst_24706,inst_24707);
var inst_24709 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24696,inst_24708);
var state_24711__$1 = (function (){var statearr_24713 = state_24711;
(statearr_24713[(8)] = inst_24705);

return statearr_24713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24711__$1,inst_24709);
} else {
if((state_val_24712 === (1))){
var inst_24696 = (state_24711[(7)]);
var inst_24696__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24697 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24698 = ["10px","10px","100%","68px","1.0"];
var inst_24699 = cljs.core.PersistentHashMap.fromArrays(inst_24697,inst_24698);
var inst_24700 = cljs.core.merge.call(null,inst_24699,style);
var inst_24701 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24696__$1,inst_24700);
var inst_24702 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24696__$1,msg);
var inst_24703 = cljs.core.async.timeout.call(null,(300));
var state_24711__$1 = (function (){var statearr_24714 = state_24711;
(statearr_24714[(7)] = inst_24696__$1);

(statearr_24714[(9)] = inst_24701);

(statearr_24714[(10)] = inst_24702);

return statearr_24714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24711__$1,(2),inst_24703);
} else {
return null;
}
}
});})(c__14527__auto__))
;
return ((function (switch__14512__auto__,c__14527__auto__){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_24718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24718[(0)] = state_machine__14513__auto__);

(statearr_24718[(1)] = (1));

return statearr_24718;
});
var state_machine__14513__auto____1 = (function (state_24711){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_24711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e24719){if((e24719 instanceof Object)){
var ex__14516__auto__ = e24719;
var statearr_24720_24722 = state_24711;
(statearr_24720_24722[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24723 = state_24711;
state_24711 = G__24723;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_24711){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_24711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_24721 = f__14528__auto__.call(null);
(statearr_24721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_24721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__24725 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__24725,(0),null);
var ln = cljs.core.nth.call(null,vec__24725,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__24728 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__24728,(0),null);
var file_line = cljs.core.nth.call(null,vec__24728,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24728,file_name,file_line){
return (function (p1__24726_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__24726_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__24728,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__24730 = figwheel.client.heads_up.ensure_container.call(null);
var map__24730__$1 = ((cljs.core.seq_QMARK_.call(null,map__24730))?cljs.core.apply.call(null,cljs.core.hash_map,map__24730):map__24730);
var content_area_el = cljs.core.get.call(null,map__24730__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__){
return (function (state_24777){
var state_val_24778 = (state_24777[(1)]);
if((state_val_24778 === (3))){
var inst_24760 = (state_24777[(7)]);
var inst_24774 = (state_24777[(2)]);
var inst_24775 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24760,"");
var state_24777__$1 = (function (){var statearr_24779 = state_24777;
(statearr_24779[(8)] = inst_24774);

return statearr_24779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24777__$1,inst_24775);
} else {
if((state_val_24778 === (2))){
var inst_24760 = (state_24777[(7)]);
var inst_24767 = (state_24777[(2)]);
var inst_24768 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24769 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24770 = cljs.core.PersistentHashMap.fromArrays(inst_24768,inst_24769);
var inst_24771 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24760,inst_24770);
var inst_24772 = cljs.core.async.timeout.call(null,(200));
var state_24777__$1 = (function (){var statearr_24780 = state_24777;
(statearr_24780[(9)] = inst_24771);

(statearr_24780[(10)] = inst_24767);

return statearr_24780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(3),inst_24772);
} else {
if((state_val_24778 === (1))){
var inst_24760 = (state_24777[(7)]);
var inst_24760__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24761 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24762 = ["0.0"];
var inst_24763 = cljs.core.PersistentHashMap.fromArrays(inst_24761,inst_24762);
var inst_24764 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24760__$1,inst_24763);
var inst_24765 = cljs.core.async.timeout.call(null,(300));
var state_24777__$1 = (function (){var statearr_24781 = state_24777;
(statearr_24781[(11)] = inst_24764);

(statearr_24781[(7)] = inst_24760__$1);

return statearr_24781;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(2),inst_24765);
} else {
return null;
}
}
}
});})(c__14527__auto__))
;
return ((function (switch__14512__auto__,c__14527__auto__){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_24785 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24785[(0)] = state_machine__14513__auto__);

(statearr_24785[(1)] = (1));

return statearr_24785;
});
var state_machine__14513__auto____1 = (function (state_24777){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_24777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e24786){if((e24786 instanceof Object)){
var ex__14516__auto__ = e24786;
var statearr_24787_24789 = state_24777;
(statearr_24787_24789[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24790 = state_24777;
state_24777 = G__24790;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_24777){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_24777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_24788 = f__14528__auto__.call(null);
(statearr_24788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_24788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__){
return (function (state_24822){
var state_val_24823 = (state_24822[(1)]);
if((state_val_24823 === (4))){
var inst_24820 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24822__$1,inst_24820);
} else {
if((state_val_24823 === (3))){
var inst_24817 = (state_24822[(2)]);
var inst_24818 = figwheel.client.heads_up.clear.call(null);
var state_24822__$1 = (function (){var statearr_24824 = state_24822;
(statearr_24824[(7)] = inst_24817);

return statearr_24824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24822__$1,(4),inst_24818);
} else {
if((state_val_24823 === (2))){
var inst_24814 = (state_24822[(2)]);
var inst_24815 = cljs.core.async.timeout.call(null,(400));
var state_24822__$1 = (function (){var statearr_24825 = state_24822;
(statearr_24825[(8)] = inst_24814);

return statearr_24825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24822__$1,(3),inst_24815);
} else {
if((state_val_24823 === (1))){
var inst_24812 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24822__$1,(2),inst_24812);
} else {
return null;
}
}
}
}
});})(c__14527__auto__))
;
return ((function (switch__14512__auto__,c__14527__auto__){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_24829 = [null,null,null,null,null,null,null,null,null];
(statearr_24829[(0)] = state_machine__14513__auto__);

(statearr_24829[(1)] = (1));

return statearr_24829;
});
var state_machine__14513__auto____1 = (function (state_24822){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_24822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e24830){if((e24830 instanceof Object)){
var ex__14516__auto__ = e24830;
var statearr_24831_24833 = state_24822;
(statearr_24831_24833[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24834 = state_24822;
state_24822 = G__24834;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_24822){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_24822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_24832 = f__14528__auto__.call(null);
(statearr_24832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_24832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";
