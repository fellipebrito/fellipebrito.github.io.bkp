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
var seq__34842_34850 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34843_34851 = null;
var count__34844_34852 = (0);
var i__34845_34853 = (0);
while(true){
if((i__34845_34853 < count__34844_34852)){
var k_34854 = cljs.core._nth.call(null,chunk__34843_34851,i__34845_34853);
e.setAttribute(cljs.core.name.call(null,k_34854),cljs.core.get.call(null,attrs,k_34854));

var G__34855 = seq__34842_34850;
var G__34856 = chunk__34843_34851;
var G__34857 = count__34844_34852;
var G__34858 = (i__34845_34853 + (1));
seq__34842_34850 = G__34855;
chunk__34843_34851 = G__34856;
count__34844_34852 = G__34857;
i__34845_34853 = G__34858;
continue;
} else {
var temp__4126__auto___34859 = cljs.core.seq.call(null,seq__34842_34850);
if(temp__4126__auto___34859){
var seq__34842_34860__$1 = temp__4126__auto___34859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34842_34860__$1)){
var c__16932__auto___34861 = cljs.core.chunk_first.call(null,seq__34842_34860__$1);
var G__34862 = cljs.core.chunk_rest.call(null,seq__34842_34860__$1);
var G__34863 = c__16932__auto___34861;
var G__34864 = cljs.core.count.call(null,c__16932__auto___34861);
var G__34865 = (0);
seq__34842_34850 = G__34862;
chunk__34843_34851 = G__34863;
count__34844_34852 = G__34864;
i__34845_34853 = G__34865;
continue;
} else {
var k_34866 = cljs.core.first.call(null,seq__34842_34860__$1);
e.setAttribute(cljs.core.name.call(null,k_34866),cljs.core.get.call(null,attrs,k_34866));

var G__34867 = cljs.core.next.call(null,seq__34842_34860__$1);
var G__34868 = null;
var G__34869 = (0);
var G__34870 = (0);
seq__34842_34850 = G__34867;
chunk__34843_34851 = G__34868;
count__34844_34852 = G__34869;
i__34845_34853 = G__34870;
continue;
}
} else {
}
}
break;
}

var seq__34846_34871 = cljs.core.seq.call(null,children);
var chunk__34847_34872 = null;
var count__34848_34873 = (0);
var i__34849_34874 = (0);
while(true){
if((i__34849_34874 < count__34848_34873)){
var ch_34875 = cljs.core._nth.call(null,chunk__34847_34872,i__34849_34874);
e.appendChild(ch_34875);

var G__34876 = seq__34846_34871;
var G__34877 = chunk__34847_34872;
var G__34878 = count__34848_34873;
var G__34879 = (i__34849_34874 + (1));
seq__34846_34871 = G__34876;
chunk__34847_34872 = G__34877;
count__34848_34873 = G__34878;
i__34849_34874 = G__34879;
continue;
} else {
var temp__4126__auto___34880 = cljs.core.seq.call(null,seq__34846_34871);
if(temp__4126__auto___34880){
var seq__34846_34881__$1 = temp__4126__auto___34880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34846_34881__$1)){
var c__16932__auto___34882 = cljs.core.chunk_first.call(null,seq__34846_34881__$1);
var G__34883 = cljs.core.chunk_rest.call(null,seq__34846_34881__$1);
var G__34884 = c__16932__auto___34882;
var G__34885 = cljs.core.count.call(null,c__16932__auto___34882);
var G__34886 = (0);
seq__34846_34871 = G__34883;
chunk__34847_34872 = G__34884;
count__34848_34873 = G__34885;
i__34849_34874 = G__34886;
continue;
} else {
var ch_34887 = cljs.core.first.call(null,seq__34846_34881__$1);
e.appendChild(ch_34887);

var G__34888 = cljs.core.next.call(null,seq__34846_34881__$1);
var G__34889 = null;
var G__34890 = (0);
var G__34891 = (0);
seq__34846_34871 = G__34888;
chunk__34847_34872 = G__34889;
count__34848_34873 = G__34890;
i__34849_34874 = G__34891;
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
var G__34892__i = 0, G__34892__a = new Array(arguments.length -  2);
while (G__34892__i < G__34892__a.length) {G__34892__a[G__34892__i] = arguments[G__34892__i + 2]; ++G__34892__i;}
  children = new cljs.core.IndexedSeq(G__34892__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__34893){
var t = cljs.core.first(arglist__34893);
arglist__34893 = cljs.core.next(arglist__34893);
var attrs = cljs.core.first(arglist__34893);
var children = cljs.core.rest(arglist__34893);
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
var el_34894 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34894.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34894.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34894.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34894);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__34895,st_map){
var map__34899 = p__34895;
var map__34899__$1 = ((cljs.core.seq_QMARK_.call(null,map__34899))?cljs.core.apply.call(null,cljs.core.hash_map,map__34899):map__34899);
var container_el = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34899,map__34899__$1,container_el){
return (function (p__34900){
var vec__34901 = p__34900;
var k = cljs.core.nth.call(null,vec__34901,(0),null);
var v = cljs.core.nth.call(null,vec__34901,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34899,map__34899__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__34902,dom_str){
var map__34904 = p__34902;
var map__34904__$1 = ((cljs.core.seq_QMARK_.call(null,map__34904))?cljs.core.apply.call(null,cljs.core.hash_map,map__34904):map__34904);
var c = map__34904__$1;
var content_area_el = cljs.core.get.call(null,map__34904__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__34905){
var map__34907 = p__34905;
var map__34907__$1 = ((cljs.core.seq_QMARK_.call(null,map__34907))?cljs.core.apply.call(null,cljs.core.hash_map,map__34907):map__34907);
var content_area_el = cljs.core.get.call(null,map__34907__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_34949){
var state_val_34950 = (state_34949[(1)]);
if((state_val_34950 === (2))){
var inst_34934 = (state_34949[(7)]);
var inst_34943 = (state_34949[(2)]);
var inst_34944 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34945 = ["auto"];
var inst_34946 = cljs.core.PersistentHashMap.fromArrays(inst_34944,inst_34945);
var inst_34947 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34934,inst_34946);
var state_34949__$1 = (function (){var statearr_34951 = state_34949;
(statearr_34951[(8)] = inst_34943);

return statearr_34951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34949__$1,inst_34947);
} else {
if((state_val_34950 === (1))){
var inst_34934 = (state_34949[(7)]);
var inst_34934__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34935 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34936 = ["10px","10px","100%","68px","1.0"];
var inst_34937 = cljs.core.PersistentHashMap.fromArrays(inst_34935,inst_34936);
var inst_34938 = cljs.core.merge.call(null,inst_34937,style);
var inst_34939 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34934__$1,inst_34938);
var inst_34940 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34934__$1,msg);
var inst_34941 = cljs.core.async.timeout.call(null,(300));
var state_34949__$1 = (function (){var statearr_34952 = state_34949;
(statearr_34952[(7)] = inst_34934__$1);

(statearr_34952[(9)] = inst_34940);

(statearr_34952[(10)] = inst_34939);

return statearr_34952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34949__$1,(2),inst_34941);
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
var statearr_34956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34956[(0)] = state_machine__19199__auto__);

(statearr_34956[(1)] = (1));

return statearr_34956;
});
var state_machine__19199__auto____1 = (function (state_34949){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_34949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e34957){if((e34957 instanceof Object)){
var ex__19202__auto__ = e34957;
var statearr_34958_34960 = state_34949;
(statearr_34958_34960[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34961 = state_34949;
state_34949 = G__34961;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_34949){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_34949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_34959 = f__19255__auto__.call(null);
(statearr_34959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_34959;
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
var vec__34963 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__34963,(0),null);
var ln = cljs.core.nth.call(null,vec__34963,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__34966 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__34966,(0),null);
var file_line = cljs.core.nth.call(null,vec__34966,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34966,file_name,file_line){
return (function (p1__34964_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34964_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__34966,file_name,file_line))
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
var map__34968 = figwheel.client.heads_up.ensure_container.call(null);
var map__34968__$1 = ((cljs.core.seq_QMARK_.call(null,map__34968))?cljs.core.apply.call(null,cljs.core.hash_map,map__34968):map__34968);
var content_area_el = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__){
return (function (state_35015){
var state_val_35016 = (state_35015[(1)]);
if((state_val_35016 === (3))){
var inst_34998 = (state_35015[(7)]);
var inst_35012 = (state_35015[(2)]);
var inst_35013 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34998,"");
var state_35015__$1 = (function (){var statearr_35017 = state_35015;
(statearr_35017[(8)] = inst_35012);

return statearr_35017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35015__$1,inst_35013);
} else {
if((state_val_35016 === (2))){
var inst_34998 = (state_35015[(7)]);
var inst_35005 = (state_35015[(2)]);
var inst_35006 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35007 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35008 = cljs.core.PersistentHashMap.fromArrays(inst_35006,inst_35007);
var inst_35009 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34998,inst_35008);
var inst_35010 = cljs.core.async.timeout.call(null,(200));
var state_35015__$1 = (function (){var statearr_35018 = state_35015;
(statearr_35018[(9)] = inst_35005);

(statearr_35018[(10)] = inst_35009);

return statearr_35018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35015__$1,(3),inst_35010);
} else {
if((state_val_35016 === (1))){
var inst_34998 = (state_35015[(7)]);
var inst_34998__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34999 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35000 = ["0.0"];
var inst_35001 = cljs.core.PersistentHashMap.fromArrays(inst_34999,inst_35000);
var inst_35002 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34998__$1,inst_35001);
var inst_35003 = cljs.core.async.timeout.call(null,(300));
var state_35015__$1 = (function (){var statearr_35019 = state_35015;
(statearr_35019[(11)] = inst_35002);

(statearr_35019[(7)] = inst_34998__$1);

return statearr_35019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35015__$1,(2),inst_35003);
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
var statearr_35023 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35023[(0)] = state_machine__19199__auto__);

(statearr_35023[(1)] = (1));

return statearr_35023;
});
var state_machine__19199__auto____1 = (function (state_35015){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_35015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e35024){if((e35024 instanceof Object)){
var ex__19202__auto__ = e35024;
var statearr_35025_35027 = state_35015;
(statearr_35025_35027[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35028 = state_35015;
state_35015 = G__35028;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_35015){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_35015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_35026 = f__19255__auto__.call(null);
(statearr_35026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_35026;
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
return (function (state_35060){
var state_val_35061 = (state_35060[(1)]);
if((state_val_35061 === (4))){
var inst_35058 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35060__$1,inst_35058);
} else {
if((state_val_35061 === (3))){
var inst_35055 = (state_35060[(2)]);
var inst_35056 = figwheel.client.heads_up.clear.call(null);
var state_35060__$1 = (function (){var statearr_35062 = state_35060;
(statearr_35062[(7)] = inst_35055);

return statearr_35062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35060__$1,(4),inst_35056);
} else {
if((state_val_35061 === (2))){
var inst_35052 = (state_35060[(2)]);
var inst_35053 = cljs.core.async.timeout.call(null,(400));
var state_35060__$1 = (function (){var statearr_35063 = state_35060;
(statearr_35063[(8)] = inst_35052);

return statearr_35063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35060__$1,(3),inst_35053);
} else {
if((state_val_35061 === (1))){
var inst_35050 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35060__$1 = state_35060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35060__$1,(2),inst_35050);
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
var statearr_35067 = [null,null,null,null,null,null,null,null,null];
(statearr_35067[(0)] = state_machine__19199__auto__);

(statearr_35067[(1)] = (1));

return statearr_35067;
});
var state_machine__19199__auto____1 = (function (state_35060){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_35060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e35068){if((e35068 instanceof Object)){
var ex__19202__auto__ = e35068;
var statearr_35069_35071 = state_35060;
(statearr_35069_35071[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35072 = state_35060;
state_35060 = G__35072;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_35060){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_35060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_35070 = f__19255__auto__.call(null);
(statearr_35070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_35070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__))
);

return c__19254__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1428647926024