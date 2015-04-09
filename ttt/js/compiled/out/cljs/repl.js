// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34505_34509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34506_34510 = null;
var count__34507_34511 = (0);
var i__34508_34512 = (0);
while(true){
if((i__34508_34512 < count__34507_34511)){
var f_34513 = cljs.core._nth.call(null,chunk__34506_34510,i__34508_34512);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_34513);

var G__34514 = seq__34505_34509;
var G__34515 = chunk__34506_34510;
var G__34516 = count__34507_34511;
var G__34517 = (i__34508_34512 + (1));
seq__34505_34509 = G__34514;
chunk__34506_34510 = G__34515;
count__34507_34511 = G__34516;
i__34508_34512 = G__34517;
continue;
} else {
var temp__4126__auto___34518 = cljs.core.seq.call(null,seq__34505_34509);
if(temp__4126__auto___34518){
var seq__34505_34519__$1 = temp__4126__auto___34518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34505_34519__$1)){
var c__16932__auto___34520 = cljs.core.chunk_first.call(null,seq__34505_34519__$1);
var G__34521 = cljs.core.chunk_rest.call(null,seq__34505_34519__$1);
var G__34522 = c__16932__auto___34520;
var G__34523 = cljs.core.count.call(null,c__16932__auto___34520);
var G__34524 = (0);
seq__34505_34509 = G__34521;
chunk__34506_34510 = G__34522;
count__34507_34511 = G__34523;
i__34508_34512 = G__34524;
continue;
} else {
var f_34525 = cljs.core.first.call(null,seq__34505_34519__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_34525);

var G__34526 = cljs.core.next.call(null,seq__34505_34519__$1);
var G__34527 = null;
var G__34528 = (0);
var G__34529 = (0);
seq__34505_34509 = G__34526;
chunk__34506_34510 = G__34527;
count__34507_34511 = G__34528;
i__34508_34512 = G__34529;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1428568919251