// Compiled by ClojureScript 0.0-2850 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function text(elem){
var or__16145__auto__ = elem.textContent;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function html(elem){
return elem.innerHTML;
});
dommy.core.value = (function value(elem){
return elem.value;
});
dommy.core.class$ = (function class$(elem){
return elem.className;
});
dommy.core.attr = (function attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto__ = elem.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(c__$1);
} else {
var temp__4126__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4126__auto____$1)){
var i = temp__4126__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){
return elem.parentNode;
});
dommy.core.children = (function children(elem){
return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__19124_SHARP_){
return !((p1__19124_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){
return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__19131_19137 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__19132_19138 = null;
var count__19133_19139 = (0);
var i__19134_19140 = (0);
while(true){
if((i__19134_19140 < count__19133_19139)){
var vec__19135_19141 = cljs.core._nth.call(null,chunk__19132_19138,i__19134_19140);
var k_19142 = cljs.core.nth.call(null,vec__19135_19141,(0),null);
var v_19143 = cljs.core.nth.call(null,vec__19135_19141,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_19142),v_19143);

var G__19144 = seq__19131_19137;
var G__19145 = chunk__19132_19138;
var G__19146 = count__19133_19139;
var G__19147 = (i__19134_19140 + (1));
seq__19131_19137 = G__19144;
chunk__19132_19138 = G__19145;
count__19133_19139 = G__19146;
i__19134_19140 = G__19147;
continue;
} else {
var temp__4126__auto___19148 = cljs.core.seq.call(null,seq__19131_19137);
if(temp__4126__auto___19148){
var seq__19131_19149__$1 = temp__4126__auto___19148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19131_19149__$1)){
var c__16932__auto___19150 = cljs.core.chunk_first.call(null,seq__19131_19149__$1);
var G__19151 = cljs.core.chunk_rest.call(null,seq__19131_19149__$1);
var G__19152 = c__16932__auto___19150;
var G__19153 = cljs.core.count.call(null,c__16932__auto___19150);
var G__19154 = (0);
seq__19131_19137 = G__19151;
chunk__19132_19138 = G__19152;
count__19133_19139 = G__19153;
i__19134_19140 = G__19154;
continue;
} else {
var vec__19136_19155 = cljs.core.first.call(null,seq__19131_19149__$1);
var k_19156 = cljs.core.nth.call(null,vec__19136_19155,(0),null);
var v_19157 = cljs.core.nth.call(null,vec__19136_19155,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_19156),v_19157);

var G__19158 = cljs.core.next.call(null,seq__19131_19149__$1);
var G__19159 = null;
var G__19160 = (0);
var G__19161 = (0);
seq__19131_19137 = G__19158;
chunk__19132_19138 = G__19159;
count__19133_19139 = G__19160;
i__19134_19140 = G__19161;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__19162__i = 0, G__19162__a = new Array(arguments.length -  1);
while (G__19162__i < G__19162__a.length) {G__19162__a[G__19162__i] = arguments[G__19162__i + 1]; ++G__19162__i;}
  kvs = new cljs.core.IndexedSeq(G__19162__a,0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19163){
var elem = cljs.core.first(arglist__19163);
var kvs = cljs.core.rest(arglist__19163);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__19171_19177 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__19172_19178 = null;
var count__19173_19179 = (0);
var i__19174_19180 = (0);
while(true){
if((i__19174_19180 < count__19173_19179)){
var vec__19175_19181 = cljs.core._nth.call(null,chunk__19172_19178,i__19174_19180);
var k_19182 = cljs.core.nth.call(null,vec__19175_19181,(0),null);
var v_19183 = cljs.core.nth.call(null,vec__19175_19181,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_19182,[cljs.core.str(v_19183),cljs.core.str("px")].join(''));

var G__19184 = seq__19171_19177;
var G__19185 = chunk__19172_19178;
var G__19186 = count__19173_19179;
var G__19187 = (i__19174_19180 + (1));
seq__19171_19177 = G__19184;
chunk__19172_19178 = G__19185;
count__19173_19179 = G__19186;
i__19174_19180 = G__19187;
continue;
} else {
var temp__4126__auto___19188 = cljs.core.seq.call(null,seq__19171_19177);
if(temp__4126__auto___19188){
var seq__19171_19189__$1 = temp__4126__auto___19188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19171_19189__$1)){
var c__16932__auto___19190 = cljs.core.chunk_first.call(null,seq__19171_19189__$1);
var G__19191 = cljs.core.chunk_rest.call(null,seq__19171_19189__$1);
var G__19192 = c__16932__auto___19190;
var G__19193 = cljs.core.count.call(null,c__16932__auto___19190);
var G__19194 = (0);
seq__19171_19177 = G__19191;
chunk__19172_19178 = G__19192;
count__19173_19179 = G__19193;
i__19174_19180 = G__19194;
continue;
} else {
var vec__19176_19195 = cljs.core.first.call(null,seq__19171_19189__$1);
var k_19196 = cljs.core.nth.call(null,vec__19176_19195,(0),null);
var v_19197 = cljs.core.nth.call(null,vec__19176_19195,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_19196,[cljs.core.str(v_19197),cljs.core.str("px")].join(''));

var G__19198 = cljs.core.next.call(null,seq__19171_19189__$1);
var G__19199 = null;
var G__19200 = (0);
var G__19201 = (0);
seq__19171_19177 = G__19198;
chunk__19172_19178 = G__19199;
count__19173_19179 = G__19200;
i__19174_19180 = G__19201;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__19202__i = 0, G__19202__a = new Array(arguments.length -  1);
while (G__19202__i < G__19202__a.length) {G__19202__a[G__19202__i] = arguments[G__19202__i + 1]; ++G__19202__i;}
  kvs = new cljs.core.IndexedSeq(G__19202__a,0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__19203){
var elem = cljs.core.first(arglist__19203);
var kvs = cljs.core.rest(arglist__19203);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__19212 = elem;
(G__19212[k__$1] = v);

return G__19212;
} else {
var G__19213 = elem;
G__19213.setAttribute(k__$1,v);

return G__19213;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__19220__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__19214_19221 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__19215_19222 = null;
var count__19216_19223 = (0);
var i__19217_19224 = (0);
while(true){
if((i__19217_19224 < count__19216_19223)){
var vec__19218_19225 = cljs.core._nth.call(null,chunk__19215_19222,i__19217_19224);
var k_19226__$1 = cljs.core.nth.call(null,vec__19218_19225,(0),null);
var v_19227__$1 = cljs.core.nth.call(null,vec__19218_19225,(1),null);
set_attr_BANG_.call(null,elem,k_19226__$1,v_19227__$1);

var G__19228 = seq__19214_19221;
var G__19229 = chunk__19215_19222;
var G__19230 = count__19216_19223;
var G__19231 = (i__19217_19224 + (1));
seq__19214_19221 = G__19228;
chunk__19215_19222 = G__19229;
count__19216_19223 = G__19230;
i__19217_19224 = G__19231;
continue;
} else {
var temp__4126__auto___19232 = cljs.core.seq.call(null,seq__19214_19221);
if(temp__4126__auto___19232){
var seq__19214_19233__$1 = temp__4126__auto___19232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19214_19233__$1)){
var c__16932__auto___19234 = cljs.core.chunk_first.call(null,seq__19214_19233__$1);
var G__19235 = cljs.core.chunk_rest.call(null,seq__19214_19233__$1);
var G__19236 = c__16932__auto___19234;
var G__19237 = cljs.core.count.call(null,c__16932__auto___19234);
var G__19238 = (0);
seq__19214_19221 = G__19235;
chunk__19215_19222 = G__19236;
count__19216_19223 = G__19237;
i__19217_19224 = G__19238;
continue;
} else {
var vec__19219_19239 = cljs.core.first.call(null,seq__19214_19233__$1);
var k_19240__$1 = cljs.core.nth.call(null,vec__19219_19239,(0),null);
var v_19241__$1 = cljs.core.nth.call(null,vec__19219_19239,(1),null);
set_attr_BANG_.call(null,elem,k_19240__$1,v_19241__$1);

var G__19242 = cljs.core.next.call(null,seq__19214_19233__$1);
var G__19243 = null;
var G__19244 = (0);
var G__19245 = (0);
seq__19214_19221 = G__19242;
chunk__19215_19222 = G__19243;
count__19216_19223 = G__19244;
i__19217_19224 = G__19245;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__19220 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__19246__i = 0, G__19246__a = new Array(arguments.length -  3);
while (G__19246__i < G__19246__a.length) {G__19246__a[G__19246__i] = arguments[G__19246__i + 3]; ++G__19246__i;}
  kvs = new cljs.core.IndexedSeq(G__19246__a,0);
} 
return G__19220__delegate.call(this,elem,k,v,kvs);};
G__19220.cljs$lang$maxFixedArity = 3;
G__19220.cljs$lang$applyTo = (function (arglist__19247){
var elem = cljs.core.first(arglist__19247);
arglist__19247 = cljs.core.next(arglist__19247);
var k = cljs.core.first(arglist__19247);
arglist__19247 = cljs.core.next(arglist__19247);
var v = cljs.core.first(arglist__19247);
var kvs = cljs.core.rest(arglist__19247);
return G__19220__delegate(elem,k,v,kvs);
});
G__19220.cljs$core$IFn$_invoke$arity$variadic = G__19220__delegate;
return G__19220;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
var G__19248 = null;
if (arguments.length > 3) {
var G__19249__i = 0, G__19249__a = new Array(arguments.length -  3);
while (G__19249__i < G__19249__a.length) {G__19249__a[G__19249__i] = arguments[G__19249__i + 3]; ++G__19249__i;}
G__19248 = new cljs.core.IndexedSeq(G__19249__a,0);
}
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__19248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var k_19258__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_19258__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_19258__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__19259__delegate = function (elem,k,ks){
var seq__19254_19260 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__19255_19261 = null;
var count__19256_19262 = (0);
var i__19257_19263 = (0);
while(true){
if((i__19257_19263 < count__19256_19262)){
var k_19264__$1 = cljs.core._nth.call(null,chunk__19255_19261,i__19257_19263);
remove_attr_BANG_.call(null,elem,k_19264__$1);

var G__19265 = seq__19254_19260;
var G__19266 = chunk__19255_19261;
var G__19267 = count__19256_19262;
var G__19268 = (i__19257_19263 + (1));
seq__19254_19260 = G__19265;
chunk__19255_19261 = G__19266;
count__19256_19262 = G__19267;
i__19257_19263 = G__19268;
continue;
} else {
var temp__4126__auto___19269 = cljs.core.seq.call(null,seq__19254_19260);
if(temp__4126__auto___19269){
var seq__19254_19270__$1 = temp__4126__auto___19269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19254_19270__$1)){
var c__16932__auto___19271 = cljs.core.chunk_first.call(null,seq__19254_19270__$1);
var G__19272 = cljs.core.chunk_rest.call(null,seq__19254_19270__$1);
var G__19273 = c__16932__auto___19271;
var G__19274 = cljs.core.count.call(null,c__16932__auto___19271);
var G__19275 = (0);
seq__19254_19260 = G__19272;
chunk__19255_19261 = G__19273;
count__19256_19262 = G__19274;
i__19257_19263 = G__19275;
continue;
} else {
var k_19276__$1 = cljs.core.first.call(null,seq__19254_19270__$1);
remove_attr_BANG_.call(null,elem,k_19276__$1);

var G__19277 = cljs.core.next.call(null,seq__19254_19270__$1);
var G__19278 = null;
var G__19279 = (0);
var G__19280 = (0);
seq__19254_19260 = G__19277;
chunk__19255_19261 = G__19278;
count__19256_19262 = G__19279;
i__19257_19263 = G__19280;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__19259 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__19281__i = 0, G__19281__a = new Array(arguments.length -  2);
while (G__19281__i < G__19281__a.length) {G__19281__a[G__19281__i] = arguments[G__19281__i + 2]; ++G__19281__i;}
  ks = new cljs.core.IndexedSeq(G__19281__a,0);
} 
return G__19259__delegate.call(this,elem,k,ks);};
G__19259.cljs$lang$maxFixedArity = 2;
G__19259.cljs$lang$applyTo = (function (arglist__19282){
var elem = cljs.core.first(arglist__19282);
arglist__19282 = cljs.core.next(arglist__19282);
var k = cljs.core.first(arglist__19282);
var ks = cljs.core.rest(arglist__19282);
return G__19259__delegate(elem,k,ks);
});
G__19259.cljs$core$IFn$_invoke$arity$variadic = G__19259__delegate;
return G__19259;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
var G__19283 = null;
if (arguments.length > 2) {
var G__19284__i = 0, G__19284__a = new Array(arguments.length -  2);
while (G__19284__i < G__19284__a.length) {G__19284__a[G__19284__i] = arguments[G__19284__i + 2]; ++G__19284__i;}
G__19283 = new cljs.core.IndexedSeq(G__19284__a,0);
}
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__19283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){
return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4124__auto___19309 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___19309)){
var class_list_19310 = temp__4124__auto___19309;
var seq__19297_19311 = cljs.core.seq.call(null,classes__$1);
var chunk__19298_19312 = null;
var count__19299_19313 = (0);
var i__19300_19314 = (0);
while(true){
if((i__19300_19314 < count__19299_19313)){
var c_19315 = cljs.core._nth.call(null,chunk__19298_19312,i__19300_19314);
class_list_19310.add(c_19315);

var G__19316 = seq__19297_19311;
var G__19317 = chunk__19298_19312;
var G__19318 = count__19299_19313;
var G__19319 = (i__19300_19314 + (1));
seq__19297_19311 = G__19316;
chunk__19298_19312 = G__19317;
count__19299_19313 = G__19318;
i__19300_19314 = G__19319;
continue;
} else {
var temp__4126__auto___19320 = cljs.core.seq.call(null,seq__19297_19311);
if(temp__4126__auto___19320){
var seq__19297_19321__$1 = temp__4126__auto___19320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19297_19321__$1)){
var c__16932__auto___19322 = cljs.core.chunk_first.call(null,seq__19297_19321__$1);
var G__19323 = cljs.core.chunk_rest.call(null,seq__19297_19321__$1);
var G__19324 = c__16932__auto___19322;
var G__19325 = cljs.core.count.call(null,c__16932__auto___19322);
var G__19326 = (0);
seq__19297_19311 = G__19323;
chunk__19298_19312 = G__19324;
count__19299_19313 = G__19325;
i__19300_19314 = G__19326;
continue;
} else {
var c_19327 = cljs.core.first.call(null,seq__19297_19321__$1);
class_list_19310.add(c_19327);

var G__19328 = cljs.core.next.call(null,seq__19297_19321__$1);
var G__19329 = null;
var G__19330 = (0);
var G__19331 = (0);
seq__19297_19311 = G__19328;
chunk__19298_19312 = G__19329;
count__19299_19313 = G__19330;
i__19300_19314 = G__19331;
continue;
}
} else {
}
}
break;
}
} else {
var seq__19301_19332 = cljs.core.seq.call(null,classes__$1);
var chunk__19302_19333 = null;
var count__19303_19334 = (0);
var i__19304_19335 = (0);
while(true){
if((i__19304_19335 < count__19303_19334)){
var c_19336 = cljs.core._nth.call(null,chunk__19302_19333,i__19304_19335);
var class_name_19337 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_19337,c_19336))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_19337 === ""))?c_19336:[cljs.core.str(class_name_19337),cljs.core.str(" "),cljs.core.str(c_19336)].join('')));
}

var G__19338 = seq__19301_19332;
var G__19339 = chunk__19302_19333;
var G__19340 = count__19303_19334;
var G__19341 = (i__19304_19335 + (1));
seq__19301_19332 = G__19338;
chunk__19302_19333 = G__19339;
count__19303_19334 = G__19340;
i__19304_19335 = G__19341;
continue;
} else {
var temp__4126__auto___19342 = cljs.core.seq.call(null,seq__19301_19332);
if(temp__4126__auto___19342){
var seq__19301_19343__$1 = temp__4126__auto___19342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19301_19343__$1)){
var c__16932__auto___19344 = cljs.core.chunk_first.call(null,seq__19301_19343__$1);
var G__19345 = cljs.core.chunk_rest.call(null,seq__19301_19343__$1);
var G__19346 = c__16932__auto___19344;
var G__19347 = cljs.core.count.call(null,c__16932__auto___19344);
var G__19348 = (0);
seq__19301_19332 = G__19345;
chunk__19302_19333 = G__19346;
count__19303_19334 = G__19347;
i__19304_19335 = G__19348;
continue;
} else {
var c_19349 = cljs.core.first.call(null,seq__19301_19343__$1);
var class_name_19350 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_19350,c_19349))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_19350 === ""))?c_19349:[cljs.core.str(class_name_19350),cljs.core.str(" "),cljs.core.str(c_19349)].join('')));
}

var G__19351 = cljs.core.next.call(null,seq__19301_19343__$1);
var G__19352 = null;
var G__19353 = (0);
var G__19354 = (0);
seq__19301_19332 = G__19351;
chunk__19302_19333 = G__19352;
count__19303_19334 = G__19353;
i__19304_19335 = G__19354;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});
var add_class_BANG___3 = (function() { 
var G__19355__delegate = function (elem,classes,more_classes){
var seq__19305_19356 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__19306_19357 = null;
var count__19307_19358 = (0);
var i__19308_19359 = (0);
while(true){
if((i__19308_19359 < count__19307_19358)){
var c_19360 = cljs.core._nth.call(null,chunk__19306_19357,i__19308_19359);
add_class_BANG_.call(null,elem,c_19360);

var G__19361 = seq__19305_19356;
var G__19362 = chunk__19306_19357;
var G__19363 = count__19307_19358;
var G__19364 = (i__19308_19359 + (1));
seq__19305_19356 = G__19361;
chunk__19306_19357 = G__19362;
count__19307_19358 = G__19363;
i__19308_19359 = G__19364;
continue;
} else {
var temp__4126__auto___19365 = cljs.core.seq.call(null,seq__19305_19356);
if(temp__4126__auto___19365){
var seq__19305_19366__$1 = temp__4126__auto___19365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19305_19366__$1)){
var c__16932__auto___19367 = cljs.core.chunk_first.call(null,seq__19305_19366__$1);
var G__19368 = cljs.core.chunk_rest.call(null,seq__19305_19366__$1);
var G__19369 = c__16932__auto___19367;
var G__19370 = cljs.core.count.call(null,c__16932__auto___19367);
var G__19371 = (0);
seq__19305_19356 = G__19368;
chunk__19306_19357 = G__19369;
count__19307_19358 = G__19370;
i__19308_19359 = G__19371;
continue;
} else {
var c_19372 = cljs.core.first.call(null,seq__19305_19366__$1);
add_class_BANG_.call(null,elem,c_19372);

var G__19373 = cljs.core.next.call(null,seq__19305_19366__$1);
var G__19374 = null;
var G__19375 = (0);
var G__19376 = (0);
seq__19305_19356 = G__19373;
chunk__19306_19357 = G__19374;
count__19307_19358 = G__19375;
i__19308_19359 = G__19376;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__19355 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__19377__i = 0, G__19377__a = new Array(arguments.length -  2);
while (G__19377__i < G__19377__a.length) {G__19377__a[G__19377__i] = arguments[G__19377__i + 2]; ++G__19377__i;}
  more_classes = new cljs.core.IndexedSeq(G__19377__a,0);
} 
return G__19355__delegate.call(this,elem,classes,more_classes);};
G__19355.cljs$lang$maxFixedArity = 2;
G__19355.cljs$lang$applyTo = (function (arglist__19378){
var elem = cljs.core.first(arglist__19378);
arglist__19378 = cljs.core.next(arglist__19378);
var classes = cljs.core.first(arglist__19378);
var more_classes = cljs.core.rest(arglist__19378);
return G__19355__delegate(elem,classes,more_classes);
});
G__19355.cljs$core$IFn$_invoke$arity$variadic = G__19355__delegate;
return G__19355;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
var G__19379 = null;
if (arguments.length > 2) {
var G__19380__i = 0, G__19380__a = new Array(arguments.length -  2);
while (G__19380__i < G__19380__a.length) {G__19380__a[G__19380__i] = arguments[G__19380__i + 2]; ++G__19380__i;}
G__19379 = new cljs.core.IndexedSeq(G__19380__a,0);
}
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__19379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___19389 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___19389)){
var class_list_19390 = temp__4124__auto___19389;
class_list_19390.remove(c__$1);
} else {
var class_name_19391 = dommy.core.class$.call(null,elem);
var new_class_name_19392 = dommy.utils.remove_class_str.call(null,class_name_19391,c__$1);
if((class_name_19391 === new_class_name_19392)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_19392);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__19393__delegate = function (elem,class$,classes){
var seq__19385 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__19386 = null;
var count__19387 = (0);
var i__19388 = (0);
while(true){
if((i__19388 < count__19387)){
var c = cljs.core._nth.call(null,chunk__19386,i__19388);
remove_class_BANG_.call(null,elem,c);

var G__19394 = seq__19385;
var G__19395 = chunk__19386;
var G__19396 = count__19387;
var G__19397 = (i__19388 + (1));
seq__19385 = G__19394;
chunk__19386 = G__19395;
count__19387 = G__19396;
i__19388 = G__19397;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19385);
if(temp__4126__auto__){
var seq__19385__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19385__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__19385__$1);
var G__19398 = cljs.core.chunk_rest.call(null,seq__19385__$1);
var G__19399 = c__16932__auto__;
var G__19400 = cljs.core.count.call(null,c__16932__auto__);
var G__19401 = (0);
seq__19385 = G__19398;
chunk__19386 = G__19399;
count__19387 = G__19400;
i__19388 = G__19401;
continue;
} else {
var c = cljs.core.first.call(null,seq__19385__$1);
remove_class_BANG_.call(null,elem,c);

var G__19402 = cljs.core.next.call(null,seq__19385__$1);
var G__19403 = null;
var G__19404 = (0);
var G__19405 = (0);
seq__19385 = G__19402;
chunk__19386 = G__19403;
count__19387 = G__19404;
i__19388 = G__19405;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__19393 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__19406__i = 0, G__19406__a = new Array(arguments.length -  2);
while (G__19406__i < G__19406__a.length) {G__19406__a[G__19406__i] = arguments[G__19406__i + 2]; ++G__19406__i;}
  classes = new cljs.core.IndexedSeq(G__19406__a,0);
} 
return G__19393__delegate.call(this,elem,class$,classes);};
G__19393.cljs$lang$maxFixedArity = 2;
G__19393.cljs$lang$applyTo = (function (arglist__19407){
var elem = cljs.core.first(arglist__19407);
arglist__19407 = cljs.core.next(arglist__19407);
var class$ = cljs.core.first(arglist__19407);
var classes = cljs.core.rest(arglist__19407);
return G__19393__delegate(elem,class$,classes);
});
G__19393.cljs$core$IFn$_invoke$arity$variadic = G__19393__delegate;
return G__19393;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
var G__19408 = null;
if (arguments.length > 2) {
var G__19409__i = 0, G__19409__a = new Array(arguments.length -  2);
while (G__19409__i < G__19409__a.length) {G__19409__a[G__19409__i] = arguments[G__19409__i + 2]; ++G__19409__i;}
G__19408 = new cljs.core.IndexedSeq(G__19409__a,0);
}
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__19408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___19410 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___19410)){
var class_list_19411 = temp__4124__auto___19410;
class_list_19411.toggle(c__$1);
} else {
toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){
return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__19417 = parent;
G__19417.appendChild(child);

return G__19417;
});
var append_BANG___3 = (function() { 
var G__19422__delegate = function (parent,child,more_children){
var seq__19418_19423 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__19419_19424 = null;
var count__19420_19425 = (0);
var i__19421_19426 = (0);
while(true){
if((i__19421_19426 < count__19420_19425)){
var c_19427 = cljs.core._nth.call(null,chunk__19419_19424,i__19421_19426);
append_BANG_.call(null,parent,c_19427);

var G__19428 = seq__19418_19423;
var G__19429 = chunk__19419_19424;
var G__19430 = count__19420_19425;
var G__19431 = (i__19421_19426 + (1));
seq__19418_19423 = G__19428;
chunk__19419_19424 = G__19429;
count__19420_19425 = G__19430;
i__19421_19426 = G__19431;
continue;
} else {
var temp__4126__auto___19432 = cljs.core.seq.call(null,seq__19418_19423);
if(temp__4126__auto___19432){
var seq__19418_19433__$1 = temp__4126__auto___19432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19418_19433__$1)){
var c__16932__auto___19434 = cljs.core.chunk_first.call(null,seq__19418_19433__$1);
var G__19435 = cljs.core.chunk_rest.call(null,seq__19418_19433__$1);
var G__19436 = c__16932__auto___19434;
var G__19437 = cljs.core.count.call(null,c__16932__auto___19434);
var G__19438 = (0);
seq__19418_19423 = G__19435;
chunk__19419_19424 = G__19436;
count__19420_19425 = G__19437;
i__19421_19426 = G__19438;
continue;
} else {
var c_19439 = cljs.core.first.call(null,seq__19418_19433__$1);
append_BANG_.call(null,parent,c_19439);

var G__19440 = cljs.core.next.call(null,seq__19418_19433__$1);
var G__19441 = null;
var G__19442 = (0);
var G__19443 = (0);
seq__19418_19423 = G__19440;
chunk__19419_19424 = G__19441;
count__19420_19425 = G__19442;
i__19421_19426 = G__19443;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__19422 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__19444__i = 0, G__19444__a = new Array(arguments.length -  2);
while (G__19444__i < G__19444__a.length) {G__19444__a[G__19444__i] = arguments[G__19444__i + 2]; ++G__19444__i;}
  more_children = new cljs.core.IndexedSeq(G__19444__a,0);
} 
return G__19422__delegate.call(this,parent,child,more_children);};
G__19422.cljs$lang$maxFixedArity = 2;
G__19422.cljs$lang$applyTo = (function (arglist__19445){
var parent = cljs.core.first(arglist__19445);
arglist__19445 = cljs.core.next(arglist__19445);
var child = cljs.core.first(arglist__19445);
var more_children = cljs.core.rest(arglist__19445);
return G__19422__delegate(parent,child,more_children);
});
G__19422.cljs$core$IFn$_invoke$arity$variadic = G__19422__delegate;
return G__19422;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
var G__19446 = null;
if (arguments.length > 2) {
var G__19447__i = 0, G__19447__a = new Array(arguments.length -  2);
while (G__19447__i < G__19447__a.length) {G__19447__a[G__19447__i] = arguments[G__19447__i + 2]; ++G__19447__i;}
G__19446 = new cljs.core.IndexedSeq(G__19447__a,0);
}
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__19446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__19453 = parent;
G__19453.insertBefore(child,parent.firstChild);

return G__19453;
});
var prepend_BANG___3 = (function() { 
var G__19458__delegate = function (parent,child,more_children){
var seq__19454_19459 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__19455_19460 = null;
var count__19456_19461 = (0);
var i__19457_19462 = (0);
while(true){
if((i__19457_19462 < count__19456_19461)){
var c_19463 = cljs.core._nth.call(null,chunk__19455_19460,i__19457_19462);
prepend_BANG_.call(null,parent,c_19463);

var G__19464 = seq__19454_19459;
var G__19465 = chunk__19455_19460;
var G__19466 = count__19456_19461;
var G__19467 = (i__19457_19462 + (1));
seq__19454_19459 = G__19464;
chunk__19455_19460 = G__19465;
count__19456_19461 = G__19466;
i__19457_19462 = G__19467;
continue;
} else {
var temp__4126__auto___19468 = cljs.core.seq.call(null,seq__19454_19459);
if(temp__4126__auto___19468){
var seq__19454_19469__$1 = temp__4126__auto___19468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19454_19469__$1)){
var c__16932__auto___19470 = cljs.core.chunk_first.call(null,seq__19454_19469__$1);
var G__19471 = cljs.core.chunk_rest.call(null,seq__19454_19469__$1);
var G__19472 = c__16932__auto___19470;
var G__19473 = cljs.core.count.call(null,c__16932__auto___19470);
var G__19474 = (0);
seq__19454_19459 = G__19471;
chunk__19455_19460 = G__19472;
count__19456_19461 = G__19473;
i__19457_19462 = G__19474;
continue;
} else {
var c_19475 = cljs.core.first.call(null,seq__19454_19469__$1);
prepend_BANG_.call(null,parent,c_19475);

var G__19476 = cljs.core.next.call(null,seq__19454_19469__$1);
var G__19477 = null;
var G__19478 = (0);
var G__19479 = (0);
seq__19454_19459 = G__19476;
chunk__19455_19460 = G__19477;
count__19456_19461 = G__19478;
i__19457_19462 = G__19479;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__19458 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__19480__i = 0, G__19480__a = new Array(arguments.length -  2);
while (G__19480__i < G__19480__a.length) {G__19480__a[G__19480__i] = arguments[G__19480__i + 2]; ++G__19480__i;}
  more_children = new cljs.core.IndexedSeq(G__19480__a,0);
} 
return G__19458__delegate.call(this,parent,child,more_children);};
G__19458.cljs$lang$maxFixedArity = 2;
G__19458.cljs$lang$applyTo = (function (arglist__19481){
var parent = cljs.core.first(arglist__19481);
arglist__19481 = cljs.core.next(arglist__19481);
var child = cljs.core.first(arglist__19481);
var more_children = cljs.core.rest(arglist__19481);
return G__19458__delegate(parent,child,more_children);
});
G__19458.cljs$core$IFn$_invoke$arity$variadic = G__19458__delegate;
return G__19458;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
var G__19482 = null;
if (arguments.length > 2) {
var G__19483__i = 0, G__19483__a = new Array(arguments.length -  2);
while (G__19483__i < G__19483__a.length) {G__19483__a[G__19483__i] = arguments[G__19483__i + 2]; ++G__19483__i;}
G__19482 = new cljs.core.IndexedSeq(G__19483__a,0);
}
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__19482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var temp__4124__auto___19484 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___19484)){
var next_19485 = temp__4124__auto___19484;
dommy.core.insert_before_BANG_.call(null,elem,next_19485);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){
var G__19487 = p;
G__19487.removeChild(elem);

return G__19487;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19488){
var vec__19489 = p__19488;
var special_mouse_event = cljs.core.nth.call(null,vec__19489,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__19489,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__19489,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__19489,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__16145__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__16133__auto__ = related_target;
if(cljs.core.truth_(and__16133__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__16133__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__19489,special_mouse_event,real_mouse_event))
});})(vec__19489,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__16133__auto__ = selected_target;
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__16133__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__16145__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__19490__i = 0, G__19490__a = new Array(arguments.length -  2);
while (G__19490__i < G__19490__a.length) {G__19490__a[G__19490__i] = arguments[G__19490__i + 2]; ++G__19490__i;}
  args = new cljs.core.IndexedSeq(G__19490__a,0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__19491){
var elem = cljs.core.first(arglist__19491);
arglist__19491 = cljs.core.next(arglist__19491);
var f = cljs.core.first(arglist__19491);
var args = cljs.core.rest(arglist__19491);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__19515_19538 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_19539 = cljs.core.nth.call(null,vec__19515_19538,(0),null);
var selector_19540 = cljs.core.nth.call(null,vec__19515_19538,(1),null);
var seq__19516_19541 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__19523_19542 = null;
var count__19524_19543 = (0);
var i__19525_19544 = (0);
while(true){
if((i__19525_19544 < count__19524_19543)){
var vec__19532_19545 = cljs.core._nth.call(null,chunk__19523_19542,i__19525_19544);
var orig_type_19546 = cljs.core.nth.call(null,vec__19532_19545,(0),null);
var f_19547 = cljs.core.nth.call(null,vec__19532_19545,(1),null);
var seq__19526_19548 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19546,new cljs.core.PersistentArrayMap.fromArray([orig_type_19546,cljs.core.identity], true, false)));
var chunk__19528_19549 = null;
var count__19529_19550 = (0);
var i__19530_19551 = (0);
while(true){
if((i__19530_19551 < count__19529_19550)){
var vec__19533_19552 = cljs.core._nth.call(null,chunk__19528_19549,i__19530_19551);
var actual_type_19553 = cljs.core.nth.call(null,vec__19533_19552,(0),null);
var factory_19554 = cljs.core.nth.call(null,vec__19533_19552,(1),null);
var canonical_f_19555 = (cljs.core.truth_(selector_19540)?cljs.core.partial.call(null,dommy.core.live_listener,elem_19539,selector_19540):cljs.core.identity).call(null,factory_19554.call(null,f_19547));
dommy.core.update_event_listeners_BANG_.call(null,elem_19539,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19540,actual_type_19553,f_19547], null),canonical_f_19555);

if(cljs.core.truth_(elem_19539.addEventListener)){
elem_19539.addEventListener(cljs.core.name.call(null,actual_type_19553),canonical_f_19555);
} else {
elem_19539.attachEvent(cljs.core.name.call(null,actual_type_19553),canonical_f_19555);
}

var G__19556 = seq__19526_19548;
var G__19557 = chunk__19528_19549;
var G__19558 = count__19529_19550;
var G__19559 = (i__19530_19551 + (1));
seq__19526_19548 = G__19556;
chunk__19528_19549 = G__19557;
count__19529_19550 = G__19558;
i__19530_19551 = G__19559;
continue;
} else {
var temp__4126__auto___19560 = cljs.core.seq.call(null,seq__19526_19548);
if(temp__4126__auto___19560){
var seq__19526_19561__$1 = temp__4126__auto___19560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19526_19561__$1)){
var c__16932__auto___19562 = cljs.core.chunk_first.call(null,seq__19526_19561__$1);
var G__19563 = cljs.core.chunk_rest.call(null,seq__19526_19561__$1);
var G__19564 = c__16932__auto___19562;
var G__19565 = cljs.core.count.call(null,c__16932__auto___19562);
var G__19566 = (0);
seq__19526_19548 = G__19563;
chunk__19528_19549 = G__19564;
count__19529_19550 = G__19565;
i__19530_19551 = G__19566;
continue;
} else {
var vec__19534_19567 = cljs.core.first.call(null,seq__19526_19561__$1);
var actual_type_19568 = cljs.core.nth.call(null,vec__19534_19567,(0),null);
var factory_19569 = cljs.core.nth.call(null,vec__19534_19567,(1),null);
var canonical_f_19570 = (cljs.core.truth_(selector_19540)?cljs.core.partial.call(null,dommy.core.live_listener,elem_19539,selector_19540):cljs.core.identity).call(null,factory_19569.call(null,f_19547));
dommy.core.update_event_listeners_BANG_.call(null,elem_19539,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19540,actual_type_19568,f_19547], null),canonical_f_19570);

if(cljs.core.truth_(elem_19539.addEventListener)){
elem_19539.addEventListener(cljs.core.name.call(null,actual_type_19568),canonical_f_19570);
} else {
elem_19539.attachEvent(cljs.core.name.call(null,actual_type_19568),canonical_f_19570);
}

var G__19571 = cljs.core.next.call(null,seq__19526_19561__$1);
var G__19572 = null;
var G__19573 = (0);
var G__19574 = (0);
seq__19526_19548 = G__19571;
chunk__19528_19549 = G__19572;
count__19529_19550 = G__19573;
i__19530_19551 = G__19574;
continue;
}
} else {
}
}
break;
}

var G__19575 = seq__19516_19541;
var G__19576 = chunk__19523_19542;
var G__19577 = count__19524_19543;
var G__19578 = (i__19525_19544 + (1));
seq__19516_19541 = G__19575;
chunk__19523_19542 = G__19576;
count__19524_19543 = G__19577;
i__19525_19544 = G__19578;
continue;
} else {
var temp__4126__auto___19579 = cljs.core.seq.call(null,seq__19516_19541);
if(temp__4126__auto___19579){
var seq__19516_19580__$1 = temp__4126__auto___19579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19516_19580__$1)){
var c__16932__auto___19581 = cljs.core.chunk_first.call(null,seq__19516_19580__$1);
var G__19582 = cljs.core.chunk_rest.call(null,seq__19516_19580__$1);
var G__19583 = c__16932__auto___19581;
var G__19584 = cljs.core.count.call(null,c__16932__auto___19581);
var G__19585 = (0);
seq__19516_19541 = G__19582;
chunk__19523_19542 = G__19583;
count__19524_19543 = G__19584;
i__19525_19544 = G__19585;
continue;
} else {
var vec__19535_19586 = cljs.core.first.call(null,seq__19516_19580__$1);
var orig_type_19587 = cljs.core.nth.call(null,vec__19535_19586,(0),null);
var f_19588 = cljs.core.nth.call(null,vec__19535_19586,(1),null);
var seq__19517_19589 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19587,new cljs.core.PersistentArrayMap.fromArray([orig_type_19587,cljs.core.identity], true, false)));
var chunk__19519_19590 = null;
var count__19520_19591 = (0);
var i__19521_19592 = (0);
while(true){
if((i__19521_19592 < count__19520_19591)){
var vec__19536_19593 = cljs.core._nth.call(null,chunk__19519_19590,i__19521_19592);
var actual_type_19594 = cljs.core.nth.call(null,vec__19536_19593,(0),null);
var factory_19595 = cljs.core.nth.call(null,vec__19536_19593,(1),null);
var canonical_f_19596 = (cljs.core.truth_(selector_19540)?cljs.core.partial.call(null,dommy.core.live_listener,elem_19539,selector_19540):cljs.core.identity).call(null,factory_19595.call(null,f_19588));
dommy.core.update_event_listeners_BANG_.call(null,elem_19539,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19540,actual_type_19594,f_19588], null),canonical_f_19596);

if(cljs.core.truth_(elem_19539.addEventListener)){
elem_19539.addEventListener(cljs.core.name.call(null,actual_type_19594),canonical_f_19596);
} else {
elem_19539.attachEvent(cljs.core.name.call(null,actual_type_19594),canonical_f_19596);
}

var G__19597 = seq__19517_19589;
var G__19598 = chunk__19519_19590;
var G__19599 = count__19520_19591;
var G__19600 = (i__19521_19592 + (1));
seq__19517_19589 = G__19597;
chunk__19519_19590 = G__19598;
count__19520_19591 = G__19599;
i__19521_19592 = G__19600;
continue;
} else {
var temp__4126__auto___19601__$1 = cljs.core.seq.call(null,seq__19517_19589);
if(temp__4126__auto___19601__$1){
var seq__19517_19602__$1 = temp__4126__auto___19601__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19517_19602__$1)){
var c__16932__auto___19603 = cljs.core.chunk_first.call(null,seq__19517_19602__$1);
var G__19604 = cljs.core.chunk_rest.call(null,seq__19517_19602__$1);
var G__19605 = c__16932__auto___19603;
var G__19606 = cljs.core.count.call(null,c__16932__auto___19603);
var G__19607 = (0);
seq__19517_19589 = G__19604;
chunk__19519_19590 = G__19605;
count__19520_19591 = G__19606;
i__19521_19592 = G__19607;
continue;
} else {
var vec__19537_19608 = cljs.core.first.call(null,seq__19517_19602__$1);
var actual_type_19609 = cljs.core.nth.call(null,vec__19537_19608,(0),null);
var factory_19610 = cljs.core.nth.call(null,vec__19537_19608,(1),null);
var canonical_f_19611 = (cljs.core.truth_(selector_19540)?cljs.core.partial.call(null,dommy.core.live_listener,elem_19539,selector_19540):cljs.core.identity).call(null,factory_19610.call(null,f_19588));
dommy.core.update_event_listeners_BANG_.call(null,elem_19539,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19540,actual_type_19609,f_19588], null),canonical_f_19611);

if(cljs.core.truth_(elem_19539.addEventListener)){
elem_19539.addEventListener(cljs.core.name.call(null,actual_type_19609),canonical_f_19611);
} else {
elem_19539.attachEvent(cljs.core.name.call(null,actual_type_19609),canonical_f_19611);
}

var G__19612 = cljs.core.next.call(null,seq__19517_19602__$1);
var G__19613 = null;
var G__19614 = (0);
var G__19615 = (0);
seq__19517_19589 = G__19612;
chunk__19519_19590 = G__19613;
count__19520_19591 = G__19614;
i__19521_19592 = G__19615;
continue;
}
} else {
}
}
break;
}

var G__19616 = cljs.core.next.call(null,seq__19516_19580__$1);
var G__19617 = null;
var G__19618 = (0);
var G__19619 = (0);
seq__19516_19541 = G__19616;
chunk__19523_19542 = G__19617;
count__19524_19543 = G__19618;
i__19525_19544 = G__19619;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__19620__i = 0, G__19620__a = new Array(arguments.length -  1);
while (G__19620__i < G__19620__a.length) {G__19620__a[G__19620__i] = arguments[G__19620__i + 1]; ++G__19620__i;}
  type_fs = new cljs.core.IndexedSeq(G__19620__a,0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__19621){
var elem_sel = cljs.core.first(arglist__19621);
var type_fs = cljs.core.rest(arglist__19621);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__19645_19668 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_19669 = cljs.core.nth.call(null,vec__19645_19668,(0),null);
var selector_19670 = cljs.core.nth.call(null,vec__19645_19668,(1),null);
var seq__19646_19671 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__19653_19672 = null;
var count__19654_19673 = (0);
var i__19655_19674 = (0);
while(true){
if((i__19655_19674 < count__19654_19673)){
var vec__19662_19675 = cljs.core._nth.call(null,chunk__19653_19672,i__19655_19674);
var orig_type_19676 = cljs.core.nth.call(null,vec__19662_19675,(0),null);
var f_19677 = cljs.core.nth.call(null,vec__19662_19675,(1),null);
var seq__19656_19678 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19676,new cljs.core.PersistentArrayMap.fromArray([orig_type_19676,cljs.core.identity], true, false)));
var chunk__19658_19679 = null;
var count__19659_19680 = (0);
var i__19660_19681 = (0);
while(true){
if((i__19660_19681 < count__19659_19680)){
var vec__19663_19682 = cljs.core._nth.call(null,chunk__19658_19679,i__19660_19681);
var actual_type_19683 = cljs.core.nth.call(null,vec__19663_19682,(0),null);
var __19684 = cljs.core.nth.call(null,vec__19663_19682,(1),null);
var keys_19685 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19670,actual_type_19683,f_19677], null);
var canonical_f_19686 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19669),keys_19685);
dommy.core.update_event_listeners_BANG_.call(null,elem_19669,dommy.utils.dissoc_in,keys_19685);

if(cljs.core.truth_(elem_19669.removeEventListener)){
elem_19669.removeEventListener(cljs.core.name.call(null,actual_type_19683),canonical_f_19686);
} else {
elem_19669.detachEvent(cljs.core.name.call(null,actual_type_19683),canonical_f_19686);
}

var G__19687 = seq__19656_19678;
var G__19688 = chunk__19658_19679;
var G__19689 = count__19659_19680;
var G__19690 = (i__19660_19681 + (1));
seq__19656_19678 = G__19687;
chunk__19658_19679 = G__19688;
count__19659_19680 = G__19689;
i__19660_19681 = G__19690;
continue;
} else {
var temp__4126__auto___19691 = cljs.core.seq.call(null,seq__19656_19678);
if(temp__4126__auto___19691){
var seq__19656_19692__$1 = temp__4126__auto___19691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19656_19692__$1)){
var c__16932__auto___19693 = cljs.core.chunk_first.call(null,seq__19656_19692__$1);
var G__19694 = cljs.core.chunk_rest.call(null,seq__19656_19692__$1);
var G__19695 = c__16932__auto___19693;
var G__19696 = cljs.core.count.call(null,c__16932__auto___19693);
var G__19697 = (0);
seq__19656_19678 = G__19694;
chunk__19658_19679 = G__19695;
count__19659_19680 = G__19696;
i__19660_19681 = G__19697;
continue;
} else {
var vec__19664_19698 = cljs.core.first.call(null,seq__19656_19692__$1);
var actual_type_19699 = cljs.core.nth.call(null,vec__19664_19698,(0),null);
var __19700 = cljs.core.nth.call(null,vec__19664_19698,(1),null);
var keys_19701 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19670,actual_type_19699,f_19677], null);
var canonical_f_19702 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19669),keys_19701);
dommy.core.update_event_listeners_BANG_.call(null,elem_19669,dommy.utils.dissoc_in,keys_19701);

if(cljs.core.truth_(elem_19669.removeEventListener)){
elem_19669.removeEventListener(cljs.core.name.call(null,actual_type_19699),canonical_f_19702);
} else {
elem_19669.detachEvent(cljs.core.name.call(null,actual_type_19699),canonical_f_19702);
}

var G__19703 = cljs.core.next.call(null,seq__19656_19692__$1);
var G__19704 = null;
var G__19705 = (0);
var G__19706 = (0);
seq__19656_19678 = G__19703;
chunk__19658_19679 = G__19704;
count__19659_19680 = G__19705;
i__19660_19681 = G__19706;
continue;
}
} else {
}
}
break;
}

var G__19707 = seq__19646_19671;
var G__19708 = chunk__19653_19672;
var G__19709 = count__19654_19673;
var G__19710 = (i__19655_19674 + (1));
seq__19646_19671 = G__19707;
chunk__19653_19672 = G__19708;
count__19654_19673 = G__19709;
i__19655_19674 = G__19710;
continue;
} else {
var temp__4126__auto___19711 = cljs.core.seq.call(null,seq__19646_19671);
if(temp__4126__auto___19711){
var seq__19646_19712__$1 = temp__4126__auto___19711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19646_19712__$1)){
var c__16932__auto___19713 = cljs.core.chunk_first.call(null,seq__19646_19712__$1);
var G__19714 = cljs.core.chunk_rest.call(null,seq__19646_19712__$1);
var G__19715 = c__16932__auto___19713;
var G__19716 = cljs.core.count.call(null,c__16932__auto___19713);
var G__19717 = (0);
seq__19646_19671 = G__19714;
chunk__19653_19672 = G__19715;
count__19654_19673 = G__19716;
i__19655_19674 = G__19717;
continue;
} else {
var vec__19665_19718 = cljs.core.first.call(null,seq__19646_19712__$1);
var orig_type_19719 = cljs.core.nth.call(null,vec__19665_19718,(0),null);
var f_19720 = cljs.core.nth.call(null,vec__19665_19718,(1),null);
var seq__19647_19721 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19719,new cljs.core.PersistentArrayMap.fromArray([orig_type_19719,cljs.core.identity], true, false)));
var chunk__19649_19722 = null;
var count__19650_19723 = (0);
var i__19651_19724 = (0);
while(true){
if((i__19651_19724 < count__19650_19723)){
var vec__19666_19725 = cljs.core._nth.call(null,chunk__19649_19722,i__19651_19724);
var actual_type_19726 = cljs.core.nth.call(null,vec__19666_19725,(0),null);
var __19727 = cljs.core.nth.call(null,vec__19666_19725,(1),null);
var keys_19728 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19670,actual_type_19726,f_19720], null);
var canonical_f_19729 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19669),keys_19728);
dommy.core.update_event_listeners_BANG_.call(null,elem_19669,dommy.utils.dissoc_in,keys_19728);

if(cljs.core.truth_(elem_19669.removeEventListener)){
elem_19669.removeEventListener(cljs.core.name.call(null,actual_type_19726),canonical_f_19729);
} else {
elem_19669.detachEvent(cljs.core.name.call(null,actual_type_19726),canonical_f_19729);
}

var G__19730 = seq__19647_19721;
var G__19731 = chunk__19649_19722;
var G__19732 = count__19650_19723;
var G__19733 = (i__19651_19724 + (1));
seq__19647_19721 = G__19730;
chunk__19649_19722 = G__19731;
count__19650_19723 = G__19732;
i__19651_19724 = G__19733;
continue;
} else {
var temp__4126__auto___19734__$1 = cljs.core.seq.call(null,seq__19647_19721);
if(temp__4126__auto___19734__$1){
var seq__19647_19735__$1 = temp__4126__auto___19734__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19647_19735__$1)){
var c__16932__auto___19736 = cljs.core.chunk_first.call(null,seq__19647_19735__$1);
var G__19737 = cljs.core.chunk_rest.call(null,seq__19647_19735__$1);
var G__19738 = c__16932__auto___19736;
var G__19739 = cljs.core.count.call(null,c__16932__auto___19736);
var G__19740 = (0);
seq__19647_19721 = G__19737;
chunk__19649_19722 = G__19738;
count__19650_19723 = G__19739;
i__19651_19724 = G__19740;
continue;
} else {
var vec__19667_19741 = cljs.core.first.call(null,seq__19647_19735__$1);
var actual_type_19742 = cljs.core.nth.call(null,vec__19667_19741,(0),null);
var __19743 = cljs.core.nth.call(null,vec__19667_19741,(1),null);
var keys_19744 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19670,actual_type_19742,f_19720], null);
var canonical_f_19745 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19669),keys_19744);
dommy.core.update_event_listeners_BANG_.call(null,elem_19669,dommy.utils.dissoc_in,keys_19744);

if(cljs.core.truth_(elem_19669.removeEventListener)){
elem_19669.removeEventListener(cljs.core.name.call(null,actual_type_19742),canonical_f_19745);
} else {
elem_19669.detachEvent(cljs.core.name.call(null,actual_type_19742),canonical_f_19745);
}

var G__19746 = cljs.core.next.call(null,seq__19647_19735__$1);
var G__19747 = null;
var G__19748 = (0);
var G__19749 = (0);
seq__19647_19721 = G__19746;
chunk__19649_19722 = G__19747;
count__19650_19723 = G__19748;
i__19651_19724 = G__19749;
continue;
}
} else {
}
}
break;
}

var G__19750 = cljs.core.next.call(null,seq__19646_19712__$1);
var G__19751 = null;
var G__19752 = (0);
var G__19753 = (0);
seq__19646_19671 = G__19750;
chunk__19653_19672 = G__19751;
count__19654_19673 = G__19752;
i__19655_19674 = G__19753;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__19754__i = 0, G__19754__a = new Array(arguments.length -  1);
while (G__19754__i < G__19754__a.length) {G__19754__a[G__19754__i] = arguments[G__19754__i + 1]; ++G__19754__i;}
  type_fs = new cljs.core.IndexedSeq(G__19754__a,0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__19755){
var elem_sel = cljs.core.first(arglist__19755);
var type_fs = cljs.core.rest(arglist__19755);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__19763_19770 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_19771 = cljs.core.nth.call(null,vec__19763_19770,(0),null);
var selector_19772 = cljs.core.nth.call(null,vec__19763_19770,(1),null);
var seq__19764_19773 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__19765_19774 = null;
var count__19766_19775 = (0);
var i__19767_19776 = (0);
while(true){
if((i__19767_19776 < count__19766_19775)){
var vec__19768_19777 = cljs.core._nth.call(null,chunk__19765_19774,i__19767_19776);
var type_19778 = cljs.core.nth.call(null,vec__19768_19777,(0),null);
var f_19779 = cljs.core.nth.call(null,vec__19768_19777,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_19778,((function (seq__19764_19773,chunk__19765_19774,count__19766_19775,i__19767_19776,vec__19768_19777,type_19778,f_19779,vec__19763_19770,elem_19771,selector_19772){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_19778,this_fn);

return f_19779.call(null,e);
});})(seq__19764_19773,chunk__19765_19774,count__19766_19775,i__19767_19776,vec__19768_19777,type_19778,f_19779,vec__19763_19770,elem_19771,selector_19772))
);

var G__19780 = seq__19764_19773;
var G__19781 = chunk__19765_19774;
var G__19782 = count__19766_19775;
var G__19783 = (i__19767_19776 + (1));
seq__19764_19773 = G__19780;
chunk__19765_19774 = G__19781;
count__19766_19775 = G__19782;
i__19767_19776 = G__19783;
continue;
} else {
var temp__4126__auto___19784 = cljs.core.seq.call(null,seq__19764_19773);
if(temp__4126__auto___19784){
var seq__19764_19785__$1 = temp__4126__auto___19784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19764_19785__$1)){
var c__16932__auto___19786 = cljs.core.chunk_first.call(null,seq__19764_19785__$1);
var G__19787 = cljs.core.chunk_rest.call(null,seq__19764_19785__$1);
var G__19788 = c__16932__auto___19786;
var G__19789 = cljs.core.count.call(null,c__16932__auto___19786);
var G__19790 = (0);
seq__19764_19773 = G__19787;
chunk__19765_19774 = G__19788;
count__19766_19775 = G__19789;
i__19767_19776 = G__19790;
continue;
} else {
var vec__19769_19791 = cljs.core.first.call(null,seq__19764_19785__$1);
var type_19792 = cljs.core.nth.call(null,vec__19769_19791,(0),null);
var f_19793 = cljs.core.nth.call(null,vec__19769_19791,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_19792,((function (seq__19764_19773,chunk__19765_19774,count__19766_19775,i__19767_19776,vec__19769_19791,type_19792,f_19793,seq__19764_19785__$1,temp__4126__auto___19784,vec__19763_19770,elem_19771,selector_19772){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_19792,this_fn);

return f_19793.call(null,e);
});})(seq__19764_19773,chunk__19765_19774,count__19766_19775,i__19767_19776,vec__19769_19791,type_19792,f_19793,seq__19764_19785__$1,temp__4126__auto___19784,vec__19763_19770,elem_19771,selector_19772))
);

var G__19794 = cljs.core.next.call(null,seq__19764_19785__$1);
var G__19795 = null;
var G__19796 = (0);
var G__19797 = (0);
seq__19764_19773 = G__19794;
chunk__19765_19774 = G__19795;
count__19766_19775 = G__19796;
i__19767_19776 = G__19797;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__19798__i = 0, G__19798__a = new Array(arguments.length -  1);
while (G__19798__i < G__19798__a.length) {G__19798__a[G__19798__i] = arguments[G__19798__i + 1]; ++G__19798__i;}
  type_fs = new cljs.core.IndexedSeq(G__19798__a,0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__19799){
var elem_sel = cljs.core.first(arglist__19799);
var type_fs = cljs.core.rest(arglist__19799);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map?rel=1428462618373