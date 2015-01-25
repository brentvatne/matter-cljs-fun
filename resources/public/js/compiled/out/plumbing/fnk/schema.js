// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('plumbing.fnk.schema')) {
goog.provide('plumbing.fnk.schema');
}
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__17918__17919__auto__){
var G__22777 = p1__17918__17919__auto__;
if(G__22777){
var bit__13288__auto__ = null;
if(cljs.core.truth_((function (){var or__12607__auto__ = bit__13288__auto__;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return G__22777.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__22777.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22777);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22777);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__22778_SHARP_){
return (cljs.core.val.call(null,p1__22778_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__22780 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__22780,(0),null);
var v = cljs.core.nth.call(null,vec__22780,(1),null);
var p = vec__22780;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___22786 = schema.utils.use_fn_validation;
var output_schema22781_22787 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema22782_22788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker22783_22789 = schema.core.checker.call(null,input_schema22782_22788);
var output_checker22784_22790 = schema.core.checker.call(null,output_schema22781_22787);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___22786,output_schema22781_22787,input_schema22782_22788,input_checker22783_22789,output_checker22784_22790){
return (function unwrap_schema_form_key(G__22785){
var validate__17888__auto__ = ufv___22786.get_cell();
if(cljs.core.truth_(validate__17888__auto__)){
var args__17889__auto___22791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22785], null);
var temp__4126__auto___22792 = input_checker22783_22789.call(null,args__17889__auto___22791);
if(cljs.core.truth_(temp__4126__auto___22792)){
var error__17890__auto___22793 = temp__4126__auto___22792;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__17890__auto___22793)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22793,new cljs.core.Keyword(null,"value","value",305978217),args__17889__auto___22791,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22782_22788,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17891__auto__ = (function (){var k = G__22785;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__17888__auto__)){
var temp__4126__auto___22794 = output_checker22784_22790.call(null,o__17891__auto__);
if(cljs.core.truth_(temp__4126__auto___22794)){
var error__17890__auto___22795 = temp__4126__auto___22794;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__17890__auto___22795)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22795,new cljs.core.Keyword(null,"value","value",305978217),o__17891__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22781_22787,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17891__auto__;
});})(ufv___22786,output_schema22781_22787,input_schema22782_22788,input_checker22783_22789,output_checker22784_22790))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema22781_22787,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22782_22788], null)));
var ufv___22801 = schema.utils.use_fn_validation;
var output_schema22796_22802 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema22797_22803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker22798_22804 = schema.core.checker.call(null,input_schema22797_22803);
var output_checker22799_22805 = schema.core.checker.call(null,output_schema22796_22802);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___22801,output_schema22796_22802,input_schema22797_22803,input_checker22798_22804,output_checker22799_22805){
return (function explicit_schema_key_map(G__22800){
var validate__17888__auto__ = ufv___22801.get_cell();
if(cljs.core.truth_(validate__17888__auto__)){
var args__17889__auto___22806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22800], null);
var temp__4126__auto___22807 = input_checker22798_22804.call(null,args__17889__auto___22806);
if(cljs.core.truth_(temp__4126__auto___22807)){
var error__17890__auto___22808 = temp__4126__auto___22807;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__17890__auto___22808)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22808,new cljs.core.Keyword(null,"value","value",305978217),args__17889__auto___22806,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22797_22803,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17891__auto__ = (function (){var s = G__22800;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__17888__auto__)){
var temp__4126__auto___22809 = output_checker22799_22805.call(null,o__17891__auto__);
if(cljs.core.truth_(temp__4126__auto___22809)){
var error__17890__auto___22810 = temp__4126__auto___22809;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__17890__auto___22810)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22810,new cljs.core.Keyword(null,"value","value",305978217),o__17891__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22796_22802,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17891__auto__;
});})(ufv___22801,output_schema22796_22802,input_schema22797_22803,input_checker22798_22804,output_checker22799_22805))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema22796_22802,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22797_22803], null)));
var ufv___22816 = schema.utils.use_fn_validation;
var output_schema22811_22817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema22812_22818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker22813_22819 = schema.core.checker.call(null,input_schema22812_22818);
var output_checker22814_22820 = schema.core.checker.call(null,output_schema22811_22817);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___22816,output_schema22811_22817,input_schema22812_22818,input_checker22813_22819,output_checker22814_22820){
return (function split_schema_keys(G__22815){
var validate__17888__auto__ = ufv___22816.get_cell();
if(cljs.core.truth_(validate__17888__auto__)){
var args__17889__auto___22821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22815], null);
var temp__4126__auto___22822 = input_checker22813_22819.call(null,args__17889__auto___22821);
if(cljs.core.truth_(temp__4126__auto___22822)){
var error__17890__auto___22823 = temp__4126__auto___22822;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__17890__auto___22823)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22823,new cljs.core.Keyword(null,"value","value",305978217),args__17889__auto___22821,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22812_22818,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17891__auto__ = (function (){var s = G__22815;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__17888__auto__)){
var temp__4126__auto___22824 = output_checker22814_22820.call(null,o__17891__auto__);
if(cljs.core.truth_(temp__4126__auto___22824)){
var error__17890__auto___22825 = temp__4126__auto___22824;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__17890__auto___22825)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22825,new cljs.core.Keyword(null,"value","value",305978217),o__17891__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22811_22817,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17891__auto__;
});})(ufv___22816,output_schema22811_22817,input_schema22812_22818,input_checker22813_22819,output_checker22814_22820))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema22811_22817,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22812_22818], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__22829){
var vec__22830 = p__22829;
var k = cljs.core.nth.call(null,vec__22830,(0),null);
var v = cljs.core.nth.call(null,vec__22830,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__22831 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__22831,(0),null);
var ov = cljs.core.nth.call(null,vec__22831,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__22832__i = 0, G__22832__a = new Array(arguments.length -  3);
while (G__22832__i < G__22832__a.length) {G__22832__a[G__22832__i] = arguments[G__22832__i + 3]; ++G__22832__i;}
  maps = new cljs.core.IndexedSeq(G__22832__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__22833){
var key_project = cljs.core.first(arglist__22833);
arglist__22833 = cljs.core.next(arglist__22833);
var key_combine = cljs.core.first(arglist__22833);
arglist__22833 = cljs.core.next(arglist__22833);
var val_combine = cljs.core.first(arglist__22833);
var maps = cljs.core.rest(arglist__22833);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___22841 = schema.utils.use_fn_validation;
var output_schema22835_22842 = plumbing.fnk.schema.InputSchema;
var input_schema22836_22843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker22837_22844 = schema.core.checker.call(null,input_schema22836_22843);
var output_checker22838_22845 = schema.core.checker.call(null,output_schema22835_22842);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___22841,output_schema22835_22842,input_schema22836_22843,input_checker22837_22844,output_checker22838_22845){
return (function union_input_schemata(G__22839,G__22840){
var validate__17888__auto__ = ufv___22841.get_cell();
if(cljs.core.truth_(validate__17888__auto__)){
var args__17889__auto___22846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22839,G__22840], null);
var temp__4126__auto___22847 = input_checker22837_22844.call(null,args__17889__auto___22846);
if(cljs.core.truth_(temp__4126__auto___22847)){
var error__17890__auto___22848 = temp__4126__auto___22847;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__17890__auto___22848)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22848,new cljs.core.Keyword(null,"value","value",305978217),args__17889__auto___22846,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22836_22843,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17891__auto__ = (function (){var i1 = G__22839;
var i2 = G__22840;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__17888__auto__,ufv___22841,output_schema22835_22842,input_schema22836_22843,input_checker22837_22844,output_checker22838_22845){
return (function (p1__22834_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__22834_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__22834_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__17888__auto__,ufv___22841,output_schema22835_22842,input_schema22836_22843,input_checker22837_22844,output_checker22838_22845))
,((function (validate__17888__auto__,ufv___22841,output_schema22835_22842,input_schema22836_22843,input_checker22837_22844,output_checker22838_22845){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__17888__auto__,ufv___22841,output_schema22835_22842,input_schema22836_22843,input_checker22837_22844,output_checker22838_22845))
,((function (validate__17888__auto__,ufv___22841,output_schema22835_22842,input_schema22836_22843,input_checker22837_22844,output_checker22838_22845){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__17888__auto__,ufv___22841,output_schema22835_22842,input_schema22836_22843,input_checker22837_22844,output_checker22838_22845))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__17888__auto__)){
var temp__4126__auto___22849 = output_checker22838_22845.call(null,o__17891__auto__);
if(cljs.core.truth_(temp__4126__auto___22849)){
var error__17890__auto___22850 = temp__4126__auto___22849;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__17890__auto___22850)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22850,new cljs.core.Keyword(null,"value","value",305978217),o__17891__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22835_22842,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17891__auto__;
});})(ufv___22841,output_schema22835_22842,input_schema22836_22843,input_checker22837_22844,output_checker22838_22845))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema22835_22842,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22836_22843], null)));
var ufv___22856 = schema.utils.use_fn_validation;
var output_schema22851_22857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema22852_22858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker22853_22859 = schema.core.checker.call(null,input_schema22852_22858);
var output_checker22854_22860 = schema.core.checker.call(null,output_schema22851_22857);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___22856,output_schema22851_22857,input_schema22852_22858,input_checker22853_22859,output_checker22854_22860){
return (function required_toplevel_keys(G__22855){
var validate__17888__auto__ = ufv___22856.get_cell();
if(cljs.core.truth_(validate__17888__auto__)){
var args__17889__auto___22861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22855], null);
var temp__4126__auto___22862 = input_checker22853_22859.call(null,args__17889__auto___22861);
if(cljs.core.truth_(temp__4126__auto___22862)){
var error__17890__auto___22863 = temp__4126__auto___22862;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__17890__auto___22863)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22863,new cljs.core.Keyword(null,"value","value",305978217),args__17889__auto___22861,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22852_22858,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17891__auto__ = (function (){var input_schema = G__22855;
while(true){
return cljs.core.keep.call(null,((function (validate__17888__auto__,ufv___22856,output_schema22851_22857,input_schema22852_22858,input_checker22853_22859,output_checker22854_22860){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__17888__auto__,ufv___22856,output_schema22851_22857,input_schema22852_22858,input_checker22853_22859,output_checker22854_22860))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__17888__auto__)){
var temp__4126__auto___22864 = output_checker22854_22860.call(null,o__17891__auto__);
if(cljs.core.truth_(temp__4126__auto___22864)){
var error__17890__auto___22865 = temp__4126__auto___22864;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__17890__auto___22865)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22865,new cljs.core.Keyword(null,"value","value",305978217),o__17891__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22851_22857,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17891__auto__;
});})(ufv___22856,output_schema22851_22857,input_schema22852_22858,input_checker22853_22859,output_checker22854_22860))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema22851_22857,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22852_22858], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__13363__auto__ = (function iter__22874(s__22875){
return (new cljs.core.LazySeq(null,(function (){
var s__22875__$1 = s__22875;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22875__$1);
if(temp__4126__auto__){
var s__22875__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22875__$2)){
var c__13361__auto__ = cljs.core.chunk_first.call(null,s__22875__$2);
var size__13362__auto__ = cljs.core.count.call(null,c__13361__auto__);
var b__22877 = cljs.core.chunk_buffer.call(null,size__13362__auto__);
if((function (){var i__22876 = (0);
while(true){
if((i__22876 < size__13362__auto__)){
var vec__22880 = cljs.core._nth.call(null,c__13361__auto__,i__22876);
var k = cljs.core.nth.call(null,vec__22880,(0),null);
var v = cljs.core.nth.call(null,vec__22880,(1),null);
cljs.core.chunk_append.call(null,b__22877,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__22882 = (i__22876 + (1));
i__22876 = G__22882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22877),iter__22874.call(null,cljs.core.chunk_rest.call(null,s__22875__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22877),null);
}
} else {
var vec__22881 = cljs.core.first.call(null,s__22875__$2);
var k = cljs.core.nth.call(null,vec__22881,(0),null);
var v = cljs.core.nth.call(null,vec__22881,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__22874.call(null,cljs.core.rest.call(null,s__22875__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13363__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__13363__auto__ = (function iter__22891(s__22892){
return (new cljs.core.LazySeq(null,(function (){
var s__22892__$1 = s__22892;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22892__$1);
if(temp__4126__auto__){
var s__22892__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22892__$2)){
var c__13361__auto__ = cljs.core.chunk_first.call(null,s__22892__$2);
var size__13362__auto__ = cljs.core.count.call(null,c__13361__auto__);
var b__22894 = cljs.core.chunk_buffer.call(null,size__13362__auto__);
if((function (){var i__22893 = (0);
while(true){
if((i__22893 < size__13362__auto__)){
var vec__22897 = cljs.core._nth.call(null,c__13361__auto__,i__22893);
var k = cljs.core.nth.call(null,vec__22897,(0),null);
var v = cljs.core.nth.call(null,vec__22897,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__22894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__22899 = (i__22893 + (1));
i__22893 = G__22899;
continue;
} else {
var G__22900 = (i__22893 + (1));
i__22893 = G__22900;
continue;
}
} else {
var G__22901 = (i__22893 + (1));
i__22893 = G__22901;
continue;
}
} else {
var G__22902 = (i__22893 + (1));
i__22893 = G__22902;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22894),iter__22891.call(null,cljs.core.chunk_rest.call(null,s__22892__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22894),null);
}
} else {
var vec__22898 = cljs.core.first.call(null,s__22892__$2);
var k = cljs.core.nth.call(null,vec__22898,(0),null);
var v = cljs.core.nth.call(null,vec__22898,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__22891.call(null,cljs.core.rest.call(null,s__22892__$2)));
} else {
var G__22903 = cljs.core.rest.call(null,s__22892__$2);
s__22892__$1 = G__22903;
continue;
}
} else {
var G__22904 = cljs.core.rest.call(null,s__22892__$2);
s__22892__$1 = G__22904;
continue;
}
} else {
var G__22905 = cljs.core.rest.call(null,s__22892__$2);
s__22892__$1 = G__22905;
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
return iter__13363__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___22928 = schema.utils.use_fn_validation;
var output_schema22906_22929 = schema.core.Any;
var input_schema22907_22930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker22908_22931 = schema.core.checker.call(null,input_schema22907_22930);
var output_checker22909_22932 = schema.core.checker.call(null,output_schema22906_22929);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___22928,output_schema22906_22929,input_schema22907_22930,input_checker22908_22931,output_checker22909_22932){
return (function compose_schemata(G__22910,G__22911){
var validate__17888__auto__ = true;
if(validate__17888__auto__){
var args__17889__auto___22933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22910,G__22911], null);
var temp__4126__auto___22934 = input_checker22908_22931.call(null,args__17889__auto___22933);
if(cljs.core.truth_(temp__4126__auto___22934)){
var error__17890__auto___22935 = temp__4126__auto___22934;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__17890__auto___22935)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22935,new cljs.core.Keyword(null,"value","value",305978217),args__17889__auto___22933,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22907_22930,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17891__auto__ = (function (){var G__22922 = G__22910;
var vec__22924 = G__22922;
var i2 = cljs.core.nth.call(null,vec__22924,(0),null);
var o2 = cljs.core.nth.call(null,vec__22924,(1),null);
var G__22923 = G__22911;
var vec__22925 = G__22923;
var i1 = cljs.core.nth.call(null,vec__22925,(0),null);
var o1 = cljs.core.nth.call(null,vec__22925,(1),null);
var G__22922__$1 = G__22922;
var G__22923__$1 = G__22923;
while(true){
var vec__22926 = G__22922__$1;
var i2__$1 = cljs.core.nth.call(null,vec__22926,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__22926,(1),null);
var vec__22927 = G__22923__$1;
var i1__$1 = cljs.core.nth.call(null,vec__22927,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__22927,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__17888__auto__){
var temp__4126__auto___22936 = output_checker22909_22932.call(null,o__17891__auto__);
if(cljs.core.truth_(temp__4126__auto___22936)){
var error__17890__auto___22937 = temp__4126__auto___22936;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__17890__auto___22937)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___22937,new cljs.core.Keyword(null,"value","value",305978217),o__17891__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22906_22929,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17891__auto__;
});})(ufv___22928,output_schema22906_22929,input_schema22907_22930,input_checker22908_22931,output_checker22909_22932))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema22906_22929,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22907_22930], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___23016 = schema.utils.use_fn_validation;
var output_schema22938_23017 = schema.core.Any;
var input_schema22939_23018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker22940_23019 = schema.core.checker.call(null,input_schema22939_23018);
var output_checker22941_23020 = schema.core.checker.call(null,output_schema22938_23017);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020){
return (function split_schema(G__22942,G__22943){
var validate__17888__auto__ = ufv___23016.get_cell();
if(cljs.core.truth_(validate__17888__auto__)){
var args__17889__auto___23021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22942,G__22943], null);
var temp__4126__auto___23022 = input_checker22940_23019.call(null,args__17889__auto___23021);
if(cljs.core.truth_(temp__4126__auto___23022)){
var error__17890__auto___23023 = temp__4126__auto___23022;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__17890__auto___23023)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___23023,new cljs.core.Keyword(null,"value","value",305978217),args__17889__auto___23021,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22939_23018,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17891__auto__ = (function (){var s = G__22942;
var ks = G__22943;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__13363__auto__ = ((function (ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020){
return (function iter__22980(s__22981){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020){
return (function (){
var s__22981__$1 = s__22981;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22981__$1);
if(temp__4126__auto__){
var s__22981__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22981__$2)){
var c__13361__auto__ = cljs.core.chunk_first.call(null,s__22981__$2);
var size__13362__auto__ = cljs.core.count.call(null,c__13361__auto__);
var b__22983 = cljs.core.chunk_buffer.call(null,size__13362__auto__);
if((function (){var i__22982 = (0);
while(true){
if((i__22982 < size__13362__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__13361__auto__,i__22982);
cljs.core.chunk_append.call(null,b__22983,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__13363__auto__ = ((function (i__22982,in_QMARK_,c__13361__auto__,size__13362__auto__,b__22983,s__22981__$2,temp__4126__auto__,ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020){
return (function iter__23000(s__23001){
return (new cljs.core.LazySeq(null,((function (i__22982,in_QMARK_,c__13361__auto__,size__13362__auto__,b__22983,s__22981__$2,temp__4126__auto__,ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020){
return (function (){
var s__23001__$1 = s__23001;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23001__$1);
if(temp__4126__auto____$1){
var s__23001__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23001__$2)){
var c__13361__auto____$1 = cljs.core.chunk_first.call(null,s__23001__$2);
var size__13362__auto____$1 = cljs.core.count.call(null,c__13361__auto____$1);
var b__23003 = cljs.core.chunk_buffer.call(null,size__13362__auto____$1);
if((function (){var i__23002 = (0);
while(true){
if((i__23002 < size__13362__auto____$1)){
var vec__23006 = cljs.core._nth.call(null,c__13361__auto____$1,i__23002);
var k = cljs.core.nth.call(null,vec__23006,(0),null);
var v = cljs.core.nth.call(null,vec__23006,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__23003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23024 = (i__23002 + (1));
i__23002 = G__23024;
continue;
} else {
var G__23025 = (i__23002 + (1));
i__23002 = G__23025;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23003),iter__23000.call(null,cljs.core.chunk_rest.call(null,s__23001__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23003),null);
}
} else {
var vec__23007 = cljs.core.first.call(null,s__23001__$2);
var k = cljs.core.nth.call(null,vec__23007,(0),null);
var v = cljs.core.nth.call(null,vec__23007,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23000.call(null,cljs.core.rest.call(null,s__23001__$2)));
} else {
var G__23026 = cljs.core.rest.call(null,s__23001__$2);
s__23001__$1 = G__23026;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__22982,in_QMARK_,c__13361__auto__,size__13362__auto__,b__22983,s__22981__$2,temp__4126__auto__,ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020))
,null,null));
});})(i__22982,in_QMARK_,c__13361__auto__,size__13362__auto__,b__22983,s__22981__$2,temp__4126__auto__,ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020))
;
return iter__13363__auto__.call(null,s);
})()));

var G__23027 = (i__22982 + (1));
i__22982 = G__23027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22983),iter__22980.call(null,cljs.core.chunk_rest.call(null,s__22981__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22983),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__22981__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__13363__auto__ = ((function (in_QMARK_,s__22981__$2,temp__4126__auto__,ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020){
return (function iter__23008(s__23009){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__22981__$2,temp__4126__auto__,ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020){
return (function (){
var s__23009__$1 = s__23009;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23009__$1);
if(temp__4126__auto____$1){
var s__23009__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23009__$2)){
var c__13361__auto__ = cljs.core.chunk_first.call(null,s__23009__$2);
var size__13362__auto__ = cljs.core.count.call(null,c__13361__auto__);
var b__23011 = cljs.core.chunk_buffer.call(null,size__13362__auto__);
if((function (){var i__23010 = (0);
while(true){
if((i__23010 < size__13362__auto__)){
var vec__23014 = cljs.core._nth.call(null,c__13361__auto__,i__23010);
var k = cljs.core.nth.call(null,vec__23014,(0),null);
var v = cljs.core.nth.call(null,vec__23014,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__23011,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23028 = (i__23010 + (1));
i__23010 = G__23028;
continue;
} else {
var G__23029 = (i__23010 + (1));
i__23010 = G__23029;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23011),iter__23008.call(null,cljs.core.chunk_rest.call(null,s__23009__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23011),null);
}
} else {
var vec__23015 = cljs.core.first.call(null,s__23009__$2);
var k = cljs.core.nth.call(null,vec__23015,(0),null);
var v = cljs.core.nth.call(null,vec__23015,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23008.call(null,cljs.core.rest.call(null,s__23009__$2)));
} else {
var G__23030 = cljs.core.rest.call(null,s__23009__$2);
s__23009__$1 = G__23030;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__22981__$2,temp__4126__auto__,ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020))
,null,null));
});})(in_QMARK_,s__22981__$2,temp__4126__auto__,ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020))
;
return iter__13363__auto__.call(null,s);
})()),iter__22980.call(null,cljs.core.rest.call(null,s__22981__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020))
,null,null));
});})(ks__$1,validate__17888__auto__,ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020))
;
return iter__13363__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__17888__auto__)){
var temp__4126__auto___23031 = output_checker22941_23020.call(null,o__17891__auto__);
if(cljs.core.truth_(temp__4126__auto___23031)){
var error__17890__auto___23032 = temp__4126__auto___23031;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__17890__auto___23032)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___23032,new cljs.core.Keyword(null,"value","value",305978217),o__17891__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22938_23017,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17891__auto__;
});})(ufv___23016,output_schema22938_23017,input_schema22939_23018,input_checker22940_23019,output_checker22941_23020))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema22938_23017,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22939_23018], null)));
var ufv___23063 = schema.utils.use_fn_validation;
var output_schema23033_23064 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema23034_23065 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker23035_23066 = schema.core.checker.call(null,input_schema23034_23065);
var output_checker23036_23067 = schema.core.checker.call(null,output_schema23033_23064);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___23063,output_schema23033_23064,input_schema23034_23065,input_checker23035_23066,output_checker23036_23067){
return (function sequence_schemata(G__23037,G__23038){
var validate__17888__auto__ = ufv___23063.get_cell();
if(cljs.core.truth_(validate__17888__auto__)){
var args__17889__auto___23068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23037,G__23038], null);
var temp__4126__auto___23069 = input_checker23035_23066.call(null,args__17889__auto___23068);
if(cljs.core.truth_(temp__4126__auto___23069)){
var error__17890__auto___23070 = temp__4126__auto___23069;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__17890__auto___23070)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___23070,new cljs.core.Keyword(null,"value","value",305978217),args__17889__auto___23068,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23034_23065,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17891__auto__ = (function (){var G__23054 = G__23037;
var vec__23056 = G__23054;
var i1 = cljs.core.nth.call(null,vec__23056,(0),null);
var o1 = cljs.core.nth.call(null,vec__23056,(1),null);
var G__23055 = G__23038;
var vec__23057 = G__23055;
var k = cljs.core.nth.call(null,vec__23057,(0),null);
var vec__23058 = cljs.core.nth.call(null,vec__23057,(1),null);
var i2 = cljs.core.nth.call(null,vec__23058,(0),null);
var o2 = cljs.core.nth.call(null,vec__23058,(1),null);
var G__23054__$1 = G__23054;
var G__23055__$1 = G__23055;
while(true){
var vec__23059 = G__23054__$1;
var i1__$1 = cljs.core.nth.call(null,vec__23059,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__23059,(1),null);
var vec__23060 = G__23055__$1;
var k__$1 = cljs.core.nth.call(null,vec__23060,(0),null);
var vec__23061 = cljs.core.nth.call(null,vec__23060,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__23061,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__23061,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__23062 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__23062,(0),null);
var unused = cljs.core.nth.call(null,vec__23062,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__17888__auto__)){
var temp__4126__auto___23071 = output_checker23036_23067.call(null,o__17891__auto__);
if(cljs.core.truth_(temp__4126__auto___23071)){
var error__17890__auto___23072 = temp__4126__auto___23071;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__17890__auto___23072)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17890__auto___23072,new cljs.core.Keyword(null,"value","value",305978217),o__17891__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23033_23064,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17891__auto__;
});})(ufv___23063,output_schema23033_23064,input_schema23034_23065,input_checker23035_23066,output_checker23036_23067))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema23033_23064,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23034_23065], null)));

//# sourceMappingURL=schema.js.map?rel=1422152252722