// Compiled by ClojureScript 0.0-2665 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__24836){
var map__24838 = p__24836;
var map__24838__$1 = ((cljs.core.seq_QMARK_.call(null,map__24838))?cljs.core.apply.call(null,cljs.core.hash_map,map__24838):map__24838);
var websocket_url = cljs.core.get.call(null,map__24838__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
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
figwheel.client.file_reloading.js_reload = (function js_reload(p__24839,callback){
var map__24841 = p__24839;
var map__24841__$1 = ((cljs.core.seq_QMARK_.call(null,map__24841))?cljs.core.apply.call(null,cljs.core.hash_map,map__24841):map__24841);
var msg = map__24841__$1;
var meta_data = cljs.core.get.call(null,map__24841__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__24841__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__24841__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__24841__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__12595__auto__ = (function (){var or__12607__auto__ = dependency_file;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (function (){var and__12595__auto__ = meta_data;
if(cljs.core.truth_(and__12595__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__12595__auto__;
}
})();
if(cljs.core.truth_(or__12607__auto____$1)){
return or__12607__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__12595__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__12607__auto__ = meta_data;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__12595__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__24841,map__24841__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__24841,map__24841__$1,msg,meta_data,dependency_file,namespace,request_url))
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
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__24842,p__24843){
var map__24846 = p__24842;
var map__24846__$1 = ((cljs.core.seq_QMARK_.call(null,map__24846))?cljs.core.apply.call(null,cljs.core.hash_map,map__24846):map__24846);
var opts = map__24846__$1;
var url_rewriter = cljs.core.get.call(null,map__24846__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__24847 = p__24843;
var map__24847__$1 = ((cljs.core.seq_QMARK_.call(null,map__24847))?cljs.core.apply.call(null,cljs.core.hash_map,map__24847):map__24847);
var d = map__24847__$1;
var file = cljs.core.get.call(null,map__24847__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__24849,p__24850){
var map__24904 = p__24849;
var map__24904__$1 = ((cljs.core.seq_QMARK_.call(null,map__24904))?cljs.core.apply.call(null,cljs.core.hash_map,map__24904):map__24904);
var opts = map__24904__$1;
var on_jsload = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__24905 = p__24850;
var map__24905__$1 = ((cljs.core.seq_QMARK_.call(null,map__24905))?cljs.core.apply.call(null,cljs.core.hash_map,map__24905):map__24905);
var msg = map__24905__$1;
var files = cljs.core.get.call(null,map__24905__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__,map__24904,map__24904__$1,opts,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__,map__24904,map__24904__$1,opts,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (state_24935){
var state_val_24936 = (state_24935[(1)]);
if((state_val_24936 === (8))){
var inst_24933 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24935__$1,inst_24933);
} else {
if((state_val_24936 === (7))){
var state_24935__$1 = state_24935;
var statearr_24937_24957 = state_24935__$1;
(statearr_24937_24957[(2)] = null);

(statearr_24937_24957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (6))){
var inst_24913 = (state_24935[(7)]);
var inst_24927 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_24928 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24913);
var inst_24929 = cljs.core.pr_str.call(null,inst_24928);
var inst_24930 = console.log("not required:",inst_24929);
var state_24935__$1 = (function (){var statearr_24938 = state_24935;
(statearr_24938[(8)] = inst_24927);

return statearr_24938;
})();
var statearr_24939_24958 = state_24935__$1;
(statearr_24939_24958[(2)] = inst_24930);

(statearr_24939_24958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (5))){
var inst_24913 = (state_24935[(7)]);
var inst_24924 = (state_24935[(2)]);
var inst_24925 = cljs.core.not_empty.call(null,inst_24913);
var state_24935__$1 = (function (){var statearr_24940 = state_24935;
(statearr_24940[(9)] = inst_24924);

return statearr_24940;
})();
if(cljs.core.truth_(inst_24925)){
var statearr_24941_24959 = state_24935__$1;
(statearr_24941_24959[(1)] = (6));

} else {
var statearr_24942_24960 = state_24935__$1;
(statearr_24942_24960[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (4))){
var state_24935__$1 = state_24935;
var statearr_24943_24961 = state_24935__$1;
(statearr_24943_24961[(2)] = null);

(statearr_24943_24961[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (3))){
var inst_24910 = (state_24935[(10)]);
var inst_24913 = (state_24935[(7)]);
var inst_24907 = (state_24935[(11)]);
var inst_24911 = (state_24935[(12)]);
var inst_24916 = console.debug("Figwheel: loaded these files");
var inst_24917 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24911);
var inst_24918 = cljs.core.pr_str.call(null,inst_24917);
var inst_24919 = console.log(inst_24918);
var inst_24920 = (function (){var files_not_loaded = inst_24913;
var res = inst_24911;
var res_SINGLEQUOTE_ = inst_24910;
var files_SINGLEQUOTE_ = inst_24907;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_24910,inst_24913,inst_24907,inst_24911,inst_24916,inst_24917,inst_24918,inst_24919,state_val_24936,c__14527__auto__,map__24904,map__24904__$1,opts,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_24910,inst_24913,inst_24907,inst_24911,inst_24916,inst_24917,inst_24918,inst_24919,state_val_24936,c__14527__auto__,map__24904,map__24904__$1,opts,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var inst_24921 = setTimeout(inst_24920,(10));
var state_24935__$1 = (function (){var statearr_24944 = state_24935;
(statearr_24944[(13)] = inst_24916);

(statearr_24944[(14)] = inst_24919);

return statearr_24944;
})();
var statearr_24945_24962 = state_24935__$1;
(statearr_24945_24962[(2)] = inst_24921);

(statearr_24945_24962[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (2))){
var inst_24910 = (state_24935[(10)]);
var inst_24907 = (state_24935[(11)]);
var inst_24911 = (state_24935[(12)]);
var inst_24910__$1 = (state_24935[(2)]);
var inst_24911__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24910__$1);
var inst_24912 = (function (){var res = inst_24911__$1;
var res_SINGLEQUOTE_ = inst_24910__$1;
var files_SINGLEQUOTE_ = inst_24907;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_24910,inst_24907,inst_24911,inst_24910__$1,inst_24911__$1,state_val_24936,c__14527__auto__,map__24904,map__24904__$1,opts,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (p1__24848_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24848_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_24910,inst_24907,inst_24911,inst_24910__$1,inst_24911__$1,state_val_24936,c__14527__auto__,map__24904,map__24904__$1,opts,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var inst_24913 = cljs.core.filter.call(null,inst_24912,inst_24910__$1);
var inst_24914 = cljs.core.not_empty.call(null,inst_24911__$1);
var state_24935__$1 = (function (){var statearr_24946 = state_24935;
(statearr_24946[(10)] = inst_24910__$1);

(statearr_24946[(7)] = inst_24913);

(statearr_24946[(12)] = inst_24911__$1);

return statearr_24946;
})();
if(cljs.core.truth_(inst_24914)){
var statearr_24947_24963 = state_24935__$1;
(statearr_24947_24963[(1)] = (3));

} else {
var statearr_24948_24964 = state_24935__$1;
(statearr_24948_24964[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (1))){
var inst_24907 = (state_24935[(11)]);
var inst_24906 = before_jsload.call(null,files);
var inst_24907__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_24908 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24907__$1);
var state_24935__$1 = (function (){var statearr_24949 = state_24935;
(statearr_24949[(15)] = inst_24906);

(statearr_24949[(11)] = inst_24907__$1);

return statearr_24949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24935__$1,(2),inst_24908);
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
});})(c__14527__auto__,map__24904,map__24904__$1,opts,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
;
return ((function (switch__14512__auto__,c__14527__auto__,map__24904,map__24904__$1,opts,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_24953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24953[(0)] = state_machine__14513__auto__);

(statearr_24953[(1)] = (1));

return statearr_24953;
});
var state_machine__14513__auto____1 = (function (state_24935){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_24935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e24954){if((e24954 instanceof Object)){
var ex__14516__auto__ = e24954;
var statearr_24955_24965 = state_24935;
(statearr_24955_24965[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24966 = state_24935;
state_24935 = G__24966;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_24935){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_24935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__,map__24904,map__24904__$1,opts,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var state__14529__auto__ = (function (){var statearr_24956 = f__14528__auto__.call(null);
(statearr_24956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_24956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__,map__24904,map__24904__$1,opts,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
);

return c__14527__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__24967,link_href){
var map__24969 = p__24967;
var map__24969__$1 = ((cljs.core.seq_QMARK_.call(null,map__24969))?cljs.core.apply.call(null,cljs.core.hash_map,map__24969):map__24969);
var request_url = cljs.core.get.call(null,map__24969__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__24969__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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

var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__,parent){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__,parent){
return (function (state_24990){
var state_val_24991 = (state_24990[(1)]);
if((state_val_24991 === (2))){
var inst_24987 = (state_24990[(2)]);
var inst_24988 = parent.removeChild(orig_link);
var state_24990__$1 = (function (){var statearr_24992 = state_24990;
(statearr_24992[(7)] = inst_24987);

return statearr_24992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24990__$1,inst_24988);
} else {
if((state_val_24991 === (1))){
var inst_24985 = cljs.core.async.timeout.call(null,(200));
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24990__$1,(2),inst_24985);
} else {
return null;
}
}
});})(c__14527__auto__,parent))
;
return ((function (switch__14512__auto__,c__14527__auto__,parent){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_24996 = [null,null,null,null,null,null,null,null];
(statearr_24996[(0)] = state_machine__14513__auto__);

(statearr_24996[(1)] = (1));

return statearr_24996;
});
var state_machine__14513__auto____1 = (function (state_24990){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_24990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e24997){if((e24997 instanceof Object)){
var ex__14516__auto__ = e24997;
var statearr_24998_25000 = state_24990;
(statearr_24998_25000[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25001 = state_24990;
state_24990 = G__25001;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_24990){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_24990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__,parent))
})();
var state__14529__auto__ = (function (){var statearr_24999 = f__14528__auto__.call(null);
(statearr_24999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_24999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__,parent))
);

return c__14527__auto__;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__25002){
var map__25004 = p__25002;
var map__25004__$1 = ((cljs.core.seq_QMARK_.call(null,map__25004))?cljs.core.apply.call(null,cljs.core.hash_map,map__25004):map__25004);
var f_data = map__25004__$1;
var request_url = cljs.core.get.call(null,map__25004__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__25005,files_msg){
var map__25027 = p__25005;
var map__25027__$1 = ((cljs.core.seq_QMARK_.call(null,map__25027))?cljs.core.apply.call(null,cljs.core.hash_map,map__25027):map__25027);
var opts = map__25027__$1;
var on_cssload = cljs.core.get.call(null,map__25027__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__25028_25048 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25029_25049 = null;
var count__25030_25050 = (0);
var i__25031_25051 = (0);
while(true){
if((i__25031_25051 < count__25030_25050)){
var f_25052 = cljs.core._nth.call(null,chunk__25029_25049,i__25031_25051);
figwheel.client.file_reloading.reload_css_file.call(null,f_25052);

var G__25053 = seq__25028_25048;
var G__25054 = chunk__25029_25049;
var G__25055 = count__25030_25050;
var G__25056 = (i__25031_25051 + (1));
seq__25028_25048 = G__25053;
chunk__25029_25049 = G__25054;
count__25030_25050 = G__25055;
i__25031_25051 = G__25056;
continue;
} else {
var temp__4126__auto___25057 = cljs.core.seq.call(null,seq__25028_25048);
if(temp__4126__auto___25057){
var seq__25028_25058__$1 = temp__4126__auto___25057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25028_25058__$1)){
var c__13396__auto___25059 = cljs.core.chunk_first.call(null,seq__25028_25058__$1);
var G__25060 = cljs.core.chunk_rest.call(null,seq__25028_25058__$1);
var G__25061 = c__13396__auto___25059;
var G__25062 = cljs.core.count.call(null,c__13396__auto___25059);
var G__25063 = (0);
seq__25028_25048 = G__25060;
chunk__25029_25049 = G__25061;
count__25030_25050 = G__25062;
i__25031_25051 = G__25063;
continue;
} else {
var f_25064 = cljs.core.first.call(null,seq__25028_25058__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25064);

var G__25065 = cljs.core.next.call(null,seq__25028_25058__$1);
var G__25066 = null;
var G__25067 = (0);
var G__25068 = (0);
seq__25028_25048 = G__25065;
chunk__25029_25049 = G__25066;
count__25030_25050 = G__25067;
i__25031_25051 = G__25068;
continue;
}
} else {
}
}
break;
}

var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__,map__25027,map__25027__$1,opts,on_cssload){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__,map__25027,map__25027__$1,opts,on_cssload){
return (function (state_25038){
var state_val_25039 = (state_25038[(1)]);
if((state_val_25039 === (2))){
var inst_25034 = (state_25038[(2)]);
var inst_25035 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25036 = on_cssload.call(null,inst_25035);
var state_25038__$1 = (function (){var statearr_25040 = state_25038;
(statearr_25040[(7)] = inst_25034);

return statearr_25040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25038__$1,inst_25036);
} else {
if((state_val_25039 === (1))){
var inst_25032 = cljs.core.async.timeout.call(null,(100));
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25038__$1,(2),inst_25032);
} else {
return null;
}
}
});})(c__14527__auto__,map__25027,map__25027__$1,opts,on_cssload))
;
return ((function (switch__14512__auto__,c__14527__auto__,map__25027,map__25027__$1,opts,on_cssload){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_25044 = [null,null,null,null,null,null,null,null];
(statearr_25044[(0)] = state_machine__14513__auto__);

(statearr_25044[(1)] = (1));

return statearr_25044;
});
var state_machine__14513__auto____1 = (function (state_25038){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_25038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e25045){if((e25045 instanceof Object)){
var ex__14516__auto__ = e25045;
var statearr_25046_25069 = state_25038;
(statearr_25046_25069[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25070 = state_25038;
state_25038 = G__25070;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_25038){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_25038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__,map__25027,map__25027__$1,opts,on_cssload))
})();
var state__14529__auto__ = (function (){var statearr_25047 = f__14528__auto__.call(null);
(statearr_25047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_25047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__,map__25027,map__25027__$1,opts,on_cssload))
);

return c__14527__auto__;
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
