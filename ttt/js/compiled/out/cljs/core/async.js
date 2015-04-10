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
if(typeof cljs.core.async.t30200 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30200 = (function (f,fn_handler,meta30201){
this.f = f;
this.fn_handler = fn_handler;
this.meta30201 = meta30201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30200.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30202){
var self__ = this;
var _30202__$1 = this;
return self__.meta30201;
});

cljs.core.async.t30200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30202,meta30201__$1){
var self__ = this;
var _30202__$1 = this;
return (new cljs.core.async.t30200(self__.f,self__.fn_handler,meta30201__$1));
});

cljs.core.async.t30200.cljs$lang$type = true;

cljs.core.async.t30200.cljs$lang$ctorStr = "cljs.core.async/t30200";

cljs.core.async.t30200.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30200");
});

cljs.core.async.__GT_t30200 = (function __GT_t30200(f__$1,fn_handler__$1,meta30201){
return (new cljs.core.async.t30200(f__$1,fn_handler__$1,meta30201));
});

}

return (new cljs.core.async.t30200(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30204 = buff;
if(G__30204){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__30204.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30204.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30204);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30204);
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
var val_30205 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30205);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30205,ret){
return (function (){
return fn1.call(null,val_30205);
});})(val_30205,ret))
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
var n__17032__auto___30206 = n;
var x_30207 = (0);
while(true){
if((x_30207 < n__17032__auto___30206)){
(a[x_30207] = (0));

var G__30208 = (x_30207 + (1));
x_30207 = G__30208;
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

var G__30209 = (i + (1));
i = G__30209;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30213 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30213 = (function (flag,alt_flag,meta30214){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30214 = meta30214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30213.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30215){
var self__ = this;
var _30215__$1 = this;
return self__.meta30214;
});})(flag))
;

cljs.core.async.t30213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30215,meta30214__$1){
var self__ = this;
var _30215__$1 = this;
return (new cljs.core.async.t30213(self__.flag,self__.alt_flag,meta30214__$1));
});})(flag))
;

cljs.core.async.t30213.cljs$lang$type = true;

cljs.core.async.t30213.cljs$lang$ctorStr = "cljs.core.async/t30213";

cljs.core.async.t30213.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30213");
});})(flag))
;

cljs.core.async.__GT_t30213 = ((function (flag){
return (function __GT_t30213(flag__$1,alt_flag__$1,meta30214){
return (new cljs.core.async.t30213(flag__$1,alt_flag__$1,meta30214));
});})(flag))
;

}

return (new cljs.core.async.t30213(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t30219 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30219 = (function (cb,flag,alt_handler,meta30220){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30220 = meta30220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30219.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30221){
var self__ = this;
var _30221__$1 = this;
return self__.meta30220;
});

cljs.core.async.t30219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30221,meta30220__$1){
var self__ = this;
var _30221__$1 = this;
return (new cljs.core.async.t30219(self__.cb,self__.flag,self__.alt_handler,meta30220__$1));
});

cljs.core.async.t30219.cljs$lang$type = true;

cljs.core.async.t30219.cljs$lang$ctorStr = "cljs.core.async/t30219";

cljs.core.async.t30219.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30219");
});

cljs.core.async.__GT_t30219 = (function __GT_t30219(cb__$1,flag__$1,alt_handler__$1,meta30220){
return (new cljs.core.async.t30219(cb__$1,flag__$1,alt_handler__$1,meta30220));
});

}

return (new cljs.core.async.t30219(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30222_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30222_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30223_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30223_SHARP_,port], null));
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
var G__30224 = (i + (1));
i = G__30224;
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
var alts_BANG___delegate = function (ports,p__30225){
var map__30227 = p__30225;
var map__30227__$1 = ((cljs.core.seq_QMARK_.call(null,map__30227))?cljs.core.apply.call(null,cljs.core.hash_map,map__30227):map__30227);
var opts = map__30227__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30225 = null;
if (arguments.length > 1) {
var G__30228__i = 0, G__30228__a = new Array(arguments.length -  1);
while (G__30228__i < G__30228__a.length) {G__30228__a[G__30228__i] = arguments[G__30228__i + 1]; ++G__30228__i;}
  p__30225 = new cljs.core.IndexedSeq(G__30228__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__30225);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30229){
var ports = cljs.core.first(arglist__30229);
var p__30225 = cljs.core.rest(arglist__30229);
return alts_BANG___delegate(ports,p__30225);
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
var c__19254__auto___30324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___30324){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___30324){
return (function (state_30300){
var state_val_30301 = (state_30300[(1)]);
if((state_val_30301 === (7))){
var inst_30296 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30302_30325 = state_30300__$1;
(statearr_30302_30325[(2)] = inst_30296);

(statearr_30302_30325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (1))){
var state_30300__$1 = state_30300;
var statearr_30303_30326 = state_30300__$1;
(statearr_30303_30326[(2)] = null);

(statearr_30303_30326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (4))){
var inst_30279 = (state_30300[(7)]);
var inst_30279__$1 = (state_30300[(2)]);
var inst_30280 = (inst_30279__$1 == null);
var state_30300__$1 = (function (){var statearr_30304 = state_30300;
(statearr_30304[(7)] = inst_30279__$1);

return statearr_30304;
})();
if(cljs.core.truth_(inst_30280)){
var statearr_30305_30327 = state_30300__$1;
(statearr_30305_30327[(1)] = (5));

} else {
var statearr_30306_30328 = state_30300__$1;
(statearr_30306_30328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (13))){
var state_30300__$1 = state_30300;
var statearr_30307_30329 = state_30300__$1;
(statearr_30307_30329[(2)] = null);

(statearr_30307_30329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (6))){
var inst_30279 = (state_30300[(7)]);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30300__$1,(11),to,inst_30279);
} else {
if((state_val_30301 === (3))){
var inst_30298 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30300__$1,inst_30298);
} else {
if((state_val_30301 === (12))){
var state_30300__$1 = state_30300;
var statearr_30308_30330 = state_30300__$1;
(statearr_30308_30330[(2)] = null);

(statearr_30308_30330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (2))){
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30300__$1,(4),from);
} else {
if((state_val_30301 === (11))){
var inst_30289 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
if(cljs.core.truth_(inst_30289)){
var statearr_30309_30331 = state_30300__$1;
(statearr_30309_30331[(1)] = (12));

} else {
var statearr_30310_30332 = state_30300__$1;
(statearr_30310_30332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (9))){
var state_30300__$1 = state_30300;
var statearr_30311_30333 = state_30300__$1;
(statearr_30311_30333[(2)] = null);

(statearr_30311_30333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (5))){
var state_30300__$1 = state_30300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30312_30334 = state_30300__$1;
(statearr_30312_30334[(1)] = (8));

} else {
var statearr_30313_30335 = state_30300__$1;
(statearr_30313_30335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (14))){
var inst_30294 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30314_30336 = state_30300__$1;
(statearr_30314_30336[(2)] = inst_30294);

(statearr_30314_30336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (10))){
var inst_30286 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30315_30337 = state_30300__$1;
(statearr_30315_30337[(2)] = inst_30286);

(statearr_30315_30337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (8))){
var inst_30283 = cljs.core.async.close_BANG_.call(null,to);
var state_30300__$1 = state_30300;
var statearr_30316_30338 = state_30300__$1;
(statearr_30316_30338[(2)] = inst_30283);

(statearr_30316_30338[(1)] = (10));


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
});})(c__19254__auto___30324))
;
return ((function (switch__19198__auto__,c__19254__auto___30324){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_30320 = [null,null,null,null,null,null,null,null];
(statearr_30320[(0)] = state_machine__19199__auto__);

(statearr_30320[(1)] = (1));

return statearr_30320;
});
var state_machine__19199__auto____1 = (function (state_30300){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_30300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e30321){if((e30321 instanceof Object)){
var ex__19202__auto__ = e30321;
var statearr_30322_30339 = state_30300;
(statearr_30322_30339[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30340 = state_30300;
state_30300 = G__30340;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_30300){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_30300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___30324))
})();
var state__19256__auto__ = (function (){var statearr_30323 = f__19255__auto__.call(null);
(statearr_30323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___30324);

return statearr_30323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___30324))
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
return (function (p__30524){
var vec__30525 = p__30524;
var v = cljs.core.nth.call(null,vec__30525,(0),null);
var p = cljs.core.nth.call(null,vec__30525,(1),null);
var job = vec__30525;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19254__auto___30707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___30707,res,vec__30525,v,p,job,jobs,results){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___30707,res,vec__30525,v,p,job,jobs,results){
return (function (state_30530){
var state_val_30531 = (state_30530[(1)]);
if((state_val_30531 === (2))){
var inst_30527 = (state_30530[(2)]);
var inst_30528 = cljs.core.async.close_BANG_.call(null,res);
var state_30530__$1 = (function (){var statearr_30532 = state_30530;
(statearr_30532[(7)] = inst_30527);

return statearr_30532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30530__$1,inst_30528);
} else {
if((state_val_30531 === (1))){
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30530__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19254__auto___30707,res,vec__30525,v,p,job,jobs,results))
;
return ((function (switch__19198__auto__,c__19254__auto___30707,res,vec__30525,v,p,job,jobs,results){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_30536 = [null,null,null,null,null,null,null,null];
(statearr_30536[(0)] = state_machine__19199__auto__);

(statearr_30536[(1)] = (1));

return statearr_30536;
});
var state_machine__19199__auto____1 = (function (state_30530){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_30530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e30537){if((e30537 instanceof Object)){
var ex__19202__auto__ = e30537;
var statearr_30538_30708 = state_30530;
(statearr_30538_30708[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30709 = state_30530;
state_30530 = G__30709;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_30530){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_30530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___30707,res,vec__30525,v,p,job,jobs,results))
})();
var state__19256__auto__ = (function (){var statearr_30539 = f__19255__auto__.call(null);
(statearr_30539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___30707);

return statearr_30539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___30707,res,vec__30525,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30540){
var vec__30541 = p__30540;
var v = cljs.core.nth.call(null,vec__30541,(0),null);
var p = cljs.core.nth.call(null,vec__30541,(1),null);
var job = vec__30541;
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
var n__17032__auto___30710 = n;
var __30711 = (0);
while(true){
if((__30711 < n__17032__auto___30710)){
var G__30542_30712 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30542_30712) {
case "async":
var c__19254__auto___30714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30711,c__19254__auto___30714,G__30542_30712,n__17032__auto___30710,jobs,results,process,async){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (__30711,c__19254__auto___30714,G__30542_30712,n__17032__auto___30710,jobs,results,process,async){
return (function (state_30555){
var state_val_30556 = (state_30555[(1)]);
if((state_val_30556 === (7))){
var inst_30551 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
var statearr_30557_30715 = state_30555__$1;
(statearr_30557_30715[(2)] = inst_30551);

(statearr_30557_30715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (6))){
var state_30555__$1 = state_30555;
var statearr_30558_30716 = state_30555__$1;
(statearr_30558_30716[(2)] = null);

(statearr_30558_30716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (5))){
var state_30555__$1 = state_30555;
var statearr_30559_30717 = state_30555__$1;
(statearr_30559_30717[(2)] = null);

(statearr_30559_30717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (4))){
var inst_30545 = (state_30555[(2)]);
var inst_30546 = async.call(null,inst_30545);
var state_30555__$1 = state_30555;
if(cljs.core.truth_(inst_30546)){
var statearr_30560_30718 = state_30555__$1;
(statearr_30560_30718[(1)] = (5));

} else {
var statearr_30561_30719 = state_30555__$1;
(statearr_30561_30719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (3))){
var inst_30553 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30555__$1,inst_30553);
} else {
if((state_val_30556 === (2))){
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30555__$1,(4),jobs);
} else {
if((state_val_30556 === (1))){
var state_30555__$1 = state_30555;
var statearr_30562_30720 = state_30555__$1;
(statearr_30562_30720[(2)] = null);

(statearr_30562_30720[(1)] = (2));


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
});})(__30711,c__19254__auto___30714,G__30542_30712,n__17032__auto___30710,jobs,results,process,async))
;
return ((function (__30711,switch__19198__auto__,c__19254__auto___30714,G__30542_30712,n__17032__auto___30710,jobs,results,process,async){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_30566 = [null,null,null,null,null,null,null];
(statearr_30566[(0)] = state_machine__19199__auto__);

(statearr_30566[(1)] = (1));

return statearr_30566;
});
var state_machine__19199__auto____1 = (function (state_30555){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_30555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e30567){if((e30567 instanceof Object)){
var ex__19202__auto__ = e30567;
var statearr_30568_30721 = state_30555;
(statearr_30568_30721[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30722 = state_30555;
state_30555 = G__30722;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_30555){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_30555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(__30711,switch__19198__auto__,c__19254__auto___30714,G__30542_30712,n__17032__auto___30710,jobs,results,process,async))
})();
var state__19256__auto__ = (function (){var statearr_30569 = f__19255__auto__.call(null);
(statearr_30569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___30714);

return statearr_30569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(__30711,c__19254__auto___30714,G__30542_30712,n__17032__auto___30710,jobs,results,process,async))
);


break;
case "compute":
var c__19254__auto___30723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30711,c__19254__auto___30723,G__30542_30712,n__17032__auto___30710,jobs,results,process,async){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (__30711,c__19254__auto___30723,G__30542_30712,n__17032__auto___30710,jobs,results,process,async){
return (function (state_30582){
var state_val_30583 = (state_30582[(1)]);
if((state_val_30583 === (7))){
var inst_30578 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30584_30724 = state_30582__$1;
(statearr_30584_30724[(2)] = inst_30578);

(statearr_30584_30724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (6))){
var state_30582__$1 = state_30582;
var statearr_30585_30725 = state_30582__$1;
(statearr_30585_30725[(2)] = null);

(statearr_30585_30725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (5))){
var state_30582__$1 = state_30582;
var statearr_30586_30726 = state_30582__$1;
(statearr_30586_30726[(2)] = null);

(statearr_30586_30726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (4))){
var inst_30572 = (state_30582[(2)]);
var inst_30573 = process.call(null,inst_30572);
var state_30582__$1 = state_30582;
if(cljs.core.truth_(inst_30573)){
var statearr_30587_30727 = state_30582__$1;
(statearr_30587_30727[(1)] = (5));

} else {
var statearr_30588_30728 = state_30582__$1;
(statearr_30588_30728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (3))){
var inst_30580 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30582__$1,inst_30580);
} else {
if((state_val_30583 === (2))){
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30582__$1,(4),jobs);
} else {
if((state_val_30583 === (1))){
var state_30582__$1 = state_30582;
var statearr_30589_30729 = state_30582__$1;
(statearr_30589_30729[(2)] = null);

(statearr_30589_30729[(1)] = (2));


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
});})(__30711,c__19254__auto___30723,G__30542_30712,n__17032__auto___30710,jobs,results,process,async))
;
return ((function (__30711,switch__19198__auto__,c__19254__auto___30723,G__30542_30712,n__17032__auto___30710,jobs,results,process,async){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_30593 = [null,null,null,null,null,null,null];
(statearr_30593[(0)] = state_machine__19199__auto__);

(statearr_30593[(1)] = (1));

return statearr_30593;
});
var state_machine__19199__auto____1 = (function (state_30582){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_30582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e30594){if((e30594 instanceof Object)){
var ex__19202__auto__ = e30594;
var statearr_30595_30730 = state_30582;
(statearr_30595_30730[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30731 = state_30582;
state_30582 = G__30731;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_30582){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_30582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(__30711,switch__19198__auto__,c__19254__auto___30723,G__30542_30712,n__17032__auto___30710,jobs,results,process,async))
})();
var state__19256__auto__ = (function (){var statearr_30596 = f__19255__auto__.call(null);
(statearr_30596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___30723);

return statearr_30596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(__30711,c__19254__auto___30723,G__30542_30712,n__17032__auto___30710,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30732 = (__30711 + (1));
__30711 = G__30732;
continue;
} else {
}
break;
}

var c__19254__auto___30733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___30733,jobs,results,process,async){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___30733,jobs,results,process,async){
return (function (state_30618){
var state_val_30619 = (state_30618[(1)]);
if((state_val_30619 === (9))){
var inst_30611 = (state_30618[(2)]);
var state_30618__$1 = (function (){var statearr_30620 = state_30618;
(statearr_30620[(7)] = inst_30611);

return statearr_30620;
})();
var statearr_30621_30734 = state_30618__$1;
(statearr_30621_30734[(2)] = null);

(statearr_30621_30734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (8))){
var inst_30604 = (state_30618[(8)]);
var inst_30609 = (state_30618[(2)]);
var state_30618__$1 = (function (){var statearr_30622 = state_30618;
(statearr_30622[(9)] = inst_30609);

return statearr_30622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30618__$1,(9),results,inst_30604);
} else {
if((state_val_30619 === (7))){
var inst_30614 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
var statearr_30623_30735 = state_30618__$1;
(statearr_30623_30735[(2)] = inst_30614);

(statearr_30623_30735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (6))){
var inst_30604 = (state_30618[(8)]);
var inst_30599 = (state_30618[(10)]);
var inst_30604__$1 = cljs.core.async.chan.call(null,(1));
var inst_30605 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30606 = [inst_30599,inst_30604__$1];
var inst_30607 = (new cljs.core.PersistentVector(null,2,(5),inst_30605,inst_30606,null));
var state_30618__$1 = (function (){var statearr_30624 = state_30618;
(statearr_30624[(8)] = inst_30604__$1);

return statearr_30624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30618__$1,(8),jobs,inst_30607);
} else {
if((state_val_30619 === (5))){
var inst_30602 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30618__$1 = state_30618;
var statearr_30625_30736 = state_30618__$1;
(statearr_30625_30736[(2)] = inst_30602);

(statearr_30625_30736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (4))){
var inst_30599 = (state_30618[(10)]);
var inst_30599__$1 = (state_30618[(2)]);
var inst_30600 = (inst_30599__$1 == null);
var state_30618__$1 = (function (){var statearr_30626 = state_30618;
(statearr_30626[(10)] = inst_30599__$1);

return statearr_30626;
})();
if(cljs.core.truth_(inst_30600)){
var statearr_30627_30737 = state_30618__$1;
(statearr_30627_30737[(1)] = (5));

} else {
var statearr_30628_30738 = state_30618__$1;
(statearr_30628_30738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (3))){
var inst_30616 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30618__$1,inst_30616);
} else {
if((state_val_30619 === (2))){
var state_30618__$1 = state_30618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30618__$1,(4),from);
} else {
if((state_val_30619 === (1))){
var state_30618__$1 = state_30618;
var statearr_30629_30739 = state_30618__$1;
(statearr_30629_30739[(2)] = null);

(statearr_30629_30739[(1)] = (2));


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
});})(c__19254__auto___30733,jobs,results,process,async))
;
return ((function (switch__19198__auto__,c__19254__auto___30733,jobs,results,process,async){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_30633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30633[(0)] = state_machine__19199__auto__);

(statearr_30633[(1)] = (1));

return statearr_30633;
});
var state_machine__19199__auto____1 = (function (state_30618){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_30618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e30634){if((e30634 instanceof Object)){
var ex__19202__auto__ = e30634;
var statearr_30635_30740 = state_30618;
(statearr_30635_30740[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30741 = state_30618;
state_30618 = G__30741;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_30618){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_30618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___30733,jobs,results,process,async))
})();
var state__19256__auto__ = (function (){var statearr_30636 = f__19255__auto__.call(null);
(statearr_30636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___30733);

return statearr_30636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___30733,jobs,results,process,async))
);


var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__,jobs,results,process,async){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__,jobs,results,process,async){
return (function (state_30674){
var state_val_30675 = (state_30674[(1)]);
if((state_val_30675 === (7))){
var inst_30670 = (state_30674[(2)]);
var state_30674__$1 = state_30674;
var statearr_30676_30742 = state_30674__$1;
(statearr_30676_30742[(2)] = inst_30670);

(statearr_30676_30742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (20))){
var state_30674__$1 = state_30674;
var statearr_30677_30743 = state_30674__$1;
(statearr_30677_30743[(2)] = null);

(statearr_30677_30743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (1))){
var state_30674__$1 = state_30674;
var statearr_30678_30744 = state_30674__$1;
(statearr_30678_30744[(2)] = null);

(statearr_30678_30744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (4))){
var inst_30639 = (state_30674[(7)]);
var inst_30639__$1 = (state_30674[(2)]);
var inst_30640 = (inst_30639__$1 == null);
var state_30674__$1 = (function (){var statearr_30679 = state_30674;
(statearr_30679[(7)] = inst_30639__$1);

return statearr_30679;
})();
if(cljs.core.truth_(inst_30640)){
var statearr_30680_30745 = state_30674__$1;
(statearr_30680_30745[(1)] = (5));

} else {
var statearr_30681_30746 = state_30674__$1;
(statearr_30681_30746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (15))){
var inst_30652 = (state_30674[(8)]);
var state_30674__$1 = state_30674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30674__$1,(18),to,inst_30652);
} else {
if((state_val_30675 === (21))){
var inst_30665 = (state_30674[(2)]);
var state_30674__$1 = state_30674;
var statearr_30682_30747 = state_30674__$1;
(statearr_30682_30747[(2)] = inst_30665);

(statearr_30682_30747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (13))){
var inst_30667 = (state_30674[(2)]);
var state_30674__$1 = (function (){var statearr_30683 = state_30674;
(statearr_30683[(9)] = inst_30667);

return statearr_30683;
})();
var statearr_30684_30748 = state_30674__$1;
(statearr_30684_30748[(2)] = null);

(statearr_30684_30748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (6))){
var inst_30639 = (state_30674[(7)]);
var state_30674__$1 = state_30674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30674__$1,(11),inst_30639);
} else {
if((state_val_30675 === (17))){
var inst_30660 = (state_30674[(2)]);
var state_30674__$1 = state_30674;
if(cljs.core.truth_(inst_30660)){
var statearr_30685_30749 = state_30674__$1;
(statearr_30685_30749[(1)] = (19));

} else {
var statearr_30686_30750 = state_30674__$1;
(statearr_30686_30750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (3))){
var inst_30672 = (state_30674[(2)]);
var state_30674__$1 = state_30674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30674__$1,inst_30672);
} else {
if((state_val_30675 === (12))){
var inst_30649 = (state_30674[(10)]);
var state_30674__$1 = state_30674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30674__$1,(14),inst_30649);
} else {
if((state_val_30675 === (2))){
var state_30674__$1 = state_30674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30674__$1,(4),results);
} else {
if((state_val_30675 === (19))){
var state_30674__$1 = state_30674;
var statearr_30687_30751 = state_30674__$1;
(statearr_30687_30751[(2)] = null);

(statearr_30687_30751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (11))){
var inst_30649 = (state_30674[(2)]);
var state_30674__$1 = (function (){var statearr_30688 = state_30674;
(statearr_30688[(10)] = inst_30649);

return statearr_30688;
})();
var statearr_30689_30752 = state_30674__$1;
(statearr_30689_30752[(2)] = null);

(statearr_30689_30752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (9))){
var state_30674__$1 = state_30674;
var statearr_30690_30753 = state_30674__$1;
(statearr_30690_30753[(2)] = null);

(statearr_30690_30753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (5))){
var state_30674__$1 = state_30674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30691_30754 = state_30674__$1;
(statearr_30691_30754[(1)] = (8));

} else {
var statearr_30692_30755 = state_30674__$1;
(statearr_30692_30755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (14))){
var inst_30652 = (state_30674[(8)]);
var inst_30654 = (state_30674[(11)]);
var inst_30652__$1 = (state_30674[(2)]);
var inst_30653 = (inst_30652__$1 == null);
var inst_30654__$1 = cljs.core.not.call(null,inst_30653);
var state_30674__$1 = (function (){var statearr_30693 = state_30674;
(statearr_30693[(8)] = inst_30652__$1);

(statearr_30693[(11)] = inst_30654__$1);

return statearr_30693;
})();
if(inst_30654__$1){
var statearr_30694_30756 = state_30674__$1;
(statearr_30694_30756[(1)] = (15));

} else {
var statearr_30695_30757 = state_30674__$1;
(statearr_30695_30757[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (16))){
var inst_30654 = (state_30674[(11)]);
var state_30674__$1 = state_30674;
var statearr_30696_30758 = state_30674__$1;
(statearr_30696_30758[(2)] = inst_30654);

(statearr_30696_30758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (10))){
var inst_30646 = (state_30674[(2)]);
var state_30674__$1 = state_30674;
var statearr_30697_30759 = state_30674__$1;
(statearr_30697_30759[(2)] = inst_30646);

(statearr_30697_30759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (18))){
var inst_30657 = (state_30674[(2)]);
var state_30674__$1 = state_30674;
var statearr_30698_30760 = state_30674__$1;
(statearr_30698_30760[(2)] = inst_30657);

(statearr_30698_30760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (8))){
var inst_30643 = cljs.core.async.close_BANG_.call(null,to);
var state_30674__$1 = state_30674;
var statearr_30699_30761 = state_30674__$1;
(statearr_30699_30761[(2)] = inst_30643);

(statearr_30699_30761[(1)] = (10));


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
});})(c__19254__auto__,jobs,results,process,async))
;
return ((function (switch__19198__auto__,c__19254__auto__,jobs,results,process,async){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_30703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30703[(0)] = state_machine__19199__auto__);

(statearr_30703[(1)] = (1));

return statearr_30703;
});
var state_machine__19199__auto____1 = (function (state_30674){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_30674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e30704){if((e30704 instanceof Object)){
var ex__19202__auto__ = e30704;
var statearr_30705_30762 = state_30674;
(statearr_30705_30762[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30763 = state_30674;
state_30674 = G__30763;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_30674){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_30674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__,jobs,results,process,async))
})();
var state__19256__auto__ = (function (){var statearr_30706 = f__19255__auto__.call(null);
(statearr_30706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_30706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__,jobs,results,process,async))
);

return c__19254__auto__;
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
var c__19254__auto___30864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___30864,tc,fc){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___30864,tc,fc){
return (function (state_30839){
var state_val_30840 = (state_30839[(1)]);
if((state_val_30840 === (7))){
var inst_30835 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30841_30865 = state_30839__$1;
(statearr_30841_30865[(2)] = inst_30835);

(statearr_30841_30865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (1))){
var state_30839__$1 = state_30839;
var statearr_30842_30866 = state_30839__$1;
(statearr_30842_30866[(2)] = null);

(statearr_30842_30866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (4))){
var inst_30816 = (state_30839[(7)]);
var inst_30816__$1 = (state_30839[(2)]);
var inst_30817 = (inst_30816__$1 == null);
var state_30839__$1 = (function (){var statearr_30843 = state_30839;
(statearr_30843[(7)] = inst_30816__$1);

return statearr_30843;
})();
if(cljs.core.truth_(inst_30817)){
var statearr_30844_30867 = state_30839__$1;
(statearr_30844_30867[(1)] = (5));

} else {
var statearr_30845_30868 = state_30839__$1;
(statearr_30845_30868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (13))){
var state_30839__$1 = state_30839;
var statearr_30846_30869 = state_30839__$1;
(statearr_30846_30869[(2)] = null);

(statearr_30846_30869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (6))){
var inst_30816 = (state_30839[(7)]);
var inst_30822 = p.call(null,inst_30816);
var state_30839__$1 = state_30839;
if(cljs.core.truth_(inst_30822)){
var statearr_30847_30870 = state_30839__$1;
(statearr_30847_30870[(1)] = (9));

} else {
var statearr_30848_30871 = state_30839__$1;
(statearr_30848_30871[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (3))){
var inst_30837 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30839__$1,inst_30837);
} else {
if((state_val_30840 === (12))){
var state_30839__$1 = state_30839;
var statearr_30849_30872 = state_30839__$1;
(statearr_30849_30872[(2)] = null);

(statearr_30849_30872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (2))){
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30839__$1,(4),ch);
} else {
if((state_val_30840 === (11))){
var inst_30816 = (state_30839[(7)]);
var inst_30826 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30839__$1,(8),inst_30826,inst_30816);
} else {
if((state_val_30840 === (9))){
var state_30839__$1 = state_30839;
var statearr_30850_30873 = state_30839__$1;
(statearr_30850_30873[(2)] = tc);

(statearr_30850_30873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (5))){
var inst_30819 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30820 = cljs.core.async.close_BANG_.call(null,fc);
var state_30839__$1 = (function (){var statearr_30851 = state_30839;
(statearr_30851[(8)] = inst_30819);

return statearr_30851;
})();
var statearr_30852_30874 = state_30839__$1;
(statearr_30852_30874[(2)] = inst_30820);

(statearr_30852_30874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (14))){
var inst_30833 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30853_30875 = state_30839__$1;
(statearr_30853_30875[(2)] = inst_30833);

(statearr_30853_30875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (10))){
var state_30839__$1 = state_30839;
var statearr_30854_30876 = state_30839__$1;
(statearr_30854_30876[(2)] = fc);

(statearr_30854_30876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (8))){
var inst_30828 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
if(cljs.core.truth_(inst_30828)){
var statearr_30855_30877 = state_30839__$1;
(statearr_30855_30877[(1)] = (12));

} else {
var statearr_30856_30878 = state_30839__$1;
(statearr_30856_30878[(1)] = (13));

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
});})(c__19254__auto___30864,tc,fc))
;
return ((function (switch__19198__auto__,c__19254__auto___30864,tc,fc){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_30860 = [null,null,null,null,null,null,null,null,null];
(statearr_30860[(0)] = state_machine__19199__auto__);

(statearr_30860[(1)] = (1));

return statearr_30860;
});
var state_machine__19199__auto____1 = (function (state_30839){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_30839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e30861){if((e30861 instanceof Object)){
var ex__19202__auto__ = e30861;
var statearr_30862_30879 = state_30839;
(statearr_30862_30879[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30880 = state_30839;
state_30839 = G__30880;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_30839){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_30839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___30864,tc,fc))
})();
var state__19256__auto__ = (function (){var statearr_30863 = f__19255__auto__.call(null);
(statearr_30863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___30864);

return statearr_30863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___30864,tc,fc))
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
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__){
return (function (state_30927){
var state_val_30928 = (state_30927[(1)]);
if((state_val_30928 === (7))){
var inst_30923 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
var statearr_30929_30945 = state_30927__$1;
(statearr_30929_30945[(2)] = inst_30923);

(statearr_30929_30945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (6))){
var inst_30913 = (state_30927[(7)]);
var inst_30916 = (state_30927[(8)]);
var inst_30920 = f.call(null,inst_30913,inst_30916);
var inst_30913__$1 = inst_30920;
var state_30927__$1 = (function (){var statearr_30930 = state_30927;
(statearr_30930[(7)] = inst_30913__$1);

return statearr_30930;
})();
var statearr_30931_30946 = state_30927__$1;
(statearr_30931_30946[(2)] = null);

(statearr_30931_30946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (5))){
var inst_30913 = (state_30927[(7)]);
var state_30927__$1 = state_30927;
var statearr_30932_30947 = state_30927__$1;
(statearr_30932_30947[(2)] = inst_30913);

(statearr_30932_30947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (4))){
var inst_30916 = (state_30927[(8)]);
var inst_30916__$1 = (state_30927[(2)]);
var inst_30917 = (inst_30916__$1 == null);
var state_30927__$1 = (function (){var statearr_30933 = state_30927;
(statearr_30933[(8)] = inst_30916__$1);

return statearr_30933;
})();
if(cljs.core.truth_(inst_30917)){
var statearr_30934_30948 = state_30927__$1;
(statearr_30934_30948[(1)] = (5));

} else {
var statearr_30935_30949 = state_30927__$1;
(statearr_30935_30949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (3))){
var inst_30925 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30927__$1,inst_30925);
} else {
if((state_val_30928 === (2))){
var state_30927__$1 = state_30927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30927__$1,(4),ch);
} else {
if((state_val_30928 === (1))){
var inst_30913 = init;
var state_30927__$1 = (function (){var statearr_30936 = state_30927;
(statearr_30936[(7)] = inst_30913);

return statearr_30936;
})();
var statearr_30937_30950 = state_30927__$1;
(statearr_30937_30950[(2)] = null);

(statearr_30937_30950[(1)] = (2));


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
});})(c__19254__auto__))
;
return ((function (switch__19198__auto__,c__19254__auto__){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_30941 = [null,null,null,null,null,null,null,null,null];
(statearr_30941[(0)] = state_machine__19199__auto__);

(statearr_30941[(1)] = (1));

return statearr_30941;
});
var state_machine__19199__auto____1 = (function (state_30927){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_30927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e30942){if((e30942 instanceof Object)){
var ex__19202__auto__ = e30942;
var statearr_30943_30951 = state_30927;
(statearr_30943_30951[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30952 = state_30927;
state_30927 = G__30952;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_30927){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_30927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_30944 = f__19255__auto__.call(null);
(statearr_30944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_30944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__))
);

return c__19254__auto__;
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
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__){
return (function (state_31026){
var state_val_31027 = (state_31026[(1)]);
if((state_val_31027 === (7))){
var inst_31008 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31028_31051 = state_31026__$1;
(statearr_31028_31051[(2)] = inst_31008);

(statearr_31028_31051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (1))){
var inst_31002 = cljs.core.seq.call(null,coll);
var inst_31003 = inst_31002;
var state_31026__$1 = (function (){var statearr_31029 = state_31026;
(statearr_31029[(7)] = inst_31003);

return statearr_31029;
})();
var statearr_31030_31052 = state_31026__$1;
(statearr_31030_31052[(2)] = null);

(statearr_31030_31052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (4))){
var inst_31003 = (state_31026[(7)]);
var inst_31006 = cljs.core.first.call(null,inst_31003);
var state_31026__$1 = state_31026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31026__$1,(7),ch,inst_31006);
} else {
if((state_val_31027 === (13))){
var inst_31020 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31031_31053 = state_31026__$1;
(statearr_31031_31053[(2)] = inst_31020);

(statearr_31031_31053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (6))){
var inst_31011 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
if(cljs.core.truth_(inst_31011)){
var statearr_31032_31054 = state_31026__$1;
(statearr_31032_31054[(1)] = (8));

} else {
var statearr_31033_31055 = state_31026__$1;
(statearr_31033_31055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (3))){
var inst_31024 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31026__$1,inst_31024);
} else {
if((state_val_31027 === (12))){
var state_31026__$1 = state_31026;
var statearr_31034_31056 = state_31026__$1;
(statearr_31034_31056[(2)] = null);

(statearr_31034_31056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (2))){
var inst_31003 = (state_31026[(7)]);
var state_31026__$1 = state_31026;
if(cljs.core.truth_(inst_31003)){
var statearr_31035_31057 = state_31026__$1;
(statearr_31035_31057[(1)] = (4));

} else {
var statearr_31036_31058 = state_31026__$1;
(statearr_31036_31058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (11))){
var inst_31017 = cljs.core.async.close_BANG_.call(null,ch);
var state_31026__$1 = state_31026;
var statearr_31037_31059 = state_31026__$1;
(statearr_31037_31059[(2)] = inst_31017);

(statearr_31037_31059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (9))){
var state_31026__$1 = state_31026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31038_31060 = state_31026__$1;
(statearr_31038_31060[(1)] = (11));

} else {
var statearr_31039_31061 = state_31026__$1;
(statearr_31039_31061[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (5))){
var inst_31003 = (state_31026[(7)]);
var state_31026__$1 = state_31026;
var statearr_31040_31062 = state_31026__$1;
(statearr_31040_31062[(2)] = inst_31003);

(statearr_31040_31062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (10))){
var inst_31022 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31041_31063 = state_31026__$1;
(statearr_31041_31063[(2)] = inst_31022);

(statearr_31041_31063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (8))){
var inst_31003 = (state_31026[(7)]);
var inst_31013 = cljs.core.next.call(null,inst_31003);
var inst_31003__$1 = inst_31013;
var state_31026__$1 = (function (){var statearr_31042 = state_31026;
(statearr_31042[(7)] = inst_31003__$1);

return statearr_31042;
})();
var statearr_31043_31064 = state_31026__$1;
(statearr_31043_31064[(2)] = null);

(statearr_31043_31064[(1)] = (2));


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
});})(c__19254__auto__))
;
return ((function (switch__19198__auto__,c__19254__auto__){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_31047 = [null,null,null,null,null,null,null,null];
(statearr_31047[(0)] = state_machine__19199__auto__);

(statearr_31047[(1)] = (1));

return statearr_31047;
});
var state_machine__19199__auto____1 = (function (state_31026){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_31026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e31048){if((e31048 instanceof Object)){
var ex__19202__auto__ = e31048;
var statearr_31049_31065 = state_31026;
(statearr_31049_31065[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31066 = state_31026;
state_31026 = G__31066;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_31026){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_31026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_31050 = f__19255__auto__.call(null);
(statearr_31050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_31050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__))
);

return c__19254__auto__;
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

cljs.core.async.Mux = (function (){var obj31068 = {};
return obj31068;
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


cljs.core.async.Mult = (function (){var obj31070 = {};
return obj31070;
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
if(typeof cljs.core.async.t31292 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31292 = (function (cs,ch,mult,meta31293){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31293 = meta31293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31292.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31292.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31292.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31292.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31292.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31294){
var self__ = this;
var _31294__$1 = this;
return self__.meta31293;
});})(cs))
;

cljs.core.async.t31292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31294,meta31293__$1){
var self__ = this;
var _31294__$1 = this;
return (new cljs.core.async.t31292(self__.cs,self__.ch,self__.mult,meta31293__$1));
});})(cs))
;

cljs.core.async.t31292.cljs$lang$type = true;

cljs.core.async.t31292.cljs$lang$ctorStr = "cljs.core.async/t31292";

cljs.core.async.t31292.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31292");
});})(cs))
;

cljs.core.async.__GT_t31292 = ((function (cs){
return (function __GT_t31292(cs__$1,ch__$1,mult__$1,meta31293){
return (new cljs.core.async.t31292(cs__$1,ch__$1,mult__$1,meta31293));
});})(cs))
;

}

return (new cljs.core.async.t31292(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19254__auto___31513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___31513,cs,m,dchan,dctr,done){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___31513,cs,m,dchan,dctr,done){
return (function (state_31425){
var state_val_31426 = (state_31425[(1)]);
if((state_val_31426 === (7))){
var inst_31421 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31427_31514 = state_31425__$1;
(statearr_31427_31514[(2)] = inst_31421);

(statearr_31427_31514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (20))){
var inst_31326 = (state_31425[(7)]);
var inst_31336 = cljs.core.first.call(null,inst_31326);
var inst_31337 = cljs.core.nth.call(null,inst_31336,(0),null);
var inst_31338 = cljs.core.nth.call(null,inst_31336,(1),null);
var state_31425__$1 = (function (){var statearr_31428 = state_31425;
(statearr_31428[(8)] = inst_31337);

return statearr_31428;
})();
if(cljs.core.truth_(inst_31338)){
var statearr_31429_31515 = state_31425__$1;
(statearr_31429_31515[(1)] = (22));

} else {
var statearr_31430_31516 = state_31425__$1;
(statearr_31430_31516[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (27))){
var inst_31373 = (state_31425[(9)]);
var inst_31297 = (state_31425[(10)]);
var inst_31366 = (state_31425[(11)]);
var inst_31368 = (state_31425[(12)]);
var inst_31373__$1 = cljs.core._nth.call(null,inst_31366,inst_31368);
var inst_31374 = cljs.core.async.put_BANG_.call(null,inst_31373__$1,inst_31297,done);
var state_31425__$1 = (function (){var statearr_31431 = state_31425;
(statearr_31431[(9)] = inst_31373__$1);

return statearr_31431;
})();
if(cljs.core.truth_(inst_31374)){
var statearr_31432_31517 = state_31425__$1;
(statearr_31432_31517[(1)] = (30));

} else {
var statearr_31433_31518 = state_31425__$1;
(statearr_31433_31518[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (1))){
var state_31425__$1 = state_31425;
var statearr_31434_31519 = state_31425__$1;
(statearr_31434_31519[(2)] = null);

(statearr_31434_31519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (24))){
var inst_31326 = (state_31425[(7)]);
var inst_31343 = (state_31425[(2)]);
var inst_31344 = cljs.core.next.call(null,inst_31326);
var inst_31306 = inst_31344;
var inst_31307 = null;
var inst_31308 = (0);
var inst_31309 = (0);
var state_31425__$1 = (function (){var statearr_31435 = state_31425;
(statearr_31435[(13)] = inst_31308);

(statearr_31435[(14)] = inst_31306);

(statearr_31435[(15)] = inst_31309);

(statearr_31435[(16)] = inst_31343);

(statearr_31435[(17)] = inst_31307);

return statearr_31435;
})();
var statearr_31436_31520 = state_31425__$1;
(statearr_31436_31520[(2)] = null);

(statearr_31436_31520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (39))){
var state_31425__$1 = state_31425;
var statearr_31440_31521 = state_31425__$1;
(statearr_31440_31521[(2)] = null);

(statearr_31440_31521[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (4))){
var inst_31297 = (state_31425[(10)]);
var inst_31297__$1 = (state_31425[(2)]);
var inst_31298 = (inst_31297__$1 == null);
var state_31425__$1 = (function (){var statearr_31441 = state_31425;
(statearr_31441[(10)] = inst_31297__$1);

return statearr_31441;
})();
if(cljs.core.truth_(inst_31298)){
var statearr_31442_31522 = state_31425__$1;
(statearr_31442_31522[(1)] = (5));

} else {
var statearr_31443_31523 = state_31425__$1;
(statearr_31443_31523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (15))){
var inst_31308 = (state_31425[(13)]);
var inst_31306 = (state_31425[(14)]);
var inst_31309 = (state_31425[(15)]);
var inst_31307 = (state_31425[(17)]);
var inst_31322 = (state_31425[(2)]);
var inst_31323 = (inst_31309 + (1));
var tmp31437 = inst_31308;
var tmp31438 = inst_31306;
var tmp31439 = inst_31307;
var inst_31306__$1 = tmp31438;
var inst_31307__$1 = tmp31439;
var inst_31308__$1 = tmp31437;
var inst_31309__$1 = inst_31323;
var state_31425__$1 = (function (){var statearr_31444 = state_31425;
(statearr_31444[(13)] = inst_31308__$1);

(statearr_31444[(18)] = inst_31322);

(statearr_31444[(14)] = inst_31306__$1);

(statearr_31444[(15)] = inst_31309__$1);

(statearr_31444[(17)] = inst_31307__$1);

return statearr_31444;
})();
var statearr_31445_31524 = state_31425__$1;
(statearr_31445_31524[(2)] = null);

(statearr_31445_31524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (21))){
var inst_31347 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31449_31525 = state_31425__$1;
(statearr_31449_31525[(2)] = inst_31347);

(statearr_31449_31525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (31))){
var inst_31373 = (state_31425[(9)]);
var inst_31377 = done.call(null,null);
var inst_31378 = cljs.core.async.untap_STAR_.call(null,m,inst_31373);
var state_31425__$1 = (function (){var statearr_31450 = state_31425;
(statearr_31450[(19)] = inst_31377);

return statearr_31450;
})();
var statearr_31451_31526 = state_31425__$1;
(statearr_31451_31526[(2)] = inst_31378);

(statearr_31451_31526[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (32))){
var inst_31365 = (state_31425[(20)]);
var inst_31367 = (state_31425[(21)]);
var inst_31366 = (state_31425[(11)]);
var inst_31368 = (state_31425[(12)]);
var inst_31380 = (state_31425[(2)]);
var inst_31381 = (inst_31368 + (1));
var tmp31446 = inst_31365;
var tmp31447 = inst_31367;
var tmp31448 = inst_31366;
var inst_31365__$1 = tmp31446;
var inst_31366__$1 = tmp31448;
var inst_31367__$1 = tmp31447;
var inst_31368__$1 = inst_31381;
var state_31425__$1 = (function (){var statearr_31452 = state_31425;
(statearr_31452[(22)] = inst_31380);

(statearr_31452[(20)] = inst_31365__$1);

(statearr_31452[(21)] = inst_31367__$1);

(statearr_31452[(11)] = inst_31366__$1);

(statearr_31452[(12)] = inst_31368__$1);

return statearr_31452;
})();
var statearr_31453_31527 = state_31425__$1;
(statearr_31453_31527[(2)] = null);

(statearr_31453_31527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (40))){
var inst_31393 = (state_31425[(23)]);
var inst_31397 = done.call(null,null);
var inst_31398 = cljs.core.async.untap_STAR_.call(null,m,inst_31393);
var state_31425__$1 = (function (){var statearr_31454 = state_31425;
(statearr_31454[(24)] = inst_31397);

return statearr_31454;
})();
var statearr_31455_31528 = state_31425__$1;
(statearr_31455_31528[(2)] = inst_31398);

(statearr_31455_31528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (33))){
var inst_31384 = (state_31425[(25)]);
var inst_31386 = cljs.core.chunked_seq_QMARK_.call(null,inst_31384);
var state_31425__$1 = state_31425;
if(inst_31386){
var statearr_31456_31529 = state_31425__$1;
(statearr_31456_31529[(1)] = (36));

} else {
var statearr_31457_31530 = state_31425__$1;
(statearr_31457_31530[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (13))){
var inst_31316 = (state_31425[(26)]);
var inst_31319 = cljs.core.async.close_BANG_.call(null,inst_31316);
var state_31425__$1 = state_31425;
var statearr_31458_31531 = state_31425__$1;
(statearr_31458_31531[(2)] = inst_31319);

(statearr_31458_31531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (22))){
var inst_31337 = (state_31425[(8)]);
var inst_31340 = cljs.core.async.close_BANG_.call(null,inst_31337);
var state_31425__$1 = state_31425;
var statearr_31459_31532 = state_31425__$1;
(statearr_31459_31532[(2)] = inst_31340);

(statearr_31459_31532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (36))){
var inst_31384 = (state_31425[(25)]);
var inst_31388 = cljs.core.chunk_first.call(null,inst_31384);
var inst_31389 = cljs.core.chunk_rest.call(null,inst_31384);
var inst_31390 = cljs.core.count.call(null,inst_31388);
var inst_31365 = inst_31389;
var inst_31366 = inst_31388;
var inst_31367 = inst_31390;
var inst_31368 = (0);
var state_31425__$1 = (function (){var statearr_31460 = state_31425;
(statearr_31460[(20)] = inst_31365);

(statearr_31460[(21)] = inst_31367);

(statearr_31460[(11)] = inst_31366);

(statearr_31460[(12)] = inst_31368);

return statearr_31460;
})();
var statearr_31461_31533 = state_31425__$1;
(statearr_31461_31533[(2)] = null);

(statearr_31461_31533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (41))){
var inst_31384 = (state_31425[(25)]);
var inst_31400 = (state_31425[(2)]);
var inst_31401 = cljs.core.next.call(null,inst_31384);
var inst_31365 = inst_31401;
var inst_31366 = null;
var inst_31367 = (0);
var inst_31368 = (0);
var state_31425__$1 = (function (){var statearr_31462 = state_31425;
(statearr_31462[(20)] = inst_31365);

(statearr_31462[(21)] = inst_31367);

(statearr_31462[(11)] = inst_31366);

(statearr_31462[(12)] = inst_31368);

(statearr_31462[(27)] = inst_31400);

return statearr_31462;
})();
var statearr_31463_31534 = state_31425__$1;
(statearr_31463_31534[(2)] = null);

(statearr_31463_31534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (43))){
var state_31425__$1 = state_31425;
var statearr_31464_31535 = state_31425__$1;
(statearr_31464_31535[(2)] = null);

(statearr_31464_31535[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (29))){
var inst_31409 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31465_31536 = state_31425__$1;
(statearr_31465_31536[(2)] = inst_31409);

(statearr_31465_31536[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (44))){
var inst_31418 = (state_31425[(2)]);
var state_31425__$1 = (function (){var statearr_31466 = state_31425;
(statearr_31466[(28)] = inst_31418);

return statearr_31466;
})();
var statearr_31467_31537 = state_31425__$1;
(statearr_31467_31537[(2)] = null);

(statearr_31467_31537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (6))){
var inst_31357 = (state_31425[(29)]);
var inst_31356 = cljs.core.deref.call(null,cs);
var inst_31357__$1 = cljs.core.keys.call(null,inst_31356);
var inst_31358 = cljs.core.count.call(null,inst_31357__$1);
var inst_31359 = cljs.core.reset_BANG_.call(null,dctr,inst_31358);
var inst_31364 = cljs.core.seq.call(null,inst_31357__$1);
var inst_31365 = inst_31364;
var inst_31366 = null;
var inst_31367 = (0);
var inst_31368 = (0);
var state_31425__$1 = (function (){var statearr_31468 = state_31425;
(statearr_31468[(20)] = inst_31365);

(statearr_31468[(21)] = inst_31367);

(statearr_31468[(11)] = inst_31366);

(statearr_31468[(30)] = inst_31359);

(statearr_31468[(29)] = inst_31357__$1);

(statearr_31468[(12)] = inst_31368);

return statearr_31468;
})();
var statearr_31469_31538 = state_31425__$1;
(statearr_31469_31538[(2)] = null);

(statearr_31469_31538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (28))){
var inst_31365 = (state_31425[(20)]);
var inst_31384 = (state_31425[(25)]);
var inst_31384__$1 = cljs.core.seq.call(null,inst_31365);
var state_31425__$1 = (function (){var statearr_31470 = state_31425;
(statearr_31470[(25)] = inst_31384__$1);

return statearr_31470;
})();
if(inst_31384__$1){
var statearr_31471_31539 = state_31425__$1;
(statearr_31471_31539[(1)] = (33));

} else {
var statearr_31472_31540 = state_31425__$1;
(statearr_31472_31540[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (25))){
var inst_31367 = (state_31425[(21)]);
var inst_31368 = (state_31425[(12)]);
var inst_31370 = (inst_31368 < inst_31367);
var inst_31371 = inst_31370;
var state_31425__$1 = state_31425;
if(cljs.core.truth_(inst_31371)){
var statearr_31473_31541 = state_31425__$1;
(statearr_31473_31541[(1)] = (27));

} else {
var statearr_31474_31542 = state_31425__$1;
(statearr_31474_31542[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (34))){
var state_31425__$1 = state_31425;
var statearr_31475_31543 = state_31425__$1;
(statearr_31475_31543[(2)] = null);

(statearr_31475_31543[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (17))){
var state_31425__$1 = state_31425;
var statearr_31476_31544 = state_31425__$1;
(statearr_31476_31544[(2)] = null);

(statearr_31476_31544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (3))){
var inst_31423 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31425__$1,inst_31423);
} else {
if((state_val_31426 === (12))){
var inst_31352 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31477_31545 = state_31425__$1;
(statearr_31477_31545[(2)] = inst_31352);

(statearr_31477_31545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (2))){
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31425__$1,(4),ch);
} else {
if((state_val_31426 === (23))){
var state_31425__$1 = state_31425;
var statearr_31478_31546 = state_31425__$1;
(statearr_31478_31546[(2)] = null);

(statearr_31478_31546[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (35))){
var inst_31407 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31479_31547 = state_31425__$1;
(statearr_31479_31547[(2)] = inst_31407);

(statearr_31479_31547[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (19))){
var inst_31326 = (state_31425[(7)]);
var inst_31330 = cljs.core.chunk_first.call(null,inst_31326);
var inst_31331 = cljs.core.chunk_rest.call(null,inst_31326);
var inst_31332 = cljs.core.count.call(null,inst_31330);
var inst_31306 = inst_31331;
var inst_31307 = inst_31330;
var inst_31308 = inst_31332;
var inst_31309 = (0);
var state_31425__$1 = (function (){var statearr_31480 = state_31425;
(statearr_31480[(13)] = inst_31308);

(statearr_31480[(14)] = inst_31306);

(statearr_31480[(15)] = inst_31309);

(statearr_31480[(17)] = inst_31307);

return statearr_31480;
})();
var statearr_31481_31548 = state_31425__$1;
(statearr_31481_31548[(2)] = null);

(statearr_31481_31548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (11))){
var inst_31306 = (state_31425[(14)]);
var inst_31326 = (state_31425[(7)]);
var inst_31326__$1 = cljs.core.seq.call(null,inst_31306);
var state_31425__$1 = (function (){var statearr_31482 = state_31425;
(statearr_31482[(7)] = inst_31326__$1);

return statearr_31482;
})();
if(inst_31326__$1){
var statearr_31483_31549 = state_31425__$1;
(statearr_31483_31549[(1)] = (16));

} else {
var statearr_31484_31550 = state_31425__$1;
(statearr_31484_31550[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (9))){
var inst_31354 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31485_31551 = state_31425__$1;
(statearr_31485_31551[(2)] = inst_31354);

(statearr_31485_31551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (5))){
var inst_31304 = cljs.core.deref.call(null,cs);
var inst_31305 = cljs.core.seq.call(null,inst_31304);
var inst_31306 = inst_31305;
var inst_31307 = null;
var inst_31308 = (0);
var inst_31309 = (0);
var state_31425__$1 = (function (){var statearr_31486 = state_31425;
(statearr_31486[(13)] = inst_31308);

(statearr_31486[(14)] = inst_31306);

(statearr_31486[(15)] = inst_31309);

(statearr_31486[(17)] = inst_31307);

return statearr_31486;
})();
var statearr_31487_31552 = state_31425__$1;
(statearr_31487_31552[(2)] = null);

(statearr_31487_31552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (14))){
var state_31425__$1 = state_31425;
var statearr_31488_31553 = state_31425__$1;
(statearr_31488_31553[(2)] = null);

(statearr_31488_31553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (45))){
var inst_31415 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31489_31554 = state_31425__$1;
(statearr_31489_31554[(2)] = inst_31415);

(statearr_31489_31554[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (26))){
var inst_31357 = (state_31425[(29)]);
var inst_31411 = (state_31425[(2)]);
var inst_31412 = cljs.core.seq.call(null,inst_31357);
var state_31425__$1 = (function (){var statearr_31490 = state_31425;
(statearr_31490[(31)] = inst_31411);

return statearr_31490;
})();
if(inst_31412){
var statearr_31491_31555 = state_31425__$1;
(statearr_31491_31555[(1)] = (42));

} else {
var statearr_31492_31556 = state_31425__$1;
(statearr_31492_31556[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (16))){
var inst_31326 = (state_31425[(7)]);
var inst_31328 = cljs.core.chunked_seq_QMARK_.call(null,inst_31326);
var state_31425__$1 = state_31425;
if(inst_31328){
var statearr_31493_31557 = state_31425__$1;
(statearr_31493_31557[(1)] = (19));

} else {
var statearr_31494_31558 = state_31425__$1;
(statearr_31494_31558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (38))){
var inst_31404 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31495_31559 = state_31425__$1;
(statearr_31495_31559[(2)] = inst_31404);

(statearr_31495_31559[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (30))){
var state_31425__$1 = state_31425;
var statearr_31496_31560 = state_31425__$1;
(statearr_31496_31560[(2)] = null);

(statearr_31496_31560[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (10))){
var inst_31309 = (state_31425[(15)]);
var inst_31307 = (state_31425[(17)]);
var inst_31315 = cljs.core._nth.call(null,inst_31307,inst_31309);
var inst_31316 = cljs.core.nth.call(null,inst_31315,(0),null);
var inst_31317 = cljs.core.nth.call(null,inst_31315,(1),null);
var state_31425__$1 = (function (){var statearr_31497 = state_31425;
(statearr_31497[(26)] = inst_31316);

return statearr_31497;
})();
if(cljs.core.truth_(inst_31317)){
var statearr_31498_31561 = state_31425__$1;
(statearr_31498_31561[(1)] = (13));

} else {
var statearr_31499_31562 = state_31425__$1;
(statearr_31499_31562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (18))){
var inst_31350 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31500_31563 = state_31425__$1;
(statearr_31500_31563[(2)] = inst_31350);

(statearr_31500_31563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (42))){
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31425__$1,(45),dchan);
} else {
if((state_val_31426 === (37))){
var inst_31393 = (state_31425[(23)]);
var inst_31384 = (state_31425[(25)]);
var inst_31297 = (state_31425[(10)]);
var inst_31393__$1 = cljs.core.first.call(null,inst_31384);
var inst_31394 = cljs.core.async.put_BANG_.call(null,inst_31393__$1,inst_31297,done);
var state_31425__$1 = (function (){var statearr_31501 = state_31425;
(statearr_31501[(23)] = inst_31393__$1);

return statearr_31501;
})();
if(cljs.core.truth_(inst_31394)){
var statearr_31502_31564 = state_31425__$1;
(statearr_31502_31564[(1)] = (39));

} else {
var statearr_31503_31565 = state_31425__$1;
(statearr_31503_31565[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (8))){
var inst_31308 = (state_31425[(13)]);
var inst_31309 = (state_31425[(15)]);
var inst_31311 = (inst_31309 < inst_31308);
var inst_31312 = inst_31311;
var state_31425__$1 = state_31425;
if(cljs.core.truth_(inst_31312)){
var statearr_31504_31566 = state_31425__$1;
(statearr_31504_31566[(1)] = (10));

} else {
var statearr_31505_31567 = state_31425__$1;
(statearr_31505_31567[(1)] = (11));

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
});})(c__19254__auto___31513,cs,m,dchan,dctr,done))
;
return ((function (switch__19198__auto__,c__19254__auto___31513,cs,m,dchan,dctr,done){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_31509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31509[(0)] = state_machine__19199__auto__);

(statearr_31509[(1)] = (1));

return statearr_31509;
});
var state_machine__19199__auto____1 = (function (state_31425){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_31425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e31510){if((e31510 instanceof Object)){
var ex__19202__auto__ = e31510;
var statearr_31511_31568 = state_31425;
(statearr_31511_31568[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31569 = state_31425;
state_31425 = G__31569;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_31425){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_31425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___31513,cs,m,dchan,dctr,done))
})();
var state__19256__auto__ = (function (){var statearr_31512 = f__19255__auto__.call(null);
(statearr_31512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___31513);

return statearr_31512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___31513,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj31571 = {};
return obj31571;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__31572){
var map__31577 = p__31572;
var map__31577__$1 = ((cljs.core.seq_QMARK_.call(null,map__31577))?cljs.core.apply.call(null,cljs.core.hash_map,map__31577):map__31577);
var opts = map__31577__$1;
var statearr_31578_31581 = state;
(statearr_31578_31581[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31577,map__31577__$1,opts){
return (function (val){
var statearr_31579_31582 = state;
(statearr_31579_31582[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31577,map__31577__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_31580_31583 = state;
(statearr_31580_31583[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__31572 = null;
if (arguments.length > 3) {
var G__31584__i = 0, G__31584__a = new Array(arguments.length -  3);
while (G__31584__i < G__31584__a.length) {G__31584__a[G__31584__i] = arguments[G__31584__i + 3]; ++G__31584__i;}
  p__31572 = new cljs.core.IndexedSeq(G__31584__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__31572);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__31585){
var state = cljs.core.first(arglist__31585);
arglist__31585 = cljs.core.next(arglist__31585);
var cont_block = cljs.core.first(arglist__31585);
arglist__31585 = cljs.core.next(arglist__31585);
var ports = cljs.core.first(arglist__31585);
var p__31572 = cljs.core.rest(arglist__31585);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__31572);
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
if(typeof cljs.core.async.t31705 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31705 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31706){
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
this.meta31706 = meta31706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31705.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31705.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31705.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31705.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31705.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31705.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t31705.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31707){
var self__ = this;
var _31707__$1 = this;
return self__.meta31706;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31707,meta31706__$1){
var self__ = this;
var _31707__$1 = this;
return (new cljs.core.async.t31705(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31706__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31705.cljs$lang$type = true;

cljs.core.async.t31705.cljs$lang$ctorStr = "cljs.core.async/t31705";

cljs.core.async.t31705.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31705");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31705 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31705(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31706){
return (new cljs.core.async.t31705(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31706));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31705(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19254__auto___31824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___31824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___31824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31777){
var state_val_31778 = (state_31777[(1)]);
if((state_val_31778 === (7))){
var inst_31721 = (state_31777[(7)]);
var inst_31726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31721);
var state_31777__$1 = state_31777;
var statearr_31779_31825 = state_31777__$1;
(statearr_31779_31825[(2)] = inst_31726);

(statearr_31779_31825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (20))){
var inst_31736 = (state_31777[(8)]);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31777__$1,(23),out,inst_31736);
} else {
if((state_val_31778 === (1))){
var inst_31711 = (state_31777[(9)]);
var inst_31711__$1 = calc_state.call(null);
var inst_31712 = cljs.core.seq_QMARK_.call(null,inst_31711__$1);
var state_31777__$1 = (function (){var statearr_31780 = state_31777;
(statearr_31780[(9)] = inst_31711__$1);

return statearr_31780;
})();
if(inst_31712){
var statearr_31781_31826 = state_31777__$1;
(statearr_31781_31826[(1)] = (2));

} else {
var statearr_31782_31827 = state_31777__$1;
(statearr_31782_31827[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (24))){
var inst_31729 = (state_31777[(10)]);
var inst_31721 = inst_31729;
var state_31777__$1 = (function (){var statearr_31783 = state_31777;
(statearr_31783[(7)] = inst_31721);

return statearr_31783;
})();
var statearr_31784_31828 = state_31777__$1;
(statearr_31784_31828[(2)] = null);

(statearr_31784_31828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (4))){
var inst_31711 = (state_31777[(9)]);
var inst_31717 = (state_31777[(2)]);
var inst_31718 = cljs.core.get.call(null,inst_31717,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31719 = cljs.core.get.call(null,inst_31717,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31720 = cljs.core.get.call(null,inst_31717,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31721 = inst_31711;
var state_31777__$1 = (function (){var statearr_31785 = state_31777;
(statearr_31785[(11)] = inst_31720);

(statearr_31785[(7)] = inst_31721);

(statearr_31785[(12)] = inst_31718);

(statearr_31785[(13)] = inst_31719);

return statearr_31785;
})();
var statearr_31786_31829 = state_31777__$1;
(statearr_31786_31829[(2)] = null);

(statearr_31786_31829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (15))){
var state_31777__$1 = state_31777;
var statearr_31787_31830 = state_31777__$1;
(statearr_31787_31830[(2)] = null);

(statearr_31787_31830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (21))){
var inst_31729 = (state_31777[(10)]);
var inst_31721 = inst_31729;
var state_31777__$1 = (function (){var statearr_31788 = state_31777;
(statearr_31788[(7)] = inst_31721);

return statearr_31788;
})();
var statearr_31789_31831 = state_31777__$1;
(statearr_31789_31831[(2)] = null);

(statearr_31789_31831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (13))){
var inst_31773 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31790_31832 = state_31777__$1;
(statearr_31790_31832[(2)] = inst_31773);

(statearr_31790_31832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (22))){
var inst_31771 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31791_31833 = state_31777__$1;
(statearr_31791_31833[(2)] = inst_31771);

(statearr_31791_31833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (6))){
var inst_31775 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31777__$1,inst_31775);
} else {
if((state_val_31778 === (25))){
var state_31777__$1 = state_31777;
var statearr_31792_31834 = state_31777__$1;
(statearr_31792_31834[(2)] = null);

(statearr_31792_31834[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (17))){
var inst_31751 = (state_31777[(14)]);
var state_31777__$1 = state_31777;
var statearr_31793_31835 = state_31777__$1;
(statearr_31793_31835[(2)] = inst_31751);

(statearr_31793_31835[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (3))){
var inst_31711 = (state_31777[(9)]);
var state_31777__$1 = state_31777;
var statearr_31794_31836 = state_31777__$1;
(statearr_31794_31836[(2)] = inst_31711);

(statearr_31794_31836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (12))){
var inst_31737 = (state_31777[(15)]);
var inst_31732 = (state_31777[(16)]);
var inst_31751 = (state_31777[(14)]);
var inst_31751__$1 = inst_31732.call(null,inst_31737);
var state_31777__$1 = (function (){var statearr_31795 = state_31777;
(statearr_31795[(14)] = inst_31751__$1);

return statearr_31795;
})();
if(cljs.core.truth_(inst_31751__$1)){
var statearr_31796_31837 = state_31777__$1;
(statearr_31796_31837[(1)] = (17));

} else {
var statearr_31797_31838 = state_31777__$1;
(statearr_31797_31838[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (2))){
var inst_31711 = (state_31777[(9)]);
var inst_31714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31711);
var state_31777__$1 = state_31777;
var statearr_31798_31839 = state_31777__$1;
(statearr_31798_31839[(2)] = inst_31714);

(statearr_31798_31839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (23))){
var inst_31762 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
if(cljs.core.truth_(inst_31762)){
var statearr_31799_31840 = state_31777__$1;
(statearr_31799_31840[(1)] = (24));

} else {
var statearr_31800_31841 = state_31777__$1;
(statearr_31800_31841[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (19))){
var inst_31759 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
if(cljs.core.truth_(inst_31759)){
var statearr_31801_31842 = state_31777__$1;
(statearr_31801_31842[(1)] = (20));

} else {
var statearr_31802_31843 = state_31777__$1;
(statearr_31802_31843[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (11))){
var inst_31736 = (state_31777[(8)]);
var inst_31742 = (inst_31736 == null);
var state_31777__$1 = state_31777;
if(cljs.core.truth_(inst_31742)){
var statearr_31803_31844 = state_31777__$1;
(statearr_31803_31844[(1)] = (14));

} else {
var statearr_31804_31845 = state_31777__$1;
(statearr_31804_31845[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (9))){
var inst_31729 = (state_31777[(10)]);
var inst_31729__$1 = (state_31777[(2)]);
var inst_31730 = cljs.core.get.call(null,inst_31729__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31731 = cljs.core.get.call(null,inst_31729__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31732 = cljs.core.get.call(null,inst_31729__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31777__$1 = (function (){var statearr_31805 = state_31777;
(statearr_31805[(16)] = inst_31732);

(statearr_31805[(17)] = inst_31731);

(statearr_31805[(10)] = inst_31729__$1);

return statearr_31805;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31777__$1,(10),inst_31730);
} else {
if((state_val_31778 === (5))){
var inst_31721 = (state_31777[(7)]);
var inst_31724 = cljs.core.seq_QMARK_.call(null,inst_31721);
var state_31777__$1 = state_31777;
if(inst_31724){
var statearr_31806_31846 = state_31777__$1;
(statearr_31806_31846[(1)] = (7));

} else {
var statearr_31807_31847 = state_31777__$1;
(statearr_31807_31847[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (14))){
var inst_31737 = (state_31777[(15)]);
var inst_31744 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31737);
var state_31777__$1 = state_31777;
var statearr_31808_31848 = state_31777__$1;
(statearr_31808_31848[(2)] = inst_31744);

(statearr_31808_31848[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (26))){
var inst_31767 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31809_31849 = state_31777__$1;
(statearr_31809_31849[(2)] = inst_31767);

(statearr_31809_31849[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (16))){
var inst_31747 = (state_31777[(2)]);
var inst_31748 = calc_state.call(null);
var inst_31721 = inst_31748;
var state_31777__$1 = (function (){var statearr_31810 = state_31777;
(statearr_31810[(7)] = inst_31721);

(statearr_31810[(18)] = inst_31747);

return statearr_31810;
})();
var statearr_31811_31850 = state_31777__$1;
(statearr_31811_31850[(2)] = null);

(statearr_31811_31850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (10))){
var inst_31737 = (state_31777[(15)]);
var inst_31736 = (state_31777[(8)]);
var inst_31735 = (state_31777[(2)]);
var inst_31736__$1 = cljs.core.nth.call(null,inst_31735,(0),null);
var inst_31737__$1 = cljs.core.nth.call(null,inst_31735,(1),null);
var inst_31738 = (inst_31736__$1 == null);
var inst_31739 = cljs.core._EQ_.call(null,inst_31737__$1,change);
var inst_31740 = (inst_31738) || (inst_31739);
var state_31777__$1 = (function (){var statearr_31812 = state_31777;
(statearr_31812[(15)] = inst_31737__$1);

(statearr_31812[(8)] = inst_31736__$1);

return statearr_31812;
})();
if(cljs.core.truth_(inst_31740)){
var statearr_31813_31851 = state_31777__$1;
(statearr_31813_31851[(1)] = (11));

} else {
var statearr_31814_31852 = state_31777__$1;
(statearr_31814_31852[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (18))){
var inst_31737 = (state_31777[(15)]);
var inst_31732 = (state_31777[(16)]);
var inst_31731 = (state_31777[(17)]);
var inst_31754 = cljs.core.empty_QMARK_.call(null,inst_31732);
var inst_31755 = inst_31731.call(null,inst_31737);
var inst_31756 = cljs.core.not.call(null,inst_31755);
var inst_31757 = (inst_31754) && (inst_31756);
var state_31777__$1 = state_31777;
var statearr_31815_31853 = state_31777__$1;
(statearr_31815_31853[(2)] = inst_31757);

(statearr_31815_31853[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (8))){
var inst_31721 = (state_31777[(7)]);
var state_31777__$1 = state_31777;
var statearr_31816_31854 = state_31777__$1;
(statearr_31816_31854[(2)] = inst_31721);

(statearr_31816_31854[(1)] = (9));


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
});})(c__19254__auto___31824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19198__auto__,c__19254__auto___31824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_31820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31820[(0)] = state_machine__19199__auto__);

(statearr_31820[(1)] = (1));

return statearr_31820;
});
var state_machine__19199__auto____1 = (function (state_31777){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_31777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e31821){if((e31821 instanceof Object)){
var ex__19202__auto__ = e31821;
var statearr_31822_31855 = state_31777;
(statearr_31822_31855[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31856 = state_31777;
state_31777 = G__31856;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_31777){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_31777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___31824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19256__auto__ = (function (){var statearr_31823 = f__19255__auto__.call(null);
(statearr_31823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___31824);

return statearr_31823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___31824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj31858 = {};
return obj31858;
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
return (function (p1__31859_SHARP_){
if(cljs.core.truth_(p1__31859_SHARP_.call(null,topic))){
return p1__31859_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31859_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31982 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31982 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31983){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31983 = meta31983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31982.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31982.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31982.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t31982.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31982.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31982.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31984){
var self__ = this;
var _31984__$1 = this;
return self__.meta31983;
});})(mults,ensure_mult))
;

cljs.core.async.t31982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31984,meta31983__$1){
var self__ = this;
var _31984__$1 = this;
return (new cljs.core.async.t31982(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31983__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31982.cljs$lang$type = true;

cljs.core.async.t31982.cljs$lang$ctorStr = "cljs.core.async/t31982";

cljs.core.async.t31982.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31982");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31982 = ((function (mults,ensure_mult){
return (function __GT_t31982(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31983){
return (new cljs.core.async.t31982(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31983));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31982(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19254__auto___32104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___32104,mults,ensure_mult,p){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___32104,mults,ensure_mult,p){
return (function (state_32056){
var state_val_32057 = (state_32056[(1)]);
if((state_val_32057 === (7))){
var inst_32052 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32058_32105 = state_32056__$1;
(statearr_32058_32105[(2)] = inst_32052);

(statearr_32058_32105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (20))){
var state_32056__$1 = state_32056;
var statearr_32059_32106 = state_32056__$1;
(statearr_32059_32106[(2)] = null);

(statearr_32059_32106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (1))){
var state_32056__$1 = state_32056;
var statearr_32060_32107 = state_32056__$1;
(statearr_32060_32107[(2)] = null);

(statearr_32060_32107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (24))){
var inst_32035 = (state_32056[(7)]);
var inst_32044 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32035);
var state_32056__$1 = state_32056;
var statearr_32061_32108 = state_32056__$1;
(statearr_32061_32108[(2)] = inst_32044);

(statearr_32061_32108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (4))){
var inst_31987 = (state_32056[(8)]);
var inst_31987__$1 = (state_32056[(2)]);
var inst_31988 = (inst_31987__$1 == null);
var state_32056__$1 = (function (){var statearr_32062 = state_32056;
(statearr_32062[(8)] = inst_31987__$1);

return statearr_32062;
})();
if(cljs.core.truth_(inst_31988)){
var statearr_32063_32109 = state_32056__$1;
(statearr_32063_32109[(1)] = (5));

} else {
var statearr_32064_32110 = state_32056__$1;
(statearr_32064_32110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (15))){
var inst_32029 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32065_32111 = state_32056__$1;
(statearr_32065_32111[(2)] = inst_32029);

(statearr_32065_32111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (21))){
var inst_32049 = (state_32056[(2)]);
var state_32056__$1 = (function (){var statearr_32066 = state_32056;
(statearr_32066[(9)] = inst_32049);

return statearr_32066;
})();
var statearr_32067_32112 = state_32056__$1;
(statearr_32067_32112[(2)] = null);

(statearr_32067_32112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (13))){
var inst_32011 = (state_32056[(10)]);
var inst_32013 = cljs.core.chunked_seq_QMARK_.call(null,inst_32011);
var state_32056__$1 = state_32056;
if(inst_32013){
var statearr_32068_32113 = state_32056__$1;
(statearr_32068_32113[(1)] = (16));

} else {
var statearr_32069_32114 = state_32056__$1;
(statearr_32069_32114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (22))){
var inst_32041 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
if(cljs.core.truth_(inst_32041)){
var statearr_32070_32115 = state_32056__$1;
(statearr_32070_32115[(1)] = (23));

} else {
var statearr_32071_32116 = state_32056__$1;
(statearr_32071_32116[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (6))){
var inst_32035 = (state_32056[(7)]);
var inst_31987 = (state_32056[(8)]);
var inst_32037 = (state_32056[(11)]);
var inst_32035__$1 = topic_fn.call(null,inst_31987);
var inst_32036 = cljs.core.deref.call(null,mults);
var inst_32037__$1 = cljs.core.get.call(null,inst_32036,inst_32035__$1);
var state_32056__$1 = (function (){var statearr_32072 = state_32056;
(statearr_32072[(7)] = inst_32035__$1);

(statearr_32072[(11)] = inst_32037__$1);

return statearr_32072;
})();
if(cljs.core.truth_(inst_32037__$1)){
var statearr_32073_32117 = state_32056__$1;
(statearr_32073_32117[(1)] = (19));

} else {
var statearr_32074_32118 = state_32056__$1;
(statearr_32074_32118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (25))){
var inst_32046 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32075_32119 = state_32056__$1;
(statearr_32075_32119[(2)] = inst_32046);

(statearr_32075_32119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (17))){
var inst_32011 = (state_32056[(10)]);
var inst_32020 = cljs.core.first.call(null,inst_32011);
var inst_32021 = cljs.core.async.muxch_STAR_.call(null,inst_32020);
var inst_32022 = cljs.core.async.close_BANG_.call(null,inst_32021);
var inst_32023 = cljs.core.next.call(null,inst_32011);
var inst_31997 = inst_32023;
var inst_31998 = null;
var inst_31999 = (0);
var inst_32000 = (0);
var state_32056__$1 = (function (){var statearr_32076 = state_32056;
(statearr_32076[(12)] = inst_31997);

(statearr_32076[(13)] = inst_32000);

(statearr_32076[(14)] = inst_31999);

(statearr_32076[(15)] = inst_32022);

(statearr_32076[(16)] = inst_31998);

return statearr_32076;
})();
var statearr_32077_32120 = state_32056__$1;
(statearr_32077_32120[(2)] = null);

(statearr_32077_32120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (3))){
var inst_32054 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32056__$1,inst_32054);
} else {
if((state_val_32057 === (12))){
var inst_32031 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32078_32121 = state_32056__$1;
(statearr_32078_32121[(2)] = inst_32031);

(statearr_32078_32121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (2))){
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(4),ch);
} else {
if((state_val_32057 === (23))){
var state_32056__$1 = state_32056;
var statearr_32079_32122 = state_32056__$1;
(statearr_32079_32122[(2)] = null);

(statearr_32079_32122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (19))){
var inst_31987 = (state_32056[(8)]);
var inst_32037 = (state_32056[(11)]);
var inst_32039 = cljs.core.async.muxch_STAR_.call(null,inst_32037);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32056__$1,(22),inst_32039,inst_31987);
} else {
if((state_val_32057 === (11))){
var inst_31997 = (state_32056[(12)]);
var inst_32011 = (state_32056[(10)]);
var inst_32011__$1 = cljs.core.seq.call(null,inst_31997);
var state_32056__$1 = (function (){var statearr_32080 = state_32056;
(statearr_32080[(10)] = inst_32011__$1);

return statearr_32080;
})();
if(inst_32011__$1){
var statearr_32081_32123 = state_32056__$1;
(statearr_32081_32123[(1)] = (13));

} else {
var statearr_32082_32124 = state_32056__$1;
(statearr_32082_32124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (9))){
var inst_32033 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32083_32125 = state_32056__$1;
(statearr_32083_32125[(2)] = inst_32033);

(statearr_32083_32125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (5))){
var inst_31994 = cljs.core.deref.call(null,mults);
var inst_31995 = cljs.core.vals.call(null,inst_31994);
var inst_31996 = cljs.core.seq.call(null,inst_31995);
var inst_31997 = inst_31996;
var inst_31998 = null;
var inst_31999 = (0);
var inst_32000 = (0);
var state_32056__$1 = (function (){var statearr_32084 = state_32056;
(statearr_32084[(12)] = inst_31997);

(statearr_32084[(13)] = inst_32000);

(statearr_32084[(14)] = inst_31999);

(statearr_32084[(16)] = inst_31998);

return statearr_32084;
})();
var statearr_32085_32126 = state_32056__$1;
(statearr_32085_32126[(2)] = null);

(statearr_32085_32126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (14))){
var state_32056__$1 = state_32056;
var statearr_32089_32127 = state_32056__$1;
(statearr_32089_32127[(2)] = null);

(statearr_32089_32127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (16))){
var inst_32011 = (state_32056[(10)]);
var inst_32015 = cljs.core.chunk_first.call(null,inst_32011);
var inst_32016 = cljs.core.chunk_rest.call(null,inst_32011);
var inst_32017 = cljs.core.count.call(null,inst_32015);
var inst_31997 = inst_32016;
var inst_31998 = inst_32015;
var inst_31999 = inst_32017;
var inst_32000 = (0);
var state_32056__$1 = (function (){var statearr_32090 = state_32056;
(statearr_32090[(12)] = inst_31997);

(statearr_32090[(13)] = inst_32000);

(statearr_32090[(14)] = inst_31999);

(statearr_32090[(16)] = inst_31998);

return statearr_32090;
})();
var statearr_32091_32128 = state_32056__$1;
(statearr_32091_32128[(2)] = null);

(statearr_32091_32128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (10))){
var inst_31997 = (state_32056[(12)]);
var inst_32000 = (state_32056[(13)]);
var inst_31999 = (state_32056[(14)]);
var inst_31998 = (state_32056[(16)]);
var inst_32005 = cljs.core._nth.call(null,inst_31998,inst_32000);
var inst_32006 = cljs.core.async.muxch_STAR_.call(null,inst_32005);
var inst_32007 = cljs.core.async.close_BANG_.call(null,inst_32006);
var inst_32008 = (inst_32000 + (1));
var tmp32086 = inst_31997;
var tmp32087 = inst_31999;
var tmp32088 = inst_31998;
var inst_31997__$1 = tmp32086;
var inst_31998__$1 = tmp32088;
var inst_31999__$1 = tmp32087;
var inst_32000__$1 = inst_32008;
var state_32056__$1 = (function (){var statearr_32092 = state_32056;
(statearr_32092[(12)] = inst_31997__$1);

(statearr_32092[(13)] = inst_32000__$1);

(statearr_32092[(14)] = inst_31999__$1);

(statearr_32092[(17)] = inst_32007);

(statearr_32092[(16)] = inst_31998__$1);

return statearr_32092;
})();
var statearr_32093_32129 = state_32056__$1;
(statearr_32093_32129[(2)] = null);

(statearr_32093_32129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (18))){
var inst_32026 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32094_32130 = state_32056__$1;
(statearr_32094_32130[(2)] = inst_32026);

(statearr_32094_32130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (8))){
var inst_32000 = (state_32056[(13)]);
var inst_31999 = (state_32056[(14)]);
var inst_32002 = (inst_32000 < inst_31999);
var inst_32003 = inst_32002;
var state_32056__$1 = state_32056;
if(cljs.core.truth_(inst_32003)){
var statearr_32095_32131 = state_32056__$1;
(statearr_32095_32131[(1)] = (10));

} else {
var statearr_32096_32132 = state_32056__$1;
(statearr_32096_32132[(1)] = (11));

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
});})(c__19254__auto___32104,mults,ensure_mult,p))
;
return ((function (switch__19198__auto__,c__19254__auto___32104,mults,ensure_mult,p){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_32100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32100[(0)] = state_machine__19199__auto__);

(statearr_32100[(1)] = (1));

return statearr_32100;
});
var state_machine__19199__auto____1 = (function (state_32056){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_32056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e32101){if((e32101 instanceof Object)){
var ex__19202__auto__ = e32101;
var statearr_32102_32133 = state_32056;
(statearr_32102_32133[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32134 = state_32056;
state_32056 = G__32134;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_32056){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_32056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___32104,mults,ensure_mult,p))
})();
var state__19256__auto__ = (function (){var statearr_32103 = f__19255__auto__.call(null);
(statearr_32103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___32104);

return statearr_32103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___32104,mults,ensure_mult,p))
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
var c__19254__auto___32271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___32271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___32271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32241){
var state_val_32242 = (state_32241[(1)]);
if((state_val_32242 === (7))){
var state_32241__$1 = state_32241;
var statearr_32243_32272 = state_32241__$1;
(statearr_32243_32272[(2)] = null);

(statearr_32243_32272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (1))){
var state_32241__$1 = state_32241;
var statearr_32244_32273 = state_32241__$1;
(statearr_32244_32273[(2)] = null);

(statearr_32244_32273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (4))){
var inst_32205 = (state_32241[(7)]);
var inst_32207 = (inst_32205 < cnt);
var state_32241__$1 = state_32241;
if(cljs.core.truth_(inst_32207)){
var statearr_32245_32274 = state_32241__$1;
(statearr_32245_32274[(1)] = (6));

} else {
var statearr_32246_32275 = state_32241__$1;
(statearr_32246_32275[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (15))){
var inst_32237 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32247_32276 = state_32241__$1;
(statearr_32247_32276[(2)] = inst_32237);

(statearr_32247_32276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (13))){
var inst_32230 = cljs.core.async.close_BANG_.call(null,out);
var state_32241__$1 = state_32241;
var statearr_32248_32277 = state_32241__$1;
(statearr_32248_32277[(2)] = inst_32230);

(statearr_32248_32277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (6))){
var state_32241__$1 = state_32241;
var statearr_32249_32278 = state_32241__$1;
(statearr_32249_32278[(2)] = null);

(statearr_32249_32278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (3))){
var inst_32239 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32241__$1,inst_32239);
} else {
if((state_val_32242 === (12))){
var inst_32227 = (state_32241[(8)]);
var inst_32227__$1 = (state_32241[(2)]);
var inst_32228 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32227__$1);
var state_32241__$1 = (function (){var statearr_32250 = state_32241;
(statearr_32250[(8)] = inst_32227__$1);

return statearr_32250;
})();
if(cljs.core.truth_(inst_32228)){
var statearr_32251_32279 = state_32241__$1;
(statearr_32251_32279[(1)] = (13));

} else {
var statearr_32252_32280 = state_32241__$1;
(statearr_32252_32280[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (2))){
var inst_32204 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32205 = (0);
var state_32241__$1 = (function (){var statearr_32253 = state_32241;
(statearr_32253[(9)] = inst_32204);

(statearr_32253[(7)] = inst_32205);

return statearr_32253;
})();
var statearr_32254_32281 = state_32241__$1;
(statearr_32254_32281[(2)] = null);

(statearr_32254_32281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (11))){
var inst_32205 = (state_32241[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32241,(10),Object,null,(9));
var inst_32214 = chs__$1.call(null,inst_32205);
var inst_32215 = done.call(null,inst_32205);
var inst_32216 = cljs.core.async.take_BANG_.call(null,inst_32214,inst_32215);
var state_32241__$1 = state_32241;
var statearr_32255_32282 = state_32241__$1;
(statearr_32255_32282[(2)] = inst_32216);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32241__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (9))){
var inst_32205 = (state_32241[(7)]);
var inst_32218 = (state_32241[(2)]);
var inst_32219 = (inst_32205 + (1));
var inst_32205__$1 = inst_32219;
var state_32241__$1 = (function (){var statearr_32256 = state_32241;
(statearr_32256[(10)] = inst_32218);

(statearr_32256[(7)] = inst_32205__$1);

return statearr_32256;
})();
var statearr_32257_32283 = state_32241__$1;
(statearr_32257_32283[(2)] = null);

(statearr_32257_32283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (5))){
var inst_32225 = (state_32241[(2)]);
var state_32241__$1 = (function (){var statearr_32258 = state_32241;
(statearr_32258[(11)] = inst_32225);

return statearr_32258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32241__$1,(12),dchan);
} else {
if((state_val_32242 === (14))){
var inst_32227 = (state_32241[(8)]);
var inst_32232 = cljs.core.apply.call(null,f,inst_32227);
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32241__$1,(16),out,inst_32232);
} else {
if((state_val_32242 === (16))){
var inst_32234 = (state_32241[(2)]);
var state_32241__$1 = (function (){var statearr_32259 = state_32241;
(statearr_32259[(12)] = inst_32234);

return statearr_32259;
})();
var statearr_32260_32284 = state_32241__$1;
(statearr_32260_32284[(2)] = null);

(statearr_32260_32284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (10))){
var inst_32209 = (state_32241[(2)]);
var inst_32210 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32241__$1 = (function (){var statearr_32261 = state_32241;
(statearr_32261[(13)] = inst_32209);

return statearr_32261;
})();
var statearr_32262_32285 = state_32241__$1;
(statearr_32262_32285[(2)] = inst_32210);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32241__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (8))){
var inst_32223 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32263_32286 = state_32241__$1;
(statearr_32263_32286[(2)] = inst_32223);

(statearr_32263_32286[(1)] = (5));


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
});})(c__19254__auto___32271,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19198__auto__,c__19254__auto___32271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_32267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32267[(0)] = state_machine__19199__auto__);

(statearr_32267[(1)] = (1));

return statearr_32267;
});
var state_machine__19199__auto____1 = (function (state_32241){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_32241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e32268){if((e32268 instanceof Object)){
var ex__19202__auto__ = e32268;
var statearr_32269_32287 = state_32241;
(statearr_32269_32287[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32288 = state_32241;
state_32241 = G__32288;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_32241){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_32241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___32271,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19256__auto__ = (function (){var statearr_32270 = f__19255__auto__.call(null);
(statearr_32270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___32271);

return statearr_32270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___32271,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__19254__auto___32396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___32396,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___32396,out){
return (function (state_32372){
var state_val_32373 = (state_32372[(1)]);
if((state_val_32373 === (7))){
var inst_32351 = (state_32372[(7)]);
var inst_32352 = (state_32372[(8)]);
var inst_32351__$1 = (state_32372[(2)]);
var inst_32352__$1 = cljs.core.nth.call(null,inst_32351__$1,(0),null);
var inst_32353 = cljs.core.nth.call(null,inst_32351__$1,(1),null);
var inst_32354 = (inst_32352__$1 == null);
var state_32372__$1 = (function (){var statearr_32374 = state_32372;
(statearr_32374[(7)] = inst_32351__$1);

(statearr_32374[(8)] = inst_32352__$1);

(statearr_32374[(9)] = inst_32353);

return statearr_32374;
})();
if(cljs.core.truth_(inst_32354)){
var statearr_32375_32397 = state_32372__$1;
(statearr_32375_32397[(1)] = (8));

} else {
var statearr_32376_32398 = state_32372__$1;
(statearr_32376_32398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (1))){
var inst_32343 = cljs.core.vec.call(null,chs);
var inst_32344 = inst_32343;
var state_32372__$1 = (function (){var statearr_32377 = state_32372;
(statearr_32377[(10)] = inst_32344);

return statearr_32377;
})();
var statearr_32378_32399 = state_32372__$1;
(statearr_32378_32399[(2)] = null);

(statearr_32378_32399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (4))){
var inst_32344 = (state_32372[(10)]);
var state_32372__$1 = state_32372;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32372__$1,(7),inst_32344);
} else {
if((state_val_32373 === (6))){
var inst_32368 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
var statearr_32379_32400 = state_32372__$1;
(statearr_32379_32400[(2)] = inst_32368);

(statearr_32379_32400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (3))){
var inst_32370 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32372__$1,inst_32370);
} else {
if((state_val_32373 === (2))){
var inst_32344 = (state_32372[(10)]);
var inst_32346 = cljs.core.count.call(null,inst_32344);
var inst_32347 = (inst_32346 > (0));
var state_32372__$1 = state_32372;
if(cljs.core.truth_(inst_32347)){
var statearr_32381_32401 = state_32372__$1;
(statearr_32381_32401[(1)] = (4));

} else {
var statearr_32382_32402 = state_32372__$1;
(statearr_32382_32402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (11))){
var inst_32344 = (state_32372[(10)]);
var inst_32361 = (state_32372[(2)]);
var tmp32380 = inst_32344;
var inst_32344__$1 = tmp32380;
var state_32372__$1 = (function (){var statearr_32383 = state_32372;
(statearr_32383[(10)] = inst_32344__$1);

(statearr_32383[(11)] = inst_32361);

return statearr_32383;
})();
var statearr_32384_32403 = state_32372__$1;
(statearr_32384_32403[(2)] = null);

(statearr_32384_32403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (9))){
var inst_32352 = (state_32372[(8)]);
var state_32372__$1 = state_32372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32372__$1,(11),out,inst_32352);
} else {
if((state_val_32373 === (5))){
var inst_32366 = cljs.core.async.close_BANG_.call(null,out);
var state_32372__$1 = state_32372;
var statearr_32385_32404 = state_32372__$1;
(statearr_32385_32404[(2)] = inst_32366);

(statearr_32385_32404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (10))){
var inst_32364 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
var statearr_32386_32405 = state_32372__$1;
(statearr_32386_32405[(2)] = inst_32364);

(statearr_32386_32405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (8))){
var inst_32344 = (state_32372[(10)]);
var inst_32351 = (state_32372[(7)]);
var inst_32352 = (state_32372[(8)]);
var inst_32353 = (state_32372[(9)]);
var inst_32356 = (function (){var c = inst_32353;
var v = inst_32352;
var vec__32349 = inst_32351;
var cs = inst_32344;
return ((function (c,v,vec__32349,cs,inst_32344,inst_32351,inst_32352,inst_32353,state_val_32373,c__19254__auto___32396,out){
return (function (p1__32289_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32289_SHARP_);
});
;})(c,v,vec__32349,cs,inst_32344,inst_32351,inst_32352,inst_32353,state_val_32373,c__19254__auto___32396,out))
})();
var inst_32357 = cljs.core.filterv.call(null,inst_32356,inst_32344);
var inst_32344__$1 = inst_32357;
var state_32372__$1 = (function (){var statearr_32387 = state_32372;
(statearr_32387[(10)] = inst_32344__$1);

return statearr_32387;
})();
var statearr_32388_32406 = state_32372__$1;
(statearr_32388_32406[(2)] = null);

(statearr_32388_32406[(1)] = (2));


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
});})(c__19254__auto___32396,out))
;
return ((function (switch__19198__auto__,c__19254__auto___32396,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_32392 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32392[(0)] = state_machine__19199__auto__);

(statearr_32392[(1)] = (1));

return statearr_32392;
});
var state_machine__19199__auto____1 = (function (state_32372){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_32372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e32393){if((e32393 instanceof Object)){
var ex__19202__auto__ = e32393;
var statearr_32394_32407 = state_32372;
(statearr_32394_32407[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32408 = state_32372;
state_32372 = G__32408;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_32372){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_32372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___32396,out))
})();
var state__19256__auto__ = (function (){var statearr_32395 = f__19255__auto__.call(null);
(statearr_32395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___32396);

return statearr_32395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___32396,out))
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
var c__19254__auto___32501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___32501,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___32501,out){
return (function (state_32478){
var state_val_32479 = (state_32478[(1)]);
if((state_val_32479 === (7))){
var inst_32460 = (state_32478[(7)]);
var inst_32460__$1 = (state_32478[(2)]);
var inst_32461 = (inst_32460__$1 == null);
var inst_32462 = cljs.core.not.call(null,inst_32461);
var state_32478__$1 = (function (){var statearr_32480 = state_32478;
(statearr_32480[(7)] = inst_32460__$1);

return statearr_32480;
})();
if(inst_32462){
var statearr_32481_32502 = state_32478__$1;
(statearr_32481_32502[(1)] = (8));

} else {
var statearr_32482_32503 = state_32478__$1;
(statearr_32482_32503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (1))){
var inst_32455 = (0);
var state_32478__$1 = (function (){var statearr_32483 = state_32478;
(statearr_32483[(8)] = inst_32455);

return statearr_32483;
})();
var statearr_32484_32504 = state_32478__$1;
(statearr_32484_32504[(2)] = null);

(statearr_32484_32504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (4))){
var state_32478__$1 = state_32478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32478__$1,(7),ch);
} else {
if((state_val_32479 === (6))){
var inst_32473 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
var statearr_32485_32505 = state_32478__$1;
(statearr_32485_32505[(2)] = inst_32473);

(statearr_32485_32505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (3))){
var inst_32475 = (state_32478[(2)]);
var inst_32476 = cljs.core.async.close_BANG_.call(null,out);
var state_32478__$1 = (function (){var statearr_32486 = state_32478;
(statearr_32486[(9)] = inst_32475);

return statearr_32486;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32478__$1,inst_32476);
} else {
if((state_val_32479 === (2))){
var inst_32455 = (state_32478[(8)]);
var inst_32457 = (inst_32455 < n);
var state_32478__$1 = state_32478;
if(cljs.core.truth_(inst_32457)){
var statearr_32487_32506 = state_32478__$1;
(statearr_32487_32506[(1)] = (4));

} else {
var statearr_32488_32507 = state_32478__$1;
(statearr_32488_32507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (11))){
var inst_32455 = (state_32478[(8)]);
var inst_32465 = (state_32478[(2)]);
var inst_32466 = (inst_32455 + (1));
var inst_32455__$1 = inst_32466;
var state_32478__$1 = (function (){var statearr_32489 = state_32478;
(statearr_32489[(10)] = inst_32465);

(statearr_32489[(8)] = inst_32455__$1);

return statearr_32489;
})();
var statearr_32490_32508 = state_32478__$1;
(statearr_32490_32508[(2)] = null);

(statearr_32490_32508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (9))){
var state_32478__$1 = state_32478;
var statearr_32491_32509 = state_32478__$1;
(statearr_32491_32509[(2)] = null);

(statearr_32491_32509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (5))){
var state_32478__$1 = state_32478;
var statearr_32492_32510 = state_32478__$1;
(statearr_32492_32510[(2)] = null);

(statearr_32492_32510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (10))){
var inst_32470 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
var statearr_32493_32511 = state_32478__$1;
(statearr_32493_32511[(2)] = inst_32470);

(statearr_32493_32511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (8))){
var inst_32460 = (state_32478[(7)]);
var state_32478__$1 = state_32478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32478__$1,(11),out,inst_32460);
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
});})(c__19254__auto___32501,out))
;
return ((function (switch__19198__auto__,c__19254__auto___32501,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_32497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32497[(0)] = state_machine__19199__auto__);

(statearr_32497[(1)] = (1));

return statearr_32497;
});
var state_machine__19199__auto____1 = (function (state_32478){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_32478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e32498){if((e32498 instanceof Object)){
var ex__19202__auto__ = e32498;
var statearr_32499_32512 = state_32478;
(statearr_32499_32512[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32513 = state_32478;
state_32478 = G__32513;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_32478){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_32478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___32501,out))
})();
var state__19256__auto__ = (function (){var statearr_32500 = f__19255__auto__.call(null);
(statearr_32500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___32501);

return statearr_32500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___32501,out))
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
if(typeof cljs.core.async.t32521 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32521 = (function (ch,f,map_LT_,meta32522){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32522 = meta32522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32521.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32521.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32524 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32524 = (function (fn1,_,meta32522,map_LT_,f,ch,meta32525){
this.fn1 = fn1;
this._ = _;
this.meta32522 = meta32522;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32525 = meta32525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32524.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32514_SHARP_){
return f1.call(null,(((p1__32514_SHARP_ == null))?null:self__.f.call(null,p1__32514_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32526){
var self__ = this;
var _32526__$1 = this;
return self__.meta32525;
});})(___$1))
;

cljs.core.async.t32524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32526,meta32525__$1){
var self__ = this;
var _32526__$1 = this;
return (new cljs.core.async.t32524(self__.fn1,self__._,self__.meta32522,self__.map_LT_,self__.f,self__.ch,meta32525__$1));
});})(___$1))
;

cljs.core.async.t32524.cljs$lang$type = true;

cljs.core.async.t32524.cljs$lang$ctorStr = "cljs.core.async/t32524";

cljs.core.async.t32524.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32524");
});})(___$1))
;

cljs.core.async.__GT_t32524 = ((function (___$1){
return (function __GT_t32524(fn1__$1,___$2,meta32522__$1,map_LT___$1,f__$1,ch__$1,meta32525){
return (new cljs.core.async.t32524(fn1__$1,___$2,meta32522__$1,map_LT___$1,f__$1,ch__$1,meta32525));
});})(___$1))
;

}

return (new cljs.core.async.t32524(fn1,___$1,self__.meta32522,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t32521.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32521.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32523){
var self__ = this;
var _32523__$1 = this;
return self__.meta32522;
});

cljs.core.async.t32521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32523,meta32522__$1){
var self__ = this;
var _32523__$1 = this;
return (new cljs.core.async.t32521(self__.ch,self__.f,self__.map_LT_,meta32522__$1));
});

cljs.core.async.t32521.cljs$lang$type = true;

cljs.core.async.t32521.cljs$lang$ctorStr = "cljs.core.async/t32521";

cljs.core.async.t32521.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32521");
});

cljs.core.async.__GT_t32521 = (function __GT_t32521(ch__$1,f__$1,map_LT___$1,meta32522){
return (new cljs.core.async.t32521(ch__$1,f__$1,map_LT___$1,meta32522));
});

}

return (new cljs.core.async.t32521(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t32530 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32530 = (function (ch,f,map_GT_,meta32531){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32531 = meta32531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32530.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32530.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32530.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32532){
var self__ = this;
var _32532__$1 = this;
return self__.meta32531;
});

cljs.core.async.t32530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32532,meta32531__$1){
var self__ = this;
var _32532__$1 = this;
return (new cljs.core.async.t32530(self__.ch,self__.f,self__.map_GT_,meta32531__$1));
});

cljs.core.async.t32530.cljs$lang$type = true;

cljs.core.async.t32530.cljs$lang$ctorStr = "cljs.core.async/t32530";

cljs.core.async.t32530.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32530");
});

cljs.core.async.__GT_t32530 = (function __GT_t32530(ch__$1,f__$1,map_GT___$1,meta32531){
return (new cljs.core.async.t32530(ch__$1,f__$1,map_GT___$1,meta32531));
});

}

return (new cljs.core.async.t32530(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t32536 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32536 = (function (ch,p,filter_GT_,meta32537){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32537 = meta32537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32536.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32536.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32536.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32536.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32536.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32536.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32536.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32538){
var self__ = this;
var _32538__$1 = this;
return self__.meta32537;
});

cljs.core.async.t32536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32538,meta32537__$1){
var self__ = this;
var _32538__$1 = this;
return (new cljs.core.async.t32536(self__.ch,self__.p,self__.filter_GT_,meta32537__$1));
});

cljs.core.async.t32536.cljs$lang$type = true;

cljs.core.async.t32536.cljs$lang$ctorStr = "cljs.core.async/t32536";

cljs.core.async.t32536.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32536");
});

cljs.core.async.__GT_t32536 = (function __GT_t32536(ch__$1,p__$1,filter_GT___$1,meta32537){
return (new cljs.core.async.t32536(ch__$1,p__$1,filter_GT___$1,meta32537));
});

}

return (new cljs.core.async.t32536(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19254__auto___32621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___32621,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___32621,out){
return (function (state_32600){
var state_val_32601 = (state_32600[(1)]);
if((state_val_32601 === (7))){
var inst_32596 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
var statearr_32602_32622 = state_32600__$1;
(statearr_32602_32622[(2)] = inst_32596);

(statearr_32602_32622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (1))){
var state_32600__$1 = state_32600;
var statearr_32603_32623 = state_32600__$1;
(statearr_32603_32623[(2)] = null);

(statearr_32603_32623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (4))){
var inst_32582 = (state_32600[(7)]);
var inst_32582__$1 = (state_32600[(2)]);
var inst_32583 = (inst_32582__$1 == null);
var state_32600__$1 = (function (){var statearr_32604 = state_32600;
(statearr_32604[(7)] = inst_32582__$1);

return statearr_32604;
})();
if(cljs.core.truth_(inst_32583)){
var statearr_32605_32624 = state_32600__$1;
(statearr_32605_32624[(1)] = (5));

} else {
var statearr_32606_32625 = state_32600__$1;
(statearr_32606_32625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (6))){
var inst_32582 = (state_32600[(7)]);
var inst_32587 = p.call(null,inst_32582);
var state_32600__$1 = state_32600;
if(cljs.core.truth_(inst_32587)){
var statearr_32607_32626 = state_32600__$1;
(statearr_32607_32626[(1)] = (8));

} else {
var statearr_32608_32627 = state_32600__$1;
(statearr_32608_32627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (3))){
var inst_32598 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32600__$1,inst_32598);
} else {
if((state_val_32601 === (2))){
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32600__$1,(4),ch);
} else {
if((state_val_32601 === (11))){
var inst_32590 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
var statearr_32609_32628 = state_32600__$1;
(statearr_32609_32628[(2)] = inst_32590);

(statearr_32609_32628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (9))){
var state_32600__$1 = state_32600;
var statearr_32610_32629 = state_32600__$1;
(statearr_32610_32629[(2)] = null);

(statearr_32610_32629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (5))){
var inst_32585 = cljs.core.async.close_BANG_.call(null,out);
var state_32600__$1 = state_32600;
var statearr_32611_32630 = state_32600__$1;
(statearr_32611_32630[(2)] = inst_32585);

(statearr_32611_32630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (10))){
var inst_32593 = (state_32600[(2)]);
var state_32600__$1 = (function (){var statearr_32612 = state_32600;
(statearr_32612[(8)] = inst_32593);

return statearr_32612;
})();
var statearr_32613_32631 = state_32600__$1;
(statearr_32613_32631[(2)] = null);

(statearr_32613_32631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (8))){
var inst_32582 = (state_32600[(7)]);
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32600__$1,(11),out,inst_32582);
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
});})(c__19254__auto___32621,out))
;
return ((function (switch__19198__auto__,c__19254__auto___32621,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_32617 = [null,null,null,null,null,null,null,null,null];
(statearr_32617[(0)] = state_machine__19199__auto__);

(statearr_32617[(1)] = (1));

return statearr_32617;
});
var state_machine__19199__auto____1 = (function (state_32600){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_32600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e32618){if((e32618 instanceof Object)){
var ex__19202__auto__ = e32618;
var statearr_32619_32632 = state_32600;
(statearr_32619_32632[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32633 = state_32600;
state_32600 = G__32633;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_32600){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_32600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___32621,out))
})();
var state__19256__auto__ = (function (){var statearr_32620 = f__19255__auto__.call(null);
(statearr_32620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___32621);

return statearr_32620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___32621,out))
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
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__){
return (function (state_32799){
var state_val_32800 = (state_32799[(1)]);
if((state_val_32800 === (7))){
var inst_32795 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32801_32842 = state_32799__$1;
(statearr_32801_32842[(2)] = inst_32795);

(statearr_32801_32842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (20))){
var inst_32765 = (state_32799[(7)]);
var inst_32776 = (state_32799[(2)]);
var inst_32777 = cljs.core.next.call(null,inst_32765);
var inst_32751 = inst_32777;
var inst_32752 = null;
var inst_32753 = (0);
var inst_32754 = (0);
var state_32799__$1 = (function (){var statearr_32802 = state_32799;
(statearr_32802[(8)] = inst_32754);

(statearr_32802[(9)] = inst_32751);

(statearr_32802[(10)] = inst_32776);

(statearr_32802[(11)] = inst_32753);

(statearr_32802[(12)] = inst_32752);

return statearr_32802;
})();
var statearr_32803_32843 = state_32799__$1;
(statearr_32803_32843[(2)] = null);

(statearr_32803_32843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (1))){
var state_32799__$1 = state_32799;
var statearr_32804_32844 = state_32799__$1;
(statearr_32804_32844[(2)] = null);

(statearr_32804_32844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (4))){
var inst_32740 = (state_32799[(13)]);
var inst_32740__$1 = (state_32799[(2)]);
var inst_32741 = (inst_32740__$1 == null);
var state_32799__$1 = (function (){var statearr_32805 = state_32799;
(statearr_32805[(13)] = inst_32740__$1);

return statearr_32805;
})();
if(cljs.core.truth_(inst_32741)){
var statearr_32806_32845 = state_32799__$1;
(statearr_32806_32845[(1)] = (5));

} else {
var statearr_32807_32846 = state_32799__$1;
(statearr_32807_32846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (15))){
var state_32799__$1 = state_32799;
var statearr_32811_32847 = state_32799__$1;
(statearr_32811_32847[(2)] = null);

(statearr_32811_32847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (21))){
var state_32799__$1 = state_32799;
var statearr_32812_32848 = state_32799__$1;
(statearr_32812_32848[(2)] = null);

(statearr_32812_32848[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (13))){
var inst_32754 = (state_32799[(8)]);
var inst_32751 = (state_32799[(9)]);
var inst_32753 = (state_32799[(11)]);
var inst_32752 = (state_32799[(12)]);
var inst_32761 = (state_32799[(2)]);
var inst_32762 = (inst_32754 + (1));
var tmp32808 = inst_32751;
var tmp32809 = inst_32753;
var tmp32810 = inst_32752;
var inst_32751__$1 = tmp32808;
var inst_32752__$1 = tmp32810;
var inst_32753__$1 = tmp32809;
var inst_32754__$1 = inst_32762;
var state_32799__$1 = (function (){var statearr_32813 = state_32799;
(statearr_32813[(14)] = inst_32761);

(statearr_32813[(8)] = inst_32754__$1);

(statearr_32813[(9)] = inst_32751__$1);

(statearr_32813[(11)] = inst_32753__$1);

(statearr_32813[(12)] = inst_32752__$1);

return statearr_32813;
})();
var statearr_32814_32849 = state_32799__$1;
(statearr_32814_32849[(2)] = null);

(statearr_32814_32849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (22))){
var state_32799__$1 = state_32799;
var statearr_32815_32850 = state_32799__$1;
(statearr_32815_32850[(2)] = null);

(statearr_32815_32850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (6))){
var inst_32740 = (state_32799[(13)]);
var inst_32749 = f.call(null,inst_32740);
var inst_32750 = cljs.core.seq.call(null,inst_32749);
var inst_32751 = inst_32750;
var inst_32752 = null;
var inst_32753 = (0);
var inst_32754 = (0);
var state_32799__$1 = (function (){var statearr_32816 = state_32799;
(statearr_32816[(8)] = inst_32754);

(statearr_32816[(9)] = inst_32751);

(statearr_32816[(11)] = inst_32753);

(statearr_32816[(12)] = inst_32752);

return statearr_32816;
})();
var statearr_32817_32851 = state_32799__$1;
(statearr_32817_32851[(2)] = null);

(statearr_32817_32851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (17))){
var inst_32765 = (state_32799[(7)]);
var inst_32769 = cljs.core.chunk_first.call(null,inst_32765);
var inst_32770 = cljs.core.chunk_rest.call(null,inst_32765);
var inst_32771 = cljs.core.count.call(null,inst_32769);
var inst_32751 = inst_32770;
var inst_32752 = inst_32769;
var inst_32753 = inst_32771;
var inst_32754 = (0);
var state_32799__$1 = (function (){var statearr_32818 = state_32799;
(statearr_32818[(8)] = inst_32754);

(statearr_32818[(9)] = inst_32751);

(statearr_32818[(11)] = inst_32753);

(statearr_32818[(12)] = inst_32752);

return statearr_32818;
})();
var statearr_32819_32852 = state_32799__$1;
(statearr_32819_32852[(2)] = null);

(statearr_32819_32852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (3))){
var inst_32797 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32799__$1,inst_32797);
} else {
if((state_val_32800 === (12))){
var inst_32785 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32820_32853 = state_32799__$1;
(statearr_32820_32853[(2)] = inst_32785);

(statearr_32820_32853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (2))){
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32799__$1,(4),in$);
} else {
if((state_val_32800 === (23))){
var inst_32793 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32821_32854 = state_32799__$1;
(statearr_32821_32854[(2)] = inst_32793);

(statearr_32821_32854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (19))){
var inst_32780 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32822_32855 = state_32799__$1;
(statearr_32822_32855[(2)] = inst_32780);

(statearr_32822_32855[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (11))){
var inst_32751 = (state_32799[(9)]);
var inst_32765 = (state_32799[(7)]);
var inst_32765__$1 = cljs.core.seq.call(null,inst_32751);
var state_32799__$1 = (function (){var statearr_32823 = state_32799;
(statearr_32823[(7)] = inst_32765__$1);

return statearr_32823;
})();
if(inst_32765__$1){
var statearr_32824_32856 = state_32799__$1;
(statearr_32824_32856[(1)] = (14));

} else {
var statearr_32825_32857 = state_32799__$1;
(statearr_32825_32857[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (9))){
var inst_32787 = (state_32799[(2)]);
var inst_32788 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32799__$1 = (function (){var statearr_32826 = state_32799;
(statearr_32826[(15)] = inst_32787);

return statearr_32826;
})();
if(cljs.core.truth_(inst_32788)){
var statearr_32827_32858 = state_32799__$1;
(statearr_32827_32858[(1)] = (21));

} else {
var statearr_32828_32859 = state_32799__$1;
(statearr_32828_32859[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (5))){
var inst_32743 = cljs.core.async.close_BANG_.call(null,out);
var state_32799__$1 = state_32799;
var statearr_32829_32860 = state_32799__$1;
(statearr_32829_32860[(2)] = inst_32743);

(statearr_32829_32860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (14))){
var inst_32765 = (state_32799[(7)]);
var inst_32767 = cljs.core.chunked_seq_QMARK_.call(null,inst_32765);
var state_32799__$1 = state_32799;
if(inst_32767){
var statearr_32830_32861 = state_32799__$1;
(statearr_32830_32861[(1)] = (17));

} else {
var statearr_32831_32862 = state_32799__$1;
(statearr_32831_32862[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (16))){
var inst_32783 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32832_32863 = state_32799__$1;
(statearr_32832_32863[(2)] = inst_32783);

(statearr_32832_32863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (10))){
var inst_32754 = (state_32799[(8)]);
var inst_32752 = (state_32799[(12)]);
var inst_32759 = cljs.core._nth.call(null,inst_32752,inst_32754);
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32799__$1,(13),out,inst_32759);
} else {
if((state_val_32800 === (18))){
var inst_32765 = (state_32799[(7)]);
var inst_32774 = cljs.core.first.call(null,inst_32765);
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32799__$1,(20),out,inst_32774);
} else {
if((state_val_32800 === (8))){
var inst_32754 = (state_32799[(8)]);
var inst_32753 = (state_32799[(11)]);
var inst_32756 = (inst_32754 < inst_32753);
var inst_32757 = inst_32756;
var state_32799__$1 = state_32799;
if(cljs.core.truth_(inst_32757)){
var statearr_32833_32864 = state_32799__$1;
(statearr_32833_32864[(1)] = (10));

} else {
var statearr_32834_32865 = state_32799__$1;
(statearr_32834_32865[(1)] = (11));

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
});})(c__19254__auto__))
;
return ((function (switch__19198__auto__,c__19254__auto__){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_32838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32838[(0)] = state_machine__19199__auto__);

(statearr_32838[(1)] = (1));

return statearr_32838;
});
var state_machine__19199__auto____1 = (function (state_32799){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_32799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e32839){if((e32839 instanceof Object)){
var ex__19202__auto__ = e32839;
var statearr_32840_32866 = state_32799;
(statearr_32840_32866[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32867 = state_32799;
state_32799 = G__32867;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_32799){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_32799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_32841 = f__19255__auto__.call(null);
(statearr_32841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_32841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__))
);

return c__19254__auto__;
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
var c__19254__auto___32964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___32964,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___32964,out){
return (function (state_32939){
var state_val_32940 = (state_32939[(1)]);
if((state_val_32940 === (7))){
var inst_32934 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32941_32965 = state_32939__$1;
(statearr_32941_32965[(2)] = inst_32934);

(statearr_32941_32965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (1))){
var inst_32916 = null;
var state_32939__$1 = (function (){var statearr_32942 = state_32939;
(statearr_32942[(7)] = inst_32916);

return statearr_32942;
})();
var statearr_32943_32966 = state_32939__$1;
(statearr_32943_32966[(2)] = null);

(statearr_32943_32966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (4))){
var inst_32919 = (state_32939[(8)]);
var inst_32919__$1 = (state_32939[(2)]);
var inst_32920 = (inst_32919__$1 == null);
var inst_32921 = cljs.core.not.call(null,inst_32920);
var state_32939__$1 = (function (){var statearr_32944 = state_32939;
(statearr_32944[(8)] = inst_32919__$1);

return statearr_32944;
})();
if(inst_32921){
var statearr_32945_32967 = state_32939__$1;
(statearr_32945_32967[(1)] = (5));

} else {
var statearr_32946_32968 = state_32939__$1;
(statearr_32946_32968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (6))){
var state_32939__$1 = state_32939;
var statearr_32947_32969 = state_32939__$1;
(statearr_32947_32969[(2)] = null);

(statearr_32947_32969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (3))){
var inst_32936 = (state_32939[(2)]);
var inst_32937 = cljs.core.async.close_BANG_.call(null,out);
var state_32939__$1 = (function (){var statearr_32948 = state_32939;
(statearr_32948[(9)] = inst_32936);

return statearr_32948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32939__$1,inst_32937);
} else {
if((state_val_32940 === (2))){
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32939__$1,(4),ch);
} else {
if((state_val_32940 === (11))){
var inst_32919 = (state_32939[(8)]);
var inst_32928 = (state_32939[(2)]);
var inst_32916 = inst_32919;
var state_32939__$1 = (function (){var statearr_32949 = state_32939;
(statearr_32949[(10)] = inst_32928);

(statearr_32949[(7)] = inst_32916);

return statearr_32949;
})();
var statearr_32950_32970 = state_32939__$1;
(statearr_32950_32970[(2)] = null);

(statearr_32950_32970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (9))){
var inst_32919 = (state_32939[(8)]);
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32939__$1,(11),out,inst_32919);
} else {
if((state_val_32940 === (5))){
var inst_32919 = (state_32939[(8)]);
var inst_32916 = (state_32939[(7)]);
var inst_32923 = cljs.core._EQ_.call(null,inst_32919,inst_32916);
var state_32939__$1 = state_32939;
if(inst_32923){
var statearr_32952_32971 = state_32939__$1;
(statearr_32952_32971[(1)] = (8));

} else {
var statearr_32953_32972 = state_32939__$1;
(statearr_32953_32972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (10))){
var inst_32931 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32954_32973 = state_32939__$1;
(statearr_32954_32973[(2)] = inst_32931);

(statearr_32954_32973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (8))){
var inst_32916 = (state_32939[(7)]);
var tmp32951 = inst_32916;
var inst_32916__$1 = tmp32951;
var state_32939__$1 = (function (){var statearr_32955 = state_32939;
(statearr_32955[(7)] = inst_32916__$1);

return statearr_32955;
})();
var statearr_32956_32974 = state_32939__$1;
(statearr_32956_32974[(2)] = null);

(statearr_32956_32974[(1)] = (2));


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
});})(c__19254__auto___32964,out))
;
return ((function (switch__19198__auto__,c__19254__auto___32964,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_32960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32960[(0)] = state_machine__19199__auto__);

(statearr_32960[(1)] = (1));

return statearr_32960;
});
var state_machine__19199__auto____1 = (function (state_32939){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_32939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e32961){if((e32961 instanceof Object)){
var ex__19202__auto__ = e32961;
var statearr_32962_32975 = state_32939;
(statearr_32962_32975[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32976 = state_32939;
state_32939 = G__32976;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_32939){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_32939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___32964,out))
})();
var state__19256__auto__ = (function (){var statearr_32963 = f__19255__auto__.call(null);
(statearr_32963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___32964);

return statearr_32963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___32964,out))
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
var c__19254__auto___33111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___33111,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___33111,out){
return (function (state_33081){
var state_val_33082 = (state_33081[(1)]);
if((state_val_33082 === (7))){
var inst_33077 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33083_33112 = state_33081__$1;
(statearr_33083_33112[(2)] = inst_33077);

(statearr_33083_33112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (1))){
var inst_33044 = (new Array(n));
var inst_33045 = inst_33044;
var inst_33046 = (0);
var state_33081__$1 = (function (){var statearr_33084 = state_33081;
(statearr_33084[(7)] = inst_33046);

(statearr_33084[(8)] = inst_33045);

return statearr_33084;
})();
var statearr_33085_33113 = state_33081__$1;
(statearr_33085_33113[(2)] = null);

(statearr_33085_33113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (4))){
var inst_33049 = (state_33081[(9)]);
var inst_33049__$1 = (state_33081[(2)]);
var inst_33050 = (inst_33049__$1 == null);
var inst_33051 = cljs.core.not.call(null,inst_33050);
var state_33081__$1 = (function (){var statearr_33086 = state_33081;
(statearr_33086[(9)] = inst_33049__$1);

return statearr_33086;
})();
if(inst_33051){
var statearr_33087_33114 = state_33081__$1;
(statearr_33087_33114[(1)] = (5));

} else {
var statearr_33088_33115 = state_33081__$1;
(statearr_33088_33115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (15))){
var inst_33071 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33089_33116 = state_33081__$1;
(statearr_33089_33116[(2)] = inst_33071);

(statearr_33089_33116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (13))){
var state_33081__$1 = state_33081;
var statearr_33090_33117 = state_33081__$1;
(statearr_33090_33117[(2)] = null);

(statearr_33090_33117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (6))){
var inst_33046 = (state_33081[(7)]);
var inst_33067 = (inst_33046 > (0));
var state_33081__$1 = state_33081;
if(cljs.core.truth_(inst_33067)){
var statearr_33091_33118 = state_33081__$1;
(statearr_33091_33118[(1)] = (12));

} else {
var statearr_33092_33119 = state_33081__$1;
(statearr_33092_33119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (3))){
var inst_33079 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33081__$1,inst_33079);
} else {
if((state_val_33082 === (12))){
var inst_33045 = (state_33081[(8)]);
var inst_33069 = cljs.core.vec.call(null,inst_33045);
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33081__$1,(15),out,inst_33069);
} else {
if((state_val_33082 === (2))){
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33081__$1,(4),ch);
} else {
if((state_val_33082 === (11))){
var inst_33061 = (state_33081[(2)]);
var inst_33062 = (new Array(n));
var inst_33045 = inst_33062;
var inst_33046 = (0);
var state_33081__$1 = (function (){var statearr_33093 = state_33081;
(statearr_33093[(10)] = inst_33061);

(statearr_33093[(7)] = inst_33046);

(statearr_33093[(8)] = inst_33045);

return statearr_33093;
})();
var statearr_33094_33120 = state_33081__$1;
(statearr_33094_33120[(2)] = null);

(statearr_33094_33120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (9))){
var inst_33045 = (state_33081[(8)]);
var inst_33059 = cljs.core.vec.call(null,inst_33045);
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33081__$1,(11),out,inst_33059);
} else {
if((state_val_33082 === (5))){
var inst_33046 = (state_33081[(7)]);
var inst_33054 = (state_33081[(11)]);
var inst_33049 = (state_33081[(9)]);
var inst_33045 = (state_33081[(8)]);
var inst_33053 = (inst_33045[inst_33046] = inst_33049);
var inst_33054__$1 = (inst_33046 + (1));
var inst_33055 = (inst_33054__$1 < n);
var state_33081__$1 = (function (){var statearr_33095 = state_33081;
(statearr_33095[(11)] = inst_33054__$1);

(statearr_33095[(12)] = inst_33053);

return statearr_33095;
})();
if(cljs.core.truth_(inst_33055)){
var statearr_33096_33121 = state_33081__$1;
(statearr_33096_33121[(1)] = (8));

} else {
var statearr_33097_33122 = state_33081__$1;
(statearr_33097_33122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (14))){
var inst_33074 = (state_33081[(2)]);
var inst_33075 = cljs.core.async.close_BANG_.call(null,out);
var state_33081__$1 = (function (){var statearr_33099 = state_33081;
(statearr_33099[(13)] = inst_33074);

return statearr_33099;
})();
var statearr_33100_33123 = state_33081__$1;
(statearr_33100_33123[(2)] = inst_33075);

(statearr_33100_33123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (10))){
var inst_33065 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33101_33124 = state_33081__$1;
(statearr_33101_33124[(2)] = inst_33065);

(statearr_33101_33124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (8))){
var inst_33054 = (state_33081[(11)]);
var inst_33045 = (state_33081[(8)]);
var tmp33098 = inst_33045;
var inst_33045__$1 = tmp33098;
var inst_33046 = inst_33054;
var state_33081__$1 = (function (){var statearr_33102 = state_33081;
(statearr_33102[(7)] = inst_33046);

(statearr_33102[(8)] = inst_33045__$1);

return statearr_33102;
})();
var statearr_33103_33125 = state_33081__$1;
(statearr_33103_33125[(2)] = null);

(statearr_33103_33125[(1)] = (2));


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
});})(c__19254__auto___33111,out))
;
return ((function (switch__19198__auto__,c__19254__auto___33111,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_33107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33107[(0)] = state_machine__19199__auto__);

(statearr_33107[(1)] = (1));

return statearr_33107;
});
var state_machine__19199__auto____1 = (function (state_33081){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_33081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e33108){if((e33108 instanceof Object)){
var ex__19202__auto__ = e33108;
var statearr_33109_33126 = state_33081;
(statearr_33109_33126[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33127 = state_33081;
state_33081 = G__33127;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_33081){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_33081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___33111,out))
})();
var state__19256__auto__ = (function (){var statearr_33110 = f__19255__auto__.call(null);
(statearr_33110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___33111);

return statearr_33110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___33111,out))
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
var c__19254__auto___33270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___33270,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___33270,out){
return (function (state_33240){
var state_val_33241 = (state_33240[(1)]);
if((state_val_33241 === (7))){
var inst_33236 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33242_33271 = state_33240__$1;
(statearr_33242_33271[(2)] = inst_33236);

(statearr_33242_33271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (1))){
var inst_33199 = [];
var inst_33200 = inst_33199;
var inst_33201 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33240__$1 = (function (){var statearr_33243 = state_33240;
(statearr_33243[(7)] = inst_33201);

(statearr_33243[(8)] = inst_33200);

return statearr_33243;
})();
var statearr_33244_33272 = state_33240__$1;
(statearr_33244_33272[(2)] = null);

(statearr_33244_33272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (4))){
var inst_33204 = (state_33240[(9)]);
var inst_33204__$1 = (state_33240[(2)]);
var inst_33205 = (inst_33204__$1 == null);
var inst_33206 = cljs.core.not.call(null,inst_33205);
var state_33240__$1 = (function (){var statearr_33245 = state_33240;
(statearr_33245[(9)] = inst_33204__$1);

return statearr_33245;
})();
if(inst_33206){
var statearr_33246_33273 = state_33240__$1;
(statearr_33246_33273[(1)] = (5));

} else {
var statearr_33247_33274 = state_33240__$1;
(statearr_33247_33274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (15))){
var inst_33230 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33248_33275 = state_33240__$1;
(statearr_33248_33275[(2)] = inst_33230);

(statearr_33248_33275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (13))){
var state_33240__$1 = state_33240;
var statearr_33249_33276 = state_33240__$1;
(statearr_33249_33276[(2)] = null);

(statearr_33249_33276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (6))){
var inst_33200 = (state_33240[(8)]);
var inst_33225 = inst_33200.length;
var inst_33226 = (inst_33225 > (0));
var state_33240__$1 = state_33240;
if(cljs.core.truth_(inst_33226)){
var statearr_33250_33277 = state_33240__$1;
(statearr_33250_33277[(1)] = (12));

} else {
var statearr_33251_33278 = state_33240__$1;
(statearr_33251_33278[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (3))){
var inst_33238 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33240__$1,inst_33238);
} else {
if((state_val_33241 === (12))){
var inst_33200 = (state_33240[(8)]);
var inst_33228 = cljs.core.vec.call(null,inst_33200);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33240__$1,(15),out,inst_33228);
} else {
if((state_val_33241 === (2))){
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33240__$1,(4),ch);
} else {
if((state_val_33241 === (11))){
var inst_33208 = (state_33240[(10)]);
var inst_33204 = (state_33240[(9)]);
var inst_33218 = (state_33240[(2)]);
var inst_33219 = [];
var inst_33220 = inst_33219.push(inst_33204);
var inst_33200 = inst_33219;
var inst_33201 = inst_33208;
var state_33240__$1 = (function (){var statearr_33252 = state_33240;
(statearr_33252[(7)] = inst_33201);

(statearr_33252[(11)] = inst_33218);

(statearr_33252[(12)] = inst_33220);

(statearr_33252[(8)] = inst_33200);

return statearr_33252;
})();
var statearr_33253_33279 = state_33240__$1;
(statearr_33253_33279[(2)] = null);

(statearr_33253_33279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (9))){
var inst_33200 = (state_33240[(8)]);
var inst_33216 = cljs.core.vec.call(null,inst_33200);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33240__$1,(11),out,inst_33216);
} else {
if((state_val_33241 === (5))){
var inst_33201 = (state_33240[(7)]);
var inst_33208 = (state_33240[(10)]);
var inst_33204 = (state_33240[(9)]);
var inst_33208__$1 = f.call(null,inst_33204);
var inst_33209 = cljs.core._EQ_.call(null,inst_33208__$1,inst_33201);
var inst_33210 = cljs.core.keyword_identical_QMARK_.call(null,inst_33201,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33211 = (inst_33209) || (inst_33210);
var state_33240__$1 = (function (){var statearr_33254 = state_33240;
(statearr_33254[(10)] = inst_33208__$1);

return statearr_33254;
})();
if(cljs.core.truth_(inst_33211)){
var statearr_33255_33280 = state_33240__$1;
(statearr_33255_33280[(1)] = (8));

} else {
var statearr_33256_33281 = state_33240__$1;
(statearr_33256_33281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (14))){
var inst_33233 = (state_33240[(2)]);
var inst_33234 = cljs.core.async.close_BANG_.call(null,out);
var state_33240__$1 = (function (){var statearr_33258 = state_33240;
(statearr_33258[(13)] = inst_33233);

return statearr_33258;
})();
var statearr_33259_33282 = state_33240__$1;
(statearr_33259_33282[(2)] = inst_33234);

(statearr_33259_33282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (10))){
var inst_33223 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33260_33283 = state_33240__$1;
(statearr_33260_33283[(2)] = inst_33223);

(statearr_33260_33283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (8))){
var inst_33208 = (state_33240[(10)]);
var inst_33204 = (state_33240[(9)]);
var inst_33200 = (state_33240[(8)]);
var inst_33213 = inst_33200.push(inst_33204);
var tmp33257 = inst_33200;
var inst_33200__$1 = tmp33257;
var inst_33201 = inst_33208;
var state_33240__$1 = (function (){var statearr_33261 = state_33240;
(statearr_33261[(7)] = inst_33201);

(statearr_33261[(14)] = inst_33213);

(statearr_33261[(8)] = inst_33200__$1);

return statearr_33261;
})();
var statearr_33262_33284 = state_33240__$1;
(statearr_33262_33284[(2)] = null);

(statearr_33262_33284[(1)] = (2));


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
});})(c__19254__auto___33270,out))
;
return ((function (switch__19198__auto__,c__19254__auto___33270,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_33266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33266[(0)] = state_machine__19199__auto__);

(statearr_33266[(1)] = (1));

return statearr_33266;
});
var state_machine__19199__auto____1 = (function (state_33240){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_33240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e33267){if((e33267 instanceof Object)){
var ex__19202__auto__ = e33267;
var statearr_33268_33285 = state_33240;
(statearr_33268_33285[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33286 = state_33240;
state_33240 = G__33286;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_33240){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_33240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___33270,out))
})();
var state__19256__auto__ = (function (){var statearr_33269 = f__19255__auto__.call(null);
(statearr_33269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___33270);

return statearr_33269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___33270,out))
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

//# sourceMappingURL=async.js.map?rel=1428647922095