// Compiled by ClojureScript 0.0-2850 {}
goog.provide('ttt.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('om.core');
goog.require('figwheel.client');
ttt.core.new_board = (function new_board(){
return "---------";
});
ttt.core.matches = (function matches(matcher,board){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__19552_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__19552_SHARP_),matcher);
}),cljs.core.map_indexed.call(null,cljs.core.vector,board)));
});
ttt.core.win_QMARK_ = (function win_QMARK_(board){
ttt.core.winners = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null)], null);

return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.into.call(null,cljs.core.map.call(null,(function (winner){
return cljs.core.every_QMARK_.call(null,cljs.core.set.call(null,ttt.core.matches.call(null,"x",board)),winner);
}),ttt.core.winners),cljs.core.map.call(null,(function (winner){
return cljs.core.every_QMARK_.call(null,cljs.core.set.call(null,ttt.core.matches.call(null,"o",board)),winner);
}),ttt.core.winners)));
});
ttt.core.draw_QMARK_ = (function draw_QMARK_(board){
return ((cljs.core.count.call(null,ttt.core.matches.call(null,"-",board)) < (3))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (x){
return ttt.core.win_QMARK_.call(null,clojure.string.replace.call(null,board,"-",x));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","o"], null)))));
});
ttt.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","o"], null)),new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.new_board.call(null)], null));
ttt.core.move = (function move(board,place,player,human_QMARK_){
var board_after_human = ((cljs.core.not_EQ_.call(null,"-",cljs.core.get.call(null,board,place)))?(function (){
alert("Invalid move");

return board;
})()
:(function (){var board_after_move = [cljs.core.str(cljs.core.subs.call(null,board,(0),place)),cljs.core.str(player),cljs.core.str(cljs.core.subs.call(null,board,(place + (1))))].join('');
if(cljs.core.truth_(ttt.core.win_QMARK_.call(null,board_after_move))){
alert([cljs.core.str("Player ["),cljs.core.str(player),cljs.core.str("] wins!")].join(''));

return cljs.core.swap_BANG_.call(null,ttt.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.new_board.call(null));
} else {
if(ttt.core.draw_QMARK_.call(null,board_after_move)){
alert([cljs.core.str("It's a Draw!")].join(''));

return cljs.core.swap_BANG_.call(null,ttt.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.new_board.call(null));
} else {
cljs.core.swap_BANG_.call(null,ttt.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,"x",player))?"o":"x"));

return cljs.core.swap_BANG_.call(null,ttt.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),board_after_move);
}
}
})());
if(cljs.core.truth_(human_QMARK_)){
return move.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board_after_human),cljs.core.rand_nth.call(null,cljs.core.vec.call(null,ttt.core.matches.call(null,"-",new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board_after_human)))),((cljs.core._EQ_.call(null,"x",player))?"o":"x"),false);
} else {
return board_after_human;
}
});
ttt.core.game = (function game(data,owner){
if(typeof ttt.core.t19558 !== 'undefined'){
} else {

/**
* @constructor
*/
ttt.core.t19558 = (function (owner,data,game,meta19559){
this.owner = owner;
this.data = data;
this.game = game;
this.meta19559 = meta19559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ttt.core.t19558.prototype.om$core$IRenderState$ = true;

ttt.core.t19558.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__19561){
var self__ = this;
var map__19562 = p__19561;
var map__19562__$1 = ((cljs.core.seq_QMARK_.call(null,map__19562))?cljs.core.apply.call(null,cljs.core.hash_map,map__19562):map__19562);
var ___$1 = this;
return React.DOM.div(null,React.DOM.button({"onClick": ((function (___$1,map__19562,map__19562__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''),(0),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(self__.data),true));
});})(___$1,map__19562,map__19562__$1))
},cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data),(0),(1))),React.DOM.button({"onClick": ((function (___$1,map__19562,map__19562__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''),(1),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(self__.data),true));
});})(___$1,map__19562,map__19562__$1))
},cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data),(1),(2))),React.DOM.button({"onClick": ((function (___$1,map__19562,map__19562__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''),(2),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(self__.data),true));
});})(___$1,map__19562,map__19562__$1))
},cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data),(2),(3))),React.DOM.button({"onClick": ((function (___$1,map__19562,map__19562__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''),(3),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(self__.data),true));
});})(___$1,map__19562,map__19562__$1))
},cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data),(3),(4))),React.DOM.button({"onClick": ((function (___$1,map__19562,map__19562__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''),(4),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(self__.data),true));
});})(___$1,map__19562,map__19562__$1))
},cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data),(4),(5))),React.DOM.button({"onClick": ((function (___$1,map__19562,map__19562__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''),(5),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(self__.data),true));
});})(___$1,map__19562,map__19562__$1))
},cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data),(5),(6))),React.DOM.button({"onClick": ((function (___$1,map__19562,map__19562__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''),(6),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(self__.data),true));
});})(___$1,map__19562,map__19562__$1))
},cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data),(6),(7))),React.DOM.button({"onClick": ((function (___$1,map__19562,map__19562__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''),(7),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(self__.data),true));
});})(___$1,map__19562,map__19562__$1))
},cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data),(7),(8))),React.DOM.button({"onClick": ((function (___$1,map__19562,map__19562__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''),(8),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(self__.data),true));
});})(___$1,map__19562,map__19562__$1))
},cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data),(8),(9))));
});

ttt.core.t19558.prototype.om$core$IInitState$ = true;

ttt.core.t19558.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

ttt.core.t19558.prototype.om$core$ICheckState$ = true;

ttt.core.t19558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19560){
var self__ = this;
var _19560__$1 = this;
return self__.meta19559;
});

ttt.core.t19558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19560,meta19559__$1){
var self__ = this;
var _19560__$1 = this;
return (new ttt.core.t19558(self__.owner,self__.data,self__.game,meta19559__$1));
});

ttt.core.t19558.cljs$lang$type = true;

ttt.core.t19558.cljs$lang$ctorStr = "ttt.core/t19558";

ttt.core.t19558.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"ttt.core/t19558");
});

ttt.core.__GT_t19558 = (function __GT_t19558(owner__$1,data__$1,game__$1,meta19559){
return (new ttt.core.t19558(owner__$1,data__$1,game__$1,meta19559));
});

}

return (new ttt.core.t19558(owner,data,game,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,ttt.core.game,ttt.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map?rel=1428406484881