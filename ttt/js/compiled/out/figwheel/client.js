// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34186__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34187__i = 0, G__34187__a = new Array(arguments.length -  0);
while (G__34187__i < G__34187__a.length) {G__34187__a[G__34187__i] = arguments[G__34187__i + 0]; ++G__34187__i;}
  args = new cljs.core.IndexedSeq(G__34187__a,0);
} 
return G__34186__delegate.call(this,args);};
G__34186.cljs$lang$maxFixedArity = 0;
G__34186.cljs$lang$applyTo = (function (arglist__34188){
var args = cljs.core.seq(arglist__34188);
return G__34186__delegate(args);
});
G__34186.cljs$core$IFn$_invoke$arity$variadic = G__34186__delegate;
return G__34186;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__34189){
var map__34191 = p__34189;
var map__34191__$1 = ((cljs.core.seq_QMARK_.call(null,map__34191))?cljs.core.apply.call(null,cljs.core.hash_map,map__34191):map__34191);
var class$ = cljs.core.get.call(null,map__34191__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__34191__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__16145__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__16133__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16133__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16133__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19254__auto___34320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___34320,ch){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___34320,ch){
return (function (state_34294){
var state_val_34295 = (state_34294[(1)]);
if((state_val_34295 === (7))){
var inst_34290 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34296_34321 = state_34294__$1;
(statearr_34296_34321[(2)] = inst_34290);

(statearr_34296_34321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (1))){
var state_34294__$1 = state_34294;
var statearr_34297_34322 = state_34294__$1;
(statearr_34297_34322[(2)] = null);

(statearr_34297_34322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (4))){
var inst_34258 = (state_34294[(7)]);
var inst_34258__$1 = (state_34294[(2)]);
var state_34294__$1 = (function (){var statearr_34298 = state_34294;
(statearr_34298[(7)] = inst_34258__$1);

return statearr_34298;
})();
if(cljs.core.truth_(inst_34258__$1)){
var statearr_34299_34323 = state_34294__$1;
(statearr_34299_34323[(1)] = (5));

} else {
var statearr_34300_34324 = state_34294__$1;
(statearr_34300_34324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (13))){
var state_34294__$1 = state_34294;
var statearr_34301_34325 = state_34294__$1;
(statearr_34301_34325[(2)] = null);

(statearr_34301_34325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (6))){
var state_34294__$1 = state_34294;
var statearr_34302_34326 = state_34294__$1;
(statearr_34302_34326[(2)] = null);

(statearr_34302_34326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (3))){
var inst_34292 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34294__$1,inst_34292);
} else {
if((state_val_34295 === (12))){
var inst_34265 = (state_34294[(8)]);
var inst_34278 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34265);
var inst_34279 = cljs.core.first.call(null,inst_34278);
var inst_34280 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34279);
var inst_34281 = console.warn("Figwheel: Not loading code with warnings - ",inst_34280);
var state_34294__$1 = state_34294;
var statearr_34303_34327 = state_34294__$1;
(statearr_34303_34327[(2)] = inst_34281);

(statearr_34303_34327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (2))){
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34294__$1,(4),ch);
} else {
if((state_val_34295 === (11))){
var inst_34274 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34304_34328 = state_34294__$1;
(statearr_34304_34328[(2)] = inst_34274);

(statearr_34304_34328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (9))){
var inst_34264 = (state_34294[(9)]);
var inst_34276 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34264,opts);
var state_34294__$1 = state_34294;
if(inst_34276){
var statearr_34305_34329 = state_34294__$1;
(statearr_34305_34329[(1)] = (12));

} else {
var statearr_34306_34330 = state_34294__$1;
(statearr_34306_34330[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (5))){
var inst_34264 = (state_34294[(9)]);
var inst_34258 = (state_34294[(7)]);
var inst_34260 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34261 = (new cljs.core.PersistentArrayMap(null,2,inst_34260,null));
var inst_34262 = (new cljs.core.PersistentHashSet(null,inst_34261,null));
var inst_34263 = figwheel.client.focus_msgs.call(null,inst_34262,inst_34258);
var inst_34264__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34263);
var inst_34265 = cljs.core.first.call(null,inst_34263);
var inst_34266 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34264__$1,opts);
var state_34294__$1 = (function (){var statearr_34307 = state_34294;
(statearr_34307[(9)] = inst_34264__$1);

(statearr_34307[(8)] = inst_34265);

return statearr_34307;
})();
if(cljs.core.truth_(inst_34266)){
var statearr_34308_34331 = state_34294__$1;
(statearr_34308_34331[(1)] = (8));

} else {
var statearr_34309_34332 = state_34294__$1;
(statearr_34309_34332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (14))){
var inst_34284 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34310_34333 = state_34294__$1;
(statearr_34310_34333[(2)] = inst_34284);

(statearr_34310_34333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (10))){
var inst_34286 = (state_34294[(2)]);
var state_34294__$1 = (function (){var statearr_34311 = state_34294;
(statearr_34311[(10)] = inst_34286);

return statearr_34311;
})();
var statearr_34312_34334 = state_34294__$1;
(statearr_34312_34334[(2)] = null);

(statearr_34312_34334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (8))){
var inst_34265 = (state_34294[(8)]);
var inst_34268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34269 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34265);
var inst_34270 = cljs.core.async.timeout.call(null,(1000));
var inst_34271 = [inst_34269,inst_34270];
var inst_34272 = (new cljs.core.PersistentVector(null,2,(5),inst_34268,inst_34271,null));
var state_34294__$1 = state_34294;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34294__$1,(11),inst_34272);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19254__auto___34320,ch))
;
return ((function (switch__19198__auto__,c__19254__auto___34320,ch){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_34316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34316[(0)] = state_machine__19199__auto__);

(statearr_34316[(1)] = (1));

return statearr_34316;
});
var state_machine__19199__auto____1 = (function (state_34294){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_34294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e34317){if((e34317 instanceof Object)){
var ex__19202__auto__ = e34317;
var statearr_34318_34335 = state_34294;
(statearr_34318_34335[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34336 = state_34294;
state_34294 = G__34336;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_34294){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_34294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___34320,ch))
})();
var state__19256__auto__ = (function (){var statearr_34319 = f__19255__auto__.call(null);
(statearr_34319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___34320);

return statearr_34319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___34320,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34337_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34337_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34346 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34339_SHARP_,p2__34338_SHARP_){
return [cljs.core.str(p2__34338_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34346){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34344 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34345 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34344,_STAR_print_newline_STAR_34345,base_path_34346){
return (function() { 
var G__34347__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34348__i = 0, G__34348__a = new Array(arguments.length -  0);
while (G__34348__i < G__34348__a.length) {G__34348__a[G__34348__i] = arguments[G__34348__i + 0]; ++G__34348__i;}
  args = new cljs.core.IndexedSeq(G__34348__a,0);
} 
return G__34347__delegate.call(this,args);};
G__34347.cljs$lang$maxFixedArity = 0;
G__34347.cljs$lang$applyTo = (function (arglist__34349){
var args = cljs.core.seq(arglist__34349);
return G__34347__delegate(args);
});
G__34347.cljs$core$IFn$_invoke$arity$variadic = G__34347__delegate;
return G__34347;
})()
;})(_STAR_print_fn_STAR_34344,_STAR_print_newline_STAR_34345,base_path_34346))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34345;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34344;
}}catch (e34343){if((e34343 instanceof Error)){
var e = e34343;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34346], null));
} else {
var e = e34343;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34346))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__34350){
var map__34355 = p__34350;
var map__34355__$1 = ((cljs.core.seq_QMARK_.call(null,map__34355))?cljs.core.apply.call(null,cljs.core.hash_map,map__34355):map__34355);
var opts = map__34355__$1;
var build_id = cljs.core.get.call(null,map__34355__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34355,map__34355__$1,opts,build_id){
return (function (p__34356){
var vec__34357 = p__34356;
var map__34358 = cljs.core.nth.call(null,vec__34357,(0),null);
var map__34358__$1 = ((cljs.core.seq_QMARK_.call(null,map__34358))?cljs.core.apply.call(null,cljs.core.hash_map,map__34358):map__34358);
var msg = map__34358__$1;
var msg_name = cljs.core.get.call(null,map__34358__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34357,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34357,map__34358,map__34358__$1,msg,msg_name,_,map__34355,map__34355__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34357,map__34358,map__34358__$1,msg,msg_name,_,map__34355,map__34355__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34355,map__34355__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__34362){
var vec__34363 = p__34362;
var map__34364 = cljs.core.nth.call(null,vec__34363,(0),null);
var map__34364__$1 = ((cljs.core.seq_QMARK_.call(null,map__34364))?cljs.core.apply.call(null,cljs.core.hash_map,map__34364):map__34364);
var msg = map__34364__$1;
var msg_name = cljs.core.get.call(null,map__34364__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34363,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__34365){
var map__34373 = p__34365;
var map__34373__$1 = ((cljs.core.seq_QMARK_.call(null,map__34373))?cljs.core.apply.call(null,cljs.core.hash_map,map__34373):map__34373);
var on_compile_fail = cljs.core.get.call(null,map__34373__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__34373__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__34373,map__34373__$1,on_compile_fail,on_compile_warning){
return (function (p__34374){
var vec__34375 = p__34374;
var map__34376 = cljs.core.nth.call(null,vec__34375,(0),null);
var map__34376__$1 = ((cljs.core.seq_QMARK_.call(null,map__34376))?cljs.core.apply.call(null,cljs.core.hash_map,map__34376):map__34376);
var msg = map__34376__$1;
var msg_name = cljs.core.get.call(null,map__34376__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34375,(1));
var pred__34377 = cljs.core._EQ_;
var expr__34378 = msg_name;
if(cljs.core.truth_(pred__34377.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34378))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34377.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34378))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34373,map__34373__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__,msg_hist,msg_names,msg){
return (function (state_34575){
var state_val_34576 = (state_34575[(1)]);
if((state_val_34576 === (7))){
var inst_34511 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34577_34618 = state_34575__$1;
(statearr_34577_34618[(2)] = inst_34511);

(statearr_34577_34618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (20))){
var inst_34537 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34575__$1 = state_34575;
if(inst_34537){
var statearr_34578_34619 = state_34575__$1;
(statearr_34578_34619[(1)] = (22));

} else {
var statearr_34579_34620 = state_34575__$1;
(statearr_34579_34620[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (27))){
var inst_34549 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34550 = figwheel.client.heads_up.display_warning.call(null,inst_34549);
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,(30),inst_34550);
} else {
if((state_val_34576 === (1))){
var inst_34499 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34575__$1 = state_34575;
if(cljs.core.truth_(inst_34499)){
var statearr_34580_34621 = state_34575__$1;
(statearr_34580_34621[(1)] = (2));

} else {
var statearr_34581_34622 = state_34575__$1;
(statearr_34581_34622[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (24))){
var inst_34565 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34582_34623 = state_34575__$1;
(statearr_34582_34623[(2)] = inst_34565);

(statearr_34582_34623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (4))){
var inst_34573 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34575__$1,inst_34573);
} else {
if((state_val_34576 === (15))){
var inst_34526 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34527 = figwheel.client.format_messages.call(null,inst_34526);
var inst_34528 = figwheel.client.heads_up.display_error.call(null,inst_34527);
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,(18),inst_34528);
} else {
if((state_val_34576 === (21))){
var inst_34567 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34583_34624 = state_34575__$1;
(statearr_34583_34624[(2)] = inst_34567);

(statearr_34583_34624[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (31))){
var inst_34556 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,(34),inst_34556);
} else {
if((state_val_34576 === (32))){
var state_34575__$1 = state_34575;
var statearr_34584_34625 = state_34575__$1;
(statearr_34584_34625[(2)] = null);

(statearr_34584_34625[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (33))){
var inst_34561 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34585_34626 = state_34575__$1;
(statearr_34585_34626[(2)] = inst_34561);

(statearr_34585_34626[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (13))){
var inst_34517 = (state_34575[(2)]);
var inst_34518 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34519 = figwheel.client.format_messages.call(null,inst_34518);
var inst_34520 = figwheel.client.heads_up.display_error.call(null,inst_34519);
var state_34575__$1 = (function (){var statearr_34586 = state_34575;
(statearr_34586[(7)] = inst_34517);

return statearr_34586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,(14),inst_34520);
} else {
if((state_val_34576 === (22))){
var inst_34539 = figwheel.client.heads_up.clear.call(null);
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,(25),inst_34539);
} else {
if((state_val_34576 === (29))){
var inst_34563 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34587_34627 = state_34575__$1;
(statearr_34587_34627[(2)] = inst_34563);

(statearr_34587_34627[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (6))){
var inst_34507 = figwheel.client.heads_up.clear.call(null);
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,(9),inst_34507);
} else {
if((state_val_34576 === (28))){
var inst_34554 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34575__$1 = state_34575;
if(inst_34554){
var statearr_34588_34628 = state_34575__$1;
(statearr_34588_34628[(1)] = (31));

} else {
var statearr_34589_34629 = state_34575__$1;
(statearr_34589_34629[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (25))){
var inst_34541 = (state_34575[(2)]);
var inst_34542 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34543 = figwheel.client.heads_up.display_warning.call(null,inst_34542);
var state_34575__$1 = (function (){var statearr_34590 = state_34575;
(statearr_34590[(8)] = inst_34541);

return statearr_34590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,(26),inst_34543);
} else {
if((state_val_34576 === (34))){
var inst_34558 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34591_34630 = state_34575__$1;
(statearr_34591_34630[(2)] = inst_34558);

(statearr_34591_34630[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (17))){
var inst_34569 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34592_34631 = state_34575__$1;
(statearr_34592_34631[(2)] = inst_34569);

(statearr_34592_34631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (3))){
var inst_34513 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34575__$1 = state_34575;
if(inst_34513){
var statearr_34593_34632 = state_34575__$1;
(statearr_34593_34632[(1)] = (10));

} else {
var statearr_34594_34633 = state_34575__$1;
(statearr_34594_34633[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (12))){
var inst_34571 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34595_34634 = state_34575__$1;
(statearr_34595_34634[(2)] = inst_34571);

(statearr_34595_34634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (2))){
var inst_34501 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34575__$1 = state_34575;
if(cljs.core.truth_(inst_34501)){
var statearr_34596_34635 = state_34575__$1;
(statearr_34596_34635[(1)] = (5));

} else {
var statearr_34597_34636 = state_34575__$1;
(statearr_34597_34636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (23))){
var inst_34547 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34575__$1 = state_34575;
if(inst_34547){
var statearr_34598_34637 = state_34575__$1;
(statearr_34598_34637[(1)] = (27));

} else {
var statearr_34599_34638 = state_34575__$1;
(statearr_34599_34638[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (19))){
var inst_34534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34535 = figwheel.client.heads_up.append_message.call(null,inst_34534);
var state_34575__$1 = state_34575;
var statearr_34600_34639 = state_34575__$1;
(statearr_34600_34639[(2)] = inst_34535);

(statearr_34600_34639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (11))){
var inst_34524 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34575__$1 = state_34575;
if(inst_34524){
var statearr_34601_34640 = state_34575__$1;
(statearr_34601_34640[(1)] = (15));

} else {
var statearr_34602_34641 = state_34575__$1;
(statearr_34602_34641[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (9))){
var inst_34509 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34603_34642 = state_34575__$1;
(statearr_34603_34642[(2)] = inst_34509);

(statearr_34603_34642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (5))){
var inst_34503 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,(8),inst_34503);
} else {
if((state_val_34576 === (14))){
var inst_34522 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34604_34643 = state_34575__$1;
(statearr_34604_34643[(2)] = inst_34522);

(statearr_34604_34643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (26))){
var inst_34545 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34605_34644 = state_34575__$1;
(statearr_34605_34644[(2)] = inst_34545);

(statearr_34605_34644[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (16))){
var inst_34532 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34575__$1 = state_34575;
if(inst_34532){
var statearr_34606_34645 = state_34575__$1;
(statearr_34606_34645[(1)] = (19));

} else {
var statearr_34607_34646 = state_34575__$1;
(statearr_34607_34646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (30))){
var inst_34552 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34608_34647 = state_34575__$1;
(statearr_34608_34647[(2)] = inst_34552);

(statearr_34608_34647[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (10))){
var inst_34515 = figwheel.client.heads_up.clear.call(null);
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,(13),inst_34515);
} else {
if((state_val_34576 === (18))){
var inst_34530 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34609_34648 = state_34575__$1;
(statearr_34609_34648[(2)] = inst_34530);

(statearr_34609_34648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (8))){
var inst_34505 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34610_34649 = state_34575__$1;
(statearr_34610_34649[(2)] = inst_34505);

(statearr_34610_34649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19254__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19198__auto__,c__19254__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_34614 = [null,null,null,null,null,null,null,null,null];
(statearr_34614[(0)] = state_machine__19199__auto__);

(statearr_34614[(1)] = (1));

return statearr_34614;
});
var state_machine__19199__auto____1 = (function (state_34575){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_34575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e34615){if((e34615 instanceof Object)){
var ex__19202__auto__ = e34615;
var statearr_34616_34650 = state_34575;
(statearr_34616_34650[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34651 = state_34575;
state_34575 = G__34651;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_34575){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_34575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__,msg_hist,msg_names,msg))
})();
var state__19256__auto__ = (function (){var statearr_34617 = f__19255__auto__.call(null);
(statearr_34617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_34617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__,msg_hist,msg_names,msg))
);

return c__19254__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19254__auto___34714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___34714,ch){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___34714,ch){
return (function (state_34697){
var state_val_34698 = (state_34697[(1)]);
if((state_val_34698 === (8))){
var inst_34689 = (state_34697[(2)]);
var state_34697__$1 = (function (){var statearr_34699 = state_34697;
(statearr_34699[(7)] = inst_34689);

return statearr_34699;
})();
var statearr_34700_34715 = state_34697__$1;
(statearr_34700_34715[(2)] = null);

(statearr_34700_34715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (7))){
var inst_34693 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34701_34716 = state_34697__$1;
(statearr_34701_34716[(2)] = inst_34693);

(statearr_34701_34716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (6))){
var state_34697__$1 = state_34697;
var statearr_34702_34717 = state_34697__$1;
(statearr_34702_34717[(2)] = null);

(statearr_34702_34717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (5))){
var inst_34685 = (state_34697[(8)]);
var inst_34687 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34685);
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34697__$1,(8),inst_34687);
} else {
if((state_val_34698 === (4))){
var inst_34685 = (state_34697[(8)]);
var inst_34685__$1 = (state_34697[(2)]);
var state_34697__$1 = (function (){var statearr_34703 = state_34697;
(statearr_34703[(8)] = inst_34685__$1);

return statearr_34703;
})();
if(cljs.core.truth_(inst_34685__$1)){
var statearr_34704_34718 = state_34697__$1;
(statearr_34704_34718[(1)] = (5));

} else {
var statearr_34705_34719 = state_34697__$1;
(statearr_34705_34719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (3))){
var inst_34695 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34697__$1,inst_34695);
} else {
if((state_val_34698 === (2))){
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34697__$1,(4),ch);
} else {
if((state_val_34698 === (1))){
var state_34697__$1 = state_34697;
var statearr_34706_34720 = state_34697__$1;
(statearr_34706_34720[(2)] = null);

(statearr_34706_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19254__auto___34714,ch))
;
return ((function (switch__19198__auto__,c__19254__auto___34714,ch){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_34710 = [null,null,null,null,null,null,null,null,null];
(statearr_34710[(0)] = state_machine__19199__auto__);

(statearr_34710[(1)] = (1));

return statearr_34710;
});
var state_machine__19199__auto____1 = (function (state_34697){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_34697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e34711){if((e34711 instanceof Object)){
var ex__19202__auto__ = e34711;
var statearr_34712_34721 = state_34697;
(statearr_34712_34721[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34722 = state_34697;
state_34697 = G__34722;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_34697){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_34697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___34714,ch))
})();
var state__19256__auto__ = (function (){var statearr_34713 = f__19255__auto__.call(null);
(statearr_34713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___34714);

return statearr_34713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___34714,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__){
return (function (state_34743){
var state_val_34744 = (state_34743[(1)]);
if((state_val_34744 === (2))){
var inst_34740 = (state_34743[(2)]);
var inst_34741 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34743__$1 = (function (){var statearr_34745 = state_34743;
(statearr_34745[(7)] = inst_34740);

return statearr_34745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34743__$1,inst_34741);
} else {
if((state_val_34744 === (1))){
var inst_34738 = cljs.core.async.timeout.call(null,(3000));
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34743__$1,(2),inst_34738);
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
var statearr_34749 = [null,null,null,null,null,null,null,null];
(statearr_34749[(0)] = state_machine__19199__auto__);

(statearr_34749[(1)] = (1));

return statearr_34749;
});
var state_machine__19199__auto____1 = (function (state_34743){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_34743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e34750){if((e34750 instanceof Object)){
var ex__19202__auto__ = e34750;
var statearr_34751_34753 = state_34743;
(statearr_34751_34753[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34754 = state_34743;
state_34743 = G__34754;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_34743){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_34743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_34752 = f__19255__auto__.call(null);
(statearr_34752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_34752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__))
);

return c__19254__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__16133__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16133__auto__)){
return ("CustomEvent" in window);
} else {
return and__16133__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj34758 = {"detail":url};
return obj34758;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__34759){
var map__34765 = p__34759;
var map__34765__$1 = ((cljs.core.seq_QMARK_.call(null,map__34765))?cljs.core.apply.call(null,cljs.core.hash_map,map__34765):map__34765);
var ed = map__34765__$1;
var exception_data = cljs.core.get.call(null,map__34765__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__34765__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34766_34770 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34767_34771 = null;
var count__34768_34772 = (0);
var i__34769_34773 = (0);
while(true){
if((i__34769_34773 < count__34768_34772)){
var msg_34774 = cljs.core._nth.call(null,chunk__34767_34771,i__34769_34773);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34774);

var G__34775 = seq__34766_34770;
var G__34776 = chunk__34767_34771;
var G__34777 = count__34768_34772;
var G__34778 = (i__34769_34773 + (1));
seq__34766_34770 = G__34775;
chunk__34767_34771 = G__34776;
count__34768_34772 = G__34777;
i__34769_34773 = G__34778;
continue;
} else {
var temp__4126__auto___34779 = cljs.core.seq.call(null,seq__34766_34770);
if(temp__4126__auto___34779){
var seq__34766_34780__$1 = temp__4126__auto___34779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34766_34780__$1)){
var c__16932__auto___34781 = cljs.core.chunk_first.call(null,seq__34766_34780__$1);
var G__34782 = cljs.core.chunk_rest.call(null,seq__34766_34780__$1);
var G__34783 = c__16932__auto___34781;
var G__34784 = cljs.core.count.call(null,c__16932__auto___34781);
var G__34785 = (0);
seq__34766_34770 = G__34782;
chunk__34767_34771 = G__34783;
count__34768_34772 = G__34784;
i__34769_34773 = G__34785;
continue;
} else {
var msg_34786 = cljs.core.first.call(null,seq__34766_34780__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34786);

var G__34787 = cljs.core.next.call(null,seq__34766_34780__$1);
var G__34788 = null;
var G__34789 = (0);
var G__34790 = (0);
seq__34766_34770 = G__34787;
chunk__34767_34771 = G__34788;
count__34768_34772 = G__34789;
i__34769_34773 = G__34790;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__34791){
var map__34793 = p__34791;
var map__34793__$1 = ((cljs.core.seq_QMARK_.call(null,map__34793))?cljs.core.apply.call(null,cljs.core.hash_map,map__34793):map__34793);
var w = map__34793__$1;
var message = cljs.core.get.call(null,map__34793__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16133__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16133__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16133__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__34800 = cljs.core.seq.call(null,plugins);
var chunk__34801 = null;
var count__34802 = (0);
var i__34803 = (0);
while(true){
if((i__34803 < count__34802)){
var vec__34804 = cljs.core._nth.call(null,chunk__34801,i__34803);
var k = cljs.core.nth.call(null,vec__34804,(0),null);
var plugin = cljs.core.nth.call(null,vec__34804,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34806 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34800,chunk__34801,count__34802,i__34803,pl_34806,vec__34804,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34806.call(null,msg_hist);
});})(seq__34800,chunk__34801,count__34802,i__34803,pl_34806,vec__34804,k,plugin))
);
} else {
}

var G__34807 = seq__34800;
var G__34808 = chunk__34801;
var G__34809 = count__34802;
var G__34810 = (i__34803 + (1));
seq__34800 = G__34807;
chunk__34801 = G__34808;
count__34802 = G__34809;
i__34803 = G__34810;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34800);
if(temp__4126__auto__){
var seq__34800__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34800__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__34800__$1);
var G__34811 = cljs.core.chunk_rest.call(null,seq__34800__$1);
var G__34812 = c__16932__auto__;
var G__34813 = cljs.core.count.call(null,c__16932__auto__);
var G__34814 = (0);
seq__34800 = G__34811;
chunk__34801 = G__34812;
count__34802 = G__34813;
i__34803 = G__34814;
continue;
} else {
var vec__34805 = cljs.core.first.call(null,seq__34800__$1);
var k = cljs.core.nth.call(null,vec__34805,(0),null);
var plugin = cljs.core.nth.call(null,vec__34805,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34815 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34800,chunk__34801,count__34802,i__34803,pl_34815,vec__34805,k,plugin,seq__34800__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34815.call(null,msg_hist);
});})(seq__34800,chunk__34801,count__34802,i__34803,pl_34815,vec__34805,k,plugin,seq__34800__$1,temp__4126__auto__))
);
} else {
}

var G__34816 = cljs.core.next.call(null,seq__34800__$1);
var G__34817 = null;
var G__34818 = (0);
var G__34819 = (0);
seq__34800 = G__34816;
chunk__34801 = G__34817;
count__34802 = G__34818;
i__34803 = G__34819;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__34820){
var map__34822 = p__34820;
var map__34822__$1 = ((cljs.core.seq_QMARK_.call(null,map__34822))?cljs.core.apply.call(null,cljs.core.hash_map,map__34822):map__34822);
var opts = map__34822__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__34820 = null;
if (arguments.length > 0) {
var G__34823__i = 0, G__34823__a = new Array(arguments.length -  0);
while (G__34823__i < G__34823__a.length) {G__34823__a[G__34823__i] = arguments[G__34823__i + 0]; ++G__34823__i;}
  p__34820 = new cljs.core.IndexedSeq(G__34823__a,0);
} 
return watch_and_reload__delegate.call(this,p__34820);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__34824){
var p__34820 = cljs.core.seq(arglist__34824);
return watch_and_reload__delegate(p__34820);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1428647925767