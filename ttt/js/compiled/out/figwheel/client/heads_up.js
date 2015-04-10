// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__56224_56232 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__56225_56233 = null;
var count__56226_56234 = (0);
var i__56227_56235 = (0);
while(true){
if((i__56227_56235 < count__56226_56234)){
var k_56236 = cljs.core._nth.call(null,chunk__56225_56233,i__56227_56235);
e.setAttribute(cljs.core.name.call(null,k_56236),cljs.core.get.call(null,attrs,k_56236));

var G__56237 = seq__56224_56232;
var G__56238 = chunk__56225_56233;
var G__56239 = count__56226_56234;
var G__56240 = (i__56227_56235 + (1));
seq__56224_56232 = G__56237;
chunk__56225_56233 = G__56238;
count__56226_56234 = G__56239;
i__56227_56235 = G__56240;
continue;
} else {
var temp__4126__auto___56241 = cljs.core.seq.call(null,seq__56224_56232);
if(temp__4126__auto___56241){
var seq__56224_56242__$1 = temp__4126__auto___56241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56224_56242__$1)){
var c__16932__auto___56243 = cljs.core.chunk_first.call(null,seq__56224_56242__$1);
var G__56244 = cljs.core.chunk_rest.call(null,seq__56224_56242__$1);
var G__56245 = c__16932__auto___56243;
var G__56246 = cljs.core.count.call(null,c__16932__auto___56243);
var G__56247 = (0);
seq__56224_56232 = G__56244;
chunk__56225_56233 = G__56245;
count__56226_56234 = G__56246;
i__56227_56235 = G__56247;
continue;
} else {
var k_56248 = cljs.core.first.call(null,seq__56224_56242__$1);
e.setAttribute(cljs.core.name.call(null,k_56248),cljs.core.get.call(null,attrs,k_56248));

var G__56249 = cljs.core.next.call(null,seq__56224_56242__$1);
var G__56250 = null;
var G__56251 = (0);
var G__56252 = (0);
seq__56224_56232 = G__56249;
chunk__56225_56233 = G__56250;
count__56226_56234 = G__56251;
i__56227_56235 = G__56252;
continue;
}
} else {
}
}
break;
}

var seq__56228_56253 = cljs.core.seq.call(null,children);
var chunk__56229_56254 = null;
var count__56230_56255 = (0);
var i__56231_56256 = (0);
while(true){
if((i__56231_56256 < count__56230_56255)){
var ch_56257 = cljs.core._nth.call(null,chunk__56229_56254,i__56231_56256);
e.appendChild(ch_56257);

var G__56258 = seq__56228_56253;
var G__56259 = chunk__56229_56254;
var G__56260 = count__56230_56255;
var G__56261 = (i__56231_56256 + (1));
seq__56228_56253 = G__56258;
chunk__56229_56254 = G__56259;
count__56230_56255 = G__56260;
i__56231_56256 = G__56261;
continue;
} else {
var temp__4126__auto___56262 = cljs.core.seq.call(null,seq__56228_56253);
if(temp__4126__auto___56262){
var seq__56228_56263__$1 = temp__4126__auto___56262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56228_56263__$1)){
var c__16932__auto___56264 = cljs.core.chunk_first.call(null,seq__56228_56263__$1);
var G__56265 = cljs.core.chunk_rest.call(null,seq__56228_56263__$1);
var G__56266 = c__16932__auto___56264;
var G__56267 = cljs.core.count.call(null,c__16932__auto___56264);
var G__56268 = (0);
seq__56228_56253 = G__56265;
chunk__56229_56254 = G__56266;
count__56230_56255 = G__56267;
i__56231_56256 = G__56268;
continue;
} else {
var ch_56269 = cljs.core.first.call(null,seq__56228_56263__$1);
e.appendChild(ch_56269);

var G__56270 = cljs.core.next.call(null,seq__56228_56263__$1);
var G__56271 = null;
var G__56272 = (0);
var G__56273 = (0);
seq__56228_56253 = G__56270;
chunk__56229_56254 = G__56271;
count__56230_56255 = G__56272;
i__56231_56256 = G__56273;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__56274__i = 0, G__56274__a = new Array(arguments.length -  2);
while (G__56274__i < G__56274__a.length) {G__56274__a[G__56274__i] = arguments[G__56274__i + 2]; ++G__56274__i;}
  children = new cljs.core.IndexedSeq(G__56274__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__56275){
var t = cljs.core.first(arglist__56275);
arglist__56275 = cljs.core.next(arglist__56275);
var attrs = cljs.core.first(arglist__56275);
var children = cljs.core.rest(arglist__56275);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__,hierarchy__17046__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__,hierarchy__17046__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_56276 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_56276.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_56276.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_56276.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_56276);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__56277,st_map){
var map__56281 = p__56277;
var map__56281__$1 = ((cljs.core.seq_QMARK_.call(null,map__56281))?cljs.core.apply.call(null,cljs.core.hash_map,map__56281):map__56281);
var container_el = cljs.core.get.call(null,map__56281__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__56281,map__56281__$1,container_el){
return (function (p__56282){
var vec__56283 = p__56282;
var k = cljs.core.nth.call(null,vec__56283,(0),null);
var v = cljs.core.nth.call(null,vec__56283,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__56281,map__56281__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__56284,dom_str){
var map__56286 = p__56284;
var map__56286__$1 = ((cljs.core.seq_QMARK_.call(null,map__56286))?cljs.core.apply.call(null,cljs.core.hash_map,map__56286):map__56286);
var c = map__56286__$1;
var content_area_el = cljs.core.get.call(null,map__56286__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__56287){
var map__56289 = p__56287;
var map__56289__$1 = ((cljs.core.seq_QMARK_.call(null,map__56289))?cljs.core.apply.call(null,cljs.core.hash_map,map__56289):map__56289);
var content_area_el = cljs.core.get.call(null,map__56289__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__){
return (function (state_56331){
var state_val_56332 = (state_56331[(1)]);
if((state_val_56332 === (2))){
var inst_56316 = (state_56331[(7)]);
var inst_56325 = (state_56331[(2)]);
var inst_56326 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_56327 = ["auto"];
var inst_56328 = cljs.core.PersistentHashMap.fromArrays(inst_56326,inst_56327);
var inst_56329 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_56316,inst_56328);
var state_56331__$1 = (function (){var statearr_56333 = state_56331;
(statearr_56333[(8)] = inst_56325);

return statearr_56333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56331__$1,inst_56329);
} else {
if((state_val_56332 === (1))){
var inst_56316 = (state_56331[(7)]);
var inst_56316__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_56317 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_56318 = ["10px","10px","100%","68px","1.0"];
var inst_56319 = cljs.core.PersistentHashMap.fromArrays(inst_56317,inst_56318);
var inst_56320 = cljs.core.merge.call(null,inst_56319,style);
var inst_56321 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_56316__$1,inst_56320);
var inst_56322 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_56316__$1,msg);
var inst_56323 = cljs.core.async.timeout.call(null,(300));
var state_56331__$1 = (function (){var statearr_56334 = state_56331;
(statearr_56334[(9)] = inst_56321);

(statearr_56334[(7)] = inst_56316__$1);

(statearr_56334[(10)] = inst_56322);

return statearr_56334;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56331__$1,(2),inst_56323);
} else {
return null;
}
}
});})(c__19254__auto__))
;
return ((function (switch__19198__auto__,c__19254__auto__){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_56338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56338[(0)] = state_machine__19199__auto__);

(statearr_56338[(1)] = (1));

return statearr_56338;
});
var state_machine__19199__auto____1 = (function (state_56331){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_56331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e56339){if((e56339 instanceof Object)){
var ex__19202__auto__ = e56339;
var statearr_56340_56342 = state_56331;
(statearr_56340_56342[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56343 = state_56331;
state_56331 = G__56343;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_56331){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_56331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_56341 = f__19255__auto__.call(null);
(statearr_56341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_56341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__))
);

return c__19254__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__56345 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__56345,(0),null);
var ln = cljs.core.nth.call(null,vec__56345,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__56348 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__56348,(0),null);
var file_line = cljs.core.nth.call(null,vec__56348,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__56348,file_name,file_line){
return (function (p1__56346_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__56346_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__56348,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__56350 = figwheel.client.heads_up.ensure_container.call(null);
var map__56350__$1 = ((cljs.core.seq_QMARK_.call(null,map__56350))?cljs.core.apply.call(null,cljs.core.hash_map,map__56350):map__56350);
var content_area_el = cljs.core.get.call(null,map__56350__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__){
return (function (state_56397){
var state_val_56398 = (state_56397[(1)]);
if((state_val_56398 === (3))){
var inst_56380 = (state_56397[(7)]);
var inst_56394 = (state_56397[(2)]);
var inst_56395 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_56380,"");
var state_56397__$1 = (function (){var statearr_56399 = state_56397;
(statearr_56399[(8)] = inst_56394);

return statearr_56399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56397__$1,inst_56395);
} else {
if((state_val_56398 === (2))){
var inst_56380 = (state_56397[(7)]);
var inst_56387 = (state_56397[(2)]);
var inst_56388 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_56389 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_56390 = cljs.core.PersistentHashMap.fromArrays(inst_56388,inst_56389);
var inst_56391 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_56380,inst_56390);
var inst_56392 = cljs.core.async.timeout.call(null,(200));
var state_56397__$1 = (function (){var statearr_56400 = state_56397;
(statearr_56400[(9)] = inst_56391);

(statearr_56400[(10)] = inst_56387);

return statearr_56400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56397__$1,(3),inst_56392);
} else {
if((state_val_56398 === (1))){
var inst_56380 = (state_56397[(7)]);
var inst_56380__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_56381 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_56382 = ["0.0"];
var inst_56383 = cljs.core.PersistentHashMap.fromArrays(inst_56381,inst_56382);
var inst_56384 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_56380__$1,inst_56383);
var inst_56385 = cljs.core.async.timeout.call(null,(300));
var state_56397__$1 = (function (){var statearr_56401 = state_56397;
(statearr_56401[(7)] = inst_56380__$1);

(statearr_56401[(11)] = inst_56384);

return statearr_56401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56397__$1,(2),inst_56385);
} else {
return null;
}
}
}
});})(c__19254__auto__))
;
return ((function (switch__19198__auto__,c__19254__auto__){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_56405 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56405[(0)] = state_machine__19199__auto__);

(statearr_56405[(1)] = (1));

return statearr_56405;
});
var state_machine__19199__auto____1 = (function (state_56397){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_56397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e56406){if((e56406 instanceof Object)){
var ex__19202__auto__ = e56406;
var statearr_56407_56409 = state_56397;
(statearr_56407_56409[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56410 = state_56397;
state_56397 = G__56410;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_56397){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_56397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_56408 = f__19255__auto__.call(null);
(statearr_56408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_56408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__))
);

return c__19254__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__){
return (function (state_56442){
var state_val_56443 = (state_56442[(1)]);
if((state_val_56443 === (4))){
var inst_56440 = (state_56442[(2)]);
var state_56442__$1 = state_56442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56442__$1,inst_56440);
} else {
if((state_val_56443 === (3))){
var inst_56437 = (state_56442[(2)]);
var inst_56438 = figwheel.client.heads_up.clear.call(null);
var state_56442__$1 = (function (){var statearr_56444 = state_56442;
(statearr_56444[(7)] = inst_56437);

return statearr_56444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56442__$1,(4),inst_56438);
} else {
if((state_val_56443 === (2))){
var inst_56434 = (state_56442[(2)]);
var inst_56435 = cljs.core.async.timeout.call(null,(400));
var state_56442__$1 = (function (){var statearr_56445 = state_56442;
(statearr_56445[(8)] = inst_56434);

return statearr_56445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56442__$1,(3),inst_56435);
} else {
if((state_val_56443 === (1))){
var inst_56432 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_56442__$1 = state_56442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56442__$1,(2),inst_56432);
} else {
return null;
}
}
}
}
});})(c__19254__auto__))
;
return ((function (switch__19198__auto__,c__19254__auto__){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_56449 = [null,null,null,null,null,null,null,null,null];
(statearr_56449[(0)] = state_machine__19199__auto__);

(statearr_56449[(1)] = (1));

return statearr_56449;
});
var state_machine__19199__auto____1 = (function (state_56442){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_56442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e56450){if((e56450 instanceof Object)){
var ex__19202__auto__ = e56450;
var statearr_56451_56453 = state_56442;
(statearr_56451_56453[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56454 = state_56442;
state_56442 = G__56454;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_56442){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_56442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_56452 = f__19255__auto__.call(null);
(statearr_56452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_56452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__))
);

return c__19254__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1428649985409