// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t25581 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25581 = (function (f,fn_handler,meta25582){
this.f = f;
this.fn_handler = fn_handler;
this.meta25582 = meta25582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25581.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25583){
var self__ = this;
var _25583__$1 = this;
return self__.meta25582;
});

cljs.core.async.t25581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25583,meta25582__$1){
var self__ = this;
var _25583__$1 = this;
return (new cljs.core.async.t25581(self__.f,self__.fn_handler,meta25582__$1));
});

cljs.core.async.t25581.cljs$lang$type = true;

cljs.core.async.t25581.cljs$lang$ctorStr = "cljs.core.async/t25581";

cljs.core.async.t25581.cljs$lang$ctorPrWriter = (function (this__12774__auto__,writer__12775__auto__,opt__12776__auto__){
return cljs.core._write.call(null,writer__12775__auto__,"cljs.core.async/t25581");
});

cljs.core.async.__GT_t25581 = (function __GT_t25581(f__$1,fn_handler__$1,meta25582){
return (new cljs.core.async.t25581(f__$1,fn_handler__$1,meta25582));
});

}

return (new cljs.core.async.t25581(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
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
var G__25585 = buff;
if(G__25585){
var bit__12868__auto__ = null;
if(cljs.core.truth_((function (){var or__12187__auto__ = bit__12868__auto__;
if(cljs.core.truth_(or__12187__auto__)){
return or__12187__auto__;
} else {
return G__25585.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25585.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25585);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25585);
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
var val_25586 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25586);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25586,ret){
return (function (){
return fn1.call(null,val_25586);
});})(val_25586,ret))
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
var n__13074__auto___25587 = n;
var x_25588 = (0);
while(true){
if((x_25588 < n__13074__auto___25587)){
(a[x_25588] = (0));

var G__25589 = (x_25588 + (1));
x_25588 = G__25589;
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

var G__25590 = (i + (1));
i = G__25590;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25594 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25594 = (function (flag,alt_flag,meta25595){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25595 = meta25595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25594.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25596){
var self__ = this;
var _25596__$1 = this;
return self__.meta25595;
});})(flag))
;

cljs.core.async.t25594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25596,meta25595__$1){
var self__ = this;
var _25596__$1 = this;
return (new cljs.core.async.t25594(self__.flag,self__.alt_flag,meta25595__$1));
});})(flag))
;

cljs.core.async.t25594.cljs$lang$type = true;

cljs.core.async.t25594.cljs$lang$ctorStr = "cljs.core.async/t25594";

cljs.core.async.t25594.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12774__auto__,writer__12775__auto__,opt__12776__auto__){
return cljs.core._write.call(null,writer__12775__auto__,"cljs.core.async/t25594");
});})(flag))
;

cljs.core.async.__GT_t25594 = ((function (flag){
return (function __GT_t25594(flag__$1,alt_flag__$1,meta25595){
return (new cljs.core.async.t25594(flag__$1,alt_flag__$1,meta25595));
});})(flag))
;

}

return (new cljs.core.async.t25594(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t25600 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25600 = (function (cb,flag,alt_handler,meta25601){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25601 = meta25601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25600.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25602){
var self__ = this;
var _25602__$1 = this;
return self__.meta25601;
});

cljs.core.async.t25600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25602,meta25601__$1){
var self__ = this;
var _25602__$1 = this;
return (new cljs.core.async.t25600(self__.cb,self__.flag,self__.alt_handler,meta25601__$1));
});

cljs.core.async.t25600.cljs$lang$type = true;

cljs.core.async.t25600.cljs$lang$ctorStr = "cljs.core.async/t25600";

cljs.core.async.t25600.cljs$lang$ctorPrWriter = (function (this__12774__auto__,writer__12775__auto__,opt__12776__auto__){
return cljs.core._write.call(null,writer__12775__auto__,"cljs.core.async/t25600");
});

cljs.core.async.__GT_t25600 = (function __GT_t25600(cb__$1,flag__$1,alt_handler__$1,meta25601){
return (new cljs.core.async.t25600(cb__$1,flag__$1,alt_handler__$1,meta25601));
});

}

return (new cljs.core.async.t25600(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
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
return (function (p1__25603_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25603_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25604_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25604_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12187__auto__ = wport;
if(cljs.core.truth_(or__12187__auto__)){
return or__12187__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25605 = (i + (1));
i = G__25605;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12187__auto__ = ret;
if(cljs.core.truth_(or__12187__auto__)){
return or__12187__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12175__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12175__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12175__auto__;
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
var alts_BANG___delegate = function (ports,p__25606){
var map__25608 = p__25606;
var map__25608__$1 = ((cljs.core.seq_QMARK_.call(null,map__25608))?cljs.core.apply.call(null,cljs.core.hash_map,map__25608):map__25608);
var opts = map__25608__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25606 = null;
if (arguments.length > 1) {
var G__25609__i = 0, G__25609__a = new Array(arguments.length -  1);
while (G__25609__i < G__25609__a.length) {G__25609__a[G__25609__i] = arguments[G__25609__i + 1]; ++G__25609__i;}
  p__25606 = new cljs.core.IndexedSeq(G__25609__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__25606);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25610){
var ports = cljs.core.first(arglist__25610);
var p__25606 = cljs.core.rest(arglist__25610);
return alts_BANG___delegate(ports,p__25606);
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
var c__14650__auto___25705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___25705){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___25705){
return (function (state_25681){
var state_val_25682 = (state_25681[(1)]);
if((state_val_25682 === (7))){
var inst_25677 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25683_25706 = state_25681__$1;
(statearr_25683_25706[(2)] = inst_25677);

(statearr_25683_25706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (1))){
var state_25681__$1 = state_25681;
var statearr_25684_25707 = state_25681__$1;
(statearr_25684_25707[(2)] = null);

(statearr_25684_25707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (4))){
var inst_25660 = (state_25681[(7)]);
var inst_25660__$1 = (state_25681[(2)]);
var inst_25661 = (inst_25660__$1 == null);
var state_25681__$1 = (function (){var statearr_25685 = state_25681;
(statearr_25685[(7)] = inst_25660__$1);

return statearr_25685;
})();
if(cljs.core.truth_(inst_25661)){
var statearr_25686_25708 = state_25681__$1;
(statearr_25686_25708[(1)] = (5));

} else {
var statearr_25687_25709 = state_25681__$1;
(statearr_25687_25709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (13))){
var state_25681__$1 = state_25681;
var statearr_25688_25710 = state_25681__$1;
(statearr_25688_25710[(2)] = null);

(statearr_25688_25710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (6))){
var inst_25660 = (state_25681[(7)]);
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25681__$1,(11),to,inst_25660);
} else {
if((state_val_25682 === (3))){
var inst_25679 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25681__$1,inst_25679);
} else {
if((state_val_25682 === (12))){
var state_25681__$1 = state_25681;
var statearr_25689_25711 = state_25681__$1;
(statearr_25689_25711[(2)] = null);

(statearr_25689_25711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (2))){
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25681__$1,(4),from);
} else {
if((state_val_25682 === (11))){
var inst_25670 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
if(cljs.core.truth_(inst_25670)){
var statearr_25690_25712 = state_25681__$1;
(statearr_25690_25712[(1)] = (12));

} else {
var statearr_25691_25713 = state_25681__$1;
(statearr_25691_25713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (9))){
var state_25681__$1 = state_25681;
var statearr_25692_25714 = state_25681__$1;
(statearr_25692_25714[(2)] = null);

(statearr_25692_25714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (5))){
var state_25681__$1 = state_25681;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25693_25715 = state_25681__$1;
(statearr_25693_25715[(1)] = (8));

} else {
var statearr_25694_25716 = state_25681__$1;
(statearr_25694_25716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (14))){
var inst_25675 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25695_25717 = state_25681__$1;
(statearr_25695_25717[(2)] = inst_25675);

(statearr_25695_25717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (10))){
var inst_25667 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25696_25718 = state_25681__$1;
(statearr_25696_25718[(2)] = inst_25667);

(statearr_25696_25718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (8))){
var inst_25664 = cljs.core.async.close_BANG_.call(null,to);
var state_25681__$1 = state_25681;
var statearr_25697_25719 = state_25681__$1;
(statearr_25697_25719[(2)] = inst_25664);

(statearr_25697_25719[(1)] = (10));


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
});})(c__14650__auto___25705))
;
return ((function (switch__14594__auto__,c__14650__auto___25705){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_25701 = [null,null,null,null,null,null,null,null];
(statearr_25701[(0)] = state_machine__14595__auto__);

(statearr_25701[(1)] = (1));

return statearr_25701;
});
var state_machine__14595__auto____1 = (function (state_25681){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e25702){if((e25702 instanceof Object)){
var ex__14598__auto__ = e25702;
var statearr_25703_25720 = state_25681;
(statearr_25703_25720[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25721 = state_25681;
state_25681 = G__25721;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25681){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___25705))
})();
var state__14652__auto__ = (function (){var statearr_25704 = f__14651__auto__.call(null);
(statearr_25704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___25705);

return statearr_25704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___25705))
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
return (function (p__25905){
var vec__25906 = p__25905;
var v = cljs.core.nth.call(null,vec__25906,(0),null);
var p = cljs.core.nth.call(null,vec__25906,(1),null);
var job = vec__25906;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14650__auto___26088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___26088,res,vec__25906,v,p,job,jobs,results){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___26088,res,vec__25906,v,p,job,jobs,results){
return (function (state_25911){
var state_val_25912 = (state_25911[(1)]);
if((state_val_25912 === (2))){
var inst_25908 = (state_25911[(2)]);
var inst_25909 = cljs.core.async.close_BANG_.call(null,res);
var state_25911__$1 = (function (){var statearr_25913 = state_25911;
(statearr_25913[(7)] = inst_25908);

return statearr_25913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25911__$1,inst_25909);
} else {
if((state_val_25912 === (1))){
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25911__$1,(2),res,v);
} else {
return null;
}
}
});})(c__14650__auto___26088,res,vec__25906,v,p,job,jobs,results))
;
return ((function (switch__14594__auto__,c__14650__auto___26088,res,vec__25906,v,p,job,jobs,results){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_25917 = [null,null,null,null,null,null,null,null];
(statearr_25917[(0)] = state_machine__14595__auto__);

(statearr_25917[(1)] = (1));

return statearr_25917;
});
var state_machine__14595__auto____1 = (function (state_25911){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e25918){if((e25918 instanceof Object)){
var ex__14598__auto__ = e25918;
var statearr_25919_26089 = state_25911;
(statearr_25919_26089[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26090 = state_25911;
state_25911 = G__26090;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25911){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___26088,res,vec__25906,v,p,job,jobs,results))
})();
var state__14652__auto__ = (function (){var statearr_25920 = f__14651__auto__.call(null);
(statearr_25920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___26088);

return statearr_25920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___26088,res,vec__25906,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25921){
var vec__25922 = p__25921;
var v = cljs.core.nth.call(null,vec__25922,(0),null);
var p = cljs.core.nth.call(null,vec__25922,(1),null);
var job = vec__25922;
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
var n__13074__auto___26091 = n;
var __26092 = (0);
while(true){
if((__26092 < n__13074__auto___26091)){
var G__25923_26093 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25923_26093) {
case "async":
var c__14650__auto___26095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26092,c__14650__auto___26095,G__25923_26093,n__13074__auto___26091,jobs,results,process,async){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (__26092,c__14650__auto___26095,G__25923_26093,n__13074__auto___26091,jobs,results,process,async){
return (function (state_25936){
var state_val_25937 = (state_25936[(1)]);
if((state_val_25937 === (7))){
var inst_25932 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25938_26096 = state_25936__$1;
(statearr_25938_26096[(2)] = inst_25932);

(statearr_25938_26096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (6))){
var state_25936__$1 = state_25936;
var statearr_25939_26097 = state_25936__$1;
(statearr_25939_26097[(2)] = null);

(statearr_25939_26097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (5))){
var state_25936__$1 = state_25936;
var statearr_25940_26098 = state_25936__$1;
(statearr_25940_26098[(2)] = null);

(statearr_25940_26098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (4))){
var inst_25926 = (state_25936[(2)]);
var inst_25927 = async.call(null,inst_25926);
var state_25936__$1 = state_25936;
if(cljs.core.truth_(inst_25927)){
var statearr_25941_26099 = state_25936__$1;
(statearr_25941_26099[(1)] = (5));

} else {
var statearr_25942_26100 = state_25936__$1;
(statearr_25942_26100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (3))){
var inst_25934 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25936__$1,inst_25934);
} else {
if((state_val_25937 === (2))){
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25936__$1,(4),jobs);
} else {
if((state_val_25937 === (1))){
var state_25936__$1 = state_25936;
var statearr_25943_26101 = state_25936__$1;
(statearr_25943_26101[(2)] = null);

(statearr_25943_26101[(1)] = (2));


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
});})(__26092,c__14650__auto___26095,G__25923_26093,n__13074__auto___26091,jobs,results,process,async))
;
return ((function (__26092,switch__14594__auto__,c__14650__auto___26095,G__25923_26093,n__13074__auto___26091,jobs,results,process,async){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_25947 = [null,null,null,null,null,null,null];
(statearr_25947[(0)] = state_machine__14595__auto__);

(statearr_25947[(1)] = (1));

return statearr_25947;
});
var state_machine__14595__auto____1 = (function (state_25936){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e25948){if((e25948 instanceof Object)){
var ex__14598__auto__ = e25948;
var statearr_25949_26102 = state_25936;
(statearr_25949_26102[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26103 = state_25936;
state_25936 = G__26103;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25936){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(__26092,switch__14594__auto__,c__14650__auto___26095,G__25923_26093,n__13074__auto___26091,jobs,results,process,async))
})();
var state__14652__auto__ = (function (){var statearr_25950 = f__14651__auto__.call(null);
(statearr_25950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___26095);

return statearr_25950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(__26092,c__14650__auto___26095,G__25923_26093,n__13074__auto___26091,jobs,results,process,async))
);


break;
case "compute":
var c__14650__auto___26104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26092,c__14650__auto___26104,G__25923_26093,n__13074__auto___26091,jobs,results,process,async){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (__26092,c__14650__auto___26104,G__25923_26093,n__13074__auto___26091,jobs,results,process,async){
return (function (state_25963){
var state_val_25964 = (state_25963[(1)]);
if((state_val_25964 === (7))){
var inst_25959 = (state_25963[(2)]);
var state_25963__$1 = state_25963;
var statearr_25965_26105 = state_25963__$1;
(statearr_25965_26105[(2)] = inst_25959);

(statearr_25965_26105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (6))){
var state_25963__$1 = state_25963;
var statearr_25966_26106 = state_25963__$1;
(statearr_25966_26106[(2)] = null);

(statearr_25966_26106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (5))){
var state_25963__$1 = state_25963;
var statearr_25967_26107 = state_25963__$1;
(statearr_25967_26107[(2)] = null);

(statearr_25967_26107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (4))){
var inst_25953 = (state_25963[(2)]);
var inst_25954 = process.call(null,inst_25953);
var state_25963__$1 = state_25963;
if(cljs.core.truth_(inst_25954)){
var statearr_25968_26108 = state_25963__$1;
(statearr_25968_26108[(1)] = (5));

} else {
var statearr_25969_26109 = state_25963__$1;
(statearr_25969_26109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (3))){
var inst_25961 = (state_25963[(2)]);
var state_25963__$1 = state_25963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25963__$1,inst_25961);
} else {
if((state_val_25964 === (2))){
var state_25963__$1 = state_25963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25963__$1,(4),jobs);
} else {
if((state_val_25964 === (1))){
var state_25963__$1 = state_25963;
var statearr_25970_26110 = state_25963__$1;
(statearr_25970_26110[(2)] = null);

(statearr_25970_26110[(1)] = (2));


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
});})(__26092,c__14650__auto___26104,G__25923_26093,n__13074__auto___26091,jobs,results,process,async))
;
return ((function (__26092,switch__14594__auto__,c__14650__auto___26104,G__25923_26093,n__13074__auto___26091,jobs,results,process,async){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_25974 = [null,null,null,null,null,null,null];
(statearr_25974[(0)] = state_machine__14595__auto__);

(statearr_25974[(1)] = (1));

return statearr_25974;
});
var state_machine__14595__auto____1 = (function (state_25963){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e25975){if((e25975 instanceof Object)){
var ex__14598__auto__ = e25975;
var statearr_25976_26111 = state_25963;
(statearr_25976_26111[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26112 = state_25963;
state_25963 = G__26112;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25963){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(__26092,switch__14594__auto__,c__14650__auto___26104,G__25923_26093,n__13074__auto___26091,jobs,results,process,async))
})();
var state__14652__auto__ = (function (){var statearr_25977 = f__14651__auto__.call(null);
(statearr_25977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___26104);

return statearr_25977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(__26092,c__14650__auto___26104,G__25923_26093,n__13074__auto___26091,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26113 = (__26092 + (1));
__26092 = G__26113;
continue;
} else {
}
break;
}

var c__14650__auto___26114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___26114,jobs,results,process,async){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___26114,jobs,results,process,async){
return (function (state_25999){
var state_val_26000 = (state_25999[(1)]);
if((state_val_26000 === (9))){
var inst_25992 = (state_25999[(2)]);
var state_25999__$1 = (function (){var statearr_26001 = state_25999;
(statearr_26001[(7)] = inst_25992);

return statearr_26001;
})();
var statearr_26002_26115 = state_25999__$1;
(statearr_26002_26115[(2)] = null);

(statearr_26002_26115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (8))){
var inst_25985 = (state_25999[(8)]);
var inst_25990 = (state_25999[(2)]);
var state_25999__$1 = (function (){var statearr_26003 = state_25999;
(statearr_26003[(9)] = inst_25990);

return statearr_26003;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25999__$1,(9),results,inst_25985);
} else {
if((state_val_26000 === (7))){
var inst_25995 = (state_25999[(2)]);
var state_25999__$1 = state_25999;
var statearr_26004_26116 = state_25999__$1;
(statearr_26004_26116[(2)] = inst_25995);

(statearr_26004_26116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (6))){
var inst_25985 = (state_25999[(8)]);
var inst_25980 = (state_25999[(10)]);
var inst_25985__$1 = cljs.core.async.chan.call(null,(1));
var inst_25986 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25987 = [inst_25980,inst_25985__$1];
var inst_25988 = (new cljs.core.PersistentVector(null,2,(5),inst_25986,inst_25987,null));
var state_25999__$1 = (function (){var statearr_26005 = state_25999;
(statearr_26005[(8)] = inst_25985__$1);

return statearr_26005;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25999__$1,(8),jobs,inst_25988);
} else {
if((state_val_26000 === (5))){
var inst_25983 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25999__$1 = state_25999;
var statearr_26006_26117 = state_25999__$1;
(statearr_26006_26117[(2)] = inst_25983);

(statearr_26006_26117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (4))){
var inst_25980 = (state_25999[(10)]);
var inst_25980__$1 = (state_25999[(2)]);
var inst_25981 = (inst_25980__$1 == null);
var state_25999__$1 = (function (){var statearr_26007 = state_25999;
(statearr_26007[(10)] = inst_25980__$1);

return statearr_26007;
})();
if(cljs.core.truth_(inst_25981)){
var statearr_26008_26118 = state_25999__$1;
(statearr_26008_26118[(1)] = (5));

} else {
var statearr_26009_26119 = state_25999__$1;
(statearr_26009_26119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (3))){
var inst_25997 = (state_25999[(2)]);
var state_25999__$1 = state_25999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25999__$1,inst_25997);
} else {
if((state_val_26000 === (2))){
var state_25999__$1 = state_25999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25999__$1,(4),from);
} else {
if((state_val_26000 === (1))){
var state_25999__$1 = state_25999;
var statearr_26010_26120 = state_25999__$1;
(statearr_26010_26120[(2)] = null);

(statearr_26010_26120[(1)] = (2));


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
});})(c__14650__auto___26114,jobs,results,process,async))
;
return ((function (switch__14594__auto__,c__14650__auto___26114,jobs,results,process,async){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_26014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26014[(0)] = state_machine__14595__auto__);

(statearr_26014[(1)] = (1));

return statearr_26014;
});
var state_machine__14595__auto____1 = (function (state_25999){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_25999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e26015){if((e26015 instanceof Object)){
var ex__14598__auto__ = e26015;
var statearr_26016_26121 = state_25999;
(statearr_26016_26121[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26122 = state_25999;
state_25999 = G__26122;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_25999){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_25999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___26114,jobs,results,process,async))
})();
var state__14652__auto__ = (function (){var statearr_26017 = f__14651__auto__.call(null);
(statearr_26017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___26114);

return statearr_26017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___26114,jobs,results,process,async))
);


var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__,jobs,results,process,async){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__,jobs,results,process,async){
return (function (state_26055){
var state_val_26056 = (state_26055[(1)]);
if((state_val_26056 === (7))){
var inst_26051 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
var statearr_26057_26123 = state_26055__$1;
(statearr_26057_26123[(2)] = inst_26051);

(statearr_26057_26123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (20))){
var state_26055__$1 = state_26055;
var statearr_26058_26124 = state_26055__$1;
(statearr_26058_26124[(2)] = null);

(statearr_26058_26124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (1))){
var state_26055__$1 = state_26055;
var statearr_26059_26125 = state_26055__$1;
(statearr_26059_26125[(2)] = null);

(statearr_26059_26125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (4))){
var inst_26020 = (state_26055[(7)]);
var inst_26020__$1 = (state_26055[(2)]);
var inst_26021 = (inst_26020__$1 == null);
var state_26055__$1 = (function (){var statearr_26060 = state_26055;
(statearr_26060[(7)] = inst_26020__$1);

return statearr_26060;
})();
if(cljs.core.truth_(inst_26021)){
var statearr_26061_26126 = state_26055__$1;
(statearr_26061_26126[(1)] = (5));

} else {
var statearr_26062_26127 = state_26055__$1;
(statearr_26062_26127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (15))){
var inst_26033 = (state_26055[(8)]);
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26055__$1,(18),to,inst_26033);
} else {
if((state_val_26056 === (21))){
var inst_26046 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
var statearr_26063_26128 = state_26055__$1;
(statearr_26063_26128[(2)] = inst_26046);

(statearr_26063_26128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (13))){
var inst_26048 = (state_26055[(2)]);
var state_26055__$1 = (function (){var statearr_26064 = state_26055;
(statearr_26064[(9)] = inst_26048);

return statearr_26064;
})();
var statearr_26065_26129 = state_26055__$1;
(statearr_26065_26129[(2)] = null);

(statearr_26065_26129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (6))){
var inst_26020 = (state_26055[(7)]);
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26055__$1,(11),inst_26020);
} else {
if((state_val_26056 === (17))){
var inst_26041 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
if(cljs.core.truth_(inst_26041)){
var statearr_26066_26130 = state_26055__$1;
(statearr_26066_26130[(1)] = (19));

} else {
var statearr_26067_26131 = state_26055__$1;
(statearr_26067_26131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (3))){
var inst_26053 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26055__$1,inst_26053);
} else {
if((state_val_26056 === (12))){
var inst_26030 = (state_26055[(10)]);
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26055__$1,(14),inst_26030);
} else {
if((state_val_26056 === (2))){
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26055__$1,(4),results);
} else {
if((state_val_26056 === (19))){
var state_26055__$1 = state_26055;
var statearr_26068_26132 = state_26055__$1;
(statearr_26068_26132[(2)] = null);

(statearr_26068_26132[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (11))){
var inst_26030 = (state_26055[(2)]);
var state_26055__$1 = (function (){var statearr_26069 = state_26055;
(statearr_26069[(10)] = inst_26030);

return statearr_26069;
})();
var statearr_26070_26133 = state_26055__$1;
(statearr_26070_26133[(2)] = null);

(statearr_26070_26133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (9))){
var state_26055__$1 = state_26055;
var statearr_26071_26134 = state_26055__$1;
(statearr_26071_26134[(2)] = null);

(statearr_26071_26134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (5))){
var state_26055__$1 = state_26055;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26072_26135 = state_26055__$1;
(statearr_26072_26135[(1)] = (8));

} else {
var statearr_26073_26136 = state_26055__$1;
(statearr_26073_26136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (14))){
var inst_26035 = (state_26055[(11)]);
var inst_26033 = (state_26055[(8)]);
var inst_26033__$1 = (state_26055[(2)]);
var inst_26034 = (inst_26033__$1 == null);
var inst_26035__$1 = cljs.core.not.call(null,inst_26034);
var state_26055__$1 = (function (){var statearr_26074 = state_26055;
(statearr_26074[(11)] = inst_26035__$1);

(statearr_26074[(8)] = inst_26033__$1);

return statearr_26074;
})();
if(inst_26035__$1){
var statearr_26075_26137 = state_26055__$1;
(statearr_26075_26137[(1)] = (15));

} else {
var statearr_26076_26138 = state_26055__$1;
(statearr_26076_26138[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (16))){
var inst_26035 = (state_26055[(11)]);
var state_26055__$1 = state_26055;
var statearr_26077_26139 = state_26055__$1;
(statearr_26077_26139[(2)] = inst_26035);

(statearr_26077_26139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (10))){
var inst_26027 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
var statearr_26078_26140 = state_26055__$1;
(statearr_26078_26140[(2)] = inst_26027);

(statearr_26078_26140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (18))){
var inst_26038 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
var statearr_26079_26141 = state_26055__$1;
(statearr_26079_26141[(2)] = inst_26038);

(statearr_26079_26141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (8))){
var inst_26024 = cljs.core.async.close_BANG_.call(null,to);
var state_26055__$1 = state_26055;
var statearr_26080_26142 = state_26055__$1;
(statearr_26080_26142[(2)] = inst_26024);

(statearr_26080_26142[(1)] = (10));


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
});})(c__14650__auto__,jobs,results,process,async))
;
return ((function (switch__14594__auto__,c__14650__auto__,jobs,results,process,async){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_26084 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26084[(0)] = state_machine__14595__auto__);

(statearr_26084[(1)] = (1));

return statearr_26084;
});
var state_machine__14595__auto____1 = (function (state_26055){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_26055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e26085){if((e26085 instanceof Object)){
var ex__14598__auto__ = e26085;
var statearr_26086_26143 = state_26055;
(statearr_26086_26143[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26144 = state_26055;
state_26055 = G__26144;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_26055){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_26055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__,jobs,results,process,async))
})();
var state__14652__auto__ = (function (){var statearr_26087 = f__14651__auto__.call(null);
(statearr_26087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_26087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__,jobs,results,process,async))
);

return c__14650__auto__;
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
var c__14650__auto___26245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___26245,tc,fc){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___26245,tc,fc){
return (function (state_26220){
var state_val_26221 = (state_26220[(1)]);
if((state_val_26221 === (7))){
var inst_26216 = (state_26220[(2)]);
var state_26220__$1 = state_26220;
var statearr_26222_26246 = state_26220__$1;
(statearr_26222_26246[(2)] = inst_26216);

(statearr_26222_26246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (1))){
var state_26220__$1 = state_26220;
var statearr_26223_26247 = state_26220__$1;
(statearr_26223_26247[(2)] = null);

(statearr_26223_26247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (4))){
var inst_26197 = (state_26220[(7)]);
var inst_26197__$1 = (state_26220[(2)]);
var inst_26198 = (inst_26197__$1 == null);
var state_26220__$1 = (function (){var statearr_26224 = state_26220;
(statearr_26224[(7)] = inst_26197__$1);

return statearr_26224;
})();
if(cljs.core.truth_(inst_26198)){
var statearr_26225_26248 = state_26220__$1;
(statearr_26225_26248[(1)] = (5));

} else {
var statearr_26226_26249 = state_26220__$1;
(statearr_26226_26249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (13))){
var state_26220__$1 = state_26220;
var statearr_26227_26250 = state_26220__$1;
(statearr_26227_26250[(2)] = null);

(statearr_26227_26250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (6))){
var inst_26197 = (state_26220[(7)]);
var inst_26203 = p.call(null,inst_26197);
var state_26220__$1 = state_26220;
if(cljs.core.truth_(inst_26203)){
var statearr_26228_26251 = state_26220__$1;
(statearr_26228_26251[(1)] = (9));

} else {
var statearr_26229_26252 = state_26220__$1;
(statearr_26229_26252[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (3))){
var inst_26218 = (state_26220[(2)]);
var state_26220__$1 = state_26220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26220__$1,inst_26218);
} else {
if((state_val_26221 === (12))){
var state_26220__$1 = state_26220;
var statearr_26230_26253 = state_26220__$1;
(statearr_26230_26253[(2)] = null);

(statearr_26230_26253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (2))){
var state_26220__$1 = state_26220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26220__$1,(4),ch);
} else {
if((state_val_26221 === (11))){
var inst_26197 = (state_26220[(7)]);
var inst_26207 = (state_26220[(2)]);
var state_26220__$1 = state_26220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26220__$1,(8),inst_26207,inst_26197);
} else {
if((state_val_26221 === (9))){
var state_26220__$1 = state_26220;
var statearr_26231_26254 = state_26220__$1;
(statearr_26231_26254[(2)] = tc);

(statearr_26231_26254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (5))){
var inst_26200 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26201 = cljs.core.async.close_BANG_.call(null,fc);
var state_26220__$1 = (function (){var statearr_26232 = state_26220;
(statearr_26232[(8)] = inst_26200);

return statearr_26232;
})();
var statearr_26233_26255 = state_26220__$1;
(statearr_26233_26255[(2)] = inst_26201);

(statearr_26233_26255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (14))){
var inst_26214 = (state_26220[(2)]);
var state_26220__$1 = state_26220;
var statearr_26234_26256 = state_26220__$1;
(statearr_26234_26256[(2)] = inst_26214);

(statearr_26234_26256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (10))){
var state_26220__$1 = state_26220;
var statearr_26235_26257 = state_26220__$1;
(statearr_26235_26257[(2)] = fc);

(statearr_26235_26257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (8))){
var inst_26209 = (state_26220[(2)]);
var state_26220__$1 = state_26220;
if(cljs.core.truth_(inst_26209)){
var statearr_26236_26258 = state_26220__$1;
(statearr_26236_26258[(1)] = (12));

} else {
var statearr_26237_26259 = state_26220__$1;
(statearr_26237_26259[(1)] = (13));

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
});})(c__14650__auto___26245,tc,fc))
;
return ((function (switch__14594__auto__,c__14650__auto___26245,tc,fc){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_26241 = [null,null,null,null,null,null,null,null,null];
(statearr_26241[(0)] = state_machine__14595__auto__);

(statearr_26241[(1)] = (1));

return statearr_26241;
});
var state_machine__14595__auto____1 = (function (state_26220){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_26220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e26242){if((e26242 instanceof Object)){
var ex__14598__auto__ = e26242;
var statearr_26243_26260 = state_26220;
(statearr_26243_26260[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26261 = state_26220;
state_26220 = G__26261;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_26220){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_26220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___26245,tc,fc))
})();
var state__14652__auto__ = (function (){var statearr_26244 = f__14651__auto__.call(null);
(statearr_26244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___26245);

return statearr_26244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___26245,tc,fc))
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
var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__){
return (function (state_26308){
var state_val_26309 = (state_26308[(1)]);
if((state_val_26309 === (7))){
var inst_26304 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
var statearr_26310_26326 = state_26308__$1;
(statearr_26310_26326[(2)] = inst_26304);

(statearr_26310_26326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (6))){
var inst_26294 = (state_26308[(7)]);
var inst_26297 = (state_26308[(8)]);
var inst_26301 = f.call(null,inst_26294,inst_26297);
var inst_26294__$1 = inst_26301;
var state_26308__$1 = (function (){var statearr_26311 = state_26308;
(statearr_26311[(7)] = inst_26294__$1);

return statearr_26311;
})();
var statearr_26312_26327 = state_26308__$1;
(statearr_26312_26327[(2)] = null);

(statearr_26312_26327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (5))){
var inst_26294 = (state_26308[(7)]);
var state_26308__$1 = state_26308;
var statearr_26313_26328 = state_26308__$1;
(statearr_26313_26328[(2)] = inst_26294);

(statearr_26313_26328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (4))){
var inst_26297 = (state_26308[(8)]);
var inst_26297__$1 = (state_26308[(2)]);
var inst_26298 = (inst_26297__$1 == null);
var state_26308__$1 = (function (){var statearr_26314 = state_26308;
(statearr_26314[(8)] = inst_26297__$1);

return statearr_26314;
})();
if(cljs.core.truth_(inst_26298)){
var statearr_26315_26329 = state_26308__$1;
(statearr_26315_26329[(1)] = (5));

} else {
var statearr_26316_26330 = state_26308__$1;
(statearr_26316_26330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (3))){
var inst_26306 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26308__$1,inst_26306);
} else {
if((state_val_26309 === (2))){
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26308__$1,(4),ch);
} else {
if((state_val_26309 === (1))){
var inst_26294 = init;
var state_26308__$1 = (function (){var statearr_26317 = state_26308;
(statearr_26317[(7)] = inst_26294);

return statearr_26317;
})();
var statearr_26318_26331 = state_26308__$1;
(statearr_26318_26331[(2)] = null);

(statearr_26318_26331[(1)] = (2));


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
});})(c__14650__auto__))
;
return ((function (switch__14594__auto__,c__14650__auto__){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_26322 = [null,null,null,null,null,null,null,null,null];
(statearr_26322[(0)] = state_machine__14595__auto__);

(statearr_26322[(1)] = (1));

return statearr_26322;
});
var state_machine__14595__auto____1 = (function (state_26308){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_26308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e26323){if((e26323 instanceof Object)){
var ex__14598__auto__ = e26323;
var statearr_26324_26332 = state_26308;
(statearr_26324_26332[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26333 = state_26308;
state_26308 = G__26333;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_26308){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_26308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__))
})();
var state__14652__auto__ = (function (){var statearr_26325 = f__14651__auto__.call(null);
(statearr_26325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_26325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__))
);

return c__14650__auto__;
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
var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__){
return (function (state_26407){
var state_val_26408 = (state_26407[(1)]);
if((state_val_26408 === (7))){
var inst_26389 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26409_26432 = state_26407__$1;
(statearr_26409_26432[(2)] = inst_26389);

(statearr_26409_26432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (1))){
var inst_26383 = cljs.core.seq.call(null,coll);
var inst_26384 = inst_26383;
var state_26407__$1 = (function (){var statearr_26410 = state_26407;
(statearr_26410[(7)] = inst_26384);

return statearr_26410;
})();
var statearr_26411_26433 = state_26407__$1;
(statearr_26411_26433[(2)] = null);

(statearr_26411_26433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (4))){
var inst_26384 = (state_26407[(7)]);
var inst_26387 = cljs.core.first.call(null,inst_26384);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26407__$1,(7),ch,inst_26387);
} else {
if((state_val_26408 === (13))){
var inst_26401 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26412_26434 = state_26407__$1;
(statearr_26412_26434[(2)] = inst_26401);

(statearr_26412_26434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (6))){
var inst_26392 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26392)){
var statearr_26413_26435 = state_26407__$1;
(statearr_26413_26435[(1)] = (8));

} else {
var statearr_26414_26436 = state_26407__$1;
(statearr_26414_26436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (3))){
var inst_26405 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26407__$1,inst_26405);
} else {
if((state_val_26408 === (12))){
var state_26407__$1 = state_26407;
var statearr_26415_26437 = state_26407__$1;
(statearr_26415_26437[(2)] = null);

(statearr_26415_26437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (2))){
var inst_26384 = (state_26407[(7)]);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26384)){
var statearr_26416_26438 = state_26407__$1;
(statearr_26416_26438[(1)] = (4));

} else {
var statearr_26417_26439 = state_26407__$1;
(statearr_26417_26439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (11))){
var inst_26398 = cljs.core.async.close_BANG_.call(null,ch);
var state_26407__$1 = state_26407;
var statearr_26418_26440 = state_26407__$1;
(statearr_26418_26440[(2)] = inst_26398);

(statearr_26418_26440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (9))){
var state_26407__$1 = state_26407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26419_26441 = state_26407__$1;
(statearr_26419_26441[(1)] = (11));

} else {
var statearr_26420_26442 = state_26407__$1;
(statearr_26420_26442[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (5))){
var inst_26384 = (state_26407[(7)]);
var state_26407__$1 = state_26407;
var statearr_26421_26443 = state_26407__$1;
(statearr_26421_26443[(2)] = inst_26384);

(statearr_26421_26443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (10))){
var inst_26403 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26422_26444 = state_26407__$1;
(statearr_26422_26444[(2)] = inst_26403);

(statearr_26422_26444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (8))){
var inst_26384 = (state_26407[(7)]);
var inst_26394 = cljs.core.next.call(null,inst_26384);
var inst_26384__$1 = inst_26394;
var state_26407__$1 = (function (){var statearr_26423 = state_26407;
(statearr_26423[(7)] = inst_26384__$1);

return statearr_26423;
})();
var statearr_26424_26445 = state_26407__$1;
(statearr_26424_26445[(2)] = null);

(statearr_26424_26445[(1)] = (2));


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
});})(c__14650__auto__))
;
return ((function (switch__14594__auto__,c__14650__auto__){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_26428 = [null,null,null,null,null,null,null,null];
(statearr_26428[(0)] = state_machine__14595__auto__);

(statearr_26428[(1)] = (1));

return statearr_26428;
});
var state_machine__14595__auto____1 = (function (state_26407){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_26407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e26429){if((e26429 instanceof Object)){
var ex__14598__auto__ = e26429;
var statearr_26430_26446 = state_26407;
(statearr_26430_26446[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26447 = state_26407;
state_26407 = G__26447;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_26407){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_26407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__))
})();
var state__14652__auto__ = (function (){var statearr_26431 = f__14651__auto__.call(null);
(statearr_26431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_26431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__))
);

return c__14650__auto__;
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

cljs.core.async.Mux = (function (){var obj26449 = {};
return obj26449;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12175__auto__ = _;
if(and__12175__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12175__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__12831__auto__ = (((_ == null))?null:_);
return (function (){var or__12187__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26451 = {};
return obj26451;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12175__auto__ = m;
if(and__12175__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12175__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__12831__auto__ = (((m == null))?null:m);
return (function (){var or__12187__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12175__auto__ = m;
if(and__12175__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12175__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__12831__auto__ = (((m == null))?null:m);
return (function (){var or__12187__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12175__auto__ = m;
if(and__12175__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12175__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__12831__auto__ = (((m == null))?null:m);
return (function (){var or__12187__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
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
if(typeof cljs.core.async.t26673 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26673 = (function (cs,ch,mult,meta26674){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26674 = meta26674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26673.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26673.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26673.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26673.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26673.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26675){
var self__ = this;
var _26675__$1 = this;
return self__.meta26674;
});})(cs))
;

cljs.core.async.t26673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26675,meta26674__$1){
var self__ = this;
var _26675__$1 = this;
return (new cljs.core.async.t26673(self__.cs,self__.ch,self__.mult,meta26674__$1));
});})(cs))
;

cljs.core.async.t26673.cljs$lang$type = true;

cljs.core.async.t26673.cljs$lang$ctorStr = "cljs.core.async/t26673";

cljs.core.async.t26673.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12774__auto__,writer__12775__auto__,opt__12776__auto__){
return cljs.core._write.call(null,writer__12775__auto__,"cljs.core.async/t26673");
});})(cs))
;

cljs.core.async.__GT_t26673 = ((function (cs){
return (function __GT_t26673(cs__$1,ch__$1,mult__$1,meta26674){
return (new cljs.core.async.t26673(cs__$1,ch__$1,mult__$1,meta26674));
});})(cs))
;

}

return (new cljs.core.async.t26673(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
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
var c__14650__auto___26894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___26894,cs,m,dchan,dctr,done){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___26894,cs,m,dchan,dctr,done){
return (function (state_26806){
var state_val_26807 = (state_26806[(1)]);
if((state_val_26807 === (7))){
var inst_26802 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26808_26895 = state_26806__$1;
(statearr_26808_26895[(2)] = inst_26802);

(statearr_26808_26895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (20))){
var inst_26707 = (state_26806[(7)]);
var inst_26717 = cljs.core.first.call(null,inst_26707);
var inst_26718 = cljs.core.nth.call(null,inst_26717,(0),null);
var inst_26719 = cljs.core.nth.call(null,inst_26717,(1),null);
var state_26806__$1 = (function (){var statearr_26809 = state_26806;
(statearr_26809[(8)] = inst_26718);

return statearr_26809;
})();
if(cljs.core.truth_(inst_26719)){
var statearr_26810_26896 = state_26806__$1;
(statearr_26810_26896[(1)] = (22));

} else {
var statearr_26811_26897 = state_26806__$1;
(statearr_26811_26897[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (27))){
var inst_26754 = (state_26806[(9)]);
var inst_26678 = (state_26806[(10)]);
var inst_26747 = (state_26806[(11)]);
var inst_26749 = (state_26806[(12)]);
var inst_26754__$1 = cljs.core._nth.call(null,inst_26747,inst_26749);
var inst_26755 = cljs.core.async.put_BANG_.call(null,inst_26754__$1,inst_26678,done);
var state_26806__$1 = (function (){var statearr_26812 = state_26806;
(statearr_26812[(9)] = inst_26754__$1);

return statearr_26812;
})();
if(cljs.core.truth_(inst_26755)){
var statearr_26813_26898 = state_26806__$1;
(statearr_26813_26898[(1)] = (30));

} else {
var statearr_26814_26899 = state_26806__$1;
(statearr_26814_26899[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (1))){
var state_26806__$1 = state_26806;
var statearr_26815_26900 = state_26806__$1;
(statearr_26815_26900[(2)] = null);

(statearr_26815_26900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (24))){
var inst_26707 = (state_26806[(7)]);
var inst_26724 = (state_26806[(2)]);
var inst_26725 = cljs.core.next.call(null,inst_26707);
var inst_26687 = inst_26725;
var inst_26688 = null;
var inst_26689 = (0);
var inst_26690 = (0);
var state_26806__$1 = (function (){var statearr_26816 = state_26806;
(statearr_26816[(13)] = inst_26690);

(statearr_26816[(14)] = inst_26724);

(statearr_26816[(15)] = inst_26687);

(statearr_26816[(16)] = inst_26689);

(statearr_26816[(17)] = inst_26688);

return statearr_26816;
})();
var statearr_26817_26901 = state_26806__$1;
(statearr_26817_26901[(2)] = null);

(statearr_26817_26901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (39))){
var state_26806__$1 = state_26806;
var statearr_26821_26902 = state_26806__$1;
(statearr_26821_26902[(2)] = null);

(statearr_26821_26902[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (4))){
var inst_26678 = (state_26806[(10)]);
var inst_26678__$1 = (state_26806[(2)]);
var inst_26679 = (inst_26678__$1 == null);
var state_26806__$1 = (function (){var statearr_26822 = state_26806;
(statearr_26822[(10)] = inst_26678__$1);

return statearr_26822;
})();
if(cljs.core.truth_(inst_26679)){
var statearr_26823_26903 = state_26806__$1;
(statearr_26823_26903[(1)] = (5));

} else {
var statearr_26824_26904 = state_26806__$1;
(statearr_26824_26904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (15))){
var inst_26690 = (state_26806[(13)]);
var inst_26687 = (state_26806[(15)]);
var inst_26689 = (state_26806[(16)]);
var inst_26688 = (state_26806[(17)]);
var inst_26703 = (state_26806[(2)]);
var inst_26704 = (inst_26690 + (1));
var tmp26818 = inst_26687;
var tmp26819 = inst_26689;
var tmp26820 = inst_26688;
var inst_26687__$1 = tmp26818;
var inst_26688__$1 = tmp26820;
var inst_26689__$1 = tmp26819;
var inst_26690__$1 = inst_26704;
var state_26806__$1 = (function (){var statearr_26825 = state_26806;
(statearr_26825[(13)] = inst_26690__$1);

(statearr_26825[(15)] = inst_26687__$1);

(statearr_26825[(16)] = inst_26689__$1);

(statearr_26825[(17)] = inst_26688__$1);

(statearr_26825[(18)] = inst_26703);

return statearr_26825;
})();
var statearr_26826_26905 = state_26806__$1;
(statearr_26826_26905[(2)] = null);

(statearr_26826_26905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (21))){
var inst_26728 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26830_26906 = state_26806__$1;
(statearr_26830_26906[(2)] = inst_26728);

(statearr_26830_26906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (31))){
var inst_26754 = (state_26806[(9)]);
var inst_26758 = done.call(null,null);
var inst_26759 = cljs.core.async.untap_STAR_.call(null,m,inst_26754);
var state_26806__$1 = (function (){var statearr_26831 = state_26806;
(statearr_26831[(19)] = inst_26758);

return statearr_26831;
})();
var statearr_26832_26907 = state_26806__$1;
(statearr_26832_26907[(2)] = inst_26759);

(statearr_26832_26907[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (32))){
var inst_26748 = (state_26806[(20)]);
var inst_26747 = (state_26806[(11)]);
var inst_26749 = (state_26806[(12)]);
var inst_26746 = (state_26806[(21)]);
var inst_26761 = (state_26806[(2)]);
var inst_26762 = (inst_26749 + (1));
var tmp26827 = inst_26748;
var tmp26828 = inst_26747;
var tmp26829 = inst_26746;
var inst_26746__$1 = tmp26829;
var inst_26747__$1 = tmp26828;
var inst_26748__$1 = tmp26827;
var inst_26749__$1 = inst_26762;
var state_26806__$1 = (function (){var statearr_26833 = state_26806;
(statearr_26833[(22)] = inst_26761);

(statearr_26833[(20)] = inst_26748__$1);

(statearr_26833[(11)] = inst_26747__$1);

(statearr_26833[(12)] = inst_26749__$1);

(statearr_26833[(21)] = inst_26746__$1);

return statearr_26833;
})();
var statearr_26834_26908 = state_26806__$1;
(statearr_26834_26908[(2)] = null);

(statearr_26834_26908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (40))){
var inst_26774 = (state_26806[(23)]);
var inst_26778 = done.call(null,null);
var inst_26779 = cljs.core.async.untap_STAR_.call(null,m,inst_26774);
var state_26806__$1 = (function (){var statearr_26835 = state_26806;
(statearr_26835[(24)] = inst_26778);

return statearr_26835;
})();
var statearr_26836_26909 = state_26806__$1;
(statearr_26836_26909[(2)] = inst_26779);

(statearr_26836_26909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (33))){
var inst_26765 = (state_26806[(25)]);
var inst_26767 = cljs.core.chunked_seq_QMARK_.call(null,inst_26765);
var state_26806__$1 = state_26806;
if(inst_26767){
var statearr_26837_26910 = state_26806__$1;
(statearr_26837_26910[(1)] = (36));

} else {
var statearr_26838_26911 = state_26806__$1;
(statearr_26838_26911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (13))){
var inst_26697 = (state_26806[(26)]);
var inst_26700 = cljs.core.async.close_BANG_.call(null,inst_26697);
var state_26806__$1 = state_26806;
var statearr_26839_26912 = state_26806__$1;
(statearr_26839_26912[(2)] = inst_26700);

(statearr_26839_26912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (22))){
var inst_26718 = (state_26806[(8)]);
var inst_26721 = cljs.core.async.close_BANG_.call(null,inst_26718);
var state_26806__$1 = state_26806;
var statearr_26840_26913 = state_26806__$1;
(statearr_26840_26913[(2)] = inst_26721);

(statearr_26840_26913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (36))){
var inst_26765 = (state_26806[(25)]);
var inst_26769 = cljs.core.chunk_first.call(null,inst_26765);
var inst_26770 = cljs.core.chunk_rest.call(null,inst_26765);
var inst_26771 = cljs.core.count.call(null,inst_26769);
var inst_26746 = inst_26770;
var inst_26747 = inst_26769;
var inst_26748 = inst_26771;
var inst_26749 = (0);
var state_26806__$1 = (function (){var statearr_26841 = state_26806;
(statearr_26841[(20)] = inst_26748);

(statearr_26841[(11)] = inst_26747);

(statearr_26841[(12)] = inst_26749);

(statearr_26841[(21)] = inst_26746);

return statearr_26841;
})();
var statearr_26842_26914 = state_26806__$1;
(statearr_26842_26914[(2)] = null);

(statearr_26842_26914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (41))){
var inst_26765 = (state_26806[(25)]);
var inst_26781 = (state_26806[(2)]);
var inst_26782 = cljs.core.next.call(null,inst_26765);
var inst_26746 = inst_26782;
var inst_26747 = null;
var inst_26748 = (0);
var inst_26749 = (0);
var state_26806__$1 = (function (){var statearr_26843 = state_26806;
(statearr_26843[(27)] = inst_26781);

(statearr_26843[(20)] = inst_26748);

(statearr_26843[(11)] = inst_26747);

(statearr_26843[(12)] = inst_26749);

(statearr_26843[(21)] = inst_26746);

return statearr_26843;
})();
var statearr_26844_26915 = state_26806__$1;
(statearr_26844_26915[(2)] = null);

(statearr_26844_26915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (43))){
var state_26806__$1 = state_26806;
var statearr_26845_26916 = state_26806__$1;
(statearr_26845_26916[(2)] = null);

(statearr_26845_26916[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (29))){
var inst_26790 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26846_26917 = state_26806__$1;
(statearr_26846_26917[(2)] = inst_26790);

(statearr_26846_26917[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (44))){
var inst_26799 = (state_26806[(2)]);
var state_26806__$1 = (function (){var statearr_26847 = state_26806;
(statearr_26847[(28)] = inst_26799);

return statearr_26847;
})();
var statearr_26848_26918 = state_26806__$1;
(statearr_26848_26918[(2)] = null);

(statearr_26848_26918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (6))){
var inst_26738 = (state_26806[(29)]);
var inst_26737 = cljs.core.deref.call(null,cs);
var inst_26738__$1 = cljs.core.keys.call(null,inst_26737);
var inst_26739 = cljs.core.count.call(null,inst_26738__$1);
var inst_26740 = cljs.core.reset_BANG_.call(null,dctr,inst_26739);
var inst_26745 = cljs.core.seq.call(null,inst_26738__$1);
var inst_26746 = inst_26745;
var inst_26747 = null;
var inst_26748 = (0);
var inst_26749 = (0);
var state_26806__$1 = (function (){var statearr_26849 = state_26806;
(statearr_26849[(29)] = inst_26738__$1);

(statearr_26849[(30)] = inst_26740);

(statearr_26849[(20)] = inst_26748);

(statearr_26849[(11)] = inst_26747);

(statearr_26849[(12)] = inst_26749);

(statearr_26849[(21)] = inst_26746);

return statearr_26849;
})();
var statearr_26850_26919 = state_26806__$1;
(statearr_26850_26919[(2)] = null);

(statearr_26850_26919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (28))){
var inst_26746 = (state_26806[(21)]);
var inst_26765 = (state_26806[(25)]);
var inst_26765__$1 = cljs.core.seq.call(null,inst_26746);
var state_26806__$1 = (function (){var statearr_26851 = state_26806;
(statearr_26851[(25)] = inst_26765__$1);

return statearr_26851;
})();
if(inst_26765__$1){
var statearr_26852_26920 = state_26806__$1;
(statearr_26852_26920[(1)] = (33));

} else {
var statearr_26853_26921 = state_26806__$1;
(statearr_26853_26921[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (25))){
var inst_26748 = (state_26806[(20)]);
var inst_26749 = (state_26806[(12)]);
var inst_26751 = (inst_26749 < inst_26748);
var inst_26752 = inst_26751;
var state_26806__$1 = state_26806;
if(cljs.core.truth_(inst_26752)){
var statearr_26854_26922 = state_26806__$1;
(statearr_26854_26922[(1)] = (27));

} else {
var statearr_26855_26923 = state_26806__$1;
(statearr_26855_26923[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (34))){
var state_26806__$1 = state_26806;
var statearr_26856_26924 = state_26806__$1;
(statearr_26856_26924[(2)] = null);

(statearr_26856_26924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (17))){
var state_26806__$1 = state_26806;
var statearr_26857_26925 = state_26806__$1;
(statearr_26857_26925[(2)] = null);

(statearr_26857_26925[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (3))){
var inst_26804 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26806__$1,inst_26804);
} else {
if((state_val_26807 === (12))){
var inst_26733 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26858_26926 = state_26806__$1;
(statearr_26858_26926[(2)] = inst_26733);

(statearr_26858_26926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (2))){
var state_26806__$1 = state_26806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26806__$1,(4),ch);
} else {
if((state_val_26807 === (23))){
var state_26806__$1 = state_26806;
var statearr_26859_26927 = state_26806__$1;
(statearr_26859_26927[(2)] = null);

(statearr_26859_26927[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (35))){
var inst_26788 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26860_26928 = state_26806__$1;
(statearr_26860_26928[(2)] = inst_26788);

(statearr_26860_26928[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (19))){
var inst_26707 = (state_26806[(7)]);
var inst_26711 = cljs.core.chunk_first.call(null,inst_26707);
var inst_26712 = cljs.core.chunk_rest.call(null,inst_26707);
var inst_26713 = cljs.core.count.call(null,inst_26711);
var inst_26687 = inst_26712;
var inst_26688 = inst_26711;
var inst_26689 = inst_26713;
var inst_26690 = (0);
var state_26806__$1 = (function (){var statearr_26861 = state_26806;
(statearr_26861[(13)] = inst_26690);

(statearr_26861[(15)] = inst_26687);

(statearr_26861[(16)] = inst_26689);

(statearr_26861[(17)] = inst_26688);

return statearr_26861;
})();
var statearr_26862_26929 = state_26806__$1;
(statearr_26862_26929[(2)] = null);

(statearr_26862_26929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (11))){
var inst_26687 = (state_26806[(15)]);
var inst_26707 = (state_26806[(7)]);
var inst_26707__$1 = cljs.core.seq.call(null,inst_26687);
var state_26806__$1 = (function (){var statearr_26863 = state_26806;
(statearr_26863[(7)] = inst_26707__$1);

return statearr_26863;
})();
if(inst_26707__$1){
var statearr_26864_26930 = state_26806__$1;
(statearr_26864_26930[(1)] = (16));

} else {
var statearr_26865_26931 = state_26806__$1;
(statearr_26865_26931[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (9))){
var inst_26735 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26866_26932 = state_26806__$1;
(statearr_26866_26932[(2)] = inst_26735);

(statearr_26866_26932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (5))){
var inst_26685 = cljs.core.deref.call(null,cs);
var inst_26686 = cljs.core.seq.call(null,inst_26685);
var inst_26687 = inst_26686;
var inst_26688 = null;
var inst_26689 = (0);
var inst_26690 = (0);
var state_26806__$1 = (function (){var statearr_26867 = state_26806;
(statearr_26867[(13)] = inst_26690);

(statearr_26867[(15)] = inst_26687);

(statearr_26867[(16)] = inst_26689);

(statearr_26867[(17)] = inst_26688);

return statearr_26867;
})();
var statearr_26868_26933 = state_26806__$1;
(statearr_26868_26933[(2)] = null);

(statearr_26868_26933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (14))){
var state_26806__$1 = state_26806;
var statearr_26869_26934 = state_26806__$1;
(statearr_26869_26934[(2)] = null);

(statearr_26869_26934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (45))){
var inst_26796 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26870_26935 = state_26806__$1;
(statearr_26870_26935[(2)] = inst_26796);

(statearr_26870_26935[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (26))){
var inst_26738 = (state_26806[(29)]);
var inst_26792 = (state_26806[(2)]);
var inst_26793 = cljs.core.seq.call(null,inst_26738);
var state_26806__$1 = (function (){var statearr_26871 = state_26806;
(statearr_26871[(31)] = inst_26792);

return statearr_26871;
})();
if(inst_26793){
var statearr_26872_26936 = state_26806__$1;
(statearr_26872_26936[(1)] = (42));

} else {
var statearr_26873_26937 = state_26806__$1;
(statearr_26873_26937[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (16))){
var inst_26707 = (state_26806[(7)]);
var inst_26709 = cljs.core.chunked_seq_QMARK_.call(null,inst_26707);
var state_26806__$1 = state_26806;
if(inst_26709){
var statearr_26874_26938 = state_26806__$1;
(statearr_26874_26938[(1)] = (19));

} else {
var statearr_26875_26939 = state_26806__$1;
(statearr_26875_26939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (38))){
var inst_26785 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26876_26940 = state_26806__$1;
(statearr_26876_26940[(2)] = inst_26785);

(statearr_26876_26940[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (30))){
var state_26806__$1 = state_26806;
var statearr_26877_26941 = state_26806__$1;
(statearr_26877_26941[(2)] = null);

(statearr_26877_26941[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (10))){
var inst_26690 = (state_26806[(13)]);
var inst_26688 = (state_26806[(17)]);
var inst_26696 = cljs.core._nth.call(null,inst_26688,inst_26690);
var inst_26697 = cljs.core.nth.call(null,inst_26696,(0),null);
var inst_26698 = cljs.core.nth.call(null,inst_26696,(1),null);
var state_26806__$1 = (function (){var statearr_26878 = state_26806;
(statearr_26878[(26)] = inst_26697);

return statearr_26878;
})();
if(cljs.core.truth_(inst_26698)){
var statearr_26879_26942 = state_26806__$1;
(statearr_26879_26942[(1)] = (13));

} else {
var statearr_26880_26943 = state_26806__$1;
(statearr_26880_26943[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (18))){
var inst_26731 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26881_26944 = state_26806__$1;
(statearr_26881_26944[(2)] = inst_26731);

(statearr_26881_26944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (42))){
var state_26806__$1 = state_26806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26806__$1,(45),dchan);
} else {
if((state_val_26807 === (37))){
var inst_26678 = (state_26806[(10)]);
var inst_26774 = (state_26806[(23)]);
var inst_26765 = (state_26806[(25)]);
var inst_26774__$1 = cljs.core.first.call(null,inst_26765);
var inst_26775 = cljs.core.async.put_BANG_.call(null,inst_26774__$1,inst_26678,done);
var state_26806__$1 = (function (){var statearr_26882 = state_26806;
(statearr_26882[(23)] = inst_26774__$1);

return statearr_26882;
})();
if(cljs.core.truth_(inst_26775)){
var statearr_26883_26945 = state_26806__$1;
(statearr_26883_26945[(1)] = (39));

} else {
var statearr_26884_26946 = state_26806__$1;
(statearr_26884_26946[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (8))){
var inst_26690 = (state_26806[(13)]);
var inst_26689 = (state_26806[(16)]);
var inst_26692 = (inst_26690 < inst_26689);
var inst_26693 = inst_26692;
var state_26806__$1 = state_26806;
if(cljs.core.truth_(inst_26693)){
var statearr_26885_26947 = state_26806__$1;
(statearr_26885_26947[(1)] = (10));

} else {
var statearr_26886_26948 = state_26806__$1;
(statearr_26886_26948[(1)] = (11));

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
});})(c__14650__auto___26894,cs,m,dchan,dctr,done))
;
return ((function (switch__14594__auto__,c__14650__auto___26894,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_26890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26890[(0)] = state_machine__14595__auto__);

(statearr_26890[(1)] = (1));

return statearr_26890;
});
var state_machine__14595__auto____1 = (function (state_26806){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_26806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e26891){if((e26891 instanceof Object)){
var ex__14598__auto__ = e26891;
var statearr_26892_26949 = state_26806;
(statearr_26892_26949[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26950 = state_26806;
state_26806 = G__26950;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_26806){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_26806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___26894,cs,m,dchan,dctr,done))
})();
var state__14652__auto__ = (function (){var statearr_26893 = f__14651__auto__.call(null);
(statearr_26893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___26894);

return statearr_26893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___26894,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj26952 = {};
return obj26952;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12175__auto__ = m;
if(and__12175__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12175__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__12831__auto__ = (((m == null))?null:m);
return (function (){var or__12187__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12175__auto__ = m;
if(and__12175__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12175__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__12831__auto__ = (((m == null))?null:m);
return (function (){var or__12187__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12175__auto__ = m;
if(and__12175__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12175__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__12831__auto__ = (((m == null))?null:m);
return (function (){var or__12187__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12175__auto__ = m;
if(and__12175__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12175__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__12831__auto__ = (((m == null))?null:m);
return (function (){var or__12187__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12175__auto__ = m;
if(and__12175__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12175__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__12831__auto__ = (((m == null))?null:m);
return (function (){var or__12187__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26953){
var map__26958 = p__26953;
var map__26958__$1 = ((cljs.core.seq_QMARK_.call(null,map__26958))?cljs.core.apply.call(null,cljs.core.hash_map,map__26958):map__26958);
var opts = map__26958__$1;
var statearr_26959_26962 = state;
(statearr_26959_26962[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26958,map__26958__$1,opts){
return (function (val){
var statearr_26960_26963 = state;
(statearr_26960_26963[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26958,map__26958__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26961_26964 = state;
(statearr_26961_26964[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26953 = null;
if (arguments.length > 3) {
var G__26965__i = 0, G__26965__a = new Array(arguments.length -  3);
while (G__26965__i < G__26965__a.length) {G__26965__a[G__26965__i] = arguments[G__26965__i + 3]; ++G__26965__i;}
  p__26953 = new cljs.core.IndexedSeq(G__26965__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26953);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26966){
var state = cljs.core.first(arglist__26966);
arglist__26966 = cljs.core.next(arglist__26966);
var cont_block = cljs.core.first(arglist__26966);
arglist__26966 = cljs.core.next(arglist__26966);
var ports = cljs.core.first(arglist__26966);
var p__26953 = cljs.core.rest(arglist__26966);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26953);
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
if(typeof cljs.core.async.t27086 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27086 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27087){
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
this.meta27087 = meta27087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27086.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27086.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27086.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27086.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27086.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27086.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t27086.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27088){
var self__ = this;
var _27088__$1 = this;
return self__.meta27087;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27088,meta27087__$1){
var self__ = this;
var _27088__$1 = this;
return (new cljs.core.async.t27086(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27087__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27086.cljs$lang$type = true;

cljs.core.async.t27086.cljs$lang$ctorStr = "cljs.core.async/t27086";

cljs.core.async.t27086.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12774__auto__,writer__12775__auto__,opt__12776__auto__){
return cljs.core._write.call(null,writer__12775__auto__,"cljs.core.async/t27086");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27086 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27086(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27087){
return (new cljs.core.async.t27086(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27087));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27086(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__14650__auto___27205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___27205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___27205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27158){
var state_val_27159 = (state_27158[(1)]);
if((state_val_27159 === (7))){
var inst_27102 = (state_27158[(7)]);
var inst_27107 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27102);
var state_27158__$1 = state_27158;
var statearr_27160_27206 = state_27158__$1;
(statearr_27160_27206[(2)] = inst_27107);

(statearr_27160_27206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (20))){
var inst_27117 = (state_27158[(8)]);
var state_27158__$1 = state_27158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27158__$1,(23),out,inst_27117);
} else {
if((state_val_27159 === (1))){
var inst_27092 = (state_27158[(9)]);
var inst_27092__$1 = calc_state.call(null);
var inst_27093 = cljs.core.seq_QMARK_.call(null,inst_27092__$1);
var state_27158__$1 = (function (){var statearr_27161 = state_27158;
(statearr_27161[(9)] = inst_27092__$1);

return statearr_27161;
})();
if(inst_27093){
var statearr_27162_27207 = state_27158__$1;
(statearr_27162_27207[(1)] = (2));

} else {
var statearr_27163_27208 = state_27158__$1;
(statearr_27163_27208[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (24))){
var inst_27110 = (state_27158[(10)]);
var inst_27102 = inst_27110;
var state_27158__$1 = (function (){var statearr_27164 = state_27158;
(statearr_27164[(7)] = inst_27102);

return statearr_27164;
})();
var statearr_27165_27209 = state_27158__$1;
(statearr_27165_27209[(2)] = null);

(statearr_27165_27209[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (4))){
var inst_27092 = (state_27158[(9)]);
var inst_27098 = (state_27158[(2)]);
var inst_27099 = cljs.core.get.call(null,inst_27098,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27100 = cljs.core.get.call(null,inst_27098,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27101 = cljs.core.get.call(null,inst_27098,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27102 = inst_27092;
var state_27158__$1 = (function (){var statearr_27166 = state_27158;
(statearr_27166[(7)] = inst_27102);

(statearr_27166[(11)] = inst_27099);

(statearr_27166[(12)] = inst_27100);

(statearr_27166[(13)] = inst_27101);

return statearr_27166;
})();
var statearr_27167_27210 = state_27158__$1;
(statearr_27167_27210[(2)] = null);

(statearr_27167_27210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (15))){
var state_27158__$1 = state_27158;
var statearr_27168_27211 = state_27158__$1;
(statearr_27168_27211[(2)] = null);

(statearr_27168_27211[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (21))){
var inst_27110 = (state_27158[(10)]);
var inst_27102 = inst_27110;
var state_27158__$1 = (function (){var statearr_27169 = state_27158;
(statearr_27169[(7)] = inst_27102);

return statearr_27169;
})();
var statearr_27170_27212 = state_27158__$1;
(statearr_27170_27212[(2)] = null);

(statearr_27170_27212[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (13))){
var inst_27154 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27171_27213 = state_27158__$1;
(statearr_27171_27213[(2)] = inst_27154);

(statearr_27171_27213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (22))){
var inst_27152 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27172_27214 = state_27158__$1;
(statearr_27172_27214[(2)] = inst_27152);

(statearr_27172_27214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (6))){
var inst_27156 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27158__$1,inst_27156);
} else {
if((state_val_27159 === (25))){
var state_27158__$1 = state_27158;
var statearr_27173_27215 = state_27158__$1;
(statearr_27173_27215[(2)] = null);

(statearr_27173_27215[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (17))){
var inst_27132 = (state_27158[(14)]);
var state_27158__$1 = state_27158;
var statearr_27174_27216 = state_27158__$1;
(statearr_27174_27216[(2)] = inst_27132);

(statearr_27174_27216[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (3))){
var inst_27092 = (state_27158[(9)]);
var state_27158__$1 = state_27158;
var statearr_27175_27217 = state_27158__$1;
(statearr_27175_27217[(2)] = inst_27092);

(statearr_27175_27217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (12))){
var inst_27113 = (state_27158[(15)]);
var inst_27132 = (state_27158[(14)]);
var inst_27118 = (state_27158[(16)]);
var inst_27132__$1 = inst_27113.call(null,inst_27118);
var state_27158__$1 = (function (){var statearr_27176 = state_27158;
(statearr_27176[(14)] = inst_27132__$1);

return statearr_27176;
})();
if(cljs.core.truth_(inst_27132__$1)){
var statearr_27177_27218 = state_27158__$1;
(statearr_27177_27218[(1)] = (17));

} else {
var statearr_27178_27219 = state_27158__$1;
(statearr_27178_27219[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (2))){
var inst_27092 = (state_27158[(9)]);
var inst_27095 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27092);
var state_27158__$1 = state_27158;
var statearr_27179_27220 = state_27158__$1;
(statearr_27179_27220[(2)] = inst_27095);

(statearr_27179_27220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (23))){
var inst_27143 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
if(cljs.core.truth_(inst_27143)){
var statearr_27180_27221 = state_27158__$1;
(statearr_27180_27221[(1)] = (24));

} else {
var statearr_27181_27222 = state_27158__$1;
(statearr_27181_27222[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (19))){
var inst_27140 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
if(cljs.core.truth_(inst_27140)){
var statearr_27182_27223 = state_27158__$1;
(statearr_27182_27223[(1)] = (20));

} else {
var statearr_27183_27224 = state_27158__$1;
(statearr_27183_27224[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (11))){
var inst_27117 = (state_27158[(8)]);
var inst_27123 = (inst_27117 == null);
var state_27158__$1 = state_27158;
if(cljs.core.truth_(inst_27123)){
var statearr_27184_27225 = state_27158__$1;
(statearr_27184_27225[(1)] = (14));

} else {
var statearr_27185_27226 = state_27158__$1;
(statearr_27185_27226[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (9))){
var inst_27110 = (state_27158[(10)]);
var inst_27110__$1 = (state_27158[(2)]);
var inst_27111 = cljs.core.get.call(null,inst_27110__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27112 = cljs.core.get.call(null,inst_27110__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27113 = cljs.core.get.call(null,inst_27110__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27158__$1 = (function (){var statearr_27186 = state_27158;
(statearr_27186[(15)] = inst_27113);

(statearr_27186[(17)] = inst_27112);

(statearr_27186[(10)] = inst_27110__$1);

return statearr_27186;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27158__$1,(10),inst_27111);
} else {
if((state_val_27159 === (5))){
var inst_27102 = (state_27158[(7)]);
var inst_27105 = cljs.core.seq_QMARK_.call(null,inst_27102);
var state_27158__$1 = state_27158;
if(inst_27105){
var statearr_27187_27227 = state_27158__$1;
(statearr_27187_27227[(1)] = (7));

} else {
var statearr_27188_27228 = state_27158__$1;
(statearr_27188_27228[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (14))){
var inst_27118 = (state_27158[(16)]);
var inst_27125 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27118);
var state_27158__$1 = state_27158;
var statearr_27189_27229 = state_27158__$1;
(statearr_27189_27229[(2)] = inst_27125);

(statearr_27189_27229[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (26))){
var inst_27148 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27190_27230 = state_27158__$1;
(statearr_27190_27230[(2)] = inst_27148);

(statearr_27190_27230[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (16))){
var inst_27128 = (state_27158[(2)]);
var inst_27129 = calc_state.call(null);
var inst_27102 = inst_27129;
var state_27158__$1 = (function (){var statearr_27191 = state_27158;
(statearr_27191[(7)] = inst_27102);

(statearr_27191[(18)] = inst_27128);

return statearr_27191;
})();
var statearr_27192_27231 = state_27158__$1;
(statearr_27192_27231[(2)] = null);

(statearr_27192_27231[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (10))){
var inst_27118 = (state_27158[(16)]);
var inst_27117 = (state_27158[(8)]);
var inst_27116 = (state_27158[(2)]);
var inst_27117__$1 = cljs.core.nth.call(null,inst_27116,(0),null);
var inst_27118__$1 = cljs.core.nth.call(null,inst_27116,(1),null);
var inst_27119 = (inst_27117__$1 == null);
var inst_27120 = cljs.core._EQ_.call(null,inst_27118__$1,change);
var inst_27121 = (inst_27119) || (inst_27120);
var state_27158__$1 = (function (){var statearr_27193 = state_27158;
(statearr_27193[(16)] = inst_27118__$1);

(statearr_27193[(8)] = inst_27117__$1);

return statearr_27193;
})();
if(cljs.core.truth_(inst_27121)){
var statearr_27194_27232 = state_27158__$1;
(statearr_27194_27232[(1)] = (11));

} else {
var statearr_27195_27233 = state_27158__$1;
(statearr_27195_27233[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (18))){
var inst_27113 = (state_27158[(15)]);
var inst_27112 = (state_27158[(17)]);
var inst_27118 = (state_27158[(16)]);
var inst_27135 = cljs.core.empty_QMARK_.call(null,inst_27113);
var inst_27136 = inst_27112.call(null,inst_27118);
var inst_27137 = cljs.core.not.call(null,inst_27136);
var inst_27138 = (inst_27135) && (inst_27137);
var state_27158__$1 = state_27158;
var statearr_27196_27234 = state_27158__$1;
(statearr_27196_27234[(2)] = inst_27138);

(statearr_27196_27234[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (8))){
var inst_27102 = (state_27158[(7)]);
var state_27158__$1 = state_27158;
var statearr_27197_27235 = state_27158__$1;
(statearr_27197_27235[(2)] = inst_27102);

(statearr_27197_27235[(1)] = (9));


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
});})(c__14650__auto___27205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14594__auto__,c__14650__auto___27205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_27201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27201[(0)] = state_machine__14595__auto__);

(statearr_27201[(1)] = (1));

return statearr_27201;
});
var state_machine__14595__auto____1 = (function (state_27158){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_27158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e27202){if((e27202 instanceof Object)){
var ex__14598__auto__ = e27202;
var statearr_27203_27236 = state_27158;
(statearr_27203_27236[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27237 = state_27158;
state_27158 = G__27237;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_27158){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_27158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___27205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14652__auto__ = (function (){var statearr_27204 = f__14651__auto__.call(null);
(statearr_27204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___27205);

return statearr_27204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___27205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj27239 = {};
return obj27239;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12175__auto__ = p;
if(and__12175__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12175__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__12831__auto__ = (((p == null))?null:p);
return (function (){var or__12187__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12175__auto__ = p;
if(and__12175__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12175__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__12831__auto__ = (((p == null))?null:p);
return (function (){var or__12187__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
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
if((function (){var and__12175__auto__ = p;
if(and__12175__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12175__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__12831__auto__ = (((p == null))?null:p);
return (function (){var or__12187__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12175__auto__ = p;
if(and__12175__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12175__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__12831__auto__ = (((p == null))?null:p);
return (function (){var or__12187__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12831__auto__)]);
if(or__12187__auto__){
return or__12187__auto__;
} else {
var or__12187__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12187__auto____$1){
return or__12187__auto____$1;
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
var or__12187__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12187__auto__)){
return or__12187__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12187__auto__,mults){
return (function (p1__27240_SHARP_){
if(cljs.core.truth_(p1__27240_SHARP_.call(null,topic))){
return p1__27240_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27240_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12187__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27363 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27363 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27364){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27364 = meta27364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27363.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27363.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27363.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t27363.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27363.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27363.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27363.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27365){
var self__ = this;
var _27365__$1 = this;
return self__.meta27364;
});})(mults,ensure_mult))
;

cljs.core.async.t27363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27365,meta27364__$1){
var self__ = this;
var _27365__$1 = this;
return (new cljs.core.async.t27363(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27364__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27363.cljs$lang$type = true;

cljs.core.async.t27363.cljs$lang$ctorStr = "cljs.core.async/t27363";

cljs.core.async.t27363.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12774__auto__,writer__12775__auto__,opt__12776__auto__){
return cljs.core._write.call(null,writer__12775__auto__,"cljs.core.async/t27363");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27363 = ((function (mults,ensure_mult){
return (function __GT_t27363(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27364){
return (new cljs.core.async.t27363(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27364));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27363(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__14650__auto___27485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___27485,mults,ensure_mult,p){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___27485,mults,ensure_mult,p){
return (function (state_27437){
var state_val_27438 = (state_27437[(1)]);
if((state_val_27438 === (7))){
var inst_27433 = (state_27437[(2)]);
var state_27437__$1 = state_27437;
var statearr_27439_27486 = state_27437__$1;
(statearr_27439_27486[(2)] = inst_27433);

(statearr_27439_27486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (20))){
var state_27437__$1 = state_27437;
var statearr_27440_27487 = state_27437__$1;
(statearr_27440_27487[(2)] = null);

(statearr_27440_27487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (1))){
var state_27437__$1 = state_27437;
var statearr_27441_27488 = state_27437__$1;
(statearr_27441_27488[(2)] = null);

(statearr_27441_27488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (24))){
var inst_27416 = (state_27437[(7)]);
var inst_27425 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27416);
var state_27437__$1 = state_27437;
var statearr_27442_27489 = state_27437__$1;
(statearr_27442_27489[(2)] = inst_27425);

(statearr_27442_27489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (4))){
var inst_27368 = (state_27437[(8)]);
var inst_27368__$1 = (state_27437[(2)]);
var inst_27369 = (inst_27368__$1 == null);
var state_27437__$1 = (function (){var statearr_27443 = state_27437;
(statearr_27443[(8)] = inst_27368__$1);

return statearr_27443;
})();
if(cljs.core.truth_(inst_27369)){
var statearr_27444_27490 = state_27437__$1;
(statearr_27444_27490[(1)] = (5));

} else {
var statearr_27445_27491 = state_27437__$1;
(statearr_27445_27491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (15))){
var inst_27410 = (state_27437[(2)]);
var state_27437__$1 = state_27437;
var statearr_27446_27492 = state_27437__$1;
(statearr_27446_27492[(2)] = inst_27410);

(statearr_27446_27492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (21))){
var inst_27430 = (state_27437[(2)]);
var state_27437__$1 = (function (){var statearr_27447 = state_27437;
(statearr_27447[(9)] = inst_27430);

return statearr_27447;
})();
var statearr_27448_27493 = state_27437__$1;
(statearr_27448_27493[(2)] = null);

(statearr_27448_27493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (13))){
var inst_27392 = (state_27437[(10)]);
var inst_27394 = cljs.core.chunked_seq_QMARK_.call(null,inst_27392);
var state_27437__$1 = state_27437;
if(inst_27394){
var statearr_27449_27494 = state_27437__$1;
(statearr_27449_27494[(1)] = (16));

} else {
var statearr_27450_27495 = state_27437__$1;
(statearr_27450_27495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (22))){
var inst_27422 = (state_27437[(2)]);
var state_27437__$1 = state_27437;
if(cljs.core.truth_(inst_27422)){
var statearr_27451_27496 = state_27437__$1;
(statearr_27451_27496[(1)] = (23));

} else {
var statearr_27452_27497 = state_27437__$1;
(statearr_27452_27497[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (6))){
var inst_27418 = (state_27437[(11)]);
var inst_27368 = (state_27437[(8)]);
var inst_27416 = (state_27437[(7)]);
var inst_27416__$1 = topic_fn.call(null,inst_27368);
var inst_27417 = cljs.core.deref.call(null,mults);
var inst_27418__$1 = cljs.core.get.call(null,inst_27417,inst_27416__$1);
var state_27437__$1 = (function (){var statearr_27453 = state_27437;
(statearr_27453[(11)] = inst_27418__$1);

(statearr_27453[(7)] = inst_27416__$1);

return statearr_27453;
})();
if(cljs.core.truth_(inst_27418__$1)){
var statearr_27454_27498 = state_27437__$1;
(statearr_27454_27498[(1)] = (19));

} else {
var statearr_27455_27499 = state_27437__$1;
(statearr_27455_27499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (25))){
var inst_27427 = (state_27437[(2)]);
var state_27437__$1 = state_27437;
var statearr_27456_27500 = state_27437__$1;
(statearr_27456_27500[(2)] = inst_27427);

(statearr_27456_27500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (17))){
var inst_27392 = (state_27437[(10)]);
var inst_27401 = cljs.core.first.call(null,inst_27392);
var inst_27402 = cljs.core.async.muxch_STAR_.call(null,inst_27401);
var inst_27403 = cljs.core.async.close_BANG_.call(null,inst_27402);
var inst_27404 = cljs.core.next.call(null,inst_27392);
var inst_27378 = inst_27404;
var inst_27379 = null;
var inst_27380 = (0);
var inst_27381 = (0);
var state_27437__$1 = (function (){var statearr_27457 = state_27437;
(statearr_27457[(12)] = inst_27381);

(statearr_27457[(13)] = inst_27403);

(statearr_27457[(14)] = inst_27379);

(statearr_27457[(15)] = inst_27380);

(statearr_27457[(16)] = inst_27378);

return statearr_27457;
})();
var statearr_27458_27501 = state_27437__$1;
(statearr_27458_27501[(2)] = null);

(statearr_27458_27501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (3))){
var inst_27435 = (state_27437[(2)]);
var state_27437__$1 = state_27437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27437__$1,inst_27435);
} else {
if((state_val_27438 === (12))){
var inst_27412 = (state_27437[(2)]);
var state_27437__$1 = state_27437;
var statearr_27459_27502 = state_27437__$1;
(statearr_27459_27502[(2)] = inst_27412);

(statearr_27459_27502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (2))){
var state_27437__$1 = state_27437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27437__$1,(4),ch);
} else {
if((state_val_27438 === (23))){
var state_27437__$1 = state_27437;
var statearr_27460_27503 = state_27437__$1;
(statearr_27460_27503[(2)] = null);

(statearr_27460_27503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (19))){
var inst_27418 = (state_27437[(11)]);
var inst_27368 = (state_27437[(8)]);
var inst_27420 = cljs.core.async.muxch_STAR_.call(null,inst_27418);
var state_27437__$1 = state_27437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27437__$1,(22),inst_27420,inst_27368);
} else {
if((state_val_27438 === (11))){
var inst_27392 = (state_27437[(10)]);
var inst_27378 = (state_27437[(16)]);
var inst_27392__$1 = cljs.core.seq.call(null,inst_27378);
var state_27437__$1 = (function (){var statearr_27461 = state_27437;
(statearr_27461[(10)] = inst_27392__$1);

return statearr_27461;
})();
if(inst_27392__$1){
var statearr_27462_27504 = state_27437__$1;
(statearr_27462_27504[(1)] = (13));

} else {
var statearr_27463_27505 = state_27437__$1;
(statearr_27463_27505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (9))){
var inst_27414 = (state_27437[(2)]);
var state_27437__$1 = state_27437;
var statearr_27464_27506 = state_27437__$1;
(statearr_27464_27506[(2)] = inst_27414);

(statearr_27464_27506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (5))){
var inst_27375 = cljs.core.deref.call(null,mults);
var inst_27376 = cljs.core.vals.call(null,inst_27375);
var inst_27377 = cljs.core.seq.call(null,inst_27376);
var inst_27378 = inst_27377;
var inst_27379 = null;
var inst_27380 = (0);
var inst_27381 = (0);
var state_27437__$1 = (function (){var statearr_27465 = state_27437;
(statearr_27465[(12)] = inst_27381);

(statearr_27465[(14)] = inst_27379);

(statearr_27465[(15)] = inst_27380);

(statearr_27465[(16)] = inst_27378);

return statearr_27465;
})();
var statearr_27466_27507 = state_27437__$1;
(statearr_27466_27507[(2)] = null);

(statearr_27466_27507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (14))){
var state_27437__$1 = state_27437;
var statearr_27470_27508 = state_27437__$1;
(statearr_27470_27508[(2)] = null);

(statearr_27470_27508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (16))){
var inst_27392 = (state_27437[(10)]);
var inst_27396 = cljs.core.chunk_first.call(null,inst_27392);
var inst_27397 = cljs.core.chunk_rest.call(null,inst_27392);
var inst_27398 = cljs.core.count.call(null,inst_27396);
var inst_27378 = inst_27397;
var inst_27379 = inst_27396;
var inst_27380 = inst_27398;
var inst_27381 = (0);
var state_27437__$1 = (function (){var statearr_27471 = state_27437;
(statearr_27471[(12)] = inst_27381);

(statearr_27471[(14)] = inst_27379);

(statearr_27471[(15)] = inst_27380);

(statearr_27471[(16)] = inst_27378);

return statearr_27471;
})();
var statearr_27472_27509 = state_27437__$1;
(statearr_27472_27509[(2)] = null);

(statearr_27472_27509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (10))){
var inst_27381 = (state_27437[(12)]);
var inst_27379 = (state_27437[(14)]);
var inst_27380 = (state_27437[(15)]);
var inst_27378 = (state_27437[(16)]);
var inst_27386 = cljs.core._nth.call(null,inst_27379,inst_27381);
var inst_27387 = cljs.core.async.muxch_STAR_.call(null,inst_27386);
var inst_27388 = cljs.core.async.close_BANG_.call(null,inst_27387);
var inst_27389 = (inst_27381 + (1));
var tmp27467 = inst_27379;
var tmp27468 = inst_27380;
var tmp27469 = inst_27378;
var inst_27378__$1 = tmp27469;
var inst_27379__$1 = tmp27467;
var inst_27380__$1 = tmp27468;
var inst_27381__$1 = inst_27389;
var state_27437__$1 = (function (){var statearr_27473 = state_27437;
(statearr_27473[(12)] = inst_27381__$1);

(statearr_27473[(14)] = inst_27379__$1);

(statearr_27473[(15)] = inst_27380__$1);

(statearr_27473[(17)] = inst_27388);

(statearr_27473[(16)] = inst_27378__$1);

return statearr_27473;
})();
var statearr_27474_27510 = state_27437__$1;
(statearr_27474_27510[(2)] = null);

(statearr_27474_27510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (18))){
var inst_27407 = (state_27437[(2)]);
var state_27437__$1 = state_27437;
var statearr_27475_27511 = state_27437__$1;
(statearr_27475_27511[(2)] = inst_27407);

(statearr_27475_27511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27438 === (8))){
var inst_27381 = (state_27437[(12)]);
var inst_27380 = (state_27437[(15)]);
var inst_27383 = (inst_27381 < inst_27380);
var inst_27384 = inst_27383;
var state_27437__$1 = state_27437;
if(cljs.core.truth_(inst_27384)){
var statearr_27476_27512 = state_27437__$1;
(statearr_27476_27512[(1)] = (10));

} else {
var statearr_27477_27513 = state_27437__$1;
(statearr_27477_27513[(1)] = (11));

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
});})(c__14650__auto___27485,mults,ensure_mult,p))
;
return ((function (switch__14594__auto__,c__14650__auto___27485,mults,ensure_mult,p){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_27481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27481[(0)] = state_machine__14595__auto__);

(statearr_27481[(1)] = (1));

return statearr_27481;
});
var state_machine__14595__auto____1 = (function (state_27437){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_27437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e27482){if((e27482 instanceof Object)){
var ex__14598__auto__ = e27482;
var statearr_27483_27514 = state_27437;
(statearr_27483_27514[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27515 = state_27437;
state_27437 = G__27515;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_27437){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_27437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___27485,mults,ensure_mult,p))
})();
var state__14652__auto__ = (function (){var statearr_27484 = f__14651__auto__.call(null);
(statearr_27484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___27485);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___27485,mults,ensure_mult,p))
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
var c__14650__auto___27652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___27652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___27652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27622){
var state_val_27623 = (state_27622[(1)]);
if((state_val_27623 === (7))){
var state_27622__$1 = state_27622;
var statearr_27624_27653 = state_27622__$1;
(statearr_27624_27653[(2)] = null);

(statearr_27624_27653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (1))){
var state_27622__$1 = state_27622;
var statearr_27625_27654 = state_27622__$1;
(statearr_27625_27654[(2)] = null);

(statearr_27625_27654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (4))){
var inst_27586 = (state_27622[(7)]);
var inst_27588 = (inst_27586 < cnt);
var state_27622__$1 = state_27622;
if(cljs.core.truth_(inst_27588)){
var statearr_27626_27655 = state_27622__$1;
(statearr_27626_27655[(1)] = (6));

} else {
var statearr_27627_27656 = state_27622__$1;
(statearr_27627_27656[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (15))){
var inst_27618 = (state_27622[(2)]);
var state_27622__$1 = state_27622;
var statearr_27628_27657 = state_27622__$1;
(statearr_27628_27657[(2)] = inst_27618);

(statearr_27628_27657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (13))){
var inst_27611 = cljs.core.async.close_BANG_.call(null,out);
var state_27622__$1 = state_27622;
var statearr_27629_27658 = state_27622__$1;
(statearr_27629_27658[(2)] = inst_27611);

(statearr_27629_27658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (6))){
var state_27622__$1 = state_27622;
var statearr_27630_27659 = state_27622__$1;
(statearr_27630_27659[(2)] = null);

(statearr_27630_27659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (3))){
var inst_27620 = (state_27622[(2)]);
var state_27622__$1 = state_27622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27622__$1,inst_27620);
} else {
if((state_val_27623 === (12))){
var inst_27608 = (state_27622[(8)]);
var inst_27608__$1 = (state_27622[(2)]);
var inst_27609 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27608__$1);
var state_27622__$1 = (function (){var statearr_27631 = state_27622;
(statearr_27631[(8)] = inst_27608__$1);

return statearr_27631;
})();
if(cljs.core.truth_(inst_27609)){
var statearr_27632_27660 = state_27622__$1;
(statearr_27632_27660[(1)] = (13));

} else {
var statearr_27633_27661 = state_27622__$1;
(statearr_27633_27661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (2))){
var inst_27585 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27586 = (0);
var state_27622__$1 = (function (){var statearr_27634 = state_27622;
(statearr_27634[(7)] = inst_27586);

(statearr_27634[(9)] = inst_27585);

return statearr_27634;
})();
var statearr_27635_27662 = state_27622__$1;
(statearr_27635_27662[(2)] = null);

(statearr_27635_27662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (11))){
var inst_27586 = (state_27622[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27622,(10),Object,null,(9));
var inst_27595 = chs__$1.call(null,inst_27586);
var inst_27596 = done.call(null,inst_27586);
var inst_27597 = cljs.core.async.take_BANG_.call(null,inst_27595,inst_27596);
var state_27622__$1 = state_27622;
var statearr_27636_27663 = state_27622__$1;
(statearr_27636_27663[(2)] = inst_27597);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27622__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (9))){
var inst_27586 = (state_27622[(7)]);
var inst_27599 = (state_27622[(2)]);
var inst_27600 = (inst_27586 + (1));
var inst_27586__$1 = inst_27600;
var state_27622__$1 = (function (){var statearr_27637 = state_27622;
(statearr_27637[(10)] = inst_27599);

(statearr_27637[(7)] = inst_27586__$1);

return statearr_27637;
})();
var statearr_27638_27664 = state_27622__$1;
(statearr_27638_27664[(2)] = null);

(statearr_27638_27664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (5))){
var inst_27606 = (state_27622[(2)]);
var state_27622__$1 = (function (){var statearr_27639 = state_27622;
(statearr_27639[(11)] = inst_27606);

return statearr_27639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27622__$1,(12),dchan);
} else {
if((state_val_27623 === (14))){
var inst_27608 = (state_27622[(8)]);
var inst_27613 = cljs.core.apply.call(null,f,inst_27608);
var state_27622__$1 = state_27622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27622__$1,(16),out,inst_27613);
} else {
if((state_val_27623 === (16))){
var inst_27615 = (state_27622[(2)]);
var state_27622__$1 = (function (){var statearr_27640 = state_27622;
(statearr_27640[(12)] = inst_27615);

return statearr_27640;
})();
var statearr_27641_27665 = state_27622__$1;
(statearr_27641_27665[(2)] = null);

(statearr_27641_27665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (10))){
var inst_27590 = (state_27622[(2)]);
var inst_27591 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27622__$1 = (function (){var statearr_27642 = state_27622;
(statearr_27642[(13)] = inst_27590);

return statearr_27642;
})();
var statearr_27643_27666 = state_27622__$1;
(statearr_27643_27666[(2)] = inst_27591);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27622__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (8))){
var inst_27604 = (state_27622[(2)]);
var state_27622__$1 = state_27622;
var statearr_27644_27667 = state_27622__$1;
(statearr_27644_27667[(2)] = inst_27604);

(statearr_27644_27667[(1)] = (5));


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
});})(c__14650__auto___27652,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14594__auto__,c__14650__auto___27652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_27648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27648[(0)] = state_machine__14595__auto__);

(statearr_27648[(1)] = (1));

return statearr_27648;
});
var state_machine__14595__auto____1 = (function (state_27622){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_27622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e27649){if((e27649 instanceof Object)){
var ex__14598__auto__ = e27649;
var statearr_27650_27668 = state_27622;
(statearr_27650_27668[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27669 = state_27622;
state_27622 = G__27669;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_27622){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_27622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___27652,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14652__auto__ = (function (){var statearr_27651 = f__14651__auto__.call(null);
(statearr_27651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___27652);

return statearr_27651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___27652,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__14650__auto___27777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___27777,out){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___27777,out){
return (function (state_27753){
var state_val_27754 = (state_27753[(1)]);
if((state_val_27754 === (7))){
var inst_27733 = (state_27753[(7)]);
var inst_27732 = (state_27753[(8)]);
var inst_27732__$1 = (state_27753[(2)]);
var inst_27733__$1 = cljs.core.nth.call(null,inst_27732__$1,(0),null);
var inst_27734 = cljs.core.nth.call(null,inst_27732__$1,(1),null);
var inst_27735 = (inst_27733__$1 == null);
var state_27753__$1 = (function (){var statearr_27755 = state_27753;
(statearr_27755[(9)] = inst_27734);

(statearr_27755[(7)] = inst_27733__$1);

(statearr_27755[(8)] = inst_27732__$1);

return statearr_27755;
})();
if(cljs.core.truth_(inst_27735)){
var statearr_27756_27778 = state_27753__$1;
(statearr_27756_27778[(1)] = (8));

} else {
var statearr_27757_27779 = state_27753__$1;
(statearr_27757_27779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (1))){
var inst_27724 = cljs.core.vec.call(null,chs);
var inst_27725 = inst_27724;
var state_27753__$1 = (function (){var statearr_27758 = state_27753;
(statearr_27758[(10)] = inst_27725);

return statearr_27758;
})();
var statearr_27759_27780 = state_27753__$1;
(statearr_27759_27780[(2)] = null);

(statearr_27759_27780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (4))){
var inst_27725 = (state_27753[(10)]);
var state_27753__$1 = state_27753;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27753__$1,(7),inst_27725);
} else {
if((state_val_27754 === (6))){
var inst_27749 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
var statearr_27760_27781 = state_27753__$1;
(statearr_27760_27781[(2)] = inst_27749);

(statearr_27760_27781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (3))){
var inst_27751 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27753__$1,inst_27751);
} else {
if((state_val_27754 === (2))){
var inst_27725 = (state_27753[(10)]);
var inst_27727 = cljs.core.count.call(null,inst_27725);
var inst_27728 = (inst_27727 > (0));
var state_27753__$1 = state_27753;
if(cljs.core.truth_(inst_27728)){
var statearr_27762_27782 = state_27753__$1;
(statearr_27762_27782[(1)] = (4));

} else {
var statearr_27763_27783 = state_27753__$1;
(statearr_27763_27783[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (11))){
var inst_27725 = (state_27753[(10)]);
var inst_27742 = (state_27753[(2)]);
var tmp27761 = inst_27725;
var inst_27725__$1 = tmp27761;
var state_27753__$1 = (function (){var statearr_27764 = state_27753;
(statearr_27764[(10)] = inst_27725__$1);

(statearr_27764[(11)] = inst_27742);

return statearr_27764;
})();
var statearr_27765_27784 = state_27753__$1;
(statearr_27765_27784[(2)] = null);

(statearr_27765_27784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (9))){
var inst_27733 = (state_27753[(7)]);
var state_27753__$1 = state_27753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27753__$1,(11),out,inst_27733);
} else {
if((state_val_27754 === (5))){
var inst_27747 = cljs.core.async.close_BANG_.call(null,out);
var state_27753__$1 = state_27753;
var statearr_27766_27785 = state_27753__$1;
(statearr_27766_27785[(2)] = inst_27747);

(statearr_27766_27785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (10))){
var inst_27745 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
var statearr_27767_27786 = state_27753__$1;
(statearr_27767_27786[(2)] = inst_27745);

(statearr_27767_27786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (8))){
var inst_27734 = (state_27753[(9)]);
var inst_27733 = (state_27753[(7)]);
var inst_27725 = (state_27753[(10)]);
var inst_27732 = (state_27753[(8)]);
var inst_27737 = (function (){var c = inst_27734;
var v = inst_27733;
var vec__27730 = inst_27732;
var cs = inst_27725;
return ((function (c,v,vec__27730,cs,inst_27734,inst_27733,inst_27725,inst_27732,state_val_27754,c__14650__auto___27777,out){
return (function (p1__27670_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27670_SHARP_);
});
;})(c,v,vec__27730,cs,inst_27734,inst_27733,inst_27725,inst_27732,state_val_27754,c__14650__auto___27777,out))
})();
var inst_27738 = cljs.core.filterv.call(null,inst_27737,inst_27725);
var inst_27725__$1 = inst_27738;
var state_27753__$1 = (function (){var statearr_27768 = state_27753;
(statearr_27768[(10)] = inst_27725__$1);

return statearr_27768;
})();
var statearr_27769_27787 = state_27753__$1;
(statearr_27769_27787[(2)] = null);

(statearr_27769_27787[(1)] = (2));


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
});})(c__14650__auto___27777,out))
;
return ((function (switch__14594__auto__,c__14650__auto___27777,out){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_27773 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27773[(0)] = state_machine__14595__auto__);

(statearr_27773[(1)] = (1));

return statearr_27773;
});
var state_machine__14595__auto____1 = (function (state_27753){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_27753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e27774){if((e27774 instanceof Object)){
var ex__14598__auto__ = e27774;
var statearr_27775_27788 = state_27753;
(statearr_27775_27788[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27789 = state_27753;
state_27753 = G__27789;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_27753){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_27753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___27777,out))
})();
var state__14652__auto__ = (function (){var statearr_27776 = f__14651__auto__.call(null);
(statearr_27776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___27777);

return statearr_27776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___27777,out))
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
var c__14650__auto___27882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___27882,out){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___27882,out){
return (function (state_27859){
var state_val_27860 = (state_27859[(1)]);
if((state_val_27860 === (7))){
var inst_27841 = (state_27859[(7)]);
var inst_27841__$1 = (state_27859[(2)]);
var inst_27842 = (inst_27841__$1 == null);
var inst_27843 = cljs.core.not.call(null,inst_27842);
var state_27859__$1 = (function (){var statearr_27861 = state_27859;
(statearr_27861[(7)] = inst_27841__$1);

return statearr_27861;
})();
if(inst_27843){
var statearr_27862_27883 = state_27859__$1;
(statearr_27862_27883[(1)] = (8));

} else {
var statearr_27863_27884 = state_27859__$1;
(statearr_27863_27884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27860 === (1))){
var inst_27836 = (0);
var state_27859__$1 = (function (){var statearr_27864 = state_27859;
(statearr_27864[(8)] = inst_27836);

return statearr_27864;
})();
var statearr_27865_27885 = state_27859__$1;
(statearr_27865_27885[(2)] = null);

(statearr_27865_27885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27860 === (4))){
var state_27859__$1 = state_27859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27859__$1,(7),ch);
} else {
if((state_val_27860 === (6))){
var inst_27854 = (state_27859[(2)]);
var state_27859__$1 = state_27859;
var statearr_27866_27886 = state_27859__$1;
(statearr_27866_27886[(2)] = inst_27854);

(statearr_27866_27886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27860 === (3))){
var inst_27856 = (state_27859[(2)]);
var inst_27857 = cljs.core.async.close_BANG_.call(null,out);
var state_27859__$1 = (function (){var statearr_27867 = state_27859;
(statearr_27867[(9)] = inst_27856);

return statearr_27867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27859__$1,inst_27857);
} else {
if((state_val_27860 === (2))){
var inst_27836 = (state_27859[(8)]);
var inst_27838 = (inst_27836 < n);
var state_27859__$1 = state_27859;
if(cljs.core.truth_(inst_27838)){
var statearr_27868_27887 = state_27859__$1;
(statearr_27868_27887[(1)] = (4));

} else {
var statearr_27869_27888 = state_27859__$1;
(statearr_27869_27888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27860 === (11))){
var inst_27836 = (state_27859[(8)]);
var inst_27846 = (state_27859[(2)]);
var inst_27847 = (inst_27836 + (1));
var inst_27836__$1 = inst_27847;
var state_27859__$1 = (function (){var statearr_27870 = state_27859;
(statearr_27870[(8)] = inst_27836__$1);

(statearr_27870[(10)] = inst_27846);

return statearr_27870;
})();
var statearr_27871_27889 = state_27859__$1;
(statearr_27871_27889[(2)] = null);

(statearr_27871_27889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27860 === (9))){
var state_27859__$1 = state_27859;
var statearr_27872_27890 = state_27859__$1;
(statearr_27872_27890[(2)] = null);

(statearr_27872_27890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27860 === (5))){
var state_27859__$1 = state_27859;
var statearr_27873_27891 = state_27859__$1;
(statearr_27873_27891[(2)] = null);

(statearr_27873_27891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27860 === (10))){
var inst_27851 = (state_27859[(2)]);
var state_27859__$1 = state_27859;
var statearr_27874_27892 = state_27859__$1;
(statearr_27874_27892[(2)] = inst_27851);

(statearr_27874_27892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27860 === (8))){
var inst_27841 = (state_27859[(7)]);
var state_27859__$1 = state_27859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27859__$1,(11),out,inst_27841);
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
});})(c__14650__auto___27882,out))
;
return ((function (switch__14594__auto__,c__14650__auto___27882,out){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_27878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27878[(0)] = state_machine__14595__auto__);

(statearr_27878[(1)] = (1));

return statearr_27878;
});
var state_machine__14595__auto____1 = (function (state_27859){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_27859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e27879){if((e27879 instanceof Object)){
var ex__14598__auto__ = e27879;
var statearr_27880_27893 = state_27859;
(statearr_27880_27893[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27894 = state_27859;
state_27859 = G__27894;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_27859){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_27859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___27882,out))
})();
var state__14652__auto__ = (function (){var statearr_27881 = f__14651__auto__.call(null);
(statearr_27881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___27882);

return statearr_27881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___27882,out))
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
if(typeof cljs.core.async.t27902 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27902 = (function (ch,f,map_LT_,meta27903){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27903 = meta27903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27905 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27905 = (function (fn1,_,meta27903,map_LT_,f,ch,meta27906){
this.fn1 = fn1;
this._ = _;
this.meta27903 = meta27903;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27906 = meta27906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27905.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27895_SHARP_){
return f1.call(null,(((p1__27895_SHARP_ == null))?null:self__.f.call(null,p1__27895_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27907){
var self__ = this;
var _27907__$1 = this;
return self__.meta27906;
});})(___$1))
;

cljs.core.async.t27905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27907,meta27906__$1){
var self__ = this;
var _27907__$1 = this;
return (new cljs.core.async.t27905(self__.fn1,self__._,self__.meta27903,self__.map_LT_,self__.f,self__.ch,meta27906__$1));
});})(___$1))
;

cljs.core.async.t27905.cljs$lang$type = true;

cljs.core.async.t27905.cljs$lang$ctorStr = "cljs.core.async/t27905";

cljs.core.async.t27905.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12774__auto__,writer__12775__auto__,opt__12776__auto__){
return cljs.core._write.call(null,writer__12775__auto__,"cljs.core.async/t27905");
});})(___$1))
;

cljs.core.async.__GT_t27905 = ((function (___$1){
return (function __GT_t27905(fn1__$1,___$2,meta27903__$1,map_LT___$1,f__$1,ch__$1,meta27906){
return (new cljs.core.async.t27905(fn1__$1,___$2,meta27903__$1,map_LT___$1,f__$1,ch__$1,meta27906));
});})(___$1))
;

}

return (new cljs.core.async.t27905(fn1,___$1,self__.meta27903,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12175__auto__ = ret;
if(cljs.core.truth_(and__12175__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12175__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27904){
var self__ = this;
var _27904__$1 = this;
return self__.meta27903;
});

cljs.core.async.t27902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27904,meta27903__$1){
var self__ = this;
var _27904__$1 = this;
return (new cljs.core.async.t27902(self__.ch,self__.f,self__.map_LT_,meta27903__$1));
});

cljs.core.async.t27902.cljs$lang$type = true;

cljs.core.async.t27902.cljs$lang$ctorStr = "cljs.core.async/t27902";

cljs.core.async.t27902.cljs$lang$ctorPrWriter = (function (this__12774__auto__,writer__12775__auto__,opt__12776__auto__){
return cljs.core._write.call(null,writer__12775__auto__,"cljs.core.async/t27902");
});

cljs.core.async.__GT_t27902 = (function __GT_t27902(ch__$1,f__$1,map_LT___$1,meta27903){
return (new cljs.core.async.t27902(ch__$1,f__$1,map_LT___$1,meta27903));
});

}

return (new cljs.core.async.t27902(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t27911 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27911 = (function (ch,f,map_GT_,meta27912){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27912 = meta27912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27913){
var self__ = this;
var _27913__$1 = this;
return self__.meta27912;
});

cljs.core.async.t27911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27913,meta27912__$1){
var self__ = this;
var _27913__$1 = this;
return (new cljs.core.async.t27911(self__.ch,self__.f,self__.map_GT_,meta27912__$1));
});

cljs.core.async.t27911.cljs$lang$type = true;

cljs.core.async.t27911.cljs$lang$ctorStr = "cljs.core.async/t27911";

cljs.core.async.t27911.cljs$lang$ctorPrWriter = (function (this__12774__auto__,writer__12775__auto__,opt__12776__auto__){
return cljs.core._write.call(null,writer__12775__auto__,"cljs.core.async/t27911");
});

cljs.core.async.__GT_t27911 = (function __GT_t27911(ch__$1,f__$1,map_GT___$1,meta27912){
return (new cljs.core.async.t27911(ch__$1,f__$1,map_GT___$1,meta27912));
});

}

return (new cljs.core.async.t27911(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t27917 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27917 = (function (ch,p,filter_GT_,meta27918){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27918 = meta27918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27919){
var self__ = this;
var _27919__$1 = this;
return self__.meta27918;
});

cljs.core.async.t27917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27919,meta27918__$1){
var self__ = this;
var _27919__$1 = this;
return (new cljs.core.async.t27917(self__.ch,self__.p,self__.filter_GT_,meta27918__$1));
});

cljs.core.async.t27917.cljs$lang$type = true;

cljs.core.async.t27917.cljs$lang$ctorStr = "cljs.core.async/t27917";

cljs.core.async.t27917.cljs$lang$ctorPrWriter = (function (this__12774__auto__,writer__12775__auto__,opt__12776__auto__){
return cljs.core._write.call(null,writer__12775__auto__,"cljs.core.async/t27917");
});

cljs.core.async.__GT_t27917 = (function __GT_t27917(ch__$1,p__$1,filter_GT___$1,meta27918){
return (new cljs.core.async.t27917(ch__$1,p__$1,filter_GT___$1,meta27918));
});

}

return (new cljs.core.async.t27917(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/matter-cljs-fun/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
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
var c__14650__auto___28002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___28002,out){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___28002,out){
return (function (state_27981){
var state_val_27982 = (state_27981[(1)]);
if((state_val_27982 === (7))){
var inst_27977 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
var statearr_27983_28003 = state_27981__$1;
(statearr_27983_28003[(2)] = inst_27977);

(statearr_27983_28003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (1))){
var state_27981__$1 = state_27981;
var statearr_27984_28004 = state_27981__$1;
(statearr_27984_28004[(2)] = null);

(statearr_27984_28004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (4))){
var inst_27963 = (state_27981[(7)]);
var inst_27963__$1 = (state_27981[(2)]);
var inst_27964 = (inst_27963__$1 == null);
var state_27981__$1 = (function (){var statearr_27985 = state_27981;
(statearr_27985[(7)] = inst_27963__$1);

return statearr_27985;
})();
if(cljs.core.truth_(inst_27964)){
var statearr_27986_28005 = state_27981__$1;
(statearr_27986_28005[(1)] = (5));

} else {
var statearr_27987_28006 = state_27981__$1;
(statearr_27987_28006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (6))){
var inst_27963 = (state_27981[(7)]);
var inst_27968 = p.call(null,inst_27963);
var state_27981__$1 = state_27981;
if(cljs.core.truth_(inst_27968)){
var statearr_27988_28007 = state_27981__$1;
(statearr_27988_28007[(1)] = (8));

} else {
var statearr_27989_28008 = state_27981__$1;
(statearr_27989_28008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (3))){
var inst_27979 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27981__$1,inst_27979);
} else {
if((state_val_27982 === (2))){
var state_27981__$1 = state_27981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27981__$1,(4),ch);
} else {
if((state_val_27982 === (11))){
var inst_27971 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
var statearr_27990_28009 = state_27981__$1;
(statearr_27990_28009[(2)] = inst_27971);

(statearr_27990_28009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (9))){
var state_27981__$1 = state_27981;
var statearr_27991_28010 = state_27981__$1;
(statearr_27991_28010[(2)] = null);

(statearr_27991_28010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (5))){
var inst_27966 = cljs.core.async.close_BANG_.call(null,out);
var state_27981__$1 = state_27981;
var statearr_27992_28011 = state_27981__$1;
(statearr_27992_28011[(2)] = inst_27966);

(statearr_27992_28011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (10))){
var inst_27974 = (state_27981[(2)]);
var state_27981__$1 = (function (){var statearr_27993 = state_27981;
(statearr_27993[(8)] = inst_27974);

return statearr_27993;
})();
var statearr_27994_28012 = state_27981__$1;
(statearr_27994_28012[(2)] = null);

(statearr_27994_28012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (8))){
var inst_27963 = (state_27981[(7)]);
var state_27981__$1 = state_27981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27981__$1,(11),out,inst_27963);
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
});})(c__14650__auto___28002,out))
;
return ((function (switch__14594__auto__,c__14650__auto___28002,out){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_27998 = [null,null,null,null,null,null,null,null,null];
(statearr_27998[(0)] = state_machine__14595__auto__);

(statearr_27998[(1)] = (1));

return statearr_27998;
});
var state_machine__14595__auto____1 = (function (state_27981){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_27981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e27999){if((e27999 instanceof Object)){
var ex__14598__auto__ = e27999;
var statearr_28000_28013 = state_27981;
(statearr_28000_28013[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28014 = state_27981;
state_27981 = G__28014;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_27981){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_27981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___28002,out))
})();
var state__14652__auto__ = (function (){var statearr_28001 = f__14651__auto__.call(null);
(statearr_28001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___28002);

return statearr_28001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___28002,out))
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
var c__14650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto__){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto__){
return (function (state_28180){
var state_val_28181 = (state_28180[(1)]);
if((state_val_28181 === (7))){
var inst_28176 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28182_28223 = state_28180__$1;
(statearr_28182_28223[(2)] = inst_28176);

(statearr_28182_28223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (20))){
var inst_28146 = (state_28180[(7)]);
var inst_28157 = (state_28180[(2)]);
var inst_28158 = cljs.core.next.call(null,inst_28146);
var inst_28132 = inst_28158;
var inst_28133 = null;
var inst_28134 = (0);
var inst_28135 = (0);
var state_28180__$1 = (function (){var statearr_28183 = state_28180;
(statearr_28183[(8)] = inst_28135);

(statearr_28183[(9)] = inst_28134);

(statearr_28183[(10)] = inst_28132);

(statearr_28183[(11)] = inst_28157);

(statearr_28183[(12)] = inst_28133);

return statearr_28183;
})();
var statearr_28184_28224 = state_28180__$1;
(statearr_28184_28224[(2)] = null);

(statearr_28184_28224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (1))){
var state_28180__$1 = state_28180;
var statearr_28185_28225 = state_28180__$1;
(statearr_28185_28225[(2)] = null);

(statearr_28185_28225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (4))){
var inst_28121 = (state_28180[(13)]);
var inst_28121__$1 = (state_28180[(2)]);
var inst_28122 = (inst_28121__$1 == null);
var state_28180__$1 = (function (){var statearr_28186 = state_28180;
(statearr_28186[(13)] = inst_28121__$1);

return statearr_28186;
})();
if(cljs.core.truth_(inst_28122)){
var statearr_28187_28226 = state_28180__$1;
(statearr_28187_28226[(1)] = (5));

} else {
var statearr_28188_28227 = state_28180__$1;
(statearr_28188_28227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (15))){
var state_28180__$1 = state_28180;
var statearr_28192_28228 = state_28180__$1;
(statearr_28192_28228[(2)] = null);

(statearr_28192_28228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (21))){
var state_28180__$1 = state_28180;
var statearr_28193_28229 = state_28180__$1;
(statearr_28193_28229[(2)] = null);

(statearr_28193_28229[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (13))){
var inst_28135 = (state_28180[(8)]);
var inst_28134 = (state_28180[(9)]);
var inst_28132 = (state_28180[(10)]);
var inst_28133 = (state_28180[(12)]);
var inst_28142 = (state_28180[(2)]);
var inst_28143 = (inst_28135 + (1));
var tmp28189 = inst_28134;
var tmp28190 = inst_28132;
var tmp28191 = inst_28133;
var inst_28132__$1 = tmp28190;
var inst_28133__$1 = tmp28191;
var inst_28134__$1 = tmp28189;
var inst_28135__$1 = inst_28143;
var state_28180__$1 = (function (){var statearr_28194 = state_28180;
(statearr_28194[(8)] = inst_28135__$1);

(statearr_28194[(9)] = inst_28134__$1);

(statearr_28194[(10)] = inst_28132__$1);

(statearr_28194[(14)] = inst_28142);

(statearr_28194[(12)] = inst_28133__$1);

return statearr_28194;
})();
var statearr_28195_28230 = state_28180__$1;
(statearr_28195_28230[(2)] = null);

(statearr_28195_28230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (22))){
var state_28180__$1 = state_28180;
var statearr_28196_28231 = state_28180__$1;
(statearr_28196_28231[(2)] = null);

(statearr_28196_28231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (6))){
var inst_28121 = (state_28180[(13)]);
var inst_28130 = f.call(null,inst_28121);
var inst_28131 = cljs.core.seq.call(null,inst_28130);
var inst_28132 = inst_28131;
var inst_28133 = null;
var inst_28134 = (0);
var inst_28135 = (0);
var state_28180__$1 = (function (){var statearr_28197 = state_28180;
(statearr_28197[(8)] = inst_28135);

(statearr_28197[(9)] = inst_28134);

(statearr_28197[(10)] = inst_28132);

(statearr_28197[(12)] = inst_28133);

return statearr_28197;
})();
var statearr_28198_28232 = state_28180__$1;
(statearr_28198_28232[(2)] = null);

(statearr_28198_28232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (17))){
var inst_28146 = (state_28180[(7)]);
var inst_28150 = cljs.core.chunk_first.call(null,inst_28146);
var inst_28151 = cljs.core.chunk_rest.call(null,inst_28146);
var inst_28152 = cljs.core.count.call(null,inst_28150);
var inst_28132 = inst_28151;
var inst_28133 = inst_28150;
var inst_28134 = inst_28152;
var inst_28135 = (0);
var state_28180__$1 = (function (){var statearr_28199 = state_28180;
(statearr_28199[(8)] = inst_28135);

(statearr_28199[(9)] = inst_28134);

(statearr_28199[(10)] = inst_28132);

(statearr_28199[(12)] = inst_28133);

return statearr_28199;
})();
var statearr_28200_28233 = state_28180__$1;
(statearr_28200_28233[(2)] = null);

(statearr_28200_28233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (3))){
var inst_28178 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28180__$1,inst_28178);
} else {
if((state_val_28181 === (12))){
var inst_28166 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28201_28234 = state_28180__$1;
(statearr_28201_28234[(2)] = inst_28166);

(statearr_28201_28234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (2))){
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28180__$1,(4),in$);
} else {
if((state_val_28181 === (23))){
var inst_28174 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28202_28235 = state_28180__$1;
(statearr_28202_28235[(2)] = inst_28174);

(statearr_28202_28235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (19))){
var inst_28161 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28203_28236 = state_28180__$1;
(statearr_28203_28236[(2)] = inst_28161);

(statearr_28203_28236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (11))){
var inst_28132 = (state_28180[(10)]);
var inst_28146 = (state_28180[(7)]);
var inst_28146__$1 = cljs.core.seq.call(null,inst_28132);
var state_28180__$1 = (function (){var statearr_28204 = state_28180;
(statearr_28204[(7)] = inst_28146__$1);

return statearr_28204;
})();
if(inst_28146__$1){
var statearr_28205_28237 = state_28180__$1;
(statearr_28205_28237[(1)] = (14));

} else {
var statearr_28206_28238 = state_28180__$1;
(statearr_28206_28238[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (9))){
var inst_28168 = (state_28180[(2)]);
var inst_28169 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28180__$1 = (function (){var statearr_28207 = state_28180;
(statearr_28207[(15)] = inst_28168);

return statearr_28207;
})();
if(cljs.core.truth_(inst_28169)){
var statearr_28208_28239 = state_28180__$1;
(statearr_28208_28239[(1)] = (21));

} else {
var statearr_28209_28240 = state_28180__$1;
(statearr_28209_28240[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (5))){
var inst_28124 = cljs.core.async.close_BANG_.call(null,out);
var state_28180__$1 = state_28180;
var statearr_28210_28241 = state_28180__$1;
(statearr_28210_28241[(2)] = inst_28124);

(statearr_28210_28241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (14))){
var inst_28146 = (state_28180[(7)]);
var inst_28148 = cljs.core.chunked_seq_QMARK_.call(null,inst_28146);
var state_28180__$1 = state_28180;
if(inst_28148){
var statearr_28211_28242 = state_28180__$1;
(statearr_28211_28242[(1)] = (17));

} else {
var statearr_28212_28243 = state_28180__$1;
(statearr_28212_28243[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (16))){
var inst_28164 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28213_28244 = state_28180__$1;
(statearr_28213_28244[(2)] = inst_28164);

(statearr_28213_28244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (10))){
var inst_28135 = (state_28180[(8)]);
var inst_28133 = (state_28180[(12)]);
var inst_28140 = cljs.core._nth.call(null,inst_28133,inst_28135);
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28180__$1,(13),out,inst_28140);
} else {
if((state_val_28181 === (18))){
var inst_28146 = (state_28180[(7)]);
var inst_28155 = cljs.core.first.call(null,inst_28146);
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28180__$1,(20),out,inst_28155);
} else {
if((state_val_28181 === (8))){
var inst_28135 = (state_28180[(8)]);
var inst_28134 = (state_28180[(9)]);
var inst_28137 = (inst_28135 < inst_28134);
var inst_28138 = inst_28137;
var state_28180__$1 = state_28180;
if(cljs.core.truth_(inst_28138)){
var statearr_28214_28245 = state_28180__$1;
(statearr_28214_28245[(1)] = (10));

} else {
var statearr_28215_28246 = state_28180__$1;
(statearr_28215_28246[(1)] = (11));

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
});})(c__14650__auto__))
;
return ((function (switch__14594__auto__,c__14650__auto__){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_28219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28219[(0)] = state_machine__14595__auto__);

(statearr_28219[(1)] = (1));

return statearr_28219;
});
var state_machine__14595__auto____1 = (function (state_28180){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_28180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e28220){if((e28220 instanceof Object)){
var ex__14598__auto__ = e28220;
var statearr_28221_28247 = state_28180;
(statearr_28221_28247[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28248 = state_28180;
state_28180 = G__28248;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_28180){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_28180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto__))
})();
var state__14652__auto__ = (function (){var statearr_28222 = f__14651__auto__.call(null);
(statearr_28222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto__);

return statearr_28222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto__))
);

return c__14650__auto__;
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
var c__14650__auto___28345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___28345,out){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___28345,out){
return (function (state_28320){
var state_val_28321 = (state_28320[(1)]);
if((state_val_28321 === (7))){
var inst_28315 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28322_28346 = state_28320__$1;
(statearr_28322_28346[(2)] = inst_28315);

(statearr_28322_28346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (1))){
var inst_28297 = null;
var state_28320__$1 = (function (){var statearr_28323 = state_28320;
(statearr_28323[(7)] = inst_28297);

return statearr_28323;
})();
var statearr_28324_28347 = state_28320__$1;
(statearr_28324_28347[(2)] = null);

(statearr_28324_28347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (4))){
var inst_28300 = (state_28320[(8)]);
var inst_28300__$1 = (state_28320[(2)]);
var inst_28301 = (inst_28300__$1 == null);
var inst_28302 = cljs.core.not.call(null,inst_28301);
var state_28320__$1 = (function (){var statearr_28325 = state_28320;
(statearr_28325[(8)] = inst_28300__$1);

return statearr_28325;
})();
if(inst_28302){
var statearr_28326_28348 = state_28320__$1;
(statearr_28326_28348[(1)] = (5));

} else {
var statearr_28327_28349 = state_28320__$1;
(statearr_28327_28349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (6))){
var state_28320__$1 = state_28320;
var statearr_28328_28350 = state_28320__$1;
(statearr_28328_28350[(2)] = null);

(statearr_28328_28350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (3))){
var inst_28317 = (state_28320[(2)]);
var inst_28318 = cljs.core.async.close_BANG_.call(null,out);
var state_28320__$1 = (function (){var statearr_28329 = state_28320;
(statearr_28329[(9)] = inst_28317);

return statearr_28329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28320__$1,inst_28318);
} else {
if((state_val_28321 === (2))){
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28320__$1,(4),ch);
} else {
if((state_val_28321 === (11))){
var inst_28300 = (state_28320[(8)]);
var inst_28309 = (state_28320[(2)]);
var inst_28297 = inst_28300;
var state_28320__$1 = (function (){var statearr_28330 = state_28320;
(statearr_28330[(7)] = inst_28297);

(statearr_28330[(10)] = inst_28309);

return statearr_28330;
})();
var statearr_28331_28351 = state_28320__$1;
(statearr_28331_28351[(2)] = null);

(statearr_28331_28351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (9))){
var inst_28300 = (state_28320[(8)]);
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28320__$1,(11),out,inst_28300);
} else {
if((state_val_28321 === (5))){
var inst_28297 = (state_28320[(7)]);
var inst_28300 = (state_28320[(8)]);
var inst_28304 = cljs.core._EQ_.call(null,inst_28300,inst_28297);
var state_28320__$1 = state_28320;
if(inst_28304){
var statearr_28333_28352 = state_28320__$1;
(statearr_28333_28352[(1)] = (8));

} else {
var statearr_28334_28353 = state_28320__$1;
(statearr_28334_28353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (10))){
var inst_28312 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28335_28354 = state_28320__$1;
(statearr_28335_28354[(2)] = inst_28312);

(statearr_28335_28354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (8))){
var inst_28297 = (state_28320[(7)]);
var tmp28332 = inst_28297;
var inst_28297__$1 = tmp28332;
var state_28320__$1 = (function (){var statearr_28336 = state_28320;
(statearr_28336[(7)] = inst_28297__$1);

return statearr_28336;
})();
var statearr_28337_28355 = state_28320__$1;
(statearr_28337_28355[(2)] = null);

(statearr_28337_28355[(1)] = (2));


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
});})(c__14650__auto___28345,out))
;
return ((function (switch__14594__auto__,c__14650__auto___28345,out){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_28341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28341[(0)] = state_machine__14595__auto__);

(statearr_28341[(1)] = (1));

return statearr_28341;
});
var state_machine__14595__auto____1 = (function (state_28320){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_28320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e28342){if((e28342 instanceof Object)){
var ex__14598__auto__ = e28342;
var statearr_28343_28356 = state_28320;
(statearr_28343_28356[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28357 = state_28320;
state_28320 = G__28357;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_28320){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_28320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___28345,out))
})();
var state__14652__auto__ = (function (){var statearr_28344 = f__14651__auto__.call(null);
(statearr_28344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___28345);

return statearr_28344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___28345,out))
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
var c__14650__auto___28492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___28492,out){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___28492,out){
return (function (state_28462){
var state_val_28463 = (state_28462[(1)]);
if((state_val_28463 === (7))){
var inst_28458 = (state_28462[(2)]);
var state_28462__$1 = state_28462;
var statearr_28464_28493 = state_28462__$1;
(statearr_28464_28493[(2)] = inst_28458);

(statearr_28464_28493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (1))){
var inst_28425 = (new Array(n));
var inst_28426 = inst_28425;
var inst_28427 = (0);
var state_28462__$1 = (function (){var statearr_28465 = state_28462;
(statearr_28465[(7)] = inst_28426);

(statearr_28465[(8)] = inst_28427);

return statearr_28465;
})();
var statearr_28466_28494 = state_28462__$1;
(statearr_28466_28494[(2)] = null);

(statearr_28466_28494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (4))){
var inst_28430 = (state_28462[(9)]);
var inst_28430__$1 = (state_28462[(2)]);
var inst_28431 = (inst_28430__$1 == null);
var inst_28432 = cljs.core.not.call(null,inst_28431);
var state_28462__$1 = (function (){var statearr_28467 = state_28462;
(statearr_28467[(9)] = inst_28430__$1);

return statearr_28467;
})();
if(inst_28432){
var statearr_28468_28495 = state_28462__$1;
(statearr_28468_28495[(1)] = (5));

} else {
var statearr_28469_28496 = state_28462__$1;
(statearr_28469_28496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (15))){
var inst_28452 = (state_28462[(2)]);
var state_28462__$1 = state_28462;
var statearr_28470_28497 = state_28462__$1;
(statearr_28470_28497[(2)] = inst_28452);

(statearr_28470_28497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (13))){
var state_28462__$1 = state_28462;
var statearr_28471_28498 = state_28462__$1;
(statearr_28471_28498[(2)] = null);

(statearr_28471_28498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (6))){
var inst_28427 = (state_28462[(8)]);
var inst_28448 = (inst_28427 > (0));
var state_28462__$1 = state_28462;
if(cljs.core.truth_(inst_28448)){
var statearr_28472_28499 = state_28462__$1;
(statearr_28472_28499[(1)] = (12));

} else {
var statearr_28473_28500 = state_28462__$1;
(statearr_28473_28500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (3))){
var inst_28460 = (state_28462[(2)]);
var state_28462__$1 = state_28462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28462__$1,inst_28460);
} else {
if((state_val_28463 === (12))){
var inst_28426 = (state_28462[(7)]);
var inst_28450 = cljs.core.vec.call(null,inst_28426);
var state_28462__$1 = state_28462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28462__$1,(15),out,inst_28450);
} else {
if((state_val_28463 === (2))){
var state_28462__$1 = state_28462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28462__$1,(4),ch);
} else {
if((state_val_28463 === (11))){
var inst_28442 = (state_28462[(2)]);
var inst_28443 = (new Array(n));
var inst_28426 = inst_28443;
var inst_28427 = (0);
var state_28462__$1 = (function (){var statearr_28474 = state_28462;
(statearr_28474[(7)] = inst_28426);

(statearr_28474[(8)] = inst_28427);

(statearr_28474[(10)] = inst_28442);

return statearr_28474;
})();
var statearr_28475_28501 = state_28462__$1;
(statearr_28475_28501[(2)] = null);

(statearr_28475_28501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (9))){
var inst_28426 = (state_28462[(7)]);
var inst_28440 = cljs.core.vec.call(null,inst_28426);
var state_28462__$1 = state_28462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28462__$1,(11),out,inst_28440);
} else {
if((state_val_28463 === (5))){
var inst_28426 = (state_28462[(7)]);
var inst_28435 = (state_28462[(11)]);
var inst_28427 = (state_28462[(8)]);
var inst_28430 = (state_28462[(9)]);
var inst_28434 = (inst_28426[inst_28427] = inst_28430);
var inst_28435__$1 = (inst_28427 + (1));
var inst_28436 = (inst_28435__$1 < n);
var state_28462__$1 = (function (){var statearr_28476 = state_28462;
(statearr_28476[(11)] = inst_28435__$1);

(statearr_28476[(12)] = inst_28434);

return statearr_28476;
})();
if(cljs.core.truth_(inst_28436)){
var statearr_28477_28502 = state_28462__$1;
(statearr_28477_28502[(1)] = (8));

} else {
var statearr_28478_28503 = state_28462__$1;
(statearr_28478_28503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (14))){
var inst_28455 = (state_28462[(2)]);
var inst_28456 = cljs.core.async.close_BANG_.call(null,out);
var state_28462__$1 = (function (){var statearr_28480 = state_28462;
(statearr_28480[(13)] = inst_28455);

return statearr_28480;
})();
var statearr_28481_28504 = state_28462__$1;
(statearr_28481_28504[(2)] = inst_28456);

(statearr_28481_28504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (10))){
var inst_28446 = (state_28462[(2)]);
var state_28462__$1 = state_28462;
var statearr_28482_28505 = state_28462__$1;
(statearr_28482_28505[(2)] = inst_28446);

(statearr_28482_28505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (8))){
var inst_28426 = (state_28462[(7)]);
var inst_28435 = (state_28462[(11)]);
var tmp28479 = inst_28426;
var inst_28426__$1 = tmp28479;
var inst_28427 = inst_28435;
var state_28462__$1 = (function (){var statearr_28483 = state_28462;
(statearr_28483[(7)] = inst_28426__$1);

(statearr_28483[(8)] = inst_28427);

return statearr_28483;
})();
var statearr_28484_28506 = state_28462__$1;
(statearr_28484_28506[(2)] = null);

(statearr_28484_28506[(1)] = (2));


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
});})(c__14650__auto___28492,out))
;
return ((function (switch__14594__auto__,c__14650__auto___28492,out){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_28488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28488[(0)] = state_machine__14595__auto__);

(statearr_28488[(1)] = (1));

return statearr_28488;
});
var state_machine__14595__auto____1 = (function (state_28462){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_28462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e28489){if((e28489 instanceof Object)){
var ex__14598__auto__ = e28489;
var statearr_28490_28507 = state_28462;
(statearr_28490_28507[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28508 = state_28462;
state_28462 = G__28508;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_28462){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_28462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___28492,out))
})();
var state__14652__auto__ = (function (){var statearr_28491 = f__14651__auto__.call(null);
(statearr_28491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___28492);

return statearr_28491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___28492,out))
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
var c__14650__auto___28651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14650__auto___28651,out){
return (function (){
var f__14651__auto__ = (function (){var switch__14594__auto__ = ((function (c__14650__auto___28651,out){
return (function (state_28621){
var state_val_28622 = (state_28621[(1)]);
if((state_val_28622 === (7))){
var inst_28617 = (state_28621[(2)]);
var state_28621__$1 = state_28621;
var statearr_28623_28652 = state_28621__$1;
(statearr_28623_28652[(2)] = inst_28617);

(statearr_28623_28652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (1))){
var inst_28580 = [];
var inst_28581 = inst_28580;
var inst_28582 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28621__$1 = (function (){var statearr_28624 = state_28621;
(statearr_28624[(7)] = inst_28582);

(statearr_28624[(8)] = inst_28581);

return statearr_28624;
})();
var statearr_28625_28653 = state_28621__$1;
(statearr_28625_28653[(2)] = null);

(statearr_28625_28653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (4))){
var inst_28585 = (state_28621[(9)]);
var inst_28585__$1 = (state_28621[(2)]);
var inst_28586 = (inst_28585__$1 == null);
var inst_28587 = cljs.core.not.call(null,inst_28586);
var state_28621__$1 = (function (){var statearr_28626 = state_28621;
(statearr_28626[(9)] = inst_28585__$1);

return statearr_28626;
})();
if(inst_28587){
var statearr_28627_28654 = state_28621__$1;
(statearr_28627_28654[(1)] = (5));

} else {
var statearr_28628_28655 = state_28621__$1;
(statearr_28628_28655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (15))){
var inst_28611 = (state_28621[(2)]);
var state_28621__$1 = state_28621;
var statearr_28629_28656 = state_28621__$1;
(statearr_28629_28656[(2)] = inst_28611);

(statearr_28629_28656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (13))){
var state_28621__$1 = state_28621;
var statearr_28630_28657 = state_28621__$1;
(statearr_28630_28657[(2)] = null);

(statearr_28630_28657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (6))){
var inst_28581 = (state_28621[(8)]);
var inst_28606 = inst_28581.length;
var inst_28607 = (inst_28606 > (0));
var state_28621__$1 = state_28621;
if(cljs.core.truth_(inst_28607)){
var statearr_28631_28658 = state_28621__$1;
(statearr_28631_28658[(1)] = (12));

} else {
var statearr_28632_28659 = state_28621__$1;
(statearr_28632_28659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (3))){
var inst_28619 = (state_28621[(2)]);
var state_28621__$1 = state_28621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28621__$1,inst_28619);
} else {
if((state_val_28622 === (12))){
var inst_28581 = (state_28621[(8)]);
var inst_28609 = cljs.core.vec.call(null,inst_28581);
var state_28621__$1 = state_28621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28621__$1,(15),out,inst_28609);
} else {
if((state_val_28622 === (2))){
var state_28621__$1 = state_28621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28621__$1,(4),ch);
} else {
if((state_val_28622 === (11))){
var inst_28589 = (state_28621[(10)]);
var inst_28585 = (state_28621[(9)]);
var inst_28599 = (state_28621[(2)]);
var inst_28600 = [];
var inst_28601 = inst_28600.push(inst_28585);
var inst_28581 = inst_28600;
var inst_28582 = inst_28589;
var state_28621__$1 = (function (){var statearr_28633 = state_28621;
(statearr_28633[(7)] = inst_28582);

(statearr_28633[(11)] = inst_28601);

(statearr_28633[(12)] = inst_28599);

(statearr_28633[(8)] = inst_28581);

return statearr_28633;
})();
var statearr_28634_28660 = state_28621__$1;
(statearr_28634_28660[(2)] = null);

(statearr_28634_28660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (9))){
var inst_28581 = (state_28621[(8)]);
var inst_28597 = cljs.core.vec.call(null,inst_28581);
var state_28621__$1 = state_28621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28621__$1,(11),out,inst_28597);
} else {
if((state_val_28622 === (5))){
var inst_28582 = (state_28621[(7)]);
var inst_28589 = (state_28621[(10)]);
var inst_28585 = (state_28621[(9)]);
var inst_28589__$1 = f.call(null,inst_28585);
var inst_28590 = cljs.core._EQ_.call(null,inst_28589__$1,inst_28582);
var inst_28591 = cljs.core.keyword_identical_QMARK_.call(null,inst_28582,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28592 = (inst_28590) || (inst_28591);
var state_28621__$1 = (function (){var statearr_28635 = state_28621;
(statearr_28635[(10)] = inst_28589__$1);

return statearr_28635;
})();
if(cljs.core.truth_(inst_28592)){
var statearr_28636_28661 = state_28621__$1;
(statearr_28636_28661[(1)] = (8));

} else {
var statearr_28637_28662 = state_28621__$1;
(statearr_28637_28662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (14))){
var inst_28614 = (state_28621[(2)]);
var inst_28615 = cljs.core.async.close_BANG_.call(null,out);
var state_28621__$1 = (function (){var statearr_28639 = state_28621;
(statearr_28639[(13)] = inst_28614);

return statearr_28639;
})();
var statearr_28640_28663 = state_28621__$1;
(statearr_28640_28663[(2)] = inst_28615);

(statearr_28640_28663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (10))){
var inst_28604 = (state_28621[(2)]);
var state_28621__$1 = state_28621;
var statearr_28641_28664 = state_28621__$1;
(statearr_28641_28664[(2)] = inst_28604);

(statearr_28641_28664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (8))){
var inst_28589 = (state_28621[(10)]);
var inst_28585 = (state_28621[(9)]);
var inst_28581 = (state_28621[(8)]);
var inst_28594 = inst_28581.push(inst_28585);
var tmp28638 = inst_28581;
var inst_28581__$1 = tmp28638;
var inst_28582 = inst_28589;
var state_28621__$1 = (function (){var statearr_28642 = state_28621;
(statearr_28642[(7)] = inst_28582);

(statearr_28642[(8)] = inst_28581__$1);

(statearr_28642[(14)] = inst_28594);

return statearr_28642;
})();
var statearr_28643_28665 = state_28621__$1;
(statearr_28643_28665[(2)] = null);

(statearr_28643_28665[(1)] = (2));


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
});})(c__14650__auto___28651,out))
;
return ((function (switch__14594__auto__,c__14650__auto___28651,out){
return (function() {
var state_machine__14595__auto__ = null;
var state_machine__14595__auto____0 = (function (){
var statearr_28647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28647[(0)] = state_machine__14595__auto__);

(statearr_28647[(1)] = (1));

return statearr_28647;
});
var state_machine__14595__auto____1 = (function (state_28621){
while(true){
var ret_value__14596__auto__ = (function (){try{while(true){
var result__14597__auto__ = switch__14594__auto__.call(null,state_28621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14597__auto__;
}
break;
}
}catch (e28648){if((e28648 instanceof Object)){
var ex__14598__auto__ = e28648;
var statearr_28649_28666 = state_28621;
(statearr_28649_28666[(5)] = ex__14598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28667 = state_28621;
state_28621 = G__28667;
continue;
} else {
return ret_value__14596__auto__;
}
break;
}
});
state_machine__14595__auto__ = function(state_28621){
switch(arguments.length){
case 0:
return state_machine__14595__auto____0.call(this);
case 1:
return state_machine__14595__auto____1.call(this,state_28621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14595__auto____0;
state_machine__14595__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14595__auto____1;
return state_machine__14595__auto__;
})()
;})(switch__14594__auto__,c__14650__auto___28651,out))
})();
var state__14652__auto__ = (function (){var statearr_28650 = f__14651__auto__.call(null);
(statearr_28650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14650__auto___28651);

return statearr_28650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14652__auto__);
});})(c__14650__auto___28651,out))
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

//# sourceMappingURL=async.js.map?rel=1421962952161