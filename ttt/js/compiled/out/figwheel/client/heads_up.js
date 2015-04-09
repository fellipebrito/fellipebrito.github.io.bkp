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
var seq__34266_34274 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34267_34275 = null;
var count__34268_34276 = (0);
var i__34269_34277 = (0);
while(true){
if((i__34269_34277 < count__34268_34276)){
var k_34278 = cljs.core._nth.call(null,chunk__34267_34275,i__34269_34277);
e.setAttribute(cljs.core.name.call(null,k_34278),cljs.core.get.call(null,attrs,k_34278));

var G__34279 = seq__34266_34274;
var G__34280 = chunk__34267_34275;
var G__34281 = count__34268_34276;
var G__34282 = (i__34269_34277 + (1));
seq__34266_34274 = G__34279;
chunk__34267_34275 = G__34280;
count__34268_34276 = G__34281;
i__34269_34277 = G__34282;
continue;
} else {
var temp__4126__auto___34283 = cljs.core.seq.call(null,seq__34266_34274);
if(temp__4126__auto___34283){
var seq__34266_34284__$1 = temp__4126__auto___34283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34266_34284__$1)){
var c__16933__auto___34285 = cljs.core.chunk_first.call(null,seq__34266_34284__$1);
var G__34286 = cljs.core.chunk_rest.call(null,seq__34266_34284__$1);
var G__34287 = c__16933__auto___34285;
var G__34288 = cljs.core.count.call(null,c__16933__auto___34285);
var G__34289 = (0);
seq__34266_34274 = G__34286;
chunk__34267_34275 = G__34287;
count__34268_34276 = G__34288;
i__34269_34277 = G__34289;
continue;
} else {
var k_34290 = cljs.core.first.call(null,seq__34266_34284__$1);
e.setAttribute(cljs.core.name.call(null,k_34290),cljs.core.get.call(null,attrs,k_34290));

var G__34291 = cljs.core.next.call(null,seq__34266_34284__$1);
var G__34292 = null;
var G__34293 = (0);
var G__34294 = (0);
seq__34266_34274 = G__34291;
chunk__34267_34275 = G__34292;
count__34268_34276 = G__34293;
i__34269_34277 = G__34294;
continue;
}
} else {
}
}
break;
}

var seq__34270_34295 = cljs.core.seq.call(null,children);
var chunk__34271_34296 = null;
var count__34272_34297 = (0);
var i__34273_34298 = (0);
while(true){
if((i__34273_34298 < count__34272_34297)){
var ch_34299 = cljs.core._nth.call(null,chunk__34271_34296,i__34273_34298);
e.appendChild(ch_34299);

var G__34300 = seq__34270_34295;
var G__34301 = chunk__34271_34296;
var G__34302 = count__34272_34297;
var G__34303 = (i__34273_34298 + (1));
seq__34270_34295 = G__34300;
chunk__34271_34296 = G__34301;
count__34272_34297 = G__34302;
i__34273_34298 = G__34303;
continue;
} else {
var temp__4126__auto___34304 = cljs.core.seq.call(null,seq__34270_34295);
if(temp__4126__auto___34304){
var seq__34270_34305__$1 = temp__4126__auto___34304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34270_34305__$1)){
var c__16933__auto___34306 = cljs.core.chunk_first.call(null,seq__34270_34305__$1);
var G__34307 = cljs.core.chunk_rest.call(null,seq__34270_34305__$1);
var G__34308 = c__16933__auto___34306;
var G__34309 = cljs.core.count.call(null,c__16933__auto___34306);
var G__34310 = (0);
seq__34270_34295 = G__34307;
chunk__34271_34296 = G__34308;
count__34272_34297 = G__34309;
i__34273_34298 = G__34310;
continue;
} else {
var ch_34311 = cljs.core.first.call(null,seq__34270_34305__$1);
e.appendChild(ch_34311);

var G__34312 = cljs.core.next.call(null,seq__34270_34305__$1);
var G__34313 = null;
var G__34314 = (0);
var G__34315 = (0);
seq__34270_34295 = G__34312;
chunk__34271_34296 = G__34313;
count__34272_34297 = G__34314;
i__34273_34298 = G__34315;
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
var G__34316__i = 0, G__34316__a = new Array(arguments.length -  2);
while (G__34316__i < G__34316__a.length) {G__34316__a[G__34316__i] = arguments[G__34316__i + 2]; ++G__34316__i;}
  children = new cljs.core.IndexedSeq(G__34316__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__34317){
var t = cljs.core.first(arglist__34317);
arglist__34317 = cljs.core.next(arglist__34317);
var attrs = cljs.core.first(arglist__34317);
var children = cljs.core.rest(arglist__34317);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17046__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17047__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17043__auto__,prefer_table__17044__auto__,method_cache__17045__auto__,cached_hierarchy__17046__auto__,hierarchy__17047__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17043__auto__,prefer_table__17044__auto__,method_cache__17045__auto__,cached_hierarchy__17046__auto__,hierarchy__17047__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17047__auto__,method_table__17043__auto__,prefer_table__17044__auto__,method_cache__17045__auto__,cached_hierarchy__17046__auto__));
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
var el_34318 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34318.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34318.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34318.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34318);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__34319,st_map){
var map__34323 = p__34319;
var map__34323__$1 = ((cljs.core.seq_QMARK_.call(null,map__34323))?cljs.core.apply.call(null,cljs.core.hash_map,map__34323):map__34323);
var container_el = cljs.core.get.call(null,map__34323__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34323,map__34323__$1,container_el){
return (function (p__34324){
var vec__34325 = p__34324;
var k = cljs.core.nth.call(null,vec__34325,(0),null);
var v = cljs.core.nth.call(null,vec__34325,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34323,map__34323__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__34326,dom_str){
var map__34328 = p__34326;
var map__34328__$1 = ((cljs.core.seq_QMARK_.call(null,map__34328))?cljs.core.apply.call(null,cljs.core.hash_map,map__34328):map__34328);
var c = map__34328__$1;
var content_area_el = cljs.core.get.call(null,map__34328__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__34329){
var map__34331 = p__34329;
var map__34331__$1 = ((cljs.core.seq_QMARK_.call(null,map__34331))?cljs.core.apply.call(null,cljs.core.hash_map,map__34331):map__34331);
var content_area_el = cljs.core.get.call(null,map__34331__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__){
return (function (state_34373){
var state_val_34374 = (state_34373[(1)]);
if((state_val_34374 === (2))){
var inst_34358 = (state_34373[(7)]);
var inst_34367 = (state_34373[(2)]);
var inst_34368 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34369 = ["auto"];
var inst_34370 = cljs.core.PersistentHashMap.fromArrays(inst_34368,inst_34369);
var inst_34371 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34358,inst_34370);
var state_34373__$1 = (function (){var statearr_34375 = state_34373;
(statearr_34375[(8)] = inst_34367);

return statearr_34375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34373__$1,inst_34371);
} else {
if((state_val_34374 === (1))){
var inst_34358 = (state_34373[(7)]);
var inst_34358__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34359 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34360 = ["10px","10px","100%","68px","1.0"];
var inst_34361 = cljs.core.PersistentHashMap.fromArrays(inst_34359,inst_34360);
var inst_34362 = cljs.core.merge.call(null,inst_34361,style);
var inst_34363 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34358__$1,inst_34362);
var inst_34364 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34358__$1,msg);
var inst_34365 = cljs.core.async.timeout.call(null,(300));
var state_34373__$1 = (function (){var statearr_34376 = state_34373;
(statearr_34376[(9)] = inst_34364);

(statearr_34376[(7)] = inst_34358__$1);

(statearr_34376[(10)] = inst_34363);

return statearr_34376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34373__$1,(2),inst_34365);
} else {
return null;
}
}
});})(c__19255__auto__))
;
return ((function (switch__19199__auto__,c__19255__auto__){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_34380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34380[(0)] = state_machine__19200__auto__);

(statearr_34380[(1)] = (1));

return statearr_34380;
});
var state_machine__19200__auto____1 = (function (state_34373){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_34373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e34381){if((e34381 instanceof Object)){
var ex__19203__auto__ = e34381;
var statearr_34382_34384 = state_34373;
(statearr_34382_34384[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34385 = state_34373;
state_34373 = G__34385;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_34373){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_34373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__))
})();
var state__19257__auto__ = (function (){var statearr_34383 = f__19256__auto__.call(null);
(statearr_34383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__))
);

return c__19255__auto__;
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
var vec__34387 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__34387,(0),null);
var ln = cljs.core.nth.call(null,vec__34387,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__34390 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__34390,(0),null);
var file_line = cljs.core.nth.call(null,vec__34390,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34390,file_name,file_line){
return (function (p1__34388_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34388_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__34390,file_name,file_line))
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
var map__34392 = figwheel.client.heads_up.ensure_container.call(null);
var map__34392__$1 = ((cljs.core.seq_QMARK_.call(null,map__34392))?cljs.core.apply.call(null,cljs.core.hash_map,map__34392):map__34392);
var content_area_el = cljs.core.get.call(null,map__34392__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__){
return (function (state_34439){
var state_val_34440 = (state_34439[(1)]);
if((state_val_34440 === (3))){
var inst_34422 = (state_34439[(7)]);
var inst_34436 = (state_34439[(2)]);
var inst_34437 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34422,"");
var state_34439__$1 = (function (){var statearr_34441 = state_34439;
(statearr_34441[(8)] = inst_34436);

return statearr_34441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34439__$1,inst_34437);
} else {
if((state_val_34440 === (2))){
var inst_34422 = (state_34439[(7)]);
var inst_34429 = (state_34439[(2)]);
var inst_34430 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34431 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34432 = cljs.core.PersistentHashMap.fromArrays(inst_34430,inst_34431);
var inst_34433 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34422,inst_34432);
var inst_34434 = cljs.core.async.timeout.call(null,(200));
var state_34439__$1 = (function (){var statearr_34442 = state_34439;
(statearr_34442[(9)] = inst_34433);

(statearr_34442[(10)] = inst_34429);

return statearr_34442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34439__$1,(3),inst_34434);
} else {
if((state_val_34440 === (1))){
var inst_34422 = (state_34439[(7)]);
var inst_34422__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34423 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34424 = ["0.0"];
var inst_34425 = cljs.core.PersistentHashMap.fromArrays(inst_34423,inst_34424);
var inst_34426 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34422__$1,inst_34425);
var inst_34427 = cljs.core.async.timeout.call(null,(300));
var state_34439__$1 = (function (){var statearr_34443 = state_34439;
(statearr_34443[(7)] = inst_34422__$1);

(statearr_34443[(11)] = inst_34426);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34439__$1,(2),inst_34427);
} else {
return null;
}
}
}
});})(c__19255__auto__))
;
return ((function (switch__19199__auto__,c__19255__auto__){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_34447 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34447[(0)] = state_machine__19200__auto__);

(statearr_34447[(1)] = (1));

return statearr_34447;
});
var state_machine__19200__auto____1 = (function (state_34439){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_34439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e34448){if((e34448 instanceof Object)){
var ex__19203__auto__ = e34448;
var statearr_34449_34451 = state_34439;
(statearr_34449_34451[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34452 = state_34439;
state_34439 = G__34452;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_34439){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_34439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__))
})();
var state__19257__auto__ = (function (){var statearr_34450 = f__19256__auto__.call(null);
(statearr_34450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_34450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__))
);

return c__19255__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (4))){
var inst_34482 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34484__$1,inst_34482);
} else {
if((state_val_34485 === (3))){
var inst_34479 = (state_34484[(2)]);
var inst_34480 = figwheel.client.heads_up.clear.call(null);
var state_34484__$1 = (function (){var statearr_34486 = state_34484;
(statearr_34486[(7)] = inst_34479);

return statearr_34486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34484__$1,(4),inst_34480);
} else {
if((state_val_34485 === (2))){
var inst_34476 = (state_34484[(2)]);
var inst_34477 = cljs.core.async.timeout.call(null,(400));
var state_34484__$1 = (function (){var statearr_34487 = state_34484;
(statearr_34487[(8)] = inst_34476);

return statearr_34487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34484__$1,(3),inst_34477);
} else {
if((state_val_34485 === (1))){
var inst_34474 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34484__$1,(2),inst_34474);
} else {
return null;
}
}
}
}
});})(c__19255__auto__))
;
return ((function (switch__19199__auto__,c__19255__auto__){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_34491 = [null,null,null,null,null,null,null,null,null];
(statearr_34491[(0)] = state_machine__19200__auto__);

(statearr_34491[(1)] = (1));

return statearr_34491;
});
var state_machine__19200__auto____1 = (function (state_34484){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_34484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e34492){if((e34492 instanceof Object)){
var ex__19203__auto__ = e34492;
var statearr_34493_34495 = state_34484;
(statearr_34493_34495[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34496 = state_34484;
state_34484 = G__34496;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_34484){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_34484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__))
})();
var state__19257__auto__ = (function (){var statearr_34494 = f__19256__auto__.call(null);
(statearr_34494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_34494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__))
);

return c__19255__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1428567723900