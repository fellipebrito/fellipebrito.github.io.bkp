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
if(typeof cljs.core.async.t32391 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32391 = (function (f,fn_handler,meta32392){
this.f = f;
this.fn_handler = fn_handler;
this.meta32392 = meta32392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32391.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t32391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t32391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32393){
var self__ = this;
var _32393__$1 = this;
return self__.meta32392;
});

cljs.core.async.t32391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32393,meta32392__$1){
var self__ = this;
var _32393__$1 = this;
return (new cljs.core.async.t32391(self__.f,self__.fn_handler,meta32392__$1));
});

cljs.core.async.t32391.cljs$lang$type = true;

cljs.core.async.t32391.cljs$lang$ctorStr = "cljs.core.async/t32391";

cljs.core.async.t32391.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32391");
});

cljs.core.async.__GT_t32391 = (function __GT_t32391(f__$1,fn_handler__$1,meta32392){
return (new cljs.core.async.t32391(f__$1,fn_handler__$1,meta32392));
});

}

return (new cljs.core.async.t32391(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32395 = buff;
if(G__32395){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__32395.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__32395.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32395);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32395);
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
var val_32396 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32396);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32396,ret){
return (function (){
return fn1.call(null,val_32396);
});})(val_32396,ret))
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
var n__17032__auto___32397 = n;
var x_32398 = (0);
while(true){
if((x_32398 < n__17032__auto___32397)){
(a[x_32398] = (0));

var G__32399 = (x_32398 + (1));
x_32398 = G__32399;
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

var G__32400 = (i + (1));
i = G__32400;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t32404 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32404 = (function (flag,alt_flag,meta32405){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta32405 = meta32405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32404.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t32404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t32404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32406){
var self__ = this;
var _32406__$1 = this;
return self__.meta32405;
});})(flag))
;

cljs.core.async.t32404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32406,meta32405__$1){
var self__ = this;
var _32406__$1 = this;
return (new cljs.core.async.t32404(self__.flag,self__.alt_flag,meta32405__$1));
});})(flag))
;

cljs.core.async.t32404.cljs$lang$type = true;

cljs.core.async.t32404.cljs$lang$ctorStr = "cljs.core.async/t32404";

cljs.core.async.t32404.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32404");
});})(flag))
;

cljs.core.async.__GT_t32404 = ((function (flag){
return (function __GT_t32404(flag__$1,alt_flag__$1,meta32405){
return (new cljs.core.async.t32404(flag__$1,alt_flag__$1,meta32405));
});})(flag))
;

}

return (new cljs.core.async.t32404(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t32410 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32410 = (function (cb,flag,alt_handler,meta32411){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32411 = meta32411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32410.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t32410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t32410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32412){
var self__ = this;
var _32412__$1 = this;
return self__.meta32411;
});

cljs.core.async.t32410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32412,meta32411__$1){
var self__ = this;
var _32412__$1 = this;
return (new cljs.core.async.t32410(self__.cb,self__.flag,self__.alt_handler,meta32411__$1));
});

cljs.core.async.t32410.cljs$lang$type = true;

cljs.core.async.t32410.cljs$lang$ctorStr = "cljs.core.async/t32410";

cljs.core.async.t32410.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32410");
});

cljs.core.async.__GT_t32410 = (function __GT_t32410(cb__$1,flag__$1,alt_handler__$1,meta32411){
return (new cljs.core.async.t32410(cb__$1,flag__$1,alt_handler__$1,meta32411));
});

}

return (new cljs.core.async.t32410(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32413_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32413_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32414_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32414_SHARP_,port], null));
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
var G__32415 = (i + (1));
i = G__32415;
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
var alts_BANG___delegate = function (ports,p__32416){
var map__32418 = p__32416;
var map__32418__$1 = ((cljs.core.seq_QMARK_.call(null,map__32418))?cljs.core.apply.call(null,cljs.core.hash_map,map__32418):map__32418);
var opts = map__32418__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__32416 = null;
if (arguments.length > 1) {
var G__32419__i = 0, G__32419__a = new Array(arguments.length -  1);
while (G__32419__i < G__32419__a.length) {G__32419__a[G__32419__i] = arguments[G__32419__i + 1]; ++G__32419__i;}
  p__32416 = new cljs.core.IndexedSeq(G__32419__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__32416);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__32420){
var ports = cljs.core.first(arglist__32420);
var p__32416 = cljs.core.rest(arglist__32420);
return alts_BANG___delegate(ports,p__32416);
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
var c__19569__auto___32515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___32515){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___32515){
return (function (state_32491){
var state_val_32492 = (state_32491[(1)]);
if((state_val_32492 === (7))){
var inst_32487 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32493_32516 = state_32491__$1;
(statearr_32493_32516[(2)] = inst_32487);

(statearr_32493_32516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (1))){
var state_32491__$1 = state_32491;
var statearr_32494_32517 = state_32491__$1;
(statearr_32494_32517[(2)] = null);

(statearr_32494_32517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (4))){
var inst_32470 = (state_32491[(7)]);
var inst_32470__$1 = (state_32491[(2)]);
var inst_32471 = (inst_32470__$1 == null);
var state_32491__$1 = (function (){var statearr_32495 = state_32491;
(statearr_32495[(7)] = inst_32470__$1);

return statearr_32495;
})();
if(cljs.core.truth_(inst_32471)){
var statearr_32496_32518 = state_32491__$1;
(statearr_32496_32518[(1)] = (5));

} else {
var statearr_32497_32519 = state_32491__$1;
(statearr_32497_32519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (13))){
var state_32491__$1 = state_32491;
var statearr_32498_32520 = state_32491__$1;
(statearr_32498_32520[(2)] = null);

(statearr_32498_32520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (6))){
var inst_32470 = (state_32491[(7)]);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32491__$1,(11),to,inst_32470);
} else {
if((state_val_32492 === (3))){
var inst_32489 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32491__$1,inst_32489);
} else {
if((state_val_32492 === (12))){
var state_32491__$1 = state_32491;
var statearr_32499_32521 = state_32491__$1;
(statearr_32499_32521[(2)] = null);

(statearr_32499_32521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (2))){
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32491__$1,(4),from);
} else {
if((state_val_32492 === (11))){
var inst_32480 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32480)){
var statearr_32500_32522 = state_32491__$1;
(statearr_32500_32522[(1)] = (12));

} else {
var statearr_32501_32523 = state_32491__$1;
(statearr_32501_32523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (9))){
var state_32491__$1 = state_32491;
var statearr_32502_32524 = state_32491__$1;
(statearr_32502_32524[(2)] = null);

(statearr_32502_32524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (5))){
var state_32491__$1 = state_32491;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32503_32525 = state_32491__$1;
(statearr_32503_32525[(1)] = (8));

} else {
var statearr_32504_32526 = state_32491__$1;
(statearr_32504_32526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (14))){
var inst_32485 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32505_32527 = state_32491__$1;
(statearr_32505_32527[(2)] = inst_32485);

(statearr_32505_32527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (10))){
var inst_32477 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32506_32528 = state_32491__$1;
(statearr_32506_32528[(2)] = inst_32477);

(statearr_32506_32528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (8))){
var inst_32474 = cljs.core.async.close_BANG_.call(null,to);
var state_32491__$1 = state_32491;
var statearr_32507_32529 = state_32491__$1;
(statearr_32507_32529[(2)] = inst_32474);

(statearr_32507_32529[(1)] = (10));


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
});})(c__19569__auto___32515))
;
return ((function (switch__19513__auto__,c__19569__auto___32515){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_32511 = [null,null,null,null,null,null,null,null];
(statearr_32511[(0)] = state_machine__19514__auto__);

(statearr_32511[(1)] = (1));

return statearr_32511;
});
var state_machine__19514__auto____1 = (function (state_32491){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_32491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e32512){if((e32512 instanceof Object)){
var ex__19517__auto__ = e32512;
var statearr_32513_32530 = state_32491;
(statearr_32513_32530[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32531 = state_32491;
state_32491 = G__32531;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_32491){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_32491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___32515))
})();
var state__19571__auto__ = (function (){var statearr_32514 = f__19570__auto__.call(null);
(statearr_32514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___32515);

return statearr_32514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___32515))
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
return (function (p__32715){
var vec__32716 = p__32715;
var v = cljs.core.nth.call(null,vec__32716,(0),null);
var p = cljs.core.nth.call(null,vec__32716,(1),null);
var job = vec__32716;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19569__auto___32898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___32898,res,vec__32716,v,p,job,jobs,results){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___32898,res,vec__32716,v,p,job,jobs,results){
return (function (state_32721){
var state_val_32722 = (state_32721[(1)]);
if((state_val_32722 === (2))){
var inst_32718 = (state_32721[(2)]);
var inst_32719 = cljs.core.async.close_BANG_.call(null,res);
var state_32721__$1 = (function (){var statearr_32723 = state_32721;
(statearr_32723[(7)] = inst_32718);

return statearr_32723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32721__$1,inst_32719);
} else {
if((state_val_32722 === (1))){
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32721__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19569__auto___32898,res,vec__32716,v,p,job,jobs,results))
;
return ((function (switch__19513__auto__,c__19569__auto___32898,res,vec__32716,v,p,job,jobs,results){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_32727 = [null,null,null,null,null,null,null,null];
(statearr_32727[(0)] = state_machine__19514__auto__);

(statearr_32727[(1)] = (1));

return statearr_32727;
});
var state_machine__19514__auto____1 = (function (state_32721){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_32721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e32728){if((e32728 instanceof Object)){
var ex__19517__auto__ = e32728;
var statearr_32729_32899 = state_32721;
(statearr_32729_32899[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32900 = state_32721;
state_32721 = G__32900;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_32721){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_32721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___32898,res,vec__32716,v,p,job,jobs,results))
})();
var state__19571__auto__ = (function (){var statearr_32730 = f__19570__auto__.call(null);
(statearr_32730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___32898);

return statearr_32730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___32898,res,vec__32716,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32731){
var vec__32732 = p__32731;
var v = cljs.core.nth.call(null,vec__32732,(0),null);
var p = cljs.core.nth.call(null,vec__32732,(1),null);
var job = vec__32732;
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
var n__17032__auto___32901 = n;
var __32902 = (0);
while(true){
if((__32902 < n__17032__auto___32901)){
var G__32733_32903 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32733_32903) {
case "async":
var c__19569__auto___32905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32902,c__19569__auto___32905,G__32733_32903,n__17032__auto___32901,jobs,results,process,async){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (__32902,c__19569__auto___32905,G__32733_32903,n__17032__auto___32901,jobs,results,process,async){
return (function (state_32746){
var state_val_32747 = (state_32746[(1)]);
if((state_val_32747 === (7))){
var inst_32742 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
var statearr_32748_32906 = state_32746__$1;
(statearr_32748_32906[(2)] = inst_32742);

(statearr_32748_32906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (6))){
var state_32746__$1 = state_32746;
var statearr_32749_32907 = state_32746__$1;
(statearr_32749_32907[(2)] = null);

(statearr_32749_32907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (5))){
var state_32746__$1 = state_32746;
var statearr_32750_32908 = state_32746__$1;
(statearr_32750_32908[(2)] = null);

(statearr_32750_32908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (4))){
var inst_32736 = (state_32746[(2)]);
var inst_32737 = async.call(null,inst_32736);
var state_32746__$1 = state_32746;
if(cljs.core.truth_(inst_32737)){
var statearr_32751_32909 = state_32746__$1;
(statearr_32751_32909[(1)] = (5));

} else {
var statearr_32752_32910 = state_32746__$1;
(statearr_32752_32910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (3))){
var inst_32744 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32746__$1,inst_32744);
} else {
if((state_val_32747 === (2))){
var state_32746__$1 = state_32746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32746__$1,(4),jobs);
} else {
if((state_val_32747 === (1))){
var state_32746__$1 = state_32746;
var statearr_32753_32911 = state_32746__$1;
(statearr_32753_32911[(2)] = null);

(statearr_32753_32911[(1)] = (2));


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
});})(__32902,c__19569__auto___32905,G__32733_32903,n__17032__auto___32901,jobs,results,process,async))
;
return ((function (__32902,switch__19513__auto__,c__19569__auto___32905,G__32733_32903,n__17032__auto___32901,jobs,results,process,async){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_32757 = [null,null,null,null,null,null,null];
(statearr_32757[(0)] = state_machine__19514__auto__);

(statearr_32757[(1)] = (1));

return statearr_32757;
});
var state_machine__19514__auto____1 = (function (state_32746){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_32746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e32758){if((e32758 instanceof Object)){
var ex__19517__auto__ = e32758;
var statearr_32759_32912 = state_32746;
(statearr_32759_32912[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32913 = state_32746;
state_32746 = G__32913;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_32746){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_32746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(__32902,switch__19513__auto__,c__19569__auto___32905,G__32733_32903,n__17032__auto___32901,jobs,results,process,async))
})();
var state__19571__auto__ = (function (){var statearr_32760 = f__19570__auto__.call(null);
(statearr_32760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___32905);

return statearr_32760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(__32902,c__19569__auto___32905,G__32733_32903,n__17032__auto___32901,jobs,results,process,async))
);


break;
case "compute":
var c__19569__auto___32914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32902,c__19569__auto___32914,G__32733_32903,n__17032__auto___32901,jobs,results,process,async){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (__32902,c__19569__auto___32914,G__32733_32903,n__17032__auto___32901,jobs,results,process,async){
return (function (state_32773){
var state_val_32774 = (state_32773[(1)]);
if((state_val_32774 === (7))){
var inst_32769 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
var statearr_32775_32915 = state_32773__$1;
(statearr_32775_32915[(2)] = inst_32769);

(statearr_32775_32915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (6))){
var state_32773__$1 = state_32773;
var statearr_32776_32916 = state_32773__$1;
(statearr_32776_32916[(2)] = null);

(statearr_32776_32916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (5))){
var state_32773__$1 = state_32773;
var statearr_32777_32917 = state_32773__$1;
(statearr_32777_32917[(2)] = null);

(statearr_32777_32917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (4))){
var inst_32763 = (state_32773[(2)]);
var inst_32764 = process.call(null,inst_32763);
var state_32773__$1 = state_32773;
if(cljs.core.truth_(inst_32764)){
var statearr_32778_32918 = state_32773__$1;
(statearr_32778_32918[(1)] = (5));

} else {
var statearr_32779_32919 = state_32773__$1;
(statearr_32779_32919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (3))){
var inst_32771 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32773__$1,inst_32771);
} else {
if((state_val_32774 === (2))){
var state_32773__$1 = state_32773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32773__$1,(4),jobs);
} else {
if((state_val_32774 === (1))){
var state_32773__$1 = state_32773;
var statearr_32780_32920 = state_32773__$1;
(statearr_32780_32920[(2)] = null);

(statearr_32780_32920[(1)] = (2));


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
});})(__32902,c__19569__auto___32914,G__32733_32903,n__17032__auto___32901,jobs,results,process,async))
;
return ((function (__32902,switch__19513__auto__,c__19569__auto___32914,G__32733_32903,n__17032__auto___32901,jobs,results,process,async){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_32784 = [null,null,null,null,null,null,null];
(statearr_32784[(0)] = state_machine__19514__auto__);

(statearr_32784[(1)] = (1));

return statearr_32784;
});
var state_machine__19514__auto____1 = (function (state_32773){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_32773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e32785){if((e32785 instanceof Object)){
var ex__19517__auto__ = e32785;
var statearr_32786_32921 = state_32773;
(statearr_32786_32921[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32922 = state_32773;
state_32773 = G__32922;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_32773){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_32773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(__32902,switch__19513__auto__,c__19569__auto___32914,G__32733_32903,n__17032__auto___32901,jobs,results,process,async))
})();
var state__19571__auto__ = (function (){var statearr_32787 = f__19570__auto__.call(null);
(statearr_32787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___32914);

return statearr_32787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(__32902,c__19569__auto___32914,G__32733_32903,n__17032__auto___32901,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32923 = (__32902 + (1));
__32902 = G__32923;
continue;
} else {
}
break;
}

var c__19569__auto___32924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___32924,jobs,results,process,async){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___32924,jobs,results,process,async){
return (function (state_32809){
var state_val_32810 = (state_32809[(1)]);
if((state_val_32810 === (9))){
var inst_32802 = (state_32809[(2)]);
var state_32809__$1 = (function (){var statearr_32811 = state_32809;
(statearr_32811[(7)] = inst_32802);

return statearr_32811;
})();
var statearr_32812_32925 = state_32809__$1;
(statearr_32812_32925[(2)] = null);

(statearr_32812_32925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (8))){
var inst_32795 = (state_32809[(8)]);
var inst_32800 = (state_32809[(2)]);
var state_32809__$1 = (function (){var statearr_32813 = state_32809;
(statearr_32813[(9)] = inst_32800);

return statearr_32813;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32809__$1,(9),results,inst_32795);
} else {
if((state_val_32810 === (7))){
var inst_32805 = (state_32809[(2)]);
var state_32809__$1 = state_32809;
var statearr_32814_32926 = state_32809__$1;
(statearr_32814_32926[(2)] = inst_32805);

(statearr_32814_32926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (6))){
var inst_32790 = (state_32809[(10)]);
var inst_32795 = (state_32809[(8)]);
var inst_32795__$1 = cljs.core.async.chan.call(null,(1));
var inst_32796 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32797 = [inst_32790,inst_32795__$1];
var inst_32798 = (new cljs.core.PersistentVector(null,2,(5),inst_32796,inst_32797,null));
var state_32809__$1 = (function (){var statearr_32815 = state_32809;
(statearr_32815[(8)] = inst_32795__$1);

return statearr_32815;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32809__$1,(8),jobs,inst_32798);
} else {
if((state_val_32810 === (5))){
var inst_32793 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32809__$1 = state_32809;
var statearr_32816_32927 = state_32809__$1;
(statearr_32816_32927[(2)] = inst_32793);

(statearr_32816_32927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (4))){
var inst_32790 = (state_32809[(10)]);
var inst_32790__$1 = (state_32809[(2)]);
var inst_32791 = (inst_32790__$1 == null);
var state_32809__$1 = (function (){var statearr_32817 = state_32809;
(statearr_32817[(10)] = inst_32790__$1);

return statearr_32817;
})();
if(cljs.core.truth_(inst_32791)){
var statearr_32818_32928 = state_32809__$1;
(statearr_32818_32928[(1)] = (5));

} else {
var statearr_32819_32929 = state_32809__$1;
(statearr_32819_32929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (3))){
var inst_32807 = (state_32809[(2)]);
var state_32809__$1 = state_32809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32809__$1,inst_32807);
} else {
if((state_val_32810 === (2))){
var state_32809__$1 = state_32809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32809__$1,(4),from);
} else {
if((state_val_32810 === (1))){
var state_32809__$1 = state_32809;
var statearr_32820_32930 = state_32809__$1;
(statearr_32820_32930[(2)] = null);

(statearr_32820_32930[(1)] = (2));


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
});})(c__19569__auto___32924,jobs,results,process,async))
;
return ((function (switch__19513__auto__,c__19569__auto___32924,jobs,results,process,async){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_32824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32824[(0)] = state_machine__19514__auto__);

(statearr_32824[(1)] = (1));

return statearr_32824;
});
var state_machine__19514__auto____1 = (function (state_32809){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_32809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e32825){if((e32825 instanceof Object)){
var ex__19517__auto__ = e32825;
var statearr_32826_32931 = state_32809;
(statearr_32826_32931[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32932 = state_32809;
state_32809 = G__32932;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_32809){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_32809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___32924,jobs,results,process,async))
})();
var state__19571__auto__ = (function (){var statearr_32827 = f__19570__auto__.call(null);
(statearr_32827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___32924);

return statearr_32827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___32924,jobs,results,process,async))
);


var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__,jobs,results,process,async){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__,jobs,results,process,async){
return (function (state_32865){
var state_val_32866 = (state_32865[(1)]);
if((state_val_32866 === (7))){
var inst_32861 = (state_32865[(2)]);
var state_32865__$1 = state_32865;
var statearr_32867_32933 = state_32865__$1;
(statearr_32867_32933[(2)] = inst_32861);

(statearr_32867_32933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (20))){
var state_32865__$1 = state_32865;
var statearr_32868_32934 = state_32865__$1;
(statearr_32868_32934[(2)] = null);

(statearr_32868_32934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (1))){
var state_32865__$1 = state_32865;
var statearr_32869_32935 = state_32865__$1;
(statearr_32869_32935[(2)] = null);

(statearr_32869_32935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (4))){
var inst_32830 = (state_32865[(7)]);
var inst_32830__$1 = (state_32865[(2)]);
var inst_32831 = (inst_32830__$1 == null);
var state_32865__$1 = (function (){var statearr_32870 = state_32865;
(statearr_32870[(7)] = inst_32830__$1);

return statearr_32870;
})();
if(cljs.core.truth_(inst_32831)){
var statearr_32871_32936 = state_32865__$1;
(statearr_32871_32936[(1)] = (5));

} else {
var statearr_32872_32937 = state_32865__$1;
(statearr_32872_32937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (15))){
var inst_32843 = (state_32865[(8)]);
var state_32865__$1 = state_32865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32865__$1,(18),to,inst_32843);
} else {
if((state_val_32866 === (21))){
var inst_32856 = (state_32865[(2)]);
var state_32865__$1 = state_32865;
var statearr_32873_32938 = state_32865__$1;
(statearr_32873_32938[(2)] = inst_32856);

(statearr_32873_32938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (13))){
var inst_32858 = (state_32865[(2)]);
var state_32865__$1 = (function (){var statearr_32874 = state_32865;
(statearr_32874[(9)] = inst_32858);

return statearr_32874;
})();
var statearr_32875_32939 = state_32865__$1;
(statearr_32875_32939[(2)] = null);

(statearr_32875_32939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (6))){
var inst_32830 = (state_32865[(7)]);
var state_32865__$1 = state_32865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32865__$1,(11),inst_32830);
} else {
if((state_val_32866 === (17))){
var inst_32851 = (state_32865[(2)]);
var state_32865__$1 = state_32865;
if(cljs.core.truth_(inst_32851)){
var statearr_32876_32940 = state_32865__$1;
(statearr_32876_32940[(1)] = (19));

} else {
var statearr_32877_32941 = state_32865__$1;
(statearr_32877_32941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (3))){
var inst_32863 = (state_32865[(2)]);
var state_32865__$1 = state_32865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32865__$1,inst_32863);
} else {
if((state_val_32866 === (12))){
var inst_32840 = (state_32865[(10)]);
var state_32865__$1 = state_32865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32865__$1,(14),inst_32840);
} else {
if((state_val_32866 === (2))){
var state_32865__$1 = state_32865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32865__$1,(4),results);
} else {
if((state_val_32866 === (19))){
var state_32865__$1 = state_32865;
var statearr_32878_32942 = state_32865__$1;
(statearr_32878_32942[(2)] = null);

(statearr_32878_32942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (11))){
var inst_32840 = (state_32865[(2)]);
var state_32865__$1 = (function (){var statearr_32879 = state_32865;
(statearr_32879[(10)] = inst_32840);

return statearr_32879;
})();
var statearr_32880_32943 = state_32865__$1;
(statearr_32880_32943[(2)] = null);

(statearr_32880_32943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (9))){
var state_32865__$1 = state_32865;
var statearr_32881_32944 = state_32865__$1;
(statearr_32881_32944[(2)] = null);

(statearr_32881_32944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (5))){
var state_32865__$1 = state_32865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32882_32945 = state_32865__$1;
(statearr_32882_32945[(1)] = (8));

} else {
var statearr_32883_32946 = state_32865__$1;
(statearr_32883_32946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (14))){
var inst_32843 = (state_32865[(8)]);
var inst_32845 = (state_32865[(11)]);
var inst_32843__$1 = (state_32865[(2)]);
var inst_32844 = (inst_32843__$1 == null);
var inst_32845__$1 = cljs.core.not.call(null,inst_32844);
var state_32865__$1 = (function (){var statearr_32884 = state_32865;
(statearr_32884[(8)] = inst_32843__$1);

(statearr_32884[(11)] = inst_32845__$1);

return statearr_32884;
})();
if(inst_32845__$1){
var statearr_32885_32947 = state_32865__$1;
(statearr_32885_32947[(1)] = (15));

} else {
var statearr_32886_32948 = state_32865__$1;
(statearr_32886_32948[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (16))){
var inst_32845 = (state_32865[(11)]);
var state_32865__$1 = state_32865;
var statearr_32887_32949 = state_32865__$1;
(statearr_32887_32949[(2)] = inst_32845);

(statearr_32887_32949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (10))){
var inst_32837 = (state_32865[(2)]);
var state_32865__$1 = state_32865;
var statearr_32888_32950 = state_32865__$1;
(statearr_32888_32950[(2)] = inst_32837);

(statearr_32888_32950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (18))){
var inst_32848 = (state_32865[(2)]);
var state_32865__$1 = state_32865;
var statearr_32889_32951 = state_32865__$1;
(statearr_32889_32951[(2)] = inst_32848);

(statearr_32889_32951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (8))){
var inst_32834 = cljs.core.async.close_BANG_.call(null,to);
var state_32865__$1 = state_32865;
var statearr_32890_32952 = state_32865__$1;
(statearr_32890_32952[(2)] = inst_32834);

(statearr_32890_32952[(1)] = (10));


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
});})(c__19569__auto__,jobs,results,process,async))
;
return ((function (switch__19513__auto__,c__19569__auto__,jobs,results,process,async){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_32894 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32894[(0)] = state_machine__19514__auto__);

(statearr_32894[(1)] = (1));

return statearr_32894;
});
var state_machine__19514__auto____1 = (function (state_32865){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_32865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e32895){if((e32895 instanceof Object)){
var ex__19517__auto__ = e32895;
var statearr_32896_32953 = state_32865;
(statearr_32896_32953[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32954 = state_32865;
state_32865 = G__32954;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_32865){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_32865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__,jobs,results,process,async))
})();
var state__19571__auto__ = (function (){var statearr_32897 = f__19570__auto__.call(null);
(statearr_32897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_32897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__,jobs,results,process,async))
);

return c__19569__auto__;
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
var c__19569__auto___33055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___33055,tc,fc){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___33055,tc,fc){
return (function (state_33030){
var state_val_33031 = (state_33030[(1)]);
if((state_val_33031 === (7))){
var inst_33026 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33032_33056 = state_33030__$1;
(statearr_33032_33056[(2)] = inst_33026);

(statearr_33032_33056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (1))){
var state_33030__$1 = state_33030;
var statearr_33033_33057 = state_33030__$1;
(statearr_33033_33057[(2)] = null);

(statearr_33033_33057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (4))){
var inst_33007 = (state_33030[(7)]);
var inst_33007__$1 = (state_33030[(2)]);
var inst_33008 = (inst_33007__$1 == null);
var state_33030__$1 = (function (){var statearr_33034 = state_33030;
(statearr_33034[(7)] = inst_33007__$1);

return statearr_33034;
})();
if(cljs.core.truth_(inst_33008)){
var statearr_33035_33058 = state_33030__$1;
(statearr_33035_33058[(1)] = (5));

} else {
var statearr_33036_33059 = state_33030__$1;
(statearr_33036_33059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (13))){
var state_33030__$1 = state_33030;
var statearr_33037_33060 = state_33030__$1;
(statearr_33037_33060[(2)] = null);

(statearr_33037_33060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (6))){
var inst_33007 = (state_33030[(7)]);
var inst_33013 = p.call(null,inst_33007);
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_33013)){
var statearr_33038_33061 = state_33030__$1;
(statearr_33038_33061[(1)] = (9));

} else {
var statearr_33039_33062 = state_33030__$1;
(statearr_33039_33062[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (3))){
var inst_33028 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33030__$1,inst_33028);
} else {
if((state_val_33031 === (12))){
var state_33030__$1 = state_33030;
var statearr_33040_33063 = state_33030__$1;
(statearr_33040_33063[(2)] = null);

(statearr_33040_33063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (2))){
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33030__$1,(4),ch);
} else {
if((state_val_33031 === (11))){
var inst_33007 = (state_33030[(7)]);
var inst_33017 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33030__$1,(8),inst_33017,inst_33007);
} else {
if((state_val_33031 === (9))){
var state_33030__$1 = state_33030;
var statearr_33041_33064 = state_33030__$1;
(statearr_33041_33064[(2)] = tc);

(statearr_33041_33064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (5))){
var inst_33010 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33011 = cljs.core.async.close_BANG_.call(null,fc);
var state_33030__$1 = (function (){var statearr_33042 = state_33030;
(statearr_33042[(8)] = inst_33010);

return statearr_33042;
})();
var statearr_33043_33065 = state_33030__$1;
(statearr_33043_33065[(2)] = inst_33011);

(statearr_33043_33065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (14))){
var inst_33024 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33044_33066 = state_33030__$1;
(statearr_33044_33066[(2)] = inst_33024);

(statearr_33044_33066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (10))){
var state_33030__$1 = state_33030;
var statearr_33045_33067 = state_33030__$1;
(statearr_33045_33067[(2)] = fc);

(statearr_33045_33067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (8))){
var inst_33019 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_33019)){
var statearr_33046_33068 = state_33030__$1;
(statearr_33046_33068[(1)] = (12));

} else {
var statearr_33047_33069 = state_33030__$1;
(statearr_33047_33069[(1)] = (13));

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
});})(c__19569__auto___33055,tc,fc))
;
return ((function (switch__19513__auto__,c__19569__auto___33055,tc,fc){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_33051 = [null,null,null,null,null,null,null,null,null];
(statearr_33051[(0)] = state_machine__19514__auto__);

(statearr_33051[(1)] = (1));

return statearr_33051;
});
var state_machine__19514__auto____1 = (function (state_33030){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_33030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e33052){if((e33052 instanceof Object)){
var ex__19517__auto__ = e33052;
var statearr_33053_33070 = state_33030;
(statearr_33053_33070[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33071 = state_33030;
state_33030 = G__33071;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_33030){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_33030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___33055,tc,fc))
})();
var state__19571__auto__ = (function (){var statearr_33054 = f__19570__auto__.call(null);
(statearr_33054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___33055);

return statearr_33054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___33055,tc,fc))
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
var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__){
return (function (state_33118){
var state_val_33119 = (state_33118[(1)]);
if((state_val_33119 === (7))){
var inst_33114 = (state_33118[(2)]);
var state_33118__$1 = state_33118;
var statearr_33120_33136 = state_33118__$1;
(statearr_33120_33136[(2)] = inst_33114);

(statearr_33120_33136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (6))){
var inst_33104 = (state_33118[(7)]);
var inst_33107 = (state_33118[(8)]);
var inst_33111 = f.call(null,inst_33104,inst_33107);
var inst_33104__$1 = inst_33111;
var state_33118__$1 = (function (){var statearr_33121 = state_33118;
(statearr_33121[(7)] = inst_33104__$1);

return statearr_33121;
})();
var statearr_33122_33137 = state_33118__$1;
(statearr_33122_33137[(2)] = null);

(statearr_33122_33137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (5))){
var inst_33104 = (state_33118[(7)]);
var state_33118__$1 = state_33118;
var statearr_33123_33138 = state_33118__$1;
(statearr_33123_33138[(2)] = inst_33104);

(statearr_33123_33138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (4))){
var inst_33107 = (state_33118[(8)]);
var inst_33107__$1 = (state_33118[(2)]);
var inst_33108 = (inst_33107__$1 == null);
var state_33118__$1 = (function (){var statearr_33124 = state_33118;
(statearr_33124[(8)] = inst_33107__$1);

return statearr_33124;
})();
if(cljs.core.truth_(inst_33108)){
var statearr_33125_33139 = state_33118__$1;
(statearr_33125_33139[(1)] = (5));

} else {
var statearr_33126_33140 = state_33118__$1;
(statearr_33126_33140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (3))){
var inst_33116 = (state_33118[(2)]);
var state_33118__$1 = state_33118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33118__$1,inst_33116);
} else {
if((state_val_33119 === (2))){
var state_33118__$1 = state_33118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33118__$1,(4),ch);
} else {
if((state_val_33119 === (1))){
var inst_33104 = init;
var state_33118__$1 = (function (){var statearr_33127 = state_33118;
(statearr_33127[(7)] = inst_33104);

return statearr_33127;
})();
var statearr_33128_33141 = state_33118__$1;
(statearr_33128_33141[(2)] = null);

(statearr_33128_33141[(1)] = (2));


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
});})(c__19569__auto__))
;
return ((function (switch__19513__auto__,c__19569__auto__){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_33132 = [null,null,null,null,null,null,null,null,null];
(statearr_33132[(0)] = state_machine__19514__auto__);

(statearr_33132[(1)] = (1));

return statearr_33132;
});
var state_machine__19514__auto____1 = (function (state_33118){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_33118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e33133){if((e33133 instanceof Object)){
var ex__19517__auto__ = e33133;
var statearr_33134_33142 = state_33118;
(statearr_33134_33142[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33143 = state_33118;
state_33118 = G__33143;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_33118){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_33118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__))
})();
var state__19571__auto__ = (function (){var statearr_33135 = f__19570__auto__.call(null);
(statearr_33135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_33135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__))
);

return c__19569__auto__;
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
var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__){
return (function (state_33217){
var state_val_33218 = (state_33217[(1)]);
if((state_val_33218 === (7))){
var inst_33199 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
var statearr_33219_33242 = state_33217__$1;
(statearr_33219_33242[(2)] = inst_33199);

(statearr_33219_33242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (1))){
var inst_33193 = cljs.core.seq.call(null,coll);
var inst_33194 = inst_33193;
var state_33217__$1 = (function (){var statearr_33220 = state_33217;
(statearr_33220[(7)] = inst_33194);

return statearr_33220;
})();
var statearr_33221_33243 = state_33217__$1;
(statearr_33221_33243[(2)] = null);

(statearr_33221_33243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (4))){
var inst_33194 = (state_33217[(7)]);
var inst_33197 = cljs.core.first.call(null,inst_33194);
var state_33217__$1 = state_33217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33217__$1,(7),ch,inst_33197);
} else {
if((state_val_33218 === (13))){
var inst_33211 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
var statearr_33222_33244 = state_33217__$1;
(statearr_33222_33244[(2)] = inst_33211);

(statearr_33222_33244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (6))){
var inst_33202 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
if(cljs.core.truth_(inst_33202)){
var statearr_33223_33245 = state_33217__$1;
(statearr_33223_33245[(1)] = (8));

} else {
var statearr_33224_33246 = state_33217__$1;
(statearr_33224_33246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (3))){
var inst_33215 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33217__$1,inst_33215);
} else {
if((state_val_33218 === (12))){
var state_33217__$1 = state_33217;
var statearr_33225_33247 = state_33217__$1;
(statearr_33225_33247[(2)] = null);

(statearr_33225_33247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (2))){
var inst_33194 = (state_33217[(7)]);
var state_33217__$1 = state_33217;
if(cljs.core.truth_(inst_33194)){
var statearr_33226_33248 = state_33217__$1;
(statearr_33226_33248[(1)] = (4));

} else {
var statearr_33227_33249 = state_33217__$1;
(statearr_33227_33249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (11))){
var inst_33208 = cljs.core.async.close_BANG_.call(null,ch);
var state_33217__$1 = state_33217;
var statearr_33228_33250 = state_33217__$1;
(statearr_33228_33250[(2)] = inst_33208);

(statearr_33228_33250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (9))){
var state_33217__$1 = state_33217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33229_33251 = state_33217__$1;
(statearr_33229_33251[(1)] = (11));

} else {
var statearr_33230_33252 = state_33217__$1;
(statearr_33230_33252[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (5))){
var inst_33194 = (state_33217[(7)]);
var state_33217__$1 = state_33217;
var statearr_33231_33253 = state_33217__$1;
(statearr_33231_33253[(2)] = inst_33194);

(statearr_33231_33253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (10))){
var inst_33213 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
var statearr_33232_33254 = state_33217__$1;
(statearr_33232_33254[(2)] = inst_33213);

(statearr_33232_33254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (8))){
var inst_33194 = (state_33217[(7)]);
var inst_33204 = cljs.core.next.call(null,inst_33194);
var inst_33194__$1 = inst_33204;
var state_33217__$1 = (function (){var statearr_33233 = state_33217;
(statearr_33233[(7)] = inst_33194__$1);

return statearr_33233;
})();
var statearr_33234_33255 = state_33217__$1;
(statearr_33234_33255[(2)] = null);

(statearr_33234_33255[(1)] = (2));


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
});})(c__19569__auto__))
;
return ((function (switch__19513__auto__,c__19569__auto__){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_33238 = [null,null,null,null,null,null,null,null];
(statearr_33238[(0)] = state_machine__19514__auto__);

(statearr_33238[(1)] = (1));

return statearr_33238;
});
var state_machine__19514__auto____1 = (function (state_33217){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_33217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e33239){if((e33239 instanceof Object)){
var ex__19517__auto__ = e33239;
var statearr_33240_33256 = state_33217;
(statearr_33240_33256[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33257 = state_33217;
state_33217 = G__33257;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_33217){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_33217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__))
})();
var state__19571__auto__ = (function (){var statearr_33241 = f__19570__auto__.call(null);
(statearr_33241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_33241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__))
);

return c__19569__auto__;
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

cljs.core.async.Mux = (function (){var obj33259 = {};
return obj33259;
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


cljs.core.async.Mult = (function (){var obj33261 = {};
return obj33261;
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
if(typeof cljs.core.async.t33483 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33483 = (function (cs,ch,mult,meta33484){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33484 = meta33484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33483.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t33483.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t33483.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t33483.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t33483.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t33483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33485){
var self__ = this;
var _33485__$1 = this;
return self__.meta33484;
});})(cs))
;

cljs.core.async.t33483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33485,meta33484__$1){
var self__ = this;
var _33485__$1 = this;
return (new cljs.core.async.t33483(self__.cs,self__.ch,self__.mult,meta33484__$1));
});})(cs))
;

cljs.core.async.t33483.cljs$lang$type = true;

cljs.core.async.t33483.cljs$lang$ctorStr = "cljs.core.async/t33483";

cljs.core.async.t33483.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t33483");
});})(cs))
;

cljs.core.async.__GT_t33483 = ((function (cs){
return (function __GT_t33483(cs__$1,ch__$1,mult__$1,meta33484){
return (new cljs.core.async.t33483(cs__$1,ch__$1,mult__$1,meta33484));
});})(cs))
;

}

return (new cljs.core.async.t33483(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19569__auto___33704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___33704,cs,m,dchan,dctr,done){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___33704,cs,m,dchan,dctr,done){
return (function (state_33616){
var state_val_33617 = (state_33616[(1)]);
if((state_val_33617 === (7))){
var inst_33612 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33618_33705 = state_33616__$1;
(statearr_33618_33705[(2)] = inst_33612);

(statearr_33618_33705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (20))){
var inst_33517 = (state_33616[(7)]);
var inst_33527 = cljs.core.first.call(null,inst_33517);
var inst_33528 = cljs.core.nth.call(null,inst_33527,(0),null);
var inst_33529 = cljs.core.nth.call(null,inst_33527,(1),null);
var state_33616__$1 = (function (){var statearr_33619 = state_33616;
(statearr_33619[(8)] = inst_33528);

return statearr_33619;
})();
if(cljs.core.truth_(inst_33529)){
var statearr_33620_33706 = state_33616__$1;
(statearr_33620_33706[(1)] = (22));

} else {
var statearr_33621_33707 = state_33616__$1;
(statearr_33621_33707[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (27))){
var inst_33488 = (state_33616[(9)]);
var inst_33564 = (state_33616[(10)]);
var inst_33559 = (state_33616[(11)]);
var inst_33557 = (state_33616[(12)]);
var inst_33564__$1 = cljs.core._nth.call(null,inst_33557,inst_33559);
var inst_33565 = cljs.core.async.put_BANG_.call(null,inst_33564__$1,inst_33488,done);
var state_33616__$1 = (function (){var statearr_33622 = state_33616;
(statearr_33622[(10)] = inst_33564__$1);

return statearr_33622;
})();
if(cljs.core.truth_(inst_33565)){
var statearr_33623_33708 = state_33616__$1;
(statearr_33623_33708[(1)] = (30));

} else {
var statearr_33624_33709 = state_33616__$1;
(statearr_33624_33709[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (1))){
var state_33616__$1 = state_33616;
var statearr_33625_33710 = state_33616__$1;
(statearr_33625_33710[(2)] = null);

(statearr_33625_33710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (24))){
var inst_33517 = (state_33616[(7)]);
var inst_33534 = (state_33616[(2)]);
var inst_33535 = cljs.core.next.call(null,inst_33517);
var inst_33497 = inst_33535;
var inst_33498 = null;
var inst_33499 = (0);
var inst_33500 = (0);
var state_33616__$1 = (function (){var statearr_33626 = state_33616;
(statearr_33626[(13)] = inst_33500);

(statearr_33626[(14)] = inst_33534);

(statearr_33626[(15)] = inst_33497);

(statearr_33626[(16)] = inst_33499);

(statearr_33626[(17)] = inst_33498);

return statearr_33626;
})();
var statearr_33627_33711 = state_33616__$1;
(statearr_33627_33711[(2)] = null);

(statearr_33627_33711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (39))){
var state_33616__$1 = state_33616;
var statearr_33631_33712 = state_33616__$1;
(statearr_33631_33712[(2)] = null);

(statearr_33631_33712[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (4))){
var inst_33488 = (state_33616[(9)]);
var inst_33488__$1 = (state_33616[(2)]);
var inst_33489 = (inst_33488__$1 == null);
var state_33616__$1 = (function (){var statearr_33632 = state_33616;
(statearr_33632[(9)] = inst_33488__$1);

return statearr_33632;
})();
if(cljs.core.truth_(inst_33489)){
var statearr_33633_33713 = state_33616__$1;
(statearr_33633_33713[(1)] = (5));

} else {
var statearr_33634_33714 = state_33616__$1;
(statearr_33634_33714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (15))){
var inst_33500 = (state_33616[(13)]);
var inst_33497 = (state_33616[(15)]);
var inst_33499 = (state_33616[(16)]);
var inst_33498 = (state_33616[(17)]);
var inst_33513 = (state_33616[(2)]);
var inst_33514 = (inst_33500 + (1));
var tmp33628 = inst_33497;
var tmp33629 = inst_33499;
var tmp33630 = inst_33498;
var inst_33497__$1 = tmp33628;
var inst_33498__$1 = tmp33630;
var inst_33499__$1 = tmp33629;
var inst_33500__$1 = inst_33514;
var state_33616__$1 = (function (){var statearr_33635 = state_33616;
(statearr_33635[(18)] = inst_33513);

(statearr_33635[(13)] = inst_33500__$1);

(statearr_33635[(15)] = inst_33497__$1);

(statearr_33635[(16)] = inst_33499__$1);

(statearr_33635[(17)] = inst_33498__$1);

return statearr_33635;
})();
var statearr_33636_33715 = state_33616__$1;
(statearr_33636_33715[(2)] = null);

(statearr_33636_33715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (21))){
var inst_33538 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33640_33716 = state_33616__$1;
(statearr_33640_33716[(2)] = inst_33538);

(statearr_33640_33716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (31))){
var inst_33564 = (state_33616[(10)]);
var inst_33568 = done.call(null,null);
var inst_33569 = cljs.core.async.untap_STAR_.call(null,m,inst_33564);
var state_33616__$1 = (function (){var statearr_33641 = state_33616;
(statearr_33641[(19)] = inst_33568);

return statearr_33641;
})();
var statearr_33642_33717 = state_33616__$1;
(statearr_33642_33717[(2)] = inst_33569);

(statearr_33642_33717[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (32))){
var inst_33558 = (state_33616[(20)]);
var inst_33559 = (state_33616[(11)]);
var inst_33557 = (state_33616[(12)]);
var inst_33556 = (state_33616[(21)]);
var inst_33571 = (state_33616[(2)]);
var inst_33572 = (inst_33559 + (1));
var tmp33637 = inst_33558;
var tmp33638 = inst_33557;
var tmp33639 = inst_33556;
var inst_33556__$1 = tmp33639;
var inst_33557__$1 = tmp33638;
var inst_33558__$1 = tmp33637;
var inst_33559__$1 = inst_33572;
var state_33616__$1 = (function (){var statearr_33643 = state_33616;
(statearr_33643[(22)] = inst_33571);

(statearr_33643[(20)] = inst_33558__$1);

(statearr_33643[(11)] = inst_33559__$1);

(statearr_33643[(12)] = inst_33557__$1);

(statearr_33643[(21)] = inst_33556__$1);

return statearr_33643;
})();
var statearr_33644_33718 = state_33616__$1;
(statearr_33644_33718[(2)] = null);

(statearr_33644_33718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (40))){
var inst_33584 = (state_33616[(23)]);
var inst_33588 = done.call(null,null);
var inst_33589 = cljs.core.async.untap_STAR_.call(null,m,inst_33584);
var state_33616__$1 = (function (){var statearr_33645 = state_33616;
(statearr_33645[(24)] = inst_33588);

return statearr_33645;
})();
var statearr_33646_33719 = state_33616__$1;
(statearr_33646_33719[(2)] = inst_33589);

(statearr_33646_33719[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (33))){
var inst_33575 = (state_33616[(25)]);
var inst_33577 = cljs.core.chunked_seq_QMARK_.call(null,inst_33575);
var state_33616__$1 = state_33616;
if(inst_33577){
var statearr_33647_33720 = state_33616__$1;
(statearr_33647_33720[(1)] = (36));

} else {
var statearr_33648_33721 = state_33616__$1;
(statearr_33648_33721[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (13))){
var inst_33507 = (state_33616[(26)]);
var inst_33510 = cljs.core.async.close_BANG_.call(null,inst_33507);
var state_33616__$1 = state_33616;
var statearr_33649_33722 = state_33616__$1;
(statearr_33649_33722[(2)] = inst_33510);

(statearr_33649_33722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (22))){
var inst_33528 = (state_33616[(8)]);
var inst_33531 = cljs.core.async.close_BANG_.call(null,inst_33528);
var state_33616__$1 = state_33616;
var statearr_33650_33723 = state_33616__$1;
(statearr_33650_33723[(2)] = inst_33531);

(statearr_33650_33723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (36))){
var inst_33575 = (state_33616[(25)]);
var inst_33579 = cljs.core.chunk_first.call(null,inst_33575);
var inst_33580 = cljs.core.chunk_rest.call(null,inst_33575);
var inst_33581 = cljs.core.count.call(null,inst_33579);
var inst_33556 = inst_33580;
var inst_33557 = inst_33579;
var inst_33558 = inst_33581;
var inst_33559 = (0);
var state_33616__$1 = (function (){var statearr_33651 = state_33616;
(statearr_33651[(20)] = inst_33558);

(statearr_33651[(11)] = inst_33559);

(statearr_33651[(12)] = inst_33557);

(statearr_33651[(21)] = inst_33556);

return statearr_33651;
})();
var statearr_33652_33724 = state_33616__$1;
(statearr_33652_33724[(2)] = null);

(statearr_33652_33724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (41))){
var inst_33575 = (state_33616[(25)]);
var inst_33591 = (state_33616[(2)]);
var inst_33592 = cljs.core.next.call(null,inst_33575);
var inst_33556 = inst_33592;
var inst_33557 = null;
var inst_33558 = (0);
var inst_33559 = (0);
var state_33616__$1 = (function (){var statearr_33653 = state_33616;
(statearr_33653[(20)] = inst_33558);

(statearr_33653[(27)] = inst_33591);

(statearr_33653[(11)] = inst_33559);

(statearr_33653[(12)] = inst_33557);

(statearr_33653[(21)] = inst_33556);

return statearr_33653;
})();
var statearr_33654_33725 = state_33616__$1;
(statearr_33654_33725[(2)] = null);

(statearr_33654_33725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (43))){
var state_33616__$1 = state_33616;
var statearr_33655_33726 = state_33616__$1;
(statearr_33655_33726[(2)] = null);

(statearr_33655_33726[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (29))){
var inst_33600 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33656_33727 = state_33616__$1;
(statearr_33656_33727[(2)] = inst_33600);

(statearr_33656_33727[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (44))){
var inst_33609 = (state_33616[(2)]);
var state_33616__$1 = (function (){var statearr_33657 = state_33616;
(statearr_33657[(28)] = inst_33609);

return statearr_33657;
})();
var statearr_33658_33728 = state_33616__$1;
(statearr_33658_33728[(2)] = null);

(statearr_33658_33728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (6))){
var inst_33548 = (state_33616[(29)]);
var inst_33547 = cljs.core.deref.call(null,cs);
var inst_33548__$1 = cljs.core.keys.call(null,inst_33547);
var inst_33549 = cljs.core.count.call(null,inst_33548__$1);
var inst_33550 = cljs.core.reset_BANG_.call(null,dctr,inst_33549);
var inst_33555 = cljs.core.seq.call(null,inst_33548__$1);
var inst_33556 = inst_33555;
var inst_33557 = null;
var inst_33558 = (0);
var inst_33559 = (0);
var state_33616__$1 = (function (){var statearr_33659 = state_33616;
(statearr_33659[(29)] = inst_33548__$1);

(statearr_33659[(30)] = inst_33550);

(statearr_33659[(20)] = inst_33558);

(statearr_33659[(11)] = inst_33559);

(statearr_33659[(12)] = inst_33557);

(statearr_33659[(21)] = inst_33556);

return statearr_33659;
})();
var statearr_33660_33729 = state_33616__$1;
(statearr_33660_33729[(2)] = null);

(statearr_33660_33729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (28))){
var inst_33575 = (state_33616[(25)]);
var inst_33556 = (state_33616[(21)]);
var inst_33575__$1 = cljs.core.seq.call(null,inst_33556);
var state_33616__$1 = (function (){var statearr_33661 = state_33616;
(statearr_33661[(25)] = inst_33575__$1);

return statearr_33661;
})();
if(inst_33575__$1){
var statearr_33662_33730 = state_33616__$1;
(statearr_33662_33730[(1)] = (33));

} else {
var statearr_33663_33731 = state_33616__$1;
(statearr_33663_33731[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (25))){
var inst_33558 = (state_33616[(20)]);
var inst_33559 = (state_33616[(11)]);
var inst_33561 = (inst_33559 < inst_33558);
var inst_33562 = inst_33561;
var state_33616__$1 = state_33616;
if(cljs.core.truth_(inst_33562)){
var statearr_33664_33732 = state_33616__$1;
(statearr_33664_33732[(1)] = (27));

} else {
var statearr_33665_33733 = state_33616__$1;
(statearr_33665_33733[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (34))){
var state_33616__$1 = state_33616;
var statearr_33666_33734 = state_33616__$1;
(statearr_33666_33734[(2)] = null);

(statearr_33666_33734[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (17))){
var state_33616__$1 = state_33616;
var statearr_33667_33735 = state_33616__$1;
(statearr_33667_33735[(2)] = null);

(statearr_33667_33735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (3))){
var inst_33614 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33616__$1,inst_33614);
} else {
if((state_val_33617 === (12))){
var inst_33543 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33668_33736 = state_33616__$1;
(statearr_33668_33736[(2)] = inst_33543);

(statearr_33668_33736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (2))){
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33616__$1,(4),ch);
} else {
if((state_val_33617 === (23))){
var state_33616__$1 = state_33616;
var statearr_33669_33737 = state_33616__$1;
(statearr_33669_33737[(2)] = null);

(statearr_33669_33737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (35))){
var inst_33598 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33670_33738 = state_33616__$1;
(statearr_33670_33738[(2)] = inst_33598);

(statearr_33670_33738[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (19))){
var inst_33517 = (state_33616[(7)]);
var inst_33521 = cljs.core.chunk_first.call(null,inst_33517);
var inst_33522 = cljs.core.chunk_rest.call(null,inst_33517);
var inst_33523 = cljs.core.count.call(null,inst_33521);
var inst_33497 = inst_33522;
var inst_33498 = inst_33521;
var inst_33499 = inst_33523;
var inst_33500 = (0);
var state_33616__$1 = (function (){var statearr_33671 = state_33616;
(statearr_33671[(13)] = inst_33500);

(statearr_33671[(15)] = inst_33497);

(statearr_33671[(16)] = inst_33499);

(statearr_33671[(17)] = inst_33498);

return statearr_33671;
})();
var statearr_33672_33739 = state_33616__$1;
(statearr_33672_33739[(2)] = null);

(statearr_33672_33739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (11))){
var inst_33517 = (state_33616[(7)]);
var inst_33497 = (state_33616[(15)]);
var inst_33517__$1 = cljs.core.seq.call(null,inst_33497);
var state_33616__$1 = (function (){var statearr_33673 = state_33616;
(statearr_33673[(7)] = inst_33517__$1);

return statearr_33673;
})();
if(inst_33517__$1){
var statearr_33674_33740 = state_33616__$1;
(statearr_33674_33740[(1)] = (16));

} else {
var statearr_33675_33741 = state_33616__$1;
(statearr_33675_33741[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (9))){
var inst_33545 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33676_33742 = state_33616__$1;
(statearr_33676_33742[(2)] = inst_33545);

(statearr_33676_33742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (5))){
var inst_33495 = cljs.core.deref.call(null,cs);
var inst_33496 = cljs.core.seq.call(null,inst_33495);
var inst_33497 = inst_33496;
var inst_33498 = null;
var inst_33499 = (0);
var inst_33500 = (0);
var state_33616__$1 = (function (){var statearr_33677 = state_33616;
(statearr_33677[(13)] = inst_33500);

(statearr_33677[(15)] = inst_33497);

(statearr_33677[(16)] = inst_33499);

(statearr_33677[(17)] = inst_33498);

return statearr_33677;
})();
var statearr_33678_33743 = state_33616__$1;
(statearr_33678_33743[(2)] = null);

(statearr_33678_33743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (14))){
var state_33616__$1 = state_33616;
var statearr_33679_33744 = state_33616__$1;
(statearr_33679_33744[(2)] = null);

(statearr_33679_33744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (45))){
var inst_33606 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33680_33745 = state_33616__$1;
(statearr_33680_33745[(2)] = inst_33606);

(statearr_33680_33745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (26))){
var inst_33548 = (state_33616[(29)]);
var inst_33602 = (state_33616[(2)]);
var inst_33603 = cljs.core.seq.call(null,inst_33548);
var state_33616__$1 = (function (){var statearr_33681 = state_33616;
(statearr_33681[(31)] = inst_33602);

return statearr_33681;
})();
if(inst_33603){
var statearr_33682_33746 = state_33616__$1;
(statearr_33682_33746[(1)] = (42));

} else {
var statearr_33683_33747 = state_33616__$1;
(statearr_33683_33747[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (16))){
var inst_33517 = (state_33616[(7)]);
var inst_33519 = cljs.core.chunked_seq_QMARK_.call(null,inst_33517);
var state_33616__$1 = state_33616;
if(inst_33519){
var statearr_33684_33748 = state_33616__$1;
(statearr_33684_33748[(1)] = (19));

} else {
var statearr_33685_33749 = state_33616__$1;
(statearr_33685_33749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (38))){
var inst_33595 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33686_33750 = state_33616__$1;
(statearr_33686_33750[(2)] = inst_33595);

(statearr_33686_33750[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (30))){
var state_33616__$1 = state_33616;
var statearr_33687_33751 = state_33616__$1;
(statearr_33687_33751[(2)] = null);

(statearr_33687_33751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (10))){
var inst_33500 = (state_33616[(13)]);
var inst_33498 = (state_33616[(17)]);
var inst_33506 = cljs.core._nth.call(null,inst_33498,inst_33500);
var inst_33507 = cljs.core.nth.call(null,inst_33506,(0),null);
var inst_33508 = cljs.core.nth.call(null,inst_33506,(1),null);
var state_33616__$1 = (function (){var statearr_33688 = state_33616;
(statearr_33688[(26)] = inst_33507);

return statearr_33688;
})();
if(cljs.core.truth_(inst_33508)){
var statearr_33689_33752 = state_33616__$1;
(statearr_33689_33752[(1)] = (13));

} else {
var statearr_33690_33753 = state_33616__$1;
(statearr_33690_33753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (18))){
var inst_33541 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33691_33754 = state_33616__$1;
(statearr_33691_33754[(2)] = inst_33541);

(statearr_33691_33754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (42))){
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33616__$1,(45),dchan);
} else {
if((state_val_33617 === (37))){
var inst_33584 = (state_33616[(23)]);
var inst_33488 = (state_33616[(9)]);
var inst_33575 = (state_33616[(25)]);
var inst_33584__$1 = cljs.core.first.call(null,inst_33575);
var inst_33585 = cljs.core.async.put_BANG_.call(null,inst_33584__$1,inst_33488,done);
var state_33616__$1 = (function (){var statearr_33692 = state_33616;
(statearr_33692[(23)] = inst_33584__$1);

return statearr_33692;
})();
if(cljs.core.truth_(inst_33585)){
var statearr_33693_33755 = state_33616__$1;
(statearr_33693_33755[(1)] = (39));

} else {
var statearr_33694_33756 = state_33616__$1;
(statearr_33694_33756[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (8))){
var inst_33500 = (state_33616[(13)]);
var inst_33499 = (state_33616[(16)]);
var inst_33502 = (inst_33500 < inst_33499);
var inst_33503 = inst_33502;
var state_33616__$1 = state_33616;
if(cljs.core.truth_(inst_33503)){
var statearr_33695_33757 = state_33616__$1;
(statearr_33695_33757[(1)] = (10));

} else {
var statearr_33696_33758 = state_33616__$1;
(statearr_33696_33758[(1)] = (11));

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
});})(c__19569__auto___33704,cs,m,dchan,dctr,done))
;
return ((function (switch__19513__auto__,c__19569__auto___33704,cs,m,dchan,dctr,done){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_33700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33700[(0)] = state_machine__19514__auto__);

(statearr_33700[(1)] = (1));

return statearr_33700;
});
var state_machine__19514__auto____1 = (function (state_33616){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_33616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e33701){if((e33701 instanceof Object)){
var ex__19517__auto__ = e33701;
var statearr_33702_33759 = state_33616;
(statearr_33702_33759[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33760 = state_33616;
state_33616 = G__33760;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_33616){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_33616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___33704,cs,m,dchan,dctr,done))
})();
var state__19571__auto__ = (function (){var statearr_33703 = f__19570__auto__.call(null);
(statearr_33703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___33704);

return statearr_33703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___33704,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj33762 = {};
return obj33762;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__33763){
var map__33768 = p__33763;
var map__33768__$1 = ((cljs.core.seq_QMARK_.call(null,map__33768))?cljs.core.apply.call(null,cljs.core.hash_map,map__33768):map__33768);
var opts = map__33768__$1;
var statearr_33769_33772 = state;
(statearr_33769_33772[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__33768,map__33768__$1,opts){
return (function (val){
var statearr_33770_33773 = state;
(statearr_33770_33773[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33768,map__33768__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_33771_33774 = state;
(statearr_33771_33774[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__33763 = null;
if (arguments.length > 3) {
var G__33775__i = 0, G__33775__a = new Array(arguments.length -  3);
while (G__33775__i < G__33775__a.length) {G__33775__a[G__33775__i] = arguments[G__33775__i + 3]; ++G__33775__i;}
  p__33763 = new cljs.core.IndexedSeq(G__33775__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__33763);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__33776){
var state = cljs.core.first(arglist__33776);
arglist__33776 = cljs.core.next(arglist__33776);
var cont_block = cljs.core.first(arglist__33776);
arglist__33776 = cljs.core.next(arglist__33776);
var ports = cljs.core.first(arglist__33776);
var p__33763 = cljs.core.rest(arglist__33776);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__33763);
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
if(typeof cljs.core.async.t33896 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33896 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33897){
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
this.meta33897 = meta33897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33896.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t33896.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33896.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33896.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33896.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33896.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t33896.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33896.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33898){
var self__ = this;
var _33898__$1 = this;
return self__.meta33897;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33898,meta33897__$1){
var self__ = this;
var _33898__$1 = this;
return (new cljs.core.async.t33896(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33897__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33896.cljs$lang$type = true;

cljs.core.async.t33896.cljs$lang$ctorStr = "cljs.core.async/t33896";

cljs.core.async.t33896.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t33896");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t33896 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33896(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33897){
return (new cljs.core.async.t33896(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33897));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t33896(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19569__auto___34015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___34015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___34015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33968){
var state_val_33969 = (state_33968[(1)]);
if((state_val_33969 === (7))){
var inst_33912 = (state_33968[(7)]);
var inst_33917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33912);
var state_33968__$1 = state_33968;
var statearr_33970_34016 = state_33968__$1;
(statearr_33970_34016[(2)] = inst_33917);

(statearr_33970_34016[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (20))){
var inst_33927 = (state_33968[(8)]);
var state_33968__$1 = state_33968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33968__$1,(23),out,inst_33927);
} else {
if((state_val_33969 === (1))){
var inst_33902 = (state_33968[(9)]);
var inst_33902__$1 = calc_state.call(null);
var inst_33903 = cljs.core.seq_QMARK_.call(null,inst_33902__$1);
var state_33968__$1 = (function (){var statearr_33971 = state_33968;
(statearr_33971[(9)] = inst_33902__$1);

return statearr_33971;
})();
if(inst_33903){
var statearr_33972_34017 = state_33968__$1;
(statearr_33972_34017[(1)] = (2));

} else {
var statearr_33973_34018 = state_33968__$1;
(statearr_33973_34018[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (24))){
var inst_33920 = (state_33968[(10)]);
var inst_33912 = inst_33920;
var state_33968__$1 = (function (){var statearr_33974 = state_33968;
(statearr_33974[(7)] = inst_33912);

return statearr_33974;
})();
var statearr_33975_34019 = state_33968__$1;
(statearr_33975_34019[(2)] = null);

(statearr_33975_34019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (4))){
var inst_33902 = (state_33968[(9)]);
var inst_33908 = (state_33968[(2)]);
var inst_33909 = cljs.core.get.call(null,inst_33908,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33910 = cljs.core.get.call(null,inst_33908,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33911 = cljs.core.get.call(null,inst_33908,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33912 = inst_33902;
var state_33968__$1 = (function (){var statearr_33976 = state_33968;
(statearr_33976[(11)] = inst_33909);

(statearr_33976[(12)] = inst_33911);

(statearr_33976[(7)] = inst_33912);

(statearr_33976[(13)] = inst_33910);

return statearr_33976;
})();
var statearr_33977_34020 = state_33968__$1;
(statearr_33977_34020[(2)] = null);

(statearr_33977_34020[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (15))){
var state_33968__$1 = state_33968;
var statearr_33978_34021 = state_33968__$1;
(statearr_33978_34021[(2)] = null);

(statearr_33978_34021[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (21))){
var inst_33920 = (state_33968[(10)]);
var inst_33912 = inst_33920;
var state_33968__$1 = (function (){var statearr_33979 = state_33968;
(statearr_33979[(7)] = inst_33912);

return statearr_33979;
})();
var statearr_33980_34022 = state_33968__$1;
(statearr_33980_34022[(2)] = null);

(statearr_33980_34022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (13))){
var inst_33964 = (state_33968[(2)]);
var state_33968__$1 = state_33968;
var statearr_33981_34023 = state_33968__$1;
(statearr_33981_34023[(2)] = inst_33964);

(statearr_33981_34023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (22))){
var inst_33962 = (state_33968[(2)]);
var state_33968__$1 = state_33968;
var statearr_33982_34024 = state_33968__$1;
(statearr_33982_34024[(2)] = inst_33962);

(statearr_33982_34024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (6))){
var inst_33966 = (state_33968[(2)]);
var state_33968__$1 = state_33968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33968__$1,inst_33966);
} else {
if((state_val_33969 === (25))){
var state_33968__$1 = state_33968;
var statearr_33983_34025 = state_33968__$1;
(statearr_33983_34025[(2)] = null);

(statearr_33983_34025[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (17))){
var inst_33942 = (state_33968[(14)]);
var state_33968__$1 = state_33968;
var statearr_33984_34026 = state_33968__$1;
(statearr_33984_34026[(2)] = inst_33942);

(statearr_33984_34026[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (3))){
var inst_33902 = (state_33968[(9)]);
var state_33968__$1 = state_33968;
var statearr_33985_34027 = state_33968__$1;
(statearr_33985_34027[(2)] = inst_33902);

(statearr_33985_34027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (12))){
var inst_33942 = (state_33968[(14)]);
var inst_33923 = (state_33968[(15)]);
var inst_33928 = (state_33968[(16)]);
var inst_33942__$1 = inst_33923.call(null,inst_33928);
var state_33968__$1 = (function (){var statearr_33986 = state_33968;
(statearr_33986[(14)] = inst_33942__$1);

return statearr_33986;
})();
if(cljs.core.truth_(inst_33942__$1)){
var statearr_33987_34028 = state_33968__$1;
(statearr_33987_34028[(1)] = (17));

} else {
var statearr_33988_34029 = state_33968__$1;
(statearr_33988_34029[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (2))){
var inst_33902 = (state_33968[(9)]);
var inst_33905 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33902);
var state_33968__$1 = state_33968;
var statearr_33989_34030 = state_33968__$1;
(statearr_33989_34030[(2)] = inst_33905);

(statearr_33989_34030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (23))){
var inst_33953 = (state_33968[(2)]);
var state_33968__$1 = state_33968;
if(cljs.core.truth_(inst_33953)){
var statearr_33990_34031 = state_33968__$1;
(statearr_33990_34031[(1)] = (24));

} else {
var statearr_33991_34032 = state_33968__$1;
(statearr_33991_34032[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (19))){
var inst_33950 = (state_33968[(2)]);
var state_33968__$1 = state_33968;
if(cljs.core.truth_(inst_33950)){
var statearr_33992_34033 = state_33968__$1;
(statearr_33992_34033[(1)] = (20));

} else {
var statearr_33993_34034 = state_33968__$1;
(statearr_33993_34034[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (11))){
var inst_33927 = (state_33968[(8)]);
var inst_33933 = (inst_33927 == null);
var state_33968__$1 = state_33968;
if(cljs.core.truth_(inst_33933)){
var statearr_33994_34035 = state_33968__$1;
(statearr_33994_34035[(1)] = (14));

} else {
var statearr_33995_34036 = state_33968__$1;
(statearr_33995_34036[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (9))){
var inst_33920 = (state_33968[(10)]);
var inst_33920__$1 = (state_33968[(2)]);
var inst_33921 = cljs.core.get.call(null,inst_33920__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33922 = cljs.core.get.call(null,inst_33920__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33923 = cljs.core.get.call(null,inst_33920__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_33968__$1 = (function (){var statearr_33996 = state_33968;
(statearr_33996[(10)] = inst_33920__$1);

(statearr_33996[(15)] = inst_33923);

(statearr_33996[(17)] = inst_33922);

return statearr_33996;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33968__$1,(10),inst_33921);
} else {
if((state_val_33969 === (5))){
var inst_33912 = (state_33968[(7)]);
var inst_33915 = cljs.core.seq_QMARK_.call(null,inst_33912);
var state_33968__$1 = state_33968;
if(inst_33915){
var statearr_33997_34037 = state_33968__$1;
(statearr_33997_34037[(1)] = (7));

} else {
var statearr_33998_34038 = state_33968__$1;
(statearr_33998_34038[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (14))){
var inst_33928 = (state_33968[(16)]);
var inst_33935 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33928);
var state_33968__$1 = state_33968;
var statearr_33999_34039 = state_33968__$1;
(statearr_33999_34039[(2)] = inst_33935);

(statearr_33999_34039[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (26))){
var inst_33958 = (state_33968[(2)]);
var state_33968__$1 = state_33968;
var statearr_34000_34040 = state_33968__$1;
(statearr_34000_34040[(2)] = inst_33958);

(statearr_34000_34040[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (16))){
var inst_33938 = (state_33968[(2)]);
var inst_33939 = calc_state.call(null);
var inst_33912 = inst_33939;
var state_33968__$1 = (function (){var statearr_34001 = state_33968;
(statearr_34001[(18)] = inst_33938);

(statearr_34001[(7)] = inst_33912);

return statearr_34001;
})();
var statearr_34002_34041 = state_33968__$1;
(statearr_34002_34041[(2)] = null);

(statearr_34002_34041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (10))){
var inst_33927 = (state_33968[(8)]);
var inst_33928 = (state_33968[(16)]);
var inst_33926 = (state_33968[(2)]);
var inst_33927__$1 = cljs.core.nth.call(null,inst_33926,(0),null);
var inst_33928__$1 = cljs.core.nth.call(null,inst_33926,(1),null);
var inst_33929 = (inst_33927__$1 == null);
var inst_33930 = cljs.core._EQ_.call(null,inst_33928__$1,change);
var inst_33931 = (inst_33929) || (inst_33930);
var state_33968__$1 = (function (){var statearr_34003 = state_33968;
(statearr_34003[(8)] = inst_33927__$1);

(statearr_34003[(16)] = inst_33928__$1);

return statearr_34003;
})();
if(cljs.core.truth_(inst_33931)){
var statearr_34004_34042 = state_33968__$1;
(statearr_34004_34042[(1)] = (11));

} else {
var statearr_34005_34043 = state_33968__$1;
(statearr_34005_34043[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (18))){
var inst_33923 = (state_33968[(15)]);
var inst_33922 = (state_33968[(17)]);
var inst_33928 = (state_33968[(16)]);
var inst_33945 = cljs.core.empty_QMARK_.call(null,inst_33923);
var inst_33946 = inst_33922.call(null,inst_33928);
var inst_33947 = cljs.core.not.call(null,inst_33946);
var inst_33948 = (inst_33945) && (inst_33947);
var state_33968__$1 = state_33968;
var statearr_34006_34044 = state_33968__$1;
(statearr_34006_34044[(2)] = inst_33948);

(statearr_34006_34044[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (8))){
var inst_33912 = (state_33968[(7)]);
var state_33968__$1 = state_33968;
var statearr_34007_34045 = state_33968__$1;
(statearr_34007_34045[(2)] = inst_33912);

(statearr_34007_34045[(1)] = (9));


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
});})(c__19569__auto___34015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19513__auto__,c__19569__auto___34015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_34011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34011[(0)] = state_machine__19514__auto__);

(statearr_34011[(1)] = (1));

return statearr_34011;
});
var state_machine__19514__auto____1 = (function (state_33968){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_33968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e34012){if((e34012 instanceof Object)){
var ex__19517__auto__ = e34012;
var statearr_34013_34046 = state_33968;
(statearr_34013_34046[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34047 = state_33968;
state_33968 = G__34047;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_33968){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_33968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___34015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19571__auto__ = (function (){var statearr_34014 = f__19570__auto__.call(null);
(statearr_34014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___34015);

return statearr_34014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___34015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj34049 = {};
return obj34049;
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
return (function (p1__34050_SHARP_){
if(cljs.core.truth_(p1__34050_SHARP_.call(null,topic))){
return p1__34050_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34050_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t34173 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34173 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34174){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34174 = meta34174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34173.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t34173.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t34173.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t34173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t34173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t34173.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t34173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34175){
var self__ = this;
var _34175__$1 = this;
return self__.meta34174;
});})(mults,ensure_mult))
;

cljs.core.async.t34173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34175,meta34174__$1){
var self__ = this;
var _34175__$1 = this;
return (new cljs.core.async.t34173(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34174__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t34173.cljs$lang$type = true;

cljs.core.async.t34173.cljs$lang$ctorStr = "cljs.core.async/t34173";

cljs.core.async.t34173.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t34173");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t34173 = ((function (mults,ensure_mult){
return (function __GT_t34173(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34174){
return (new cljs.core.async.t34173(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34174));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t34173(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19569__auto___34295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___34295,mults,ensure_mult,p){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___34295,mults,ensure_mult,p){
return (function (state_34247){
var state_val_34248 = (state_34247[(1)]);
if((state_val_34248 === (7))){
var inst_34243 = (state_34247[(2)]);
var state_34247__$1 = state_34247;
var statearr_34249_34296 = state_34247__$1;
(statearr_34249_34296[(2)] = inst_34243);

(statearr_34249_34296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (20))){
var state_34247__$1 = state_34247;
var statearr_34250_34297 = state_34247__$1;
(statearr_34250_34297[(2)] = null);

(statearr_34250_34297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (1))){
var state_34247__$1 = state_34247;
var statearr_34251_34298 = state_34247__$1;
(statearr_34251_34298[(2)] = null);

(statearr_34251_34298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (24))){
var inst_34226 = (state_34247[(7)]);
var inst_34235 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34226);
var state_34247__$1 = state_34247;
var statearr_34252_34299 = state_34247__$1;
(statearr_34252_34299[(2)] = inst_34235);

(statearr_34252_34299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (4))){
var inst_34178 = (state_34247[(8)]);
var inst_34178__$1 = (state_34247[(2)]);
var inst_34179 = (inst_34178__$1 == null);
var state_34247__$1 = (function (){var statearr_34253 = state_34247;
(statearr_34253[(8)] = inst_34178__$1);

return statearr_34253;
})();
if(cljs.core.truth_(inst_34179)){
var statearr_34254_34300 = state_34247__$1;
(statearr_34254_34300[(1)] = (5));

} else {
var statearr_34255_34301 = state_34247__$1;
(statearr_34255_34301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (15))){
var inst_34220 = (state_34247[(2)]);
var state_34247__$1 = state_34247;
var statearr_34256_34302 = state_34247__$1;
(statearr_34256_34302[(2)] = inst_34220);

(statearr_34256_34302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (21))){
var inst_34240 = (state_34247[(2)]);
var state_34247__$1 = (function (){var statearr_34257 = state_34247;
(statearr_34257[(9)] = inst_34240);

return statearr_34257;
})();
var statearr_34258_34303 = state_34247__$1;
(statearr_34258_34303[(2)] = null);

(statearr_34258_34303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (13))){
var inst_34202 = (state_34247[(10)]);
var inst_34204 = cljs.core.chunked_seq_QMARK_.call(null,inst_34202);
var state_34247__$1 = state_34247;
if(inst_34204){
var statearr_34259_34304 = state_34247__$1;
(statearr_34259_34304[(1)] = (16));

} else {
var statearr_34260_34305 = state_34247__$1;
(statearr_34260_34305[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (22))){
var inst_34232 = (state_34247[(2)]);
var state_34247__$1 = state_34247;
if(cljs.core.truth_(inst_34232)){
var statearr_34261_34306 = state_34247__$1;
(statearr_34261_34306[(1)] = (23));

} else {
var statearr_34262_34307 = state_34247__$1;
(statearr_34262_34307[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (6))){
var inst_34178 = (state_34247[(8)]);
var inst_34226 = (state_34247[(7)]);
var inst_34228 = (state_34247[(11)]);
var inst_34226__$1 = topic_fn.call(null,inst_34178);
var inst_34227 = cljs.core.deref.call(null,mults);
var inst_34228__$1 = cljs.core.get.call(null,inst_34227,inst_34226__$1);
var state_34247__$1 = (function (){var statearr_34263 = state_34247;
(statearr_34263[(7)] = inst_34226__$1);

(statearr_34263[(11)] = inst_34228__$1);

return statearr_34263;
})();
if(cljs.core.truth_(inst_34228__$1)){
var statearr_34264_34308 = state_34247__$1;
(statearr_34264_34308[(1)] = (19));

} else {
var statearr_34265_34309 = state_34247__$1;
(statearr_34265_34309[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (25))){
var inst_34237 = (state_34247[(2)]);
var state_34247__$1 = state_34247;
var statearr_34266_34310 = state_34247__$1;
(statearr_34266_34310[(2)] = inst_34237);

(statearr_34266_34310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (17))){
var inst_34202 = (state_34247[(10)]);
var inst_34211 = cljs.core.first.call(null,inst_34202);
var inst_34212 = cljs.core.async.muxch_STAR_.call(null,inst_34211);
var inst_34213 = cljs.core.async.close_BANG_.call(null,inst_34212);
var inst_34214 = cljs.core.next.call(null,inst_34202);
var inst_34188 = inst_34214;
var inst_34189 = null;
var inst_34190 = (0);
var inst_34191 = (0);
var state_34247__$1 = (function (){var statearr_34267 = state_34247;
(statearr_34267[(12)] = inst_34190);

(statearr_34267[(13)] = inst_34213);

(statearr_34267[(14)] = inst_34188);

(statearr_34267[(15)] = inst_34189);

(statearr_34267[(16)] = inst_34191);

return statearr_34267;
})();
var statearr_34268_34311 = state_34247__$1;
(statearr_34268_34311[(2)] = null);

(statearr_34268_34311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (3))){
var inst_34245 = (state_34247[(2)]);
var state_34247__$1 = state_34247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34247__$1,inst_34245);
} else {
if((state_val_34248 === (12))){
var inst_34222 = (state_34247[(2)]);
var state_34247__$1 = state_34247;
var statearr_34269_34312 = state_34247__$1;
(statearr_34269_34312[(2)] = inst_34222);

(statearr_34269_34312[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (2))){
var state_34247__$1 = state_34247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34247__$1,(4),ch);
} else {
if((state_val_34248 === (23))){
var state_34247__$1 = state_34247;
var statearr_34270_34313 = state_34247__$1;
(statearr_34270_34313[(2)] = null);

(statearr_34270_34313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (19))){
var inst_34178 = (state_34247[(8)]);
var inst_34228 = (state_34247[(11)]);
var inst_34230 = cljs.core.async.muxch_STAR_.call(null,inst_34228);
var state_34247__$1 = state_34247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34247__$1,(22),inst_34230,inst_34178);
} else {
if((state_val_34248 === (11))){
var inst_34202 = (state_34247[(10)]);
var inst_34188 = (state_34247[(14)]);
var inst_34202__$1 = cljs.core.seq.call(null,inst_34188);
var state_34247__$1 = (function (){var statearr_34271 = state_34247;
(statearr_34271[(10)] = inst_34202__$1);

return statearr_34271;
})();
if(inst_34202__$1){
var statearr_34272_34314 = state_34247__$1;
(statearr_34272_34314[(1)] = (13));

} else {
var statearr_34273_34315 = state_34247__$1;
(statearr_34273_34315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (9))){
var inst_34224 = (state_34247[(2)]);
var state_34247__$1 = state_34247;
var statearr_34274_34316 = state_34247__$1;
(statearr_34274_34316[(2)] = inst_34224);

(statearr_34274_34316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (5))){
var inst_34185 = cljs.core.deref.call(null,mults);
var inst_34186 = cljs.core.vals.call(null,inst_34185);
var inst_34187 = cljs.core.seq.call(null,inst_34186);
var inst_34188 = inst_34187;
var inst_34189 = null;
var inst_34190 = (0);
var inst_34191 = (0);
var state_34247__$1 = (function (){var statearr_34275 = state_34247;
(statearr_34275[(12)] = inst_34190);

(statearr_34275[(14)] = inst_34188);

(statearr_34275[(15)] = inst_34189);

(statearr_34275[(16)] = inst_34191);

return statearr_34275;
})();
var statearr_34276_34317 = state_34247__$1;
(statearr_34276_34317[(2)] = null);

(statearr_34276_34317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (14))){
var state_34247__$1 = state_34247;
var statearr_34280_34318 = state_34247__$1;
(statearr_34280_34318[(2)] = null);

(statearr_34280_34318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (16))){
var inst_34202 = (state_34247[(10)]);
var inst_34206 = cljs.core.chunk_first.call(null,inst_34202);
var inst_34207 = cljs.core.chunk_rest.call(null,inst_34202);
var inst_34208 = cljs.core.count.call(null,inst_34206);
var inst_34188 = inst_34207;
var inst_34189 = inst_34206;
var inst_34190 = inst_34208;
var inst_34191 = (0);
var state_34247__$1 = (function (){var statearr_34281 = state_34247;
(statearr_34281[(12)] = inst_34190);

(statearr_34281[(14)] = inst_34188);

(statearr_34281[(15)] = inst_34189);

(statearr_34281[(16)] = inst_34191);

return statearr_34281;
})();
var statearr_34282_34319 = state_34247__$1;
(statearr_34282_34319[(2)] = null);

(statearr_34282_34319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (10))){
var inst_34190 = (state_34247[(12)]);
var inst_34188 = (state_34247[(14)]);
var inst_34189 = (state_34247[(15)]);
var inst_34191 = (state_34247[(16)]);
var inst_34196 = cljs.core._nth.call(null,inst_34189,inst_34191);
var inst_34197 = cljs.core.async.muxch_STAR_.call(null,inst_34196);
var inst_34198 = cljs.core.async.close_BANG_.call(null,inst_34197);
var inst_34199 = (inst_34191 + (1));
var tmp34277 = inst_34190;
var tmp34278 = inst_34188;
var tmp34279 = inst_34189;
var inst_34188__$1 = tmp34278;
var inst_34189__$1 = tmp34279;
var inst_34190__$1 = tmp34277;
var inst_34191__$1 = inst_34199;
var state_34247__$1 = (function (){var statearr_34283 = state_34247;
(statearr_34283[(17)] = inst_34198);

(statearr_34283[(12)] = inst_34190__$1);

(statearr_34283[(14)] = inst_34188__$1);

(statearr_34283[(15)] = inst_34189__$1);

(statearr_34283[(16)] = inst_34191__$1);

return statearr_34283;
})();
var statearr_34284_34320 = state_34247__$1;
(statearr_34284_34320[(2)] = null);

(statearr_34284_34320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (18))){
var inst_34217 = (state_34247[(2)]);
var state_34247__$1 = state_34247;
var statearr_34285_34321 = state_34247__$1;
(statearr_34285_34321[(2)] = inst_34217);

(statearr_34285_34321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34248 === (8))){
var inst_34190 = (state_34247[(12)]);
var inst_34191 = (state_34247[(16)]);
var inst_34193 = (inst_34191 < inst_34190);
var inst_34194 = inst_34193;
var state_34247__$1 = state_34247;
if(cljs.core.truth_(inst_34194)){
var statearr_34286_34322 = state_34247__$1;
(statearr_34286_34322[(1)] = (10));

} else {
var statearr_34287_34323 = state_34247__$1;
(statearr_34287_34323[(1)] = (11));

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
});})(c__19569__auto___34295,mults,ensure_mult,p))
;
return ((function (switch__19513__auto__,c__19569__auto___34295,mults,ensure_mult,p){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_34291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34291[(0)] = state_machine__19514__auto__);

(statearr_34291[(1)] = (1));

return statearr_34291;
});
var state_machine__19514__auto____1 = (function (state_34247){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_34247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e34292){if((e34292 instanceof Object)){
var ex__19517__auto__ = e34292;
var statearr_34293_34324 = state_34247;
(statearr_34293_34324[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34325 = state_34247;
state_34247 = G__34325;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_34247){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_34247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___34295,mults,ensure_mult,p))
})();
var state__19571__auto__ = (function (){var statearr_34294 = f__19570__auto__.call(null);
(statearr_34294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___34295);

return statearr_34294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___34295,mults,ensure_mult,p))
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
var c__19569__auto___34462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___34462,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___34462,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34432){
var state_val_34433 = (state_34432[(1)]);
if((state_val_34433 === (7))){
var state_34432__$1 = state_34432;
var statearr_34434_34463 = state_34432__$1;
(statearr_34434_34463[(2)] = null);

(statearr_34434_34463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (1))){
var state_34432__$1 = state_34432;
var statearr_34435_34464 = state_34432__$1;
(statearr_34435_34464[(2)] = null);

(statearr_34435_34464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (4))){
var inst_34396 = (state_34432[(7)]);
var inst_34398 = (inst_34396 < cnt);
var state_34432__$1 = state_34432;
if(cljs.core.truth_(inst_34398)){
var statearr_34436_34465 = state_34432__$1;
(statearr_34436_34465[(1)] = (6));

} else {
var statearr_34437_34466 = state_34432__$1;
(statearr_34437_34466[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (15))){
var inst_34428 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34438_34467 = state_34432__$1;
(statearr_34438_34467[(2)] = inst_34428);

(statearr_34438_34467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (13))){
var inst_34421 = cljs.core.async.close_BANG_.call(null,out);
var state_34432__$1 = state_34432;
var statearr_34439_34468 = state_34432__$1;
(statearr_34439_34468[(2)] = inst_34421);

(statearr_34439_34468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (6))){
var state_34432__$1 = state_34432;
var statearr_34440_34469 = state_34432__$1;
(statearr_34440_34469[(2)] = null);

(statearr_34440_34469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (3))){
var inst_34430 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34432__$1,inst_34430);
} else {
if((state_val_34433 === (12))){
var inst_34418 = (state_34432[(8)]);
var inst_34418__$1 = (state_34432[(2)]);
var inst_34419 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34418__$1);
var state_34432__$1 = (function (){var statearr_34441 = state_34432;
(statearr_34441[(8)] = inst_34418__$1);

return statearr_34441;
})();
if(cljs.core.truth_(inst_34419)){
var statearr_34442_34470 = state_34432__$1;
(statearr_34442_34470[(1)] = (13));

} else {
var statearr_34443_34471 = state_34432__$1;
(statearr_34443_34471[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (2))){
var inst_34395 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34396 = (0);
var state_34432__$1 = (function (){var statearr_34444 = state_34432;
(statearr_34444[(9)] = inst_34395);

(statearr_34444[(7)] = inst_34396);

return statearr_34444;
})();
var statearr_34445_34472 = state_34432__$1;
(statearr_34445_34472[(2)] = null);

(statearr_34445_34472[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (11))){
var inst_34396 = (state_34432[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34432,(10),Object,null,(9));
var inst_34405 = chs__$1.call(null,inst_34396);
var inst_34406 = done.call(null,inst_34396);
var inst_34407 = cljs.core.async.take_BANG_.call(null,inst_34405,inst_34406);
var state_34432__$1 = state_34432;
var statearr_34446_34473 = state_34432__$1;
(statearr_34446_34473[(2)] = inst_34407);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34432__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (9))){
var inst_34396 = (state_34432[(7)]);
var inst_34409 = (state_34432[(2)]);
var inst_34410 = (inst_34396 + (1));
var inst_34396__$1 = inst_34410;
var state_34432__$1 = (function (){var statearr_34447 = state_34432;
(statearr_34447[(10)] = inst_34409);

(statearr_34447[(7)] = inst_34396__$1);

return statearr_34447;
})();
var statearr_34448_34474 = state_34432__$1;
(statearr_34448_34474[(2)] = null);

(statearr_34448_34474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (5))){
var inst_34416 = (state_34432[(2)]);
var state_34432__$1 = (function (){var statearr_34449 = state_34432;
(statearr_34449[(11)] = inst_34416);

return statearr_34449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34432__$1,(12),dchan);
} else {
if((state_val_34433 === (14))){
var inst_34418 = (state_34432[(8)]);
var inst_34423 = cljs.core.apply.call(null,f,inst_34418);
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34432__$1,(16),out,inst_34423);
} else {
if((state_val_34433 === (16))){
var inst_34425 = (state_34432[(2)]);
var state_34432__$1 = (function (){var statearr_34450 = state_34432;
(statearr_34450[(12)] = inst_34425);

return statearr_34450;
})();
var statearr_34451_34475 = state_34432__$1;
(statearr_34451_34475[(2)] = null);

(statearr_34451_34475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (10))){
var inst_34400 = (state_34432[(2)]);
var inst_34401 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34432__$1 = (function (){var statearr_34452 = state_34432;
(statearr_34452[(13)] = inst_34400);

return statearr_34452;
})();
var statearr_34453_34476 = state_34432__$1;
(statearr_34453_34476[(2)] = inst_34401);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34432__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (8))){
var inst_34414 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34454_34477 = state_34432__$1;
(statearr_34454_34477[(2)] = inst_34414);

(statearr_34454_34477[(1)] = (5));


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
});})(c__19569__auto___34462,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19513__auto__,c__19569__auto___34462,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_34458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34458[(0)] = state_machine__19514__auto__);

(statearr_34458[(1)] = (1));

return statearr_34458;
});
var state_machine__19514__auto____1 = (function (state_34432){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_34432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e34459){if((e34459 instanceof Object)){
var ex__19517__auto__ = e34459;
var statearr_34460_34478 = state_34432;
(statearr_34460_34478[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34479 = state_34432;
state_34432 = G__34479;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_34432){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_34432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___34462,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19571__auto__ = (function (){var statearr_34461 = f__19570__auto__.call(null);
(statearr_34461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___34462);

return statearr_34461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___34462,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__19569__auto___34587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___34587,out){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___34587,out){
return (function (state_34563){
var state_val_34564 = (state_34563[(1)]);
if((state_val_34564 === (7))){
var inst_34542 = (state_34563[(7)]);
var inst_34543 = (state_34563[(8)]);
var inst_34542__$1 = (state_34563[(2)]);
var inst_34543__$1 = cljs.core.nth.call(null,inst_34542__$1,(0),null);
var inst_34544 = cljs.core.nth.call(null,inst_34542__$1,(1),null);
var inst_34545 = (inst_34543__$1 == null);
var state_34563__$1 = (function (){var statearr_34565 = state_34563;
(statearr_34565[(7)] = inst_34542__$1);

(statearr_34565[(8)] = inst_34543__$1);

(statearr_34565[(9)] = inst_34544);

return statearr_34565;
})();
if(cljs.core.truth_(inst_34545)){
var statearr_34566_34588 = state_34563__$1;
(statearr_34566_34588[(1)] = (8));

} else {
var statearr_34567_34589 = state_34563__$1;
(statearr_34567_34589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (1))){
var inst_34534 = cljs.core.vec.call(null,chs);
var inst_34535 = inst_34534;
var state_34563__$1 = (function (){var statearr_34568 = state_34563;
(statearr_34568[(10)] = inst_34535);

return statearr_34568;
})();
var statearr_34569_34590 = state_34563__$1;
(statearr_34569_34590[(2)] = null);

(statearr_34569_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (4))){
var inst_34535 = (state_34563[(10)]);
var state_34563__$1 = state_34563;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34563__$1,(7),inst_34535);
} else {
if((state_val_34564 === (6))){
var inst_34559 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34570_34591 = state_34563__$1;
(statearr_34570_34591[(2)] = inst_34559);

(statearr_34570_34591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (3))){
var inst_34561 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34563__$1,inst_34561);
} else {
if((state_val_34564 === (2))){
var inst_34535 = (state_34563[(10)]);
var inst_34537 = cljs.core.count.call(null,inst_34535);
var inst_34538 = (inst_34537 > (0));
var state_34563__$1 = state_34563;
if(cljs.core.truth_(inst_34538)){
var statearr_34572_34592 = state_34563__$1;
(statearr_34572_34592[(1)] = (4));

} else {
var statearr_34573_34593 = state_34563__$1;
(statearr_34573_34593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (11))){
var inst_34535 = (state_34563[(10)]);
var inst_34552 = (state_34563[(2)]);
var tmp34571 = inst_34535;
var inst_34535__$1 = tmp34571;
var state_34563__$1 = (function (){var statearr_34574 = state_34563;
(statearr_34574[(10)] = inst_34535__$1);

(statearr_34574[(11)] = inst_34552);

return statearr_34574;
})();
var statearr_34575_34594 = state_34563__$1;
(statearr_34575_34594[(2)] = null);

(statearr_34575_34594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (9))){
var inst_34543 = (state_34563[(8)]);
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34563__$1,(11),out,inst_34543);
} else {
if((state_val_34564 === (5))){
var inst_34557 = cljs.core.async.close_BANG_.call(null,out);
var state_34563__$1 = state_34563;
var statearr_34576_34595 = state_34563__$1;
(statearr_34576_34595[(2)] = inst_34557);

(statearr_34576_34595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (10))){
var inst_34555 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34577_34596 = state_34563__$1;
(statearr_34577_34596[(2)] = inst_34555);

(statearr_34577_34596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (8))){
var inst_34542 = (state_34563[(7)]);
var inst_34535 = (state_34563[(10)]);
var inst_34543 = (state_34563[(8)]);
var inst_34544 = (state_34563[(9)]);
var inst_34547 = (function (){var c = inst_34544;
var v = inst_34543;
var vec__34540 = inst_34542;
var cs = inst_34535;
return ((function (c,v,vec__34540,cs,inst_34542,inst_34535,inst_34543,inst_34544,state_val_34564,c__19569__auto___34587,out){
return (function (p1__34480_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34480_SHARP_);
});
;})(c,v,vec__34540,cs,inst_34542,inst_34535,inst_34543,inst_34544,state_val_34564,c__19569__auto___34587,out))
})();
var inst_34548 = cljs.core.filterv.call(null,inst_34547,inst_34535);
var inst_34535__$1 = inst_34548;
var state_34563__$1 = (function (){var statearr_34578 = state_34563;
(statearr_34578[(10)] = inst_34535__$1);

return statearr_34578;
})();
var statearr_34579_34597 = state_34563__$1;
(statearr_34579_34597[(2)] = null);

(statearr_34579_34597[(1)] = (2));


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
});})(c__19569__auto___34587,out))
;
return ((function (switch__19513__auto__,c__19569__auto___34587,out){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_34583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34583[(0)] = state_machine__19514__auto__);

(statearr_34583[(1)] = (1));

return statearr_34583;
});
var state_machine__19514__auto____1 = (function (state_34563){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_34563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e34584){if((e34584 instanceof Object)){
var ex__19517__auto__ = e34584;
var statearr_34585_34598 = state_34563;
(statearr_34585_34598[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34599 = state_34563;
state_34563 = G__34599;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_34563){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_34563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___34587,out))
})();
var state__19571__auto__ = (function (){var statearr_34586 = f__19570__auto__.call(null);
(statearr_34586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___34587);

return statearr_34586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___34587,out))
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
var c__19569__auto___34692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___34692,out){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___34692,out){
return (function (state_34669){
var state_val_34670 = (state_34669[(1)]);
if((state_val_34670 === (7))){
var inst_34651 = (state_34669[(7)]);
var inst_34651__$1 = (state_34669[(2)]);
var inst_34652 = (inst_34651__$1 == null);
var inst_34653 = cljs.core.not.call(null,inst_34652);
var state_34669__$1 = (function (){var statearr_34671 = state_34669;
(statearr_34671[(7)] = inst_34651__$1);

return statearr_34671;
})();
if(inst_34653){
var statearr_34672_34693 = state_34669__$1;
(statearr_34672_34693[(1)] = (8));

} else {
var statearr_34673_34694 = state_34669__$1;
(statearr_34673_34694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (1))){
var inst_34646 = (0);
var state_34669__$1 = (function (){var statearr_34674 = state_34669;
(statearr_34674[(8)] = inst_34646);

return statearr_34674;
})();
var statearr_34675_34695 = state_34669__$1;
(statearr_34675_34695[(2)] = null);

(statearr_34675_34695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (4))){
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34669__$1,(7),ch);
} else {
if((state_val_34670 === (6))){
var inst_34664 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
var statearr_34676_34696 = state_34669__$1;
(statearr_34676_34696[(2)] = inst_34664);

(statearr_34676_34696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (3))){
var inst_34666 = (state_34669[(2)]);
var inst_34667 = cljs.core.async.close_BANG_.call(null,out);
var state_34669__$1 = (function (){var statearr_34677 = state_34669;
(statearr_34677[(9)] = inst_34666);

return statearr_34677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34669__$1,inst_34667);
} else {
if((state_val_34670 === (2))){
var inst_34646 = (state_34669[(8)]);
var inst_34648 = (inst_34646 < n);
var state_34669__$1 = state_34669;
if(cljs.core.truth_(inst_34648)){
var statearr_34678_34697 = state_34669__$1;
(statearr_34678_34697[(1)] = (4));

} else {
var statearr_34679_34698 = state_34669__$1;
(statearr_34679_34698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (11))){
var inst_34646 = (state_34669[(8)]);
var inst_34656 = (state_34669[(2)]);
var inst_34657 = (inst_34646 + (1));
var inst_34646__$1 = inst_34657;
var state_34669__$1 = (function (){var statearr_34680 = state_34669;
(statearr_34680[(8)] = inst_34646__$1);

(statearr_34680[(10)] = inst_34656);

return statearr_34680;
})();
var statearr_34681_34699 = state_34669__$1;
(statearr_34681_34699[(2)] = null);

(statearr_34681_34699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (9))){
var state_34669__$1 = state_34669;
var statearr_34682_34700 = state_34669__$1;
(statearr_34682_34700[(2)] = null);

(statearr_34682_34700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (5))){
var state_34669__$1 = state_34669;
var statearr_34683_34701 = state_34669__$1;
(statearr_34683_34701[(2)] = null);

(statearr_34683_34701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (10))){
var inst_34661 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
var statearr_34684_34702 = state_34669__$1;
(statearr_34684_34702[(2)] = inst_34661);

(statearr_34684_34702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (8))){
var inst_34651 = (state_34669[(7)]);
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34669__$1,(11),out,inst_34651);
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
});})(c__19569__auto___34692,out))
;
return ((function (switch__19513__auto__,c__19569__auto___34692,out){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_34688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34688[(0)] = state_machine__19514__auto__);

(statearr_34688[(1)] = (1));

return statearr_34688;
});
var state_machine__19514__auto____1 = (function (state_34669){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_34669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e34689){if((e34689 instanceof Object)){
var ex__19517__auto__ = e34689;
var statearr_34690_34703 = state_34669;
(statearr_34690_34703[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34704 = state_34669;
state_34669 = G__34704;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_34669){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_34669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___34692,out))
})();
var state__19571__auto__ = (function (){var statearr_34691 = f__19570__auto__.call(null);
(statearr_34691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___34692);

return statearr_34691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___34692,out))
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
if(typeof cljs.core.async.t34712 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34712 = (function (ch,f,map_LT_,meta34713){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34713 = meta34713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34712.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t34712.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t34715 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34715 = (function (fn1,_,meta34713,map_LT_,f,ch,meta34716){
this.fn1 = fn1;
this._ = _;
this.meta34713 = meta34713;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34716 = meta34716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34715.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t34715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34705_SHARP_){
return f1.call(null,(((p1__34705_SHARP_ == null))?null:self__.f.call(null,p1__34705_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t34715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34717){
var self__ = this;
var _34717__$1 = this;
return self__.meta34716;
});})(___$1))
;

cljs.core.async.t34715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34717,meta34716__$1){
var self__ = this;
var _34717__$1 = this;
return (new cljs.core.async.t34715(self__.fn1,self__._,self__.meta34713,self__.map_LT_,self__.f,self__.ch,meta34716__$1));
});})(___$1))
;

cljs.core.async.t34715.cljs$lang$type = true;

cljs.core.async.t34715.cljs$lang$ctorStr = "cljs.core.async/t34715";

cljs.core.async.t34715.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t34715");
});})(___$1))
;

cljs.core.async.__GT_t34715 = ((function (___$1){
return (function __GT_t34715(fn1__$1,___$2,meta34713__$1,map_LT___$1,f__$1,ch__$1,meta34716){
return (new cljs.core.async.t34715(fn1__$1,___$2,meta34713__$1,map_LT___$1,f__$1,ch__$1,meta34716));
});})(___$1))
;

}

return (new cljs.core.async.t34715(fn1,___$1,self__.meta34713,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t34712.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34712.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34714){
var self__ = this;
var _34714__$1 = this;
return self__.meta34713;
});

cljs.core.async.t34712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34714,meta34713__$1){
var self__ = this;
var _34714__$1 = this;
return (new cljs.core.async.t34712(self__.ch,self__.f,self__.map_LT_,meta34713__$1));
});

cljs.core.async.t34712.cljs$lang$type = true;

cljs.core.async.t34712.cljs$lang$ctorStr = "cljs.core.async/t34712";

cljs.core.async.t34712.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t34712");
});

cljs.core.async.__GT_t34712 = (function __GT_t34712(ch__$1,f__$1,map_LT___$1,meta34713){
return (new cljs.core.async.t34712(ch__$1,f__$1,map_LT___$1,meta34713));
});

}

return (new cljs.core.async.t34712(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t34721 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34721 = (function (ch,f,map_GT_,meta34722){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34722 = meta34722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34721.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t34721.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34721.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34723){
var self__ = this;
var _34723__$1 = this;
return self__.meta34722;
});

cljs.core.async.t34721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34723,meta34722__$1){
var self__ = this;
var _34723__$1 = this;
return (new cljs.core.async.t34721(self__.ch,self__.f,self__.map_GT_,meta34722__$1));
});

cljs.core.async.t34721.cljs$lang$type = true;

cljs.core.async.t34721.cljs$lang$ctorStr = "cljs.core.async/t34721";

cljs.core.async.t34721.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t34721");
});

cljs.core.async.__GT_t34721 = (function __GT_t34721(ch__$1,f__$1,map_GT___$1,meta34722){
return (new cljs.core.async.t34721(ch__$1,f__$1,map_GT___$1,meta34722));
});

}

return (new cljs.core.async.t34721(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t34727 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34727 = (function (ch,p,filter_GT_,meta34728){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34728 = meta34728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t34727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34727.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34727.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34729){
var self__ = this;
var _34729__$1 = this;
return self__.meta34728;
});

cljs.core.async.t34727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34729,meta34728__$1){
var self__ = this;
var _34729__$1 = this;
return (new cljs.core.async.t34727(self__.ch,self__.p,self__.filter_GT_,meta34728__$1));
});

cljs.core.async.t34727.cljs$lang$type = true;

cljs.core.async.t34727.cljs$lang$ctorStr = "cljs.core.async/t34727";

cljs.core.async.t34727.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t34727");
});

cljs.core.async.__GT_t34727 = (function __GT_t34727(ch__$1,p__$1,filter_GT___$1,meta34728){
return (new cljs.core.async.t34727(ch__$1,p__$1,filter_GT___$1,meta34728));
});

}

return (new cljs.core.async.t34727(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19569__auto___34812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___34812,out){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___34812,out){
return (function (state_34791){
var state_val_34792 = (state_34791[(1)]);
if((state_val_34792 === (7))){
var inst_34787 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
var statearr_34793_34813 = state_34791__$1;
(statearr_34793_34813[(2)] = inst_34787);

(statearr_34793_34813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (1))){
var state_34791__$1 = state_34791;
var statearr_34794_34814 = state_34791__$1;
(statearr_34794_34814[(2)] = null);

(statearr_34794_34814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (4))){
var inst_34773 = (state_34791[(7)]);
var inst_34773__$1 = (state_34791[(2)]);
var inst_34774 = (inst_34773__$1 == null);
var state_34791__$1 = (function (){var statearr_34795 = state_34791;
(statearr_34795[(7)] = inst_34773__$1);

return statearr_34795;
})();
if(cljs.core.truth_(inst_34774)){
var statearr_34796_34815 = state_34791__$1;
(statearr_34796_34815[(1)] = (5));

} else {
var statearr_34797_34816 = state_34791__$1;
(statearr_34797_34816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (6))){
var inst_34773 = (state_34791[(7)]);
var inst_34778 = p.call(null,inst_34773);
var state_34791__$1 = state_34791;
if(cljs.core.truth_(inst_34778)){
var statearr_34798_34817 = state_34791__$1;
(statearr_34798_34817[(1)] = (8));

} else {
var statearr_34799_34818 = state_34791__$1;
(statearr_34799_34818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (3))){
var inst_34789 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34791__$1,inst_34789);
} else {
if((state_val_34792 === (2))){
var state_34791__$1 = state_34791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34791__$1,(4),ch);
} else {
if((state_val_34792 === (11))){
var inst_34781 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
var statearr_34800_34819 = state_34791__$1;
(statearr_34800_34819[(2)] = inst_34781);

(statearr_34800_34819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (9))){
var state_34791__$1 = state_34791;
var statearr_34801_34820 = state_34791__$1;
(statearr_34801_34820[(2)] = null);

(statearr_34801_34820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (5))){
var inst_34776 = cljs.core.async.close_BANG_.call(null,out);
var state_34791__$1 = state_34791;
var statearr_34802_34821 = state_34791__$1;
(statearr_34802_34821[(2)] = inst_34776);

(statearr_34802_34821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (10))){
var inst_34784 = (state_34791[(2)]);
var state_34791__$1 = (function (){var statearr_34803 = state_34791;
(statearr_34803[(8)] = inst_34784);

return statearr_34803;
})();
var statearr_34804_34822 = state_34791__$1;
(statearr_34804_34822[(2)] = null);

(statearr_34804_34822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (8))){
var inst_34773 = (state_34791[(7)]);
var state_34791__$1 = state_34791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34791__$1,(11),out,inst_34773);
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
});})(c__19569__auto___34812,out))
;
return ((function (switch__19513__auto__,c__19569__auto___34812,out){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_34808 = [null,null,null,null,null,null,null,null,null];
(statearr_34808[(0)] = state_machine__19514__auto__);

(statearr_34808[(1)] = (1));

return statearr_34808;
});
var state_machine__19514__auto____1 = (function (state_34791){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_34791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e34809){if((e34809 instanceof Object)){
var ex__19517__auto__ = e34809;
var statearr_34810_34823 = state_34791;
(statearr_34810_34823[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34824 = state_34791;
state_34791 = G__34824;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_34791){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_34791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___34812,out))
})();
var state__19571__auto__ = (function (){var statearr_34811 = f__19570__auto__.call(null);
(statearr_34811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___34812);

return statearr_34811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___34812,out))
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
var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__){
return (function (state_34990){
var state_val_34991 = (state_34990[(1)]);
if((state_val_34991 === (7))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34992_35033 = state_34990__$1;
(statearr_34992_35033[(2)] = inst_34986);

(statearr_34992_35033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (20))){
var inst_34956 = (state_34990[(7)]);
var inst_34967 = (state_34990[(2)]);
var inst_34968 = cljs.core.next.call(null,inst_34956);
var inst_34942 = inst_34968;
var inst_34943 = null;
var inst_34944 = (0);
var inst_34945 = (0);
var state_34990__$1 = (function (){var statearr_34993 = state_34990;
(statearr_34993[(8)] = inst_34944);

(statearr_34993[(9)] = inst_34942);

(statearr_34993[(10)] = inst_34945);

(statearr_34993[(11)] = inst_34943);

(statearr_34993[(12)] = inst_34967);

return statearr_34993;
})();
var statearr_34994_35034 = state_34990__$1;
(statearr_34994_35034[(2)] = null);

(statearr_34994_35034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (1))){
var state_34990__$1 = state_34990;
var statearr_34995_35035 = state_34990__$1;
(statearr_34995_35035[(2)] = null);

(statearr_34995_35035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (4))){
var inst_34931 = (state_34990[(13)]);
var inst_34931__$1 = (state_34990[(2)]);
var inst_34932 = (inst_34931__$1 == null);
var state_34990__$1 = (function (){var statearr_34996 = state_34990;
(statearr_34996[(13)] = inst_34931__$1);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34932)){
var statearr_34997_35036 = state_34990__$1;
(statearr_34997_35036[(1)] = (5));

} else {
var statearr_34998_35037 = state_34990__$1;
(statearr_34998_35037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (15))){
var state_34990__$1 = state_34990;
var statearr_35002_35038 = state_34990__$1;
(statearr_35002_35038[(2)] = null);

(statearr_35002_35038[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (21))){
var state_34990__$1 = state_34990;
var statearr_35003_35039 = state_34990__$1;
(statearr_35003_35039[(2)] = null);

(statearr_35003_35039[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (13))){
var inst_34944 = (state_34990[(8)]);
var inst_34942 = (state_34990[(9)]);
var inst_34945 = (state_34990[(10)]);
var inst_34943 = (state_34990[(11)]);
var inst_34952 = (state_34990[(2)]);
var inst_34953 = (inst_34945 + (1));
var tmp34999 = inst_34944;
var tmp35000 = inst_34942;
var tmp35001 = inst_34943;
var inst_34942__$1 = tmp35000;
var inst_34943__$1 = tmp35001;
var inst_34944__$1 = tmp34999;
var inst_34945__$1 = inst_34953;
var state_34990__$1 = (function (){var statearr_35004 = state_34990;
(statearr_35004[(14)] = inst_34952);

(statearr_35004[(8)] = inst_34944__$1);

(statearr_35004[(9)] = inst_34942__$1);

(statearr_35004[(10)] = inst_34945__$1);

(statearr_35004[(11)] = inst_34943__$1);

return statearr_35004;
})();
var statearr_35005_35040 = state_34990__$1;
(statearr_35005_35040[(2)] = null);

(statearr_35005_35040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (22))){
var state_34990__$1 = state_34990;
var statearr_35006_35041 = state_34990__$1;
(statearr_35006_35041[(2)] = null);

(statearr_35006_35041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (6))){
var inst_34931 = (state_34990[(13)]);
var inst_34940 = f.call(null,inst_34931);
var inst_34941 = cljs.core.seq.call(null,inst_34940);
var inst_34942 = inst_34941;
var inst_34943 = null;
var inst_34944 = (0);
var inst_34945 = (0);
var state_34990__$1 = (function (){var statearr_35007 = state_34990;
(statearr_35007[(8)] = inst_34944);

(statearr_35007[(9)] = inst_34942);

(statearr_35007[(10)] = inst_34945);

(statearr_35007[(11)] = inst_34943);

return statearr_35007;
})();
var statearr_35008_35042 = state_34990__$1;
(statearr_35008_35042[(2)] = null);

(statearr_35008_35042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (17))){
var inst_34956 = (state_34990[(7)]);
var inst_34960 = cljs.core.chunk_first.call(null,inst_34956);
var inst_34961 = cljs.core.chunk_rest.call(null,inst_34956);
var inst_34962 = cljs.core.count.call(null,inst_34960);
var inst_34942 = inst_34961;
var inst_34943 = inst_34960;
var inst_34944 = inst_34962;
var inst_34945 = (0);
var state_34990__$1 = (function (){var statearr_35009 = state_34990;
(statearr_35009[(8)] = inst_34944);

(statearr_35009[(9)] = inst_34942);

(statearr_35009[(10)] = inst_34945);

(statearr_35009[(11)] = inst_34943);

return statearr_35009;
})();
var statearr_35010_35043 = state_34990__$1;
(statearr_35010_35043[(2)] = null);

(statearr_35010_35043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (3))){
var inst_34988 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34990__$1,inst_34988);
} else {
if((state_val_34991 === (12))){
var inst_34976 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35011_35044 = state_34990__$1;
(statearr_35011_35044[(2)] = inst_34976);

(statearr_35011_35044[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (2))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34990__$1,(4),in$);
} else {
if((state_val_34991 === (23))){
var inst_34984 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35012_35045 = state_34990__$1;
(statearr_35012_35045[(2)] = inst_34984);

(statearr_35012_35045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (19))){
var inst_34971 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35013_35046 = state_34990__$1;
(statearr_35013_35046[(2)] = inst_34971);

(statearr_35013_35046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (11))){
var inst_34956 = (state_34990[(7)]);
var inst_34942 = (state_34990[(9)]);
var inst_34956__$1 = cljs.core.seq.call(null,inst_34942);
var state_34990__$1 = (function (){var statearr_35014 = state_34990;
(statearr_35014[(7)] = inst_34956__$1);

return statearr_35014;
})();
if(inst_34956__$1){
var statearr_35015_35047 = state_34990__$1;
(statearr_35015_35047[(1)] = (14));

} else {
var statearr_35016_35048 = state_34990__$1;
(statearr_35016_35048[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (9))){
var inst_34978 = (state_34990[(2)]);
var inst_34979 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34990__$1 = (function (){var statearr_35017 = state_34990;
(statearr_35017[(15)] = inst_34978);

return statearr_35017;
})();
if(cljs.core.truth_(inst_34979)){
var statearr_35018_35049 = state_34990__$1;
(statearr_35018_35049[(1)] = (21));

} else {
var statearr_35019_35050 = state_34990__$1;
(statearr_35019_35050[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (5))){
var inst_34934 = cljs.core.async.close_BANG_.call(null,out);
var state_34990__$1 = state_34990;
var statearr_35020_35051 = state_34990__$1;
(statearr_35020_35051[(2)] = inst_34934);

(statearr_35020_35051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (14))){
var inst_34956 = (state_34990[(7)]);
var inst_34958 = cljs.core.chunked_seq_QMARK_.call(null,inst_34956);
var state_34990__$1 = state_34990;
if(inst_34958){
var statearr_35021_35052 = state_34990__$1;
(statearr_35021_35052[(1)] = (17));

} else {
var statearr_35022_35053 = state_34990__$1;
(statearr_35022_35053[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (16))){
var inst_34974 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35023_35054 = state_34990__$1;
(statearr_35023_35054[(2)] = inst_34974);

(statearr_35023_35054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (10))){
var inst_34945 = (state_34990[(10)]);
var inst_34943 = (state_34990[(11)]);
var inst_34950 = cljs.core._nth.call(null,inst_34943,inst_34945);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34990__$1,(13),out,inst_34950);
} else {
if((state_val_34991 === (18))){
var inst_34956 = (state_34990[(7)]);
var inst_34965 = cljs.core.first.call(null,inst_34956);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34990__$1,(20),out,inst_34965);
} else {
if((state_val_34991 === (8))){
var inst_34944 = (state_34990[(8)]);
var inst_34945 = (state_34990[(10)]);
var inst_34947 = (inst_34945 < inst_34944);
var inst_34948 = inst_34947;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34948)){
var statearr_35024_35055 = state_34990__$1;
(statearr_35024_35055[(1)] = (10));

} else {
var statearr_35025_35056 = state_34990__$1;
(statearr_35025_35056[(1)] = (11));

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
});})(c__19569__auto__))
;
return ((function (switch__19513__auto__,c__19569__auto__){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_35029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35029[(0)] = state_machine__19514__auto__);

(statearr_35029[(1)] = (1));

return statearr_35029;
});
var state_machine__19514__auto____1 = (function (state_34990){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_34990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e35030){if((e35030 instanceof Object)){
var ex__19517__auto__ = e35030;
var statearr_35031_35057 = state_34990;
(statearr_35031_35057[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35058 = state_34990;
state_34990 = G__35058;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_34990){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_34990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__))
})();
var state__19571__auto__ = (function (){var statearr_35032 = f__19570__auto__.call(null);
(statearr_35032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_35032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__))
);

return c__19569__auto__;
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
var c__19569__auto___35155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___35155,out){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___35155,out){
return (function (state_35130){
var state_val_35131 = (state_35130[(1)]);
if((state_val_35131 === (7))){
var inst_35125 = (state_35130[(2)]);
var state_35130__$1 = state_35130;
var statearr_35132_35156 = state_35130__$1;
(statearr_35132_35156[(2)] = inst_35125);

(statearr_35132_35156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (1))){
var inst_35107 = null;
var state_35130__$1 = (function (){var statearr_35133 = state_35130;
(statearr_35133[(7)] = inst_35107);

return statearr_35133;
})();
var statearr_35134_35157 = state_35130__$1;
(statearr_35134_35157[(2)] = null);

(statearr_35134_35157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (4))){
var inst_35110 = (state_35130[(8)]);
var inst_35110__$1 = (state_35130[(2)]);
var inst_35111 = (inst_35110__$1 == null);
var inst_35112 = cljs.core.not.call(null,inst_35111);
var state_35130__$1 = (function (){var statearr_35135 = state_35130;
(statearr_35135[(8)] = inst_35110__$1);

return statearr_35135;
})();
if(inst_35112){
var statearr_35136_35158 = state_35130__$1;
(statearr_35136_35158[(1)] = (5));

} else {
var statearr_35137_35159 = state_35130__$1;
(statearr_35137_35159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (6))){
var state_35130__$1 = state_35130;
var statearr_35138_35160 = state_35130__$1;
(statearr_35138_35160[(2)] = null);

(statearr_35138_35160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (3))){
var inst_35127 = (state_35130[(2)]);
var inst_35128 = cljs.core.async.close_BANG_.call(null,out);
var state_35130__$1 = (function (){var statearr_35139 = state_35130;
(statearr_35139[(9)] = inst_35127);

return statearr_35139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35130__$1,inst_35128);
} else {
if((state_val_35131 === (2))){
var state_35130__$1 = state_35130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35130__$1,(4),ch);
} else {
if((state_val_35131 === (11))){
var inst_35110 = (state_35130[(8)]);
var inst_35119 = (state_35130[(2)]);
var inst_35107 = inst_35110;
var state_35130__$1 = (function (){var statearr_35140 = state_35130;
(statearr_35140[(7)] = inst_35107);

(statearr_35140[(10)] = inst_35119);

return statearr_35140;
})();
var statearr_35141_35161 = state_35130__$1;
(statearr_35141_35161[(2)] = null);

(statearr_35141_35161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (9))){
var inst_35110 = (state_35130[(8)]);
var state_35130__$1 = state_35130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35130__$1,(11),out,inst_35110);
} else {
if((state_val_35131 === (5))){
var inst_35107 = (state_35130[(7)]);
var inst_35110 = (state_35130[(8)]);
var inst_35114 = cljs.core._EQ_.call(null,inst_35110,inst_35107);
var state_35130__$1 = state_35130;
if(inst_35114){
var statearr_35143_35162 = state_35130__$1;
(statearr_35143_35162[(1)] = (8));

} else {
var statearr_35144_35163 = state_35130__$1;
(statearr_35144_35163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (10))){
var inst_35122 = (state_35130[(2)]);
var state_35130__$1 = state_35130;
var statearr_35145_35164 = state_35130__$1;
(statearr_35145_35164[(2)] = inst_35122);

(statearr_35145_35164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (8))){
var inst_35107 = (state_35130[(7)]);
var tmp35142 = inst_35107;
var inst_35107__$1 = tmp35142;
var state_35130__$1 = (function (){var statearr_35146 = state_35130;
(statearr_35146[(7)] = inst_35107__$1);

return statearr_35146;
})();
var statearr_35147_35165 = state_35130__$1;
(statearr_35147_35165[(2)] = null);

(statearr_35147_35165[(1)] = (2));


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
});})(c__19569__auto___35155,out))
;
return ((function (switch__19513__auto__,c__19569__auto___35155,out){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_35151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35151[(0)] = state_machine__19514__auto__);

(statearr_35151[(1)] = (1));

return statearr_35151;
});
var state_machine__19514__auto____1 = (function (state_35130){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_35130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e35152){if((e35152 instanceof Object)){
var ex__19517__auto__ = e35152;
var statearr_35153_35166 = state_35130;
(statearr_35153_35166[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35167 = state_35130;
state_35130 = G__35167;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_35130){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_35130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___35155,out))
})();
var state__19571__auto__ = (function (){var statearr_35154 = f__19570__auto__.call(null);
(statearr_35154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___35155);

return statearr_35154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___35155,out))
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
var c__19569__auto___35302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___35302,out){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___35302,out){
return (function (state_35272){
var state_val_35273 = (state_35272[(1)]);
if((state_val_35273 === (7))){
var inst_35268 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35274_35303 = state_35272__$1;
(statearr_35274_35303[(2)] = inst_35268);

(statearr_35274_35303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (1))){
var inst_35235 = (new Array(n));
var inst_35236 = inst_35235;
var inst_35237 = (0);
var state_35272__$1 = (function (){var statearr_35275 = state_35272;
(statearr_35275[(7)] = inst_35237);

(statearr_35275[(8)] = inst_35236);

return statearr_35275;
})();
var statearr_35276_35304 = state_35272__$1;
(statearr_35276_35304[(2)] = null);

(statearr_35276_35304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (4))){
var inst_35240 = (state_35272[(9)]);
var inst_35240__$1 = (state_35272[(2)]);
var inst_35241 = (inst_35240__$1 == null);
var inst_35242 = cljs.core.not.call(null,inst_35241);
var state_35272__$1 = (function (){var statearr_35277 = state_35272;
(statearr_35277[(9)] = inst_35240__$1);

return statearr_35277;
})();
if(inst_35242){
var statearr_35278_35305 = state_35272__$1;
(statearr_35278_35305[(1)] = (5));

} else {
var statearr_35279_35306 = state_35272__$1;
(statearr_35279_35306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (15))){
var inst_35262 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35280_35307 = state_35272__$1;
(statearr_35280_35307[(2)] = inst_35262);

(statearr_35280_35307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (13))){
var state_35272__$1 = state_35272;
var statearr_35281_35308 = state_35272__$1;
(statearr_35281_35308[(2)] = null);

(statearr_35281_35308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (6))){
var inst_35237 = (state_35272[(7)]);
var inst_35258 = (inst_35237 > (0));
var state_35272__$1 = state_35272;
if(cljs.core.truth_(inst_35258)){
var statearr_35282_35309 = state_35272__$1;
(statearr_35282_35309[(1)] = (12));

} else {
var statearr_35283_35310 = state_35272__$1;
(statearr_35283_35310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (3))){
var inst_35270 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35272__$1,inst_35270);
} else {
if((state_val_35273 === (12))){
var inst_35236 = (state_35272[(8)]);
var inst_35260 = cljs.core.vec.call(null,inst_35236);
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35272__$1,(15),out,inst_35260);
} else {
if((state_val_35273 === (2))){
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35272__$1,(4),ch);
} else {
if((state_val_35273 === (11))){
var inst_35252 = (state_35272[(2)]);
var inst_35253 = (new Array(n));
var inst_35236 = inst_35253;
var inst_35237 = (0);
var state_35272__$1 = (function (){var statearr_35284 = state_35272;
(statearr_35284[(10)] = inst_35252);

(statearr_35284[(7)] = inst_35237);

(statearr_35284[(8)] = inst_35236);

return statearr_35284;
})();
var statearr_35285_35311 = state_35272__$1;
(statearr_35285_35311[(2)] = null);

(statearr_35285_35311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (9))){
var inst_35236 = (state_35272[(8)]);
var inst_35250 = cljs.core.vec.call(null,inst_35236);
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35272__$1,(11),out,inst_35250);
} else {
if((state_val_35273 === (5))){
var inst_35245 = (state_35272[(11)]);
var inst_35237 = (state_35272[(7)]);
var inst_35240 = (state_35272[(9)]);
var inst_35236 = (state_35272[(8)]);
var inst_35244 = (inst_35236[inst_35237] = inst_35240);
var inst_35245__$1 = (inst_35237 + (1));
var inst_35246 = (inst_35245__$1 < n);
var state_35272__$1 = (function (){var statearr_35286 = state_35272;
(statearr_35286[(11)] = inst_35245__$1);

(statearr_35286[(12)] = inst_35244);

return statearr_35286;
})();
if(cljs.core.truth_(inst_35246)){
var statearr_35287_35312 = state_35272__$1;
(statearr_35287_35312[(1)] = (8));

} else {
var statearr_35288_35313 = state_35272__$1;
(statearr_35288_35313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (14))){
var inst_35265 = (state_35272[(2)]);
var inst_35266 = cljs.core.async.close_BANG_.call(null,out);
var state_35272__$1 = (function (){var statearr_35290 = state_35272;
(statearr_35290[(13)] = inst_35265);

return statearr_35290;
})();
var statearr_35291_35314 = state_35272__$1;
(statearr_35291_35314[(2)] = inst_35266);

(statearr_35291_35314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (10))){
var inst_35256 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35292_35315 = state_35272__$1;
(statearr_35292_35315[(2)] = inst_35256);

(statearr_35292_35315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (8))){
var inst_35245 = (state_35272[(11)]);
var inst_35236 = (state_35272[(8)]);
var tmp35289 = inst_35236;
var inst_35236__$1 = tmp35289;
var inst_35237 = inst_35245;
var state_35272__$1 = (function (){var statearr_35293 = state_35272;
(statearr_35293[(7)] = inst_35237);

(statearr_35293[(8)] = inst_35236__$1);

return statearr_35293;
})();
var statearr_35294_35316 = state_35272__$1;
(statearr_35294_35316[(2)] = null);

(statearr_35294_35316[(1)] = (2));


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
});})(c__19569__auto___35302,out))
;
return ((function (switch__19513__auto__,c__19569__auto___35302,out){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_35298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35298[(0)] = state_machine__19514__auto__);

(statearr_35298[(1)] = (1));

return statearr_35298;
});
var state_machine__19514__auto____1 = (function (state_35272){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_35272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e35299){if((e35299 instanceof Object)){
var ex__19517__auto__ = e35299;
var statearr_35300_35317 = state_35272;
(statearr_35300_35317[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35318 = state_35272;
state_35272 = G__35318;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_35272){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_35272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___35302,out))
})();
var state__19571__auto__ = (function (){var statearr_35301 = f__19570__auto__.call(null);
(statearr_35301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___35302);

return statearr_35301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___35302,out))
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
var c__19569__auto___35461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___35461,out){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___35461,out){
return (function (state_35431){
var state_val_35432 = (state_35431[(1)]);
if((state_val_35432 === (7))){
var inst_35427 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35433_35462 = state_35431__$1;
(statearr_35433_35462[(2)] = inst_35427);

(statearr_35433_35462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (1))){
var inst_35390 = [];
var inst_35391 = inst_35390;
var inst_35392 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35431__$1 = (function (){var statearr_35434 = state_35431;
(statearr_35434[(7)] = inst_35391);

(statearr_35434[(8)] = inst_35392);

return statearr_35434;
})();
var statearr_35435_35463 = state_35431__$1;
(statearr_35435_35463[(2)] = null);

(statearr_35435_35463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (4))){
var inst_35395 = (state_35431[(9)]);
var inst_35395__$1 = (state_35431[(2)]);
var inst_35396 = (inst_35395__$1 == null);
var inst_35397 = cljs.core.not.call(null,inst_35396);
var state_35431__$1 = (function (){var statearr_35436 = state_35431;
(statearr_35436[(9)] = inst_35395__$1);

return statearr_35436;
})();
if(inst_35397){
var statearr_35437_35464 = state_35431__$1;
(statearr_35437_35464[(1)] = (5));

} else {
var statearr_35438_35465 = state_35431__$1;
(statearr_35438_35465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (15))){
var inst_35421 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35439_35466 = state_35431__$1;
(statearr_35439_35466[(2)] = inst_35421);

(statearr_35439_35466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (13))){
var state_35431__$1 = state_35431;
var statearr_35440_35467 = state_35431__$1;
(statearr_35440_35467[(2)] = null);

(statearr_35440_35467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (6))){
var inst_35391 = (state_35431[(7)]);
var inst_35416 = inst_35391.length;
var inst_35417 = (inst_35416 > (0));
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35417)){
var statearr_35441_35468 = state_35431__$1;
(statearr_35441_35468[(1)] = (12));

} else {
var statearr_35442_35469 = state_35431__$1;
(statearr_35442_35469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (3))){
var inst_35429 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35431__$1,inst_35429);
} else {
if((state_val_35432 === (12))){
var inst_35391 = (state_35431[(7)]);
var inst_35419 = cljs.core.vec.call(null,inst_35391);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35431__$1,(15),out,inst_35419);
} else {
if((state_val_35432 === (2))){
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(4),ch);
} else {
if((state_val_35432 === (11))){
var inst_35395 = (state_35431[(9)]);
var inst_35399 = (state_35431[(10)]);
var inst_35409 = (state_35431[(2)]);
var inst_35410 = [];
var inst_35411 = inst_35410.push(inst_35395);
var inst_35391 = inst_35410;
var inst_35392 = inst_35399;
var state_35431__$1 = (function (){var statearr_35443 = state_35431;
(statearr_35443[(11)] = inst_35411);

(statearr_35443[(7)] = inst_35391);

(statearr_35443[(12)] = inst_35409);

(statearr_35443[(8)] = inst_35392);

return statearr_35443;
})();
var statearr_35444_35470 = state_35431__$1;
(statearr_35444_35470[(2)] = null);

(statearr_35444_35470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (9))){
var inst_35391 = (state_35431[(7)]);
var inst_35407 = cljs.core.vec.call(null,inst_35391);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35431__$1,(11),out,inst_35407);
} else {
if((state_val_35432 === (5))){
var inst_35395 = (state_35431[(9)]);
var inst_35399 = (state_35431[(10)]);
var inst_35392 = (state_35431[(8)]);
var inst_35399__$1 = f.call(null,inst_35395);
var inst_35400 = cljs.core._EQ_.call(null,inst_35399__$1,inst_35392);
var inst_35401 = cljs.core.keyword_identical_QMARK_.call(null,inst_35392,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35402 = (inst_35400) || (inst_35401);
var state_35431__$1 = (function (){var statearr_35445 = state_35431;
(statearr_35445[(10)] = inst_35399__$1);

return statearr_35445;
})();
if(cljs.core.truth_(inst_35402)){
var statearr_35446_35471 = state_35431__$1;
(statearr_35446_35471[(1)] = (8));

} else {
var statearr_35447_35472 = state_35431__$1;
(statearr_35447_35472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (14))){
var inst_35424 = (state_35431[(2)]);
var inst_35425 = cljs.core.async.close_BANG_.call(null,out);
var state_35431__$1 = (function (){var statearr_35449 = state_35431;
(statearr_35449[(13)] = inst_35424);

return statearr_35449;
})();
var statearr_35450_35473 = state_35431__$1;
(statearr_35450_35473[(2)] = inst_35425);

(statearr_35450_35473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (10))){
var inst_35414 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35451_35474 = state_35431__$1;
(statearr_35451_35474[(2)] = inst_35414);

(statearr_35451_35474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (8))){
var inst_35395 = (state_35431[(9)]);
var inst_35391 = (state_35431[(7)]);
var inst_35399 = (state_35431[(10)]);
var inst_35404 = inst_35391.push(inst_35395);
var tmp35448 = inst_35391;
var inst_35391__$1 = tmp35448;
var inst_35392 = inst_35399;
var state_35431__$1 = (function (){var statearr_35452 = state_35431;
(statearr_35452[(7)] = inst_35391__$1);

(statearr_35452[(14)] = inst_35404);

(statearr_35452[(8)] = inst_35392);

return statearr_35452;
})();
var statearr_35453_35475 = state_35431__$1;
(statearr_35453_35475[(2)] = null);

(statearr_35453_35475[(1)] = (2));


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
});})(c__19569__auto___35461,out))
;
return ((function (switch__19513__auto__,c__19569__auto___35461,out){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_35457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35457[(0)] = state_machine__19514__auto__);

(statearr_35457[(1)] = (1));

return statearr_35457;
});
var state_machine__19514__auto____1 = (function (state_35431){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_35431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e35458){if((e35458 instanceof Object)){
var ex__19517__auto__ = e35458;
var statearr_35459_35476 = state_35431;
(statearr_35459_35476[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35477 = state_35431;
state_35431 = G__35477;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_35431){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_35431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___35461,out))
})();
var state__19571__auto__ = (function (){var statearr_35460 = f__19570__auto__.call(null);
(statearr_35460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___35461);

return statearr_35460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___35461,out))
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

//# sourceMappingURL=async.js.map?rel=1428378454064