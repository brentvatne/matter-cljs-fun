// Compiled by ClojureScript 0.0-2665 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t14643 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14643 = (function (f,fn_handler,meta14644){
this.f = f;
this.fn_handler = fn_handler;
this.meta14644 = meta14644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14643.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t14643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t14643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14645){
var self__ = this;
var _14645__$1 = this;
return self__.meta14644;
});

cljs.core.async.t14643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14645,meta14644__$1){
var self__ = this;
var _14645__$1 = this;
return (new cljs.core.async.t14643(self__.f,self__.fn_handler,meta14644__$1));
});

cljs.core.async.t14643.cljs$lang$type = true;

cljs.core.async.t14643.cljs$lang$ctorStr = "cljs.core.async/t14643";

cljs.core.async.t14643.cljs$lang$ctorPrWriter = (function (this__13196__auto__,writer__13197__auto__,opt__13198__auto__){
return cljs.core._write.call(null,writer__13197__auto__,"cljs.core.async/t14643");
});

cljs.core.async.__GT_t14643 = (function __GT_t14643(f__$1,fn_handler__$1,meta14644){
return (new cljs.core.async.t14643(f__$1,fn_handler__$1,meta14644));
});

}

return (new cljs.core.async.t14643(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/.repl/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__14647 = buff;
if(G__14647){
var bit__13290__auto__ = null;
if(cljs.core.truth_((function (){var or__12607__auto__ = bit__13290__auto__;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return G__14647.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__14647.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14647);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14647);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14648 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14648);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14648,ret){
return (function (){
return fn1.call(null,val_14648);
});})(val_14648,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__13496__auto___14649 = n;
var x_14650 = (0);
while(true){
if((x_14650 < n__13496__auto___14649)){
(a[x_14650] = (0));

var G__14651 = (x_14650 + (1));
x_14650 = G__14651;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__14652 = (i + (1));
i = G__14652;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t14656 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14656 = (function (flag,alt_flag,meta14657){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14657 = meta14657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14656.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t14656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t14656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14658){
var self__ = this;
var _14658__$1 = this;
return self__.meta14657;
});})(flag))
;

cljs.core.async.t14656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14658,meta14657__$1){
var self__ = this;
var _14658__$1 = this;
return (new cljs.core.async.t14656(self__.flag,self__.alt_flag,meta14657__$1));
});})(flag))
;

cljs.core.async.t14656.cljs$lang$type = true;

cljs.core.async.t14656.cljs$lang$ctorStr = "cljs.core.async/t14656";

cljs.core.async.t14656.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13196__auto__,writer__13197__auto__,opt__13198__auto__){
return cljs.core._write.call(null,writer__13197__auto__,"cljs.core.async/t14656");
});})(flag))
;

cljs.core.async.__GT_t14656 = ((function (flag){
return (function __GT_t14656(flag__$1,alt_flag__$1,meta14657){
return (new cljs.core.async.t14656(flag__$1,alt_flag__$1,meta14657));
});})(flag))
;

}

return (new cljs.core.async.t14656(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/.repl/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t14662 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14662 = (function (cb,flag,alt_handler,meta14663){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14663 = meta14663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14662.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t14662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t14662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14664){
var self__ = this;
var _14664__$1 = this;
return self__.meta14663;
});

cljs.core.async.t14662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14664,meta14663__$1){
var self__ = this;
var _14664__$1 = this;
return (new cljs.core.async.t14662(self__.cb,self__.flag,self__.alt_handler,meta14663__$1));
});

cljs.core.async.t14662.cljs$lang$type = true;

cljs.core.async.t14662.cljs$lang$ctorStr = "cljs.core.async/t14662";

cljs.core.async.t14662.cljs$lang$ctorPrWriter = (function (this__13196__auto__,writer__13197__auto__,opt__13198__auto__){
return cljs.core._write.call(null,writer__13197__auto__,"cljs.core.async/t14662");
});

cljs.core.async.__GT_t14662 = (function __GT_t14662(cb__$1,flag__$1,alt_handler__$1,meta14663){
return (new cljs.core.async.t14662(cb__$1,flag__$1,alt_handler__$1,meta14663));
});

}

return (new cljs.core.async.t14662(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/.repl/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14665_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14665_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14666_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14666_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12607__auto__ = wport;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14667 = (i + (1));
i = G__14667;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12607__auto__ = ret;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12595__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12595__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12595__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14668){
var map__14670 = p__14668;
var map__14670__$1 = ((cljs.core.seq_QMARK_.call(null,map__14670))?cljs.core.apply.call(null,cljs.core.hash_map,map__14670):map__14670);
var opts = map__14670__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__14668 = null;
if (arguments.length > 1) {
var G__14671__i = 0, G__14671__a = new Array(arguments.length -  1);
while (G__14671__i < G__14671__a.length) {G__14671__a[G__14671__i] = arguments[G__14671__i + 1]; ++G__14671__i;}
  p__14668 = new cljs.core.IndexedSeq(G__14671__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__14668);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14672){
var ports = cljs.core.first(arglist__14672);
var p__14668 = cljs.core.rest(arglist__14672);
return alts_BANG___delegate(ports,p__14668);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__14527__auto___14767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___14767){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___14767){
return (function (state_14743){
var state_val_14744 = (state_14743[(1)]);
if((state_val_14744 === (7))){
var inst_14739 = (state_14743[(2)]);
var state_14743__$1 = state_14743;
var statearr_14745_14768 = state_14743__$1;
(statearr_14745_14768[(2)] = inst_14739);

(statearr_14745_14768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14744 === (1))){
var state_14743__$1 = state_14743;
var statearr_14746_14769 = state_14743__$1;
(statearr_14746_14769[(2)] = null);

(statearr_14746_14769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14744 === (4))){
var inst_14722 = (state_14743[(7)]);
var inst_14722__$1 = (state_14743[(2)]);
var inst_14723 = (inst_14722__$1 == null);
var state_14743__$1 = (function (){var statearr_14747 = state_14743;
(statearr_14747[(7)] = inst_14722__$1);

return statearr_14747;
})();
if(cljs.core.truth_(inst_14723)){
var statearr_14748_14770 = state_14743__$1;
(statearr_14748_14770[(1)] = (5));

} else {
var statearr_14749_14771 = state_14743__$1;
(statearr_14749_14771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14744 === (13))){
var state_14743__$1 = state_14743;
var statearr_14750_14772 = state_14743__$1;
(statearr_14750_14772[(2)] = null);

(statearr_14750_14772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14744 === (6))){
var inst_14722 = (state_14743[(7)]);
var state_14743__$1 = state_14743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14743__$1,(11),to,inst_14722);
} else {
if((state_val_14744 === (3))){
var inst_14741 = (state_14743[(2)]);
var state_14743__$1 = state_14743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14743__$1,inst_14741);
} else {
if((state_val_14744 === (12))){
var state_14743__$1 = state_14743;
var statearr_14751_14773 = state_14743__$1;
(statearr_14751_14773[(2)] = null);

(statearr_14751_14773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14744 === (2))){
var state_14743__$1 = state_14743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14743__$1,(4),from);
} else {
if((state_val_14744 === (11))){
var inst_14732 = (state_14743[(2)]);
var state_14743__$1 = state_14743;
if(cljs.core.truth_(inst_14732)){
var statearr_14752_14774 = state_14743__$1;
(statearr_14752_14774[(1)] = (12));

} else {
var statearr_14753_14775 = state_14743__$1;
(statearr_14753_14775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14744 === (9))){
var state_14743__$1 = state_14743;
var statearr_14754_14776 = state_14743__$1;
(statearr_14754_14776[(2)] = null);

(statearr_14754_14776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14744 === (5))){
var state_14743__$1 = state_14743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14755_14777 = state_14743__$1;
(statearr_14755_14777[(1)] = (8));

} else {
var statearr_14756_14778 = state_14743__$1;
(statearr_14756_14778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14744 === (14))){
var inst_14737 = (state_14743[(2)]);
var state_14743__$1 = state_14743;
var statearr_14757_14779 = state_14743__$1;
(statearr_14757_14779[(2)] = inst_14737);

(statearr_14757_14779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14744 === (10))){
var inst_14729 = (state_14743[(2)]);
var state_14743__$1 = state_14743;
var statearr_14758_14780 = state_14743__$1;
(statearr_14758_14780[(2)] = inst_14729);

(statearr_14758_14780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14744 === (8))){
var inst_14726 = cljs.core.async.close_BANG_.call(null,to);
var state_14743__$1 = state_14743;
var statearr_14759_14781 = state_14743__$1;
(statearr_14759_14781[(2)] = inst_14726);

(statearr_14759_14781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__14527__auto___14767))
;
return ((function (switch__14512__auto__,c__14527__auto___14767){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_14763 = [null,null,null,null,null,null,null,null];
(statearr_14763[(0)] = state_machine__14513__auto__);

(statearr_14763[(1)] = (1));

return statearr_14763;
});
var state_machine__14513__auto____1 = (function (state_14743){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_14743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e14764){if((e14764 instanceof Object)){
var ex__14516__auto__ = e14764;
var statearr_14765_14782 = state_14743;
(statearr_14765_14782[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14783 = state_14743;
state_14743 = G__14783;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_14743){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_14743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___14767))
})();
var state__14529__auto__ = (function (){var statearr_14766 = f__14528__auto__.call(null);
(statearr_14766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___14767);

return statearr_14766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___14767))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14967){
var vec__14968 = p__14967;
var v = cljs.core.nth.call(null,vec__14968,(0),null);
var p = cljs.core.nth.call(null,vec__14968,(1),null);
var job = vec__14968;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14527__auto___15150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___15150,res,vec__14968,v,p,job,jobs,results){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___15150,res,vec__14968,v,p,job,jobs,results){
return (function (state_14973){
var state_val_14974 = (state_14973[(1)]);
if((state_val_14974 === (2))){
var inst_14970 = (state_14973[(2)]);
var inst_14971 = cljs.core.async.close_BANG_.call(null,res);
var state_14973__$1 = (function (){var statearr_14975 = state_14973;
(statearr_14975[(7)] = inst_14970);

return statearr_14975;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14973__$1,inst_14971);
} else {
if((state_val_14974 === (1))){
var state_14973__$1 = state_14973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14973__$1,(2),res,v);
} else {
return null;
}
}
});})(c__14527__auto___15150,res,vec__14968,v,p,job,jobs,results))
;
return ((function (switch__14512__auto__,c__14527__auto___15150,res,vec__14968,v,p,job,jobs,results){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_14979 = [null,null,null,null,null,null,null,null];
(statearr_14979[(0)] = state_machine__14513__auto__);

(statearr_14979[(1)] = (1));

return statearr_14979;
});
var state_machine__14513__auto____1 = (function (state_14973){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_14973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e14980){if((e14980 instanceof Object)){
var ex__14516__auto__ = e14980;
var statearr_14981_15151 = state_14973;
(statearr_14981_15151[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15152 = state_14973;
state_14973 = G__15152;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_14973){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_14973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___15150,res,vec__14968,v,p,job,jobs,results))
})();
var state__14529__auto__ = (function (){var statearr_14982 = f__14528__auto__.call(null);
(statearr_14982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___15150);

return statearr_14982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___15150,res,vec__14968,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14983){
var vec__14984 = p__14983;
var v = cljs.core.nth.call(null,vec__14984,(0),null);
var p = cljs.core.nth.call(null,vec__14984,(1),null);
var job = vec__14984;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__13496__auto___15153 = n;
var __15154 = (0);
while(true){
if((__15154 < n__13496__auto___15153)){
var G__14985_15155 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14985_15155) {
case "async":
var c__14527__auto___15157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15154,c__14527__auto___15157,G__14985_15155,n__13496__auto___15153,jobs,results,process,async){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (__15154,c__14527__auto___15157,G__14985_15155,n__13496__auto___15153,jobs,results,process,async){
return (function (state_14998){
var state_val_14999 = (state_14998[(1)]);
if((state_val_14999 === (7))){
var inst_14994 = (state_14998[(2)]);
var state_14998__$1 = state_14998;
var statearr_15000_15158 = state_14998__$1;
(statearr_15000_15158[(2)] = inst_14994);

(statearr_15000_15158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14999 === (6))){
var state_14998__$1 = state_14998;
var statearr_15001_15159 = state_14998__$1;
(statearr_15001_15159[(2)] = null);

(statearr_15001_15159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14999 === (5))){
var state_14998__$1 = state_14998;
var statearr_15002_15160 = state_14998__$1;
(statearr_15002_15160[(2)] = null);

(statearr_15002_15160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14999 === (4))){
var inst_14988 = (state_14998[(2)]);
var inst_14989 = async.call(null,inst_14988);
var state_14998__$1 = state_14998;
if(cljs.core.truth_(inst_14989)){
var statearr_15003_15161 = state_14998__$1;
(statearr_15003_15161[(1)] = (5));

} else {
var statearr_15004_15162 = state_14998__$1;
(statearr_15004_15162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14999 === (3))){
var inst_14996 = (state_14998[(2)]);
var state_14998__$1 = state_14998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14998__$1,inst_14996);
} else {
if((state_val_14999 === (2))){
var state_14998__$1 = state_14998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14998__$1,(4),jobs);
} else {
if((state_val_14999 === (1))){
var state_14998__$1 = state_14998;
var statearr_15005_15163 = state_14998__$1;
(statearr_15005_15163[(2)] = null);

(statearr_15005_15163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15154,c__14527__auto___15157,G__14985_15155,n__13496__auto___15153,jobs,results,process,async))
;
return ((function (__15154,switch__14512__auto__,c__14527__auto___15157,G__14985_15155,n__13496__auto___15153,jobs,results,process,async){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_15009 = [null,null,null,null,null,null,null];
(statearr_15009[(0)] = state_machine__14513__auto__);

(statearr_15009[(1)] = (1));

return statearr_15009;
});
var state_machine__14513__auto____1 = (function (state_14998){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_14998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e15010){if((e15010 instanceof Object)){
var ex__14516__auto__ = e15010;
var statearr_15011_15164 = state_14998;
(statearr_15011_15164[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15165 = state_14998;
state_14998 = G__15165;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_14998){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_14998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(__15154,switch__14512__auto__,c__14527__auto___15157,G__14985_15155,n__13496__auto___15153,jobs,results,process,async))
})();
var state__14529__auto__ = (function (){var statearr_15012 = f__14528__auto__.call(null);
(statearr_15012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___15157);

return statearr_15012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(__15154,c__14527__auto___15157,G__14985_15155,n__13496__auto___15153,jobs,results,process,async))
);


break;
case "compute":
var c__14527__auto___15166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15154,c__14527__auto___15166,G__14985_15155,n__13496__auto___15153,jobs,results,process,async){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (__15154,c__14527__auto___15166,G__14985_15155,n__13496__auto___15153,jobs,results,process,async){
return (function (state_15025){
var state_val_15026 = (state_15025[(1)]);
if((state_val_15026 === (7))){
var inst_15021 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
var statearr_15027_15167 = state_15025__$1;
(statearr_15027_15167[(2)] = inst_15021);

(statearr_15027_15167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (6))){
var state_15025__$1 = state_15025;
var statearr_15028_15168 = state_15025__$1;
(statearr_15028_15168[(2)] = null);

(statearr_15028_15168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (5))){
var state_15025__$1 = state_15025;
var statearr_15029_15169 = state_15025__$1;
(statearr_15029_15169[(2)] = null);

(statearr_15029_15169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (4))){
var inst_15015 = (state_15025[(2)]);
var inst_15016 = process.call(null,inst_15015);
var state_15025__$1 = state_15025;
if(cljs.core.truth_(inst_15016)){
var statearr_15030_15170 = state_15025__$1;
(statearr_15030_15170[(1)] = (5));

} else {
var statearr_15031_15171 = state_15025__$1;
(statearr_15031_15171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (3))){
var inst_15023 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15025__$1,inst_15023);
} else {
if((state_val_15026 === (2))){
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15025__$1,(4),jobs);
} else {
if((state_val_15026 === (1))){
var state_15025__$1 = state_15025;
var statearr_15032_15172 = state_15025__$1;
(statearr_15032_15172[(2)] = null);

(statearr_15032_15172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15154,c__14527__auto___15166,G__14985_15155,n__13496__auto___15153,jobs,results,process,async))
;
return ((function (__15154,switch__14512__auto__,c__14527__auto___15166,G__14985_15155,n__13496__auto___15153,jobs,results,process,async){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_15036 = [null,null,null,null,null,null,null];
(statearr_15036[(0)] = state_machine__14513__auto__);

(statearr_15036[(1)] = (1));

return statearr_15036;
});
var state_machine__14513__auto____1 = (function (state_15025){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_15025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e15037){if((e15037 instanceof Object)){
var ex__14516__auto__ = e15037;
var statearr_15038_15173 = state_15025;
(statearr_15038_15173[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15174 = state_15025;
state_15025 = G__15174;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_15025){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_15025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(__15154,switch__14512__auto__,c__14527__auto___15166,G__14985_15155,n__13496__auto___15153,jobs,results,process,async))
})();
var state__14529__auto__ = (function (){var statearr_15039 = f__14528__auto__.call(null);
(statearr_15039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___15166);

return statearr_15039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(__15154,c__14527__auto___15166,G__14985_15155,n__13496__auto___15153,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15175 = (__15154 + (1));
__15154 = G__15175;
continue;
} else {
}
break;
}

var c__14527__auto___15176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___15176,jobs,results,process,async){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___15176,jobs,results,process,async){
return (function (state_15061){
var state_val_15062 = (state_15061[(1)]);
if((state_val_15062 === (9))){
var inst_15054 = (state_15061[(2)]);
var state_15061__$1 = (function (){var statearr_15063 = state_15061;
(statearr_15063[(7)] = inst_15054);

return statearr_15063;
})();
var statearr_15064_15177 = state_15061__$1;
(statearr_15064_15177[(2)] = null);

(statearr_15064_15177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15062 === (8))){
var inst_15047 = (state_15061[(8)]);
var inst_15052 = (state_15061[(2)]);
var state_15061__$1 = (function (){var statearr_15065 = state_15061;
(statearr_15065[(9)] = inst_15052);

return statearr_15065;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15061__$1,(9),results,inst_15047);
} else {
if((state_val_15062 === (7))){
var inst_15057 = (state_15061[(2)]);
var state_15061__$1 = state_15061;
var statearr_15066_15178 = state_15061__$1;
(statearr_15066_15178[(2)] = inst_15057);

(statearr_15066_15178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15062 === (6))){
var inst_15047 = (state_15061[(8)]);
var inst_15042 = (state_15061[(10)]);
var inst_15047__$1 = cljs.core.async.chan.call(null,(1));
var inst_15048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15049 = [inst_15042,inst_15047__$1];
var inst_15050 = (new cljs.core.PersistentVector(null,2,(5),inst_15048,inst_15049,null));
var state_15061__$1 = (function (){var statearr_15067 = state_15061;
(statearr_15067[(8)] = inst_15047__$1);

return statearr_15067;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15061__$1,(8),jobs,inst_15050);
} else {
if((state_val_15062 === (5))){
var inst_15045 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15061__$1 = state_15061;
var statearr_15068_15179 = state_15061__$1;
(statearr_15068_15179[(2)] = inst_15045);

(statearr_15068_15179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15062 === (4))){
var inst_15042 = (state_15061[(10)]);
var inst_15042__$1 = (state_15061[(2)]);
var inst_15043 = (inst_15042__$1 == null);
var state_15061__$1 = (function (){var statearr_15069 = state_15061;
(statearr_15069[(10)] = inst_15042__$1);

return statearr_15069;
})();
if(cljs.core.truth_(inst_15043)){
var statearr_15070_15180 = state_15061__$1;
(statearr_15070_15180[(1)] = (5));

} else {
var statearr_15071_15181 = state_15061__$1;
(statearr_15071_15181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15062 === (3))){
var inst_15059 = (state_15061[(2)]);
var state_15061__$1 = state_15061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15061__$1,inst_15059);
} else {
if((state_val_15062 === (2))){
var state_15061__$1 = state_15061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15061__$1,(4),from);
} else {
if((state_val_15062 === (1))){
var state_15061__$1 = state_15061;
var statearr_15072_15182 = state_15061__$1;
(statearr_15072_15182[(2)] = null);

(statearr_15072_15182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__14527__auto___15176,jobs,results,process,async))
;
return ((function (switch__14512__auto__,c__14527__auto___15176,jobs,results,process,async){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_15076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15076[(0)] = state_machine__14513__auto__);

(statearr_15076[(1)] = (1));

return statearr_15076;
});
var state_machine__14513__auto____1 = (function (state_15061){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_15061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e15077){if((e15077 instanceof Object)){
var ex__14516__auto__ = e15077;
var statearr_15078_15183 = state_15061;
(statearr_15078_15183[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15184 = state_15061;
state_15061 = G__15184;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_15061){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_15061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___15176,jobs,results,process,async))
})();
var state__14529__auto__ = (function (){var statearr_15079 = f__14528__auto__.call(null);
(statearr_15079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___15176);

return statearr_15079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___15176,jobs,results,process,async))
);


var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__,jobs,results,process,async){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__,jobs,results,process,async){
return (function (state_15117){
var state_val_15118 = (state_15117[(1)]);
if((state_val_15118 === (7))){
var inst_15113 = (state_15117[(2)]);
var state_15117__$1 = state_15117;
var statearr_15119_15185 = state_15117__$1;
(statearr_15119_15185[(2)] = inst_15113);

(statearr_15119_15185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (20))){
var state_15117__$1 = state_15117;
var statearr_15120_15186 = state_15117__$1;
(statearr_15120_15186[(2)] = null);

(statearr_15120_15186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (1))){
var state_15117__$1 = state_15117;
var statearr_15121_15187 = state_15117__$1;
(statearr_15121_15187[(2)] = null);

(statearr_15121_15187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (4))){
var inst_15082 = (state_15117[(7)]);
var inst_15082__$1 = (state_15117[(2)]);
var inst_15083 = (inst_15082__$1 == null);
var state_15117__$1 = (function (){var statearr_15122 = state_15117;
(statearr_15122[(7)] = inst_15082__$1);

return statearr_15122;
})();
if(cljs.core.truth_(inst_15083)){
var statearr_15123_15188 = state_15117__$1;
(statearr_15123_15188[(1)] = (5));

} else {
var statearr_15124_15189 = state_15117__$1;
(statearr_15124_15189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (15))){
var inst_15095 = (state_15117[(8)]);
var state_15117__$1 = state_15117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15117__$1,(18),to,inst_15095);
} else {
if((state_val_15118 === (21))){
var inst_15108 = (state_15117[(2)]);
var state_15117__$1 = state_15117;
var statearr_15125_15190 = state_15117__$1;
(statearr_15125_15190[(2)] = inst_15108);

(statearr_15125_15190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (13))){
var inst_15110 = (state_15117[(2)]);
var state_15117__$1 = (function (){var statearr_15126 = state_15117;
(statearr_15126[(9)] = inst_15110);

return statearr_15126;
})();
var statearr_15127_15191 = state_15117__$1;
(statearr_15127_15191[(2)] = null);

(statearr_15127_15191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (6))){
var inst_15082 = (state_15117[(7)]);
var state_15117__$1 = state_15117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15117__$1,(11),inst_15082);
} else {
if((state_val_15118 === (17))){
var inst_15103 = (state_15117[(2)]);
var state_15117__$1 = state_15117;
if(cljs.core.truth_(inst_15103)){
var statearr_15128_15192 = state_15117__$1;
(statearr_15128_15192[(1)] = (19));

} else {
var statearr_15129_15193 = state_15117__$1;
(statearr_15129_15193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (3))){
var inst_15115 = (state_15117[(2)]);
var state_15117__$1 = state_15117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15117__$1,inst_15115);
} else {
if((state_val_15118 === (12))){
var inst_15092 = (state_15117[(10)]);
var state_15117__$1 = state_15117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15117__$1,(14),inst_15092);
} else {
if((state_val_15118 === (2))){
var state_15117__$1 = state_15117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15117__$1,(4),results);
} else {
if((state_val_15118 === (19))){
var state_15117__$1 = state_15117;
var statearr_15130_15194 = state_15117__$1;
(statearr_15130_15194[(2)] = null);

(statearr_15130_15194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (11))){
var inst_15092 = (state_15117[(2)]);
var state_15117__$1 = (function (){var statearr_15131 = state_15117;
(statearr_15131[(10)] = inst_15092);

return statearr_15131;
})();
var statearr_15132_15195 = state_15117__$1;
(statearr_15132_15195[(2)] = null);

(statearr_15132_15195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (9))){
var state_15117__$1 = state_15117;
var statearr_15133_15196 = state_15117__$1;
(statearr_15133_15196[(2)] = null);

(statearr_15133_15196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (5))){
var state_15117__$1 = state_15117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15134_15197 = state_15117__$1;
(statearr_15134_15197[(1)] = (8));

} else {
var statearr_15135_15198 = state_15117__$1;
(statearr_15135_15198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (14))){
var inst_15095 = (state_15117[(8)]);
var inst_15097 = (state_15117[(11)]);
var inst_15095__$1 = (state_15117[(2)]);
var inst_15096 = (inst_15095__$1 == null);
var inst_15097__$1 = cljs.core.not.call(null,inst_15096);
var state_15117__$1 = (function (){var statearr_15136 = state_15117;
(statearr_15136[(8)] = inst_15095__$1);

(statearr_15136[(11)] = inst_15097__$1);

return statearr_15136;
})();
if(inst_15097__$1){
var statearr_15137_15199 = state_15117__$1;
(statearr_15137_15199[(1)] = (15));

} else {
var statearr_15138_15200 = state_15117__$1;
(statearr_15138_15200[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (16))){
var inst_15097 = (state_15117[(11)]);
var state_15117__$1 = state_15117;
var statearr_15139_15201 = state_15117__$1;
(statearr_15139_15201[(2)] = inst_15097);

(statearr_15139_15201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (10))){
var inst_15089 = (state_15117[(2)]);
var state_15117__$1 = state_15117;
var statearr_15140_15202 = state_15117__$1;
(statearr_15140_15202[(2)] = inst_15089);

(statearr_15140_15202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (18))){
var inst_15100 = (state_15117[(2)]);
var state_15117__$1 = state_15117;
var statearr_15141_15203 = state_15117__$1;
(statearr_15141_15203[(2)] = inst_15100);

(statearr_15141_15203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (8))){
var inst_15086 = cljs.core.async.close_BANG_.call(null,to);
var state_15117__$1 = state_15117;
var statearr_15142_15204 = state_15117__$1;
(statearr_15142_15204[(2)] = inst_15086);

(statearr_15142_15204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14527__auto__,jobs,results,process,async))
;
return ((function (switch__14512__auto__,c__14527__auto__,jobs,results,process,async){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_15146 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15146[(0)] = state_machine__14513__auto__);

(statearr_15146[(1)] = (1));

return statearr_15146;
});
var state_machine__14513__auto____1 = (function (state_15117){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_15117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e15147){if((e15147 instanceof Object)){
var ex__14516__auto__ = e15147;
var statearr_15148_15205 = state_15117;
(statearr_15148_15205[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15206 = state_15117;
state_15117 = G__15206;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_15117){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_15117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__,jobs,results,process,async))
})();
var state__14529__auto__ = (function (){var statearr_15149 = f__14528__auto__.call(null);
(statearr_15149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_15149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__,jobs,results,process,async))
);

return c__14527__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__14527__auto___15307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___15307,tc,fc){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___15307,tc,fc){
return (function (state_15282){
var state_val_15283 = (state_15282[(1)]);
if((state_val_15283 === (7))){
var inst_15278 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15284_15308 = state_15282__$1;
(statearr_15284_15308[(2)] = inst_15278);

(statearr_15284_15308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (1))){
var state_15282__$1 = state_15282;
var statearr_15285_15309 = state_15282__$1;
(statearr_15285_15309[(2)] = null);

(statearr_15285_15309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (4))){
var inst_15259 = (state_15282[(7)]);
var inst_15259__$1 = (state_15282[(2)]);
var inst_15260 = (inst_15259__$1 == null);
var state_15282__$1 = (function (){var statearr_15286 = state_15282;
(statearr_15286[(7)] = inst_15259__$1);

return statearr_15286;
})();
if(cljs.core.truth_(inst_15260)){
var statearr_15287_15310 = state_15282__$1;
(statearr_15287_15310[(1)] = (5));

} else {
var statearr_15288_15311 = state_15282__$1;
(statearr_15288_15311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (13))){
var state_15282__$1 = state_15282;
var statearr_15289_15312 = state_15282__$1;
(statearr_15289_15312[(2)] = null);

(statearr_15289_15312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (6))){
var inst_15259 = (state_15282[(7)]);
var inst_15265 = p.call(null,inst_15259);
var state_15282__$1 = state_15282;
if(cljs.core.truth_(inst_15265)){
var statearr_15290_15313 = state_15282__$1;
(statearr_15290_15313[(1)] = (9));

} else {
var statearr_15291_15314 = state_15282__$1;
(statearr_15291_15314[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (3))){
var inst_15280 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15282__$1,inst_15280);
} else {
if((state_val_15283 === (12))){
var state_15282__$1 = state_15282;
var statearr_15292_15315 = state_15282__$1;
(statearr_15292_15315[(2)] = null);

(statearr_15292_15315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (2))){
var state_15282__$1 = state_15282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15282__$1,(4),ch);
} else {
if((state_val_15283 === (11))){
var inst_15259 = (state_15282[(7)]);
var inst_15269 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15282__$1,(8),inst_15269,inst_15259);
} else {
if((state_val_15283 === (9))){
var state_15282__$1 = state_15282;
var statearr_15293_15316 = state_15282__$1;
(statearr_15293_15316[(2)] = tc);

(statearr_15293_15316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (5))){
var inst_15262 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15263 = cljs.core.async.close_BANG_.call(null,fc);
var state_15282__$1 = (function (){var statearr_15294 = state_15282;
(statearr_15294[(8)] = inst_15262);

return statearr_15294;
})();
var statearr_15295_15317 = state_15282__$1;
(statearr_15295_15317[(2)] = inst_15263);

(statearr_15295_15317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (14))){
var inst_15276 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15296_15318 = state_15282__$1;
(statearr_15296_15318[(2)] = inst_15276);

(statearr_15296_15318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (10))){
var state_15282__$1 = state_15282;
var statearr_15297_15319 = state_15282__$1;
(statearr_15297_15319[(2)] = fc);

(statearr_15297_15319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (8))){
var inst_15271 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
if(cljs.core.truth_(inst_15271)){
var statearr_15298_15320 = state_15282__$1;
(statearr_15298_15320[(1)] = (12));

} else {
var statearr_15299_15321 = state_15282__$1;
(statearr_15299_15321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__14527__auto___15307,tc,fc))
;
return ((function (switch__14512__auto__,c__14527__auto___15307,tc,fc){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_15303 = [null,null,null,null,null,null,null,null,null];
(statearr_15303[(0)] = state_machine__14513__auto__);

(statearr_15303[(1)] = (1));

return statearr_15303;
});
var state_machine__14513__auto____1 = (function (state_15282){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_15282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e15304){if((e15304 instanceof Object)){
var ex__14516__auto__ = e15304;
var statearr_15305_15322 = state_15282;
(statearr_15305_15322[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15323 = state_15282;
state_15282 = G__15323;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_15282){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_15282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___15307,tc,fc))
})();
var state__14529__auto__ = (function (){var statearr_15306 = f__14528__auto__.call(null);
(statearr_15306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___15307);

return statearr_15306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___15307,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__){
return (function (state_15370){
var state_val_15371 = (state_15370[(1)]);
if((state_val_15371 === (7))){
var inst_15366 = (state_15370[(2)]);
var state_15370__$1 = state_15370;
var statearr_15372_15388 = state_15370__$1;
(statearr_15372_15388[(2)] = inst_15366);

(statearr_15372_15388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15371 === (6))){
var inst_15356 = (state_15370[(7)]);
var inst_15359 = (state_15370[(8)]);
var inst_15363 = f.call(null,inst_15356,inst_15359);
var inst_15356__$1 = inst_15363;
var state_15370__$1 = (function (){var statearr_15373 = state_15370;
(statearr_15373[(7)] = inst_15356__$1);

return statearr_15373;
})();
var statearr_15374_15389 = state_15370__$1;
(statearr_15374_15389[(2)] = null);

(statearr_15374_15389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15371 === (5))){
var inst_15356 = (state_15370[(7)]);
var state_15370__$1 = state_15370;
var statearr_15375_15390 = state_15370__$1;
(statearr_15375_15390[(2)] = inst_15356);

(statearr_15375_15390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15371 === (4))){
var inst_15359 = (state_15370[(8)]);
var inst_15359__$1 = (state_15370[(2)]);
var inst_15360 = (inst_15359__$1 == null);
var state_15370__$1 = (function (){var statearr_15376 = state_15370;
(statearr_15376[(8)] = inst_15359__$1);

return statearr_15376;
})();
if(cljs.core.truth_(inst_15360)){
var statearr_15377_15391 = state_15370__$1;
(statearr_15377_15391[(1)] = (5));

} else {
var statearr_15378_15392 = state_15370__$1;
(statearr_15378_15392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15371 === (3))){
var inst_15368 = (state_15370[(2)]);
var state_15370__$1 = state_15370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15370__$1,inst_15368);
} else {
if((state_val_15371 === (2))){
var state_15370__$1 = state_15370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15370__$1,(4),ch);
} else {
if((state_val_15371 === (1))){
var inst_15356 = init;
var state_15370__$1 = (function (){var statearr_15379 = state_15370;
(statearr_15379[(7)] = inst_15356);

return statearr_15379;
})();
var statearr_15380_15393 = state_15370__$1;
(statearr_15380_15393[(2)] = null);

(statearr_15380_15393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
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
var statearr_15384 = [null,null,null,null,null,null,null,null,null];
(statearr_15384[(0)] = state_machine__14513__auto__);

(statearr_15384[(1)] = (1));

return statearr_15384;
});
var state_machine__14513__auto____1 = (function (state_15370){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_15370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e15385){if((e15385 instanceof Object)){
var ex__14516__auto__ = e15385;
var statearr_15386_15394 = state_15370;
(statearr_15386_15394[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15395 = state_15370;
state_15370 = G__15395;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_15370){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_15370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_15387 = f__14528__auto__.call(null);
(statearr_15387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_15387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__){
return (function (state_15469){
var state_val_15470 = (state_15469[(1)]);
if((state_val_15470 === (7))){
var inst_15451 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15471_15494 = state_15469__$1;
(statearr_15471_15494[(2)] = inst_15451);

(statearr_15471_15494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (1))){
var inst_15445 = cljs.core.seq.call(null,coll);
var inst_15446 = inst_15445;
var state_15469__$1 = (function (){var statearr_15472 = state_15469;
(statearr_15472[(7)] = inst_15446);

return statearr_15472;
})();
var statearr_15473_15495 = state_15469__$1;
(statearr_15473_15495[(2)] = null);

(statearr_15473_15495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (4))){
var inst_15446 = (state_15469[(7)]);
var inst_15449 = cljs.core.first.call(null,inst_15446);
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15469__$1,(7),ch,inst_15449);
} else {
if((state_val_15470 === (13))){
var inst_15463 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15474_15496 = state_15469__$1;
(statearr_15474_15496[(2)] = inst_15463);

(statearr_15474_15496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (6))){
var inst_15454 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
if(cljs.core.truth_(inst_15454)){
var statearr_15475_15497 = state_15469__$1;
(statearr_15475_15497[(1)] = (8));

} else {
var statearr_15476_15498 = state_15469__$1;
(statearr_15476_15498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (3))){
var inst_15467 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15469__$1,inst_15467);
} else {
if((state_val_15470 === (12))){
var state_15469__$1 = state_15469;
var statearr_15477_15499 = state_15469__$1;
(statearr_15477_15499[(2)] = null);

(statearr_15477_15499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (2))){
var inst_15446 = (state_15469[(7)]);
var state_15469__$1 = state_15469;
if(cljs.core.truth_(inst_15446)){
var statearr_15478_15500 = state_15469__$1;
(statearr_15478_15500[(1)] = (4));

} else {
var statearr_15479_15501 = state_15469__$1;
(statearr_15479_15501[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (11))){
var inst_15460 = cljs.core.async.close_BANG_.call(null,ch);
var state_15469__$1 = state_15469;
var statearr_15480_15502 = state_15469__$1;
(statearr_15480_15502[(2)] = inst_15460);

(statearr_15480_15502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (9))){
var state_15469__$1 = state_15469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15481_15503 = state_15469__$1;
(statearr_15481_15503[(1)] = (11));

} else {
var statearr_15482_15504 = state_15469__$1;
(statearr_15482_15504[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (5))){
var inst_15446 = (state_15469[(7)]);
var state_15469__$1 = state_15469;
var statearr_15483_15505 = state_15469__$1;
(statearr_15483_15505[(2)] = inst_15446);

(statearr_15483_15505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (10))){
var inst_15465 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15484_15506 = state_15469__$1;
(statearr_15484_15506[(2)] = inst_15465);

(statearr_15484_15506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (8))){
var inst_15446 = (state_15469[(7)]);
var inst_15456 = cljs.core.next.call(null,inst_15446);
var inst_15446__$1 = inst_15456;
var state_15469__$1 = (function (){var statearr_15485 = state_15469;
(statearr_15485[(7)] = inst_15446__$1);

return statearr_15485;
})();
var statearr_15486_15507 = state_15469__$1;
(statearr_15486_15507[(2)] = null);

(statearr_15486_15507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
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
var statearr_15490 = [null,null,null,null,null,null,null,null];
(statearr_15490[(0)] = state_machine__14513__auto__);

(statearr_15490[(1)] = (1));

return statearr_15490;
});
var state_machine__14513__auto____1 = (function (state_15469){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_15469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e15491){if((e15491 instanceof Object)){
var ex__14516__auto__ = e15491;
var statearr_15492_15508 = state_15469;
(statearr_15492_15508[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15509 = state_15469;
state_15469 = G__15509;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_15469){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_15469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_15493 = f__14528__auto__.call(null);
(statearr_15493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_15493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj15511 = {};
return obj15511;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12595__auto__ = _;
if(and__12595__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12595__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13253__auto__ = (((_ == null))?null:_);
return (function (){var or__12607__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj15513 = {};
return obj15513;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12595__auto__ = m;
if(and__12595__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12595__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13253__auto__ = (((m == null))?null:m);
return (function (){var or__12607__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12595__auto__ = m;
if(and__12595__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12595__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13253__auto__ = (((m == null))?null:m);
return (function (){var or__12607__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12595__auto__ = m;
if(and__12595__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12595__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13253__auto__ = (((m == null))?null:m);
return (function (){var or__12607__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t15735 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15735 = (function (cs,ch,mult,meta15736){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15736 = meta15736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15735.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t15735.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t15735.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t15735.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t15735.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t15735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15737){
var self__ = this;
var _15737__$1 = this;
return self__.meta15736;
});})(cs))
;

cljs.core.async.t15735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15737,meta15736__$1){
var self__ = this;
var _15737__$1 = this;
return (new cljs.core.async.t15735(self__.cs,self__.ch,self__.mult,meta15736__$1));
});})(cs))
;

cljs.core.async.t15735.cljs$lang$type = true;

cljs.core.async.t15735.cljs$lang$ctorStr = "cljs.core.async/t15735";

cljs.core.async.t15735.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13196__auto__,writer__13197__auto__,opt__13198__auto__){
return cljs.core._write.call(null,writer__13197__auto__,"cljs.core.async/t15735");
});})(cs))
;

cljs.core.async.__GT_t15735 = ((function (cs){
return (function __GT_t15735(cs__$1,ch__$1,mult__$1,meta15736){
return (new cljs.core.async.t15735(cs__$1,ch__$1,mult__$1,meta15736));
});})(cs))
;

}

return (new cljs.core.async.t15735(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/.repl/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14527__auto___15956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___15956,cs,m,dchan,dctr,done){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___15956,cs,m,dchan,dctr,done){
return (function (state_15868){
var state_val_15869 = (state_15868[(1)]);
if((state_val_15869 === (7))){
var inst_15864 = (state_15868[(2)]);
var state_15868__$1 = state_15868;
var statearr_15870_15957 = state_15868__$1;
(statearr_15870_15957[(2)] = inst_15864);

(statearr_15870_15957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (20))){
var inst_15769 = (state_15868[(7)]);
var inst_15779 = cljs.core.first.call(null,inst_15769);
var inst_15780 = cljs.core.nth.call(null,inst_15779,(0),null);
var inst_15781 = cljs.core.nth.call(null,inst_15779,(1),null);
var state_15868__$1 = (function (){var statearr_15871 = state_15868;
(statearr_15871[(8)] = inst_15780);

return statearr_15871;
})();
if(cljs.core.truth_(inst_15781)){
var statearr_15872_15958 = state_15868__$1;
(statearr_15872_15958[(1)] = (22));

} else {
var statearr_15873_15959 = state_15868__$1;
(statearr_15873_15959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (27))){
var inst_15816 = (state_15868[(9)]);
var inst_15809 = (state_15868[(10)]);
var inst_15740 = (state_15868[(11)]);
var inst_15811 = (state_15868[(12)]);
var inst_15816__$1 = cljs.core._nth.call(null,inst_15809,inst_15811);
var inst_15817 = cljs.core.async.put_BANG_.call(null,inst_15816__$1,inst_15740,done);
var state_15868__$1 = (function (){var statearr_15874 = state_15868;
(statearr_15874[(9)] = inst_15816__$1);

return statearr_15874;
})();
if(cljs.core.truth_(inst_15817)){
var statearr_15875_15960 = state_15868__$1;
(statearr_15875_15960[(1)] = (30));

} else {
var statearr_15876_15961 = state_15868__$1;
(statearr_15876_15961[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (1))){
var state_15868__$1 = state_15868;
var statearr_15877_15962 = state_15868__$1;
(statearr_15877_15962[(2)] = null);

(statearr_15877_15962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (24))){
var inst_15769 = (state_15868[(7)]);
var inst_15786 = (state_15868[(2)]);
var inst_15787 = cljs.core.next.call(null,inst_15769);
var inst_15749 = inst_15787;
var inst_15750 = null;
var inst_15751 = (0);
var inst_15752 = (0);
var state_15868__$1 = (function (){var statearr_15878 = state_15868;
(statearr_15878[(13)] = inst_15752);

(statearr_15878[(14)] = inst_15750);

(statearr_15878[(15)] = inst_15786);

(statearr_15878[(16)] = inst_15749);

(statearr_15878[(17)] = inst_15751);

return statearr_15878;
})();
var statearr_15879_15963 = state_15868__$1;
(statearr_15879_15963[(2)] = null);

(statearr_15879_15963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (39))){
var state_15868__$1 = state_15868;
var statearr_15883_15964 = state_15868__$1;
(statearr_15883_15964[(2)] = null);

(statearr_15883_15964[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (4))){
var inst_15740 = (state_15868[(11)]);
var inst_15740__$1 = (state_15868[(2)]);
var inst_15741 = (inst_15740__$1 == null);
var state_15868__$1 = (function (){var statearr_15884 = state_15868;
(statearr_15884[(11)] = inst_15740__$1);

return statearr_15884;
})();
if(cljs.core.truth_(inst_15741)){
var statearr_15885_15965 = state_15868__$1;
(statearr_15885_15965[(1)] = (5));

} else {
var statearr_15886_15966 = state_15868__$1;
(statearr_15886_15966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (15))){
var inst_15752 = (state_15868[(13)]);
var inst_15750 = (state_15868[(14)]);
var inst_15749 = (state_15868[(16)]);
var inst_15751 = (state_15868[(17)]);
var inst_15765 = (state_15868[(2)]);
var inst_15766 = (inst_15752 + (1));
var tmp15880 = inst_15750;
var tmp15881 = inst_15749;
var tmp15882 = inst_15751;
var inst_15749__$1 = tmp15881;
var inst_15750__$1 = tmp15880;
var inst_15751__$1 = tmp15882;
var inst_15752__$1 = inst_15766;
var state_15868__$1 = (function (){var statearr_15887 = state_15868;
(statearr_15887[(13)] = inst_15752__$1);

(statearr_15887[(18)] = inst_15765);

(statearr_15887[(14)] = inst_15750__$1);

(statearr_15887[(16)] = inst_15749__$1);

(statearr_15887[(17)] = inst_15751__$1);

return statearr_15887;
})();
var statearr_15888_15967 = state_15868__$1;
(statearr_15888_15967[(2)] = null);

(statearr_15888_15967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (21))){
var inst_15790 = (state_15868[(2)]);
var state_15868__$1 = state_15868;
var statearr_15892_15968 = state_15868__$1;
(statearr_15892_15968[(2)] = inst_15790);

(statearr_15892_15968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (31))){
var inst_15816 = (state_15868[(9)]);
var inst_15820 = done.call(null,null);
var inst_15821 = cljs.core.async.untap_STAR_.call(null,m,inst_15816);
var state_15868__$1 = (function (){var statearr_15893 = state_15868;
(statearr_15893[(19)] = inst_15820);

return statearr_15893;
})();
var statearr_15894_15969 = state_15868__$1;
(statearr_15894_15969[(2)] = inst_15821);

(statearr_15894_15969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (32))){
var inst_15809 = (state_15868[(10)]);
var inst_15810 = (state_15868[(20)]);
var inst_15811 = (state_15868[(12)]);
var inst_15808 = (state_15868[(21)]);
var inst_15823 = (state_15868[(2)]);
var inst_15824 = (inst_15811 + (1));
var tmp15889 = inst_15809;
var tmp15890 = inst_15810;
var tmp15891 = inst_15808;
var inst_15808__$1 = tmp15891;
var inst_15809__$1 = tmp15889;
var inst_15810__$1 = tmp15890;
var inst_15811__$1 = inst_15824;
var state_15868__$1 = (function (){var statearr_15895 = state_15868;
(statearr_15895[(10)] = inst_15809__$1);

(statearr_15895[(20)] = inst_15810__$1);

(statearr_15895[(22)] = inst_15823);

(statearr_15895[(12)] = inst_15811__$1);

(statearr_15895[(21)] = inst_15808__$1);

return statearr_15895;
})();
var statearr_15896_15970 = state_15868__$1;
(statearr_15896_15970[(2)] = null);

(statearr_15896_15970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (40))){
var inst_15836 = (state_15868[(23)]);
var inst_15840 = done.call(null,null);
var inst_15841 = cljs.core.async.untap_STAR_.call(null,m,inst_15836);
var state_15868__$1 = (function (){var statearr_15897 = state_15868;
(statearr_15897[(24)] = inst_15840);

return statearr_15897;
})();
var statearr_15898_15971 = state_15868__$1;
(statearr_15898_15971[(2)] = inst_15841);

(statearr_15898_15971[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (33))){
var inst_15827 = (state_15868[(25)]);
var inst_15829 = cljs.core.chunked_seq_QMARK_.call(null,inst_15827);
var state_15868__$1 = state_15868;
if(inst_15829){
var statearr_15899_15972 = state_15868__$1;
(statearr_15899_15972[(1)] = (36));

} else {
var statearr_15900_15973 = state_15868__$1;
(statearr_15900_15973[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (13))){
var inst_15759 = (state_15868[(26)]);
var inst_15762 = cljs.core.async.close_BANG_.call(null,inst_15759);
var state_15868__$1 = state_15868;
var statearr_15901_15974 = state_15868__$1;
(statearr_15901_15974[(2)] = inst_15762);

(statearr_15901_15974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (22))){
var inst_15780 = (state_15868[(8)]);
var inst_15783 = cljs.core.async.close_BANG_.call(null,inst_15780);
var state_15868__$1 = state_15868;
var statearr_15902_15975 = state_15868__$1;
(statearr_15902_15975[(2)] = inst_15783);

(statearr_15902_15975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (36))){
var inst_15827 = (state_15868[(25)]);
var inst_15831 = cljs.core.chunk_first.call(null,inst_15827);
var inst_15832 = cljs.core.chunk_rest.call(null,inst_15827);
var inst_15833 = cljs.core.count.call(null,inst_15831);
var inst_15808 = inst_15832;
var inst_15809 = inst_15831;
var inst_15810 = inst_15833;
var inst_15811 = (0);
var state_15868__$1 = (function (){var statearr_15903 = state_15868;
(statearr_15903[(10)] = inst_15809);

(statearr_15903[(20)] = inst_15810);

(statearr_15903[(12)] = inst_15811);

(statearr_15903[(21)] = inst_15808);

return statearr_15903;
})();
var statearr_15904_15976 = state_15868__$1;
(statearr_15904_15976[(2)] = null);

(statearr_15904_15976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (41))){
var inst_15827 = (state_15868[(25)]);
var inst_15843 = (state_15868[(2)]);
var inst_15844 = cljs.core.next.call(null,inst_15827);
var inst_15808 = inst_15844;
var inst_15809 = null;
var inst_15810 = (0);
var inst_15811 = (0);
var state_15868__$1 = (function (){var statearr_15905 = state_15868;
(statearr_15905[(10)] = inst_15809);

(statearr_15905[(20)] = inst_15810);

(statearr_15905[(27)] = inst_15843);

(statearr_15905[(12)] = inst_15811);

(statearr_15905[(21)] = inst_15808);

return statearr_15905;
})();
var statearr_15906_15977 = state_15868__$1;
(statearr_15906_15977[(2)] = null);

(statearr_15906_15977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (43))){
var state_15868__$1 = state_15868;
var statearr_15907_15978 = state_15868__$1;
(statearr_15907_15978[(2)] = null);

(statearr_15907_15978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (29))){
var inst_15852 = (state_15868[(2)]);
var state_15868__$1 = state_15868;
var statearr_15908_15979 = state_15868__$1;
(statearr_15908_15979[(2)] = inst_15852);

(statearr_15908_15979[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (44))){
var inst_15861 = (state_15868[(2)]);
var state_15868__$1 = (function (){var statearr_15909 = state_15868;
(statearr_15909[(28)] = inst_15861);

return statearr_15909;
})();
var statearr_15910_15980 = state_15868__$1;
(statearr_15910_15980[(2)] = null);

(statearr_15910_15980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (6))){
var inst_15800 = (state_15868[(29)]);
var inst_15799 = cljs.core.deref.call(null,cs);
var inst_15800__$1 = cljs.core.keys.call(null,inst_15799);
var inst_15801 = cljs.core.count.call(null,inst_15800__$1);
var inst_15802 = cljs.core.reset_BANG_.call(null,dctr,inst_15801);
var inst_15807 = cljs.core.seq.call(null,inst_15800__$1);
var inst_15808 = inst_15807;
var inst_15809 = null;
var inst_15810 = (0);
var inst_15811 = (0);
var state_15868__$1 = (function (){var statearr_15911 = state_15868;
(statearr_15911[(29)] = inst_15800__$1);

(statearr_15911[(10)] = inst_15809);

(statearr_15911[(20)] = inst_15810);

(statearr_15911[(12)] = inst_15811);

(statearr_15911[(21)] = inst_15808);

(statearr_15911[(30)] = inst_15802);

return statearr_15911;
})();
var statearr_15912_15981 = state_15868__$1;
(statearr_15912_15981[(2)] = null);

(statearr_15912_15981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (28))){
var inst_15827 = (state_15868[(25)]);
var inst_15808 = (state_15868[(21)]);
var inst_15827__$1 = cljs.core.seq.call(null,inst_15808);
var state_15868__$1 = (function (){var statearr_15913 = state_15868;
(statearr_15913[(25)] = inst_15827__$1);

return statearr_15913;
})();
if(inst_15827__$1){
var statearr_15914_15982 = state_15868__$1;
(statearr_15914_15982[(1)] = (33));

} else {
var statearr_15915_15983 = state_15868__$1;
(statearr_15915_15983[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (25))){
var inst_15810 = (state_15868[(20)]);
var inst_15811 = (state_15868[(12)]);
var inst_15813 = (inst_15811 < inst_15810);
var inst_15814 = inst_15813;
var state_15868__$1 = state_15868;
if(cljs.core.truth_(inst_15814)){
var statearr_15916_15984 = state_15868__$1;
(statearr_15916_15984[(1)] = (27));

} else {
var statearr_15917_15985 = state_15868__$1;
(statearr_15917_15985[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (34))){
var state_15868__$1 = state_15868;
var statearr_15918_15986 = state_15868__$1;
(statearr_15918_15986[(2)] = null);

(statearr_15918_15986[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (17))){
var state_15868__$1 = state_15868;
var statearr_15919_15987 = state_15868__$1;
(statearr_15919_15987[(2)] = null);

(statearr_15919_15987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (3))){
var inst_15866 = (state_15868[(2)]);
var state_15868__$1 = state_15868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15868__$1,inst_15866);
} else {
if((state_val_15869 === (12))){
var inst_15795 = (state_15868[(2)]);
var state_15868__$1 = state_15868;
var statearr_15920_15988 = state_15868__$1;
(statearr_15920_15988[(2)] = inst_15795);

(statearr_15920_15988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (2))){
var state_15868__$1 = state_15868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15868__$1,(4),ch);
} else {
if((state_val_15869 === (23))){
var state_15868__$1 = state_15868;
var statearr_15921_15989 = state_15868__$1;
(statearr_15921_15989[(2)] = null);

(statearr_15921_15989[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (35))){
var inst_15850 = (state_15868[(2)]);
var state_15868__$1 = state_15868;
var statearr_15922_15990 = state_15868__$1;
(statearr_15922_15990[(2)] = inst_15850);

(statearr_15922_15990[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (19))){
var inst_15769 = (state_15868[(7)]);
var inst_15773 = cljs.core.chunk_first.call(null,inst_15769);
var inst_15774 = cljs.core.chunk_rest.call(null,inst_15769);
var inst_15775 = cljs.core.count.call(null,inst_15773);
var inst_15749 = inst_15774;
var inst_15750 = inst_15773;
var inst_15751 = inst_15775;
var inst_15752 = (0);
var state_15868__$1 = (function (){var statearr_15923 = state_15868;
(statearr_15923[(13)] = inst_15752);

(statearr_15923[(14)] = inst_15750);

(statearr_15923[(16)] = inst_15749);

(statearr_15923[(17)] = inst_15751);

return statearr_15923;
})();
var statearr_15924_15991 = state_15868__$1;
(statearr_15924_15991[(2)] = null);

(statearr_15924_15991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (11))){
var inst_15749 = (state_15868[(16)]);
var inst_15769 = (state_15868[(7)]);
var inst_15769__$1 = cljs.core.seq.call(null,inst_15749);
var state_15868__$1 = (function (){var statearr_15925 = state_15868;
(statearr_15925[(7)] = inst_15769__$1);

return statearr_15925;
})();
if(inst_15769__$1){
var statearr_15926_15992 = state_15868__$1;
(statearr_15926_15992[(1)] = (16));

} else {
var statearr_15927_15993 = state_15868__$1;
(statearr_15927_15993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (9))){
var inst_15797 = (state_15868[(2)]);
var state_15868__$1 = state_15868;
var statearr_15928_15994 = state_15868__$1;
(statearr_15928_15994[(2)] = inst_15797);

(statearr_15928_15994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (5))){
var inst_15747 = cljs.core.deref.call(null,cs);
var inst_15748 = cljs.core.seq.call(null,inst_15747);
var inst_15749 = inst_15748;
var inst_15750 = null;
var inst_15751 = (0);
var inst_15752 = (0);
var state_15868__$1 = (function (){var statearr_15929 = state_15868;
(statearr_15929[(13)] = inst_15752);

(statearr_15929[(14)] = inst_15750);

(statearr_15929[(16)] = inst_15749);

(statearr_15929[(17)] = inst_15751);

return statearr_15929;
})();
var statearr_15930_15995 = state_15868__$1;
(statearr_15930_15995[(2)] = null);

(statearr_15930_15995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (14))){
var state_15868__$1 = state_15868;
var statearr_15931_15996 = state_15868__$1;
(statearr_15931_15996[(2)] = null);

(statearr_15931_15996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (45))){
var inst_15858 = (state_15868[(2)]);
var state_15868__$1 = state_15868;
var statearr_15932_15997 = state_15868__$1;
(statearr_15932_15997[(2)] = inst_15858);

(statearr_15932_15997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (26))){
var inst_15800 = (state_15868[(29)]);
var inst_15854 = (state_15868[(2)]);
var inst_15855 = cljs.core.seq.call(null,inst_15800);
var state_15868__$1 = (function (){var statearr_15933 = state_15868;
(statearr_15933[(31)] = inst_15854);

return statearr_15933;
})();
if(inst_15855){
var statearr_15934_15998 = state_15868__$1;
(statearr_15934_15998[(1)] = (42));

} else {
var statearr_15935_15999 = state_15868__$1;
(statearr_15935_15999[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (16))){
var inst_15769 = (state_15868[(7)]);
var inst_15771 = cljs.core.chunked_seq_QMARK_.call(null,inst_15769);
var state_15868__$1 = state_15868;
if(inst_15771){
var statearr_15936_16000 = state_15868__$1;
(statearr_15936_16000[(1)] = (19));

} else {
var statearr_15937_16001 = state_15868__$1;
(statearr_15937_16001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (38))){
var inst_15847 = (state_15868[(2)]);
var state_15868__$1 = state_15868;
var statearr_15938_16002 = state_15868__$1;
(statearr_15938_16002[(2)] = inst_15847);

(statearr_15938_16002[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (30))){
var state_15868__$1 = state_15868;
var statearr_15939_16003 = state_15868__$1;
(statearr_15939_16003[(2)] = null);

(statearr_15939_16003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (10))){
var inst_15752 = (state_15868[(13)]);
var inst_15750 = (state_15868[(14)]);
var inst_15758 = cljs.core._nth.call(null,inst_15750,inst_15752);
var inst_15759 = cljs.core.nth.call(null,inst_15758,(0),null);
var inst_15760 = cljs.core.nth.call(null,inst_15758,(1),null);
var state_15868__$1 = (function (){var statearr_15940 = state_15868;
(statearr_15940[(26)] = inst_15759);

return statearr_15940;
})();
if(cljs.core.truth_(inst_15760)){
var statearr_15941_16004 = state_15868__$1;
(statearr_15941_16004[(1)] = (13));

} else {
var statearr_15942_16005 = state_15868__$1;
(statearr_15942_16005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (18))){
var inst_15793 = (state_15868[(2)]);
var state_15868__$1 = state_15868;
var statearr_15943_16006 = state_15868__$1;
(statearr_15943_16006[(2)] = inst_15793);

(statearr_15943_16006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (42))){
var state_15868__$1 = state_15868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15868__$1,(45),dchan);
} else {
if((state_val_15869 === (37))){
var inst_15827 = (state_15868[(25)]);
var inst_15740 = (state_15868[(11)]);
var inst_15836 = (state_15868[(23)]);
var inst_15836__$1 = cljs.core.first.call(null,inst_15827);
var inst_15837 = cljs.core.async.put_BANG_.call(null,inst_15836__$1,inst_15740,done);
var state_15868__$1 = (function (){var statearr_15944 = state_15868;
(statearr_15944[(23)] = inst_15836__$1);

return statearr_15944;
})();
if(cljs.core.truth_(inst_15837)){
var statearr_15945_16007 = state_15868__$1;
(statearr_15945_16007[(1)] = (39));

} else {
var statearr_15946_16008 = state_15868__$1;
(statearr_15946_16008[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15869 === (8))){
var inst_15752 = (state_15868[(13)]);
var inst_15751 = (state_15868[(17)]);
var inst_15754 = (inst_15752 < inst_15751);
var inst_15755 = inst_15754;
var state_15868__$1 = state_15868;
if(cljs.core.truth_(inst_15755)){
var statearr_15947_16009 = state_15868__$1;
(statearr_15947_16009[(1)] = (10));

} else {
var statearr_15948_16010 = state_15868__$1;
(statearr_15948_16010[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14527__auto___15956,cs,m,dchan,dctr,done))
;
return ((function (switch__14512__auto__,c__14527__auto___15956,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_15952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15952[(0)] = state_machine__14513__auto__);

(statearr_15952[(1)] = (1));

return statearr_15952;
});
var state_machine__14513__auto____1 = (function (state_15868){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_15868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e15953){if((e15953 instanceof Object)){
var ex__14516__auto__ = e15953;
var statearr_15954_16011 = state_15868;
(statearr_15954_16011[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16012 = state_15868;
state_15868 = G__16012;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_15868){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_15868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___15956,cs,m,dchan,dctr,done))
})();
var state__14529__auto__ = (function (){var statearr_15955 = f__14528__auto__.call(null);
(statearr_15955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___15956);

return statearr_15955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___15956,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj16014 = {};
return obj16014;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12595__auto__ = m;
if(and__12595__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12595__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13253__auto__ = (((m == null))?null:m);
return (function (){var or__12607__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12595__auto__ = m;
if(and__12595__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12595__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13253__auto__ = (((m == null))?null:m);
return (function (){var or__12607__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12595__auto__ = m;
if(and__12595__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12595__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13253__auto__ = (((m == null))?null:m);
return (function (){var or__12607__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12595__auto__ = m;
if(and__12595__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12595__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13253__auto__ = (((m == null))?null:m);
return (function (){var or__12607__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12595__auto__ = m;
if(and__12595__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12595__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13253__auto__ = (((m == null))?null:m);
return (function (){var or__12607__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16015){
var map__16020 = p__16015;
var map__16020__$1 = ((cljs.core.seq_QMARK_.call(null,map__16020))?cljs.core.apply.call(null,cljs.core.hash_map,map__16020):map__16020);
var opts = map__16020__$1;
var statearr_16021_16024 = state;
(statearr_16021_16024[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16020,map__16020__$1,opts){
return (function (val){
var statearr_16022_16025 = state;
(statearr_16022_16025[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16020,map__16020__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_16023_16026 = state;
(statearr_16023_16026[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16015 = null;
if (arguments.length > 3) {
var G__16027__i = 0, G__16027__a = new Array(arguments.length -  3);
while (G__16027__i < G__16027__a.length) {G__16027__a[G__16027__i] = arguments[G__16027__i + 3]; ++G__16027__i;}
  p__16015 = new cljs.core.IndexedSeq(G__16027__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16015);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16028){
var state = cljs.core.first(arglist__16028);
arglist__16028 = cljs.core.next(arglist__16028);
var cont_block = cljs.core.first(arglist__16028);
arglist__16028 = cljs.core.next(arglist__16028);
var ports = cljs.core.first(arglist__16028);
var p__16015 = cljs.core.rest(arglist__16028);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16015);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t16148 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16148 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16149){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16149 = meta16149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16148.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16148.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16148.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16148.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16148.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16148.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16148.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16150){
var self__ = this;
var _16150__$1 = this;
return self__.meta16149;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16150,meta16149__$1){
var self__ = this;
var _16150__$1 = this;
return (new cljs.core.async.t16148(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16149__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16148.cljs$lang$type = true;

cljs.core.async.t16148.cljs$lang$ctorStr = "cljs.core.async/t16148";

cljs.core.async.t16148.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13196__auto__,writer__13197__auto__,opt__13198__auto__){
return cljs.core._write.call(null,writer__13197__auto__,"cljs.core.async/t16148");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16148 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16148(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16149){
return (new cljs.core.async.t16148(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16149));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16148(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/.repl/cljs/core/async.cljs"], null)));
})()
;
var c__14527__auto___16267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___16267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___16267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16220){
var state_val_16221 = (state_16220[(1)]);
if((state_val_16221 === (7))){
var inst_16164 = (state_16220[(7)]);
var inst_16169 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16164);
var state_16220__$1 = state_16220;
var statearr_16222_16268 = state_16220__$1;
(statearr_16222_16268[(2)] = inst_16169);

(statearr_16222_16268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (20))){
var inst_16179 = (state_16220[(8)]);
var state_16220__$1 = state_16220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16220__$1,(23),out,inst_16179);
} else {
if((state_val_16221 === (1))){
var inst_16154 = (state_16220[(9)]);
var inst_16154__$1 = calc_state.call(null);
var inst_16155 = cljs.core.seq_QMARK_.call(null,inst_16154__$1);
var state_16220__$1 = (function (){var statearr_16223 = state_16220;
(statearr_16223[(9)] = inst_16154__$1);

return statearr_16223;
})();
if(inst_16155){
var statearr_16224_16269 = state_16220__$1;
(statearr_16224_16269[(1)] = (2));

} else {
var statearr_16225_16270 = state_16220__$1;
(statearr_16225_16270[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (24))){
var inst_16172 = (state_16220[(10)]);
var inst_16164 = inst_16172;
var state_16220__$1 = (function (){var statearr_16226 = state_16220;
(statearr_16226[(7)] = inst_16164);

return statearr_16226;
})();
var statearr_16227_16271 = state_16220__$1;
(statearr_16227_16271[(2)] = null);

(statearr_16227_16271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (4))){
var inst_16154 = (state_16220[(9)]);
var inst_16160 = (state_16220[(2)]);
var inst_16161 = cljs.core.get.call(null,inst_16160,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16162 = cljs.core.get.call(null,inst_16160,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16163 = cljs.core.get.call(null,inst_16160,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16164 = inst_16154;
var state_16220__$1 = (function (){var statearr_16228 = state_16220;
(statearr_16228[(11)] = inst_16162);

(statearr_16228[(7)] = inst_16164);

(statearr_16228[(12)] = inst_16161);

(statearr_16228[(13)] = inst_16163);

return statearr_16228;
})();
var statearr_16229_16272 = state_16220__$1;
(statearr_16229_16272[(2)] = null);

(statearr_16229_16272[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (15))){
var state_16220__$1 = state_16220;
var statearr_16230_16273 = state_16220__$1;
(statearr_16230_16273[(2)] = null);

(statearr_16230_16273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (21))){
var inst_16172 = (state_16220[(10)]);
var inst_16164 = inst_16172;
var state_16220__$1 = (function (){var statearr_16231 = state_16220;
(statearr_16231[(7)] = inst_16164);

return statearr_16231;
})();
var statearr_16232_16274 = state_16220__$1;
(statearr_16232_16274[(2)] = null);

(statearr_16232_16274[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (13))){
var inst_16216 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
var statearr_16233_16275 = state_16220__$1;
(statearr_16233_16275[(2)] = inst_16216);

(statearr_16233_16275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (22))){
var inst_16214 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
var statearr_16234_16276 = state_16220__$1;
(statearr_16234_16276[(2)] = inst_16214);

(statearr_16234_16276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (6))){
var inst_16218 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16220__$1,inst_16218);
} else {
if((state_val_16221 === (25))){
var state_16220__$1 = state_16220;
var statearr_16235_16277 = state_16220__$1;
(statearr_16235_16277[(2)] = null);

(statearr_16235_16277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (17))){
var inst_16194 = (state_16220[(14)]);
var state_16220__$1 = state_16220;
var statearr_16236_16278 = state_16220__$1;
(statearr_16236_16278[(2)] = inst_16194);

(statearr_16236_16278[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (3))){
var inst_16154 = (state_16220[(9)]);
var state_16220__$1 = state_16220;
var statearr_16237_16279 = state_16220__$1;
(statearr_16237_16279[(2)] = inst_16154);

(statearr_16237_16279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (12))){
var inst_16180 = (state_16220[(15)]);
var inst_16175 = (state_16220[(16)]);
var inst_16194 = (state_16220[(14)]);
var inst_16194__$1 = inst_16175.call(null,inst_16180);
var state_16220__$1 = (function (){var statearr_16238 = state_16220;
(statearr_16238[(14)] = inst_16194__$1);

return statearr_16238;
})();
if(cljs.core.truth_(inst_16194__$1)){
var statearr_16239_16280 = state_16220__$1;
(statearr_16239_16280[(1)] = (17));

} else {
var statearr_16240_16281 = state_16220__$1;
(statearr_16240_16281[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (2))){
var inst_16154 = (state_16220[(9)]);
var inst_16157 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16154);
var state_16220__$1 = state_16220;
var statearr_16241_16282 = state_16220__$1;
(statearr_16241_16282[(2)] = inst_16157);

(statearr_16241_16282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (23))){
var inst_16205 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
if(cljs.core.truth_(inst_16205)){
var statearr_16242_16283 = state_16220__$1;
(statearr_16242_16283[(1)] = (24));

} else {
var statearr_16243_16284 = state_16220__$1;
(statearr_16243_16284[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (19))){
var inst_16202 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
if(cljs.core.truth_(inst_16202)){
var statearr_16244_16285 = state_16220__$1;
(statearr_16244_16285[(1)] = (20));

} else {
var statearr_16245_16286 = state_16220__$1;
(statearr_16245_16286[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (11))){
var inst_16179 = (state_16220[(8)]);
var inst_16185 = (inst_16179 == null);
var state_16220__$1 = state_16220;
if(cljs.core.truth_(inst_16185)){
var statearr_16246_16287 = state_16220__$1;
(statearr_16246_16287[(1)] = (14));

} else {
var statearr_16247_16288 = state_16220__$1;
(statearr_16247_16288[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (9))){
var inst_16172 = (state_16220[(10)]);
var inst_16172__$1 = (state_16220[(2)]);
var inst_16173 = cljs.core.get.call(null,inst_16172__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16174 = cljs.core.get.call(null,inst_16172__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16175 = cljs.core.get.call(null,inst_16172__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_16220__$1 = (function (){var statearr_16248 = state_16220;
(statearr_16248[(10)] = inst_16172__$1);

(statearr_16248[(16)] = inst_16175);

(statearr_16248[(17)] = inst_16174);

return statearr_16248;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16220__$1,(10),inst_16173);
} else {
if((state_val_16221 === (5))){
var inst_16164 = (state_16220[(7)]);
var inst_16167 = cljs.core.seq_QMARK_.call(null,inst_16164);
var state_16220__$1 = state_16220;
if(inst_16167){
var statearr_16249_16289 = state_16220__$1;
(statearr_16249_16289[(1)] = (7));

} else {
var statearr_16250_16290 = state_16220__$1;
(statearr_16250_16290[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (14))){
var inst_16180 = (state_16220[(15)]);
var inst_16187 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16180);
var state_16220__$1 = state_16220;
var statearr_16251_16291 = state_16220__$1;
(statearr_16251_16291[(2)] = inst_16187);

(statearr_16251_16291[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (26))){
var inst_16210 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
var statearr_16252_16292 = state_16220__$1;
(statearr_16252_16292[(2)] = inst_16210);

(statearr_16252_16292[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (16))){
var inst_16190 = (state_16220[(2)]);
var inst_16191 = calc_state.call(null);
var inst_16164 = inst_16191;
var state_16220__$1 = (function (){var statearr_16253 = state_16220;
(statearr_16253[(7)] = inst_16164);

(statearr_16253[(18)] = inst_16190);

return statearr_16253;
})();
var statearr_16254_16293 = state_16220__$1;
(statearr_16254_16293[(2)] = null);

(statearr_16254_16293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (10))){
var inst_16179 = (state_16220[(8)]);
var inst_16180 = (state_16220[(15)]);
var inst_16178 = (state_16220[(2)]);
var inst_16179__$1 = cljs.core.nth.call(null,inst_16178,(0),null);
var inst_16180__$1 = cljs.core.nth.call(null,inst_16178,(1),null);
var inst_16181 = (inst_16179__$1 == null);
var inst_16182 = cljs.core._EQ_.call(null,inst_16180__$1,change);
var inst_16183 = (inst_16181) || (inst_16182);
var state_16220__$1 = (function (){var statearr_16255 = state_16220;
(statearr_16255[(8)] = inst_16179__$1);

(statearr_16255[(15)] = inst_16180__$1);

return statearr_16255;
})();
if(cljs.core.truth_(inst_16183)){
var statearr_16256_16294 = state_16220__$1;
(statearr_16256_16294[(1)] = (11));

} else {
var statearr_16257_16295 = state_16220__$1;
(statearr_16257_16295[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (18))){
var inst_16180 = (state_16220[(15)]);
var inst_16175 = (state_16220[(16)]);
var inst_16174 = (state_16220[(17)]);
var inst_16197 = cljs.core.empty_QMARK_.call(null,inst_16175);
var inst_16198 = inst_16174.call(null,inst_16180);
var inst_16199 = cljs.core.not.call(null,inst_16198);
var inst_16200 = (inst_16197) && (inst_16199);
var state_16220__$1 = state_16220;
var statearr_16258_16296 = state_16220__$1;
(statearr_16258_16296[(2)] = inst_16200);

(statearr_16258_16296[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (8))){
var inst_16164 = (state_16220[(7)]);
var state_16220__$1 = state_16220;
var statearr_16259_16297 = state_16220__$1;
(statearr_16259_16297[(2)] = inst_16164);

(statearr_16259_16297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14527__auto___16267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14512__auto__,c__14527__auto___16267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_16263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16263[(0)] = state_machine__14513__auto__);

(statearr_16263[(1)] = (1));

return statearr_16263;
});
var state_machine__14513__auto____1 = (function (state_16220){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_16220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e16264){if((e16264 instanceof Object)){
var ex__14516__auto__ = e16264;
var statearr_16265_16298 = state_16220;
(statearr_16265_16298[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16299 = state_16220;
state_16220 = G__16299;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_16220){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_16220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___16267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14529__auto__ = (function (){var statearr_16266 = f__14528__auto__.call(null);
(statearr_16266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___16267);

return statearr_16266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___16267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj16301 = {};
return obj16301;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12595__auto__ = p;
if(and__12595__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12595__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13253__auto__ = (((p == null))?null:p);
return (function (){var or__12607__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12595__auto__ = p;
if(and__12595__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12595__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13253__auto__ = (((p == null))?null:p);
return (function (){var or__12607__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__12595__auto__ = p;
if(and__12595__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12595__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13253__auto__ = (((p == null))?null:p);
return (function (){var or__12607__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12595__auto__ = p;
if(and__12595__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12595__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13253__auto__ = (((p == null))?null:p);
return (function (){var or__12607__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13253__auto__)]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12607__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12607__auto__,mults){
return (function (p1__16302_SHARP_){
if(cljs.core.truth_(p1__16302_SHARP_.call(null,topic))){
return p1__16302_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16302_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12607__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16425 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16425 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16426){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16426 = meta16426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16425.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16425.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16425.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t16425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16425.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16427){
var self__ = this;
var _16427__$1 = this;
return self__.meta16426;
});})(mults,ensure_mult))
;

cljs.core.async.t16425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16427,meta16426__$1){
var self__ = this;
var _16427__$1 = this;
return (new cljs.core.async.t16425(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16426__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16425.cljs$lang$type = true;

cljs.core.async.t16425.cljs$lang$ctorStr = "cljs.core.async/t16425";

cljs.core.async.t16425.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13196__auto__,writer__13197__auto__,opt__13198__auto__){
return cljs.core._write.call(null,writer__13197__auto__,"cljs.core.async/t16425");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16425 = ((function (mults,ensure_mult){
return (function __GT_t16425(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16426){
return (new cljs.core.async.t16425(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16426));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16425(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/.repl/cljs/core/async.cljs"], null)));
})()
;
var c__14527__auto___16547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___16547,mults,ensure_mult,p){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___16547,mults,ensure_mult,p){
return (function (state_16499){
var state_val_16500 = (state_16499[(1)]);
if((state_val_16500 === (7))){
var inst_16495 = (state_16499[(2)]);
var state_16499__$1 = state_16499;
var statearr_16501_16548 = state_16499__$1;
(statearr_16501_16548[(2)] = inst_16495);

(statearr_16501_16548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (20))){
var state_16499__$1 = state_16499;
var statearr_16502_16549 = state_16499__$1;
(statearr_16502_16549[(2)] = null);

(statearr_16502_16549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (1))){
var state_16499__$1 = state_16499;
var statearr_16503_16550 = state_16499__$1;
(statearr_16503_16550[(2)] = null);

(statearr_16503_16550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (24))){
var inst_16478 = (state_16499[(7)]);
var inst_16487 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16478);
var state_16499__$1 = state_16499;
var statearr_16504_16551 = state_16499__$1;
(statearr_16504_16551[(2)] = inst_16487);

(statearr_16504_16551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (4))){
var inst_16430 = (state_16499[(8)]);
var inst_16430__$1 = (state_16499[(2)]);
var inst_16431 = (inst_16430__$1 == null);
var state_16499__$1 = (function (){var statearr_16505 = state_16499;
(statearr_16505[(8)] = inst_16430__$1);

return statearr_16505;
})();
if(cljs.core.truth_(inst_16431)){
var statearr_16506_16552 = state_16499__$1;
(statearr_16506_16552[(1)] = (5));

} else {
var statearr_16507_16553 = state_16499__$1;
(statearr_16507_16553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (15))){
var inst_16472 = (state_16499[(2)]);
var state_16499__$1 = state_16499;
var statearr_16508_16554 = state_16499__$1;
(statearr_16508_16554[(2)] = inst_16472);

(statearr_16508_16554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (21))){
var inst_16492 = (state_16499[(2)]);
var state_16499__$1 = (function (){var statearr_16509 = state_16499;
(statearr_16509[(9)] = inst_16492);

return statearr_16509;
})();
var statearr_16510_16555 = state_16499__$1;
(statearr_16510_16555[(2)] = null);

(statearr_16510_16555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (13))){
var inst_16454 = (state_16499[(10)]);
var inst_16456 = cljs.core.chunked_seq_QMARK_.call(null,inst_16454);
var state_16499__$1 = state_16499;
if(inst_16456){
var statearr_16511_16556 = state_16499__$1;
(statearr_16511_16556[(1)] = (16));

} else {
var statearr_16512_16557 = state_16499__$1;
(statearr_16512_16557[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (22))){
var inst_16484 = (state_16499[(2)]);
var state_16499__$1 = state_16499;
if(cljs.core.truth_(inst_16484)){
var statearr_16513_16558 = state_16499__$1;
(statearr_16513_16558[(1)] = (23));

} else {
var statearr_16514_16559 = state_16499__$1;
(statearr_16514_16559[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (6))){
var inst_16430 = (state_16499[(8)]);
var inst_16480 = (state_16499[(11)]);
var inst_16478 = (state_16499[(7)]);
var inst_16478__$1 = topic_fn.call(null,inst_16430);
var inst_16479 = cljs.core.deref.call(null,mults);
var inst_16480__$1 = cljs.core.get.call(null,inst_16479,inst_16478__$1);
var state_16499__$1 = (function (){var statearr_16515 = state_16499;
(statearr_16515[(11)] = inst_16480__$1);

(statearr_16515[(7)] = inst_16478__$1);

return statearr_16515;
})();
if(cljs.core.truth_(inst_16480__$1)){
var statearr_16516_16560 = state_16499__$1;
(statearr_16516_16560[(1)] = (19));

} else {
var statearr_16517_16561 = state_16499__$1;
(statearr_16517_16561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (25))){
var inst_16489 = (state_16499[(2)]);
var state_16499__$1 = state_16499;
var statearr_16518_16562 = state_16499__$1;
(statearr_16518_16562[(2)] = inst_16489);

(statearr_16518_16562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (17))){
var inst_16454 = (state_16499[(10)]);
var inst_16463 = cljs.core.first.call(null,inst_16454);
var inst_16464 = cljs.core.async.muxch_STAR_.call(null,inst_16463);
var inst_16465 = cljs.core.async.close_BANG_.call(null,inst_16464);
var inst_16466 = cljs.core.next.call(null,inst_16454);
var inst_16440 = inst_16466;
var inst_16441 = null;
var inst_16442 = (0);
var inst_16443 = (0);
var state_16499__$1 = (function (){var statearr_16519 = state_16499;
(statearr_16519[(12)] = inst_16442);

(statearr_16519[(13)] = inst_16443);

(statearr_16519[(14)] = inst_16441);

(statearr_16519[(15)] = inst_16440);

(statearr_16519[(16)] = inst_16465);

return statearr_16519;
})();
var statearr_16520_16563 = state_16499__$1;
(statearr_16520_16563[(2)] = null);

(statearr_16520_16563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (3))){
var inst_16497 = (state_16499[(2)]);
var state_16499__$1 = state_16499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16499__$1,inst_16497);
} else {
if((state_val_16500 === (12))){
var inst_16474 = (state_16499[(2)]);
var state_16499__$1 = state_16499;
var statearr_16521_16564 = state_16499__$1;
(statearr_16521_16564[(2)] = inst_16474);

(statearr_16521_16564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (2))){
var state_16499__$1 = state_16499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16499__$1,(4),ch);
} else {
if((state_val_16500 === (23))){
var state_16499__$1 = state_16499;
var statearr_16522_16565 = state_16499__$1;
(statearr_16522_16565[(2)] = null);

(statearr_16522_16565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (19))){
var inst_16430 = (state_16499[(8)]);
var inst_16480 = (state_16499[(11)]);
var inst_16482 = cljs.core.async.muxch_STAR_.call(null,inst_16480);
var state_16499__$1 = state_16499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16499__$1,(22),inst_16482,inst_16430);
} else {
if((state_val_16500 === (11))){
var inst_16454 = (state_16499[(10)]);
var inst_16440 = (state_16499[(15)]);
var inst_16454__$1 = cljs.core.seq.call(null,inst_16440);
var state_16499__$1 = (function (){var statearr_16523 = state_16499;
(statearr_16523[(10)] = inst_16454__$1);

return statearr_16523;
})();
if(inst_16454__$1){
var statearr_16524_16566 = state_16499__$1;
(statearr_16524_16566[(1)] = (13));

} else {
var statearr_16525_16567 = state_16499__$1;
(statearr_16525_16567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (9))){
var inst_16476 = (state_16499[(2)]);
var state_16499__$1 = state_16499;
var statearr_16526_16568 = state_16499__$1;
(statearr_16526_16568[(2)] = inst_16476);

(statearr_16526_16568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (5))){
var inst_16437 = cljs.core.deref.call(null,mults);
var inst_16438 = cljs.core.vals.call(null,inst_16437);
var inst_16439 = cljs.core.seq.call(null,inst_16438);
var inst_16440 = inst_16439;
var inst_16441 = null;
var inst_16442 = (0);
var inst_16443 = (0);
var state_16499__$1 = (function (){var statearr_16527 = state_16499;
(statearr_16527[(12)] = inst_16442);

(statearr_16527[(13)] = inst_16443);

(statearr_16527[(14)] = inst_16441);

(statearr_16527[(15)] = inst_16440);

return statearr_16527;
})();
var statearr_16528_16569 = state_16499__$1;
(statearr_16528_16569[(2)] = null);

(statearr_16528_16569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (14))){
var state_16499__$1 = state_16499;
var statearr_16532_16570 = state_16499__$1;
(statearr_16532_16570[(2)] = null);

(statearr_16532_16570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (16))){
var inst_16454 = (state_16499[(10)]);
var inst_16458 = cljs.core.chunk_first.call(null,inst_16454);
var inst_16459 = cljs.core.chunk_rest.call(null,inst_16454);
var inst_16460 = cljs.core.count.call(null,inst_16458);
var inst_16440 = inst_16459;
var inst_16441 = inst_16458;
var inst_16442 = inst_16460;
var inst_16443 = (0);
var state_16499__$1 = (function (){var statearr_16533 = state_16499;
(statearr_16533[(12)] = inst_16442);

(statearr_16533[(13)] = inst_16443);

(statearr_16533[(14)] = inst_16441);

(statearr_16533[(15)] = inst_16440);

return statearr_16533;
})();
var statearr_16534_16571 = state_16499__$1;
(statearr_16534_16571[(2)] = null);

(statearr_16534_16571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (10))){
var inst_16442 = (state_16499[(12)]);
var inst_16443 = (state_16499[(13)]);
var inst_16441 = (state_16499[(14)]);
var inst_16440 = (state_16499[(15)]);
var inst_16448 = cljs.core._nth.call(null,inst_16441,inst_16443);
var inst_16449 = cljs.core.async.muxch_STAR_.call(null,inst_16448);
var inst_16450 = cljs.core.async.close_BANG_.call(null,inst_16449);
var inst_16451 = (inst_16443 + (1));
var tmp16529 = inst_16442;
var tmp16530 = inst_16441;
var tmp16531 = inst_16440;
var inst_16440__$1 = tmp16531;
var inst_16441__$1 = tmp16530;
var inst_16442__$1 = tmp16529;
var inst_16443__$1 = inst_16451;
var state_16499__$1 = (function (){var statearr_16535 = state_16499;
(statearr_16535[(12)] = inst_16442__$1);

(statearr_16535[(13)] = inst_16443__$1);

(statearr_16535[(17)] = inst_16450);

(statearr_16535[(14)] = inst_16441__$1);

(statearr_16535[(15)] = inst_16440__$1);

return statearr_16535;
})();
var statearr_16536_16572 = state_16499__$1;
(statearr_16536_16572[(2)] = null);

(statearr_16536_16572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (18))){
var inst_16469 = (state_16499[(2)]);
var state_16499__$1 = state_16499;
var statearr_16537_16573 = state_16499__$1;
(statearr_16537_16573[(2)] = inst_16469);

(statearr_16537_16573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16500 === (8))){
var inst_16442 = (state_16499[(12)]);
var inst_16443 = (state_16499[(13)]);
var inst_16445 = (inst_16443 < inst_16442);
var inst_16446 = inst_16445;
var state_16499__$1 = state_16499;
if(cljs.core.truth_(inst_16446)){
var statearr_16538_16574 = state_16499__$1;
(statearr_16538_16574[(1)] = (10));

} else {
var statearr_16539_16575 = state_16499__$1;
(statearr_16539_16575[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14527__auto___16547,mults,ensure_mult,p))
;
return ((function (switch__14512__auto__,c__14527__auto___16547,mults,ensure_mult,p){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_16543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16543[(0)] = state_machine__14513__auto__);

(statearr_16543[(1)] = (1));

return statearr_16543;
});
var state_machine__14513__auto____1 = (function (state_16499){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_16499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e16544){if((e16544 instanceof Object)){
var ex__14516__auto__ = e16544;
var statearr_16545_16576 = state_16499;
(statearr_16545_16576[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16577 = state_16499;
state_16499 = G__16577;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_16499){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_16499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___16547,mults,ensure_mult,p))
})();
var state__14529__auto__ = (function (){var statearr_16546 = f__14528__auto__.call(null);
(statearr_16546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___16547);

return statearr_16546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___16547,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__14527__auto___16714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___16714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___16714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16684){
var state_val_16685 = (state_16684[(1)]);
if((state_val_16685 === (7))){
var state_16684__$1 = state_16684;
var statearr_16686_16715 = state_16684__$1;
(statearr_16686_16715[(2)] = null);

(statearr_16686_16715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (1))){
var state_16684__$1 = state_16684;
var statearr_16687_16716 = state_16684__$1;
(statearr_16687_16716[(2)] = null);

(statearr_16687_16716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (4))){
var inst_16648 = (state_16684[(7)]);
var inst_16650 = (inst_16648 < cnt);
var state_16684__$1 = state_16684;
if(cljs.core.truth_(inst_16650)){
var statearr_16688_16717 = state_16684__$1;
(statearr_16688_16717[(1)] = (6));

} else {
var statearr_16689_16718 = state_16684__$1;
(statearr_16689_16718[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (15))){
var inst_16680 = (state_16684[(2)]);
var state_16684__$1 = state_16684;
var statearr_16690_16719 = state_16684__$1;
(statearr_16690_16719[(2)] = inst_16680);

(statearr_16690_16719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (13))){
var inst_16673 = cljs.core.async.close_BANG_.call(null,out);
var state_16684__$1 = state_16684;
var statearr_16691_16720 = state_16684__$1;
(statearr_16691_16720[(2)] = inst_16673);

(statearr_16691_16720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (6))){
var state_16684__$1 = state_16684;
var statearr_16692_16721 = state_16684__$1;
(statearr_16692_16721[(2)] = null);

(statearr_16692_16721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (3))){
var inst_16682 = (state_16684[(2)]);
var state_16684__$1 = state_16684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16684__$1,inst_16682);
} else {
if((state_val_16685 === (12))){
var inst_16670 = (state_16684[(8)]);
var inst_16670__$1 = (state_16684[(2)]);
var inst_16671 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16670__$1);
var state_16684__$1 = (function (){var statearr_16693 = state_16684;
(statearr_16693[(8)] = inst_16670__$1);

return statearr_16693;
})();
if(cljs.core.truth_(inst_16671)){
var statearr_16694_16722 = state_16684__$1;
(statearr_16694_16722[(1)] = (13));

} else {
var statearr_16695_16723 = state_16684__$1;
(statearr_16695_16723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (2))){
var inst_16647 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16648 = (0);
var state_16684__$1 = (function (){var statearr_16696 = state_16684;
(statearr_16696[(9)] = inst_16647);

(statearr_16696[(7)] = inst_16648);

return statearr_16696;
})();
var statearr_16697_16724 = state_16684__$1;
(statearr_16697_16724[(2)] = null);

(statearr_16697_16724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (11))){
var inst_16648 = (state_16684[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16684,(10),Object,null,(9));
var inst_16657 = chs__$1.call(null,inst_16648);
var inst_16658 = done.call(null,inst_16648);
var inst_16659 = cljs.core.async.take_BANG_.call(null,inst_16657,inst_16658);
var state_16684__$1 = state_16684;
var statearr_16698_16725 = state_16684__$1;
(statearr_16698_16725[(2)] = inst_16659);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16684__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (9))){
var inst_16648 = (state_16684[(7)]);
var inst_16661 = (state_16684[(2)]);
var inst_16662 = (inst_16648 + (1));
var inst_16648__$1 = inst_16662;
var state_16684__$1 = (function (){var statearr_16699 = state_16684;
(statearr_16699[(10)] = inst_16661);

(statearr_16699[(7)] = inst_16648__$1);

return statearr_16699;
})();
var statearr_16700_16726 = state_16684__$1;
(statearr_16700_16726[(2)] = null);

(statearr_16700_16726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (5))){
var inst_16668 = (state_16684[(2)]);
var state_16684__$1 = (function (){var statearr_16701 = state_16684;
(statearr_16701[(11)] = inst_16668);

return statearr_16701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16684__$1,(12),dchan);
} else {
if((state_val_16685 === (14))){
var inst_16670 = (state_16684[(8)]);
var inst_16675 = cljs.core.apply.call(null,f,inst_16670);
var state_16684__$1 = state_16684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16684__$1,(16),out,inst_16675);
} else {
if((state_val_16685 === (16))){
var inst_16677 = (state_16684[(2)]);
var state_16684__$1 = (function (){var statearr_16702 = state_16684;
(statearr_16702[(12)] = inst_16677);

return statearr_16702;
})();
var statearr_16703_16727 = state_16684__$1;
(statearr_16703_16727[(2)] = null);

(statearr_16703_16727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (10))){
var inst_16652 = (state_16684[(2)]);
var inst_16653 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16684__$1 = (function (){var statearr_16704 = state_16684;
(statearr_16704[(13)] = inst_16652);

return statearr_16704;
})();
var statearr_16705_16728 = state_16684__$1;
(statearr_16705_16728[(2)] = inst_16653);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16684__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16685 === (8))){
var inst_16666 = (state_16684[(2)]);
var state_16684__$1 = state_16684;
var statearr_16706_16729 = state_16684__$1;
(statearr_16706_16729[(2)] = inst_16666);

(statearr_16706_16729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});})(c__14527__auto___16714,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14512__auto__,c__14527__auto___16714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_16710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16710[(0)] = state_machine__14513__auto__);

(statearr_16710[(1)] = (1));

return statearr_16710;
});
var state_machine__14513__auto____1 = (function (state_16684){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_16684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e16711){if((e16711 instanceof Object)){
var ex__14516__auto__ = e16711;
var statearr_16712_16730 = state_16684;
(statearr_16712_16730[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16731 = state_16684;
state_16684 = G__16731;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_16684){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_16684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___16714,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14529__auto__ = (function (){var statearr_16713 = f__14528__auto__.call(null);
(statearr_16713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___16714);

return statearr_16713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___16714,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14527__auto___16839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___16839,out){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___16839,out){
return (function (state_16815){
var state_val_16816 = (state_16815[(1)]);
if((state_val_16816 === (7))){
var inst_16795 = (state_16815[(7)]);
var inst_16794 = (state_16815[(8)]);
var inst_16794__$1 = (state_16815[(2)]);
var inst_16795__$1 = cljs.core.nth.call(null,inst_16794__$1,(0),null);
var inst_16796 = cljs.core.nth.call(null,inst_16794__$1,(1),null);
var inst_16797 = (inst_16795__$1 == null);
var state_16815__$1 = (function (){var statearr_16817 = state_16815;
(statearr_16817[(7)] = inst_16795__$1);

(statearr_16817[(9)] = inst_16796);

(statearr_16817[(8)] = inst_16794__$1);

return statearr_16817;
})();
if(cljs.core.truth_(inst_16797)){
var statearr_16818_16840 = state_16815__$1;
(statearr_16818_16840[(1)] = (8));

} else {
var statearr_16819_16841 = state_16815__$1;
(statearr_16819_16841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (1))){
var inst_16786 = cljs.core.vec.call(null,chs);
var inst_16787 = inst_16786;
var state_16815__$1 = (function (){var statearr_16820 = state_16815;
(statearr_16820[(10)] = inst_16787);

return statearr_16820;
})();
var statearr_16821_16842 = state_16815__$1;
(statearr_16821_16842[(2)] = null);

(statearr_16821_16842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (4))){
var inst_16787 = (state_16815[(10)]);
var state_16815__$1 = state_16815;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16815__$1,(7),inst_16787);
} else {
if((state_val_16816 === (6))){
var inst_16811 = (state_16815[(2)]);
var state_16815__$1 = state_16815;
var statearr_16822_16843 = state_16815__$1;
(statearr_16822_16843[(2)] = inst_16811);

(statearr_16822_16843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (3))){
var inst_16813 = (state_16815[(2)]);
var state_16815__$1 = state_16815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16815__$1,inst_16813);
} else {
if((state_val_16816 === (2))){
var inst_16787 = (state_16815[(10)]);
var inst_16789 = cljs.core.count.call(null,inst_16787);
var inst_16790 = (inst_16789 > (0));
var state_16815__$1 = state_16815;
if(cljs.core.truth_(inst_16790)){
var statearr_16824_16844 = state_16815__$1;
(statearr_16824_16844[(1)] = (4));

} else {
var statearr_16825_16845 = state_16815__$1;
(statearr_16825_16845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (11))){
var inst_16787 = (state_16815[(10)]);
var inst_16804 = (state_16815[(2)]);
var tmp16823 = inst_16787;
var inst_16787__$1 = tmp16823;
var state_16815__$1 = (function (){var statearr_16826 = state_16815;
(statearr_16826[(11)] = inst_16804);

(statearr_16826[(10)] = inst_16787__$1);

return statearr_16826;
})();
var statearr_16827_16846 = state_16815__$1;
(statearr_16827_16846[(2)] = null);

(statearr_16827_16846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (9))){
var inst_16795 = (state_16815[(7)]);
var state_16815__$1 = state_16815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16815__$1,(11),out,inst_16795);
} else {
if((state_val_16816 === (5))){
var inst_16809 = cljs.core.async.close_BANG_.call(null,out);
var state_16815__$1 = state_16815;
var statearr_16828_16847 = state_16815__$1;
(statearr_16828_16847[(2)] = inst_16809);

(statearr_16828_16847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (10))){
var inst_16807 = (state_16815[(2)]);
var state_16815__$1 = state_16815;
var statearr_16829_16848 = state_16815__$1;
(statearr_16829_16848[(2)] = inst_16807);

(statearr_16829_16848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (8))){
var inst_16795 = (state_16815[(7)]);
var inst_16796 = (state_16815[(9)]);
var inst_16794 = (state_16815[(8)]);
var inst_16787 = (state_16815[(10)]);
var inst_16799 = (function (){var c = inst_16796;
var v = inst_16795;
var vec__16792 = inst_16794;
var cs = inst_16787;
return ((function (c,v,vec__16792,cs,inst_16795,inst_16796,inst_16794,inst_16787,state_val_16816,c__14527__auto___16839,out){
return (function (p1__16732_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16732_SHARP_);
});
;})(c,v,vec__16792,cs,inst_16795,inst_16796,inst_16794,inst_16787,state_val_16816,c__14527__auto___16839,out))
})();
var inst_16800 = cljs.core.filterv.call(null,inst_16799,inst_16787);
var inst_16787__$1 = inst_16800;
var state_16815__$1 = (function (){var statearr_16830 = state_16815;
(statearr_16830[(10)] = inst_16787__$1);

return statearr_16830;
})();
var statearr_16831_16849 = state_16815__$1;
(statearr_16831_16849[(2)] = null);

(statearr_16831_16849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__14527__auto___16839,out))
;
return ((function (switch__14512__auto__,c__14527__auto___16839,out){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_16835 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16835[(0)] = state_machine__14513__auto__);

(statearr_16835[(1)] = (1));

return statearr_16835;
});
var state_machine__14513__auto____1 = (function (state_16815){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_16815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e16836){if((e16836 instanceof Object)){
var ex__14516__auto__ = e16836;
var statearr_16837_16850 = state_16815;
(statearr_16837_16850[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16851 = state_16815;
state_16815 = G__16851;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_16815){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_16815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___16839,out))
})();
var state__14529__auto__ = (function (){var statearr_16838 = f__14528__auto__.call(null);
(statearr_16838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___16839);

return statearr_16838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___16839,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14527__auto___16944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___16944,out){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___16944,out){
return (function (state_16921){
var state_val_16922 = (state_16921[(1)]);
if((state_val_16922 === (7))){
var inst_16903 = (state_16921[(7)]);
var inst_16903__$1 = (state_16921[(2)]);
var inst_16904 = (inst_16903__$1 == null);
var inst_16905 = cljs.core.not.call(null,inst_16904);
var state_16921__$1 = (function (){var statearr_16923 = state_16921;
(statearr_16923[(7)] = inst_16903__$1);

return statearr_16923;
})();
if(inst_16905){
var statearr_16924_16945 = state_16921__$1;
(statearr_16924_16945[(1)] = (8));

} else {
var statearr_16925_16946 = state_16921__$1;
(statearr_16925_16946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16922 === (1))){
var inst_16898 = (0);
var state_16921__$1 = (function (){var statearr_16926 = state_16921;
(statearr_16926[(8)] = inst_16898);

return statearr_16926;
})();
var statearr_16927_16947 = state_16921__$1;
(statearr_16927_16947[(2)] = null);

(statearr_16927_16947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16922 === (4))){
var state_16921__$1 = state_16921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16921__$1,(7),ch);
} else {
if((state_val_16922 === (6))){
var inst_16916 = (state_16921[(2)]);
var state_16921__$1 = state_16921;
var statearr_16928_16948 = state_16921__$1;
(statearr_16928_16948[(2)] = inst_16916);

(statearr_16928_16948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16922 === (3))){
var inst_16918 = (state_16921[(2)]);
var inst_16919 = cljs.core.async.close_BANG_.call(null,out);
var state_16921__$1 = (function (){var statearr_16929 = state_16921;
(statearr_16929[(9)] = inst_16918);

return statearr_16929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16921__$1,inst_16919);
} else {
if((state_val_16922 === (2))){
var inst_16898 = (state_16921[(8)]);
var inst_16900 = (inst_16898 < n);
var state_16921__$1 = state_16921;
if(cljs.core.truth_(inst_16900)){
var statearr_16930_16949 = state_16921__$1;
(statearr_16930_16949[(1)] = (4));

} else {
var statearr_16931_16950 = state_16921__$1;
(statearr_16931_16950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16922 === (11))){
var inst_16898 = (state_16921[(8)]);
var inst_16908 = (state_16921[(2)]);
var inst_16909 = (inst_16898 + (1));
var inst_16898__$1 = inst_16909;
var state_16921__$1 = (function (){var statearr_16932 = state_16921;
(statearr_16932[(8)] = inst_16898__$1);

(statearr_16932[(10)] = inst_16908);

return statearr_16932;
})();
var statearr_16933_16951 = state_16921__$1;
(statearr_16933_16951[(2)] = null);

(statearr_16933_16951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16922 === (9))){
var state_16921__$1 = state_16921;
var statearr_16934_16952 = state_16921__$1;
(statearr_16934_16952[(2)] = null);

(statearr_16934_16952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16922 === (5))){
var state_16921__$1 = state_16921;
var statearr_16935_16953 = state_16921__$1;
(statearr_16935_16953[(2)] = null);

(statearr_16935_16953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16922 === (10))){
var inst_16913 = (state_16921[(2)]);
var state_16921__$1 = state_16921;
var statearr_16936_16954 = state_16921__$1;
(statearr_16936_16954[(2)] = inst_16913);

(statearr_16936_16954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16922 === (8))){
var inst_16903 = (state_16921[(7)]);
var state_16921__$1 = state_16921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16921__$1,(11),out,inst_16903);
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
}
}
}
});})(c__14527__auto___16944,out))
;
return ((function (switch__14512__auto__,c__14527__auto___16944,out){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_16940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16940[(0)] = state_machine__14513__auto__);

(statearr_16940[(1)] = (1));

return statearr_16940;
});
var state_machine__14513__auto____1 = (function (state_16921){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_16921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e16941){if((e16941 instanceof Object)){
var ex__14516__auto__ = e16941;
var statearr_16942_16955 = state_16921;
(statearr_16942_16955[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16956 = state_16921;
state_16921 = G__16956;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_16921){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_16921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___16944,out))
})();
var state__14529__auto__ = (function (){var statearr_16943 = f__14528__auto__.call(null);
(statearr_16943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___16944);

return statearr_16943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___16944,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t16964 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16964 = (function (ch,f,map_LT_,meta16965){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16965 = meta16965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16964.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t16964.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t16967 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16967 = (function (fn1,_,meta16965,map_LT_,f,ch,meta16968){
this.fn1 = fn1;
this._ = _;
this.meta16965 = meta16965;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16968 = meta16968;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16967.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16957_SHARP_){
return f1.call(null,(((p1__16957_SHARP_ == null))?null:self__.f.call(null,p1__16957_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t16967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16969){
var self__ = this;
var _16969__$1 = this;
return self__.meta16968;
});})(___$1))
;

cljs.core.async.t16967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16969,meta16968__$1){
var self__ = this;
var _16969__$1 = this;
return (new cljs.core.async.t16967(self__.fn1,self__._,self__.meta16965,self__.map_LT_,self__.f,self__.ch,meta16968__$1));
});})(___$1))
;

cljs.core.async.t16967.cljs$lang$type = true;

cljs.core.async.t16967.cljs$lang$ctorStr = "cljs.core.async/t16967";

cljs.core.async.t16967.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13196__auto__,writer__13197__auto__,opt__13198__auto__){
return cljs.core._write.call(null,writer__13197__auto__,"cljs.core.async/t16967");
});})(___$1))
;

cljs.core.async.__GT_t16967 = ((function (___$1){
return (function __GT_t16967(fn1__$1,___$2,meta16965__$1,map_LT___$1,f__$1,ch__$1,meta16968){
return (new cljs.core.async.t16967(fn1__$1,___$2,meta16965__$1,map_LT___$1,f__$1,ch__$1,meta16968));
});})(___$1))
;

}

return (new cljs.core.async.t16967(fn1,___$1,self__.meta16965,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/.repl/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12595__auto__ = ret;
if(cljs.core.truth_(and__12595__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12595__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t16964.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16964.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16966){
var self__ = this;
var _16966__$1 = this;
return self__.meta16965;
});

cljs.core.async.t16964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16966,meta16965__$1){
var self__ = this;
var _16966__$1 = this;
return (new cljs.core.async.t16964(self__.ch,self__.f,self__.map_LT_,meta16965__$1));
});

cljs.core.async.t16964.cljs$lang$type = true;

cljs.core.async.t16964.cljs$lang$ctorStr = "cljs.core.async/t16964";

cljs.core.async.t16964.cljs$lang$ctorPrWriter = (function (this__13196__auto__,writer__13197__auto__,opt__13198__auto__){
return cljs.core._write.call(null,writer__13197__auto__,"cljs.core.async/t16964");
});

cljs.core.async.__GT_t16964 = (function __GT_t16964(ch__$1,f__$1,map_LT___$1,meta16965){
return (new cljs.core.async.t16964(ch__$1,f__$1,map_LT___$1,meta16965));
});

}

return (new cljs.core.async.t16964(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/.repl/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t16973 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16973 = (function (ch,f,map_GT_,meta16974){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16974 = meta16974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16973.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t16973.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16973.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16975){
var self__ = this;
var _16975__$1 = this;
return self__.meta16974;
});

cljs.core.async.t16973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16975,meta16974__$1){
var self__ = this;
var _16975__$1 = this;
return (new cljs.core.async.t16973(self__.ch,self__.f,self__.map_GT_,meta16974__$1));
});

cljs.core.async.t16973.cljs$lang$type = true;

cljs.core.async.t16973.cljs$lang$ctorStr = "cljs.core.async/t16973";

cljs.core.async.t16973.cljs$lang$ctorPrWriter = (function (this__13196__auto__,writer__13197__auto__,opt__13198__auto__){
return cljs.core._write.call(null,writer__13197__auto__,"cljs.core.async/t16973");
});

cljs.core.async.__GT_t16973 = (function __GT_t16973(ch__$1,f__$1,map_GT___$1,meta16974){
return (new cljs.core.async.t16973(ch__$1,f__$1,map_GT___$1,meta16974));
});

}

return (new cljs.core.async.t16973(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/.repl/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t16979 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16979 = (function (ch,p,filter_GT_,meta16980){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16980 = meta16980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16979.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t16979.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16979.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16979.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16981){
var self__ = this;
var _16981__$1 = this;
return self__.meta16980;
});

cljs.core.async.t16979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16981,meta16980__$1){
var self__ = this;
var _16981__$1 = this;
return (new cljs.core.async.t16979(self__.ch,self__.p,self__.filter_GT_,meta16980__$1));
});

cljs.core.async.t16979.cljs$lang$type = true;

cljs.core.async.t16979.cljs$lang$ctorStr = "cljs.core.async/t16979";

cljs.core.async.t16979.cljs$lang$ctorPrWriter = (function (this__13196__auto__,writer__13197__auto__,opt__13198__auto__){
return cljs.core._write.call(null,writer__13197__auto__,"cljs.core.async/t16979");
});

cljs.core.async.__GT_t16979 = (function __GT_t16979(ch__$1,p__$1,filter_GT___$1,meta16980){
return (new cljs.core.async.t16979(ch__$1,p__$1,filter_GT___$1,meta16980));
});

}

return (new cljs.core.async.t16979(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/.repl/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14527__auto___17064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___17064,out){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___17064,out){
return (function (state_17043){
var state_val_17044 = (state_17043[(1)]);
if((state_val_17044 === (7))){
var inst_17039 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17045_17065 = state_17043__$1;
(statearr_17045_17065[(2)] = inst_17039);

(statearr_17045_17065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (1))){
var state_17043__$1 = state_17043;
var statearr_17046_17066 = state_17043__$1;
(statearr_17046_17066[(2)] = null);

(statearr_17046_17066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (4))){
var inst_17025 = (state_17043[(7)]);
var inst_17025__$1 = (state_17043[(2)]);
var inst_17026 = (inst_17025__$1 == null);
var state_17043__$1 = (function (){var statearr_17047 = state_17043;
(statearr_17047[(7)] = inst_17025__$1);

return statearr_17047;
})();
if(cljs.core.truth_(inst_17026)){
var statearr_17048_17067 = state_17043__$1;
(statearr_17048_17067[(1)] = (5));

} else {
var statearr_17049_17068 = state_17043__$1;
(statearr_17049_17068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (6))){
var inst_17025 = (state_17043[(7)]);
var inst_17030 = p.call(null,inst_17025);
var state_17043__$1 = state_17043;
if(cljs.core.truth_(inst_17030)){
var statearr_17050_17069 = state_17043__$1;
(statearr_17050_17069[(1)] = (8));

} else {
var statearr_17051_17070 = state_17043__$1;
(statearr_17051_17070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (3))){
var inst_17041 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17043__$1,inst_17041);
} else {
if((state_val_17044 === (2))){
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17043__$1,(4),ch);
} else {
if((state_val_17044 === (11))){
var inst_17033 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17052_17071 = state_17043__$1;
(statearr_17052_17071[(2)] = inst_17033);

(statearr_17052_17071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (9))){
var state_17043__$1 = state_17043;
var statearr_17053_17072 = state_17043__$1;
(statearr_17053_17072[(2)] = null);

(statearr_17053_17072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (5))){
var inst_17028 = cljs.core.async.close_BANG_.call(null,out);
var state_17043__$1 = state_17043;
var statearr_17054_17073 = state_17043__$1;
(statearr_17054_17073[(2)] = inst_17028);

(statearr_17054_17073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (10))){
var inst_17036 = (state_17043[(2)]);
var state_17043__$1 = (function (){var statearr_17055 = state_17043;
(statearr_17055[(8)] = inst_17036);

return statearr_17055;
})();
var statearr_17056_17074 = state_17043__$1;
(statearr_17056_17074[(2)] = null);

(statearr_17056_17074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (8))){
var inst_17025 = (state_17043[(7)]);
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17043__$1,(11),out,inst_17025);
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
}
}
}
});})(c__14527__auto___17064,out))
;
return ((function (switch__14512__auto__,c__14527__auto___17064,out){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_17060 = [null,null,null,null,null,null,null,null,null];
(statearr_17060[(0)] = state_machine__14513__auto__);

(statearr_17060[(1)] = (1));

return statearr_17060;
});
var state_machine__14513__auto____1 = (function (state_17043){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_17043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e17061){if((e17061 instanceof Object)){
var ex__14516__auto__ = e17061;
var statearr_17062_17075 = state_17043;
(statearr_17062_17075[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17076 = state_17043;
state_17043 = G__17076;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_17043){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_17043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___17064,out))
})();
var state__14529__auto__ = (function (){var statearr_17063 = f__14528__auto__.call(null);
(statearr_17063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___17064);

return statearr_17063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___17064,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto__){
return (function (state_17242){
var state_val_17243 = (state_17242[(1)]);
if((state_val_17243 === (7))){
var inst_17238 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17244_17285 = state_17242__$1;
(statearr_17244_17285[(2)] = inst_17238);

(statearr_17244_17285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (20))){
var inst_17208 = (state_17242[(7)]);
var inst_17219 = (state_17242[(2)]);
var inst_17220 = cljs.core.next.call(null,inst_17208);
var inst_17194 = inst_17220;
var inst_17195 = null;
var inst_17196 = (0);
var inst_17197 = (0);
var state_17242__$1 = (function (){var statearr_17245 = state_17242;
(statearr_17245[(8)] = inst_17197);

(statearr_17245[(9)] = inst_17196);

(statearr_17245[(10)] = inst_17195);

(statearr_17245[(11)] = inst_17219);

(statearr_17245[(12)] = inst_17194);

return statearr_17245;
})();
var statearr_17246_17286 = state_17242__$1;
(statearr_17246_17286[(2)] = null);

(statearr_17246_17286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (1))){
var state_17242__$1 = state_17242;
var statearr_17247_17287 = state_17242__$1;
(statearr_17247_17287[(2)] = null);

(statearr_17247_17287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (4))){
var inst_17183 = (state_17242[(13)]);
var inst_17183__$1 = (state_17242[(2)]);
var inst_17184 = (inst_17183__$1 == null);
var state_17242__$1 = (function (){var statearr_17248 = state_17242;
(statearr_17248[(13)] = inst_17183__$1);

return statearr_17248;
})();
if(cljs.core.truth_(inst_17184)){
var statearr_17249_17288 = state_17242__$1;
(statearr_17249_17288[(1)] = (5));

} else {
var statearr_17250_17289 = state_17242__$1;
(statearr_17250_17289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (15))){
var state_17242__$1 = state_17242;
var statearr_17254_17290 = state_17242__$1;
(statearr_17254_17290[(2)] = null);

(statearr_17254_17290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (21))){
var state_17242__$1 = state_17242;
var statearr_17255_17291 = state_17242__$1;
(statearr_17255_17291[(2)] = null);

(statearr_17255_17291[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (13))){
var inst_17197 = (state_17242[(8)]);
var inst_17196 = (state_17242[(9)]);
var inst_17195 = (state_17242[(10)]);
var inst_17194 = (state_17242[(12)]);
var inst_17204 = (state_17242[(2)]);
var inst_17205 = (inst_17197 + (1));
var tmp17251 = inst_17196;
var tmp17252 = inst_17195;
var tmp17253 = inst_17194;
var inst_17194__$1 = tmp17253;
var inst_17195__$1 = tmp17252;
var inst_17196__$1 = tmp17251;
var inst_17197__$1 = inst_17205;
var state_17242__$1 = (function (){var statearr_17256 = state_17242;
(statearr_17256[(8)] = inst_17197__$1);

(statearr_17256[(9)] = inst_17196__$1);

(statearr_17256[(10)] = inst_17195__$1);

(statearr_17256[(12)] = inst_17194__$1);

(statearr_17256[(14)] = inst_17204);

return statearr_17256;
})();
var statearr_17257_17292 = state_17242__$1;
(statearr_17257_17292[(2)] = null);

(statearr_17257_17292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (22))){
var state_17242__$1 = state_17242;
var statearr_17258_17293 = state_17242__$1;
(statearr_17258_17293[(2)] = null);

(statearr_17258_17293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (6))){
var inst_17183 = (state_17242[(13)]);
var inst_17192 = f.call(null,inst_17183);
var inst_17193 = cljs.core.seq.call(null,inst_17192);
var inst_17194 = inst_17193;
var inst_17195 = null;
var inst_17196 = (0);
var inst_17197 = (0);
var state_17242__$1 = (function (){var statearr_17259 = state_17242;
(statearr_17259[(8)] = inst_17197);

(statearr_17259[(9)] = inst_17196);

(statearr_17259[(10)] = inst_17195);

(statearr_17259[(12)] = inst_17194);

return statearr_17259;
})();
var statearr_17260_17294 = state_17242__$1;
(statearr_17260_17294[(2)] = null);

(statearr_17260_17294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (17))){
var inst_17208 = (state_17242[(7)]);
var inst_17212 = cljs.core.chunk_first.call(null,inst_17208);
var inst_17213 = cljs.core.chunk_rest.call(null,inst_17208);
var inst_17214 = cljs.core.count.call(null,inst_17212);
var inst_17194 = inst_17213;
var inst_17195 = inst_17212;
var inst_17196 = inst_17214;
var inst_17197 = (0);
var state_17242__$1 = (function (){var statearr_17261 = state_17242;
(statearr_17261[(8)] = inst_17197);

(statearr_17261[(9)] = inst_17196);

(statearr_17261[(10)] = inst_17195);

(statearr_17261[(12)] = inst_17194);

return statearr_17261;
})();
var statearr_17262_17295 = state_17242__$1;
(statearr_17262_17295[(2)] = null);

(statearr_17262_17295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (3))){
var inst_17240 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17242__$1,inst_17240);
} else {
if((state_val_17243 === (12))){
var inst_17228 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17263_17296 = state_17242__$1;
(statearr_17263_17296[(2)] = inst_17228);

(statearr_17263_17296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (2))){
var state_17242__$1 = state_17242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17242__$1,(4),in$);
} else {
if((state_val_17243 === (23))){
var inst_17236 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17264_17297 = state_17242__$1;
(statearr_17264_17297[(2)] = inst_17236);

(statearr_17264_17297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (19))){
var inst_17223 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17265_17298 = state_17242__$1;
(statearr_17265_17298[(2)] = inst_17223);

(statearr_17265_17298[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (11))){
var inst_17208 = (state_17242[(7)]);
var inst_17194 = (state_17242[(12)]);
var inst_17208__$1 = cljs.core.seq.call(null,inst_17194);
var state_17242__$1 = (function (){var statearr_17266 = state_17242;
(statearr_17266[(7)] = inst_17208__$1);

return statearr_17266;
})();
if(inst_17208__$1){
var statearr_17267_17299 = state_17242__$1;
(statearr_17267_17299[(1)] = (14));

} else {
var statearr_17268_17300 = state_17242__$1;
(statearr_17268_17300[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (9))){
var inst_17230 = (state_17242[(2)]);
var inst_17231 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17242__$1 = (function (){var statearr_17269 = state_17242;
(statearr_17269[(15)] = inst_17230);

return statearr_17269;
})();
if(cljs.core.truth_(inst_17231)){
var statearr_17270_17301 = state_17242__$1;
(statearr_17270_17301[(1)] = (21));

} else {
var statearr_17271_17302 = state_17242__$1;
(statearr_17271_17302[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (5))){
var inst_17186 = cljs.core.async.close_BANG_.call(null,out);
var state_17242__$1 = state_17242;
var statearr_17272_17303 = state_17242__$1;
(statearr_17272_17303[(2)] = inst_17186);

(statearr_17272_17303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (14))){
var inst_17208 = (state_17242[(7)]);
var inst_17210 = cljs.core.chunked_seq_QMARK_.call(null,inst_17208);
var state_17242__$1 = state_17242;
if(inst_17210){
var statearr_17273_17304 = state_17242__$1;
(statearr_17273_17304[(1)] = (17));

} else {
var statearr_17274_17305 = state_17242__$1;
(statearr_17274_17305[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (16))){
var inst_17226 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17275_17306 = state_17242__$1;
(statearr_17275_17306[(2)] = inst_17226);

(statearr_17275_17306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (10))){
var inst_17197 = (state_17242[(8)]);
var inst_17195 = (state_17242[(10)]);
var inst_17202 = cljs.core._nth.call(null,inst_17195,inst_17197);
var state_17242__$1 = state_17242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17242__$1,(13),out,inst_17202);
} else {
if((state_val_17243 === (18))){
var inst_17208 = (state_17242[(7)]);
var inst_17217 = cljs.core.first.call(null,inst_17208);
var state_17242__$1 = state_17242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17242__$1,(20),out,inst_17217);
} else {
if((state_val_17243 === (8))){
var inst_17197 = (state_17242[(8)]);
var inst_17196 = (state_17242[(9)]);
var inst_17199 = (inst_17197 < inst_17196);
var inst_17200 = inst_17199;
var state_17242__$1 = state_17242;
if(cljs.core.truth_(inst_17200)){
var statearr_17276_17307 = state_17242__$1;
(statearr_17276_17307[(1)] = (10));

} else {
var statearr_17277_17308 = state_17242__$1;
(statearr_17277_17308[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
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
var statearr_17281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17281[(0)] = state_machine__14513__auto__);

(statearr_17281[(1)] = (1));

return statearr_17281;
});
var state_machine__14513__auto____1 = (function (state_17242){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_17242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e17282){if((e17282 instanceof Object)){
var ex__14516__auto__ = e17282;
var statearr_17283_17309 = state_17242;
(statearr_17283_17309[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17310 = state_17242;
state_17242 = G__17310;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_17242){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_17242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_17284 = f__14528__auto__.call(null);
(statearr_17284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto__);

return statearr_17284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14527__auto___17407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___17407,out){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___17407,out){
return (function (state_17382){
var state_val_17383 = (state_17382[(1)]);
if((state_val_17383 === (7))){
var inst_17377 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17384_17408 = state_17382__$1;
(statearr_17384_17408[(2)] = inst_17377);

(statearr_17384_17408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (1))){
var inst_17359 = null;
var state_17382__$1 = (function (){var statearr_17385 = state_17382;
(statearr_17385[(7)] = inst_17359);

return statearr_17385;
})();
var statearr_17386_17409 = state_17382__$1;
(statearr_17386_17409[(2)] = null);

(statearr_17386_17409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (4))){
var inst_17362 = (state_17382[(8)]);
var inst_17362__$1 = (state_17382[(2)]);
var inst_17363 = (inst_17362__$1 == null);
var inst_17364 = cljs.core.not.call(null,inst_17363);
var state_17382__$1 = (function (){var statearr_17387 = state_17382;
(statearr_17387[(8)] = inst_17362__$1);

return statearr_17387;
})();
if(inst_17364){
var statearr_17388_17410 = state_17382__$1;
(statearr_17388_17410[(1)] = (5));

} else {
var statearr_17389_17411 = state_17382__$1;
(statearr_17389_17411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (6))){
var state_17382__$1 = state_17382;
var statearr_17390_17412 = state_17382__$1;
(statearr_17390_17412[(2)] = null);

(statearr_17390_17412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (3))){
var inst_17379 = (state_17382[(2)]);
var inst_17380 = cljs.core.async.close_BANG_.call(null,out);
var state_17382__$1 = (function (){var statearr_17391 = state_17382;
(statearr_17391[(9)] = inst_17379);

return statearr_17391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17382__$1,inst_17380);
} else {
if((state_val_17383 === (2))){
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17382__$1,(4),ch);
} else {
if((state_val_17383 === (11))){
var inst_17362 = (state_17382[(8)]);
var inst_17371 = (state_17382[(2)]);
var inst_17359 = inst_17362;
var state_17382__$1 = (function (){var statearr_17392 = state_17382;
(statearr_17392[(10)] = inst_17371);

(statearr_17392[(7)] = inst_17359);

return statearr_17392;
})();
var statearr_17393_17413 = state_17382__$1;
(statearr_17393_17413[(2)] = null);

(statearr_17393_17413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (9))){
var inst_17362 = (state_17382[(8)]);
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17382__$1,(11),out,inst_17362);
} else {
if((state_val_17383 === (5))){
var inst_17362 = (state_17382[(8)]);
var inst_17359 = (state_17382[(7)]);
var inst_17366 = cljs.core._EQ_.call(null,inst_17362,inst_17359);
var state_17382__$1 = state_17382;
if(inst_17366){
var statearr_17395_17414 = state_17382__$1;
(statearr_17395_17414[(1)] = (8));

} else {
var statearr_17396_17415 = state_17382__$1;
(statearr_17396_17415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (10))){
var inst_17374 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17397_17416 = state_17382__$1;
(statearr_17397_17416[(2)] = inst_17374);

(statearr_17397_17416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (8))){
var inst_17359 = (state_17382[(7)]);
var tmp17394 = inst_17359;
var inst_17359__$1 = tmp17394;
var state_17382__$1 = (function (){var statearr_17398 = state_17382;
(statearr_17398[(7)] = inst_17359__$1);

return statearr_17398;
})();
var statearr_17399_17417 = state_17382__$1;
(statearr_17399_17417[(2)] = null);

(statearr_17399_17417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__14527__auto___17407,out))
;
return ((function (switch__14512__auto__,c__14527__auto___17407,out){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_17403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17403[(0)] = state_machine__14513__auto__);

(statearr_17403[(1)] = (1));

return statearr_17403;
});
var state_machine__14513__auto____1 = (function (state_17382){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_17382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e17404){if((e17404 instanceof Object)){
var ex__14516__auto__ = e17404;
var statearr_17405_17418 = state_17382;
(statearr_17405_17418[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17419 = state_17382;
state_17382 = G__17419;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_17382){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_17382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___17407,out))
})();
var state__14529__auto__ = (function (){var statearr_17406 = f__14528__auto__.call(null);
(statearr_17406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___17407);

return statearr_17406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___17407,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14527__auto___17554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___17554,out){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___17554,out){
return (function (state_17524){
var state_val_17525 = (state_17524[(1)]);
if((state_val_17525 === (7))){
var inst_17520 = (state_17524[(2)]);
var state_17524__$1 = state_17524;
var statearr_17526_17555 = state_17524__$1;
(statearr_17526_17555[(2)] = inst_17520);

(statearr_17526_17555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (1))){
var inst_17487 = (new Array(n));
var inst_17488 = inst_17487;
var inst_17489 = (0);
var state_17524__$1 = (function (){var statearr_17527 = state_17524;
(statearr_17527[(7)] = inst_17488);

(statearr_17527[(8)] = inst_17489);

return statearr_17527;
})();
var statearr_17528_17556 = state_17524__$1;
(statearr_17528_17556[(2)] = null);

(statearr_17528_17556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (4))){
var inst_17492 = (state_17524[(9)]);
var inst_17492__$1 = (state_17524[(2)]);
var inst_17493 = (inst_17492__$1 == null);
var inst_17494 = cljs.core.not.call(null,inst_17493);
var state_17524__$1 = (function (){var statearr_17529 = state_17524;
(statearr_17529[(9)] = inst_17492__$1);

return statearr_17529;
})();
if(inst_17494){
var statearr_17530_17557 = state_17524__$1;
(statearr_17530_17557[(1)] = (5));

} else {
var statearr_17531_17558 = state_17524__$1;
(statearr_17531_17558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (15))){
var inst_17514 = (state_17524[(2)]);
var state_17524__$1 = state_17524;
var statearr_17532_17559 = state_17524__$1;
(statearr_17532_17559[(2)] = inst_17514);

(statearr_17532_17559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (13))){
var state_17524__$1 = state_17524;
var statearr_17533_17560 = state_17524__$1;
(statearr_17533_17560[(2)] = null);

(statearr_17533_17560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (6))){
var inst_17489 = (state_17524[(8)]);
var inst_17510 = (inst_17489 > (0));
var state_17524__$1 = state_17524;
if(cljs.core.truth_(inst_17510)){
var statearr_17534_17561 = state_17524__$1;
(statearr_17534_17561[(1)] = (12));

} else {
var statearr_17535_17562 = state_17524__$1;
(statearr_17535_17562[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (3))){
var inst_17522 = (state_17524[(2)]);
var state_17524__$1 = state_17524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17524__$1,inst_17522);
} else {
if((state_val_17525 === (12))){
var inst_17488 = (state_17524[(7)]);
var inst_17512 = cljs.core.vec.call(null,inst_17488);
var state_17524__$1 = state_17524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17524__$1,(15),out,inst_17512);
} else {
if((state_val_17525 === (2))){
var state_17524__$1 = state_17524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17524__$1,(4),ch);
} else {
if((state_val_17525 === (11))){
var inst_17504 = (state_17524[(2)]);
var inst_17505 = (new Array(n));
var inst_17488 = inst_17505;
var inst_17489 = (0);
var state_17524__$1 = (function (){var statearr_17536 = state_17524;
(statearr_17536[(7)] = inst_17488);

(statearr_17536[(8)] = inst_17489);

(statearr_17536[(10)] = inst_17504);

return statearr_17536;
})();
var statearr_17537_17563 = state_17524__$1;
(statearr_17537_17563[(2)] = null);

(statearr_17537_17563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (9))){
var inst_17488 = (state_17524[(7)]);
var inst_17502 = cljs.core.vec.call(null,inst_17488);
var state_17524__$1 = state_17524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17524__$1,(11),out,inst_17502);
} else {
if((state_val_17525 === (5))){
var inst_17492 = (state_17524[(9)]);
var inst_17497 = (state_17524[(11)]);
var inst_17488 = (state_17524[(7)]);
var inst_17489 = (state_17524[(8)]);
var inst_17496 = (inst_17488[inst_17489] = inst_17492);
var inst_17497__$1 = (inst_17489 + (1));
var inst_17498 = (inst_17497__$1 < n);
var state_17524__$1 = (function (){var statearr_17538 = state_17524;
(statearr_17538[(11)] = inst_17497__$1);

(statearr_17538[(12)] = inst_17496);

return statearr_17538;
})();
if(cljs.core.truth_(inst_17498)){
var statearr_17539_17564 = state_17524__$1;
(statearr_17539_17564[(1)] = (8));

} else {
var statearr_17540_17565 = state_17524__$1;
(statearr_17540_17565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (14))){
var inst_17517 = (state_17524[(2)]);
var inst_17518 = cljs.core.async.close_BANG_.call(null,out);
var state_17524__$1 = (function (){var statearr_17542 = state_17524;
(statearr_17542[(13)] = inst_17517);

return statearr_17542;
})();
var statearr_17543_17566 = state_17524__$1;
(statearr_17543_17566[(2)] = inst_17518);

(statearr_17543_17566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (10))){
var inst_17508 = (state_17524[(2)]);
var state_17524__$1 = state_17524;
var statearr_17544_17567 = state_17524__$1;
(statearr_17544_17567[(2)] = inst_17508);

(statearr_17544_17567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (8))){
var inst_17497 = (state_17524[(11)]);
var inst_17488 = (state_17524[(7)]);
var tmp17541 = inst_17488;
var inst_17488__$1 = tmp17541;
var inst_17489 = inst_17497;
var state_17524__$1 = (function (){var statearr_17545 = state_17524;
(statearr_17545[(7)] = inst_17488__$1);

(statearr_17545[(8)] = inst_17489);

return statearr_17545;
})();
var statearr_17546_17568 = state_17524__$1;
(statearr_17546_17568[(2)] = null);

(statearr_17546_17568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__14527__auto___17554,out))
;
return ((function (switch__14512__auto__,c__14527__auto___17554,out){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_17550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17550[(0)] = state_machine__14513__auto__);

(statearr_17550[(1)] = (1));

return statearr_17550;
});
var state_machine__14513__auto____1 = (function (state_17524){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_17524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e17551){if((e17551 instanceof Object)){
var ex__14516__auto__ = e17551;
var statearr_17552_17569 = state_17524;
(statearr_17552_17569[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17570 = state_17524;
state_17524 = G__17570;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_17524){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_17524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___17554,out))
})();
var state__14529__auto__ = (function (){var statearr_17553 = f__14528__auto__.call(null);
(statearr_17553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___17554);

return statearr_17553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___17554,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14527__auto___17713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___17713,out){
return (function (){
var f__14528__auto__ = (function (){var switch__14512__auto__ = ((function (c__14527__auto___17713,out){
return (function (state_17683){
var state_val_17684 = (state_17683[(1)]);
if((state_val_17684 === (7))){
var inst_17679 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
var statearr_17685_17714 = state_17683__$1;
(statearr_17685_17714[(2)] = inst_17679);

(statearr_17685_17714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (1))){
var inst_17642 = [];
var inst_17643 = inst_17642;
var inst_17644 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17683__$1 = (function (){var statearr_17686 = state_17683;
(statearr_17686[(7)] = inst_17643);

(statearr_17686[(8)] = inst_17644);

return statearr_17686;
})();
var statearr_17687_17715 = state_17683__$1;
(statearr_17687_17715[(2)] = null);

(statearr_17687_17715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (4))){
var inst_17647 = (state_17683[(9)]);
var inst_17647__$1 = (state_17683[(2)]);
var inst_17648 = (inst_17647__$1 == null);
var inst_17649 = cljs.core.not.call(null,inst_17648);
var state_17683__$1 = (function (){var statearr_17688 = state_17683;
(statearr_17688[(9)] = inst_17647__$1);

return statearr_17688;
})();
if(inst_17649){
var statearr_17689_17716 = state_17683__$1;
(statearr_17689_17716[(1)] = (5));

} else {
var statearr_17690_17717 = state_17683__$1;
(statearr_17690_17717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (15))){
var inst_17673 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
var statearr_17691_17718 = state_17683__$1;
(statearr_17691_17718[(2)] = inst_17673);

(statearr_17691_17718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (13))){
var state_17683__$1 = state_17683;
var statearr_17692_17719 = state_17683__$1;
(statearr_17692_17719[(2)] = null);

(statearr_17692_17719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (6))){
var inst_17643 = (state_17683[(7)]);
var inst_17668 = inst_17643.length;
var inst_17669 = (inst_17668 > (0));
var state_17683__$1 = state_17683;
if(cljs.core.truth_(inst_17669)){
var statearr_17693_17720 = state_17683__$1;
(statearr_17693_17720[(1)] = (12));

} else {
var statearr_17694_17721 = state_17683__$1;
(statearr_17694_17721[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (3))){
var inst_17681 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17683__$1,inst_17681);
} else {
if((state_val_17684 === (12))){
var inst_17643 = (state_17683[(7)]);
var inst_17671 = cljs.core.vec.call(null,inst_17643);
var state_17683__$1 = state_17683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17683__$1,(15),out,inst_17671);
} else {
if((state_val_17684 === (2))){
var state_17683__$1 = state_17683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17683__$1,(4),ch);
} else {
if((state_val_17684 === (11))){
var inst_17647 = (state_17683[(9)]);
var inst_17651 = (state_17683[(10)]);
var inst_17661 = (state_17683[(2)]);
var inst_17662 = [];
var inst_17663 = inst_17662.push(inst_17647);
var inst_17643 = inst_17662;
var inst_17644 = inst_17651;
var state_17683__$1 = (function (){var statearr_17695 = state_17683;
(statearr_17695[(7)] = inst_17643);

(statearr_17695[(11)] = inst_17661);

(statearr_17695[(8)] = inst_17644);

(statearr_17695[(12)] = inst_17663);

return statearr_17695;
})();
var statearr_17696_17722 = state_17683__$1;
(statearr_17696_17722[(2)] = null);

(statearr_17696_17722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (9))){
var inst_17643 = (state_17683[(7)]);
var inst_17659 = cljs.core.vec.call(null,inst_17643);
var state_17683__$1 = state_17683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17683__$1,(11),out,inst_17659);
} else {
if((state_val_17684 === (5))){
var inst_17647 = (state_17683[(9)]);
var inst_17651 = (state_17683[(10)]);
var inst_17644 = (state_17683[(8)]);
var inst_17651__$1 = f.call(null,inst_17647);
var inst_17652 = cljs.core._EQ_.call(null,inst_17651__$1,inst_17644);
var inst_17653 = cljs.core.keyword_identical_QMARK_.call(null,inst_17644,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17654 = (inst_17652) || (inst_17653);
var state_17683__$1 = (function (){var statearr_17697 = state_17683;
(statearr_17697[(10)] = inst_17651__$1);

return statearr_17697;
})();
if(cljs.core.truth_(inst_17654)){
var statearr_17698_17723 = state_17683__$1;
(statearr_17698_17723[(1)] = (8));

} else {
var statearr_17699_17724 = state_17683__$1;
(statearr_17699_17724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (14))){
var inst_17676 = (state_17683[(2)]);
var inst_17677 = cljs.core.async.close_BANG_.call(null,out);
var state_17683__$1 = (function (){var statearr_17701 = state_17683;
(statearr_17701[(13)] = inst_17676);

return statearr_17701;
})();
var statearr_17702_17725 = state_17683__$1;
(statearr_17702_17725[(2)] = inst_17677);

(statearr_17702_17725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (10))){
var inst_17666 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
var statearr_17703_17726 = state_17683__$1;
(statearr_17703_17726[(2)] = inst_17666);

(statearr_17703_17726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (8))){
var inst_17643 = (state_17683[(7)]);
var inst_17647 = (state_17683[(9)]);
var inst_17651 = (state_17683[(10)]);
var inst_17656 = inst_17643.push(inst_17647);
var tmp17700 = inst_17643;
var inst_17643__$1 = tmp17700;
var inst_17644 = inst_17651;
var state_17683__$1 = (function (){var statearr_17704 = state_17683;
(statearr_17704[(7)] = inst_17643__$1);

(statearr_17704[(14)] = inst_17656);

(statearr_17704[(8)] = inst_17644);

return statearr_17704;
})();
var statearr_17705_17727 = state_17683__$1;
(statearr_17705_17727[(2)] = null);

(statearr_17705_17727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__14527__auto___17713,out))
;
return ((function (switch__14512__auto__,c__14527__auto___17713,out){
return (function() {
var state_machine__14513__auto__ = null;
var state_machine__14513__auto____0 = (function (){
var statearr_17709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17709[(0)] = state_machine__14513__auto__);

(statearr_17709[(1)] = (1));

return statearr_17709;
});
var state_machine__14513__auto____1 = (function (state_17683){
while(true){
var ret_value__14514__auto__ = (function (){try{while(true){
var result__14515__auto__ = switch__14512__auto__.call(null,state_17683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14515__auto__;
}
break;
}
}catch (e17710){if((e17710 instanceof Object)){
var ex__14516__auto__ = e17710;
var statearr_17711_17728 = state_17683;
(statearr_17711_17728[(5)] = ex__14516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17729 = state_17683;
state_17683 = G__17729;
continue;
} else {
return ret_value__14514__auto__;
}
break;
}
});
state_machine__14513__auto__ = function(state_17683){
switch(arguments.length){
case 0:
return state_machine__14513__auto____0.call(this);
case 1:
return state_machine__14513__auto____1.call(this,state_17683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14513__auto____0;
state_machine__14513__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14513__auto____1;
return state_machine__14513__auto__;
})()
;})(switch__14512__auto__,c__14527__auto___17713,out))
})();
var state__14529__auto__ = (function (){var statearr_17712 = f__14528__auto__.call(null);
(statearr_17712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14527__auto___17713);

return statearr_17712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___17713,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
