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
return cljs.core.reduce.call(null,(function (p1__34542_SHARP_,p2__34543_SHARP_){
var and__16133__auto__ = p1__34542_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__34543_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34545_SHARP_,p2__34544_SHARP_){
return [cljs.core.str(p2__34544_SHARP_)].join('');
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17046__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17047__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17047__auto__,method_table__17043__auto__,prefer_table__17044__auto__,method_cache__17045__auto__,cached_hierarchy__17046__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34546){
var map__34547 = p__34546;
var map__34547__$1 = ((cljs.core.seq_QMARK_.call(null,map__34547))?cljs.core.apply.call(null,cljs.core.hash_map,map__34547):map__34547);
var file = cljs.core.get.call(null,map__34547__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34548){
var map__34549 = p__34548;
var map__34549__$1 = ((cljs.core.seq_QMARK_.call(null,map__34549))?cljs.core.apply.call(null,cljs.core.hash_map,map__34549):map__34549);
var namespace = cljs.core.get.call(null,map__34549__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17046__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17047__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17047__auto__,method_table__17043__auto__,prefer_table__17044__auto__,method_cache__17045__auto__,cached_hierarchy__17046__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34550){if((e34550 instanceof Error)){
var e = e34550;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34550;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__34551,callback){
var map__34553 = p__34551;
var map__34553__$1 = ((cljs.core.seq_QMARK_.call(null,map__34553))?cljs.core.apply.call(null,cljs.core.hash_map,map__34553):map__34553);
var file_msg = map__34553__$1;
var request_url = cljs.core.get.call(null,map__34553__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34553,map__34553__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34553,map__34553__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__34554){
var map__34556 = p__34554;
var map__34556__$1 = ((cljs.core.seq_QMARK_.call(null,map__34556))?cljs.core.apply.call(null,cljs.core.hash_map,map__34556):map__34556);
var file_msg = map__34556__$1;
var meta_data = cljs.core.get.call(null,map__34556__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__34556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__34557,callback){
var map__34559 = p__34557;
var map__34559__$1 = ((cljs.core.seq_QMARK_.call(null,map__34559))?cljs.core.apply.call(null,cljs.core.hash_map,map__34559):map__34559);
var file_msg = map__34559__$1;
var namespace = cljs.core.get.call(null,map__34559__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__34559__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__19255__auto___34646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto___34646,out){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto___34646,out){
return (function (state_34628){
var state_val_34629 = (state_34628[(1)]);
if((state_val_34629 === (7))){
var inst_34612 = (state_34628[(7)]);
var inst_34618 = (state_34628[(2)]);
var inst_34619 = cljs.core.async.put_BANG_.call(null,out,inst_34618);
var inst_34608 = inst_34612;
var state_34628__$1 = (function (){var statearr_34630 = state_34628;
(statearr_34630[(8)] = inst_34619);

(statearr_34630[(9)] = inst_34608);

return statearr_34630;
})();
var statearr_34631_34647 = state_34628__$1;
(statearr_34631_34647[(2)] = null);

(statearr_34631_34647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (6))){
var inst_34624 = (state_34628[(2)]);
var state_34628__$1 = state_34628;
var statearr_34632_34648 = state_34628__$1;
(statearr_34632_34648[(2)] = inst_34624);

(statearr_34632_34648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (5))){
var inst_34622 = cljs.core.async.close_BANG_.call(null,out);
var state_34628__$1 = state_34628;
var statearr_34633_34649 = state_34628__$1;
(statearr_34633_34649[(2)] = inst_34622);

(statearr_34633_34649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (4))){
var inst_34611 = (state_34628[(10)]);
var inst_34616 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34611);
var state_34628__$1 = state_34628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34628__$1,(7),inst_34616);
} else {
if((state_val_34629 === (3))){
var inst_34626 = (state_34628[(2)]);
var state_34628__$1 = state_34628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34628__$1,inst_34626);
} else {
if((state_val_34629 === (2))){
var inst_34611 = (state_34628[(10)]);
var inst_34608 = (state_34628[(9)]);
var inst_34611__$1 = cljs.core.nth.call(null,inst_34608,(0),null);
var inst_34612 = cljs.core.nthnext.call(null,inst_34608,(1));
var inst_34613 = (inst_34611__$1 == null);
var inst_34614 = cljs.core.not.call(null,inst_34613);
var state_34628__$1 = (function (){var statearr_34634 = state_34628;
(statearr_34634[(10)] = inst_34611__$1);

(statearr_34634[(7)] = inst_34612);

return statearr_34634;
})();
if(inst_34614){
var statearr_34635_34650 = state_34628__$1;
(statearr_34635_34650[(1)] = (4));

} else {
var statearr_34636_34651 = state_34628__$1;
(statearr_34636_34651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (1))){
var inst_34606 = cljs.core.nth.call(null,files,(0),null);
var inst_34607 = cljs.core.nthnext.call(null,files,(1));
var inst_34608 = files;
var state_34628__$1 = (function (){var statearr_34637 = state_34628;
(statearr_34637[(11)] = inst_34607);

(statearr_34637[(9)] = inst_34608);

(statearr_34637[(12)] = inst_34606);

return statearr_34637;
})();
var statearr_34638_34652 = state_34628__$1;
(statearr_34638_34652[(2)] = null);

(statearr_34638_34652[(1)] = (2));


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
});})(c__19255__auto___34646,out))
;
return ((function (switch__19199__auto__,c__19255__auto___34646,out){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_34642 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34642[(0)] = state_machine__19200__auto__);

(statearr_34642[(1)] = (1));

return statearr_34642;
});
var state_machine__19200__auto____1 = (function (state_34628){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_34628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e34643){if((e34643 instanceof Object)){
var ex__19203__auto__ = e34643;
var statearr_34644_34653 = state_34628;
(statearr_34644_34653[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34654 = state_34628;
state_34628 = G__34654;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_34628){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_34628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto___34646,out))
})();
var state__19257__auto__ = (function (){var statearr_34645 = f__19256__auto__.call(null);
(statearr_34645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto___34646);

return statearr_34645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto___34646,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__34655,p__34656){
var map__34659 = p__34655;
var map__34659__$1 = ((cljs.core.seq_QMARK_.call(null,map__34659))?cljs.core.apply.call(null,cljs.core.hash_map,map__34659):map__34659);
var opts = map__34659__$1;
var url_rewriter = cljs.core.get.call(null,map__34659__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34660 = p__34656;
var map__34660__$1 = ((cljs.core.seq_QMARK_.call(null,map__34660))?cljs.core.apply.call(null,cljs.core.hash_map,map__34660):map__34660);
var file_msg = map__34660__$1;
var file = cljs.core.get.call(null,map__34660__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__34661){
var map__34664 = p__34661;
var map__34664__$1 = ((cljs.core.seq_QMARK_.call(null,map__34664))?cljs.core.apply.call(null,cljs.core.hash_map,map__34664):map__34664);
var file = cljs.core.get.call(null,map__34664__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__34664__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e34665){var e = e34665;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__34670,p__34671){
var map__34872 = p__34670;
var map__34872__$1 = ((cljs.core.seq_QMARK_.call(null,map__34872))?cljs.core.apply.call(null,cljs.core.hash_map,map__34872):map__34872);
var opts = map__34872__$1;
var load_unchanged_files = cljs.core.get.call(null,map__34872__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__34872__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__34872__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__34873 = p__34671;
var map__34873__$1 = ((cljs.core.seq_QMARK_.call(null,map__34873))?cljs.core.apply.call(null,cljs.core.hash_map,map__34873):map__34873);
var msg = map__34873__$1;
var files = cljs.core.get.call(null,map__34873__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files){
return (function (state_34997){
var state_val_34998 = (state_34997[(1)]);
if((state_val_34998 === (7))){
var inst_34885 = (state_34997[(7)]);
var inst_34886 = (state_34997[(8)]);
var inst_34887 = (state_34997[(9)]);
var inst_34884 = (state_34997[(10)]);
var inst_34892 = cljs.core._nth.call(null,inst_34885,inst_34887);
var inst_34893 = figwheel.client.file_reloading.eval_body.call(null,inst_34892);
var inst_34894 = (inst_34887 + (1));
var tmp34999 = inst_34885;
var tmp35000 = inst_34886;
var tmp35001 = inst_34884;
var inst_34884__$1 = tmp35001;
var inst_34885__$1 = tmp34999;
var inst_34886__$1 = tmp35000;
var inst_34887__$1 = inst_34894;
var state_34997__$1 = (function (){var statearr_35002 = state_34997;
(statearr_35002[(7)] = inst_34885__$1);

(statearr_35002[(8)] = inst_34886__$1);

(statearr_35002[(11)] = inst_34893);

(statearr_35002[(9)] = inst_34887__$1);

(statearr_35002[(10)] = inst_34884__$1);

return statearr_35002;
})();
var statearr_35003_35072 = state_34997__$1;
(statearr_35003_35072[(2)] = null);

(statearr_35003_35072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (20))){
var inst_34929 = (state_34997[(12)]);
var inst_34934 = (state_34997[(13)]);
var inst_34933 = (state_34997[(14)]);
var inst_34930 = (state_34997[(15)]);
var inst_34936 = (state_34997[(16)]);
var inst_34939 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34941 = (function (){var files_not_loaded = inst_34936;
var res = inst_34934;
var res_SINGLEQUOTE_ = inst_34933;
var files_SINGLEQUOTE_ = inst_34930;
var all_files = inst_34929;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34929,inst_34934,inst_34933,inst_34930,inst_34936,inst_34939,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files){
return (function (p__34940){
var map__35004 = p__34940;
var map__35004__$1 = ((cljs.core.seq_QMARK_.call(null,map__35004))?cljs.core.apply.call(null,cljs.core.hash_map,map__35004):map__35004);
var file = cljs.core.get.call(null,map__35004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__35004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34929,inst_34934,inst_34933,inst_34930,inst_34936,inst_34939,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files))
})();
var inst_34942 = cljs.core.map.call(null,inst_34941,inst_34934);
var inst_34943 = cljs.core.pr_str.call(null,inst_34942);
var inst_34944 = figwheel.client.utils.log.call(null,inst_34943);
var inst_34945 = (function (){var files_not_loaded = inst_34936;
var res = inst_34934;
var res_SINGLEQUOTE_ = inst_34933;
var files_SINGLEQUOTE_ = inst_34930;
var all_files = inst_34929;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34929,inst_34934,inst_34933,inst_34930,inst_34936,inst_34939,inst_34941,inst_34942,inst_34943,inst_34944,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34929,inst_34934,inst_34933,inst_34930,inst_34936,inst_34939,inst_34941,inst_34942,inst_34943,inst_34944,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files))
})();
var inst_34946 = setTimeout(inst_34945,(10));
var state_34997__$1 = (function (){var statearr_35005 = state_34997;
(statearr_35005[(17)] = inst_34944);

(statearr_35005[(18)] = inst_34939);

return statearr_35005;
})();
var statearr_35006_35073 = state_34997__$1;
(statearr_35006_35073[(2)] = inst_34946);

(statearr_35006_35073[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (27))){
var inst_34956 = (state_34997[(19)]);
var state_34997__$1 = state_34997;
var statearr_35007_35074 = state_34997__$1;
(statearr_35007_35074[(2)] = inst_34956);

(statearr_35007_35074[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (1))){
var inst_34876 = (state_34997[(20)]);
var inst_34874 = before_jsload.call(null,files);
var inst_34875 = (function (){return ((function (inst_34876,inst_34874,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files){
return (function (p1__34666_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34666_SHARP_);
});
;})(inst_34876,inst_34874,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files))
})();
var inst_34876__$1 = cljs.core.filter.call(null,inst_34875,files);
var inst_34877 = cljs.core.not_empty.call(null,inst_34876__$1);
var state_34997__$1 = (function (){var statearr_35008 = state_34997;
(statearr_35008[(20)] = inst_34876__$1);

(statearr_35008[(21)] = inst_34874);

return statearr_35008;
})();
if(cljs.core.truth_(inst_34877)){
var statearr_35009_35075 = state_34997__$1;
(statearr_35009_35075[(1)] = (2));

} else {
var statearr_35010_35076 = state_34997__$1;
(statearr_35010_35076[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (24))){
var state_34997__$1 = state_34997;
var statearr_35011_35077 = state_34997__$1;
(statearr_35011_35077[(2)] = null);

(statearr_35011_35077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (4))){
var inst_34921 = (state_34997[(2)]);
var inst_34922 = (function (){return ((function (inst_34921,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files){
return (function (p1__34667_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34667_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34667_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_34921,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files))
})();
var inst_34923 = cljs.core.filter.call(null,inst_34922,files);
var state_34997__$1 = (function (){var statearr_35012 = state_34997;
(statearr_35012[(22)] = inst_34923);

(statearr_35012[(23)] = inst_34921);

return statearr_35012;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35013_35078 = state_34997__$1;
(statearr_35013_35078[(1)] = (16));

} else {
var statearr_35014_35079 = state_34997__$1;
(statearr_35014_35079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (15))){
var inst_34911 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35015_35080 = state_34997__$1;
(statearr_35015_35080[(2)] = inst_34911);

(statearr_35015_35080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (21))){
var state_34997__$1 = state_34997;
var statearr_35016_35081 = state_34997__$1;
(statearr_35016_35081[(2)] = null);

(statearr_35016_35081[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (31))){
var inst_34964 = (state_34997[(24)]);
var inst_34974 = (state_34997[(2)]);
var inst_34975 = cljs.core.not_empty.call(null,inst_34964);
var state_34997__$1 = (function (){var statearr_35017 = state_34997;
(statearr_35017[(25)] = inst_34974);

return statearr_35017;
})();
if(cljs.core.truth_(inst_34975)){
var statearr_35018_35082 = state_34997__$1;
(statearr_35018_35082[(1)] = (32));

} else {
var statearr_35019_35083 = state_34997__$1;
(statearr_35019_35083[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (32))){
var inst_34964 = (state_34997[(24)]);
var inst_34977 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34964);
var inst_34978 = cljs.core.pr_str.call(null,inst_34977);
var inst_34979 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_34978)].join('');
var inst_34980 = figwheel.client.utils.log.call(null,inst_34979);
var state_34997__$1 = state_34997;
var statearr_35020_35084 = state_34997__$1;
(statearr_35020_35084[(2)] = inst_34980);

(statearr_35020_35084[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (33))){
var state_34997__$1 = state_34997;
var statearr_35021_35085 = state_34997__$1;
(statearr_35021_35085[(2)] = null);

(statearr_35021_35085[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (13))){
var inst_34897 = (state_34997[(26)]);
var inst_34901 = cljs.core.chunk_first.call(null,inst_34897);
var inst_34902 = cljs.core.chunk_rest.call(null,inst_34897);
var inst_34903 = cljs.core.count.call(null,inst_34901);
var inst_34884 = inst_34902;
var inst_34885 = inst_34901;
var inst_34886 = inst_34903;
var inst_34887 = (0);
var state_34997__$1 = (function (){var statearr_35022 = state_34997;
(statearr_35022[(7)] = inst_34885);

(statearr_35022[(8)] = inst_34886);

(statearr_35022[(9)] = inst_34887);

(statearr_35022[(10)] = inst_34884);

return statearr_35022;
})();
var statearr_35023_35086 = state_34997__$1;
(statearr_35023_35086[(2)] = null);

(statearr_35023_35086[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (22))){
var inst_34936 = (state_34997[(16)]);
var inst_34949 = (state_34997[(2)]);
var inst_34950 = cljs.core.not_empty.call(null,inst_34936);
var state_34997__$1 = (function (){var statearr_35024 = state_34997;
(statearr_35024[(27)] = inst_34949);

return statearr_35024;
})();
if(cljs.core.truth_(inst_34950)){
var statearr_35025_35087 = state_34997__$1;
(statearr_35025_35087[(1)] = (23));

} else {
var statearr_35026_35088 = state_34997__$1;
(statearr_35026_35088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (36))){
var state_34997__$1 = state_34997;
var statearr_35027_35089 = state_34997__$1;
(statearr_35027_35089[(2)] = null);

(statearr_35027_35089[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (29))){
var inst_34965 = (state_34997[(28)]);
var inst_34968 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34965);
var inst_34969 = cljs.core.pr_str.call(null,inst_34968);
var inst_34970 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34969)].join('');
var inst_34971 = figwheel.client.utils.log.call(null,inst_34970);
var state_34997__$1 = state_34997;
var statearr_35028_35090 = state_34997__$1;
(statearr_35028_35090[(2)] = inst_34971);

(statearr_35028_35090[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (6))){
var inst_34918 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35029_35091 = state_34997__$1;
(statearr_35029_35091[(2)] = inst_34918);

(statearr_35029_35091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (28))){
var inst_34965 = (state_34997[(28)]);
var inst_34962 = (state_34997[(2)]);
var inst_34963 = cljs.core.get.call(null,inst_34962,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34964 = cljs.core.get.call(null,inst_34962,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_34965__$1 = cljs.core.get.call(null,inst_34962,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34966 = cljs.core.not_empty.call(null,inst_34965__$1);
var state_34997__$1 = (function (){var statearr_35030 = state_34997;
(statearr_35030[(24)] = inst_34964);

(statearr_35030[(28)] = inst_34965__$1);

(statearr_35030[(29)] = inst_34963);

return statearr_35030;
})();
if(cljs.core.truth_(inst_34966)){
var statearr_35031_35092 = state_34997__$1;
(statearr_35031_35092[(1)] = (29));

} else {
var statearr_35032_35093 = state_34997__$1;
(statearr_35032_35093[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (25))){
var inst_34995 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34997__$1,inst_34995);
} else {
if((state_val_34998 === (34))){
var inst_34963 = (state_34997[(29)]);
var inst_34983 = (state_34997[(2)]);
var inst_34984 = cljs.core.not_empty.call(null,inst_34963);
var state_34997__$1 = (function (){var statearr_35033 = state_34997;
(statearr_35033[(30)] = inst_34983);

return statearr_35033;
})();
if(cljs.core.truth_(inst_34984)){
var statearr_35034_35094 = state_34997__$1;
(statearr_35034_35094[(1)] = (35));

} else {
var statearr_35035_35095 = state_34997__$1;
(statearr_35035_35095[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (17))){
var inst_34923 = (state_34997[(22)]);
var state_34997__$1 = state_34997;
var statearr_35036_35096 = state_34997__$1;
(statearr_35036_35096[(2)] = inst_34923);

(statearr_35036_35096[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (3))){
var state_34997__$1 = state_34997;
var statearr_35037_35097 = state_34997__$1;
(statearr_35037_35097[(2)] = null);

(statearr_35037_35097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (12))){
var inst_34914 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35038_35098 = state_34997__$1;
(statearr_35038_35098[(2)] = inst_34914);

(statearr_35038_35098[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (2))){
var inst_34876 = (state_34997[(20)]);
var inst_34883 = cljs.core.seq.call(null,inst_34876);
var inst_34884 = inst_34883;
var inst_34885 = null;
var inst_34886 = (0);
var inst_34887 = (0);
var state_34997__$1 = (function (){var statearr_35039 = state_34997;
(statearr_35039[(7)] = inst_34885);

(statearr_35039[(8)] = inst_34886);

(statearr_35039[(9)] = inst_34887);

(statearr_35039[(10)] = inst_34884);

return statearr_35039;
})();
var statearr_35040_35099 = state_34997__$1;
(statearr_35040_35099[(2)] = null);

(statearr_35040_35099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (23))){
var inst_34929 = (state_34997[(12)]);
var inst_34934 = (state_34997[(13)]);
var inst_34933 = (state_34997[(14)]);
var inst_34956 = (state_34997[(19)]);
var inst_34930 = (state_34997[(15)]);
var inst_34936 = (state_34997[(16)]);
var inst_34952 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34955 = (function (){var files_not_loaded = inst_34936;
var res = inst_34934;
var res_SINGLEQUOTE_ = inst_34933;
var files_SINGLEQUOTE_ = inst_34930;
var all_files = inst_34929;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34929,inst_34934,inst_34933,inst_34956,inst_34930,inst_34936,inst_34952,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files){
return (function (p__34954){
var map__35041 = p__34954;
var map__35041__$1 = ((cljs.core.seq_QMARK_.call(null,map__35041))?cljs.core.apply.call(null,cljs.core.hash_map,map__35041):map__35041);
var meta_data = cljs.core.get.call(null,map__35041__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34929,inst_34934,inst_34933,inst_34956,inst_34930,inst_34936,inst_34952,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files))
})();
var inst_34956__$1 = cljs.core.group_by.call(null,inst_34955,inst_34936);
var inst_34957 = cljs.core.seq_QMARK_.call(null,inst_34956__$1);
var state_34997__$1 = (function (){var statearr_35042 = state_34997;
(statearr_35042[(31)] = inst_34952);

(statearr_35042[(19)] = inst_34956__$1);

return statearr_35042;
})();
if(inst_34957){
var statearr_35043_35100 = state_34997__$1;
(statearr_35043_35100[(1)] = (26));

} else {
var statearr_35044_35101 = state_34997__$1;
(statearr_35044_35101[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (35))){
var inst_34963 = (state_34997[(29)]);
var inst_34986 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34963);
var inst_34987 = cljs.core.pr_str.call(null,inst_34986);
var inst_34988 = [cljs.core.str("not required: "),cljs.core.str(inst_34987)].join('');
var inst_34989 = figwheel.client.utils.log.call(null,inst_34988);
var state_34997__$1 = state_34997;
var statearr_35045_35102 = state_34997__$1;
(statearr_35045_35102[(2)] = inst_34989);

(statearr_35045_35102[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (19))){
var inst_34929 = (state_34997[(12)]);
var inst_34934 = (state_34997[(13)]);
var inst_34933 = (state_34997[(14)]);
var inst_34930 = (state_34997[(15)]);
var inst_34933__$1 = (state_34997[(2)]);
var inst_34934__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34933__$1);
var inst_34935 = (function (){var res = inst_34934__$1;
var res_SINGLEQUOTE_ = inst_34933__$1;
var files_SINGLEQUOTE_ = inst_34930;
var all_files = inst_34929;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34929,inst_34934,inst_34933,inst_34930,inst_34933__$1,inst_34934__$1,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files){
return (function (p1__34669_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34669_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34929,inst_34934,inst_34933,inst_34930,inst_34933__$1,inst_34934__$1,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files))
})();
var inst_34936 = cljs.core.filter.call(null,inst_34935,inst_34933__$1);
var inst_34937 = cljs.core.not_empty.call(null,inst_34934__$1);
var state_34997__$1 = (function (){var statearr_35046 = state_34997;
(statearr_35046[(13)] = inst_34934__$1);

(statearr_35046[(14)] = inst_34933__$1);

(statearr_35046[(16)] = inst_34936);

return statearr_35046;
})();
if(cljs.core.truth_(inst_34937)){
var statearr_35047_35103 = state_34997__$1;
(statearr_35047_35103[(1)] = (20));

} else {
var statearr_35048_35104 = state_34997__$1;
(statearr_35048_35104[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (11))){
var state_34997__$1 = state_34997;
var statearr_35049_35105 = state_34997__$1;
(statearr_35049_35105[(2)] = null);

(statearr_35049_35105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (9))){
var inst_34916 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35050_35106 = state_34997__$1;
(statearr_35050_35106[(2)] = inst_34916);

(statearr_35050_35106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (5))){
var inst_34886 = (state_34997[(8)]);
var inst_34887 = (state_34997[(9)]);
var inst_34889 = (inst_34887 < inst_34886);
var inst_34890 = inst_34889;
var state_34997__$1 = state_34997;
if(cljs.core.truth_(inst_34890)){
var statearr_35051_35107 = state_34997__$1;
(statearr_35051_35107[(1)] = (7));

} else {
var statearr_35052_35108 = state_34997__$1;
(statearr_35052_35108[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (14))){
var inst_34897 = (state_34997[(26)]);
var inst_34906 = cljs.core.first.call(null,inst_34897);
var inst_34907 = figwheel.client.file_reloading.eval_body.call(null,inst_34906);
var inst_34908 = cljs.core.next.call(null,inst_34897);
var inst_34884 = inst_34908;
var inst_34885 = null;
var inst_34886 = (0);
var inst_34887 = (0);
var state_34997__$1 = (function (){var statearr_35053 = state_34997;
(statearr_35053[(7)] = inst_34885);

(statearr_35053[(8)] = inst_34886);

(statearr_35053[(32)] = inst_34907);

(statearr_35053[(9)] = inst_34887);

(statearr_35053[(10)] = inst_34884);

return statearr_35053;
})();
var statearr_35054_35109 = state_34997__$1;
(statearr_35054_35109[(2)] = null);

(statearr_35054_35109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (26))){
var inst_34956 = (state_34997[(19)]);
var inst_34959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34956);
var state_34997__$1 = state_34997;
var statearr_35055_35110 = state_34997__$1;
(statearr_35055_35110[(2)] = inst_34959);

(statearr_35055_35110[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (16))){
var inst_34923 = (state_34997[(22)]);
var inst_34925 = (function (){var all_files = inst_34923;
return ((function (all_files,inst_34923,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files){
return (function (p1__34668_SHARP_){
return cljs.core.update_in.call(null,p1__34668_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_34923,state_val_34998,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files))
})();
var inst_34926 = cljs.core.map.call(null,inst_34925,inst_34923);
var state_34997__$1 = state_34997;
var statearr_35056_35111 = state_34997__$1;
(statearr_35056_35111[(2)] = inst_34926);

(statearr_35056_35111[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (30))){
var state_34997__$1 = state_34997;
var statearr_35057_35112 = state_34997__$1;
(statearr_35057_35112[(2)] = null);

(statearr_35057_35112[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (10))){
var inst_34897 = (state_34997[(26)]);
var inst_34899 = cljs.core.chunked_seq_QMARK_.call(null,inst_34897);
var state_34997__$1 = state_34997;
if(inst_34899){
var statearr_35058_35113 = state_34997__$1;
(statearr_35058_35113[(1)] = (13));

} else {
var statearr_35059_35114 = state_34997__$1;
(statearr_35059_35114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (18))){
var inst_34929 = (state_34997[(12)]);
var inst_34930 = (state_34997[(15)]);
var inst_34929__$1 = (state_34997[(2)]);
var inst_34930__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_34929__$1);
var inst_34931 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34930__$1);
var state_34997__$1 = (function (){var statearr_35060 = state_34997;
(statearr_35060[(12)] = inst_34929__$1);

(statearr_35060[(15)] = inst_34930__$1);

return statearr_35060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34997__$1,(19),inst_34931);
} else {
if((state_val_34998 === (37))){
var inst_34992 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35061_35115 = state_34997__$1;
(statearr_35061_35115[(2)] = inst_34992);

(statearr_35061_35115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (8))){
var inst_34897 = (state_34997[(26)]);
var inst_34884 = (state_34997[(10)]);
var inst_34897__$1 = cljs.core.seq.call(null,inst_34884);
var state_34997__$1 = (function (){var statearr_35062 = state_34997;
(statearr_35062[(26)] = inst_34897__$1);

return statearr_35062;
})();
if(inst_34897__$1){
var statearr_35063_35116 = state_34997__$1;
(statearr_35063_35116[(1)] = (10));

} else {
var statearr_35064_35117 = state_34997__$1;
(statearr_35064_35117[(1)] = (11));

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
});})(c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files))
;
return ((function (switch__19199__auto__,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_35068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35068[(0)] = state_machine__19200__auto__);

(statearr_35068[(1)] = (1));

return statearr_35068;
});
var state_machine__19200__auto____1 = (function (state_34997){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_34997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e35069){if((e35069 instanceof Object)){
var ex__19203__auto__ = e35069;
var statearr_35070_35118 = state_34997;
(statearr_35070_35118[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35119 = state_34997;
state_34997 = G__35119;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_34997){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_34997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files))
})();
var state__19257__auto__ = (function (){var statearr_35071 = f__19256__auto__.call(null);
(statearr_35071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_35071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__,map__34872,map__34872__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34873,map__34873__$1,msg,files))
);

return c__19255__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__35122,link){
var map__35124 = p__35122;
var map__35124__$1 = ((cljs.core.seq_QMARK_.call(null,map__35124))?cljs.core.apply.call(null,cljs.core.hash_map,map__35124):map__35124);
var file = cljs.core.get.call(null,map__35124__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__35124,map__35124__$1,file){
return (function (p1__35120_SHARP_,p2__35121_SHARP_){
if(cljs.core._EQ_.call(null,p1__35120_SHARP_,p2__35121_SHARP_)){
return p1__35120_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__35124,map__35124__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35128){
var map__35129 = p__35128;
var map__35129__$1 = ((cljs.core.seq_QMARK_.call(null,map__35129))?cljs.core.apply.call(null,cljs.core.hash_map,map__35129):map__35129);
var current_url_length = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35125_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35125_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__35130){
var map__35132 = p__35130;
var map__35132__$1 = ((cljs.core.seq_QMARK_.call(null,map__35132))?cljs.core.apply.call(null,cljs.core.hash_map,map__35132):map__35132);
var f_data = map__35132__$1;
var request_url = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__35133,files_msg){
var map__35155 = p__35133;
var map__35155__$1 = ((cljs.core.seq_QMARK_.call(null,map__35155))?cljs.core.apply.call(null,cljs.core.hash_map,map__35155):map__35155);
var opts = map__35155__$1;
var on_cssload = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35156_35176 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35157_35177 = null;
var count__35158_35178 = (0);
var i__35159_35179 = (0);
while(true){
if((i__35159_35179 < count__35158_35178)){
var f_35180 = cljs.core._nth.call(null,chunk__35157_35177,i__35159_35179);
figwheel.client.file_reloading.reload_css_file.call(null,f_35180);

var G__35181 = seq__35156_35176;
var G__35182 = chunk__35157_35177;
var G__35183 = count__35158_35178;
var G__35184 = (i__35159_35179 + (1));
seq__35156_35176 = G__35181;
chunk__35157_35177 = G__35182;
count__35158_35178 = G__35183;
i__35159_35179 = G__35184;
continue;
} else {
var temp__4126__auto___35185 = cljs.core.seq.call(null,seq__35156_35176);
if(temp__4126__auto___35185){
var seq__35156_35186__$1 = temp__4126__auto___35185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35156_35186__$1)){
var c__16933__auto___35187 = cljs.core.chunk_first.call(null,seq__35156_35186__$1);
var G__35188 = cljs.core.chunk_rest.call(null,seq__35156_35186__$1);
var G__35189 = c__16933__auto___35187;
var G__35190 = cljs.core.count.call(null,c__16933__auto___35187);
var G__35191 = (0);
seq__35156_35176 = G__35188;
chunk__35157_35177 = G__35189;
count__35158_35178 = G__35190;
i__35159_35179 = G__35191;
continue;
} else {
var f_35192 = cljs.core.first.call(null,seq__35156_35186__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35192);

var G__35193 = cljs.core.next.call(null,seq__35156_35186__$1);
var G__35194 = null;
var G__35195 = (0);
var G__35196 = (0);
seq__35156_35176 = G__35193;
chunk__35157_35177 = G__35194;
count__35158_35178 = G__35195;
i__35159_35179 = G__35196;
continue;
}
} else {
}
}
break;
}

var c__19255__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19255__auto__,map__35155,map__35155__$1,opts,on_cssload){
return (function (){
var f__19256__auto__ = (function (){var switch__19199__auto__ = ((function (c__19255__auto__,map__35155,map__35155__$1,opts,on_cssload){
return (function (state_35166){
var state_val_35167 = (state_35166[(1)]);
if((state_val_35167 === (2))){
var inst_35162 = (state_35166[(2)]);
var inst_35163 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35164 = on_cssload.call(null,inst_35163);
var state_35166__$1 = (function (){var statearr_35168 = state_35166;
(statearr_35168[(7)] = inst_35162);

return statearr_35168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35166__$1,inst_35164);
} else {
if((state_val_35167 === (1))){
var inst_35160 = cljs.core.async.timeout.call(null,(100));
var state_35166__$1 = state_35166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35166__$1,(2),inst_35160);
} else {
return null;
}
}
});})(c__19255__auto__,map__35155,map__35155__$1,opts,on_cssload))
;
return ((function (switch__19199__auto__,c__19255__auto__,map__35155,map__35155__$1,opts,on_cssload){
return (function() {
var state_machine__19200__auto__ = null;
var state_machine__19200__auto____0 = (function (){
var statearr_35172 = [null,null,null,null,null,null,null,null];
(statearr_35172[(0)] = state_machine__19200__auto__);

(statearr_35172[(1)] = (1));

return statearr_35172;
});
var state_machine__19200__auto____1 = (function (state_35166){
while(true){
var ret_value__19201__auto__ = (function (){try{while(true){
var result__19202__auto__ = switch__19199__auto__.call(null,state_35166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19202__auto__;
}
break;
}
}catch (e35173){if((e35173 instanceof Object)){
var ex__19203__auto__ = e35173;
var statearr_35174_35197 = state_35166;
(statearr_35174_35197[(5)] = ex__19203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35198 = state_35166;
state_35166 = G__35198;
continue;
} else {
return ret_value__19201__auto__;
}
break;
}
});
state_machine__19200__auto__ = function(state_35166){
switch(arguments.length){
case 0:
return state_machine__19200__auto____0.call(this);
case 1:
return state_machine__19200__auto____1.call(this,state_35166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19200__auto____0;
state_machine__19200__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19200__auto____1;
return state_machine__19200__auto__;
})()
;})(switch__19199__auto__,c__19255__auto__,map__35155,map__35155__$1,opts,on_cssload))
})();
var state__19257__auto__ = (function (){var statearr_35175 = f__19256__auto__.call(null);
(statearr_35175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19255__auto__);

return statearr_35175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19257__auto__);
});})(c__19255__auto__,map__35155,map__35155__$1,opts,on_cssload))
);

return c__19255__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1428567724350