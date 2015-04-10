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
if(typeof cljs.core.async.t51582 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t51582 = (function (f,fn_handler,meta51583){
this.f = f;
this.fn_handler = fn_handler;
this.meta51583 = meta51583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t51582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t51582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t51582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51584){
var self__ = this;
var _51584__$1 = this;
return self__.meta51583;
});

cljs.core.async.t51582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51584,meta51583__$1){
var self__ = this;
var _51584__$1 = this;
return (new cljs.core.async.t51582(self__.f,self__.fn_handler,meta51583__$1));
});

cljs.core.async.t51582.cljs$lang$type = true;

cljs.core.async.t51582.cljs$lang$ctorStr = "cljs.core.async/t51582";

cljs.core.async.t51582.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t51582");
});

cljs.core.async.__GT_t51582 = (function __GT_t51582(f__$1,fn_handler__$1,meta51583){
return (new cljs.core.async.t51582(f__$1,fn_handler__$1,meta51583));
});

}

return (new cljs.core.async.t51582(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51586 = buff;
if(G__51586){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__51586.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__51586.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__51586);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__51586);
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
var val_51587 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_51587);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_51587,ret){
return (function (){
return fn1.call(null,val_51587);
});})(val_51587,ret))
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
var n__17032__auto___51588 = n;
var x_51589 = (0);
while(true){
if((x_51589 < n__17032__auto___51588)){
(a[x_51589] = (0));

var G__51590 = (x_51589 + (1));
x_51589 = G__51590;
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

var G__51591 = (i + (1));
i = G__51591;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t51595 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t51595 = (function (flag,alt_flag,meta51596){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta51596 = meta51596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51595.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t51595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t51595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t51595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51597){
var self__ = this;
var _51597__$1 = this;
return self__.meta51596;
});})(flag))
;

cljs.core.async.t51595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51597,meta51596__$1){
var self__ = this;
var _51597__$1 = this;
return (new cljs.core.async.t51595(self__.flag,self__.alt_flag,meta51596__$1));
});})(flag))
;

cljs.core.async.t51595.cljs$lang$type = true;

cljs.core.async.t51595.cljs$lang$ctorStr = "cljs.core.async/t51595";

cljs.core.async.t51595.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t51595");
});})(flag))
;

cljs.core.async.__GT_t51595 = ((function (flag){
return (function __GT_t51595(flag__$1,alt_flag__$1,meta51596){
return (new cljs.core.async.t51595(flag__$1,alt_flag__$1,meta51596));
});})(flag))
;

}

return (new cljs.core.async.t51595(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t51601 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t51601 = (function (cb,flag,alt_handler,meta51602){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta51602 = meta51602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51601.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t51601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t51601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t51601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51603){
var self__ = this;
var _51603__$1 = this;
return self__.meta51602;
});

cljs.core.async.t51601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51603,meta51602__$1){
var self__ = this;
var _51603__$1 = this;
return (new cljs.core.async.t51601(self__.cb,self__.flag,self__.alt_handler,meta51602__$1));
});

cljs.core.async.t51601.cljs$lang$type = true;

cljs.core.async.t51601.cljs$lang$ctorStr = "cljs.core.async/t51601";

cljs.core.async.t51601.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t51601");
});

cljs.core.async.__GT_t51601 = (function __GT_t51601(cb__$1,flag__$1,alt_handler__$1,meta51602){
return (new cljs.core.async.t51601(cb__$1,flag__$1,alt_handler__$1,meta51602));
});

}

return (new cljs.core.async.t51601(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51604_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51604_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51605_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51605_SHARP_,port], null));
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
var G__51606 = (i + (1));
i = G__51606;
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
var alts_BANG___delegate = function (ports,p__51607){
var map__51609 = p__51607;
var map__51609__$1 = ((cljs.core.seq_QMARK_.call(null,map__51609))?cljs.core.apply.call(null,cljs.core.hash_map,map__51609):map__51609);
var opts = map__51609__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__51607 = null;
if (arguments.length > 1) {
var G__51610__i = 0, G__51610__a = new Array(arguments.length -  1);
while (G__51610__i < G__51610__a.length) {G__51610__a[G__51610__i] = arguments[G__51610__i + 1]; ++G__51610__i;}
  p__51607 = new cljs.core.IndexedSeq(G__51610__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__51607);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__51611){
var ports = cljs.core.first(arglist__51611);
var p__51607 = cljs.core.rest(arglist__51611);
return alts_BANG___delegate(ports,p__51607);
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
var c__19254__auto___51706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___51706){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___51706){
return (function (state_51682){
var state_val_51683 = (state_51682[(1)]);
if((state_val_51683 === (7))){
var inst_51678 = (state_51682[(2)]);
var state_51682__$1 = state_51682;
var statearr_51684_51707 = state_51682__$1;
(statearr_51684_51707[(2)] = inst_51678);

(statearr_51684_51707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51683 === (1))){
var state_51682__$1 = state_51682;
var statearr_51685_51708 = state_51682__$1;
(statearr_51685_51708[(2)] = null);

(statearr_51685_51708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51683 === (4))){
var inst_51661 = (state_51682[(7)]);
var inst_51661__$1 = (state_51682[(2)]);
var inst_51662 = (inst_51661__$1 == null);
var state_51682__$1 = (function (){var statearr_51686 = state_51682;
(statearr_51686[(7)] = inst_51661__$1);

return statearr_51686;
})();
if(cljs.core.truth_(inst_51662)){
var statearr_51687_51709 = state_51682__$1;
(statearr_51687_51709[(1)] = (5));

} else {
var statearr_51688_51710 = state_51682__$1;
(statearr_51688_51710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51683 === (13))){
var state_51682__$1 = state_51682;
var statearr_51689_51711 = state_51682__$1;
(statearr_51689_51711[(2)] = null);

(statearr_51689_51711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51683 === (6))){
var inst_51661 = (state_51682[(7)]);
var state_51682__$1 = state_51682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51682__$1,(11),to,inst_51661);
} else {
if((state_val_51683 === (3))){
var inst_51680 = (state_51682[(2)]);
var state_51682__$1 = state_51682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51682__$1,inst_51680);
} else {
if((state_val_51683 === (12))){
var state_51682__$1 = state_51682;
var statearr_51690_51712 = state_51682__$1;
(statearr_51690_51712[(2)] = null);

(statearr_51690_51712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51683 === (2))){
var state_51682__$1 = state_51682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51682__$1,(4),from);
} else {
if((state_val_51683 === (11))){
var inst_51671 = (state_51682[(2)]);
var state_51682__$1 = state_51682;
if(cljs.core.truth_(inst_51671)){
var statearr_51691_51713 = state_51682__$1;
(statearr_51691_51713[(1)] = (12));

} else {
var statearr_51692_51714 = state_51682__$1;
(statearr_51692_51714[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51683 === (9))){
var state_51682__$1 = state_51682;
var statearr_51693_51715 = state_51682__$1;
(statearr_51693_51715[(2)] = null);

(statearr_51693_51715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51683 === (5))){
var state_51682__$1 = state_51682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51694_51716 = state_51682__$1;
(statearr_51694_51716[(1)] = (8));

} else {
var statearr_51695_51717 = state_51682__$1;
(statearr_51695_51717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51683 === (14))){
var inst_51676 = (state_51682[(2)]);
var state_51682__$1 = state_51682;
var statearr_51696_51718 = state_51682__$1;
(statearr_51696_51718[(2)] = inst_51676);

(statearr_51696_51718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51683 === (10))){
var inst_51668 = (state_51682[(2)]);
var state_51682__$1 = state_51682;
var statearr_51697_51719 = state_51682__$1;
(statearr_51697_51719[(2)] = inst_51668);

(statearr_51697_51719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51683 === (8))){
var inst_51665 = cljs.core.async.close_BANG_.call(null,to);
var state_51682__$1 = state_51682;
var statearr_51698_51720 = state_51682__$1;
(statearr_51698_51720[(2)] = inst_51665);

(statearr_51698_51720[(1)] = (10));


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
});})(c__19254__auto___51706))
;
return ((function (switch__19198__auto__,c__19254__auto___51706){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_51702 = [null,null,null,null,null,null,null,null];
(statearr_51702[(0)] = state_machine__19199__auto__);

(statearr_51702[(1)] = (1));

return statearr_51702;
});
var state_machine__19199__auto____1 = (function (state_51682){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_51682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e51703){if((e51703 instanceof Object)){
var ex__19202__auto__ = e51703;
var statearr_51704_51721 = state_51682;
(statearr_51704_51721[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51722 = state_51682;
state_51682 = G__51722;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_51682){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_51682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___51706))
})();
var state__19256__auto__ = (function (){var statearr_51705 = f__19255__auto__.call(null);
(statearr_51705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___51706);

return statearr_51705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___51706))
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
return (function (p__51906){
var vec__51907 = p__51906;
var v = cljs.core.nth.call(null,vec__51907,(0),null);
var p = cljs.core.nth.call(null,vec__51907,(1),null);
var job = vec__51907;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19254__auto___52089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___52089,res,vec__51907,v,p,job,jobs,results){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___52089,res,vec__51907,v,p,job,jobs,results){
return (function (state_51912){
var state_val_51913 = (state_51912[(1)]);
if((state_val_51913 === (2))){
var inst_51909 = (state_51912[(2)]);
var inst_51910 = cljs.core.async.close_BANG_.call(null,res);
var state_51912__$1 = (function (){var statearr_51914 = state_51912;
(statearr_51914[(7)] = inst_51909);

return statearr_51914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51912__$1,inst_51910);
} else {
if((state_val_51913 === (1))){
var state_51912__$1 = state_51912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51912__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19254__auto___52089,res,vec__51907,v,p,job,jobs,results))
;
return ((function (switch__19198__auto__,c__19254__auto___52089,res,vec__51907,v,p,job,jobs,results){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_51918 = [null,null,null,null,null,null,null,null];
(statearr_51918[(0)] = state_machine__19199__auto__);

(statearr_51918[(1)] = (1));

return statearr_51918;
});
var state_machine__19199__auto____1 = (function (state_51912){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_51912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e51919){if((e51919 instanceof Object)){
var ex__19202__auto__ = e51919;
var statearr_51920_52090 = state_51912;
(statearr_51920_52090[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52091 = state_51912;
state_51912 = G__52091;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_51912){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_51912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___52089,res,vec__51907,v,p,job,jobs,results))
})();
var state__19256__auto__ = (function (){var statearr_51921 = f__19255__auto__.call(null);
(statearr_51921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___52089);

return statearr_51921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___52089,res,vec__51907,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__51922){
var vec__51923 = p__51922;
var v = cljs.core.nth.call(null,vec__51923,(0),null);
var p = cljs.core.nth.call(null,vec__51923,(1),null);
var job = vec__51923;
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
var n__17032__auto___52092 = n;
var __52093 = (0);
while(true){
if((__52093 < n__17032__auto___52092)){
var G__51924_52094 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__51924_52094) {
case "async":
var c__19254__auto___52096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52093,c__19254__auto___52096,G__51924_52094,n__17032__auto___52092,jobs,results,process,async){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (__52093,c__19254__auto___52096,G__51924_52094,n__17032__auto___52092,jobs,results,process,async){
return (function (state_51937){
var state_val_51938 = (state_51937[(1)]);
if((state_val_51938 === (7))){
var inst_51933 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_51939_52097 = state_51937__$1;
(statearr_51939_52097[(2)] = inst_51933);

(statearr_51939_52097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (6))){
var state_51937__$1 = state_51937;
var statearr_51940_52098 = state_51937__$1;
(statearr_51940_52098[(2)] = null);

(statearr_51940_52098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (5))){
var state_51937__$1 = state_51937;
var statearr_51941_52099 = state_51937__$1;
(statearr_51941_52099[(2)] = null);

(statearr_51941_52099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (4))){
var inst_51927 = (state_51937[(2)]);
var inst_51928 = async.call(null,inst_51927);
var state_51937__$1 = state_51937;
if(cljs.core.truth_(inst_51928)){
var statearr_51942_52100 = state_51937__$1;
(statearr_51942_52100[(1)] = (5));

} else {
var statearr_51943_52101 = state_51937__$1;
(statearr_51943_52101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (3))){
var inst_51935 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51937__$1,inst_51935);
} else {
if((state_val_51938 === (2))){
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51937__$1,(4),jobs);
} else {
if((state_val_51938 === (1))){
var state_51937__$1 = state_51937;
var statearr_51944_52102 = state_51937__$1;
(statearr_51944_52102[(2)] = null);

(statearr_51944_52102[(1)] = (2));


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
});})(__52093,c__19254__auto___52096,G__51924_52094,n__17032__auto___52092,jobs,results,process,async))
;
return ((function (__52093,switch__19198__auto__,c__19254__auto___52096,G__51924_52094,n__17032__auto___52092,jobs,results,process,async){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_51948 = [null,null,null,null,null,null,null];
(statearr_51948[(0)] = state_machine__19199__auto__);

(statearr_51948[(1)] = (1));

return statearr_51948;
});
var state_machine__19199__auto____1 = (function (state_51937){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_51937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e51949){if((e51949 instanceof Object)){
var ex__19202__auto__ = e51949;
var statearr_51950_52103 = state_51937;
(statearr_51950_52103[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52104 = state_51937;
state_51937 = G__52104;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_51937){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_51937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(__52093,switch__19198__auto__,c__19254__auto___52096,G__51924_52094,n__17032__auto___52092,jobs,results,process,async))
})();
var state__19256__auto__ = (function (){var statearr_51951 = f__19255__auto__.call(null);
(statearr_51951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___52096);

return statearr_51951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(__52093,c__19254__auto___52096,G__51924_52094,n__17032__auto___52092,jobs,results,process,async))
);


break;
case "compute":
var c__19254__auto___52105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52093,c__19254__auto___52105,G__51924_52094,n__17032__auto___52092,jobs,results,process,async){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (__52093,c__19254__auto___52105,G__51924_52094,n__17032__auto___52092,jobs,results,process,async){
return (function (state_51964){
var state_val_51965 = (state_51964[(1)]);
if((state_val_51965 === (7))){
var inst_51960 = (state_51964[(2)]);
var state_51964__$1 = state_51964;
var statearr_51966_52106 = state_51964__$1;
(statearr_51966_52106[(2)] = inst_51960);

(statearr_51966_52106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51965 === (6))){
var state_51964__$1 = state_51964;
var statearr_51967_52107 = state_51964__$1;
(statearr_51967_52107[(2)] = null);

(statearr_51967_52107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51965 === (5))){
var state_51964__$1 = state_51964;
var statearr_51968_52108 = state_51964__$1;
(statearr_51968_52108[(2)] = null);

(statearr_51968_52108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51965 === (4))){
var inst_51954 = (state_51964[(2)]);
var inst_51955 = process.call(null,inst_51954);
var state_51964__$1 = state_51964;
if(cljs.core.truth_(inst_51955)){
var statearr_51969_52109 = state_51964__$1;
(statearr_51969_52109[(1)] = (5));

} else {
var statearr_51970_52110 = state_51964__$1;
(statearr_51970_52110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51965 === (3))){
var inst_51962 = (state_51964[(2)]);
var state_51964__$1 = state_51964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51964__$1,inst_51962);
} else {
if((state_val_51965 === (2))){
var state_51964__$1 = state_51964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51964__$1,(4),jobs);
} else {
if((state_val_51965 === (1))){
var state_51964__$1 = state_51964;
var statearr_51971_52111 = state_51964__$1;
(statearr_51971_52111[(2)] = null);

(statearr_51971_52111[(1)] = (2));


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
});})(__52093,c__19254__auto___52105,G__51924_52094,n__17032__auto___52092,jobs,results,process,async))
;
return ((function (__52093,switch__19198__auto__,c__19254__auto___52105,G__51924_52094,n__17032__auto___52092,jobs,results,process,async){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_51975 = [null,null,null,null,null,null,null];
(statearr_51975[(0)] = state_machine__19199__auto__);

(statearr_51975[(1)] = (1));

return statearr_51975;
});
var state_machine__19199__auto____1 = (function (state_51964){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_51964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e51976){if((e51976 instanceof Object)){
var ex__19202__auto__ = e51976;
var statearr_51977_52112 = state_51964;
(statearr_51977_52112[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52113 = state_51964;
state_51964 = G__52113;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_51964){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_51964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(__52093,switch__19198__auto__,c__19254__auto___52105,G__51924_52094,n__17032__auto___52092,jobs,results,process,async))
})();
var state__19256__auto__ = (function (){var statearr_51978 = f__19255__auto__.call(null);
(statearr_51978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___52105);

return statearr_51978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(__52093,c__19254__auto___52105,G__51924_52094,n__17032__auto___52092,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__52114 = (__52093 + (1));
__52093 = G__52114;
continue;
} else {
}
break;
}

var c__19254__auto___52115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___52115,jobs,results,process,async){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___52115,jobs,results,process,async){
return (function (state_52000){
var state_val_52001 = (state_52000[(1)]);
if((state_val_52001 === (9))){
var inst_51993 = (state_52000[(2)]);
var state_52000__$1 = (function (){var statearr_52002 = state_52000;
(statearr_52002[(7)] = inst_51993);

return statearr_52002;
})();
var statearr_52003_52116 = state_52000__$1;
(statearr_52003_52116[(2)] = null);

(statearr_52003_52116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (8))){
var inst_51986 = (state_52000[(8)]);
var inst_51991 = (state_52000[(2)]);
var state_52000__$1 = (function (){var statearr_52004 = state_52000;
(statearr_52004[(9)] = inst_51991);

return statearr_52004;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52000__$1,(9),results,inst_51986);
} else {
if((state_val_52001 === (7))){
var inst_51996 = (state_52000[(2)]);
var state_52000__$1 = state_52000;
var statearr_52005_52117 = state_52000__$1;
(statearr_52005_52117[(2)] = inst_51996);

(statearr_52005_52117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (6))){
var inst_51981 = (state_52000[(10)]);
var inst_51986 = (state_52000[(8)]);
var inst_51986__$1 = cljs.core.async.chan.call(null,(1));
var inst_51987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51988 = [inst_51981,inst_51986__$1];
var inst_51989 = (new cljs.core.PersistentVector(null,2,(5),inst_51987,inst_51988,null));
var state_52000__$1 = (function (){var statearr_52006 = state_52000;
(statearr_52006[(8)] = inst_51986__$1);

return statearr_52006;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52000__$1,(8),jobs,inst_51989);
} else {
if((state_val_52001 === (5))){
var inst_51984 = cljs.core.async.close_BANG_.call(null,jobs);
var state_52000__$1 = state_52000;
var statearr_52007_52118 = state_52000__$1;
(statearr_52007_52118[(2)] = inst_51984);

(statearr_52007_52118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (4))){
var inst_51981 = (state_52000[(10)]);
var inst_51981__$1 = (state_52000[(2)]);
var inst_51982 = (inst_51981__$1 == null);
var state_52000__$1 = (function (){var statearr_52008 = state_52000;
(statearr_52008[(10)] = inst_51981__$1);

return statearr_52008;
})();
if(cljs.core.truth_(inst_51982)){
var statearr_52009_52119 = state_52000__$1;
(statearr_52009_52119[(1)] = (5));

} else {
var statearr_52010_52120 = state_52000__$1;
(statearr_52010_52120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (3))){
var inst_51998 = (state_52000[(2)]);
var state_52000__$1 = state_52000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52000__$1,inst_51998);
} else {
if((state_val_52001 === (2))){
var state_52000__$1 = state_52000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52000__$1,(4),from);
} else {
if((state_val_52001 === (1))){
var state_52000__$1 = state_52000;
var statearr_52011_52121 = state_52000__$1;
(statearr_52011_52121[(2)] = null);

(statearr_52011_52121[(1)] = (2));


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
});})(c__19254__auto___52115,jobs,results,process,async))
;
return ((function (switch__19198__auto__,c__19254__auto___52115,jobs,results,process,async){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_52015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52015[(0)] = state_machine__19199__auto__);

(statearr_52015[(1)] = (1));

return statearr_52015;
});
var state_machine__19199__auto____1 = (function (state_52000){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_52000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e52016){if((e52016 instanceof Object)){
var ex__19202__auto__ = e52016;
var statearr_52017_52122 = state_52000;
(statearr_52017_52122[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52123 = state_52000;
state_52000 = G__52123;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_52000){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_52000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___52115,jobs,results,process,async))
})();
var state__19256__auto__ = (function (){var statearr_52018 = f__19255__auto__.call(null);
(statearr_52018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___52115);

return statearr_52018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___52115,jobs,results,process,async))
);


var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__,jobs,results,process,async){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__,jobs,results,process,async){
return (function (state_52056){
var state_val_52057 = (state_52056[(1)]);
if((state_val_52057 === (7))){
var inst_52052 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52058_52124 = state_52056__$1;
(statearr_52058_52124[(2)] = inst_52052);

(statearr_52058_52124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (20))){
var state_52056__$1 = state_52056;
var statearr_52059_52125 = state_52056__$1;
(statearr_52059_52125[(2)] = null);

(statearr_52059_52125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (1))){
var state_52056__$1 = state_52056;
var statearr_52060_52126 = state_52056__$1;
(statearr_52060_52126[(2)] = null);

(statearr_52060_52126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (4))){
var inst_52021 = (state_52056[(7)]);
var inst_52021__$1 = (state_52056[(2)]);
var inst_52022 = (inst_52021__$1 == null);
var state_52056__$1 = (function (){var statearr_52061 = state_52056;
(statearr_52061[(7)] = inst_52021__$1);

return statearr_52061;
})();
if(cljs.core.truth_(inst_52022)){
var statearr_52062_52127 = state_52056__$1;
(statearr_52062_52127[(1)] = (5));

} else {
var statearr_52063_52128 = state_52056__$1;
(statearr_52063_52128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (15))){
var inst_52034 = (state_52056[(8)]);
var state_52056__$1 = state_52056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52056__$1,(18),to,inst_52034);
} else {
if((state_val_52057 === (21))){
var inst_52047 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52064_52129 = state_52056__$1;
(statearr_52064_52129[(2)] = inst_52047);

(statearr_52064_52129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (13))){
var inst_52049 = (state_52056[(2)]);
var state_52056__$1 = (function (){var statearr_52065 = state_52056;
(statearr_52065[(9)] = inst_52049);

return statearr_52065;
})();
var statearr_52066_52130 = state_52056__$1;
(statearr_52066_52130[(2)] = null);

(statearr_52066_52130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (6))){
var inst_52021 = (state_52056[(7)]);
var state_52056__$1 = state_52056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52056__$1,(11),inst_52021);
} else {
if((state_val_52057 === (17))){
var inst_52042 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
if(cljs.core.truth_(inst_52042)){
var statearr_52067_52131 = state_52056__$1;
(statearr_52067_52131[(1)] = (19));

} else {
var statearr_52068_52132 = state_52056__$1;
(statearr_52068_52132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (3))){
var inst_52054 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52056__$1,inst_52054);
} else {
if((state_val_52057 === (12))){
var inst_52031 = (state_52056[(10)]);
var state_52056__$1 = state_52056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52056__$1,(14),inst_52031);
} else {
if((state_val_52057 === (2))){
var state_52056__$1 = state_52056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52056__$1,(4),results);
} else {
if((state_val_52057 === (19))){
var state_52056__$1 = state_52056;
var statearr_52069_52133 = state_52056__$1;
(statearr_52069_52133[(2)] = null);

(statearr_52069_52133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (11))){
var inst_52031 = (state_52056[(2)]);
var state_52056__$1 = (function (){var statearr_52070 = state_52056;
(statearr_52070[(10)] = inst_52031);

return statearr_52070;
})();
var statearr_52071_52134 = state_52056__$1;
(statearr_52071_52134[(2)] = null);

(statearr_52071_52134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (9))){
var state_52056__$1 = state_52056;
var statearr_52072_52135 = state_52056__$1;
(statearr_52072_52135[(2)] = null);

(statearr_52072_52135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (5))){
var state_52056__$1 = state_52056;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52073_52136 = state_52056__$1;
(statearr_52073_52136[(1)] = (8));

} else {
var statearr_52074_52137 = state_52056__$1;
(statearr_52074_52137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (14))){
var inst_52034 = (state_52056[(8)]);
var inst_52036 = (state_52056[(11)]);
var inst_52034__$1 = (state_52056[(2)]);
var inst_52035 = (inst_52034__$1 == null);
var inst_52036__$1 = cljs.core.not.call(null,inst_52035);
var state_52056__$1 = (function (){var statearr_52075 = state_52056;
(statearr_52075[(8)] = inst_52034__$1);

(statearr_52075[(11)] = inst_52036__$1);

return statearr_52075;
})();
if(inst_52036__$1){
var statearr_52076_52138 = state_52056__$1;
(statearr_52076_52138[(1)] = (15));

} else {
var statearr_52077_52139 = state_52056__$1;
(statearr_52077_52139[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (16))){
var inst_52036 = (state_52056[(11)]);
var state_52056__$1 = state_52056;
var statearr_52078_52140 = state_52056__$1;
(statearr_52078_52140[(2)] = inst_52036);

(statearr_52078_52140[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (10))){
var inst_52028 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52079_52141 = state_52056__$1;
(statearr_52079_52141[(2)] = inst_52028);

(statearr_52079_52141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (18))){
var inst_52039 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52080_52142 = state_52056__$1;
(statearr_52080_52142[(2)] = inst_52039);

(statearr_52080_52142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (8))){
var inst_52025 = cljs.core.async.close_BANG_.call(null,to);
var state_52056__$1 = state_52056;
var statearr_52081_52143 = state_52056__$1;
(statearr_52081_52143[(2)] = inst_52025);

(statearr_52081_52143[(1)] = (10));


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
var statearr_52085 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52085[(0)] = state_machine__19199__auto__);

(statearr_52085[(1)] = (1));

return statearr_52085;
});
var state_machine__19199__auto____1 = (function (state_52056){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_52056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e52086){if((e52086 instanceof Object)){
var ex__19202__auto__ = e52086;
var statearr_52087_52144 = state_52056;
(statearr_52087_52144[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52145 = state_52056;
state_52056 = G__52145;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_52056){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_52056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__,jobs,results,process,async))
})();
var state__19256__auto__ = (function (){var statearr_52088 = f__19255__auto__.call(null);
(statearr_52088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_52088;
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
var c__19254__auto___52246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___52246,tc,fc){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___52246,tc,fc){
return (function (state_52221){
var state_val_52222 = (state_52221[(1)]);
if((state_val_52222 === (7))){
var inst_52217 = (state_52221[(2)]);
var state_52221__$1 = state_52221;
var statearr_52223_52247 = state_52221__$1;
(statearr_52223_52247[(2)] = inst_52217);

(statearr_52223_52247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (1))){
var state_52221__$1 = state_52221;
var statearr_52224_52248 = state_52221__$1;
(statearr_52224_52248[(2)] = null);

(statearr_52224_52248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (4))){
var inst_52198 = (state_52221[(7)]);
var inst_52198__$1 = (state_52221[(2)]);
var inst_52199 = (inst_52198__$1 == null);
var state_52221__$1 = (function (){var statearr_52225 = state_52221;
(statearr_52225[(7)] = inst_52198__$1);

return statearr_52225;
})();
if(cljs.core.truth_(inst_52199)){
var statearr_52226_52249 = state_52221__$1;
(statearr_52226_52249[(1)] = (5));

} else {
var statearr_52227_52250 = state_52221__$1;
(statearr_52227_52250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (13))){
var state_52221__$1 = state_52221;
var statearr_52228_52251 = state_52221__$1;
(statearr_52228_52251[(2)] = null);

(statearr_52228_52251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (6))){
var inst_52198 = (state_52221[(7)]);
var inst_52204 = p.call(null,inst_52198);
var state_52221__$1 = state_52221;
if(cljs.core.truth_(inst_52204)){
var statearr_52229_52252 = state_52221__$1;
(statearr_52229_52252[(1)] = (9));

} else {
var statearr_52230_52253 = state_52221__$1;
(statearr_52230_52253[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (3))){
var inst_52219 = (state_52221[(2)]);
var state_52221__$1 = state_52221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52221__$1,inst_52219);
} else {
if((state_val_52222 === (12))){
var state_52221__$1 = state_52221;
var statearr_52231_52254 = state_52221__$1;
(statearr_52231_52254[(2)] = null);

(statearr_52231_52254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (2))){
var state_52221__$1 = state_52221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52221__$1,(4),ch);
} else {
if((state_val_52222 === (11))){
var inst_52198 = (state_52221[(7)]);
var inst_52208 = (state_52221[(2)]);
var state_52221__$1 = state_52221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52221__$1,(8),inst_52208,inst_52198);
} else {
if((state_val_52222 === (9))){
var state_52221__$1 = state_52221;
var statearr_52232_52255 = state_52221__$1;
(statearr_52232_52255[(2)] = tc);

(statearr_52232_52255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (5))){
var inst_52201 = cljs.core.async.close_BANG_.call(null,tc);
var inst_52202 = cljs.core.async.close_BANG_.call(null,fc);
var state_52221__$1 = (function (){var statearr_52233 = state_52221;
(statearr_52233[(8)] = inst_52201);

return statearr_52233;
})();
var statearr_52234_52256 = state_52221__$1;
(statearr_52234_52256[(2)] = inst_52202);

(statearr_52234_52256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (14))){
var inst_52215 = (state_52221[(2)]);
var state_52221__$1 = state_52221;
var statearr_52235_52257 = state_52221__$1;
(statearr_52235_52257[(2)] = inst_52215);

(statearr_52235_52257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (10))){
var state_52221__$1 = state_52221;
var statearr_52236_52258 = state_52221__$1;
(statearr_52236_52258[(2)] = fc);

(statearr_52236_52258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (8))){
var inst_52210 = (state_52221[(2)]);
var state_52221__$1 = state_52221;
if(cljs.core.truth_(inst_52210)){
var statearr_52237_52259 = state_52221__$1;
(statearr_52237_52259[(1)] = (12));

} else {
var statearr_52238_52260 = state_52221__$1;
(statearr_52238_52260[(1)] = (13));

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
});})(c__19254__auto___52246,tc,fc))
;
return ((function (switch__19198__auto__,c__19254__auto___52246,tc,fc){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_52242 = [null,null,null,null,null,null,null,null,null];
(statearr_52242[(0)] = state_machine__19199__auto__);

(statearr_52242[(1)] = (1));

return statearr_52242;
});
var state_machine__19199__auto____1 = (function (state_52221){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_52221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e52243){if((e52243 instanceof Object)){
var ex__19202__auto__ = e52243;
var statearr_52244_52261 = state_52221;
(statearr_52244_52261[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52262 = state_52221;
state_52221 = G__52262;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_52221){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_52221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___52246,tc,fc))
})();
var state__19256__auto__ = (function (){var statearr_52245 = f__19255__auto__.call(null);
(statearr_52245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___52246);

return statearr_52245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___52246,tc,fc))
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
return (function (state_52309){
var state_val_52310 = (state_52309[(1)]);
if((state_val_52310 === (7))){
var inst_52305 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
var statearr_52311_52327 = state_52309__$1;
(statearr_52311_52327[(2)] = inst_52305);

(statearr_52311_52327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (6))){
var inst_52295 = (state_52309[(7)]);
var inst_52298 = (state_52309[(8)]);
var inst_52302 = f.call(null,inst_52295,inst_52298);
var inst_52295__$1 = inst_52302;
var state_52309__$1 = (function (){var statearr_52312 = state_52309;
(statearr_52312[(7)] = inst_52295__$1);

return statearr_52312;
})();
var statearr_52313_52328 = state_52309__$1;
(statearr_52313_52328[(2)] = null);

(statearr_52313_52328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (5))){
var inst_52295 = (state_52309[(7)]);
var state_52309__$1 = state_52309;
var statearr_52314_52329 = state_52309__$1;
(statearr_52314_52329[(2)] = inst_52295);

(statearr_52314_52329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (4))){
var inst_52298 = (state_52309[(8)]);
var inst_52298__$1 = (state_52309[(2)]);
var inst_52299 = (inst_52298__$1 == null);
var state_52309__$1 = (function (){var statearr_52315 = state_52309;
(statearr_52315[(8)] = inst_52298__$1);

return statearr_52315;
})();
if(cljs.core.truth_(inst_52299)){
var statearr_52316_52330 = state_52309__$1;
(statearr_52316_52330[(1)] = (5));

} else {
var statearr_52317_52331 = state_52309__$1;
(statearr_52317_52331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (3))){
var inst_52307 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52309__$1,inst_52307);
} else {
if((state_val_52310 === (2))){
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52309__$1,(4),ch);
} else {
if((state_val_52310 === (1))){
var inst_52295 = init;
var state_52309__$1 = (function (){var statearr_52318 = state_52309;
(statearr_52318[(7)] = inst_52295);

return statearr_52318;
})();
var statearr_52319_52332 = state_52309__$1;
(statearr_52319_52332[(2)] = null);

(statearr_52319_52332[(1)] = (2));


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
var statearr_52323 = [null,null,null,null,null,null,null,null,null];
(statearr_52323[(0)] = state_machine__19199__auto__);

(statearr_52323[(1)] = (1));

return statearr_52323;
});
var state_machine__19199__auto____1 = (function (state_52309){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_52309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e52324){if((e52324 instanceof Object)){
var ex__19202__auto__ = e52324;
var statearr_52325_52333 = state_52309;
(statearr_52325_52333[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52334 = state_52309;
state_52309 = G__52334;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_52309){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_52309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_52326 = f__19255__auto__.call(null);
(statearr_52326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_52326;
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
return (function (state_52408){
var state_val_52409 = (state_52408[(1)]);
if((state_val_52409 === (7))){
var inst_52390 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52410_52433 = state_52408__$1;
(statearr_52410_52433[(2)] = inst_52390);

(statearr_52410_52433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52409 === (1))){
var inst_52384 = cljs.core.seq.call(null,coll);
var inst_52385 = inst_52384;
var state_52408__$1 = (function (){var statearr_52411 = state_52408;
(statearr_52411[(7)] = inst_52385);

return statearr_52411;
})();
var statearr_52412_52434 = state_52408__$1;
(statearr_52412_52434[(2)] = null);

(statearr_52412_52434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52409 === (4))){
var inst_52385 = (state_52408[(7)]);
var inst_52388 = cljs.core.first.call(null,inst_52385);
var state_52408__$1 = state_52408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52408__$1,(7),ch,inst_52388);
} else {
if((state_val_52409 === (13))){
var inst_52402 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52413_52435 = state_52408__$1;
(statearr_52413_52435[(2)] = inst_52402);

(statearr_52413_52435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52409 === (6))){
var inst_52393 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
if(cljs.core.truth_(inst_52393)){
var statearr_52414_52436 = state_52408__$1;
(statearr_52414_52436[(1)] = (8));

} else {
var statearr_52415_52437 = state_52408__$1;
(statearr_52415_52437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52409 === (3))){
var inst_52406 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52408__$1,inst_52406);
} else {
if((state_val_52409 === (12))){
var state_52408__$1 = state_52408;
var statearr_52416_52438 = state_52408__$1;
(statearr_52416_52438[(2)] = null);

(statearr_52416_52438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52409 === (2))){
var inst_52385 = (state_52408[(7)]);
var state_52408__$1 = state_52408;
if(cljs.core.truth_(inst_52385)){
var statearr_52417_52439 = state_52408__$1;
(statearr_52417_52439[(1)] = (4));

} else {
var statearr_52418_52440 = state_52408__$1;
(statearr_52418_52440[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52409 === (11))){
var inst_52399 = cljs.core.async.close_BANG_.call(null,ch);
var state_52408__$1 = state_52408;
var statearr_52419_52441 = state_52408__$1;
(statearr_52419_52441[(2)] = inst_52399);

(statearr_52419_52441[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52409 === (9))){
var state_52408__$1 = state_52408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52420_52442 = state_52408__$1;
(statearr_52420_52442[(1)] = (11));

} else {
var statearr_52421_52443 = state_52408__$1;
(statearr_52421_52443[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52409 === (5))){
var inst_52385 = (state_52408[(7)]);
var state_52408__$1 = state_52408;
var statearr_52422_52444 = state_52408__$1;
(statearr_52422_52444[(2)] = inst_52385);

(statearr_52422_52444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52409 === (10))){
var inst_52404 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52423_52445 = state_52408__$1;
(statearr_52423_52445[(2)] = inst_52404);

(statearr_52423_52445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52409 === (8))){
var inst_52385 = (state_52408[(7)]);
var inst_52395 = cljs.core.next.call(null,inst_52385);
var inst_52385__$1 = inst_52395;
var state_52408__$1 = (function (){var statearr_52424 = state_52408;
(statearr_52424[(7)] = inst_52385__$1);

return statearr_52424;
})();
var statearr_52425_52446 = state_52408__$1;
(statearr_52425_52446[(2)] = null);

(statearr_52425_52446[(1)] = (2));


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
var statearr_52429 = [null,null,null,null,null,null,null,null];
(statearr_52429[(0)] = state_machine__19199__auto__);

(statearr_52429[(1)] = (1));

return statearr_52429;
});
var state_machine__19199__auto____1 = (function (state_52408){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_52408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e52430){if((e52430 instanceof Object)){
var ex__19202__auto__ = e52430;
var statearr_52431_52447 = state_52408;
(statearr_52431_52447[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52448 = state_52408;
state_52408 = G__52448;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_52408){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_52408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_52432 = f__19255__auto__.call(null);
(statearr_52432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_52432;
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

cljs.core.async.Mux = (function (){var obj52450 = {};
return obj52450;
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


cljs.core.async.Mult = (function (){var obj52452 = {};
return obj52452;
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
if(typeof cljs.core.async.t52674 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t52674 = (function (cs,ch,mult,meta52675){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta52675 = meta52675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52674.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t52674.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t52674.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t52674.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t52674.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t52674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t52674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52676){
var self__ = this;
var _52676__$1 = this;
return self__.meta52675;
});})(cs))
;

cljs.core.async.t52674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52676,meta52675__$1){
var self__ = this;
var _52676__$1 = this;
return (new cljs.core.async.t52674(self__.cs,self__.ch,self__.mult,meta52675__$1));
});})(cs))
;

cljs.core.async.t52674.cljs$lang$type = true;

cljs.core.async.t52674.cljs$lang$ctorStr = "cljs.core.async/t52674";

cljs.core.async.t52674.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t52674");
});})(cs))
;

cljs.core.async.__GT_t52674 = ((function (cs){
return (function __GT_t52674(cs__$1,ch__$1,mult__$1,meta52675){
return (new cljs.core.async.t52674(cs__$1,ch__$1,mult__$1,meta52675));
});})(cs))
;

}

return (new cljs.core.async.t52674(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19254__auto___52895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___52895,cs,m,dchan,dctr,done){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___52895,cs,m,dchan,dctr,done){
return (function (state_52807){
var state_val_52808 = (state_52807[(1)]);
if((state_val_52808 === (7))){
var inst_52803 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52809_52896 = state_52807__$1;
(statearr_52809_52896[(2)] = inst_52803);

(statearr_52809_52896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (20))){
var inst_52708 = (state_52807[(7)]);
var inst_52718 = cljs.core.first.call(null,inst_52708);
var inst_52719 = cljs.core.nth.call(null,inst_52718,(0),null);
var inst_52720 = cljs.core.nth.call(null,inst_52718,(1),null);
var state_52807__$1 = (function (){var statearr_52810 = state_52807;
(statearr_52810[(8)] = inst_52719);

return statearr_52810;
})();
if(cljs.core.truth_(inst_52720)){
var statearr_52811_52897 = state_52807__$1;
(statearr_52811_52897[(1)] = (22));

} else {
var statearr_52812_52898 = state_52807__$1;
(statearr_52812_52898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (27))){
var inst_52755 = (state_52807[(9)]);
var inst_52750 = (state_52807[(10)]);
var inst_52748 = (state_52807[(11)]);
var inst_52679 = (state_52807[(12)]);
var inst_52755__$1 = cljs.core._nth.call(null,inst_52748,inst_52750);
var inst_52756 = cljs.core.async.put_BANG_.call(null,inst_52755__$1,inst_52679,done);
var state_52807__$1 = (function (){var statearr_52813 = state_52807;
(statearr_52813[(9)] = inst_52755__$1);

return statearr_52813;
})();
if(cljs.core.truth_(inst_52756)){
var statearr_52814_52899 = state_52807__$1;
(statearr_52814_52899[(1)] = (30));

} else {
var statearr_52815_52900 = state_52807__$1;
(statearr_52815_52900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (1))){
var state_52807__$1 = state_52807;
var statearr_52816_52901 = state_52807__$1;
(statearr_52816_52901[(2)] = null);

(statearr_52816_52901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (24))){
var inst_52708 = (state_52807[(7)]);
var inst_52725 = (state_52807[(2)]);
var inst_52726 = cljs.core.next.call(null,inst_52708);
var inst_52688 = inst_52726;
var inst_52689 = null;
var inst_52690 = (0);
var inst_52691 = (0);
var state_52807__$1 = (function (){var statearr_52817 = state_52807;
(statearr_52817[(13)] = inst_52725);

(statearr_52817[(14)] = inst_52690);

(statearr_52817[(15)] = inst_52691);

(statearr_52817[(16)] = inst_52688);

(statearr_52817[(17)] = inst_52689);

return statearr_52817;
})();
var statearr_52818_52902 = state_52807__$1;
(statearr_52818_52902[(2)] = null);

(statearr_52818_52902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (39))){
var state_52807__$1 = state_52807;
var statearr_52822_52903 = state_52807__$1;
(statearr_52822_52903[(2)] = null);

(statearr_52822_52903[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (4))){
var inst_52679 = (state_52807[(12)]);
var inst_52679__$1 = (state_52807[(2)]);
var inst_52680 = (inst_52679__$1 == null);
var state_52807__$1 = (function (){var statearr_52823 = state_52807;
(statearr_52823[(12)] = inst_52679__$1);

return statearr_52823;
})();
if(cljs.core.truth_(inst_52680)){
var statearr_52824_52904 = state_52807__$1;
(statearr_52824_52904[(1)] = (5));

} else {
var statearr_52825_52905 = state_52807__$1;
(statearr_52825_52905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (15))){
var inst_52690 = (state_52807[(14)]);
var inst_52691 = (state_52807[(15)]);
var inst_52688 = (state_52807[(16)]);
var inst_52689 = (state_52807[(17)]);
var inst_52704 = (state_52807[(2)]);
var inst_52705 = (inst_52691 + (1));
var tmp52819 = inst_52690;
var tmp52820 = inst_52688;
var tmp52821 = inst_52689;
var inst_52688__$1 = tmp52820;
var inst_52689__$1 = tmp52821;
var inst_52690__$1 = tmp52819;
var inst_52691__$1 = inst_52705;
var state_52807__$1 = (function (){var statearr_52826 = state_52807;
(statearr_52826[(14)] = inst_52690__$1);

(statearr_52826[(15)] = inst_52691__$1);

(statearr_52826[(18)] = inst_52704);

(statearr_52826[(16)] = inst_52688__$1);

(statearr_52826[(17)] = inst_52689__$1);

return statearr_52826;
})();
var statearr_52827_52906 = state_52807__$1;
(statearr_52827_52906[(2)] = null);

(statearr_52827_52906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (21))){
var inst_52729 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52831_52907 = state_52807__$1;
(statearr_52831_52907[(2)] = inst_52729);

(statearr_52831_52907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (31))){
var inst_52755 = (state_52807[(9)]);
var inst_52759 = done.call(null,null);
var inst_52760 = cljs.core.async.untap_STAR_.call(null,m,inst_52755);
var state_52807__$1 = (function (){var statearr_52832 = state_52807;
(statearr_52832[(19)] = inst_52759);

return statearr_52832;
})();
var statearr_52833_52908 = state_52807__$1;
(statearr_52833_52908[(2)] = inst_52760);

(statearr_52833_52908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (32))){
var inst_52749 = (state_52807[(20)]);
var inst_52747 = (state_52807[(21)]);
var inst_52750 = (state_52807[(10)]);
var inst_52748 = (state_52807[(11)]);
var inst_52762 = (state_52807[(2)]);
var inst_52763 = (inst_52750 + (1));
var tmp52828 = inst_52749;
var tmp52829 = inst_52747;
var tmp52830 = inst_52748;
var inst_52747__$1 = tmp52829;
var inst_52748__$1 = tmp52830;
var inst_52749__$1 = tmp52828;
var inst_52750__$1 = inst_52763;
var state_52807__$1 = (function (){var statearr_52834 = state_52807;
(statearr_52834[(20)] = inst_52749__$1);

(statearr_52834[(21)] = inst_52747__$1);

(statearr_52834[(22)] = inst_52762);

(statearr_52834[(10)] = inst_52750__$1);

(statearr_52834[(11)] = inst_52748__$1);

return statearr_52834;
})();
var statearr_52835_52909 = state_52807__$1;
(statearr_52835_52909[(2)] = null);

(statearr_52835_52909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (40))){
var inst_52775 = (state_52807[(23)]);
var inst_52779 = done.call(null,null);
var inst_52780 = cljs.core.async.untap_STAR_.call(null,m,inst_52775);
var state_52807__$1 = (function (){var statearr_52836 = state_52807;
(statearr_52836[(24)] = inst_52779);

return statearr_52836;
})();
var statearr_52837_52910 = state_52807__$1;
(statearr_52837_52910[(2)] = inst_52780);

(statearr_52837_52910[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (33))){
var inst_52766 = (state_52807[(25)]);
var inst_52768 = cljs.core.chunked_seq_QMARK_.call(null,inst_52766);
var state_52807__$1 = state_52807;
if(inst_52768){
var statearr_52838_52911 = state_52807__$1;
(statearr_52838_52911[(1)] = (36));

} else {
var statearr_52839_52912 = state_52807__$1;
(statearr_52839_52912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (13))){
var inst_52698 = (state_52807[(26)]);
var inst_52701 = cljs.core.async.close_BANG_.call(null,inst_52698);
var state_52807__$1 = state_52807;
var statearr_52840_52913 = state_52807__$1;
(statearr_52840_52913[(2)] = inst_52701);

(statearr_52840_52913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (22))){
var inst_52719 = (state_52807[(8)]);
var inst_52722 = cljs.core.async.close_BANG_.call(null,inst_52719);
var state_52807__$1 = state_52807;
var statearr_52841_52914 = state_52807__$1;
(statearr_52841_52914[(2)] = inst_52722);

(statearr_52841_52914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (36))){
var inst_52766 = (state_52807[(25)]);
var inst_52770 = cljs.core.chunk_first.call(null,inst_52766);
var inst_52771 = cljs.core.chunk_rest.call(null,inst_52766);
var inst_52772 = cljs.core.count.call(null,inst_52770);
var inst_52747 = inst_52771;
var inst_52748 = inst_52770;
var inst_52749 = inst_52772;
var inst_52750 = (0);
var state_52807__$1 = (function (){var statearr_52842 = state_52807;
(statearr_52842[(20)] = inst_52749);

(statearr_52842[(21)] = inst_52747);

(statearr_52842[(10)] = inst_52750);

(statearr_52842[(11)] = inst_52748);

return statearr_52842;
})();
var statearr_52843_52915 = state_52807__$1;
(statearr_52843_52915[(2)] = null);

(statearr_52843_52915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (41))){
var inst_52766 = (state_52807[(25)]);
var inst_52782 = (state_52807[(2)]);
var inst_52783 = cljs.core.next.call(null,inst_52766);
var inst_52747 = inst_52783;
var inst_52748 = null;
var inst_52749 = (0);
var inst_52750 = (0);
var state_52807__$1 = (function (){var statearr_52844 = state_52807;
(statearr_52844[(20)] = inst_52749);

(statearr_52844[(21)] = inst_52747);

(statearr_52844[(10)] = inst_52750);

(statearr_52844[(11)] = inst_52748);

(statearr_52844[(27)] = inst_52782);

return statearr_52844;
})();
var statearr_52845_52916 = state_52807__$1;
(statearr_52845_52916[(2)] = null);

(statearr_52845_52916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (43))){
var state_52807__$1 = state_52807;
var statearr_52846_52917 = state_52807__$1;
(statearr_52846_52917[(2)] = null);

(statearr_52846_52917[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (29))){
var inst_52791 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52847_52918 = state_52807__$1;
(statearr_52847_52918[(2)] = inst_52791);

(statearr_52847_52918[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (44))){
var inst_52800 = (state_52807[(2)]);
var state_52807__$1 = (function (){var statearr_52848 = state_52807;
(statearr_52848[(28)] = inst_52800);

return statearr_52848;
})();
var statearr_52849_52919 = state_52807__$1;
(statearr_52849_52919[(2)] = null);

(statearr_52849_52919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (6))){
var inst_52739 = (state_52807[(29)]);
var inst_52738 = cljs.core.deref.call(null,cs);
var inst_52739__$1 = cljs.core.keys.call(null,inst_52738);
var inst_52740 = cljs.core.count.call(null,inst_52739__$1);
var inst_52741 = cljs.core.reset_BANG_.call(null,dctr,inst_52740);
var inst_52746 = cljs.core.seq.call(null,inst_52739__$1);
var inst_52747 = inst_52746;
var inst_52748 = null;
var inst_52749 = (0);
var inst_52750 = (0);
var state_52807__$1 = (function (){var statearr_52850 = state_52807;
(statearr_52850[(20)] = inst_52749);

(statearr_52850[(29)] = inst_52739__$1);

(statearr_52850[(21)] = inst_52747);

(statearr_52850[(30)] = inst_52741);

(statearr_52850[(10)] = inst_52750);

(statearr_52850[(11)] = inst_52748);

return statearr_52850;
})();
var statearr_52851_52920 = state_52807__$1;
(statearr_52851_52920[(2)] = null);

(statearr_52851_52920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (28))){
var inst_52766 = (state_52807[(25)]);
var inst_52747 = (state_52807[(21)]);
var inst_52766__$1 = cljs.core.seq.call(null,inst_52747);
var state_52807__$1 = (function (){var statearr_52852 = state_52807;
(statearr_52852[(25)] = inst_52766__$1);

return statearr_52852;
})();
if(inst_52766__$1){
var statearr_52853_52921 = state_52807__$1;
(statearr_52853_52921[(1)] = (33));

} else {
var statearr_52854_52922 = state_52807__$1;
(statearr_52854_52922[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (25))){
var inst_52749 = (state_52807[(20)]);
var inst_52750 = (state_52807[(10)]);
var inst_52752 = (inst_52750 < inst_52749);
var inst_52753 = inst_52752;
var state_52807__$1 = state_52807;
if(cljs.core.truth_(inst_52753)){
var statearr_52855_52923 = state_52807__$1;
(statearr_52855_52923[(1)] = (27));

} else {
var statearr_52856_52924 = state_52807__$1;
(statearr_52856_52924[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (34))){
var state_52807__$1 = state_52807;
var statearr_52857_52925 = state_52807__$1;
(statearr_52857_52925[(2)] = null);

(statearr_52857_52925[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (17))){
var state_52807__$1 = state_52807;
var statearr_52858_52926 = state_52807__$1;
(statearr_52858_52926[(2)] = null);

(statearr_52858_52926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (3))){
var inst_52805 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52807__$1,inst_52805);
} else {
if((state_val_52808 === (12))){
var inst_52734 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52859_52927 = state_52807__$1;
(statearr_52859_52927[(2)] = inst_52734);

(statearr_52859_52927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (2))){
var state_52807__$1 = state_52807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52807__$1,(4),ch);
} else {
if((state_val_52808 === (23))){
var state_52807__$1 = state_52807;
var statearr_52860_52928 = state_52807__$1;
(statearr_52860_52928[(2)] = null);

(statearr_52860_52928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (35))){
var inst_52789 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52861_52929 = state_52807__$1;
(statearr_52861_52929[(2)] = inst_52789);

(statearr_52861_52929[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (19))){
var inst_52708 = (state_52807[(7)]);
var inst_52712 = cljs.core.chunk_first.call(null,inst_52708);
var inst_52713 = cljs.core.chunk_rest.call(null,inst_52708);
var inst_52714 = cljs.core.count.call(null,inst_52712);
var inst_52688 = inst_52713;
var inst_52689 = inst_52712;
var inst_52690 = inst_52714;
var inst_52691 = (0);
var state_52807__$1 = (function (){var statearr_52862 = state_52807;
(statearr_52862[(14)] = inst_52690);

(statearr_52862[(15)] = inst_52691);

(statearr_52862[(16)] = inst_52688);

(statearr_52862[(17)] = inst_52689);

return statearr_52862;
})();
var statearr_52863_52930 = state_52807__$1;
(statearr_52863_52930[(2)] = null);

(statearr_52863_52930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (11))){
var inst_52688 = (state_52807[(16)]);
var inst_52708 = (state_52807[(7)]);
var inst_52708__$1 = cljs.core.seq.call(null,inst_52688);
var state_52807__$1 = (function (){var statearr_52864 = state_52807;
(statearr_52864[(7)] = inst_52708__$1);

return statearr_52864;
})();
if(inst_52708__$1){
var statearr_52865_52931 = state_52807__$1;
(statearr_52865_52931[(1)] = (16));

} else {
var statearr_52866_52932 = state_52807__$1;
(statearr_52866_52932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (9))){
var inst_52736 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52867_52933 = state_52807__$1;
(statearr_52867_52933[(2)] = inst_52736);

(statearr_52867_52933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (5))){
var inst_52686 = cljs.core.deref.call(null,cs);
var inst_52687 = cljs.core.seq.call(null,inst_52686);
var inst_52688 = inst_52687;
var inst_52689 = null;
var inst_52690 = (0);
var inst_52691 = (0);
var state_52807__$1 = (function (){var statearr_52868 = state_52807;
(statearr_52868[(14)] = inst_52690);

(statearr_52868[(15)] = inst_52691);

(statearr_52868[(16)] = inst_52688);

(statearr_52868[(17)] = inst_52689);

return statearr_52868;
})();
var statearr_52869_52934 = state_52807__$1;
(statearr_52869_52934[(2)] = null);

(statearr_52869_52934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (14))){
var state_52807__$1 = state_52807;
var statearr_52870_52935 = state_52807__$1;
(statearr_52870_52935[(2)] = null);

(statearr_52870_52935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (45))){
var inst_52797 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52871_52936 = state_52807__$1;
(statearr_52871_52936[(2)] = inst_52797);

(statearr_52871_52936[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (26))){
var inst_52739 = (state_52807[(29)]);
var inst_52793 = (state_52807[(2)]);
var inst_52794 = cljs.core.seq.call(null,inst_52739);
var state_52807__$1 = (function (){var statearr_52872 = state_52807;
(statearr_52872[(31)] = inst_52793);

return statearr_52872;
})();
if(inst_52794){
var statearr_52873_52937 = state_52807__$1;
(statearr_52873_52937[(1)] = (42));

} else {
var statearr_52874_52938 = state_52807__$1;
(statearr_52874_52938[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (16))){
var inst_52708 = (state_52807[(7)]);
var inst_52710 = cljs.core.chunked_seq_QMARK_.call(null,inst_52708);
var state_52807__$1 = state_52807;
if(inst_52710){
var statearr_52875_52939 = state_52807__$1;
(statearr_52875_52939[(1)] = (19));

} else {
var statearr_52876_52940 = state_52807__$1;
(statearr_52876_52940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (38))){
var inst_52786 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52877_52941 = state_52807__$1;
(statearr_52877_52941[(2)] = inst_52786);

(statearr_52877_52941[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (30))){
var state_52807__$1 = state_52807;
var statearr_52878_52942 = state_52807__$1;
(statearr_52878_52942[(2)] = null);

(statearr_52878_52942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (10))){
var inst_52691 = (state_52807[(15)]);
var inst_52689 = (state_52807[(17)]);
var inst_52697 = cljs.core._nth.call(null,inst_52689,inst_52691);
var inst_52698 = cljs.core.nth.call(null,inst_52697,(0),null);
var inst_52699 = cljs.core.nth.call(null,inst_52697,(1),null);
var state_52807__$1 = (function (){var statearr_52879 = state_52807;
(statearr_52879[(26)] = inst_52698);

return statearr_52879;
})();
if(cljs.core.truth_(inst_52699)){
var statearr_52880_52943 = state_52807__$1;
(statearr_52880_52943[(1)] = (13));

} else {
var statearr_52881_52944 = state_52807__$1;
(statearr_52881_52944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (18))){
var inst_52732 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52882_52945 = state_52807__$1;
(statearr_52882_52945[(2)] = inst_52732);

(statearr_52882_52945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (42))){
var state_52807__$1 = state_52807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52807__$1,(45),dchan);
} else {
if((state_val_52808 === (37))){
var inst_52766 = (state_52807[(25)]);
var inst_52775 = (state_52807[(23)]);
var inst_52679 = (state_52807[(12)]);
var inst_52775__$1 = cljs.core.first.call(null,inst_52766);
var inst_52776 = cljs.core.async.put_BANG_.call(null,inst_52775__$1,inst_52679,done);
var state_52807__$1 = (function (){var statearr_52883 = state_52807;
(statearr_52883[(23)] = inst_52775__$1);

return statearr_52883;
})();
if(cljs.core.truth_(inst_52776)){
var statearr_52884_52946 = state_52807__$1;
(statearr_52884_52946[(1)] = (39));

} else {
var statearr_52885_52947 = state_52807__$1;
(statearr_52885_52947[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (8))){
var inst_52690 = (state_52807[(14)]);
var inst_52691 = (state_52807[(15)]);
var inst_52693 = (inst_52691 < inst_52690);
var inst_52694 = inst_52693;
var state_52807__$1 = state_52807;
if(cljs.core.truth_(inst_52694)){
var statearr_52886_52948 = state_52807__$1;
(statearr_52886_52948[(1)] = (10));

} else {
var statearr_52887_52949 = state_52807__$1;
(statearr_52887_52949[(1)] = (11));

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
});})(c__19254__auto___52895,cs,m,dchan,dctr,done))
;
return ((function (switch__19198__auto__,c__19254__auto___52895,cs,m,dchan,dctr,done){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_52891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52891[(0)] = state_machine__19199__auto__);

(statearr_52891[(1)] = (1));

return statearr_52891;
});
var state_machine__19199__auto____1 = (function (state_52807){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_52807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e52892){if((e52892 instanceof Object)){
var ex__19202__auto__ = e52892;
var statearr_52893_52950 = state_52807;
(statearr_52893_52950[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52951 = state_52807;
state_52807 = G__52951;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_52807){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_52807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___52895,cs,m,dchan,dctr,done))
})();
var state__19256__auto__ = (function (){var statearr_52894 = f__19255__auto__.call(null);
(statearr_52894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___52895);

return statearr_52894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___52895,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj52953 = {};
return obj52953;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__52954){
var map__52959 = p__52954;
var map__52959__$1 = ((cljs.core.seq_QMARK_.call(null,map__52959))?cljs.core.apply.call(null,cljs.core.hash_map,map__52959):map__52959);
var opts = map__52959__$1;
var statearr_52960_52963 = state;
(statearr_52960_52963[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__52959,map__52959__$1,opts){
return (function (val){
var statearr_52961_52964 = state;
(statearr_52961_52964[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__52959,map__52959__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_52962_52965 = state;
(statearr_52962_52965[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__52954 = null;
if (arguments.length > 3) {
var G__52966__i = 0, G__52966__a = new Array(arguments.length -  3);
while (G__52966__i < G__52966__a.length) {G__52966__a[G__52966__i] = arguments[G__52966__i + 3]; ++G__52966__i;}
  p__52954 = new cljs.core.IndexedSeq(G__52966__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__52954);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__52967){
var state = cljs.core.first(arglist__52967);
arglist__52967 = cljs.core.next(arglist__52967);
var cont_block = cljs.core.first(arglist__52967);
arglist__52967 = cljs.core.next(arglist__52967);
var ports = cljs.core.first(arglist__52967);
var p__52954 = cljs.core.rest(arglist__52967);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__52954);
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
if(typeof cljs.core.async.t53087 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t53087 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53088){
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
this.meta53088 = meta53088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53087.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t53087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t53087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t53087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t53087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t53087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t53087.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t53087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t53087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53089){
var self__ = this;
var _53089__$1 = this;
return self__.meta53088;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t53087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53089,meta53088__$1){
var self__ = this;
var _53089__$1 = this;
return (new cljs.core.async.t53087(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53088__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t53087.cljs$lang$type = true;

cljs.core.async.t53087.cljs$lang$ctorStr = "cljs.core.async/t53087";

cljs.core.async.t53087.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t53087");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t53087 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t53087(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53088){
return (new cljs.core.async.t53087(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53088));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t53087(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19254__auto___53206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___53206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___53206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53159){
var state_val_53160 = (state_53159[(1)]);
if((state_val_53160 === (7))){
var inst_53103 = (state_53159[(7)]);
var inst_53108 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53103);
var state_53159__$1 = state_53159;
var statearr_53161_53207 = state_53159__$1;
(statearr_53161_53207[(2)] = inst_53108);

(statearr_53161_53207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (20))){
var inst_53118 = (state_53159[(8)]);
var state_53159__$1 = state_53159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53159__$1,(23),out,inst_53118);
} else {
if((state_val_53160 === (1))){
var inst_53093 = (state_53159[(9)]);
var inst_53093__$1 = calc_state.call(null);
var inst_53094 = cljs.core.seq_QMARK_.call(null,inst_53093__$1);
var state_53159__$1 = (function (){var statearr_53162 = state_53159;
(statearr_53162[(9)] = inst_53093__$1);

return statearr_53162;
})();
if(inst_53094){
var statearr_53163_53208 = state_53159__$1;
(statearr_53163_53208[(1)] = (2));

} else {
var statearr_53164_53209 = state_53159__$1;
(statearr_53164_53209[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (24))){
var inst_53111 = (state_53159[(10)]);
var inst_53103 = inst_53111;
var state_53159__$1 = (function (){var statearr_53165 = state_53159;
(statearr_53165[(7)] = inst_53103);

return statearr_53165;
})();
var statearr_53166_53210 = state_53159__$1;
(statearr_53166_53210[(2)] = null);

(statearr_53166_53210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (4))){
var inst_53093 = (state_53159[(9)]);
var inst_53099 = (state_53159[(2)]);
var inst_53100 = cljs.core.get.call(null,inst_53099,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53101 = cljs.core.get.call(null,inst_53099,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53102 = cljs.core.get.call(null,inst_53099,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53103 = inst_53093;
var state_53159__$1 = (function (){var statearr_53167 = state_53159;
(statearr_53167[(7)] = inst_53103);

(statearr_53167[(11)] = inst_53101);

(statearr_53167[(12)] = inst_53102);

(statearr_53167[(13)] = inst_53100);

return statearr_53167;
})();
var statearr_53168_53211 = state_53159__$1;
(statearr_53168_53211[(2)] = null);

(statearr_53168_53211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (15))){
var state_53159__$1 = state_53159;
var statearr_53169_53212 = state_53159__$1;
(statearr_53169_53212[(2)] = null);

(statearr_53169_53212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (21))){
var inst_53111 = (state_53159[(10)]);
var inst_53103 = inst_53111;
var state_53159__$1 = (function (){var statearr_53170 = state_53159;
(statearr_53170[(7)] = inst_53103);

return statearr_53170;
})();
var statearr_53171_53213 = state_53159__$1;
(statearr_53171_53213[(2)] = null);

(statearr_53171_53213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (13))){
var inst_53155 = (state_53159[(2)]);
var state_53159__$1 = state_53159;
var statearr_53172_53214 = state_53159__$1;
(statearr_53172_53214[(2)] = inst_53155);

(statearr_53172_53214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (22))){
var inst_53153 = (state_53159[(2)]);
var state_53159__$1 = state_53159;
var statearr_53173_53215 = state_53159__$1;
(statearr_53173_53215[(2)] = inst_53153);

(statearr_53173_53215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (6))){
var inst_53157 = (state_53159[(2)]);
var state_53159__$1 = state_53159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53159__$1,inst_53157);
} else {
if((state_val_53160 === (25))){
var state_53159__$1 = state_53159;
var statearr_53174_53216 = state_53159__$1;
(statearr_53174_53216[(2)] = null);

(statearr_53174_53216[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (17))){
var inst_53133 = (state_53159[(14)]);
var state_53159__$1 = state_53159;
var statearr_53175_53217 = state_53159__$1;
(statearr_53175_53217[(2)] = inst_53133);

(statearr_53175_53217[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (3))){
var inst_53093 = (state_53159[(9)]);
var state_53159__$1 = state_53159;
var statearr_53176_53218 = state_53159__$1;
(statearr_53176_53218[(2)] = inst_53093);

(statearr_53176_53218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (12))){
var inst_53119 = (state_53159[(15)]);
var inst_53114 = (state_53159[(16)]);
var inst_53133 = (state_53159[(14)]);
var inst_53133__$1 = inst_53114.call(null,inst_53119);
var state_53159__$1 = (function (){var statearr_53177 = state_53159;
(statearr_53177[(14)] = inst_53133__$1);

return statearr_53177;
})();
if(cljs.core.truth_(inst_53133__$1)){
var statearr_53178_53219 = state_53159__$1;
(statearr_53178_53219[(1)] = (17));

} else {
var statearr_53179_53220 = state_53159__$1;
(statearr_53179_53220[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (2))){
var inst_53093 = (state_53159[(9)]);
var inst_53096 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53093);
var state_53159__$1 = state_53159;
var statearr_53180_53221 = state_53159__$1;
(statearr_53180_53221[(2)] = inst_53096);

(statearr_53180_53221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (23))){
var inst_53144 = (state_53159[(2)]);
var state_53159__$1 = state_53159;
if(cljs.core.truth_(inst_53144)){
var statearr_53181_53222 = state_53159__$1;
(statearr_53181_53222[(1)] = (24));

} else {
var statearr_53182_53223 = state_53159__$1;
(statearr_53182_53223[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (19))){
var inst_53141 = (state_53159[(2)]);
var state_53159__$1 = state_53159;
if(cljs.core.truth_(inst_53141)){
var statearr_53183_53224 = state_53159__$1;
(statearr_53183_53224[(1)] = (20));

} else {
var statearr_53184_53225 = state_53159__$1;
(statearr_53184_53225[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (11))){
var inst_53118 = (state_53159[(8)]);
var inst_53124 = (inst_53118 == null);
var state_53159__$1 = state_53159;
if(cljs.core.truth_(inst_53124)){
var statearr_53185_53226 = state_53159__$1;
(statearr_53185_53226[(1)] = (14));

} else {
var statearr_53186_53227 = state_53159__$1;
(statearr_53186_53227[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (9))){
var inst_53111 = (state_53159[(10)]);
var inst_53111__$1 = (state_53159[(2)]);
var inst_53112 = cljs.core.get.call(null,inst_53111__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53113 = cljs.core.get.call(null,inst_53111__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53114 = cljs.core.get.call(null,inst_53111__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_53159__$1 = (function (){var statearr_53187 = state_53159;
(statearr_53187[(17)] = inst_53113);

(statearr_53187[(10)] = inst_53111__$1);

(statearr_53187[(16)] = inst_53114);

return statearr_53187;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_53159__$1,(10),inst_53112);
} else {
if((state_val_53160 === (5))){
var inst_53103 = (state_53159[(7)]);
var inst_53106 = cljs.core.seq_QMARK_.call(null,inst_53103);
var state_53159__$1 = state_53159;
if(inst_53106){
var statearr_53188_53228 = state_53159__$1;
(statearr_53188_53228[(1)] = (7));

} else {
var statearr_53189_53229 = state_53159__$1;
(statearr_53189_53229[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (14))){
var inst_53119 = (state_53159[(15)]);
var inst_53126 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53119);
var state_53159__$1 = state_53159;
var statearr_53190_53230 = state_53159__$1;
(statearr_53190_53230[(2)] = inst_53126);

(statearr_53190_53230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (26))){
var inst_53149 = (state_53159[(2)]);
var state_53159__$1 = state_53159;
var statearr_53191_53231 = state_53159__$1;
(statearr_53191_53231[(2)] = inst_53149);

(statearr_53191_53231[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (16))){
var inst_53129 = (state_53159[(2)]);
var inst_53130 = calc_state.call(null);
var inst_53103 = inst_53130;
var state_53159__$1 = (function (){var statearr_53192 = state_53159;
(statearr_53192[(18)] = inst_53129);

(statearr_53192[(7)] = inst_53103);

return statearr_53192;
})();
var statearr_53193_53232 = state_53159__$1;
(statearr_53193_53232[(2)] = null);

(statearr_53193_53232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (10))){
var inst_53119 = (state_53159[(15)]);
var inst_53118 = (state_53159[(8)]);
var inst_53117 = (state_53159[(2)]);
var inst_53118__$1 = cljs.core.nth.call(null,inst_53117,(0),null);
var inst_53119__$1 = cljs.core.nth.call(null,inst_53117,(1),null);
var inst_53120 = (inst_53118__$1 == null);
var inst_53121 = cljs.core._EQ_.call(null,inst_53119__$1,change);
var inst_53122 = (inst_53120) || (inst_53121);
var state_53159__$1 = (function (){var statearr_53194 = state_53159;
(statearr_53194[(15)] = inst_53119__$1);

(statearr_53194[(8)] = inst_53118__$1);

return statearr_53194;
})();
if(cljs.core.truth_(inst_53122)){
var statearr_53195_53233 = state_53159__$1;
(statearr_53195_53233[(1)] = (11));

} else {
var statearr_53196_53234 = state_53159__$1;
(statearr_53196_53234[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (18))){
var inst_53119 = (state_53159[(15)]);
var inst_53113 = (state_53159[(17)]);
var inst_53114 = (state_53159[(16)]);
var inst_53136 = cljs.core.empty_QMARK_.call(null,inst_53114);
var inst_53137 = inst_53113.call(null,inst_53119);
var inst_53138 = cljs.core.not.call(null,inst_53137);
var inst_53139 = (inst_53136) && (inst_53138);
var state_53159__$1 = state_53159;
var statearr_53197_53235 = state_53159__$1;
(statearr_53197_53235[(2)] = inst_53139);

(statearr_53197_53235[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53160 === (8))){
var inst_53103 = (state_53159[(7)]);
var state_53159__$1 = state_53159;
var statearr_53198_53236 = state_53159__$1;
(statearr_53198_53236[(2)] = inst_53103);

(statearr_53198_53236[(1)] = (9));


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
});})(c__19254__auto___53206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19198__auto__,c__19254__auto___53206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_53202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53202[(0)] = state_machine__19199__auto__);

(statearr_53202[(1)] = (1));

return statearr_53202;
});
var state_machine__19199__auto____1 = (function (state_53159){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_53159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e53203){if((e53203 instanceof Object)){
var ex__19202__auto__ = e53203;
var statearr_53204_53237 = state_53159;
(statearr_53204_53237[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53238 = state_53159;
state_53159 = G__53238;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_53159){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_53159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___53206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19256__auto__ = (function (){var statearr_53205 = f__19255__auto__.call(null);
(statearr_53205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___53206);

return statearr_53205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___53206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj53240 = {};
return obj53240;
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
return (function (p1__53241_SHARP_){
if(cljs.core.truth_(p1__53241_SHARP_.call(null,topic))){
return p1__53241_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__53241_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t53364 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t53364 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta53365){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta53365 = meta53365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53364.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t53364.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t53364.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t53364.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t53364.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t53364.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t53364.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t53364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53366){
var self__ = this;
var _53366__$1 = this;
return self__.meta53365;
});})(mults,ensure_mult))
;

cljs.core.async.t53364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53366,meta53365__$1){
var self__ = this;
var _53366__$1 = this;
return (new cljs.core.async.t53364(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta53365__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t53364.cljs$lang$type = true;

cljs.core.async.t53364.cljs$lang$ctorStr = "cljs.core.async/t53364";

cljs.core.async.t53364.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t53364");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t53364 = ((function (mults,ensure_mult){
return (function __GT_t53364(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta53365){
return (new cljs.core.async.t53364(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta53365));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t53364(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19254__auto___53486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___53486,mults,ensure_mult,p){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___53486,mults,ensure_mult,p){
return (function (state_53438){
var state_val_53439 = (state_53438[(1)]);
if((state_val_53439 === (7))){
var inst_53434 = (state_53438[(2)]);
var state_53438__$1 = state_53438;
var statearr_53440_53487 = state_53438__$1;
(statearr_53440_53487[(2)] = inst_53434);

(statearr_53440_53487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (20))){
var state_53438__$1 = state_53438;
var statearr_53441_53488 = state_53438__$1;
(statearr_53441_53488[(2)] = null);

(statearr_53441_53488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (1))){
var state_53438__$1 = state_53438;
var statearr_53442_53489 = state_53438__$1;
(statearr_53442_53489[(2)] = null);

(statearr_53442_53489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (24))){
var inst_53417 = (state_53438[(7)]);
var inst_53426 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_53417);
var state_53438__$1 = state_53438;
var statearr_53443_53490 = state_53438__$1;
(statearr_53443_53490[(2)] = inst_53426);

(statearr_53443_53490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (4))){
var inst_53369 = (state_53438[(8)]);
var inst_53369__$1 = (state_53438[(2)]);
var inst_53370 = (inst_53369__$1 == null);
var state_53438__$1 = (function (){var statearr_53444 = state_53438;
(statearr_53444[(8)] = inst_53369__$1);

return statearr_53444;
})();
if(cljs.core.truth_(inst_53370)){
var statearr_53445_53491 = state_53438__$1;
(statearr_53445_53491[(1)] = (5));

} else {
var statearr_53446_53492 = state_53438__$1;
(statearr_53446_53492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (15))){
var inst_53411 = (state_53438[(2)]);
var state_53438__$1 = state_53438;
var statearr_53447_53493 = state_53438__$1;
(statearr_53447_53493[(2)] = inst_53411);

(statearr_53447_53493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (21))){
var inst_53431 = (state_53438[(2)]);
var state_53438__$1 = (function (){var statearr_53448 = state_53438;
(statearr_53448[(9)] = inst_53431);

return statearr_53448;
})();
var statearr_53449_53494 = state_53438__$1;
(statearr_53449_53494[(2)] = null);

(statearr_53449_53494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (13))){
var inst_53393 = (state_53438[(10)]);
var inst_53395 = cljs.core.chunked_seq_QMARK_.call(null,inst_53393);
var state_53438__$1 = state_53438;
if(inst_53395){
var statearr_53450_53495 = state_53438__$1;
(statearr_53450_53495[(1)] = (16));

} else {
var statearr_53451_53496 = state_53438__$1;
(statearr_53451_53496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (22))){
var inst_53423 = (state_53438[(2)]);
var state_53438__$1 = state_53438;
if(cljs.core.truth_(inst_53423)){
var statearr_53452_53497 = state_53438__$1;
(statearr_53452_53497[(1)] = (23));

} else {
var statearr_53453_53498 = state_53438__$1;
(statearr_53453_53498[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (6))){
var inst_53369 = (state_53438[(8)]);
var inst_53417 = (state_53438[(7)]);
var inst_53419 = (state_53438[(11)]);
var inst_53417__$1 = topic_fn.call(null,inst_53369);
var inst_53418 = cljs.core.deref.call(null,mults);
var inst_53419__$1 = cljs.core.get.call(null,inst_53418,inst_53417__$1);
var state_53438__$1 = (function (){var statearr_53454 = state_53438;
(statearr_53454[(7)] = inst_53417__$1);

(statearr_53454[(11)] = inst_53419__$1);

return statearr_53454;
})();
if(cljs.core.truth_(inst_53419__$1)){
var statearr_53455_53499 = state_53438__$1;
(statearr_53455_53499[(1)] = (19));

} else {
var statearr_53456_53500 = state_53438__$1;
(statearr_53456_53500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (25))){
var inst_53428 = (state_53438[(2)]);
var state_53438__$1 = state_53438;
var statearr_53457_53501 = state_53438__$1;
(statearr_53457_53501[(2)] = inst_53428);

(statearr_53457_53501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (17))){
var inst_53393 = (state_53438[(10)]);
var inst_53402 = cljs.core.first.call(null,inst_53393);
var inst_53403 = cljs.core.async.muxch_STAR_.call(null,inst_53402);
var inst_53404 = cljs.core.async.close_BANG_.call(null,inst_53403);
var inst_53405 = cljs.core.next.call(null,inst_53393);
var inst_53379 = inst_53405;
var inst_53380 = null;
var inst_53381 = (0);
var inst_53382 = (0);
var state_53438__$1 = (function (){var statearr_53458 = state_53438;
(statearr_53458[(12)] = inst_53404);

(statearr_53458[(13)] = inst_53380);

(statearr_53458[(14)] = inst_53379);

(statearr_53458[(15)] = inst_53382);

(statearr_53458[(16)] = inst_53381);

return statearr_53458;
})();
var statearr_53459_53502 = state_53438__$1;
(statearr_53459_53502[(2)] = null);

(statearr_53459_53502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (3))){
var inst_53436 = (state_53438[(2)]);
var state_53438__$1 = state_53438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53438__$1,inst_53436);
} else {
if((state_val_53439 === (12))){
var inst_53413 = (state_53438[(2)]);
var state_53438__$1 = state_53438;
var statearr_53460_53503 = state_53438__$1;
(statearr_53460_53503[(2)] = inst_53413);

(statearr_53460_53503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (2))){
var state_53438__$1 = state_53438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53438__$1,(4),ch);
} else {
if((state_val_53439 === (23))){
var state_53438__$1 = state_53438;
var statearr_53461_53504 = state_53438__$1;
(statearr_53461_53504[(2)] = null);

(statearr_53461_53504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (19))){
var inst_53369 = (state_53438[(8)]);
var inst_53419 = (state_53438[(11)]);
var inst_53421 = cljs.core.async.muxch_STAR_.call(null,inst_53419);
var state_53438__$1 = state_53438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53438__$1,(22),inst_53421,inst_53369);
} else {
if((state_val_53439 === (11))){
var inst_53393 = (state_53438[(10)]);
var inst_53379 = (state_53438[(14)]);
var inst_53393__$1 = cljs.core.seq.call(null,inst_53379);
var state_53438__$1 = (function (){var statearr_53462 = state_53438;
(statearr_53462[(10)] = inst_53393__$1);

return statearr_53462;
})();
if(inst_53393__$1){
var statearr_53463_53505 = state_53438__$1;
(statearr_53463_53505[(1)] = (13));

} else {
var statearr_53464_53506 = state_53438__$1;
(statearr_53464_53506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (9))){
var inst_53415 = (state_53438[(2)]);
var state_53438__$1 = state_53438;
var statearr_53465_53507 = state_53438__$1;
(statearr_53465_53507[(2)] = inst_53415);

(statearr_53465_53507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (5))){
var inst_53376 = cljs.core.deref.call(null,mults);
var inst_53377 = cljs.core.vals.call(null,inst_53376);
var inst_53378 = cljs.core.seq.call(null,inst_53377);
var inst_53379 = inst_53378;
var inst_53380 = null;
var inst_53381 = (0);
var inst_53382 = (0);
var state_53438__$1 = (function (){var statearr_53466 = state_53438;
(statearr_53466[(13)] = inst_53380);

(statearr_53466[(14)] = inst_53379);

(statearr_53466[(15)] = inst_53382);

(statearr_53466[(16)] = inst_53381);

return statearr_53466;
})();
var statearr_53467_53508 = state_53438__$1;
(statearr_53467_53508[(2)] = null);

(statearr_53467_53508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (14))){
var state_53438__$1 = state_53438;
var statearr_53471_53509 = state_53438__$1;
(statearr_53471_53509[(2)] = null);

(statearr_53471_53509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (16))){
var inst_53393 = (state_53438[(10)]);
var inst_53397 = cljs.core.chunk_first.call(null,inst_53393);
var inst_53398 = cljs.core.chunk_rest.call(null,inst_53393);
var inst_53399 = cljs.core.count.call(null,inst_53397);
var inst_53379 = inst_53398;
var inst_53380 = inst_53397;
var inst_53381 = inst_53399;
var inst_53382 = (0);
var state_53438__$1 = (function (){var statearr_53472 = state_53438;
(statearr_53472[(13)] = inst_53380);

(statearr_53472[(14)] = inst_53379);

(statearr_53472[(15)] = inst_53382);

(statearr_53472[(16)] = inst_53381);

return statearr_53472;
})();
var statearr_53473_53510 = state_53438__$1;
(statearr_53473_53510[(2)] = null);

(statearr_53473_53510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (10))){
var inst_53380 = (state_53438[(13)]);
var inst_53379 = (state_53438[(14)]);
var inst_53382 = (state_53438[(15)]);
var inst_53381 = (state_53438[(16)]);
var inst_53387 = cljs.core._nth.call(null,inst_53380,inst_53382);
var inst_53388 = cljs.core.async.muxch_STAR_.call(null,inst_53387);
var inst_53389 = cljs.core.async.close_BANG_.call(null,inst_53388);
var inst_53390 = (inst_53382 + (1));
var tmp53468 = inst_53380;
var tmp53469 = inst_53379;
var tmp53470 = inst_53381;
var inst_53379__$1 = tmp53469;
var inst_53380__$1 = tmp53468;
var inst_53381__$1 = tmp53470;
var inst_53382__$1 = inst_53390;
var state_53438__$1 = (function (){var statearr_53474 = state_53438;
(statearr_53474[(13)] = inst_53380__$1);

(statearr_53474[(17)] = inst_53389);

(statearr_53474[(14)] = inst_53379__$1);

(statearr_53474[(15)] = inst_53382__$1);

(statearr_53474[(16)] = inst_53381__$1);

return statearr_53474;
})();
var statearr_53475_53511 = state_53438__$1;
(statearr_53475_53511[(2)] = null);

(statearr_53475_53511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (18))){
var inst_53408 = (state_53438[(2)]);
var state_53438__$1 = state_53438;
var statearr_53476_53512 = state_53438__$1;
(statearr_53476_53512[(2)] = inst_53408);

(statearr_53476_53512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53439 === (8))){
var inst_53382 = (state_53438[(15)]);
var inst_53381 = (state_53438[(16)]);
var inst_53384 = (inst_53382 < inst_53381);
var inst_53385 = inst_53384;
var state_53438__$1 = state_53438;
if(cljs.core.truth_(inst_53385)){
var statearr_53477_53513 = state_53438__$1;
(statearr_53477_53513[(1)] = (10));

} else {
var statearr_53478_53514 = state_53438__$1;
(statearr_53478_53514[(1)] = (11));

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
});})(c__19254__auto___53486,mults,ensure_mult,p))
;
return ((function (switch__19198__auto__,c__19254__auto___53486,mults,ensure_mult,p){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_53482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53482[(0)] = state_machine__19199__auto__);

(statearr_53482[(1)] = (1));

return statearr_53482;
});
var state_machine__19199__auto____1 = (function (state_53438){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_53438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e53483){if((e53483 instanceof Object)){
var ex__19202__auto__ = e53483;
var statearr_53484_53515 = state_53438;
(statearr_53484_53515[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53516 = state_53438;
state_53438 = G__53516;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_53438){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_53438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___53486,mults,ensure_mult,p))
})();
var state__19256__auto__ = (function (){var statearr_53485 = f__19255__auto__.call(null);
(statearr_53485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___53486);

return statearr_53485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___53486,mults,ensure_mult,p))
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
var c__19254__auto___53653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___53653,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___53653,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53623){
var state_val_53624 = (state_53623[(1)]);
if((state_val_53624 === (7))){
var state_53623__$1 = state_53623;
var statearr_53625_53654 = state_53623__$1;
(statearr_53625_53654[(2)] = null);

(statearr_53625_53654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (1))){
var state_53623__$1 = state_53623;
var statearr_53626_53655 = state_53623__$1;
(statearr_53626_53655[(2)] = null);

(statearr_53626_53655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (4))){
var inst_53587 = (state_53623[(7)]);
var inst_53589 = (inst_53587 < cnt);
var state_53623__$1 = state_53623;
if(cljs.core.truth_(inst_53589)){
var statearr_53627_53656 = state_53623__$1;
(statearr_53627_53656[(1)] = (6));

} else {
var statearr_53628_53657 = state_53623__$1;
(statearr_53628_53657[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (15))){
var inst_53619 = (state_53623[(2)]);
var state_53623__$1 = state_53623;
var statearr_53629_53658 = state_53623__$1;
(statearr_53629_53658[(2)] = inst_53619);

(statearr_53629_53658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (13))){
var inst_53612 = cljs.core.async.close_BANG_.call(null,out);
var state_53623__$1 = state_53623;
var statearr_53630_53659 = state_53623__$1;
(statearr_53630_53659[(2)] = inst_53612);

(statearr_53630_53659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (6))){
var state_53623__$1 = state_53623;
var statearr_53631_53660 = state_53623__$1;
(statearr_53631_53660[(2)] = null);

(statearr_53631_53660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (3))){
var inst_53621 = (state_53623[(2)]);
var state_53623__$1 = state_53623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53623__$1,inst_53621);
} else {
if((state_val_53624 === (12))){
var inst_53609 = (state_53623[(8)]);
var inst_53609__$1 = (state_53623[(2)]);
var inst_53610 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_53609__$1);
var state_53623__$1 = (function (){var statearr_53632 = state_53623;
(statearr_53632[(8)] = inst_53609__$1);

return statearr_53632;
})();
if(cljs.core.truth_(inst_53610)){
var statearr_53633_53661 = state_53623__$1;
(statearr_53633_53661[(1)] = (13));

} else {
var statearr_53634_53662 = state_53623__$1;
(statearr_53634_53662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (2))){
var inst_53586 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_53587 = (0);
var state_53623__$1 = (function (){var statearr_53635 = state_53623;
(statearr_53635[(7)] = inst_53587);

(statearr_53635[(9)] = inst_53586);

return statearr_53635;
})();
var statearr_53636_53663 = state_53623__$1;
(statearr_53636_53663[(2)] = null);

(statearr_53636_53663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (11))){
var inst_53587 = (state_53623[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53623,(10),Object,null,(9));
var inst_53596 = chs__$1.call(null,inst_53587);
var inst_53597 = done.call(null,inst_53587);
var inst_53598 = cljs.core.async.take_BANG_.call(null,inst_53596,inst_53597);
var state_53623__$1 = state_53623;
var statearr_53637_53664 = state_53623__$1;
(statearr_53637_53664[(2)] = inst_53598);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53623__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (9))){
var inst_53587 = (state_53623[(7)]);
var inst_53600 = (state_53623[(2)]);
var inst_53601 = (inst_53587 + (1));
var inst_53587__$1 = inst_53601;
var state_53623__$1 = (function (){var statearr_53638 = state_53623;
(statearr_53638[(7)] = inst_53587__$1);

(statearr_53638[(10)] = inst_53600);

return statearr_53638;
})();
var statearr_53639_53665 = state_53623__$1;
(statearr_53639_53665[(2)] = null);

(statearr_53639_53665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (5))){
var inst_53607 = (state_53623[(2)]);
var state_53623__$1 = (function (){var statearr_53640 = state_53623;
(statearr_53640[(11)] = inst_53607);

return statearr_53640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53623__$1,(12),dchan);
} else {
if((state_val_53624 === (14))){
var inst_53609 = (state_53623[(8)]);
var inst_53614 = cljs.core.apply.call(null,f,inst_53609);
var state_53623__$1 = state_53623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53623__$1,(16),out,inst_53614);
} else {
if((state_val_53624 === (16))){
var inst_53616 = (state_53623[(2)]);
var state_53623__$1 = (function (){var statearr_53641 = state_53623;
(statearr_53641[(12)] = inst_53616);

return statearr_53641;
})();
var statearr_53642_53666 = state_53623__$1;
(statearr_53642_53666[(2)] = null);

(statearr_53642_53666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (10))){
var inst_53591 = (state_53623[(2)]);
var inst_53592 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_53623__$1 = (function (){var statearr_53643 = state_53623;
(statearr_53643[(13)] = inst_53591);

return statearr_53643;
})();
var statearr_53644_53667 = state_53623__$1;
(statearr_53644_53667[(2)] = inst_53592);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53623__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53624 === (8))){
var inst_53605 = (state_53623[(2)]);
var state_53623__$1 = state_53623;
var statearr_53645_53668 = state_53623__$1;
(statearr_53645_53668[(2)] = inst_53605);

(statearr_53645_53668[(1)] = (5));


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
});})(c__19254__auto___53653,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19198__auto__,c__19254__auto___53653,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_53649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53649[(0)] = state_machine__19199__auto__);

(statearr_53649[(1)] = (1));

return statearr_53649;
});
var state_machine__19199__auto____1 = (function (state_53623){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_53623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e53650){if((e53650 instanceof Object)){
var ex__19202__auto__ = e53650;
var statearr_53651_53669 = state_53623;
(statearr_53651_53669[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53670 = state_53623;
state_53623 = G__53670;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_53623){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_53623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___53653,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19256__auto__ = (function (){var statearr_53652 = f__19255__auto__.call(null);
(statearr_53652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___53653);

return statearr_53652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___53653,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__19254__auto___53778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___53778,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___53778,out){
return (function (state_53754){
var state_val_53755 = (state_53754[(1)]);
if((state_val_53755 === (7))){
var inst_53733 = (state_53754[(7)]);
var inst_53734 = (state_53754[(8)]);
var inst_53733__$1 = (state_53754[(2)]);
var inst_53734__$1 = cljs.core.nth.call(null,inst_53733__$1,(0),null);
var inst_53735 = cljs.core.nth.call(null,inst_53733__$1,(1),null);
var inst_53736 = (inst_53734__$1 == null);
var state_53754__$1 = (function (){var statearr_53756 = state_53754;
(statearr_53756[(9)] = inst_53735);

(statearr_53756[(7)] = inst_53733__$1);

(statearr_53756[(8)] = inst_53734__$1);

return statearr_53756;
})();
if(cljs.core.truth_(inst_53736)){
var statearr_53757_53779 = state_53754__$1;
(statearr_53757_53779[(1)] = (8));

} else {
var statearr_53758_53780 = state_53754__$1;
(statearr_53758_53780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53755 === (1))){
var inst_53725 = cljs.core.vec.call(null,chs);
var inst_53726 = inst_53725;
var state_53754__$1 = (function (){var statearr_53759 = state_53754;
(statearr_53759[(10)] = inst_53726);

return statearr_53759;
})();
var statearr_53760_53781 = state_53754__$1;
(statearr_53760_53781[(2)] = null);

(statearr_53760_53781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53755 === (4))){
var inst_53726 = (state_53754[(10)]);
var state_53754__$1 = state_53754;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53754__$1,(7),inst_53726);
} else {
if((state_val_53755 === (6))){
var inst_53750 = (state_53754[(2)]);
var state_53754__$1 = state_53754;
var statearr_53761_53782 = state_53754__$1;
(statearr_53761_53782[(2)] = inst_53750);

(statearr_53761_53782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53755 === (3))){
var inst_53752 = (state_53754[(2)]);
var state_53754__$1 = state_53754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53754__$1,inst_53752);
} else {
if((state_val_53755 === (2))){
var inst_53726 = (state_53754[(10)]);
var inst_53728 = cljs.core.count.call(null,inst_53726);
var inst_53729 = (inst_53728 > (0));
var state_53754__$1 = state_53754;
if(cljs.core.truth_(inst_53729)){
var statearr_53763_53783 = state_53754__$1;
(statearr_53763_53783[(1)] = (4));

} else {
var statearr_53764_53784 = state_53754__$1;
(statearr_53764_53784[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53755 === (11))){
var inst_53726 = (state_53754[(10)]);
var inst_53743 = (state_53754[(2)]);
var tmp53762 = inst_53726;
var inst_53726__$1 = tmp53762;
var state_53754__$1 = (function (){var statearr_53765 = state_53754;
(statearr_53765[(10)] = inst_53726__$1);

(statearr_53765[(11)] = inst_53743);

return statearr_53765;
})();
var statearr_53766_53785 = state_53754__$1;
(statearr_53766_53785[(2)] = null);

(statearr_53766_53785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53755 === (9))){
var inst_53734 = (state_53754[(8)]);
var state_53754__$1 = state_53754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53754__$1,(11),out,inst_53734);
} else {
if((state_val_53755 === (5))){
var inst_53748 = cljs.core.async.close_BANG_.call(null,out);
var state_53754__$1 = state_53754;
var statearr_53767_53786 = state_53754__$1;
(statearr_53767_53786[(2)] = inst_53748);

(statearr_53767_53786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53755 === (10))){
var inst_53746 = (state_53754[(2)]);
var state_53754__$1 = state_53754;
var statearr_53768_53787 = state_53754__$1;
(statearr_53768_53787[(2)] = inst_53746);

(statearr_53768_53787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53755 === (8))){
var inst_53726 = (state_53754[(10)]);
var inst_53735 = (state_53754[(9)]);
var inst_53733 = (state_53754[(7)]);
var inst_53734 = (state_53754[(8)]);
var inst_53738 = (function (){var c = inst_53735;
var v = inst_53734;
var vec__53731 = inst_53733;
var cs = inst_53726;
return ((function (c,v,vec__53731,cs,inst_53726,inst_53735,inst_53733,inst_53734,state_val_53755,c__19254__auto___53778,out){
return (function (p1__53671_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__53671_SHARP_);
});
;})(c,v,vec__53731,cs,inst_53726,inst_53735,inst_53733,inst_53734,state_val_53755,c__19254__auto___53778,out))
})();
var inst_53739 = cljs.core.filterv.call(null,inst_53738,inst_53726);
var inst_53726__$1 = inst_53739;
var state_53754__$1 = (function (){var statearr_53769 = state_53754;
(statearr_53769[(10)] = inst_53726__$1);

return statearr_53769;
})();
var statearr_53770_53788 = state_53754__$1;
(statearr_53770_53788[(2)] = null);

(statearr_53770_53788[(1)] = (2));


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
});})(c__19254__auto___53778,out))
;
return ((function (switch__19198__auto__,c__19254__auto___53778,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_53774 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53774[(0)] = state_machine__19199__auto__);

(statearr_53774[(1)] = (1));

return statearr_53774;
});
var state_machine__19199__auto____1 = (function (state_53754){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_53754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e53775){if((e53775 instanceof Object)){
var ex__19202__auto__ = e53775;
var statearr_53776_53789 = state_53754;
(statearr_53776_53789[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53790 = state_53754;
state_53754 = G__53790;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_53754){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_53754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___53778,out))
})();
var state__19256__auto__ = (function (){var statearr_53777 = f__19255__auto__.call(null);
(statearr_53777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___53778);

return statearr_53777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___53778,out))
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
var c__19254__auto___53883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___53883,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___53883,out){
return (function (state_53860){
var state_val_53861 = (state_53860[(1)]);
if((state_val_53861 === (7))){
var inst_53842 = (state_53860[(7)]);
var inst_53842__$1 = (state_53860[(2)]);
var inst_53843 = (inst_53842__$1 == null);
var inst_53844 = cljs.core.not.call(null,inst_53843);
var state_53860__$1 = (function (){var statearr_53862 = state_53860;
(statearr_53862[(7)] = inst_53842__$1);

return statearr_53862;
})();
if(inst_53844){
var statearr_53863_53884 = state_53860__$1;
(statearr_53863_53884[(1)] = (8));

} else {
var statearr_53864_53885 = state_53860__$1;
(statearr_53864_53885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53861 === (1))){
var inst_53837 = (0);
var state_53860__$1 = (function (){var statearr_53865 = state_53860;
(statearr_53865[(8)] = inst_53837);

return statearr_53865;
})();
var statearr_53866_53886 = state_53860__$1;
(statearr_53866_53886[(2)] = null);

(statearr_53866_53886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53861 === (4))){
var state_53860__$1 = state_53860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53860__$1,(7),ch);
} else {
if((state_val_53861 === (6))){
var inst_53855 = (state_53860[(2)]);
var state_53860__$1 = state_53860;
var statearr_53867_53887 = state_53860__$1;
(statearr_53867_53887[(2)] = inst_53855);

(statearr_53867_53887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53861 === (3))){
var inst_53857 = (state_53860[(2)]);
var inst_53858 = cljs.core.async.close_BANG_.call(null,out);
var state_53860__$1 = (function (){var statearr_53868 = state_53860;
(statearr_53868[(9)] = inst_53857);

return statearr_53868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53860__$1,inst_53858);
} else {
if((state_val_53861 === (2))){
var inst_53837 = (state_53860[(8)]);
var inst_53839 = (inst_53837 < n);
var state_53860__$1 = state_53860;
if(cljs.core.truth_(inst_53839)){
var statearr_53869_53888 = state_53860__$1;
(statearr_53869_53888[(1)] = (4));

} else {
var statearr_53870_53889 = state_53860__$1;
(statearr_53870_53889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53861 === (11))){
var inst_53837 = (state_53860[(8)]);
var inst_53847 = (state_53860[(2)]);
var inst_53848 = (inst_53837 + (1));
var inst_53837__$1 = inst_53848;
var state_53860__$1 = (function (){var statearr_53871 = state_53860;
(statearr_53871[(8)] = inst_53837__$1);

(statearr_53871[(10)] = inst_53847);

return statearr_53871;
})();
var statearr_53872_53890 = state_53860__$1;
(statearr_53872_53890[(2)] = null);

(statearr_53872_53890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53861 === (9))){
var state_53860__$1 = state_53860;
var statearr_53873_53891 = state_53860__$1;
(statearr_53873_53891[(2)] = null);

(statearr_53873_53891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53861 === (5))){
var state_53860__$1 = state_53860;
var statearr_53874_53892 = state_53860__$1;
(statearr_53874_53892[(2)] = null);

(statearr_53874_53892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53861 === (10))){
var inst_53852 = (state_53860[(2)]);
var state_53860__$1 = state_53860;
var statearr_53875_53893 = state_53860__$1;
(statearr_53875_53893[(2)] = inst_53852);

(statearr_53875_53893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53861 === (8))){
var inst_53842 = (state_53860[(7)]);
var state_53860__$1 = state_53860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53860__$1,(11),out,inst_53842);
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
});})(c__19254__auto___53883,out))
;
return ((function (switch__19198__auto__,c__19254__auto___53883,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_53879 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53879[(0)] = state_machine__19199__auto__);

(statearr_53879[(1)] = (1));

return statearr_53879;
});
var state_machine__19199__auto____1 = (function (state_53860){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_53860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e53880){if((e53880 instanceof Object)){
var ex__19202__auto__ = e53880;
var statearr_53881_53894 = state_53860;
(statearr_53881_53894[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53895 = state_53860;
state_53860 = G__53895;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_53860){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_53860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___53883,out))
})();
var state__19256__auto__ = (function (){var statearr_53882 = f__19255__auto__.call(null);
(statearr_53882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___53883);

return statearr_53882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___53883,out))
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
if(typeof cljs.core.async.t53903 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t53903 = (function (ch,f,map_LT_,meta53904){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta53904 = meta53904;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53903.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t53903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t53903.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t53903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t53906 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t53906 = (function (fn1,_,meta53904,map_LT_,f,ch,meta53907){
this.fn1 = fn1;
this._ = _;
this.meta53904 = meta53904;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta53907 = meta53907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53906.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t53906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t53906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53896_SHARP_){
return f1.call(null,(((p1__53896_SHARP_ == null))?null:self__.f.call(null,p1__53896_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t53906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53908){
var self__ = this;
var _53908__$1 = this;
return self__.meta53907;
});})(___$1))
;

cljs.core.async.t53906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53908,meta53907__$1){
var self__ = this;
var _53908__$1 = this;
return (new cljs.core.async.t53906(self__.fn1,self__._,self__.meta53904,self__.map_LT_,self__.f,self__.ch,meta53907__$1));
});})(___$1))
;

cljs.core.async.t53906.cljs$lang$type = true;

cljs.core.async.t53906.cljs$lang$ctorStr = "cljs.core.async/t53906";

cljs.core.async.t53906.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t53906");
});})(___$1))
;

cljs.core.async.__GT_t53906 = ((function (___$1){
return (function __GT_t53906(fn1__$1,___$2,meta53904__$1,map_LT___$1,f__$1,ch__$1,meta53907){
return (new cljs.core.async.t53906(fn1__$1,___$2,meta53904__$1,map_LT___$1,f__$1,ch__$1,meta53907));
});})(___$1))
;

}

return (new cljs.core.async.t53906(fn1,___$1,self__.meta53904,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t53903.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t53903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t53903.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t53903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53905){
var self__ = this;
var _53905__$1 = this;
return self__.meta53904;
});

cljs.core.async.t53903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53905,meta53904__$1){
var self__ = this;
var _53905__$1 = this;
return (new cljs.core.async.t53903(self__.ch,self__.f,self__.map_LT_,meta53904__$1));
});

cljs.core.async.t53903.cljs$lang$type = true;

cljs.core.async.t53903.cljs$lang$ctorStr = "cljs.core.async/t53903";

cljs.core.async.t53903.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t53903");
});

cljs.core.async.__GT_t53903 = (function __GT_t53903(ch__$1,f__$1,map_LT___$1,meta53904){
return (new cljs.core.async.t53903(ch__$1,f__$1,map_LT___$1,meta53904));
});

}

return (new cljs.core.async.t53903(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t53912 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t53912 = (function (ch,f,map_GT_,meta53913){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta53913 = meta53913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53912.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t53912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t53912.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t53912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t53912.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t53912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t53912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53914){
var self__ = this;
var _53914__$1 = this;
return self__.meta53913;
});

cljs.core.async.t53912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53914,meta53913__$1){
var self__ = this;
var _53914__$1 = this;
return (new cljs.core.async.t53912(self__.ch,self__.f,self__.map_GT_,meta53913__$1));
});

cljs.core.async.t53912.cljs$lang$type = true;

cljs.core.async.t53912.cljs$lang$ctorStr = "cljs.core.async/t53912";

cljs.core.async.t53912.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t53912");
});

cljs.core.async.__GT_t53912 = (function __GT_t53912(ch__$1,f__$1,map_GT___$1,meta53913){
return (new cljs.core.async.t53912(ch__$1,f__$1,map_GT___$1,meta53913));
});

}

return (new cljs.core.async.t53912(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t53918 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t53918 = (function (ch,p,filter_GT_,meta53919){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta53919 = meta53919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53918.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t53918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t53918.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t53918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t53918.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t53918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t53918.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t53918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53920){
var self__ = this;
var _53920__$1 = this;
return self__.meta53919;
});

cljs.core.async.t53918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53920,meta53919__$1){
var self__ = this;
var _53920__$1 = this;
return (new cljs.core.async.t53918(self__.ch,self__.p,self__.filter_GT_,meta53919__$1));
});

cljs.core.async.t53918.cljs$lang$type = true;

cljs.core.async.t53918.cljs$lang$ctorStr = "cljs.core.async/t53918";

cljs.core.async.t53918.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t53918");
});

cljs.core.async.__GT_t53918 = (function __GT_t53918(ch__$1,p__$1,filter_GT___$1,meta53919){
return (new cljs.core.async.t53918(ch__$1,p__$1,filter_GT___$1,meta53919));
});

}

return (new cljs.core.async.t53918(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19254__auto___54003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___54003,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___54003,out){
return (function (state_53982){
var state_val_53983 = (state_53982[(1)]);
if((state_val_53983 === (7))){
var inst_53978 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
var statearr_53984_54004 = state_53982__$1;
(statearr_53984_54004[(2)] = inst_53978);

(statearr_53984_54004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (1))){
var state_53982__$1 = state_53982;
var statearr_53985_54005 = state_53982__$1;
(statearr_53985_54005[(2)] = null);

(statearr_53985_54005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (4))){
var inst_53964 = (state_53982[(7)]);
var inst_53964__$1 = (state_53982[(2)]);
var inst_53965 = (inst_53964__$1 == null);
var state_53982__$1 = (function (){var statearr_53986 = state_53982;
(statearr_53986[(7)] = inst_53964__$1);

return statearr_53986;
})();
if(cljs.core.truth_(inst_53965)){
var statearr_53987_54006 = state_53982__$1;
(statearr_53987_54006[(1)] = (5));

} else {
var statearr_53988_54007 = state_53982__$1;
(statearr_53988_54007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (6))){
var inst_53964 = (state_53982[(7)]);
var inst_53969 = p.call(null,inst_53964);
var state_53982__$1 = state_53982;
if(cljs.core.truth_(inst_53969)){
var statearr_53989_54008 = state_53982__$1;
(statearr_53989_54008[(1)] = (8));

} else {
var statearr_53990_54009 = state_53982__$1;
(statearr_53990_54009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (3))){
var inst_53980 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53982__$1,inst_53980);
} else {
if((state_val_53983 === (2))){
var state_53982__$1 = state_53982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53982__$1,(4),ch);
} else {
if((state_val_53983 === (11))){
var inst_53972 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
var statearr_53991_54010 = state_53982__$1;
(statearr_53991_54010[(2)] = inst_53972);

(statearr_53991_54010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (9))){
var state_53982__$1 = state_53982;
var statearr_53992_54011 = state_53982__$1;
(statearr_53992_54011[(2)] = null);

(statearr_53992_54011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (5))){
var inst_53967 = cljs.core.async.close_BANG_.call(null,out);
var state_53982__$1 = state_53982;
var statearr_53993_54012 = state_53982__$1;
(statearr_53993_54012[(2)] = inst_53967);

(statearr_53993_54012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (10))){
var inst_53975 = (state_53982[(2)]);
var state_53982__$1 = (function (){var statearr_53994 = state_53982;
(statearr_53994[(8)] = inst_53975);

return statearr_53994;
})();
var statearr_53995_54013 = state_53982__$1;
(statearr_53995_54013[(2)] = null);

(statearr_53995_54013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (8))){
var inst_53964 = (state_53982[(7)]);
var state_53982__$1 = state_53982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53982__$1,(11),out,inst_53964);
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
});})(c__19254__auto___54003,out))
;
return ((function (switch__19198__auto__,c__19254__auto___54003,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_53999 = [null,null,null,null,null,null,null,null,null];
(statearr_53999[(0)] = state_machine__19199__auto__);

(statearr_53999[(1)] = (1));

return statearr_53999;
});
var state_machine__19199__auto____1 = (function (state_53982){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_53982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e54000){if((e54000 instanceof Object)){
var ex__19202__auto__ = e54000;
var statearr_54001_54014 = state_53982;
(statearr_54001_54014[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54015 = state_53982;
state_53982 = G__54015;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_53982){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_53982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___54003,out))
})();
var state__19256__auto__ = (function (){var statearr_54002 = f__19255__auto__.call(null);
(statearr_54002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___54003);

return statearr_54002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___54003,out))
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
return (function (state_54181){
var state_val_54182 = (state_54181[(1)]);
if((state_val_54182 === (7))){
var inst_54177 = (state_54181[(2)]);
var state_54181__$1 = state_54181;
var statearr_54183_54224 = state_54181__$1;
(statearr_54183_54224[(2)] = inst_54177);

(statearr_54183_54224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (20))){
var inst_54147 = (state_54181[(7)]);
var inst_54158 = (state_54181[(2)]);
var inst_54159 = cljs.core.next.call(null,inst_54147);
var inst_54133 = inst_54159;
var inst_54134 = null;
var inst_54135 = (0);
var inst_54136 = (0);
var state_54181__$1 = (function (){var statearr_54184 = state_54181;
(statearr_54184[(8)] = inst_54134);

(statearr_54184[(9)] = inst_54158);

(statearr_54184[(10)] = inst_54133);

(statearr_54184[(11)] = inst_54135);

(statearr_54184[(12)] = inst_54136);

return statearr_54184;
})();
var statearr_54185_54225 = state_54181__$1;
(statearr_54185_54225[(2)] = null);

(statearr_54185_54225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (1))){
var state_54181__$1 = state_54181;
var statearr_54186_54226 = state_54181__$1;
(statearr_54186_54226[(2)] = null);

(statearr_54186_54226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (4))){
var inst_54122 = (state_54181[(13)]);
var inst_54122__$1 = (state_54181[(2)]);
var inst_54123 = (inst_54122__$1 == null);
var state_54181__$1 = (function (){var statearr_54187 = state_54181;
(statearr_54187[(13)] = inst_54122__$1);

return statearr_54187;
})();
if(cljs.core.truth_(inst_54123)){
var statearr_54188_54227 = state_54181__$1;
(statearr_54188_54227[(1)] = (5));

} else {
var statearr_54189_54228 = state_54181__$1;
(statearr_54189_54228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (15))){
var state_54181__$1 = state_54181;
var statearr_54193_54229 = state_54181__$1;
(statearr_54193_54229[(2)] = null);

(statearr_54193_54229[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (21))){
var state_54181__$1 = state_54181;
var statearr_54194_54230 = state_54181__$1;
(statearr_54194_54230[(2)] = null);

(statearr_54194_54230[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (13))){
var inst_54134 = (state_54181[(8)]);
var inst_54133 = (state_54181[(10)]);
var inst_54135 = (state_54181[(11)]);
var inst_54136 = (state_54181[(12)]);
var inst_54143 = (state_54181[(2)]);
var inst_54144 = (inst_54136 + (1));
var tmp54190 = inst_54134;
var tmp54191 = inst_54133;
var tmp54192 = inst_54135;
var inst_54133__$1 = tmp54191;
var inst_54134__$1 = tmp54190;
var inst_54135__$1 = tmp54192;
var inst_54136__$1 = inst_54144;
var state_54181__$1 = (function (){var statearr_54195 = state_54181;
(statearr_54195[(8)] = inst_54134__$1);

(statearr_54195[(10)] = inst_54133__$1);

(statearr_54195[(14)] = inst_54143);

(statearr_54195[(11)] = inst_54135__$1);

(statearr_54195[(12)] = inst_54136__$1);

return statearr_54195;
})();
var statearr_54196_54231 = state_54181__$1;
(statearr_54196_54231[(2)] = null);

(statearr_54196_54231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (22))){
var state_54181__$1 = state_54181;
var statearr_54197_54232 = state_54181__$1;
(statearr_54197_54232[(2)] = null);

(statearr_54197_54232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (6))){
var inst_54122 = (state_54181[(13)]);
var inst_54131 = f.call(null,inst_54122);
var inst_54132 = cljs.core.seq.call(null,inst_54131);
var inst_54133 = inst_54132;
var inst_54134 = null;
var inst_54135 = (0);
var inst_54136 = (0);
var state_54181__$1 = (function (){var statearr_54198 = state_54181;
(statearr_54198[(8)] = inst_54134);

(statearr_54198[(10)] = inst_54133);

(statearr_54198[(11)] = inst_54135);

(statearr_54198[(12)] = inst_54136);

return statearr_54198;
})();
var statearr_54199_54233 = state_54181__$1;
(statearr_54199_54233[(2)] = null);

(statearr_54199_54233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (17))){
var inst_54147 = (state_54181[(7)]);
var inst_54151 = cljs.core.chunk_first.call(null,inst_54147);
var inst_54152 = cljs.core.chunk_rest.call(null,inst_54147);
var inst_54153 = cljs.core.count.call(null,inst_54151);
var inst_54133 = inst_54152;
var inst_54134 = inst_54151;
var inst_54135 = inst_54153;
var inst_54136 = (0);
var state_54181__$1 = (function (){var statearr_54200 = state_54181;
(statearr_54200[(8)] = inst_54134);

(statearr_54200[(10)] = inst_54133);

(statearr_54200[(11)] = inst_54135);

(statearr_54200[(12)] = inst_54136);

return statearr_54200;
})();
var statearr_54201_54234 = state_54181__$1;
(statearr_54201_54234[(2)] = null);

(statearr_54201_54234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (3))){
var inst_54179 = (state_54181[(2)]);
var state_54181__$1 = state_54181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54181__$1,inst_54179);
} else {
if((state_val_54182 === (12))){
var inst_54167 = (state_54181[(2)]);
var state_54181__$1 = state_54181;
var statearr_54202_54235 = state_54181__$1;
(statearr_54202_54235[(2)] = inst_54167);

(statearr_54202_54235[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (2))){
var state_54181__$1 = state_54181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54181__$1,(4),in$);
} else {
if((state_val_54182 === (23))){
var inst_54175 = (state_54181[(2)]);
var state_54181__$1 = state_54181;
var statearr_54203_54236 = state_54181__$1;
(statearr_54203_54236[(2)] = inst_54175);

(statearr_54203_54236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (19))){
var inst_54162 = (state_54181[(2)]);
var state_54181__$1 = state_54181;
var statearr_54204_54237 = state_54181__$1;
(statearr_54204_54237[(2)] = inst_54162);

(statearr_54204_54237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (11))){
var inst_54133 = (state_54181[(10)]);
var inst_54147 = (state_54181[(7)]);
var inst_54147__$1 = cljs.core.seq.call(null,inst_54133);
var state_54181__$1 = (function (){var statearr_54205 = state_54181;
(statearr_54205[(7)] = inst_54147__$1);

return statearr_54205;
})();
if(inst_54147__$1){
var statearr_54206_54238 = state_54181__$1;
(statearr_54206_54238[(1)] = (14));

} else {
var statearr_54207_54239 = state_54181__$1;
(statearr_54207_54239[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (9))){
var inst_54169 = (state_54181[(2)]);
var inst_54170 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_54181__$1 = (function (){var statearr_54208 = state_54181;
(statearr_54208[(15)] = inst_54169);

return statearr_54208;
})();
if(cljs.core.truth_(inst_54170)){
var statearr_54209_54240 = state_54181__$1;
(statearr_54209_54240[(1)] = (21));

} else {
var statearr_54210_54241 = state_54181__$1;
(statearr_54210_54241[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (5))){
var inst_54125 = cljs.core.async.close_BANG_.call(null,out);
var state_54181__$1 = state_54181;
var statearr_54211_54242 = state_54181__$1;
(statearr_54211_54242[(2)] = inst_54125);

(statearr_54211_54242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (14))){
var inst_54147 = (state_54181[(7)]);
var inst_54149 = cljs.core.chunked_seq_QMARK_.call(null,inst_54147);
var state_54181__$1 = state_54181;
if(inst_54149){
var statearr_54212_54243 = state_54181__$1;
(statearr_54212_54243[(1)] = (17));

} else {
var statearr_54213_54244 = state_54181__$1;
(statearr_54213_54244[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (16))){
var inst_54165 = (state_54181[(2)]);
var state_54181__$1 = state_54181;
var statearr_54214_54245 = state_54181__$1;
(statearr_54214_54245[(2)] = inst_54165);

(statearr_54214_54245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54182 === (10))){
var inst_54134 = (state_54181[(8)]);
var inst_54136 = (state_54181[(12)]);
var inst_54141 = cljs.core._nth.call(null,inst_54134,inst_54136);
var state_54181__$1 = state_54181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54181__$1,(13),out,inst_54141);
} else {
if((state_val_54182 === (18))){
var inst_54147 = (state_54181[(7)]);
var inst_54156 = cljs.core.first.call(null,inst_54147);
var state_54181__$1 = state_54181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54181__$1,(20),out,inst_54156);
} else {
if((state_val_54182 === (8))){
var inst_54135 = (state_54181[(11)]);
var inst_54136 = (state_54181[(12)]);
var inst_54138 = (inst_54136 < inst_54135);
var inst_54139 = inst_54138;
var state_54181__$1 = state_54181;
if(cljs.core.truth_(inst_54139)){
var statearr_54215_54246 = state_54181__$1;
(statearr_54215_54246[(1)] = (10));

} else {
var statearr_54216_54247 = state_54181__$1;
(statearr_54216_54247[(1)] = (11));

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
var statearr_54220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54220[(0)] = state_machine__19199__auto__);

(statearr_54220[(1)] = (1));

return statearr_54220;
});
var state_machine__19199__auto____1 = (function (state_54181){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_54181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e54221){if((e54221 instanceof Object)){
var ex__19202__auto__ = e54221;
var statearr_54222_54248 = state_54181;
(statearr_54222_54248[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54249 = state_54181;
state_54181 = G__54249;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_54181){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_54181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_54223 = f__19255__auto__.call(null);
(statearr_54223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_54223;
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
var c__19254__auto___54346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___54346,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___54346,out){
return (function (state_54321){
var state_val_54322 = (state_54321[(1)]);
if((state_val_54322 === (7))){
var inst_54316 = (state_54321[(2)]);
var state_54321__$1 = state_54321;
var statearr_54323_54347 = state_54321__$1;
(statearr_54323_54347[(2)] = inst_54316);

(statearr_54323_54347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54322 === (1))){
var inst_54298 = null;
var state_54321__$1 = (function (){var statearr_54324 = state_54321;
(statearr_54324[(7)] = inst_54298);

return statearr_54324;
})();
var statearr_54325_54348 = state_54321__$1;
(statearr_54325_54348[(2)] = null);

(statearr_54325_54348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54322 === (4))){
var inst_54301 = (state_54321[(8)]);
var inst_54301__$1 = (state_54321[(2)]);
var inst_54302 = (inst_54301__$1 == null);
var inst_54303 = cljs.core.not.call(null,inst_54302);
var state_54321__$1 = (function (){var statearr_54326 = state_54321;
(statearr_54326[(8)] = inst_54301__$1);

return statearr_54326;
})();
if(inst_54303){
var statearr_54327_54349 = state_54321__$1;
(statearr_54327_54349[(1)] = (5));

} else {
var statearr_54328_54350 = state_54321__$1;
(statearr_54328_54350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54322 === (6))){
var state_54321__$1 = state_54321;
var statearr_54329_54351 = state_54321__$1;
(statearr_54329_54351[(2)] = null);

(statearr_54329_54351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54322 === (3))){
var inst_54318 = (state_54321[(2)]);
var inst_54319 = cljs.core.async.close_BANG_.call(null,out);
var state_54321__$1 = (function (){var statearr_54330 = state_54321;
(statearr_54330[(9)] = inst_54318);

return statearr_54330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54321__$1,inst_54319);
} else {
if((state_val_54322 === (2))){
var state_54321__$1 = state_54321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54321__$1,(4),ch);
} else {
if((state_val_54322 === (11))){
var inst_54301 = (state_54321[(8)]);
var inst_54310 = (state_54321[(2)]);
var inst_54298 = inst_54301;
var state_54321__$1 = (function (){var statearr_54331 = state_54321;
(statearr_54331[(7)] = inst_54298);

(statearr_54331[(10)] = inst_54310);

return statearr_54331;
})();
var statearr_54332_54352 = state_54321__$1;
(statearr_54332_54352[(2)] = null);

(statearr_54332_54352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54322 === (9))){
var inst_54301 = (state_54321[(8)]);
var state_54321__$1 = state_54321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54321__$1,(11),out,inst_54301);
} else {
if((state_val_54322 === (5))){
var inst_54298 = (state_54321[(7)]);
var inst_54301 = (state_54321[(8)]);
var inst_54305 = cljs.core._EQ_.call(null,inst_54301,inst_54298);
var state_54321__$1 = state_54321;
if(inst_54305){
var statearr_54334_54353 = state_54321__$1;
(statearr_54334_54353[(1)] = (8));

} else {
var statearr_54335_54354 = state_54321__$1;
(statearr_54335_54354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54322 === (10))){
var inst_54313 = (state_54321[(2)]);
var state_54321__$1 = state_54321;
var statearr_54336_54355 = state_54321__$1;
(statearr_54336_54355[(2)] = inst_54313);

(statearr_54336_54355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54322 === (8))){
var inst_54298 = (state_54321[(7)]);
var tmp54333 = inst_54298;
var inst_54298__$1 = tmp54333;
var state_54321__$1 = (function (){var statearr_54337 = state_54321;
(statearr_54337[(7)] = inst_54298__$1);

return statearr_54337;
})();
var statearr_54338_54356 = state_54321__$1;
(statearr_54338_54356[(2)] = null);

(statearr_54338_54356[(1)] = (2));


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
});})(c__19254__auto___54346,out))
;
return ((function (switch__19198__auto__,c__19254__auto___54346,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_54342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54342[(0)] = state_machine__19199__auto__);

(statearr_54342[(1)] = (1));

return statearr_54342;
});
var state_machine__19199__auto____1 = (function (state_54321){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_54321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e54343){if((e54343 instanceof Object)){
var ex__19202__auto__ = e54343;
var statearr_54344_54357 = state_54321;
(statearr_54344_54357[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54358 = state_54321;
state_54321 = G__54358;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_54321){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_54321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___54346,out))
})();
var state__19256__auto__ = (function (){var statearr_54345 = f__19255__auto__.call(null);
(statearr_54345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___54346);

return statearr_54345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___54346,out))
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
var c__19254__auto___54493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___54493,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___54493,out){
return (function (state_54463){
var state_val_54464 = (state_54463[(1)]);
if((state_val_54464 === (7))){
var inst_54459 = (state_54463[(2)]);
var state_54463__$1 = state_54463;
var statearr_54465_54494 = state_54463__$1;
(statearr_54465_54494[(2)] = inst_54459);

(statearr_54465_54494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54464 === (1))){
var inst_54426 = (new Array(n));
var inst_54427 = inst_54426;
var inst_54428 = (0);
var state_54463__$1 = (function (){var statearr_54466 = state_54463;
(statearr_54466[(7)] = inst_54427);

(statearr_54466[(8)] = inst_54428);

return statearr_54466;
})();
var statearr_54467_54495 = state_54463__$1;
(statearr_54467_54495[(2)] = null);

(statearr_54467_54495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54464 === (4))){
var inst_54431 = (state_54463[(9)]);
var inst_54431__$1 = (state_54463[(2)]);
var inst_54432 = (inst_54431__$1 == null);
var inst_54433 = cljs.core.not.call(null,inst_54432);
var state_54463__$1 = (function (){var statearr_54468 = state_54463;
(statearr_54468[(9)] = inst_54431__$1);

return statearr_54468;
})();
if(inst_54433){
var statearr_54469_54496 = state_54463__$1;
(statearr_54469_54496[(1)] = (5));

} else {
var statearr_54470_54497 = state_54463__$1;
(statearr_54470_54497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54464 === (15))){
var inst_54453 = (state_54463[(2)]);
var state_54463__$1 = state_54463;
var statearr_54471_54498 = state_54463__$1;
(statearr_54471_54498[(2)] = inst_54453);

(statearr_54471_54498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54464 === (13))){
var state_54463__$1 = state_54463;
var statearr_54472_54499 = state_54463__$1;
(statearr_54472_54499[(2)] = null);

(statearr_54472_54499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54464 === (6))){
var inst_54428 = (state_54463[(8)]);
var inst_54449 = (inst_54428 > (0));
var state_54463__$1 = state_54463;
if(cljs.core.truth_(inst_54449)){
var statearr_54473_54500 = state_54463__$1;
(statearr_54473_54500[(1)] = (12));

} else {
var statearr_54474_54501 = state_54463__$1;
(statearr_54474_54501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54464 === (3))){
var inst_54461 = (state_54463[(2)]);
var state_54463__$1 = state_54463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54463__$1,inst_54461);
} else {
if((state_val_54464 === (12))){
var inst_54427 = (state_54463[(7)]);
var inst_54451 = cljs.core.vec.call(null,inst_54427);
var state_54463__$1 = state_54463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54463__$1,(15),out,inst_54451);
} else {
if((state_val_54464 === (2))){
var state_54463__$1 = state_54463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54463__$1,(4),ch);
} else {
if((state_val_54464 === (11))){
var inst_54443 = (state_54463[(2)]);
var inst_54444 = (new Array(n));
var inst_54427 = inst_54444;
var inst_54428 = (0);
var state_54463__$1 = (function (){var statearr_54475 = state_54463;
(statearr_54475[(10)] = inst_54443);

(statearr_54475[(7)] = inst_54427);

(statearr_54475[(8)] = inst_54428);

return statearr_54475;
})();
var statearr_54476_54502 = state_54463__$1;
(statearr_54476_54502[(2)] = null);

(statearr_54476_54502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54464 === (9))){
var inst_54427 = (state_54463[(7)]);
var inst_54441 = cljs.core.vec.call(null,inst_54427);
var state_54463__$1 = state_54463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54463__$1,(11),out,inst_54441);
} else {
if((state_val_54464 === (5))){
var inst_54436 = (state_54463[(11)]);
var inst_54431 = (state_54463[(9)]);
var inst_54427 = (state_54463[(7)]);
var inst_54428 = (state_54463[(8)]);
var inst_54435 = (inst_54427[inst_54428] = inst_54431);
var inst_54436__$1 = (inst_54428 + (1));
var inst_54437 = (inst_54436__$1 < n);
var state_54463__$1 = (function (){var statearr_54477 = state_54463;
(statearr_54477[(11)] = inst_54436__$1);

(statearr_54477[(12)] = inst_54435);

return statearr_54477;
})();
if(cljs.core.truth_(inst_54437)){
var statearr_54478_54503 = state_54463__$1;
(statearr_54478_54503[(1)] = (8));

} else {
var statearr_54479_54504 = state_54463__$1;
(statearr_54479_54504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54464 === (14))){
var inst_54456 = (state_54463[(2)]);
var inst_54457 = cljs.core.async.close_BANG_.call(null,out);
var state_54463__$1 = (function (){var statearr_54481 = state_54463;
(statearr_54481[(13)] = inst_54456);

return statearr_54481;
})();
var statearr_54482_54505 = state_54463__$1;
(statearr_54482_54505[(2)] = inst_54457);

(statearr_54482_54505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54464 === (10))){
var inst_54447 = (state_54463[(2)]);
var state_54463__$1 = state_54463;
var statearr_54483_54506 = state_54463__$1;
(statearr_54483_54506[(2)] = inst_54447);

(statearr_54483_54506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54464 === (8))){
var inst_54436 = (state_54463[(11)]);
var inst_54427 = (state_54463[(7)]);
var tmp54480 = inst_54427;
var inst_54427__$1 = tmp54480;
var inst_54428 = inst_54436;
var state_54463__$1 = (function (){var statearr_54484 = state_54463;
(statearr_54484[(7)] = inst_54427__$1);

(statearr_54484[(8)] = inst_54428);

return statearr_54484;
})();
var statearr_54485_54507 = state_54463__$1;
(statearr_54485_54507[(2)] = null);

(statearr_54485_54507[(1)] = (2));


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
});})(c__19254__auto___54493,out))
;
return ((function (switch__19198__auto__,c__19254__auto___54493,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_54489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54489[(0)] = state_machine__19199__auto__);

(statearr_54489[(1)] = (1));

return statearr_54489;
});
var state_machine__19199__auto____1 = (function (state_54463){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_54463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e54490){if((e54490 instanceof Object)){
var ex__19202__auto__ = e54490;
var statearr_54491_54508 = state_54463;
(statearr_54491_54508[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54509 = state_54463;
state_54463 = G__54509;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_54463){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_54463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___54493,out))
})();
var state__19256__auto__ = (function (){var statearr_54492 = f__19255__auto__.call(null);
(statearr_54492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___54493);

return statearr_54492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___54493,out))
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
var c__19254__auto___54652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___54652,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___54652,out){
return (function (state_54622){
var state_val_54623 = (state_54622[(1)]);
if((state_val_54623 === (7))){
var inst_54618 = (state_54622[(2)]);
var state_54622__$1 = state_54622;
var statearr_54624_54653 = state_54622__$1;
(statearr_54624_54653[(2)] = inst_54618);

(statearr_54624_54653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54623 === (1))){
var inst_54581 = [];
var inst_54582 = inst_54581;
var inst_54583 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54622__$1 = (function (){var statearr_54625 = state_54622;
(statearr_54625[(7)] = inst_54583);

(statearr_54625[(8)] = inst_54582);

return statearr_54625;
})();
var statearr_54626_54654 = state_54622__$1;
(statearr_54626_54654[(2)] = null);

(statearr_54626_54654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54623 === (4))){
var inst_54586 = (state_54622[(9)]);
var inst_54586__$1 = (state_54622[(2)]);
var inst_54587 = (inst_54586__$1 == null);
var inst_54588 = cljs.core.not.call(null,inst_54587);
var state_54622__$1 = (function (){var statearr_54627 = state_54622;
(statearr_54627[(9)] = inst_54586__$1);

return statearr_54627;
})();
if(inst_54588){
var statearr_54628_54655 = state_54622__$1;
(statearr_54628_54655[(1)] = (5));

} else {
var statearr_54629_54656 = state_54622__$1;
(statearr_54629_54656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54623 === (15))){
var inst_54612 = (state_54622[(2)]);
var state_54622__$1 = state_54622;
var statearr_54630_54657 = state_54622__$1;
(statearr_54630_54657[(2)] = inst_54612);

(statearr_54630_54657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54623 === (13))){
var state_54622__$1 = state_54622;
var statearr_54631_54658 = state_54622__$1;
(statearr_54631_54658[(2)] = null);

(statearr_54631_54658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54623 === (6))){
var inst_54582 = (state_54622[(8)]);
var inst_54607 = inst_54582.length;
var inst_54608 = (inst_54607 > (0));
var state_54622__$1 = state_54622;
if(cljs.core.truth_(inst_54608)){
var statearr_54632_54659 = state_54622__$1;
(statearr_54632_54659[(1)] = (12));

} else {
var statearr_54633_54660 = state_54622__$1;
(statearr_54633_54660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54623 === (3))){
var inst_54620 = (state_54622[(2)]);
var state_54622__$1 = state_54622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54622__$1,inst_54620);
} else {
if((state_val_54623 === (12))){
var inst_54582 = (state_54622[(8)]);
var inst_54610 = cljs.core.vec.call(null,inst_54582);
var state_54622__$1 = state_54622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54622__$1,(15),out,inst_54610);
} else {
if((state_val_54623 === (2))){
var state_54622__$1 = state_54622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54622__$1,(4),ch);
} else {
if((state_val_54623 === (11))){
var inst_54586 = (state_54622[(9)]);
var inst_54590 = (state_54622[(10)]);
var inst_54600 = (state_54622[(2)]);
var inst_54601 = [];
var inst_54602 = inst_54601.push(inst_54586);
var inst_54582 = inst_54601;
var inst_54583 = inst_54590;
var state_54622__$1 = (function (){var statearr_54634 = state_54622;
(statearr_54634[(11)] = inst_54602);

(statearr_54634[(12)] = inst_54600);

(statearr_54634[(7)] = inst_54583);

(statearr_54634[(8)] = inst_54582);

return statearr_54634;
})();
var statearr_54635_54661 = state_54622__$1;
(statearr_54635_54661[(2)] = null);

(statearr_54635_54661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54623 === (9))){
var inst_54582 = (state_54622[(8)]);
var inst_54598 = cljs.core.vec.call(null,inst_54582);
var state_54622__$1 = state_54622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54622__$1,(11),out,inst_54598);
} else {
if((state_val_54623 === (5))){
var inst_54586 = (state_54622[(9)]);
var inst_54590 = (state_54622[(10)]);
var inst_54583 = (state_54622[(7)]);
var inst_54590__$1 = f.call(null,inst_54586);
var inst_54591 = cljs.core._EQ_.call(null,inst_54590__$1,inst_54583);
var inst_54592 = cljs.core.keyword_identical_QMARK_.call(null,inst_54583,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_54593 = (inst_54591) || (inst_54592);
var state_54622__$1 = (function (){var statearr_54636 = state_54622;
(statearr_54636[(10)] = inst_54590__$1);

return statearr_54636;
})();
if(cljs.core.truth_(inst_54593)){
var statearr_54637_54662 = state_54622__$1;
(statearr_54637_54662[(1)] = (8));

} else {
var statearr_54638_54663 = state_54622__$1;
(statearr_54638_54663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54623 === (14))){
var inst_54615 = (state_54622[(2)]);
var inst_54616 = cljs.core.async.close_BANG_.call(null,out);
var state_54622__$1 = (function (){var statearr_54640 = state_54622;
(statearr_54640[(13)] = inst_54615);

return statearr_54640;
})();
var statearr_54641_54664 = state_54622__$1;
(statearr_54641_54664[(2)] = inst_54616);

(statearr_54641_54664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54623 === (10))){
var inst_54605 = (state_54622[(2)]);
var state_54622__$1 = state_54622;
var statearr_54642_54665 = state_54622__$1;
(statearr_54642_54665[(2)] = inst_54605);

(statearr_54642_54665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54623 === (8))){
var inst_54586 = (state_54622[(9)]);
var inst_54590 = (state_54622[(10)]);
var inst_54582 = (state_54622[(8)]);
var inst_54595 = inst_54582.push(inst_54586);
var tmp54639 = inst_54582;
var inst_54582__$1 = tmp54639;
var inst_54583 = inst_54590;
var state_54622__$1 = (function (){var statearr_54643 = state_54622;
(statearr_54643[(7)] = inst_54583);

(statearr_54643[(8)] = inst_54582__$1);

(statearr_54643[(14)] = inst_54595);

return statearr_54643;
})();
var statearr_54644_54666 = state_54622__$1;
(statearr_54644_54666[(2)] = null);

(statearr_54644_54666[(1)] = (2));


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
});})(c__19254__auto___54652,out))
;
return ((function (switch__19198__auto__,c__19254__auto___54652,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_54648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54648[(0)] = state_machine__19199__auto__);

(statearr_54648[(1)] = (1));

return statearr_54648;
});
var state_machine__19199__auto____1 = (function (state_54622){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_54622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e54649){if((e54649 instanceof Object)){
var ex__19202__auto__ = e54649;
var statearr_54650_54667 = state_54622;
(statearr_54650_54667[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54668 = state_54622;
state_54622 = G__54668;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_54622){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_54622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___54652,out))
})();
var state__19256__auto__ = (function (){var statearr_54651 = f__19255__auto__.call(null);
(statearr_54651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___54652);

return statearr_54651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___54652,out))
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

//# sourceMappingURL=async.js.map?rel=1428649981981