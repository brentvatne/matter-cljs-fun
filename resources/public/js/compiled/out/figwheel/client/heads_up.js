// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client.heads_up')) {
goog.provide('figwheel.client.heads_up');
}
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
var seq__25111_25119 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25112_25120 = null;
var count__25113_25121 = (0);
var i__25114_25122 = (0);
while(true){
if((i__25114_25122 < count__25113_25121)){
var k_25123 = cljs.core._nth.call(null,chunk__25112_25120,i__25114_25122);
e.setAttribute(cljs.core.name.call(null,k_25123),cljs.core.get.call(null,attrs,k_25123));

var G__25124 = seq__25111_25119;
var G__25125 = chunk__25112_25120;
var G__25126 = count__25113_25121;
var G__25127 = (i__25114_25122 + (1));
seq__25111_25119 = G__25124;
chunk__25112_25120 = G__25125;
count__25113_25121 = G__25126;
i__25114_25122 = G__25127;
continue;
} else {
var temp__4126__auto___25128 = cljs.core.seq.call(null,seq__25111_25119);
if(temp__4126__auto___25128){
var seq__25111_25129__$1 = temp__4126__auto___25128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25111_25129__$1)){
var c__12974__auto___25130 = cljs.core.chunk_first.call(null,seq__25111_25129__$1);
var G__25131 = cljs.core.chunk_rest.call(null,seq__25111_25129__$1);
var G__25132 = c__12974__auto___25130;
var G__25133 = cljs.core.count.call(null,c__12974__auto___25130);
var G__25134 = (0);
seq__25111_25119 = G__25131;
chunk__25112_25120 = G__25132;
count__25113_25121 = G__25133;
i__25114_25122 = G__25134;
continue;
} else {
var k_25135 = cljs.core.first.call(null,seq__25111_25129__$1);
e.setAttribute(cljs.core.name.call(null,k_25135),cljs.core.get.call(null,attrs,k_25135));

var G__25136 = cljs.core.next.call(null,seq__25111_25129__$1);
var G__25137 = null;
var G__25138 = (0);
var G__25139 = (0);
seq__25111_25119 = G__25136;
chunk__25112_25120 = G__25137;
count__25113_25121 = G__25138;
i__25114_25122 = G__25139;
continue;
}
} else {
}
}
break;
}

var seq__25115_25140 = cljs.core.seq.call(null,children);
var chunk__25116_25141 = null;
var count__25117_25142 = (0);
var i__25118_25143 = (0);
while(true){
if((i__25118_25143 < count__25117_25142)){
var ch_25144 = cljs.core._nth.call(null,chunk__25116_25141,i__25118_25143);
e.appendChild(ch_25144);

var G__25145 = seq__25115_25140;
var G__25146 = chunk__25116_25141;
var G__25147 = count__25117_25142;
var G__25148 = (i__25118_25143 + (1));
seq__25115_25140 = G__25145;
chunk__25116_25141 = G__25146;
count__25117_25142 = G__25147;
i__25118_25143 = G__25148;
continue;
} else {
var temp__4126__auto___25149 = cljs.core.seq.call(null,seq__25115_25140);
if(temp__4126__auto___25149){
var seq__25115_25150__$1 = temp__4126__auto___25149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25115_25150__$1)){
var c__12974__auto___25151 = cljs.core.chunk_first.call(null,seq__25115_25150__$1);
var G__25152 = cljs.core.chunk_rest.call(null,seq__25115_25150__$1);
var G__25153 = c__12974__auto___25151;
var G__25154 = cljs.core.count.call(null,c__12974__auto___25151);
var G__25155 = (0);
seq__25115_25140 = G__25152;
chunk__25116_25141 = G__25153;
count__25117_25142 = G__25154;
i__25118_25143 = G__25155;
continue;
} else {
var ch_25156 = cljs.core.first.call(null,seq__25115_25150__$1);
e.appendChild(ch_25156);

var G__25157 = cljs.core.next.call(null,seq__25115_25150__$1);
var G__25158 = null;
var G__25159 = (0);
var G__25160 = (0);
seq__25115_25140 = G__25157;
chunk__25116_25141 = G__25158;
count__25117_25142 = G__25159;
i__25118_25143 = G__25160;
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
var G__25161__i = 0, G__25161__a = new Array(arguments.length -  2);
while (G__25161__i < G__25161__a.length) {G__25161__a[G__25161__i] = arguments[G__25161__i + 2]; ++G__25161__i;}
  children = new cljs.core.IndexedSeq(G__25161__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__25162){
var t = cljs.core.first(arglist__25162);
arglist__25162 = cljs.core.next(arglist__25162);
var attrs = cljs.core.first(arglist__25162);
var children = cljs.core.rest(arglist__25162);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__13084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13085__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13086__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13087__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13088__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__13084__auto__,prefer_table__13085__auto__,method_cache__13086__auto__,cached_hierarchy__13087__auto__,hierarchy__13088__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__13084__auto__,prefer_table__13085__auto__,method_cache__13086__auto__,cached_hierarchy__13087__auto__,hierarchy__13088__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13088__auto__,method_table__13084__auto__,prefer_table__13085__auto__,method_cache__13086__auto__,cached_hierarchy__13087__auto__));
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__25163,st_map){
var map__25167 = p__25163;
var map__25167__$1 = ((cljs.core.seq_QMARK_.call(null,map__25167))?cljs.core.apply.call(null,cljs.core.hash_map,map__25167):map__25167);
var container_el = cljs.core.get.call(null,map__25167__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25167,map__25167__$1,container_el){
return (function (p__25168){
var vec__25169 = p__25168;
var k = cljs.core.nth.call(null,vec__25169,(0),null);
var v = cljs.core.nth.call(null,vec__25169,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25167,map__25167__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__25170,dom_str){
var map__25172 = p__25170;
var map__25172__$1 = ((cljs.core.seq_QMARK_.call(null,map__25172))?cljs.core.apply.call(null,cljs.core.hash_map,map__25172):map__25172);
var c = map__25172__$1;
var content_area_el = cljs.core.get.call(null,map__25172__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__25173){
var map__25175 = p__25173;
var map__25175__$1 = ((cljs.core.seq_QMARK_.call(null,map__25175))?cljs.core.apply.call(null,cljs.core.hash_map,map__25175):map__25175);
var content_area_el = cljs.core.get.call(null,map__25175__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__){
return (function (state_25217){
var state_val_25218 = (state_25217[(1)]);
if((state_val_25218 === (2))){
var inst_25202 = (state_25217[(7)]);
var inst_25211 = (state_25217[(2)]);
var inst_25212 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25213 = ["auto"];
var inst_25214 = cljs.core.PersistentHashMap.fromArrays(inst_25212,inst_25213);
var inst_25215 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25202,inst_25214);
var state_25217__$1 = (function (){var statearr_25219 = state_25217;
(statearr_25219[(8)] = inst_25211);

return statearr_25219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25217__$1,inst_25215);
} else {
if((state_val_25218 === (1))){
var inst_25202 = (state_25217[(7)]);
var inst_25202__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25203 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25204 = ["10px","10px","100%","68px","1.0"];
var inst_25205 = cljs.core.PersistentHashMap.fromArrays(inst_25203,inst_25204);
var inst_25206 = cljs.core.merge.call(null,inst_25205,style);
var inst_25207 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25202__$1,inst_25206);
var inst_25208 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25202__$1,msg);
var inst_25209 = cljs.core.async.timeout.call(null,(300));
var state_25217__$1 = (function (){var statearr_25220 = state_25217;
(statearr_25220[(9)] = inst_25207);

(statearr_25220[(7)] = inst_25202__$1);

(statearr_25220[(10)] = inst_25208);

return statearr_25220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25217__$1,(2),inst_25209);
} else {
return null;
}
}
});})(c__14650__auto__))
;
return ((function (switch__14594__auto__,c__14650__auto__){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_25224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25224[(0)] = state_machine__14595__auto__);

(statearr_25224[(1)] = (1));

return statearr_25224;
});
var state_machine__14595__auto____1 = (function (state_25217){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e25225){if((e25225 instanceof Object)){
var ex__14598__auto__ = e25225;
var statearr_25226_25228 = state_25217;
(statearr_25226_25228[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25229 = state_25217;
state_25217 = G__25229;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25217){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__))
})();
var state__14652__auto__ = (function (){var statearr_25227 = f__14651__auto__.call(null);
(statearr_25227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_25227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__))
);

return c__14650__auto__;
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
var vec__25231 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__25231,(0),null);
var ln = cljs.core.nth.call(null,vec__25231,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__25234 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__25234,(0),null);
var file_line = cljs.core.nth.call(null,vec__25234,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25234,file_name,file_line){
return (function (p1__25232_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__25232_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__25234,file_name,file_line))
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
var map__25236 = figwheel.client.heads_up.ensure_container.call(null);
var map__25236__$1 = ((cljs.core.seq_QMARK_.call(null,map__25236))?cljs.core.apply.call(null,cljs.core.hash_map,map__25236):map__25236);
var content_area_el = cljs.core.get.call(null,map__25236__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__){
return (function (state_25283){
var state_val_25284 = (state_25283[(1)]);
if((state_val_25284 === (3))){
var inst_25266 = (state_25283[(7)]);
var inst_25280 = (state_25283[(2)]);
var inst_25281 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25266,"");
var state_25283__$1 = (function (){var statearr_25285 = state_25283;
(statearr_25285[(8)] = inst_25280);

return statearr_25285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25283__$1,inst_25281);
} else {
if((state_val_25284 === (2))){
var inst_25266 = (state_25283[(7)]);
var inst_25273 = (state_25283[(2)]);
var inst_25274 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25275 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25276 = cljs.core.PersistentHashMap.fromArrays(inst_25274,inst_25275);
var inst_25277 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25266,inst_25276);
var inst_25278 = cljs.core.async.timeout.call(null,(200));
var state_25283__$1 = (function (){var statearr_25286 = state_25283;
(statearr_25286[(9)] = inst_25273);

(statearr_25286[(10)] = inst_25277);

return statearr_25286;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(3),inst_25278);
} else {
if((state_val_25284 === (1))){
var inst_25266 = (state_25283[(7)]);
var inst_25266__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25267 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25268 = ["0.0"];
var inst_25269 = cljs.core.PersistentHashMap.fromArrays(inst_25267,inst_25268);
var inst_25270 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25266__$1,inst_25269);
var inst_25271 = cljs.core.async.timeout.call(null,(300));
var state_25283__$1 = (function (){var statearr_25287 = state_25283;
(statearr_25287[(11)] = inst_25270);

(statearr_25287[(7)] = inst_25266__$1);

return statearr_25287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(2),inst_25271);
} else {
return null;
}
}
}
});})(c__14650__auto__))
;
return ((function (switch__14594__auto__,c__14650__auto__){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_25291 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25291[(0)] = state_machine__14595__auto__);

(statearr_25291[(1)] = (1));

return statearr_25291;
});
var state_machine__14595__auto____1 = (function (state_25283){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e25292){if((e25292 instanceof Object)){
var ex__14598__auto__ = e25292;
var statearr_25293_25295 = state_25283;
(statearr_25293_25295[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25296 = state_25283;
state_25283 = G__25296;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25283){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__))
})();
var state__14652__auto__ = (function (){var statearr_25294 = f__14651__auto__.call(null);
(statearr_25294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_25294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__))
);

return c__14650__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__){
return (function (state_25328){
var state_val_25329 = (state_25328[(1)]);
if((state_val_25329 === (4))){
var inst_25326 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25328__$1,inst_25326);
} else {
if((state_val_25329 === (3))){
var inst_25323 = (state_25328[(2)]);
var inst_25324 = figwheel.client.heads_up.clear.call(null);
var state_25328__$1 = (function (){var statearr_25330 = state_25328;
(statearr_25330[(7)] = inst_25323);

return statearr_25330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25328__$1,(4),inst_25324);
} else {
if((state_val_25329 === (2))){
var inst_25320 = (state_25328[(2)]);
var inst_25321 = cljs.core.async.timeout.call(null,(400));
var state_25328__$1 = (function (){var statearr_25331 = state_25328;
(statearr_25331[(8)] = inst_25320);

return statearr_25331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25328__$1,(3),inst_25321);
} else {
if((state_val_25329 === (1))){
var inst_25318 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25328__$1 = state_25328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25328__$1,(2),inst_25318);
} else {
return null;
}
}
}
}
});})(c__14650__auto__))
;
return ((function (switch__14594__auto__,c__14650__auto__){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_25335 = [null,null,null,null,null,null,null,null,null];
(statearr_25335[(0)] = state_machine__14595__auto__);

(statearr_25335[(1)] = (1));

return statearr_25335;
});
var state_machine__14595__auto____1 = (function (state_25328){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e25336){if((e25336 instanceof Object)){
var ex__14598__auto__ = e25336;
var statearr_25337_25339 = state_25328;
(statearr_25337_25339[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25340 = state_25328;
state_25328 = G__25340;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25328){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__))
})();
var state__14652__auto__ = (function (){var statearr_25338 = f__14651__auto__.call(null);
(statearr_25338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_25338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__))
);

return c__14650__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1421962950109