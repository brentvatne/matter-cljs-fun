// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('plumbing.core')) {
goog.provide('plumbing.core');
}
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__23871__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__23871 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__23872__i = 0, G__23872__a = new Array(arguments.length -  5);
while (G__23872__i < G__23872__a.length) {G__23872__a[G__23872__i] = arguments[G__23872__i + 5]; ++G__23872__i;}
  xs = new cljs.core.IndexedSeq(G__23872__a,0);
} 
return G__23871__delegate.call(this,m,k,f,x1,x2,xs);};
G__23871.cljs$lang$maxFixedArity = 5;
G__23871.cljs$lang$applyTo = (function (arglist__23873){
var m = cljs.core.first(arglist__23873);
arglist__23873 = cljs.core.next(arglist__23873);
var k = cljs.core.first(arglist__23873);
arglist__23873 = cljs.core.next(arglist__23873);
var f = cljs.core.first(arglist__23873);
arglist__23873 = cljs.core.next(arglist__23873);
var x1 = cljs.core.first(arglist__23873);
arglist__23873 = cljs.core.next(arglist__23873);
var x2 = cljs.core.first(arglist__23873);
var xs = cljs.core.rest(arglist__23873);
return G__23871__delegate(m,k,f,x1,x2,xs);
});
G__23871.cljs$core$IFn$_invoke$arity$variadic = G__23871__delegate;
return G__23871;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
var G__23874 = null;
if (arguments.length > 5) {
var G__23875__i = 0, G__23875__a = new Array(arguments.length -  5);
while (G__23875__i < G__23875__a.length) {G__23875__a[G__23875__i] = arguments[G__23875__i + 5]; ++G__23875__i;}
G__23874 = new cljs.core.IndexedSeq(G__23875__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__23874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__19822__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23884_23890 = cljs.core.seq.call(null,m);
var chunk__23885_23891 = null;
var count__23886_23892 = (0);
var i__23887_23893 = (0);
while(true){
if((i__23887_23893 < count__23886_23892)){
var vec__23888_23894 = cljs.core._nth.call(null,chunk__23885_23891,i__23887_23893);
var k_23895 = cljs.core.nth.call(null,vec__23888_23894,(0),null);
var v_23896 = cljs.core.nth.call(null,vec__23888_23894,(1),null);
var m23883_23897 = cljs.core.deref.call(null,m_atom__19822__auto__);
cljs.core.reset_BANG_.call(null,m_atom__19822__auto__,cljs.core.assoc_BANG_.call(null,m23883_23897,k_23895,f.call(null,v_23896)));

var G__23898 = seq__23884_23890;
var G__23899 = chunk__23885_23891;
var G__23900 = count__23886_23892;
var G__23901 = (i__23887_23893 + (1));
seq__23884_23890 = G__23898;
chunk__23885_23891 = G__23899;
count__23886_23892 = G__23900;
i__23887_23893 = G__23901;
continue;
} else {
var temp__4126__auto___23902 = cljs.core.seq.call(null,seq__23884_23890);
if(temp__4126__auto___23902){
var seq__23884_23903__$1 = temp__4126__auto___23902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23884_23903__$1)){
var c__13394__auto___23904 = cljs.core.chunk_first.call(null,seq__23884_23903__$1);
var G__23905 = cljs.core.chunk_rest.call(null,seq__23884_23903__$1);
var G__23906 = c__13394__auto___23904;
var G__23907 = cljs.core.count.call(null,c__13394__auto___23904);
var G__23908 = (0);
seq__23884_23890 = G__23905;
chunk__23885_23891 = G__23906;
count__23886_23892 = G__23907;
i__23887_23893 = G__23908;
continue;
} else {
var vec__23889_23909 = cljs.core.first.call(null,seq__23884_23903__$1);
var k_23910 = cljs.core.nth.call(null,vec__23889_23909,(0),null);
var v_23911 = cljs.core.nth.call(null,vec__23889_23909,(1),null);
var m23883_23912 = cljs.core.deref.call(null,m_atom__19822__auto__);
cljs.core.reset_BANG_.call(null,m_atom__19822__auto__,cljs.core.assoc_BANG_.call(null,m23883_23912,k_23910,f.call(null,v_23911)));

var G__23913 = cljs.core.next.call(null,seq__23884_23903__$1);
var G__23914 = null;
var G__23915 = (0);
var G__23916 = (0);
seq__23884_23890 = G__23913;
chunk__23885_23891 = G__23914;
count__23886_23892 = G__23915;
i__23887_23893 = G__23916;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__19822__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__19822__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23925_23931 = cljs.core.seq.call(null,m);
var chunk__23926_23932 = null;
var count__23927_23933 = (0);
var i__23928_23934 = (0);
while(true){
if((i__23928_23934 < count__23927_23933)){
var vec__23929_23935 = cljs.core._nth.call(null,chunk__23926_23932,i__23928_23934);
var k_23936 = cljs.core.nth.call(null,vec__23929_23935,(0),null);
var v_23937 = cljs.core.nth.call(null,vec__23929_23935,(1),null);
var m23924_23938 = cljs.core.deref.call(null,m_atom__19822__auto__);
cljs.core.reset_BANG_.call(null,m_atom__19822__auto__,cljs.core.assoc_BANG_.call(null,m23924_23938,f.call(null,k_23936),v_23937));

var G__23939 = seq__23925_23931;
var G__23940 = chunk__23926_23932;
var G__23941 = count__23927_23933;
var G__23942 = (i__23928_23934 + (1));
seq__23925_23931 = G__23939;
chunk__23926_23932 = G__23940;
count__23927_23933 = G__23941;
i__23928_23934 = G__23942;
continue;
} else {
var temp__4126__auto___23943 = cljs.core.seq.call(null,seq__23925_23931);
if(temp__4126__auto___23943){
var seq__23925_23944__$1 = temp__4126__auto___23943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23925_23944__$1)){
var c__13394__auto___23945 = cljs.core.chunk_first.call(null,seq__23925_23944__$1);
var G__23946 = cljs.core.chunk_rest.call(null,seq__23925_23944__$1);
var G__23947 = c__13394__auto___23945;
var G__23948 = cljs.core.count.call(null,c__13394__auto___23945);
var G__23949 = (0);
seq__23925_23931 = G__23946;
chunk__23926_23932 = G__23947;
count__23927_23933 = G__23948;
i__23928_23934 = G__23949;
continue;
} else {
var vec__23930_23950 = cljs.core.first.call(null,seq__23925_23944__$1);
var k_23951 = cljs.core.nth.call(null,vec__23930_23950,(0),null);
var v_23952 = cljs.core.nth.call(null,vec__23930_23950,(1),null);
var m23924_23953 = cljs.core.deref.call(null,m_atom__19822__auto__);
cljs.core.reset_BANG_.call(null,m_atom__19822__auto__,cljs.core.assoc_BANG_.call(null,m23924_23953,f.call(null,k_23951),v_23952));

var G__23954 = cljs.core.next.call(null,seq__23925_23944__$1);
var G__23955 = null;
var G__23956 = (0);
var G__23957 = (0);
seq__23925_23931 = G__23954;
chunk__23926_23932 = G__23955;
count__23927_23933 = G__23956;
i__23928_23934 = G__23957;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__19822__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__19822__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23964_23968 = cljs.core.seq.call(null,ks);
var chunk__23965_23969 = null;
var count__23966_23970 = (0);
var i__23967_23971 = (0);
while(true){
if((i__23967_23971 < count__23966_23970)){
var k_23972 = cljs.core._nth.call(null,chunk__23965_23969,i__23967_23971);
var m23963_23973 = cljs.core.deref.call(null,m_atom__19822__auto__);
cljs.core.reset_BANG_.call(null,m_atom__19822__auto__,cljs.core.assoc_BANG_.call(null,m23963_23973,k_23972,f.call(null,k_23972)));

var G__23974 = seq__23964_23968;
var G__23975 = chunk__23965_23969;
var G__23976 = count__23966_23970;
var G__23977 = (i__23967_23971 + (1));
seq__23964_23968 = G__23974;
chunk__23965_23969 = G__23975;
count__23966_23970 = G__23976;
i__23967_23971 = G__23977;
continue;
} else {
var temp__4126__auto___23978 = cljs.core.seq.call(null,seq__23964_23968);
if(temp__4126__auto___23978){
var seq__23964_23979__$1 = temp__4126__auto___23978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23964_23979__$1)){
var c__13394__auto___23980 = cljs.core.chunk_first.call(null,seq__23964_23979__$1);
var G__23981 = cljs.core.chunk_rest.call(null,seq__23964_23979__$1);
var G__23982 = c__13394__auto___23980;
var G__23983 = cljs.core.count.call(null,c__13394__auto___23980);
var G__23984 = (0);
seq__23964_23968 = G__23981;
chunk__23965_23969 = G__23982;
count__23966_23970 = G__23983;
i__23967_23971 = G__23984;
continue;
} else {
var k_23985 = cljs.core.first.call(null,seq__23964_23979__$1);
var m23963_23986 = cljs.core.deref.call(null,m_atom__19822__auto__);
cljs.core.reset_BANG_.call(null,m_atom__19822__auto__,cljs.core.assoc_BANG_.call(null,m23963_23986,k_23985,f.call(null,k_23985)));

var G__23987 = cljs.core.next.call(null,seq__23964_23979__$1);
var G__23988 = null;
var G__23989 = (0);
var G__23990 = (0);
seq__23964_23968 = G__23987;
chunk__23965_23969 = G__23988;
count__23966_23970 = G__23989;
i__23967_23971 = G__23990;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__19822__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__19822__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23997_24001 = cljs.core.seq.call(null,vs);
var chunk__23998_24002 = null;
var count__23999_24003 = (0);
var i__24000_24004 = (0);
while(true){
if((i__24000_24004 < count__23999_24003)){
var v_24005 = cljs.core._nth.call(null,chunk__23998_24002,i__24000_24004);
var m23996_24006 = cljs.core.deref.call(null,m_atom__19822__auto__);
cljs.core.reset_BANG_.call(null,m_atom__19822__auto__,cljs.core.assoc_BANG_.call(null,m23996_24006,f.call(null,v_24005),v_24005));

var G__24007 = seq__23997_24001;
var G__24008 = chunk__23998_24002;
var G__24009 = count__23999_24003;
var G__24010 = (i__24000_24004 + (1));
seq__23997_24001 = G__24007;
chunk__23998_24002 = G__24008;
count__23999_24003 = G__24009;
i__24000_24004 = G__24010;
continue;
} else {
var temp__4126__auto___24011 = cljs.core.seq.call(null,seq__23997_24001);
if(temp__4126__auto___24011){
var seq__23997_24012__$1 = temp__4126__auto___24011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23997_24012__$1)){
var c__13394__auto___24013 = cljs.core.chunk_first.call(null,seq__23997_24012__$1);
var G__24014 = cljs.core.chunk_rest.call(null,seq__23997_24012__$1);
var G__24015 = c__13394__auto___24013;
var G__24016 = cljs.core.count.call(null,c__13394__auto___24013);
var G__24017 = (0);
seq__23997_24001 = G__24014;
chunk__23998_24002 = G__24015;
count__23999_24003 = G__24016;
i__24000_24004 = G__24017;
continue;
} else {
var v_24018 = cljs.core.first.call(null,seq__23997_24012__$1);
var m23996_24019 = cljs.core.deref.call(null,m_atom__19822__auto__);
cljs.core.reset_BANG_.call(null,m_atom__19822__auto__,cljs.core.assoc_BANG_.call(null,m23996_24019,f.call(null,v_24018),v_24018));

var G__24020 = cljs.core.next.call(null,seq__23997_24012__$1);
var G__24021 = null;
var G__24022 = (0);
var G__24023 = (0);
seq__23997_24001 = G__24020;
chunk__23998_24002 = G__24021;
count__23999_24003 = G__24022;
i__24000_24004 = G__24023;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__19822__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__24024){
var vec__24026 = p__24024;
var k = cljs.core.nth.call(null,vec__24026,(0),null);
var ks = cljs.core.nthnext.call(null,vec__24026,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__12595__auto__ = ks;
if(and__12595__auto__){
return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__12595__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__19822__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__24035_24041 = cljs.core.seq.call(null,x);
var chunk__24036_24042 = null;
var count__24037_24043 = (0);
var i__24038_24044 = (0);
while(true){
if((i__24038_24044 < count__24037_24043)){
var vec__24039_24045 = cljs.core._nth.call(null,chunk__24036_24042,i__24038_24044);
var k_24046 = cljs.core.nth.call(null,vec__24039_24045,(0),null);
var v_24047 = cljs.core.nth.call(null,vec__24039_24045,(1),null);
var m24034_24048 = cljs.core.deref.call(null,m_atom__19822__auto__);
cljs.core.reset_BANG_.call(null,m_atom__19822__auto__,cljs.core.assoc_BANG_.call(null,m24034_24048,((typeof k_24046 === 'string')?cljs.core.keyword.call(null,k_24046):k_24046),keywordize_map.call(null,v_24047)));

var G__24049 = seq__24035_24041;
var G__24050 = chunk__24036_24042;
var G__24051 = count__24037_24043;
var G__24052 = (i__24038_24044 + (1));
seq__24035_24041 = G__24049;
chunk__24036_24042 = G__24050;
count__24037_24043 = G__24051;
i__24038_24044 = G__24052;
continue;
} else {
var temp__4126__auto___24053 = cljs.core.seq.call(null,seq__24035_24041);
if(temp__4126__auto___24053){
var seq__24035_24054__$1 = temp__4126__auto___24053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24035_24054__$1)){
var c__13394__auto___24055 = cljs.core.chunk_first.call(null,seq__24035_24054__$1);
var G__24056 = cljs.core.chunk_rest.call(null,seq__24035_24054__$1);
var G__24057 = c__13394__auto___24055;
var G__24058 = cljs.core.count.call(null,c__13394__auto___24055);
var G__24059 = (0);
seq__24035_24041 = G__24056;
chunk__24036_24042 = G__24057;
count__24037_24043 = G__24058;
i__24038_24044 = G__24059;
continue;
} else {
var vec__24040_24060 = cljs.core.first.call(null,seq__24035_24054__$1);
var k_24061 = cljs.core.nth.call(null,vec__24040_24060,(0),null);
var v_24062 = cljs.core.nth.call(null,vec__24040_24060,(1),null);
var m24034_24063 = cljs.core.deref.call(null,m_atom__19822__auto__);
cljs.core.reset_BANG_.call(null,m_atom__19822__auto__,cljs.core.assoc_BANG_.call(null,m24034_24063,((typeof k_24061 === 'string')?cljs.core.keyword.call(null,k_24061):k_24061),keywordize_map.call(null,v_24062)));

var G__24064 = cljs.core.next.call(null,seq__24035_24054__$1);
var G__24065 = null;
var G__24066 = (0);
var G__24067 = (0);
seq__24035_24041 = G__24064;
chunk__24036_24042 = G__24065;
count__24037_24043 = G__24066;
i__24038_24044 = G__24067;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__19822__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4124__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__19891__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__19891__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__24068 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__24069 = cljs.core.next.call(null,ks);
m = G__24068;
ks = G__24069;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__12607__auto__ = m;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__13363__auto__ = (function iter__24078(s__24079){
return (new cljs.core.LazySeq(null,(function (){
var s__24079__$1 = s__24079;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24079__$1);
if(temp__4126__auto__){
var s__24079__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24079__$2)){
var c__13361__auto__ = cljs.core.chunk_first.call(null,s__24079__$2);
var size__13362__auto__ = cljs.core.count.call(null,c__13361__auto__);
var b__24081 = cljs.core.chunk_buffer.call(null,size__13362__auto__);
if((function (){var i__24080 = (0);
while(true){
if((i__24080 < size__13362__auto__)){
var vec__24084 = cljs.core._nth.call(null,c__13361__auto__,i__24080);
var k = cljs.core.nth.call(null,vec__24084,(0),null);
var v = cljs.core.nth.call(null,vec__24084,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__24081,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__24086 = (i__24080 + (1));
i__24080 = G__24086;
continue;
} else {
var G__24087 = (i__24080 + (1));
i__24080 = G__24087;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24081),iter__24078.call(null,cljs.core.chunk_rest.call(null,s__24079__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24081),null);
}
} else {
var vec__24085 = cljs.core.first.call(null,s__24079__$2);
var k = cljs.core.nth.call(null,vec__24085,(0),null);
var v = cljs.core.nth.call(null,vec__24085,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__24078.call(null,cljs.core.rest.call(null,s__24079__$2)));
} else {
var G__24088 = cljs.core.rest.call(null,s__24079__$2);
s__24079__$1 = G__24088;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13363__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__24089__i = 0, G__24089__a = new Array(arguments.length -  1);
while (G__24089__i < G__24089__a.length) {G__24089__a[G__24089__i] = arguments[G__24089__i + 1]; ++G__24089__i;}
  kvs = new cljs.core.IndexedSeq(G__24089__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__24090){
var m = cljs.core.first(arglist__24090);
var kvs = cljs.core.rest(arglist__24090);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__24091__i = 0, G__24091__a = new Array(arguments.length -  3);
while (G__24091__i < G__24091__a.length) {G__24091__a[G__24091__i] = arguments[G__24091__i + 3]; ++G__24091__i;}
  args = new cljs.core.IndexedSeq(G__24091__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__24092){
var m = cljs.core.first(arglist__24092);
arglist__24092 = cljs.core.next(arglist__24092);
var key_seq = cljs.core.first(arglist__24092);
arglist__24092 = cljs.core.next(arglist__24092);
var f = cljs.core.first(arglist__24092);
var args = cljs.core.rest(arglist__24092);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next.call(null,s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4126__auto__ = cljs.core.seq.call(null,xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__13363__auto__ = ((function (s){
return (function iter__24097(s__24098){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__24098__$1 = s__24098;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24098__$1);
if(temp__4126__auto__){
var s__24098__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24098__$2)){
var c__13361__auto__ = cljs.core.chunk_first.call(null,s__24098__$2);
var size__13362__auto__ = cljs.core.count.call(null,c__13361__auto__);
var b__24100 = cljs.core.chunk_buffer.call(null,size__13362__auto__);
if((function (){var i__24099 = (0);
while(true){
if((i__24099 < size__13362__auto__)){
var x = cljs.core._nth.call(null,c__13361__auto__,i__24099);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__24100,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__24101 = (i__24099 + (1));
i__24099 = G__24101;
continue;
} else {
var G__24102 = (i__24099 + (1));
i__24099 = G__24102;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24100),iter__24097.call(null,cljs.core.chunk_rest.call(null,s__24098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24100),null);
}
} else {
var x = cljs.core.first.call(null,s__24098__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__24097.call(null,cljs.core.rest.call(null,s__24098__$2)));
} else {
var G__24103 = cljs.core.rest.call(null,s__24098__$2);
s__24098__$1 = G__24103;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__13363__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
var G__24104__i = 0, G__24104__a = new Array(arguments.length -  0);
while (G__24104__i < G__24104__a.length) {G__24104__a[G__24104__i] = arguments[G__24104__i + 0]; ++G__24104__i;}
  colls = new cljs.core.IndexedSeq(G__24104__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__24105){
var colls = cljs.core.seq(arglist__24105);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__24106__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__24107 = conj_when.call(null,coll,x);
var G__24108 = cljs.core.first.call(null,xs);
var G__24109 = cljs.core.next.call(null,xs);
coll = G__24107;
x = G__24108;
xs = G__24109;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__24106 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__24110__i = 0, G__24110__a = new Array(arguments.length -  2);
while (G__24110__i < G__24110__a.length) {G__24110__a[G__24110__i] = arguments[G__24110__i + 2]; ++G__24110__i;}
  xs = new cljs.core.IndexedSeq(G__24110__a,0);
} 
return G__24106__delegate.call(this,coll,x,xs);};
G__24106.cljs$lang$maxFixedArity = 2;
G__24106.cljs$lang$applyTo = (function (arglist__24111){
var coll = cljs.core.first(arglist__24111);
arglist__24111 = cljs.core.next(arglist__24111);
var x = cljs.core.first(arglist__24111);
var xs = cljs.core.rest(arglist__24111);
return G__24106__delegate(coll,x,xs);
});
G__24106.cljs$core$IFn$_invoke$arity$variadic = G__24106__delegate;
return G__24106;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__24112 = null;
if (arguments.length > 2) {
var G__24113__i = 0, G__24113__a = new Array(arguments.length -  2);
while (G__24113__i < G__24113__a.length) {G__24113__a[G__24113__i] = arguments[G__24113__i + 2]; ++G__24113__i;}
G__24112 = new cljs.core.IndexedSeq(G__24113__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__24112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__24115__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__24114_SHARP_){
return cljs.core.apply.call(null,f,p1__24114_SHARP_,args);
}));
};
var G__24115 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__24116__i = 0, G__24116__a = new Array(arguments.length -  2);
while (G__24116__i < G__24116__a.length) {G__24116__a[G__24116__i] = arguments[G__24116__i + 2]; ++G__24116__i;}
  args = new cljs.core.IndexedSeq(G__24116__a,0);
} 
return G__24115__delegate.call(this,a,f,args);};
G__24115.cljs$lang$maxFixedArity = 2;
G__24115.cljs$lang$applyTo = (function (arglist__24117){
var a = cljs.core.first(arglist__24117);
arglist__24117 = cljs.core.next(arglist__24117);
var f = cljs.core.first(arglist__24117);
var args = cljs.core.rest(arglist__24117);
return G__24115__delegate(a,f,args);
});
G__24115.cljs$core$IFn$_invoke$arity$variadic = G__24115__delegate;
return G__24115;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__24118 = null;
if (arguments.length > 2) {
var G__24119__i = 0, G__24119__a = new Array(arguments.length -  2);
while (G__24119__i < G__24119__a.length) {G__24119__a[G__24119__i] = arguments[G__24119__i + 2]; ++G__24119__i;}
G__24118 = new cljs.core.IndexedSeq(G__24119__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__24118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__24120__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__24120 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__24121__i = 0, G__24121__a = new Array(arguments.length -  2);
while (G__24121__i < G__24121__a.length) {G__24121__a[G__24121__i] = arguments[G__24121__i + 2]; ++G__24121__i;}
  args = new cljs.core.IndexedSeq(G__24121__a,0);
} 
return G__24120__delegate.call(this,f,arg,args);};
G__24120.cljs$lang$maxFixedArity = 2;
G__24120.cljs$lang$applyTo = (function (arglist__24122){
var f = cljs.core.first(arglist__24122);
arglist__24122 = cljs.core.next(arglist__24122);
var arg = cljs.core.first(arglist__24122);
var args = cljs.core.rest(arglist__24122);
return G__24120__delegate(f,arg,args);
});
G__24120.cljs$core$IFn$_invoke$arity$variadic = G__24120__delegate;
return G__24120;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__24123 = null;
if (arguments.length > 2) {
var G__24124__i = 0, G__24124__a = new Array(arguments.length -  2);
while (G__24124__i < G__24124__a.length) {G__24124__a[G__24124__i] = arguments[G__24124__i + 2]; ++G__24124__i;}
G__24123 = new cljs.core.IndexedSeq(G__24124__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__24123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map?rel=1422152256406