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
var G__30622__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30623__i = 0, G__30623__a = new Array(arguments.length -  0);
while (G__30623__i < G__30623__a.length) {G__30623__a[G__30623__i] = arguments[G__30623__i + 0]; ++G__30623__i;}
  args = new cljs.core.IndexedSeq(G__30623__a,0);
} 
return G__30622__delegate.call(this,args);};
G__30622.cljs$lang$maxFixedArity = 0;
G__30622.cljs$lang$applyTo = (function (arglist__30624){
var args = cljs.core.seq(arglist__30624);
return G__30622__delegate(args);
});
G__30622.cljs$core$IFn$_invoke$arity$variadic = G__30622__delegate;
return G__30622;
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
figwheel.client.error_msg_format = (function error_msg_format(p__30625){
var map__30627 = p__30625;
var map__30627__$1 = ((cljs.core.seq_QMARK_.call(null,map__30627))?cljs.core.apply.call(null,cljs.core.hash_map,map__30627):map__30627);
var class$ = cljs.core.get.call(null,map__30627__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30627__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__19569__auto___30756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___30756,ch){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___30756,ch){
return (function (state_30730){
var state_val_30731 = (state_30730[(1)]);
if((state_val_30731 === (7))){
var inst_30726 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
var statearr_30732_30757 = state_30730__$1;
(statearr_30732_30757[(2)] = inst_30726);

(statearr_30732_30757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (1))){
var state_30730__$1 = state_30730;
var statearr_30733_30758 = state_30730__$1;
(statearr_30733_30758[(2)] = null);

(statearr_30733_30758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (4))){
var inst_30694 = (state_30730[(7)]);
var inst_30694__$1 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30734 = state_30730;
(statearr_30734[(7)] = inst_30694__$1);

return statearr_30734;
})();
if(cljs.core.truth_(inst_30694__$1)){
var statearr_30735_30759 = state_30730__$1;
(statearr_30735_30759[(1)] = (5));

} else {
var statearr_30736_30760 = state_30730__$1;
(statearr_30736_30760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (13))){
var state_30730__$1 = state_30730;
var statearr_30737_30761 = state_30730__$1;
(statearr_30737_30761[(2)] = null);

(statearr_30737_30761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (6))){
var state_30730__$1 = state_30730;
var statearr_30738_30762 = state_30730__$1;
(statearr_30738_30762[(2)] = null);

(statearr_30738_30762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (3))){
var inst_30728 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30730__$1,inst_30728);
} else {
if((state_val_30731 === (12))){
var inst_30701 = (state_30730[(8)]);
var inst_30714 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30701);
var inst_30715 = cljs.core.first.call(null,inst_30714);
var inst_30716 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30715);
var inst_30717 = console.warn("Figwheel: Not loading code with warnings - ",inst_30716);
var state_30730__$1 = state_30730;
var statearr_30739_30763 = state_30730__$1;
(statearr_30739_30763[(2)] = inst_30717);

(statearr_30739_30763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (2))){
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30730__$1,(4),ch);
} else {
if((state_val_30731 === (11))){
var inst_30710 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
var statearr_30740_30764 = state_30730__$1;
(statearr_30740_30764[(2)] = inst_30710);

(statearr_30740_30764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (9))){
var inst_30700 = (state_30730[(9)]);
var inst_30712 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30700,opts);
var state_30730__$1 = state_30730;
if(inst_30712){
var statearr_30741_30765 = state_30730__$1;
(statearr_30741_30765[(1)] = (12));

} else {
var statearr_30742_30766 = state_30730__$1;
(statearr_30742_30766[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (5))){
var inst_30694 = (state_30730[(7)]);
var inst_30700 = (state_30730[(9)]);
var inst_30696 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30697 = (new cljs.core.PersistentArrayMap(null,2,inst_30696,null));
var inst_30698 = (new cljs.core.PersistentHashSet(null,inst_30697,null));
var inst_30699 = figwheel.client.focus_msgs.call(null,inst_30698,inst_30694);
var inst_30700__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30699);
var inst_30701 = cljs.core.first.call(null,inst_30699);
var inst_30702 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30700__$1,opts);
var state_30730__$1 = (function (){var statearr_30743 = state_30730;
(statearr_30743[(9)] = inst_30700__$1);

(statearr_30743[(8)] = inst_30701);

return statearr_30743;
})();
if(cljs.core.truth_(inst_30702)){
var statearr_30744_30767 = state_30730__$1;
(statearr_30744_30767[(1)] = (8));

} else {
var statearr_30745_30768 = state_30730__$1;
(statearr_30745_30768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (14))){
var inst_30720 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
var statearr_30746_30769 = state_30730__$1;
(statearr_30746_30769[(2)] = inst_30720);

(statearr_30746_30769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (10))){
var inst_30722 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30747 = state_30730;
(statearr_30747[(10)] = inst_30722);

return statearr_30747;
})();
var statearr_30748_30770 = state_30730__$1;
(statearr_30748_30770[(2)] = null);

(statearr_30748_30770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (8))){
var inst_30701 = (state_30730[(8)]);
var inst_30704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30705 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30701);
var inst_30706 = cljs.core.async.timeout.call(null,(1000));
var inst_30707 = [inst_30705,inst_30706];
var inst_30708 = (new cljs.core.PersistentVector(null,2,(5),inst_30704,inst_30707,null));
var state_30730__$1 = state_30730;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30730__$1,(11),inst_30708);
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
});})(c__19569__auto___30756,ch))
;
return ((function (switch__19513__auto__,c__19569__auto___30756,ch){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_30752 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30752[(0)] = state_machine__19514__auto__);

(statearr_30752[(1)] = (1));

return statearr_30752;
});
var state_machine__19514__auto____1 = (function (state_30730){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_30730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e30753){if((e30753 instanceof Object)){
var ex__19517__auto__ = e30753;
var statearr_30754_30771 = state_30730;
(statearr_30754_30771[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30772 = state_30730;
state_30730 = G__30772;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_30730){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_30730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___30756,ch))
})();
var state__19571__auto__ = (function (){var statearr_30755 = f__19570__auto__.call(null);
(statearr_30755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___30756);

return statearr_30755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___30756,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30773_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30773_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30782 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30775_SHARP_,p2__30774_SHARP_){
return [cljs.core.str(p2__30774_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30782){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30780 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30781 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30780,_STAR_print_newline_STAR_30781,base_path_30782){
return (function() { 
var G__30783__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30784__i = 0, G__30784__a = new Array(arguments.length -  0);
while (G__30784__i < G__30784__a.length) {G__30784__a[G__30784__i] = arguments[G__30784__i + 0]; ++G__30784__i;}
  args = new cljs.core.IndexedSeq(G__30784__a,0);
} 
return G__30783__delegate.call(this,args);};
G__30783.cljs$lang$maxFixedArity = 0;
G__30783.cljs$lang$applyTo = (function (arglist__30785){
var args = cljs.core.seq(arglist__30785);
return G__30783__delegate(args);
});
G__30783.cljs$core$IFn$_invoke$arity$variadic = G__30783__delegate;
return G__30783;
})()
;})(_STAR_print_fn_STAR_30780,_STAR_print_newline_STAR_30781,base_path_30782))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30781;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30780;
}}catch (e30779){if((e30779 instanceof Error)){
var e = e30779;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30782], null));
} else {
var e = e30779;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30782))
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
figwheel.client.repl_plugin = (function repl_plugin(p__30786){
var map__30791 = p__30786;
var map__30791__$1 = ((cljs.core.seq_QMARK_.call(null,map__30791))?cljs.core.apply.call(null,cljs.core.hash_map,map__30791):map__30791);
var opts = map__30791__$1;
var build_id = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30791,map__30791__$1,opts,build_id){
return (function (p__30792){
var vec__30793 = p__30792;
var map__30794 = cljs.core.nth.call(null,vec__30793,(0),null);
var map__30794__$1 = ((cljs.core.seq_QMARK_.call(null,map__30794))?cljs.core.apply.call(null,cljs.core.hash_map,map__30794):map__30794);
var msg = map__30794__$1;
var msg_name = cljs.core.get.call(null,map__30794__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30793,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30793,map__30794,map__30794__$1,msg,msg_name,_,map__30791,map__30791__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30793,map__30794,map__30794__$1,msg,msg_name,_,map__30791,map__30791__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30791,map__30791__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30798){
var vec__30799 = p__30798;
var map__30800 = cljs.core.nth.call(null,vec__30799,(0),null);
var map__30800__$1 = ((cljs.core.seq_QMARK_.call(null,map__30800))?cljs.core.apply.call(null,cljs.core.hash_map,map__30800):map__30800);
var msg = map__30800__$1;
var msg_name = cljs.core.get.call(null,map__30800__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30799,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30801){
var map__30809 = p__30801;
var map__30809__$1 = ((cljs.core.seq_QMARK_.call(null,map__30809))?cljs.core.apply.call(null,cljs.core.hash_map,map__30809):map__30809);
var on_compile_fail = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30809,map__30809__$1,on_compile_fail,on_compile_warning){
return (function (p__30810){
var vec__30811 = p__30810;
var map__30812 = cljs.core.nth.call(null,vec__30811,(0),null);
var map__30812__$1 = ((cljs.core.seq_QMARK_.call(null,map__30812))?cljs.core.apply.call(null,cljs.core.hash_map,map__30812):map__30812);
var msg = map__30812__$1;
var msg_name = cljs.core.get.call(null,map__30812__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30811,(1));
var pred__30813 = cljs.core._EQ_;
var expr__30814 = msg_name;
if(cljs.core.truth_(pred__30813.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30814))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30813.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30814))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30809,map__30809__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__,msg_hist,msg_names,msg){
return (function (state_31011){
var state_val_31012 = (state_31011[(1)]);
if((state_val_31012 === (7))){
var inst_30947 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31013_31054 = state_31011__$1;
(statearr_31013_31054[(2)] = inst_30947);

(statearr_31013_31054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (20))){
var inst_30973 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31011__$1 = state_31011;
if(inst_30973){
var statearr_31014_31055 = state_31011__$1;
(statearr_31014_31055[(1)] = (22));

} else {
var statearr_31015_31056 = state_31011__$1;
(statearr_31015_31056[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (27))){
var inst_30985 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30986 = figwheel.client.heads_up.display_warning.call(null,inst_30985);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(30),inst_30986);
} else {
if((state_val_31012 === (1))){
var inst_30935 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31011__$1 = state_31011;
if(cljs.core.truth_(inst_30935)){
var statearr_31016_31057 = state_31011__$1;
(statearr_31016_31057[(1)] = (2));

} else {
var statearr_31017_31058 = state_31011__$1;
(statearr_31017_31058[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (24))){
var inst_31001 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31018_31059 = state_31011__$1;
(statearr_31018_31059[(2)] = inst_31001);

(statearr_31018_31059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (4))){
var inst_31009 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31011__$1,inst_31009);
} else {
if((state_val_31012 === (15))){
var inst_30962 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30963 = figwheel.client.format_messages.call(null,inst_30962);
var inst_30964 = figwheel.client.heads_up.display_error.call(null,inst_30963);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(18),inst_30964);
} else {
if((state_val_31012 === (21))){
var inst_31003 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31019_31060 = state_31011__$1;
(statearr_31019_31060[(2)] = inst_31003);

(statearr_31019_31060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (31))){
var inst_30992 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(34),inst_30992);
} else {
if((state_val_31012 === (32))){
var state_31011__$1 = state_31011;
var statearr_31020_31061 = state_31011__$1;
(statearr_31020_31061[(2)] = null);

(statearr_31020_31061[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (33))){
var inst_30997 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31021_31062 = state_31011__$1;
(statearr_31021_31062[(2)] = inst_30997);

(statearr_31021_31062[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (13))){
var inst_30953 = (state_31011[(2)]);
var inst_30954 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30955 = figwheel.client.format_messages.call(null,inst_30954);
var inst_30956 = figwheel.client.heads_up.display_error.call(null,inst_30955);
var state_31011__$1 = (function (){var statearr_31022 = state_31011;
(statearr_31022[(7)] = inst_30953);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(14),inst_30956);
} else {
if((state_val_31012 === (22))){
var inst_30975 = figwheel.client.heads_up.clear.call(null);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(25),inst_30975);
} else {
if((state_val_31012 === (29))){
var inst_30999 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31023_31063 = state_31011__$1;
(statearr_31023_31063[(2)] = inst_30999);

(statearr_31023_31063[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (6))){
var inst_30943 = figwheel.client.heads_up.clear.call(null);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(9),inst_30943);
} else {
if((state_val_31012 === (28))){
var inst_30990 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31011__$1 = state_31011;
if(inst_30990){
var statearr_31024_31064 = state_31011__$1;
(statearr_31024_31064[(1)] = (31));

} else {
var statearr_31025_31065 = state_31011__$1;
(statearr_31025_31065[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (25))){
var inst_30977 = (state_31011[(2)]);
var inst_30978 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30979 = figwheel.client.heads_up.display_warning.call(null,inst_30978);
var state_31011__$1 = (function (){var statearr_31026 = state_31011;
(statearr_31026[(8)] = inst_30977);

return statearr_31026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(26),inst_30979);
} else {
if((state_val_31012 === (34))){
var inst_30994 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31027_31066 = state_31011__$1;
(statearr_31027_31066[(2)] = inst_30994);

(statearr_31027_31066[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (17))){
var inst_31005 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31028_31067 = state_31011__$1;
(statearr_31028_31067[(2)] = inst_31005);

(statearr_31028_31067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (3))){
var inst_30949 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31011__$1 = state_31011;
if(inst_30949){
var statearr_31029_31068 = state_31011__$1;
(statearr_31029_31068[(1)] = (10));

} else {
var statearr_31030_31069 = state_31011__$1;
(statearr_31030_31069[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (12))){
var inst_31007 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31031_31070 = state_31011__$1;
(statearr_31031_31070[(2)] = inst_31007);

(statearr_31031_31070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (2))){
var inst_30937 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31011__$1 = state_31011;
if(cljs.core.truth_(inst_30937)){
var statearr_31032_31071 = state_31011__$1;
(statearr_31032_31071[(1)] = (5));

} else {
var statearr_31033_31072 = state_31011__$1;
(statearr_31033_31072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (23))){
var inst_30983 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31011__$1 = state_31011;
if(inst_30983){
var statearr_31034_31073 = state_31011__$1;
(statearr_31034_31073[(1)] = (27));

} else {
var statearr_31035_31074 = state_31011__$1;
(statearr_31035_31074[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (19))){
var inst_30970 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30971 = figwheel.client.heads_up.append_message.call(null,inst_30970);
var state_31011__$1 = state_31011;
var statearr_31036_31075 = state_31011__$1;
(statearr_31036_31075[(2)] = inst_30971);

(statearr_31036_31075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (11))){
var inst_30960 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31011__$1 = state_31011;
if(inst_30960){
var statearr_31037_31076 = state_31011__$1;
(statearr_31037_31076[(1)] = (15));

} else {
var statearr_31038_31077 = state_31011__$1;
(statearr_31038_31077[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (9))){
var inst_30945 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31039_31078 = state_31011__$1;
(statearr_31039_31078[(2)] = inst_30945);

(statearr_31039_31078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (5))){
var inst_30939 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(8),inst_30939);
} else {
if((state_val_31012 === (14))){
var inst_30958 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31040_31079 = state_31011__$1;
(statearr_31040_31079[(2)] = inst_30958);

(statearr_31040_31079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (26))){
var inst_30981 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31041_31080 = state_31011__$1;
(statearr_31041_31080[(2)] = inst_30981);

(statearr_31041_31080[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (16))){
var inst_30968 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31011__$1 = state_31011;
if(inst_30968){
var statearr_31042_31081 = state_31011__$1;
(statearr_31042_31081[(1)] = (19));

} else {
var statearr_31043_31082 = state_31011__$1;
(statearr_31043_31082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (30))){
var inst_30988 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31044_31083 = state_31011__$1;
(statearr_31044_31083[(2)] = inst_30988);

(statearr_31044_31083[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (10))){
var inst_30951 = figwheel.client.heads_up.clear.call(null);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(13),inst_30951);
} else {
if((state_val_31012 === (18))){
var inst_30966 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31045_31084 = state_31011__$1;
(statearr_31045_31084[(2)] = inst_30966);

(statearr_31045_31084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (8))){
var inst_30941 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31046_31085 = state_31011__$1;
(statearr_31046_31085[(2)] = inst_30941);

(statearr_31046_31085[(1)] = (7));


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
});})(c__19569__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19513__auto__,c__19569__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_31050 = [null,null,null,null,null,null,null,null,null];
(statearr_31050[(0)] = state_machine__19514__auto__);

(statearr_31050[(1)] = (1));

return statearr_31050;
});
var state_machine__19514__auto____1 = (function (state_31011){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_31011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e31051){if((e31051 instanceof Object)){
var ex__19517__auto__ = e31051;
var statearr_31052_31086 = state_31011;
(statearr_31052_31086[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31087 = state_31011;
state_31011 = G__31087;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_31011){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_31011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__,msg_hist,msg_names,msg))
})();
var state__19571__auto__ = (function (){var statearr_31053 = f__19570__auto__.call(null);
(statearr_31053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_31053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__,msg_hist,msg_names,msg))
);

return c__19569__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19569__auto___31150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___31150,ch){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___31150,ch){
return (function (state_31133){
var state_val_31134 = (state_31133[(1)]);
if((state_val_31134 === (8))){
var inst_31125 = (state_31133[(2)]);
var state_31133__$1 = (function (){var statearr_31135 = state_31133;
(statearr_31135[(7)] = inst_31125);

return statearr_31135;
})();
var statearr_31136_31151 = state_31133__$1;
(statearr_31136_31151[(2)] = null);

(statearr_31136_31151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (7))){
var inst_31129 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31137_31152 = state_31133__$1;
(statearr_31137_31152[(2)] = inst_31129);

(statearr_31137_31152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (6))){
var state_31133__$1 = state_31133;
var statearr_31138_31153 = state_31133__$1;
(statearr_31138_31153[(2)] = null);

(statearr_31138_31153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (5))){
var inst_31121 = (state_31133[(8)]);
var inst_31123 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31121);
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31133__$1,(8),inst_31123);
} else {
if((state_val_31134 === (4))){
var inst_31121 = (state_31133[(8)]);
var inst_31121__$1 = (state_31133[(2)]);
var state_31133__$1 = (function (){var statearr_31139 = state_31133;
(statearr_31139[(8)] = inst_31121__$1);

return statearr_31139;
})();
if(cljs.core.truth_(inst_31121__$1)){
var statearr_31140_31154 = state_31133__$1;
(statearr_31140_31154[(1)] = (5));

} else {
var statearr_31141_31155 = state_31133__$1;
(statearr_31141_31155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (3))){
var inst_31131 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31133__$1,inst_31131);
} else {
if((state_val_31134 === (2))){
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31133__$1,(4),ch);
} else {
if((state_val_31134 === (1))){
var state_31133__$1 = state_31133;
var statearr_31142_31156 = state_31133__$1;
(statearr_31142_31156[(2)] = null);

(statearr_31142_31156[(1)] = (2));


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
});})(c__19569__auto___31150,ch))
;
return ((function (switch__19513__auto__,c__19569__auto___31150,ch){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_31146 = [null,null,null,null,null,null,null,null,null];
(statearr_31146[(0)] = state_machine__19514__auto__);

(statearr_31146[(1)] = (1));

return statearr_31146;
});
var state_machine__19514__auto____1 = (function (state_31133){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_31133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e31147){if((e31147 instanceof Object)){
var ex__19517__auto__ = e31147;
var statearr_31148_31157 = state_31133;
(statearr_31148_31157[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31158 = state_31133;
state_31133 = G__31158;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_31133){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_31133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___31150,ch))
})();
var state__19571__auto__ = (function (){var statearr_31149 = f__19570__auto__.call(null);
(statearr_31149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___31150);

return statearr_31149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___31150,ch))
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
var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__){
return (function (state_31179){
var state_val_31180 = (state_31179[(1)]);
if((state_val_31180 === (2))){
var inst_31176 = (state_31179[(2)]);
var inst_31177 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31179__$1 = (function (){var statearr_31181 = state_31179;
(statearr_31181[(7)] = inst_31176);

return statearr_31181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31179__$1,inst_31177);
} else {
if((state_val_31180 === (1))){
var inst_31174 = cljs.core.async.timeout.call(null,(3000));
var state_31179__$1 = state_31179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31179__$1,(2),inst_31174);
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
var statearr_31185 = [null,null,null,null,null,null,null,null];
(statearr_31185[(0)] = state_machine__19514__auto__);

(statearr_31185[(1)] = (1));

return statearr_31185;
});
var state_machine__19514__auto____1 = (function (state_31179){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_31179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e31186){if((e31186 instanceof Object)){
var ex__19517__auto__ = e31186;
var statearr_31187_31189 = state_31179;
(statearr_31187_31189[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31190 = state_31179;
state_31179 = G__31190;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_31179){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_31179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__))
})();
var state__19571__auto__ = (function (){var statearr_31188 = f__19570__auto__.call(null);
(statearr_31188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_31188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__))
);

return c__19569__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31194 = {"detail":url};
return obj31194;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31195){
var map__31201 = p__31195;
var map__31201__$1 = ((cljs.core.seq_QMARK_.call(null,map__31201))?cljs.core.apply.call(null,cljs.core.hash_map,map__31201):map__31201);
var ed = map__31201__$1;
var exception_data = cljs.core.get.call(null,map__31201__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__31201__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31202_31206 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31203_31207 = null;
var count__31204_31208 = (0);
var i__31205_31209 = (0);
while(true){
if((i__31205_31209 < count__31204_31208)){
var msg_31210 = cljs.core._nth.call(null,chunk__31203_31207,i__31205_31209);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31210);

var G__31211 = seq__31202_31206;
var G__31212 = chunk__31203_31207;
var G__31213 = count__31204_31208;
var G__31214 = (i__31205_31209 + (1));
seq__31202_31206 = G__31211;
chunk__31203_31207 = G__31212;
count__31204_31208 = G__31213;
i__31205_31209 = G__31214;
continue;
} else {
var temp__4126__auto___31215 = cljs.core.seq.call(null,seq__31202_31206);
if(temp__4126__auto___31215){
var seq__31202_31216__$1 = temp__4126__auto___31215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31202_31216__$1)){
var c__16932__auto___31217 = cljs.core.chunk_first.call(null,seq__31202_31216__$1);
var G__31218 = cljs.core.chunk_rest.call(null,seq__31202_31216__$1);
var G__31219 = c__16932__auto___31217;
var G__31220 = cljs.core.count.call(null,c__16932__auto___31217);
var G__31221 = (0);
seq__31202_31206 = G__31218;
chunk__31203_31207 = G__31219;
count__31204_31208 = G__31220;
i__31205_31209 = G__31221;
continue;
} else {
var msg_31222 = cljs.core.first.call(null,seq__31202_31216__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31222);

var G__31223 = cljs.core.next.call(null,seq__31202_31216__$1);
var G__31224 = null;
var G__31225 = (0);
var G__31226 = (0);
seq__31202_31206 = G__31223;
chunk__31203_31207 = G__31224;
count__31204_31208 = G__31225;
i__31205_31209 = G__31226;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__31227){
var map__31229 = p__31227;
var map__31229__$1 = ((cljs.core.seq_QMARK_.call(null,map__31229))?cljs.core.apply.call(null,cljs.core.hash_map,map__31229):map__31229);
var w = map__31229__$1;
var message = cljs.core.get.call(null,map__31229__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31236 = cljs.core.seq.call(null,plugins);
var chunk__31237 = null;
var count__31238 = (0);
var i__31239 = (0);
while(true){
if((i__31239 < count__31238)){
var vec__31240 = cljs.core._nth.call(null,chunk__31237,i__31239);
var k = cljs.core.nth.call(null,vec__31240,(0),null);
var plugin = cljs.core.nth.call(null,vec__31240,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31242 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31236,chunk__31237,count__31238,i__31239,pl_31242,vec__31240,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31242.call(null,msg_hist);
});})(seq__31236,chunk__31237,count__31238,i__31239,pl_31242,vec__31240,k,plugin))
);
} else {
}

var G__31243 = seq__31236;
var G__31244 = chunk__31237;
var G__31245 = count__31238;
var G__31246 = (i__31239 + (1));
seq__31236 = G__31243;
chunk__31237 = G__31244;
count__31238 = G__31245;
i__31239 = G__31246;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31236);
if(temp__4126__auto__){
var seq__31236__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31236__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__31236__$1);
var G__31247 = cljs.core.chunk_rest.call(null,seq__31236__$1);
var G__31248 = c__16932__auto__;
var G__31249 = cljs.core.count.call(null,c__16932__auto__);
var G__31250 = (0);
seq__31236 = G__31247;
chunk__31237 = G__31248;
count__31238 = G__31249;
i__31239 = G__31250;
continue;
} else {
var vec__31241 = cljs.core.first.call(null,seq__31236__$1);
var k = cljs.core.nth.call(null,vec__31241,(0),null);
var plugin = cljs.core.nth.call(null,vec__31241,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31251 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31236,chunk__31237,count__31238,i__31239,pl_31251,vec__31241,k,plugin,seq__31236__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31251.call(null,msg_hist);
});})(seq__31236,chunk__31237,count__31238,i__31239,pl_31251,vec__31241,k,plugin,seq__31236__$1,temp__4126__auto__))
);
} else {
}

var G__31252 = cljs.core.next.call(null,seq__31236__$1);
var G__31253 = null;
var G__31254 = (0);
var G__31255 = (0);
seq__31236 = G__31252;
chunk__31237 = G__31253;
count__31238 = G__31254;
i__31239 = G__31255;
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
var watch_and_reload__delegate = function (p__31256){
var map__31258 = p__31256;
var map__31258__$1 = ((cljs.core.seq_QMARK_.call(null,map__31258))?cljs.core.apply.call(null,cljs.core.hash_map,map__31258):map__31258);
var opts = map__31258__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31256 = null;
if (arguments.length > 0) {
var G__31259__i = 0, G__31259__a = new Array(arguments.length -  0);
while (G__31259__i < G__31259__a.length) {G__31259__a[G__31259__i] = arguments[G__31259__i + 0]; ++G__31259__i;}
  p__31256 = new cljs.core.IndexedSeq(G__31259__a,0);
} 
return watch_and_reload__delegate.call(this,p__31256);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31260){
var p__31256 = cljs.core.seq(arglist__31260);
return watch_and_reload__delegate(p__31256);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1428378451474