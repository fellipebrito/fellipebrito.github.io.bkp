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
var seq__56461_56465 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56462_56466 = null;
var count__56463_56467 = (0);
var i__56464_56468 = (0);
while(true){
if((i__56464_56468 < count__56463_56467)){
var f_56469 = cljs.core._nth.call(null,chunk__56462_56466,i__56464_56468);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_56469);

var G__56470 = seq__56461_56465;
var G__56471 = chunk__56462_56466;
var G__56472 = count__56463_56467;
var G__56473 = (i__56464_56468 + (1));
seq__56461_56465 = G__56470;
chunk__56462_56466 = G__56471;
count__56463_56467 = G__56472;
i__56464_56468 = G__56473;
continue;
} else {
var temp__4126__auto___56474 = cljs.core.seq.call(null,seq__56461_56465);
if(temp__4126__auto___56474){
var seq__56461_56475__$1 = temp__4126__auto___56474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56461_56475__$1)){
var c__16932__auto___56476 = cljs.core.chunk_first.call(null,seq__56461_56475__$1);
var G__56477 = cljs.core.chunk_rest.call(null,seq__56461_56475__$1);
var G__56478 = c__16932__auto___56476;
var G__56479 = cljs.core.count.call(null,c__16932__auto___56476);
var G__56480 = (0);
seq__56461_56465 = G__56477;
chunk__56462_56466 = G__56478;
count__56463_56467 = G__56479;
i__56464_56468 = G__56480;
continue;
} else {
var f_56481 = cljs.core.first.call(null,seq__56461_56475__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_56481);

var G__56482 = cljs.core.next.call(null,seq__56461_56475__$1);
var G__56483 = null;
var G__56484 = (0);
var G__56485 = (0);
seq__56461_56465 = G__56482;
chunk__56462_56466 = G__56483;
count__56463_56467 = G__56484;
i__56464_56468 = G__56485;
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

//# sourceMappingURL=repl.js.map?rel=1428649985455