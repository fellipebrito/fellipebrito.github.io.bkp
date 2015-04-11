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
return cljs.core.reduce.call(null,(function (p1__56500_SHARP_,p2__56501_SHARP_){
var and__16133__auto__ = p1__56500_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__56501_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__56503_SHARP_,p2__56502_SHARP_){
return [cljs.core.str(p2__56502_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__56504){
var map__56505 = p__56504;
var map__56505__$1 = ((cljs.core.seq_QMARK_.call(null,map__56505))?cljs.core.apply.call(null,cljs.core.hash_map,map__56505):map__56505);
var file = cljs.core.get.call(null,map__56505__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__56506){
var map__56507 = p__56506;
var map__56507__$1 = ((cljs.core.seq_QMARK_.call(null,map__56507))?cljs.core.apply.call(null,cljs.core.hash_map,map__56507):map__56507);
var namespace = cljs.core.get.call(null,map__56507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e56508){if((e56508 instanceof Error)){
var e = e56508;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e56508;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__56509,callback){
var map__56511 = p__56509;
var map__56511__$1 = ((cljs.core.seq_QMARK_.call(null,map__56511))?cljs.core.apply.call(null,cljs.core.hash_map,map__56511):map__56511);
var file_msg = map__56511__$1;
var request_url = cljs.core.get.call(null,map__56511__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__56511,map__56511__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__56511,map__56511__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__56512){
var map__56514 = p__56512;
var map__56514__$1 = ((cljs.core.seq_QMARK_.call(null,map__56514))?cljs.core.apply.call(null,cljs.core.hash_map,map__56514):map__56514);
var file_msg = map__56514__$1;
var meta_data = cljs.core.get.call(null,map__56514__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__56514__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__56515,callback){
var map__56517 = p__56515;
var map__56517__$1 = ((cljs.core.seq_QMARK_.call(null,map__56517))?cljs.core.apply.call(null,cljs.core.hash_map,map__56517):map__56517);
var file_msg = map__56517__$1;
var namespace = cljs.core.get.call(null,map__56517__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__56517__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__19254__auto___56604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___56604,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___56604,out){
return (function (state_56586){
var state_val_56587 = (state_56586[(1)]);
if((state_val_56587 === (7))){
var inst_56570 = (state_56586[(7)]);
var inst_56576 = (state_56586[(2)]);
var inst_56577 = cljs.core.async.put_BANG_.call(null,out,inst_56576);
var inst_56566 = inst_56570;
var state_56586__$1 = (function (){var statearr_56588 = state_56586;
(statearr_56588[(8)] = inst_56566);

(statearr_56588[(9)] = inst_56577);

return statearr_56588;
})();
var statearr_56589_56605 = state_56586__$1;
(statearr_56589_56605[(2)] = null);

(statearr_56589_56605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56587 === (6))){
var inst_56582 = (state_56586[(2)]);
var state_56586__$1 = state_56586;
var statearr_56590_56606 = state_56586__$1;
(statearr_56590_56606[(2)] = inst_56582);

(statearr_56590_56606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56587 === (5))){
var inst_56580 = cljs.core.async.close_BANG_.call(null,out);
var state_56586__$1 = state_56586;
var statearr_56591_56607 = state_56586__$1;
(statearr_56591_56607[(2)] = inst_56580);

(statearr_56591_56607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56587 === (4))){
var inst_56569 = (state_56586[(10)]);
var inst_56574 = figwheel.client.file_reloading.reload_js_file.call(null,inst_56569);
var state_56586__$1 = state_56586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56586__$1,(7),inst_56574);
} else {
if((state_val_56587 === (3))){
var inst_56584 = (state_56586[(2)]);
var state_56586__$1 = state_56586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56586__$1,inst_56584);
} else {
if((state_val_56587 === (2))){
var inst_56566 = (state_56586[(8)]);
var inst_56569 = (state_56586[(10)]);
var inst_56569__$1 = cljs.core.nth.call(null,inst_56566,(0),null);
var inst_56570 = cljs.core.nthnext.call(null,inst_56566,(1));
var inst_56571 = (inst_56569__$1 == null);
var inst_56572 = cljs.core.not.call(null,inst_56571);
var state_56586__$1 = (function (){var statearr_56592 = state_56586;
(statearr_56592[(7)] = inst_56570);

(statearr_56592[(10)] = inst_56569__$1);

return statearr_56592;
})();
if(inst_56572){
var statearr_56593_56608 = state_56586__$1;
(statearr_56593_56608[(1)] = (4));

} else {
var statearr_56594_56609 = state_56586__$1;
(statearr_56594_56609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56587 === (1))){
var inst_56564 = cljs.core.nth.call(null,files,(0),null);
var inst_56565 = cljs.core.nthnext.call(null,files,(1));
var inst_56566 = files;
var state_56586__$1 = (function (){var statearr_56595 = state_56586;
(statearr_56595[(11)] = inst_56564);

(statearr_56595[(12)] = inst_56565);

(statearr_56595[(8)] = inst_56566);

return statearr_56595;
})();
var statearr_56596_56610 = state_56586__$1;
(statearr_56596_56610[(2)] = null);

(statearr_56596_56610[(1)] = (2));


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
});})(c__19254__auto___56604,out))
;
return ((function (switch__19198__auto__,c__19254__auto___56604,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_56600 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56600[(0)] = state_machine__19199__auto__);

(statearr_56600[(1)] = (1));

return statearr_56600;
});
var state_machine__19199__auto____1 = (function (state_56586){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_56586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e56601){if((e56601 instanceof Object)){
var ex__19202__auto__ = e56601;
var statearr_56602_56611 = state_56586;
(statearr_56602_56611[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56612 = state_56586;
state_56586 = G__56612;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_56586){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_56586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___56604,out))
})();
var state__19256__auto__ = (function (){var statearr_56603 = f__19255__auto__.call(null);
(statearr_56603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___56604);

return statearr_56603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___56604,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__56613,p__56614){
var map__56617 = p__56613;
var map__56617__$1 = ((cljs.core.seq_QMARK_.call(null,map__56617))?cljs.core.apply.call(null,cljs.core.hash_map,map__56617):map__56617);
var opts = map__56617__$1;
var url_rewriter = cljs.core.get.call(null,map__56617__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__56618 = p__56614;
var map__56618__$1 = ((cljs.core.seq_QMARK_.call(null,map__56618))?cljs.core.apply.call(null,cljs.core.hash_map,map__56618):map__56618);
var file_msg = map__56618__$1;
var file = cljs.core.get.call(null,map__56618__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__56619){
var map__56622 = p__56619;
var map__56622__$1 = ((cljs.core.seq_QMARK_.call(null,map__56622))?cljs.core.apply.call(null,cljs.core.hash_map,map__56622):map__56622);
var file = cljs.core.get.call(null,map__56622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__56622__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e56623){var e = e56623;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__56628,p__56629){
var map__56830 = p__56628;
var map__56830__$1 = ((cljs.core.seq_QMARK_.call(null,map__56830))?cljs.core.apply.call(null,cljs.core.hash_map,map__56830):map__56830);
var opts = map__56830__$1;
var load_unchanged_files = cljs.core.get.call(null,map__56830__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__56830__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__56830__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__56831 = p__56629;
var map__56831__$1 = ((cljs.core.seq_QMARK_.call(null,map__56831))?cljs.core.apply.call(null,cljs.core.hash_map,map__56831):map__56831);
var msg = map__56831__$1;
var files = cljs.core.get.call(null,map__56831__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files){
return (function (state_56955){
var state_val_56956 = (state_56955[(1)]);
if((state_val_56956 === (7))){
var inst_56844 = (state_56955[(7)]);
var inst_56845 = (state_56955[(8)]);
var inst_56843 = (state_56955[(9)]);
var inst_56842 = (state_56955[(10)]);
var inst_56850 = cljs.core._nth.call(null,inst_56843,inst_56845);
var inst_56851 = figwheel.client.file_reloading.eval_body.call(null,inst_56850);
var inst_56852 = (inst_56845 + (1));
var tmp56957 = inst_56844;
var tmp56958 = inst_56843;
var tmp56959 = inst_56842;
var inst_56842__$1 = tmp56959;
var inst_56843__$1 = tmp56958;
var inst_56844__$1 = tmp56957;
var inst_56845__$1 = inst_56852;
var state_56955__$1 = (function (){var statearr_56960 = state_56955;
(statearr_56960[(7)] = inst_56844__$1);

(statearr_56960[(11)] = inst_56851);

(statearr_56960[(8)] = inst_56845__$1);

(statearr_56960[(9)] = inst_56843__$1);

(statearr_56960[(10)] = inst_56842__$1);

return statearr_56960;
})();
var statearr_56961_57030 = state_56955__$1;
(statearr_56961_57030[(2)] = null);

(statearr_56961_57030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (20))){
var inst_56892 = (state_56955[(12)]);
var inst_56891 = (state_56955[(13)]);
var inst_56887 = (state_56955[(14)]);
var inst_56888 = (state_56955[(15)]);
var inst_56894 = (state_56955[(16)]);
var inst_56897 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_56899 = (function (){var files_not_loaded = inst_56894;
var res = inst_56892;
var res_SINGLEQUOTE_ = inst_56891;
var files_SINGLEQUOTE_ = inst_56888;
var all_files = inst_56887;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_56892,inst_56891,inst_56887,inst_56888,inst_56894,inst_56897,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files){
return (function (p__56898){
var map__56962 = p__56898;
var map__56962__$1 = ((cljs.core.seq_QMARK_.call(null,map__56962))?cljs.core.apply.call(null,cljs.core.hash_map,map__56962):map__56962);
var file = cljs.core.get.call(null,map__56962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__56962__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_56892,inst_56891,inst_56887,inst_56888,inst_56894,inst_56897,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files))
})();
var inst_56900 = cljs.core.map.call(null,inst_56899,inst_56892);
var inst_56901 = cljs.core.pr_str.call(null,inst_56900);
var inst_56902 = figwheel.client.utils.log.call(null,inst_56901);
var inst_56903 = (function (){var files_not_loaded = inst_56894;
var res = inst_56892;
var res_SINGLEQUOTE_ = inst_56891;
var files_SINGLEQUOTE_ = inst_56888;
var all_files = inst_56887;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_56892,inst_56891,inst_56887,inst_56888,inst_56894,inst_56897,inst_56899,inst_56900,inst_56901,inst_56902,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_56892,inst_56891,inst_56887,inst_56888,inst_56894,inst_56897,inst_56899,inst_56900,inst_56901,inst_56902,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files))
})();
var inst_56904 = setTimeout(inst_56903,(10));
var state_56955__$1 = (function (){var statearr_56963 = state_56955;
(statearr_56963[(17)] = inst_56902);

(statearr_56963[(18)] = inst_56897);

return statearr_56963;
})();
var statearr_56964_57031 = state_56955__$1;
(statearr_56964_57031[(2)] = inst_56904);

(statearr_56964_57031[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (27))){
var inst_56914 = (state_56955[(19)]);
var state_56955__$1 = state_56955;
var statearr_56965_57032 = state_56955__$1;
(statearr_56965_57032[(2)] = inst_56914);

(statearr_56965_57032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (1))){
var inst_56834 = (state_56955[(20)]);
var inst_56832 = before_jsload.call(null,files);
var inst_56833 = (function (){return ((function (inst_56834,inst_56832,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files){
return (function (p1__56624_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56624_SHARP_);
});
;})(inst_56834,inst_56832,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files))
})();
var inst_56834__$1 = cljs.core.filter.call(null,inst_56833,files);
var inst_56835 = cljs.core.not_empty.call(null,inst_56834__$1);
var state_56955__$1 = (function (){var statearr_56966 = state_56955;
(statearr_56966[(21)] = inst_56832);

(statearr_56966[(20)] = inst_56834__$1);

return statearr_56966;
})();
if(cljs.core.truth_(inst_56835)){
var statearr_56967_57033 = state_56955__$1;
(statearr_56967_57033[(1)] = (2));

} else {
var statearr_56968_57034 = state_56955__$1;
(statearr_56968_57034[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (24))){
var state_56955__$1 = state_56955;
var statearr_56969_57035 = state_56955__$1;
(statearr_56969_57035[(2)] = null);

(statearr_56969_57035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (4))){
var inst_56879 = (state_56955[(2)]);
var inst_56880 = (function (){return ((function (inst_56879,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files){
return (function (p1__56625_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56625_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56625_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_56879,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files))
})();
var inst_56881 = cljs.core.filter.call(null,inst_56880,files);
var state_56955__$1 = (function (){var statearr_56970 = state_56955;
(statearr_56970[(22)] = inst_56879);

(statearr_56970[(23)] = inst_56881);

return statearr_56970;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_56971_57036 = state_56955__$1;
(statearr_56971_57036[(1)] = (16));

} else {
var statearr_56972_57037 = state_56955__$1;
(statearr_56972_57037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (15))){
var inst_56869 = (state_56955[(2)]);
var state_56955__$1 = state_56955;
var statearr_56973_57038 = state_56955__$1;
(statearr_56973_57038[(2)] = inst_56869);

(statearr_56973_57038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (21))){
var state_56955__$1 = state_56955;
var statearr_56974_57039 = state_56955__$1;
(statearr_56974_57039[(2)] = null);

(statearr_56974_57039[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (31))){
var inst_56922 = (state_56955[(24)]);
var inst_56932 = (state_56955[(2)]);
var inst_56933 = cljs.core.not_empty.call(null,inst_56922);
var state_56955__$1 = (function (){var statearr_56975 = state_56955;
(statearr_56975[(25)] = inst_56932);

return statearr_56975;
})();
if(cljs.core.truth_(inst_56933)){
var statearr_56976_57040 = state_56955__$1;
(statearr_56976_57040[(1)] = (32));

} else {
var statearr_56977_57041 = state_56955__$1;
(statearr_56977_57041[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (32))){
var inst_56922 = (state_56955[(24)]);
var inst_56935 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56922);
var inst_56936 = cljs.core.pr_str.call(null,inst_56935);
var inst_56937 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_56936)].join('');
var inst_56938 = figwheel.client.utils.log.call(null,inst_56937);
var state_56955__$1 = state_56955;
var statearr_56978_57042 = state_56955__$1;
(statearr_56978_57042[(2)] = inst_56938);

(statearr_56978_57042[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (33))){
var state_56955__$1 = state_56955;
var statearr_56979_57043 = state_56955__$1;
(statearr_56979_57043[(2)] = null);

(statearr_56979_57043[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (13))){
var inst_56855 = (state_56955[(26)]);
var inst_56859 = cljs.core.chunk_first.call(null,inst_56855);
var inst_56860 = cljs.core.chunk_rest.call(null,inst_56855);
var inst_56861 = cljs.core.count.call(null,inst_56859);
var inst_56842 = inst_56860;
var inst_56843 = inst_56859;
var inst_56844 = inst_56861;
var inst_56845 = (0);
var state_56955__$1 = (function (){var statearr_56980 = state_56955;
(statearr_56980[(7)] = inst_56844);

(statearr_56980[(8)] = inst_56845);

(statearr_56980[(9)] = inst_56843);

(statearr_56980[(10)] = inst_56842);

return statearr_56980;
})();
var statearr_56981_57044 = state_56955__$1;
(statearr_56981_57044[(2)] = null);

(statearr_56981_57044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (22))){
var inst_56894 = (state_56955[(16)]);
var inst_56907 = (state_56955[(2)]);
var inst_56908 = cljs.core.not_empty.call(null,inst_56894);
var state_56955__$1 = (function (){var statearr_56982 = state_56955;
(statearr_56982[(27)] = inst_56907);

return statearr_56982;
})();
if(cljs.core.truth_(inst_56908)){
var statearr_56983_57045 = state_56955__$1;
(statearr_56983_57045[(1)] = (23));

} else {
var statearr_56984_57046 = state_56955__$1;
(statearr_56984_57046[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (36))){
var state_56955__$1 = state_56955;
var statearr_56985_57047 = state_56955__$1;
(statearr_56985_57047[(2)] = null);

(statearr_56985_57047[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (29))){
var inst_56923 = (state_56955[(28)]);
var inst_56926 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56923);
var inst_56927 = cljs.core.pr_str.call(null,inst_56926);
var inst_56928 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_56927)].join('');
var inst_56929 = figwheel.client.utils.log.call(null,inst_56928);
var state_56955__$1 = state_56955;
var statearr_56986_57048 = state_56955__$1;
(statearr_56986_57048[(2)] = inst_56929);

(statearr_56986_57048[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (6))){
var inst_56876 = (state_56955[(2)]);
var state_56955__$1 = state_56955;
var statearr_56987_57049 = state_56955__$1;
(statearr_56987_57049[(2)] = inst_56876);

(statearr_56987_57049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (28))){
var inst_56923 = (state_56955[(28)]);
var inst_56920 = (state_56955[(2)]);
var inst_56921 = cljs.core.get.call(null,inst_56920,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_56922 = cljs.core.get.call(null,inst_56920,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_56923__$1 = cljs.core.get.call(null,inst_56920,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_56924 = cljs.core.not_empty.call(null,inst_56923__$1);
var state_56955__$1 = (function (){var statearr_56988 = state_56955;
(statearr_56988[(24)] = inst_56922);

(statearr_56988[(29)] = inst_56921);

(statearr_56988[(28)] = inst_56923__$1);

return statearr_56988;
})();
if(cljs.core.truth_(inst_56924)){
var statearr_56989_57050 = state_56955__$1;
(statearr_56989_57050[(1)] = (29));

} else {
var statearr_56990_57051 = state_56955__$1;
(statearr_56990_57051[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (25))){
var inst_56953 = (state_56955[(2)]);
var state_56955__$1 = state_56955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56955__$1,inst_56953);
} else {
if((state_val_56956 === (34))){
var inst_56921 = (state_56955[(29)]);
var inst_56941 = (state_56955[(2)]);
var inst_56942 = cljs.core.not_empty.call(null,inst_56921);
var state_56955__$1 = (function (){var statearr_56991 = state_56955;
(statearr_56991[(30)] = inst_56941);

return statearr_56991;
})();
if(cljs.core.truth_(inst_56942)){
var statearr_56992_57052 = state_56955__$1;
(statearr_56992_57052[(1)] = (35));

} else {
var statearr_56993_57053 = state_56955__$1;
(statearr_56993_57053[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (17))){
var inst_56881 = (state_56955[(23)]);
var state_56955__$1 = state_56955;
var statearr_56994_57054 = state_56955__$1;
(statearr_56994_57054[(2)] = inst_56881);

(statearr_56994_57054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (3))){
var state_56955__$1 = state_56955;
var statearr_56995_57055 = state_56955__$1;
(statearr_56995_57055[(2)] = null);

(statearr_56995_57055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (12))){
var inst_56872 = (state_56955[(2)]);
var state_56955__$1 = state_56955;
var statearr_56996_57056 = state_56955__$1;
(statearr_56996_57056[(2)] = inst_56872);

(statearr_56996_57056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (2))){
var inst_56834 = (state_56955[(20)]);
var inst_56841 = cljs.core.seq.call(null,inst_56834);
var inst_56842 = inst_56841;
var inst_56843 = null;
var inst_56844 = (0);
var inst_56845 = (0);
var state_56955__$1 = (function (){var statearr_56997 = state_56955;
(statearr_56997[(7)] = inst_56844);

(statearr_56997[(8)] = inst_56845);

(statearr_56997[(9)] = inst_56843);

(statearr_56997[(10)] = inst_56842);

return statearr_56997;
})();
var statearr_56998_57057 = state_56955__$1;
(statearr_56998_57057[(2)] = null);

(statearr_56998_57057[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (23))){
var inst_56892 = (state_56955[(12)]);
var inst_56891 = (state_56955[(13)]);
var inst_56914 = (state_56955[(19)]);
var inst_56887 = (state_56955[(14)]);
var inst_56888 = (state_56955[(15)]);
var inst_56894 = (state_56955[(16)]);
var inst_56910 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_56913 = (function (){var files_not_loaded = inst_56894;
var res = inst_56892;
var res_SINGLEQUOTE_ = inst_56891;
var files_SINGLEQUOTE_ = inst_56888;
var all_files = inst_56887;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_56892,inst_56891,inst_56914,inst_56887,inst_56888,inst_56894,inst_56910,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files){
return (function (p__56912){
var map__56999 = p__56912;
var map__56999__$1 = ((cljs.core.seq_QMARK_.call(null,map__56999))?cljs.core.apply.call(null,cljs.core.hash_map,map__56999):map__56999);
var meta_data = cljs.core.get.call(null,map__56999__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_56892,inst_56891,inst_56914,inst_56887,inst_56888,inst_56894,inst_56910,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files))
})();
var inst_56914__$1 = cljs.core.group_by.call(null,inst_56913,inst_56894);
var inst_56915 = cljs.core.seq_QMARK_.call(null,inst_56914__$1);
var state_56955__$1 = (function (){var statearr_57000 = state_56955;
(statearr_57000[(31)] = inst_56910);

(statearr_57000[(19)] = inst_56914__$1);

return statearr_57000;
})();
if(inst_56915){
var statearr_57001_57058 = state_56955__$1;
(statearr_57001_57058[(1)] = (26));

} else {
var statearr_57002_57059 = state_56955__$1;
(statearr_57002_57059[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (35))){
var inst_56921 = (state_56955[(29)]);
var inst_56944 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56921);
var inst_56945 = cljs.core.pr_str.call(null,inst_56944);
var inst_56946 = [cljs.core.str("not required: "),cljs.core.str(inst_56945)].join('');
var inst_56947 = figwheel.client.utils.log.call(null,inst_56946);
var state_56955__$1 = state_56955;
var statearr_57003_57060 = state_56955__$1;
(statearr_57003_57060[(2)] = inst_56947);

(statearr_57003_57060[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (19))){
var inst_56892 = (state_56955[(12)]);
var inst_56891 = (state_56955[(13)]);
var inst_56887 = (state_56955[(14)]);
var inst_56888 = (state_56955[(15)]);
var inst_56891__$1 = (state_56955[(2)]);
var inst_56892__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_56891__$1);
var inst_56893 = (function (){var res = inst_56892__$1;
var res_SINGLEQUOTE_ = inst_56891__$1;
var files_SINGLEQUOTE_ = inst_56888;
var all_files = inst_56887;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_56892,inst_56891,inst_56887,inst_56888,inst_56891__$1,inst_56892__$1,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files){
return (function (p1__56627_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__56627_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_56892,inst_56891,inst_56887,inst_56888,inst_56891__$1,inst_56892__$1,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files))
})();
var inst_56894 = cljs.core.filter.call(null,inst_56893,inst_56891__$1);
var inst_56895 = cljs.core.not_empty.call(null,inst_56892__$1);
var state_56955__$1 = (function (){var statearr_57004 = state_56955;
(statearr_57004[(12)] = inst_56892__$1);

(statearr_57004[(13)] = inst_56891__$1);

(statearr_57004[(16)] = inst_56894);

return statearr_57004;
})();
if(cljs.core.truth_(inst_56895)){
var statearr_57005_57061 = state_56955__$1;
(statearr_57005_57061[(1)] = (20));

} else {
var statearr_57006_57062 = state_56955__$1;
(statearr_57006_57062[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (11))){
var state_56955__$1 = state_56955;
var statearr_57007_57063 = state_56955__$1;
(statearr_57007_57063[(2)] = null);

(statearr_57007_57063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (9))){
var inst_56874 = (state_56955[(2)]);
var state_56955__$1 = state_56955;
var statearr_57008_57064 = state_56955__$1;
(statearr_57008_57064[(2)] = inst_56874);

(statearr_57008_57064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (5))){
var inst_56844 = (state_56955[(7)]);
var inst_56845 = (state_56955[(8)]);
var inst_56847 = (inst_56845 < inst_56844);
var inst_56848 = inst_56847;
var state_56955__$1 = state_56955;
if(cljs.core.truth_(inst_56848)){
var statearr_57009_57065 = state_56955__$1;
(statearr_57009_57065[(1)] = (7));

} else {
var statearr_57010_57066 = state_56955__$1;
(statearr_57010_57066[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (14))){
var inst_56855 = (state_56955[(26)]);
var inst_56864 = cljs.core.first.call(null,inst_56855);
var inst_56865 = figwheel.client.file_reloading.eval_body.call(null,inst_56864);
var inst_56866 = cljs.core.next.call(null,inst_56855);
var inst_56842 = inst_56866;
var inst_56843 = null;
var inst_56844 = (0);
var inst_56845 = (0);
var state_56955__$1 = (function (){var statearr_57011 = state_56955;
(statearr_57011[(32)] = inst_56865);

(statearr_57011[(7)] = inst_56844);

(statearr_57011[(8)] = inst_56845);

(statearr_57011[(9)] = inst_56843);

(statearr_57011[(10)] = inst_56842);

return statearr_57011;
})();
var statearr_57012_57067 = state_56955__$1;
(statearr_57012_57067[(2)] = null);

(statearr_57012_57067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (26))){
var inst_56914 = (state_56955[(19)]);
var inst_56917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56914);
var state_56955__$1 = state_56955;
var statearr_57013_57068 = state_56955__$1;
(statearr_57013_57068[(2)] = inst_56917);

(statearr_57013_57068[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (16))){
var inst_56881 = (state_56955[(23)]);
var inst_56883 = (function (){var all_files = inst_56881;
return ((function (all_files,inst_56881,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files){
return (function (p1__56626_SHARP_){
return cljs.core.update_in.call(null,p1__56626_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_56881,state_val_56956,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files))
})();
var inst_56884 = cljs.core.map.call(null,inst_56883,inst_56881);
var state_56955__$1 = state_56955;
var statearr_57014_57069 = state_56955__$1;
(statearr_57014_57069[(2)] = inst_56884);

(statearr_57014_57069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (30))){
var state_56955__$1 = state_56955;
var statearr_57015_57070 = state_56955__$1;
(statearr_57015_57070[(2)] = null);

(statearr_57015_57070[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (10))){
var inst_56855 = (state_56955[(26)]);
var inst_56857 = cljs.core.chunked_seq_QMARK_.call(null,inst_56855);
var state_56955__$1 = state_56955;
if(inst_56857){
var statearr_57016_57071 = state_56955__$1;
(statearr_57016_57071[(1)] = (13));

} else {
var statearr_57017_57072 = state_56955__$1;
(statearr_57017_57072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (18))){
var inst_56887 = (state_56955[(14)]);
var inst_56888 = (state_56955[(15)]);
var inst_56887__$1 = (state_56955[(2)]);
var inst_56888__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_56887__$1);
var inst_56889 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_56888__$1);
var state_56955__$1 = (function (){var statearr_57018 = state_56955;
(statearr_57018[(14)] = inst_56887__$1);

(statearr_57018[(15)] = inst_56888__$1);

return statearr_57018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56955__$1,(19),inst_56889);
} else {
if((state_val_56956 === (37))){
var inst_56950 = (state_56955[(2)]);
var state_56955__$1 = state_56955;
var statearr_57019_57073 = state_56955__$1;
(statearr_57019_57073[(2)] = inst_56950);

(statearr_57019_57073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56956 === (8))){
var inst_56842 = (state_56955[(10)]);
var inst_56855 = (state_56955[(26)]);
var inst_56855__$1 = cljs.core.seq.call(null,inst_56842);
var state_56955__$1 = (function (){var statearr_57020 = state_56955;
(statearr_57020[(26)] = inst_56855__$1);

return statearr_57020;
})();
if(inst_56855__$1){
var statearr_57021_57074 = state_56955__$1;
(statearr_57021_57074[(1)] = (10));

} else {
var statearr_57022_57075 = state_56955__$1;
(statearr_57022_57075[(1)] = (11));

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
});})(c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files))
;
return ((function (switch__19198__auto__,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_57026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57026[(0)] = state_machine__19199__auto__);

(statearr_57026[(1)] = (1));

return statearr_57026;
});
var state_machine__19199__auto____1 = (function (state_56955){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_56955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e57027){if((e57027 instanceof Object)){
var ex__19202__auto__ = e57027;
var statearr_57028_57076 = state_56955;
(statearr_57028_57076[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57077 = state_56955;
state_56955 = G__57077;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_56955){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_56955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files))
})();
var state__19256__auto__ = (function (){var statearr_57029 = f__19255__auto__.call(null);
(statearr_57029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_57029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__,map__56830,map__56830__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__56831,map__56831__$1,msg,files))
);

return c__19254__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__57080,link){
var map__57082 = p__57080;
var map__57082__$1 = ((cljs.core.seq_QMARK_.call(null,map__57082))?cljs.core.apply.call(null,cljs.core.hash_map,map__57082):map__57082);
var file = cljs.core.get.call(null,map__57082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__57082,map__57082__$1,file){
return (function (p1__57078_SHARP_,p2__57079_SHARP_){
if(cljs.core._EQ_.call(null,p1__57078_SHARP_,p2__57079_SHARP_)){
return p1__57078_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__57082,map__57082__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__57086){
var map__57087 = p__57086;
var map__57087__$1 = ((cljs.core.seq_QMARK_.call(null,map__57087))?cljs.core.apply.call(null,cljs.core.hash_map,map__57087):map__57087);
var current_url_length = cljs.core.get.call(null,map__57087__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__57087__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__57083_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__57083_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__57088){
var map__57090 = p__57088;
var map__57090__$1 = ((cljs.core.seq_QMARK_.call(null,map__57090))?cljs.core.apply.call(null,cljs.core.hash_map,map__57090):map__57090);
var f_data = map__57090__$1;
var request_url = cljs.core.get.call(null,map__57090__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__57090__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__57091,files_msg){
var map__57113 = p__57091;
var map__57113__$1 = ((cljs.core.seq_QMARK_.call(null,map__57113))?cljs.core.apply.call(null,cljs.core.hash_map,map__57113):map__57113);
var opts = map__57113__$1;
var on_cssload = cljs.core.get.call(null,map__57113__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__57114_57134 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__57115_57135 = null;
var count__57116_57136 = (0);
var i__57117_57137 = (0);
while(true){
if((i__57117_57137 < count__57116_57136)){
var f_57138 = cljs.core._nth.call(null,chunk__57115_57135,i__57117_57137);
figwheel.client.file_reloading.reload_css_file.call(null,f_57138);

var G__57139 = seq__57114_57134;
var G__57140 = chunk__57115_57135;
var G__57141 = count__57116_57136;
var G__57142 = (i__57117_57137 + (1));
seq__57114_57134 = G__57139;
chunk__57115_57135 = G__57140;
count__57116_57136 = G__57141;
i__57117_57137 = G__57142;
continue;
} else {
var temp__4126__auto___57143 = cljs.core.seq.call(null,seq__57114_57134);
if(temp__4126__auto___57143){
var seq__57114_57144__$1 = temp__4126__auto___57143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57114_57144__$1)){
var c__16932__auto___57145 = cljs.core.chunk_first.call(null,seq__57114_57144__$1);
var G__57146 = cljs.core.chunk_rest.call(null,seq__57114_57144__$1);
var G__57147 = c__16932__auto___57145;
var G__57148 = cljs.core.count.call(null,c__16932__auto___57145);
var G__57149 = (0);
seq__57114_57134 = G__57146;
chunk__57115_57135 = G__57147;
count__57116_57136 = G__57148;
i__57117_57137 = G__57149;
continue;
} else {
var f_57150 = cljs.core.first.call(null,seq__57114_57144__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_57150);

var G__57151 = cljs.core.next.call(null,seq__57114_57144__$1);
var G__57152 = null;
var G__57153 = (0);
var G__57154 = (0);
seq__57114_57134 = G__57151;
chunk__57115_57135 = G__57152;
count__57116_57136 = G__57153;
i__57117_57137 = G__57154;
continue;
}
} else {
}
}
break;
}

var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__,map__57113,map__57113__$1,opts,on_cssload){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__,map__57113,map__57113__$1,opts,on_cssload){
return (function (state_57124){
var state_val_57125 = (state_57124[(1)]);
if((state_val_57125 === (2))){
var inst_57120 = (state_57124[(2)]);
var inst_57121 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_57122 = on_cssload.call(null,inst_57121);
var state_57124__$1 = (function (){var statearr_57126 = state_57124;
(statearr_57126[(7)] = inst_57120);

return statearr_57126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57124__$1,inst_57122);
} else {
if((state_val_57125 === (1))){
var inst_57118 = cljs.core.async.timeout.call(null,(100));
var state_57124__$1 = state_57124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57124__$1,(2),inst_57118);
} else {
return null;
}
}
});})(c__19254__auto__,map__57113,map__57113__$1,opts,on_cssload))
;
return ((function (switch__19198__auto__,c__19254__auto__,map__57113,map__57113__$1,opts,on_cssload){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_57130 = [null,null,null,null,null,null,null,null];
(statearr_57130[(0)] = state_machine__19199__auto__);

(statearr_57130[(1)] = (1));

return statearr_57130;
});
var state_machine__19199__auto____1 = (function (state_57124){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_57124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e57131){if((e57131 instanceof Object)){
var ex__19202__auto__ = e57131;
var statearr_57132_57155 = state_57124;
(statearr_57132_57155[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57156 = state_57124;
state_57124 = G__57156;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_57124){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_57124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__,map__57113,map__57113__$1,opts,on_cssload))
})();
var state__19256__auto__ = (function (){var statearr_57133 = f__19255__auto__.call(null);
(statearr_57133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_57133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__,map__57113,map__57113__$1,opts,on_cssload))
);

return c__19254__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1428649985862