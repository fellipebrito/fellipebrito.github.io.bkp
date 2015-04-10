// Compiled by ClojureScript 0.0-2850 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4124__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4124__auto__)){
var cm = temp__4124__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function() {
var $ = null;
var $__1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});
var $__2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});
$ = function(sel,context){
switch(arguments.length){
case 1:
return $__1.call(this,sel);
case 2:
return $__2.call(this,sel,context);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
$.cljs$core$IFn$_invoke$arity$1 = $__1;
$.cljs$core$IFn$_invoke$arity$2 = $__2;
return $;
})()
;
jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__33413 = null;
var G__33413__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__33413__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__33413 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__33413__2.call(this,self__,k);
case 3:
return G__33413__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33413.cljs$core$IFn$_invoke$arity$2 = G__33413__2;
G__33413.cljs$core$IFn$_invoke$arity$3 = G__33413__3;
return G__33413;
})()
;

jQuery.prototype.apply = (function (self__,args33412){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33412)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__16145__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});
/**
* @param {...*} var_args
*/
jayq.core.anim = (function() { 
var anim__delegate = function ($elem,props,p__33414){
var vec__33416 = p__33414;
var speed = cljs.core.nth.call(null,vec__33416,(0),null);
var on_finish = cljs.core.nth.call(null,vec__33416,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
};
var anim = function ($elem,props,var_args){
var p__33414 = null;
if (arguments.length > 2) {
var G__33417__i = 0, G__33417__a = new Array(arguments.length -  2);
while (G__33417__i < G__33417__a.length) {G__33417__a[G__33417__i] = arguments[G__33417__i + 2]; ++G__33417__i;}
  p__33414 = new cljs.core.IndexedSeq(G__33417__a,0);
} 
return anim__delegate.call(this,$elem,props,p__33414);};
anim.cljs$lang$maxFixedArity = 2;
anim.cljs$lang$applyTo = (function (arglist__33418){
var $elem = cljs.core.first(arglist__33418);
arglist__33418 = cljs.core.next(arglist__33418);
var props = cljs.core.first(arglist__33418);
var p__33414 = cljs.core.rest(arglist__33418);
return anim__delegate($elem,props,p__33414);
});
anim.cljs$core$IFn$_invoke$arity$variadic = anim__delegate;
return anim;
})()
;
jayq.core.text = (function() {
var text = null;
var text__1 = (function ($elem){
return $elem.text();
});
var text__2 = (function ($elem,txt){
return $elem.text(txt);
});
text = function($elem,txt){
switch(arguments.length){
case 1:
return text__1.call(this,$elem);
case 2:
return text__2.call(this,$elem,txt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$core$IFn$_invoke$arity$1 = text__1;
text.cljs$core$IFn$_invoke$arity$2 = text__2;
return text;
})()
;
jayq.core.css = (function() {
var css = null;
var css__2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});
var css__3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});
css = function($elem,p,v){
switch(arguments.length){
case 2:
return css__2.call(this,$elem,p);
case 3:
return css__3.call(this,$elem,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css.cljs$core$IFn$_invoke$arity$2 = css__2;
css.cljs$core$IFn$_invoke$arity$3 = css__3;
return css;
})()
;
jayq.core.attr = (function() {
var attr = null;
var attr__2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});
var attr__3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});
attr = function($elem,n,v){
switch(arguments.length){
case 2:
return attr__2.call(this,$elem,n);
case 3:
return attr__3.call(this,$elem,n,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
attr.cljs$core$IFn$_invoke$arity$2 = attr__2;
attr.cljs$core$IFn$_invoke$arity$3 = attr__3;
return attr;
})()
;
jayq.core.prop = (function() {
var prop = null;
var prop__2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});
var prop__3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});
prop = function($elem,n,v){
switch(arguments.length){
case 2:
return prop__2.call(this,$elem,n);
case 3:
return prop__3.call(this,$elem,n,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prop.cljs$core$IFn$_invoke$arity$2 = prop__2;
prop.cljs$core$IFn$_invoke$arity$3 = prop__3;
return prop;
})()
;
jayq.core.remove_attr = (function remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function() {
var data = null;
var data__1 = (function ($elem){
return $elem.data();
});
var data__2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});
var data__3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});
data = function($elem,k,v){
switch(arguments.length){
case 1:
return data__1.call(this,$elem);
case 2:
return data__2.call(this,$elem,k);
case 3:
return data__3.call(this,$elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
data.cljs$core$IFn$_invoke$arity$1 = data__1;
data.cljs$core$IFn$_invoke$arity$2 = data__2;
data.cljs$core$IFn$_invoke$arity$3 = data__3;
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function() {
var remove_class = null;
var remove_class__1 = (function ($elem){
return $elem.removeClass();
});
var remove_class__2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});
remove_class = function($elem,cl){
switch(arguments.length){
case 1:
return remove_class__1.call(this,$elem);
case 2:
return remove_class__2.call(this,$elem,cl);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class.cljs$core$IFn$_invoke$arity$1 = remove_class__1;
remove_class.cljs$core$IFn$_invoke$arity$2 = remove_class__2;
return remove_class;
})()
;
jayq.core.toggle_class = (function() {
var toggle_class = null;
var toggle_class__2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});
var toggle_class__3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});
toggle_class = function($elem,cl,switch$){
switch(arguments.length){
case 2:
return toggle_class__2.call(this,$elem,cl);
case 3:
return toggle_class__3.call(this,$elem,cl,switch$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class.cljs$core$IFn$_invoke$arity$2 = toggle_class__2;
toggle_class.cljs$core$IFn$_invoke$arity$3 = toggle_class__3;
return toggle_class;
})()
;
jayq.core.has_class = (function has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__33419){
var vec__33421 = p__33419;
var speed = cljs.core.nth.call(null,vec__33421,(0),null);
var on_finish = cljs.core.nth.call(null,vec__33421,(1),null);
return $elem.hide(speed,on_finish);
};
var hide = function ($elem,var_args){
var p__33419 = null;
if (arguments.length > 1) {
var G__33422__i = 0, G__33422__a = new Array(arguments.length -  1);
while (G__33422__i < G__33422__a.length) {G__33422__a[G__33422__i] = arguments[G__33422__i + 1]; ++G__33422__i;}
  p__33419 = new cljs.core.IndexedSeq(G__33422__a,0);
} 
return hide__delegate.call(this,$elem,p__33419);};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__33423){
var $elem = cljs.core.first(arglist__33423);
var p__33419 = cljs.core.rest(arglist__33423);
return hide__delegate($elem,p__33419);
});
hide.cljs$core$IFn$_invoke$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__33424){
var vec__33426 = p__33424;
var speed = cljs.core.nth.call(null,vec__33426,(0),null);
var on_finish = cljs.core.nth.call(null,vec__33426,(1),null);
return $elem.show(speed,on_finish);
};
var show = function ($elem,var_args){
var p__33424 = null;
if (arguments.length > 1) {
var G__33427__i = 0, G__33427__a = new Array(arguments.length -  1);
while (G__33427__i < G__33427__a.length) {G__33427__a[G__33427__i] = arguments[G__33427__i + 1]; ++G__33427__i;}
  p__33424 = new cljs.core.IndexedSeq(G__33427__a,0);
} 
return show__delegate.call(this,$elem,p__33424);};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__33428){
var $elem = cljs.core.first(arglist__33428);
var p__33424 = cljs.core.rest(arglist__33428);
return show__delegate($elem,p__33424);
});
show.cljs$core$IFn$_invoke$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__33429){
var vec__33431 = p__33429;
var speed = cljs.core.nth.call(null,vec__33431,(0),null);
var on_finish = cljs.core.nth.call(null,vec__33431,(1),null);
return $elem.toggle(speed,on_finish);
};
var toggle = function ($elem,var_args){
var p__33429 = null;
if (arguments.length > 1) {
var G__33432__i = 0, G__33432__a = new Array(arguments.length -  1);
while (G__33432__i < G__33432__a.length) {G__33432__a[G__33432__i] = arguments[G__33432__i + 1]; ++G__33432__i;}
  p__33429 = new cljs.core.IndexedSeq(G__33432__a,0);
} 
return toggle__delegate.call(this,$elem,p__33429);};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__33433){
var $elem = cljs.core.first(arglist__33433);
var p__33429 = cljs.core.rest(arglist__33433);
return toggle__delegate($elem,p__33429);
});
toggle.cljs$core$IFn$_invoke$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__33434){
var vec__33436 = p__33434;
var speed = cljs.core.nth.call(null,vec__33436,(0),null);
var on_finish = cljs.core.nth.call(null,vec__33436,(1),null);
return $elem.fadeOut(speed,on_finish);
};
var fade_out = function ($elem,var_args){
var p__33434 = null;
if (arguments.length > 1) {
var G__33437__i = 0, G__33437__a = new Array(arguments.length -  1);
while (G__33437__i < G__33437__a.length) {G__33437__a[G__33437__i] = arguments[G__33437__i + 1]; ++G__33437__i;}
  p__33434 = new cljs.core.IndexedSeq(G__33437__a,0);
} 
return fade_out__delegate.call(this,$elem,p__33434);};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__33438){
var $elem = cljs.core.first(arglist__33438);
var p__33434 = cljs.core.rest(arglist__33438);
return fade_out__delegate($elem,p__33434);
});
fade_out.cljs$core$IFn$_invoke$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__33439){
var vec__33441 = p__33439;
var speed = cljs.core.nth.call(null,vec__33441,(0),null);
var on_finish = cljs.core.nth.call(null,vec__33441,(1),null);
return $elem.fadeIn(speed,on_finish);
};
var fade_in = function ($elem,var_args){
var p__33439 = null;
if (arguments.length > 1) {
var G__33442__i = 0, G__33442__a = new Array(arguments.length -  1);
while (G__33442__i < G__33442__a.length) {G__33442__a[G__33442__i] = arguments[G__33442__i + 1]; ++G__33442__i;}
  p__33439 = new cljs.core.IndexedSeq(G__33442__a,0);
} 
return fade_in__delegate.call(this,$elem,p__33439);};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__33443){
var $elem = cljs.core.first(arglist__33443);
var p__33439 = cljs.core.rest(arglist__33443);
return fade_in__delegate($elem,p__33439);
});
fade_in.cljs$core$IFn$_invoke$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__33444){
var vec__33446 = p__33444;
var speed = cljs.core.nth.call(null,vec__33446,(0),null);
var on_finish = cljs.core.nth.call(null,vec__33446,(1),null);
return $elem.slideUp(speed,on_finish);
};
var slide_up = function ($elem,var_args){
var p__33444 = null;
if (arguments.length > 1) {
var G__33447__i = 0, G__33447__a = new Array(arguments.length -  1);
while (G__33447__i < G__33447__a.length) {G__33447__a[G__33447__i] = arguments[G__33447__i + 1]; ++G__33447__i;}
  p__33444 = new cljs.core.IndexedSeq(G__33447__a,0);
} 
return slide_up__delegate.call(this,$elem,p__33444);};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__33448){
var $elem = cljs.core.first(arglist__33448);
var p__33444 = cljs.core.rest(arglist__33448);
return slide_up__delegate($elem,p__33444);
});
slide_up.cljs$core$IFn$_invoke$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__33449){
var vec__33451 = p__33449;
var speed = cljs.core.nth.call(null,vec__33451,(0),null);
var on_finish = cljs.core.nth.call(null,vec__33451,(1),null);
return $elem.slideDown(speed,on_finish);
};
var slide_down = function ($elem,var_args){
var p__33449 = null;
if (arguments.length > 1) {
var G__33452__i = 0, G__33452__a = new Array(arguments.length -  1);
while (G__33452__i < G__33452__a.length) {G__33452__a[G__33452__i] = arguments[G__33452__i + 1]; ++G__33452__i;}
  p__33449 = new cljs.core.IndexedSeq(G__33452__a,0);
} 
return slide_down__delegate.call(this,$elem,p__33449);};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__33453){
var $elem = cljs.core.first(arglist__33453);
var p__33449 = cljs.core.rest(arglist__33453);
return slide_down__delegate($elem,p__33449);
});
slide_down.cljs$core$IFn$_invoke$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.siblings = (function() {
var siblings = null;
var siblings__1 = (function ($elem){
return $elem.siblings();
});
var siblings__2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});
siblings = function($elem,selector){
switch(arguments.length){
case 1:
return siblings__1.call(this,$elem);
case 2:
return siblings__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
siblings.cljs$core$IFn$_invoke$arity$1 = siblings__1;
siblings.cljs$core$IFn$_invoke$arity$2 = siblings__2;
return siblings;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.parents = (function() {
var parents = null;
var parents__1 = (function ($elem){
return $elem.parents();
});
var parents__2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});
parents = function($elem,selector){
switch(arguments.length){
case 1:
return parents__1.call(this,$elem);
case 2:
return parents__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
jayq.core.parents_until = (function() {
var parents_until = null;
var parents_until__1 = (function ($elem){
return $elem.parentsUntil();
});
var parents_until__2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});
var parents_until__3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});
parents_until = function($elem,selector,filtr){
switch(arguments.length){
case 1:
return parents_until__1.call(this,$elem);
case 2:
return parents_until__2.call(this,$elem,selector);
case 3:
return parents_until__3.call(this,$elem,selector,filtr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents_until.cljs$core$IFn$_invoke$arity$1 = parents_until__1;
parents_until.cljs$core$IFn$_invoke$arity$2 = parents_until__2;
parents_until.cljs$core$IFn$_invoke$arity$3 = parents_until__3;
return parents_until;
})()
;
jayq.core.children = (function() {
var children = null;
var children__1 = (function ($elem){
return $elem.children();
});
var children__2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});
children = function($elem,selector){
switch(arguments.length){
case 1:
return children__1.call(this,$elem);
case 2:
return children__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
children.cljs$core$IFn$_invoke$arity$1 = children__1;
children.cljs$core$IFn$_invoke$arity$2 = children__2;
return children;
})()
;
jayq.core.next = (function() {
var next = null;
var next__1 = (function ($elem){
return $elem.next();
});
var next__2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});
next = function($elem,selector){
switch(arguments.length){
case 1:
return next__1.call(this,$elem);
case 2:
return next__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
next.cljs$core$IFn$_invoke$arity$1 = next__1;
next.cljs$core$IFn$_invoke$arity$2 = next__2;
return next;
})()
;
jayq.core.prev = (function() {
var prev = null;
var prev__1 = (function ($elem){
return $elem.prev();
});
var prev__2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});
prev = function($elem,selector){
switch(arguments.length){
case 1:
return prev__1.call(this,$elem);
case 2:
return prev__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prev.cljs$core$IFn$_invoke$arity$1 = prev__1;
prev.cljs$core$IFn$_invoke$arity$2 = prev__2;
return prev;
})()
;
jayq.core.next_all = (function() {
var next_all = null;
var next_all__1 = (function ($elem){
return $elem.nextAll();
});
var next_all__2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});
next_all = function($elem,selector){
switch(arguments.length){
case 1:
return next_all__1.call(this,$elem);
case 2:
return next_all__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
next_all.cljs$core$IFn$_invoke$arity$1 = next_all__1;
next_all.cljs$core$IFn$_invoke$arity$2 = next_all__2;
return next_all;
})()
;
jayq.core.prev_all = (function() {
var prev_all = null;
var prev_all__1 = (function ($elem){
return $elem.prevAll();
});
var prev_all__2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});
prev_all = function($elem,selector){
switch(arguments.length){
case 1:
return prev_all__1.call(this,$elem);
case 2:
return prev_all__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prev_all.cljs$core$IFn$_invoke$arity$1 = prev_all__1;
prev_all.cljs$core$IFn$_invoke$arity$2 = prev_all__2;
return prev_all;
})()
;
jayq.core.next_until = (function() {
var next_until = null;
var next_until__1 = (function ($elem){
return $elem.nextUntil();
});
var next_until__2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});
var next_until__3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});
next_until = function($elem,selector,filtr){
switch(arguments.length){
case 1:
return next_until__1.call(this,$elem);
case 2:
return next_until__2.call(this,$elem,selector);
case 3:
return next_until__3.call(this,$elem,selector,filtr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
next_until.cljs$core$IFn$_invoke$arity$1 = next_until__1;
next_until.cljs$core$IFn$_invoke$arity$2 = next_until__2;
next_until.cljs$core$IFn$_invoke$arity$3 = next_until__3;
return next_until;
})()
;
jayq.core.prev_until = (function() {
var prev_until = null;
var prev_until__1 = (function ($elem){
return $elem.prevUntil();
});
var prev_until__2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});
var prev_until__3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});
prev_until = function($elem,selector,filtr){
switch(arguments.length){
case 1:
return prev_until__1.call(this,$elem);
case 2:
return prev_until__2.call(this,$elem,selector);
case 3:
return prev_until__3.call(this,$elem,selector,filtr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prev_until.cljs$core$IFn$_invoke$arity$1 = prev_until__1;
prev_until.cljs$core$IFn$_invoke$arity$2 = prev_until__2;
prev_until.cljs$core$IFn$_invoke$arity$3 = prev_until__3;
return prev_until;
})()
;
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
/**
* @param {...*} var_args
*/
jayq.core.closest = (function() { 
var closest__delegate = function ($elem,selector,p__33454){
var vec__33456 = p__33454;
var context = cljs.core.nth.call(null,vec__33456,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
};
var closest = function ($elem,selector,var_args){
var p__33454 = null;
if (arguments.length > 2) {
var G__33457__i = 0, G__33457__a = new Array(arguments.length -  2);
while (G__33457__i < G__33457__a.length) {G__33457__a[G__33457__i] = arguments[G__33457__i + 2]; ++G__33457__i;}
  p__33454 = new cljs.core.IndexedSeq(G__33457__a,0);
} 
return closest__delegate.call(this,$elem,selector,p__33454);};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__33458){
var $elem = cljs.core.first(arglist__33458);
arglist__33458 = cljs.core.next(arglist__33458);
var selector = cljs.core.first(arglist__33458);
var p__33454 = cljs.core.rest(arglist__33458);
return closest__delegate($elem,selector,p__33454);
});
closest.cljs$core$IFn$_invoke$arity$variadic = closest__delegate;
return closest;
})()
;
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.html = (function() {
var html = null;
var html__1 = (function ($elem){
return $elem.html();
});
var html__2 = (function ($elem,v){
return $elem.html(v);
});
html = function($elem,v){
switch(arguments.length){
case 1:
return html__1.call(this,$elem);
case 2:
return html__2.call(this,$elem,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
html.cljs$core$IFn$_invoke$arity$1 = html__1;
html.cljs$core$IFn$_invoke$arity$2 = html__2;
return html;
})()
;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
jayq.core.val = (function() {
var val = null;
var val__1 = (function ($elem){
return $elem.val();
});
var val__2 = (function ($elem,v){
return $elem.val(v);
});
val = function($elem,v){
switch(arguments.length){
case 1:
return val__1.call(this,$elem);
case 2:
return val__2.call(this,$elem,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
val.cljs$core$IFn$_invoke$arity$1 = val__1;
val.cljs$core$IFn$_invoke$arity$2 = val__2;
return val;
})()
;
jayq.core.serialize = (function serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function() {
var queue = null;
var queue__1 = (function ($elem){
return $elem.queue();
});
var queue__2 = (function ($elem,x){
return $elem.queue(x);
});
var queue__3 = (function ($elem,x,y){
return $elem.queue(x,y);
});
queue = function($elem,x,y){
switch(arguments.length){
case 1:
return queue__1.call(this,$elem);
case 2:
return queue__2.call(this,$elem,x);
case 3:
return queue__3.call(this,$elem,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
queue.cljs$core$IFn$_invoke$arity$1 = queue__1;
queue.cljs$core$IFn$_invoke$arity$2 = queue__2;
queue.cljs$core$IFn$_invoke$arity$3 = queue__3;
return queue;
})()
;
jayq.core.dequeue = (function() {
var dequeue = null;
var dequeue__1 = (function ($elem){
return $elem.dequeue();
});
var dequeue__2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});
dequeue = function($elem,queue_name){
switch(arguments.length){
case 1:
return dequeue__1.call(this,$elem);
case 2:
return dequeue__2.call(this,$elem,queue_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dequeue.cljs$core$IFn$_invoke$arity$1 = dequeue__1;
dequeue.cljs$core$IFn$_invoke$arity$2 = dequeue__2;
return dequeue;
})()
;
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function __GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function preprocess_request(p__33461){
var map__33463 = p__33461;
var map__33463__$1 = ((cljs.core.seq_QMARK_.call(null,map__33463))?cljs.core.apply.call(null,cljs.core.hash_map,map__33463):map__33463);
var request = map__33463__$1;
var contentType = cljs.core.get.call(null,map__33463__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var data = cljs.core.get.call(null,map__33463__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__33463,map__33463__$1,request,contentType,data){
return (function (p1__33460_SHARP_){
if(cljs.core.truth_((function (){var and__16133__auto__ = ct;
if(cljs.core.truth_(and__16133__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__16133__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__33460_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__33460_SHARP_;
}
});})(ct,map__33463,map__33463__$1,request,contentType,data))
.call(null,((function (ct,map__33463,map__33463__$1,request,contentType,data){
return (function (p1__33459_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__33459_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__33459_SHARP_;
}
});})(ct,map__33463,map__33463__$1,request,contentType,data))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function __GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function() {
var ajax = null;
var ajax__1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});
var ajax__2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});
ajax = function(url,settings){
switch(arguments.length){
case 1:
return ajax__1.call(this,url);
case 2:
return ajax__2.call(this,url,settings);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax.cljs$core$IFn$_invoke$arity$1 = ajax__1;
ajax.cljs$core$IFn$_invoke$arity$2 = ajax__2;
return ajax;
})()
;
jayq.core.xhr = (function xhr(p__33464,content,callback){
var vec__33466 = p__33464;
var method = cljs.core.nth.call(null,vec__33466,(0),null);
var uri = cljs.core.nth.call(null,vec__33466,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
* Reads clojure data from element content (preferably a script tag with type=edn/clojure)
*/
jayq.core.read = (function read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
/**
* @param {...*} var_args
*/
jayq.core.unbind = (function() { 
var unbind__delegate = function ($elem,ev,p__33467){
var vec__33469 = p__33467;
var func = cljs.core.nth.call(null,vec__33469,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
};
var unbind = function ($elem,ev,var_args){
var p__33467 = null;
if (arguments.length > 2) {
var G__33470__i = 0, G__33470__a = new Array(arguments.length -  2);
while (G__33470__i < G__33470__a.length) {G__33470__a[G__33470__i] = arguments[G__33470__i + 2]; ++G__33470__i;}
  p__33467 = new cljs.core.IndexedSeq(G__33470__a,0);
} 
return unbind__delegate.call(this,$elem,ev,p__33467);};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__33471){
var $elem = cljs.core.first(arglist__33471);
arglist__33471 = cljs.core.next(arglist__33471);
var ev = cljs.core.first(arglist__33471);
var p__33467 = cljs.core.rest(arglist__33471);
return unbind__delegate($elem,ev,p__33467);
});
unbind.cljs$core$IFn$_invoke$arity$variadic = unbind__delegate;
return unbind;
})()
;
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__33472){
var vec__33474 = p__33472;
var sel = cljs.core.nth.call(null,vec__33474,(0),null);
var data = cljs.core.nth.call(null,vec__33474,(1),null);
var handler = cljs.core.nth.call(null,vec__33474,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
};
var on = function ($elem,events,var_args){
var p__33472 = null;
if (arguments.length > 2) {
var G__33475__i = 0, G__33475__a = new Array(arguments.length -  2);
while (G__33475__i < G__33475__a.length) {G__33475__a[G__33475__i] = arguments[G__33475__i + 2]; ++G__33475__i;}
  p__33472 = new cljs.core.IndexedSeq(G__33475__a,0);
} 
return on__delegate.call(this,$elem,events,p__33472);};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__33476){
var $elem = cljs.core.first(arglist__33476);
arglist__33476 = cljs.core.next(arglist__33476);
var events = cljs.core.first(arglist__33476);
var p__33472 = cljs.core.rest(arglist__33476);
return on__delegate($elem,events,p__33472);
});
on.cljs$core$IFn$_invoke$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__33477){
var vec__33479 = p__33477;
var sel = cljs.core.nth.call(null,vec__33479,(0),null);
var data = cljs.core.nth.call(null,vec__33479,(1),null);
var handler = cljs.core.nth.call(null,vec__33479,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
};
var one = function ($elem,events,var_args){
var p__33477 = null;
if (arguments.length > 2) {
var G__33480__i = 0, G__33480__a = new Array(arguments.length -  2);
while (G__33480__i < G__33480__a.length) {G__33480__a[G__33480__i] = arguments[G__33480__i + 2]; ++G__33480__i;}
  p__33477 = new cljs.core.IndexedSeq(G__33480__a,0);
} 
return one__delegate.call(this,$elem,events,p__33477);};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__33481){
var $elem = cljs.core.first(arglist__33481);
arglist__33481 = cljs.core.next(arglist__33481);
var events = cljs.core.first(arglist__33481);
var p__33477 = cljs.core.rest(arglist__33481);
return one__delegate($elem,events,p__33477);
});
one.cljs$core$IFn$_invoke$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__33482){
var vec__33484 = p__33482;
var sel = cljs.core.nth.call(null,vec__33484,(0),null);
var handler = cljs.core.nth.call(null,vec__33484,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
};
var off = function ($elem,events,var_args){
var p__33482 = null;
if (arguments.length > 2) {
var G__33485__i = 0, G__33485__a = new Array(arguments.length -  2);
while (G__33485__i < G__33485__a.length) {G__33485__a[G__33485__i] = arguments[G__33485__i + 2]; ++G__33485__i;}
  p__33482 = new cljs.core.IndexedSeq(G__33485__a,0);
} 
return off__delegate.call(this,$elem,events,p__33482);};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__33486){
var $elem = cljs.core.first(arglist__33486);
arglist__33486 = cljs.core.next(arglist__33486);
var events = cljs.core.first(arglist__33486);
var p__33482 = cljs.core.rest(arglist__33486);
return off__delegate($elem,events,p__33482);
});
off.cljs$core$IFn$_invoke$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
jayq.core.height = (function() {
var height = null;
var height__1 = (function ($elem){
return $elem.height();
});
var height__2 = (function ($elem,x){
return $elem.height(x);
});
height = function($elem,x){
switch(arguments.length){
case 1:
return height__1.call(this,$elem);
case 2:
return height__2.call(this,$elem,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
height.cljs$core$IFn$_invoke$arity$1 = height__1;
height.cljs$core$IFn$_invoke$arity$2 = height__2;
return height;
})()
;
jayq.core.width = (function() {
var width = null;
var width__1 = (function ($elem){
return $elem.width();
});
var width__2 = (function ($elem,x){
return $elem.width(x);
});
width = function($elem,x){
switch(arguments.length){
case 1:
return width__1.call(this,$elem);
case 2:
return width__2.call(this,$elem,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
width.cljs$core$IFn$_invoke$arity$1 = width__1;
width.cljs$core$IFn$_invoke$arity$2 = width__2;
return width;
})()
;
jayq.core.inner_height = (function inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function() {
var offset = null;
var offset__1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
var offset__2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});
offset = function($elem,coords){
switch(arguments.length){
case 1:
return offset__1.call(this,$elem);
case 2:
return offset__2.call(this,$elem,coords);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offset.cljs$core$IFn$_invoke$arity$1 = offset__1;
offset.cljs$core$IFn$_invoke$arity$2 = offset__2;
return offset;
})()
;
jayq.core.offset_parent = (function offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function() {
var scroll_left = null;
var scroll_left__1 = (function ($elem){
return $elem.scrollLeft();
});
var scroll_left__2 = (function ($elem,x){
return $elem.scrollLeft(x);
});
scroll_left = function($elem,x){
switch(arguments.length){
case 1:
return scroll_left__1.call(this,$elem);
case 2:
return scroll_left__2.call(this,$elem,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scroll_left.cljs$core$IFn$_invoke$arity$1 = scroll_left__1;
scroll_left.cljs$core$IFn$_invoke$arity$2 = scroll_left__2;
return scroll_left;
})()
;
jayq.core.scroll_top = (function() {
var scroll_top = null;
var scroll_top__1 = (function ($elem){
return $elem.scrollTop();
});
var scroll_top__2 = (function ($elem,x){
return $elem.scrollTop(x);
});
scroll_top = function($elem,x){
switch(arguments.length){
case 1:
return scroll_top__1.call(this,$elem);
case 2:
return scroll_top__2.call(this,$elem,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scroll_top.cljs$core$IFn$_invoke$arity$1 = scroll_top__1;
scroll_top.cljs$core$IFn$_invoke$arity$2 = scroll_top__2;
return scroll_top;
})()
;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function() {
var then = null;
var then__3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});
var then__4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});
then = function(deferred,done_fn,fail_fn,progress_fn){
switch(arguments.length){
case 3:
return then__3.call(this,deferred,done_fn,fail_fn);
case 4:
return then__4.call(this,deferred,done_fn,fail_fn,progress_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
then.cljs$core$IFn$_invoke$arity$3 = then__3;
then.cljs$core$IFn$_invoke$arity$4 = then__4;
return then;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.done = (function() { 
var done__delegate = function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
};
var done = function (deferred,var_args){
var fns_args = null;
if (arguments.length > 1) {
var G__33487__i = 0, G__33487__a = new Array(arguments.length -  1);
while (G__33487__i < G__33487__a.length) {G__33487__a[G__33487__i] = arguments[G__33487__i + 1]; ++G__33487__i;}
  fns_args = new cljs.core.IndexedSeq(G__33487__a,0);
} 
return done__delegate.call(this,deferred,fns_args);};
done.cljs$lang$maxFixedArity = 1;
done.cljs$lang$applyTo = (function (arglist__33488){
var deferred = cljs.core.first(arglist__33488);
var fns_args = cljs.core.rest(arglist__33488);
return done__delegate(deferred,fns_args);
});
done.cljs$core$IFn$_invoke$arity$variadic = done__delegate;
return done;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fail = (function() { 
var fail__delegate = function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
};
var fail = function (deferred,var_args){
var fns_args = null;
if (arguments.length > 1) {
var G__33489__i = 0, G__33489__a = new Array(arguments.length -  1);
while (G__33489__i < G__33489__a.length) {G__33489__a[G__33489__i] = arguments[G__33489__i + 1]; ++G__33489__i;}
  fns_args = new cljs.core.IndexedSeq(G__33489__a,0);
} 
return fail__delegate.call(this,deferred,fns_args);};
fail.cljs$lang$maxFixedArity = 1;
fail.cljs$lang$applyTo = (function (arglist__33490){
var deferred = cljs.core.first(arglist__33490);
var fns_args = cljs.core.rest(arglist__33490);
return fail__delegate(deferred,fns_args);
});
fail.cljs$core$IFn$_invoke$arity$variadic = fail__delegate;
return fail;
})()
;
jayq.core.progress = (function progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function() {
var promise = null;
var promise__1 = (function (deferred){
return deferred.promise();
});
var promise__2 = (function (deferred,type){
return deferred.promise(type);
});
var promise__3 = (function (deferred,type,target){
return deferred.promise(type,target);
});
promise = function(deferred,type,target){
switch(arguments.length){
case 1:
return promise__1.call(this,deferred);
case 2:
return promise__2.call(this,deferred,type);
case 3:
return promise__3.call(this,deferred,type,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
promise.cljs$core$IFn$_invoke$arity$1 = promise__1;
promise.cljs$core$IFn$_invoke$arity$2 = promise__2;
promise.cljs$core$IFn$_invoke$arity$3 = promise__3;
return promise;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.always = (function() { 
var always__delegate = function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
};
var always = function (deferred,var_args){
var fns_args = null;
if (arguments.length > 1) {
var G__33491__i = 0, G__33491__a = new Array(arguments.length -  1);
while (G__33491__i < G__33491__a.length) {G__33491__a[G__33491__i] = arguments[G__33491__i + 1]; ++G__33491__i;}
  fns_args = new cljs.core.IndexedSeq(G__33491__a,0);
} 
return always__delegate.call(this,deferred,fns_args);};
always.cljs$lang$maxFixedArity = 1;
always.cljs$lang$applyTo = (function (arglist__33492){
var deferred = cljs.core.first(arglist__33492);
var fns_args = cljs.core.rest(arglist__33492);
return always__delegate(deferred,fns_args);
});
always.cljs$core$IFn$_invoke$arity$variadic = always__delegate;
return always;
})()
;
jayq.core.reject = (function reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function() {
var pipe = null;
var pipe__2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});
var pipe__3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});
var pipe__4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});
pipe = function(deferred,done_filter,fail_filter,progress_filter){
switch(arguments.length){
case 2:
return pipe__2.call(this,deferred,done_filter);
case 3:
return pipe__3.call(this,deferred,done_filter,fail_filter);
case 4:
return pipe__4.call(this,deferred,done_filter,fail_filter,progress_filter);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
pipe.cljs$core$IFn$_invoke$arity$4 = pipe__4;
return pipe;
})()
;
jayq.core.state = (function state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map?rel=1428647923013