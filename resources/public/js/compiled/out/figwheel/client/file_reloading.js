// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client.file_reloading')) {
goog.provide('figwheel.client.file_reloading');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__25342){
var map__25344 = p__25342;
var map__25344__$1 = ((cljs.core.seq_QMARK_.call(null,map__25344))?cljs.core.apply.call(null,cljs.core.hash_map,map__25344):map__25344);
var websocket_url = cljs.core.get.call(null,map__25344__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
if(typeof figwheel.client.file_reloading.ns_meta_data !== 'undefined'){
} else {
figwheel.client.file_reloading.ns_meta_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.get_meta_data_for_ns = (function get_meta_data_for_ns(ns){
return cljs.core.get.call(null,figwheel.client.file_reloading.ns_meta_data,ns);
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){
return [cljs.core.str(clojure.string.replace_first.call(null,goog.basePath,"/goog","")),cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__25345,callback){
var map__25347 = p__25345;
var map__25347__$1 = ((cljs.core.seq_QMARK_.call(null,map__25347))?cljs.core.apply.call(null,cljs.core.hash_map,map__25347):map__25347);
var msg = map__25347__$1;
var meta_data = cljs.core.get.call(null,map__25347__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__25347__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__25347__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__25347__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__12175__auto__ = (function (){var or__12187__auto__ = dependency_file;
if(cljs.core.truth_(or__12187__auto__)){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (function (){var and__12175__auto__ = meta_data;
if(cljs.core.truth_(and__12175__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__12175__auto__;
}
})();
if(cljs.core.truth_(or__12187__auto____$1)){
return or__12187__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__12175__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__12187__auto__ = meta_data;
if(cljs.core.truth_(or__12187__auto__)){
return or__12187__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__12175__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__25347,map__25347__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__25347,map__25347__$1,msg,meta_data,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(10));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__25348,p__25349){
var map__25352 = p__25348;
var map__25352__$1 = ((cljs.core.seq_QMARK_.call(null,map__25352))?cljs.core.apply.call(null,cljs.core.hash_map,map__25352):map__25352);
var opts = map__25352__$1;
var url_rewriter = cljs.core.get.call(null,map__25352__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25353 = p__25349;
var map__25353__$1 = ((cljs.core.seq_QMARK_.call(null,map__25353))?cljs.core.apply.call(null,cljs.core.hash_map,map__25353):map__25353);
var d = map__25353__$1;
var file = cljs.core.get.call(null,map__25353__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__25355,p__25356){
var map__25410 = p__25355;
var map__25410__$1 = ((cljs.core.seq_QMARK_.call(null,map__25410))?cljs.core.apply.call(null,cljs.core.hash_map,map__25410):map__25410);
var opts = map__25410__$1;
var on_jsload = cljs.core.get.call(null,map__25410__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__25410__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__25411 = p__25356;
var map__25411__$1 = ((cljs.core.seq_QMARK_.call(null,map__25411))?cljs.core.apply.call(null,cljs.core.hash_map,map__25411):map__25411);
var msg = map__25411__$1;
var files = cljs.core.get.call(null,map__25411__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__,map__25410,map__25410__$1,opts,on_jsload,before_jsload,map__25411,map__25411__$1,msg,files){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__,map__25410,map__25410__$1,opts,on_jsload,before_jsload,map__25411,map__25411__$1,msg,files){
return (function (state_25441){
var state_val_25442 = (state_25441[(1)]);
if((state_val_25442 === (8))){
var inst_25439 = (state_25441[(2)]);
var state_25441__$1 = state_25441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25441__$1,inst_25439);
} else {
if((state_val_25442 === (7))){
var state_25441__$1 = state_25441;
var statearr_25443_25463 = state_25441__$1;
(statearr_25443_25463[(2)] = null);

(statearr_25443_25463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25442 === (6))){
var inst_25419 = (state_25441[(7)]);
var inst_25433 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_25434 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25419);
var inst_25435 = cljs.core.pr_str.call(null,inst_25434);
var inst_25436 = console.log("not required:",inst_25435);
var state_25441__$1 = (function (){var statearr_25444 = state_25441;
(statearr_25444[(8)] = inst_25433);

return statearr_25444;
})();
var statearr_25445_25464 = state_25441__$1;
(statearr_25445_25464[(2)] = inst_25436);

(statearr_25445_25464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25442 === (5))){
var inst_25419 = (state_25441[(7)]);
var inst_25430 = (state_25441[(2)]);
var inst_25431 = cljs.core.not_empty.call(null,inst_25419);
var state_25441__$1 = (function (){var statearr_25446 = state_25441;
(statearr_25446[(9)] = inst_25430);

return statearr_25446;
})();
if(cljs.core.truth_(inst_25431)){
var statearr_25447_25465 = state_25441__$1;
(statearr_25447_25465[(1)] = (6));

} else {
var statearr_25448_25466 = state_25441__$1;
(statearr_25448_25466[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25442 === (4))){
var state_25441__$1 = state_25441;
var statearr_25449_25467 = state_25441__$1;
(statearr_25449_25467[(2)] = null);

(statearr_25449_25467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25442 === (3))){
var inst_25417 = (state_25441[(10)]);
var inst_25419 = (state_25441[(7)]);
var inst_25413 = (state_25441[(11)]);
var inst_25416 = (state_25441[(12)]);
var inst_25422 = console.debug("Figwheel: loaded these files");
var inst_25423 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25417);
var inst_25424 = cljs.core.pr_str.call(null,inst_25423);
var inst_25425 = console.log(inst_25424);
var inst_25426 = (function (){var files_not_loaded = inst_25419;
var res = inst_25417;
var res_SINGLEQUOTE_ = inst_25416;
var files_SINGLEQUOTE_ = inst_25413;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_25417,inst_25419,inst_25413,inst_25416,inst_25422,inst_25423,inst_25424,inst_25425,state_val_25442,c__14650__auto__,map__25410,map__25410__$1,opts,on_jsload,before_jsload,map__25411,map__25411__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_25417,inst_25419,inst_25413,inst_25416,inst_25422,inst_25423,inst_25424,inst_25425,state_val_25442,c__14650__auto__,map__25410,map__25410__$1,opts,on_jsload,before_jsload,map__25411,map__25411__$1,msg,files))
})();
var inst_25427 = setTimeout(inst_25426,(10));
var state_25441__$1 = (function (){var statearr_25450 = state_25441;
(statearr_25450[(13)] = inst_25422);

(statearr_25450[(14)] = inst_25425);

return statearr_25450;
})();
var statearr_25451_25468 = state_25441__$1;
(statearr_25451_25468[(2)] = inst_25427);

(statearr_25451_25468[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25442 === (2))){
var inst_25417 = (state_25441[(10)]);
var inst_25413 = (state_25441[(11)]);
var inst_25416 = (state_25441[(12)]);
var inst_25416__$1 = (state_25441[(2)]);
var inst_25417__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25416__$1);
var inst_25418 = (function (){var res = inst_25417__$1;
var res_SINGLEQUOTE_ = inst_25416__$1;
var files_SINGLEQUOTE_ = inst_25413;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_25417,inst_25413,inst_25416,inst_25416__$1,inst_25417__$1,state_val_25442,c__14650__auto__,map__25410,map__25410__$1,opts,on_jsload,before_jsload,map__25411,map__25411__$1,msg,files){
return (function (p1__25354_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25354_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_25417,inst_25413,inst_25416,inst_25416__$1,inst_25417__$1,state_val_25442,c__14650__auto__,map__25410,map__25410__$1,opts,on_jsload,before_jsload,map__25411,map__25411__$1,msg,files))
})();
var inst_25419 = cljs.core.filter.call(null,inst_25418,inst_25416__$1);
var inst_25420 = cljs.core.not_empty.call(null,inst_25417__$1);
var state_25441__$1 = (function (){var statearr_25452 = state_25441;
(statearr_25452[(10)] = inst_25417__$1);

(statearr_25452[(7)] = inst_25419);

(statearr_25452[(12)] = inst_25416__$1);

return statearr_25452;
})();
if(cljs.core.truth_(inst_25420)){
var statearr_25453_25469 = state_25441__$1;
(statearr_25453_25469[(1)] = (3));

} else {
var statearr_25454_25470 = state_25441__$1;
(statearr_25454_25470[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25442 === (1))){
var inst_25413 = (state_25441[(11)]);
var inst_25412 = before_jsload.call(null,files);
var inst_25413__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_25414 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25413__$1);
var state_25441__$1 = (function (){var statearr_25455 = state_25441;
(statearr_25455[(11)] = inst_25413__$1);

(statearr_25455[(15)] = inst_25412);

return statearr_25455;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25441__$1,(2),inst_25414);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__14650__auto__,map__25410,map__25410__$1,opts,on_jsload,before_jsload,map__25411,map__25411__$1,msg,files))
;
return ((function (switch__14594__auto__,c__14650__auto__,map__25410,map__25410__$1,opts,on_jsload,before_jsload,map__25411,map__25411__$1,msg,files){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_25459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25459[(0)] = state_machine__14595__auto__);

(statearr_25459[(1)] = (1));

return statearr_25459;
});
var state_machine__14595__auto____1 = (function (state_25441){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e25460){if((e25460 instanceof Object)){
var ex__14598__auto__ = e25460;
var statearr_25461_25471 = state_25441;
(statearr_25461_25471[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25472 = state_25441;
state_25441 = G__25472;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25441){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__,map__25410,map__25410__$1,opts,on_jsload,before_jsload,map__25411,map__25411__$1,msg,files))
})();
var state__14652__auto__ = (function (){var statearr_25462 = f__14651__auto__.call(null);
(statearr_25462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_25462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__,map__25410,map__25410__$1,opts,on_jsload,before_jsload,map__25411,map__25411__$1,msg,files))
);

return c__14650__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__25473,link_href){
var map__25475 = p__25473;
var map__25475__$1 = ((cljs.core.seq_QMARK_.call(null,map__25475))?cljs.core.apply.call(null,cljs.core.hash_map,map__25475):map__25475);
var request_url = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__,parent){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__,parent){
return (function (state_25496){
var state_val_25497 = (state_25496[(1)]);
if((state_val_25497 === (2))){
var inst_25493 = (state_25496[(2)]);
var inst_25494 = parent.removeChild(orig_link);
var state_25496__$1 = (function (){var statearr_25498 = state_25496;
(statearr_25498[(7)] = inst_25493);

return statearr_25498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25496__$1,inst_25494);
} else {
if((state_val_25497 === (1))){
var inst_25491 = cljs.core.async.timeout.call(null,(200));
var state_25496__$1 = state_25496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25496__$1,(2),inst_25491);
} else {
return null;
}
}
});})(c__14650__auto__,parent))
;
return ((function (switch__14594__auto__,c__14650__auto__,parent){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_25502 = [null,null,null,null,null,null,null,null];
(statearr_25502[(0)] = state_machine__14595__auto__);

(statearr_25502[(1)] = (1));

return statearr_25502;
});
var state_machine__14595__auto____1 = (function (state_25496){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e25503){if((e25503 instanceof Object)){
var ex__14598__auto__ = e25503;
var statearr_25504_25506 = state_25496;
(statearr_25504_25506[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25507 = state_25496;
state_25496 = G__25507;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25496){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__,parent))
})();
var state__14652__auto__ = (function (){var statearr_25505 = f__14651__auto__.call(null);
(statearr_25505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_25505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__,parent))
);

return c__14650__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__25508){
var map__25510 = p__25508;
var map__25510__$1 = ((cljs.core.seq_QMARK_.call(null,map__25510))?cljs.core.apply.call(null,cljs.core.hash_map,map__25510):map__25510);
var f_data = map__25510__$1;
var request_url = cljs.core.get.call(null,map__25510__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25510__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__25511,files_msg){
var map__25533 = p__25511;
var map__25533__$1 = ((cljs.core.seq_QMARK_.call(null,map__25533))?cljs.core.apply.call(null,cljs.core.hash_map,map__25533):map__25533);
var opts = map__25533__$1;
var on_cssload = cljs.core.get.call(null,map__25533__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__25534_25554 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25535_25555 = null;
var count__25536_25556 = (0);
var i__25537_25557 = (0);
while(true){
if((i__25537_25557 < count__25536_25556)){
var f_25558 = cljs.core._nth.call(null,chunk__25535_25555,i__25537_25557);
figwheel.client.file_reloading.reload_css_file.call(null,f_25558);

var G__25559 = seq__25534_25554;
var G__25560 = chunk__25535_25555;
var G__25561 = count__25536_25556;
var G__25562 = (i__25537_25557 + (1));
seq__25534_25554 = G__25559;
chunk__25535_25555 = G__25560;
count__25536_25556 = G__25561;
i__25537_25557 = G__25562;
continue;
} else {
var temp__4126__auto___25563 = cljs.core.seq.call(null,seq__25534_25554);
if(temp__4126__auto___25563){
var seq__25534_25564__$1 = temp__4126__auto___25563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25534_25564__$1)){
var c__12974__auto___25565 = cljs.core.chunk_first.call(null,seq__25534_25564__$1);
var G__25566 = cljs.core.chunk_rest.call(null,seq__25534_25564__$1);
var G__25567 = c__12974__auto___25565;
var G__25568 = cljs.core.count.call(null,c__12974__auto___25565);
var G__25569 = (0);
seq__25534_25554 = G__25566;
chunk__25535_25555 = G__25567;
count__25536_25556 = G__25568;
i__25537_25557 = G__25569;
continue;
} else {
var f_25570 = cljs.core.first.call(null,seq__25534_25564__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25570);

var G__25571 = cljs.core.next.call(null,seq__25534_25564__$1);
var G__25572 = null;
var G__25573 = (0);
var G__25574 = (0);
seq__25534_25554 = G__25571;
chunk__25535_25555 = G__25572;
count__25536_25556 = G__25573;
i__25537_25557 = G__25574;
continue;
}
} else {
}
}
break;
}

var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__,map__25533,map__25533__$1,opts,on_cssload){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__,map__25533,map__25533__$1,opts,on_cssload){
return (function (state_25544){
var state_val_25545 = (state_25544[(1)]);
if((state_val_25545 === (2))){
var inst_25540 = (state_25544[(2)]);
var inst_25541 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25542 = on_cssload.call(null,inst_25541);
var state_25544__$1 = (function (){var statearr_25546 = state_25544;
(statearr_25546[(7)] = inst_25540);

return statearr_25546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25544__$1,inst_25542);
} else {
if((state_val_25545 === (1))){
var inst_25538 = cljs.core.async.timeout.call(null,(100));
var state_25544__$1 = state_25544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25544__$1,(2),inst_25538);
} else {
return null;
}
}
});})(c__14650__auto__,map__25533,map__25533__$1,opts,on_cssload))
;
return ((function (switch__14594__auto__,c__14650__auto__,map__25533,map__25533__$1,opts,on_cssload){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_25550 = [null,null,null,null,null,null,null,null];
(statearr_25550[(0)] = state_machine__14595__auto__);

(statearr_25550[(1)] = (1));

return statearr_25550;
});
var state_machine__14595__auto____1 = (function (state_25544){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e25551){if((e25551 instanceof Object)){
var ex__14598__auto__ = e25551;
var statearr_25552_25575 = state_25544;
(statearr_25552_25575[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25576 = state_25544;
state_25544 = G__25576;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25544){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__,map__25533,map__25533__$1,opts,on_cssload))
})();
var state__14652__auto__ = (function (){var statearr_25553 = f__14651__auto__.call(null);
(statearr_25553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_25553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__,map__25533,map__25533__$1,opts,on_cssload))
);

return c__14650__auto__;
});
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});

//# sourceMappingURL=file_reloading.js.map?rel=1421962950349