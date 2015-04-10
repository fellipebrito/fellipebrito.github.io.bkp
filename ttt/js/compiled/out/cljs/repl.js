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
var seq__35079_35083 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35080_35084 = null;
var count__35081_35085 = (0);
var i__35082_35086 = (0);
while(true){
if((i__35082_35086 < count__35081_35085)){
var f_35087 = cljs.core._nth.call(null,chunk__35080_35084,i__35082_35086);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_35087);

var G__35088 = seq__35079_35083;
var G__35089 = chunk__35080_35084;
var G__35090 = count__35081_35085;
var G__35091 = (i__35082_35086 + (1));
seq__35079_35083 = G__35088;
chunk__35080_35084 = G__35089;
count__35081_35085 = G__35090;
i__35082_35086 = G__35091;
continue;
} else {
var temp__4126__auto___35092 = cljs.core.seq.call(null,seq__35079_35083);
if(temp__4126__auto___35092){
var seq__35079_35093__$1 = temp__4126__auto___35092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35079_35093__$1)){
var c__16932__auto___35094 = cljs.core.chunk_first.call(null,seq__35079_35093__$1);
var G__35095 = cljs.core.chunk_rest.call(null,seq__35079_35093__$1);
var G__35096 = c__16932__auto___35094;
var G__35097 = cljs.core.count.call(null,c__16932__auto___35094);
var G__35098 = (0);
seq__35079_35083 = G__35095;
chunk__35080_35084 = G__35096;
count__35081_35085 = G__35097;
i__35082_35086 = G__35098;
continue;
} else {
var f_35099 = cljs.core.first.call(null,seq__35079_35093__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_35099);

var G__35100 = cljs.core.next.call(null,seq__35079_35093__$1);
var G__35101 = null;
var G__35102 = (0);
var G__35103 = (0);
seq__35079_35083 = G__35100;
chunk__35080_35084 = G__35101;
count__35081_35085 = G__35102;
i__35082_35086 = G__35103;
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

//# sourceMappingURL=repl.js.map?rel=1428647926063