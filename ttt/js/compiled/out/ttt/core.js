// Compiled by ClojureScript 0.0-2850 {}
goog.provide('ttt.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('figwheel.client');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('jayq.core');
goog.require('om.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
ttt.core.new_board = (function new_board(){
return "---------";
});
ttt.core.matches = (function matches(matcher,board){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__35834_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__35834_SHARP_),matcher);
}),cljs.core.map_indexed.call(null,cljs.core.vector,board)));
});
ttt.core.winners = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null)], null);
ttt.core.win_QMARK_ = (function win_QMARK_(board){
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
ttt.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"x",new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.new_board.call(null)], null));
ttt.core.robot_move = (function robot_move(board){
var x_moves = cljs.core.vec.call(null,ttt.core.matches.call(null,"x",board));
var o_moves = cljs.core.vec.call(null,ttt.core.matches.call(null,"o",board));
var possible_moves = cljs.core.vec.call(null,ttt.core.matches.call(null,"-",board));
var corners_and_center = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (x_moves,o_moves,possible_moves){
return (function (x){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(0),null,(4),null,(6),null,(2),null,(8),null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});})(x_moves,o_moves,possible_moves))
,possible_moves));
if(((6) < cljs.core.count.call(null,possible_moves))){
return cljs.core.rand_nth.call(null,corners_and_center);
} else {
var win_move = cljs.core.filter.call(null,((function (x_moves,o_moves,possible_moves,corners_and_center){
return (function (p1__35835_SHARP_){
return !((p1__35835_SHARP_ == null));
});})(x_moves,o_moves,possible_moves,corners_and_center))
,cljs.core.map.call(null,((function (x_moves,o_moves,possible_moves,corners_and_center){
return (function (y){
return cljs.core.some.call(null,y,possible_moves);
});})(x_moves,o_moves,possible_moves,corners_and_center))
,cljs.core.filter.call(null,((function (x_moves,o_moves,possible_moves,corners_and_center){
return (function (p1__35836_SHARP_){
return !((p1__35836_SHARP_ == null));
});})(x_moves,o_moves,possible_moves,corners_and_center))
,cljs.core.map.call(null,((function (x_moves,o_moves,possible_moves,corners_and_center){
return (function (x){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.second.call(null,clojure.data.diff.call(null,cljs.core.set.call(null,o_moves),cljs.core.set.call(null,x)))))){
return cljs.core.second.call(null,clojure.data.diff.call(null,cljs.core.set.call(null,o_moves),cljs.core.set.call(null,x)));
} else {
return null;
}
});})(x_moves,o_moves,possible_moves,corners_and_center))
,ttt.core.winners))));
var block_move = cljs.core.filter.call(null,((function (win_move,x_moves,o_moves,possible_moves,corners_and_center){
return (function (p1__35837_SHARP_){
return !((p1__35837_SHARP_ == null));
});})(win_move,x_moves,o_moves,possible_moves,corners_and_center))
,cljs.core.map.call(null,((function (win_move,x_moves,o_moves,possible_moves,corners_and_center){
return (function (y){
return cljs.core.some.call(null,y,possible_moves);
});})(win_move,x_moves,o_moves,possible_moves,corners_and_center))
,cljs.core.filter.call(null,((function (win_move,x_moves,o_moves,possible_moves,corners_and_center){
return (function (p1__35838_SHARP_){
return !((p1__35838_SHARP_ == null));
});})(win_move,x_moves,o_moves,possible_moves,corners_and_center))
,cljs.core.map.call(null,((function (win_move,x_moves,o_moves,possible_moves,corners_and_center){
return (function (x){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.second.call(null,clojure.data.diff.call(null,cljs.core.set.call(null,x_moves),cljs.core.set.call(null,x)))))){
return cljs.core.second.call(null,clojure.data.diff.call(null,cljs.core.set.call(null,x_moves),cljs.core.set.call(null,x)));
} else {
return null;
}
});})(win_move,x_moves,o_moves,possible_moves,corners_and_center))
,ttt.core.winners))));
if(((0) < cljs.core.count.call(null,win_move))){
return cljs.core.rand_nth.call(null,win_move);
} else {
if(((0) < cljs.core.count.call(null,block_move))){
return cljs.core.rand_nth.call(null,block_move);
} else {
return cljs.core.rand_nth.call(null,possible_moves);
}
}
}
});
ttt.core.move = (function move(board,place,player,human_QMARK_){
var board_after_human = ((cljs.core.not_EQ_.call(null,"-",cljs.core.get.call(null,board,place)))?(function (){
alert("Invalid move");

return board;
})()
:(function (){var board_after_move = [cljs.core.str(cljs.core.subs.call(null,board,(0),place)),cljs.core.str(player),cljs.core.str(cljs.core.subs.call(null,board,(place + (1))))].join('');
cljs.core.swap_BANG_.call(null,ttt.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,"x",player))?"o":"x"));

return cljs.core.swap_BANG_.call(null,ttt.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),board_after_move);
})());
if(cljs.core.truth_(human_QMARK_)){
if(cljs.core.not.call(null,ttt.core.win_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board_after_human)))){
return move.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board_after_human),ttt.core.robot_move.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board_after_human)),((cljs.core._EQ_.call(null,"x",player))?"o":"x"),false);
} else {
return board_after_human;
}
} else {
return null;
}
});
ttt.core.restart = (function restart(data){
cljs.core.swap_BANG_.call(null,ttt.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,"x",new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data)))?"o":"x"));

var board = ((cljs.core._EQ_.call(null,"x",new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data)))?(function (){
cljs.core.swap_BANG_.call(null,ttt.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),"x");

return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["o--------","------o--","----o----","--o------","--------o"], null));
})()
:ttt.core.new_board.call(null));
cljs.core.println.call(null,board);

return cljs.core.swap_BANG_.call(null,ttt.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),board);
});
ttt.core.show_board = (function show_board(owner,data){
return React.DOM.div(null,(cljs.core.truth_(ttt.core.win_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data)))?React.DOM.div({"className": "alert"},React.DOM.div({"className": "finalMessage animated tada"},[cljs.core.str(((cljs.core._EQ_.call(null,"x",new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data)))?cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What a shame!","SuperBot wins!","It was easy!"], null)):cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adrian, we did it!","This is happiness!","Sweet!"], null))))].join('')),React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.restart.call(null,data));
}), "className": "restart animated infinite pulse"},"Play Again!")):null),((ttt.core.draw_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data)))?React.DOM.div({"className": "col-lg-8 col-lg-offset-2 alert"},React.DOM.div({"className": "finalMessage animated tada"},"It is a Draw!"),React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.restart.call(null,data));
}), "className": "restart animated infinite pulse"},"Play Again!")):null),React.DOM.div({"className": "col-lg-2 col-md-2 col-sm-4 col-xs-4 col-md-offset-3 col-lg-offset-3"},React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data))].join(''),(0),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data),true));
}), "className": cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data),(0),(1))})),React.DOM.div({"className": "col-lg-2 col-md-2 col-sm-4 col-xs-4"},React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data))].join(''),(1),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data),true));
}), "className": cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data),(1),(2))})),React.DOM.div({"className": "col-lg-2 col-md-2 col-sm-4 col-xs-4"},React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data))].join(''),(2),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data),true));
}), "className": cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data),(2),(3))})),React.DOM.div({"className": "col-lg-2 col-md-2 col-sm-4 col-xs-4 col-md-offset-3 col-lg-offset-3"},React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data))].join(''),(3),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data),true));
}), "className": cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data),(3),(4))})),React.DOM.div({"className": "col-lg-2 col-md-2 col-sm-4 col-xs-4"},React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data))].join(''),(4),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data),true));
}), "className": cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data),(4),(5))})),React.DOM.div({"className": "col-lg-2 col-md-2 col-sm-4 col-xs-4"},React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data))].join(''),(5),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data),true));
}), "className": cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data),(5),(6))})),React.DOM.div({"className": "col-lg-2 col-md-2 col-sm-4 col-xs-4 col-md-offset-3 col-lg-offset-3"},React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data))].join(''),(6),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data),true));
}), "className": cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data),(6),(7))})),React.DOM.div({"className": "col-lg-2 col-md-2 col-sm-4 col-xs-4"},React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data))].join(''),(7),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data),true));
}), "className": cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data),(7),(8))})),React.DOM.div({"className": "col-lg-2 col-md-2 col-sm-4 col-xs-4"},React.DOM.button({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.core.move.call(null,[cljs.core.str(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data))].join(''),(8),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(data),true));
}), "className": cljs.core.subs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data),(8),(9))})));
});
ttt.core.game = (function game(data,owner){
if(typeof ttt.core.t35844 !== 'undefined'){
} else {

/**
* @constructor
*/
ttt.core.t35844 = (function (owner,data,game,meta35845){
this.owner = owner;
this.data = data;
this.game = game;
this.meta35845 = meta35845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ttt.core.t35844.prototype.om$core$IRenderState$ = true;

ttt.core.t35844.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__35847){
var self__ = this;
var map__35848 = p__35847;
var map__35848__$1 = ((cljs.core.seq_QMARK_.call(null,map__35848))?cljs.core.apply.call(null,cljs.core.hash_map,map__35848):map__35848);
var ___$1 = this;
return ttt.core.show_board.call(null,self__.owner,self__.data);
});

ttt.core.t35844.prototype.om$core$IInitState$ = true;

ttt.core.t35844.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

ttt.core.t35844.prototype.om$core$ICheckState$ = true;

ttt.core.t35844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35846){
var self__ = this;
var _35846__$1 = this;
return self__.meta35845;
});

ttt.core.t35844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35846,meta35845__$1){
var self__ = this;
var _35846__$1 = this;
return (new ttt.core.t35844(self__.owner,self__.data,self__.game,meta35845__$1));
});

ttt.core.t35844.cljs$lang$type = true;

ttt.core.t35844.cljs$lang$ctorStr = "ttt.core/t35844";

ttt.core.t35844.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"ttt.core/t35844");
});

ttt.core.__GT_t35844 = (function __GT_t35844(owner__$1,data__$1,game__$1,meta35845){
return (new ttt.core.t35844(owner__$1,data__$1,game__$1,meta35845));
});

}

return (new ttt.core.t35844(owner,data,game,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,ttt.core.game,ttt.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("game")], null));

//# sourceMappingURL=core.js.map?rel=1428593690107