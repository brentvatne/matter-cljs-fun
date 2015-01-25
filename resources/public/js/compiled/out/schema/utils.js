// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('schema.utils')) {
goog.provide('schema.utils');
}
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
/**
* Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
* schema need not depend on plumbing.
* @param {...*} var_args
*/
schema.utils.assoc_when = (function() { 
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
})(),(function (){var iter__13363__auto__ = (function iter__23082(s__23083){
return (new cljs.core.LazySeq(null,(function (){
var s__23083__$1 = s__23083;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23083__$1);
if(temp__4126__auto__){
var s__23083__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23083__$2)){
var c__13361__auto__ = cljs.core.chunk_first.call(null,s__23083__$2);
var size__13362__auto__ = cljs.core.count.call(null,c__13361__auto__);
var b__23085 = cljs.core.chunk_buffer.call(null,size__13362__auto__);
if((function (){var i__23084 = (0);
while(true){
if((i__23084 < size__13362__auto__)){
var vec__23088 = cljs.core._nth.call(null,c__13361__auto__,i__23084);
var k = cljs.core.nth.call(null,vec__23088,(0),null);
var v = cljs.core.nth.call(null,vec__23088,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__23085,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23090 = (i__23084 + (1));
i__23084 = G__23090;
continue;
} else {
var G__23091 = (i__23084 + (1));
i__23084 = G__23091;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23085),iter__23082.call(null,cljs.core.chunk_rest.call(null,s__23083__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23085),null);
}
} else {
var vec__23089 = cljs.core.first.call(null,s__23083__$2);
var k = cljs.core.nth.call(null,vec__23089,(0),null);
var v = cljs.core.nth.call(null,vec__23089,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23082.call(null,cljs.core.rest.call(null,s__23083__$2)));
} else {
var G__23092 = cljs.core.rest.call(null,s__23083__$2);
s__23083__$1 = G__23092;
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
var G__23093__i = 0, G__23093__a = new Array(arguments.length -  1);
while (G__23093__i < G__23093__a.length) {G__23093__a[G__23093__i] = arguments[G__23093__i + 1]; ++G__23093__i;}
  kvs = new cljs.core.IndexedSeq(G__23093__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__23094){
var m = cljs.core.first(arglist__23094);
var kvs = cljs.core.rest(arglist__23094);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
schema.utils.type_of = (function type_of(x){
return typeof x;
});
/**
* What class can we associate the fn schema with? In Clojure use the class of the fn; in
* cljs just use the fn itself.
*/
schema.utils.fn_schema_bearer = (function fn_schema_bearer(f){
return f;
});
/**
* @param {...*} var_args
*/
schema.utils.format_STAR_ = (function() { 
var format_STAR___delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format_STAR_ = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__23095__i = 0, G__23095__a = new Array(arguments.length -  1);
while (G__23095__i < G__23095__a.length) {G__23095__a[G__23095__i] = arguments[G__23095__i + 1]; ++G__23095__i;}
  args = new cljs.core.IndexedSeq(G__23095__a,0);
} 
return format_STAR___delegate.call(this,fmt,args);};
format_STAR_.cljs$lang$maxFixedArity = 1;
format_STAR_.cljs$lang$applyTo = (function (arglist__23096){
var fmt = cljs.core.first(arglist__23096);
var args = cljs.core.rest(arglist__23096);
return format_STAR___delegate(fmt,args);
});
format_STAR_.cljs$core$IFn$_invoke$arity$variadic = format_STAR___delegate;
return format_STAR_;
})()
;
/**
* Provide a descriptive short name for a value.
*/
schema.utils.value_name = (function value_name(value){
var t = schema.utils.type_of.call(null,value);
if((cljs.core.count.call(null,[cljs.core.str(value)].join('')) < (20))){
return value;
} else {
return cljs.core.symbol.call(null,[cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
* Identity version of memoize, because many schemas are records, and records
* don't cache their hash codes (at least in Clojure 1.5.1).
* Not thread safe, and doesn't cache falsey values.
*/
schema.utils.memoize_id = (function memoize_id(f){
return cljs.core.memoize.call(null,f);
});
schema.utils.record_QMARK_ = (function record_QMARK_(x){
var G__23098 = x;
if(G__23098){
var bit__13288__auto__ = (G__23098.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__13288__auto__) || (G__23098.cljs$core$IRecord$)){
return true;
} else {
if((!G__23098.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__23098);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__23098);
}
});

/**
* @constructor
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__13194__auto__,writer__13195__auto__,opt__13196__auto__){
return cljs.core._write.call(null,writer__13195__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function validation_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,err.expectation_delay)),(function (){var or__12607__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})());
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__13194__auto__,writer__13195__auto__,opt__13196__auto__){
return cljs.core._write.call(null,writer__13195__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function named_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

/**
* @constructor
* @param {*} error
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13210__auto__,k__13211__auto__){
var self__ = this;
var this__13210__auto____$1 = this;
return cljs.core._lookup.call(null,this__13210__auto____$1,k__13211__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13212__auto__,k23100,else__13213__auto__){
var self__ = this;
var this__13212__auto____$1 = this;
var G__23102 = (((k23100 instanceof cljs.core.Keyword))?k23100.fqn:null);
switch (G__23102) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23100,else__13213__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13224__auto__,writer__13225__auto__,opts__13226__auto__){
var self__ = this;
var this__13224__auto____$1 = this;
var pr_pair__13227__auto__ = ((function (this__13224__auto____$1){
return (function (keyval__13228__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__13225__auto__,cljs.core.pr_writer,""," ","",opts__13226__auto__,keyval__13228__auto__);
});})(this__13224__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__13225__auto__,pr_pair__13227__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__13226__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13208__auto__){
var self__ = this;
var this__13208__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13204__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13205__auto__){
var self__ = this;
var this__13205__auto____$1 = this;
var h__13028__auto__ = self__.__hash;
if(!((h__13028__auto__ == null))){
return h__13028__auto__;
} else {
var h__13028__auto____$1 = cljs.core.hash_imap.call(null,this__13205__auto____$1);
self__.__hash = h__13028__auto____$1;

return h__13028__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13206__auto__,other__13207__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
if(cljs.core.truth_((function (){var and__12595__auto__ = other__13207__auto__;
if(cljs.core.truth_(and__12595__auto__)){
return ((this__13206__auto____$1.constructor === other__13207__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__13206__auto____$1,other__13207__auto__));
} else {
return and__12595__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13219__auto__,k__13220__auto__){
var self__ = this;
var this__13219__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__13220__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13219__auto____$1),self__.__meta),k__13220__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__13220__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13217__auto__,k__13218__auto__,G__23099){
var self__ = this;
var this__13217__auto____$1 = this;
var pred__23103 = cljs.core.keyword_identical_QMARK_;
var expr__23104 = k__13218__auto__;
if(cljs.core.truth_(pred__23103.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__23104))){
return (new schema.utils.ErrorContainer(G__23099,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__13218__auto__,G__23099),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13222__auto__){
var self__ = this;
var this__13222__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13209__auto__,G__23099){
var self__ = this;
var this__13209__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__23099,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13215__auto__,entry__13216__auto__){
var self__ = this;
var this__13215__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__13216__auto__)){
return cljs.core._assoc.call(null,this__13215__auto____$1,cljs.core._nth.call(null,entry__13216__auto__,(0)),cljs.core._nth.call(null,entry__13216__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__13215__auto____$1,entry__13216__auto__);
}
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__13244__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__13244__auto__,writer__13245__auto__){
return cljs.core._write.call(null,writer__13245__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function __GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function map__GT_ErrorContainer(G__23101){
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__23101),null,cljs.core.dissoc.call(null,G__23101,new cljs.core.Keyword(null,"error","error",-978969032)),null));
});

/**
* Distinguish a value (must be non-nil) as an error.
*/
schema.utils.error = (function error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)))].join('')));
}

return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function error_val(x){
if(schema.utils.error_QMARK_.call(null,x)){
return x.error;
} else {
return null;
}
});
/**
* If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
*/
schema.utils.wrap_error_name = (function wrap_error_name(name,maybe_error){
var temp__4124__auto__ = schema.utils.error_val.call(null,maybe_error);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return schema.utils.error.call(null,schema.utils.__GT_NamedError.call(null,name,e));
} else {
return maybe_error;
}
});
/**
* Build up a result by conjing values, producing an error if at least one
* sub-value returns an error.
*/
schema.utils.result_builder = (function result_builder(lift_to_error){
return (function conjer(m,e){
var temp__4124__auto__ = schema.utils.error_val.call(null,e);
if(cljs.core.truth_(temp__4124__auto__)){
var err = temp__4124__auto__;
return schema.utils.error.call(null,cljs.core.conj.call(null,(function (){var or__12607__auto__ = schema.utils.error_val.call(null,m);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return lift_to_error.call(null,m);
}
})(),err));
} else {
var temp__4124__auto____$1 = schema.utils.error_val.call(null,m);
if(cljs.core.truth_(temp__4124__auto____$1)){
var merr = temp__4124__auto____$1;
return schema.utils.error.call(null,cljs.core.conj.call(null,merr,null));
} else {
return cljs.core.conj.call(null,m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function class_schema(klass){
return (klass["schema$utils$schema"]);
});

schema.utils.PSimpleCell = (function (){var obj23108 = {};
return obj23108;
})();

schema.utils.get_cell = (function get_cell(this$){
if((function (){var and__12595__auto__ = this$;
if(and__12595__auto__){
return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else {
return and__12595__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__13251__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12607__auto__ = (schema.utils.get_cell[goog.typeOf(x__13251__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (schema.utils.get_cell["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});

schema.utils.set_cell = (function set_cell(this$,x){
if((function (){var and__12595__auto__ = this$;
if(and__12595__auto__){
return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else {
return and__12595__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__13251__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12607__auto__ = (schema.utils.set_cell[goog.typeOf(x__13251__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (schema.utils.set_cell["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.set_cell",this$);
}
}
})().call(null,this$,x);
}
});


/**
* @constructor
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__13194__auto__,writer__13195__auto__,opt__13196__auto__){
return cljs.core._write.call(null,writer__13195__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function __GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
* Turn on run-time function validation for functions compiled when
* *compile-function-validation* was true -- has no effect for functions compiled
* when it is false.
*/
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.call(null,schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.call(null,schema.utils.set_cell,schema.utils.use_fn_validation);

//# sourceMappingURL=utils.js.map?rel=1422152253246