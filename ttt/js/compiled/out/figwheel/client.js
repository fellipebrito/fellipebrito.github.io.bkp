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
var G__55568__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__55568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55569__i = 0, G__55569__a = new Array(arguments.length -  0);
while (G__55569__i < G__55569__a.length) {G__55569__a[G__55569__i] = arguments[G__55569__i + 0]; ++G__55569__i;}
  args = new cljs.core.IndexedSeq(G__55569__a,0);
} 
return G__55568__delegate.call(this,args);};
G__55568.cljs$lang$maxFixedArity = 0;
G__55568.cljs$lang$applyTo = (function (arglist__55570){
var args = cljs.core.seq(arglist__55570);
return G__55568__delegate(args);
});
G__55568.cljs$core$IFn$_invoke$arity$variadic = G__55568__delegate;
return G__55568;
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
figwheel.client.error_msg_format = (function error_msg_format(p__55571){
var map__55573 = p__55571;
var map__55573__$1 = ((cljs.core.seq_QMARK_.call(null,map__55573))?cljs.core.apply.call(null,cljs.core.hash_map,map__55573):map__55573);
var class$ = cljs.core.get.call(null,map__55573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__55573__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__19254__auto___55702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___55702,ch){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___55702,ch){
return (function (state_55676){
var state_val_55677 = (state_55676[(1)]);
if((state_val_55677 === (7))){
var inst_55672 = (state_55676[(2)]);
var state_55676__$1 = state_55676;
var statearr_55678_55703 = state_55676__$1;
(statearr_55678_55703[(2)] = inst_55672);

(statearr_55678_55703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (1))){
var state_55676__$1 = state_55676;
var statearr_55679_55704 = state_55676__$1;
(statearr_55679_55704[(2)] = null);

(statearr_55679_55704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (4))){
var inst_55640 = (state_55676[(7)]);
var inst_55640__$1 = (state_55676[(2)]);
var state_55676__$1 = (function (){var statearr_55680 = state_55676;
(statearr_55680[(7)] = inst_55640__$1);

return statearr_55680;
})();
if(cljs.core.truth_(inst_55640__$1)){
var statearr_55681_55705 = state_55676__$1;
(statearr_55681_55705[(1)] = (5));

} else {
var statearr_55682_55706 = state_55676__$1;
(statearr_55682_55706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (13))){
var state_55676__$1 = state_55676;
var statearr_55683_55707 = state_55676__$1;
(statearr_55683_55707[(2)] = null);

(statearr_55683_55707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (6))){
var state_55676__$1 = state_55676;
var statearr_55684_55708 = state_55676__$1;
(statearr_55684_55708[(2)] = null);

(statearr_55684_55708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (3))){
var inst_55674 = (state_55676[(2)]);
var state_55676__$1 = state_55676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55676__$1,inst_55674);
} else {
if((state_val_55677 === (12))){
var inst_55647 = (state_55676[(8)]);
var inst_55660 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55647);
var inst_55661 = cljs.core.first.call(null,inst_55660);
var inst_55662 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_55661);
var inst_55663 = console.warn("Figwheel: Not loading code with warnings - ",inst_55662);
var state_55676__$1 = state_55676;
var statearr_55685_55709 = state_55676__$1;
(statearr_55685_55709[(2)] = inst_55663);

(statearr_55685_55709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (2))){
var state_55676__$1 = state_55676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55676__$1,(4),ch);
} else {
if((state_val_55677 === (11))){
var inst_55656 = (state_55676[(2)]);
var state_55676__$1 = state_55676;
var statearr_55686_55710 = state_55676__$1;
(statearr_55686_55710[(2)] = inst_55656);

(statearr_55686_55710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (9))){
var inst_55646 = (state_55676[(9)]);
var inst_55658 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_55646,opts);
var state_55676__$1 = state_55676;
if(inst_55658){
var statearr_55687_55711 = state_55676__$1;
(statearr_55687_55711[(1)] = (12));

} else {
var statearr_55688_55712 = state_55676__$1;
(statearr_55688_55712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (5))){
var inst_55640 = (state_55676[(7)]);
var inst_55646 = (state_55676[(9)]);
var inst_55642 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_55643 = (new cljs.core.PersistentArrayMap(null,2,inst_55642,null));
var inst_55644 = (new cljs.core.PersistentHashSet(null,inst_55643,null));
var inst_55645 = figwheel.client.focus_msgs.call(null,inst_55644,inst_55640);
var inst_55646__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_55645);
var inst_55647 = cljs.core.first.call(null,inst_55645);
var inst_55648 = figwheel.client.reload_file_state_QMARK_.call(null,inst_55646__$1,opts);
var state_55676__$1 = (function (){var statearr_55689 = state_55676;
(statearr_55689[(8)] = inst_55647);

(statearr_55689[(9)] = inst_55646__$1);

return statearr_55689;
})();
if(cljs.core.truth_(inst_55648)){
var statearr_55690_55713 = state_55676__$1;
(statearr_55690_55713[(1)] = (8));

} else {
var statearr_55691_55714 = state_55676__$1;
(statearr_55691_55714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (14))){
var inst_55666 = (state_55676[(2)]);
var state_55676__$1 = state_55676;
var statearr_55692_55715 = state_55676__$1;
(statearr_55692_55715[(2)] = inst_55666);

(statearr_55692_55715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (10))){
var inst_55668 = (state_55676[(2)]);
var state_55676__$1 = (function (){var statearr_55693 = state_55676;
(statearr_55693[(10)] = inst_55668);

return statearr_55693;
})();
var statearr_55694_55716 = state_55676__$1;
(statearr_55694_55716[(2)] = null);

(statearr_55694_55716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55677 === (8))){
var inst_55647 = (state_55676[(8)]);
var inst_55650 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55651 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_55647);
var inst_55652 = cljs.core.async.timeout.call(null,(1000));
var inst_55653 = [inst_55651,inst_55652];
var inst_55654 = (new cljs.core.PersistentVector(null,2,(5),inst_55650,inst_55653,null));
var state_55676__$1 = state_55676;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55676__$1,(11),inst_55654);
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
});})(c__19254__auto___55702,ch))
;
return ((function (switch__19198__auto__,c__19254__auto___55702,ch){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_55698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55698[(0)] = state_machine__19199__auto__);

(statearr_55698[(1)] = (1));

return statearr_55698;
});
var state_machine__19199__auto____1 = (function (state_55676){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_55676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e55699){if((e55699 instanceof Object)){
var ex__19202__auto__ = e55699;
var statearr_55700_55717 = state_55676;
(statearr_55700_55717[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55718 = state_55676;
state_55676 = G__55718;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_55676){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_55676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___55702,ch))
})();
var state__19256__auto__ = (function (){var statearr_55701 = f__19255__auto__.call(null);
(statearr_55701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___55702);

return statearr_55701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___55702,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__55719_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__55719_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_55728 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__55721_SHARP_,p2__55720_SHARP_){
return [cljs.core.str(p2__55720_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_55728){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_55726 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_55727 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_55726,_STAR_print_newline_STAR_55727,base_path_55728){
return (function() { 
var G__55729__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__55729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55730__i = 0, G__55730__a = new Array(arguments.length -  0);
while (G__55730__i < G__55730__a.length) {G__55730__a[G__55730__i] = arguments[G__55730__i + 0]; ++G__55730__i;}
  args = new cljs.core.IndexedSeq(G__55730__a,0);
} 
return G__55729__delegate.call(this,args);};
G__55729.cljs$lang$maxFixedArity = 0;
G__55729.cljs$lang$applyTo = (function (arglist__55731){
var args = cljs.core.seq(arglist__55731);
return G__55729__delegate(args);
});
G__55729.cljs$core$IFn$_invoke$arity$variadic = G__55729__delegate;
return G__55729;
})()
;})(_STAR_print_fn_STAR_55726,_STAR_print_newline_STAR_55727,base_path_55728))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_55727;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_55726;
}}catch (e55725){if((e55725 instanceof Error)){
var e = e55725;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_55728], null));
} else {
var e = e55725;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_55728))
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
figwheel.client.repl_plugin = (function repl_plugin(p__55732){
var map__55737 = p__55732;
var map__55737__$1 = ((cljs.core.seq_QMARK_.call(null,map__55737))?cljs.core.apply.call(null,cljs.core.hash_map,map__55737):map__55737);
var opts = map__55737__$1;
var build_id = cljs.core.get.call(null,map__55737__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__55737,map__55737__$1,opts,build_id){
return (function (p__55738){
var vec__55739 = p__55738;
var map__55740 = cljs.core.nth.call(null,vec__55739,(0),null);
var map__55740__$1 = ((cljs.core.seq_QMARK_.call(null,map__55740))?cljs.core.apply.call(null,cljs.core.hash_map,map__55740):map__55740);
var msg = map__55740__$1;
var msg_name = cljs.core.get.call(null,map__55740__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__55739,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__55739,map__55740,map__55740__$1,msg,msg_name,_,map__55737,map__55737__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__55739,map__55740,map__55740__$1,msg,msg_name,_,map__55737,map__55737__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__55737,map__55737__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__55744){
var vec__55745 = p__55744;
var map__55746 = cljs.core.nth.call(null,vec__55745,(0),null);
var map__55746__$1 = ((cljs.core.seq_QMARK_.call(null,map__55746))?cljs.core.apply.call(null,cljs.core.hash_map,map__55746):map__55746);
var msg = map__55746__$1;
var msg_name = cljs.core.get.call(null,map__55746__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__55745,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__55747){
var map__55755 = p__55747;
var map__55755__$1 = ((cljs.core.seq_QMARK_.call(null,map__55755))?cljs.core.apply.call(null,cljs.core.hash_map,map__55755):map__55755);
var on_compile_fail = cljs.core.get.call(null,map__55755__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__55755__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__55755,map__55755__$1,on_compile_fail,on_compile_warning){
return (function (p__55756){
var vec__55757 = p__55756;
var map__55758 = cljs.core.nth.call(null,vec__55757,(0),null);
var map__55758__$1 = ((cljs.core.seq_QMARK_.call(null,map__55758))?cljs.core.apply.call(null,cljs.core.hash_map,map__55758):map__55758);
var msg = map__55758__$1;
var msg_name = cljs.core.get.call(null,map__55758__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__55757,(1));
var pred__55759 = cljs.core._EQ_;
var expr__55760 = msg_name;
if(cljs.core.truth_(pred__55759.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__55760))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__55759.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__55760))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__55755,map__55755__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__,msg_hist,msg_names,msg){
return (function (state_55957){
var state_val_55958 = (state_55957[(1)]);
if((state_val_55958 === (7))){
var inst_55893 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55959_56000 = state_55957__$1;
(statearr_55959_56000[(2)] = inst_55893);

(statearr_55959_56000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (20))){
var inst_55919 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_55957__$1 = state_55957;
if(inst_55919){
var statearr_55960_56001 = state_55957__$1;
(statearr_55960_56001[(1)] = (22));

} else {
var statearr_55961_56002 = state_55957__$1;
(statearr_55961_56002[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (27))){
var inst_55931 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55932 = figwheel.client.heads_up.display_warning.call(null,inst_55931);
var state_55957__$1 = state_55957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55957__$1,(30),inst_55932);
} else {
if((state_val_55958 === (1))){
var inst_55881 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_55957__$1 = state_55957;
if(cljs.core.truth_(inst_55881)){
var statearr_55962_56003 = state_55957__$1;
(statearr_55962_56003[(1)] = (2));

} else {
var statearr_55963_56004 = state_55957__$1;
(statearr_55963_56004[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (24))){
var inst_55947 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55964_56005 = state_55957__$1;
(statearr_55964_56005[(2)] = inst_55947);

(statearr_55964_56005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (4))){
var inst_55955 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55957__$1,inst_55955);
} else {
if((state_val_55958 === (15))){
var inst_55908 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55909 = figwheel.client.format_messages.call(null,inst_55908);
var inst_55910 = figwheel.client.heads_up.display_error.call(null,inst_55909);
var state_55957__$1 = state_55957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55957__$1,(18),inst_55910);
} else {
if((state_val_55958 === (21))){
var inst_55949 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55965_56006 = state_55957__$1;
(statearr_55965_56006[(2)] = inst_55949);

(statearr_55965_56006[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (31))){
var inst_55938 = figwheel.client.heads_up.flash_loaded.call(null);
var state_55957__$1 = state_55957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55957__$1,(34),inst_55938);
} else {
if((state_val_55958 === (32))){
var state_55957__$1 = state_55957;
var statearr_55966_56007 = state_55957__$1;
(statearr_55966_56007[(2)] = null);

(statearr_55966_56007[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (33))){
var inst_55943 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55967_56008 = state_55957__$1;
(statearr_55967_56008[(2)] = inst_55943);

(statearr_55967_56008[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (13))){
var inst_55899 = (state_55957[(2)]);
var inst_55900 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55901 = figwheel.client.format_messages.call(null,inst_55900);
var inst_55902 = figwheel.client.heads_up.display_error.call(null,inst_55901);
var state_55957__$1 = (function (){var statearr_55968 = state_55957;
(statearr_55968[(7)] = inst_55899);

return statearr_55968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55957__$1,(14),inst_55902);
} else {
if((state_val_55958 === (22))){
var inst_55921 = figwheel.client.heads_up.clear.call(null);
var state_55957__$1 = state_55957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55957__$1,(25),inst_55921);
} else {
if((state_val_55958 === (29))){
var inst_55945 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55969_56009 = state_55957__$1;
(statearr_55969_56009[(2)] = inst_55945);

(statearr_55969_56009[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (6))){
var inst_55889 = figwheel.client.heads_up.clear.call(null);
var state_55957__$1 = state_55957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55957__$1,(9),inst_55889);
} else {
if((state_val_55958 === (28))){
var inst_55936 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_55957__$1 = state_55957;
if(inst_55936){
var statearr_55970_56010 = state_55957__$1;
(statearr_55970_56010[(1)] = (31));

} else {
var statearr_55971_56011 = state_55957__$1;
(statearr_55971_56011[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (25))){
var inst_55923 = (state_55957[(2)]);
var inst_55924 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55925 = figwheel.client.heads_up.display_warning.call(null,inst_55924);
var state_55957__$1 = (function (){var statearr_55972 = state_55957;
(statearr_55972[(8)] = inst_55923);

return statearr_55972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55957__$1,(26),inst_55925);
} else {
if((state_val_55958 === (34))){
var inst_55940 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55973_56012 = state_55957__$1;
(statearr_55973_56012[(2)] = inst_55940);

(statearr_55973_56012[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (17))){
var inst_55951 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55974_56013 = state_55957__$1;
(statearr_55974_56013[(2)] = inst_55951);

(statearr_55974_56013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (3))){
var inst_55895 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_55957__$1 = state_55957;
if(inst_55895){
var statearr_55975_56014 = state_55957__$1;
(statearr_55975_56014[(1)] = (10));

} else {
var statearr_55976_56015 = state_55957__$1;
(statearr_55976_56015[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (12))){
var inst_55953 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55977_56016 = state_55957__$1;
(statearr_55977_56016[(2)] = inst_55953);

(statearr_55977_56016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (2))){
var inst_55883 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_55957__$1 = state_55957;
if(cljs.core.truth_(inst_55883)){
var statearr_55978_56017 = state_55957__$1;
(statearr_55978_56017[(1)] = (5));

} else {
var statearr_55979_56018 = state_55957__$1;
(statearr_55979_56018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (23))){
var inst_55929 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_55957__$1 = state_55957;
if(inst_55929){
var statearr_55980_56019 = state_55957__$1;
(statearr_55980_56019[(1)] = (27));

} else {
var statearr_55981_56020 = state_55957__$1;
(statearr_55981_56020[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (19))){
var inst_55916 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55917 = figwheel.client.heads_up.append_message.call(null,inst_55916);
var state_55957__$1 = state_55957;
var statearr_55982_56021 = state_55957__$1;
(statearr_55982_56021[(2)] = inst_55917);

(statearr_55982_56021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (11))){
var inst_55906 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_55957__$1 = state_55957;
if(inst_55906){
var statearr_55983_56022 = state_55957__$1;
(statearr_55983_56022[(1)] = (15));

} else {
var statearr_55984_56023 = state_55957__$1;
(statearr_55984_56023[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (9))){
var inst_55891 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55985_56024 = state_55957__$1;
(statearr_55985_56024[(2)] = inst_55891);

(statearr_55985_56024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (5))){
var inst_55885 = figwheel.client.heads_up.flash_loaded.call(null);
var state_55957__$1 = state_55957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55957__$1,(8),inst_55885);
} else {
if((state_val_55958 === (14))){
var inst_55904 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55986_56025 = state_55957__$1;
(statearr_55986_56025[(2)] = inst_55904);

(statearr_55986_56025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (26))){
var inst_55927 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55987_56026 = state_55957__$1;
(statearr_55987_56026[(2)] = inst_55927);

(statearr_55987_56026[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (16))){
var inst_55914 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_55957__$1 = state_55957;
if(inst_55914){
var statearr_55988_56027 = state_55957__$1;
(statearr_55988_56027[(1)] = (19));

} else {
var statearr_55989_56028 = state_55957__$1;
(statearr_55989_56028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (30))){
var inst_55934 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55990_56029 = state_55957__$1;
(statearr_55990_56029[(2)] = inst_55934);

(statearr_55990_56029[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (10))){
var inst_55897 = figwheel.client.heads_up.clear.call(null);
var state_55957__$1 = state_55957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55957__$1,(13),inst_55897);
} else {
if((state_val_55958 === (18))){
var inst_55912 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55991_56030 = state_55957__$1;
(statearr_55991_56030[(2)] = inst_55912);

(statearr_55991_56030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (8))){
var inst_55887 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55992_56031 = state_55957__$1;
(statearr_55992_56031[(2)] = inst_55887);

(statearr_55992_56031[(1)] = (7));


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
var statearr_55996 = [null,null,null,null,null,null,null,null,null];
(statearr_55996[(0)] = state_machine__19199__auto__);

(statearr_55996[(1)] = (1));

return statearr_55996;
});
var state_machine__19199__auto____1 = (function (state_55957){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_55957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e55997){if((e55997 instanceof Object)){
var ex__19202__auto__ = e55997;
var statearr_55998_56032 = state_55957;
(statearr_55998_56032[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56033 = state_55957;
state_55957 = G__56033;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_55957){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_55957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__,msg_hist,msg_names,msg))
})();
var state__19256__auto__ = (function (){var statearr_55999 = f__19255__auto__.call(null);
(statearr_55999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_55999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__,msg_hist,msg_names,msg))
);

return c__19254__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19254__auto___56096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___56096,ch){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___56096,ch){
return (function (state_56079){
var state_val_56080 = (state_56079[(1)]);
if((state_val_56080 === (8))){
var inst_56071 = (state_56079[(2)]);
var state_56079__$1 = (function (){var statearr_56081 = state_56079;
(statearr_56081[(7)] = inst_56071);

return statearr_56081;
})();
var statearr_56082_56097 = state_56079__$1;
(statearr_56082_56097[(2)] = null);

(statearr_56082_56097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56080 === (7))){
var inst_56075 = (state_56079[(2)]);
var state_56079__$1 = state_56079;
var statearr_56083_56098 = state_56079__$1;
(statearr_56083_56098[(2)] = inst_56075);

(statearr_56083_56098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56080 === (6))){
var state_56079__$1 = state_56079;
var statearr_56084_56099 = state_56079__$1;
(statearr_56084_56099[(2)] = null);

(statearr_56084_56099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56080 === (5))){
var inst_56067 = (state_56079[(8)]);
var inst_56069 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_56067);
var state_56079__$1 = state_56079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56079__$1,(8),inst_56069);
} else {
if((state_val_56080 === (4))){
var inst_56067 = (state_56079[(8)]);
var inst_56067__$1 = (state_56079[(2)]);
var state_56079__$1 = (function (){var statearr_56085 = state_56079;
(statearr_56085[(8)] = inst_56067__$1);

return statearr_56085;
})();
if(cljs.core.truth_(inst_56067__$1)){
var statearr_56086_56100 = state_56079__$1;
(statearr_56086_56100[(1)] = (5));

} else {
var statearr_56087_56101 = state_56079__$1;
(statearr_56087_56101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56080 === (3))){
var inst_56077 = (state_56079[(2)]);
var state_56079__$1 = state_56079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56079__$1,inst_56077);
} else {
if((state_val_56080 === (2))){
var state_56079__$1 = state_56079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56079__$1,(4),ch);
} else {
if((state_val_56080 === (1))){
var state_56079__$1 = state_56079;
var statearr_56088_56102 = state_56079__$1;
(statearr_56088_56102[(2)] = null);

(statearr_56088_56102[(1)] = (2));


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
});})(c__19254__auto___56096,ch))
;
return ((function (switch__19198__auto__,c__19254__auto___56096,ch){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_56092 = [null,null,null,null,null,null,null,null,null];
(statearr_56092[(0)] = state_machine__19199__auto__);

(statearr_56092[(1)] = (1));

return statearr_56092;
});
var state_machine__19199__auto____1 = (function (state_56079){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_56079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e56093){if((e56093 instanceof Object)){
var ex__19202__auto__ = e56093;
var statearr_56094_56103 = state_56079;
(statearr_56094_56103[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56104 = state_56079;
state_56079 = G__56104;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_56079){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_56079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___56096,ch))
})();
var state__19256__auto__ = (function (){var statearr_56095 = f__19255__auto__.call(null);
(statearr_56095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___56096);

return statearr_56095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___56096,ch))
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
return (function (state_56125){
var state_val_56126 = (state_56125[(1)]);
if((state_val_56126 === (2))){
var inst_56122 = (state_56125[(2)]);
var inst_56123 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_56125__$1 = (function (){var statearr_56127 = state_56125;
(statearr_56127[(7)] = inst_56122);

return statearr_56127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56125__$1,inst_56123);
} else {
if((state_val_56126 === (1))){
var inst_56120 = cljs.core.async.timeout.call(null,(3000));
var state_56125__$1 = state_56125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56125__$1,(2),inst_56120);
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
var statearr_56131 = [null,null,null,null,null,null,null,null];
(statearr_56131[(0)] = state_machine__19199__auto__);

(statearr_56131[(1)] = (1));

return statearr_56131;
});
var state_machine__19199__auto____1 = (function (state_56125){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_56125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e56132){if((e56132 instanceof Object)){
var ex__19202__auto__ = e56132;
var statearr_56133_56135 = state_56125;
(statearr_56133_56135[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56136 = state_56125;
state_56125 = G__56136;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_56125){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_56125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__))
})();
var state__19256__auto__ = (function (){var statearr_56134 = f__19255__auto__.call(null);
(statearr_56134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_56134;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj56140 = {"detail":url};
return obj56140;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__56141){
var map__56147 = p__56141;
var map__56147__$1 = ((cljs.core.seq_QMARK_.call(null,map__56147))?cljs.core.apply.call(null,cljs.core.hash_map,map__56147):map__56147);
var ed = map__56147__$1;
var exception_data = cljs.core.get.call(null,map__56147__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__56147__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__56148_56152 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__56149_56153 = null;
var count__56150_56154 = (0);
var i__56151_56155 = (0);
while(true){
if((i__56151_56155 < count__56150_56154)){
var msg_56156 = cljs.core._nth.call(null,chunk__56149_56153,i__56151_56155);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56156);

var G__56157 = seq__56148_56152;
var G__56158 = chunk__56149_56153;
var G__56159 = count__56150_56154;
var G__56160 = (i__56151_56155 + (1));
seq__56148_56152 = G__56157;
chunk__56149_56153 = G__56158;
count__56150_56154 = G__56159;
i__56151_56155 = G__56160;
continue;
} else {
var temp__4126__auto___56161 = cljs.core.seq.call(null,seq__56148_56152);
if(temp__4126__auto___56161){
var seq__56148_56162__$1 = temp__4126__auto___56161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56148_56162__$1)){
var c__16932__auto___56163 = cljs.core.chunk_first.call(null,seq__56148_56162__$1);
var G__56164 = cljs.core.chunk_rest.call(null,seq__56148_56162__$1);
var G__56165 = c__16932__auto___56163;
var G__56166 = cljs.core.count.call(null,c__16932__auto___56163);
var G__56167 = (0);
seq__56148_56152 = G__56164;
chunk__56149_56153 = G__56165;
count__56150_56154 = G__56166;
i__56151_56155 = G__56167;
continue;
} else {
var msg_56168 = cljs.core.first.call(null,seq__56148_56162__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56168);

var G__56169 = cljs.core.next.call(null,seq__56148_56162__$1);
var G__56170 = null;
var G__56171 = (0);
var G__56172 = (0);
seq__56148_56152 = G__56169;
chunk__56149_56153 = G__56170;
count__56150_56154 = G__56171;
i__56151_56155 = G__56172;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__56173){
var map__56175 = p__56173;
var map__56175__$1 = ((cljs.core.seq_QMARK_.call(null,map__56175))?cljs.core.apply.call(null,cljs.core.hash_map,map__56175):map__56175);
var w = map__56175__$1;
var message = cljs.core.get.call(null,map__56175__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__56182 = cljs.core.seq.call(null,plugins);
var chunk__56183 = null;
var count__56184 = (0);
var i__56185 = (0);
while(true){
if((i__56185 < count__56184)){
var vec__56186 = cljs.core._nth.call(null,chunk__56183,i__56185);
var k = cljs.core.nth.call(null,vec__56186,(0),null);
var plugin = cljs.core.nth.call(null,vec__56186,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56188 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56182,chunk__56183,count__56184,i__56185,pl_56188,vec__56186,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_56188.call(null,msg_hist);
});})(seq__56182,chunk__56183,count__56184,i__56185,pl_56188,vec__56186,k,plugin))
);
} else {
}

var G__56189 = seq__56182;
var G__56190 = chunk__56183;
var G__56191 = count__56184;
var G__56192 = (i__56185 + (1));
seq__56182 = G__56189;
chunk__56183 = G__56190;
count__56184 = G__56191;
i__56185 = G__56192;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__56182);
if(temp__4126__auto__){
var seq__56182__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56182__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__56182__$1);
var G__56193 = cljs.core.chunk_rest.call(null,seq__56182__$1);
var G__56194 = c__16932__auto__;
var G__56195 = cljs.core.count.call(null,c__16932__auto__);
var G__56196 = (0);
seq__56182 = G__56193;
chunk__56183 = G__56194;
count__56184 = G__56195;
i__56185 = G__56196;
continue;
} else {
var vec__56187 = cljs.core.first.call(null,seq__56182__$1);
var k = cljs.core.nth.call(null,vec__56187,(0),null);
var plugin = cljs.core.nth.call(null,vec__56187,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56197 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56182,chunk__56183,count__56184,i__56185,pl_56197,vec__56187,k,plugin,seq__56182__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_56197.call(null,msg_hist);
});})(seq__56182,chunk__56183,count__56184,i__56185,pl_56197,vec__56187,k,plugin,seq__56182__$1,temp__4126__auto__))
);
} else {
}

var G__56198 = cljs.core.next.call(null,seq__56182__$1);
var G__56199 = null;
var G__56200 = (0);
var G__56201 = (0);
seq__56182 = G__56198;
chunk__56183 = G__56199;
count__56184 = G__56200;
i__56185 = G__56201;
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
var watch_and_reload__delegate = function (p__56202){
var map__56204 = p__56202;
var map__56204__$1 = ((cljs.core.seq_QMARK_.call(null,map__56204))?cljs.core.apply.call(null,cljs.core.hash_map,map__56204):map__56204);
var opts = map__56204__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__56202 = null;
if (arguments.length > 0) {
var G__56205__i = 0, G__56205__a = new Array(arguments.length -  0);
while (G__56205__i < G__56205__a.length) {G__56205__a[G__56205__i] = arguments[G__56205__i + 0]; ++G__56205__i;}
  p__56202 = new cljs.core.IndexedSeq(G__56205__a,0);
} 
return watch_and_reload__delegate.call(this,p__56202);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__56206){
var p__56202 = cljs.core.seq(arglist__56206);
return watch_and_reload__delegate(p__56202);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1428649985145