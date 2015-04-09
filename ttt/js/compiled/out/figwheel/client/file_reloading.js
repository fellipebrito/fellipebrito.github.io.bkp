// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__34544_SHARP_,p2__34545_SHARP_){
var and__16133__auto__ = p1__34544_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__34545_SHARP_;
} else {
return and__16133__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__16145__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16145__auto__){
return or__16145__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34547_SHARP_,p2__34546_SHARP_){
return [cljs.core.str(p2__34546_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16145__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16145__auto__){
return or__16145__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16145__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34548){
var map__34549 = p__34548;
var map__34549__$1 = ((cljs.core.seq_QMARK_.call(null,map__34549))?cljs.core.apply.call(null,cljs.core.hash_map,map__34549):map__34549);
var file = cljs.core.get.call(null,map__34549__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34550){
var map__34551 = p__34550;
var map__34551__$1 = ((cljs.core.seq_QMARK_.call(null,map__34551))?cljs.core.apply.call(null,cljs.core.hash_map,map__34551):map__34551);
var namespace = cljs.core.get.call(null,map__34551__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34552){if((e34552 instanceof Error)){
var e = e34552;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34552;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__34553,callback){
var map__34555 = p__34553;
var map__34555__$1 = ((cljs.core.seq_QMARK_.call(null,map__34555))?cljs.core.apply.call(null,cljs.core.hash_map,map__34555):map__34555);
var file_msg = map__34555__$1;
var request_url = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34555,map__34555__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34555,map__34555__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__34556){
var map__34558 = p__34556;
var map__34558__$1 = ((cljs.core.seq_QMARK_.call(null,map__34558))?cljs.core.apply.call(null,cljs.core.hash_map,map__34558):map__34558);
var file_msg = map__34558__$1;
var meta_data = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__16145__auto__ = meta_data;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16133__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16133__auto__){
var or__16145__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16145__auto____$1)){
return or__16145__auto____$1;
} else {
var and__16133__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16133__auto____$1){
var or__16145__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16145__auto____$2){
return or__16145__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16133__auto____$1;
}
}
}
} else {
return and__16133__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__34559,callback){
var map__34561 = p__34559;
var map__34561__$1 = ((cljs.core.seq_QMARK_.call(null,map__34561))?cljs.core.apply.call(null,cljs.core.hash_map,map__34561):map__34561);
var file_msg = map__34561__$1;
var namespace = cljs.core.get.call(null,map__34561__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__34561__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19256__auto___34648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto___34648,out){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto___34648,out){
return (function (state_34630){
var state_val_34631 = (state_34630[(1)]);
if((state_val_34631 === (7))){
var inst_34614 = (state_34630[(7)]);
var inst_34620 = (state_34630[(2)]);
var inst_34621 = cljs.core.async.put_BANG_.call(null,out,inst_34620);
var inst_34610 = inst_34614;
var state_34630__$1 = (function (){var statearr_34632 = state_34630;
(statearr_34632[(8)] = inst_34621);

(statearr_34632[(9)] = inst_34610);

return statearr_34632;
})();
var statearr_34633_34649 = state_34630__$1;
(statearr_34633_34649[(2)] = null);

(statearr_34633_34649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (6))){
var inst_34626 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34634_34650 = state_34630__$1;
(statearr_34634_34650[(2)] = inst_34626);

(statearr_34634_34650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (5))){
var inst_34624 = cljs.core.async.close_BANG_.call(null,out);
var state_34630__$1 = state_34630;
var statearr_34635_34651 = state_34630__$1;
(statearr_34635_34651[(2)] = inst_34624);

(statearr_34635_34651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (4))){
var inst_34613 = (state_34630[(10)]);
var inst_34618 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34613);
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34630__$1,(7),inst_34618);
} else {
if((state_val_34631 === (3))){
var inst_34628 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34630__$1,inst_34628);
} else {
if((state_val_34631 === (2))){
var inst_34613 = (state_34630[(10)]);
var inst_34610 = (state_34630[(9)]);
var inst_34613__$1 = cljs.core.nth.call(null,inst_34610,(0),null);
var inst_34614 = cljs.core.nthnext.call(null,inst_34610,(1));
var inst_34615 = (inst_34613__$1 == null);
var inst_34616 = cljs.core.not.call(null,inst_34615);
var state_34630__$1 = (function (){var statearr_34636 = state_34630;
(statearr_34636[(7)] = inst_34614);

(statearr_34636[(10)] = inst_34613__$1);

return statearr_34636;
})();
if(inst_34616){
var statearr_34637_34652 = state_34630__$1;
(statearr_34637_34652[(1)] = (4));

} else {
var statearr_34638_34653 = state_34630__$1;
(statearr_34638_34653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (1))){
var inst_34608 = cljs.core.nth.call(null,files,(0),null);
var inst_34609 = cljs.core.nthnext.call(null,files,(1));
var inst_34610 = files;
var state_34630__$1 = (function (){var statearr_34639 = state_34630;
(statearr_34639[(11)] = inst_34608);

(statearr_34639[(9)] = inst_34610);

(statearr_34639[(12)] = inst_34609);

return statearr_34639;
})();
var statearr_34640_34654 = state_34630__$1;
(statearr_34640_34654[(2)] = null);

(statearr_34640_34654[(1)] = (2));


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
});})(c__19256__auto___34648,out))
;
return ((function (switch__19200__auto__,c__19256__auto___34648,out){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_34644 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34644[(0)] = state_machine__19201__auto__);

(statearr_34644[(1)] = (1));

return statearr_34644;
});
var state_machine__19201__auto____1 = (function (state_34630){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_34630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e34645){if((e34645 instanceof Object)){
var ex__19204__auto__ = e34645;
var statearr_34646_34655 = state_34630;
(statearr_34646_34655[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34656 = state_34630;
state_34630 = G__34656;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_34630){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_34630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto___34648,out))
})();
var state__19258__auto__ = (function (){var statearr_34647 = f__19257__auto__.call(null);
(statearr_34647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto___34648);

return statearr_34647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto___34648,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__34657,p__34658){
var map__34661 = p__34657;
var map__34661__$1 = ((cljs.core.seq_QMARK_.call(null,map__34661))?cljs.core.apply.call(null,cljs.core.hash_map,map__34661):map__34661);
var opts = map__34661__$1;
var url_rewriter = cljs.core.get.call(null,map__34661__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34662 = p__34658;
var map__34662__$1 = ((cljs.core.seq_QMARK_.call(null,map__34662))?cljs.core.apply.call(null,cljs.core.hash_map,map__34662):map__34662);
var file_msg = map__34662__$1;
var file = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__34663){
var map__34666 = p__34663;
var map__34666__$1 = ((cljs.core.seq_QMARK_.call(null,map__34666))?cljs.core.apply.call(null,cljs.core.hash_map,map__34666):map__34666);
var file = cljs.core.get.call(null,map__34666__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__34666__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__16133__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16133__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16133__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e34667){var e = e34667;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__34672,p__34673){
var map__34874 = p__34672;
var map__34874__$1 = ((cljs.core.seq_QMARK_.call(null,map__34874))?cljs.core.apply.call(null,cljs.core.hash_map,map__34874):map__34874);
var opts = map__34874__$1;
var load_unchanged_files = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__34875 = p__34673;
var map__34875__$1 = ((cljs.core.seq_QMARK_.call(null,map__34875))?cljs.core.apply.call(null,cljs.core.hash_map,map__34875):map__34875);
var msg = map__34875__$1;
var files = cljs.core.get.call(null,map__34875__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files){
return (function (state_34999){
var state_val_35000 = (state_34999[(1)]);
if((state_val_35000 === (7))){
var inst_34886 = (state_34999[(7)]);
var inst_34888 = (state_34999[(8)]);
var inst_34887 = (state_34999[(9)]);
var inst_34889 = (state_34999[(10)]);
var inst_34894 = cljs.core._nth.call(null,inst_34887,inst_34889);
var inst_34895 = figwheel.client.file_reloading.eval_body.call(null,inst_34894);
var inst_34896 = (inst_34889 + (1));
var tmp35001 = inst_34886;
var tmp35002 = inst_34888;
var tmp35003 = inst_34887;
var inst_34886__$1 = tmp35001;
var inst_34887__$1 = tmp35003;
var inst_34888__$1 = tmp35002;
var inst_34889__$1 = inst_34896;
var state_34999__$1 = (function (){var statearr_35004 = state_34999;
(statearr_35004[(11)] = inst_34895);

(statearr_35004[(7)] = inst_34886__$1);

(statearr_35004[(8)] = inst_34888__$1);

(statearr_35004[(9)] = inst_34887__$1);

(statearr_35004[(10)] = inst_34889__$1);

return statearr_35004;
})();
var statearr_35005_35074 = state_34999__$1;
(statearr_35005_35074[(2)] = null);

(statearr_35005_35074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (20))){
var inst_34931 = (state_34999[(12)]);
var inst_34935 = (state_34999[(13)]);
var inst_34932 = (state_34999[(14)]);
var inst_34936 = (state_34999[(15)]);
var inst_34938 = (state_34999[(16)]);
var inst_34941 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34943 = (function (){var files_not_loaded = inst_34938;
var res = inst_34936;
var res_SINGLEQUOTE_ = inst_34935;
var files_SINGLEQUOTE_ = inst_34932;
var all_files = inst_34931;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34931,inst_34935,inst_34932,inst_34936,inst_34938,inst_34941,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files){
return (function (p__34942){
var map__35006 = p__34942;
var map__35006__$1 = ((cljs.core.seq_QMARK_.call(null,map__35006))?cljs.core.apply.call(null,cljs.core.hash_map,map__35006):map__35006);
var file = cljs.core.get.call(null,map__35006__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__35006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34931,inst_34935,inst_34932,inst_34936,inst_34938,inst_34941,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files))
})();
var inst_34944 = cljs.core.map.call(null,inst_34943,inst_34936);
var inst_34945 = cljs.core.pr_str.call(null,inst_34944);
var inst_34946 = figwheel.client.utils.log.call(null,inst_34945);
var inst_34947 = (function (){var files_not_loaded = inst_34938;
var res = inst_34936;
var res_SINGLEQUOTE_ = inst_34935;
var files_SINGLEQUOTE_ = inst_34932;
var all_files = inst_34931;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34931,inst_34935,inst_34932,inst_34936,inst_34938,inst_34941,inst_34943,inst_34944,inst_34945,inst_34946,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34931,inst_34935,inst_34932,inst_34936,inst_34938,inst_34941,inst_34943,inst_34944,inst_34945,inst_34946,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files))
})();
var inst_34948 = setTimeout(inst_34947,(10));
var state_34999__$1 = (function (){var statearr_35007 = state_34999;
(statearr_35007[(17)] = inst_34946);

(statearr_35007[(18)] = inst_34941);

return statearr_35007;
})();
var statearr_35008_35075 = state_34999__$1;
(statearr_35008_35075[(2)] = inst_34948);

(statearr_35008_35075[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (27))){
var inst_34958 = (state_34999[(19)]);
var state_34999__$1 = state_34999;
var statearr_35009_35076 = state_34999__$1;
(statearr_35009_35076[(2)] = inst_34958);

(statearr_35009_35076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (1))){
var inst_34878 = (state_34999[(20)]);
var inst_34876 = before_jsload.call(null,files);
var inst_34877 = (function (){return ((function (inst_34878,inst_34876,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files){
return (function (p1__34668_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34668_SHARP_);
});
;})(inst_34878,inst_34876,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files))
})();
var inst_34878__$1 = cljs.core.filter.call(null,inst_34877,files);
var inst_34879 = cljs.core.not_empty.call(null,inst_34878__$1);
var state_34999__$1 = (function (){var statearr_35010 = state_34999;
(statearr_35010[(21)] = inst_34876);

(statearr_35010[(20)] = inst_34878__$1);

return statearr_35010;
})();
if(cljs.core.truth_(inst_34879)){
var statearr_35011_35077 = state_34999__$1;
(statearr_35011_35077[(1)] = (2));

} else {
var statearr_35012_35078 = state_34999__$1;
(statearr_35012_35078[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (24))){
var state_34999__$1 = state_34999;
var statearr_35013_35079 = state_34999__$1;
(statearr_35013_35079[(2)] = null);

(statearr_35013_35079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (4))){
var inst_34923 = (state_34999[(2)]);
var inst_34924 = (function (){return ((function (inst_34923,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files){
return (function (p1__34669_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34669_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34669_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_34923,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files))
})();
var inst_34925 = cljs.core.filter.call(null,inst_34924,files);
var state_34999__$1 = (function (){var statearr_35014 = state_34999;
(statearr_35014[(22)] = inst_34923);

(statearr_35014[(23)] = inst_34925);

return statearr_35014;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35015_35080 = state_34999__$1;
(statearr_35015_35080[(1)] = (16));

} else {
var statearr_35016_35081 = state_34999__$1;
(statearr_35016_35081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (15))){
var inst_34913 = (state_34999[(2)]);
var state_34999__$1 = state_34999;
var statearr_35017_35082 = state_34999__$1;
(statearr_35017_35082[(2)] = inst_34913);

(statearr_35017_35082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (21))){
var state_34999__$1 = state_34999;
var statearr_35018_35083 = state_34999__$1;
(statearr_35018_35083[(2)] = null);

(statearr_35018_35083[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (31))){
var inst_34966 = (state_34999[(24)]);
var inst_34976 = (state_34999[(2)]);
var inst_34977 = cljs.core.not_empty.call(null,inst_34966);
var state_34999__$1 = (function (){var statearr_35019 = state_34999;
(statearr_35019[(25)] = inst_34976);

return statearr_35019;
})();
if(cljs.core.truth_(inst_34977)){
var statearr_35020_35084 = state_34999__$1;
(statearr_35020_35084[(1)] = (32));

} else {
var statearr_35021_35085 = state_34999__$1;
(statearr_35021_35085[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (32))){
var inst_34966 = (state_34999[(24)]);
var inst_34979 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34966);
var inst_34980 = cljs.core.pr_str.call(null,inst_34979);
var inst_34981 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_34980)].join('');
var inst_34982 = figwheel.client.utils.log.call(null,inst_34981);
var state_34999__$1 = state_34999;
var statearr_35022_35086 = state_34999__$1;
(statearr_35022_35086[(2)] = inst_34982);

(statearr_35022_35086[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (33))){
var state_34999__$1 = state_34999;
var statearr_35023_35087 = state_34999__$1;
(statearr_35023_35087[(2)] = null);

(statearr_35023_35087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (13))){
var inst_34899 = (state_34999[(26)]);
var inst_34903 = cljs.core.chunk_first.call(null,inst_34899);
var inst_34904 = cljs.core.chunk_rest.call(null,inst_34899);
var inst_34905 = cljs.core.count.call(null,inst_34903);
var inst_34886 = inst_34904;
var inst_34887 = inst_34903;
var inst_34888 = inst_34905;
var inst_34889 = (0);
var state_34999__$1 = (function (){var statearr_35024 = state_34999;
(statearr_35024[(7)] = inst_34886);

(statearr_35024[(8)] = inst_34888);

(statearr_35024[(9)] = inst_34887);

(statearr_35024[(10)] = inst_34889);

return statearr_35024;
})();
var statearr_35025_35088 = state_34999__$1;
(statearr_35025_35088[(2)] = null);

(statearr_35025_35088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (22))){
var inst_34938 = (state_34999[(16)]);
var inst_34951 = (state_34999[(2)]);
var inst_34952 = cljs.core.not_empty.call(null,inst_34938);
var state_34999__$1 = (function (){var statearr_35026 = state_34999;
(statearr_35026[(27)] = inst_34951);

return statearr_35026;
})();
if(cljs.core.truth_(inst_34952)){
var statearr_35027_35089 = state_34999__$1;
(statearr_35027_35089[(1)] = (23));

} else {
var statearr_35028_35090 = state_34999__$1;
(statearr_35028_35090[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (36))){
var state_34999__$1 = state_34999;
var statearr_35029_35091 = state_34999__$1;
(statearr_35029_35091[(2)] = null);

(statearr_35029_35091[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (29))){
var inst_34967 = (state_34999[(28)]);
var inst_34970 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34967);
var inst_34971 = cljs.core.pr_str.call(null,inst_34970);
var inst_34972 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34971)].join('');
var inst_34973 = figwheel.client.utils.log.call(null,inst_34972);
var state_34999__$1 = state_34999;
var statearr_35030_35092 = state_34999__$1;
(statearr_35030_35092[(2)] = inst_34973);

(statearr_35030_35092[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (6))){
var inst_34920 = (state_34999[(2)]);
var state_34999__$1 = state_34999;
var statearr_35031_35093 = state_34999__$1;
(statearr_35031_35093[(2)] = inst_34920);

(statearr_35031_35093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (28))){
var inst_34967 = (state_34999[(28)]);
var inst_34964 = (state_34999[(2)]);
var inst_34965 = cljs.core.get.call(null,inst_34964,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34966 = cljs.core.get.call(null,inst_34964,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_34967__$1 = cljs.core.get.call(null,inst_34964,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34968 = cljs.core.not_empty.call(null,inst_34967__$1);
var state_34999__$1 = (function (){var statearr_35032 = state_34999;
(statearr_35032[(29)] = inst_34965);

(statearr_35032[(28)] = inst_34967__$1);

(statearr_35032[(24)] = inst_34966);

return statearr_35032;
})();
if(cljs.core.truth_(inst_34968)){
var statearr_35033_35094 = state_34999__$1;
(statearr_35033_35094[(1)] = (29));

} else {
var statearr_35034_35095 = state_34999__$1;
(statearr_35034_35095[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (25))){
var inst_34997 = (state_34999[(2)]);
var state_34999__$1 = state_34999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34999__$1,inst_34997);
} else {
if((state_val_35000 === (34))){
var inst_34965 = (state_34999[(29)]);
var inst_34985 = (state_34999[(2)]);
var inst_34986 = cljs.core.not_empty.call(null,inst_34965);
var state_34999__$1 = (function (){var statearr_35035 = state_34999;
(statearr_35035[(30)] = inst_34985);

return statearr_35035;
})();
if(cljs.core.truth_(inst_34986)){
var statearr_35036_35096 = state_34999__$1;
(statearr_35036_35096[(1)] = (35));

} else {
var statearr_35037_35097 = state_34999__$1;
(statearr_35037_35097[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (17))){
var inst_34925 = (state_34999[(23)]);
var state_34999__$1 = state_34999;
var statearr_35038_35098 = state_34999__$1;
(statearr_35038_35098[(2)] = inst_34925);

(statearr_35038_35098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (3))){
var state_34999__$1 = state_34999;
var statearr_35039_35099 = state_34999__$1;
(statearr_35039_35099[(2)] = null);

(statearr_35039_35099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (12))){
var inst_34916 = (state_34999[(2)]);
var state_34999__$1 = state_34999;
var statearr_35040_35100 = state_34999__$1;
(statearr_35040_35100[(2)] = inst_34916);

(statearr_35040_35100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (2))){
var inst_34878 = (state_34999[(20)]);
var inst_34885 = cljs.core.seq.call(null,inst_34878);
var inst_34886 = inst_34885;
var inst_34887 = null;
var inst_34888 = (0);
var inst_34889 = (0);
var state_34999__$1 = (function (){var statearr_35041 = state_34999;
(statearr_35041[(7)] = inst_34886);

(statearr_35041[(8)] = inst_34888);

(statearr_35041[(9)] = inst_34887);

(statearr_35041[(10)] = inst_34889);

return statearr_35041;
})();
var statearr_35042_35101 = state_34999__$1;
(statearr_35042_35101[(2)] = null);

(statearr_35042_35101[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (23))){
var inst_34958 = (state_34999[(19)]);
var inst_34931 = (state_34999[(12)]);
var inst_34935 = (state_34999[(13)]);
var inst_34932 = (state_34999[(14)]);
var inst_34936 = (state_34999[(15)]);
var inst_34938 = (state_34999[(16)]);
var inst_34954 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34957 = (function (){var files_not_loaded = inst_34938;
var res = inst_34936;
var res_SINGLEQUOTE_ = inst_34935;
var files_SINGLEQUOTE_ = inst_34932;
var all_files = inst_34931;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34958,inst_34931,inst_34935,inst_34932,inst_34936,inst_34938,inst_34954,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files){
return (function (p__34956){
var map__35043 = p__34956;
var map__35043__$1 = ((cljs.core.seq_QMARK_.call(null,map__35043))?cljs.core.apply.call(null,cljs.core.hash_map,map__35043):map__35043);
var meta_data = cljs.core.get.call(null,map__35043__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34958,inst_34931,inst_34935,inst_34932,inst_34936,inst_34938,inst_34954,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files))
})();
var inst_34958__$1 = cljs.core.group_by.call(null,inst_34957,inst_34938);
var inst_34959 = cljs.core.seq_QMARK_.call(null,inst_34958__$1);
var state_34999__$1 = (function (){var statearr_35044 = state_34999;
(statearr_35044[(19)] = inst_34958__$1);

(statearr_35044[(31)] = inst_34954);

return statearr_35044;
})();
if(inst_34959){
var statearr_35045_35102 = state_34999__$1;
(statearr_35045_35102[(1)] = (26));

} else {
var statearr_35046_35103 = state_34999__$1;
(statearr_35046_35103[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (35))){
var inst_34965 = (state_34999[(29)]);
var inst_34988 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34965);
var inst_34989 = cljs.core.pr_str.call(null,inst_34988);
var inst_34990 = [cljs.core.str("not required: "),cljs.core.str(inst_34989)].join('');
var inst_34991 = figwheel.client.utils.log.call(null,inst_34990);
var state_34999__$1 = state_34999;
var statearr_35047_35104 = state_34999__$1;
(statearr_35047_35104[(2)] = inst_34991);

(statearr_35047_35104[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (19))){
var inst_34931 = (state_34999[(12)]);
var inst_34935 = (state_34999[(13)]);
var inst_34932 = (state_34999[(14)]);
var inst_34936 = (state_34999[(15)]);
var inst_34935__$1 = (state_34999[(2)]);
var inst_34936__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34935__$1);
var inst_34937 = (function (){var res = inst_34936__$1;
var res_SINGLEQUOTE_ = inst_34935__$1;
var files_SINGLEQUOTE_ = inst_34932;
var all_files = inst_34931;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34931,inst_34935,inst_34932,inst_34936,inst_34935__$1,inst_34936__$1,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files){
return (function (p1__34671_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34671_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34931,inst_34935,inst_34932,inst_34936,inst_34935__$1,inst_34936__$1,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files))
})();
var inst_34938 = cljs.core.filter.call(null,inst_34937,inst_34935__$1);
var inst_34939 = cljs.core.not_empty.call(null,inst_34936__$1);
var state_34999__$1 = (function (){var statearr_35048 = state_34999;
(statearr_35048[(13)] = inst_34935__$1);

(statearr_35048[(15)] = inst_34936__$1);

(statearr_35048[(16)] = inst_34938);

return statearr_35048;
})();
if(cljs.core.truth_(inst_34939)){
var statearr_35049_35105 = state_34999__$1;
(statearr_35049_35105[(1)] = (20));

} else {
var statearr_35050_35106 = state_34999__$1;
(statearr_35050_35106[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (11))){
var state_34999__$1 = state_34999;
var statearr_35051_35107 = state_34999__$1;
(statearr_35051_35107[(2)] = null);

(statearr_35051_35107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (9))){
var inst_34918 = (state_34999[(2)]);
var state_34999__$1 = state_34999;
var statearr_35052_35108 = state_34999__$1;
(statearr_35052_35108[(2)] = inst_34918);

(statearr_35052_35108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (5))){
var inst_34888 = (state_34999[(8)]);
var inst_34889 = (state_34999[(10)]);
var inst_34891 = (inst_34889 < inst_34888);
var inst_34892 = inst_34891;
var state_34999__$1 = state_34999;
if(cljs.core.truth_(inst_34892)){
var statearr_35053_35109 = state_34999__$1;
(statearr_35053_35109[(1)] = (7));

} else {
var statearr_35054_35110 = state_34999__$1;
(statearr_35054_35110[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (14))){
var inst_34899 = (state_34999[(26)]);
var inst_34908 = cljs.core.first.call(null,inst_34899);
var inst_34909 = figwheel.client.file_reloading.eval_body.call(null,inst_34908);
var inst_34910 = cljs.core.next.call(null,inst_34899);
var inst_34886 = inst_34910;
var inst_34887 = null;
var inst_34888 = (0);
var inst_34889 = (0);
var state_34999__$1 = (function (){var statearr_35055 = state_34999;
(statearr_35055[(7)] = inst_34886);

(statearr_35055[(32)] = inst_34909);

(statearr_35055[(8)] = inst_34888);

(statearr_35055[(9)] = inst_34887);

(statearr_35055[(10)] = inst_34889);

return statearr_35055;
})();
var statearr_35056_35111 = state_34999__$1;
(statearr_35056_35111[(2)] = null);

(statearr_35056_35111[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (26))){
var inst_34958 = (state_34999[(19)]);
var inst_34961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34958);
var state_34999__$1 = state_34999;
var statearr_35057_35112 = state_34999__$1;
(statearr_35057_35112[(2)] = inst_34961);

(statearr_35057_35112[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (16))){
var inst_34925 = (state_34999[(23)]);
var inst_34927 = (function (){var all_files = inst_34925;
return ((function (all_files,inst_34925,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files){
return (function (p1__34670_SHARP_){
return cljs.core.update_in.call(null,p1__34670_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_34925,state_val_35000,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files))
})();
var inst_34928 = cljs.core.map.call(null,inst_34927,inst_34925);
var state_34999__$1 = state_34999;
var statearr_35058_35113 = state_34999__$1;
(statearr_35058_35113[(2)] = inst_34928);

(statearr_35058_35113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (30))){
var state_34999__$1 = state_34999;
var statearr_35059_35114 = state_34999__$1;
(statearr_35059_35114[(2)] = null);

(statearr_35059_35114[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (10))){
var inst_34899 = (state_34999[(26)]);
var inst_34901 = cljs.core.chunked_seq_QMARK_.call(null,inst_34899);
var state_34999__$1 = state_34999;
if(inst_34901){
var statearr_35060_35115 = state_34999__$1;
(statearr_35060_35115[(1)] = (13));

} else {
var statearr_35061_35116 = state_34999__$1;
(statearr_35061_35116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (18))){
var inst_34931 = (state_34999[(12)]);
var inst_34932 = (state_34999[(14)]);
var inst_34931__$1 = (state_34999[(2)]);
var inst_34932__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_34931__$1);
var inst_34933 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34932__$1);
var state_34999__$1 = (function (){var statearr_35062 = state_34999;
(statearr_35062[(12)] = inst_34931__$1);

(statearr_35062[(14)] = inst_34932__$1);

return statearr_35062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34999__$1,(19),inst_34933);
} else {
if((state_val_35000 === (37))){
var inst_34994 = (state_34999[(2)]);
var state_34999__$1 = state_34999;
var statearr_35063_35117 = state_34999__$1;
(statearr_35063_35117[(2)] = inst_34994);

(statearr_35063_35117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (8))){
var inst_34899 = (state_34999[(26)]);
var inst_34886 = (state_34999[(7)]);
var inst_34899__$1 = cljs.core.seq.call(null,inst_34886);
var state_34999__$1 = (function (){var statearr_35064 = state_34999;
(statearr_35064[(26)] = inst_34899__$1);

return statearr_35064;
})();
if(inst_34899__$1){
var statearr_35065_35118 = state_34999__$1;
(statearr_35065_35118[(1)] = (10));

} else {
var statearr_35066_35119 = state_34999__$1;
(statearr_35066_35119[(1)] = (11));

}

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
}
}
}
});})(c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files))
;
return ((function (switch__19200__auto__,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_35070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35070[(0)] = state_machine__19201__auto__);

(statearr_35070[(1)] = (1));

return statearr_35070;
});
var state_machine__19201__auto____1 = (function (state_34999){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_34999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e35071){if((e35071 instanceof Object)){
var ex__19204__auto__ = e35071;
var statearr_35072_35120 = state_34999;
(statearr_35072_35120[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35121 = state_34999;
state_34999 = G__35121;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_34999){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_34999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files))
})();
var state__19258__auto__ = (function (){var statearr_35073 = f__19257__auto__.call(null);
(statearr_35073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto__);

return statearr_35073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto__,map__34874,map__34874__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34875,map__34875__$1,msg,files))
);

return c__19256__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__35124,link){
var map__35126 = p__35124;
var map__35126__$1 = ((cljs.core.seq_QMARK_.call(null,map__35126))?cljs.core.apply.call(null,cljs.core.hash_map,map__35126):map__35126);
var file = cljs.core.get.call(null,map__35126__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__35126,map__35126__$1,file){
return (function (p1__35122_SHARP_,p2__35123_SHARP_){
if(cljs.core._EQ_.call(null,p1__35122_SHARP_,p2__35123_SHARP_)){
return p1__35122_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__35126,map__35126__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35130){
var map__35131 = p__35130;
var map__35131__$1 = ((cljs.core.seq_QMARK_.call(null,map__35131))?cljs.core.apply.call(null,cljs.core.hash_map,map__35131):map__35131);
var current_url_length = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35127_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35127_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__35132){
var map__35134 = p__35132;
var map__35134__$1 = ((cljs.core.seq_QMARK_.call(null,map__35134))?cljs.core.apply.call(null,cljs.core.hash_map,map__35134):map__35134);
var f_data = map__35134__$1;
var request_url = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16145__auto__ = request_url;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__35135,files_msg){
var map__35157 = p__35135;
var map__35157__$1 = ((cljs.core.seq_QMARK_.call(null,map__35157))?cljs.core.apply.call(null,cljs.core.hash_map,map__35157):map__35157);
var opts = map__35157__$1;
var on_cssload = cljs.core.get.call(null,map__35157__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35158_35178 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35159_35179 = null;
var count__35160_35180 = (0);
var i__35161_35181 = (0);
while(true){
if((i__35161_35181 < count__35160_35180)){
var f_35182 = cljs.core._nth.call(null,chunk__35159_35179,i__35161_35181);
figwheel.client.file_reloading.reload_css_file.call(null,f_35182);

var G__35183 = seq__35158_35178;
var G__35184 = chunk__35159_35179;
var G__35185 = count__35160_35180;
var G__35186 = (i__35161_35181 + (1));
seq__35158_35178 = G__35183;
chunk__35159_35179 = G__35184;
count__35160_35180 = G__35185;
i__35161_35181 = G__35186;
continue;
} else {
var temp__4126__auto___35187 = cljs.core.seq.call(null,seq__35158_35178);
if(temp__4126__auto___35187){
var seq__35158_35188__$1 = temp__4126__auto___35187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35158_35188__$1)){
var c__16932__auto___35189 = cljs.core.chunk_first.call(null,seq__35158_35188__$1);
var G__35190 = cljs.core.chunk_rest.call(null,seq__35158_35188__$1);
var G__35191 = c__16932__auto___35189;
var G__35192 = cljs.core.count.call(null,c__16932__auto___35189);
var G__35193 = (0);
seq__35158_35178 = G__35190;
chunk__35159_35179 = G__35191;
count__35160_35180 = G__35192;
i__35161_35181 = G__35193;
continue;
} else {
var f_35194 = cljs.core.first.call(null,seq__35158_35188__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35194);

var G__35195 = cljs.core.next.call(null,seq__35158_35188__$1);
var G__35196 = null;
var G__35197 = (0);
var G__35198 = (0);
seq__35158_35178 = G__35195;
chunk__35159_35179 = G__35196;
count__35160_35180 = G__35197;
i__35161_35181 = G__35198;
continue;
}
} else {
}
}
break;
}

var c__19256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19256__auto__,map__35157,map__35157__$1,opts,on_cssload){
return (function (){
var f__19257__auto__ = (function (){var switch__19200__auto__ = ((function (c__19256__auto__,map__35157,map__35157__$1,opts,on_cssload){
return (function (state_35168){
var state_val_35169 = (state_35168[(1)]);
if((state_val_35169 === (2))){
var inst_35164 = (state_35168[(2)]);
var inst_35165 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35166 = on_cssload.call(null,inst_35165);
var state_35168__$1 = (function (){var statearr_35170 = state_35168;
(statearr_35170[(7)] = inst_35164);

return statearr_35170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35168__$1,inst_35166);
} else {
if((state_val_35169 === (1))){
var inst_35162 = cljs.core.async.timeout.call(null,(100));
var state_35168__$1 = state_35168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35168__$1,(2),inst_35162);
} else {
return null;
}
}
});})(c__19256__auto__,map__35157,map__35157__$1,opts,on_cssload))
;
return ((function (switch__19200__auto__,c__19256__auto__,map__35157,map__35157__$1,opts,on_cssload){
return (function() {
var state_machine__19201__auto__ = null;
var state_machine__19201__auto____0 = (function (){
var statearr_35174 = [null,null,null,null,null,null,null,null];
(statearr_35174[(0)] = state_machine__19201__auto__);

(statearr_35174[(1)] = (1));

return statearr_35174;
});
var state_machine__19201__auto____1 = (function (state_35168){
while(true){
var ret_value__19202__auto__ = (function (){try{while(true){
var result__19203__auto__ = switch__19200__auto__.call(null,state_35168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19203__auto__;
}
break;
}
}catch (e35175){if((e35175 instanceof Object)){
var ex__19204__auto__ = e35175;
var statearr_35176_35199 = state_35168;
(statearr_35176_35199[(5)] = ex__19204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35200 = state_35168;
state_35168 = G__35200;
continue;
} else {
return ret_value__19202__auto__;
}
break;
}
});
state_machine__19201__auto__ = function(state_35168){
switch(arguments.length){
case 0:
return state_machine__19201__auto____0.call(this);
case 1:
return state_machine__19201__auto____1.call(this,state_35168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19201__auto____0;
state_machine__19201__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19201__auto____1;
return state_machine__19201__auto__;
})()
;})(switch__19200__auto__,c__19256__auto__,map__35157,map__35157__$1,opts,on_cssload))
})();
var state__19258__auto__ = (function (){var statearr_35177 = f__19257__auto__.call(null);
(statearr_35177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19256__auto__);

return statearr_35177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19258__auto__);
});})(c__19256__auto__,map__35157,map__35157__$1,opts,on_cssload))
);

return c__19256__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1428568919681