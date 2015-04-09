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
if(typeof cljs.core.async.t30201 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30201 = (function (f,fn_handler,meta30202){
this.f = f;
this.fn_handler = fn_handler;
this.meta30202 = meta30202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30201.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30203){
var self__ = this;
var _30203__$1 = this;
return self__.meta30202;
});

cljs.core.async.t30201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30203,meta30202__$1){
var self__ = this;
var _30203__$1 = this;
return (new cljs.core.async.t30201(self__.f,self__.fn_handler,meta30202__$1));
});

cljs.core.async.t30201.cljs$lang$type = true;

cljs.core.async.t30201.cljs$lang$ctorStr = "cljs.core.async/t30201";

cljs.core.async.t30201.cljs$lang$ctorPrWriter = (function (this__16733__auto__,writer__16734__auto__,opt__16735__auto__){
return cljs.core._write.call(null,writer__16734__auto__,"cljs.core.async/t30201");
});

cljs.core.async.__GT_t30201 = (function __GT_t30201(f__$1,fn_handler__$1,meta30202){
return (new cljs.core.async.t30201(f__$1,fn_handler__$1,meta30202));
});

}

return (new cljs.core.async.t30201(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30205 = buff;
if(G__30205){
var bit__16827__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16827__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__30205.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30205.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30205);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30205);
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
var val_30206 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30206);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30206,ret){
return (function (){
return fn1.call(null,val_30206);
});})(val_30206,ret))
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
var n__17033__auto___30207 = n;
var x_30208 = (0);
while(true){
if((x_30208 < n__17033__auto___30207)){
(a[x_30208] = (0));

var G__30209 = (x_30208 + (1));
x_30208 = G__30209;
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

var G__30210 = (i + (1));
i = G__30210;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30214 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30214 = (function (flag,alt_flag,meta30215){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30215 = meta30215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30214.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30216){
var self__ = this;
var _30216__$1 = this;
return self__.meta30215;
});})(flag))
;

cljs.core.async.t30214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30216,meta30215__$1){
var self__ = this;
var _30216__$1 = this;
return (new cljs.core.async.t30214(self__.flag,self__.alt_flag,meta30215__$1));
});})(flag))
;

cljs.core.async.t30214.cljs$lang$type = true;

cljs.core.async.t30214.cljs$lang$ctorStr = "cljs.core.async/t30214";

cljs.core.async.t30214.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16733__auto__,writer__16734__auto__,opt__16735__auto__){
return cljs.core._write.call(null,writer__16734__auto__,"cljs.core.async/t30214");
});})(flag))
;

cljs.core.async.__GT_t30214 = ((function (flag){
return (function __GT_t30214(flag__$1,alt_flag__$1,meta30215){
return (new cljs.core.async.t30214(flag__$1,alt_flag__$1,meta30215));
});})(flag))
;

}

return (new cljs.core.async.t30214(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t30220 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30220 = (function (cb,flag,alt_handler,meta30221){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30221 = meta30221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30220.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30220.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30220.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30222){
var self__ = this;
var _30222__$1 = this;
return self__.meta30221;
});

cljs.core.async.t30220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30222,meta30221__$1){
var self__ = this;
var _30222__$1 = this;
return (new cljs.core.async.t30220(self__.cb,self__.flag,self__.alt_handler,meta30221__$1));
});

cljs.core.async.t30220.cljs$lang$type = true;

cljs.core.async.t30220.cljs$lang$ctorStr = "cljs.core.async/t30220";

cljs.core.async.t30220.cljs$lang$ctorPrWriter = (function (this__16733__auto__,writer__16734__auto__,opt__16735__auto__){
return cljs.core._write.call(null,writer__16734__auto__,"cljs.core.async/t30220");
});

cljs.core.async.__GT_t30220 = (function __GT_t30220(cb__$1,flag__$1,alt_handler__$1,meta30221){
return (new cljs.core.async.t30220(cb__$1,flag__$1,alt_handler__$1,meta30221));
});

}

return (new cljs.core.async.t30220(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30223_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30223_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30224_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30224_SHARP_,port], null));
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
var G__30225 = (i + (1));
i = G__30225;
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
var alts_BANG___delegate = function (ports,p__30226){
var map__30228 = p__30226;
var map__30228__$1 = ((cljs.core.seq_QMARK_.call(null,map__30228))?cljs.core.apply.call(null,cljs.core.hash_map,map__30228):map__30228);
var opts = map__30228__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30226 = null;
if (arguments.length > 1) {
var G__30229__i = 0, G__30229__a = new Array(arguments.length -  1);
while (G__30229__i < G__30229__a.length) {G__30229__a[G__30229__i] = arguments[G__30229__i + 1]; ++G__30229__i;}
  p__30226 = new cljs.core.IndexedSeq(G__30229__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__30226);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30230){
var ports = cljs.core.first(arglist__30230);
var p__30226 = cljs.core.rest(arglist__30230);
return alts_BANG___delegate(ports,p__30226);
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
var c__19255__auto___30325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___30325){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___30325){
return (function (state_30301){
var state_val_30302 = (state_30301[(1)]);
if((state_val_30302 === (7))){
var inst_30297 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30303_30326 = state_30301__$1;
(statearr_30303_30326[(2)] = inst_30297);

(statearr_30303_30326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (1))){
var state_30301__$1 = state_30301;
var statearr_30304_30327 = state_30301__$1;
(statearr_30304_30327[(2)] = null);

(statearr_30304_30327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (4))){
var inst_30280 = (state_30301[(7)]);
var inst_30280__$1 = (state_30301[(2)]);
var inst_30281 = (inst_30280__$1 == null);
var state_30301__$1 = (function (){var statearr_30305 = state_30301;
(statearr_30305[(7)] = inst_30280__$1);

return statearr_30305;
})();
if(cljs.core.truth_(inst_30281)){
var statearr_30306_30328 = state_30301__$1;
(statearr_30306_30328[(1)] = (5));

} else {
var statearr_30307_30329 = state_30301__$1;
(statearr_30307_30329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (13))){
var state_30301__$1 = state_30301;
var statearr_30308_30330 = state_30301__$1;
(statearr_30308_30330[(2)] = null);

(statearr_30308_30330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (6))){
var inst_30280 = (state_30301[(7)]);
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30301__$1,(11),to,inst_30280);
} else {
if((state_val_30302 === (3))){
var inst_30299 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30301__$1,inst_30299);
} else {
if((state_val_30302 === (12))){
var state_30301__$1 = state_30301;
var statearr_30309_30331 = state_30301__$1;
(statearr_30309_30331[(2)] = null);

(statearr_30309_30331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (2))){
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30301__$1,(4),from);
} else {
if((state_val_30302 === (11))){
var inst_30290 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
if(cljs.core.truth_(inst_30290)){
var statearr_30310_30332 = state_30301__$1;
(statearr_30310_30332[(1)] = (12));

} else {
var statearr_30311_30333 = state_30301__$1;
(statearr_30311_30333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (9))){
var state_30301__$1 = state_30301;
var statearr_30312_30334 = state_30301__$1;
(statearr_30312_30334[(2)] = null);

(statearr_30312_30334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (5))){
var state_30301__$1 = state_30301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30313_30335 = state_30301__$1;
(statearr_30313_30335[(1)] = (8));

} else {
var statearr_30314_30336 = state_30301__$1;
(statearr_30314_30336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (14))){
var inst_30295 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30315_30337 = state_30301__$1;
(statearr_30315_30337[(2)] = inst_30295);

(statearr_30315_30337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (10))){
var inst_30287 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30316_30338 = state_30301__$1;
(statearr_30316_30338[(2)] = inst_30287);

(statearr_30316_30338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (8))){
var inst_30284 = cljs.core.async.close_BANG_.call(null,to);
var state_30301__$1 = state_30301;
var statearr_30317_30339 = state_30301__$1;
(statearr_30317_30339[(2)] = inst_30284);

(statearr_30317_30339[(1)] = (10));


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
});})(c__19255__auto___30325))
;
return ((function (switch__19199__auto__,c__19255__auto___30325){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_30321 = [null,null,null,null,null,null,null,null];
(statearr_30321[(0)] = state_machine__19200__auto__);

(statearr_30321[(1)] = (1));

return statearr_30321;
});
var state_machine__19200__auto____1 = (function (state_30301){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_30301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e30322){if((e30322 instanceof Object)){
var ex__19203__auto__ = e30322;
var statearr_30323_30340 = state_30301;
(statearr_30323_30340[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30341 = state_30301;
state_30301 = G__30341;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_30301){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_30301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___30325))
})();
var state__19257__auto__ = (function (){var statearr_30324 = f__19256__auto__.call(null);
(statearr_30324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___30325);

return statearr_30324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___30325))
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
return (function (p__30525){
var vec__30526 = p__30525;
var v = cljs.core.nth.call(null,vec__30526,(0),null);
var p = cljs.core.nth.call(null,vec__30526,(1),null);
var job = vec__30526;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19255__auto___30708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___30708,res,vec__30526,v,p,job,jobs,results){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___30708,res,vec__30526,v,p,job,jobs,results){
return (function (state_30531){
var state_val_30532 = (state_30531[(1)]);
if((state_val_30532 === (2))){
var inst_30528 = (state_30531[(2)]);
var inst_30529 = cljs.core.async.close_BANG_.call(null,res);
var state_30531__$1 = (function (){var statearr_30533 = state_30531;
(statearr_30533[(7)] = inst_30528);

return statearr_30533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30531__$1,inst_30529);
} else {
if((state_val_30532 === (1))){
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30531__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19255__auto___30708,res,vec__30526,v,p,job,jobs,results))
;
return ((function (switch__19199__auto__,c__19255__auto___30708,res,vec__30526,v,p,job,jobs,results){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_30537 = [null,null,null,null,null,null,null,null];
(statearr_30537[(0)] = state_machine__19200__auto__);

(statearr_30537[(1)] = (1));

return statearr_30537;
});
var state_machine__19200__auto____1 = (function (state_30531){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_30531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e30538){if((e30538 instanceof Object)){
var ex__19203__auto__ = e30538;
var statearr_30539_30709 = state_30531;
(statearr_30539_30709[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30710 = state_30531;
state_30531 = G__30710;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_30531){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_30531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___30708,res,vec__30526,v,p,job,jobs,results))
})();
var state__19257__auto__ = (function (){var statearr_30540 = f__19256__auto__.call(null);
(statearr_30540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___30708);

return statearr_30540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___30708,res,vec__30526,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30541){
var vec__30542 = p__30541;
var v = cljs.core.nth.call(null,vec__30542,(0),null);
var p = cljs.core.nth.call(null,vec__30542,(1),null);
var job = vec__30542;
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
var n__17033__auto___30711 = n;
var __30712 = (0);
while(true){
if((__30712 < n__17033__auto___30711)){
var G__30543_30713 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30543_30713) {
case "async":
var c__19255__auto___30715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30712,c__19255__auto___30715,G__30543_30713,n__17033__auto___30711,jobs,results,process,async){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (__30712,c__19255__auto___30715,G__30543_30713,n__17033__auto___30711,jobs,results,process,async){
return (function (state_30556){
var state_val_30557 = (state_30556[(1)]);
if((state_val_30557 === (7))){
var inst_30552 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30558_30716 = state_30556__$1;
(statearr_30558_30716[(2)] = inst_30552);

(statearr_30558_30716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (6))){
var state_30556__$1 = state_30556;
var statearr_30559_30717 = state_30556__$1;
(statearr_30559_30717[(2)] = null);

(statearr_30559_30717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (5))){
var state_30556__$1 = state_30556;
var statearr_30560_30718 = state_30556__$1;
(statearr_30560_30718[(2)] = null);

(statearr_30560_30718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (4))){
var inst_30546 = (state_30556[(2)]);
var inst_30547 = async.call(null,inst_30546);
var state_30556__$1 = state_30556;
if(cljs.core.truth_(inst_30547)){
var statearr_30561_30719 = state_30556__$1;
(statearr_30561_30719[(1)] = (5));

} else {
var statearr_30562_30720 = state_30556__$1;
(statearr_30562_30720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (3))){
var inst_30554 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30556__$1,inst_30554);
} else {
if((state_val_30557 === (2))){
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30556__$1,(4),jobs);
} else {
if((state_val_30557 === (1))){
var state_30556__$1 = state_30556;
var statearr_30563_30721 = state_30556__$1;
(statearr_30563_30721[(2)] = null);

(statearr_30563_30721[(1)] = (2));


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
});})(__30712,c__19255__auto___30715,G__30543_30713,n__17033__auto___30711,jobs,results,process,async))
;
return ((function (__30712,switch__19199__auto__,c__19255__auto___30715,G__30543_30713,n__17033__auto___30711,jobs,results,process,async){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_30567 = [null,null,null,null,null,null,null];
(statearr_30567[(0)] = state_machine__19200__auto__);

(statearr_30567[(1)] = (1));

return statearr_30567;
});
var state_machine__19200__auto____1 = (function (state_30556){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_30556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e30568){if((e30568 instanceof Object)){
var ex__19203__auto__ = e30568;
var statearr_30569_30722 = state_30556;
(statearr_30569_30722[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30723 = state_30556;
state_30556 = G__30723;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_30556){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_30556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(__30712,switch__19199__auto__,c__19255__auto___30715,G__30543_30713,n__17033__auto___30711,jobs,results,process,async))
})();
var state__19257__auto__ = (function (){var statearr_30570 = f__19256__auto__.call(null);
(statearr_30570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___30715);

return statearr_30570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(__30712,c__19255__auto___30715,G__30543_30713,n__17033__auto___30711,jobs,results,process,async))
);


break;
case "compute":
var c__19255__auto___30724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30712,c__19255__auto___30724,G__30543_30713,n__17033__auto___30711,jobs,results,process,async){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (__30712,c__19255__auto___30724,G__30543_30713,n__17033__auto___30711,jobs,results,process,async){
return (function (state_30583){
var state_val_30584 = (state_30583[(1)]);
if((state_val_30584 === (7))){
var inst_30579 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30585_30725 = state_30583__$1;
(statearr_30585_30725[(2)] = inst_30579);

(statearr_30585_30725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (6))){
var state_30583__$1 = state_30583;
var statearr_30586_30726 = state_30583__$1;
(statearr_30586_30726[(2)] = null);

(statearr_30586_30726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (5))){
var state_30583__$1 = state_30583;
var statearr_30587_30727 = state_30583__$1;
(statearr_30587_30727[(2)] = null);

(statearr_30587_30727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (4))){
var inst_30573 = (state_30583[(2)]);
var inst_30574 = process.call(null,inst_30573);
var state_30583__$1 = state_30583;
if(cljs.core.truth_(inst_30574)){
var statearr_30588_30728 = state_30583__$1;
(statearr_30588_30728[(1)] = (5));

} else {
var statearr_30589_30729 = state_30583__$1;
(statearr_30589_30729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (3))){
var inst_30581 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30583__$1,inst_30581);
} else {
if((state_val_30584 === (2))){
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30583__$1,(4),jobs);
} else {
if((state_val_30584 === (1))){
var state_30583__$1 = state_30583;
var statearr_30590_30730 = state_30583__$1;
(statearr_30590_30730[(2)] = null);

(statearr_30590_30730[(1)] = (2));


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
});})(__30712,c__19255__auto___30724,G__30543_30713,n__17033__auto___30711,jobs,results,process,async))
;
return ((function (__30712,switch__19199__auto__,c__19255__auto___30724,G__30543_30713,n__17033__auto___30711,jobs,results,process,async){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_30594 = [null,null,null,null,null,null,null];
(statearr_30594[(0)] = state_machine__19200__auto__);

(statearr_30594[(1)] = (1));

return statearr_30594;
});
var state_machine__19200__auto____1 = (function (state_30583){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_30583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e30595){if((e30595 instanceof Object)){
var ex__19203__auto__ = e30595;
var statearr_30596_30731 = state_30583;
(statearr_30596_30731[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30732 = state_30583;
state_30583 = G__30732;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_30583){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_30583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(__30712,switch__19199__auto__,c__19255__auto___30724,G__30543_30713,n__17033__auto___30711,jobs,results,process,async))
})();
var state__19257__auto__ = (function (){var statearr_30597 = f__19256__auto__.call(null);
(statearr_30597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___30724);

return statearr_30597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(__30712,c__19255__auto___30724,G__30543_30713,n__17033__auto___30711,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30733 = (__30712 + (1));
__30712 = G__30733;
continue;
} else {
}
break;
}

var c__19255__auto___30734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___30734,jobs,results,process,async){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___30734,jobs,results,process,async){
return (function (state_30619){
var state_val_30620 = (state_30619[(1)]);
if((state_val_30620 === (9))){
var inst_30612 = (state_30619[(2)]);
var state_30619__$1 = (function (){var statearr_30621 = state_30619;
(statearr_30621[(7)] = inst_30612);

return statearr_30621;
})();
var statearr_30622_30735 = state_30619__$1;
(statearr_30622_30735[(2)] = null);

(statearr_30622_30735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (8))){
var inst_30605 = (state_30619[(8)]);
var inst_30610 = (state_30619[(2)]);
var state_30619__$1 = (function (){var statearr_30623 = state_30619;
(statearr_30623[(9)] = inst_30610);

return statearr_30623;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30619__$1,(9),results,inst_30605);
} else {
if((state_val_30620 === (7))){
var inst_30615 = (state_30619[(2)]);
var state_30619__$1 = state_30619;
var statearr_30624_30736 = state_30619__$1;
(statearr_30624_30736[(2)] = inst_30615);

(statearr_30624_30736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (6))){
var inst_30605 = (state_30619[(8)]);
var inst_30600 = (state_30619[(10)]);
var inst_30605__$1 = cljs.core.async.chan.call(null,(1));
var inst_30606 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30607 = [inst_30600,inst_30605__$1];
var inst_30608 = (new cljs.core.PersistentVector(null,2,(5),inst_30606,inst_30607,null));
var state_30619__$1 = (function (){var statearr_30625 = state_30619;
(statearr_30625[(8)] = inst_30605__$1);

return statearr_30625;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30619__$1,(8),jobs,inst_30608);
} else {
if((state_val_30620 === (5))){
var inst_30603 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30619__$1 = state_30619;
var statearr_30626_30737 = state_30619__$1;
(statearr_30626_30737[(2)] = inst_30603);

(statearr_30626_30737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (4))){
var inst_30600 = (state_30619[(10)]);
var inst_30600__$1 = (state_30619[(2)]);
var inst_30601 = (inst_30600__$1 == null);
var state_30619__$1 = (function (){var statearr_30627 = state_30619;
(statearr_30627[(10)] = inst_30600__$1);

return statearr_30627;
})();
if(cljs.core.truth_(inst_30601)){
var statearr_30628_30738 = state_30619__$1;
(statearr_30628_30738[(1)] = (5));

} else {
var statearr_30629_30739 = state_30619__$1;
(statearr_30629_30739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (3))){
var inst_30617 = (state_30619[(2)]);
var state_30619__$1 = state_30619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30619__$1,inst_30617);
} else {
if((state_val_30620 === (2))){
var state_30619__$1 = state_30619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30619__$1,(4),from);
} else {
if((state_val_30620 === (1))){
var state_30619__$1 = state_30619;
var statearr_30630_30740 = state_30619__$1;
(statearr_30630_30740[(2)] = null);

(statearr_30630_30740[(1)] = (2));


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
});})(c__19255__auto___30734,jobs,results,process,async))
;
return ((function (switch__19199__auto__,c__19255__auto___30734,jobs,results,process,async){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_30634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30634[(0)] = state_machine__19200__auto__);

(statearr_30634[(1)] = (1));

return statearr_30634;
});
var state_machine__19200__auto____1 = (function (state_30619){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_30619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e30635){if((e30635 instanceof Object)){
var ex__19203__auto__ = e30635;
var statearr_30636_30741 = state_30619;
(statearr_30636_30741[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30742 = state_30619;
state_30619 = G__30742;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_30619){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_30619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___30734,jobs,results,process,async))
})();
var state__19257__auto__ = (function (){var statearr_30637 = f__19256__auto__.call(null);
(statearr_30637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___30734);

return statearr_30637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___30734,jobs,results,process,async))
);


var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__,jobs,results,process,async){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__,jobs,results,process,async){
return (function (state_30675){
var state_val_30676 = (state_30675[(1)]);
if((state_val_30676 === (7))){
var inst_30671 = (state_30675[(2)]);
var state_30675__$1 = state_30675;
var statearr_30677_30743 = state_30675__$1;
(statearr_30677_30743[(2)] = inst_30671);

(statearr_30677_30743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (20))){
var state_30675__$1 = state_30675;
var statearr_30678_30744 = state_30675__$1;
(statearr_30678_30744[(2)] = null);

(statearr_30678_30744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (1))){
var state_30675__$1 = state_30675;
var statearr_30679_30745 = state_30675__$1;
(statearr_30679_30745[(2)] = null);

(statearr_30679_30745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (4))){
var inst_30640 = (state_30675[(7)]);
var inst_30640__$1 = (state_30675[(2)]);
var inst_30641 = (inst_30640__$1 == null);
var state_30675__$1 = (function (){var statearr_30680 = state_30675;
(statearr_30680[(7)] = inst_30640__$1);

return statearr_30680;
})();
if(cljs.core.truth_(inst_30641)){
var statearr_30681_30746 = state_30675__$1;
(statearr_30681_30746[(1)] = (5));

} else {
var statearr_30682_30747 = state_30675__$1;
(statearr_30682_30747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (15))){
var inst_30653 = (state_30675[(8)]);
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30675__$1,(18),to,inst_30653);
} else {
if((state_val_30676 === (21))){
var inst_30666 = (state_30675[(2)]);
var state_30675__$1 = state_30675;
var statearr_30683_30748 = state_30675__$1;
(statearr_30683_30748[(2)] = inst_30666);

(statearr_30683_30748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (13))){
var inst_30668 = (state_30675[(2)]);
var state_30675__$1 = (function (){var statearr_30684 = state_30675;
(statearr_30684[(9)] = inst_30668);

return statearr_30684;
})();
var statearr_30685_30749 = state_30675__$1;
(statearr_30685_30749[(2)] = null);

(statearr_30685_30749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (6))){
var inst_30640 = (state_30675[(7)]);
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30675__$1,(11),inst_30640);
} else {
if((state_val_30676 === (17))){
var inst_30661 = (state_30675[(2)]);
var state_30675__$1 = state_30675;
if(cljs.core.truth_(inst_30661)){
var statearr_30686_30750 = state_30675__$1;
(statearr_30686_30750[(1)] = (19));

} else {
var statearr_30687_30751 = state_30675__$1;
(statearr_30687_30751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (3))){
var inst_30673 = (state_30675[(2)]);
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30675__$1,inst_30673);
} else {
if((state_val_30676 === (12))){
var inst_30650 = (state_30675[(10)]);
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30675__$1,(14),inst_30650);
} else {
if((state_val_30676 === (2))){
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30675__$1,(4),results);
} else {
if((state_val_30676 === (19))){
var state_30675__$1 = state_30675;
var statearr_30688_30752 = state_30675__$1;
(statearr_30688_30752[(2)] = null);

(statearr_30688_30752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (11))){
var inst_30650 = (state_30675[(2)]);
var state_30675__$1 = (function (){var statearr_30689 = state_30675;
(statearr_30689[(10)] = inst_30650);

return statearr_30689;
})();
var statearr_30690_30753 = state_30675__$1;
(statearr_30690_30753[(2)] = null);

(statearr_30690_30753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (9))){
var state_30675__$1 = state_30675;
var statearr_30691_30754 = state_30675__$1;
(statearr_30691_30754[(2)] = null);

(statearr_30691_30754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (5))){
var state_30675__$1 = state_30675;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30692_30755 = state_30675__$1;
(statearr_30692_30755[(1)] = (8));

} else {
var statearr_30693_30756 = state_30675__$1;
(statearr_30693_30756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (14))){
var inst_30653 = (state_30675[(8)]);
var inst_30655 = (state_30675[(11)]);
var inst_30653__$1 = (state_30675[(2)]);
var inst_30654 = (inst_30653__$1 == null);
var inst_30655__$1 = cljs.core.not.call(null,inst_30654);
var state_30675__$1 = (function (){var statearr_30694 = state_30675;
(statearr_30694[(8)] = inst_30653__$1);

(statearr_30694[(11)] = inst_30655__$1);

return statearr_30694;
})();
if(inst_30655__$1){
var statearr_30695_30757 = state_30675__$1;
(statearr_30695_30757[(1)] = (15));

} else {
var statearr_30696_30758 = state_30675__$1;
(statearr_30696_30758[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (16))){
var inst_30655 = (state_30675[(11)]);
var state_30675__$1 = state_30675;
var statearr_30697_30759 = state_30675__$1;
(statearr_30697_30759[(2)] = inst_30655);

(statearr_30697_30759[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (10))){
var inst_30647 = (state_30675[(2)]);
var state_30675__$1 = state_30675;
var statearr_30698_30760 = state_30675__$1;
(statearr_30698_30760[(2)] = inst_30647);

(statearr_30698_30760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (18))){
var inst_30658 = (state_30675[(2)]);
var state_30675__$1 = state_30675;
var statearr_30699_30761 = state_30675__$1;
(statearr_30699_30761[(2)] = inst_30658);

(statearr_30699_30761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (8))){
var inst_30644 = cljs.core.async.close_BANG_.call(null,to);
var state_30675__$1 = state_30675;
var statearr_30700_30762 = state_30675__$1;
(statearr_30700_30762[(2)] = inst_30644);

(statearr_30700_30762[(1)] = (10));


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
});})(c__19255__auto__,jobs,results,process,async))
;
return ((function (switch__19199__auto__,c__19255__auto__,jobs,results,process,async){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_30704 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30704[(0)] = state_machine__19200__auto__);

(statearr_30704[(1)] = (1));

return statearr_30704;
});
var state_machine__19200__auto____1 = (function (state_30675){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_30675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e30705){if((e30705 instanceof Object)){
var ex__19203__auto__ = e30705;
var statearr_30706_30763 = state_30675;
(statearr_30706_30763[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30764 = state_30675;
state_30675 = G__30764;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_30675){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_30675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__,jobs,results,process,async))
})();
var state__19257__auto__ = (function (){var statearr_30707 = f__19256__auto__.call(null);
(statearr_30707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_30707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__,jobs,results,process,async))
);

return c__19255__auto__;
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
var c__19255__auto___30865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___30865,tc,fc){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___30865,tc,fc){
return (function (state_30840){
var state_val_30841 = (state_30840[(1)]);
if((state_val_30841 === (7))){
var inst_30836 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30842_30866 = state_30840__$1;
(statearr_30842_30866[(2)] = inst_30836);

(statearr_30842_30866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (1))){
var state_30840__$1 = state_30840;
var statearr_30843_30867 = state_30840__$1;
(statearr_30843_30867[(2)] = null);

(statearr_30843_30867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (4))){
var inst_30817 = (state_30840[(7)]);
var inst_30817__$1 = (state_30840[(2)]);
var inst_30818 = (inst_30817__$1 == null);
var state_30840__$1 = (function (){var statearr_30844 = state_30840;
(statearr_30844[(7)] = inst_30817__$1);

return statearr_30844;
})();
if(cljs.core.truth_(inst_30818)){
var statearr_30845_30868 = state_30840__$1;
(statearr_30845_30868[(1)] = (5));

} else {
var statearr_30846_30869 = state_30840__$1;
(statearr_30846_30869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (13))){
var state_30840__$1 = state_30840;
var statearr_30847_30870 = state_30840__$1;
(statearr_30847_30870[(2)] = null);

(statearr_30847_30870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (6))){
var inst_30817 = (state_30840[(7)]);
var inst_30823 = p.call(null,inst_30817);
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30823)){
var statearr_30848_30871 = state_30840__$1;
(statearr_30848_30871[(1)] = (9));

} else {
var statearr_30849_30872 = state_30840__$1;
(statearr_30849_30872[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (3))){
var inst_30838 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30840__$1,inst_30838);
} else {
if((state_val_30841 === (12))){
var state_30840__$1 = state_30840;
var statearr_30850_30873 = state_30840__$1;
(statearr_30850_30873[(2)] = null);

(statearr_30850_30873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (2))){
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30840__$1,(4),ch);
} else {
if((state_val_30841 === (11))){
var inst_30817 = (state_30840[(7)]);
var inst_30827 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30840__$1,(8),inst_30827,inst_30817);
} else {
if((state_val_30841 === (9))){
var state_30840__$1 = state_30840;
var statearr_30851_30874 = state_30840__$1;
(statearr_30851_30874[(2)] = tc);

(statearr_30851_30874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (5))){
var inst_30820 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30821 = cljs.core.async.close_BANG_.call(null,fc);
var state_30840__$1 = (function (){var statearr_30852 = state_30840;
(statearr_30852[(8)] = inst_30820);

return statearr_30852;
})();
var statearr_30853_30875 = state_30840__$1;
(statearr_30853_30875[(2)] = inst_30821);

(statearr_30853_30875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (14))){
var inst_30834 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30854_30876 = state_30840__$1;
(statearr_30854_30876[(2)] = inst_30834);

(statearr_30854_30876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (10))){
var state_30840__$1 = state_30840;
var statearr_30855_30877 = state_30840__$1;
(statearr_30855_30877[(2)] = fc);

(statearr_30855_30877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (8))){
var inst_30829 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30829)){
var statearr_30856_30878 = state_30840__$1;
(statearr_30856_30878[(1)] = (12));

} else {
var statearr_30857_30879 = state_30840__$1;
(statearr_30857_30879[(1)] = (13));

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
});})(c__19255__auto___30865,tc,fc))
;
return ((function (switch__19199__auto__,c__19255__auto___30865,tc,fc){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_30861 = [null,null,null,null,null,null,null,null,null];
(statearr_30861[(0)] = state_machine__19200__auto__);

(statearr_30861[(1)] = (1));

return statearr_30861;
});
var state_machine__19200__auto____1 = (function (state_30840){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_30840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e30862){if((e30862 instanceof Object)){
var ex__19203__auto__ = e30862;
var statearr_30863_30880 = state_30840;
(statearr_30863_30880[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30881 = state_30840;
state_30840 = G__30881;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_30840){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_30840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___30865,tc,fc))
})();
var state__19257__auto__ = (function (){var statearr_30864 = f__19256__auto__.call(null);
(statearr_30864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___30865);

return statearr_30864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___30865,tc,fc))
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
var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__){
return (function (state_30928){
var state_val_30929 = (state_30928[(1)]);
if((state_val_30929 === (7))){
var inst_30924 = (state_30928[(2)]);
var state_30928__$1 = state_30928;
var statearr_30930_30946 = state_30928__$1;
(statearr_30930_30946[(2)] = inst_30924);

(statearr_30930_30946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (6))){
var inst_30914 = (state_30928[(7)]);
var inst_30917 = (state_30928[(8)]);
var inst_30921 = f.call(null,inst_30914,inst_30917);
var inst_30914__$1 = inst_30921;
var state_30928__$1 = (function (){var statearr_30931 = state_30928;
(statearr_30931[(7)] = inst_30914__$1);

return statearr_30931;
})();
var statearr_30932_30947 = state_30928__$1;
(statearr_30932_30947[(2)] = null);

(statearr_30932_30947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (5))){
var inst_30914 = (state_30928[(7)]);
var state_30928__$1 = state_30928;
var statearr_30933_30948 = state_30928__$1;
(statearr_30933_30948[(2)] = inst_30914);

(statearr_30933_30948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (4))){
var inst_30917 = (state_30928[(8)]);
var inst_30917__$1 = (state_30928[(2)]);
var inst_30918 = (inst_30917__$1 == null);
var state_30928__$1 = (function (){var statearr_30934 = state_30928;
(statearr_30934[(8)] = inst_30917__$1);

return statearr_30934;
})();
if(cljs.core.truth_(inst_30918)){
var statearr_30935_30949 = state_30928__$1;
(statearr_30935_30949[(1)] = (5));

} else {
var statearr_30936_30950 = state_30928__$1;
(statearr_30936_30950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (3))){
var inst_30926 = (state_30928[(2)]);
var state_30928__$1 = state_30928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30928__$1,inst_30926);
} else {
if((state_val_30929 === (2))){
var state_30928__$1 = state_30928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30928__$1,(4),ch);
} else {
if((state_val_30929 === (1))){
var inst_30914 = init;
var state_30928__$1 = (function (){var statearr_30937 = state_30928;
(statearr_30937[(7)] = inst_30914);

return statearr_30937;
})();
var statearr_30938_30951 = state_30928__$1;
(statearr_30938_30951[(2)] = null);

(statearr_30938_30951[(1)] = (2));


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
});})(c__19255__auto__))
;
return ((function (switch__19199__auto__,c__19255__auto__){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_30942 = [null,null,null,null,null,null,null,null,null];
(statearr_30942[(0)] = state_machine__19200__auto__);

(statearr_30942[(1)] = (1));

return statearr_30942;
});
var state_machine__19200__auto____1 = (function (state_30928){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_30928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e30943){if((e30943 instanceof Object)){
var ex__19203__auto__ = e30943;
var statearr_30944_30952 = state_30928;
(statearr_30944_30952[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30953 = state_30928;
state_30928 = G__30953;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_30928){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_30928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__))
})();
var state__19257__auto__ = (function (){var statearr_30945 = f__19256__auto__.call(null);
(statearr_30945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_30945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__))
);

return c__19255__auto__;
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
var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__){
return (function (state_31027){
var state_val_31028 = (state_31027[(1)]);
if((state_val_31028 === (7))){
var inst_31009 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31029_31052 = state_31027__$1;
(statearr_31029_31052[(2)] = inst_31009);

(statearr_31029_31052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (1))){
var inst_31003 = cljs.core.seq.call(null,coll);
var inst_31004 = inst_31003;
var state_31027__$1 = (function (){var statearr_31030 = state_31027;
(statearr_31030[(7)] = inst_31004);

return statearr_31030;
})();
var statearr_31031_31053 = state_31027__$1;
(statearr_31031_31053[(2)] = null);

(statearr_31031_31053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (4))){
var inst_31004 = (state_31027[(7)]);
var inst_31007 = cljs.core.first.call(null,inst_31004);
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31027__$1,(7),ch,inst_31007);
} else {
if((state_val_31028 === (13))){
var inst_31021 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31032_31054 = state_31027__$1;
(statearr_31032_31054[(2)] = inst_31021);

(statearr_31032_31054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (6))){
var inst_31012 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
if(cljs.core.truth_(inst_31012)){
var statearr_31033_31055 = state_31027__$1;
(statearr_31033_31055[(1)] = (8));

} else {
var statearr_31034_31056 = state_31027__$1;
(statearr_31034_31056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (3))){
var inst_31025 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31027__$1,inst_31025);
} else {
if((state_val_31028 === (12))){
var state_31027__$1 = state_31027;
var statearr_31035_31057 = state_31027__$1;
(statearr_31035_31057[(2)] = null);

(statearr_31035_31057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (2))){
var inst_31004 = (state_31027[(7)]);
var state_31027__$1 = state_31027;
if(cljs.core.truth_(inst_31004)){
var statearr_31036_31058 = state_31027__$1;
(statearr_31036_31058[(1)] = (4));

} else {
var statearr_31037_31059 = state_31027__$1;
(statearr_31037_31059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (11))){
var inst_31018 = cljs.core.async.close_BANG_.call(null,ch);
var state_31027__$1 = state_31027;
var statearr_31038_31060 = state_31027__$1;
(statearr_31038_31060[(2)] = inst_31018);

(statearr_31038_31060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (9))){
var state_31027__$1 = state_31027;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31039_31061 = state_31027__$1;
(statearr_31039_31061[(1)] = (11));

} else {
var statearr_31040_31062 = state_31027__$1;
(statearr_31040_31062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (5))){
var inst_31004 = (state_31027[(7)]);
var state_31027__$1 = state_31027;
var statearr_31041_31063 = state_31027__$1;
(statearr_31041_31063[(2)] = inst_31004);

(statearr_31041_31063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (10))){
var inst_31023 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31042_31064 = state_31027__$1;
(statearr_31042_31064[(2)] = inst_31023);

(statearr_31042_31064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (8))){
var inst_31004 = (state_31027[(7)]);
var inst_31014 = cljs.core.next.call(null,inst_31004);
var inst_31004__$1 = inst_31014;
var state_31027__$1 = (function (){var statearr_31043 = state_31027;
(statearr_31043[(7)] = inst_31004__$1);

return statearr_31043;
})();
var statearr_31044_31065 = state_31027__$1;
(statearr_31044_31065[(2)] = null);

(statearr_31044_31065[(1)] = (2));


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
});})(c__19255__auto__))
;
return ((function (switch__19199__auto__,c__19255__auto__){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_31048 = [null,null,null,null,null,null,null,null];
(statearr_31048[(0)] = state_machine__19200__auto__);

(statearr_31048[(1)] = (1));

return statearr_31048;
});
var state_machine__19200__auto____1 = (function (state_31027){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_31027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e31049){if((e31049 instanceof Object)){
var ex__19203__auto__ = e31049;
var statearr_31050_31066 = state_31027;
(statearr_31050_31066[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31067 = state_31027;
state_31027 = G__31067;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_31027){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_31027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__))
})();
var state__19257__auto__ = (function (){var statearr_31051 = f__19256__auto__.call(null);
(statearr_31051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_31051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__))
);

return c__19255__auto__;
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

cljs.core.async.Mux = (function (){var obj31069 = {};
return obj31069;
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
var x__16790__auto__ = (((_ == null))?null:_);
return (function (){var or__16145__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16790__auto__)]);
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


cljs.core.async.Mult = (function (){var obj31071 = {};
return obj31071;
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
var x__16790__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16790__auto__)]);
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
var x__16790__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16790__auto__)]);
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
var x__16790__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16790__auto__)]);
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
if(typeof cljs.core.async.t31293 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31293 = (function (cs,ch,mult,meta31294){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31294 = meta31294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31293.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31293.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31293.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31293.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31293.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31295){
var self__ = this;
var _31295__$1 = this;
return self__.meta31294;
});})(cs))
;

cljs.core.async.t31293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31295,meta31294__$1){
var self__ = this;
var _31295__$1 = this;
return (new cljs.core.async.t31293(self__.cs,self__.ch,self__.mult,meta31294__$1));
});})(cs))
;

cljs.core.async.t31293.cljs$lang$type = true;

cljs.core.async.t31293.cljs$lang$ctorStr = "cljs.core.async/t31293";

cljs.core.async.t31293.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16733__auto__,writer__16734__auto__,opt__16735__auto__){
return cljs.core._write.call(null,writer__16734__auto__,"cljs.core.async/t31293");
});})(cs))
;

cljs.core.async.__GT_t31293 = ((function (cs){
return (function __GT_t31293(cs__$1,ch__$1,mult__$1,meta31294){
return (new cljs.core.async.t31293(cs__$1,ch__$1,mult__$1,meta31294));
});})(cs))
;

}

return (new cljs.core.async.t31293(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19255__auto___31514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___31514,cs,m,dchan,dctr,done){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___31514,cs,m,dchan,dctr,done){
return (function (state_31426){
var state_val_31427 = (state_31426[(1)]);
if((state_val_31427 === (7))){
var inst_31422 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31428_31515 = state_31426__$1;
(statearr_31428_31515[(2)] = inst_31422);

(statearr_31428_31515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (20))){
var inst_31327 = (state_31426[(7)]);
var inst_31337 = cljs.core.first.call(null,inst_31327);
var inst_31338 = cljs.core.nth.call(null,inst_31337,(0),null);
var inst_31339 = cljs.core.nth.call(null,inst_31337,(1),null);
var state_31426__$1 = (function (){var statearr_31429 = state_31426;
(statearr_31429[(8)] = inst_31338);

return statearr_31429;
})();
if(cljs.core.truth_(inst_31339)){
var statearr_31430_31516 = state_31426__$1;
(statearr_31430_31516[(1)] = (22));

} else {
var statearr_31431_31517 = state_31426__$1;
(statearr_31431_31517[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (27))){
var inst_31369 = (state_31426[(9)]);
var inst_31367 = (state_31426[(10)]);
var inst_31374 = (state_31426[(11)]);
var inst_31298 = (state_31426[(12)]);
var inst_31374__$1 = cljs.core._nth.call(null,inst_31367,inst_31369);
var inst_31375 = cljs.core.async.put_BANG_.call(null,inst_31374__$1,inst_31298,done);
var state_31426__$1 = (function (){var statearr_31432 = state_31426;
(statearr_31432[(11)] = inst_31374__$1);

return statearr_31432;
})();
if(cljs.core.truth_(inst_31375)){
var statearr_31433_31518 = state_31426__$1;
(statearr_31433_31518[(1)] = (30));

} else {
var statearr_31434_31519 = state_31426__$1;
(statearr_31434_31519[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (1))){
var state_31426__$1 = state_31426;
var statearr_31435_31520 = state_31426__$1;
(statearr_31435_31520[(2)] = null);

(statearr_31435_31520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (24))){
var inst_31327 = (state_31426[(7)]);
var inst_31344 = (state_31426[(2)]);
var inst_31345 = cljs.core.next.call(null,inst_31327);
var inst_31307 = inst_31345;
var inst_31308 = null;
var inst_31309 = (0);
var inst_31310 = (0);
var state_31426__$1 = (function (){var statearr_31436 = state_31426;
(statearr_31436[(13)] = inst_31308);

(statearr_31436[(14)] = inst_31309);

(statearr_31436[(15)] = inst_31310);

(statearr_31436[(16)] = inst_31344);

(statearr_31436[(17)] = inst_31307);

return statearr_31436;
})();
var statearr_31437_31521 = state_31426__$1;
(statearr_31437_31521[(2)] = null);

(statearr_31437_31521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (39))){
var state_31426__$1 = state_31426;
var statearr_31441_31522 = state_31426__$1;
(statearr_31441_31522[(2)] = null);

(statearr_31441_31522[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (4))){
var inst_31298 = (state_31426[(12)]);
var inst_31298__$1 = (state_31426[(2)]);
var inst_31299 = (inst_31298__$1 == null);
var state_31426__$1 = (function (){var statearr_31442 = state_31426;
(statearr_31442[(12)] = inst_31298__$1);

return statearr_31442;
})();
if(cljs.core.truth_(inst_31299)){
var statearr_31443_31523 = state_31426__$1;
(statearr_31443_31523[(1)] = (5));

} else {
var statearr_31444_31524 = state_31426__$1;
(statearr_31444_31524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (15))){
var inst_31308 = (state_31426[(13)]);
var inst_31309 = (state_31426[(14)]);
var inst_31310 = (state_31426[(15)]);
var inst_31307 = (state_31426[(17)]);
var inst_31323 = (state_31426[(2)]);
var inst_31324 = (inst_31310 + (1));
var tmp31438 = inst_31308;
var tmp31439 = inst_31309;
var tmp31440 = inst_31307;
var inst_31307__$1 = tmp31440;
var inst_31308__$1 = tmp31438;
var inst_31309__$1 = tmp31439;
var inst_31310__$1 = inst_31324;
var state_31426__$1 = (function (){var statearr_31445 = state_31426;
(statearr_31445[(13)] = inst_31308__$1);

(statearr_31445[(14)] = inst_31309__$1);

(statearr_31445[(18)] = inst_31323);

(statearr_31445[(15)] = inst_31310__$1);

(statearr_31445[(17)] = inst_31307__$1);

return statearr_31445;
})();
var statearr_31446_31525 = state_31426__$1;
(statearr_31446_31525[(2)] = null);

(statearr_31446_31525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (21))){
var inst_31348 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31450_31526 = state_31426__$1;
(statearr_31450_31526[(2)] = inst_31348);

(statearr_31450_31526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (31))){
var inst_31374 = (state_31426[(11)]);
var inst_31378 = done.call(null,null);
var inst_31379 = cljs.core.async.untap_STAR_.call(null,m,inst_31374);
var state_31426__$1 = (function (){var statearr_31451 = state_31426;
(statearr_31451[(19)] = inst_31378);

return statearr_31451;
})();
var statearr_31452_31527 = state_31426__$1;
(statearr_31452_31527[(2)] = inst_31379);

(statearr_31452_31527[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (32))){
var inst_31369 = (state_31426[(9)]);
var inst_31367 = (state_31426[(10)]);
var inst_31366 = (state_31426[(20)]);
var inst_31368 = (state_31426[(21)]);
var inst_31381 = (state_31426[(2)]);
var inst_31382 = (inst_31369 + (1));
var tmp31447 = inst_31367;
var tmp31448 = inst_31366;
var tmp31449 = inst_31368;
var inst_31366__$1 = tmp31448;
var inst_31367__$1 = tmp31447;
var inst_31368__$1 = tmp31449;
var inst_31369__$1 = inst_31382;
var state_31426__$1 = (function (){var statearr_31453 = state_31426;
(statearr_31453[(22)] = inst_31381);

(statearr_31453[(9)] = inst_31369__$1);

(statearr_31453[(10)] = inst_31367__$1);

(statearr_31453[(20)] = inst_31366__$1);

(statearr_31453[(21)] = inst_31368__$1);

return statearr_31453;
})();
var statearr_31454_31528 = state_31426__$1;
(statearr_31454_31528[(2)] = null);

(statearr_31454_31528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (40))){
var inst_31394 = (state_31426[(23)]);
var inst_31398 = done.call(null,null);
var inst_31399 = cljs.core.async.untap_STAR_.call(null,m,inst_31394);
var state_31426__$1 = (function (){var statearr_31455 = state_31426;
(statearr_31455[(24)] = inst_31398);

return statearr_31455;
})();
var statearr_31456_31529 = state_31426__$1;
(statearr_31456_31529[(2)] = inst_31399);

(statearr_31456_31529[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (33))){
var inst_31385 = (state_31426[(25)]);
var inst_31387 = cljs.core.chunked_seq_QMARK_.call(null,inst_31385);
var state_31426__$1 = state_31426;
if(inst_31387){
var statearr_31457_31530 = state_31426__$1;
(statearr_31457_31530[(1)] = (36));

} else {
var statearr_31458_31531 = state_31426__$1;
(statearr_31458_31531[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (13))){
var inst_31317 = (state_31426[(26)]);
var inst_31320 = cljs.core.async.close_BANG_.call(null,inst_31317);
var state_31426__$1 = state_31426;
var statearr_31459_31532 = state_31426__$1;
(statearr_31459_31532[(2)] = inst_31320);

(statearr_31459_31532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (22))){
var inst_31338 = (state_31426[(8)]);
var inst_31341 = cljs.core.async.close_BANG_.call(null,inst_31338);
var state_31426__$1 = state_31426;
var statearr_31460_31533 = state_31426__$1;
(statearr_31460_31533[(2)] = inst_31341);

(statearr_31460_31533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (36))){
var inst_31385 = (state_31426[(25)]);
var inst_31389 = cljs.core.chunk_first.call(null,inst_31385);
var inst_31390 = cljs.core.chunk_rest.call(null,inst_31385);
var inst_31391 = cljs.core.count.call(null,inst_31389);
var inst_31366 = inst_31390;
var inst_31367 = inst_31389;
var inst_31368 = inst_31391;
var inst_31369 = (0);
var state_31426__$1 = (function (){var statearr_31461 = state_31426;
(statearr_31461[(9)] = inst_31369);

(statearr_31461[(10)] = inst_31367);

(statearr_31461[(20)] = inst_31366);

(statearr_31461[(21)] = inst_31368);

return statearr_31461;
})();
var statearr_31462_31534 = state_31426__$1;
(statearr_31462_31534[(2)] = null);

(statearr_31462_31534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (41))){
var inst_31385 = (state_31426[(25)]);
var inst_31401 = (state_31426[(2)]);
var inst_31402 = cljs.core.next.call(null,inst_31385);
var inst_31366 = inst_31402;
var inst_31367 = null;
var inst_31368 = (0);
var inst_31369 = (0);
var state_31426__$1 = (function (){var statearr_31463 = state_31426;
(statearr_31463[(9)] = inst_31369);

(statearr_31463[(10)] = inst_31367);

(statearr_31463[(20)] = inst_31366);

(statearr_31463[(21)] = inst_31368);

(statearr_31463[(27)] = inst_31401);

return statearr_31463;
})();
var statearr_31464_31535 = state_31426__$1;
(statearr_31464_31535[(2)] = null);

(statearr_31464_31535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (43))){
var state_31426__$1 = state_31426;
var statearr_31465_31536 = state_31426__$1;
(statearr_31465_31536[(2)] = null);

(statearr_31465_31536[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (29))){
var inst_31410 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31466_31537 = state_31426__$1;
(statearr_31466_31537[(2)] = inst_31410);

(statearr_31466_31537[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (44))){
var inst_31419 = (state_31426[(2)]);
var state_31426__$1 = (function (){var statearr_31467 = state_31426;
(statearr_31467[(28)] = inst_31419);

return statearr_31467;
})();
var statearr_31468_31538 = state_31426__$1;
(statearr_31468_31538[(2)] = null);

(statearr_31468_31538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (6))){
var inst_31358 = (state_31426[(29)]);
var inst_31357 = cljs.core.deref.call(null,cs);
var inst_31358__$1 = cljs.core.keys.call(null,inst_31357);
var inst_31359 = cljs.core.count.call(null,inst_31358__$1);
var inst_31360 = cljs.core.reset_BANG_.call(null,dctr,inst_31359);
var inst_31365 = cljs.core.seq.call(null,inst_31358__$1);
var inst_31366 = inst_31365;
var inst_31367 = null;
var inst_31368 = (0);
var inst_31369 = (0);
var state_31426__$1 = (function (){var statearr_31469 = state_31426;
(statearr_31469[(30)] = inst_31360);

(statearr_31469[(9)] = inst_31369);

(statearr_31469[(10)] = inst_31367);

(statearr_31469[(20)] = inst_31366);

(statearr_31469[(21)] = inst_31368);

(statearr_31469[(29)] = inst_31358__$1);

return statearr_31469;
})();
var statearr_31470_31539 = state_31426__$1;
(statearr_31470_31539[(2)] = null);

(statearr_31470_31539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (28))){
var inst_31366 = (state_31426[(20)]);
var inst_31385 = (state_31426[(25)]);
var inst_31385__$1 = cljs.core.seq.call(null,inst_31366);
var state_31426__$1 = (function (){var statearr_31471 = state_31426;
(statearr_31471[(25)] = inst_31385__$1);

return statearr_31471;
})();
if(inst_31385__$1){
var statearr_31472_31540 = state_31426__$1;
(statearr_31472_31540[(1)] = (33));

} else {
var statearr_31473_31541 = state_31426__$1;
(statearr_31473_31541[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (25))){
var inst_31369 = (state_31426[(9)]);
var inst_31368 = (state_31426[(21)]);
var inst_31371 = (inst_31369 < inst_31368);
var inst_31372 = inst_31371;
var state_31426__$1 = state_31426;
if(cljs.core.truth_(inst_31372)){
var statearr_31474_31542 = state_31426__$1;
(statearr_31474_31542[(1)] = (27));

} else {
var statearr_31475_31543 = state_31426__$1;
(statearr_31475_31543[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (34))){
var state_31426__$1 = state_31426;
var statearr_31476_31544 = state_31426__$1;
(statearr_31476_31544[(2)] = null);

(statearr_31476_31544[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (17))){
var state_31426__$1 = state_31426;
var statearr_31477_31545 = state_31426__$1;
(statearr_31477_31545[(2)] = null);

(statearr_31477_31545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (3))){
var inst_31424 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31426__$1,inst_31424);
} else {
if((state_val_31427 === (12))){
var inst_31353 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31478_31546 = state_31426__$1;
(statearr_31478_31546[(2)] = inst_31353);

(statearr_31478_31546[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (2))){
var state_31426__$1 = state_31426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31426__$1,(4),ch);
} else {
if((state_val_31427 === (23))){
var state_31426__$1 = state_31426;
var statearr_31479_31547 = state_31426__$1;
(statearr_31479_31547[(2)] = null);

(statearr_31479_31547[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (35))){
var inst_31408 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31480_31548 = state_31426__$1;
(statearr_31480_31548[(2)] = inst_31408);

(statearr_31480_31548[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (19))){
var inst_31327 = (state_31426[(7)]);
var inst_31331 = cljs.core.chunk_first.call(null,inst_31327);
var inst_31332 = cljs.core.chunk_rest.call(null,inst_31327);
var inst_31333 = cljs.core.count.call(null,inst_31331);
var inst_31307 = inst_31332;
var inst_31308 = inst_31331;
var inst_31309 = inst_31333;
var inst_31310 = (0);
var state_31426__$1 = (function (){var statearr_31481 = state_31426;
(statearr_31481[(13)] = inst_31308);

(statearr_31481[(14)] = inst_31309);

(statearr_31481[(15)] = inst_31310);

(statearr_31481[(17)] = inst_31307);

return statearr_31481;
})();
var statearr_31482_31549 = state_31426__$1;
(statearr_31482_31549[(2)] = null);

(statearr_31482_31549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (11))){
var inst_31307 = (state_31426[(17)]);
var inst_31327 = (state_31426[(7)]);
var inst_31327__$1 = cljs.core.seq.call(null,inst_31307);
var state_31426__$1 = (function (){var statearr_31483 = state_31426;
(statearr_31483[(7)] = inst_31327__$1);

return statearr_31483;
})();
if(inst_31327__$1){
var statearr_31484_31550 = state_31426__$1;
(statearr_31484_31550[(1)] = (16));

} else {
var statearr_31485_31551 = state_31426__$1;
(statearr_31485_31551[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (9))){
var inst_31355 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31486_31552 = state_31426__$1;
(statearr_31486_31552[(2)] = inst_31355);

(statearr_31486_31552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (5))){
var inst_31305 = cljs.core.deref.call(null,cs);
var inst_31306 = cljs.core.seq.call(null,inst_31305);
var inst_31307 = inst_31306;
var inst_31308 = null;
var inst_31309 = (0);
var inst_31310 = (0);
var state_31426__$1 = (function (){var statearr_31487 = state_31426;
(statearr_31487[(13)] = inst_31308);

(statearr_31487[(14)] = inst_31309);

(statearr_31487[(15)] = inst_31310);

(statearr_31487[(17)] = inst_31307);

return statearr_31487;
})();
var statearr_31488_31553 = state_31426__$1;
(statearr_31488_31553[(2)] = null);

(statearr_31488_31553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (14))){
var state_31426__$1 = state_31426;
var statearr_31489_31554 = state_31426__$1;
(statearr_31489_31554[(2)] = null);

(statearr_31489_31554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (45))){
var inst_31416 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31490_31555 = state_31426__$1;
(statearr_31490_31555[(2)] = inst_31416);

(statearr_31490_31555[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (26))){
var inst_31358 = (state_31426[(29)]);
var inst_31412 = (state_31426[(2)]);
var inst_31413 = cljs.core.seq.call(null,inst_31358);
var state_31426__$1 = (function (){var statearr_31491 = state_31426;
(statearr_31491[(31)] = inst_31412);

return statearr_31491;
})();
if(inst_31413){
var statearr_31492_31556 = state_31426__$1;
(statearr_31492_31556[(1)] = (42));

} else {
var statearr_31493_31557 = state_31426__$1;
(statearr_31493_31557[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (16))){
var inst_31327 = (state_31426[(7)]);
var inst_31329 = cljs.core.chunked_seq_QMARK_.call(null,inst_31327);
var state_31426__$1 = state_31426;
if(inst_31329){
var statearr_31494_31558 = state_31426__$1;
(statearr_31494_31558[(1)] = (19));

} else {
var statearr_31495_31559 = state_31426__$1;
(statearr_31495_31559[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (38))){
var inst_31405 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31496_31560 = state_31426__$1;
(statearr_31496_31560[(2)] = inst_31405);

(statearr_31496_31560[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (30))){
var state_31426__$1 = state_31426;
var statearr_31497_31561 = state_31426__$1;
(statearr_31497_31561[(2)] = null);

(statearr_31497_31561[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (10))){
var inst_31308 = (state_31426[(13)]);
var inst_31310 = (state_31426[(15)]);
var inst_31316 = cljs.core._nth.call(null,inst_31308,inst_31310);
var inst_31317 = cljs.core.nth.call(null,inst_31316,(0),null);
var inst_31318 = cljs.core.nth.call(null,inst_31316,(1),null);
var state_31426__$1 = (function (){var statearr_31498 = state_31426;
(statearr_31498[(26)] = inst_31317);

return statearr_31498;
})();
if(cljs.core.truth_(inst_31318)){
var statearr_31499_31562 = state_31426__$1;
(statearr_31499_31562[(1)] = (13));

} else {
var statearr_31500_31563 = state_31426__$1;
(statearr_31500_31563[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (18))){
var inst_31351 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31501_31564 = state_31426__$1;
(statearr_31501_31564[(2)] = inst_31351);

(statearr_31501_31564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (42))){
var state_31426__$1 = state_31426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31426__$1,(45),dchan);
} else {
if((state_val_31427 === (37))){
var inst_31394 = (state_31426[(23)]);
var inst_31385 = (state_31426[(25)]);
var inst_31298 = (state_31426[(12)]);
var inst_31394__$1 = cljs.core.first.call(null,inst_31385);
var inst_31395 = cljs.core.async.put_BANG_.call(null,inst_31394__$1,inst_31298,done);
var state_31426__$1 = (function (){var statearr_31502 = state_31426;
(statearr_31502[(23)] = inst_31394__$1);

return statearr_31502;
})();
if(cljs.core.truth_(inst_31395)){
var statearr_31503_31565 = state_31426__$1;
(statearr_31503_31565[(1)] = (39));

} else {
var statearr_31504_31566 = state_31426__$1;
(statearr_31504_31566[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (8))){
var inst_31309 = (state_31426[(14)]);
var inst_31310 = (state_31426[(15)]);
var inst_31312 = (inst_31310 < inst_31309);
var inst_31313 = inst_31312;
var state_31426__$1 = state_31426;
if(cljs.core.truth_(inst_31313)){
var statearr_31505_31567 = state_31426__$1;
(statearr_31505_31567[(1)] = (10));

} else {
var statearr_31506_31568 = state_31426__$1;
(statearr_31506_31568[(1)] = (11));

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
});})(c__19255__auto___31514,cs,m,dchan,dctr,done))
;
return ((function (switch__19199__auto__,c__19255__auto___31514,cs,m,dchan,dctr,done){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_31510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31510[(0)] = state_machine__19200__auto__);

(statearr_31510[(1)] = (1));

return statearr_31510;
});
var state_machine__19200__auto____1 = (function (state_31426){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_31426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e31511){if((e31511 instanceof Object)){
var ex__19203__auto__ = e31511;
var statearr_31512_31569 = state_31426;
(statearr_31512_31569[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31570 = state_31426;
state_31426 = G__31570;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_31426){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_31426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___31514,cs,m,dchan,dctr,done))
})();
var state__19257__auto__ = (function (){var statearr_31513 = f__19256__auto__.call(null);
(statearr_31513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___31514);

return statearr_31513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___31514,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj31572 = {};
return obj31572;
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
var x__16790__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16790__auto__)]);
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
var x__16790__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16790__auto__)]);
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
var x__16790__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16790__auto__)]);
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
var x__16790__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16790__auto__)]);
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
var x__16790__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16790__auto__)]);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__31573){
var map__31578 = p__31573;
var map__31578__$1 = ((cljs.core.seq_QMARK_.call(null,map__31578))?cljs.core.apply.call(null,cljs.core.hash_map,map__31578):map__31578);
var opts = map__31578__$1;
var statearr_31579_31582 = state;
(statearr_31579_31582[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31578,map__31578__$1,opts){
return (function (val){
var statearr_31580_31583 = state;
(statearr_31580_31583[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31578,map__31578__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_31581_31584 = state;
(statearr_31581_31584[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__31573 = null;
if (arguments.length > 3) {
var G__31585__i = 0, G__31585__a = new Array(arguments.length -  3);
while (G__31585__i < G__31585__a.length) {G__31585__a[G__31585__i] = arguments[G__31585__i + 3]; ++G__31585__i;}
  p__31573 = new cljs.core.IndexedSeq(G__31585__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__31573);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__31586){
var state = cljs.core.first(arglist__31586);
arglist__31586 = cljs.core.next(arglist__31586);
var cont_block = cljs.core.first(arglist__31586);
arglist__31586 = cljs.core.next(arglist__31586);
var ports = cljs.core.first(arglist__31586);
var p__31573 = cljs.core.rest(arglist__31586);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__31573);
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
if(typeof cljs.core.async.t31706 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31706 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31707){
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
this.meta31707 = meta31707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31706.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31706.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31706.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31706.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31706.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31706.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t31706.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31708){
var self__ = this;
var _31708__$1 = this;
return self__.meta31707;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31708,meta31707__$1){
var self__ = this;
var _31708__$1 = this;
return (new cljs.core.async.t31706(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31707__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31706.cljs$lang$type = true;

cljs.core.async.t31706.cljs$lang$ctorStr = "cljs.core.async/t31706";

cljs.core.async.t31706.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16733__auto__,writer__16734__auto__,opt__16735__auto__){
return cljs.core._write.call(null,writer__16734__auto__,"cljs.core.async/t31706");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31706 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31706(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31707){
return (new cljs.core.async.t31706(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31707));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31706(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19255__auto___31825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___31825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___31825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31778){
var state_val_31779 = (state_31778[(1)]);
if((state_val_31779 === (7))){
var inst_31722 = (state_31778[(7)]);
var inst_31727 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31722);
var state_31778__$1 = state_31778;
var statearr_31780_31826 = state_31778__$1;
(statearr_31780_31826[(2)] = inst_31727);

(statearr_31780_31826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (20))){
var inst_31737 = (state_31778[(8)]);
var state_31778__$1 = state_31778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31778__$1,(23),out,inst_31737);
} else {
if((state_val_31779 === (1))){
var inst_31712 = (state_31778[(9)]);
var inst_31712__$1 = calc_state.call(null);
var inst_31713 = cljs.core.seq_QMARK_.call(null,inst_31712__$1);
var state_31778__$1 = (function (){var statearr_31781 = state_31778;
(statearr_31781[(9)] = inst_31712__$1);

return statearr_31781;
})();
if(inst_31713){
var statearr_31782_31827 = state_31778__$1;
(statearr_31782_31827[(1)] = (2));

} else {
var statearr_31783_31828 = state_31778__$1;
(statearr_31783_31828[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (24))){
var inst_31730 = (state_31778[(10)]);
var inst_31722 = inst_31730;
var state_31778__$1 = (function (){var statearr_31784 = state_31778;
(statearr_31784[(7)] = inst_31722);

return statearr_31784;
})();
var statearr_31785_31829 = state_31778__$1;
(statearr_31785_31829[(2)] = null);

(statearr_31785_31829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (4))){
var inst_31712 = (state_31778[(9)]);
var inst_31718 = (state_31778[(2)]);
var inst_31719 = cljs.core.get.call(null,inst_31718,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31720 = cljs.core.get.call(null,inst_31718,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31721 = cljs.core.get.call(null,inst_31718,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31722 = inst_31712;
var state_31778__$1 = (function (){var statearr_31786 = state_31778;
(statearr_31786[(11)] = inst_31720);

(statearr_31786[(7)] = inst_31722);

(statearr_31786[(12)] = inst_31721);

(statearr_31786[(13)] = inst_31719);

return statearr_31786;
})();
var statearr_31787_31830 = state_31778__$1;
(statearr_31787_31830[(2)] = null);

(statearr_31787_31830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (15))){
var state_31778__$1 = state_31778;
var statearr_31788_31831 = state_31778__$1;
(statearr_31788_31831[(2)] = null);

(statearr_31788_31831[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (21))){
var inst_31730 = (state_31778[(10)]);
var inst_31722 = inst_31730;
var state_31778__$1 = (function (){var statearr_31789 = state_31778;
(statearr_31789[(7)] = inst_31722);

return statearr_31789;
})();
var statearr_31790_31832 = state_31778__$1;
(statearr_31790_31832[(2)] = null);

(statearr_31790_31832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (13))){
var inst_31774 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31791_31833 = state_31778__$1;
(statearr_31791_31833[(2)] = inst_31774);

(statearr_31791_31833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (22))){
var inst_31772 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31792_31834 = state_31778__$1;
(statearr_31792_31834[(2)] = inst_31772);

(statearr_31792_31834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (6))){
var inst_31776 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31778__$1,inst_31776);
} else {
if((state_val_31779 === (25))){
var state_31778__$1 = state_31778;
var statearr_31793_31835 = state_31778__$1;
(statearr_31793_31835[(2)] = null);

(statearr_31793_31835[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (17))){
var inst_31752 = (state_31778[(14)]);
var state_31778__$1 = state_31778;
var statearr_31794_31836 = state_31778__$1;
(statearr_31794_31836[(2)] = inst_31752);

(statearr_31794_31836[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (3))){
var inst_31712 = (state_31778[(9)]);
var state_31778__$1 = state_31778;
var statearr_31795_31837 = state_31778__$1;
(statearr_31795_31837[(2)] = inst_31712);

(statearr_31795_31837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (12))){
var inst_31733 = (state_31778[(15)]);
var inst_31752 = (state_31778[(14)]);
var inst_31738 = (state_31778[(16)]);
var inst_31752__$1 = inst_31733.call(null,inst_31738);
var state_31778__$1 = (function (){var statearr_31796 = state_31778;
(statearr_31796[(14)] = inst_31752__$1);

return statearr_31796;
})();
if(cljs.core.truth_(inst_31752__$1)){
var statearr_31797_31838 = state_31778__$1;
(statearr_31797_31838[(1)] = (17));

} else {
var statearr_31798_31839 = state_31778__$1;
(statearr_31798_31839[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (2))){
var inst_31712 = (state_31778[(9)]);
var inst_31715 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31712);
var state_31778__$1 = state_31778;
var statearr_31799_31840 = state_31778__$1;
(statearr_31799_31840[(2)] = inst_31715);

(statearr_31799_31840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (23))){
var inst_31763 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
if(cljs.core.truth_(inst_31763)){
var statearr_31800_31841 = state_31778__$1;
(statearr_31800_31841[(1)] = (24));

} else {
var statearr_31801_31842 = state_31778__$1;
(statearr_31801_31842[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (19))){
var inst_31760 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
if(cljs.core.truth_(inst_31760)){
var statearr_31802_31843 = state_31778__$1;
(statearr_31802_31843[(1)] = (20));

} else {
var statearr_31803_31844 = state_31778__$1;
(statearr_31803_31844[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (11))){
var inst_31737 = (state_31778[(8)]);
var inst_31743 = (inst_31737 == null);
var state_31778__$1 = state_31778;
if(cljs.core.truth_(inst_31743)){
var statearr_31804_31845 = state_31778__$1;
(statearr_31804_31845[(1)] = (14));

} else {
var statearr_31805_31846 = state_31778__$1;
(statearr_31805_31846[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (9))){
var inst_31730 = (state_31778[(10)]);
var inst_31730__$1 = (state_31778[(2)]);
var inst_31731 = cljs.core.get.call(null,inst_31730__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31732 = cljs.core.get.call(null,inst_31730__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31733 = cljs.core.get.call(null,inst_31730__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31778__$1 = (function (){var statearr_31806 = state_31778;
(statearr_31806[(15)] = inst_31733);

(statearr_31806[(17)] = inst_31732);

(statearr_31806[(10)] = inst_31730__$1);

return statearr_31806;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31778__$1,(10),inst_31731);
} else {
if((state_val_31779 === (5))){
var inst_31722 = (state_31778[(7)]);
var inst_31725 = cljs.core.seq_QMARK_.call(null,inst_31722);
var state_31778__$1 = state_31778;
if(inst_31725){
var statearr_31807_31847 = state_31778__$1;
(statearr_31807_31847[(1)] = (7));

} else {
var statearr_31808_31848 = state_31778__$1;
(statearr_31808_31848[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (14))){
var inst_31738 = (state_31778[(16)]);
var inst_31745 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31738);
var state_31778__$1 = state_31778;
var statearr_31809_31849 = state_31778__$1;
(statearr_31809_31849[(2)] = inst_31745);

(statearr_31809_31849[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (26))){
var inst_31768 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31810_31850 = state_31778__$1;
(statearr_31810_31850[(2)] = inst_31768);

(statearr_31810_31850[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (16))){
var inst_31748 = (state_31778[(2)]);
var inst_31749 = calc_state.call(null);
var inst_31722 = inst_31749;
var state_31778__$1 = (function (){var statearr_31811 = state_31778;
(statearr_31811[(7)] = inst_31722);

(statearr_31811[(18)] = inst_31748);

return statearr_31811;
})();
var statearr_31812_31851 = state_31778__$1;
(statearr_31812_31851[(2)] = null);

(statearr_31812_31851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (10))){
var inst_31737 = (state_31778[(8)]);
var inst_31738 = (state_31778[(16)]);
var inst_31736 = (state_31778[(2)]);
var inst_31737__$1 = cljs.core.nth.call(null,inst_31736,(0),null);
var inst_31738__$1 = cljs.core.nth.call(null,inst_31736,(1),null);
var inst_31739 = (inst_31737__$1 == null);
var inst_31740 = cljs.core._EQ_.call(null,inst_31738__$1,change);
var inst_31741 = (inst_31739) || (inst_31740);
var state_31778__$1 = (function (){var statearr_31813 = state_31778;
(statearr_31813[(8)] = inst_31737__$1);

(statearr_31813[(16)] = inst_31738__$1);

return statearr_31813;
})();
if(cljs.core.truth_(inst_31741)){
var statearr_31814_31852 = state_31778__$1;
(statearr_31814_31852[(1)] = (11));

} else {
var statearr_31815_31853 = state_31778__$1;
(statearr_31815_31853[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (18))){
var inst_31733 = (state_31778[(15)]);
var inst_31732 = (state_31778[(17)]);
var inst_31738 = (state_31778[(16)]);
var inst_31755 = cljs.core.empty_QMARK_.call(null,inst_31733);
var inst_31756 = inst_31732.call(null,inst_31738);
var inst_31757 = cljs.core.not.call(null,inst_31756);
var inst_31758 = (inst_31755) && (inst_31757);
var state_31778__$1 = state_31778;
var statearr_31816_31854 = state_31778__$1;
(statearr_31816_31854[(2)] = inst_31758);

(statearr_31816_31854[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (8))){
var inst_31722 = (state_31778[(7)]);
var state_31778__$1 = state_31778;
var statearr_31817_31855 = state_31778__$1;
(statearr_31817_31855[(2)] = inst_31722);

(statearr_31817_31855[(1)] = (9));


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
});})(c__19255__auto___31825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19199__auto__,c__19255__auto___31825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_31821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31821[(0)] = state_machine__19200__auto__);

(statearr_31821[(1)] = (1));

return statearr_31821;
});
var state_machine__19200__auto____1 = (function (state_31778){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_31778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e31822){if((e31822 instanceof Object)){
var ex__19203__auto__ = e31822;
var statearr_31823_31856 = state_31778;
(statearr_31823_31856[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31857 = state_31778;
state_31778 = G__31857;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_31778){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_31778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___31825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19257__auto__ = (function (){var statearr_31824 = f__19256__auto__.call(null);
(statearr_31824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___31825);

return statearr_31824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___31825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj31859 = {};
return obj31859;
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
var x__16790__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16790__auto__)]);
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
var x__16790__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16790__auto__)]);
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
var x__16790__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16790__auto__)]);
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
var x__16790__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16790__auto__)]);
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
return (function (p1__31860_SHARP_){
if(cljs.core.truth_(p1__31860_SHARP_.call(null,topic))){
return p1__31860_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31860_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31983 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31983 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31984){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31984 = meta31984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31983.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31983.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31983.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t31983.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31983.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31983.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31983.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31985){
var self__ = this;
var _31985__$1 = this;
return self__.meta31984;
});})(mults,ensure_mult))
;

cljs.core.async.t31983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31985,meta31984__$1){
var self__ = this;
var _31985__$1 = this;
return (new cljs.core.async.t31983(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31984__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31983.cljs$lang$type = true;

cljs.core.async.t31983.cljs$lang$ctorStr = "cljs.core.async/t31983";

cljs.core.async.t31983.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16733__auto__,writer__16734__auto__,opt__16735__auto__){
return cljs.core._write.call(null,writer__16734__auto__,"cljs.core.async/t31983");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31983 = ((function (mults,ensure_mult){
return (function __GT_t31983(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31984){
return (new cljs.core.async.t31983(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31984));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31983(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19255__auto___32105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___32105,mults,ensure_mult,p){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___32105,mults,ensure_mult,p){
return (function (state_32057){
var state_val_32058 = (state_32057[(1)]);
if((state_val_32058 === (7))){
var inst_32053 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32059_32106 = state_32057__$1;
(statearr_32059_32106[(2)] = inst_32053);

(statearr_32059_32106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (20))){
var state_32057__$1 = state_32057;
var statearr_32060_32107 = state_32057__$1;
(statearr_32060_32107[(2)] = null);

(statearr_32060_32107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (1))){
var state_32057__$1 = state_32057;
var statearr_32061_32108 = state_32057__$1;
(statearr_32061_32108[(2)] = null);

(statearr_32061_32108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (24))){
var inst_32036 = (state_32057[(7)]);
var inst_32045 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32036);
var state_32057__$1 = state_32057;
var statearr_32062_32109 = state_32057__$1;
(statearr_32062_32109[(2)] = inst_32045);

(statearr_32062_32109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (4))){
var inst_31988 = (state_32057[(8)]);
var inst_31988__$1 = (state_32057[(2)]);
var inst_31989 = (inst_31988__$1 == null);
var state_32057__$1 = (function (){var statearr_32063 = state_32057;
(statearr_32063[(8)] = inst_31988__$1);

return statearr_32063;
})();
if(cljs.core.truth_(inst_31989)){
var statearr_32064_32110 = state_32057__$1;
(statearr_32064_32110[(1)] = (5));

} else {
var statearr_32065_32111 = state_32057__$1;
(statearr_32065_32111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (15))){
var inst_32030 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32066_32112 = state_32057__$1;
(statearr_32066_32112[(2)] = inst_32030);

(statearr_32066_32112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (21))){
var inst_32050 = (state_32057[(2)]);
var state_32057__$1 = (function (){var statearr_32067 = state_32057;
(statearr_32067[(9)] = inst_32050);

return statearr_32067;
})();
var statearr_32068_32113 = state_32057__$1;
(statearr_32068_32113[(2)] = null);

(statearr_32068_32113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (13))){
var inst_32012 = (state_32057[(10)]);
var inst_32014 = cljs.core.chunked_seq_QMARK_.call(null,inst_32012);
var state_32057__$1 = state_32057;
if(inst_32014){
var statearr_32069_32114 = state_32057__$1;
(statearr_32069_32114[(1)] = (16));

} else {
var statearr_32070_32115 = state_32057__$1;
(statearr_32070_32115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (22))){
var inst_32042 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
if(cljs.core.truth_(inst_32042)){
var statearr_32071_32116 = state_32057__$1;
(statearr_32071_32116[(1)] = (23));

} else {
var statearr_32072_32117 = state_32057__$1;
(statearr_32072_32117[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (6))){
var inst_32036 = (state_32057[(7)]);
var inst_32038 = (state_32057[(11)]);
var inst_31988 = (state_32057[(8)]);
var inst_32036__$1 = topic_fn.call(null,inst_31988);
var inst_32037 = cljs.core.deref.call(null,mults);
var inst_32038__$1 = cljs.core.get.call(null,inst_32037,inst_32036__$1);
var state_32057__$1 = (function (){var statearr_32073 = state_32057;
(statearr_32073[(7)] = inst_32036__$1);

(statearr_32073[(11)] = inst_32038__$1);

return statearr_32073;
})();
if(cljs.core.truth_(inst_32038__$1)){
var statearr_32074_32118 = state_32057__$1;
(statearr_32074_32118[(1)] = (19));

} else {
var statearr_32075_32119 = state_32057__$1;
(statearr_32075_32119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (25))){
var inst_32047 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32076_32120 = state_32057__$1;
(statearr_32076_32120[(2)] = inst_32047);

(statearr_32076_32120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (17))){
var inst_32012 = (state_32057[(10)]);
var inst_32021 = cljs.core.first.call(null,inst_32012);
var inst_32022 = cljs.core.async.muxch_STAR_.call(null,inst_32021);
var inst_32023 = cljs.core.async.close_BANG_.call(null,inst_32022);
var inst_32024 = cljs.core.next.call(null,inst_32012);
var inst_31998 = inst_32024;
var inst_31999 = null;
var inst_32000 = (0);
var inst_32001 = (0);
var state_32057__$1 = (function (){var statearr_32077 = state_32057;
(statearr_32077[(12)] = inst_32000);

(statearr_32077[(13)] = inst_31999);

(statearr_32077[(14)] = inst_32001);

(statearr_32077[(15)] = inst_32023);

(statearr_32077[(16)] = inst_31998);

return statearr_32077;
})();
var statearr_32078_32121 = state_32057__$1;
(statearr_32078_32121[(2)] = null);

(statearr_32078_32121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (3))){
var inst_32055 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32057__$1,inst_32055);
} else {
if((state_val_32058 === (12))){
var inst_32032 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32079_32122 = state_32057__$1;
(statearr_32079_32122[(2)] = inst_32032);

(statearr_32079_32122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (2))){
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32057__$1,(4),ch);
} else {
if((state_val_32058 === (23))){
var state_32057__$1 = state_32057;
var statearr_32080_32123 = state_32057__$1;
(statearr_32080_32123[(2)] = null);

(statearr_32080_32123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (19))){
var inst_32038 = (state_32057[(11)]);
var inst_31988 = (state_32057[(8)]);
var inst_32040 = cljs.core.async.muxch_STAR_.call(null,inst_32038);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32057__$1,(22),inst_32040,inst_31988);
} else {
if((state_val_32058 === (11))){
var inst_32012 = (state_32057[(10)]);
var inst_31998 = (state_32057[(16)]);
var inst_32012__$1 = cljs.core.seq.call(null,inst_31998);
var state_32057__$1 = (function (){var statearr_32081 = state_32057;
(statearr_32081[(10)] = inst_32012__$1);

return statearr_32081;
})();
if(inst_32012__$1){
var statearr_32082_32124 = state_32057__$1;
(statearr_32082_32124[(1)] = (13));

} else {
var statearr_32083_32125 = state_32057__$1;
(statearr_32083_32125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (9))){
var inst_32034 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32084_32126 = state_32057__$1;
(statearr_32084_32126[(2)] = inst_32034);

(statearr_32084_32126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (5))){
var inst_31995 = cljs.core.deref.call(null,mults);
var inst_31996 = cljs.core.vals.call(null,inst_31995);
var inst_31997 = cljs.core.seq.call(null,inst_31996);
var inst_31998 = inst_31997;
var inst_31999 = null;
var inst_32000 = (0);
var inst_32001 = (0);
var state_32057__$1 = (function (){var statearr_32085 = state_32057;
(statearr_32085[(12)] = inst_32000);

(statearr_32085[(13)] = inst_31999);

(statearr_32085[(14)] = inst_32001);

(statearr_32085[(16)] = inst_31998);

return statearr_32085;
})();
var statearr_32086_32127 = state_32057__$1;
(statearr_32086_32127[(2)] = null);

(statearr_32086_32127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (14))){
var state_32057__$1 = state_32057;
var statearr_32090_32128 = state_32057__$1;
(statearr_32090_32128[(2)] = null);

(statearr_32090_32128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (16))){
var inst_32012 = (state_32057[(10)]);
var inst_32016 = cljs.core.chunk_first.call(null,inst_32012);
var inst_32017 = cljs.core.chunk_rest.call(null,inst_32012);
var inst_32018 = cljs.core.count.call(null,inst_32016);
var inst_31998 = inst_32017;
var inst_31999 = inst_32016;
var inst_32000 = inst_32018;
var inst_32001 = (0);
var state_32057__$1 = (function (){var statearr_32091 = state_32057;
(statearr_32091[(12)] = inst_32000);

(statearr_32091[(13)] = inst_31999);

(statearr_32091[(14)] = inst_32001);

(statearr_32091[(16)] = inst_31998);

return statearr_32091;
})();
var statearr_32092_32129 = state_32057__$1;
(statearr_32092_32129[(2)] = null);

(statearr_32092_32129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (10))){
var inst_32000 = (state_32057[(12)]);
var inst_31999 = (state_32057[(13)]);
var inst_32001 = (state_32057[(14)]);
var inst_31998 = (state_32057[(16)]);
var inst_32006 = cljs.core._nth.call(null,inst_31999,inst_32001);
var inst_32007 = cljs.core.async.muxch_STAR_.call(null,inst_32006);
var inst_32008 = cljs.core.async.close_BANG_.call(null,inst_32007);
var inst_32009 = (inst_32001 + (1));
var tmp32087 = inst_32000;
var tmp32088 = inst_31999;
var tmp32089 = inst_31998;
var inst_31998__$1 = tmp32089;
var inst_31999__$1 = tmp32088;
var inst_32000__$1 = tmp32087;
var inst_32001__$1 = inst_32009;
var state_32057__$1 = (function (){var statearr_32093 = state_32057;
(statearr_32093[(12)] = inst_32000__$1);

(statearr_32093[(13)] = inst_31999__$1);

(statearr_32093[(14)] = inst_32001__$1);

(statearr_32093[(17)] = inst_32008);

(statearr_32093[(16)] = inst_31998__$1);

return statearr_32093;
})();
var statearr_32094_32130 = state_32057__$1;
(statearr_32094_32130[(2)] = null);

(statearr_32094_32130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (18))){
var inst_32027 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32095_32131 = state_32057__$1;
(statearr_32095_32131[(2)] = inst_32027);

(statearr_32095_32131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (8))){
var inst_32000 = (state_32057[(12)]);
var inst_32001 = (state_32057[(14)]);
var inst_32003 = (inst_32001 < inst_32000);
var inst_32004 = inst_32003;
var state_32057__$1 = state_32057;
if(cljs.core.truth_(inst_32004)){
var statearr_32096_32132 = state_32057__$1;
(statearr_32096_32132[(1)] = (10));

} else {
var statearr_32097_32133 = state_32057__$1;
(statearr_32097_32133[(1)] = (11));

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
});})(c__19255__auto___32105,mults,ensure_mult,p))
;
return ((function (switch__19199__auto__,c__19255__auto___32105,mults,ensure_mult,p){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_32101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32101[(0)] = state_machine__19200__auto__);

(statearr_32101[(1)] = (1));

return statearr_32101;
});
var state_machine__19200__auto____1 = (function (state_32057){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_32057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e32102){if((e32102 instanceof Object)){
var ex__19203__auto__ = e32102;
var statearr_32103_32134 = state_32057;
(statearr_32103_32134[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32135 = state_32057;
state_32057 = G__32135;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_32057){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_32057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___32105,mults,ensure_mult,p))
})();
var state__19257__auto__ = (function (){var statearr_32104 = f__19256__auto__.call(null);
(statearr_32104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___32105);

return statearr_32104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___32105,mults,ensure_mult,p))
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
var c__19255__auto___32272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___32272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___32272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32242){
var state_val_32243 = (state_32242[(1)]);
if((state_val_32243 === (7))){
var state_32242__$1 = state_32242;
var statearr_32244_32273 = state_32242__$1;
(statearr_32244_32273[(2)] = null);

(statearr_32244_32273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (1))){
var state_32242__$1 = state_32242;
var statearr_32245_32274 = state_32242__$1;
(statearr_32245_32274[(2)] = null);

(statearr_32245_32274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (4))){
var inst_32206 = (state_32242[(7)]);
var inst_32208 = (inst_32206 < cnt);
var state_32242__$1 = state_32242;
if(cljs.core.truth_(inst_32208)){
var statearr_32246_32275 = state_32242__$1;
(statearr_32246_32275[(1)] = (6));

} else {
var statearr_32247_32276 = state_32242__$1;
(statearr_32247_32276[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (15))){
var inst_32238 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
var statearr_32248_32277 = state_32242__$1;
(statearr_32248_32277[(2)] = inst_32238);

(statearr_32248_32277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (13))){
var inst_32231 = cljs.core.async.close_BANG_.call(null,out);
var state_32242__$1 = state_32242;
var statearr_32249_32278 = state_32242__$1;
(statearr_32249_32278[(2)] = inst_32231);

(statearr_32249_32278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (6))){
var state_32242__$1 = state_32242;
var statearr_32250_32279 = state_32242__$1;
(statearr_32250_32279[(2)] = null);

(statearr_32250_32279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (3))){
var inst_32240 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32242__$1,inst_32240);
} else {
if((state_val_32243 === (12))){
var inst_32228 = (state_32242[(8)]);
var inst_32228__$1 = (state_32242[(2)]);
var inst_32229 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32228__$1);
var state_32242__$1 = (function (){var statearr_32251 = state_32242;
(statearr_32251[(8)] = inst_32228__$1);

return statearr_32251;
})();
if(cljs.core.truth_(inst_32229)){
var statearr_32252_32280 = state_32242__$1;
(statearr_32252_32280[(1)] = (13));

} else {
var statearr_32253_32281 = state_32242__$1;
(statearr_32253_32281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (2))){
var inst_32205 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32206 = (0);
var state_32242__$1 = (function (){var statearr_32254 = state_32242;
(statearr_32254[(7)] = inst_32206);

(statearr_32254[(9)] = inst_32205);

return statearr_32254;
})();
var statearr_32255_32282 = state_32242__$1;
(statearr_32255_32282[(2)] = null);

(statearr_32255_32282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (11))){
var inst_32206 = (state_32242[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32242,(10),Object,null,(9));
var inst_32215 = chs__$1.call(null,inst_32206);
var inst_32216 = done.call(null,inst_32206);
var inst_32217 = cljs.core.async.take_BANG_.call(null,inst_32215,inst_32216);
var state_32242__$1 = state_32242;
var statearr_32256_32283 = state_32242__$1;
(statearr_32256_32283[(2)] = inst_32217);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32242__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (9))){
var inst_32206 = (state_32242[(7)]);
var inst_32219 = (state_32242[(2)]);
var inst_32220 = (inst_32206 + (1));
var inst_32206__$1 = inst_32220;
var state_32242__$1 = (function (){var statearr_32257 = state_32242;
(statearr_32257[(7)] = inst_32206__$1);

(statearr_32257[(10)] = inst_32219);

return statearr_32257;
})();
var statearr_32258_32284 = state_32242__$1;
(statearr_32258_32284[(2)] = null);

(statearr_32258_32284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (5))){
var inst_32226 = (state_32242[(2)]);
var state_32242__$1 = (function (){var statearr_32259 = state_32242;
(statearr_32259[(11)] = inst_32226);

return statearr_32259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32242__$1,(12),dchan);
} else {
if((state_val_32243 === (14))){
var inst_32228 = (state_32242[(8)]);
var inst_32233 = cljs.core.apply.call(null,f,inst_32228);
var state_32242__$1 = state_32242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32242__$1,(16),out,inst_32233);
} else {
if((state_val_32243 === (16))){
var inst_32235 = (state_32242[(2)]);
var state_32242__$1 = (function (){var statearr_32260 = state_32242;
(statearr_32260[(12)] = inst_32235);

return statearr_32260;
})();
var statearr_32261_32285 = state_32242__$1;
(statearr_32261_32285[(2)] = null);

(statearr_32261_32285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (10))){
var inst_32210 = (state_32242[(2)]);
var inst_32211 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32242__$1 = (function (){var statearr_32262 = state_32242;
(statearr_32262[(13)] = inst_32210);

return statearr_32262;
})();
var statearr_32263_32286 = state_32242__$1;
(statearr_32263_32286[(2)] = inst_32211);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32242__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (8))){
var inst_32224 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
var statearr_32264_32287 = state_32242__$1;
(statearr_32264_32287[(2)] = inst_32224);

(statearr_32264_32287[(1)] = (5));


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
});})(c__19255__auto___32272,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19199__auto__,c__19255__auto___32272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_32268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32268[(0)] = state_machine__19200__auto__);

(statearr_32268[(1)] = (1));

return statearr_32268;
});
var state_machine__19200__auto____1 = (function (state_32242){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_32242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e32269){if((e32269 instanceof Object)){
var ex__19203__auto__ = e32269;
var statearr_32270_32288 = state_32242;
(statearr_32270_32288[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32289 = state_32242;
state_32242 = G__32289;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_32242){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_32242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___32272,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19257__auto__ = (function (){var statearr_32271 = f__19256__auto__.call(null);
(statearr_32271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___32272);

return statearr_32271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___32272,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__19255__auto___32397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___32397,out){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___32397,out){
return (function (state_32373){
var state_val_32374 = (state_32373[(1)]);
if((state_val_32374 === (7))){
var inst_32352 = (state_32373[(7)]);
var inst_32353 = (state_32373[(8)]);
var inst_32352__$1 = (state_32373[(2)]);
var inst_32353__$1 = cljs.core.nth.call(null,inst_32352__$1,(0),null);
var inst_32354 = cljs.core.nth.call(null,inst_32352__$1,(1),null);
var inst_32355 = (inst_32353__$1 == null);
var state_32373__$1 = (function (){var statearr_32375 = state_32373;
(statearr_32375[(7)] = inst_32352__$1);

(statearr_32375[(8)] = inst_32353__$1);

(statearr_32375[(9)] = inst_32354);

return statearr_32375;
})();
if(cljs.core.truth_(inst_32355)){
var statearr_32376_32398 = state_32373__$1;
(statearr_32376_32398[(1)] = (8));

} else {
var statearr_32377_32399 = state_32373__$1;
(statearr_32377_32399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (1))){
var inst_32344 = cljs.core.vec.call(null,chs);
var inst_32345 = inst_32344;
var state_32373__$1 = (function (){var statearr_32378 = state_32373;
(statearr_32378[(10)] = inst_32345);

return statearr_32378;
})();
var statearr_32379_32400 = state_32373__$1;
(statearr_32379_32400[(2)] = null);

(statearr_32379_32400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (4))){
var inst_32345 = (state_32373[(10)]);
var state_32373__$1 = state_32373;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32373__$1,(7),inst_32345);
} else {
if((state_val_32374 === (6))){
var inst_32369 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32380_32401 = state_32373__$1;
(statearr_32380_32401[(2)] = inst_32369);

(statearr_32380_32401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (3))){
var inst_32371 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32373__$1,inst_32371);
} else {
if((state_val_32374 === (2))){
var inst_32345 = (state_32373[(10)]);
var inst_32347 = cljs.core.count.call(null,inst_32345);
var inst_32348 = (inst_32347 > (0));
var state_32373__$1 = state_32373;
if(cljs.core.truth_(inst_32348)){
var statearr_32382_32402 = state_32373__$1;
(statearr_32382_32402[(1)] = (4));

} else {
var statearr_32383_32403 = state_32373__$1;
(statearr_32383_32403[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (11))){
var inst_32345 = (state_32373[(10)]);
var inst_32362 = (state_32373[(2)]);
var tmp32381 = inst_32345;
var inst_32345__$1 = tmp32381;
var state_32373__$1 = (function (){var statearr_32384 = state_32373;
(statearr_32384[(10)] = inst_32345__$1);

(statearr_32384[(11)] = inst_32362);

return statearr_32384;
})();
var statearr_32385_32404 = state_32373__$1;
(statearr_32385_32404[(2)] = null);

(statearr_32385_32404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (9))){
var inst_32353 = (state_32373[(8)]);
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32373__$1,(11),out,inst_32353);
} else {
if((state_val_32374 === (5))){
var inst_32367 = cljs.core.async.close_BANG_.call(null,out);
var state_32373__$1 = state_32373;
var statearr_32386_32405 = state_32373__$1;
(statearr_32386_32405[(2)] = inst_32367);

(statearr_32386_32405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (10))){
var inst_32365 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32387_32406 = state_32373__$1;
(statearr_32387_32406[(2)] = inst_32365);

(statearr_32387_32406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (8))){
var inst_32345 = (state_32373[(10)]);
var inst_32352 = (state_32373[(7)]);
var inst_32353 = (state_32373[(8)]);
var inst_32354 = (state_32373[(9)]);
var inst_32357 = (function (){var c = inst_32354;
var v = inst_32353;
var vec__32350 = inst_32352;
var cs = inst_32345;
return ((function (c,v,vec__32350,cs,inst_32345,inst_32352,inst_32353,inst_32354,state_val_32374,c__19255__auto___32397,out){
return (function (p1__32290_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32290_SHARP_);
});
;})(c,v,vec__32350,cs,inst_32345,inst_32352,inst_32353,inst_32354,state_val_32374,c__19255__auto___32397,out))
})();
var inst_32358 = cljs.core.filterv.call(null,inst_32357,inst_32345);
var inst_32345__$1 = inst_32358;
var state_32373__$1 = (function (){var statearr_32388 = state_32373;
(statearr_32388[(10)] = inst_32345__$1);

return statearr_32388;
})();
var statearr_32389_32407 = state_32373__$1;
(statearr_32389_32407[(2)] = null);

(statearr_32389_32407[(1)] = (2));


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
});})(c__19255__auto___32397,out))
;
return ((function (switch__19199__auto__,c__19255__auto___32397,out){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_32393 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32393[(0)] = state_machine__19200__auto__);

(statearr_32393[(1)] = (1));

return statearr_32393;
});
var state_machine__19200__auto____1 = (function (state_32373){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_32373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e32394){if((e32394 instanceof Object)){
var ex__19203__auto__ = e32394;
var statearr_32395_32408 = state_32373;
(statearr_32395_32408[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32409 = state_32373;
state_32373 = G__32409;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_32373){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_32373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___32397,out))
})();
var state__19257__auto__ = (function (){var statearr_32396 = f__19256__auto__.call(null);
(statearr_32396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___32397);

return statearr_32396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___32397,out))
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
var c__19255__auto___32502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___32502,out){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___32502,out){
return (function (state_32479){
var state_val_32480 = (state_32479[(1)]);
if((state_val_32480 === (7))){
var inst_32461 = (state_32479[(7)]);
var inst_32461__$1 = (state_32479[(2)]);
var inst_32462 = (inst_32461__$1 == null);
var inst_32463 = cljs.core.not.call(null,inst_32462);
var state_32479__$1 = (function (){var statearr_32481 = state_32479;
(statearr_32481[(7)] = inst_32461__$1);

return statearr_32481;
})();
if(inst_32463){
var statearr_32482_32503 = state_32479__$1;
(statearr_32482_32503[(1)] = (8));

} else {
var statearr_32483_32504 = state_32479__$1;
(statearr_32483_32504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (1))){
var inst_32456 = (0);
var state_32479__$1 = (function (){var statearr_32484 = state_32479;
(statearr_32484[(8)] = inst_32456);

return statearr_32484;
})();
var statearr_32485_32505 = state_32479__$1;
(statearr_32485_32505[(2)] = null);

(statearr_32485_32505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (4))){
var state_32479__$1 = state_32479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32479__$1,(7),ch);
} else {
if((state_val_32480 === (6))){
var inst_32474 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
var statearr_32486_32506 = state_32479__$1;
(statearr_32486_32506[(2)] = inst_32474);

(statearr_32486_32506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (3))){
var inst_32476 = (state_32479[(2)]);
var inst_32477 = cljs.core.async.close_BANG_.call(null,out);
var state_32479__$1 = (function (){var statearr_32487 = state_32479;
(statearr_32487[(9)] = inst_32476);

return statearr_32487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32479__$1,inst_32477);
} else {
if((state_val_32480 === (2))){
var inst_32456 = (state_32479[(8)]);
var inst_32458 = (inst_32456 < n);
var state_32479__$1 = state_32479;
if(cljs.core.truth_(inst_32458)){
var statearr_32488_32507 = state_32479__$1;
(statearr_32488_32507[(1)] = (4));

} else {
var statearr_32489_32508 = state_32479__$1;
(statearr_32489_32508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (11))){
var inst_32456 = (state_32479[(8)]);
var inst_32466 = (state_32479[(2)]);
var inst_32467 = (inst_32456 + (1));
var inst_32456__$1 = inst_32467;
var state_32479__$1 = (function (){var statearr_32490 = state_32479;
(statearr_32490[(10)] = inst_32466);

(statearr_32490[(8)] = inst_32456__$1);

return statearr_32490;
})();
var statearr_32491_32509 = state_32479__$1;
(statearr_32491_32509[(2)] = null);

(statearr_32491_32509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (9))){
var state_32479__$1 = state_32479;
var statearr_32492_32510 = state_32479__$1;
(statearr_32492_32510[(2)] = null);

(statearr_32492_32510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (5))){
var state_32479__$1 = state_32479;
var statearr_32493_32511 = state_32479__$1;
(statearr_32493_32511[(2)] = null);

(statearr_32493_32511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (10))){
var inst_32471 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
var statearr_32494_32512 = state_32479__$1;
(statearr_32494_32512[(2)] = inst_32471);

(statearr_32494_32512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (8))){
var inst_32461 = (state_32479[(7)]);
var state_32479__$1 = state_32479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32479__$1,(11),out,inst_32461);
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
});})(c__19255__auto___32502,out))
;
return ((function (switch__19199__auto__,c__19255__auto___32502,out){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_32498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32498[(0)] = state_machine__19200__auto__);

(statearr_32498[(1)] = (1));

return statearr_32498;
});
var state_machine__19200__auto____1 = (function (state_32479){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_32479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e32499){if((e32499 instanceof Object)){
var ex__19203__auto__ = e32499;
var statearr_32500_32513 = state_32479;
(statearr_32500_32513[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32514 = state_32479;
state_32479 = G__32514;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_32479){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_32479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___32502,out))
})();
var state__19257__auto__ = (function (){var statearr_32501 = f__19256__auto__.call(null);
(statearr_32501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___32502);

return statearr_32501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___32502,out))
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
if(typeof cljs.core.async.t32522 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32522 = (function (ch,f,map_LT_,meta32523){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32523 = meta32523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32522.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32522.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32522.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32522.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32525 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32525 = (function (fn1,_,meta32523,map_LT_,f,ch,meta32526){
this.fn1 = fn1;
this._ = _;
this.meta32523 = meta32523;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32526 = meta32526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32525.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32515_SHARP_){
return f1.call(null,(((p1__32515_SHARP_ == null))?null:self__.f.call(null,p1__32515_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32527){
var self__ = this;
var _32527__$1 = this;
return self__.meta32526;
});})(___$1))
;

cljs.core.async.t32525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32527,meta32526__$1){
var self__ = this;
var _32527__$1 = this;
return (new cljs.core.async.t32525(self__.fn1,self__._,self__.meta32523,self__.map_LT_,self__.f,self__.ch,meta32526__$1));
});})(___$1))
;

cljs.core.async.t32525.cljs$lang$type = true;

cljs.core.async.t32525.cljs$lang$ctorStr = "cljs.core.async/t32525";

cljs.core.async.t32525.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16733__auto__,writer__16734__auto__,opt__16735__auto__){
return cljs.core._write.call(null,writer__16734__auto__,"cljs.core.async/t32525");
});})(___$1))
;

cljs.core.async.__GT_t32525 = ((function (___$1){
return (function __GT_t32525(fn1__$1,___$2,meta32523__$1,map_LT___$1,f__$1,ch__$1,meta32526){
return (new cljs.core.async.t32525(fn1__$1,___$2,meta32523__$1,map_LT___$1,f__$1,ch__$1,meta32526));
});})(___$1))
;

}

return (new cljs.core.async.t32525(fn1,___$1,self__.meta32523,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t32522.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32522.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32522.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32524){
var self__ = this;
var _32524__$1 = this;
return self__.meta32523;
});

cljs.core.async.t32522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32524,meta32523__$1){
var self__ = this;
var _32524__$1 = this;
return (new cljs.core.async.t32522(self__.ch,self__.f,self__.map_LT_,meta32523__$1));
});

cljs.core.async.t32522.cljs$lang$type = true;

cljs.core.async.t32522.cljs$lang$ctorStr = "cljs.core.async/t32522";

cljs.core.async.t32522.cljs$lang$ctorPrWriter = (function (this__16733__auto__,writer__16734__auto__,opt__16735__auto__){
return cljs.core._write.call(null,writer__16734__auto__,"cljs.core.async/t32522");
});

cljs.core.async.__GT_t32522 = (function __GT_t32522(ch__$1,f__$1,map_LT___$1,meta32523){
return (new cljs.core.async.t32522(ch__$1,f__$1,map_LT___$1,meta32523));
});

}

return (new cljs.core.async.t32522(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t32531 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32531 = (function (ch,f,map_GT_,meta32532){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32532 = meta32532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32531.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32531.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32531.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32533){
var self__ = this;
var _32533__$1 = this;
return self__.meta32532;
});

cljs.core.async.t32531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32533,meta32532__$1){
var self__ = this;
var _32533__$1 = this;
return (new cljs.core.async.t32531(self__.ch,self__.f,self__.map_GT_,meta32532__$1));
});

cljs.core.async.t32531.cljs$lang$type = true;

cljs.core.async.t32531.cljs$lang$ctorStr = "cljs.core.async/t32531";

cljs.core.async.t32531.cljs$lang$ctorPrWriter = (function (this__16733__auto__,writer__16734__auto__,opt__16735__auto__){
return cljs.core._write.call(null,writer__16734__auto__,"cljs.core.async/t32531");
});

cljs.core.async.__GT_t32531 = (function __GT_t32531(ch__$1,f__$1,map_GT___$1,meta32532){
return (new cljs.core.async.t32531(ch__$1,f__$1,map_GT___$1,meta32532));
});

}

return (new cljs.core.async.t32531(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t32537 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32537 = (function (ch,p,filter_GT_,meta32538){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32538 = meta32538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32537.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32537.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32537.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32537.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32539){
var self__ = this;
var _32539__$1 = this;
return self__.meta32538;
});

cljs.core.async.t32537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32539,meta32538__$1){
var self__ = this;
var _32539__$1 = this;
return (new cljs.core.async.t32537(self__.ch,self__.p,self__.filter_GT_,meta32538__$1));
});

cljs.core.async.t32537.cljs$lang$type = true;

cljs.core.async.t32537.cljs$lang$ctorStr = "cljs.core.async/t32537";

cljs.core.async.t32537.cljs$lang$ctorPrWriter = (function (this__16733__auto__,writer__16734__auto__,opt__16735__auto__){
return cljs.core._write.call(null,writer__16734__auto__,"cljs.core.async/t32537");
});

cljs.core.async.__GT_t32537 = (function __GT_t32537(ch__$1,p__$1,filter_GT___$1,meta32538){
return (new cljs.core.async.t32537(ch__$1,p__$1,filter_GT___$1,meta32538));
});

}

return (new cljs.core.async.t32537(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19255__auto___32622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___32622,out){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___32622,out){
return (function (state_32601){
var state_val_32602 = (state_32601[(1)]);
if((state_val_32602 === (7))){
var inst_32597 = (state_32601[(2)]);
var state_32601__$1 = state_32601;
var statearr_32603_32623 = state_32601__$1;
(statearr_32603_32623[(2)] = inst_32597);

(statearr_32603_32623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (1))){
var state_32601__$1 = state_32601;
var statearr_32604_32624 = state_32601__$1;
(statearr_32604_32624[(2)] = null);

(statearr_32604_32624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (4))){
var inst_32583 = (state_32601[(7)]);
var inst_32583__$1 = (state_32601[(2)]);
var inst_32584 = (inst_32583__$1 == null);
var state_32601__$1 = (function (){var statearr_32605 = state_32601;
(statearr_32605[(7)] = inst_32583__$1);

return statearr_32605;
})();
if(cljs.core.truth_(inst_32584)){
var statearr_32606_32625 = state_32601__$1;
(statearr_32606_32625[(1)] = (5));

} else {
var statearr_32607_32626 = state_32601__$1;
(statearr_32607_32626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (6))){
var inst_32583 = (state_32601[(7)]);
var inst_32588 = p.call(null,inst_32583);
var state_32601__$1 = state_32601;
if(cljs.core.truth_(inst_32588)){
var statearr_32608_32627 = state_32601__$1;
(statearr_32608_32627[(1)] = (8));

} else {
var statearr_32609_32628 = state_32601__$1;
(statearr_32609_32628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (3))){
var inst_32599 = (state_32601[(2)]);
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32601__$1,inst_32599);
} else {
if((state_val_32602 === (2))){
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32601__$1,(4),ch);
} else {
if((state_val_32602 === (11))){
var inst_32591 = (state_32601[(2)]);
var state_32601__$1 = state_32601;
var statearr_32610_32629 = state_32601__$1;
(statearr_32610_32629[(2)] = inst_32591);

(statearr_32610_32629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (9))){
var state_32601__$1 = state_32601;
var statearr_32611_32630 = state_32601__$1;
(statearr_32611_32630[(2)] = null);

(statearr_32611_32630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (5))){
var inst_32586 = cljs.core.async.close_BANG_.call(null,out);
var state_32601__$1 = state_32601;
var statearr_32612_32631 = state_32601__$1;
(statearr_32612_32631[(2)] = inst_32586);

(statearr_32612_32631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (10))){
var inst_32594 = (state_32601[(2)]);
var state_32601__$1 = (function (){var statearr_32613 = state_32601;
(statearr_32613[(8)] = inst_32594);

return statearr_32613;
})();
var statearr_32614_32632 = state_32601__$1;
(statearr_32614_32632[(2)] = null);

(statearr_32614_32632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (8))){
var inst_32583 = (state_32601[(7)]);
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32601__$1,(11),out,inst_32583);
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
});})(c__19255__auto___32622,out))
;
return ((function (switch__19199__auto__,c__19255__auto___32622,out){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_32618 = [null,null,null,null,null,null,null,null,null];
(statearr_32618[(0)] = state_machine__19200__auto__);

(statearr_32618[(1)] = (1));

return statearr_32618;
});
var state_machine__19200__auto____1 = (function (state_32601){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_32601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e32619){if((e32619 instanceof Object)){
var ex__19203__auto__ = e32619;
var statearr_32620_32633 = state_32601;
(statearr_32620_32633[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32634 = state_32601;
state_32601 = G__32634;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_32601){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_32601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___32622,out))
})();
var state__19257__auto__ = (function (){var statearr_32621 = f__19256__auto__.call(null);
(statearr_32621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___32622);

return statearr_32621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___32622,out))
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
var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__){
return (function (state_32800){
var state_val_32801 = (state_32800[(1)]);
if((state_val_32801 === (7))){
var inst_32796 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32802_32843 = state_32800__$1;
(statearr_32802_32843[(2)] = inst_32796);

(statearr_32802_32843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (20))){
var inst_32766 = (state_32800[(7)]);
var inst_32777 = (state_32800[(2)]);
var inst_32778 = cljs.core.next.call(null,inst_32766);
var inst_32752 = inst_32778;
var inst_32753 = null;
var inst_32754 = (0);
var inst_32755 = (0);
var state_32800__$1 = (function (){var statearr_32803 = state_32800;
(statearr_32803[(8)] = inst_32755);

(statearr_32803[(9)] = inst_32777);

(statearr_32803[(10)] = inst_32754);

(statearr_32803[(11)] = inst_32753);

(statearr_32803[(12)] = inst_32752);

return statearr_32803;
})();
var statearr_32804_32844 = state_32800__$1;
(statearr_32804_32844[(2)] = null);

(statearr_32804_32844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (1))){
var state_32800__$1 = state_32800;
var statearr_32805_32845 = state_32800__$1;
(statearr_32805_32845[(2)] = null);

(statearr_32805_32845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (4))){
var inst_32741 = (state_32800[(13)]);
var inst_32741__$1 = (state_32800[(2)]);
var inst_32742 = (inst_32741__$1 == null);
var state_32800__$1 = (function (){var statearr_32806 = state_32800;
(statearr_32806[(13)] = inst_32741__$1);

return statearr_32806;
})();
if(cljs.core.truth_(inst_32742)){
var statearr_32807_32846 = state_32800__$1;
(statearr_32807_32846[(1)] = (5));

} else {
var statearr_32808_32847 = state_32800__$1;
(statearr_32808_32847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (15))){
var state_32800__$1 = state_32800;
var statearr_32812_32848 = state_32800__$1;
(statearr_32812_32848[(2)] = null);

(statearr_32812_32848[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (21))){
var state_32800__$1 = state_32800;
var statearr_32813_32849 = state_32800__$1;
(statearr_32813_32849[(2)] = null);

(statearr_32813_32849[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (13))){
var inst_32755 = (state_32800[(8)]);
var inst_32754 = (state_32800[(10)]);
var inst_32753 = (state_32800[(11)]);
var inst_32752 = (state_32800[(12)]);
var inst_32762 = (state_32800[(2)]);
var inst_32763 = (inst_32755 + (1));
var tmp32809 = inst_32754;
var tmp32810 = inst_32753;
var tmp32811 = inst_32752;
var inst_32752__$1 = tmp32811;
var inst_32753__$1 = tmp32810;
var inst_32754__$1 = tmp32809;
var inst_32755__$1 = inst_32763;
var state_32800__$1 = (function (){var statearr_32814 = state_32800;
(statearr_32814[(8)] = inst_32755__$1);

(statearr_32814[(10)] = inst_32754__$1);

(statearr_32814[(11)] = inst_32753__$1);

(statearr_32814[(14)] = inst_32762);

(statearr_32814[(12)] = inst_32752__$1);

return statearr_32814;
})();
var statearr_32815_32850 = state_32800__$1;
(statearr_32815_32850[(2)] = null);

(statearr_32815_32850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (22))){
var state_32800__$1 = state_32800;
var statearr_32816_32851 = state_32800__$1;
(statearr_32816_32851[(2)] = null);

(statearr_32816_32851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (6))){
var inst_32741 = (state_32800[(13)]);
var inst_32750 = f.call(null,inst_32741);
var inst_32751 = cljs.core.seq.call(null,inst_32750);
var inst_32752 = inst_32751;
var inst_32753 = null;
var inst_32754 = (0);
var inst_32755 = (0);
var state_32800__$1 = (function (){var statearr_32817 = state_32800;
(statearr_32817[(8)] = inst_32755);

(statearr_32817[(10)] = inst_32754);

(statearr_32817[(11)] = inst_32753);

(statearr_32817[(12)] = inst_32752);

return statearr_32817;
})();
var statearr_32818_32852 = state_32800__$1;
(statearr_32818_32852[(2)] = null);

(statearr_32818_32852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (17))){
var inst_32766 = (state_32800[(7)]);
var inst_32770 = cljs.core.chunk_first.call(null,inst_32766);
var inst_32771 = cljs.core.chunk_rest.call(null,inst_32766);
var inst_32772 = cljs.core.count.call(null,inst_32770);
var inst_32752 = inst_32771;
var inst_32753 = inst_32770;
var inst_32754 = inst_32772;
var inst_32755 = (0);
var state_32800__$1 = (function (){var statearr_32819 = state_32800;
(statearr_32819[(8)] = inst_32755);

(statearr_32819[(10)] = inst_32754);

(statearr_32819[(11)] = inst_32753);

(statearr_32819[(12)] = inst_32752);

return statearr_32819;
})();
var statearr_32820_32853 = state_32800__$1;
(statearr_32820_32853[(2)] = null);

(statearr_32820_32853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (3))){
var inst_32798 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32800__$1,inst_32798);
} else {
if((state_val_32801 === (12))){
var inst_32786 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32821_32854 = state_32800__$1;
(statearr_32821_32854[(2)] = inst_32786);

(statearr_32821_32854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (2))){
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32800__$1,(4),in$);
} else {
if((state_val_32801 === (23))){
var inst_32794 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32822_32855 = state_32800__$1;
(statearr_32822_32855[(2)] = inst_32794);

(statearr_32822_32855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (19))){
var inst_32781 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32823_32856 = state_32800__$1;
(statearr_32823_32856[(2)] = inst_32781);

(statearr_32823_32856[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (11))){
var inst_32766 = (state_32800[(7)]);
var inst_32752 = (state_32800[(12)]);
var inst_32766__$1 = cljs.core.seq.call(null,inst_32752);
var state_32800__$1 = (function (){var statearr_32824 = state_32800;
(statearr_32824[(7)] = inst_32766__$1);

return statearr_32824;
})();
if(inst_32766__$1){
var statearr_32825_32857 = state_32800__$1;
(statearr_32825_32857[(1)] = (14));

} else {
var statearr_32826_32858 = state_32800__$1;
(statearr_32826_32858[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (9))){
var inst_32788 = (state_32800[(2)]);
var inst_32789 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32800__$1 = (function (){var statearr_32827 = state_32800;
(statearr_32827[(15)] = inst_32788);

return statearr_32827;
})();
if(cljs.core.truth_(inst_32789)){
var statearr_32828_32859 = state_32800__$1;
(statearr_32828_32859[(1)] = (21));

} else {
var statearr_32829_32860 = state_32800__$1;
(statearr_32829_32860[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (5))){
var inst_32744 = cljs.core.async.close_BANG_.call(null,out);
var state_32800__$1 = state_32800;
var statearr_32830_32861 = state_32800__$1;
(statearr_32830_32861[(2)] = inst_32744);

(statearr_32830_32861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (14))){
var inst_32766 = (state_32800[(7)]);
var inst_32768 = cljs.core.chunked_seq_QMARK_.call(null,inst_32766);
var state_32800__$1 = state_32800;
if(inst_32768){
var statearr_32831_32862 = state_32800__$1;
(statearr_32831_32862[(1)] = (17));

} else {
var statearr_32832_32863 = state_32800__$1;
(statearr_32832_32863[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (16))){
var inst_32784 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32833_32864 = state_32800__$1;
(statearr_32833_32864[(2)] = inst_32784);

(statearr_32833_32864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (10))){
var inst_32755 = (state_32800[(8)]);
var inst_32753 = (state_32800[(11)]);
var inst_32760 = cljs.core._nth.call(null,inst_32753,inst_32755);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32800__$1,(13),out,inst_32760);
} else {
if((state_val_32801 === (18))){
var inst_32766 = (state_32800[(7)]);
var inst_32775 = cljs.core.first.call(null,inst_32766);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32800__$1,(20),out,inst_32775);
} else {
if((state_val_32801 === (8))){
var inst_32755 = (state_32800[(8)]);
var inst_32754 = (state_32800[(10)]);
var inst_32757 = (inst_32755 < inst_32754);
var inst_32758 = inst_32757;
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32758)){
var statearr_32834_32865 = state_32800__$1;
(statearr_32834_32865[(1)] = (10));

} else {
var statearr_32835_32866 = state_32800__$1;
(statearr_32835_32866[(1)] = (11));

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
});})(c__19255__auto__))
;
return ((function (switch__19199__auto__,c__19255__auto__){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_32839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32839[(0)] = state_machine__19200__auto__);

(statearr_32839[(1)] = (1));

return statearr_32839;
});
var state_machine__19200__auto____1 = (function (state_32800){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_32800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e32840){if((e32840 instanceof Object)){
var ex__19203__auto__ = e32840;
var statearr_32841_32867 = state_32800;
(statearr_32841_32867[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32868 = state_32800;
state_32800 = G__32868;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_32800){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_32800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__))
})();
var state__19257__auto__ = (function (){var statearr_32842 = f__19256__auto__.call(null);
(statearr_32842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_32842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__))
);

return c__19255__auto__;
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
var c__19255__auto___32965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___32965,out){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___32965,out){
return (function (state_32940){
var state_val_32941 = (state_32940[(1)]);
if((state_val_32941 === (7))){
var inst_32935 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32942_32966 = state_32940__$1;
(statearr_32942_32966[(2)] = inst_32935);

(statearr_32942_32966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (1))){
var inst_32917 = null;
var state_32940__$1 = (function (){var statearr_32943 = state_32940;
(statearr_32943[(7)] = inst_32917);

return statearr_32943;
})();
var statearr_32944_32967 = state_32940__$1;
(statearr_32944_32967[(2)] = null);

(statearr_32944_32967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (4))){
var inst_32920 = (state_32940[(8)]);
var inst_32920__$1 = (state_32940[(2)]);
var inst_32921 = (inst_32920__$1 == null);
var inst_32922 = cljs.core.not.call(null,inst_32921);
var state_32940__$1 = (function (){var statearr_32945 = state_32940;
(statearr_32945[(8)] = inst_32920__$1);

return statearr_32945;
})();
if(inst_32922){
var statearr_32946_32968 = state_32940__$1;
(statearr_32946_32968[(1)] = (5));

} else {
var statearr_32947_32969 = state_32940__$1;
(statearr_32947_32969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (6))){
var state_32940__$1 = state_32940;
var statearr_32948_32970 = state_32940__$1;
(statearr_32948_32970[(2)] = null);

(statearr_32948_32970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (3))){
var inst_32937 = (state_32940[(2)]);
var inst_32938 = cljs.core.async.close_BANG_.call(null,out);
var state_32940__$1 = (function (){var statearr_32949 = state_32940;
(statearr_32949[(9)] = inst_32937);

return statearr_32949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32940__$1,inst_32938);
} else {
if((state_val_32941 === (2))){
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,(4),ch);
} else {
if((state_val_32941 === (11))){
var inst_32920 = (state_32940[(8)]);
var inst_32929 = (state_32940[(2)]);
var inst_32917 = inst_32920;
var state_32940__$1 = (function (){var statearr_32950 = state_32940;
(statearr_32950[(7)] = inst_32917);

(statearr_32950[(10)] = inst_32929);

return statearr_32950;
})();
var statearr_32951_32971 = state_32940__$1;
(statearr_32951_32971[(2)] = null);

(statearr_32951_32971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (9))){
var inst_32920 = (state_32940[(8)]);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32940__$1,(11),out,inst_32920);
} else {
if((state_val_32941 === (5))){
var inst_32917 = (state_32940[(7)]);
var inst_32920 = (state_32940[(8)]);
var inst_32924 = cljs.core._EQ_.call(null,inst_32920,inst_32917);
var state_32940__$1 = state_32940;
if(inst_32924){
var statearr_32953_32972 = state_32940__$1;
(statearr_32953_32972[(1)] = (8));

} else {
var statearr_32954_32973 = state_32940__$1;
(statearr_32954_32973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (10))){
var inst_32932 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32955_32974 = state_32940__$1;
(statearr_32955_32974[(2)] = inst_32932);

(statearr_32955_32974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (8))){
var inst_32917 = (state_32940[(7)]);
var tmp32952 = inst_32917;
var inst_32917__$1 = tmp32952;
var state_32940__$1 = (function (){var statearr_32956 = state_32940;
(statearr_32956[(7)] = inst_32917__$1);

return statearr_32956;
})();
var statearr_32957_32975 = state_32940__$1;
(statearr_32957_32975[(2)] = null);

(statearr_32957_32975[(1)] = (2));


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
});})(c__19255__auto___32965,out))
;
return ((function (switch__19199__auto__,c__19255__auto___32965,out){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_32961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32961[(0)] = state_machine__19200__auto__);

(statearr_32961[(1)] = (1));

return statearr_32961;
});
var state_machine__19200__auto____1 = (function (state_32940){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_32940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e32962){if((e32962 instanceof Object)){
var ex__19203__auto__ = e32962;
var statearr_32963_32976 = state_32940;
(statearr_32963_32976[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32977 = state_32940;
state_32940 = G__32977;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_32940){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_32940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___32965,out))
})();
var state__19257__auto__ = (function (){var statearr_32964 = f__19256__auto__.call(null);
(statearr_32964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___32965);

return statearr_32964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___32965,out))
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
var c__19255__auto___33112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___33112,out){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___33112,out){
return (function (state_33082){
var state_val_33083 = (state_33082[(1)]);
if((state_val_33083 === (7))){
var inst_33078 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33084_33113 = state_33082__$1;
(statearr_33084_33113[(2)] = inst_33078);

(statearr_33084_33113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (1))){
var inst_33045 = (new Array(n));
var inst_33046 = inst_33045;
var inst_33047 = (0);
var state_33082__$1 = (function (){var statearr_33085 = state_33082;
(statearr_33085[(7)] = inst_33046);

(statearr_33085[(8)] = inst_33047);

return statearr_33085;
})();
var statearr_33086_33114 = state_33082__$1;
(statearr_33086_33114[(2)] = null);

(statearr_33086_33114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (4))){
var inst_33050 = (state_33082[(9)]);
var inst_33050__$1 = (state_33082[(2)]);
var inst_33051 = (inst_33050__$1 == null);
var inst_33052 = cljs.core.not.call(null,inst_33051);
var state_33082__$1 = (function (){var statearr_33087 = state_33082;
(statearr_33087[(9)] = inst_33050__$1);

return statearr_33087;
})();
if(inst_33052){
var statearr_33088_33115 = state_33082__$1;
(statearr_33088_33115[(1)] = (5));

} else {
var statearr_33089_33116 = state_33082__$1;
(statearr_33089_33116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (15))){
var inst_33072 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33090_33117 = state_33082__$1;
(statearr_33090_33117[(2)] = inst_33072);

(statearr_33090_33117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (13))){
var state_33082__$1 = state_33082;
var statearr_33091_33118 = state_33082__$1;
(statearr_33091_33118[(2)] = null);

(statearr_33091_33118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (6))){
var inst_33047 = (state_33082[(8)]);
var inst_33068 = (inst_33047 > (0));
var state_33082__$1 = state_33082;
if(cljs.core.truth_(inst_33068)){
var statearr_33092_33119 = state_33082__$1;
(statearr_33092_33119[(1)] = (12));

} else {
var statearr_33093_33120 = state_33082__$1;
(statearr_33093_33120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (3))){
var inst_33080 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33082__$1,inst_33080);
} else {
if((state_val_33083 === (12))){
var inst_33046 = (state_33082[(7)]);
var inst_33070 = cljs.core.vec.call(null,inst_33046);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33082__$1,(15),out,inst_33070);
} else {
if((state_val_33083 === (2))){
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33082__$1,(4),ch);
} else {
if((state_val_33083 === (11))){
var inst_33062 = (state_33082[(2)]);
var inst_33063 = (new Array(n));
var inst_33046 = inst_33063;
var inst_33047 = (0);
var state_33082__$1 = (function (){var statearr_33094 = state_33082;
(statearr_33094[(7)] = inst_33046);

(statearr_33094[(10)] = inst_33062);

(statearr_33094[(8)] = inst_33047);

return statearr_33094;
})();
var statearr_33095_33121 = state_33082__$1;
(statearr_33095_33121[(2)] = null);

(statearr_33095_33121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (9))){
var inst_33046 = (state_33082[(7)]);
var inst_33060 = cljs.core.vec.call(null,inst_33046);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33082__$1,(11),out,inst_33060);
} else {
if((state_val_33083 === (5))){
var inst_33050 = (state_33082[(9)]);
var inst_33046 = (state_33082[(7)]);
var inst_33055 = (state_33082[(11)]);
var inst_33047 = (state_33082[(8)]);
var inst_33054 = (inst_33046[inst_33047] = inst_33050);
var inst_33055__$1 = (inst_33047 + (1));
var inst_33056 = (inst_33055__$1 < n);
var state_33082__$1 = (function (){var statearr_33096 = state_33082;
(statearr_33096[(11)] = inst_33055__$1);

(statearr_33096[(12)] = inst_33054);

return statearr_33096;
})();
if(cljs.core.truth_(inst_33056)){
var statearr_33097_33122 = state_33082__$1;
(statearr_33097_33122[(1)] = (8));

} else {
var statearr_33098_33123 = state_33082__$1;
(statearr_33098_33123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (14))){
var inst_33075 = (state_33082[(2)]);
var inst_33076 = cljs.core.async.close_BANG_.call(null,out);
var state_33082__$1 = (function (){var statearr_33100 = state_33082;
(statearr_33100[(13)] = inst_33075);

return statearr_33100;
})();
var statearr_33101_33124 = state_33082__$1;
(statearr_33101_33124[(2)] = inst_33076);

(statearr_33101_33124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (10))){
var inst_33066 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33102_33125 = state_33082__$1;
(statearr_33102_33125[(2)] = inst_33066);

(statearr_33102_33125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (8))){
var inst_33046 = (state_33082[(7)]);
var inst_33055 = (state_33082[(11)]);
var tmp33099 = inst_33046;
var inst_33046__$1 = tmp33099;
var inst_33047 = inst_33055;
var state_33082__$1 = (function (){var statearr_33103 = state_33082;
(statearr_33103[(7)] = inst_33046__$1);

(statearr_33103[(8)] = inst_33047);

return statearr_33103;
})();
var statearr_33104_33126 = state_33082__$1;
(statearr_33104_33126[(2)] = null);

(statearr_33104_33126[(1)] = (2));


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
});})(c__19255__auto___33112,out))
;
return ((function (switch__19199__auto__,c__19255__auto___33112,out){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_33108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33108[(0)] = state_machine__19200__auto__);

(statearr_33108[(1)] = (1));

return statearr_33108;
});
var state_machine__19200__auto____1 = (function (state_33082){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_33082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e33109){if((e33109 instanceof Object)){
var ex__19203__auto__ = e33109;
var statearr_33110_33127 = state_33082;
(statearr_33110_33127[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33128 = state_33082;
state_33082 = G__33128;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_33082){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_33082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___33112,out))
})();
var state__19257__auto__ = (function (){var statearr_33111 = f__19256__auto__.call(null);
(statearr_33111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___33112);

return statearr_33111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___33112,out))
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
var c__19255__auto___33271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___33271,out){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___33271,out){
return (function (state_33241){
var state_val_33242 = (state_33241[(1)]);
if((state_val_33242 === (7))){
var inst_33237 = (state_33241[(2)]);
var state_33241__$1 = state_33241;
var statearr_33243_33272 = state_33241__$1;
(statearr_33243_33272[(2)] = inst_33237);

(statearr_33243_33272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (1))){
var inst_33200 = [];
var inst_33201 = inst_33200;
var inst_33202 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33241__$1 = (function (){var statearr_33244 = state_33241;
(statearr_33244[(7)] = inst_33201);

(statearr_33244[(8)] = inst_33202);

return statearr_33244;
})();
var statearr_33245_33273 = state_33241__$1;
(statearr_33245_33273[(2)] = null);

(statearr_33245_33273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (4))){
var inst_33205 = (state_33241[(9)]);
var inst_33205__$1 = (state_33241[(2)]);
var inst_33206 = (inst_33205__$1 == null);
var inst_33207 = cljs.core.not.call(null,inst_33206);
var state_33241__$1 = (function (){var statearr_33246 = state_33241;
(statearr_33246[(9)] = inst_33205__$1);

return statearr_33246;
})();
if(inst_33207){
var statearr_33247_33274 = state_33241__$1;
(statearr_33247_33274[(1)] = (5));

} else {
var statearr_33248_33275 = state_33241__$1;
(statearr_33248_33275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (15))){
var inst_33231 = (state_33241[(2)]);
var state_33241__$1 = state_33241;
var statearr_33249_33276 = state_33241__$1;
(statearr_33249_33276[(2)] = inst_33231);

(statearr_33249_33276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (13))){
var state_33241__$1 = state_33241;
var statearr_33250_33277 = state_33241__$1;
(statearr_33250_33277[(2)] = null);

(statearr_33250_33277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (6))){
var inst_33201 = (state_33241[(7)]);
var inst_33226 = inst_33201.length;
var inst_33227 = (inst_33226 > (0));
var state_33241__$1 = state_33241;
if(cljs.core.truth_(inst_33227)){
var statearr_33251_33278 = state_33241__$1;
(statearr_33251_33278[(1)] = (12));

} else {
var statearr_33252_33279 = state_33241__$1;
(statearr_33252_33279[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (3))){
var inst_33239 = (state_33241[(2)]);
var state_33241__$1 = state_33241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33241__$1,inst_33239);
} else {
if((state_val_33242 === (12))){
var inst_33201 = (state_33241[(7)]);
var inst_33229 = cljs.core.vec.call(null,inst_33201);
var state_33241__$1 = state_33241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33241__$1,(15),out,inst_33229);
} else {
if((state_val_33242 === (2))){
var state_33241__$1 = state_33241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33241__$1,(4),ch);
} else {
if((state_val_33242 === (11))){
var inst_33205 = (state_33241[(9)]);
var inst_33209 = (state_33241[(10)]);
var inst_33219 = (state_33241[(2)]);
var inst_33220 = [];
var inst_33221 = inst_33220.push(inst_33205);
var inst_33201 = inst_33220;
var inst_33202 = inst_33209;
var state_33241__$1 = (function (){var statearr_33253 = state_33241;
(statearr_33253[(7)] = inst_33201);

(statearr_33253[(11)] = inst_33221);

(statearr_33253[(8)] = inst_33202);

(statearr_33253[(12)] = inst_33219);

return statearr_33253;
})();
var statearr_33254_33280 = state_33241__$1;
(statearr_33254_33280[(2)] = null);

(statearr_33254_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (9))){
var inst_33201 = (state_33241[(7)]);
var inst_33217 = cljs.core.vec.call(null,inst_33201);
var state_33241__$1 = state_33241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33241__$1,(11),out,inst_33217);
} else {
if((state_val_33242 === (5))){
var inst_33205 = (state_33241[(9)]);
var inst_33202 = (state_33241[(8)]);
var inst_33209 = (state_33241[(10)]);
var inst_33209__$1 = f.call(null,inst_33205);
var inst_33210 = cljs.core._EQ_.call(null,inst_33209__$1,inst_33202);
var inst_33211 = cljs.core.keyword_identical_QMARK_.call(null,inst_33202,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33212 = (inst_33210) || (inst_33211);
var state_33241__$1 = (function (){var statearr_33255 = state_33241;
(statearr_33255[(10)] = inst_33209__$1);

return statearr_33255;
})();
if(cljs.core.truth_(inst_33212)){
var statearr_33256_33281 = state_33241__$1;
(statearr_33256_33281[(1)] = (8));

} else {
var statearr_33257_33282 = state_33241__$1;
(statearr_33257_33282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (14))){
var inst_33234 = (state_33241[(2)]);
var inst_33235 = cljs.core.async.close_BANG_.call(null,out);
var state_33241__$1 = (function (){var statearr_33259 = state_33241;
(statearr_33259[(13)] = inst_33234);

return statearr_33259;
})();
var statearr_33260_33283 = state_33241__$1;
(statearr_33260_33283[(2)] = inst_33235);

(statearr_33260_33283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (10))){
var inst_33224 = (state_33241[(2)]);
var state_33241__$1 = state_33241;
var statearr_33261_33284 = state_33241__$1;
(statearr_33261_33284[(2)] = inst_33224);

(statearr_33261_33284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (8))){
var inst_33201 = (state_33241[(7)]);
var inst_33205 = (state_33241[(9)]);
var inst_33209 = (state_33241[(10)]);
var inst_33214 = inst_33201.push(inst_33205);
var tmp33258 = inst_33201;
var inst_33201__$1 = tmp33258;
var inst_33202 = inst_33209;
var state_33241__$1 = (function (){var statearr_33262 = state_33241;
(statearr_33262[(7)] = inst_33201__$1);

(statearr_33262[(8)] = inst_33202);

(statearr_33262[(14)] = inst_33214);

return statearr_33262;
})();
var statearr_33263_33285 = state_33241__$1;
(statearr_33263_33285[(2)] = null);

(statearr_33263_33285[(1)] = (2));


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
});})(c__19255__auto___33271,out))
;
return ((function (switch__19199__auto__,c__19255__auto___33271,out){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_33267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33267[(0)] = state_machine__19200__auto__);

(statearr_33267[(1)] = (1));

return statearr_33267;
});
var state_machine__19200__auto____1 = (function (state_33241){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_33241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e33268){if((e33268 instanceof Object)){
var ex__19203__auto__ = e33268;
var statearr_33269_33286 = state_33241;
(statearr_33269_33286[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33287 = state_33241;
state_33241 = G__33287;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_33241){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_33241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___33271,out))
})();
var state__19257__auto__ = (function (){var statearr_33270 = f__19256__auto__.call(null);
(statearr_33270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___33271);

return statearr_33270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___33271,out))
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

//# sourceMappingURL=async.js.map?rel=1428567722036