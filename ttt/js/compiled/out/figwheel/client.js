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
var G__33612__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33613__i = 0, G__33613__a = new Array(arguments.length -  0);
while (G__33613__i < G__33613__a.length) {G__33613__a[G__33613__i] = arguments[G__33613__i + 0]; ++G__33613__i;}
  args = new cljs.core.IndexedSeq(G__33613__a,0);
} 
return G__33612__delegate.call(this,args);};
G__33612.cljs$lang$maxFixedArity = 0;
G__33612.cljs$lang$applyTo = (function (arglist__33614){
var args = cljs.core.seq(arglist__33614);
return G__33612__delegate(args);
});
G__33612.cljs$core$IFn$_invoke$arity$variadic = G__33612__delegate;
return G__33612;
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
figwheel.client.error_msg_format = (function error_msg_format(p__33615){
var map__33617 = p__33615;
var map__33617__$1 = ((cljs.core.seq_QMARK_.call(null,map__33617))?cljs.core.apply.call(null,cljs.core.hash_map,map__33617):map__33617);
var class$ = cljs.core.get.call(null,map__33617__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__33617__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__19256__auto___33746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___33746,ch){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___33746,ch){
return (function (state_33720){
var state_val_33721 = (state_33720[(1)]);
if((state_val_33721 === (7))){
var inst_33716 = (state_33720[(2)]);
var state_33720__$1 = state_33720;
var statearr_33722_33747 = state_33720__$1;
(statearr_33722_33747[(2)] = inst_33716);

(statearr_33722_33747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (1))){
var state_33720__$1 = state_33720;
var statearr_33723_33748 = state_33720__$1;
(statearr_33723_33748[(2)] = null);

(statearr_33723_33748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (4))){
var inst_33684 = (state_33720[(7)]);
var inst_33684__$1 = (state_33720[(2)]);
var state_33720__$1 = (function (){var statearr_33724 = state_33720;
(statearr_33724[(7)] = inst_33684__$1);

return statearr_33724;
})();
if(cljs.core.truth_(inst_33684__$1)){
var statearr_33725_33749 = state_33720__$1;
(statearr_33725_33749[(1)] = (5));

} else {
var statearr_33726_33750 = state_33720__$1;
(statearr_33726_33750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (13))){
var state_33720__$1 = state_33720;
var statearr_33727_33751 = state_33720__$1;
(statearr_33727_33751[(2)] = null);

(statearr_33727_33751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (6))){
var state_33720__$1 = state_33720;
var statearr_33728_33752 = state_33720__$1;
(statearr_33728_33752[(2)] = null);

(statearr_33728_33752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (3))){
var inst_33718 = (state_33720[(2)]);
var state_33720__$1 = state_33720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33720__$1,inst_33718);
} else {
if((state_val_33721 === (12))){
var inst_33691 = (state_33720[(8)]);
var inst_33704 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33691);
var inst_33705 = cljs.core.first.call(null,inst_33704);
var inst_33706 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33705);
var inst_33707 = console.warn("Figwheel: Not loading code with warnings - ",inst_33706);
var state_33720__$1 = state_33720;
var statearr_33729_33753 = state_33720__$1;
(statearr_33729_33753[(2)] = inst_33707);

(statearr_33729_33753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (2))){
var state_33720__$1 = state_33720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33720__$1,(4),ch);
} else {
if((state_val_33721 === (11))){
var inst_33700 = (state_33720[(2)]);
var state_33720__$1 = state_33720;
var statearr_33730_33754 = state_33720__$1;
(statearr_33730_33754[(2)] = inst_33700);

(statearr_33730_33754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (9))){
var inst_33690 = (state_33720[(9)]);
var inst_33702 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33690,opts);
var state_33720__$1 = state_33720;
if(inst_33702){
var statearr_33731_33755 = state_33720__$1;
(statearr_33731_33755[(1)] = (12));

} else {
var statearr_33732_33756 = state_33720__$1;
(statearr_33732_33756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (5))){
var inst_33690 = (state_33720[(9)]);
var inst_33684 = (state_33720[(7)]);
var inst_33686 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33687 = (new cljs.core.PersistentArrayMap(null,2,inst_33686,null));
var inst_33688 = (new cljs.core.PersistentHashSet(null,inst_33687,null));
var inst_33689 = figwheel.client.focus_msgs.call(null,inst_33688,inst_33684);
var inst_33690__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33689);
var inst_33691 = cljs.core.first.call(null,inst_33689);
var inst_33692 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33690__$1,opts);
var state_33720__$1 = (function (){var statearr_33733 = state_33720;
(statearr_33733[(8)] = inst_33691);

(statearr_33733[(9)] = inst_33690__$1);

return statearr_33733;
})();
if(cljs.core.truth_(inst_33692)){
var statearr_33734_33757 = state_33720__$1;
(statearr_33734_33757[(1)] = (8));

} else {
var statearr_33735_33758 = state_33720__$1;
(statearr_33735_33758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (14))){
var inst_33710 = (state_33720[(2)]);
var state_33720__$1 = state_33720;
var statearr_33736_33759 = state_33720__$1;
(statearr_33736_33759[(2)] = inst_33710);

(statearr_33736_33759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (10))){
var inst_33712 = (state_33720[(2)]);
var state_33720__$1 = (function (){var statearr_33737 = state_33720;
(statearr_33737[(10)] = inst_33712);

return statearr_33737;
})();
var statearr_33738_33760 = state_33720__$1;
(statearr_33738_33760[(2)] = null);

(statearr_33738_33760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (8))){
var inst_33691 = (state_33720[(8)]);
var inst_33694 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33695 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33691);
var inst_33696 = cljs.core.async.timeout.call(null,(1000));
var inst_33697 = [inst_33695,inst_33696];
var inst_33698 = (new cljs.core.PersistentVector(null,2,(5),inst_33694,inst_33697,null));
var state_33720__$1 = state_33720;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33720__$1,(11),inst_33698);
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
});})(c__19256__auto___33746,ch))
;
return ((function (switch__19200__auto__,c__19256__auto___33746,ch){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_33742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33742[(0)] = state_machine__19201__auto__);

(statearr_33742[(1)] = (1));

return statearr_33742;
});
var state_machine__19201__auto____1 = (function (state_33720){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_33720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e33743){if((e33743 instanceof Object)){
var ex__19204__auto__ = e33743;
var statearr_33744_33761 = state_33720;
(statearr_33744_33761[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33762 = state_33720;
state_33720 = G__33762;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_33720){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_33720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___33746,ch))
})();
var state__19258__auto__ = (function (){var statearr_33745 = f__19257__auto__.call(null);
(statearr_33745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___33746);

return statearr_33745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___33746,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33763_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33763_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_33772 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__33765_SHARP_,p2__33764_SHARP_){
return [cljs.core.str(p2__33764_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33772){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_33770 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33771 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33770,_STAR_print_newline_STAR_33771,base_path_33772){
return (function() { 
var G__33773__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33774__i = 0, G__33774__a = new Array(arguments.length -  0);
while (G__33774__i < G__33774__a.length) {G__33774__a[G__33774__i] = arguments[G__33774__i + 0]; ++G__33774__i;}
  args = new cljs.core.IndexedSeq(G__33774__a,0);
} 
return G__33773__delegate.call(this,args);};
G__33773.cljs$lang$maxFixedArity = 0;
G__33773.cljs$lang$applyTo = (function (arglist__33775){
var args = cljs.core.seq(arglist__33775);
return G__33773__delegate(args);
});
G__33773.cljs$core$IFn$_invoke$arity$variadic = G__33773__delegate;
return G__33773;
})()
;})(_STAR_print_fn_STAR_33770,_STAR_print_newline_STAR_33771,base_path_33772))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33771;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33770;
}}catch (e33769){if((e33769 instanceof Error)){
var e = e33769;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33772], null));
} else {
var e = e33769;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33772))
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
figwheel.client.repl_plugin = (function repl_plugin(p__33776){
var map__33781 = p__33776;
var map__33781__$1 = ((cljs.core.seq_QMARK_.call(null,map__33781))?cljs.core.apply.call(null,cljs.core.hash_map,map__33781):map__33781);
var opts = map__33781__$1;
var build_id = cljs.core.get.call(null,map__33781__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33781,map__33781__$1,opts,build_id){
return (function (p__33782){
var vec__33783 = p__33782;
var map__33784 = cljs.core.nth.call(null,vec__33783,(0),null);
var map__33784__$1 = ((cljs.core.seq_QMARK_.call(null,map__33784))?cljs.core.apply.call(null,cljs.core.hash_map,map__33784):map__33784);
var msg = map__33784__$1;
var msg_name = cljs.core.get.call(null,map__33784__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33783,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__33783,map__33784,map__33784__$1,msg,msg_name,_,map__33781,map__33781__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33783,map__33784,map__33784__$1,msg,msg_name,_,map__33781,map__33781__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33781,map__33781__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__33788){
var vec__33789 = p__33788;
var map__33790 = cljs.core.nth.call(null,vec__33789,(0),null);
var map__33790__$1 = ((cljs.core.seq_QMARK_.call(null,map__33790))?cljs.core.apply.call(null,cljs.core.hash_map,map__33790):map__33790);
var msg = map__33790__$1;
var msg_name = cljs.core.get.call(null,map__33790__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33789,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__33791){
var map__33799 = p__33791;
var map__33799__$1 = ((cljs.core.seq_QMARK_.call(null,map__33799))?cljs.core.apply.call(null,cljs.core.hash_map,map__33799):map__33799);
var on_compile_fail = cljs.core.get.call(null,map__33799__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__33799__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__33799,map__33799__$1,on_compile_fail,on_compile_warning){
return (function (p__33800){
var vec__33801 = p__33800;
var map__33802 = cljs.core.nth.call(null,vec__33801,(0),null);
var map__33802__$1 = ((cljs.core.seq_QMARK_.call(null,map__33802))?cljs.core.apply.call(null,cljs.core.hash_map,map__33802):map__33802);
var msg = map__33802__$1;
var msg_name = cljs.core.get.call(null,map__33802__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33801,(1));
var pred__33803 = cljs.core._EQ_;
var expr__33804 = msg_name;
if(cljs.core.truth_(pred__33803.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33804))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33803.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33804))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33799,map__33799__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto__,msg_hist,msg_names,msg){
return (function (state_34001){
var state_val_34002 = (state_34001[(1)]);
if((state_val_34002 === (7))){
var inst_33937 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34003_34044 = state_34001__$1;
(statearr_34003_34044[(2)] = inst_33937);

(statearr_34003_34044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (20))){
var inst_33963 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34001__$1 = state_34001;
if(inst_33963){
var statearr_34004_34045 = state_34001__$1;
(statearr_34004_34045[(1)] = (22));

} else {
var statearr_34005_34046 = state_34001__$1;
(statearr_34005_34046[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (27))){
var inst_33975 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33976 = figwheel.client.heads_up.display_warning.call(null,inst_33975);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34001__$1,(30),inst_33976);
} else {
if((state_val_34002 === (1))){
var inst_33925 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34001__$1 = state_34001;
if(cljs.core.truth_(inst_33925)){
var statearr_34006_34047 = state_34001__$1;
(statearr_34006_34047[(1)] = (2));

} else {
var statearr_34007_34048 = state_34001__$1;
(statearr_34007_34048[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (24))){
var inst_33991 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34008_34049 = state_34001__$1;
(statearr_34008_34049[(2)] = inst_33991);

(statearr_34008_34049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (4))){
var inst_33999 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34001__$1,inst_33999);
} else {
if((state_val_34002 === (15))){
var inst_33952 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33953 = figwheel.client.format_messages.call(null,inst_33952);
var inst_33954 = figwheel.client.heads_up.display_error.call(null,inst_33953);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34001__$1,(18),inst_33954);
} else {
if((state_val_34002 === (21))){
var inst_33993 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34009_34050 = state_34001__$1;
(statearr_34009_34050[(2)] = inst_33993);

(statearr_34009_34050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (31))){
var inst_33982 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34001__$1,(34),inst_33982);
} else {
if((state_val_34002 === (32))){
var state_34001__$1 = state_34001;
var statearr_34010_34051 = state_34001__$1;
(statearr_34010_34051[(2)] = null);

(statearr_34010_34051[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (33))){
var inst_33987 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34011_34052 = state_34001__$1;
(statearr_34011_34052[(2)] = inst_33987);

(statearr_34011_34052[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (13))){
var inst_33943 = (state_34001[(2)]);
var inst_33944 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33945 = figwheel.client.format_messages.call(null,inst_33944);
var inst_33946 = figwheel.client.heads_up.display_error.call(null,inst_33945);
var state_34001__$1 = (function (){var statearr_34012 = state_34001;
(statearr_34012[(7)] = inst_33943);

return statearr_34012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34001__$1,(14),inst_33946);
} else {
if((state_val_34002 === (22))){
var inst_33965 = figwheel.client.heads_up.clear.call(null);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34001__$1,(25),inst_33965);
} else {
if((state_val_34002 === (29))){
var inst_33989 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34013_34053 = state_34001__$1;
(statearr_34013_34053[(2)] = inst_33989);

(statearr_34013_34053[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (6))){
var inst_33933 = figwheel.client.heads_up.clear.call(null);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34001__$1,(9),inst_33933);
} else {
if((state_val_34002 === (28))){
var inst_33980 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34001__$1 = state_34001;
if(inst_33980){
var statearr_34014_34054 = state_34001__$1;
(statearr_34014_34054[(1)] = (31));

} else {
var statearr_34015_34055 = state_34001__$1;
(statearr_34015_34055[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (25))){
var inst_33967 = (state_34001[(2)]);
var inst_33968 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33969 = figwheel.client.heads_up.display_warning.call(null,inst_33968);
var state_34001__$1 = (function (){var statearr_34016 = state_34001;
(statearr_34016[(8)] = inst_33967);

return statearr_34016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34001__$1,(26),inst_33969);
} else {
if((state_val_34002 === (34))){
var inst_33984 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34017_34056 = state_34001__$1;
(statearr_34017_34056[(2)] = inst_33984);

(statearr_34017_34056[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (17))){
var inst_33995 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34018_34057 = state_34001__$1;
(statearr_34018_34057[(2)] = inst_33995);

(statearr_34018_34057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (3))){
var inst_33939 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34001__$1 = state_34001;
if(inst_33939){
var statearr_34019_34058 = state_34001__$1;
(statearr_34019_34058[(1)] = (10));

} else {
var statearr_34020_34059 = state_34001__$1;
(statearr_34020_34059[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (12))){
var inst_33997 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34021_34060 = state_34001__$1;
(statearr_34021_34060[(2)] = inst_33997);

(statearr_34021_34060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (2))){
var inst_33927 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34001__$1 = state_34001;
if(cljs.core.truth_(inst_33927)){
var statearr_34022_34061 = state_34001__$1;
(statearr_34022_34061[(1)] = (5));

} else {
var statearr_34023_34062 = state_34001__$1;
(statearr_34023_34062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (23))){
var inst_33973 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34001__$1 = state_34001;
if(inst_33973){
var statearr_34024_34063 = state_34001__$1;
(statearr_34024_34063[(1)] = (27));

} else {
var statearr_34025_34064 = state_34001__$1;
(statearr_34025_34064[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (19))){
var inst_33960 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33961 = figwheel.client.heads_up.append_message.call(null,inst_33960);
var state_34001__$1 = state_34001;
var statearr_34026_34065 = state_34001__$1;
(statearr_34026_34065[(2)] = inst_33961);

(statearr_34026_34065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (11))){
var inst_33950 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34001__$1 = state_34001;
if(inst_33950){
var statearr_34027_34066 = state_34001__$1;
(statearr_34027_34066[(1)] = (15));

} else {
var statearr_34028_34067 = state_34001__$1;
(statearr_34028_34067[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (9))){
var inst_33935 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34029_34068 = state_34001__$1;
(statearr_34029_34068[(2)] = inst_33935);

(statearr_34029_34068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (5))){
var inst_33929 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34001__$1,(8),inst_33929);
} else {
if((state_val_34002 === (14))){
var inst_33948 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34030_34069 = state_34001__$1;
(statearr_34030_34069[(2)] = inst_33948);

(statearr_34030_34069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (26))){
var inst_33971 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34031_34070 = state_34001__$1;
(statearr_34031_34070[(2)] = inst_33971);

(statearr_34031_34070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (16))){
var inst_33958 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34001__$1 = state_34001;
if(inst_33958){
var statearr_34032_34071 = state_34001__$1;
(statearr_34032_34071[(1)] = (19));

} else {
var statearr_34033_34072 = state_34001__$1;
(statearr_34033_34072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (30))){
var inst_33978 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34034_34073 = state_34001__$1;
(statearr_34034_34073[(2)] = inst_33978);

(statearr_34034_34073[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (10))){
var inst_33941 = figwheel.client.heads_up.clear.call(null);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34001__$1,(13),inst_33941);
} else {
if((state_val_34002 === (18))){
var inst_33956 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34035_34074 = state_34001__$1;
(statearr_34035_34074[(2)] = inst_33956);

(statearr_34035_34074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (8))){
var inst_33931 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34036_34075 = state_34001__$1;
(statearr_34036_34075[(2)] = inst_33931);

(statearr_34036_34075[(1)] = (7));


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
});})(c__19256__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19200__auto__,c__19256__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_34040 = [null,null,null,null,null,null,null,null,null];
(statearr_34040[(0)] = state_machine__19201__auto__);

(statearr_34040[(1)] = (1));

return statearr_34040;
});
var state_machine__19201__auto____1 = (function (state_34001){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_34001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e34041){if((e34041 instanceof Object)){
var ex__19204__auto__ = e34041;
var statearr_34042_34076 = state_34001;
(statearr_34042_34076[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34077 = state_34001;
state_34001 = G__34077;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_34001){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_34001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto__,msg_hist,msg_names,msg))
})();
var state__19258__auto__ = (function (){var statearr_34043 = f__19257__auto__.call(null);
(statearr_34043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto__);

return statearr_34043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto__,msg_hist,msg_names,msg))
);

return c__19256__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19256__auto___34140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___34140,ch){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___34140,ch){
return (function (state_34123){
var state_val_34124 = (state_34123[(1)]);
if((state_val_34124 === (8))){
var inst_34115 = (state_34123[(2)]);
var state_34123__$1 = (function (){var statearr_34125 = state_34123;
(statearr_34125[(7)] = inst_34115);

return statearr_34125;
})();
var statearr_34126_34141 = state_34123__$1;
(statearr_34126_34141[(2)] = null);

(statearr_34126_34141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (7))){
var inst_34119 = (state_34123[(2)]);
var state_34123__$1 = state_34123;
var statearr_34127_34142 = state_34123__$1;
(statearr_34127_34142[(2)] = inst_34119);

(statearr_34127_34142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (6))){
var state_34123__$1 = state_34123;
var statearr_34128_34143 = state_34123__$1;
(statearr_34128_34143[(2)] = null);

(statearr_34128_34143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (5))){
var inst_34111 = (state_34123[(8)]);
var inst_34113 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34111);
var state_34123__$1 = state_34123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34123__$1,(8),inst_34113);
} else {
if((state_val_34124 === (4))){
var inst_34111 = (state_34123[(8)]);
var inst_34111__$1 = (state_34123[(2)]);
var state_34123__$1 = (function (){var statearr_34129 = state_34123;
(statearr_34129[(8)] = inst_34111__$1);

return statearr_34129;
})();
if(cljs.core.truth_(inst_34111__$1)){
var statearr_34130_34144 = state_34123__$1;
(statearr_34130_34144[(1)] = (5));

} else {
var statearr_34131_34145 = state_34123__$1;
(statearr_34131_34145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (3))){
var inst_34121 = (state_34123[(2)]);
var state_34123__$1 = state_34123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34123__$1,inst_34121);
} else {
if((state_val_34124 === (2))){
var state_34123__$1 = state_34123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34123__$1,(4),ch);
} else {
if((state_val_34124 === (1))){
var state_34123__$1 = state_34123;
var statearr_34132_34146 = state_34123__$1;
(statearr_34132_34146[(2)] = null);

(statearr_34132_34146[(1)] = (2));


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
});})(c__19256__auto___34140,ch))
;
return ((function (switch__19200__auto__,c__19256__auto___34140,ch){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_34136 = [null,null,null,null,null,null,null,null,null];
(statearr_34136[(0)] = state_machine__19201__auto__);

(statearr_34136[(1)] = (1));

return statearr_34136;
});
var state_machine__19201__auto____1 = (function (state_34123){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_34123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e34137){if((e34137 instanceof Object)){
var ex__19204__auto__ = e34137;
var statearr_34138_34147 = state_34123;
(statearr_34138_34147[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34148 = state_34123;
state_34123 = G__34148;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_34123){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_34123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___34140,ch))
})();
var state__19258__auto__ = (function (){var statearr_34139 = f__19257__auto__.call(null);
(statearr_34139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___34140);

return statearr_34139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___34140,ch))
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
var c__19256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto__){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto__){
return (function (state_34169){
var state_val_34170 = (state_34169[(1)]);
if((state_val_34170 === (2))){
var inst_34166 = (state_34169[(2)]);
var inst_34167 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34169__$1 = (function (){var statearr_34171 = state_34169;
(statearr_34171[(7)] = inst_34166);

return statearr_34171;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34169__$1,inst_34167);
} else {
if((state_val_34170 === (1))){
var inst_34164 = cljs.core.async.timeout.call(null,(3000));
var state_34169__$1 = state_34169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34169__$1,(2),inst_34164);
} else {
return null;
}
}
});})(c__19256__auto__))
;
return ((function (switch__19200__auto__,c__19256__auto__){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_34175 = [null,null,null,null,null,null,null,null];
(statearr_34175[(0)] = state_machine__19201__auto__);

(statearr_34175[(1)] = (1));

return statearr_34175;
});
var state_machine__19201__auto____1 = (function (state_34169){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_34169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e34176){if((e34176 instanceof Object)){
var ex__19204__auto__ = e34176;
var statearr_34177_34179 = state_34169;
(statearr_34177_34179[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34180 = state_34169;
state_34169 = G__34180;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_34169){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_34169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto__))
})();
var state__19258__auto__ = (function (){var statearr_34178 = f__19257__auto__.call(null);
(statearr_34178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto__);

return statearr_34178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto__))
);

return c__19256__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj34184 = {"detail":url};
return obj34184;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__34185){
var map__34191 = p__34185;
var map__34191__$1 = ((cljs.core.seq_QMARK_.call(null,map__34191))?cljs.core.apply.call(null,cljs.core.hash_map,map__34191):map__34191);
var ed = map__34191__$1;
var exception_data = cljs.core.get.call(null,map__34191__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__34191__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34192_34196 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34193_34197 = null;
var count__34194_34198 = (0);
var i__34195_34199 = (0);
while(true){
if((i__34195_34199 < count__34194_34198)){
var msg_34200 = cljs.core._nth.call(null,chunk__34193_34197,i__34195_34199);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34200);

var G__34201 = seq__34192_34196;
var G__34202 = chunk__34193_34197;
var G__34203 = count__34194_34198;
var G__34204 = (i__34195_34199 + (1));
seq__34192_34196 = G__34201;
chunk__34193_34197 = G__34202;
count__34194_34198 = G__34203;
i__34195_34199 = G__34204;
continue;
} else {
var temp__4126__auto___34205 = cljs.core.seq.call(null,seq__34192_34196);
if(temp__4126__auto___34205){
var seq__34192_34206__$1 = temp__4126__auto___34205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34192_34206__$1)){
var c__16932__auto___34207 = cljs.core.chunk_first.call(null,seq__34192_34206__$1);
var G__34208 = cljs.core.chunk_rest.call(null,seq__34192_34206__$1);
var G__34209 = c__16932__auto___34207;
var G__34210 = cljs.core.count.call(null,c__16932__auto___34207);
var G__34211 = (0);
seq__34192_34196 = G__34208;
chunk__34193_34197 = G__34209;
count__34194_34198 = G__34210;
i__34195_34199 = G__34211;
continue;
} else {
var msg_34212 = cljs.core.first.call(null,seq__34192_34206__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34212);

var G__34213 = cljs.core.next.call(null,seq__34192_34206__$1);
var G__34214 = null;
var G__34215 = (0);
var G__34216 = (0);
seq__34192_34196 = G__34213;
chunk__34193_34197 = G__34214;
count__34194_34198 = G__34215;
i__34195_34199 = G__34216;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__34217){
var map__34219 = p__34217;
var map__34219__$1 = ((cljs.core.seq_QMARK_.call(null,map__34219))?cljs.core.apply.call(null,cljs.core.hash_map,map__34219):map__34219);
var w = map__34219__$1;
var message = cljs.core.get.call(null,map__34219__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__34226 = cljs.core.seq.call(null,plugins);
var chunk__34227 = null;
var count__34228 = (0);
var i__34229 = (0);
while(true){
if((i__34229 < count__34228)){
var vec__34230 = cljs.core._nth.call(null,chunk__34227,i__34229);
var k = cljs.core.nth.call(null,vec__34230,(0),null);
var plugin = cljs.core.nth.call(null,vec__34230,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34232 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34226,chunk__34227,count__34228,i__34229,pl_34232,vec__34230,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34232.call(null,msg_hist);
});})(seq__34226,chunk__34227,count__34228,i__34229,pl_34232,vec__34230,k,plugin))
);
} else {
}

var G__34233 = seq__34226;
var G__34234 = chunk__34227;
var G__34235 = count__34228;
var G__34236 = (i__34229 + (1));
seq__34226 = G__34233;
chunk__34227 = G__34234;
count__34228 = G__34235;
i__34229 = G__34236;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34226);
if(temp__4126__auto__){
var seq__34226__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34226__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__34226__$1);
var G__34237 = cljs.core.chunk_rest.call(null,seq__34226__$1);
var G__34238 = c__16932__auto__;
var G__34239 = cljs.core.count.call(null,c__16932__auto__);
var G__34240 = (0);
seq__34226 = G__34237;
chunk__34227 = G__34238;
count__34228 = G__34239;
i__34229 = G__34240;
continue;
} else {
var vec__34231 = cljs.core.first.call(null,seq__34226__$1);
var k = cljs.core.nth.call(null,vec__34231,(0),null);
var plugin = cljs.core.nth.call(null,vec__34231,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34241 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34226,chunk__34227,count__34228,i__34229,pl_34241,vec__34231,k,plugin,seq__34226__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34241.call(null,msg_hist);
});})(seq__34226,chunk__34227,count__34228,i__34229,pl_34241,vec__34231,k,plugin,seq__34226__$1,temp__4126__auto__))
);
} else {
}

var G__34242 = cljs.core.next.call(null,seq__34226__$1);
var G__34243 = null;
var G__34244 = (0);
var G__34245 = (0);
seq__34226 = G__34242;
chunk__34227 = G__34243;
count__34228 = G__34244;
i__34229 = G__34245;
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
var watch_and_reload__delegate = function (p__34246){
var map__34248 = p__34246;
var map__34248__$1 = ((cljs.core.seq_QMARK_.call(null,map__34248))?cljs.core.apply.call(null,cljs.core.hash_map,map__34248):map__34248);
var opts = map__34248__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__34246 = null;
if (arguments.length > 0) {
var G__34249__i = 0, G__34249__a = new Array(arguments.length -  0);
while (G__34249__i < G__34249__a.length) {G__34249__a[G__34249__i] = arguments[G__34249__i + 0]; ++G__34249__i;}
  p__34246 = new cljs.core.IndexedSeq(G__34249__a,0);
} 
return watch_and_reload__delegate.call(this,p__34246);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__34250){
var p__34246 = cljs.core.seq(arglist__34250);
return watch_and_reload__delegate(p__34246);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1428568918974