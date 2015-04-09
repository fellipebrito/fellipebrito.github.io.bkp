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
var seq__34503_34507 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34504_34508 = null;
var count__34505_34509 = (0);
var i__34506_34510 = (0);
while(true){
if((i__34506_34510 < count__34505_34509)){
var f_34511 = cljs.core._nth.call(null,chunk__34504_34508,i__34506_34510);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_34511);

var G__34512 = seq__34503_34507;
var G__34513 = chunk__34504_34508;
var G__34514 = count__34505_34509;
var G__34515 = (i__34506_34510 + (1));
seq__34503_34507 = G__34512;
chunk__34504_34508 = G__34513;
count__34505_34509 = G__34514;
i__34506_34510 = G__34515;
continue;
} else {
var temp__4126__auto___34516 = cljs.core.seq.call(null,seq__34503_34507);
if(temp__4126__auto___34516){
var seq__34503_34517__$1 = temp__4126__auto___34516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34503_34517__$1)){
var c__16933__auto___34518 = cljs.core.chunk_first.call(null,seq__34503_34517__$1);
var G__34519 = cljs.core.chunk_rest.call(null,seq__34503_34517__$1);
var G__34520 = c__16933__auto___34518;
var G__34521 = cljs.core.count.call(null,c__16933__auto___34518);
var G__34522 = (0);
seq__34503_34507 = G__34519;
chunk__34504_34508 = G__34520;
count__34505_34509 = G__34521;
i__34506_34510 = G__34522;
continue;
} else {
var f_34523 = cljs.core.first.call(null,seq__34503_34517__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_34523);

var G__34524 = cljs.core.next.call(null,seq__34503_34517__$1);
var G__34525 = null;
var G__34526 = (0);
var G__34527 = (0);
seq__34503_34507 = G__34524;
chunk__34504_34508 = G__34525;
count__34505_34509 = G__34526;
i__34506_34510 = G__34527;
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

//# sourceMappingURL=repl.js.map?rel=1428567723931