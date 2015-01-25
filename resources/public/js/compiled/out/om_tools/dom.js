// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('om_tools.dom')) {
goog.provide('om_tools.dom');
}
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
* Converts kebab-case to camelCase
*/
om_tools.dom.camel_case = (function camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
* Converts attributes that are kebab-case and should be camelCase
*/
om_tools.dom.opt_key_case = (function opt_key_case(attr){
if(cljs.core.truth_((function (){var or__12607__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__12607__auto__){
return or__12607__auto__;
} else {
var G__21888 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__21888) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
* Converts aliased attributes
*/
om_tools.dom.opt_key_alias = (function opt_key_alias(opt){
var G__21891 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__21891) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
* Returns potentially formatted name for DOM element attribute.
* Converts kebab-case to camelCase.
*/
om_tools.dom.format_opt_key = (function format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
* Returns potentially modified value for DOM element attribute.
* Recursively formats map values (ie :style attribute)
*/
om_tools.dom.format_opt_val = (function format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
* Returns JavaScript object for React DOM attributes from opts map
*/
om_tools.dom.format_opts = (function format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__21895){
var vec__21896 = p__21895;
var k = cljs.core.nth.call(null,vec__21896,(0),null);
var v = cljs.core.nth.call(null,vec__21896,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function valid_element_QMARK_(x){
return (function (){var or__12607__auto__ = React.isValidElement;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
* Returns a vector of [opts children] for from first and second
* argument given to DOM function
*/
om_tools.dom.element_args = (function element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(om_tools.dom.js_opts_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function element(ctor,opts,children){
var vec__21898 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__21898,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__21898,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
/**
* @param {...*} var_args
*/
om_tools.dom.a = (function() {
var a = null;
var a__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});
var a__2 = (function() { 
var G__21899__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__17018__auto__,children__17019__auto__);
};
var G__21899 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21900__i = 0, G__21900__a = new Array(arguments.length -  1);
while (G__21900__i < G__21900__a.length) {G__21900__a[G__21900__i] = arguments[G__21900__i + 1]; ++G__21900__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21900__a,0);
} 
return G__21899__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21899.cljs$lang$maxFixedArity = 1;
G__21899.cljs$lang$applyTo = (function (arglist__21901){
var opts__17018__auto__ = cljs.core.first(arglist__21901);
var children__17019__auto__ = cljs.core.rest(arglist__21901);
return G__21899__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21899.cljs$core$IFn$_invoke$arity$variadic = G__21899__delegate;
return G__21899;
})()
;
a = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return a__0.call(this);
default:
var G__21902 = null;
if (arguments.length > 1) {
var G__21903__i = 0, G__21903__a = new Array(arguments.length -  1);
while (G__21903__i < G__21903__a.length) {G__21903__a[G__21903__i] = arguments[G__21903__i + 1]; ++G__21903__i;}
G__21902 = new cljs.core.IndexedSeq(G__21903__a,0);
}
return a__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
a.cljs$lang$maxFixedArity = 1;
a.cljs$lang$applyTo = a__2.cljs$lang$applyTo;
a.cljs$core$IFn$_invoke$arity$0 = a__0;
a.cljs$core$IFn$_invoke$arity$variadic = a__2.cljs$core$IFn$_invoke$arity$variadic;
return a;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.abbr = (function() {
var abbr = null;
var abbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});
var abbr__2 = (function() { 
var G__21904__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__17018__auto__,children__17019__auto__);
};
var G__21904 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21905__i = 0, G__21905__a = new Array(arguments.length -  1);
while (G__21905__i < G__21905__a.length) {G__21905__a[G__21905__i] = arguments[G__21905__i + 1]; ++G__21905__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21905__a,0);
} 
return G__21904__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21904.cljs$lang$maxFixedArity = 1;
G__21904.cljs$lang$applyTo = (function (arglist__21906){
var opts__17018__auto__ = cljs.core.first(arglist__21906);
var children__17019__auto__ = cljs.core.rest(arglist__21906);
return G__21904__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21904.cljs$core$IFn$_invoke$arity$variadic = G__21904__delegate;
return G__21904;
})()
;
abbr = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return abbr__0.call(this);
default:
var G__21907 = null;
if (arguments.length > 1) {
var G__21908__i = 0, G__21908__a = new Array(arguments.length -  1);
while (G__21908__i < G__21908__a.length) {G__21908__a[G__21908__i] = arguments[G__21908__i + 1]; ++G__21908__i;}
G__21907 = new cljs.core.IndexedSeq(G__21908__a,0);
}
return abbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
abbr.cljs$lang$maxFixedArity = 1;
abbr.cljs$lang$applyTo = abbr__2.cljs$lang$applyTo;
abbr.cljs$core$IFn$_invoke$arity$0 = abbr__0;
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__2.cljs$core$IFn$_invoke$arity$variadic;
return abbr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.address = (function() {
var address = null;
var address__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});
var address__2 = (function() { 
var G__21909__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__17018__auto__,children__17019__auto__);
};
var G__21909 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21910__i = 0, G__21910__a = new Array(arguments.length -  1);
while (G__21910__i < G__21910__a.length) {G__21910__a[G__21910__i] = arguments[G__21910__i + 1]; ++G__21910__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21910__a,0);
} 
return G__21909__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21909.cljs$lang$maxFixedArity = 1;
G__21909.cljs$lang$applyTo = (function (arglist__21911){
var opts__17018__auto__ = cljs.core.first(arglist__21911);
var children__17019__auto__ = cljs.core.rest(arglist__21911);
return G__21909__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21909.cljs$core$IFn$_invoke$arity$variadic = G__21909__delegate;
return G__21909;
})()
;
address = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return address__0.call(this);
default:
var G__21912 = null;
if (arguments.length > 1) {
var G__21913__i = 0, G__21913__a = new Array(arguments.length -  1);
while (G__21913__i < G__21913__a.length) {G__21913__a[G__21913__i] = arguments[G__21913__i + 1]; ++G__21913__i;}
G__21912 = new cljs.core.IndexedSeq(G__21913__a,0);
}
return address__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
address.cljs$lang$maxFixedArity = 1;
address.cljs$lang$applyTo = address__2.cljs$lang$applyTo;
address.cljs$core$IFn$_invoke$arity$0 = address__0;
address.cljs$core$IFn$_invoke$arity$variadic = address__2.cljs$core$IFn$_invoke$arity$variadic;
return address;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.area = (function() {
var area = null;
var area__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});
var area__2 = (function() { 
var G__21914__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__17018__auto__,children__17019__auto__);
};
var G__21914 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21915__i = 0, G__21915__a = new Array(arguments.length -  1);
while (G__21915__i < G__21915__a.length) {G__21915__a[G__21915__i] = arguments[G__21915__i + 1]; ++G__21915__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21915__a,0);
} 
return G__21914__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21914.cljs$lang$maxFixedArity = 1;
G__21914.cljs$lang$applyTo = (function (arglist__21916){
var opts__17018__auto__ = cljs.core.first(arglist__21916);
var children__17019__auto__ = cljs.core.rest(arglist__21916);
return G__21914__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21914.cljs$core$IFn$_invoke$arity$variadic = G__21914__delegate;
return G__21914;
})()
;
area = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return area__0.call(this);
default:
var G__21917 = null;
if (arguments.length > 1) {
var G__21918__i = 0, G__21918__a = new Array(arguments.length -  1);
while (G__21918__i < G__21918__a.length) {G__21918__a[G__21918__i] = arguments[G__21918__i + 1]; ++G__21918__i;}
G__21917 = new cljs.core.IndexedSeq(G__21918__a,0);
}
return area__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
area.cljs$lang$maxFixedArity = 1;
area.cljs$lang$applyTo = area__2.cljs$lang$applyTo;
area.cljs$core$IFn$_invoke$arity$0 = area__0;
area.cljs$core$IFn$_invoke$arity$variadic = area__2.cljs$core$IFn$_invoke$arity$variadic;
return area;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.article = (function() {
var article = null;
var article__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});
var article__2 = (function() { 
var G__21919__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__17018__auto__,children__17019__auto__);
};
var G__21919 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21920__i = 0, G__21920__a = new Array(arguments.length -  1);
while (G__21920__i < G__21920__a.length) {G__21920__a[G__21920__i] = arguments[G__21920__i + 1]; ++G__21920__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21920__a,0);
} 
return G__21919__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21919.cljs$lang$maxFixedArity = 1;
G__21919.cljs$lang$applyTo = (function (arglist__21921){
var opts__17018__auto__ = cljs.core.first(arglist__21921);
var children__17019__auto__ = cljs.core.rest(arglist__21921);
return G__21919__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21919.cljs$core$IFn$_invoke$arity$variadic = G__21919__delegate;
return G__21919;
})()
;
article = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return article__0.call(this);
default:
var G__21922 = null;
if (arguments.length > 1) {
var G__21923__i = 0, G__21923__a = new Array(arguments.length -  1);
while (G__21923__i < G__21923__a.length) {G__21923__a[G__21923__i] = arguments[G__21923__i + 1]; ++G__21923__i;}
G__21922 = new cljs.core.IndexedSeq(G__21923__a,0);
}
return article__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
article.cljs$lang$maxFixedArity = 1;
article.cljs$lang$applyTo = article__2.cljs$lang$applyTo;
article.cljs$core$IFn$_invoke$arity$0 = article__0;
article.cljs$core$IFn$_invoke$arity$variadic = article__2.cljs$core$IFn$_invoke$arity$variadic;
return article;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.aside = (function() {
var aside = null;
var aside__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});
var aside__2 = (function() { 
var G__21924__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__17018__auto__,children__17019__auto__);
};
var G__21924 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21925__i = 0, G__21925__a = new Array(arguments.length -  1);
while (G__21925__i < G__21925__a.length) {G__21925__a[G__21925__i] = arguments[G__21925__i + 1]; ++G__21925__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21925__a,0);
} 
return G__21924__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21924.cljs$lang$maxFixedArity = 1;
G__21924.cljs$lang$applyTo = (function (arglist__21926){
var opts__17018__auto__ = cljs.core.first(arglist__21926);
var children__17019__auto__ = cljs.core.rest(arglist__21926);
return G__21924__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21924.cljs$core$IFn$_invoke$arity$variadic = G__21924__delegate;
return G__21924;
})()
;
aside = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return aside__0.call(this);
default:
var G__21927 = null;
if (arguments.length > 1) {
var G__21928__i = 0, G__21928__a = new Array(arguments.length -  1);
while (G__21928__i < G__21928__a.length) {G__21928__a[G__21928__i] = arguments[G__21928__i + 1]; ++G__21928__i;}
G__21927 = new cljs.core.IndexedSeq(G__21928__a,0);
}
return aside__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aside.cljs$lang$maxFixedArity = 1;
aside.cljs$lang$applyTo = aside__2.cljs$lang$applyTo;
aside.cljs$core$IFn$_invoke$arity$0 = aside__0;
aside.cljs$core$IFn$_invoke$arity$variadic = aside__2.cljs$core$IFn$_invoke$arity$variadic;
return aside;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.audio = (function() {
var audio = null;
var audio__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});
var audio__2 = (function() { 
var G__21929__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__17018__auto__,children__17019__auto__);
};
var G__21929 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21930__i = 0, G__21930__a = new Array(arguments.length -  1);
while (G__21930__i < G__21930__a.length) {G__21930__a[G__21930__i] = arguments[G__21930__i + 1]; ++G__21930__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21930__a,0);
} 
return G__21929__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21929.cljs$lang$maxFixedArity = 1;
G__21929.cljs$lang$applyTo = (function (arglist__21931){
var opts__17018__auto__ = cljs.core.first(arglist__21931);
var children__17019__auto__ = cljs.core.rest(arglist__21931);
return G__21929__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21929.cljs$core$IFn$_invoke$arity$variadic = G__21929__delegate;
return G__21929;
})()
;
audio = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return audio__0.call(this);
default:
var G__21932 = null;
if (arguments.length > 1) {
var G__21933__i = 0, G__21933__a = new Array(arguments.length -  1);
while (G__21933__i < G__21933__a.length) {G__21933__a[G__21933__i] = arguments[G__21933__i + 1]; ++G__21933__i;}
G__21932 = new cljs.core.IndexedSeq(G__21933__a,0);
}
return audio__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
audio.cljs$lang$maxFixedArity = 1;
audio.cljs$lang$applyTo = audio__2.cljs$lang$applyTo;
audio.cljs$core$IFn$_invoke$arity$0 = audio__0;
audio.cljs$core$IFn$_invoke$arity$variadic = audio__2.cljs$core$IFn$_invoke$arity$variadic;
return audio;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.b = (function() {
var b = null;
var b__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});
var b__2 = (function() { 
var G__21934__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__17018__auto__,children__17019__auto__);
};
var G__21934 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21935__i = 0, G__21935__a = new Array(arguments.length -  1);
while (G__21935__i < G__21935__a.length) {G__21935__a[G__21935__i] = arguments[G__21935__i + 1]; ++G__21935__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21935__a,0);
} 
return G__21934__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21934.cljs$lang$maxFixedArity = 1;
G__21934.cljs$lang$applyTo = (function (arglist__21936){
var opts__17018__auto__ = cljs.core.first(arglist__21936);
var children__17019__auto__ = cljs.core.rest(arglist__21936);
return G__21934__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21934.cljs$core$IFn$_invoke$arity$variadic = G__21934__delegate;
return G__21934;
})()
;
b = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return b__0.call(this);
default:
var G__21937 = null;
if (arguments.length > 1) {
var G__21938__i = 0, G__21938__a = new Array(arguments.length -  1);
while (G__21938__i < G__21938__a.length) {G__21938__a[G__21938__i] = arguments[G__21938__i + 1]; ++G__21938__i;}
G__21937 = new cljs.core.IndexedSeq(G__21938__a,0);
}
return b__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
b.cljs$lang$maxFixedArity = 1;
b.cljs$lang$applyTo = b__2.cljs$lang$applyTo;
b.cljs$core$IFn$_invoke$arity$0 = b__0;
b.cljs$core$IFn$_invoke$arity$variadic = b__2.cljs$core$IFn$_invoke$arity$variadic;
return b;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.base = (function() {
var base = null;
var base__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});
var base__2 = (function() { 
var G__21939__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__17018__auto__,children__17019__auto__);
};
var G__21939 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21940__i = 0, G__21940__a = new Array(arguments.length -  1);
while (G__21940__i < G__21940__a.length) {G__21940__a[G__21940__i] = arguments[G__21940__i + 1]; ++G__21940__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21940__a,0);
} 
return G__21939__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21939.cljs$lang$maxFixedArity = 1;
G__21939.cljs$lang$applyTo = (function (arglist__21941){
var opts__17018__auto__ = cljs.core.first(arglist__21941);
var children__17019__auto__ = cljs.core.rest(arglist__21941);
return G__21939__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21939.cljs$core$IFn$_invoke$arity$variadic = G__21939__delegate;
return G__21939;
})()
;
base = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return base__0.call(this);
default:
var G__21942 = null;
if (arguments.length > 1) {
var G__21943__i = 0, G__21943__a = new Array(arguments.length -  1);
while (G__21943__i < G__21943__a.length) {G__21943__a[G__21943__i] = arguments[G__21943__i + 1]; ++G__21943__i;}
G__21942 = new cljs.core.IndexedSeq(G__21943__a,0);
}
return base__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
base.cljs$lang$maxFixedArity = 1;
base.cljs$lang$applyTo = base__2.cljs$lang$applyTo;
base.cljs$core$IFn$_invoke$arity$0 = base__0;
base.cljs$core$IFn$_invoke$arity$variadic = base__2.cljs$core$IFn$_invoke$arity$variadic;
return base;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.bdi = (function() {
var bdi = null;
var bdi__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});
var bdi__2 = (function() { 
var G__21944__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__17018__auto__,children__17019__auto__);
};
var G__21944 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21945__i = 0, G__21945__a = new Array(arguments.length -  1);
while (G__21945__i < G__21945__a.length) {G__21945__a[G__21945__i] = arguments[G__21945__i + 1]; ++G__21945__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21945__a,0);
} 
return G__21944__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21944.cljs$lang$maxFixedArity = 1;
G__21944.cljs$lang$applyTo = (function (arglist__21946){
var opts__17018__auto__ = cljs.core.first(arglist__21946);
var children__17019__auto__ = cljs.core.rest(arglist__21946);
return G__21944__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21944.cljs$core$IFn$_invoke$arity$variadic = G__21944__delegate;
return G__21944;
})()
;
bdi = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return bdi__0.call(this);
default:
var G__21947 = null;
if (arguments.length > 1) {
var G__21948__i = 0, G__21948__a = new Array(arguments.length -  1);
while (G__21948__i < G__21948__a.length) {G__21948__a[G__21948__i] = arguments[G__21948__i + 1]; ++G__21948__i;}
G__21947 = new cljs.core.IndexedSeq(G__21948__a,0);
}
return bdi__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bdi.cljs$lang$maxFixedArity = 1;
bdi.cljs$lang$applyTo = bdi__2.cljs$lang$applyTo;
bdi.cljs$core$IFn$_invoke$arity$0 = bdi__0;
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__2.cljs$core$IFn$_invoke$arity$variadic;
return bdi;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.bdo = (function() {
var bdo = null;
var bdo__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});
var bdo__2 = (function() { 
var G__21949__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__17018__auto__,children__17019__auto__);
};
var G__21949 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21950__i = 0, G__21950__a = new Array(arguments.length -  1);
while (G__21950__i < G__21950__a.length) {G__21950__a[G__21950__i] = arguments[G__21950__i + 1]; ++G__21950__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21950__a,0);
} 
return G__21949__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21949.cljs$lang$maxFixedArity = 1;
G__21949.cljs$lang$applyTo = (function (arglist__21951){
var opts__17018__auto__ = cljs.core.first(arglist__21951);
var children__17019__auto__ = cljs.core.rest(arglist__21951);
return G__21949__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21949.cljs$core$IFn$_invoke$arity$variadic = G__21949__delegate;
return G__21949;
})()
;
bdo = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return bdo__0.call(this);
default:
var G__21952 = null;
if (arguments.length > 1) {
var G__21953__i = 0, G__21953__a = new Array(arguments.length -  1);
while (G__21953__i < G__21953__a.length) {G__21953__a[G__21953__i] = arguments[G__21953__i + 1]; ++G__21953__i;}
G__21952 = new cljs.core.IndexedSeq(G__21953__a,0);
}
return bdo__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bdo.cljs$lang$maxFixedArity = 1;
bdo.cljs$lang$applyTo = bdo__2.cljs$lang$applyTo;
bdo.cljs$core$IFn$_invoke$arity$0 = bdo__0;
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__2.cljs$core$IFn$_invoke$arity$variadic;
return bdo;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.big = (function() {
var big = null;
var big__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});
var big__2 = (function() { 
var G__21954__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__17018__auto__,children__17019__auto__);
};
var G__21954 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21955__i = 0, G__21955__a = new Array(arguments.length -  1);
while (G__21955__i < G__21955__a.length) {G__21955__a[G__21955__i] = arguments[G__21955__i + 1]; ++G__21955__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21955__a,0);
} 
return G__21954__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21954.cljs$lang$maxFixedArity = 1;
G__21954.cljs$lang$applyTo = (function (arglist__21956){
var opts__17018__auto__ = cljs.core.first(arglist__21956);
var children__17019__auto__ = cljs.core.rest(arglist__21956);
return G__21954__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21954.cljs$core$IFn$_invoke$arity$variadic = G__21954__delegate;
return G__21954;
})()
;
big = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return big__0.call(this);
default:
var G__21957 = null;
if (arguments.length > 1) {
var G__21958__i = 0, G__21958__a = new Array(arguments.length -  1);
while (G__21958__i < G__21958__a.length) {G__21958__a[G__21958__i] = arguments[G__21958__i + 1]; ++G__21958__i;}
G__21957 = new cljs.core.IndexedSeq(G__21958__a,0);
}
return big__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big.cljs$lang$maxFixedArity = 1;
big.cljs$lang$applyTo = big__2.cljs$lang$applyTo;
big.cljs$core$IFn$_invoke$arity$0 = big__0;
big.cljs$core$IFn$_invoke$arity$variadic = big__2.cljs$core$IFn$_invoke$arity$variadic;
return big;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.blockquote = (function() {
var blockquote = null;
var blockquote__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});
var blockquote__2 = (function() { 
var G__21959__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__17018__auto__,children__17019__auto__);
};
var G__21959 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21960__i = 0, G__21960__a = new Array(arguments.length -  1);
while (G__21960__i < G__21960__a.length) {G__21960__a[G__21960__i] = arguments[G__21960__i + 1]; ++G__21960__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21960__a,0);
} 
return G__21959__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21959.cljs$lang$maxFixedArity = 1;
G__21959.cljs$lang$applyTo = (function (arglist__21961){
var opts__17018__auto__ = cljs.core.first(arglist__21961);
var children__17019__auto__ = cljs.core.rest(arglist__21961);
return G__21959__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21959.cljs$core$IFn$_invoke$arity$variadic = G__21959__delegate;
return G__21959;
})()
;
blockquote = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return blockquote__0.call(this);
default:
var G__21962 = null;
if (arguments.length > 1) {
var G__21963__i = 0, G__21963__a = new Array(arguments.length -  1);
while (G__21963__i < G__21963__a.length) {G__21963__a[G__21963__i] = arguments[G__21963__i + 1]; ++G__21963__i;}
G__21962 = new cljs.core.IndexedSeq(G__21963__a,0);
}
return blockquote__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blockquote.cljs$lang$maxFixedArity = 1;
blockquote.cljs$lang$applyTo = blockquote__2.cljs$lang$applyTo;
blockquote.cljs$core$IFn$_invoke$arity$0 = blockquote__0;
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__2.cljs$core$IFn$_invoke$arity$variadic;
return blockquote;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.body = (function() {
var body = null;
var body__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});
var body__2 = (function() { 
var G__21964__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__17018__auto__,children__17019__auto__);
};
var G__21964 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21965__i = 0, G__21965__a = new Array(arguments.length -  1);
while (G__21965__i < G__21965__a.length) {G__21965__a[G__21965__i] = arguments[G__21965__i + 1]; ++G__21965__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21965__a,0);
} 
return G__21964__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21964.cljs$lang$maxFixedArity = 1;
G__21964.cljs$lang$applyTo = (function (arglist__21966){
var opts__17018__auto__ = cljs.core.first(arglist__21966);
var children__17019__auto__ = cljs.core.rest(arglist__21966);
return G__21964__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21964.cljs$core$IFn$_invoke$arity$variadic = G__21964__delegate;
return G__21964;
})()
;
body = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return body__0.call(this);
default:
var G__21967 = null;
if (arguments.length > 1) {
var G__21968__i = 0, G__21968__a = new Array(arguments.length -  1);
while (G__21968__i < G__21968__a.length) {G__21968__a[G__21968__i] = arguments[G__21968__i + 1]; ++G__21968__i;}
G__21967 = new cljs.core.IndexedSeq(G__21968__a,0);
}
return body__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
body.cljs$lang$maxFixedArity = 1;
body.cljs$lang$applyTo = body__2.cljs$lang$applyTo;
body.cljs$core$IFn$_invoke$arity$0 = body__0;
body.cljs$core$IFn$_invoke$arity$variadic = body__2.cljs$core$IFn$_invoke$arity$variadic;
return body;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.br = (function() {
var br = null;
var br__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});
var br__2 = (function() { 
var G__21969__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__17018__auto__,children__17019__auto__);
};
var G__21969 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21970__i = 0, G__21970__a = new Array(arguments.length -  1);
while (G__21970__i < G__21970__a.length) {G__21970__a[G__21970__i] = arguments[G__21970__i + 1]; ++G__21970__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21970__a,0);
} 
return G__21969__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21969.cljs$lang$maxFixedArity = 1;
G__21969.cljs$lang$applyTo = (function (arglist__21971){
var opts__17018__auto__ = cljs.core.first(arglist__21971);
var children__17019__auto__ = cljs.core.rest(arglist__21971);
return G__21969__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21969.cljs$core$IFn$_invoke$arity$variadic = G__21969__delegate;
return G__21969;
})()
;
br = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return br__0.call(this);
default:
var G__21972 = null;
if (arguments.length > 1) {
var G__21973__i = 0, G__21973__a = new Array(arguments.length -  1);
while (G__21973__i < G__21973__a.length) {G__21973__a[G__21973__i] = arguments[G__21973__i + 1]; ++G__21973__i;}
G__21972 = new cljs.core.IndexedSeq(G__21973__a,0);
}
return br__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
br.cljs$lang$maxFixedArity = 1;
br.cljs$lang$applyTo = br__2.cljs$lang$applyTo;
br.cljs$core$IFn$_invoke$arity$0 = br__0;
br.cljs$core$IFn$_invoke$arity$variadic = br__2.cljs$core$IFn$_invoke$arity$variadic;
return br;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.button = (function() {
var button = null;
var button__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});
var button__2 = (function() { 
var G__21974__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__17018__auto__,children__17019__auto__);
};
var G__21974 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21975__i = 0, G__21975__a = new Array(arguments.length -  1);
while (G__21975__i < G__21975__a.length) {G__21975__a[G__21975__i] = arguments[G__21975__i + 1]; ++G__21975__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21975__a,0);
} 
return G__21974__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21974.cljs$lang$maxFixedArity = 1;
G__21974.cljs$lang$applyTo = (function (arglist__21976){
var opts__17018__auto__ = cljs.core.first(arglist__21976);
var children__17019__auto__ = cljs.core.rest(arglist__21976);
return G__21974__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21974.cljs$core$IFn$_invoke$arity$variadic = G__21974__delegate;
return G__21974;
})()
;
button = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return button__0.call(this);
default:
var G__21977 = null;
if (arguments.length > 1) {
var G__21978__i = 0, G__21978__a = new Array(arguments.length -  1);
while (G__21978__i < G__21978__a.length) {G__21978__a[G__21978__i] = arguments[G__21978__i + 1]; ++G__21978__i;}
G__21977 = new cljs.core.IndexedSeq(G__21978__a,0);
}
return button__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = button__2.cljs$lang$applyTo;
button.cljs$core$IFn$_invoke$arity$0 = button__0;
button.cljs$core$IFn$_invoke$arity$variadic = button__2.cljs$core$IFn$_invoke$arity$variadic;
return button;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.canvas = (function() {
var canvas = null;
var canvas__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});
var canvas__2 = (function() { 
var G__21979__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__17018__auto__,children__17019__auto__);
};
var G__21979 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21980__i = 0, G__21980__a = new Array(arguments.length -  1);
while (G__21980__i < G__21980__a.length) {G__21980__a[G__21980__i] = arguments[G__21980__i + 1]; ++G__21980__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21980__a,0);
} 
return G__21979__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21979.cljs$lang$maxFixedArity = 1;
G__21979.cljs$lang$applyTo = (function (arglist__21981){
var opts__17018__auto__ = cljs.core.first(arglist__21981);
var children__17019__auto__ = cljs.core.rest(arglist__21981);
return G__21979__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21979.cljs$core$IFn$_invoke$arity$variadic = G__21979__delegate;
return G__21979;
})()
;
canvas = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return canvas__0.call(this);
default:
var G__21982 = null;
if (arguments.length > 1) {
var G__21983__i = 0, G__21983__a = new Array(arguments.length -  1);
while (G__21983__i < G__21983__a.length) {G__21983__a[G__21983__i] = arguments[G__21983__i + 1]; ++G__21983__i;}
G__21982 = new cljs.core.IndexedSeq(G__21983__a,0);
}
return canvas__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canvas.cljs$lang$maxFixedArity = 1;
canvas.cljs$lang$applyTo = canvas__2.cljs$lang$applyTo;
canvas.cljs$core$IFn$_invoke$arity$0 = canvas__0;
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__2.cljs$core$IFn$_invoke$arity$variadic;
return canvas;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.caption = (function() {
var caption = null;
var caption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});
var caption__2 = (function() { 
var G__21984__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__17018__auto__,children__17019__auto__);
};
var G__21984 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21985__i = 0, G__21985__a = new Array(arguments.length -  1);
while (G__21985__i < G__21985__a.length) {G__21985__a[G__21985__i] = arguments[G__21985__i + 1]; ++G__21985__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21985__a,0);
} 
return G__21984__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21984.cljs$lang$maxFixedArity = 1;
G__21984.cljs$lang$applyTo = (function (arglist__21986){
var opts__17018__auto__ = cljs.core.first(arglist__21986);
var children__17019__auto__ = cljs.core.rest(arglist__21986);
return G__21984__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21984.cljs$core$IFn$_invoke$arity$variadic = G__21984__delegate;
return G__21984;
})()
;
caption = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return caption__0.call(this);
default:
var G__21987 = null;
if (arguments.length > 1) {
var G__21988__i = 0, G__21988__a = new Array(arguments.length -  1);
while (G__21988__i < G__21988__a.length) {G__21988__a[G__21988__i] = arguments[G__21988__i + 1]; ++G__21988__i;}
G__21987 = new cljs.core.IndexedSeq(G__21988__a,0);
}
return caption__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
caption.cljs$lang$maxFixedArity = 1;
caption.cljs$lang$applyTo = caption__2.cljs$lang$applyTo;
caption.cljs$core$IFn$_invoke$arity$0 = caption__0;
caption.cljs$core$IFn$_invoke$arity$variadic = caption__2.cljs$core$IFn$_invoke$arity$variadic;
return caption;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.cite = (function() {
var cite = null;
var cite__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});
var cite__2 = (function() { 
var G__21989__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__17018__auto__,children__17019__auto__);
};
var G__21989 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21990__i = 0, G__21990__a = new Array(arguments.length -  1);
while (G__21990__i < G__21990__a.length) {G__21990__a[G__21990__i] = arguments[G__21990__i + 1]; ++G__21990__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21990__a,0);
} 
return G__21989__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21989.cljs$lang$maxFixedArity = 1;
G__21989.cljs$lang$applyTo = (function (arglist__21991){
var opts__17018__auto__ = cljs.core.first(arglist__21991);
var children__17019__auto__ = cljs.core.rest(arglist__21991);
return G__21989__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21989.cljs$core$IFn$_invoke$arity$variadic = G__21989__delegate;
return G__21989;
})()
;
cite = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return cite__0.call(this);
default:
var G__21992 = null;
if (arguments.length > 1) {
var G__21993__i = 0, G__21993__a = new Array(arguments.length -  1);
while (G__21993__i < G__21993__a.length) {G__21993__a[G__21993__i] = arguments[G__21993__i + 1]; ++G__21993__i;}
G__21992 = new cljs.core.IndexedSeq(G__21993__a,0);
}
return cite__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cite.cljs$lang$maxFixedArity = 1;
cite.cljs$lang$applyTo = cite__2.cljs$lang$applyTo;
cite.cljs$core$IFn$_invoke$arity$0 = cite__0;
cite.cljs$core$IFn$_invoke$arity$variadic = cite__2.cljs$core$IFn$_invoke$arity$variadic;
return cite;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.code = (function() {
var code = null;
var code__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});
var code__2 = (function() { 
var G__21994__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__17018__auto__,children__17019__auto__);
};
var G__21994 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__21995__i = 0, G__21995__a = new Array(arguments.length -  1);
while (G__21995__i < G__21995__a.length) {G__21995__a[G__21995__i] = arguments[G__21995__i + 1]; ++G__21995__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__21995__a,0);
} 
return G__21994__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21994.cljs$lang$maxFixedArity = 1;
G__21994.cljs$lang$applyTo = (function (arglist__21996){
var opts__17018__auto__ = cljs.core.first(arglist__21996);
var children__17019__auto__ = cljs.core.rest(arglist__21996);
return G__21994__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21994.cljs$core$IFn$_invoke$arity$variadic = G__21994__delegate;
return G__21994;
})()
;
code = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return code__0.call(this);
default:
var G__21997 = null;
if (arguments.length > 1) {
var G__21998__i = 0, G__21998__a = new Array(arguments.length -  1);
while (G__21998__i < G__21998__a.length) {G__21998__a[G__21998__i] = arguments[G__21998__i + 1]; ++G__21998__i;}
G__21997 = new cljs.core.IndexedSeq(G__21998__a,0);
}
return code__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__21997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
code.cljs$lang$maxFixedArity = 1;
code.cljs$lang$applyTo = code__2.cljs$lang$applyTo;
code.cljs$core$IFn$_invoke$arity$0 = code__0;
code.cljs$core$IFn$_invoke$arity$variadic = code__2.cljs$core$IFn$_invoke$arity$variadic;
return code;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.col = (function() {
var col = null;
var col__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});
var col__2 = (function() { 
var G__21999__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__17018__auto__,children__17019__auto__);
};
var G__21999 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22000__i = 0, G__22000__a = new Array(arguments.length -  1);
while (G__22000__i < G__22000__a.length) {G__22000__a[G__22000__i] = arguments[G__22000__i + 1]; ++G__22000__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22000__a,0);
} 
return G__21999__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__21999.cljs$lang$maxFixedArity = 1;
G__21999.cljs$lang$applyTo = (function (arglist__22001){
var opts__17018__auto__ = cljs.core.first(arglist__22001);
var children__17019__auto__ = cljs.core.rest(arglist__22001);
return G__21999__delegate(opts__17018__auto__,children__17019__auto__);
});
G__21999.cljs$core$IFn$_invoke$arity$variadic = G__21999__delegate;
return G__21999;
})()
;
col = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return col__0.call(this);
default:
var G__22002 = null;
if (arguments.length > 1) {
var G__22003__i = 0, G__22003__a = new Array(arguments.length -  1);
while (G__22003__i < G__22003__a.length) {G__22003__a[G__22003__i] = arguments[G__22003__i + 1]; ++G__22003__i;}
G__22002 = new cljs.core.IndexedSeq(G__22003__a,0);
}
return col__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = col__2.cljs$lang$applyTo;
col.cljs$core$IFn$_invoke$arity$0 = col__0;
col.cljs$core$IFn$_invoke$arity$variadic = col__2.cljs$core$IFn$_invoke$arity$variadic;
return col;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.colgroup = (function() {
var colgroup = null;
var colgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});
var colgroup__2 = (function() { 
var G__22004__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__17018__auto__,children__17019__auto__);
};
var G__22004 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22005__i = 0, G__22005__a = new Array(arguments.length -  1);
while (G__22005__i < G__22005__a.length) {G__22005__a[G__22005__i] = arguments[G__22005__i + 1]; ++G__22005__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22005__a,0);
} 
return G__22004__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22004.cljs$lang$maxFixedArity = 1;
G__22004.cljs$lang$applyTo = (function (arglist__22006){
var opts__17018__auto__ = cljs.core.first(arglist__22006);
var children__17019__auto__ = cljs.core.rest(arglist__22006);
return G__22004__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22004.cljs$core$IFn$_invoke$arity$variadic = G__22004__delegate;
return G__22004;
})()
;
colgroup = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return colgroup__0.call(this);
default:
var G__22007 = null;
if (arguments.length > 1) {
var G__22008__i = 0, G__22008__a = new Array(arguments.length -  1);
while (G__22008__i < G__22008__a.length) {G__22008__a[G__22008__i] = arguments[G__22008__i + 1]; ++G__22008__i;}
G__22007 = new cljs.core.IndexedSeq(G__22008__a,0);
}
return colgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
colgroup.cljs$lang$maxFixedArity = 1;
colgroup.cljs$lang$applyTo = colgroup__2.cljs$lang$applyTo;
colgroup.cljs$core$IFn$_invoke$arity$0 = colgroup__0;
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return colgroup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.data = (function() {
var data = null;
var data__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});
var data__2 = (function() { 
var G__22009__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__17018__auto__,children__17019__auto__);
};
var G__22009 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22010__i = 0, G__22010__a = new Array(arguments.length -  1);
while (G__22010__i < G__22010__a.length) {G__22010__a[G__22010__i] = arguments[G__22010__i + 1]; ++G__22010__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22010__a,0);
} 
return G__22009__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22009.cljs$lang$maxFixedArity = 1;
G__22009.cljs$lang$applyTo = (function (arglist__22011){
var opts__17018__auto__ = cljs.core.first(arglist__22011);
var children__17019__auto__ = cljs.core.rest(arglist__22011);
return G__22009__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22009.cljs$core$IFn$_invoke$arity$variadic = G__22009__delegate;
return G__22009;
})()
;
data = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return data__0.call(this);
default:
var G__22012 = null;
if (arguments.length > 1) {
var G__22013__i = 0, G__22013__a = new Array(arguments.length -  1);
while (G__22013__i < G__22013__a.length) {G__22013__a[G__22013__i] = arguments[G__22013__i + 1]; ++G__22013__i;}
G__22012 = new cljs.core.IndexedSeq(G__22013__a,0);
}
return data__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
data.cljs$lang$maxFixedArity = 1;
data.cljs$lang$applyTo = data__2.cljs$lang$applyTo;
data.cljs$core$IFn$_invoke$arity$0 = data__0;
data.cljs$core$IFn$_invoke$arity$variadic = data__2.cljs$core$IFn$_invoke$arity$variadic;
return data;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.datalist = (function() {
var datalist = null;
var datalist__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});
var datalist__2 = (function() { 
var G__22014__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__17018__auto__,children__17019__auto__);
};
var G__22014 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22015__i = 0, G__22015__a = new Array(arguments.length -  1);
while (G__22015__i < G__22015__a.length) {G__22015__a[G__22015__i] = arguments[G__22015__i + 1]; ++G__22015__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22015__a,0);
} 
return G__22014__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22014.cljs$lang$maxFixedArity = 1;
G__22014.cljs$lang$applyTo = (function (arglist__22016){
var opts__17018__auto__ = cljs.core.first(arglist__22016);
var children__17019__auto__ = cljs.core.rest(arglist__22016);
return G__22014__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22014.cljs$core$IFn$_invoke$arity$variadic = G__22014__delegate;
return G__22014;
})()
;
datalist = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return datalist__0.call(this);
default:
var G__22017 = null;
if (arguments.length > 1) {
var G__22018__i = 0, G__22018__a = new Array(arguments.length -  1);
while (G__22018__i < G__22018__a.length) {G__22018__a[G__22018__i] = arguments[G__22018__i + 1]; ++G__22018__i;}
G__22017 = new cljs.core.IndexedSeq(G__22018__a,0);
}
return datalist__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datalist.cljs$lang$maxFixedArity = 1;
datalist.cljs$lang$applyTo = datalist__2.cljs$lang$applyTo;
datalist.cljs$core$IFn$_invoke$arity$0 = datalist__0;
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__2.cljs$core$IFn$_invoke$arity$variadic;
return datalist;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dd = (function() {
var dd = null;
var dd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});
var dd__2 = (function() { 
var G__22019__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__17018__auto__,children__17019__auto__);
};
var G__22019 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22020__i = 0, G__22020__a = new Array(arguments.length -  1);
while (G__22020__i < G__22020__a.length) {G__22020__a[G__22020__i] = arguments[G__22020__i + 1]; ++G__22020__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22020__a,0);
} 
return G__22019__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22019.cljs$lang$maxFixedArity = 1;
G__22019.cljs$lang$applyTo = (function (arglist__22021){
var opts__17018__auto__ = cljs.core.first(arglist__22021);
var children__17019__auto__ = cljs.core.rest(arglist__22021);
return G__22019__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22019.cljs$core$IFn$_invoke$arity$variadic = G__22019__delegate;
return G__22019;
})()
;
dd = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return dd__0.call(this);
default:
var G__22022 = null;
if (arguments.length > 1) {
var G__22023__i = 0, G__22023__a = new Array(arguments.length -  1);
while (G__22023__i < G__22023__a.length) {G__22023__a[G__22023__i] = arguments[G__22023__i + 1]; ++G__22023__i;}
G__22022 = new cljs.core.IndexedSeq(G__22023__a,0);
}
return dd__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dd.cljs$lang$maxFixedArity = 1;
dd.cljs$lang$applyTo = dd__2.cljs$lang$applyTo;
dd.cljs$core$IFn$_invoke$arity$0 = dd__0;
dd.cljs$core$IFn$_invoke$arity$variadic = dd__2.cljs$core$IFn$_invoke$arity$variadic;
return dd;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.del = (function() {
var del = null;
var del__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});
var del__2 = (function() { 
var G__22024__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__17018__auto__,children__17019__auto__);
};
var G__22024 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22025__i = 0, G__22025__a = new Array(arguments.length -  1);
while (G__22025__i < G__22025__a.length) {G__22025__a[G__22025__i] = arguments[G__22025__i + 1]; ++G__22025__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22025__a,0);
} 
return G__22024__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22024.cljs$lang$maxFixedArity = 1;
G__22024.cljs$lang$applyTo = (function (arglist__22026){
var opts__17018__auto__ = cljs.core.first(arglist__22026);
var children__17019__auto__ = cljs.core.rest(arglist__22026);
return G__22024__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22024.cljs$core$IFn$_invoke$arity$variadic = G__22024__delegate;
return G__22024;
})()
;
del = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return del__0.call(this);
default:
var G__22027 = null;
if (arguments.length > 1) {
var G__22028__i = 0, G__22028__a = new Array(arguments.length -  1);
while (G__22028__i < G__22028__a.length) {G__22028__a[G__22028__i] = arguments[G__22028__i + 1]; ++G__22028__i;}
G__22027 = new cljs.core.IndexedSeq(G__22028__a,0);
}
return del__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
del.cljs$lang$maxFixedArity = 1;
del.cljs$lang$applyTo = del__2.cljs$lang$applyTo;
del.cljs$core$IFn$_invoke$arity$0 = del__0;
del.cljs$core$IFn$_invoke$arity$variadic = del__2.cljs$core$IFn$_invoke$arity$variadic;
return del;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dfn = (function() {
var dfn = null;
var dfn__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});
var dfn__2 = (function() { 
var G__22029__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__17018__auto__,children__17019__auto__);
};
var G__22029 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22030__i = 0, G__22030__a = new Array(arguments.length -  1);
while (G__22030__i < G__22030__a.length) {G__22030__a[G__22030__i] = arguments[G__22030__i + 1]; ++G__22030__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22030__a,0);
} 
return G__22029__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22029.cljs$lang$maxFixedArity = 1;
G__22029.cljs$lang$applyTo = (function (arglist__22031){
var opts__17018__auto__ = cljs.core.first(arglist__22031);
var children__17019__auto__ = cljs.core.rest(arglist__22031);
return G__22029__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22029.cljs$core$IFn$_invoke$arity$variadic = G__22029__delegate;
return G__22029;
})()
;
dfn = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return dfn__0.call(this);
default:
var G__22032 = null;
if (arguments.length > 1) {
var G__22033__i = 0, G__22033__a = new Array(arguments.length -  1);
while (G__22033__i < G__22033__a.length) {G__22033__a[G__22033__i] = arguments[G__22033__i + 1]; ++G__22033__i;}
G__22032 = new cljs.core.IndexedSeq(G__22033__a,0);
}
return dfn__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dfn.cljs$lang$maxFixedArity = 1;
dfn.cljs$lang$applyTo = dfn__2.cljs$lang$applyTo;
dfn.cljs$core$IFn$_invoke$arity$0 = dfn__0;
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__2.cljs$core$IFn$_invoke$arity$variadic;
return dfn;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.div = (function() {
var div = null;
var div__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});
var div__2 = (function() { 
var G__22034__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__17018__auto__,children__17019__auto__);
};
var G__22034 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22035__i = 0, G__22035__a = new Array(arguments.length -  1);
while (G__22035__i < G__22035__a.length) {G__22035__a[G__22035__i] = arguments[G__22035__i + 1]; ++G__22035__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22035__a,0);
} 
return G__22034__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22034.cljs$lang$maxFixedArity = 1;
G__22034.cljs$lang$applyTo = (function (arglist__22036){
var opts__17018__auto__ = cljs.core.first(arglist__22036);
var children__17019__auto__ = cljs.core.rest(arglist__22036);
return G__22034__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22034.cljs$core$IFn$_invoke$arity$variadic = G__22034__delegate;
return G__22034;
})()
;
div = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return div__0.call(this);
default:
var G__22037 = null;
if (arguments.length > 1) {
var G__22038__i = 0, G__22038__a = new Array(arguments.length -  1);
while (G__22038__i < G__22038__a.length) {G__22038__a[G__22038__i] = arguments[G__22038__i + 1]; ++G__22038__i;}
G__22037 = new cljs.core.IndexedSeq(G__22038__a,0);
}
return div__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
div.cljs$lang$maxFixedArity = 1;
div.cljs$lang$applyTo = div__2.cljs$lang$applyTo;
div.cljs$core$IFn$_invoke$arity$0 = div__0;
div.cljs$core$IFn$_invoke$arity$variadic = div__2.cljs$core$IFn$_invoke$arity$variadic;
return div;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dl = (function() {
var dl = null;
var dl__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});
var dl__2 = (function() { 
var G__22039__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__17018__auto__,children__17019__auto__);
};
var G__22039 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22040__i = 0, G__22040__a = new Array(arguments.length -  1);
while (G__22040__i < G__22040__a.length) {G__22040__a[G__22040__i] = arguments[G__22040__i + 1]; ++G__22040__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22040__a,0);
} 
return G__22039__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22039.cljs$lang$maxFixedArity = 1;
G__22039.cljs$lang$applyTo = (function (arglist__22041){
var opts__17018__auto__ = cljs.core.first(arglist__22041);
var children__17019__auto__ = cljs.core.rest(arglist__22041);
return G__22039__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22039.cljs$core$IFn$_invoke$arity$variadic = G__22039__delegate;
return G__22039;
})()
;
dl = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return dl__0.call(this);
default:
var G__22042 = null;
if (arguments.length > 1) {
var G__22043__i = 0, G__22043__a = new Array(arguments.length -  1);
while (G__22043__i < G__22043__a.length) {G__22043__a[G__22043__i] = arguments[G__22043__i + 1]; ++G__22043__i;}
G__22042 = new cljs.core.IndexedSeq(G__22043__a,0);
}
return dl__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dl.cljs$lang$maxFixedArity = 1;
dl.cljs$lang$applyTo = dl__2.cljs$lang$applyTo;
dl.cljs$core$IFn$_invoke$arity$0 = dl__0;
dl.cljs$core$IFn$_invoke$arity$variadic = dl__2.cljs$core$IFn$_invoke$arity$variadic;
return dl;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dt = (function() {
var dt = null;
var dt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});
var dt__2 = (function() { 
var G__22044__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__17018__auto__,children__17019__auto__);
};
var G__22044 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22045__i = 0, G__22045__a = new Array(arguments.length -  1);
while (G__22045__i < G__22045__a.length) {G__22045__a[G__22045__i] = arguments[G__22045__i + 1]; ++G__22045__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22045__a,0);
} 
return G__22044__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22044.cljs$lang$maxFixedArity = 1;
G__22044.cljs$lang$applyTo = (function (arglist__22046){
var opts__17018__auto__ = cljs.core.first(arglist__22046);
var children__17019__auto__ = cljs.core.rest(arglist__22046);
return G__22044__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22044.cljs$core$IFn$_invoke$arity$variadic = G__22044__delegate;
return G__22044;
})()
;
dt = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return dt__0.call(this);
default:
var G__22047 = null;
if (arguments.length > 1) {
var G__22048__i = 0, G__22048__a = new Array(arguments.length -  1);
while (G__22048__i < G__22048__a.length) {G__22048__a[G__22048__i] = arguments[G__22048__i + 1]; ++G__22048__i;}
G__22047 = new cljs.core.IndexedSeq(G__22048__a,0);
}
return dt__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dt.cljs$lang$maxFixedArity = 1;
dt.cljs$lang$applyTo = dt__2.cljs$lang$applyTo;
dt.cljs$core$IFn$_invoke$arity$0 = dt__0;
dt.cljs$core$IFn$_invoke$arity$variadic = dt__2.cljs$core$IFn$_invoke$arity$variadic;
return dt;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.em = (function() {
var em = null;
var em__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});
var em__2 = (function() { 
var G__22049__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__17018__auto__,children__17019__auto__);
};
var G__22049 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22050__i = 0, G__22050__a = new Array(arguments.length -  1);
while (G__22050__i < G__22050__a.length) {G__22050__a[G__22050__i] = arguments[G__22050__i + 1]; ++G__22050__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22050__a,0);
} 
return G__22049__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22049.cljs$lang$maxFixedArity = 1;
G__22049.cljs$lang$applyTo = (function (arglist__22051){
var opts__17018__auto__ = cljs.core.first(arglist__22051);
var children__17019__auto__ = cljs.core.rest(arglist__22051);
return G__22049__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22049.cljs$core$IFn$_invoke$arity$variadic = G__22049__delegate;
return G__22049;
})()
;
em = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return em__0.call(this);
default:
var G__22052 = null;
if (arguments.length > 1) {
var G__22053__i = 0, G__22053__a = new Array(arguments.length -  1);
while (G__22053__i < G__22053__a.length) {G__22053__a[G__22053__i] = arguments[G__22053__i + 1]; ++G__22053__i;}
G__22052 = new cljs.core.IndexedSeq(G__22053__a,0);
}
return em__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
em.cljs$lang$maxFixedArity = 1;
em.cljs$lang$applyTo = em__2.cljs$lang$applyTo;
em.cljs$core$IFn$_invoke$arity$0 = em__0;
em.cljs$core$IFn$_invoke$arity$variadic = em__2.cljs$core$IFn$_invoke$arity$variadic;
return em;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.embed = (function() {
var embed = null;
var embed__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});
var embed__2 = (function() { 
var G__22054__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__17018__auto__,children__17019__auto__);
};
var G__22054 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22055__i = 0, G__22055__a = new Array(arguments.length -  1);
while (G__22055__i < G__22055__a.length) {G__22055__a[G__22055__i] = arguments[G__22055__i + 1]; ++G__22055__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22055__a,0);
} 
return G__22054__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22054.cljs$lang$maxFixedArity = 1;
G__22054.cljs$lang$applyTo = (function (arglist__22056){
var opts__17018__auto__ = cljs.core.first(arglist__22056);
var children__17019__auto__ = cljs.core.rest(arglist__22056);
return G__22054__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22054.cljs$core$IFn$_invoke$arity$variadic = G__22054__delegate;
return G__22054;
})()
;
embed = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return embed__0.call(this);
default:
var G__22057 = null;
if (arguments.length > 1) {
var G__22058__i = 0, G__22058__a = new Array(arguments.length -  1);
while (G__22058__i < G__22058__a.length) {G__22058__a[G__22058__i] = arguments[G__22058__i + 1]; ++G__22058__i;}
G__22057 = new cljs.core.IndexedSeq(G__22058__a,0);
}
return embed__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
embed.cljs$lang$maxFixedArity = 1;
embed.cljs$lang$applyTo = embed__2.cljs$lang$applyTo;
embed.cljs$core$IFn$_invoke$arity$0 = embed__0;
embed.cljs$core$IFn$_invoke$arity$variadic = embed__2.cljs$core$IFn$_invoke$arity$variadic;
return embed;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.fieldset = (function() {
var fieldset = null;
var fieldset__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});
var fieldset__2 = (function() { 
var G__22059__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__17018__auto__,children__17019__auto__);
};
var G__22059 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22060__i = 0, G__22060__a = new Array(arguments.length -  1);
while (G__22060__i < G__22060__a.length) {G__22060__a[G__22060__i] = arguments[G__22060__i + 1]; ++G__22060__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22060__a,0);
} 
return G__22059__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22059.cljs$lang$maxFixedArity = 1;
G__22059.cljs$lang$applyTo = (function (arglist__22061){
var opts__17018__auto__ = cljs.core.first(arglist__22061);
var children__17019__auto__ = cljs.core.rest(arglist__22061);
return G__22059__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22059.cljs$core$IFn$_invoke$arity$variadic = G__22059__delegate;
return G__22059;
})()
;
fieldset = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return fieldset__0.call(this);
default:
var G__22062 = null;
if (arguments.length > 1) {
var G__22063__i = 0, G__22063__a = new Array(arguments.length -  1);
while (G__22063__i < G__22063__a.length) {G__22063__a[G__22063__i] = arguments[G__22063__i + 1]; ++G__22063__i;}
G__22062 = new cljs.core.IndexedSeq(G__22063__a,0);
}
return fieldset__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fieldset.cljs$lang$maxFixedArity = 1;
fieldset.cljs$lang$applyTo = fieldset__2.cljs$lang$applyTo;
fieldset.cljs$core$IFn$_invoke$arity$0 = fieldset__0;
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__2.cljs$core$IFn$_invoke$arity$variadic;
return fieldset;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.figcaption = (function() {
var figcaption = null;
var figcaption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});
var figcaption__2 = (function() { 
var G__22064__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__17018__auto__,children__17019__auto__);
};
var G__22064 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22065__i = 0, G__22065__a = new Array(arguments.length -  1);
while (G__22065__i < G__22065__a.length) {G__22065__a[G__22065__i] = arguments[G__22065__i + 1]; ++G__22065__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22065__a,0);
} 
return G__22064__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22064.cljs$lang$maxFixedArity = 1;
G__22064.cljs$lang$applyTo = (function (arglist__22066){
var opts__17018__auto__ = cljs.core.first(arglist__22066);
var children__17019__auto__ = cljs.core.rest(arglist__22066);
return G__22064__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22064.cljs$core$IFn$_invoke$arity$variadic = G__22064__delegate;
return G__22064;
})()
;
figcaption = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return figcaption__0.call(this);
default:
var G__22067 = null;
if (arguments.length > 1) {
var G__22068__i = 0, G__22068__a = new Array(arguments.length -  1);
while (G__22068__i < G__22068__a.length) {G__22068__a[G__22068__i] = arguments[G__22068__i + 1]; ++G__22068__i;}
G__22067 = new cljs.core.IndexedSeq(G__22068__a,0);
}
return figcaption__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figcaption.cljs$lang$maxFixedArity = 1;
figcaption.cljs$lang$applyTo = figcaption__2.cljs$lang$applyTo;
figcaption.cljs$core$IFn$_invoke$arity$0 = figcaption__0;
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__2.cljs$core$IFn$_invoke$arity$variadic;
return figcaption;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.figure = (function() {
var figure = null;
var figure__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});
var figure__2 = (function() { 
var G__22069__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__17018__auto__,children__17019__auto__);
};
var G__22069 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22070__i = 0, G__22070__a = new Array(arguments.length -  1);
while (G__22070__i < G__22070__a.length) {G__22070__a[G__22070__i] = arguments[G__22070__i + 1]; ++G__22070__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22070__a,0);
} 
return G__22069__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22069.cljs$lang$maxFixedArity = 1;
G__22069.cljs$lang$applyTo = (function (arglist__22071){
var opts__17018__auto__ = cljs.core.first(arglist__22071);
var children__17019__auto__ = cljs.core.rest(arglist__22071);
return G__22069__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22069.cljs$core$IFn$_invoke$arity$variadic = G__22069__delegate;
return G__22069;
})()
;
figure = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return figure__0.call(this);
default:
var G__22072 = null;
if (arguments.length > 1) {
var G__22073__i = 0, G__22073__a = new Array(arguments.length -  1);
while (G__22073__i < G__22073__a.length) {G__22073__a[G__22073__i] = arguments[G__22073__i + 1]; ++G__22073__i;}
G__22072 = new cljs.core.IndexedSeq(G__22073__a,0);
}
return figure__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figure.cljs$lang$maxFixedArity = 1;
figure.cljs$lang$applyTo = figure__2.cljs$lang$applyTo;
figure.cljs$core$IFn$_invoke$arity$0 = figure__0;
figure.cljs$core$IFn$_invoke$arity$variadic = figure__2.cljs$core$IFn$_invoke$arity$variadic;
return figure;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.footer = (function() {
var footer = null;
var footer__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});
var footer__2 = (function() { 
var G__22074__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__17018__auto__,children__17019__auto__);
};
var G__22074 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22075__i = 0, G__22075__a = new Array(arguments.length -  1);
while (G__22075__i < G__22075__a.length) {G__22075__a[G__22075__i] = arguments[G__22075__i + 1]; ++G__22075__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22075__a,0);
} 
return G__22074__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22074.cljs$lang$maxFixedArity = 1;
G__22074.cljs$lang$applyTo = (function (arglist__22076){
var opts__17018__auto__ = cljs.core.first(arglist__22076);
var children__17019__auto__ = cljs.core.rest(arglist__22076);
return G__22074__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22074.cljs$core$IFn$_invoke$arity$variadic = G__22074__delegate;
return G__22074;
})()
;
footer = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return footer__0.call(this);
default:
var G__22077 = null;
if (arguments.length > 1) {
var G__22078__i = 0, G__22078__a = new Array(arguments.length -  1);
while (G__22078__i < G__22078__a.length) {G__22078__a[G__22078__i] = arguments[G__22078__i + 1]; ++G__22078__i;}
G__22077 = new cljs.core.IndexedSeq(G__22078__a,0);
}
return footer__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
footer.cljs$lang$maxFixedArity = 1;
footer.cljs$lang$applyTo = footer__2.cljs$lang$applyTo;
footer.cljs$core$IFn$_invoke$arity$0 = footer__0;
footer.cljs$core$IFn$_invoke$arity$variadic = footer__2.cljs$core$IFn$_invoke$arity$variadic;
return footer;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.form = (function() {
var form = null;
var form__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});
var form__2 = (function() { 
var G__22079__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__17018__auto__,children__17019__auto__);
};
var G__22079 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22080__i = 0, G__22080__a = new Array(arguments.length -  1);
while (G__22080__i < G__22080__a.length) {G__22080__a[G__22080__i] = arguments[G__22080__i + 1]; ++G__22080__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22080__a,0);
} 
return G__22079__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22079.cljs$lang$maxFixedArity = 1;
G__22079.cljs$lang$applyTo = (function (arglist__22081){
var opts__17018__auto__ = cljs.core.first(arglist__22081);
var children__17019__auto__ = cljs.core.rest(arglist__22081);
return G__22079__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22079.cljs$core$IFn$_invoke$arity$variadic = G__22079__delegate;
return G__22079;
})()
;
form = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return form__0.call(this);
default:
var G__22082 = null;
if (arguments.length > 1) {
var G__22083__i = 0, G__22083__a = new Array(arguments.length -  1);
while (G__22083__i < G__22083__a.length) {G__22083__a[G__22083__i] = arguments[G__22083__i + 1]; ++G__22083__i;}
G__22082 = new cljs.core.IndexedSeq(G__22083__a,0);
}
return form__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
form.cljs$lang$maxFixedArity = 1;
form.cljs$lang$applyTo = form__2.cljs$lang$applyTo;
form.cljs$core$IFn$_invoke$arity$0 = form__0;
form.cljs$core$IFn$_invoke$arity$variadic = form__2.cljs$core$IFn$_invoke$arity$variadic;
return form;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h1 = (function() {
var h1 = null;
var h1__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});
var h1__2 = (function() { 
var G__22084__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__17018__auto__,children__17019__auto__);
};
var G__22084 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22085__i = 0, G__22085__a = new Array(arguments.length -  1);
while (G__22085__i < G__22085__a.length) {G__22085__a[G__22085__i] = arguments[G__22085__i + 1]; ++G__22085__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22085__a,0);
} 
return G__22084__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22084.cljs$lang$maxFixedArity = 1;
G__22084.cljs$lang$applyTo = (function (arglist__22086){
var opts__17018__auto__ = cljs.core.first(arglist__22086);
var children__17019__auto__ = cljs.core.rest(arglist__22086);
return G__22084__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22084.cljs$core$IFn$_invoke$arity$variadic = G__22084__delegate;
return G__22084;
})()
;
h1 = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return h1__0.call(this);
default:
var G__22087 = null;
if (arguments.length > 1) {
var G__22088__i = 0, G__22088__a = new Array(arguments.length -  1);
while (G__22088__i < G__22088__a.length) {G__22088__a[G__22088__i] = arguments[G__22088__i + 1]; ++G__22088__i;}
G__22087 = new cljs.core.IndexedSeq(G__22088__a,0);
}
return h1__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h1.cljs$lang$maxFixedArity = 1;
h1.cljs$lang$applyTo = h1__2.cljs$lang$applyTo;
h1.cljs$core$IFn$_invoke$arity$0 = h1__0;
h1.cljs$core$IFn$_invoke$arity$variadic = h1__2.cljs$core$IFn$_invoke$arity$variadic;
return h1;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h2 = (function() {
var h2 = null;
var h2__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});
var h2__2 = (function() { 
var G__22089__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__17018__auto__,children__17019__auto__);
};
var G__22089 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22090__i = 0, G__22090__a = new Array(arguments.length -  1);
while (G__22090__i < G__22090__a.length) {G__22090__a[G__22090__i] = arguments[G__22090__i + 1]; ++G__22090__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22090__a,0);
} 
return G__22089__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22089.cljs$lang$maxFixedArity = 1;
G__22089.cljs$lang$applyTo = (function (arglist__22091){
var opts__17018__auto__ = cljs.core.first(arglist__22091);
var children__17019__auto__ = cljs.core.rest(arglist__22091);
return G__22089__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22089.cljs$core$IFn$_invoke$arity$variadic = G__22089__delegate;
return G__22089;
})()
;
h2 = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return h2__0.call(this);
default:
var G__22092 = null;
if (arguments.length > 1) {
var G__22093__i = 0, G__22093__a = new Array(arguments.length -  1);
while (G__22093__i < G__22093__a.length) {G__22093__a[G__22093__i] = arguments[G__22093__i + 1]; ++G__22093__i;}
G__22092 = new cljs.core.IndexedSeq(G__22093__a,0);
}
return h2__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h2.cljs$lang$maxFixedArity = 1;
h2.cljs$lang$applyTo = h2__2.cljs$lang$applyTo;
h2.cljs$core$IFn$_invoke$arity$0 = h2__0;
h2.cljs$core$IFn$_invoke$arity$variadic = h2__2.cljs$core$IFn$_invoke$arity$variadic;
return h2;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h3 = (function() {
var h3 = null;
var h3__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});
var h3__2 = (function() { 
var G__22094__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__17018__auto__,children__17019__auto__);
};
var G__22094 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22095__i = 0, G__22095__a = new Array(arguments.length -  1);
while (G__22095__i < G__22095__a.length) {G__22095__a[G__22095__i] = arguments[G__22095__i + 1]; ++G__22095__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22095__a,0);
} 
return G__22094__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22094.cljs$lang$maxFixedArity = 1;
G__22094.cljs$lang$applyTo = (function (arglist__22096){
var opts__17018__auto__ = cljs.core.first(arglist__22096);
var children__17019__auto__ = cljs.core.rest(arglist__22096);
return G__22094__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22094.cljs$core$IFn$_invoke$arity$variadic = G__22094__delegate;
return G__22094;
})()
;
h3 = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return h3__0.call(this);
default:
var G__22097 = null;
if (arguments.length > 1) {
var G__22098__i = 0, G__22098__a = new Array(arguments.length -  1);
while (G__22098__i < G__22098__a.length) {G__22098__a[G__22098__i] = arguments[G__22098__i + 1]; ++G__22098__i;}
G__22097 = new cljs.core.IndexedSeq(G__22098__a,0);
}
return h3__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h3.cljs$lang$maxFixedArity = 1;
h3.cljs$lang$applyTo = h3__2.cljs$lang$applyTo;
h3.cljs$core$IFn$_invoke$arity$0 = h3__0;
h3.cljs$core$IFn$_invoke$arity$variadic = h3__2.cljs$core$IFn$_invoke$arity$variadic;
return h3;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h4 = (function() {
var h4 = null;
var h4__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});
var h4__2 = (function() { 
var G__22099__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__17018__auto__,children__17019__auto__);
};
var G__22099 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22100__i = 0, G__22100__a = new Array(arguments.length -  1);
while (G__22100__i < G__22100__a.length) {G__22100__a[G__22100__i] = arguments[G__22100__i + 1]; ++G__22100__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22100__a,0);
} 
return G__22099__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22099.cljs$lang$maxFixedArity = 1;
G__22099.cljs$lang$applyTo = (function (arglist__22101){
var opts__17018__auto__ = cljs.core.first(arglist__22101);
var children__17019__auto__ = cljs.core.rest(arglist__22101);
return G__22099__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22099.cljs$core$IFn$_invoke$arity$variadic = G__22099__delegate;
return G__22099;
})()
;
h4 = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return h4__0.call(this);
default:
var G__22102 = null;
if (arguments.length > 1) {
var G__22103__i = 0, G__22103__a = new Array(arguments.length -  1);
while (G__22103__i < G__22103__a.length) {G__22103__a[G__22103__i] = arguments[G__22103__i + 1]; ++G__22103__i;}
G__22102 = new cljs.core.IndexedSeq(G__22103__a,0);
}
return h4__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h4.cljs$lang$maxFixedArity = 1;
h4.cljs$lang$applyTo = h4__2.cljs$lang$applyTo;
h4.cljs$core$IFn$_invoke$arity$0 = h4__0;
h4.cljs$core$IFn$_invoke$arity$variadic = h4__2.cljs$core$IFn$_invoke$arity$variadic;
return h4;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h5 = (function() {
var h5 = null;
var h5__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});
var h5__2 = (function() { 
var G__22104__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__17018__auto__,children__17019__auto__);
};
var G__22104 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22105__i = 0, G__22105__a = new Array(arguments.length -  1);
while (G__22105__i < G__22105__a.length) {G__22105__a[G__22105__i] = arguments[G__22105__i + 1]; ++G__22105__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22105__a,0);
} 
return G__22104__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22104.cljs$lang$maxFixedArity = 1;
G__22104.cljs$lang$applyTo = (function (arglist__22106){
var opts__17018__auto__ = cljs.core.first(arglist__22106);
var children__17019__auto__ = cljs.core.rest(arglist__22106);
return G__22104__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22104.cljs$core$IFn$_invoke$arity$variadic = G__22104__delegate;
return G__22104;
})()
;
h5 = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return h5__0.call(this);
default:
var G__22107 = null;
if (arguments.length > 1) {
var G__22108__i = 0, G__22108__a = new Array(arguments.length -  1);
while (G__22108__i < G__22108__a.length) {G__22108__a[G__22108__i] = arguments[G__22108__i + 1]; ++G__22108__i;}
G__22107 = new cljs.core.IndexedSeq(G__22108__a,0);
}
return h5__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h5.cljs$lang$maxFixedArity = 1;
h5.cljs$lang$applyTo = h5__2.cljs$lang$applyTo;
h5.cljs$core$IFn$_invoke$arity$0 = h5__0;
h5.cljs$core$IFn$_invoke$arity$variadic = h5__2.cljs$core$IFn$_invoke$arity$variadic;
return h5;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h6 = (function() {
var h6 = null;
var h6__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});
var h6__2 = (function() { 
var G__22109__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__17018__auto__,children__17019__auto__);
};
var G__22109 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22110__i = 0, G__22110__a = new Array(arguments.length -  1);
while (G__22110__i < G__22110__a.length) {G__22110__a[G__22110__i] = arguments[G__22110__i + 1]; ++G__22110__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22110__a,0);
} 
return G__22109__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22109.cljs$lang$maxFixedArity = 1;
G__22109.cljs$lang$applyTo = (function (arglist__22111){
var opts__17018__auto__ = cljs.core.first(arglist__22111);
var children__17019__auto__ = cljs.core.rest(arglist__22111);
return G__22109__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22109.cljs$core$IFn$_invoke$arity$variadic = G__22109__delegate;
return G__22109;
})()
;
h6 = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return h6__0.call(this);
default:
var G__22112 = null;
if (arguments.length > 1) {
var G__22113__i = 0, G__22113__a = new Array(arguments.length -  1);
while (G__22113__i < G__22113__a.length) {G__22113__a[G__22113__i] = arguments[G__22113__i + 1]; ++G__22113__i;}
G__22112 = new cljs.core.IndexedSeq(G__22113__a,0);
}
return h6__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h6.cljs$lang$maxFixedArity = 1;
h6.cljs$lang$applyTo = h6__2.cljs$lang$applyTo;
h6.cljs$core$IFn$_invoke$arity$0 = h6__0;
h6.cljs$core$IFn$_invoke$arity$variadic = h6__2.cljs$core$IFn$_invoke$arity$variadic;
return h6;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.head = (function() {
var head = null;
var head__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});
var head__2 = (function() { 
var G__22114__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__17018__auto__,children__17019__auto__);
};
var G__22114 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22115__i = 0, G__22115__a = new Array(arguments.length -  1);
while (G__22115__i < G__22115__a.length) {G__22115__a[G__22115__i] = arguments[G__22115__i + 1]; ++G__22115__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22115__a,0);
} 
return G__22114__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22114.cljs$lang$maxFixedArity = 1;
G__22114.cljs$lang$applyTo = (function (arglist__22116){
var opts__17018__auto__ = cljs.core.first(arglist__22116);
var children__17019__auto__ = cljs.core.rest(arglist__22116);
return G__22114__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22114.cljs$core$IFn$_invoke$arity$variadic = G__22114__delegate;
return G__22114;
})()
;
head = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return head__0.call(this);
default:
var G__22117 = null;
if (arguments.length > 1) {
var G__22118__i = 0, G__22118__a = new Array(arguments.length -  1);
while (G__22118__i < G__22118__a.length) {G__22118__a[G__22118__i] = arguments[G__22118__i + 1]; ++G__22118__i;}
G__22117 = new cljs.core.IndexedSeq(G__22118__a,0);
}
return head__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = head__2.cljs$lang$applyTo;
head.cljs$core$IFn$_invoke$arity$0 = head__0;
head.cljs$core$IFn$_invoke$arity$variadic = head__2.cljs$core$IFn$_invoke$arity$variadic;
return head;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.header = (function() {
var header = null;
var header__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});
var header__2 = (function() { 
var G__22119__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__17018__auto__,children__17019__auto__);
};
var G__22119 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22120__i = 0, G__22120__a = new Array(arguments.length -  1);
while (G__22120__i < G__22120__a.length) {G__22120__a[G__22120__i] = arguments[G__22120__i + 1]; ++G__22120__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22120__a,0);
} 
return G__22119__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22119.cljs$lang$maxFixedArity = 1;
G__22119.cljs$lang$applyTo = (function (arglist__22121){
var opts__17018__auto__ = cljs.core.first(arglist__22121);
var children__17019__auto__ = cljs.core.rest(arglist__22121);
return G__22119__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22119.cljs$core$IFn$_invoke$arity$variadic = G__22119__delegate;
return G__22119;
})()
;
header = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return header__0.call(this);
default:
var G__22122 = null;
if (arguments.length > 1) {
var G__22123__i = 0, G__22123__a = new Array(arguments.length -  1);
while (G__22123__i < G__22123__a.length) {G__22123__a[G__22123__i] = arguments[G__22123__i + 1]; ++G__22123__i;}
G__22122 = new cljs.core.IndexedSeq(G__22123__a,0);
}
return header__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
header.cljs$lang$maxFixedArity = 1;
header.cljs$lang$applyTo = header__2.cljs$lang$applyTo;
header.cljs$core$IFn$_invoke$arity$0 = header__0;
header.cljs$core$IFn$_invoke$arity$variadic = header__2.cljs$core$IFn$_invoke$arity$variadic;
return header;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.hr = (function() {
var hr = null;
var hr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});
var hr__2 = (function() { 
var G__22124__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__17018__auto__,children__17019__auto__);
};
var G__22124 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22125__i = 0, G__22125__a = new Array(arguments.length -  1);
while (G__22125__i < G__22125__a.length) {G__22125__a[G__22125__i] = arguments[G__22125__i + 1]; ++G__22125__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22125__a,0);
} 
return G__22124__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22124.cljs$lang$maxFixedArity = 1;
G__22124.cljs$lang$applyTo = (function (arglist__22126){
var opts__17018__auto__ = cljs.core.first(arglist__22126);
var children__17019__auto__ = cljs.core.rest(arglist__22126);
return G__22124__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22124.cljs$core$IFn$_invoke$arity$variadic = G__22124__delegate;
return G__22124;
})()
;
hr = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return hr__0.call(this);
default:
var G__22127 = null;
if (arguments.length > 1) {
var G__22128__i = 0, G__22128__a = new Array(arguments.length -  1);
while (G__22128__i < G__22128__a.length) {G__22128__a[G__22128__i] = arguments[G__22128__i + 1]; ++G__22128__i;}
G__22127 = new cljs.core.IndexedSeq(G__22128__a,0);
}
return hr__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hr.cljs$lang$maxFixedArity = 1;
hr.cljs$lang$applyTo = hr__2.cljs$lang$applyTo;
hr.cljs$core$IFn$_invoke$arity$0 = hr__0;
hr.cljs$core$IFn$_invoke$arity$variadic = hr__2.cljs$core$IFn$_invoke$arity$variadic;
return hr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.html = (function() {
var html = null;
var html__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});
var html__2 = (function() { 
var G__22129__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__17018__auto__,children__17019__auto__);
};
var G__22129 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22130__i = 0, G__22130__a = new Array(arguments.length -  1);
while (G__22130__i < G__22130__a.length) {G__22130__a[G__22130__i] = arguments[G__22130__i + 1]; ++G__22130__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22130__a,0);
} 
return G__22129__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22129.cljs$lang$maxFixedArity = 1;
G__22129.cljs$lang$applyTo = (function (arglist__22131){
var opts__17018__auto__ = cljs.core.first(arglist__22131);
var children__17019__auto__ = cljs.core.rest(arglist__22131);
return G__22129__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22129.cljs$core$IFn$_invoke$arity$variadic = G__22129__delegate;
return G__22129;
})()
;
html = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return html__0.call(this);
default:
var G__22132 = null;
if (arguments.length > 1) {
var G__22133__i = 0, G__22133__a = new Array(arguments.length -  1);
while (G__22133__i < G__22133__a.length) {G__22133__a[G__22133__i] = arguments[G__22133__i + 1]; ++G__22133__i;}
G__22132 = new cljs.core.IndexedSeq(G__22133__a,0);
}
return html__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
html.cljs$lang$maxFixedArity = 1;
html.cljs$lang$applyTo = html__2.cljs$lang$applyTo;
html.cljs$core$IFn$_invoke$arity$0 = html__0;
html.cljs$core$IFn$_invoke$arity$variadic = html__2.cljs$core$IFn$_invoke$arity$variadic;
return html;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.i = (function() {
var i = null;
var i__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});
var i__2 = (function() { 
var G__22134__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__17018__auto__,children__17019__auto__);
};
var G__22134 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22135__i = 0, G__22135__a = new Array(arguments.length -  1);
while (G__22135__i < G__22135__a.length) {G__22135__a[G__22135__i] = arguments[G__22135__i + 1]; ++G__22135__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22135__a,0);
} 
return G__22134__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22134.cljs$lang$maxFixedArity = 1;
G__22134.cljs$lang$applyTo = (function (arglist__22136){
var opts__17018__auto__ = cljs.core.first(arglist__22136);
var children__17019__auto__ = cljs.core.rest(arglist__22136);
return G__22134__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22134.cljs$core$IFn$_invoke$arity$variadic = G__22134__delegate;
return G__22134;
})()
;
i = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return i__0.call(this);
default:
var G__22137 = null;
if (arguments.length > 1) {
var G__22138__i = 0, G__22138__a = new Array(arguments.length -  1);
while (G__22138__i < G__22138__a.length) {G__22138__a[G__22138__i] = arguments[G__22138__i + 1]; ++G__22138__i;}
G__22137 = new cljs.core.IndexedSeq(G__22138__a,0);
}
return i__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
i.cljs$lang$maxFixedArity = 1;
i.cljs$lang$applyTo = i__2.cljs$lang$applyTo;
i.cljs$core$IFn$_invoke$arity$0 = i__0;
i.cljs$core$IFn$_invoke$arity$variadic = i__2.cljs$core$IFn$_invoke$arity$variadic;
return i;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.iframe = (function() {
var iframe = null;
var iframe__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});
var iframe__2 = (function() { 
var G__22139__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__17018__auto__,children__17019__auto__);
};
var G__22139 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22140__i = 0, G__22140__a = new Array(arguments.length -  1);
while (G__22140__i < G__22140__a.length) {G__22140__a[G__22140__i] = arguments[G__22140__i + 1]; ++G__22140__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22140__a,0);
} 
return G__22139__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22139.cljs$lang$maxFixedArity = 1;
G__22139.cljs$lang$applyTo = (function (arglist__22141){
var opts__17018__auto__ = cljs.core.first(arglist__22141);
var children__17019__auto__ = cljs.core.rest(arglist__22141);
return G__22139__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22139.cljs$core$IFn$_invoke$arity$variadic = G__22139__delegate;
return G__22139;
})()
;
iframe = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return iframe__0.call(this);
default:
var G__22142 = null;
if (arguments.length > 1) {
var G__22143__i = 0, G__22143__a = new Array(arguments.length -  1);
while (G__22143__i < G__22143__a.length) {G__22143__a[G__22143__i] = arguments[G__22143__i + 1]; ++G__22143__i;}
G__22142 = new cljs.core.IndexedSeq(G__22143__a,0);
}
return iframe__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
iframe.cljs$lang$maxFixedArity = 1;
iframe.cljs$lang$applyTo = iframe__2.cljs$lang$applyTo;
iframe.cljs$core$IFn$_invoke$arity$0 = iframe__0;
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__2.cljs$core$IFn$_invoke$arity$variadic;
return iframe;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.img = (function() {
var img = null;
var img__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});
var img__2 = (function() { 
var G__22144__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__17018__auto__,children__17019__auto__);
};
var G__22144 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22145__i = 0, G__22145__a = new Array(arguments.length -  1);
while (G__22145__i < G__22145__a.length) {G__22145__a[G__22145__i] = arguments[G__22145__i + 1]; ++G__22145__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22145__a,0);
} 
return G__22144__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22144.cljs$lang$maxFixedArity = 1;
G__22144.cljs$lang$applyTo = (function (arglist__22146){
var opts__17018__auto__ = cljs.core.first(arglist__22146);
var children__17019__auto__ = cljs.core.rest(arglist__22146);
return G__22144__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22144.cljs$core$IFn$_invoke$arity$variadic = G__22144__delegate;
return G__22144;
})()
;
img = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return img__0.call(this);
default:
var G__22147 = null;
if (arguments.length > 1) {
var G__22148__i = 0, G__22148__a = new Array(arguments.length -  1);
while (G__22148__i < G__22148__a.length) {G__22148__a[G__22148__i] = arguments[G__22148__i + 1]; ++G__22148__i;}
G__22147 = new cljs.core.IndexedSeq(G__22148__a,0);
}
return img__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
img.cljs$lang$maxFixedArity = 1;
img.cljs$lang$applyTo = img__2.cljs$lang$applyTo;
img.cljs$core$IFn$_invoke$arity$0 = img__0;
img.cljs$core$IFn$_invoke$arity$variadic = img__2.cljs$core$IFn$_invoke$arity$variadic;
return img;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ins = (function() {
var ins = null;
var ins__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});
var ins__2 = (function() { 
var G__22149__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__17018__auto__,children__17019__auto__);
};
var G__22149 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22150__i = 0, G__22150__a = new Array(arguments.length -  1);
while (G__22150__i < G__22150__a.length) {G__22150__a[G__22150__i] = arguments[G__22150__i + 1]; ++G__22150__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22150__a,0);
} 
return G__22149__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22149.cljs$lang$maxFixedArity = 1;
G__22149.cljs$lang$applyTo = (function (arglist__22151){
var opts__17018__auto__ = cljs.core.first(arglist__22151);
var children__17019__auto__ = cljs.core.rest(arglist__22151);
return G__22149__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22149.cljs$core$IFn$_invoke$arity$variadic = G__22149__delegate;
return G__22149;
})()
;
ins = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return ins__0.call(this);
default:
var G__22152 = null;
if (arguments.length > 1) {
var G__22153__i = 0, G__22153__a = new Array(arguments.length -  1);
while (G__22153__i < G__22153__a.length) {G__22153__a[G__22153__i] = arguments[G__22153__i + 1]; ++G__22153__i;}
G__22152 = new cljs.core.IndexedSeq(G__22153__a,0);
}
return ins__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ins.cljs$lang$maxFixedArity = 1;
ins.cljs$lang$applyTo = ins__2.cljs$lang$applyTo;
ins.cljs$core$IFn$_invoke$arity$0 = ins__0;
ins.cljs$core$IFn$_invoke$arity$variadic = ins__2.cljs$core$IFn$_invoke$arity$variadic;
return ins;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.kbd = (function() {
var kbd = null;
var kbd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});
var kbd__2 = (function() { 
var G__22154__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__17018__auto__,children__17019__auto__);
};
var G__22154 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22155__i = 0, G__22155__a = new Array(arguments.length -  1);
while (G__22155__i < G__22155__a.length) {G__22155__a[G__22155__i] = arguments[G__22155__i + 1]; ++G__22155__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22155__a,0);
} 
return G__22154__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22154.cljs$lang$maxFixedArity = 1;
G__22154.cljs$lang$applyTo = (function (arglist__22156){
var opts__17018__auto__ = cljs.core.first(arglist__22156);
var children__17019__auto__ = cljs.core.rest(arglist__22156);
return G__22154__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22154.cljs$core$IFn$_invoke$arity$variadic = G__22154__delegate;
return G__22154;
})()
;
kbd = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return kbd__0.call(this);
default:
var G__22157 = null;
if (arguments.length > 1) {
var G__22158__i = 0, G__22158__a = new Array(arguments.length -  1);
while (G__22158__i < G__22158__a.length) {G__22158__a[G__22158__i] = arguments[G__22158__i + 1]; ++G__22158__i;}
G__22157 = new cljs.core.IndexedSeq(G__22158__a,0);
}
return kbd__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kbd.cljs$lang$maxFixedArity = 1;
kbd.cljs$lang$applyTo = kbd__2.cljs$lang$applyTo;
kbd.cljs$core$IFn$_invoke$arity$0 = kbd__0;
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__2.cljs$core$IFn$_invoke$arity$variadic;
return kbd;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.keygen = (function() {
var keygen = null;
var keygen__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});
var keygen__2 = (function() { 
var G__22159__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__17018__auto__,children__17019__auto__);
};
var G__22159 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22160__i = 0, G__22160__a = new Array(arguments.length -  1);
while (G__22160__i < G__22160__a.length) {G__22160__a[G__22160__i] = arguments[G__22160__i + 1]; ++G__22160__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22160__a,0);
} 
return G__22159__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22159.cljs$lang$maxFixedArity = 1;
G__22159.cljs$lang$applyTo = (function (arglist__22161){
var opts__17018__auto__ = cljs.core.first(arglist__22161);
var children__17019__auto__ = cljs.core.rest(arglist__22161);
return G__22159__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22159.cljs$core$IFn$_invoke$arity$variadic = G__22159__delegate;
return G__22159;
})()
;
keygen = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return keygen__0.call(this);
default:
var G__22162 = null;
if (arguments.length > 1) {
var G__22163__i = 0, G__22163__a = new Array(arguments.length -  1);
while (G__22163__i < G__22163__a.length) {G__22163__a[G__22163__i] = arguments[G__22163__i + 1]; ++G__22163__i;}
G__22162 = new cljs.core.IndexedSeq(G__22163__a,0);
}
return keygen__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keygen.cljs$lang$maxFixedArity = 1;
keygen.cljs$lang$applyTo = keygen__2.cljs$lang$applyTo;
keygen.cljs$core$IFn$_invoke$arity$0 = keygen__0;
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__2.cljs$core$IFn$_invoke$arity$variadic;
return keygen;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.label = (function() {
var label = null;
var label__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});
var label__2 = (function() { 
var G__22164__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__17018__auto__,children__17019__auto__);
};
var G__22164 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22165__i = 0, G__22165__a = new Array(arguments.length -  1);
while (G__22165__i < G__22165__a.length) {G__22165__a[G__22165__i] = arguments[G__22165__i + 1]; ++G__22165__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22165__a,0);
} 
return G__22164__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22164.cljs$lang$maxFixedArity = 1;
G__22164.cljs$lang$applyTo = (function (arglist__22166){
var opts__17018__auto__ = cljs.core.first(arglist__22166);
var children__17019__auto__ = cljs.core.rest(arglist__22166);
return G__22164__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22164.cljs$core$IFn$_invoke$arity$variadic = G__22164__delegate;
return G__22164;
})()
;
label = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return label__0.call(this);
default:
var G__22167 = null;
if (arguments.length > 1) {
var G__22168__i = 0, G__22168__a = new Array(arguments.length -  1);
while (G__22168__i < G__22168__a.length) {G__22168__a[G__22168__i] = arguments[G__22168__i + 1]; ++G__22168__i;}
G__22167 = new cljs.core.IndexedSeq(G__22168__a,0);
}
return label__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = label__2.cljs$lang$applyTo;
label.cljs$core$IFn$_invoke$arity$0 = label__0;
label.cljs$core$IFn$_invoke$arity$variadic = label__2.cljs$core$IFn$_invoke$arity$variadic;
return label;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.legend = (function() {
var legend = null;
var legend__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});
var legend__2 = (function() { 
var G__22169__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__17018__auto__,children__17019__auto__);
};
var G__22169 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22170__i = 0, G__22170__a = new Array(arguments.length -  1);
while (G__22170__i < G__22170__a.length) {G__22170__a[G__22170__i] = arguments[G__22170__i + 1]; ++G__22170__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22170__a,0);
} 
return G__22169__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22169.cljs$lang$maxFixedArity = 1;
G__22169.cljs$lang$applyTo = (function (arglist__22171){
var opts__17018__auto__ = cljs.core.first(arglist__22171);
var children__17019__auto__ = cljs.core.rest(arglist__22171);
return G__22169__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22169.cljs$core$IFn$_invoke$arity$variadic = G__22169__delegate;
return G__22169;
})()
;
legend = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return legend__0.call(this);
default:
var G__22172 = null;
if (arguments.length > 1) {
var G__22173__i = 0, G__22173__a = new Array(arguments.length -  1);
while (G__22173__i < G__22173__a.length) {G__22173__a[G__22173__i] = arguments[G__22173__i + 1]; ++G__22173__i;}
G__22172 = new cljs.core.IndexedSeq(G__22173__a,0);
}
return legend__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
legend.cljs$lang$maxFixedArity = 1;
legend.cljs$lang$applyTo = legend__2.cljs$lang$applyTo;
legend.cljs$core$IFn$_invoke$arity$0 = legend__0;
legend.cljs$core$IFn$_invoke$arity$variadic = legend__2.cljs$core$IFn$_invoke$arity$variadic;
return legend;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.li = (function() {
var li = null;
var li__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});
var li__2 = (function() { 
var G__22174__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__17018__auto__,children__17019__auto__);
};
var G__22174 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22175__i = 0, G__22175__a = new Array(arguments.length -  1);
while (G__22175__i < G__22175__a.length) {G__22175__a[G__22175__i] = arguments[G__22175__i + 1]; ++G__22175__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22175__a,0);
} 
return G__22174__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22174.cljs$lang$maxFixedArity = 1;
G__22174.cljs$lang$applyTo = (function (arglist__22176){
var opts__17018__auto__ = cljs.core.first(arglist__22176);
var children__17019__auto__ = cljs.core.rest(arglist__22176);
return G__22174__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22174.cljs$core$IFn$_invoke$arity$variadic = G__22174__delegate;
return G__22174;
})()
;
li = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return li__0.call(this);
default:
var G__22177 = null;
if (arguments.length > 1) {
var G__22178__i = 0, G__22178__a = new Array(arguments.length -  1);
while (G__22178__i < G__22178__a.length) {G__22178__a[G__22178__i] = arguments[G__22178__i + 1]; ++G__22178__i;}
G__22177 = new cljs.core.IndexedSeq(G__22178__a,0);
}
return li__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
li.cljs$lang$maxFixedArity = 1;
li.cljs$lang$applyTo = li__2.cljs$lang$applyTo;
li.cljs$core$IFn$_invoke$arity$0 = li__0;
li.cljs$core$IFn$_invoke$arity$variadic = li__2.cljs$core$IFn$_invoke$arity$variadic;
return li;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.link = (function() {
var link = null;
var link__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});
var link__2 = (function() { 
var G__22179__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__17018__auto__,children__17019__auto__);
};
var G__22179 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22180__i = 0, G__22180__a = new Array(arguments.length -  1);
while (G__22180__i < G__22180__a.length) {G__22180__a[G__22180__i] = arguments[G__22180__i + 1]; ++G__22180__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22180__a,0);
} 
return G__22179__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22179.cljs$lang$maxFixedArity = 1;
G__22179.cljs$lang$applyTo = (function (arglist__22181){
var opts__17018__auto__ = cljs.core.first(arglist__22181);
var children__17019__auto__ = cljs.core.rest(arglist__22181);
return G__22179__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22179.cljs$core$IFn$_invoke$arity$variadic = G__22179__delegate;
return G__22179;
})()
;
link = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return link__0.call(this);
default:
var G__22182 = null;
if (arguments.length > 1) {
var G__22183__i = 0, G__22183__a = new Array(arguments.length -  1);
while (G__22183__i < G__22183__a.length) {G__22183__a[G__22183__i] = arguments[G__22183__i + 1]; ++G__22183__i;}
G__22182 = new cljs.core.IndexedSeq(G__22183__a,0);
}
return link__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
link.cljs$lang$maxFixedArity = 1;
link.cljs$lang$applyTo = link__2.cljs$lang$applyTo;
link.cljs$core$IFn$_invoke$arity$0 = link__0;
link.cljs$core$IFn$_invoke$arity$variadic = link__2.cljs$core$IFn$_invoke$arity$variadic;
return link;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.main = (function() {
var main = null;
var main__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});
var main__2 = (function() { 
var G__22184__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__17018__auto__,children__17019__auto__);
};
var G__22184 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22185__i = 0, G__22185__a = new Array(arguments.length -  1);
while (G__22185__i < G__22185__a.length) {G__22185__a[G__22185__i] = arguments[G__22185__i + 1]; ++G__22185__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22185__a,0);
} 
return G__22184__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22184.cljs$lang$maxFixedArity = 1;
G__22184.cljs$lang$applyTo = (function (arglist__22186){
var opts__17018__auto__ = cljs.core.first(arglist__22186);
var children__17019__auto__ = cljs.core.rest(arglist__22186);
return G__22184__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22184.cljs$core$IFn$_invoke$arity$variadic = G__22184__delegate;
return G__22184;
})()
;
main = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return main__0.call(this);
default:
var G__22187 = null;
if (arguments.length > 1) {
var G__22188__i = 0, G__22188__a = new Array(arguments.length -  1);
while (G__22188__i < G__22188__a.length) {G__22188__a[G__22188__i] = arguments[G__22188__i + 1]; ++G__22188__i;}
G__22187 = new cljs.core.IndexedSeq(G__22188__a,0);
}
return main__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
main.cljs$lang$maxFixedArity = 1;
main.cljs$lang$applyTo = main__2.cljs$lang$applyTo;
main.cljs$core$IFn$_invoke$arity$0 = main__0;
main.cljs$core$IFn$_invoke$arity$variadic = main__2.cljs$core$IFn$_invoke$arity$variadic;
return main;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.map = (function() {
var map = null;
var map__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});
var map__2 = (function() { 
var G__22189__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__17018__auto__,children__17019__auto__);
};
var G__22189 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22190__i = 0, G__22190__a = new Array(arguments.length -  1);
while (G__22190__i < G__22190__a.length) {G__22190__a[G__22190__i] = arguments[G__22190__i + 1]; ++G__22190__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22190__a,0);
} 
return G__22189__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22189.cljs$lang$maxFixedArity = 1;
G__22189.cljs$lang$applyTo = (function (arglist__22191){
var opts__17018__auto__ = cljs.core.first(arglist__22191);
var children__17019__auto__ = cljs.core.rest(arglist__22191);
return G__22189__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22189.cljs$core$IFn$_invoke$arity$variadic = G__22189__delegate;
return G__22189;
})()
;
map = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return map__0.call(this);
default:
var G__22192 = null;
if (arguments.length > 1) {
var G__22193__i = 0, G__22193__a = new Array(arguments.length -  1);
while (G__22193__i < G__22193__a.length) {G__22193__a[G__22193__i] = arguments[G__22193__i + 1]; ++G__22193__i;}
G__22192 = new cljs.core.IndexedSeq(G__22193__a,0);
}
return map__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 1;
map.cljs$lang$applyTo = map__2.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$0 = map__0;
map.cljs$core$IFn$_invoke$arity$variadic = map__2.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.mark = (function() {
var mark = null;
var mark__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});
var mark__2 = (function() { 
var G__22194__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__17018__auto__,children__17019__auto__);
};
var G__22194 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22195__i = 0, G__22195__a = new Array(arguments.length -  1);
while (G__22195__i < G__22195__a.length) {G__22195__a[G__22195__i] = arguments[G__22195__i + 1]; ++G__22195__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22195__a,0);
} 
return G__22194__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22194.cljs$lang$maxFixedArity = 1;
G__22194.cljs$lang$applyTo = (function (arglist__22196){
var opts__17018__auto__ = cljs.core.first(arglist__22196);
var children__17019__auto__ = cljs.core.rest(arglist__22196);
return G__22194__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22194.cljs$core$IFn$_invoke$arity$variadic = G__22194__delegate;
return G__22194;
})()
;
mark = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return mark__0.call(this);
default:
var G__22197 = null;
if (arguments.length > 1) {
var G__22198__i = 0, G__22198__a = new Array(arguments.length -  1);
while (G__22198__i < G__22198__a.length) {G__22198__a[G__22198__i] = arguments[G__22198__i + 1]; ++G__22198__i;}
G__22197 = new cljs.core.IndexedSeq(G__22198__a,0);
}
return mark__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mark.cljs$lang$maxFixedArity = 1;
mark.cljs$lang$applyTo = mark__2.cljs$lang$applyTo;
mark.cljs$core$IFn$_invoke$arity$0 = mark__0;
mark.cljs$core$IFn$_invoke$arity$variadic = mark__2.cljs$core$IFn$_invoke$arity$variadic;
return mark;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.marquee = (function() {
var marquee = null;
var marquee__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});
var marquee__2 = (function() { 
var G__22199__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__17018__auto__,children__17019__auto__);
};
var G__22199 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22200__i = 0, G__22200__a = new Array(arguments.length -  1);
while (G__22200__i < G__22200__a.length) {G__22200__a[G__22200__i] = arguments[G__22200__i + 1]; ++G__22200__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22200__a,0);
} 
return G__22199__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22199.cljs$lang$maxFixedArity = 1;
G__22199.cljs$lang$applyTo = (function (arglist__22201){
var opts__17018__auto__ = cljs.core.first(arglist__22201);
var children__17019__auto__ = cljs.core.rest(arglist__22201);
return G__22199__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22199.cljs$core$IFn$_invoke$arity$variadic = G__22199__delegate;
return G__22199;
})()
;
marquee = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return marquee__0.call(this);
default:
var G__22202 = null;
if (arguments.length > 1) {
var G__22203__i = 0, G__22203__a = new Array(arguments.length -  1);
while (G__22203__i < G__22203__a.length) {G__22203__a[G__22203__i] = arguments[G__22203__i + 1]; ++G__22203__i;}
G__22202 = new cljs.core.IndexedSeq(G__22203__a,0);
}
return marquee__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
marquee.cljs$lang$maxFixedArity = 1;
marquee.cljs$lang$applyTo = marquee__2.cljs$lang$applyTo;
marquee.cljs$core$IFn$_invoke$arity$0 = marquee__0;
marquee.cljs$core$IFn$_invoke$arity$variadic = marquee__2.cljs$core$IFn$_invoke$arity$variadic;
return marquee;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.menu = (function() {
var menu = null;
var menu__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});
var menu__2 = (function() { 
var G__22204__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__17018__auto__,children__17019__auto__);
};
var G__22204 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22205__i = 0, G__22205__a = new Array(arguments.length -  1);
while (G__22205__i < G__22205__a.length) {G__22205__a[G__22205__i] = arguments[G__22205__i + 1]; ++G__22205__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22205__a,0);
} 
return G__22204__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22204.cljs$lang$maxFixedArity = 1;
G__22204.cljs$lang$applyTo = (function (arglist__22206){
var opts__17018__auto__ = cljs.core.first(arglist__22206);
var children__17019__auto__ = cljs.core.rest(arglist__22206);
return G__22204__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22204.cljs$core$IFn$_invoke$arity$variadic = G__22204__delegate;
return G__22204;
})()
;
menu = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return menu__0.call(this);
default:
var G__22207 = null;
if (arguments.length > 1) {
var G__22208__i = 0, G__22208__a = new Array(arguments.length -  1);
while (G__22208__i < G__22208__a.length) {G__22208__a[G__22208__i] = arguments[G__22208__i + 1]; ++G__22208__i;}
G__22207 = new cljs.core.IndexedSeq(G__22208__a,0);
}
return menu__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
menu.cljs$lang$maxFixedArity = 1;
menu.cljs$lang$applyTo = menu__2.cljs$lang$applyTo;
menu.cljs$core$IFn$_invoke$arity$0 = menu__0;
menu.cljs$core$IFn$_invoke$arity$variadic = menu__2.cljs$core$IFn$_invoke$arity$variadic;
return menu;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.menuitem = (function() {
var menuitem = null;
var menuitem__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});
var menuitem__2 = (function() { 
var G__22209__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__17018__auto__,children__17019__auto__);
};
var G__22209 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22210__i = 0, G__22210__a = new Array(arguments.length -  1);
while (G__22210__i < G__22210__a.length) {G__22210__a[G__22210__i] = arguments[G__22210__i + 1]; ++G__22210__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22210__a,0);
} 
return G__22209__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22209.cljs$lang$maxFixedArity = 1;
G__22209.cljs$lang$applyTo = (function (arglist__22211){
var opts__17018__auto__ = cljs.core.first(arglist__22211);
var children__17019__auto__ = cljs.core.rest(arglist__22211);
return G__22209__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22209.cljs$core$IFn$_invoke$arity$variadic = G__22209__delegate;
return G__22209;
})()
;
menuitem = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return menuitem__0.call(this);
default:
var G__22212 = null;
if (arguments.length > 1) {
var G__22213__i = 0, G__22213__a = new Array(arguments.length -  1);
while (G__22213__i < G__22213__a.length) {G__22213__a[G__22213__i] = arguments[G__22213__i + 1]; ++G__22213__i;}
G__22212 = new cljs.core.IndexedSeq(G__22213__a,0);
}
return menuitem__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
menuitem.cljs$lang$maxFixedArity = 1;
menuitem.cljs$lang$applyTo = menuitem__2.cljs$lang$applyTo;
menuitem.cljs$core$IFn$_invoke$arity$0 = menuitem__0;
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__2.cljs$core$IFn$_invoke$arity$variadic;
return menuitem;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.meta = (function() {
var meta = null;
var meta__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});
var meta__2 = (function() { 
var G__22214__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__17018__auto__,children__17019__auto__);
};
var G__22214 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22215__i = 0, G__22215__a = new Array(arguments.length -  1);
while (G__22215__i < G__22215__a.length) {G__22215__a[G__22215__i] = arguments[G__22215__i + 1]; ++G__22215__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22215__a,0);
} 
return G__22214__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22214.cljs$lang$maxFixedArity = 1;
G__22214.cljs$lang$applyTo = (function (arglist__22216){
var opts__17018__auto__ = cljs.core.first(arglist__22216);
var children__17019__auto__ = cljs.core.rest(arglist__22216);
return G__22214__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22214.cljs$core$IFn$_invoke$arity$variadic = G__22214__delegate;
return G__22214;
})()
;
meta = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return meta__0.call(this);
default:
var G__22217 = null;
if (arguments.length > 1) {
var G__22218__i = 0, G__22218__a = new Array(arguments.length -  1);
while (G__22218__i < G__22218__a.length) {G__22218__a[G__22218__i] = arguments[G__22218__i + 1]; ++G__22218__i;}
G__22217 = new cljs.core.IndexedSeq(G__22218__a,0);
}
return meta__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meta.cljs$lang$maxFixedArity = 1;
meta.cljs$lang$applyTo = meta__2.cljs$lang$applyTo;
meta.cljs$core$IFn$_invoke$arity$0 = meta__0;
meta.cljs$core$IFn$_invoke$arity$variadic = meta__2.cljs$core$IFn$_invoke$arity$variadic;
return meta;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.meter = (function() {
var meter = null;
var meter__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});
var meter__2 = (function() { 
var G__22219__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__17018__auto__,children__17019__auto__);
};
var G__22219 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22220__i = 0, G__22220__a = new Array(arguments.length -  1);
while (G__22220__i < G__22220__a.length) {G__22220__a[G__22220__i] = arguments[G__22220__i + 1]; ++G__22220__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22220__a,0);
} 
return G__22219__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22219.cljs$lang$maxFixedArity = 1;
G__22219.cljs$lang$applyTo = (function (arglist__22221){
var opts__17018__auto__ = cljs.core.first(arglist__22221);
var children__17019__auto__ = cljs.core.rest(arglist__22221);
return G__22219__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22219.cljs$core$IFn$_invoke$arity$variadic = G__22219__delegate;
return G__22219;
})()
;
meter = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return meter__0.call(this);
default:
var G__22222 = null;
if (arguments.length > 1) {
var G__22223__i = 0, G__22223__a = new Array(arguments.length -  1);
while (G__22223__i < G__22223__a.length) {G__22223__a[G__22223__i] = arguments[G__22223__i + 1]; ++G__22223__i;}
G__22222 = new cljs.core.IndexedSeq(G__22223__a,0);
}
return meter__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meter.cljs$lang$maxFixedArity = 1;
meter.cljs$lang$applyTo = meter__2.cljs$lang$applyTo;
meter.cljs$core$IFn$_invoke$arity$0 = meter__0;
meter.cljs$core$IFn$_invoke$arity$variadic = meter__2.cljs$core$IFn$_invoke$arity$variadic;
return meter;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.nav = (function() {
var nav = null;
var nav__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});
var nav__2 = (function() { 
var G__22224__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__17018__auto__,children__17019__auto__);
};
var G__22224 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22225__i = 0, G__22225__a = new Array(arguments.length -  1);
while (G__22225__i < G__22225__a.length) {G__22225__a[G__22225__i] = arguments[G__22225__i + 1]; ++G__22225__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22225__a,0);
} 
return G__22224__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22224.cljs$lang$maxFixedArity = 1;
G__22224.cljs$lang$applyTo = (function (arglist__22226){
var opts__17018__auto__ = cljs.core.first(arglist__22226);
var children__17019__auto__ = cljs.core.rest(arglist__22226);
return G__22224__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22224.cljs$core$IFn$_invoke$arity$variadic = G__22224__delegate;
return G__22224;
})()
;
nav = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return nav__0.call(this);
default:
var G__22227 = null;
if (arguments.length > 1) {
var G__22228__i = 0, G__22228__a = new Array(arguments.length -  1);
while (G__22228__i < G__22228__a.length) {G__22228__a[G__22228__i] = arguments[G__22228__i + 1]; ++G__22228__i;}
G__22227 = new cljs.core.IndexedSeq(G__22228__a,0);
}
return nav__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nav.cljs$lang$maxFixedArity = 1;
nav.cljs$lang$applyTo = nav__2.cljs$lang$applyTo;
nav.cljs$core$IFn$_invoke$arity$0 = nav__0;
nav.cljs$core$IFn$_invoke$arity$variadic = nav__2.cljs$core$IFn$_invoke$arity$variadic;
return nav;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.noscript = (function() {
var noscript = null;
var noscript__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});
var noscript__2 = (function() { 
var G__22229__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__17018__auto__,children__17019__auto__);
};
var G__22229 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22230__i = 0, G__22230__a = new Array(arguments.length -  1);
while (G__22230__i < G__22230__a.length) {G__22230__a[G__22230__i] = arguments[G__22230__i + 1]; ++G__22230__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22230__a,0);
} 
return G__22229__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22229.cljs$lang$maxFixedArity = 1;
G__22229.cljs$lang$applyTo = (function (arglist__22231){
var opts__17018__auto__ = cljs.core.first(arglist__22231);
var children__17019__auto__ = cljs.core.rest(arglist__22231);
return G__22229__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22229.cljs$core$IFn$_invoke$arity$variadic = G__22229__delegate;
return G__22229;
})()
;
noscript = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return noscript__0.call(this);
default:
var G__22232 = null;
if (arguments.length > 1) {
var G__22233__i = 0, G__22233__a = new Array(arguments.length -  1);
while (G__22233__i < G__22233__a.length) {G__22233__a[G__22233__i] = arguments[G__22233__i + 1]; ++G__22233__i;}
G__22232 = new cljs.core.IndexedSeq(G__22233__a,0);
}
return noscript__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
noscript.cljs$lang$maxFixedArity = 1;
noscript.cljs$lang$applyTo = noscript__2.cljs$lang$applyTo;
noscript.cljs$core$IFn$_invoke$arity$0 = noscript__0;
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__2.cljs$core$IFn$_invoke$arity$variadic;
return noscript;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.object = (function() {
var object = null;
var object__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});
var object__2 = (function() { 
var G__22234__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__17018__auto__,children__17019__auto__);
};
var G__22234 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22235__i = 0, G__22235__a = new Array(arguments.length -  1);
while (G__22235__i < G__22235__a.length) {G__22235__a[G__22235__i] = arguments[G__22235__i + 1]; ++G__22235__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22235__a,0);
} 
return G__22234__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22234.cljs$lang$maxFixedArity = 1;
G__22234.cljs$lang$applyTo = (function (arglist__22236){
var opts__17018__auto__ = cljs.core.first(arglist__22236);
var children__17019__auto__ = cljs.core.rest(arglist__22236);
return G__22234__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22234.cljs$core$IFn$_invoke$arity$variadic = G__22234__delegate;
return G__22234;
})()
;
object = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return object__0.call(this);
default:
var G__22237 = null;
if (arguments.length > 1) {
var G__22238__i = 0, G__22238__a = new Array(arguments.length -  1);
while (G__22238__i < G__22238__a.length) {G__22238__a[G__22238__i] = arguments[G__22238__i + 1]; ++G__22238__i;}
G__22237 = new cljs.core.IndexedSeq(G__22238__a,0);
}
return object__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object.cljs$lang$maxFixedArity = 1;
object.cljs$lang$applyTo = object__2.cljs$lang$applyTo;
object.cljs$core$IFn$_invoke$arity$0 = object__0;
object.cljs$core$IFn$_invoke$arity$variadic = object__2.cljs$core$IFn$_invoke$arity$variadic;
return object;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ol = (function() {
var ol = null;
var ol__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});
var ol__2 = (function() { 
var G__22239__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__17018__auto__,children__17019__auto__);
};
var G__22239 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22240__i = 0, G__22240__a = new Array(arguments.length -  1);
while (G__22240__i < G__22240__a.length) {G__22240__a[G__22240__i] = arguments[G__22240__i + 1]; ++G__22240__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22240__a,0);
} 
return G__22239__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22239.cljs$lang$maxFixedArity = 1;
G__22239.cljs$lang$applyTo = (function (arglist__22241){
var opts__17018__auto__ = cljs.core.first(arglist__22241);
var children__17019__auto__ = cljs.core.rest(arglist__22241);
return G__22239__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22239.cljs$core$IFn$_invoke$arity$variadic = G__22239__delegate;
return G__22239;
})()
;
ol = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return ol__0.call(this);
default:
var G__22242 = null;
if (arguments.length > 1) {
var G__22243__i = 0, G__22243__a = new Array(arguments.length -  1);
while (G__22243__i < G__22243__a.length) {G__22243__a[G__22243__i] = arguments[G__22243__i + 1]; ++G__22243__i;}
G__22242 = new cljs.core.IndexedSeq(G__22243__a,0);
}
return ol__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ol.cljs$lang$maxFixedArity = 1;
ol.cljs$lang$applyTo = ol__2.cljs$lang$applyTo;
ol.cljs$core$IFn$_invoke$arity$0 = ol__0;
ol.cljs$core$IFn$_invoke$arity$variadic = ol__2.cljs$core$IFn$_invoke$arity$variadic;
return ol;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.optgroup = (function() {
var optgroup = null;
var optgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});
var optgroup__2 = (function() { 
var G__22244__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__17018__auto__,children__17019__auto__);
};
var G__22244 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22245__i = 0, G__22245__a = new Array(arguments.length -  1);
while (G__22245__i < G__22245__a.length) {G__22245__a[G__22245__i] = arguments[G__22245__i + 1]; ++G__22245__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22245__a,0);
} 
return G__22244__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22244.cljs$lang$maxFixedArity = 1;
G__22244.cljs$lang$applyTo = (function (arglist__22246){
var opts__17018__auto__ = cljs.core.first(arglist__22246);
var children__17019__auto__ = cljs.core.rest(arglist__22246);
return G__22244__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22244.cljs$core$IFn$_invoke$arity$variadic = G__22244__delegate;
return G__22244;
})()
;
optgroup = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return optgroup__0.call(this);
default:
var G__22247 = null;
if (arguments.length > 1) {
var G__22248__i = 0, G__22248__a = new Array(arguments.length -  1);
while (G__22248__i < G__22248__a.length) {G__22248__a[G__22248__i] = arguments[G__22248__i + 1]; ++G__22248__i;}
G__22247 = new cljs.core.IndexedSeq(G__22248__a,0);
}
return optgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
optgroup.cljs$lang$maxFixedArity = 1;
optgroup.cljs$lang$applyTo = optgroup__2.cljs$lang$applyTo;
optgroup.cljs$core$IFn$_invoke$arity$0 = optgroup__0;
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return optgroup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.output = (function() {
var output = null;
var output__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});
var output__2 = (function() { 
var G__22249__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__17018__auto__,children__17019__auto__);
};
var G__22249 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22250__i = 0, G__22250__a = new Array(arguments.length -  1);
while (G__22250__i < G__22250__a.length) {G__22250__a[G__22250__i] = arguments[G__22250__i + 1]; ++G__22250__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22250__a,0);
} 
return G__22249__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22249.cljs$lang$maxFixedArity = 1;
G__22249.cljs$lang$applyTo = (function (arglist__22251){
var opts__17018__auto__ = cljs.core.first(arglist__22251);
var children__17019__auto__ = cljs.core.rest(arglist__22251);
return G__22249__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22249.cljs$core$IFn$_invoke$arity$variadic = G__22249__delegate;
return G__22249;
})()
;
output = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return output__0.call(this);
default:
var G__22252 = null;
if (arguments.length > 1) {
var G__22253__i = 0, G__22253__a = new Array(arguments.length -  1);
while (G__22253__i < G__22253__a.length) {G__22253__a[G__22253__i] = arguments[G__22253__i + 1]; ++G__22253__i;}
G__22252 = new cljs.core.IndexedSeq(G__22253__a,0);
}
return output__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
output.cljs$lang$maxFixedArity = 1;
output.cljs$lang$applyTo = output__2.cljs$lang$applyTo;
output.cljs$core$IFn$_invoke$arity$0 = output__0;
output.cljs$core$IFn$_invoke$arity$variadic = output__2.cljs$core$IFn$_invoke$arity$variadic;
return output;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.p = (function() {
var p = null;
var p__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});
var p__2 = (function() { 
var G__22254__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__17018__auto__,children__17019__auto__);
};
var G__22254 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22255__i = 0, G__22255__a = new Array(arguments.length -  1);
while (G__22255__i < G__22255__a.length) {G__22255__a[G__22255__i] = arguments[G__22255__i + 1]; ++G__22255__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22255__a,0);
} 
return G__22254__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22254.cljs$lang$maxFixedArity = 1;
G__22254.cljs$lang$applyTo = (function (arglist__22256){
var opts__17018__auto__ = cljs.core.first(arglist__22256);
var children__17019__auto__ = cljs.core.rest(arglist__22256);
return G__22254__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22254.cljs$core$IFn$_invoke$arity$variadic = G__22254__delegate;
return G__22254;
})()
;
p = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return p__0.call(this);
default:
var G__22257 = null;
if (arguments.length > 1) {
var G__22258__i = 0, G__22258__a = new Array(arguments.length -  1);
while (G__22258__i < G__22258__a.length) {G__22258__a[G__22258__i] = arguments[G__22258__i + 1]; ++G__22258__i;}
G__22257 = new cljs.core.IndexedSeq(G__22258__a,0);
}
return p__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p.cljs$lang$maxFixedArity = 1;
p.cljs$lang$applyTo = p__2.cljs$lang$applyTo;
p.cljs$core$IFn$_invoke$arity$0 = p__0;
p.cljs$core$IFn$_invoke$arity$variadic = p__2.cljs$core$IFn$_invoke$arity$variadic;
return p;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.param = (function() {
var param = null;
var param__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});
var param__2 = (function() { 
var G__22259__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__17018__auto__,children__17019__auto__);
};
var G__22259 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22260__i = 0, G__22260__a = new Array(arguments.length -  1);
while (G__22260__i < G__22260__a.length) {G__22260__a[G__22260__i] = arguments[G__22260__i + 1]; ++G__22260__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22260__a,0);
} 
return G__22259__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22259.cljs$lang$maxFixedArity = 1;
G__22259.cljs$lang$applyTo = (function (arglist__22261){
var opts__17018__auto__ = cljs.core.first(arglist__22261);
var children__17019__auto__ = cljs.core.rest(arglist__22261);
return G__22259__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22259.cljs$core$IFn$_invoke$arity$variadic = G__22259__delegate;
return G__22259;
})()
;
param = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return param__0.call(this);
default:
var G__22262 = null;
if (arguments.length > 1) {
var G__22263__i = 0, G__22263__a = new Array(arguments.length -  1);
while (G__22263__i < G__22263__a.length) {G__22263__a[G__22263__i] = arguments[G__22263__i + 1]; ++G__22263__i;}
G__22262 = new cljs.core.IndexedSeq(G__22263__a,0);
}
return param__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
param.cljs$lang$maxFixedArity = 1;
param.cljs$lang$applyTo = param__2.cljs$lang$applyTo;
param.cljs$core$IFn$_invoke$arity$0 = param__0;
param.cljs$core$IFn$_invoke$arity$variadic = param__2.cljs$core$IFn$_invoke$arity$variadic;
return param;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.pre = (function() {
var pre = null;
var pre__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});
var pre__2 = (function() { 
var G__22264__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__17018__auto__,children__17019__auto__);
};
var G__22264 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22265__i = 0, G__22265__a = new Array(arguments.length -  1);
while (G__22265__i < G__22265__a.length) {G__22265__a[G__22265__i] = arguments[G__22265__i + 1]; ++G__22265__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22265__a,0);
} 
return G__22264__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22264.cljs$lang$maxFixedArity = 1;
G__22264.cljs$lang$applyTo = (function (arglist__22266){
var opts__17018__auto__ = cljs.core.first(arglist__22266);
var children__17019__auto__ = cljs.core.rest(arglist__22266);
return G__22264__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22264.cljs$core$IFn$_invoke$arity$variadic = G__22264__delegate;
return G__22264;
})()
;
pre = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return pre__0.call(this);
default:
var G__22267 = null;
if (arguments.length > 1) {
var G__22268__i = 0, G__22268__a = new Array(arguments.length -  1);
while (G__22268__i < G__22268__a.length) {G__22268__a[G__22268__i] = arguments[G__22268__i + 1]; ++G__22268__i;}
G__22267 = new cljs.core.IndexedSeq(G__22268__a,0);
}
return pre__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pre.cljs$lang$maxFixedArity = 1;
pre.cljs$lang$applyTo = pre__2.cljs$lang$applyTo;
pre.cljs$core$IFn$_invoke$arity$0 = pre__0;
pre.cljs$core$IFn$_invoke$arity$variadic = pre__2.cljs$core$IFn$_invoke$arity$variadic;
return pre;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.progress = (function() {
var progress = null;
var progress__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});
var progress__2 = (function() { 
var G__22269__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__17018__auto__,children__17019__auto__);
};
var G__22269 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22270__i = 0, G__22270__a = new Array(arguments.length -  1);
while (G__22270__i < G__22270__a.length) {G__22270__a[G__22270__i] = arguments[G__22270__i + 1]; ++G__22270__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22270__a,0);
} 
return G__22269__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22269.cljs$lang$maxFixedArity = 1;
G__22269.cljs$lang$applyTo = (function (arglist__22271){
var opts__17018__auto__ = cljs.core.first(arglist__22271);
var children__17019__auto__ = cljs.core.rest(arglist__22271);
return G__22269__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22269.cljs$core$IFn$_invoke$arity$variadic = G__22269__delegate;
return G__22269;
})()
;
progress = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return progress__0.call(this);
default:
var G__22272 = null;
if (arguments.length > 1) {
var G__22273__i = 0, G__22273__a = new Array(arguments.length -  1);
while (G__22273__i < G__22273__a.length) {G__22273__a[G__22273__i] = arguments[G__22273__i + 1]; ++G__22273__i;}
G__22272 = new cljs.core.IndexedSeq(G__22273__a,0);
}
return progress__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
progress.cljs$lang$maxFixedArity = 1;
progress.cljs$lang$applyTo = progress__2.cljs$lang$applyTo;
progress.cljs$core$IFn$_invoke$arity$0 = progress__0;
progress.cljs$core$IFn$_invoke$arity$variadic = progress__2.cljs$core$IFn$_invoke$arity$variadic;
return progress;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.q = (function() {
var q = null;
var q__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});
var q__2 = (function() { 
var G__22274__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__17018__auto__,children__17019__auto__);
};
var G__22274 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22275__i = 0, G__22275__a = new Array(arguments.length -  1);
while (G__22275__i < G__22275__a.length) {G__22275__a[G__22275__i] = arguments[G__22275__i + 1]; ++G__22275__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22275__a,0);
} 
return G__22274__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22274.cljs$lang$maxFixedArity = 1;
G__22274.cljs$lang$applyTo = (function (arglist__22276){
var opts__17018__auto__ = cljs.core.first(arglist__22276);
var children__17019__auto__ = cljs.core.rest(arglist__22276);
return G__22274__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22274.cljs$core$IFn$_invoke$arity$variadic = G__22274__delegate;
return G__22274;
})()
;
q = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return q__0.call(this);
default:
var G__22277 = null;
if (arguments.length > 1) {
var G__22278__i = 0, G__22278__a = new Array(arguments.length -  1);
while (G__22278__i < G__22278__a.length) {G__22278__a[G__22278__i] = arguments[G__22278__i + 1]; ++G__22278__i;}
G__22277 = new cljs.core.IndexedSeq(G__22278__a,0);
}
return q__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = q__2.cljs$lang$applyTo;
q.cljs$core$IFn$_invoke$arity$0 = q__0;
q.cljs$core$IFn$_invoke$arity$variadic = q__2.cljs$core$IFn$_invoke$arity$variadic;
return q;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rp = (function() {
var rp = null;
var rp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});
var rp__2 = (function() { 
var G__22279__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__17018__auto__,children__17019__auto__);
};
var G__22279 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22280__i = 0, G__22280__a = new Array(arguments.length -  1);
while (G__22280__i < G__22280__a.length) {G__22280__a[G__22280__i] = arguments[G__22280__i + 1]; ++G__22280__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22280__a,0);
} 
return G__22279__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22279.cljs$lang$maxFixedArity = 1;
G__22279.cljs$lang$applyTo = (function (arglist__22281){
var opts__17018__auto__ = cljs.core.first(arglist__22281);
var children__17019__auto__ = cljs.core.rest(arglist__22281);
return G__22279__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22279.cljs$core$IFn$_invoke$arity$variadic = G__22279__delegate;
return G__22279;
})()
;
rp = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return rp__0.call(this);
default:
var G__22282 = null;
if (arguments.length > 1) {
var G__22283__i = 0, G__22283__a = new Array(arguments.length -  1);
while (G__22283__i < G__22283__a.length) {G__22283__a[G__22283__i] = arguments[G__22283__i + 1]; ++G__22283__i;}
G__22282 = new cljs.core.IndexedSeq(G__22283__a,0);
}
return rp__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rp.cljs$lang$maxFixedArity = 1;
rp.cljs$lang$applyTo = rp__2.cljs$lang$applyTo;
rp.cljs$core$IFn$_invoke$arity$0 = rp__0;
rp.cljs$core$IFn$_invoke$arity$variadic = rp__2.cljs$core$IFn$_invoke$arity$variadic;
return rp;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rt = (function() {
var rt = null;
var rt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});
var rt__2 = (function() { 
var G__22284__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__17018__auto__,children__17019__auto__);
};
var G__22284 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22285__i = 0, G__22285__a = new Array(arguments.length -  1);
while (G__22285__i < G__22285__a.length) {G__22285__a[G__22285__i] = arguments[G__22285__i + 1]; ++G__22285__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22285__a,0);
} 
return G__22284__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22284.cljs$lang$maxFixedArity = 1;
G__22284.cljs$lang$applyTo = (function (arglist__22286){
var opts__17018__auto__ = cljs.core.first(arglist__22286);
var children__17019__auto__ = cljs.core.rest(arglist__22286);
return G__22284__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22284.cljs$core$IFn$_invoke$arity$variadic = G__22284__delegate;
return G__22284;
})()
;
rt = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return rt__0.call(this);
default:
var G__22287 = null;
if (arguments.length > 1) {
var G__22288__i = 0, G__22288__a = new Array(arguments.length -  1);
while (G__22288__i < G__22288__a.length) {G__22288__a[G__22288__i] = arguments[G__22288__i + 1]; ++G__22288__i;}
G__22287 = new cljs.core.IndexedSeq(G__22288__a,0);
}
return rt__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rt.cljs$lang$maxFixedArity = 1;
rt.cljs$lang$applyTo = rt__2.cljs$lang$applyTo;
rt.cljs$core$IFn$_invoke$arity$0 = rt__0;
rt.cljs$core$IFn$_invoke$arity$variadic = rt__2.cljs$core$IFn$_invoke$arity$variadic;
return rt;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ruby = (function() {
var ruby = null;
var ruby__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});
var ruby__2 = (function() { 
var G__22289__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__17018__auto__,children__17019__auto__);
};
var G__22289 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22290__i = 0, G__22290__a = new Array(arguments.length -  1);
while (G__22290__i < G__22290__a.length) {G__22290__a[G__22290__i] = arguments[G__22290__i + 1]; ++G__22290__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22290__a,0);
} 
return G__22289__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22289.cljs$lang$maxFixedArity = 1;
G__22289.cljs$lang$applyTo = (function (arglist__22291){
var opts__17018__auto__ = cljs.core.first(arglist__22291);
var children__17019__auto__ = cljs.core.rest(arglist__22291);
return G__22289__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22289.cljs$core$IFn$_invoke$arity$variadic = G__22289__delegate;
return G__22289;
})()
;
ruby = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return ruby__0.call(this);
default:
var G__22292 = null;
if (arguments.length > 1) {
var G__22293__i = 0, G__22293__a = new Array(arguments.length -  1);
while (G__22293__i < G__22293__a.length) {G__22293__a[G__22293__i] = arguments[G__22293__i + 1]; ++G__22293__i;}
G__22292 = new cljs.core.IndexedSeq(G__22293__a,0);
}
return ruby__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ruby.cljs$lang$maxFixedArity = 1;
ruby.cljs$lang$applyTo = ruby__2.cljs$lang$applyTo;
ruby.cljs$core$IFn$_invoke$arity$0 = ruby__0;
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__2.cljs$core$IFn$_invoke$arity$variadic;
return ruby;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.s = (function() {
var s = null;
var s__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});
var s__2 = (function() { 
var G__22294__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__17018__auto__,children__17019__auto__);
};
var G__22294 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22295__i = 0, G__22295__a = new Array(arguments.length -  1);
while (G__22295__i < G__22295__a.length) {G__22295__a[G__22295__i] = arguments[G__22295__i + 1]; ++G__22295__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22295__a,0);
} 
return G__22294__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22294.cljs$lang$maxFixedArity = 1;
G__22294.cljs$lang$applyTo = (function (arglist__22296){
var opts__17018__auto__ = cljs.core.first(arglist__22296);
var children__17019__auto__ = cljs.core.rest(arglist__22296);
return G__22294__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22294.cljs$core$IFn$_invoke$arity$variadic = G__22294__delegate;
return G__22294;
})()
;
s = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return s__0.call(this);
default:
var G__22297 = null;
if (arguments.length > 1) {
var G__22298__i = 0, G__22298__a = new Array(arguments.length -  1);
while (G__22298__i < G__22298__a.length) {G__22298__a[G__22298__i] = arguments[G__22298__i + 1]; ++G__22298__i;}
G__22297 = new cljs.core.IndexedSeq(G__22298__a,0);
}
return s__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
s.cljs$lang$maxFixedArity = 1;
s.cljs$lang$applyTo = s__2.cljs$lang$applyTo;
s.cljs$core$IFn$_invoke$arity$0 = s__0;
s.cljs$core$IFn$_invoke$arity$variadic = s__2.cljs$core$IFn$_invoke$arity$variadic;
return s;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.samp = (function() {
var samp = null;
var samp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});
var samp__2 = (function() { 
var G__22299__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__17018__auto__,children__17019__auto__);
};
var G__22299 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22300__i = 0, G__22300__a = new Array(arguments.length -  1);
while (G__22300__i < G__22300__a.length) {G__22300__a[G__22300__i] = arguments[G__22300__i + 1]; ++G__22300__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22300__a,0);
} 
return G__22299__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22299.cljs$lang$maxFixedArity = 1;
G__22299.cljs$lang$applyTo = (function (arglist__22301){
var opts__17018__auto__ = cljs.core.first(arglist__22301);
var children__17019__auto__ = cljs.core.rest(arglist__22301);
return G__22299__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22299.cljs$core$IFn$_invoke$arity$variadic = G__22299__delegate;
return G__22299;
})()
;
samp = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return samp__0.call(this);
default:
var G__22302 = null;
if (arguments.length > 1) {
var G__22303__i = 0, G__22303__a = new Array(arguments.length -  1);
while (G__22303__i < G__22303__a.length) {G__22303__a[G__22303__i] = arguments[G__22303__i + 1]; ++G__22303__i;}
G__22302 = new cljs.core.IndexedSeq(G__22303__a,0);
}
return samp__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
samp.cljs$lang$maxFixedArity = 1;
samp.cljs$lang$applyTo = samp__2.cljs$lang$applyTo;
samp.cljs$core$IFn$_invoke$arity$0 = samp__0;
samp.cljs$core$IFn$_invoke$arity$variadic = samp__2.cljs$core$IFn$_invoke$arity$variadic;
return samp;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.script = (function() {
var script = null;
var script__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});
var script__2 = (function() { 
var G__22304__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__17018__auto__,children__17019__auto__);
};
var G__22304 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22305__i = 0, G__22305__a = new Array(arguments.length -  1);
while (G__22305__i < G__22305__a.length) {G__22305__a[G__22305__i] = arguments[G__22305__i + 1]; ++G__22305__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22305__a,0);
} 
return G__22304__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22304.cljs$lang$maxFixedArity = 1;
G__22304.cljs$lang$applyTo = (function (arglist__22306){
var opts__17018__auto__ = cljs.core.first(arglist__22306);
var children__17019__auto__ = cljs.core.rest(arglist__22306);
return G__22304__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22304.cljs$core$IFn$_invoke$arity$variadic = G__22304__delegate;
return G__22304;
})()
;
script = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return script__0.call(this);
default:
var G__22307 = null;
if (arguments.length > 1) {
var G__22308__i = 0, G__22308__a = new Array(arguments.length -  1);
while (G__22308__i < G__22308__a.length) {G__22308__a[G__22308__i] = arguments[G__22308__i + 1]; ++G__22308__i;}
G__22307 = new cljs.core.IndexedSeq(G__22308__a,0);
}
return script__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
script.cljs$lang$maxFixedArity = 1;
script.cljs$lang$applyTo = script__2.cljs$lang$applyTo;
script.cljs$core$IFn$_invoke$arity$0 = script__0;
script.cljs$core$IFn$_invoke$arity$variadic = script__2.cljs$core$IFn$_invoke$arity$variadic;
return script;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.section = (function() {
var section = null;
var section__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});
var section__2 = (function() { 
var G__22309__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__17018__auto__,children__17019__auto__);
};
var G__22309 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22310__i = 0, G__22310__a = new Array(arguments.length -  1);
while (G__22310__i < G__22310__a.length) {G__22310__a[G__22310__i] = arguments[G__22310__i + 1]; ++G__22310__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22310__a,0);
} 
return G__22309__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22309.cljs$lang$maxFixedArity = 1;
G__22309.cljs$lang$applyTo = (function (arglist__22311){
var opts__17018__auto__ = cljs.core.first(arglist__22311);
var children__17019__auto__ = cljs.core.rest(arglist__22311);
return G__22309__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22309.cljs$core$IFn$_invoke$arity$variadic = G__22309__delegate;
return G__22309;
})()
;
section = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return section__0.call(this);
default:
var G__22312 = null;
if (arguments.length > 1) {
var G__22313__i = 0, G__22313__a = new Array(arguments.length -  1);
while (G__22313__i < G__22313__a.length) {G__22313__a[G__22313__i] = arguments[G__22313__i + 1]; ++G__22313__i;}
G__22312 = new cljs.core.IndexedSeq(G__22313__a,0);
}
return section__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
section.cljs$lang$maxFixedArity = 1;
section.cljs$lang$applyTo = section__2.cljs$lang$applyTo;
section.cljs$core$IFn$_invoke$arity$0 = section__0;
section.cljs$core$IFn$_invoke$arity$variadic = section__2.cljs$core$IFn$_invoke$arity$variadic;
return section;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.select = (function() {
var select = null;
var select__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});
var select__2 = (function() { 
var G__22314__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__17018__auto__,children__17019__auto__);
};
var G__22314 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22315__i = 0, G__22315__a = new Array(arguments.length -  1);
while (G__22315__i < G__22315__a.length) {G__22315__a[G__22315__i] = arguments[G__22315__i + 1]; ++G__22315__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22315__a,0);
} 
return G__22314__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22314.cljs$lang$maxFixedArity = 1;
G__22314.cljs$lang$applyTo = (function (arglist__22316){
var opts__17018__auto__ = cljs.core.first(arglist__22316);
var children__17019__auto__ = cljs.core.rest(arglist__22316);
return G__22314__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22314.cljs$core$IFn$_invoke$arity$variadic = G__22314__delegate;
return G__22314;
})()
;
select = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return select__0.call(this);
default:
var G__22317 = null;
if (arguments.length > 1) {
var G__22318__i = 0, G__22318__a = new Array(arguments.length -  1);
while (G__22318__i < G__22318__a.length) {G__22318__a[G__22318__i] = arguments[G__22318__i + 1]; ++G__22318__i;}
G__22317 = new cljs.core.IndexedSeq(G__22318__a,0);
}
return select__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$lang$maxFixedArity = 1;
select.cljs$lang$applyTo = select__2.cljs$lang$applyTo;
select.cljs$core$IFn$_invoke$arity$0 = select__0;
select.cljs$core$IFn$_invoke$arity$variadic = select__2.cljs$core$IFn$_invoke$arity$variadic;
return select;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.small = (function() {
var small = null;
var small__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});
var small__2 = (function() { 
var G__22319__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__17018__auto__,children__17019__auto__);
};
var G__22319 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22320__i = 0, G__22320__a = new Array(arguments.length -  1);
while (G__22320__i < G__22320__a.length) {G__22320__a[G__22320__i] = arguments[G__22320__i + 1]; ++G__22320__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22320__a,0);
} 
return G__22319__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22319.cljs$lang$maxFixedArity = 1;
G__22319.cljs$lang$applyTo = (function (arglist__22321){
var opts__17018__auto__ = cljs.core.first(arglist__22321);
var children__17019__auto__ = cljs.core.rest(arglist__22321);
return G__22319__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22319.cljs$core$IFn$_invoke$arity$variadic = G__22319__delegate;
return G__22319;
})()
;
small = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return small__0.call(this);
default:
var G__22322 = null;
if (arguments.length > 1) {
var G__22323__i = 0, G__22323__a = new Array(arguments.length -  1);
while (G__22323__i < G__22323__a.length) {G__22323__a[G__22323__i] = arguments[G__22323__i + 1]; ++G__22323__i;}
G__22322 = new cljs.core.IndexedSeq(G__22323__a,0);
}
return small__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
small.cljs$lang$maxFixedArity = 1;
small.cljs$lang$applyTo = small__2.cljs$lang$applyTo;
small.cljs$core$IFn$_invoke$arity$0 = small__0;
small.cljs$core$IFn$_invoke$arity$variadic = small__2.cljs$core$IFn$_invoke$arity$variadic;
return small;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.source = (function() {
var source = null;
var source__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});
var source__2 = (function() { 
var G__22324__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__17018__auto__,children__17019__auto__);
};
var G__22324 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22325__i = 0, G__22325__a = new Array(arguments.length -  1);
while (G__22325__i < G__22325__a.length) {G__22325__a[G__22325__i] = arguments[G__22325__i + 1]; ++G__22325__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22325__a,0);
} 
return G__22324__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22324.cljs$lang$maxFixedArity = 1;
G__22324.cljs$lang$applyTo = (function (arglist__22326){
var opts__17018__auto__ = cljs.core.first(arglist__22326);
var children__17019__auto__ = cljs.core.rest(arglist__22326);
return G__22324__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22324.cljs$core$IFn$_invoke$arity$variadic = G__22324__delegate;
return G__22324;
})()
;
source = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return source__0.call(this);
default:
var G__22327 = null;
if (arguments.length > 1) {
var G__22328__i = 0, G__22328__a = new Array(arguments.length -  1);
while (G__22328__i < G__22328__a.length) {G__22328__a[G__22328__i] = arguments[G__22328__i + 1]; ++G__22328__i;}
G__22327 = new cljs.core.IndexedSeq(G__22328__a,0);
}
return source__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
source.cljs$lang$maxFixedArity = 1;
source.cljs$lang$applyTo = source__2.cljs$lang$applyTo;
source.cljs$core$IFn$_invoke$arity$0 = source__0;
source.cljs$core$IFn$_invoke$arity$variadic = source__2.cljs$core$IFn$_invoke$arity$variadic;
return source;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.span = (function() {
var span = null;
var span__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});
var span__2 = (function() { 
var G__22329__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__17018__auto__,children__17019__auto__);
};
var G__22329 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22330__i = 0, G__22330__a = new Array(arguments.length -  1);
while (G__22330__i < G__22330__a.length) {G__22330__a[G__22330__i] = arguments[G__22330__i + 1]; ++G__22330__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22330__a,0);
} 
return G__22329__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22329.cljs$lang$maxFixedArity = 1;
G__22329.cljs$lang$applyTo = (function (arglist__22331){
var opts__17018__auto__ = cljs.core.first(arglist__22331);
var children__17019__auto__ = cljs.core.rest(arglist__22331);
return G__22329__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22329.cljs$core$IFn$_invoke$arity$variadic = G__22329__delegate;
return G__22329;
})()
;
span = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return span__0.call(this);
default:
var G__22332 = null;
if (arguments.length > 1) {
var G__22333__i = 0, G__22333__a = new Array(arguments.length -  1);
while (G__22333__i < G__22333__a.length) {G__22333__a[G__22333__i] = arguments[G__22333__i + 1]; ++G__22333__i;}
G__22332 = new cljs.core.IndexedSeq(G__22333__a,0);
}
return span__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
span.cljs$lang$maxFixedArity = 1;
span.cljs$lang$applyTo = span__2.cljs$lang$applyTo;
span.cljs$core$IFn$_invoke$arity$0 = span__0;
span.cljs$core$IFn$_invoke$arity$variadic = span__2.cljs$core$IFn$_invoke$arity$variadic;
return span;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.strong = (function() {
var strong = null;
var strong__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});
var strong__2 = (function() { 
var G__22334__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__17018__auto__,children__17019__auto__);
};
var G__22334 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22335__i = 0, G__22335__a = new Array(arguments.length -  1);
while (G__22335__i < G__22335__a.length) {G__22335__a[G__22335__i] = arguments[G__22335__i + 1]; ++G__22335__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22335__a,0);
} 
return G__22334__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22334.cljs$lang$maxFixedArity = 1;
G__22334.cljs$lang$applyTo = (function (arglist__22336){
var opts__17018__auto__ = cljs.core.first(arglist__22336);
var children__17019__auto__ = cljs.core.rest(arglist__22336);
return G__22334__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22334.cljs$core$IFn$_invoke$arity$variadic = G__22334__delegate;
return G__22334;
})()
;
strong = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return strong__0.call(this);
default:
var G__22337 = null;
if (arguments.length > 1) {
var G__22338__i = 0, G__22338__a = new Array(arguments.length -  1);
while (G__22338__i < G__22338__a.length) {G__22338__a[G__22338__i] = arguments[G__22338__i + 1]; ++G__22338__i;}
G__22337 = new cljs.core.IndexedSeq(G__22338__a,0);
}
return strong__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
strong.cljs$lang$maxFixedArity = 1;
strong.cljs$lang$applyTo = strong__2.cljs$lang$applyTo;
strong.cljs$core$IFn$_invoke$arity$0 = strong__0;
strong.cljs$core$IFn$_invoke$arity$variadic = strong__2.cljs$core$IFn$_invoke$arity$variadic;
return strong;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.style = (function() {
var style = null;
var style__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});
var style__2 = (function() { 
var G__22339__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__17018__auto__,children__17019__auto__);
};
var G__22339 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22340__i = 0, G__22340__a = new Array(arguments.length -  1);
while (G__22340__i < G__22340__a.length) {G__22340__a[G__22340__i] = arguments[G__22340__i + 1]; ++G__22340__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22340__a,0);
} 
return G__22339__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22339.cljs$lang$maxFixedArity = 1;
G__22339.cljs$lang$applyTo = (function (arglist__22341){
var opts__17018__auto__ = cljs.core.first(arglist__22341);
var children__17019__auto__ = cljs.core.rest(arglist__22341);
return G__22339__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22339.cljs$core$IFn$_invoke$arity$variadic = G__22339__delegate;
return G__22339;
})()
;
style = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return style__0.call(this);
default:
var G__22342 = null;
if (arguments.length > 1) {
var G__22343__i = 0, G__22343__a = new Array(arguments.length -  1);
while (G__22343__i < G__22343__a.length) {G__22343__a[G__22343__i] = arguments[G__22343__i + 1]; ++G__22343__i;}
G__22342 = new cljs.core.IndexedSeq(G__22343__a,0);
}
return style__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$lang$maxFixedArity = 1;
style.cljs$lang$applyTo = style__2.cljs$lang$applyTo;
style.cljs$core$IFn$_invoke$arity$0 = style__0;
style.cljs$core$IFn$_invoke$arity$variadic = style__2.cljs$core$IFn$_invoke$arity$variadic;
return style;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.sub = (function() {
var sub = null;
var sub__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});
var sub__2 = (function() { 
var G__22344__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__17018__auto__,children__17019__auto__);
};
var G__22344 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22345__i = 0, G__22345__a = new Array(arguments.length -  1);
while (G__22345__i < G__22345__a.length) {G__22345__a[G__22345__i] = arguments[G__22345__i + 1]; ++G__22345__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22345__a,0);
} 
return G__22344__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22344.cljs$lang$maxFixedArity = 1;
G__22344.cljs$lang$applyTo = (function (arglist__22346){
var opts__17018__auto__ = cljs.core.first(arglist__22346);
var children__17019__auto__ = cljs.core.rest(arglist__22346);
return G__22344__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22344.cljs$core$IFn$_invoke$arity$variadic = G__22344__delegate;
return G__22344;
})()
;
sub = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return sub__0.call(this);
default:
var G__22347 = null;
if (arguments.length > 1) {
var G__22348__i = 0, G__22348__a = new Array(arguments.length -  1);
while (G__22348__i < G__22348__a.length) {G__22348__a[G__22348__i] = arguments[G__22348__i + 1]; ++G__22348__i;}
G__22347 = new cljs.core.IndexedSeq(G__22348__a,0);
}
return sub__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$lang$maxFixedArity = 1;
sub.cljs$lang$applyTo = sub__2.cljs$lang$applyTo;
sub.cljs$core$IFn$_invoke$arity$0 = sub__0;
sub.cljs$core$IFn$_invoke$arity$variadic = sub__2.cljs$core$IFn$_invoke$arity$variadic;
return sub;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.summary = (function() {
var summary = null;
var summary__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});
var summary__2 = (function() { 
var G__22349__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__17018__auto__,children__17019__auto__);
};
var G__22349 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22350__i = 0, G__22350__a = new Array(arguments.length -  1);
while (G__22350__i < G__22350__a.length) {G__22350__a[G__22350__i] = arguments[G__22350__i + 1]; ++G__22350__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22350__a,0);
} 
return G__22349__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22349.cljs$lang$maxFixedArity = 1;
G__22349.cljs$lang$applyTo = (function (arglist__22351){
var opts__17018__auto__ = cljs.core.first(arglist__22351);
var children__17019__auto__ = cljs.core.rest(arglist__22351);
return G__22349__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22349.cljs$core$IFn$_invoke$arity$variadic = G__22349__delegate;
return G__22349;
})()
;
summary = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return summary__0.call(this);
default:
var G__22352 = null;
if (arguments.length > 1) {
var G__22353__i = 0, G__22353__a = new Array(arguments.length -  1);
while (G__22353__i < G__22353__a.length) {G__22353__a[G__22353__i] = arguments[G__22353__i + 1]; ++G__22353__i;}
G__22352 = new cljs.core.IndexedSeq(G__22353__a,0);
}
return summary__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary.cljs$lang$maxFixedArity = 1;
summary.cljs$lang$applyTo = summary__2.cljs$lang$applyTo;
summary.cljs$core$IFn$_invoke$arity$0 = summary__0;
summary.cljs$core$IFn$_invoke$arity$variadic = summary__2.cljs$core$IFn$_invoke$arity$variadic;
return summary;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.sup = (function() {
var sup = null;
var sup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});
var sup__2 = (function() { 
var G__22354__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__17018__auto__,children__17019__auto__);
};
var G__22354 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22355__i = 0, G__22355__a = new Array(arguments.length -  1);
while (G__22355__i < G__22355__a.length) {G__22355__a[G__22355__i] = arguments[G__22355__i + 1]; ++G__22355__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22355__a,0);
} 
return G__22354__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22354.cljs$lang$maxFixedArity = 1;
G__22354.cljs$lang$applyTo = (function (arglist__22356){
var opts__17018__auto__ = cljs.core.first(arglist__22356);
var children__17019__auto__ = cljs.core.rest(arglist__22356);
return G__22354__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22354.cljs$core$IFn$_invoke$arity$variadic = G__22354__delegate;
return G__22354;
})()
;
sup = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return sup__0.call(this);
default:
var G__22357 = null;
if (arguments.length > 1) {
var G__22358__i = 0, G__22358__a = new Array(arguments.length -  1);
while (G__22358__i < G__22358__a.length) {G__22358__a[G__22358__i] = arguments[G__22358__i + 1]; ++G__22358__i;}
G__22357 = new cljs.core.IndexedSeq(G__22358__a,0);
}
return sup__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sup.cljs$lang$maxFixedArity = 1;
sup.cljs$lang$applyTo = sup__2.cljs$lang$applyTo;
sup.cljs$core$IFn$_invoke$arity$0 = sup__0;
sup.cljs$core$IFn$_invoke$arity$variadic = sup__2.cljs$core$IFn$_invoke$arity$variadic;
return sup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.table = (function() {
var table = null;
var table__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});
var table__2 = (function() { 
var G__22359__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__17018__auto__,children__17019__auto__);
};
var G__22359 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22360__i = 0, G__22360__a = new Array(arguments.length -  1);
while (G__22360__i < G__22360__a.length) {G__22360__a[G__22360__i] = arguments[G__22360__i + 1]; ++G__22360__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22360__a,0);
} 
return G__22359__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22359.cljs$lang$maxFixedArity = 1;
G__22359.cljs$lang$applyTo = (function (arglist__22361){
var opts__17018__auto__ = cljs.core.first(arglist__22361);
var children__17019__auto__ = cljs.core.rest(arglist__22361);
return G__22359__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22359.cljs$core$IFn$_invoke$arity$variadic = G__22359__delegate;
return G__22359;
})()
;
table = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return table__0.call(this);
default:
var G__22362 = null;
if (arguments.length > 1) {
var G__22363__i = 0, G__22363__a = new Array(arguments.length -  1);
while (G__22363__i < G__22363__a.length) {G__22363__a[G__22363__i] = arguments[G__22363__i + 1]; ++G__22363__i;}
G__22362 = new cljs.core.IndexedSeq(G__22363__a,0);
}
return table__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
table.cljs$lang$maxFixedArity = 1;
table.cljs$lang$applyTo = table__2.cljs$lang$applyTo;
table.cljs$core$IFn$_invoke$arity$0 = table__0;
table.cljs$core$IFn$_invoke$arity$variadic = table__2.cljs$core$IFn$_invoke$arity$variadic;
return table;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tbody = (function() {
var tbody = null;
var tbody__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});
var tbody__2 = (function() { 
var G__22364__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__17018__auto__,children__17019__auto__);
};
var G__22364 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22365__i = 0, G__22365__a = new Array(arguments.length -  1);
while (G__22365__i < G__22365__a.length) {G__22365__a[G__22365__i] = arguments[G__22365__i + 1]; ++G__22365__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22365__a,0);
} 
return G__22364__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22364.cljs$lang$maxFixedArity = 1;
G__22364.cljs$lang$applyTo = (function (arglist__22366){
var opts__17018__auto__ = cljs.core.first(arglist__22366);
var children__17019__auto__ = cljs.core.rest(arglist__22366);
return G__22364__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22364.cljs$core$IFn$_invoke$arity$variadic = G__22364__delegate;
return G__22364;
})()
;
tbody = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return tbody__0.call(this);
default:
var G__22367 = null;
if (arguments.length > 1) {
var G__22368__i = 0, G__22368__a = new Array(arguments.length -  1);
while (G__22368__i < G__22368__a.length) {G__22368__a[G__22368__i] = arguments[G__22368__i + 1]; ++G__22368__i;}
G__22367 = new cljs.core.IndexedSeq(G__22368__a,0);
}
return tbody__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tbody.cljs$lang$maxFixedArity = 1;
tbody.cljs$lang$applyTo = tbody__2.cljs$lang$applyTo;
tbody.cljs$core$IFn$_invoke$arity$0 = tbody__0;
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__2.cljs$core$IFn$_invoke$arity$variadic;
return tbody;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.td = (function() {
var td = null;
var td__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});
var td__2 = (function() { 
var G__22369__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__17018__auto__,children__17019__auto__);
};
var G__22369 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22370__i = 0, G__22370__a = new Array(arguments.length -  1);
while (G__22370__i < G__22370__a.length) {G__22370__a[G__22370__i] = arguments[G__22370__i + 1]; ++G__22370__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22370__a,0);
} 
return G__22369__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22369.cljs$lang$maxFixedArity = 1;
G__22369.cljs$lang$applyTo = (function (arglist__22371){
var opts__17018__auto__ = cljs.core.first(arglist__22371);
var children__17019__auto__ = cljs.core.rest(arglist__22371);
return G__22369__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22369.cljs$core$IFn$_invoke$arity$variadic = G__22369__delegate;
return G__22369;
})()
;
td = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return td__0.call(this);
default:
var G__22372 = null;
if (arguments.length > 1) {
var G__22373__i = 0, G__22373__a = new Array(arguments.length -  1);
while (G__22373__i < G__22373__a.length) {G__22373__a[G__22373__i] = arguments[G__22373__i + 1]; ++G__22373__i;}
G__22372 = new cljs.core.IndexedSeq(G__22373__a,0);
}
return td__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
td.cljs$lang$maxFixedArity = 1;
td.cljs$lang$applyTo = td__2.cljs$lang$applyTo;
td.cljs$core$IFn$_invoke$arity$0 = td__0;
td.cljs$core$IFn$_invoke$arity$variadic = td__2.cljs$core$IFn$_invoke$arity$variadic;
return td;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tfoot = (function() {
var tfoot = null;
var tfoot__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});
var tfoot__2 = (function() { 
var G__22374__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__17018__auto__,children__17019__auto__);
};
var G__22374 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22375__i = 0, G__22375__a = new Array(arguments.length -  1);
while (G__22375__i < G__22375__a.length) {G__22375__a[G__22375__i] = arguments[G__22375__i + 1]; ++G__22375__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22375__a,0);
} 
return G__22374__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22374.cljs$lang$maxFixedArity = 1;
G__22374.cljs$lang$applyTo = (function (arglist__22376){
var opts__17018__auto__ = cljs.core.first(arglist__22376);
var children__17019__auto__ = cljs.core.rest(arglist__22376);
return G__22374__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22374.cljs$core$IFn$_invoke$arity$variadic = G__22374__delegate;
return G__22374;
})()
;
tfoot = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return tfoot__0.call(this);
default:
var G__22377 = null;
if (arguments.length > 1) {
var G__22378__i = 0, G__22378__a = new Array(arguments.length -  1);
while (G__22378__i < G__22378__a.length) {G__22378__a[G__22378__i] = arguments[G__22378__i + 1]; ++G__22378__i;}
G__22377 = new cljs.core.IndexedSeq(G__22378__a,0);
}
return tfoot__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tfoot.cljs$lang$maxFixedArity = 1;
tfoot.cljs$lang$applyTo = tfoot__2.cljs$lang$applyTo;
tfoot.cljs$core$IFn$_invoke$arity$0 = tfoot__0;
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__2.cljs$core$IFn$_invoke$arity$variadic;
return tfoot;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.th = (function() {
var th = null;
var th__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});
var th__2 = (function() { 
var G__22379__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__17018__auto__,children__17019__auto__);
};
var G__22379 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22380__i = 0, G__22380__a = new Array(arguments.length -  1);
while (G__22380__i < G__22380__a.length) {G__22380__a[G__22380__i] = arguments[G__22380__i + 1]; ++G__22380__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22380__a,0);
} 
return G__22379__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22379.cljs$lang$maxFixedArity = 1;
G__22379.cljs$lang$applyTo = (function (arglist__22381){
var opts__17018__auto__ = cljs.core.first(arglist__22381);
var children__17019__auto__ = cljs.core.rest(arglist__22381);
return G__22379__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22379.cljs$core$IFn$_invoke$arity$variadic = G__22379__delegate;
return G__22379;
})()
;
th = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return th__0.call(this);
default:
var G__22382 = null;
if (arguments.length > 1) {
var G__22383__i = 0, G__22383__a = new Array(arguments.length -  1);
while (G__22383__i < G__22383__a.length) {G__22383__a[G__22383__i] = arguments[G__22383__i + 1]; ++G__22383__i;}
G__22382 = new cljs.core.IndexedSeq(G__22383__a,0);
}
return th__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
th.cljs$lang$maxFixedArity = 1;
th.cljs$lang$applyTo = th__2.cljs$lang$applyTo;
th.cljs$core$IFn$_invoke$arity$0 = th__0;
th.cljs$core$IFn$_invoke$arity$variadic = th__2.cljs$core$IFn$_invoke$arity$variadic;
return th;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.thead = (function() {
var thead = null;
var thead__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});
var thead__2 = (function() { 
var G__22384__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__17018__auto__,children__17019__auto__);
};
var G__22384 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22385__i = 0, G__22385__a = new Array(arguments.length -  1);
while (G__22385__i < G__22385__a.length) {G__22385__a[G__22385__i] = arguments[G__22385__i + 1]; ++G__22385__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22385__a,0);
} 
return G__22384__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22384.cljs$lang$maxFixedArity = 1;
G__22384.cljs$lang$applyTo = (function (arglist__22386){
var opts__17018__auto__ = cljs.core.first(arglist__22386);
var children__17019__auto__ = cljs.core.rest(arglist__22386);
return G__22384__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22384.cljs$core$IFn$_invoke$arity$variadic = G__22384__delegate;
return G__22384;
})()
;
thead = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return thead__0.call(this);
default:
var G__22387 = null;
if (arguments.length > 1) {
var G__22388__i = 0, G__22388__a = new Array(arguments.length -  1);
while (G__22388__i < G__22388__a.length) {G__22388__a[G__22388__i] = arguments[G__22388__i + 1]; ++G__22388__i;}
G__22387 = new cljs.core.IndexedSeq(G__22388__a,0);
}
return thead__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thead.cljs$lang$maxFixedArity = 1;
thead.cljs$lang$applyTo = thead__2.cljs$lang$applyTo;
thead.cljs$core$IFn$_invoke$arity$0 = thead__0;
thead.cljs$core$IFn$_invoke$arity$variadic = thead__2.cljs$core$IFn$_invoke$arity$variadic;
return thead;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.time = (function() {
var time = null;
var time__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});
var time__2 = (function() { 
var G__22389__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__17018__auto__,children__17019__auto__);
};
var G__22389 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22390__i = 0, G__22390__a = new Array(arguments.length -  1);
while (G__22390__i < G__22390__a.length) {G__22390__a[G__22390__i] = arguments[G__22390__i + 1]; ++G__22390__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22390__a,0);
} 
return G__22389__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22389.cljs$lang$maxFixedArity = 1;
G__22389.cljs$lang$applyTo = (function (arglist__22391){
var opts__17018__auto__ = cljs.core.first(arglist__22391);
var children__17019__auto__ = cljs.core.rest(arglist__22391);
return G__22389__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22389.cljs$core$IFn$_invoke$arity$variadic = G__22389__delegate;
return G__22389;
})()
;
time = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return time__0.call(this);
default:
var G__22392 = null;
if (arguments.length > 1) {
var G__22393__i = 0, G__22393__a = new Array(arguments.length -  1);
while (G__22393__i < G__22393__a.length) {G__22393__a[G__22393__i] = arguments[G__22393__i + 1]; ++G__22393__i;}
G__22392 = new cljs.core.IndexedSeq(G__22393__a,0);
}
return time__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time.cljs$lang$maxFixedArity = 1;
time.cljs$lang$applyTo = time__2.cljs$lang$applyTo;
time.cljs$core$IFn$_invoke$arity$0 = time__0;
time.cljs$core$IFn$_invoke$arity$variadic = time__2.cljs$core$IFn$_invoke$arity$variadic;
return time;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.title = (function() {
var title = null;
var title__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});
var title__2 = (function() { 
var G__22394__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__17018__auto__,children__17019__auto__);
};
var G__22394 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22395__i = 0, G__22395__a = new Array(arguments.length -  1);
while (G__22395__i < G__22395__a.length) {G__22395__a[G__22395__i] = arguments[G__22395__i + 1]; ++G__22395__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22395__a,0);
} 
return G__22394__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22394.cljs$lang$maxFixedArity = 1;
G__22394.cljs$lang$applyTo = (function (arglist__22396){
var opts__17018__auto__ = cljs.core.first(arglist__22396);
var children__17019__auto__ = cljs.core.rest(arglist__22396);
return G__22394__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22394.cljs$core$IFn$_invoke$arity$variadic = G__22394__delegate;
return G__22394;
})()
;
title = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return title__0.call(this);
default:
var G__22397 = null;
if (arguments.length > 1) {
var G__22398__i = 0, G__22398__a = new Array(arguments.length -  1);
while (G__22398__i < G__22398__a.length) {G__22398__a[G__22398__i] = arguments[G__22398__i + 1]; ++G__22398__i;}
G__22397 = new cljs.core.IndexedSeq(G__22398__a,0);
}
return title__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
title.cljs$lang$maxFixedArity = 1;
title.cljs$lang$applyTo = title__2.cljs$lang$applyTo;
title.cljs$core$IFn$_invoke$arity$0 = title__0;
title.cljs$core$IFn$_invoke$arity$variadic = title__2.cljs$core$IFn$_invoke$arity$variadic;
return title;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tr = (function() {
var tr = null;
var tr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});
var tr__2 = (function() { 
var G__22399__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__17018__auto__,children__17019__auto__);
};
var G__22399 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22400__i = 0, G__22400__a = new Array(arguments.length -  1);
while (G__22400__i < G__22400__a.length) {G__22400__a[G__22400__i] = arguments[G__22400__i + 1]; ++G__22400__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22400__a,0);
} 
return G__22399__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22399.cljs$lang$maxFixedArity = 1;
G__22399.cljs$lang$applyTo = (function (arglist__22401){
var opts__17018__auto__ = cljs.core.first(arglist__22401);
var children__17019__auto__ = cljs.core.rest(arglist__22401);
return G__22399__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22399.cljs$core$IFn$_invoke$arity$variadic = G__22399__delegate;
return G__22399;
})()
;
tr = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return tr__0.call(this);
default:
var G__22402 = null;
if (arguments.length > 1) {
var G__22403__i = 0, G__22403__a = new Array(arguments.length -  1);
while (G__22403__i < G__22403__a.length) {G__22403__a[G__22403__i] = arguments[G__22403__i + 1]; ++G__22403__i;}
G__22402 = new cljs.core.IndexedSeq(G__22403__a,0);
}
return tr__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tr.cljs$lang$maxFixedArity = 1;
tr.cljs$lang$applyTo = tr__2.cljs$lang$applyTo;
tr.cljs$core$IFn$_invoke$arity$0 = tr__0;
tr.cljs$core$IFn$_invoke$arity$variadic = tr__2.cljs$core$IFn$_invoke$arity$variadic;
return tr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.track = (function() {
var track = null;
var track__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});
var track__2 = (function() { 
var G__22404__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__17018__auto__,children__17019__auto__);
};
var G__22404 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22405__i = 0, G__22405__a = new Array(arguments.length -  1);
while (G__22405__i < G__22405__a.length) {G__22405__a[G__22405__i] = arguments[G__22405__i + 1]; ++G__22405__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22405__a,0);
} 
return G__22404__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22404.cljs$lang$maxFixedArity = 1;
G__22404.cljs$lang$applyTo = (function (arglist__22406){
var opts__17018__auto__ = cljs.core.first(arglist__22406);
var children__17019__auto__ = cljs.core.rest(arglist__22406);
return G__22404__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22404.cljs$core$IFn$_invoke$arity$variadic = G__22404__delegate;
return G__22404;
})()
;
track = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return track__0.call(this);
default:
var G__22407 = null;
if (arguments.length > 1) {
var G__22408__i = 0, G__22408__a = new Array(arguments.length -  1);
while (G__22408__i < G__22408__a.length) {G__22408__a[G__22408__i] = arguments[G__22408__i + 1]; ++G__22408__i;}
G__22407 = new cljs.core.IndexedSeq(G__22408__a,0);
}
return track__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
track.cljs$lang$maxFixedArity = 1;
track.cljs$lang$applyTo = track__2.cljs$lang$applyTo;
track.cljs$core$IFn$_invoke$arity$0 = track__0;
track.cljs$core$IFn$_invoke$arity$variadic = track__2.cljs$core$IFn$_invoke$arity$variadic;
return track;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.u = (function() {
var u = null;
var u__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});
var u__2 = (function() { 
var G__22409__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__17018__auto__,children__17019__auto__);
};
var G__22409 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22410__i = 0, G__22410__a = new Array(arguments.length -  1);
while (G__22410__i < G__22410__a.length) {G__22410__a[G__22410__i] = arguments[G__22410__i + 1]; ++G__22410__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22410__a,0);
} 
return G__22409__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22409.cljs$lang$maxFixedArity = 1;
G__22409.cljs$lang$applyTo = (function (arglist__22411){
var opts__17018__auto__ = cljs.core.first(arglist__22411);
var children__17019__auto__ = cljs.core.rest(arglist__22411);
return G__22409__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22409.cljs$core$IFn$_invoke$arity$variadic = G__22409__delegate;
return G__22409;
})()
;
u = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return u__0.call(this);
default:
var G__22412 = null;
if (arguments.length > 1) {
var G__22413__i = 0, G__22413__a = new Array(arguments.length -  1);
while (G__22413__i < G__22413__a.length) {G__22413__a[G__22413__i] = arguments[G__22413__i + 1]; ++G__22413__i;}
G__22412 = new cljs.core.IndexedSeq(G__22413__a,0);
}
return u__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
u.cljs$lang$maxFixedArity = 1;
u.cljs$lang$applyTo = u__2.cljs$lang$applyTo;
u.cljs$core$IFn$_invoke$arity$0 = u__0;
u.cljs$core$IFn$_invoke$arity$variadic = u__2.cljs$core$IFn$_invoke$arity$variadic;
return u;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ul = (function() {
var ul = null;
var ul__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});
var ul__2 = (function() { 
var G__22414__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__17018__auto__,children__17019__auto__);
};
var G__22414 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22415__i = 0, G__22415__a = new Array(arguments.length -  1);
while (G__22415__i < G__22415__a.length) {G__22415__a[G__22415__i] = arguments[G__22415__i + 1]; ++G__22415__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22415__a,0);
} 
return G__22414__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22414.cljs$lang$maxFixedArity = 1;
G__22414.cljs$lang$applyTo = (function (arglist__22416){
var opts__17018__auto__ = cljs.core.first(arglist__22416);
var children__17019__auto__ = cljs.core.rest(arglist__22416);
return G__22414__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22414.cljs$core$IFn$_invoke$arity$variadic = G__22414__delegate;
return G__22414;
})()
;
ul = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return ul__0.call(this);
default:
var G__22417 = null;
if (arguments.length > 1) {
var G__22418__i = 0, G__22418__a = new Array(arguments.length -  1);
while (G__22418__i < G__22418__a.length) {G__22418__a[G__22418__i] = arguments[G__22418__i + 1]; ++G__22418__i;}
G__22417 = new cljs.core.IndexedSeq(G__22418__a,0);
}
return ul__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ul.cljs$lang$maxFixedArity = 1;
ul.cljs$lang$applyTo = ul__2.cljs$lang$applyTo;
ul.cljs$core$IFn$_invoke$arity$0 = ul__0;
ul.cljs$core$IFn$_invoke$arity$variadic = ul__2.cljs$core$IFn$_invoke$arity$variadic;
return ul;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.var$ = (function() {
var var$ = null;
var var$__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});
var var$__2 = (function() { 
var G__22419__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__17018__auto__,children__17019__auto__);
};
var G__22419 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22420__i = 0, G__22420__a = new Array(arguments.length -  1);
while (G__22420__i < G__22420__a.length) {G__22420__a[G__22420__i] = arguments[G__22420__i + 1]; ++G__22420__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22420__a,0);
} 
return G__22419__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22419.cljs$lang$maxFixedArity = 1;
G__22419.cljs$lang$applyTo = (function (arglist__22421){
var opts__17018__auto__ = cljs.core.first(arglist__22421);
var children__17019__auto__ = cljs.core.rest(arglist__22421);
return G__22419__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22419.cljs$core$IFn$_invoke$arity$variadic = G__22419__delegate;
return G__22419;
})()
;
var$ = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return var$__0.call(this);
default:
var G__22422 = null;
if (arguments.length > 1) {
var G__22423__i = 0, G__22423__a = new Array(arguments.length -  1);
while (G__22423__i < G__22423__a.length) {G__22423__a[G__22423__i] = arguments[G__22423__i + 1]; ++G__22423__i;}
G__22422 = new cljs.core.IndexedSeq(G__22423__a,0);
}
return var$__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
var$.cljs$lang$maxFixedArity = 1;
var$.cljs$lang$applyTo = var$__2.cljs$lang$applyTo;
var$.cljs$core$IFn$_invoke$arity$0 = var$__0;
var$.cljs$core$IFn$_invoke$arity$variadic = var$__2.cljs$core$IFn$_invoke$arity$variadic;
return var$;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.video = (function() {
var video = null;
var video__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});
var video__2 = (function() { 
var G__22424__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__17018__auto__,children__17019__auto__);
};
var G__22424 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22425__i = 0, G__22425__a = new Array(arguments.length -  1);
while (G__22425__i < G__22425__a.length) {G__22425__a[G__22425__i] = arguments[G__22425__i + 1]; ++G__22425__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22425__a,0);
} 
return G__22424__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22424.cljs$lang$maxFixedArity = 1;
G__22424.cljs$lang$applyTo = (function (arglist__22426){
var opts__17018__auto__ = cljs.core.first(arglist__22426);
var children__17019__auto__ = cljs.core.rest(arglist__22426);
return G__22424__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22424.cljs$core$IFn$_invoke$arity$variadic = G__22424__delegate;
return G__22424;
})()
;
video = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return video__0.call(this);
default:
var G__22427 = null;
if (arguments.length > 1) {
var G__22428__i = 0, G__22428__a = new Array(arguments.length -  1);
while (G__22428__i < G__22428__a.length) {G__22428__a[G__22428__i] = arguments[G__22428__i + 1]; ++G__22428__i;}
G__22427 = new cljs.core.IndexedSeq(G__22428__a,0);
}
return video__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
video.cljs$lang$maxFixedArity = 1;
video.cljs$lang$applyTo = video__2.cljs$lang$applyTo;
video.cljs$core$IFn$_invoke$arity$0 = video__0;
video.cljs$core$IFn$_invoke$arity$variadic = video__2.cljs$core$IFn$_invoke$arity$variadic;
return video;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.wbr = (function() {
var wbr = null;
var wbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});
var wbr__2 = (function() { 
var G__22429__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__17018__auto__,children__17019__auto__);
};
var G__22429 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22430__i = 0, G__22430__a = new Array(arguments.length -  1);
while (G__22430__i < G__22430__a.length) {G__22430__a[G__22430__i] = arguments[G__22430__i + 1]; ++G__22430__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22430__a,0);
} 
return G__22429__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22429.cljs$lang$maxFixedArity = 1;
G__22429.cljs$lang$applyTo = (function (arglist__22431){
var opts__17018__auto__ = cljs.core.first(arglist__22431);
var children__17019__auto__ = cljs.core.rest(arglist__22431);
return G__22429__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22429.cljs$core$IFn$_invoke$arity$variadic = G__22429__delegate;
return G__22429;
})()
;
wbr = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return wbr__0.call(this);
default:
var G__22432 = null;
if (arguments.length > 1) {
var G__22433__i = 0, G__22433__a = new Array(arguments.length -  1);
while (G__22433__i < G__22433__a.length) {G__22433__a[G__22433__i] = arguments[G__22433__i + 1]; ++G__22433__i;}
G__22432 = new cljs.core.IndexedSeq(G__22433__a,0);
}
return wbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wbr.cljs$lang$maxFixedArity = 1;
wbr.cljs$lang$applyTo = wbr__2.cljs$lang$applyTo;
wbr.cljs$core$IFn$_invoke$arity$0 = wbr__0;
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__2.cljs$core$IFn$_invoke$arity$variadic;
return wbr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.circle = (function() {
var circle = null;
var circle__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});
var circle__2 = (function() { 
var G__22434__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__17018__auto__,children__17019__auto__);
};
var G__22434 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22435__i = 0, G__22435__a = new Array(arguments.length -  1);
while (G__22435__i < G__22435__a.length) {G__22435__a[G__22435__i] = arguments[G__22435__i + 1]; ++G__22435__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22435__a,0);
} 
return G__22434__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22434.cljs$lang$maxFixedArity = 1;
G__22434.cljs$lang$applyTo = (function (arglist__22436){
var opts__17018__auto__ = cljs.core.first(arglist__22436);
var children__17019__auto__ = cljs.core.rest(arglist__22436);
return G__22434__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22434.cljs$core$IFn$_invoke$arity$variadic = G__22434__delegate;
return G__22434;
})()
;
circle = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return circle__0.call(this);
default:
var G__22437 = null;
if (arguments.length > 1) {
var G__22438__i = 0, G__22438__a = new Array(arguments.length -  1);
while (G__22438__i < G__22438__a.length) {G__22438__a[G__22438__i] = arguments[G__22438__i + 1]; ++G__22438__i;}
G__22437 = new cljs.core.IndexedSeq(G__22438__a,0);
}
return circle__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
circle.cljs$lang$maxFixedArity = 1;
circle.cljs$lang$applyTo = circle__2.cljs$lang$applyTo;
circle.cljs$core$IFn$_invoke$arity$0 = circle__0;
circle.cljs$core$IFn$_invoke$arity$variadic = circle__2.cljs$core$IFn$_invoke$arity$variadic;
return circle;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ellipse = (function() {
var ellipse = null;
var ellipse__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});
var ellipse__2 = (function() { 
var G__22439__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__17018__auto__,children__17019__auto__);
};
var G__22439 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22440__i = 0, G__22440__a = new Array(arguments.length -  1);
while (G__22440__i < G__22440__a.length) {G__22440__a[G__22440__i] = arguments[G__22440__i + 1]; ++G__22440__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22440__a,0);
} 
return G__22439__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22439.cljs$lang$maxFixedArity = 1;
G__22439.cljs$lang$applyTo = (function (arglist__22441){
var opts__17018__auto__ = cljs.core.first(arglist__22441);
var children__17019__auto__ = cljs.core.rest(arglist__22441);
return G__22439__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22439.cljs$core$IFn$_invoke$arity$variadic = G__22439__delegate;
return G__22439;
})()
;
ellipse = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return ellipse__0.call(this);
default:
var G__22442 = null;
if (arguments.length > 1) {
var G__22443__i = 0, G__22443__a = new Array(arguments.length -  1);
while (G__22443__i < G__22443__a.length) {G__22443__a[G__22443__i] = arguments[G__22443__i + 1]; ++G__22443__i;}
G__22442 = new cljs.core.IndexedSeq(G__22443__a,0);
}
return ellipse__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ellipse.cljs$lang$maxFixedArity = 1;
ellipse.cljs$lang$applyTo = ellipse__2.cljs$lang$applyTo;
ellipse.cljs$core$IFn$_invoke$arity$0 = ellipse__0;
ellipse.cljs$core$IFn$_invoke$arity$variadic = ellipse__2.cljs$core$IFn$_invoke$arity$variadic;
return ellipse;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.g = (function() {
var g = null;
var g__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});
var g__2 = (function() { 
var G__22444__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__17018__auto__,children__17019__auto__);
};
var G__22444 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22445__i = 0, G__22445__a = new Array(arguments.length -  1);
while (G__22445__i < G__22445__a.length) {G__22445__a[G__22445__i] = arguments[G__22445__i + 1]; ++G__22445__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22445__a,0);
} 
return G__22444__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22444.cljs$lang$maxFixedArity = 1;
G__22444.cljs$lang$applyTo = (function (arglist__22446){
var opts__17018__auto__ = cljs.core.first(arglist__22446);
var children__17019__auto__ = cljs.core.rest(arglist__22446);
return G__22444__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22444.cljs$core$IFn$_invoke$arity$variadic = G__22444__delegate;
return G__22444;
})()
;
g = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return g__0.call(this);
default:
var G__22447 = null;
if (arguments.length > 1) {
var G__22448__i = 0, G__22448__a = new Array(arguments.length -  1);
while (G__22448__i < G__22448__a.length) {G__22448__a[G__22448__i] = arguments[G__22448__i + 1]; ++G__22448__i;}
G__22447 = new cljs.core.IndexedSeq(G__22448__a,0);
}
return g__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
g.cljs$lang$maxFixedArity = 1;
g.cljs$lang$applyTo = g__2.cljs$lang$applyTo;
g.cljs$core$IFn$_invoke$arity$0 = g__0;
g.cljs$core$IFn$_invoke$arity$variadic = g__2.cljs$core$IFn$_invoke$arity$variadic;
return g;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.line = (function() {
var line = null;
var line__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});
var line__2 = (function() { 
var G__22449__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__17018__auto__,children__17019__auto__);
};
var G__22449 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22450__i = 0, G__22450__a = new Array(arguments.length -  1);
while (G__22450__i < G__22450__a.length) {G__22450__a[G__22450__i] = arguments[G__22450__i + 1]; ++G__22450__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22450__a,0);
} 
return G__22449__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22449.cljs$lang$maxFixedArity = 1;
G__22449.cljs$lang$applyTo = (function (arglist__22451){
var opts__17018__auto__ = cljs.core.first(arglist__22451);
var children__17019__auto__ = cljs.core.rest(arglist__22451);
return G__22449__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22449.cljs$core$IFn$_invoke$arity$variadic = G__22449__delegate;
return G__22449;
})()
;
line = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return line__0.call(this);
default:
var G__22452 = null;
if (arguments.length > 1) {
var G__22453__i = 0, G__22453__a = new Array(arguments.length -  1);
while (G__22453__i < G__22453__a.length) {G__22453__a[G__22453__i] = arguments[G__22453__i + 1]; ++G__22453__i;}
G__22452 = new cljs.core.IndexedSeq(G__22453__a,0);
}
return line__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
line.cljs$lang$maxFixedArity = 1;
line.cljs$lang$applyTo = line__2.cljs$lang$applyTo;
line.cljs$core$IFn$_invoke$arity$0 = line__0;
line.cljs$core$IFn$_invoke$arity$variadic = line__2.cljs$core$IFn$_invoke$arity$variadic;
return line;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.path = (function() {
var path = null;
var path__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});
var path__2 = (function() { 
var G__22454__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__17018__auto__,children__17019__auto__);
};
var G__22454 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22455__i = 0, G__22455__a = new Array(arguments.length -  1);
while (G__22455__i < G__22455__a.length) {G__22455__a[G__22455__i] = arguments[G__22455__i + 1]; ++G__22455__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22455__a,0);
} 
return G__22454__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22454.cljs$lang$maxFixedArity = 1;
G__22454.cljs$lang$applyTo = (function (arglist__22456){
var opts__17018__auto__ = cljs.core.first(arglist__22456);
var children__17019__auto__ = cljs.core.rest(arglist__22456);
return G__22454__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22454.cljs$core$IFn$_invoke$arity$variadic = G__22454__delegate;
return G__22454;
})()
;
path = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return path__0.call(this);
default:
var G__22457 = null;
if (arguments.length > 1) {
var G__22458__i = 0, G__22458__a = new Array(arguments.length -  1);
while (G__22458__i < G__22458__a.length) {G__22458__a[G__22458__i] = arguments[G__22458__i + 1]; ++G__22458__i;}
G__22457 = new cljs.core.IndexedSeq(G__22458__a,0);
}
return path__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
path.cljs$lang$maxFixedArity = 1;
path.cljs$lang$applyTo = path__2.cljs$lang$applyTo;
path.cljs$core$IFn$_invoke$arity$0 = path__0;
path.cljs$core$IFn$_invoke$arity$variadic = path__2.cljs$core$IFn$_invoke$arity$variadic;
return path;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.polyline = (function() {
var polyline = null;
var polyline__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});
var polyline__2 = (function() { 
var G__22459__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__17018__auto__,children__17019__auto__);
};
var G__22459 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22460__i = 0, G__22460__a = new Array(arguments.length -  1);
while (G__22460__i < G__22460__a.length) {G__22460__a[G__22460__i] = arguments[G__22460__i + 1]; ++G__22460__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22460__a,0);
} 
return G__22459__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22459.cljs$lang$maxFixedArity = 1;
G__22459.cljs$lang$applyTo = (function (arglist__22461){
var opts__17018__auto__ = cljs.core.first(arglist__22461);
var children__17019__auto__ = cljs.core.rest(arglist__22461);
return G__22459__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22459.cljs$core$IFn$_invoke$arity$variadic = G__22459__delegate;
return G__22459;
})()
;
polyline = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return polyline__0.call(this);
default:
var G__22462 = null;
if (arguments.length > 1) {
var G__22463__i = 0, G__22463__a = new Array(arguments.length -  1);
while (G__22463__i < G__22463__a.length) {G__22463__a[G__22463__i] = arguments[G__22463__i + 1]; ++G__22463__i;}
G__22462 = new cljs.core.IndexedSeq(G__22463__a,0);
}
return polyline__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
polyline.cljs$lang$maxFixedArity = 1;
polyline.cljs$lang$applyTo = polyline__2.cljs$lang$applyTo;
polyline.cljs$core$IFn$_invoke$arity$0 = polyline__0;
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__2.cljs$core$IFn$_invoke$arity$variadic;
return polyline;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rect = (function() {
var rect = null;
var rect__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});
var rect__2 = (function() { 
var G__22464__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__17018__auto__,children__17019__auto__);
};
var G__22464 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22465__i = 0, G__22465__a = new Array(arguments.length -  1);
while (G__22465__i < G__22465__a.length) {G__22465__a[G__22465__i] = arguments[G__22465__i + 1]; ++G__22465__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22465__a,0);
} 
return G__22464__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22464.cljs$lang$maxFixedArity = 1;
G__22464.cljs$lang$applyTo = (function (arglist__22466){
var opts__17018__auto__ = cljs.core.first(arglist__22466);
var children__17019__auto__ = cljs.core.rest(arglist__22466);
return G__22464__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22464.cljs$core$IFn$_invoke$arity$variadic = G__22464__delegate;
return G__22464;
})()
;
rect = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return rect__0.call(this);
default:
var G__22467 = null;
if (arguments.length > 1) {
var G__22468__i = 0, G__22468__a = new Array(arguments.length -  1);
while (G__22468__i < G__22468__a.length) {G__22468__a[G__22468__i] = arguments[G__22468__i + 1]; ++G__22468__i;}
G__22467 = new cljs.core.IndexedSeq(G__22468__a,0);
}
return rect__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rect.cljs$lang$maxFixedArity = 1;
rect.cljs$lang$applyTo = rect__2.cljs$lang$applyTo;
rect.cljs$core$IFn$_invoke$arity$0 = rect__0;
rect.cljs$core$IFn$_invoke$arity$variadic = rect__2.cljs$core$IFn$_invoke$arity$variadic;
return rect;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.svg = (function() {
var svg = null;
var svg__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});
var svg__2 = (function() { 
var G__22469__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__17018__auto__,children__17019__auto__);
};
var G__22469 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22470__i = 0, G__22470__a = new Array(arguments.length -  1);
while (G__22470__i < G__22470__a.length) {G__22470__a[G__22470__i] = arguments[G__22470__i + 1]; ++G__22470__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22470__a,0);
} 
return G__22469__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22469.cljs$lang$maxFixedArity = 1;
G__22469.cljs$lang$applyTo = (function (arglist__22471){
var opts__17018__auto__ = cljs.core.first(arglist__22471);
var children__17019__auto__ = cljs.core.rest(arglist__22471);
return G__22469__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22469.cljs$core$IFn$_invoke$arity$variadic = G__22469__delegate;
return G__22469;
})()
;
svg = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return svg__0.call(this);
default:
var G__22472 = null;
if (arguments.length > 1) {
var G__22473__i = 0, G__22473__a = new Array(arguments.length -  1);
while (G__22473__i < G__22473__a.length) {G__22473__a[G__22473__i] = arguments[G__22473__i + 1]; ++G__22473__i;}
G__22472 = new cljs.core.IndexedSeq(G__22473__a,0);
}
return svg__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
svg.cljs$lang$maxFixedArity = 1;
svg.cljs$lang$applyTo = svg__2.cljs$lang$applyTo;
svg.cljs$core$IFn$_invoke$arity$0 = svg__0;
svg.cljs$core$IFn$_invoke$arity$variadic = svg__2.cljs$core$IFn$_invoke$arity$variadic;
return svg;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.text = (function() {
var text = null;
var text__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});
var text__2 = (function() { 
var G__22474__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__17018__auto__,children__17019__auto__);
};
var G__22474 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22475__i = 0, G__22475__a = new Array(arguments.length -  1);
while (G__22475__i < G__22475__a.length) {G__22475__a[G__22475__i] = arguments[G__22475__i + 1]; ++G__22475__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22475__a,0);
} 
return G__22474__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22474.cljs$lang$maxFixedArity = 1;
G__22474.cljs$lang$applyTo = (function (arglist__22476){
var opts__17018__auto__ = cljs.core.first(arglist__22476);
var children__17019__auto__ = cljs.core.rest(arglist__22476);
return G__22474__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22474.cljs$core$IFn$_invoke$arity$variadic = G__22474__delegate;
return G__22474;
})()
;
text = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return text__0.call(this);
default:
var G__22477 = null;
if (arguments.length > 1) {
var G__22478__i = 0, G__22478__a = new Array(arguments.length -  1);
while (G__22478__i < G__22478__a.length) {G__22478__a[G__22478__i] = arguments[G__22478__i + 1]; ++G__22478__i;}
G__22477 = new cljs.core.IndexedSeq(G__22478__a,0);
}
return text__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$lang$maxFixedArity = 1;
text.cljs$lang$applyTo = text__2.cljs$lang$applyTo;
text.cljs$core$IFn$_invoke$arity$0 = text__0;
text.cljs$core$IFn$_invoke$arity$variadic = text__2.cljs$core$IFn$_invoke$arity$variadic;
return text;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.defs = (function() {
var defs = null;
var defs__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});
var defs__2 = (function() { 
var G__22479__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__17018__auto__,children__17019__auto__);
};
var G__22479 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22480__i = 0, G__22480__a = new Array(arguments.length -  1);
while (G__22480__i < G__22480__a.length) {G__22480__a[G__22480__i] = arguments[G__22480__i + 1]; ++G__22480__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22480__a,0);
} 
return G__22479__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22479.cljs$lang$maxFixedArity = 1;
G__22479.cljs$lang$applyTo = (function (arglist__22481){
var opts__17018__auto__ = cljs.core.first(arglist__22481);
var children__17019__auto__ = cljs.core.rest(arglist__22481);
return G__22479__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22479.cljs$core$IFn$_invoke$arity$variadic = G__22479__delegate;
return G__22479;
})()
;
defs = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return defs__0.call(this);
default:
var G__22482 = null;
if (arguments.length > 1) {
var G__22483__i = 0, G__22483__a = new Array(arguments.length -  1);
while (G__22483__i < G__22483__a.length) {G__22483__a[G__22483__i] = arguments[G__22483__i + 1]; ++G__22483__i;}
G__22482 = new cljs.core.IndexedSeq(G__22483__a,0);
}
return defs__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
defs.cljs$lang$maxFixedArity = 1;
defs.cljs$lang$applyTo = defs__2.cljs$lang$applyTo;
defs.cljs$core$IFn$_invoke$arity$0 = defs__0;
defs.cljs$core$IFn$_invoke$arity$variadic = defs__2.cljs$core$IFn$_invoke$arity$variadic;
return defs;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.linearGradient = (function() {
var linearGradient = null;
var linearGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});
var linearGradient__2 = (function() { 
var G__22484__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__17018__auto__,children__17019__auto__);
};
var G__22484 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22485__i = 0, G__22485__a = new Array(arguments.length -  1);
while (G__22485__i < G__22485__a.length) {G__22485__a[G__22485__i] = arguments[G__22485__i + 1]; ++G__22485__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22485__a,0);
} 
return G__22484__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22484.cljs$lang$maxFixedArity = 1;
G__22484.cljs$lang$applyTo = (function (arglist__22486){
var opts__17018__auto__ = cljs.core.first(arglist__22486);
var children__17019__auto__ = cljs.core.rest(arglist__22486);
return G__22484__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22484.cljs$core$IFn$_invoke$arity$variadic = G__22484__delegate;
return G__22484;
})()
;
linearGradient = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return linearGradient__0.call(this);
default:
var G__22487 = null;
if (arguments.length > 1) {
var G__22488__i = 0, G__22488__a = new Array(arguments.length -  1);
while (G__22488__i < G__22488__a.length) {G__22488__a[G__22488__i] = arguments[G__22488__i + 1]; ++G__22488__i;}
G__22487 = new cljs.core.IndexedSeq(G__22488__a,0);
}
return linearGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linearGradient.cljs$lang$maxFixedArity = 1;
linearGradient.cljs$lang$applyTo = linearGradient__2.cljs$lang$applyTo;
linearGradient.cljs$core$IFn$_invoke$arity$0 = linearGradient__0;
linearGradient.cljs$core$IFn$_invoke$arity$variadic = linearGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return linearGradient;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.polygon = (function() {
var polygon = null;
var polygon__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});
var polygon__2 = (function() { 
var G__22489__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__17018__auto__,children__17019__auto__);
};
var G__22489 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22490__i = 0, G__22490__a = new Array(arguments.length -  1);
while (G__22490__i < G__22490__a.length) {G__22490__a[G__22490__i] = arguments[G__22490__i + 1]; ++G__22490__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22490__a,0);
} 
return G__22489__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22489.cljs$lang$maxFixedArity = 1;
G__22489.cljs$lang$applyTo = (function (arglist__22491){
var opts__17018__auto__ = cljs.core.first(arglist__22491);
var children__17019__auto__ = cljs.core.rest(arglist__22491);
return G__22489__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22489.cljs$core$IFn$_invoke$arity$variadic = G__22489__delegate;
return G__22489;
})()
;
polygon = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return polygon__0.call(this);
default:
var G__22492 = null;
if (arguments.length > 1) {
var G__22493__i = 0, G__22493__a = new Array(arguments.length -  1);
while (G__22493__i < G__22493__a.length) {G__22493__a[G__22493__i] = arguments[G__22493__i + 1]; ++G__22493__i;}
G__22492 = new cljs.core.IndexedSeq(G__22493__a,0);
}
return polygon__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
polygon.cljs$lang$maxFixedArity = 1;
polygon.cljs$lang$applyTo = polygon__2.cljs$lang$applyTo;
polygon.cljs$core$IFn$_invoke$arity$0 = polygon__0;
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__2.cljs$core$IFn$_invoke$arity$variadic;
return polygon;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.radialGradient = (function() {
var radialGradient = null;
var radialGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});
var radialGradient__2 = (function() { 
var G__22494__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__17018__auto__,children__17019__auto__);
};
var G__22494 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22495__i = 0, G__22495__a = new Array(arguments.length -  1);
while (G__22495__i < G__22495__a.length) {G__22495__a[G__22495__i] = arguments[G__22495__i + 1]; ++G__22495__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22495__a,0);
} 
return G__22494__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22494.cljs$lang$maxFixedArity = 1;
G__22494.cljs$lang$applyTo = (function (arglist__22496){
var opts__17018__auto__ = cljs.core.first(arglist__22496);
var children__17019__auto__ = cljs.core.rest(arglist__22496);
return G__22494__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22494.cljs$core$IFn$_invoke$arity$variadic = G__22494__delegate;
return G__22494;
})()
;
radialGradient = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return radialGradient__0.call(this);
default:
var G__22497 = null;
if (arguments.length > 1) {
var G__22498__i = 0, G__22498__a = new Array(arguments.length -  1);
while (G__22498__i < G__22498__a.length) {G__22498__a[G__22498__i] = arguments[G__22498__i + 1]; ++G__22498__i;}
G__22497 = new cljs.core.IndexedSeq(G__22498__a,0);
}
return radialGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radialGradient.cljs$lang$maxFixedArity = 1;
radialGradient.cljs$lang$applyTo = radialGradient__2.cljs$lang$applyTo;
radialGradient.cljs$core$IFn$_invoke$arity$0 = radialGradient__0;
radialGradient.cljs$core$IFn$_invoke$arity$variadic = radialGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return radialGradient;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.stop = (function() {
var stop = null;
var stop__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});
var stop__2 = (function() { 
var G__22499__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__17018__auto__,children__17019__auto__);
};
var G__22499 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22500__i = 0, G__22500__a = new Array(arguments.length -  1);
while (G__22500__i < G__22500__a.length) {G__22500__a[G__22500__i] = arguments[G__22500__i + 1]; ++G__22500__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22500__a,0);
} 
return G__22499__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22499.cljs$lang$maxFixedArity = 1;
G__22499.cljs$lang$applyTo = (function (arglist__22501){
var opts__17018__auto__ = cljs.core.first(arglist__22501);
var children__17019__auto__ = cljs.core.rest(arglist__22501);
return G__22499__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22499.cljs$core$IFn$_invoke$arity$variadic = G__22499__delegate;
return G__22499;
})()
;
stop = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return stop__0.call(this);
default:
var G__22502 = null;
if (arguments.length > 1) {
var G__22503__i = 0, G__22503__a = new Array(arguments.length -  1);
while (G__22503__i < G__22503__a.length) {G__22503__a[G__22503__i] = arguments[G__22503__i + 1]; ++G__22503__i;}
G__22502 = new cljs.core.IndexedSeq(G__22503__a,0);
}
return stop__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stop.cljs$lang$maxFixedArity = 1;
stop.cljs$lang$applyTo = stop__2.cljs$lang$applyTo;
stop.cljs$core$IFn$_invoke$arity$0 = stop__0;
stop.cljs$core$IFn$_invoke$arity$variadic = stop__2.cljs$core$IFn$_invoke$arity$variadic;
return stop;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tspan = (function() {
var tspan = null;
var tspan__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});
var tspan__2 = (function() { 
var G__22504__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__17018__auto__,children__17019__auto__);
};
var G__22504 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22505__i = 0, G__22505__a = new Array(arguments.length -  1);
while (G__22505__i < G__22505__a.length) {G__22505__a[G__22505__i] = arguments[G__22505__i + 1]; ++G__22505__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22505__a,0);
} 
return G__22504__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22504.cljs$lang$maxFixedArity = 1;
G__22504.cljs$lang$applyTo = (function (arglist__22506){
var opts__17018__auto__ = cljs.core.first(arglist__22506);
var children__17019__auto__ = cljs.core.rest(arglist__22506);
return G__22504__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22504.cljs$core$IFn$_invoke$arity$variadic = G__22504__delegate;
return G__22504;
})()
;
tspan = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return tspan__0.call(this);
default:
var G__22507 = null;
if (arguments.length > 1) {
var G__22508__i = 0, G__22508__a = new Array(arguments.length -  1);
while (G__22508__i < G__22508__a.length) {G__22508__a[G__22508__i] = arguments[G__22508__i + 1]; ++G__22508__i;}
G__22507 = new cljs.core.IndexedSeq(G__22508__a,0);
}
return tspan__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tspan.cljs$lang$maxFixedArity = 1;
tspan.cljs$lang$applyTo = tspan__2.cljs$lang$applyTo;
tspan.cljs$core$IFn$_invoke$arity$0 = tspan__0;
tspan.cljs$core$IFn$_invoke$arity$variadic = tspan__2.cljs$core$IFn$_invoke$arity$variadic;
return tspan;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.input = (function() {
var input = null;
var input__0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});
var input__2 = (function() { 
var G__22509__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__17018__auto__,children__17019__auto__);
};
var G__22509 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22510__i = 0, G__22510__a = new Array(arguments.length -  1);
while (G__22510__i < G__22510__a.length) {G__22510__a[G__22510__i] = arguments[G__22510__i + 1]; ++G__22510__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22510__a,0);
} 
return G__22509__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22509.cljs$lang$maxFixedArity = 1;
G__22509.cljs$lang$applyTo = (function (arglist__22511){
var opts__17018__auto__ = cljs.core.first(arglist__22511);
var children__17019__auto__ = cljs.core.rest(arglist__22511);
return G__22509__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22509.cljs$core$IFn$_invoke$arity$variadic = G__22509__delegate;
return G__22509;
})()
;
input = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return input__0.call(this);
default:
var G__22512 = null;
if (arguments.length > 1) {
var G__22513__i = 0, G__22513__a = new Array(arguments.length -  1);
while (G__22513__i < G__22513__a.length) {G__22513__a[G__22513__i] = arguments[G__22513__i + 1]; ++G__22513__i;}
G__22512 = new cljs.core.IndexedSeq(G__22513__a,0);
}
return input__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = input__2.cljs$lang$applyTo;
input.cljs$core$IFn$_invoke$arity$0 = input__0;
input.cljs$core$IFn$_invoke$arity$variadic = input__2.cljs$core$IFn$_invoke$arity$variadic;
return input;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.textarea = (function() {
var textarea = null;
var textarea__0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});
var textarea__2 = (function() { 
var G__22514__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__17018__auto__,children__17019__auto__);
};
var G__22514 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22515__i = 0, G__22515__a = new Array(arguments.length -  1);
while (G__22515__i < G__22515__a.length) {G__22515__a[G__22515__i] = arguments[G__22515__i + 1]; ++G__22515__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22515__a,0);
} 
return G__22514__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22514.cljs$lang$maxFixedArity = 1;
G__22514.cljs$lang$applyTo = (function (arglist__22516){
var opts__17018__auto__ = cljs.core.first(arglist__22516);
var children__17019__auto__ = cljs.core.rest(arglist__22516);
return G__22514__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22514.cljs$core$IFn$_invoke$arity$variadic = G__22514__delegate;
return G__22514;
})()
;
textarea = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return textarea__0.call(this);
default:
var G__22517 = null;
if (arguments.length > 1) {
var G__22518__i = 0, G__22518__a = new Array(arguments.length -  1);
while (G__22518__i < G__22518__a.length) {G__22518__a[G__22518__i] = arguments[G__22518__i + 1]; ++G__22518__i;}
G__22517 = new cljs.core.IndexedSeq(G__22518__a,0);
}
return textarea__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
textarea.cljs$lang$maxFixedArity = 1;
textarea.cljs$lang$applyTo = textarea__2.cljs$lang$applyTo;
textarea.cljs$core$IFn$_invoke$arity$0 = textarea__0;
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__2.cljs$core$IFn$_invoke$arity$variadic;
return textarea;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.option = (function() {
var option = null;
var option__0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});
var option__2 = (function() { 
var G__22519__delegate = function (opts__17018__auto__,children__17019__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__17018__auto__,children__17019__auto__);
};
var G__22519 = function (opts__17018__auto__,var_args){
var children__17019__auto__ = null;
if (arguments.length > 1) {
var G__22520__i = 0, G__22520__a = new Array(arguments.length -  1);
while (G__22520__i < G__22520__a.length) {G__22520__a[G__22520__i] = arguments[G__22520__i + 1]; ++G__22520__i;}
  children__17019__auto__ = new cljs.core.IndexedSeq(G__22520__a,0);
} 
return G__22519__delegate.call(this,opts__17018__auto__,children__17019__auto__);};
G__22519.cljs$lang$maxFixedArity = 1;
G__22519.cljs$lang$applyTo = (function (arglist__22521){
var opts__17018__auto__ = cljs.core.first(arglist__22521);
var children__17019__auto__ = cljs.core.rest(arglist__22521);
return G__22519__delegate(opts__17018__auto__,children__17019__auto__);
});
G__22519.cljs$core$IFn$_invoke$arity$variadic = G__22519__delegate;
return G__22519;
})()
;
option = function(opts__17018__auto__,var_args){
var children__17019__auto__ = var_args;
switch(arguments.length){
case 0:
return option__0.call(this);
default:
var G__22522 = null;
if (arguments.length > 1) {
var G__22523__i = 0, G__22523__a = new Array(arguments.length -  1);
while (G__22523__i < G__22523__a.length) {G__22523__a[G__22523__i] = arguments[G__22523__i + 1]; ++G__22523__i;}
G__22522 = new cljs.core.IndexedSeq(G__22523__a,0);
}
return option__2.cljs$core$IFn$_invoke$arity$variadic(opts__17018__auto__, G__22522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
option.cljs$lang$maxFixedArity = 1;
option.cljs$lang$applyTo = option__2.cljs$lang$applyTo;
option.cljs$core$IFn$_invoke$arity$0 = option__0;
option.cljs$core$IFn$_invoke$arity$variadic = option__2.cljs$core$IFn$_invoke$arity$variadic;
return option;
})()
;
om_tools.dom.class_set = (function class_set(m){

var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1422152250551