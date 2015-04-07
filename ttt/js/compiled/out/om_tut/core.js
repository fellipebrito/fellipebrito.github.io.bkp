// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_tut.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('om.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
om_tut.core.new_board = (function new_board(){
return "---------";
});
om_tut.core.matches = (function matches(matcher,board){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__36084_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__36084_SHARP_),matcher);
}),cljs.core.map_indexed.call(null,cljs.core.vector,board)));
});
om_tut.core.win_QMARK_ = (function win_QMARK_(board){
om_tut.core.winners = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null)], null);

return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.into.call(null,cljs.core.map.call(null,(function (winner){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (x){
return om_tut.core.matches.call(null,"x",board).contains(x);
}),winner));
}),om_tut.core.winners),cljs.core.map.call(null,(function (winner){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (x){
return om_tut.core.matches.call(null,"o",board).contains(x);
}),winner));
}),om_tut.core.winners)));
});
om_tut.core.draw_QMARK_ = (function draw_QMARK_(board){
return ((cljs.core.count.call(null,om_tut.core.matches.call(null,"-",board)) < (3))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (x){
return om_tut.core.win_QMARK_.call(null,clojure.string.replace.call(null,board,"-",x));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","o"], null)))));
});
om_tut.core.move = (function move(board,place,player){
if(cljs.core._EQ_.call(null,"-",cljs.core.get.call(null,board,place))){
return [cljs.core.str(cljs.core.subs.call(null,board,(0),place)),cljs.core.str(player),cljs.core.str(cljs.core.subs.call(null,board,(place + (1))))].join('');
} else {
return false;
}
});
if(typeof om_tut.core.app_state !== 'undefined'){
} else {
om_tut.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),om_tut.core.new_board.call(null)], null));
}
om.core.root.call(null,(function (data,owner){
if(typeof om_tut.core.t36085 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t36085 = (function (owner,data,meta36086){
this.owner = owner;
this.data = data;
this.meta36086 = meta36086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t36085.prototype.om$core$IRender$ = true;

om_tut.core.t36085.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data));
});

om_tut.core.t36085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36087){
var self__ = this;
var _36087__$1 = this;
return self__.meta36086;
});

om_tut.core.t36085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36087,meta36086__$1){
var self__ = this;
var _36087__$1 = this;
return (new om_tut.core.t36085(self__.owner,self__.data,meta36086__$1));
});

om_tut.core.t36085.cljs$lang$type = true;

om_tut.core.t36085.cljs$lang$ctorStr = "om-tut.core/t36085";

om_tut.core.t36085.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"om-tut.core/t36085");
});

om_tut.core.__GT_t36085 = (function __GT_t36085(owner__$1,data__$1,meta36086){
return (new om_tut.core.t36085(owner__$1,data__$1,meta36086));
});

}

return (new om_tut.core.t36085(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
om_tut.core.game = (function game(){
var board = om_tut.core.new_board.call(null);
var player = "x";
while(true){
if(cljs.core.truth_(om_tut.core.win_QMARK_.call(null,board))){
return cljs.core.println.call(null,"You Win!");
} else {
if(om_tut.core.draw_QMARK_.call(null,board)){
return cljs.core.println.call(null,"Draw!");
} else {
var G__36088 = om_tut.core.move.call(null,board,"user-input",player);
var G__36089 = ((cljs.core._EQ_.call(null,"x",player))?"o":"x");
board = G__36088;
player = G__36089;
continue;
}
}
break;
}
});
cljs.core.swap_BANG_.call(null,om_tut.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),"Do it live!");

//# sourceMappingURL=core.js.map?rel=1428380414894