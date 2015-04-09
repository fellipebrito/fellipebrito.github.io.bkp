// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t30203 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30203 = (function (f,fn_handler,meta30204){
this.f = f;
this.fn_handler = fn_handler;
this.meta30204 = meta30204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30203.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30205){
var self__ = this;
var _30205__$1 = this;
return self__.meta30204;
});

cljs.core.async.t30203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30205,meta30204__$1){
var self__ = this;
var _30205__$1 = this;
return (new cljs.core.async.t30203(self__.f,self__.fn_handler,meta30204__$1));
});

cljs.core.async.t30203.cljs$lang$type = true;

cljs.core.async.t30203.cljs$lang$ctorStr = "cljs.core.async/t30203";

cljs.core.async.t30203.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30203");
});

cljs.core.async.__GT_t30203 = (function __GT_t30203(f__$1,fn_handler__$1,meta30204){
return (new cljs.core.async.t30203(f__$1,fn_handler__$1,meta30204));
});

}

return (new cljs.core.async.t30203(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30207 = buff;
if(G__30207){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__30207.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30207.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30207);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30207);
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
var val_30208 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30208);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30208,ret){
return (function (){
return fn1.call(null,val_30208);
});})(val_30208,ret))
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
var n__17032__auto___30209 = n;
var x_30210 = (0);
while(true){
if((x_30210 < n__17032__auto___30209)){
(a[x_30210] = (0));

var G__30211 = (x_30210 + (1));
x_30210 = G__30211;
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

var G__30212 = (i + (1));
i = G__30212;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30216 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30216 = (function (flag,alt_flag,meta30217){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30217 = meta30217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30216.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30218){
var self__ = this;
var _30218__$1 = this;
return self__.meta30217;
});})(flag))
;

cljs.core.async.t30216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30218,meta30217__$1){
var self__ = this;
var _30218__$1 = this;
return (new cljs.core.async.t30216(self__.flag,self__.alt_flag,meta30217__$1));
});})(flag))
;

cljs.core.async.t30216.cljs$lang$type = true;

cljs.core.async.t30216.cljs$lang$ctorStr = "cljs.core.async/t30216";

cljs.core.async.t30216.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30216");
});})(flag))
;

cljs.core.async.__GT_t30216 = ((function (flag){
return (function __GT_t30216(flag__$1,alt_flag__$1,meta30217){
return (new cljs.core.async.t30216(flag__$1,alt_flag__$1,meta30217));
});})(flag))
;

}

return (new cljs.core.async.t30216(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t30222 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30222 = (function (cb,flag,alt_handler,meta30223){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30223 = meta30223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30222.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30224){
var self__ = this;
var _30224__$1 = this;
return self__.meta30223;
});

cljs.core.async.t30222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30224,meta30223__$1){
var self__ = this;
var _30224__$1 = this;
return (new cljs.core.async.t30222(self__.cb,self__.flag,self__.alt_handler,meta30223__$1));
});

cljs.core.async.t30222.cljs$lang$type = true;

cljs.core.async.t30222.cljs$lang$ctorStr = "cljs.core.async/t30222";

cljs.core.async.t30222.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30222");
});

cljs.core.async.__GT_t30222 = (function __GT_t30222(cb__$1,flag__$1,alt_handler__$1,meta30223){
return (new cljs.core.async.t30222(cb__$1,flag__$1,alt_handler__$1,meta30223));
});

}

return (new cljs.core.async.t30222(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30225_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30225_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30226_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30226_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16145__auto__ = wport;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30227 = (i + (1));
i = G__30227;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16145__auto__ = ret;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__16133__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16133__auto__;
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
var alts_BANG___delegate = function (ports,p__30228){
var map__30230 = p__30228;
var map__30230__$1 = ((cljs.core.seq_QMARK_.call(null,map__30230))?cljs.core.apply.call(null,cljs.core.hash_map,map__30230):map__30230);
var opts = map__30230__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30228 = null;
if (arguments.length > 1) {
var G__30231__i = 0, G__30231__a = new Array(arguments.length -  1);
while (G__30231__i < G__30231__a.length) {G__30231__a[G__30231__i] = arguments[G__30231__i + 1]; ++G__30231__i;}
  p__30228 = new cljs.core.IndexedSeq(G__30231__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__30228);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30232){
var ports = cljs.core.first(arglist__30232);
var p__30228 = cljs.core.rest(arglist__30232);
return alts_BANG___delegate(ports,p__30228);
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
var c__19256__auto___30327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___30327){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___30327){
return (function (state_30303){
var state_val_30304 = (state_30303[(1)]);
if((state_val_30304 === (7))){
var inst_30299 = (state_30303[(2)]);
var state_30303__$1 = state_30303;
var statearr_30305_30328 = state_30303__$1;
(statearr_30305_30328[(2)] = inst_30299);

(statearr_30305_30328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30304 === (1))){
var state_30303__$1 = state_30303;
var statearr_30306_30329 = state_30303__$1;
(statearr_30306_30329[(2)] = null);

(statearr_30306_30329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30304 === (4))){
var inst_30282 = (state_30303[(7)]);
var inst_30282__$1 = (state_30303[(2)]);
var inst_30283 = (inst_30282__$1 == null);
var state_30303__$1 = (function (){var statearr_30307 = state_30303;
(statearr_30307[(7)] = inst_30282__$1);

return statearr_30307;
})();
if(cljs.core.truth_(inst_30283)){
var statearr_30308_30330 = state_30303__$1;
(statearr_30308_30330[(1)] = (5));

} else {
var statearr_30309_30331 = state_30303__$1;
(statearr_30309_30331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30304 === (13))){
var state_30303__$1 = state_30303;
var statearr_30310_30332 = state_30303__$1;
(statearr_30310_30332[(2)] = null);

(statearr_30310_30332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30304 === (6))){
var inst_30282 = (state_30303[(7)]);
var state_30303__$1 = state_30303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30303__$1,(11),to,inst_30282);
} else {
if((state_val_30304 === (3))){
var inst_30301 = (state_30303[(2)]);
var state_30303__$1 = state_30303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30303__$1,inst_30301);
} else {
if((state_val_30304 === (12))){
var state_30303__$1 = state_30303;
var statearr_30311_30333 = state_30303__$1;
(statearr_30311_30333[(2)] = null);

(statearr_30311_30333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30304 === (2))){
var state_30303__$1 = state_30303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30303__$1,(4),from);
} else {
if((state_val_30304 === (11))){
var inst_30292 = (state_30303[(2)]);
var state_30303__$1 = state_30303;
if(cljs.core.truth_(inst_30292)){
var statearr_30312_30334 = state_30303__$1;
(statearr_30312_30334[(1)] = (12));

} else {
var statearr_30313_30335 = state_30303__$1;
(statearr_30313_30335[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30304 === (9))){
var state_30303__$1 = state_30303;
var statearr_30314_30336 = state_30303__$1;
(statearr_30314_30336[(2)] = null);

(statearr_30314_30336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30304 === (5))){
var state_30303__$1 = state_30303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30315_30337 = state_30303__$1;
(statearr_30315_30337[(1)] = (8));

} else {
var statearr_30316_30338 = state_30303__$1;
(statearr_30316_30338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30304 === (14))){
var inst_30297 = (state_30303[(2)]);
var state_30303__$1 = state_30303;
var statearr_30317_30339 = state_30303__$1;
(statearr_30317_30339[(2)] = inst_30297);

(statearr_30317_30339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30304 === (10))){
var inst_30289 = (state_30303[(2)]);
var state_30303__$1 = state_30303;
var statearr_30318_30340 = state_30303__$1;
(statearr_30318_30340[(2)] = inst_30289);

(statearr_30318_30340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30304 === (8))){
var inst_30286 = cljs.core.async.close_BANG_.call(null,to);
var state_30303__$1 = state_30303;
var statearr_30319_30341 = state_30303__$1;
(statearr_30319_30341[(2)] = inst_30286);

(statearr_30319_30341[(1)] = (10));


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
});})(c__19256__auto___30327))
;
return ((function (switch__19200__auto__,c__19256__auto___30327){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_30323 = [null,null,null,null,null,null,null,null];
(statearr_30323[(0)] = state_machine__19201__auto__);

(statearr_30323[(1)] = (1));

return statearr_30323;
});
var state_machine__19201__auto____1 = (function (state_30303){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_30303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e30324){if((e30324 instanceof Object)){
var ex__19204__auto__ = e30324;
var statearr_30325_30342 = state_30303;
(statearr_30325_30342[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30343 = state_30303;
state_30303 = G__30343;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_30303){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_30303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___30327))
})();
var state__19258__auto__ = (function (){var statearr_30326 = f__19257__auto__.call(null);
(statearr_30326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___30327);

return statearr_30326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___30327))
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
return (function (p__30527){
var vec__30528 = p__30527;
var v = cljs.core.nth.call(null,vec__30528,(0),null);
var p = cljs.core.nth.call(null,vec__30528,(1),null);
var job = vec__30528;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19256__auto___30710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___30710,res,vec__30528,v,p,job,jobs,results){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___30710,res,vec__30528,v,p,job,jobs,results){
return (function (state_30533){
var state_val_30534 = (state_30533[(1)]);
if((state_val_30534 === (2))){
var inst_30530 = (state_30533[(2)]);
var inst_30531 = cljs.core.async.close_BANG_.call(null,res);
var state_30533__$1 = (function (){var statearr_30535 = state_30533;
(statearr_30535[(7)] = inst_30530);

return statearr_30535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30533__$1,inst_30531);
} else {
if((state_val_30534 === (1))){
var state_30533__$1 = state_30533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30533__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19256__auto___30710,res,vec__30528,v,p,job,jobs,results))
;
return ((function (switch__19200__auto__,c__19256__auto___30710,res,vec__30528,v,p,job,jobs,results){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_30539 = [null,null,null,null,null,null,null,null];
(statearr_30539[(0)] = state_machine__19201__auto__);

(statearr_30539[(1)] = (1));

return statearr_30539;
});
var state_machine__19201__auto____1 = (function (state_30533){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_30533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e30540){if((e30540 instanceof Object)){
var ex__19204__auto__ = e30540;
var statearr_30541_30711 = state_30533;
(statearr_30541_30711[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30712 = state_30533;
state_30533 = G__30712;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_30533){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_30533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___30710,res,vec__30528,v,p,job,jobs,results))
})();
var state__19258__auto__ = (function (){var statearr_30542 = f__19257__auto__.call(null);
(statearr_30542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___30710);

return statearr_30542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___30710,res,vec__30528,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30543){
var vec__30544 = p__30543;
var v = cljs.core.nth.call(null,vec__30544,(0),null);
var p = cljs.core.nth.call(null,vec__30544,(1),null);
var job = vec__30544;
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
var n__17032__auto___30713 = n;
var __30714 = (0);
while(true){
if((__30714 < n__17032__auto___30713)){
var G__30545_30715 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30545_30715) {
case "async":
var c__19256__auto___30717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30714,c__19256__auto___30717,G__30545_30715,n__17032__auto___30713,jobs,results,process,async){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (__30714,c__19256__auto___30717,G__30545_30715,n__17032__auto___30713,jobs,results,process,async){
return (function (state_30558){
var state_val_30559 = (state_30558[(1)]);
if((state_val_30559 === (7))){
var inst_30554 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
var statearr_30560_30718 = state_30558__$1;
(statearr_30560_30718[(2)] = inst_30554);

(statearr_30560_30718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (6))){
var state_30558__$1 = state_30558;
var statearr_30561_30719 = state_30558__$1;
(statearr_30561_30719[(2)] = null);

(statearr_30561_30719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (5))){
var state_30558__$1 = state_30558;
var statearr_30562_30720 = state_30558__$1;
(statearr_30562_30720[(2)] = null);

(statearr_30562_30720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (4))){
var inst_30548 = (state_30558[(2)]);
var inst_30549 = async.call(null,inst_30548);
var state_30558__$1 = state_30558;
if(cljs.core.truth_(inst_30549)){
var statearr_30563_30721 = state_30558__$1;
(statearr_30563_30721[(1)] = (5));

} else {
var statearr_30564_30722 = state_30558__$1;
(statearr_30564_30722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (3))){
var inst_30556 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30558__$1,inst_30556);
} else {
if((state_val_30559 === (2))){
var state_30558__$1 = state_30558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30558__$1,(4),jobs);
} else {
if((state_val_30559 === (1))){
var state_30558__$1 = state_30558;
var statearr_30565_30723 = state_30558__$1;
(statearr_30565_30723[(2)] = null);

(statearr_30565_30723[(1)] = (2));


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
});})(__30714,c__19256__auto___30717,G__30545_30715,n__17032__auto___30713,jobs,results,process,async))
;
return ((function (__30714,switch__19200__auto__,c__19256__auto___30717,G__30545_30715,n__17032__auto___30713,jobs,results,process,async){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_30569 = [null,null,null,null,null,null,null];
(statearr_30569[(0)] = state_machine__19201__auto__);

(statearr_30569[(1)] = (1));

return statearr_30569;
});
var state_machine__19201__auto____1 = (function (state_30558){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_30558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e30570){if((e30570 instanceof Object)){
var ex__19204__auto__ = e30570;
var statearr_30571_30724 = state_30558;
(statearr_30571_30724[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30725 = state_30558;
state_30558 = G__30725;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_30558){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_30558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(__30714,switch__19200__auto__,c__19256__auto___30717,G__30545_30715,n__17032__auto___30713,jobs,results,process,async))
})();
var state__19258__auto__ = (function (){var statearr_30572 = f__19257__auto__.call(null);
(statearr_30572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___30717);

return statearr_30572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(__30714,c__19256__auto___30717,G__30545_30715,n__17032__auto___30713,jobs,results,process,async))
);


break;
case "compute":
var c__19256__auto___30726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30714,c__19256__auto___30726,G__30545_30715,n__17032__auto___30713,jobs,results,process,async){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (__30714,c__19256__auto___30726,G__30545_30715,n__17032__auto___30713,jobs,results,process,async){
return (function (state_30585){
var state_val_30586 = (state_30585[(1)]);
if((state_val_30586 === (7))){
var inst_30581 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
var statearr_30587_30727 = state_30585__$1;
(statearr_30587_30727[(2)] = inst_30581);

(statearr_30587_30727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (6))){
var state_30585__$1 = state_30585;
var statearr_30588_30728 = state_30585__$1;
(statearr_30588_30728[(2)] = null);

(statearr_30588_30728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (5))){
var state_30585__$1 = state_30585;
var statearr_30589_30729 = state_30585__$1;
(statearr_30589_30729[(2)] = null);

(statearr_30589_30729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (4))){
var inst_30575 = (state_30585[(2)]);
var inst_30576 = process.call(null,inst_30575);
var state_30585__$1 = state_30585;
if(cljs.core.truth_(inst_30576)){
var statearr_30590_30730 = state_30585__$1;
(statearr_30590_30730[(1)] = (5));

} else {
var statearr_30591_30731 = state_30585__$1;
(statearr_30591_30731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (3))){
var inst_30583 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30585__$1,inst_30583);
} else {
if((state_val_30586 === (2))){
var state_30585__$1 = state_30585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30585__$1,(4),jobs);
} else {
if((state_val_30586 === (1))){
var state_30585__$1 = state_30585;
var statearr_30592_30732 = state_30585__$1;
(statearr_30592_30732[(2)] = null);

(statearr_30592_30732[(1)] = (2));


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
});})(__30714,c__19256__auto___30726,G__30545_30715,n__17032__auto___30713,jobs,results,process,async))
;
return ((function (__30714,switch__19200__auto__,c__19256__auto___30726,G__30545_30715,n__17032__auto___30713,jobs,results,process,async){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_30596 = [null,null,null,null,null,null,null];
(statearr_30596[(0)] = state_machine__19201__auto__);

(statearr_30596[(1)] = (1));

return statearr_30596;
});
var state_machine__19201__auto____1 = (function (state_30585){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_30585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e30597){if((e30597 instanceof Object)){
var ex__19204__auto__ = e30597;
var statearr_30598_30733 = state_30585;
(statearr_30598_30733[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30734 = state_30585;
state_30585 = G__30734;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_30585){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_30585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(__30714,switch__19200__auto__,c__19256__auto___30726,G__30545_30715,n__17032__auto___30713,jobs,results,process,async))
})();
var state__19258__auto__ = (function (){var statearr_30599 = f__19257__auto__.call(null);
(statearr_30599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___30726);

return statearr_30599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(__30714,c__19256__auto___30726,G__30545_30715,n__17032__auto___30713,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30735 = (__30714 + (1));
__30714 = G__30735;
continue;
} else {
}
break;
}

var c__19256__auto___30736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___30736,jobs,results,process,async){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___30736,jobs,results,process,async){
return (function (state_30621){
var state_val_30622 = (state_30621[(1)]);
if((state_val_30622 === (9))){
var inst_30614 = (state_30621[(2)]);
var state_30621__$1 = (function (){var statearr_30623 = state_30621;
(statearr_30623[(7)] = inst_30614);

return statearr_30623;
})();
var statearr_30624_30737 = state_30621__$1;
(statearr_30624_30737[(2)] = null);

(statearr_30624_30737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30622 === (8))){
var inst_30607 = (state_30621[(8)]);
var inst_30612 = (state_30621[(2)]);
var state_30621__$1 = (function (){var statearr_30625 = state_30621;
(statearr_30625[(9)] = inst_30612);

return statearr_30625;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30621__$1,(9),results,inst_30607);
} else {
if((state_val_30622 === (7))){
var inst_30617 = (state_30621[(2)]);
var state_30621__$1 = state_30621;
var statearr_30626_30738 = state_30621__$1;
(statearr_30626_30738[(2)] = inst_30617);

(statearr_30626_30738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30622 === (6))){
var inst_30602 = (state_30621[(10)]);
var inst_30607 = (state_30621[(8)]);
var inst_30607__$1 = cljs.core.async.chan.call(null,(1));
var inst_30608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30609 = [inst_30602,inst_30607__$1];
var inst_30610 = (new cljs.core.PersistentVector(null,2,(5),inst_30608,inst_30609,null));
var state_30621__$1 = (function (){var statearr_30627 = state_30621;
(statearr_30627[(8)] = inst_30607__$1);

return statearr_30627;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30621__$1,(8),jobs,inst_30610);
} else {
if((state_val_30622 === (5))){
var inst_30605 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30621__$1 = state_30621;
var statearr_30628_30739 = state_30621__$1;
(statearr_30628_30739[(2)] = inst_30605);

(statearr_30628_30739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30622 === (4))){
var inst_30602 = (state_30621[(10)]);
var inst_30602__$1 = (state_30621[(2)]);
var inst_30603 = (inst_30602__$1 == null);
var state_30621__$1 = (function (){var statearr_30629 = state_30621;
(statearr_30629[(10)] = inst_30602__$1);

return statearr_30629;
})();
if(cljs.core.truth_(inst_30603)){
var statearr_30630_30740 = state_30621__$1;
(statearr_30630_30740[(1)] = (5));

} else {
var statearr_30631_30741 = state_30621__$1;
(statearr_30631_30741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30622 === (3))){
var inst_30619 = (state_30621[(2)]);
var state_30621__$1 = state_30621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30621__$1,inst_30619);
} else {
if((state_val_30622 === (2))){
var state_30621__$1 = state_30621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30621__$1,(4),from);
} else {
if((state_val_30622 === (1))){
var state_30621__$1 = state_30621;
var statearr_30632_30742 = state_30621__$1;
(statearr_30632_30742[(2)] = null);

(statearr_30632_30742[(1)] = (2));


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
});})(c__19256__auto___30736,jobs,results,process,async))
;
return ((function (switch__19200__auto__,c__19256__auto___30736,jobs,results,process,async){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_30636 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30636[(0)] = state_machine__19201__auto__);

(statearr_30636[(1)] = (1));

return statearr_30636;
});
var state_machine__19201__auto____1 = (function (state_30621){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_30621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e30637){if((e30637 instanceof Object)){
var ex__19204__auto__ = e30637;
var statearr_30638_30743 = state_30621;
(statearr_30638_30743[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30744 = state_30621;
state_30621 = G__30744;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_30621){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_30621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___30736,jobs,results,process,async))
})();
var state__19258__auto__ = (function (){var statearr_30639 = f__19257__auto__.call(null);
(statearr_30639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___30736);

return statearr_30639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___30736,jobs,results,process,async))
);


var c__19256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto__,jobs,results,process,async){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto__,jobs,results,process,async){
return (function (state_30677){
var state_val_30678 = (state_30677[(1)]);
if((state_val_30678 === (7))){
var inst_30673 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
var statearr_30679_30745 = state_30677__$1;
(statearr_30679_30745[(2)] = inst_30673);

(statearr_30679_30745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (20))){
var state_30677__$1 = state_30677;
var statearr_30680_30746 = state_30677__$1;
(statearr_30680_30746[(2)] = null);

(statearr_30680_30746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (1))){
var state_30677__$1 = state_30677;
var statearr_30681_30747 = state_30677__$1;
(statearr_30681_30747[(2)] = null);

(statearr_30681_30747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (4))){
var inst_30642 = (state_30677[(7)]);
var inst_30642__$1 = (state_30677[(2)]);
var inst_30643 = (inst_30642__$1 == null);
var state_30677__$1 = (function (){var statearr_30682 = state_30677;
(statearr_30682[(7)] = inst_30642__$1);

return statearr_30682;
})();
if(cljs.core.truth_(inst_30643)){
var statearr_30683_30748 = state_30677__$1;
(statearr_30683_30748[(1)] = (5));

} else {
var statearr_30684_30749 = state_30677__$1;
(statearr_30684_30749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (15))){
var inst_30655 = (state_30677[(8)]);
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30677__$1,(18),to,inst_30655);
} else {
if((state_val_30678 === (21))){
var inst_30668 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
var statearr_30685_30750 = state_30677__$1;
(statearr_30685_30750[(2)] = inst_30668);

(statearr_30685_30750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (13))){
var inst_30670 = (state_30677[(2)]);
var state_30677__$1 = (function (){var statearr_30686 = state_30677;
(statearr_30686[(9)] = inst_30670);

return statearr_30686;
})();
var statearr_30687_30751 = state_30677__$1;
(statearr_30687_30751[(2)] = null);

(statearr_30687_30751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (6))){
var inst_30642 = (state_30677[(7)]);
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30677__$1,(11),inst_30642);
} else {
if((state_val_30678 === (17))){
var inst_30663 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
if(cljs.core.truth_(inst_30663)){
var statearr_30688_30752 = state_30677__$1;
(statearr_30688_30752[(1)] = (19));

} else {
var statearr_30689_30753 = state_30677__$1;
(statearr_30689_30753[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (3))){
var inst_30675 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30677__$1,inst_30675);
} else {
if((state_val_30678 === (12))){
var inst_30652 = (state_30677[(10)]);
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30677__$1,(14),inst_30652);
} else {
if((state_val_30678 === (2))){
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30677__$1,(4),results);
} else {
if((state_val_30678 === (19))){
var state_30677__$1 = state_30677;
var statearr_30690_30754 = state_30677__$1;
(statearr_30690_30754[(2)] = null);

(statearr_30690_30754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (11))){
var inst_30652 = (state_30677[(2)]);
var state_30677__$1 = (function (){var statearr_30691 = state_30677;
(statearr_30691[(10)] = inst_30652);

return statearr_30691;
})();
var statearr_30692_30755 = state_30677__$1;
(statearr_30692_30755[(2)] = null);

(statearr_30692_30755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (9))){
var state_30677__$1 = state_30677;
var statearr_30693_30756 = state_30677__$1;
(statearr_30693_30756[(2)] = null);

(statearr_30693_30756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (5))){
var state_30677__$1 = state_30677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30694_30757 = state_30677__$1;
(statearr_30694_30757[(1)] = (8));

} else {
var statearr_30695_30758 = state_30677__$1;
(statearr_30695_30758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (14))){
var inst_30657 = (state_30677[(11)]);
var inst_30655 = (state_30677[(8)]);
var inst_30655__$1 = (state_30677[(2)]);
var inst_30656 = (inst_30655__$1 == null);
var inst_30657__$1 = cljs.core.not.call(null,inst_30656);
var state_30677__$1 = (function (){var statearr_30696 = state_30677;
(statearr_30696[(11)] = inst_30657__$1);

(statearr_30696[(8)] = inst_30655__$1);

return statearr_30696;
})();
if(inst_30657__$1){
var statearr_30697_30759 = state_30677__$1;
(statearr_30697_30759[(1)] = (15));

} else {
var statearr_30698_30760 = state_30677__$1;
(statearr_30698_30760[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (16))){
var inst_30657 = (state_30677[(11)]);
var state_30677__$1 = state_30677;
var statearr_30699_30761 = state_30677__$1;
(statearr_30699_30761[(2)] = inst_30657);

(statearr_30699_30761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (10))){
var inst_30649 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
var statearr_30700_30762 = state_30677__$1;
(statearr_30700_30762[(2)] = inst_30649);

(statearr_30700_30762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (18))){
var inst_30660 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
var statearr_30701_30763 = state_30677__$1;
(statearr_30701_30763[(2)] = inst_30660);

(statearr_30701_30763[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (8))){
var inst_30646 = cljs.core.async.close_BANG_.call(null,to);
var state_30677__$1 = state_30677;
var statearr_30702_30764 = state_30677__$1;
(statearr_30702_30764[(2)] = inst_30646);

(statearr_30702_30764[(1)] = (10));


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
});})(c__19256__auto__,jobs,results,process,async))
;
return ((function (switch__19200__auto__,c__19256__auto__,jobs,results,process,async){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_30706 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30706[(0)] = state_machine__19201__auto__);

(statearr_30706[(1)] = (1));

return statearr_30706;
});
var state_machine__19201__auto____1 = (function (state_30677){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_30677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e30707){if((e30707 instanceof Object)){
var ex__19204__auto__ = e30707;
var statearr_30708_30765 = state_30677;
(statearr_30708_30765[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30766 = state_30677;
state_30677 = G__30766;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_30677){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_30677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto__,jobs,results,process,async))
})();
var state__19258__auto__ = (function (){var statearr_30709 = f__19257__auto__.call(null);
(statearr_30709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto__);

return statearr_30709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto__,jobs,results,process,async))
);

return c__19256__auto__;
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
var c__19256__auto___30867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___30867,tc,fc){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___30867,tc,fc){
return (function (state_30842){
var state_val_30843 = (state_30842[(1)]);
if((state_val_30843 === (7))){
var inst_30838 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30844_30868 = state_30842__$1;
(statearr_30844_30868[(2)] = inst_30838);

(statearr_30844_30868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (1))){
var state_30842__$1 = state_30842;
var statearr_30845_30869 = state_30842__$1;
(statearr_30845_30869[(2)] = null);

(statearr_30845_30869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (4))){
var inst_30819 = (state_30842[(7)]);
var inst_30819__$1 = (state_30842[(2)]);
var inst_30820 = (inst_30819__$1 == null);
var state_30842__$1 = (function (){var statearr_30846 = state_30842;
(statearr_30846[(7)] = inst_30819__$1);

return statearr_30846;
})();
if(cljs.core.truth_(inst_30820)){
var statearr_30847_30870 = state_30842__$1;
(statearr_30847_30870[(1)] = (5));

} else {
var statearr_30848_30871 = state_30842__$1;
(statearr_30848_30871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (13))){
var state_30842__$1 = state_30842;
var statearr_30849_30872 = state_30842__$1;
(statearr_30849_30872[(2)] = null);

(statearr_30849_30872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (6))){
var inst_30819 = (state_30842[(7)]);
var inst_30825 = p.call(null,inst_30819);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30825)){
var statearr_30850_30873 = state_30842__$1;
(statearr_30850_30873[(1)] = (9));

} else {
var statearr_30851_30874 = state_30842__$1;
(statearr_30851_30874[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (3))){
var inst_30840 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30842__$1,inst_30840);
} else {
if((state_val_30843 === (12))){
var state_30842__$1 = state_30842;
var statearr_30852_30875 = state_30842__$1;
(statearr_30852_30875[(2)] = null);

(statearr_30852_30875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (2))){
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(4),ch);
} else {
if((state_val_30843 === (11))){
var inst_30819 = (state_30842[(7)]);
var inst_30829 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30842__$1,(8),inst_30829,inst_30819);
} else {
if((state_val_30843 === (9))){
var state_30842__$1 = state_30842;
var statearr_30853_30876 = state_30842__$1;
(statearr_30853_30876[(2)] = tc);

(statearr_30853_30876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (5))){
var inst_30822 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30823 = cljs.core.async.close_BANG_.call(null,fc);
var state_30842__$1 = (function (){var statearr_30854 = state_30842;
(statearr_30854[(8)] = inst_30822);

return statearr_30854;
})();
var statearr_30855_30877 = state_30842__$1;
(statearr_30855_30877[(2)] = inst_30823);

(statearr_30855_30877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (14))){
var inst_30836 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30856_30878 = state_30842__$1;
(statearr_30856_30878[(2)] = inst_30836);

(statearr_30856_30878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (10))){
var state_30842__$1 = state_30842;
var statearr_30857_30879 = state_30842__$1;
(statearr_30857_30879[(2)] = fc);

(statearr_30857_30879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (8))){
var inst_30831 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30831)){
var statearr_30858_30880 = state_30842__$1;
(statearr_30858_30880[(1)] = (12));

} else {
var statearr_30859_30881 = state_30842__$1;
(statearr_30859_30881[(1)] = (13));

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
});})(c__19256__auto___30867,tc,fc))
;
return ((function (switch__19200__auto__,c__19256__auto___30867,tc,fc){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_30863 = [null,null,null,null,null,null,null,null,null];
(statearr_30863[(0)] = state_machine__19201__auto__);

(statearr_30863[(1)] = (1));

return statearr_30863;
});
var state_machine__19201__auto____1 = (function (state_30842){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_30842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e30864){if((e30864 instanceof Object)){
var ex__19204__auto__ = e30864;
var statearr_30865_30882 = state_30842;
(statearr_30865_30882[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30883 = state_30842;
state_30842 = G__30883;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_30842){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_30842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___30867,tc,fc))
})();
var state__19258__auto__ = (function (){var statearr_30866 = f__19257__auto__.call(null);
(statearr_30866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___30867);

return statearr_30866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___30867,tc,fc))
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
var c__19256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto__){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto__){
return (function (state_30930){
var state_val_30931 = (state_30930[(1)]);
if((state_val_30931 === (7))){
var inst_30926 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30932_30948 = state_30930__$1;
(statearr_30932_30948[(2)] = inst_30926);

(statearr_30932_30948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (6))){
var inst_30919 = (state_30930[(7)]);
var inst_30916 = (state_30930[(8)]);
var inst_30923 = f.call(null,inst_30916,inst_30919);
var inst_30916__$1 = inst_30923;
var state_30930__$1 = (function (){var statearr_30933 = state_30930;
(statearr_30933[(8)] = inst_30916__$1);

return statearr_30933;
})();
var statearr_30934_30949 = state_30930__$1;
(statearr_30934_30949[(2)] = null);

(statearr_30934_30949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (5))){
var inst_30916 = (state_30930[(8)]);
var state_30930__$1 = state_30930;
var statearr_30935_30950 = state_30930__$1;
(statearr_30935_30950[(2)] = inst_30916);

(statearr_30935_30950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (4))){
var inst_30919 = (state_30930[(7)]);
var inst_30919__$1 = (state_30930[(2)]);
var inst_30920 = (inst_30919__$1 == null);
var state_30930__$1 = (function (){var statearr_30936 = state_30930;
(statearr_30936[(7)] = inst_30919__$1);

return statearr_30936;
})();
if(cljs.core.truth_(inst_30920)){
var statearr_30937_30951 = state_30930__$1;
(statearr_30937_30951[(1)] = (5));

} else {
var statearr_30938_30952 = state_30930__$1;
(statearr_30938_30952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (3))){
var inst_30928 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30930__$1,inst_30928);
} else {
if((state_val_30931 === (2))){
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30930__$1,(4),ch);
} else {
if((state_val_30931 === (1))){
var inst_30916 = init;
var state_30930__$1 = (function (){var statearr_30939 = state_30930;
(statearr_30939[(8)] = inst_30916);

return statearr_30939;
})();
var statearr_30940_30953 = state_30930__$1;
(statearr_30940_30953[(2)] = null);

(statearr_30940_30953[(1)] = (2));


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
});})(c__19256__auto__))
;
return ((function (switch__19200__auto__,c__19256__auto__){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_30944 = [null,null,null,null,null,null,null,null,null];
(statearr_30944[(0)] = state_machine__19201__auto__);

(statearr_30944[(1)] = (1));

return statearr_30944;
});
var state_machine__19201__auto____1 = (function (state_30930){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_30930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e30945){if((e30945 instanceof Object)){
var ex__19204__auto__ = e30945;
var statearr_30946_30954 = state_30930;
(statearr_30946_30954[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30955 = state_30930;
state_30930 = G__30955;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_30930){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_30930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto__))
})();
var state__19258__auto__ = (function (){var statearr_30947 = f__19257__auto__.call(null);
(statearr_30947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto__);

return statearr_30947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto__))
);

return c__19256__auto__;
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
var c__19256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto__){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto__){
return (function (state_31029){
var state_val_31030 = (state_31029[(1)]);
if((state_val_31030 === (7))){
var inst_31011 = (state_31029[(2)]);
var state_31029__$1 = state_31029;
var statearr_31031_31054 = state_31029__$1;
(statearr_31031_31054[(2)] = inst_31011);

(statearr_31031_31054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (1))){
var inst_31005 = cljs.core.seq.call(null,coll);
var inst_31006 = inst_31005;
var state_31029__$1 = (function (){var statearr_31032 = state_31029;
(statearr_31032[(7)] = inst_31006);

return statearr_31032;
})();
var statearr_31033_31055 = state_31029__$1;
(statearr_31033_31055[(2)] = null);

(statearr_31033_31055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (4))){
var inst_31006 = (state_31029[(7)]);
var inst_31009 = cljs.core.first.call(null,inst_31006);
var state_31029__$1 = state_31029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31029__$1,(7),ch,inst_31009);
} else {
if((state_val_31030 === (13))){
var inst_31023 = (state_31029[(2)]);
var state_31029__$1 = state_31029;
var statearr_31034_31056 = state_31029__$1;
(statearr_31034_31056[(2)] = inst_31023);

(statearr_31034_31056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (6))){
var inst_31014 = (state_31029[(2)]);
var state_31029__$1 = state_31029;
if(cljs.core.truth_(inst_31014)){
var statearr_31035_31057 = state_31029__$1;
(statearr_31035_31057[(1)] = (8));

} else {
var statearr_31036_31058 = state_31029__$1;
(statearr_31036_31058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (3))){
var inst_31027 = (state_31029[(2)]);
var state_31029__$1 = state_31029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31029__$1,inst_31027);
} else {
if((state_val_31030 === (12))){
var state_31029__$1 = state_31029;
var statearr_31037_31059 = state_31029__$1;
(statearr_31037_31059[(2)] = null);

(statearr_31037_31059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (2))){
var inst_31006 = (state_31029[(7)]);
var state_31029__$1 = state_31029;
if(cljs.core.truth_(inst_31006)){
var statearr_31038_31060 = state_31029__$1;
(statearr_31038_31060[(1)] = (4));

} else {
var statearr_31039_31061 = state_31029__$1;
(statearr_31039_31061[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (11))){
var inst_31020 = cljs.core.async.close_BANG_.call(null,ch);
var state_31029__$1 = state_31029;
var statearr_31040_31062 = state_31029__$1;
(statearr_31040_31062[(2)] = inst_31020);

(statearr_31040_31062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (9))){
var state_31029__$1 = state_31029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31041_31063 = state_31029__$1;
(statearr_31041_31063[(1)] = (11));

} else {
var statearr_31042_31064 = state_31029__$1;
(statearr_31042_31064[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (5))){
var inst_31006 = (state_31029[(7)]);
var state_31029__$1 = state_31029;
var statearr_31043_31065 = state_31029__$1;
(statearr_31043_31065[(2)] = inst_31006);

(statearr_31043_31065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (10))){
var inst_31025 = (state_31029[(2)]);
var state_31029__$1 = state_31029;
var statearr_31044_31066 = state_31029__$1;
(statearr_31044_31066[(2)] = inst_31025);

(statearr_31044_31066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (8))){
var inst_31006 = (state_31029[(7)]);
var inst_31016 = cljs.core.next.call(null,inst_31006);
var inst_31006__$1 = inst_31016;
var state_31029__$1 = (function (){var statearr_31045 = state_31029;
(statearr_31045[(7)] = inst_31006__$1);

return statearr_31045;
})();
var statearr_31046_31067 = state_31029__$1;
(statearr_31046_31067[(2)] = null);

(statearr_31046_31067[(1)] = (2));


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
});})(c__19256__auto__))
;
return ((function (switch__19200__auto__,c__19256__auto__){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_31050 = [null,null,null,null,null,null,null,null];
(statearr_31050[(0)] = state_machine__19201__auto__);

(statearr_31050[(1)] = (1));

return statearr_31050;
});
var state_machine__19201__auto____1 = (function (state_31029){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_31029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e31051){if((e31051 instanceof Object)){
var ex__19204__auto__ = e31051;
var statearr_31052_31068 = state_31029;
(statearr_31052_31068[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31069 = state_31029;
state_31029 = G__31069;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_31029){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_31029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto__))
})();
var state__19258__auto__ = (function (){var statearr_31053 = f__19257__auto__.call(null);
(statearr_31053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto__);

return statearr_31053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto__))
);

return c__19256__auto__;
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

cljs.core.async.Mux = (function (){var obj31071 = {};
return obj31071;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__16133__auto__ = _;
if(and__16133__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16789__auto__ = (((_ == null))?null:_);
return (function (){var or__16145__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj31073 = {};
return obj31073;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
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
if(typeof cljs.core.async.t31295 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31295 = (function (cs,ch,mult,meta31296){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31296 = meta31296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31295.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31295.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31295.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31295.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31295.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31297){
var self__ = this;
var _31297__$1 = this;
return self__.meta31296;
});})(cs))
;

cljs.core.async.t31295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31297,meta31296__$1){
var self__ = this;
var _31297__$1 = this;
return (new cljs.core.async.t31295(self__.cs,self__.ch,self__.mult,meta31296__$1));
});})(cs))
;

cljs.core.async.t31295.cljs$lang$type = true;

cljs.core.async.t31295.cljs$lang$ctorStr = "cljs.core.async/t31295";

cljs.core.async.t31295.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31295");
});})(cs))
;

cljs.core.async.__GT_t31295 = ((function (cs){
return (function __GT_t31295(cs__$1,ch__$1,mult__$1,meta31296){
return (new cljs.core.async.t31295(cs__$1,ch__$1,mult__$1,meta31296));
});})(cs))
;

}

return (new cljs.core.async.t31295(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19256__auto___31516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___31516,cs,m,dchan,dctr,done){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___31516,cs,m,dchan,dctr,done){
return (function (state_31428){
var state_val_31429 = (state_31428[(1)]);
if((state_val_31429 === (7))){
var inst_31424 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31430_31517 = state_31428__$1;
(statearr_31430_31517[(2)] = inst_31424);

(statearr_31430_31517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (20))){
var inst_31329 = (state_31428[(7)]);
var inst_31339 = cljs.core.first.call(null,inst_31329);
var inst_31340 = cljs.core.nth.call(null,inst_31339,(0),null);
var inst_31341 = cljs.core.nth.call(null,inst_31339,(1),null);
var state_31428__$1 = (function (){var statearr_31431 = state_31428;
(statearr_31431[(8)] = inst_31340);

return statearr_31431;
})();
if(cljs.core.truth_(inst_31341)){
var statearr_31432_31518 = state_31428__$1;
(statearr_31432_31518[(1)] = (22));

} else {
var statearr_31433_31519 = state_31428__$1;
(statearr_31433_31519[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (27))){
var inst_31371 = (state_31428[(9)]);
var inst_31369 = (state_31428[(10)]);
var inst_31376 = (state_31428[(11)]);
var inst_31300 = (state_31428[(12)]);
var inst_31376__$1 = cljs.core._nth.call(null,inst_31369,inst_31371);
var inst_31377 = cljs.core.async.put_BANG_.call(null,inst_31376__$1,inst_31300,done);
var state_31428__$1 = (function (){var statearr_31434 = state_31428;
(statearr_31434[(11)] = inst_31376__$1);

return statearr_31434;
})();
if(cljs.core.truth_(inst_31377)){
var statearr_31435_31520 = state_31428__$1;
(statearr_31435_31520[(1)] = (30));

} else {
var statearr_31436_31521 = state_31428__$1;
(statearr_31436_31521[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (1))){
var state_31428__$1 = state_31428;
var statearr_31437_31522 = state_31428__$1;
(statearr_31437_31522[(2)] = null);

(statearr_31437_31522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (24))){
var inst_31329 = (state_31428[(7)]);
var inst_31346 = (state_31428[(2)]);
var inst_31347 = cljs.core.next.call(null,inst_31329);
var inst_31309 = inst_31347;
var inst_31310 = null;
var inst_31311 = (0);
var inst_31312 = (0);
var state_31428__$1 = (function (){var statearr_31438 = state_31428;
(statearr_31438[(13)] = inst_31309);

(statearr_31438[(14)] = inst_31310);

(statearr_31438[(15)] = inst_31312);

(statearr_31438[(16)] = inst_31346);

(statearr_31438[(17)] = inst_31311);

return statearr_31438;
})();
var statearr_31439_31523 = state_31428__$1;
(statearr_31439_31523[(2)] = null);

(statearr_31439_31523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (39))){
var state_31428__$1 = state_31428;
var statearr_31443_31524 = state_31428__$1;
(statearr_31443_31524[(2)] = null);

(statearr_31443_31524[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (4))){
var inst_31300 = (state_31428[(12)]);
var inst_31300__$1 = (state_31428[(2)]);
var inst_31301 = (inst_31300__$1 == null);
var state_31428__$1 = (function (){var statearr_31444 = state_31428;
(statearr_31444[(12)] = inst_31300__$1);

return statearr_31444;
})();
if(cljs.core.truth_(inst_31301)){
var statearr_31445_31525 = state_31428__$1;
(statearr_31445_31525[(1)] = (5));

} else {
var statearr_31446_31526 = state_31428__$1;
(statearr_31446_31526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (15))){
var inst_31309 = (state_31428[(13)]);
var inst_31310 = (state_31428[(14)]);
var inst_31312 = (state_31428[(15)]);
var inst_31311 = (state_31428[(17)]);
var inst_31325 = (state_31428[(2)]);
var inst_31326 = (inst_31312 + (1));
var tmp31440 = inst_31309;
var tmp31441 = inst_31310;
var tmp31442 = inst_31311;
var inst_31309__$1 = tmp31440;
var inst_31310__$1 = tmp31441;
var inst_31311__$1 = tmp31442;
var inst_31312__$1 = inst_31326;
var state_31428__$1 = (function (){var statearr_31447 = state_31428;
(statearr_31447[(13)] = inst_31309__$1);

(statearr_31447[(14)] = inst_31310__$1);

(statearr_31447[(15)] = inst_31312__$1);

(statearr_31447[(18)] = inst_31325);

(statearr_31447[(17)] = inst_31311__$1);

return statearr_31447;
})();
var statearr_31448_31527 = state_31428__$1;
(statearr_31448_31527[(2)] = null);

(statearr_31448_31527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (21))){
var inst_31350 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31452_31528 = state_31428__$1;
(statearr_31452_31528[(2)] = inst_31350);

(statearr_31452_31528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (31))){
var inst_31376 = (state_31428[(11)]);
var inst_31380 = done.call(null,null);
var inst_31381 = cljs.core.async.untap_STAR_.call(null,m,inst_31376);
var state_31428__$1 = (function (){var statearr_31453 = state_31428;
(statearr_31453[(19)] = inst_31380);

return statearr_31453;
})();
var statearr_31454_31529 = state_31428__$1;
(statearr_31454_31529[(2)] = inst_31381);

(statearr_31454_31529[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (32))){
var inst_31370 = (state_31428[(20)]);
var inst_31371 = (state_31428[(9)]);
var inst_31369 = (state_31428[(10)]);
var inst_31368 = (state_31428[(21)]);
var inst_31383 = (state_31428[(2)]);
var inst_31384 = (inst_31371 + (1));
var tmp31449 = inst_31370;
var tmp31450 = inst_31369;
var tmp31451 = inst_31368;
var inst_31368__$1 = tmp31451;
var inst_31369__$1 = tmp31450;
var inst_31370__$1 = tmp31449;
var inst_31371__$1 = inst_31384;
var state_31428__$1 = (function (){var statearr_31455 = state_31428;
(statearr_31455[(20)] = inst_31370__$1);

(statearr_31455[(9)] = inst_31371__$1);

(statearr_31455[(10)] = inst_31369__$1);

(statearr_31455[(22)] = inst_31383);

(statearr_31455[(21)] = inst_31368__$1);

return statearr_31455;
})();
var statearr_31456_31530 = state_31428__$1;
(statearr_31456_31530[(2)] = null);

(statearr_31456_31530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (40))){
var inst_31396 = (state_31428[(23)]);
var inst_31400 = done.call(null,null);
var inst_31401 = cljs.core.async.untap_STAR_.call(null,m,inst_31396);
var state_31428__$1 = (function (){var statearr_31457 = state_31428;
(statearr_31457[(24)] = inst_31400);

return statearr_31457;
})();
var statearr_31458_31531 = state_31428__$1;
(statearr_31458_31531[(2)] = inst_31401);

(statearr_31458_31531[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (33))){
var inst_31387 = (state_31428[(25)]);
var inst_31389 = cljs.core.chunked_seq_QMARK_.call(null,inst_31387);
var state_31428__$1 = state_31428;
if(inst_31389){
var statearr_31459_31532 = state_31428__$1;
(statearr_31459_31532[(1)] = (36));

} else {
var statearr_31460_31533 = state_31428__$1;
(statearr_31460_31533[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (13))){
var inst_31319 = (state_31428[(26)]);
var inst_31322 = cljs.core.async.close_BANG_.call(null,inst_31319);
var state_31428__$1 = state_31428;
var statearr_31461_31534 = state_31428__$1;
(statearr_31461_31534[(2)] = inst_31322);

(statearr_31461_31534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (22))){
var inst_31340 = (state_31428[(8)]);
var inst_31343 = cljs.core.async.close_BANG_.call(null,inst_31340);
var state_31428__$1 = state_31428;
var statearr_31462_31535 = state_31428__$1;
(statearr_31462_31535[(2)] = inst_31343);

(statearr_31462_31535[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (36))){
var inst_31387 = (state_31428[(25)]);
var inst_31391 = cljs.core.chunk_first.call(null,inst_31387);
var inst_31392 = cljs.core.chunk_rest.call(null,inst_31387);
var inst_31393 = cljs.core.count.call(null,inst_31391);
var inst_31368 = inst_31392;
var inst_31369 = inst_31391;
var inst_31370 = inst_31393;
var inst_31371 = (0);
var state_31428__$1 = (function (){var statearr_31463 = state_31428;
(statearr_31463[(20)] = inst_31370);

(statearr_31463[(9)] = inst_31371);

(statearr_31463[(10)] = inst_31369);

(statearr_31463[(21)] = inst_31368);

return statearr_31463;
})();
var statearr_31464_31536 = state_31428__$1;
(statearr_31464_31536[(2)] = null);

(statearr_31464_31536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (41))){
var inst_31387 = (state_31428[(25)]);
var inst_31403 = (state_31428[(2)]);
var inst_31404 = cljs.core.next.call(null,inst_31387);
var inst_31368 = inst_31404;
var inst_31369 = null;
var inst_31370 = (0);
var inst_31371 = (0);
var state_31428__$1 = (function (){var statearr_31465 = state_31428;
(statearr_31465[(20)] = inst_31370);

(statearr_31465[(9)] = inst_31371);

(statearr_31465[(10)] = inst_31369);

(statearr_31465[(21)] = inst_31368);

(statearr_31465[(27)] = inst_31403);

return statearr_31465;
})();
var statearr_31466_31537 = state_31428__$1;
(statearr_31466_31537[(2)] = null);

(statearr_31466_31537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (43))){
var state_31428__$1 = state_31428;
var statearr_31467_31538 = state_31428__$1;
(statearr_31467_31538[(2)] = null);

(statearr_31467_31538[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (29))){
var inst_31412 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31468_31539 = state_31428__$1;
(statearr_31468_31539[(2)] = inst_31412);

(statearr_31468_31539[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (44))){
var inst_31421 = (state_31428[(2)]);
var state_31428__$1 = (function (){var statearr_31469 = state_31428;
(statearr_31469[(28)] = inst_31421);

return statearr_31469;
})();
var statearr_31470_31540 = state_31428__$1;
(statearr_31470_31540[(2)] = null);

(statearr_31470_31540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (6))){
var inst_31360 = (state_31428[(29)]);
var inst_31359 = cljs.core.deref.call(null,cs);
var inst_31360__$1 = cljs.core.keys.call(null,inst_31359);
var inst_31361 = cljs.core.count.call(null,inst_31360__$1);
var inst_31362 = cljs.core.reset_BANG_.call(null,dctr,inst_31361);
var inst_31367 = cljs.core.seq.call(null,inst_31360__$1);
var inst_31368 = inst_31367;
var inst_31369 = null;
var inst_31370 = (0);
var inst_31371 = (0);
var state_31428__$1 = (function (){var statearr_31471 = state_31428;
(statearr_31471[(20)] = inst_31370);

(statearr_31471[(9)] = inst_31371);

(statearr_31471[(29)] = inst_31360__$1);

(statearr_31471[(10)] = inst_31369);

(statearr_31471[(30)] = inst_31362);

(statearr_31471[(21)] = inst_31368);

return statearr_31471;
})();
var statearr_31472_31541 = state_31428__$1;
(statearr_31472_31541[(2)] = null);

(statearr_31472_31541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (28))){
var inst_31387 = (state_31428[(25)]);
var inst_31368 = (state_31428[(21)]);
var inst_31387__$1 = cljs.core.seq.call(null,inst_31368);
var state_31428__$1 = (function (){var statearr_31473 = state_31428;
(statearr_31473[(25)] = inst_31387__$1);

return statearr_31473;
})();
if(inst_31387__$1){
var statearr_31474_31542 = state_31428__$1;
(statearr_31474_31542[(1)] = (33));

} else {
var statearr_31475_31543 = state_31428__$1;
(statearr_31475_31543[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (25))){
var inst_31370 = (state_31428[(20)]);
var inst_31371 = (state_31428[(9)]);
var inst_31373 = (inst_31371 < inst_31370);
var inst_31374 = inst_31373;
var state_31428__$1 = state_31428;
if(cljs.core.truth_(inst_31374)){
var statearr_31476_31544 = state_31428__$1;
(statearr_31476_31544[(1)] = (27));

} else {
var statearr_31477_31545 = state_31428__$1;
(statearr_31477_31545[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (34))){
var state_31428__$1 = state_31428;
var statearr_31478_31546 = state_31428__$1;
(statearr_31478_31546[(2)] = null);

(statearr_31478_31546[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (17))){
var state_31428__$1 = state_31428;
var statearr_31479_31547 = state_31428__$1;
(statearr_31479_31547[(2)] = null);

(statearr_31479_31547[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (3))){
var inst_31426 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31428__$1,inst_31426);
} else {
if((state_val_31429 === (12))){
var inst_31355 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31480_31548 = state_31428__$1;
(statearr_31480_31548[(2)] = inst_31355);

(statearr_31480_31548[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (2))){
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(4),ch);
} else {
if((state_val_31429 === (23))){
var state_31428__$1 = state_31428;
var statearr_31481_31549 = state_31428__$1;
(statearr_31481_31549[(2)] = null);

(statearr_31481_31549[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (35))){
var inst_31410 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31482_31550 = state_31428__$1;
(statearr_31482_31550[(2)] = inst_31410);

(statearr_31482_31550[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (19))){
var inst_31329 = (state_31428[(7)]);
var inst_31333 = cljs.core.chunk_first.call(null,inst_31329);
var inst_31334 = cljs.core.chunk_rest.call(null,inst_31329);
var inst_31335 = cljs.core.count.call(null,inst_31333);
var inst_31309 = inst_31334;
var inst_31310 = inst_31333;
var inst_31311 = inst_31335;
var inst_31312 = (0);
var state_31428__$1 = (function (){var statearr_31483 = state_31428;
(statearr_31483[(13)] = inst_31309);

(statearr_31483[(14)] = inst_31310);

(statearr_31483[(15)] = inst_31312);

(statearr_31483[(17)] = inst_31311);

return statearr_31483;
})();
var statearr_31484_31551 = state_31428__$1;
(statearr_31484_31551[(2)] = null);

(statearr_31484_31551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (11))){
var inst_31309 = (state_31428[(13)]);
var inst_31329 = (state_31428[(7)]);
var inst_31329__$1 = cljs.core.seq.call(null,inst_31309);
var state_31428__$1 = (function (){var statearr_31485 = state_31428;
(statearr_31485[(7)] = inst_31329__$1);

return statearr_31485;
})();
if(inst_31329__$1){
var statearr_31486_31552 = state_31428__$1;
(statearr_31486_31552[(1)] = (16));

} else {
var statearr_31487_31553 = state_31428__$1;
(statearr_31487_31553[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (9))){
var inst_31357 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31488_31554 = state_31428__$1;
(statearr_31488_31554[(2)] = inst_31357);

(statearr_31488_31554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (5))){
var inst_31307 = cljs.core.deref.call(null,cs);
var inst_31308 = cljs.core.seq.call(null,inst_31307);
var inst_31309 = inst_31308;
var inst_31310 = null;
var inst_31311 = (0);
var inst_31312 = (0);
var state_31428__$1 = (function (){var statearr_31489 = state_31428;
(statearr_31489[(13)] = inst_31309);

(statearr_31489[(14)] = inst_31310);

(statearr_31489[(15)] = inst_31312);

(statearr_31489[(17)] = inst_31311);

return statearr_31489;
})();
var statearr_31490_31555 = state_31428__$1;
(statearr_31490_31555[(2)] = null);

(statearr_31490_31555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (14))){
var state_31428__$1 = state_31428;
var statearr_31491_31556 = state_31428__$1;
(statearr_31491_31556[(2)] = null);

(statearr_31491_31556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (45))){
var inst_31418 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31492_31557 = state_31428__$1;
(statearr_31492_31557[(2)] = inst_31418);

(statearr_31492_31557[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (26))){
var inst_31360 = (state_31428[(29)]);
var inst_31414 = (state_31428[(2)]);
var inst_31415 = cljs.core.seq.call(null,inst_31360);
var state_31428__$1 = (function (){var statearr_31493 = state_31428;
(statearr_31493[(31)] = inst_31414);

return statearr_31493;
})();
if(inst_31415){
var statearr_31494_31558 = state_31428__$1;
(statearr_31494_31558[(1)] = (42));

} else {
var statearr_31495_31559 = state_31428__$1;
(statearr_31495_31559[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (16))){
var inst_31329 = (state_31428[(7)]);
var inst_31331 = cljs.core.chunked_seq_QMARK_.call(null,inst_31329);
var state_31428__$1 = state_31428;
if(inst_31331){
var statearr_31496_31560 = state_31428__$1;
(statearr_31496_31560[(1)] = (19));

} else {
var statearr_31497_31561 = state_31428__$1;
(statearr_31497_31561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (38))){
var inst_31407 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31498_31562 = state_31428__$1;
(statearr_31498_31562[(2)] = inst_31407);

(statearr_31498_31562[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (30))){
var state_31428__$1 = state_31428;
var statearr_31499_31563 = state_31428__$1;
(statearr_31499_31563[(2)] = null);

(statearr_31499_31563[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (10))){
var inst_31310 = (state_31428[(14)]);
var inst_31312 = (state_31428[(15)]);
var inst_31318 = cljs.core._nth.call(null,inst_31310,inst_31312);
var inst_31319 = cljs.core.nth.call(null,inst_31318,(0),null);
var inst_31320 = cljs.core.nth.call(null,inst_31318,(1),null);
var state_31428__$1 = (function (){var statearr_31500 = state_31428;
(statearr_31500[(26)] = inst_31319);

return statearr_31500;
})();
if(cljs.core.truth_(inst_31320)){
var statearr_31501_31564 = state_31428__$1;
(statearr_31501_31564[(1)] = (13));

} else {
var statearr_31502_31565 = state_31428__$1;
(statearr_31502_31565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (18))){
var inst_31353 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31503_31566 = state_31428__$1;
(statearr_31503_31566[(2)] = inst_31353);

(statearr_31503_31566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (42))){
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(45),dchan);
} else {
if((state_val_31429 === (37))){
var inst_31387 = (state_31428[(25)]);
var inst_31396 = (state_31428[(23)]);
var inst_31300 = (state_31428[(12)]);
var inst_31396__$1 = cljs.core.first.call(null,inst_31387);
var inst_31397 = cljs.core.async.put_BANG_.call(null,inst_31396__$1,inst_31300,done);
var state_31428__$1 = (function (){var statearr_31504 = state_31428;
(statearr_31504[(23)] = inst_31396__$1);

return statearr_31504;
})();
if(cljs.core.truth_(inst_31397)){
var statearr_31505_31567 = state_31428__$1;
(statearr_31505_31567[(1)] = (39));

} else {
var statearr_31506_31568 = state_31428__$1;
(statearr_31506_31568[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (8))){
var inst_31312 = (state_31428[(15)]);
var inst_31311 = (state_31428[(17)]);
var inst_31314 = (inst_31312 < inst_31311);
var inst_31315 = inst_31314;
var state_31428__$1 = state_31428;
if(cljs.core.truth_(inst_31315)){
var statearr_31507_31569 = state_31428__$1;
(statearr_31507_31569[(1)] = (10));

} else {
var statearr_31508_31570 = state_31428__$1;
(statearr_31508_31570[(1)] = (11));

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
});})(c__19256__auto___31516,cs,m,dchan,dctr,done))
;
return ((function (switch__19200__auto__,c__19256__auto___31516,cs,m,dchan,dctr,done){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_31512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31512[(0)] = state_machine__19201__auto__);

(statearr_31512[(1)] = (1));

return statearr_31512;
});
var state_machine__19201__auto____1 = (function (state_31428){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_31428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e31513){if((e31513 instanceof Object)){
var ex__19204__auto__ = e31513;
var statearr_31514_31571 = state_31428;
(statearr_31514_31571[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31572 = state_31428;
state_31428 = G__31572;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_31428){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_31428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___31516,cs,m,dchan,dctr,done))
})();
var state__19258__auto__ = (function (){var statearr_31515 = f__19257__auto__.call(null);
(statearr_31515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___31516);

return statearr_31515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___31516,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj31574 = {};
return obj31574;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__31575){
var map__31580 = p__31575;
var map__31580__$1 = ((cljs.core.seq_QMARK_.call(null,map__31580))?cljs.core.apply.call(null,cljs.core.hash_map,map__31580):map__31580);
var opts = map__31580__$1;
var statearr_31581_31584 = state;
(statearr_31581_31584[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31580,map__31580__$1,opts){
return (function (val){
var statearr_31582_31585 = state;
(statearr_31582_31585[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31580,map__31580__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_31583_31586 = state;
(statearr_31583_31586[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__31575 = null;
if (arguments.length > 3) {
var G__31587__i = 0, G__31587__a = new Array(arguments.length -  3);
while (G__31587__i < G__31587__a.length) {G__31587__a[G__31587__i] = arguments[G__31587__i + 3]; ++G__31587__i;}
  p__31575 = new cljs.core.IndexedSeq(G__31587__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__31575);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__31588){
var state = cljs.core.first(arglist__31588);
arglist__31588 = cljs.core.next(arglist__31588);
var cont_block = cljs.core.first(arglist__31588);
arglist__31588 = cljs.core.next(arglist__31588);
var ports = cljs.core.first(arglist__31588);
var p__31575 = cljs.core.rest(arglist__31588);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__31575);
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
if(typeof cljs.core.async.t31708 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31708 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31709){
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
this.meta31709 = meta31709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31708.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31708.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31708.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31708.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31708.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31708.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t31708.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31710){
var self__ = this;
var _31710__$1 = this;
return self__.meta31709;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31710,meta31709__$1){
var self__ = this;
var _31710__$1 = this;
return (new cljs.core.async.t31708(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31709__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31708.cljs$lang$type = true;

cljs.core.async.t31708.cljs$lang$ctorStr = "cljs.core.async/t31708";

cljs.core.async.t31708.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31708");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31708 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31708(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31709){
return (new cljs.core.async.t31708(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31709));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31708(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19256__auto___31827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___31827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___31827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31780){
var state_val_31781 = (state_31780[(1)]);
if((state_val_31781 === (7))){
var inst_31724 = (state_31780[(7)]);
var inst_31729 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31724);
var state_31780__$1 = state_31780;
var statearr_31782_31828 = state_31780__$1;
(statearr_31782_31828[(2)] = inst_31729);

(statearr_31782_31828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (20))){
var inst_31739 = (state_31780[(8)]);
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31780__$1,(23),out,inst_31739);
} else {
if((state_val_31781 === (1))){
var inst_31714 = (state_31780[(9)]);
var inst_31714__$1 = calc_state.call(null);
var inst_31715 = cljs.core.seq_QMARK_.call(null,inst_31714__$1);
var state_31780__$1 = (function (){var statearr_31783 = state_31780;
(statearr_31783[(9)] = inst_31714__$1);

return statearr_31783;
})();
if(inst_31715){
var statearr_31784_31829 = state_31780__$1;
(statearr_31784_31829[(1)] = (2));

} else {
var statearr_31785_31830 = state_31780__$1;
(statearr_31785_31830[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (24))){
var inst_31732 = (state_31780[(10)]);
var inst_31724 = inst_31732;
var state_31780__$1 = (function (){var statearr_31786 = state_31780;
(statearr_31786[(7)] = inst_31724);

return statearr_31786;
})();
var statearr_31787_31831 = state_31780__$1;
(statearr_31787_31831[(2)] = null);

(statearr_31787_31831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (4))){
var inst_31714 = (state_31780[(9)]);
var inst_31720 = (state_31780[(2)]);
var inst_31721 = cljs.core.get.call(null,inst_31720,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31722 = cljs.core.get.call(null,inst_31720,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31723 = cljs.core.get.call(null,inst_31720,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31724 = inst_31714;
var state_31780__$1 = (function (){var statearr_31788 = state_31780;
(statearr_31788[(11)] = inst_31722);

(statearr_31788[(12)] = inst_31723);

(statearr_31788[(13)] = inst_31721);

(statearr_31788[(7)] = inst_31724);

return statearr_31788;
})();
var statearr_31789_31832 = state_31780__$1;
(statearr_31789_31832[(2)] = null);

(statearr_31789_31832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (15))){
var state_31780__$1 = state_31780;
var statearr_31790_31833 = state_31780__$1;
(statearr_31790_31833[(2)] = null);

(statearr_31790_31833[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (21))){
var inst_31732 = (state_31780[(10)]);
var inst_31724 = inst_31732;
var state_31780__$1 = (function (){var statearr_31791 = state_31780;
(statearr_31791[(7)] = inst_31724);

return statearr_31791;
})();
var statearr_31792_31834 = state_31780__$1;
(statearr_31792_31834[(2)] = null);

(statearr_31792_31834[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (13))){
var inst_31776 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
var statearr_31793_31835 = state_31780__$1;
(statearr_31793_31835[(2)] = inst_31776);

(statearr_31793_31835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (22))){
var inst_31774 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
var statearr_31794_31836 = state_31780__$1;
(statearr_31794_31836[(2)] = inst_31774);

(statearr_31794_31836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (6))){
var inst_31778 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31780__$1,inst_31778);
} else {
if((state_val_31781 === (25))){
var state_31780__$1 = state_31780;
var statearr_31795_31837 = state_31780__$1;
(statearr_31795_31837[(2)] = null);

(statearr_31795_31837[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (17))){
var inst_31754 = (state_31780[(14)]);
var state_31780__$1 = state_31780;
var statearr_31796_31838 = state_31780__$1;
(statearr_31796_31838[(2)] = inst_31754);

(statearr_31796_31838[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (3))){
var inst_31714 = (state_31780[(9)]);
var state_31780__$1 = state_31780;
var statearr_31797_31839 = state_31780__$1;
(statearr_31797_31839[(2)] = inst_31714);

(statearr_31797_31839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (12))){
var inst_31735 = (state_31780[(15)]);
var inst_31754 = (state_31780[(14)]);
var inst_31740 = (state_31780[(16)]);
var inst_31754__$1 = inst_31735.call(null,inst_31740);
var state_31780__$1 = (function (){var statearr_31798 = state_31780;
(statearr_31798[(14)] = inst_31754__$1);

return statearr_31798;
})();
if(cljs.core.truth_(inst_31754__$1)){
var statearr_31799_31840 = state_31780__$1;
(statearr_31799_31840[(1)] = (17));

} else {
var statearr_31800_31841 = state_31780__$1;
(statearr_31800_31841[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (2))){
var inst_31714 = (state_31780[(9)]);
var inst_31717 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31714);
var state_31780__$1 = state_31780;
var statearr_31801_31842 = state_31780__$1;
(statearr_31801_31842[(2)] = inst_31717);

(statearr_31801_31842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (23))){
var inst_31765 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
if(cljs.core.truth_(inst_31765)){
var statearr_31802_31843 = state_31780__$1;
(statearr_31802_31843[(1)] = (24));

} else {
var statearr_31803_31844 = state_31780__$1;
(statearr_31803_31844[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (19))){
var inst_31762 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
if(cljs.core.truth_(inst_31762)){
var statearr_31804_31845 = state_31780__$1;
(statearr_31804_31845[(1)] = (20));

} else {
var statearr_31805_31846 = state_31780__$1;
(statearr_31805_31846[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (11))){
var inst_31739 = (state_31780[(8)]);
var inst_31745 = (inst_31739 == null);
var state_31780__$1 = state_31780;
if(cljs.core.truth_(inst_31745)){
var statearr_31806_31847 = state_31780__$1;
(statearr_31806_31847[(1)] = (14));

} else {
var statearr_31807_31848 = state_31780__$1;
(statearr_31807_31848[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (9))){
var inst_31732 = (state_31780[(10)]);
var inst_31732__$1 = (state_31780[(2)]);
var inst_31733 = cljs.core.get.call(null,inst_31732__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31734 = cljs.core.get.call(null,inst_31732__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31735 = cljs.core.get.call(null,inst_31732__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31780__$1 = (function (){var statearr_31808 = state_31780;
(statearr_31808[(15)] = inst_31735);

(statearr_31808[(17)] = inst_31734);

(statearr_31808[(10)] = inst_31732__$1);

return statearr_31808;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31780__$1,(10),inst_31733);
} else {
if((state_val_31781 === (5))){
var inst_31724 = (state_31780[(7)]);
var inst_31727 = cljs.core.seq_QMARK_.call(null,inst_31724);
var state_31780__$1 = state_31780;
if(inst_31727){
var statearr_31809_31849 = state_31780__$1;
(statearr_31809_31849[(1)] = (7));

} else {
var statearr_31810_31850 = state_31780__$1;
(statearr_31810_31850[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (14))){
var inst_31740 = (state_31780[(16)]);
var inst_31747 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31740);
var state_31780__$1 = state_31780;
var statearr_31811_31851 = state_31780__$1;
(statearr_31811_31851[(2)] = inst_31747);

(statearr_31811_31851[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (26))){
var inst_31770 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
var statearr_31812_31852 = state_31780__$1;
(statearr_31812_31852[(2)] = inst_31770);

(statearr_31812_31852[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (16))){
var inst_31750 = (state_31780[(2)]);
var inst_31751 = calc_state.call(null);
var inst_31724 = inst_31751;
var state_31780__$1 = (function (){var statearr_31813 = state_31780;
(statearr_31813[(7)] = inst_31724);

(statearr_31813[(18)] = inst_31750);

return statearr_31813;
})();
var statearr_31814_31853 = state_31780__$1;
(statearr_31814_31853[(2)] = null);

(statearr_31814_31853[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (10))){
var inst_31739 = (state_31780[(8)]);
var inst_31740 = (state_31780[(16)]);
var inst_31738 = (state_31780[(2)]);
var inst_31739__$1 = cljs.core.nth.call(null,inst_31738,(0),null);
var inst_31740__$1 = cljs.core.nth.call(null,inst_31738,(1),null);
var inst_31741 = (inst_31739__$1 == null);
var inst_31742 = cljs.core._EQ_.call(null,inst_31740__$1,change);
var inst_31743 = (inst_31741) || (inst_31742);
var state_31780__$1 = (function (){var statearr_31815 = state_31780;
(statearr_31815[(8)] = inst_31739__$1);

(statearr_31815[(16)] = inst_31740__$1);

return statearr_31815;
})();
if(cljs.core.truth_(inst_31743)){
var statearr_31816_31854 = state_31780__$1;
(statearr_31816_31854[(1)] = (11));

} else {
var statearr_31817_31855 = state_31780__$1;
(statearr_31817_31855[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (18))){
var inst_31735 = (state_31780[(15)]);
var inst_31734 = (state_31780[(17)]);
var inst_31740 = (state_31780[(16)]);
var inst_31757 = cljs.core.empty_QMARK_.call(null,inst_31735);
var inst_31758 = inst_31734.call(null,inst_31740);
var inst_31759 = cljs.core.not.call(null,inst_31758);
var inst_31760 = (inst_31757) && (inst_31759);
var state_31780__$1 = state_31780;
var statearr_31818_31856 = state_31780__$1;
(statearr_31818_31856[(2)] = inst_31760);

(statearr_31818_31856[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (8))){
var inst_31724 = (state_31780[(7)]);
var state_31780__$1 = state_31780;
var statearr_31819_31857 = state_31780__$1;
(statearr_31819_31857[(2)] = inst_31724);

(statearr_31819_31857[(1)] = (9));


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
});})(c__19256__auto___31827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19200__auto__,c__19256__auto___31827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_31823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31823[(0)] = state_machine__19201__auto__);

(statearr_31823[(1)] = (1));

return statearr_31823;
});
var state_machine__19201__auto____1 = (function (state_31780){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_31780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e31824){if((e31824 instanceof Object)){
var ex__19204__auto__ = e31824;
var statearr_31825_31858 = state_31780;
(statearr_31825_31858[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31859 = state_31780;
state_31780 = G__31859;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_31780){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_31780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___31827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19258__auto__ = (function (){var statearr_31826 = f__19257__auto__.call(null);
(statearr_31826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___31827);

return statearr_31826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___31827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj31861 = {};
return obj31861;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
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
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
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
var or__16145__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16145__auto__,mults){
return (function (p1__31862_SHARP_){
if(cljs.core.truth_(p1__31862_SHARP_.call(null,topic))){
return p1__31862_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31862_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31985 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31985 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31986){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31986 = meta31986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31985.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t31985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31985.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31987){
var self__ = this;
var _31987__$1 = this;
return self__.meta31986;
});})(mults,ensure_mult))
;

cljs.core.async.t31985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31987,meta31986__$1){
var self__ = this;
var _31987__$1 = this;
return (new cljs.core.async.t31985(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31986__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31985.cljs$lang$type = true;

cljs.core.async.t31985.cljs$lang$ctorStr = "cljs.core.async/t31985";

cljs.core.async.t31985.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31985");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31985 = ((function (mults,ensure_mult){
return (function __GT_t31985(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31986){
return (new cljs.core.async.t31985(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31986));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31985(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19256__auto___32107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___32107,mults,ensure_mult,p){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___32107,mults,ensure_mult,p){
return (function (state_32059){
var state_val_32060 = (state_32059[(1)]);
if((state_val_32060 === (7))){
var inst_32055 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32061_32108 = state_32059__$1;
(statearr_32061_32108[(2)] = inst_32055);

(statearr_32061_32108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (20))){
var state_32059__$1 = state_32059;
var statearr_32062_32109 = state_32059__$1;
(statearr_32062_32109[(2)] = null);

(statearr_32062_32109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (1))){
var state_32059__$1 = state_32059;
var statearr_32063_32110 = state_32059__$1;
(statearr_32063_32110[(2)] = null);

(statearr_32063_32110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (24))){
var inst_32038 = (state_32059[(7)]);
var inst_32047 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32038);
var state_32059__$1 = state_32059;
var statearr_32064_32111 = state_32059__$1;
(statearr_32064_32111[(2)] = inst_32047);

(statearr_32064_32111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (4))){
var inst_31990 = (state_32059[(8)]);
var inst_31990__$1 = (state_32059[(2)]);
var inst_31991 = (inst_31990__$1 == null);
var state_32059__$1 = (function (){var statearr_32065 = state_32059;
(statearr_32065[(8)] = inst_31990__$1);

return statearr_32065;
})();
if(cljs.core.truth_(inst_31991)){
var statearr_32066_32112 = state_32059__$1;
(statearr_32066_32112[(1)] = (5));

} else {
var statearr_32067_32113 = state_32059__$1;
(statearr_32067_32113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (15))){
var inst_32032 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32068_32114 = state_32059__$1;
(statearr_32068_32114[(2)] = inst_32032);

(statearr_32068_32114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (21))){
var inst_32052 = (state_32059[(2)]);
var state_32059__$1 = (function (){var statearr_32069 = state_32059;
(statearr_32069[(9)] = inst_32052);

return statearr_32069;
})();
var statearr_32070_32115 = state_32059__$1;
(statearr_32070_32115[(2)] = null);

(statearr_32070_32115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (13))){
var inst_32014 = (state_32059[(10)]);
var inst_32016 = cljs.core.chunked_seq_QMARK_.call(null,inst_32014);
var state_32059__$1 = state_32059;
if(inst_32016){
var statearr_32071_32116 = state_32059__$1;
(statearr_32071_32116[(1)] = (16));

} else {
var statearr_32072_32117 = state_32059__$1;
(statearr_32072_32117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (22))){
var inst_32044 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
if(cljs.core.truth_(inst_32044)){
var statearr_32073_32118 = state_32059__$1;
(statearr_32073_32118[(1)] = (23));

} else {
var statearr_32074_32119 = state_32059__$1;
(statearr_32074_32119[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (6))){
var inst_32038 = (state_32059[(7)]);
var inst_32040 = (state_32059[(11)]);
var inst_31990 = (state_32059[(8)]);
var inst_32038__$1 = topic_fn.call(null,inst_31990);
var inst_32039 = cljs.core.deref.call(null,mults);
var inst_32040__$1 = cljs.core.get.call(null,inst_32039,inst_32038__$1);
var state_32059__$1 = (function (){var statearr_32075 = state_32059;
(statearr_32075[(7)] = inst_32038__$1);

(statearr_32075[(11)] = inst_32040__$1);

return statearr_32075;
})();
if(cljs.core.truth_(inst_32040__$1)){
var statearr_32076_32120 = state_32059__$1;
(statearr_32076_32120[(1)] = (19));

} else {
var statearr_32077_32121 = state_32059__$1;
(statearr_32077_32121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (25))){
var inst_32049 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32078_32122 = state_32059__$1;
(statearr_32078_32122[(2)] = inst_32049);

(statearr_32078_32122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (17))){
var inst_32014 = (state_32059[(10)]);
var inst_32023 = cljs.core.first.call(null,inst_32014);
var inst_32024 = cljs.core.async.muxch_STAR_.call(null,inst_32023);
var inst_32025 = cljs.core.async.close_BANG_.call(null,inst_32024);
var inst_32026 = cljs.core.next.call(null,inst_32014);
var inst_32000 = inst_32026;
var inst_32001 = null;
var inst_32002 = (0);
var inst_32003 = (0);
var state_32059__$1 = (function (){var statearr_32079 = state_32059;
(statearr_32079[(12)] = inst_32000);

(statearr_32079[(13)] = inst_32003);

(statearr_32079[(14)] = inst_32001);

(statearr_32079[(15)] = inst_32002);

(statearr_32079[(16)] = inst_32025);

return statearr_32079;
})();
var statearr_32080_32123 = state_32059__$1;
(statearr_32080_32123[(2)] = null);

(statearr_32080_32123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (3))){
var inst_32057 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32059__$1,inst_32057);
} else {
if((state_val_32060 === (12))){
var inst_32034 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32081_32124 = state_32059__$1;
(statearr_32081_32124[(2)] = inst_32034);

(statearr_32081_32124[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (2))){
var state_32059__$1 = state_32059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32059__$1,(4),ch);
} else {
if((state_val_32060 === (23))){
var state_32059__$1 = state_32059;
var statearr_32082_32125 = state_32059__$1;
(statearr_32082_32125[(2)] = null);

(statearr_32082_32125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (19))){
var inst_32040 = (state_32059[(11)]);
var inst_31990 = (state_32059[(8)]);
var inst_32042 = cljs.core.async.muxch_STAR_.call(null,inst_32040);
var state_32059__$1 = state_32059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32059__$1,(22),inst_32042,inst_31990);
} else {
if((state_val_32060 === (11))){
var inst_32000 = (state_32059[(12)]);
var inst_32014 = (state_32059[(10)]);
var inst_32014__$1 = cljs.core.seq.call(null,inst_32000);
var state_32059__$1 = (function (){var statearr_32083 = state_32059;
(statearr_32083[(10)] = inst_32014__$1);

return statearr_32083;
})();
if(inst_32014__$1){
var statearr_32084_32126 = state_32059__$1;
(statearr_32084_32126[(1)] = (13));

} else {
var statearr_32085_32127 = state_32059__$1;
(statearr_32085_32127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (9))){
var inst_32036 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32086_32128 = state_32059__$1;
(statearr_32086_32128[(2)] = inst_32036);

(statearr_32086_32128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (5))){
var inst_31997 = cljs.core.deref.call(null,mults);
var inst_31998 = cljs.core.vals.call(null,inst_31997);
var inst_31999 = cljs.core.seq.call(null,inst_31998);
var inst_32000 = inst_31999;
var inst_32001 = null;
var inst_32002 = (0);
var inst_32003 = (0);
var state_32059__$1 = (function (){var statearr_32087 = state_32059;
(statearr_32087[(12)] = inst_32000);

(statearr_32087[(13)] = inst_32003);

(statearr_32087[(14)] = inst_32001);

(statearr_32087[(15)] = inst_32002);

return statearr_32087;
})();
var statearr_32088_32129 = state_32059__$1;
(statearr_32088_32129[(2)] = null);

(statearr_32088_32129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (14))){
var state_32059__$1 = state_32059;
var statearr_32092_32130 = state_32059__$1;
(statearr_32092_32130[(2)] = null);

(statearr_32092_32130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (16))){
var inst_32014 = (state_32059[(10)]);
var inst_32018 = cljs.core.chunk_first.call(null,inst_32014);
var inst_32019 = cljs.core.chunk_rest.call(null,inst_32014);
var inst_32020 = cljs.core.count.call(null,inst_32018);
var inst_32000 = inst_32019;
var inst_32001 = inst_32018;
var inst_32002 = inst_32020;
var inst_32003 = (0);
var state_32059__$1 = (function (){var statearr_32093 = state_32059;
(statearr_32093[(12)] = inst_32000);

(statearr_32093[(13)] = inst_32003);

(statearr_32093[(14)] = inst_32001);

(statearr_32093[(15)] = inst_32002);

return statearr_32093;
})();
var statearr_32094_32131 = state_32059__$1;
(statearr_32094_32131[(2)] = null);

(statearr_32094_32131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (10))){
var inst_32000 = (state_32059[(12)]);
var inst_32003 = (state_32059[(13)]);
var inst_32001 = (state_32059[(14)]);
var inst_32002 = (state_32059[(15)]);
var inst_32008 = cljs.core._nth.call(null,inst_32001,inst_32003);
var inst_32009 = cljs.core.async.muxch_STAR_.call(null,inst_32008);
var inst_32010 = cljs.core.async.close_BANG_.call(null,inst_32009);
var inst_32011 = (inst_32003 + (1));
var tmp32089 = inst_32000;
var tmp32090 = inst_32001;
var tmp32091 = inst_32002;
var inst_32000__$1 = tmp32089;
var inst_32001__$1 = tmp32090;
var inst_32002__$1 = tmp32091;
var inst_32003__$1 = inst_32011;
var state_32059__$1 = (function (){var statearr_32095 = state_32059;
(statearr_32095[(12)] = inst_32000__$1);

(statearr_32095[(13)] = inst_32003__$1);

(statearr_32095[(14)] = inst_32001__$1);

(statearr_32095[(15)] = inst_32002__$1);

(statearr_32095[(17)] = inst_32010);

return statearr_32095;
})();
var statearr_32096_32132 = state_32059__$1;
(statearr_32096_32132[(2)] = null);

(statearr_32096_32132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (18))){
var inst_32029 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32097_32133 = state_32059__$1;
(statearr_32097_32133[(2)] = inst_32029);

(statearr_32097_32133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (8))){
var inst_32003 = (state_32059[(13)]);
var inst_32002 = (state_32059[(15)]);
var inst_32005 = (inst_32003 < inst_32002);
var inst_32006 = inst_32005;
var state_32059__$1 = state_32059;
if(cljs.core.truth_(inst_32006)){
var statearr_32098_32134 = state_32059__$1;
(statearr_32098_32134[(1)] = (10));

} else {
var statearr_32099_32135 = state_32059__$1;
(statearr_32099_32135[(1)] = (11));

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
});})(c__19256__auto___32107,mults,ensure_mult,p))
;
return ((function (switch__19200__auto__,c__19256__auto___32107,mults,ensure_mult,p){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_32103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32103[(0)] = state_machine__19201__auto__);

(statearr_32103[(1)] = (1));

return statearr_32103;
});
var state_machine__19201__auto____1 = (function (state_32059){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_32059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e32104){if((e32104 instanceof Object)){
var ex__19204__auto__ = e32104;
var statearr_32105_32136 = state_32059;
(statearr_32105_32136[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32137 = state_32059;
state_32059 = G__32137;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_32059){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_32059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___32107,mults,ensure_mult,p))
})();
var state__19258__auto__ = (function (){var statearr_32106 = f__19257__auto__.call(null);
(statearr_32106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___32107);

return statearr_32106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___32107,mults,ensure_mult,p))
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
var c__19256__auto___32274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___32274,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___32274,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32244){
var state_val_32245 = (state_32244[(1)]);
if((state_val_32245 === (7))){
var state_32244__$1 = state_32244;
var statearr_32246_32275 = state_32244__$1;
(statearr_32246_32275[(2)] = null);

(statearr_32246_32275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (1))){
var state_32244__$1 = state_32244;
var statearr_32247_32276 = state_32244__$1;
(statearr_32247_32276[(2)] = null);

(statearr_32247_32276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (4))){
var inst_32208 = (state_32244[(7)]);
var inst_32210 = (inst_32208 < cnt);
var state_32244__$1 = state_32244;
if(cljs.core.truth_(inst_32210)){
var statearr_32248_32277 = state_32244__$1;
(statearr_32248_32277[(1)] = (6));

} else {
var statearr_32249_32278 = state_32244__$1;
(statearr_32249_32278[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (15))){
var inst_32240 = (state_32244[(2)]);
var state_32244__$1 = state_32244;
var statearr_32250_32279 = state_32244__$1;
(statearr_32250_32279[(2)] = inst_32240);

(statearr_32250_32279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (13))){
var inst_32233 = cljs.core.async.close_BANG_.call(null,out);
var state_32244__$1 = state_32244;
var statearr_32251_32280 = state_32244__$1;
(statearr_32251_32280[(2)] = inst_32233);

(statearr_32251_32280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (6))){
var state_32244__$1 = state_32244;
var statearr_32252_32281 = state_32244__$1;
(statearr_32252_32281[(2)] = null);

(statearr_32252_32281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (3))){
var inst_32242 = (state_32244[(2)]);
var state_32244__$1 = state_32244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32244__$1,inst_32242);
} else {
if((state_val_32245 === (12))){
var inst_32230 = (state_32244[(8)]);
var inst_32230__$1 = (state_32244[(2)]);
var inst_32231 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32230__$1);
var state_32244__$1 = (function (){var statearr_32253 = state_32244;
(statearr_32253[(8)] = inst_32230__$1);

return statearr_32253;
})();
if(cljs.core.truth_(inst_32231)){
var statearr_32254_32282 = state_32244__$1;
(statearr_32254_32282[(1)] = (13));

} else {
var statearr_32255_32283 = state_32244__$1;
(statearr_32255_32283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (2))){
var inst_32207 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32208 = (0);
var state_32244__$1 = (function (){var statearr_32256 = state_32244;
(statearr_32256[(7)] = inst_32208);

(statearr_32256[(9)] = inst_32207);

return statearr_32256;
})();
var statearr_32257_32284 = state_32244__$1;
(statearr_32257_32284[(2)] = null);

(statearr_32257_32284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (11))){
var inst_32208 = (state_32244[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32244,(10),Object,null,(9));
var inst_32217 = chs__$1.call(null,inst_32208);
var inst_32218 = done.call(null,inst_32208);
var inst_32219 = cljs.core.async.take_BANG_.call(null,inst_32217,inst_32218);
var state_32244__$1 = state_32244;
var statearr_32258_32285 = state_32244__$1;
(statearr_32258_32285[(2)] = inst_32219);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32244__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (9))){
var inst_32208 = (state_32244[(7)]);
var inst_32221 = (state_32244[(2)]);
var inst_32222 = (inst_32208 + (1));
var inst_32208__$1 = inst_32222;
var state_32244__$1 = (function (){var statearr_32259 = state_32244;
(statearr_32259[(7)] = inst_32208__$1);

(statearr_32259[(10)] = inst_32221);

return statearr_32259;
})();
var statearr_32260_32286 = state_32244__$1;
(statearr_32260_32286[(2)] = null);

(statearr_32260_32286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (5))){
var inst_32228 = (state_32244[(2)]);
var state_32244__$1 = (function (){var statearr_32261 = state_32244;
(statearr_32261[(11)] = inst_32228);

return statearr_32261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32244__$1,(12),dchan);
} else {
if((state_val_32245 === (14))){
var inst_32230 = (state_32244[(8)]);
var inst_32235 = cljs.core.apply.call(null,f,inst_32230);
var state_32244__$1 = state_32244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32244__$1,(16),out,inst_32235);
} else {
if((state_val_32245 === (16))){
var inst_32237 = (state_32244[(2)]);
var state_32244__$1 = (function (){var statearr_32262 = state_32244;
(statearr_32262[(12)] = inst_32237);

return statearr_32262;
})();
var statearr_32263_32287 = state_32244__$1;
(statearr_32263_32287[(2)] = null);

(statearr_32263_32287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (10))){
var inst_32212 = (state_32244[(2)]);
var inst_32213 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32244__$1 = (function (){var statearr_32264 = state_32244;
(statearr_32264[(13)] = inst_32212);

return statearr_32264;
})();
var statearr_32265_32288 = state_32244__$1;
(statearr_32265_32288[(2)] = inst_32213);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32244__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (8))){
var inst_32226 = (state_32244[(2)]);
var state_32244__$1 = state_32244;
var statearr_32266_32289 = state_32244__$1;
(statearr_32266_32289[(2)] = inst_32226);

(statearr_32266_32289[(1)] = (5));


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
});})(c__19256__auto___32274,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19200__auto__,c__19256__auto___32274,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_32270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32270[(0)] = state_machine__19201__auto__);

(statearr_32270[(1)] = (1));

return statearr_32270;
});
var state_machine__19201__auto____1 = (function (state_32244){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_32244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e32271){if((e32271 instanceof Object)){
var ex__19204__auto__ = e32271;
var statearr_32272_32290 = state_32244;
(statearr_32272_32290[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32291 = state_32244;
state_32244 = G__32291;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_32244){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_32244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___32274,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19258__auto__ = (function (){var statearr_32273 = f__19257__auto__.call(null);
(statearr_32273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___32274);

return statearr_32273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___32274,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__19256__auto___32399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___32399,out){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___32399,out){
return (function (state_32375){
var state_val_32376 = (state_32375[(1)]);
if((state_val_32376 === (7))){
var inst_32355 = (state_32375[(7)]);
var inst_32354 = (state_32375[(8)]);
var inst_32354__$1 = (state_32375[(2)]);
var inst_32355__$1 = cljs.core.nth.call(null,inst_32354__$1,(0),null);
var inst_32356 = cljs.core.nth.call(null,inst_32354__$1,(1),null);
var inst_32357 = (inst_32355__$1 == null);
var state_32375__$1 = (function (){var statearr_32377 = state_32375;
(statearr_32377[(7)] = inst_32355__$1);

(statearr_32377[(8)] = inst_32354__$1);

(statearr_32377[(9)] = inst_32356);

return statearr_32377;
})();
if(cljs.core.truth_(inst_32357)){
var statearr_32378_32400 = state_32375__$1;
(statearr_32378_32400[(1)] = (8));

} else {
var statearr_32379_32401 = state_32375__$1;
(statearr_32379_32401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (1))){
var inst_32346 = cljs.core.vec.call(null,chs);
var inst_32347 = inst_32346;
var state_32375__$1 = (function (){var statearr_32380 = state_32375;
(statearr_32380[(10)] = inst_32347);

return statearr_32380;
})();
var statearr_32381_32402 = state_32375__$1;
(statearr_32381_32402[(2)] = null);

(statearr_32381_32402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (4))){
var inst_32347 = (state_32375[(10)]);
var state_32375__$1 = state_32375;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32375__$1,(7),inst_32347);
} else {
if((state_val_32376 === (6))){
var inst_32371 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32382_32403 = state_32375__$1;
(statearr_32382_32403[(2)] = inst_32371);

(statearr_32382_32403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (3))){
var inst_32373 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32375__$1,inst_32373);
} else {
if((state_val_32376 === (2))){
var inst_32347 = (state_32375[(10)]);
var inst_32349 = cljs.core.count.call(null,inst_32347);
var inst_32350 = (inst_32349 > (0));
var state_32375__$1 = state_32375;
if(cljs.core.truth_(inst_32350)){
var statearr_32384_32404 = state_32375__$1;
(statearr_32384_32404[(1)] = (4));

} else {
var statearr_32385_32405 = state_32375__$1;
(statearr_32385_32405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (11))){
var inst_32347 = (state_32375[(10)]);
var inst_32364 = (state_32375[(2)]);
var tmp32383 = inst_32347;
var inst_32347__$1 = tmp32383;
var state_32375__$1 = (function (){var statearr_32386 = state_32375;
(statearr_32386[(10)] = inst_32347__$1);

(statearr_32386[(11)] = inst_32364);

return statearr_32386;
})();
var statearr_32387_32406 = state_32375__$1;
(statearr_32387_32406[(2)] = null);

(statearr_32387_32406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (9))){
var inst_32355 = (state_32375[(7)]);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32375__$1,(11),out,inst_32355);
} else {
if((state_val_32376 === (5))){
var inst_32369 = cljs.core.async.close_BANG_.call(null,out);
var state_32375__$1 = state_32375;
var statearr_32388_32407 = state_32375__$1;
(statearr_32388_32407[(2)] = inst_32369);

(statearr_32388_32407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (10))){
var inst_32367 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32389_32408 = state_32375__$1;
(statearr_32389_32408[(2)] = inst_32367);

(statearr_32389_32408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (8))){
var inst_32355 = (state_32375[(7)]);
var inst_32354 = (state_32375[(8)]);
var inst_32347 = (state_32375[(10)]);
var inst_32356 = (state_32375[(9)]);
var inst_32359 = (function (){var c = inst_32356;
var v = inst_32355;
var vec__32352 = inst_32354;
var cs = inst_32347;
return ((function (c,v,vec__32352,cs,inst_32355,inst_32354,inst_32347,inst_32356,state_val_32376,c__19256__auto___32399,out){
return (function (p1__32292_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32292_SHARP_);
});
;})(c,v,vec__32352,cs,inst_32355,inst_32354,inst_32347,inst_32356,state_val_32376,c__19256__auto___32399,out))
})();
var inst_32360 = cljs.core.filterv.call(null,inst_32359,inst_32347);
var inst_32347__$1 = inst_32360;
var state_32375__$1 = (function (){var statearr_32390 = state_32375;
(statearr_32390[(10)] = inst_32347__$1);

return statearr_32390;
})();
var statearr_32391_32409 = state_32375__$1;
(statearr_32391_32409[(2)] = null);

(statearr_32391_32409[(1)] = (2));


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
});})(c__19256__auto___32399,out))
;
return ((function (switch__19200__auto__,c__19256__auto___32399,out){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_32395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32395[(0)] = state_machine__19201__auto__);

(statearr_32395[(1)] = (1));

return statearr_32395;
});
var state_machine__19201__auto____1 = (function (state_32375){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_32375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e32396){if((e32396 instanceof Object)){
var ex__19204__auto__ = e32396;
var statearr_32397_32410 = state_32375;
(statearr_32397_32410[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32411 = state_32375;
state_32375 = G__32411;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_32375){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_32375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___32399,out))
})();
var state__19258__auto__ = (function (){var statearr_32398 = f__19257__auto__.call(null);
(statearr_32398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___32399);

return statearr_32398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___32399,out))
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
var c__19256__auto___32504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___32504,out){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___32504,out){
return (function (state_32481){
var state_val_32482 = (state_32481[(1)]);
if((state_val_32482 === (7))){
var inst_32463 = (state_32481[(7)]);
var inst_32463__$1 = (state_32481[(2)]);
var inst_32464 = (inst_32463__$1 == null);
var inst_32465 = cljs.core.not.call(null,inst_32464);
var state_32481__$1 = (function (){var statearr_32483 = state_32481;
(statearr_32483[(7)] = inst_32463__$1);

return statearr_32483;
})();
if(inst_32465){
var statearr_32484_32505 = state_32481__$1;
(statearr_32484_32505[(1)] = (8));

} else {
var statearr_32485_32506 = state_32481__$1;
(statearr_32485_32506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (1))){
var inst_32458 = (0);
var state_32481__$1 = (function (){var statearr_32486 = state_32481;
(statearr_32486[(8)] = inst_32458);

return statearr_32486;
})();
var statearr_32487_32507 = state_32481__$1;
(statearr_32487_32507[(2)] = null);

(statearr_32487_32507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (4))){
var state_32481__$1 = state_32481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32481__$1,(7),ch);
} else {
if((state_val_32482 === (6))){
var inst_32476 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32488_32508 = state_32481__$1;
(statearr_32488_32508[(2)] = inst_32476);

(statearr_32488_32508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (3))){
var inst_32478 = (state_32481[(2)]);
var inst_32479 = cljs.core.async.close_BANG_.call(null,out);
var state_32481__$1 = (function (){var statearr_32489 = state_32481;
(statearr_32489[(9)] = inst_32478);

return statearr_32489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32481__$1,inst_32479);
} else {
if((state_val_32482 === (2))){
var inst_32458 = (state_32481[(8)]);
var inst_32460 = (inst_32458 < n);
var state_32481__$1 = state_32481;
if(cljs.core.truth_(inst_32460)){
var statearr_32490_32509 = state_32481__$1;
(statearr_32490_32509[(1)] = (4));

} else {
var statearr_32491_32510 = state_32481__$1;
(statearr_32491_32510[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (11))){
var inst_32458 = (state_32481[(8)]);
var inst_32468 = (state_32481[(2)]);
var inst_32469 = (inst_32458 + (1));
var inst_32458__$1 = inst_32469;
var state_32481__$1 = (function (){var statearr_32492 = state_32481;
(statearr_32492[(8)] = inst_32458__$1);

(statearr_32492[(10)] = inst_32468);

return statearr_32492;
})();
var statearr_32493_32511 = state_32481__$1;
(statearr_32493_32511[(2)] = null);

(statearr_32493_32511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (9))){
var state_32481__$1 = state_32481;
var statearr_32494_32512 = state_32481__$1;
(statearr_32494_32512[(2)] = null);

(statearr_32494_32512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (5))){
var state_32481__$1 = state_32481;
var statearr_32495_32513 = state_32481__$1;
(statearr_32495_32513[(2)] = null);

(statearr_32495_32513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (10))){
var inst_32473 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32496_32514 = state_32481__$1;
(statearr_32496_32514[(2)] = inst_32473);

(statearr_32496_32514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (8))){
var inst_32463 = (state_32481[(7)]);
var state_32481__$1 = state_32481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32481__$1,(11),out,inst_32463);
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
});})(c__19256__auto___32504,out))
;
return ((function (switch__19200__auto__,c__19256__auto___32504,out){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_32500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32500[(0)] = state_machine__19201__auto__);

(statearr_32500[(1)] = (1));

return statearr_32500;
});
var state_machine__19201__auto____1 = (function (state_32481){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_32481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e32501){if((e32501 instanceof Object)){
var ex__19204__auto__ = e32501;
var statearr_32502_32515 = state_32481;
(statearr_32502_32515[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32516 = state_32481;
state_32481 = G__32516;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_32481){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_32481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___32504,out))
})();
var state__19258__auto__ = (function (){var statearr_32503 = f__19257__auto__.call(null);
(statearr_32503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___32504);

return statearr_32503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___32504,out))
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
if(typeof cljs.core.async.t32524 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32524 = (function (ch,f,map_LT_,meta32525){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32525 = meta32525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32524.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32524.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32527 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32527 = (function (fn1,_,meta32525,map_LT_,f,ch,meta32528){
this.fn1 = fn1;
this._ = _;
this.meta32525 = meta32525;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32528 = meta32528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32527.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32517_SHARP_){
return f1.call(null,(((p1__32517_SHARP_ == null))?null:self__.f.call(null,p1__32517_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32529){
var self__ = this;
var _32529__$1 = this;
return self__.meta32528;
});})(___$1))
;

cljs.core.async.t32527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32529,meta32528__$1){
var self__ = this;
var _32529__$1 = this;
return (new cljs.core.async.t32527(self__.fn1,self__._,self__.meta32525,self__.map_LT_,self__.f,self__.ch,meta32528__$1));
});})(___$1))
;

cljs.core.async.t32527.cljs$lang$type = true;

cljs.core.async.t32527.cljs$lang$ctorStr = "cljs.core.async/t32527";

cljs.core.async.t32527.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32527");
});})(___$1))
;

cljs.core.async.__GT_t32527 = ((function (___$1){
return (function __GT_t32527(fn1__$1,___$2,meta32525__$1,map_LT___$1,f__$1,ch__$1,meta32528){
return (new cljs.core.async.t32527(fn1__$1,___$2,meta32525__$1,map_LT___$1,f__$1,ch__$1,meta32528));
});})(___$1))
;

}

return (new cljs.core.async.t32527(fn1,___$1,self__.meta32525,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16133__auto__ = ret;
if(cljs.core.truth_(and__16133__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16133__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t32524.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32524.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32526){
var self__ = this;
var _32526__$1 = this;
return self__.meta32525;
});

cljs.core.async.t32524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32526,meta32525__$1){
var self__ = this;
var _32526__$1 = this;
return (new cljs.core.async.t32524(self__.ch,self__.f,self__.map_LT_,meta32525__$1));
});

cljs.core.async.t32524.cljs$lang$type = true;

cljs.core.async.t32524.cljs$lang$ctorStr = "cljs.core.async/t32524";

cljs.core.async.t32524.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32524");
});

cljs.core.async.__GT_t32524 = (function __GT_t32524(ch__$1,f__$1,map_LT___$1,meta32525){
return (new cljs.core.async.t32524(ch__$1,f__$1,map_LT___$1,meta32525));
});

}

return (new cljs.core.async.t32524(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t32533 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32533 = (function (ch,f,map_GT_,meta32534){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32534 = meta32534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32533.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32533.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32533.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32535){
var self__ = this;
var _32535__$1 = this;
return self__.meta32534;
});

cljs.core.async.t32533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32535,meta32534__$1){
var self__ = this;
var _32535__$1 = this;
return (new cljs.core.async.t32533(self__.ch,self__.f,self__.map_GT_,meta32534__$1));
});

cljs.core.async.t32533.cljs$lang$type = true;

cljs.core.async.t32533.cljs$lang$ctorStr = "cljs.core.async/t32533";

cljs.core.async.t32533.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32533");
});

cljs.core.async.__GT_t32533 = (function __GT_t32533(ch__$1,f__$1,map_GT___$1,meta32534){
return (new cljs.core.async.t32533(ch__$1,f__$1,map_GT___$1,meta32534));
});

}

return (new cljs.core.async.t32533(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t32539 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32539 = (function (ch,p,filter_GT_,meta32540){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32540 = meta32540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32539.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32539.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32539.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32539.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32541){
var self__ = this;
var _32541__$1 = this;
return self__.meta32540;
});

cljs.core.async.t32539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32541,meta32540__$1){
var self__ = this;
var _32541__$1 = this;
return (new cljs.core.async.t32539(self__.ch,self__.p,self__.filter_GT_,meta32540__$1));
});

cljs.core.async.t32539.cljs$lang$type = true;

cljs.core.async.t32539.cljs$lang$ctorStr = "cljs.core.async/t32539";

cljs.core.async.t32539.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32539");
});

cljs.core.async.__GT_t32539 = (function __GT_t32539(ch__$1,p__$1,filter_GT___$1,meta32540){
return (new cljs.core.async.t32539(ch__$1,p__$1,filter_GT___$1,meta32540));
});

}

return (new cljs.core.async.t32539(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19256__auto___32624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___32624,out){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___32624,out){
return (function (state_32603){
var state_val_32604 = (state_32603[(1)]);
if((state_val_32604 === (7))){
var inst_32599 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32605_32625 = state_32603__$1;
(statearr_32605_32625[(2)] = inst_32599);

(statearr_32605_32625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (1))){
var state_32603__$1 = state_32603;
var statearr_32606_32626 = state_32603__$1;
(statearr_32606_32626[(2)] = null);

(statearr_32606_32626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (4))){
var inst_32585 = (state_32603[(7)]);
var inst_32585__$1 = (state_32603[(2)]);
var inst_32586 = (inst_32585__$1 == null);
var state_32603__$1 = (function (){var statearr_32607 = state_32603;
(statearr_32607[(7)] = inst_32585__$1);

return statearr_32607;
})();
if(cljs.core.truth_(inst_32586)){
var statearr_32608_32627 = state_32603__$1;
(statearr_32608_32627[(1)] = (5));

} else {
var statearr_32609_32628 = state_32603__$1;
(statearr_32609_32628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (6))){
var inst_32585 = (state_32603[(7)]);
var inst_32590 = p.call(null,inst_32585);
var state_32603__$1 = state_32603;
if(cljs.core.truth_(inst_32590)){
var statearr_32610_32629 = state_32603__$1;
(statearr_32610_32629[(1)] = (8));

} else {
var statearr_32611_32630 = state_32603__$1;
(statearr_32611_32630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (3))){
var inst_32601 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32603__$1,inst_32601);
} else {
if((state_val_32604 === (2))){
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32603__$1,(4),ch);
} else {
if((state_val_32604 === (11))){
var inst_32593 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32612_32631 = state_32603__$1;
(statearr_32612_32631[(2)] = inst_32593);

(statearr_32612_32631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (9))){
var state_32603__$1 = state_32603;
var statearr_32613_32632 = state_32603__$1;
(statearr_32613_32632[(2)] = null);

(statearr_32613_32632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (5))){
var inst_32588 = cljs.core.async.close_BANG_.call(null,out);
var state_32603__$1 = state_32603;
var statearr_32614_32633 = state_32603__$1;
(statearr_32614_32633[(2)] = inst_32588);

(statearr_32614_32633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (10))){
var inst_32596 = (state_32603[(2)]);
var state_32603__$1 = (function (){var statearr_32615 = state_32603;
(statearr_32615[(8)] = inst_32596);

return statearr_32615;
})();
var statearr_32616_32634 = state_32603__$1;
(statearr_32616_32634[(2)] = null);

(statearr_32616_32634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (8))){
var inst_32585 = (state_32603[(7)]);
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32603__$1,(11),out,inst_32585);
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
});})(c__19256__auto___32624,out))
;
return ((function (switch__19200__auto__,c__19256__auto___32624,out){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_32620 = [null,null,null,null,null,null,null,null,null];
(statearr_32620[(0)] = state_machine__19201__auto__);

(statearr_32620[(1)] = (1));

return statearr_32620;
});
var state_machine__19201__auto____1 = (function (state_32603){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_32603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e32621){if((e32621 instanceof Object)){
var ex__19204__auto__ = e32621;
var statearr_32622_32635 = state_32603;
(statearr_32622_32635[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32636 = state_32603;
state_32603 = G__32636;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_32603){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_32603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___32624,out))
})();
var state__19258__auto__ = (function (){var statearr_32623 = f__19257__auto__.call(null);
(statearr_32623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___32624);

return statearr_32623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___32624,out))
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
var c__19256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto__){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto__){
return (function (state_32802){
var state_val_32803 = (state_32802[(1)]);
if((state_val_32803 === (7))){
var inst_32798 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32804_32845 = state_32802__$1;
(statearr_32804_32845[(2)] = inst_32798);

(statearr_32804_32845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (20))){
var inst_32768 = (state_32802[(7)]);
var inst_32779 = (state_32802[(2)]);
var inst_32780 = cljs.core.next.call(null,inst_32768);
var inst_32754 = inst_32780;
var inst_32755 = null;
var inst_32756 = (0);
var inst_32757 = (0);
var state_32802__$1 = (function (){var statearr_32805 = state_32802;
(statearr_32805[(8)] = inst_32755);

(statearr_32805[(9)] = inst_32754);

(statearr_32805[(10)] = inst_32756);

(statearr_32805[(11)] = inst_32757);

(statearr_32805[(12)] = inst_32779);

return statearr_32805;
})();
var statearr_32806_32846 = state_32802__$1;
(statearr_32806_32846[(2)] = null);

(statearr_32806_32846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (1))){
var state_32802__$1 = state_32802;
var statearr_32807_32847 = state_32802__$1;
(statearr_32807_32847[(2)] = null);

(statearr_32807_32847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (4))){
var inst_32743 = (state_32802[(13)]);
var inst_32743__$1 = (state_32802[(2)]);
var inst_32744 = (inst_32743__$1 == null);
var state_32802__$1 = (function (){var statearr_32808 = state_32802;
(statearr_32808[(13)] = inst_32743__$1);

return statearr_32808;
})();
if(cljs.core.truth_(inst_32744)){
var statearr_32809_32848 = state_32802__$1;
(statearr_32809_32848[(1)] = (5));

} else {
var statearr_32810_32849 = state_32802__$1;
(statearr_32810_32849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (15))){
var state_32802__$1 = state_32802;
var statearr_32814_32850 = state_32802__$1;
(statearr_32814_32850[(2)] = null);

(statearr_32814_32850[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (21))){
var state_32802__$1 = state_32802;
var statearr_32815_32851 = state_32802__$1;
(statearr_32815_32851[(2)] = null);

(statearr_32815_32851[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (13))){
var inst_32755 = (state_32802[(8)]);
var inst_32754 = (state_32802[(9)]);
var inst_32756 = (state_32802[(10)]);
var inst_32757 = (state_32802[(11)]);
var inst_32764 = (state_32802[(2)]);
var inst_32765 = (inst_32757 + (1));
var tmp32811 = inst_32755;
var tmp32812 = inst_32754;
var tmp32813 = inst_32756;
var inst_32754__$1 = tmp32812;
var inst_32755__$1 = tmp32811;
var inst_32756__$1 = tmp32813;
var inst_32757__$1 = inst_32765;
var state_32802__$1 = (function (){var statearr_32816 = state_32802;
(statearr_32816[(8)] = inst_32755__$1);

(statearr_32816[(9)] = inst_32754__$1);

(statearr_32816[(10)] = inst_32756__$1);

(statearr_32816[(11)] = inst_32757__$1);

(statearr_32816[(14)] = inst_32764);

return statearr_32816;
})();
var statearr_32817_32852 = state_32802__$1;
(statearr_32817_32852[(2)] = null);

(statearr_32817_32852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (22))){
var state_32802__$1 = state_32802;
var statearr_32818_32853 = state_32802__$1;
(statearr_32818_32853[(2)] = null);

(statearr_32818_32853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (6))){
var inst_32743 = (state_32802[(13)]);
var inst_32752 = f.call(null,inst_32743);
var inst_32753 = cljs.core.seq.call(null,inst_32752);
var inst_32754 = inst_32753;
var inst_32755 = null;
var inst_32756 = (0);
var inst_32757 = (0);
var state_32802__$1 = (function (){var statearr_32819 = state_32802;
(statearr_32819[(8)] = inst_32755);

(statearr_32819[(9)] = inst_32754);

(statearr_32819[(10)] = inst_32756);

(statearr_32819[(11)] = inst_32757);

return statearr_32819;
})();
var statearr_32820_32854 = state_32802__$1;
(statearr_32820_32854[(2)] = null);

(statearr_32820_32854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (17))){
var inst_32768 = (state_32802[(7)]);
var inst_32772 = cljs.core.chunk_first.call(null,inst_32768);
var inst_32773 = cljs.core.chunk_rest.call(null,inst_32768);
var inst_32774 = cljs.core.count.call(null,inst_32772);
var inst_32754 = inst_32773;
var inst_32755 = inst_32772;
var inst_32756 = inst_32774;
var inst_32757 = (0);
var state_32802__$1 = (function (){var statearr_32821 = state_32802;
(statearr_32821[(8)] = inst_32755);

(statearr_32821[(9)] = inst_32754);

(statearr_32821[(10)] = inst_32756);

(statearr_32821[(11)] = inst_32757);

return statearr_32821;
})();
var statearr_32822_32855 = state_32802__$1;
(statearr_32822_32855[(2)] = null);

(statearr_32822_32855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (3))){
var inst_32800 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32802__$1,inst_32800);
} else {
if((state_val_32803 === (12))){
var inst_32788 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32823_32856 = state_32802__$1;
(statearr_32823_32856[(2)] = inst_32788);

(statearr_32823_32856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (2))){
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32802__$1,(4),in$);
} else {
if((state_val_32803 === (23))){
var inst_32796 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32824_32857 = state_32802__$1;
(statearr_32824_32857[(2)] = inst_32796);

(statearr_32824_32857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (19))){
var inst_32783 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32825_32858 = state_32802__$1;
(statearr_32825_32858[(2)] = inst_32783);

(statearr_32825_32858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (11))){
var inst_32754 = (state_32802[(9)]);
var inst_32768 = (state_32802[(7)]);
var inst_32768__$1 = cljs.core.seq.call(null,inst_32754);
var state_32802__$1 = (function (){var statearr_32826 = state_32802;
(statearr_32826[(7)] = inst_32768__$1);

return statearr_32826;
})();
if(inst_32768__$1){
var statearr_32827_32859 = state_32802__$1;
(statearr_32827_32859[(1)] = (14));

} else {
var statearr_32828_32860 = state_32802__$1;
(statearr_32828_32860[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (9))){
var inst_32790 = (state_32802[(2)]);
var inst_32791 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32802__$1 = (function (){var statearr_32829 = state_32802;
(statearr_32829[(15)] = inst_32790);

return statearr_32829;
})();
if(cljs.core.truth_(inst_32791)){
var statearr_32830_32861 = state_32802__$1;
(statearr_32830_32861[(1)] = (21));

} else {
var statearr_32831_32862 = state_32802__$1;
(statearr_32831_32862[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (5))){
var inst_32746 = cljs.core.async.close_BANG_.call(null,out);
var state_32802__$1 = state_32802;
var statearr_32832_32863 = state_32802__$1;
(statearr_32832_32863[(2)] = inst_32746);

(statearr_32832_32863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (14))){
var inst_32768 = (state_32802[(7)]);
var inst_32770 = cljs.core.chunked_seq_QMARK_.call(null,inst_32768);
var state_32802__$1 = state_32802;
if(inst_32770){
var statearr_32833_32864 = state_32802__$1;
(statearr_32833_32864[(1)] = (17));

} else {
var statearr_32834_32865 = state_32802__$1;
(statearr_32834_32865[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (16))){
var inst_32786 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32835_32866 = state_32802__$1;
(statearr_32835_32866[(2)] = inst_32786);

(statearr_32835_32866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (10))){
var inst_32755 = (state_32802[(8)]);
var inst_32757 = (state_32802[(11)]);
var inst_32762 = cljs.core._nth.call(null,inst_32755,inst_32757);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32802__$1,(13),out,inst_32762);
} else {
if((state_val_32803 === (18))){
var inst_32768 = (state_32802[(7)]);
var inst_32777 = cljs.core.first.call(null,inst_32768);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32802__$1,(20),out,inst_32777);
} else {
if((state_val_32803 === (8))){
var inst_32756 = (state_32802[(10)]);
var inst_32757 = (state_32802[(11)]);
var inst_32759 = (inst_32757 < inst_32756);
var inst_32760 = inst_32759;
var state_32802__$1 = state_32802;
if(cljs.core.truth_(inst_32760)){
var statearr_32836_32867 = state_32802__$1;
(statearr_32836_32867[(1)] = (10));

} else {
var statearr_32837_32868 = state_32802__$1;
(statearr_32837_32868[(1)] = (11));

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
});})(c__19256__auto__))
;
return ((function (switch__19200__auto__,c__19256__auto__){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_32841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32841[(0)] = state_machine__19201__auto__);

(statearr_32841[(1)] = (1));

return statearr_32841;
});
var state_machine__19201__auto____1 = (function (state_32802){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_32802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e32842){if((e32842 instanceof Object)){
var ex__19204__auto__ = e32842;
var statearr_32843_32869 = state_32802;
(statearr_32843_32869[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32870 = state_32802;
state_32802 = G__32870;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_32802){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_32802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto__))
})();
var state__19258__auto__ = (function (){var statearr_32844 = f__19257__auto__.call(null);
(statearr_32844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto__);

return statearr_32844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto__))
);

return c__19256__auto__;
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
var c__19256__auto___32967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___32967,out){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___32967,out){
return (function (state_32942){
var state_val_32943 = (state_32942[(1)]);
if((state_val_32943 === (7))){
var inst_32937 = (state_32942[(2)]);
var state_32942__$1 = state_32942;
var statearr_32944_32968 = state_32942__$1;
(statearr_32944_32968[(2)] = inst_32937);

(statearr_32944_32968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (1))){
var inst_32919 = null;
var state_32942__$1 = (function (){var statearr_32945 = state_32942;
(statearr_32945[(7)] = inst_32919);

return statearr_32945;
})();
var statearr_32946_32969 = state_32942__$1;
(statearr_32946_32969[(2)] = null);

(statearr_32946_32969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (4))){
var inst_32922 = (state_32942[(8)]);
var inst_32922__$1 = (state_32942[(2)]);
var inst_32923 = (inst_32922__$1 == null);
var inst_32924 = cljs.core.not.call(null,inst_32923);
var state_32942__$1 = (function (){var statearr_32947 = state_32942;
(statearr_32947[(8)] = inst_32922__$1);

return statearr_32947;
})();
if(inst_32924){
var statearr_32948_32970 = state_32942__$1;
(statearr_32948_32970[(1)] = (5));

} else {
var statearr_32949_32971 = state_32942__$1;
(statearr_32949_32971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (6))){
var state_32942__$1 = state_32942;
var statearr_32950_32972 = state_32942__$1;
(statearr_32950_32972[(2)] = null);

(statearr_32950_32972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (3))){
var inst_32939 = (state_32942[(2)]);
var inst_32940 = cljs.core.async.close_BANG_.call(null,out);
var state_32942__$1 = (function (){var statearr_32951 = state_32942;
(statearr_32951[(9)] = inst_32939);

return statearr_32951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32942__$1,inst_32940);
} else {
if((state_val_32943 === (2))){
var state_32942__$1 = state_32942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32942__$1,(4),ch);
} else {
if((state_val_32943 === (11))){
var inst_32922 = (state_32942[(8)]);
var inst_32931 = (state_32942[(2)]);
var inst_32919 = inst_32922;
var state_32942__$1 = (function (){var statearr_32952 = state_32942;
(statearr_32952[(7)] = inst_32919);

(statearr_32952[(10)] = inst_32931);

return statearr_32952;
})();
var statearr_32953_32973 = state_32942__$1;
(statearr_32953_32973[(2)] = null);

(statearr_32953_32973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (9))){
var inst_32922 = (state_32942[(8)]);
var state_32942__$1 = state_32942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32942__$1,(11),out,inst_32922);
} else {
if((state_val_32943 === (5))){
var inst_32922 = (state_32942[(8)]);
var inst_32919 = (state_32942[(7)]);
var inst_32926 = cljs.core._EQ_.call(null,inst_32922,inst_32919);
var state_32942__$1 = state_32942;
if(inst_32926){
var statearr_32955_32974 = state_32942__$1;
(statearr_32955_32974[(1)] = (8));

} else {
var statearr_32956_32975 = state_32942__$1;
(statearr_32956_32975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (10))){
var inst_32934 = (state_32942[(2)]);
var state_32942__$1 = state_32942;
var statearr_32957_32976 = state_32942__$1;
(statearr_32957_32976[(2)] = inst_32934);

(statearr_32957_32976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (8))){
var inst_32919 = (state_32942[(7)]);
var tmp32954 = inst_32919;
var inst_32919__$1 = tmp32954;
var state_32942__$1 = (function (){var statearr_32958 = state_32942;
(statearr_32958[(7)] = inst_32919__$1);

return statearr_32958;
})();
var statearr_32959_32977 = state_32942__$1;
(statearr_32959_32977[(2)] = null);

(statearr_32959_32977[(1)] = (2));


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
});})(c__19256__auto___32967,out))
;
return ((function (switch__19200__auto__,c__19256__auto___32967,out){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_32963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32963[(0)] = state_machine__19201__auto__);

(statearr_32963[(1)] = (1));

return statearr_32963;
});
var state_machine__19201__auto____1 = (function (state_32942){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_32942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e32964){if((e32964 instanceof Object)){
var ex__19204__auto__ = e32964;
var statearr_32965_32978 = state_32942;
(statearr_32965_32978[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32979 = state_32942;
state_32942 = G__32979;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_32942){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_32942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___32967,out))
})();
var state__19258__auto__ = (function (){var statearr_32966 = f__19257__auto__.call(null);
(statearr_32966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___32967);

return statearr_32966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___32967,out))
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
var c__19256__auto___33114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___33114,out){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___33114,out){
return (function (state_33084){
var state_val_33085 = (state_33084[(1)]);
if((state_val_33085 === (7))){
var inst_33080 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
var statearr_33086_33115 = state_33084__$1;
(statearr_33086_33115[(2)] = inst_33080);

(statearr_33086_33115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (1))){
var inst_33047 = (new Array(n));
var inst_33048 = inst_33047;
var inst_33049 = (0);
var state_33084__$1 = (function (){var statearr_33087 = state_33084;
(statearr_33087[(7)] = inst_33048);

(statearr_33087[(8)] = inst_33049);

return statearr_33087;
})();
var statearr_33088_33116 = state_33084__$1;
(statearr_33088_33116[(2)] = null);

(statearr_33088_33116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (4))){
var inst_33052 = (state_33084[(9)]);
var inst_33052__$1 = (state_33084[(2)]);
var inst_33053 = (inst_33052__$1 == null);
var inst_33054 = cljs.core.not.call(null,inst_33053);
var state_33084__$1 = (function (){var statearr_33089 = state_33084;
(statearr_33089[(9)] = inst_33052__$1);

return statearr_33089;
})();
if(inst_33054){
var statearr_33090_33117 = state_33084__$1;
(statearr_33090_33117[(1)] = (5));

} else {
var statearr_33091_33118 = state_33084__$1;
(statearr_33091_33118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (15))){
var inst_33074 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
var statearr_33092_33119 = state_33084__$1;
(statearr_33092_33119[(2)] = inst_33074);

(statearr_33092_33119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (13))){
var state_33084__$1 = state_33084;
var statearr_33093_33120 = state_33084__$1;
(statearr_33093_33120[(2)] = null);

(statearr_33093_33120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (6))){
var inst_33049 = (state_33084[(8)]);
var inst_33070 = (inst_33049 > (0));
var state_33084__$1 = state_33084;
if(cljs.core.truth_(inst_33070)){
var statearr_33094_33121 = state_33084__$1;
(statearr_33094_33121[(1)] = (12));

} else {
var statearr_33095_33122 = state_33084__$1;
(statearr_33095_33122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (3))){
var inst_33082 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33084__$1,inst_33082);
} else {
if((state_val_33085 === (12))){
var inst_33048 = (state_33084[(7)]);
var inst_33072 = cljs.core.vec.call(null,inst_33048);
var state_33084__$1 = state_33084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33084__$1,(15),out,inst_33072);
} else {
if((state_val_33085 === (2))){
var state_33084__$1 = state_33084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33084__$1,(4),ch);
} else {
if((state_val_33085 === (11))){
var inst_33064 = (state_33084[(2)]);
var inst_33065 = (new Array(n));
var inst_33048 = inst_33065;
var inst_33049 = (0);
var state_33084__$1 = (function (){var statearr_33096 = state_33084;
(statearr_33096[(7)] = inst_33048);

(statearr_33096[(8)] = inst_33049);

(statearr_33096[(10)] = inst_33064);

return statearr_33096;
})();
var statearr_33097_33123 = state_33084__$1;
(statearr_33097_33123[(2)] = null);

(statearr_33097_33123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (9))){
var inst_33048 = (state_33084[(7)]);
var inst_33062 = cljs.core.vec.call(null,inst_33048);
var state_33084__$1 = state_33084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33084__$1,(11),out,inst_33062);
} else {
if((state_val_33085 === (5))){
var inst_33048 = (state_33084[(7)]);
var inst_33049 = (state_33084[(8)]);
var inst_33057 = (state_33084[(11)]);
var inst_33052 = (state_33084[(9)]);
var inst_33056 = (inst_33048[inst_33049] = inst_33052);
var inst_33057__$1 = (inst_33049 + (1));
var inst_33058 = (inst_33057__$1 < n);
var state_33084__$1 = (function (){var statearr_33098 = state_33084;
(statearr_33098[(12)] = inst_33056);

(statearr_33098[(11)] = inst_33057__$1);

return statearr_33098;
})();
if(cljs.core.truth_(inst_33058)){
var statearr_33099_33124 = state_33084__$1;
(statearr_33099_33124[(1)] = (8));

} else {
var statearr_33100_33125 = state_33084__$1;
(statearr_33100_33125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (14))){
var inst_33077 = (state_33084[(2)]);
var inst_33078 = cljs.core.async.close_BANG_.call(null,out);
var state_33084__$1 = (function (){var statearr_33102 = state_33084;
(statearr_33102[(13)] = inst_33077);

return statearr_33102;
})();
var statearr_33103_33126 = state_33084__$1;
(statearr_33103_33126[(2)] = inst_33078);

(statearr_33103_33126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (10))){
var inst_33068 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
var statearr_33104_33127 = state_33084__$1;
(statearr_33104_33127[(2)] = inst_33068);

(statearr_33104_33127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (8))){
var inst_33048 = (state_33084[(7)]);
var inst_33057 = (state_33084[(11)]);
var tmp33101 = inst_33048;
var inst_33048__$1 = tmp33101;
var inst_33049 = inst_33057;
var state_33084__$1 = (function (){var statearr_33105 = state_33084;
(statearr_33105[(7)] = inst_33048__$1);

(statearr_33105[(8)] = inst_33049);

return statearr_33105;
})();
var statearr_33106_33128 = state_33084__$1;
(statearr_33106_33128[(2)] = null);

(statearr_33106_33128[(1)] = (2));


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
});})(c__19256__auto___33114,out))
;
return ((function (switch__19200__auto__,c__19256__auto___33114,out){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_33110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33110[(0)] = state_machine__19201__auto__);

(statearr_33110[(1)] = (1));

return statearr_33110;
});
var state_machine__19201__auto____1 = (function (state_33084){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_33084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e33111){if((e33111 instanceof Object)){
var ex__19204__auto__ = e33111;
var statearr_33112_33129 = state_33084;
(statearr_33112_33129[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33130 = state_33084;
state_33084 = G__33130;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_33084){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_33084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___33114,out))
})();
var state__19258__auto__ = (function (){var statearr_33113 = f__19257__auto__.call(null);
(statearr_33113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___33114);

return statearr_33113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___33114,out))
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
var c__19256__auto___33273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___33273,out){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___33273,out){
return (function (state_33243){
var state_val_33244 = (state_33243[(1)]);
if((state_val_33244 === (7))){
var inst_33239 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
var statearr_33245_33274 = state_33243__$1;
(statearr_33245_33274[(2)] = inst_33239);

(statearr_33245_33274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (1))){
var inst_33202 = [];
var inst_33203 = inst_33202;
var inst_33204 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33243__$1 = (function (){var statearr_33246 = state_33243;
(statearr_33246[(7)] = inst_33203);

(statearr_33246[(8)] = inst_33204);

return statearr_33246;
})();
var statearr_33247_33275 = state_33243__$1;
(statearr_33247_33275[(2)] = null);

(statearr_33247_33275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (4))){
var inst_33207 = (state_33243[(9)]);
var inst_33207__$1 = (state_33243[(2)]);
var inst_33208 = (inst_33207__$1 == null);
var inst_33209 = cljs.core.not.call(null,inst_33208);
var state_33243__$1 = (function (){var statearr_33248 = state_33243;
(statearr_33248[(9)] = inst_33207__$1);

return statearr_33248;
})();
if(inst_33209){
var statearr_33249_33276 = state_33243__$1;
(statearr_33249_33276[(1)] = (5));

} else {
var statearr_33250_33277 = state_33243__$1;
(statearr_33250_33277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (15))){
var inst_33233 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
var statearr_33251_33278 = state_33243__$1;
(statearr_33251_33278[(2)] = inst_33233);

(statearr_33251_33278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (13))){
var state_33243__$1 = state_33243;
var statearr_33252_33279 = state_33243__$1;
(statearr_33252_33279[(2)] = null);

(statearr_33252_33279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (6))){
var inst_33203 = (state_33243[(7)]);
var inst_33228 = inst_33203.length;
var inst_33229 = (inst_33228 > (0));
var state_33243__$1 = state_33243;
if(cljs.core.truth_(inst_33229)){
var statearr_33253_33280 = state_33243__$1;
(statearr_33253_33280[(1)] = (12));

} else {
var statearr_33254_33281 = state_33243__$1;
(statearr_33254_33281[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (3))){
var inst_33241 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33243__$1,inst_33241);
} else {
if((state_val_33244 === (12))){
var inst_33203 = (state_33243[(7)]);
var inst_33231 = cljs.core.vec.call(null,inst_33203);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33243__$1,(15),out,inst_33231);
} else {
if((state_val_33244 === (2))){
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33243__$1,(4),ch);
} else {
if((state_val_33244 === (11))){
var inst_33211 = (state_33243[(10)]);
var inst_33207 = (state_33243[(9)]);
var inst_33221 = (state_33243[(2)]);
var inst_33222 = [];
var inst_33223 = inst_33222.push(inst_33207);
var inst_33203 = inst_33222;
var inst_33204 = inst_33211;
var state_33243__$1 = (function (){var statearr_33255 = state_33243;
(statearr_33255[(7)] = inst_33203);

(statearr_33255[(11)] = inst_33223);

(statearr_33255[(12)] = inst_33221);

(statearr_33255[(8)] = inst_33204);

return statearr_33255;
})();
var statearr_33256_33282 = state_33243__$1;
(statearr_33256_33282[(2)] = null);

(statearr_33256_33282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (9))){
var inst_33203 = (state_33243[(7)]);
var inst_33219 = cljs.core.vec.call(null,inst_33203);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33243__$1,(11),out,inst_33219);
} else {
if((state_val_33244 === (5))){
var inst_33211 = (state_33243[(10)]);
var inst_33204 = (state_33243[(8)]);
var inst_33207 = (state_33243[(9)]);
var inst_33211__$1 = f.call(null,inst_33207);
var inst_33212 = cljs.core._EQ_.call(null,inst_33211__$1,inst_33204);
var inst_33213 = cljs.core.keyword_identical_QMARK_.call(null,inst_33204,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33214 = (inst_33212) || (inst_33213);
var state_33243__$1 = (function (){var statearr_33257 = state_33243;
(statearr_33257[(10)] = inst_33211__$1);

return statearr_33257;
})();
if(cljs.core.truth_(inst_33214)){
var statearr_33258_33283 = state_33243__$1;
(statearr_33258_33283[(1)] = (8));

} else {
var statearr_33259_33284 = state_33243__$1;
(statearr_33259_33284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (14))){
var inst_33236 = (state_33243[(2)]);
var inst_33237 = cljs.core.async.close_BANG_.call(null,out);
var state_33243__$1 = (function (){var statearr_33261 = state_33243;
(statearr_33261[(13)] = inst_33236);

return statearr_33261;
})();
var statearr_33262_33285 = state_33243__$1;
(statearr_33262_33285[(2)] = inst_33237);

(statearr_33262_33285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (10))){
var inst_33226 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
var statearr_33263_33286 = state_33243__$1;
(statearr_33263_33286[(2)] = inst_33226);

(statearr_33263_33286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (8))){
var inst_33211 = (state_33243[(10)]);
var inst_33203 = (state_33243[(7)]);
var inst_33207 = (state_33243[(9)]);
var inst_33216 = inst_33203.push(inst_33207);
var tmp33260 = inst_33203;
var inst_33203__$1 = tmp33260;
var inst_33204 = inst_33211;
var state_33243__$1 = (function (){var statearr_33264 = state_33243;
(statearr_33264[(7)] = inst_33203__$1);

(statearr_33264[(14)] = inst_33216);

(statearr_33264[(8)] = inst_33204);

return statearr_33264;
})();
var statearr_33265_33287 = state_33243__$1;
(statearr_33265_33287[(2)] = null);

(statearr_33265_33287[(1)] = (2));


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
});})(c__19256__auto___33273,out))
;
return ((function (switch__19200__auto__,c__19256__auto___33273,out){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_33269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33269[(0)] = state_machine__19201__auto__);

(statearr_33269[(1)] = (1));

return statearr_33269;
});
var state_machine__19201__auto____1 = (function (state_33243){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_33243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e33270){if((e33270 instanceof Object)){
var ex__19204__auto__ = e33270;
var statearr_33271_33288 = state_33243;
(statearr_33271_33288[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33289 = state_33243;
state_33243 = G__33289;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_33243){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_33243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___33273,out))
})();
var state__19258__auto__ = (function (){var statearr_33272 = f__19257__auto__.call(null);
(statearr_33272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___33273);

return statearr_33272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___33273,out))
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

//# sourceMappingURL=async.js.map?rel=1428568917386