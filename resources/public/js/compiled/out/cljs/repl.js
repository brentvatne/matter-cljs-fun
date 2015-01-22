// Compiled by ClojureScript 0.0-2665 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28969_28973 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28970_28974 = null;
var count__28971_28975 = (0);
var i__28972_28976 = (0);
while(true){
if((i__28972_28976 < count__28971_28975)){
var f_28977 = cljs.core._nth.call(null,chunk__28970_28974,i__28972_28976);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_28977);

var G__28978 = seq__28969_28973;
var G__28979 = chunk__28970_28974;
var G__28980 = count__28971_28975;
var G__28981 = (i__28972_28976 + (1));
seq__28969_28973 = G__28978;
chunk__28970_28974 = G__28979;
count__28971_28975 = G__28980;
i__28972_28976 = G__28981;
continue;
} else {
var temp__4126__auto___28982 = cljs.core.seq.call(null,seq__28969_28973);
if(temp__4126__auto___28982){
var seq__28969_28983__$1 = temp__4126__auto___28982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28969_28983__$1)){
var c__12974__auto___28984 = cljs.core.chunk_first.call(null,seq__28969_28983__$1);
var G__28985 = cljs.core.chunk_rest.call(null,seq__28969_28983__$1);
var G__28986 = c__12974__auto___28984;
var G__28987 = cljs.core.count.call(null,c__12974__auto___28984);
var G__28988 = (0);
seq__28969_28973 = G__28985;
chunk__28970_28974 = G__28986;
count__28971_28975 = G__28987;
i__28972_28976 = G__28988;
continue;
} else {
var f_28989 = cljs.core.first.call(null,seq__28969_28983__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_28989);

var G__28990 = cljs.core.next.call(null,seq__28969_28983__$1);
var G__28991 = null;
var G__28992 = (0);
var G__28993 = (0);
seq__28969_28973 = G__28990;
chunk__28970_28974 = G__28991;
count__28971_28975 = G__28992;
i__28972_28976 = G__28993;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1421963616291