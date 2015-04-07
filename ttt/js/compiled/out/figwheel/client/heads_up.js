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
var seq__31412_31420 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31413_31421 = null;
var count__31414_31422 = (0);
var i__31415_31423 = (0);
while(true){
if((i__31415_31423 < count__31414_31422)){
var k_31424 = cljs.core._nth.call(null,chunk__31413_31421,i__31415_31423);
e.setAttribute(cljs.core.name.call(null,k_31424),cljs.core.get.call(null,attrs,k_31424));

var G__31425 = seq__31412_31420;
var G__31426 = chunk__31413_31421;
var G__31427 = count__31414_31422;
var G__31428 = (i__31415_31423 + (1));
seq__31412_31420 = G__31425;
chunk__31413_31421 = G__31426;
count__31414_31422 = G__31427;
i__31415_31423 = G__31428;
continue;
} else {
var temp__4126__auto___31429 = cljs.core.seq.call(null,seq__31412_31420);
if(temp__4126__auto___31429){
var seq__31412_31430__$1 = temp__4126__auto___31429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31412_31430__$1)){
var c__16932__auto___31431 = cljs.core.chunk_first.call(null,seq__31412_31430__$1);
var G__31432 = cljs.core.chunk_rest.call(null,seq__31412_31430__$1);
var G__31433 = c__16932__auto___31431;
var G__31434 = cljs.core.count.call(null,c__16932__auto___31431);
var G__31435 = (0);
seq__31412_31420 = G__31432;
chunk__31413_31421 = G__31433;
count__31414_31422 = G__31434;
i__31415_31423 = G__31435;
continue;
} else {
var k_31436 = cljs.core.first.call(null,seq__31412_31430__$1);
e.setAttribute(cljs.core.name.call(null,k_31436),cljs.core.get.call(null,attrs,k_31436));

var G__31437 = cljs.core.next.call(null,seq__31412_31430__$1);
var G__31438 = null;
var G__31439 = (0);
var G__31440 = (0);
seq__31412_31420 = G__31437;
chunk__31413_31421 = G__31438;
count__31414_31422 = G__31439;
i__31415_31423 = G__31440;
continue;
}
} else {
}
}
break;
}

var seq__31416_31441 = cljs.core.seq.call(null,children);
var chunk__31417_31442 = null;
var count__31418_31443 = (0);
var i__31419_31444 = (0);
while(true){
if((i__31419_31444 < count__31418_31443)){
var ch_31445 = cljs.core._nth.call(null,chunk__31417_31442,i__31419_31444);
e.appendChild(ch_31445);

var G__31446 = seq__31416_31441;
var G__31447 = chunk__31417_31442;
var G__31448 = count__31418_31443;
var G__31449 = (i__31419_31444 + (1));
seq__31416_31441 = G__31446;
chunk__31417_31442 = G__31447;
count__31418_31443 = G__31448;
i__31419_31444 = G__31449;
continue;
} else {
var temp__4126__auto___31450 = cljs.core.seq.call(null,seq__31416_31441);
if(temp__4126__auto___31450){
var seq__31416_31451__$1 = temp__4126__auto___31450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31416_31451__$1)){
var c__16932__auto___31452 = cljs.core.chunk_first.call(null,seq__31416_31451__$1);
var G__31453 = cljs.core.chunk_rest.call(null,seq__31416_31451__$1);
var G__31454 = c__16932__auto___31452;
var G__31455 = cljs.core.count.call(null,c__16932__auto___31452);
var G__31456 = (0);
seq__31416_31441 = G__31453;
chunk__31417_31442 = G__31454;
count__31418_31443 = G__31455;
i__31419_31444 = G__31456;
continue;
} else {
var ch_31457 = cljs.core.first.call(null,seq__31416_31451__$1);
e.appendChild(ch_31457);

var G__31458 = cljs.core.next.call(null,seq__31416_31451__$1);
var G__31459 = null;
var G__31460 = (0);
var G__31461 = (0);
seq__31416_31441 = G__31458;
chunk__31417_31442 = G__31459;
count__31418_31443 = G__31460;
i__31419_31444 = G__31461;
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
var G__31462__i = 0, G__31462__a = new Array(arguments.length -  2);
while (G__31462__i < G__31462__a.length) {G__31462__a[G__31462__i] = arguments[G__31462__i + 2]; ++G__31462__i;}
  children = new cljs.core.IndexedSeq(G__31462__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__31463){
var t = cljs.core.first(arglist__31463);
arglist__31463 = cljs.core.next(arglist__31463);
var attrs = cljs.core.first(arglist__31463);
var children = cljs.core.rest(arglist__31463);
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
var el_31464 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_31464.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_31464.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_31464.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31464);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__31465,st_map){
var map__31469 = p__31465;
var map__31469__$1 = ((cljs.core.seq_QMARK_.call(null,map__31469))?cljs.core.apply.call(null,cljs.core.hash_map,map__31469):map__31469);
var container_el = cljs.core.get.call(null,map__31469__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31469,map__31469__$1,container_el){
return (function (p__31470){
var vec__31471 = p__31470;
var k = cljs.core.nth.call(null,vec__31471,(0),null);
var v = cljs.core.nth.call(null,vec__31471,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31469,map__31469__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__31472,dom_str){
var map__31474 = p__31472;
var map__31474__$1 = ((cljs.core.seq_QMARK_.call(null,map__31474))?cljs.core.apply.call(null,cljs.core.hash_map,map__31474):map__31474);
var c = map__31474__$1;
var content_area_el = cljs.core.get.call(null,map__31474__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__31475){
var map__31477 = p__31475;
var map__31477__$1 = ((cljs.core.seq_QMARK_.call(null,map__31477))?cljs.core.apply.call(null,cljs.core.hash_map,map__31477):map__31477);
var content_area_el = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__){
return (function (state_31519){
var state_val_31520 = (state_31519[(1)]);
if((state_val_31520 === (2))){
var inst_31504 = (state_31519[(7)]);
var inst_31513 = (state_31519[(2)]);
var inst_31514 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31515 = ["auto"];
var inst_31516 = cljs.core.PersistentHashMap.fromArrays(inst_31514,inst_31515);
var inst_31517 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31504,inst_31516);
var state_31519__$1 = (function (){var statearr_31521 = state_31519;
(statearr_31521[(8)] = inst_31513);

return statearr_31521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31519__$1,inst_31517);
} else {
if((state_val_31520 === (1))){
var inst_31504 = (state_31519[(7)]);
var inst_31504__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31505 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31506 = ["10px","10px","100%","68px","1.0"];
var inst_31507 = cljs.core.PersistentHashMap.fromArrays(inst_31505,inst_31506);
var inst_31508 = cljs.core.merge.call(null,inst_31507,style);
var inst_31509 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31504__$1,inst_31508);
var inst_31510 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31504__$1,msg);
var inst_31511 = cljs.core.async.timeout.call(null,(300));
var state_31519__$1 = (function (){var statearr_31522 = state_31519;
(statearr_31522[(9)] = inst_31510);

(statearr_31522[(7)] = inst_31504__$1);

(statearr_31522[(10)] = inst_31509);

return statearr_31522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31519__$1,(2),inst_31511);
} else {
return null;
}
}
});})(c__19569__auto__))
;
return ((function (switch__19513__auto__,c__19569__auto__){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_31526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31526[(0)] = state_machine__19514__auto__);

(statearr_31526[(1)] = (1));

return statearr_31526;
});
var state_machine__19514__auto____1 = (function (state_31519){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_31519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e31527){if((e31527 instanceof Object)){
var ex__19517__auto__ = e31527;
var statearr_31528_31530 = state_31519;
(statearr_31528_31530[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31531 = state_31519;
state_31519 = G__31531;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_31519){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_31519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__))
})();
var state__19571__auto__ = (function (){var statearr_31529 = f__19570__auto__.call(null);
(statearr_31529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_31529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__))
);

return c__19569__auto__;
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
var vec__31533 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__31533,(0),null);
var ln = cljs.core.nth.call(null,vec__31533,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__31536 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__31536,(0),null);
var file_line = cljs.core.nth.call(null,vec__31536,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31536,file_name,file_line){
return (function (p1__31534_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31534_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__31536,file_name,file_line))
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
var map__31538 = figwheel.client.heads_up.ensure_container.call(null);
var map__31538__$1 = ((cljs.core.seq_QMARK_.call(null,map__31538))?cljs.core.apply.call(null,cljs.core.hash_map,map__31538):map__31538);
var content_area_el = cljs.core.get.call(null,map__31538__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__){
return (function (state_31585){
var state_val_31586 = (state_31585[(1)]);
if((state_val_31586 === (3))){
var inst_31568 = (state_31585[(7)]);
var inst_31582 = (state_31585[(2)]);
var inst_31583 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31568,"");
var state_31585__$1 = (function (){var statearr_31587 = state_31585;
(statearr_31587[(8)] = inst_31582);

return statearr_31587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31585__$1,inst_31583);
} else {
if((state_val_31586 === (2))){
var inst_31568 = (state_31585[(7)]);
var inst_31575 = (state_31585[(2)]);
var inst_31576 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31577 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31578 = cljs.core.PersistentHashMap.fromArrays(inst_31576,inst_31577);
var inst_31579 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31568,inst_31578);
var inst_31580 = cljs.core.async.timeout.call(null,(200));
var state_31585__$1 = (function (){var statearr_31588 = state_31585;
(statearr_31588[(9)] = inst_31575);

(statearr_31588[(10)] = inst_31579);

return statearr_31588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31585__$1,(3),inst_31580);
} else {
if((state_val_31586 === (1))){
var inst_31568 = (state_31585[(7)]);
var inst_31568__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31569 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31570 = ["0.0"];
var inst_31571 = cljs.core.PersistentHashMap.fromArrays(inst_31569,inst_31570);
var inst_31572 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31568__$1,inst_31571);
var inst_31573 = cljs.core.async.timeout.call(null,(300));
var state_31585__$1 = (function (){var statearr_31589 = state_31585;
(statearr_31589[(11)] = inst_31572);

(statearr_31589[(7)] = inst_31568__$1);

return statearr_31589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31585__$1,(2),inst_31573);
} else {
return null;
}
}
}
});})(c__19569__auto__))
;
return ((function (switch__19513__auto__,c__19569__auto__){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_31593 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31593[(0)] = state_machine__19514__auto__);

(statearr_31593[(1)] = (1));

return statearr_31593;
});
var state_machine__19514__auto____1 = (function (state_31585){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_31585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e31594){if((e31594 instanceof Object)){
var ex__19517__auto__ = e31594;
var statearr_31595_31597 = state_31585;
(statearr_31595_31597[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31598 = state_31585;
state_31585 = G__31598;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_31585){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_31585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__))
})();
var state__19571__auto__ = (function (){var statearr_31596 = f__19570__auto__.call(null);
(statearr_31596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_31596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__))
);

return c__19569__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__){
return (function (state_31630){
var state_val_31631 = (state_31630[(1)]);
if((state_val_31631 === (4))){
var inst_31628 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31630__$1,inst_31628);
} else {
if((state_val_31631 === (3))){
var inst_31625 = (state_31630[(2)]);
var inst_31626 = figwheel.client.heads_up.clear.call(null);
var state_31630__$1 = (function (){var statearr_31632 = state_31630;
(statearr_31632[(7)] = inst_31625);

return statearr_31632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(4),inst_31626);
} else {
if((state_val_31631 === (2))){
var inst_31622 = (state_31630[(2)]);
var inst_31623 = cljs.core.async.timeout.call(null,(400));
var state_31630__$1 = (function (){var statearr_31633 = state_31630;
(statearr_31633[(8)] = inst_31622);

return statearr_31633;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(3),inst_31623);
} else {
if((state_val_31631 === (1))){
var inst_31620 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(2),inst_31620);
} else {
return null;
}
}
}
}
});})(c__19569__auto__))
;
return ((function (switch__19513__auto__,c__19569__auto__){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_31637 = [null,null,null,null,null,null,null,null,null];
(statearr_31637[(0)] = state_machine__19514__auto__);

(statearr_31637[(1)] = (1));

return statearr_31637;
});
var state_machine__19514__auto____1 = (function (state_31630){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_31630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e31638){if((e31638 instanceof Object)){
var ex__19517__auto__ = e31638;
var statearr_31639_31641 = state_31630;
(statearr_31639_31641[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31642 = state_31630;
state_31630 = G__31642;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_31630){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_31630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__))
})();
var state__19571__auto__ = (function (){var statearr_31640 = f__19570__auto__.call(null);
(statearr_31640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_31640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__))
);

return c__19569__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1428378452014