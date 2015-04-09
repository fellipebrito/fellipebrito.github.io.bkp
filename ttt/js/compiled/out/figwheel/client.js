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
var G__33610__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33611__i = 0, G__33611__a = new Array(arguments.length -  0);
while (G__33611__i < G__33611__a.length) {G__33611__a[G__33611__i] = arguments[G__33611__i + 0]; ++G__33611__i;}
  args = new cljs.core.IndexedSeq(G__33611__a,0);
} 
return G__33610__delegate.call(this,args);};
G__33610.cljs$lang$maxFixedArity = 0;
G__33610.cljs$lang$applyTo = (function (arglist__33612){
var args = cljs.core.seq(arglist__33612);
return G__33610__delegate(args);
});
G__33610.cljs$core$IFn$_invoke$arity$variadic = G__33610__delegate;
return G__33610;
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
figwheel.client.error_msg_format = (function error_msg_format(p__33613){
var map__33615 = p__33613;
var map__33615__$1 = ((cljs.core.seq_QMARK_.call(null,map__33615))?cljs.core.apply.call(null,cljs.core.hash_map,map__33615):map__33615);
var class$ = cljs.core.get.call(null,map__33615__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__33615__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__19255__auto___33744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___33744,ch){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___33744,ch){
return (function (state_33718){
var state_val_33719 = (state_33718[(1)]);
if((state_val_33719 === (7))){
var inst_33714 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33720_33745 = state_33718__$1;
(statearr_33720_33745[(2)] = inst_33714);

(statearr_33720_33745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (1))){
var state_33718__$1 = state_33718;
var statearr_33721_33746 = state_33718__$1;
(statearr_33721_33746[(2)] = null);

(statearr_33721_33746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (4))){
var inst_33682 = (state_33718[(7)]);
var inst_33682__$1 = (state_33718[(2)]);
var state_33718__$1 = (function (){var statearr_33722 = state_33718;
(statearr_33722[(7)] = inst_33682__$1);

return statearr_33722;
})();
if(cljs.core.truth_(inst_33682__$1)){
var statearr_33723_33747 = state_33718__$1;
(statearr_33723_33747[(1)] = (5));

} else {
var statearr_33724_33748 = state_33718__$1;
(statearr_33724_33748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (13))){
var state_33718__$1 = state_33718;
var statearr_33725_33749 = state_33718__$1;
(statearr_33725_33749[(2)] = null);

(statearr_33725_33749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (6))){
var state_33718__$1 = state_33718;
var statearr_33726_33750 = state_33718__$1;
(statearr_33726_33750[(2)] = null);

(statearr_33726_33750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (3))){
var inst_33716 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33718__$1,inst_33716);
} else {
if((state_val_33719 === (12))){
var inst_33689 = (state_33718[(8)]);
var inst_33702 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33689);
var inst_33703 = cljs.core.first.call(null,inst_33702);
var inst_33704 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33703);
var inst_33705 = console.warn("Figwheel: Not loading code with warnings - ",inst_33704);
var state_33718__$1 = state_33718;
var statearr_33727_33751 = state_33718__$1;
(statearr_33727_33751[(2)] = inst_33705);

(statearr_33727_33751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (2))){
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33718__$1,(4),ch);
} else {
if((state_val_33719 === (11))){
var inst_33698 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33728_33752 = state_33718__$1;
(statearr_33728_33752[(2)] = inst_33698);

(statearr_33728_33752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (9))){
var inst_33688 = (state_33718[(9)]);
var inst_33700 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33688,opts);
var state_33718__$1 = state_33718;
if(inst_33700){
var statearr_33729_33753 = state_33718__$1;
(statearr_33729_33753[(1)] = (12));

} else {
var statearr_33730_33754 = state_33718__$1;
(statearr_33730_33754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (5))){
var inst_33688 = (state_33718[(9)]);
var inst_33682 = (state_33718[(7)]);
var inst_33684 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33685 = (new cljs.core.PersistentArrayMap(null,2,inst_33684,null));
var inst_33686 = (new cljs.core.PersistentHashSet(null,inst_33685,null));
var inst_33687 = figwheel.client.focus_msgs.call(null,inst_33686,inst_33682);
var inst_33688__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33687);
var inst_33689 = cljs.core.first.call(null,inst_33687);
var inst_33690 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33688__$1,opts);
var state_33718__$1 = (function (){var statearr_33731 = state_33718;
(statearr_33731[(9)] = inst_33688__$1);

(statearr_33731[(8)] = inst_33689);

return statearr_33731;
})();
if(cljs.core.truth_(inst_33690)){
var statearr_33732_33755 = state_33718__$1;
(statearr_33732_33755[(1)] = (8));

} else {
var statearr_33733_33756 = state_33718__$1;
(statearr_33733_33756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (14))){
var inst_33708 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33734_33757 = state_33718__$1;
(statearr_33734_33757[(2)] = inst_33708);

(statearr_33734_33757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (10))){
var inst_33710 = (state_33718[(2)]);
var state_33718__$1 = (function (){var statearr_33735 = state_33718;
(statearr_33735[(10)] = inst_33710);

return statearr_33735;
})();
var statearr_33736_33758 = state_33718__$1;
(statearr_33736_33758[(2)] = null);

(statearr_33736_33758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (8))){
var inst_33689 = (state_33718[(8)]);
var inst_33692 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33693 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33689);
var inst_33694 = cljs.core.async.timeout.call(null,(1000));
var inst_33695 = [inst_33693,inst_33694];
var inst_33696 = (new cljs.core.PersistentVector(null,2,(5),inst_33692,inst_33695,null));
var state_33718__$1 = state_33718;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33718__$1,(11),inst_33696);
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
});})(c__19255__auto___33744,ch))
;
return ((function (switch__19199__auto__,c__19255__auto___33744,ch){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_33740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33740[(0)] = state_machine__19200__auto__);

(statearr_33740[(1)] = (1));

return statearr_33740;
});
var state_machine__19200__auto____1 = (function (state_33718){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_33718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e33741){if((e33741 instanceof Object)){
var ex__19203__auto__ = e33741;
var statearr_33742_33759 = state_33718;
(statearr_33742_33759[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33760 = state_33718;
state_33718 = G__33760;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_33718){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_33718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___33744,ch))
})();
var state__19257__auto__ = (function (){var statearr_33743 = f__19256__auto__.call(null);
(statearr_33743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___33744);

return statearr_33743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___33744,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33761_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33761_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_33770 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__33763_SHARP_,p2__33762_SHARP_){
return [cljs.core.str(p2__33762_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33770){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_33768 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33769 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33768,_STAR_print_newline_STAR_33769,base_path_33770){
return (function() { 
var G__33771__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33772__i = 0, G__33772__a = new Array(arguments.length -  0);
while (G__33772__i < G__33772__a.length) {G__33772__a[G__33772__i] = arguments[G__33772__i + 0]; ++G__33772__i;}
  args = new cljs.core.IndexedSeq(G__33772__a,0);
} 
return G__33771__delegate.call(this,args);};
G__33771.cljs$lang$maxFixedArity = 0;
G__33771.cljs$lang$applyTo = (function (arglist__33773){
var args = cljs.core.seq(arglist__33773);
return G__33771__delegate(args);
});
G__33771.cljs$core$IFn$_invoke$arity$variadic = G__33771__delegate;
return G__33771;
})()
;})(_STAR_print_fn_STAR_33768,_STAR_print_newline_STAR_33769,base_path_33770))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33769;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33768;
}}catch (e33767){if((e33767 instanceof Error)){
var e = e33767;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33770], null));
} else {
var e = e33767;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33770))
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
figwheel.client.repl_plugin = (function repl_plugin(p__33774){
var map__33779 = p__33774;
var map__33779__$1 = ((cljs.core.seq_QMARK_.call(null,map__33779))?cljs.core.apply.call(null,cljs.core.hash_map,map__33779):map__33779);
var opts = map__33779__$1;
var build_id = cljs.core.get.call(null,map__33779__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33779,map__33779__$1,opts,build_id){
return (function (p__33780){
var vec__33781 = p__33780;
var map__33782 = cljs.core.nth.call(null,vec__33781,(0),null);
var map__33782__$1 = ((cljs.core.seq_QMARK_.call(null,map__33782))?cljs.core.apply.call(null,cljs.core.hash_map,map__33782):map__33782);
var msg = map__33782__$1;
var msg_name = cljs.core.get.call(null,map__33782__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33781,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__33781,map__33782,map__33782__$1,msg,msg_name,_,map__33779,map__33779__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33781,map__33782,map__33782__$1,msg,msg_name,_,map__33779,map__33779__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33779,map__33779__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__33786){
var vec__33787 = p__33786;
var map__33788 = cljs.core.nth.call(null,vec__33787,(0),null);
var map__33788__$1 = ((cljs.core.seq_QMARK_.call(null,map__33788))?cljs.core.apply.call(null,cljs.core.hash_map,map__33788):map__33788);
var msg = map__33788__$1;
var msg_name = cljs.core.get.call(null,map__33788__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33787,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__33789){
var map__33797 = p__33789;
var map__33797__$1 = ((cljs.core.seq_QMARK_.call(null,map__33797))?cljs.core.apply.call(null,cljs.core.hash_map,map__33797):map__33797);
var on_compile_fail = cljs.core.get.call(null,map__33797__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__33797__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__33797,map__33797__$1,on_compile_fail,on_compile_warning){
return (function (p__33798){
var vec__33799 = p__33798;
var map__33800 = cljs.core.nth.call(null,vec__33799,(0),null);
var map__33800__$1 = ((cljs.core.seq_QMARK_.call(null,map__33800))?cljs.core.apply.call(null,cljs.core.hash_map,map__33800):map__33800);
var msg = map__33800__$1;
var msg_name = cljs.core.get.call(null,map__33800__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33799,(1));
var pred__33801 = cljs.core._EQ_;
var expr__33802 = msg_name;
if(cljs.core.truth_(pred__33801.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33802))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33801.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33802))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33797,map__33797__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__,msg_hist,msg_names,msg){
return (function (state_33999){
var state_val_34000 = (state_33999[(1)]);
if((state_val_34000 === (7))){
var inst_33935 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34001_34042 = state_33999__$1;
(statearr_34001_34042[(2)] = inst_33935);

(statearr_34001_34042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (20))){
var inst_33961 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33999__$1 = state_33999;
if(inst_33961){
var statearr_34002_34043 = state_33999__$1;
(statearr_34002_34043[(1)] = (22));

} else {
var statearr_34003_34044 = state_33999__$1;
(statearr_34003_34044[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (27))){
var inst_33973 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33974 = figwheel.client.heads_up.display_warning.call(null,inst_33973);
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33999__$1,(30),inst_33974);
} else {
if((state_val_34000 === (1))){
var inst_33923 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33999__$1 = state_33999;
if(cljs.core.truth_(inst_33923)){
var statearr_34004_34045 = state_33999__$1;
(statearr_34004_34045[(1)] = (2));

} else {
var statearr_34005_34046 = state_33999__$1;
(statearr_34005_34046[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (24))){
var inst_33989 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34006_34047 = state_33999__$1;
(statearr_34006_34047[(2)] = inst_33989);

(statearr_34006_34047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (4))){
var inst_33997 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33999__$1,inst_33997);
} else {
if((state_val_34000 === (15))){
var inst_33950 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33951 = figwheel.client.format_messages.call(null,inst_33950);
var inst_33952 = figwheel.client.heads_up.display_error.call(null,inst_33951);
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33999__$1,(18),inst_33952);
} else {
if((state_val_34000 === (21))){
var inst_33991 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34007_34048 = state_33999__$1;
(statearr_34007_34048[(2)] = inst_33991);

(statearr_34007_34048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (31))){
var inst_33980 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33999__$1,(34),inst_33980);
} else {
if((state_val_34000 === (32))){
var state_33999__$1 = state_33999;
var statearr_34008_34049 = state_33999__$1;
(statearr_34008_34049[(2)] = null);

(statearr_34008_34049[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (33))){
var inst_33985 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34009_34050 = state_33999__$1;
(statearr_34009_34050[(2)] = inst_33985);

(statearr_34009_34050[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (13))){
var inst_33941 = (state_33999[(2)]);
var inst_33942 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33943 = figwheel.client.format_messages.call(null,inst_33942);
var inst_33944 = figwheel.client.heads_up.display_error.call(null,inst_33943);
var state_33999__$1 = (function (){var statearr_34010 = state_33999;
(statearr_34010[(7)] = inst_33941);

return statearr_34010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33999__$1,(14),inst_33944);
} else {
if((state_val_34000 === (22))){
var inst_33963 = figwheel.client.heads_up.clear.call(null);
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33999__$1,(25),inst_33963);
} else {
if((state_val_34000 === (29))){
var inst_33987 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34011_34051 = state_33999__$1;
(statearr_34011_34051[(2)] = inst_33987);

(statearr_34011_34051[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (6))){
var inst_33931 = figwheel.client.heads_up.clear.call(null);
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33999__$1,(9),inst_33931);
} else {
if((state_val_34000 === (28))){
var inst_33978 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33999__$1 = state_33999;
if(inst_33978){
var statearr_34012_34052 = state_33999__$1;
(statearr_34012_34052[(1)] = (31));

} else {
var statearr_34013_34053 = state_33999__$1;
(statearr_34013_34053[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (25))){
var inst_33965 = (state_33999[(2)]);
var inst_33966 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33967 = figwheel.client.heads_up.display_warning.call(null,inst_33966);
var state_33999__$1 = (function (){var statearr_34014 = state_33999;
(statearr_34014[(8)] = inst_33965);

return statearr_34014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33999__$1,(26),inst_33967);
} else {
if((state_val_34000 === (34))){
var inst_33982 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34015_34054 = state_33999__$1;
(statearr_34015_34054[(2)] = inst_33982);

(statearr_34015_34054[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (17))){
var inst_33993 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34016_34055 = state_33999__$1;
(statearr_34016_34055[(2)] = inst_33993);

(statearr_34016_34055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (3))){
var inst_33937 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33999__$1 = state_33999;
if(inst_33937){
var statearr_34017_34056 = state_33999__$1;
(statearr_34017_34056[(1)] = (10));

} else {
var statearr_34018_34057 = state_33999__$1;
(statearr_34018_34057[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (12))){
var inst_33995 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34019_34058 = state_33999__$1;
(statearr_34019_34058[(2)] = inst_33995);

(statearr_34019_34058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (2))){
var inst_33925 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33999__$1 = state_33999;
if(cljs.core.truth_(inst_33925)){
var statearr_34020_34059 = state_33999__$1;
(statearr_34020_34059[(1)] = (5));

} else {
var statearr_34021_34060 = state_33999__$1;
(statearr_34021_34060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (23))){
var inst_33971 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33999__$1 = state_33999;
if(inst_33971){
var statearr_34022_34061 = state_33999__$1;
(statearr_34022_34061[(1)] = (27));

} else {
var statearr_34023_34062 = state_33999__$1;
(statearr_34023_34062[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (19))){
var inst_33958 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33959 = figwheel.client.heads_up.append_message.call(null,inst_33958);
var state_33999__$1 = state_33999;
var statearr_34024_34063 = state_33999__$1;
(statearr_34024_34063[(2)] = inst_33959);

(statearr_34024_34063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (11))){
var inst_33948 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33999__$1 = state_33999;
if(inst_33948){
var statearr_34025_34064 = state_33999__$1;
(statearr_34025_34064[(1)] = (15));

} else {
var statearr_34026_34065 = state_33999__$1;
(statearr_34026_34065[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (9))){
var inst_33933 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34027_34066 = state_33999__$1;
(statearr_34027_34066[(2)] = inst_33933);

(statearr_34027_34066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (5))){
var inst_33927 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33999__$1,(8),inst_33927);
} else {
if((state_val_34000 === (14))){
var inst_33946 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34028_34067 = state_33999__$1;
(statearr_34028_34067[(2)] = inst_33946);

(statearr_34028_34067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (26))){
var inst_33969 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34029_34068 = state_33999__$1;
(statearr_34029_34068[(2)] = inst_33969);

(statearr_34029_34068[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (16))){
var inst_33956 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33999__$1 = state_33999;
if(inst_33956){
var statearr_34030_34069 = state_33999__$1;
(statearr_34030_34069[(1)] = (19));

} else {
var statearr_34031_34070 = state_33999__$1;
(statearr_34031_34070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (30))){
var inst_33976 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34032_34071 = state_33999__$1;
(statearr_34032_34071[(2)] = inst_33976);

(statearr_34032_34071[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (10))){
var inst_33939 = figwheel.client.heads_up.clear.call(null);
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33999__$1,(13),inst_33939);
} else {
if((state_val_34000 === (18))){
var inst_33954 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34033_34072 = state_33999__$1;
(statearr_34033_34072[(2)] = inst_33954);

(statearr_34033_34072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (8))){
var inst_33929 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34034_34073 = state_33999__$1;
(statearr_34034_34073[(2)] = inst_33929);

(statearr_34034_34073[(1)] = (7));


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
});})(c__19255__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19199__auto__,c__19255__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_34038 = [null,null,null,null,null,null,null,null,null];
(statearr_34038[(0)] = state_machine__19200__auto__);

(statearr_34038[(1)] = (1));

return statearr_34038;
});
var state_machine__19200__auto____1 = (function (state_33999){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_33999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e34039){if((e34039 instanceof Object)){
var ex__19203__auto__ = e34039;
var statearr_34040_34074 = state_33999;
(statearr_34040_34074[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34075 = state_33999;
state_33999 = G__34075;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_33999){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_33999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__,msg_hist,msg_names,msg))
})();
var state__19257__auto__ = (function (){var statearr_34041 = f__19256__auto__.call(null);
(statearr_34041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_34041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__,msg_hist,msg_names,msg))
);

return c__19255__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19255__auto___34138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___34138,ch){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___34138,ch){
return (function (state_34121){
var state_val_34122 = (state_34121[(1)]);
if((state_val_34122 === (8))){
var inst_34113 = (state_34121[(2)]);
var state_34121__$1 = (function (){var statearr_34123 = state_34121;
(statearr_34123[(7)] = inst_34113);

return statearr_34123;
})();
var statearr_34124_34139 = state_34121__$1;
(statearr_34124_34139[(2)] = null);

(statearr_34124_34139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34122 === (7))){
var inst_34117 = (state_34121[(2)]);
var state_34121__$1 = state_34121;
var statearr_34125_34140 = state_34121__$1;
(statearr_34125_34140[(2)] = inst_34117);

(statearr_34125_34140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34122 === (6))){
var state_34121__$1 = state_34121;
var statearr_34126_34141 = state_34121__$1;
(statearr_34126_34141[(2)] = null);

(statearr_34126_34141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34122 === (5))){
var inst_34109 = (state_34121[(8)]);
var inst_34111 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34109);
var state_34121__$1 = state_34121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34121__$1,(8),inst_34111);
} else {
if((state_val_34122 === (4))){
var inst_34109 = (state_34121[(8)]);
var inst_34109__$1 = (state_34121[(2)]);
var state_34121__$1 = (function (){var statearr_34127 = state_34121;
(statearr_34127[(8)] = inst_34109__$1);

return statearr_34127;
})();
if(cljs.core.truth_(inst_34109__$1)){
var statearr_34128_34142 = state_34121__$1;
(statearr_34128_34142[(1)] = (5));

} else {
var statearr_34129_34143 = state_34121__$1;
(statearr_34129_34143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34122 === (3))){
var inst_34119 = (state_34121[(2)]);
var state_34121__$1 = state_34121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34121__$1,inst_34119);
} else {
if((state_val_34122 === (2))){
var state_34121__$1 = state_34121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34121__$1,(4),ch);
} else {
if((state_val_34122 === (1))){
var state_34121__$1 = state_34121;
var statearr_34130_34144 = state_34121__$1;
(statearr_34130_34144[(2)] = null);

(statearr_34130_34144[(1)] = (2));


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
});})(c__19255__auto___34138,ch))
;
return ((function (switch__19199__auto__,c__19255__auto___34138,ch){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_34134 = [null,null,null,null,null,null,null,null,null];
(statearr_34134[(0)] = state_machine__19200__auto__);

(statearr_34134[(1)] = (1));

return statearr_34134;
});
var state_machine__19200__auto____1 = (function (state_34121){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_34121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e34135){if((e34135 instanceof Object)){
var ex__19203__auto__ = e34135;
var statearr_34136_34145 = state_34121;
(statearr_34136_34145[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34146 = state_34121;
state_34121 = G__34146;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_34121){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_34121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___34138,ch))
})();
var state__19257__auto__ = (function (){var statearr_34137 = f__19256__auto__.call(null);
(statearr_34137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___34138);

return statearr_34137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___34138,ch))
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
var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__){
return (function (state_34167){
var state_val_34168 = (state_34167[(1)]);
if((state_val_34168 === (2))){
var inst_34164 = (state_34167[(2)]);
var inst_34165 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34167__$1 = (function (){var statearr_34169 = state_34167;
(statearr_34169[(7)] = inst_34164);

return statearr_34169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34167__$1,inst_34165);
} else {
if((state_val_34168 === (1))){
var inst_34162 = cljs.core.async.timeout.call(null,(3000));
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34167__$1,(2),inst_34162);
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
var statearr_34173 = [null,null,null,null,null,null,null,null];
(statearr_34173[(0)] = state_machine__19200__auto__);

(statearr_34173[(1)] = (1));

return statearr_34173;
});
var state_machine__19200__auto____1 = (function (state_34167){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_34167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e34174){if((e34174 instanceof Object)){
var ex__19203__auto__ = e34174;
var statearr_34175_34177 = state_34167;
(statearr_34175_34177[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34178 = state_34167;
state_34167 = G__34178;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_34167){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_34167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__))
})();
var state__19257__auto__ = (function (){var statearr_34176 = f__19256__auto__.call(null);
(statearr_34176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_34176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__))
);

return c__19255__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj34182 = {"detail":url};
return obj34182;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__34183){
var map__34189 = p__34183;
var map__34189__$1 = ((cljs.core.seq_QMARK_.call(null,map__34189))?cljs.core.apply.call(null,cljs.core.hash_map,map__34189):map__34189);
var ed = map__34189__$1;
var exception_data = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34190_34194 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34191_34195 = null;
var count__34192_34196 = (0);
var i__34193_34197 = (0);
while(true){
if((i__34193_34197 < count__34192_34196)){
var msg_34198 = cljs.core._nth.call(null,chunk__34191_34195,i__34193_34197);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34198);

var G__34199 = seq__34190_34194;
var G__34200 = chunk__34191_34195;
var G__34201 = count__34192_34196;
var G__34202 = (i__34193_34197 + (1));
seq__34190_34194 = G__34199;
chunk__34191_34195 = G__34200;
count__34192_34196 = G__34201;
i__34193_34197 = G__34202;
continue;
} else {
var temp__4126__auto___34203 = cljs.core.seq.call(null,seq__34190_34194);
if(temp__4126__auto___34203){
var seq__34190_34204__$1 = temp__4126__auto___34203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34190_34204__$1)){
var c__16933__auto___34205 = cljs.core.chunk_first.call(null,seq__34190_34204__$1);
var G__34206 = cljs.core.chunk_rest.call(null,seq__34190_34204__$1);
var G__34207 = c__16933__auto___34205;
var G__34208 = cljs.core.count.call(null,c__16933__auto___34205);
var G__34209 = (0);
seq__34190_34194 = G__34206;
chunk__34191_34195 = G__34207;
count__34192_34196 = G__34208;
i__34193_34197 = G__34209;
continue;
} else {
var msg_34210 = cljs.core.first.call(null,seq__34190_34204__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34210);

var G__34211 = cljs.core.next.call(null,seq__34190_34204__$1);
var G__34212 = null;
var G__34213 = (0);
var G__34214 = (0);
seq__34190_34194 = G__34211;
chunk__34191_34195 = G__34212;
count__34192_34196 = G__34213;
i__34193_34197 = G__34214;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__34215){
var map__34217 = p__34215;
var map__34217__$1 = ((cljs.core.seq_QMARK_.call(null,map__34217))?cljs.core.apply.call(null,cljs.core.hash_map,map__34217):map__34217);
var w = map__34217__$1;
var message = cljs.core.get.call(null,map__34217__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__34224 = cljs.core.seq.call(null,plugins);
var chunk__34225 = null;
var count__34226 = (0);
var i__34227 = (0);
while(true){
if((i__34227 < count__34226)){
var vec__34228 = cljs.core._nth.call(null,chunk__34225,i__34227);
var k = cljs.core.nth.call(null,vec__34228,(0),null);
var plugin = cljs.core.nth.call(null,vec__34228,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34230 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34224,chunk__34225,count__34226,i__34227,pl_34230,vec__34228,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34230.call(null,msg_hist);
});})(seq__34224,chunk__34225,count__34226,i__34227,pl_34230,vec__34228,k,plugin))
);
} else {
}

var G__34231 = seq__34224;
var G__34232 = chunk__34225;
var G__34233 = count__34226;
var G__34234 = (i__34227 + (1));
seq__34224 = G__34231;
chunk__34225 = G__34232;
count__34226 = G__34233;
i__34227 = G__34234;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34224);
if(temp__4126__auto__){
var seq__34224__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34224__$1)){
var c__16933__auto__ = cljs.core.chunk_first.call(null,seq__34224__$1);
var G__34235 = cljs.core.chunk_rest.call(null,seq__34224__$1);
var G__34236 = c__16933__auto__;
var G__34237 = cljs.core.count.call(null,c__16933__auto__);
var G__34238 = (0);
seq__34224 = G__34235;
chunk__34225 = G__34236;
count__34226 = G__34237;
i__34227 = G__34238;
continue;
} else {
var vec__34229 = cljs.core.first.call(null,seq__34224__$1);
var k = cljs.core.nth.call(null,vec__34229,(0),null);
var plugin = cljs.core.nth.call(null,vec__34229,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34239 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34224,chunk__34225,count__34226,i__34227,pl_34239,vec__34229,k,plugin,seq__34224__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34239.call(null,msg_hist);
});})(seq__34224,chunk__34225,count__34226,i__34227,pl_34239,vec__34229,k,plugin,seq__34224__$1,temp__4126__auto__))
);
} else {
}

var G__34240 = cljs.core.next.call(null,seq__34224__$1);
var G__34241 = null;
var G__34242 = (0);
var G__34243 = (0);
seq__34224 = G__34240;
chunk__34225 = G__34241;
count__34226 = G__34242;
i__34227 = G__34243;
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
var watch_and_reload__delegate = function (p__34244){
var map__34246 = p__34244;
var map__34246__$1 = ((cljs.core.seq_QMARK_.call(null,map__34246))?cljs.core.apply.call(null,cljs.core.hash_map,map__34246):map__34246);
var opts = map__34246__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__34244 = null;
if (arguments.length > 0) {
var G__34247__i = 0, G__34247__a = new Array(arguments.length -  0);
while (G__34247__i < G__34247__a.length) {G__34247__a[G__34247__i] = arguments[G__34247__i + 0]; ++G__34247__i;}
  p__34244 = new cljs.core.IndexedSeq(G__34247__a,0);
} 
return watch_and_reload__delegate.call(this,p__34244);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__34248){
var p__34244 = cljs.core.seq(arglist__34248);
return watch_and_reload__delegate(p__34244);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1428567723657