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
return cljs.core.reduce.call(null,(function (p1__35118_SHARP_,p2__35119_SHARP_){
var and__16133__auto__ = p1__35118_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__35119_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__35121_SHARP_,p2__35120_SHARP_){
return [cljs.core.str(p2__35120_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35122){
var map__35123 = p__35122;
var map__35123__$1 = ((cljs.core.seq_QMARK_.call(null,map__35123))?cljs.core.apply.call(null,cljs.core.hash_map,map__35123):map__35123);
var file = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35124){
var map__35125 = p__35124;
var map__35125__$1 = ((cljs.core.seq_QMARK_.call(null,map__35125))?cljs.core.apply.call(null,cljs.core.hash_map,map__35125):map__35125);
var namespace = cljs.core.get.call(null,map__35125__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e35126){if((e35126 instanceof Error)){
var e = e35126;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35126;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__35127,callback){
var map__35129 = p__35127;
var map__35129__$1 = ((cljs.core.seq_QMARK_.call(null,map__35129))?cljs.core.apply.call(null,cljs.core.hash_map,map__35129):map__35129);
var file_msg = map__35129__$1;
var request_url = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35129,map__35129__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35129,map__35129__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__35130){
var map__35132 = p__35130;
var map__35132__$1 = ((cljs.core.seq_QMARK_.call(null,map__35132))?cljs.core.apply.call(null,cljs.core.hash_map,map__35132):map__35132);
var file_msg = map__35132__$1;
var meta_data = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__35133,callback){
var map__35135 = p__35133;
var map__35135__$1 = ((cljs.core.seq_QMARK_.call(null,map__35135))?cljs.core.apply.call(null,cljs.core.hash_map,map__35135):map__35135);
var file_msg = map__35135__$1;
var namespace = cljs.core.get.call(null,map__35135__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__35135__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__19254__auto___35222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto___35222,out){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto___35222,out){
return (function (state_35204){
var state_val_35205 = (state_35204[(1)]);
if((state_val_35205 === (7))){
var inst_35188 = (state_35204[(7)]);
var inst_35194 = (state_35204[(2)]);
var inst_35195 = cljs.core.async.put_BANG_.call(null,out,inst_35194);
var inst_35184 = inst_35188;
var state_35204__$1 = (function (){var statearr_35206 = state_35204;
(statearr_35206[(8)] = inst_35195);

(statearr_35206[(9)] = inst_35184);

return statearr_35206;
})();
var statearr_35207_35223 = state_35204__$1;
(statearr_35207_35223[(2)] = null);

(statearr_35207_35223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35205 === (6))){
var inst_35200 = (state_35204[(2)]);
var state_35204__$1 = state_35204;
var statearr_35208_35224 = state_35204__$1;
(statearr_35208_35224[(2)] = inst_35200);

(statearr_35208_35224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35205 === (5))){
var inst_35198 = cljs.core.async.close_BANG_.call(null,out);
var state_35204__$1 = state_35204;
var statearr_35209_35225 = state_35204__$1;
(statearr_35209_35225[(2)] = inst_35198);

(statearr_35209_35225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35205 === (4))){
var inst_35187 = (state_35204[(10)]);
var inst_35192 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35187);
var state_35204__$1 = state_35204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35204__$1,(7),inst_35192);
} else {
if((state_val_35205 === (3))){
var inst_35202 = (state_35204[(2)]);
var state_35204__$1 = state_35204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35204__$1,inst_35202);
} else {
if((state_val_35205 === (2))){
var inst_35187 = (state_35204[(10)]);
var inst_35184 = (state_35204[(9)]);
var inst_35187__$1 = cljs.core.nth.call(null,inst_35184,(0),null);
var inst_35188 = cljs.core.nthnext.call(null,inst_35184,(1));
var inst_35189 = (inst_35187__$1 == null);
var inst_35190 = cljs.core.not.call(null,inst_35189);
var state_35204__$1 = (function (){var statearr_35210 = state_35204;
(statearr_35210[(10)] = inst_35187__$1);

(statearr_35210[(7)] = inst_35188);

return statearr_35210;
})();
if(inst_35190){
var statearr_35211_35226 = state_35204__$1;
(statearr_35211_35226[(1)] = (4));

} else {
var statearr_35212_35227 = state_35204__$1;
(statearr_35212_35227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35205 === (1))){
var inst_35182 = cljs.core.nth.call(null,files,(0),null);
var inst_35183 = cljs.core.nthnext.call(null,files,(1));
var inst_35184 = files;
var state_35204__$1 = (function (){var statearr_35213 = state_35204;
(statearr_35213[(11)] = inst_35182);

(statearr_35213[(12)] = inst_35183);

(statearr_35213[(9)] = inst_35184);

return statearr_35213;
})();
var statearr_35214_35228 = state_35204__$1;
(statearr_35214_35228[(2)] = null);

(statearr_35214_35228[(1)] = (2));


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
});})(c__19254__auto___35222,out))
;
return ((function (switch__19198__auto__,c__19254__auto___35222,out){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_35218 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35218[(0)] = state_machine__19199__auto__);

(statearr_35218[(1)] = (1));

return statearr_35218;
});
var state_machine__19199__auto____1 = (function (state_35204){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_35204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e35219){if((e35219 instanceof Object)){
var ex__19202__auto__ = e35219;
var statearr_35220_35229 = state_35204;
(statearr_35220_35229[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35230 = state_35204;
state_35204 = G__35230;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_35204){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_35204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto___35222,out))
})();
var state__19256__auto__ = (function (){var statearr_35221 = f__19255__auto__.call(null);
(statearr_35221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto___35222);

return statearr_35221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto___35222,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__35231,p__35232){
var map__35235 = p__35231;
var map__35235__$1 = ((cljs.core.seq_QMARK_.call(null,map__35235))?cljs.core.apply.call(null,cljs.core.hash_map,map__35235):map__35235);
var opts = map__35235__$1;
var url_rewriter = cljs.core.get.call(null,map__35235__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35236 = p__35232;
var map__35236__$1 = ((cljs.core.seq_QMARK_.call(null,map__35236))?cljs.core.apply.call(null,cljs.core.hash_map,map__35236):map__35236);
var file_msg = map__35236__$1;
var file = cljs.core.get.call(null,map__35236__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__35237){
var map__35240 = p__35237;
var map__35240__$1 = ((cljs.core.seq_QMARK_.call(null,map__35240))?cljs.core.apply.call(null,cljs.core.hash_map,map__35240):map__35240);
var file = cljs.core.get.call(null,map__35240__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__35240__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e35241){var e = e35241;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__35246,p__35247){
var map__35448 = p__35246;
var map__35448__$1 = ((cljs.core.seq_QMARK_.call(null,map__35448))?cljs.core.apply.call(null,cljs.core.hash_map,map__35448):map__35448);
var opts = map__35448__$1;
var load_unchanged_files = cljs.core.get.call(null,map__35448__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__35448__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__35448__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__35449 = p__35247;
var map__35449__$1 = ((cljs.core.seq_QMARK_.call(null,map__35449))?cljs.core.apply.call(null,cljs.core.hash_map,map__35449):map__35449);
var msg = map__35449__$1;
var files = cljs.core.get.call(null,map__35449__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files){
return (function (state_35573){
var state_val_35574 = (state_35573[(1)]);
if((state_val_35574 === (7))){
var inst_35460 = (state_35573[(7)]);
var inst_35461 = (state_35573[(8)]);
var inst_35463 = (state_35573[(9)]);
var inst_35462 = (state_35573[(10)]);
var inst_35468 = cljs.core._nth.call(null,inst_35461,inst_35463);
var inst_35469 = figwheel.client.file_reloading.eval_body.call(null,inst_35468);
var inst_35470 = (inst_35463 + (1));
var tmp35575 = inst_35460;
var tmp35576 = inst_35461;
var tmp35577 = inst_35462;
var inst_35460__$1 = tmp35575;
var inst_35461__$1 = tmp35576;
var inst_35462__$1 = tmp35577;
var inst_35463__$1 = inst_35470;
var state_35573__$1 = (function (){var statearr_35578 = state_35573;
(statearr_35578[(7)] = inst_35460__$1);

(statearr_35578[(8)] = inst_35461__$1);

(statearr_35578[(11)] = inst_35469);

(statearr_35578[(9)] = inst_35463__$1);

(statearr_35578[(10)] = inst_35462__$1);

return statearr_35578;
})();
var statearr_35579_35648 = state_35573__$1;
(statearr_35579_35648[(2)] = null);

(statearr_35579_35648[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (20))){
var inst_35506 = (state_35573[(12)]);
var inst_35510 = (state_35573[(13)]);
var inst_35512 = (state_35573[(14)]);
var inst_35509 = (state_35573[(15)]);
var inst_35505 = (state_35573[(16)]);
var inst_35515 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35517 = (function (){var files_not_loaded = inst_35512;
var res = inst_35510;
var res_SINGLEQUOTE_ = inst_35509;
var files_SINGLEQUOTE_ = inst_35506;
var all_files = inst_35505;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35515,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files){
return (function (p__35516){
var map__35580 = p__35516;
var map__35580__$1 = ((cljs.core.seq_QMARK_.call(null,map__35580))?cljs.core.apply.call(null,cljs.core.hash_map,map__35580):map__35580);
var file = cljs.core.get.call(null,map__35580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__35580__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35515,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files))
})();
var inst_35518 = cljs.core.map.call(null,inst_35517,inst_35510);
var inst_35519 = cljs.core.pr_str.call(null,inst_35518);
var inst_35520 = figwheel.client.utils.log.call(null,inst_35519);
var inst_35521 = (function (){var files_not_loaded = inst_35512;
var res = inst_35510;
var res_SINGLEQUOTE_ = inst_35509;
var files_SINGLEQUOTE_ = inst_35506;
var all_files = inst_35505;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35515,inst_35517,inst_35518,inst_35519,inst_35520,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35515,inst_35517,inst_35518,inst_35519,inst_35520,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files))
})();
var inst_35522 = setTimeout(inst_35521,(10));
var state_35573__$1 = (function (){var statearr_35581 = state_35573;
(statearr_35581[(17)] = inst_35515);

(statearr_35581[(18)] = inst_35520);

return statearr_35581;
})();
var statearr_35582_35649 = state_35573__$1;
(statearr_35582_35649[(2)] = inst_35522);

(statearr_35582_35649[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (27))){
var inst_35532 = (state_35573[(19)]);
var state_35573__$1 = state_35573;
var statearr_35583_35650 = state_35573__$1;
(statearr_35583_35650[(2)] = inst_35532);

(statearr_35583_35650[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (1))){
var inst_35452 = (state_35573[(20)]);
var inst_35450 = before_jsload.call(null,files);
var inst_35451 = (function (){return ((function (inst_35452,inst_35450,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files){
return (function (p1__35242_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35242_SHARP_);
});
;})(inst_35452,inst_35450,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files))
})();
var inst_35452__$1 = cljs.core.filter.call(null,inst_35451,files);
var inst_35453 = cljs.core.not_empty.call(null,inst_35452__$1);
var state_35573__$1 = (function (){var statearr_35584 = state_35573;
(statearr_35584[(21)] = inst_35450);

(statearr_35584[(20)] = inst_35452__$1);

return statearr_35584;
})();
if(cljs.core.truth_(inst_35453)){
var statearr_35585_35651 = state_35573__$1;
(statearr_35585_35651[(1)] = (2));

} else {
var statearr_35586_35652 = state_35573__$1;
(statearr_35586_35652[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (24))){
var state_35573__$1 = state_35573;
var statearr_35587_35653 = state_35573__$1;
(statearr_35587_35653[(2)] = null);

(statearr_35587_35653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (4))){
var inst_35497 = (state_35573[(2)]);
var inst_35498 = (function (){return ((function (inst_35497,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files){
return (function (p1__35243_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35243_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35243_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_35497,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files))
})();
var inst_35499 = cljs.core.filter.call(null,inst_35498,files);
var state_35573__$1 = (function (){var statearr_35588 = state_35573;
(statearr_35588[(22)] = inst_35497);

(statearr_35588[(23)] = inst_35499);

return statearr_35588;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35589_35654 = state_35573__$1;
(statearr_35589_35654[(1)] = (16));

} else {
var statearr_35590_35655 = state_35573__$1;
(statearr_35590_35655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (15))){
var inst_35487 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
var statearr_35591_35656 = state_35573__$1;
(statearr_35591_35656[(2)] = inst_35487);

(statearr_35591_35656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (21))){
var state_35573__$1 = state_35573;
var statearr_35592_35657 = state_35573__$1;
(statearr_35592_35657[(2)] = null);

(statearr_35592_35657[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (31))){
var inst_35540 = (state_35573[(24)]);
var inst_35550 = (state_35573[(2)]);
var inst_35551 = cljs.core.not_empty.call(null,inst_35540);
var state_35573__$1 = (function (){var statearr_35593 = state_35573;
(statearr_35593[(25)] = inst_35550);

return statearr_35593;
})();
if(cljs.core.truth_(inst_35551)){
var statearr_35594_35658 = state_35573__$1;
(statearr_35594_35658[(1)] = (32));

} else {
var statearr_35595_35659 = state_35573__$1;
(statearr_35595_35659[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (32))){
var inst_35540 = (state_35573[(24)]);
var inst_35553 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35540);
var inst_35554 = cljs.core.pr_str.call(null,inst_35553);
var inst_35555 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35554)].join('');
var inst_35556 = figwheel.client.utils.log.call(null,inst_35555);
var state_35573__$1 = state_35573;
var statearr_35596_35660 = state_35573__$1;
(statearr_35596_35660[(2)] = inst_35556);

(statearr_35596_35660[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (33))){
var state_35573__$1 = state_35573;
var statearr_35597_35661 = state_35573__$1;
(statearr_35597_35661[(2)] = null);

(statearr_35597_35661[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (13))){
var inst_35473 = (state_35573[(26)]);
var inst_35477 = cljs.core.chunk_first.call(null,inst_35473);
var inst_35478 = cljs.core.chunk_rest.call(null,inst_35473);
var inst_35479 = cljs.core.count.call(null,inst_35477);
var inst_35460 = inst_35478;
var inst_35461 = inst_35477;
var inst_35462 = inst_35479;
var inst_35463 = (0);
var state_35573__$1 = (function (){var statearr_35598 = state_35573;
(statearr_35598[(7)] = inst_35460);

(statearr_35598[(8)] = inst_35461);

(statearr_35598[(9)] = inst_35463);

(statearr_35598[(10)] = inst_35462);

return statearr_35598;
})();
var statearr_35599_35662 = state_35573__$1;
(statearr_35599_35662[(2)] = null);

(statearr_35599_35662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (22))){
var inst_35512 = (state_35573[(14)]);
var inst_35525 = (state_35573[(2)]);
var inst_35526 = cljs.core.not_empty.call(null,inst_35512);
var state_35573__$1 = (function (){var statearr_35600 = state_35573;
(statearr_35600[(27)] = inst_35525);

return statearr_35600;
})();
if(cljs.core.truth_(inst_35526)){
var statearr_35601_35663 = state_35573__$1;
(statearr_35601_35663[(1)] = (23));

} else {
var statearr_35602_35664 = state_35573__$1;
(statearr_35602_35664[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (36))){
var state_35573__$1 = state_35573;
var statearr_35603_35665 = state_35573__$1;
(statearr_35603_35665[(2)] = null);

(statearr_35603_35665[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (29))){
var inst_35541 = (state_35573[(28)]);
var inst_35544 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35541);
var inst_35545 = cljs.core.pr_str.call(null,inst_35544);
var inst_35546 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35545)].join('');
var inst_35547 = figwheel.client.utils.log.call(null,inst_35546);
var state_35573__$1 = state_35573;
var statearr_35604_35666 = state_35573__$1;
(statearr_35604_35666[(2)] = inst_35547);

(statearr_35604_35666[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (6))){
var inst_35494 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
var statearr_35605_35667 = state_35573__$1;
(statearr_35605_35667[(2)] = inst_35494);

(statearr_35605_35667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (28))){
var inst_35541 = (state_35573[(28)]);
var inst_35538 = (state_35573[(2)]);
var inst_35539 = cljs.core.get.call(null,inst_35538,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35540 = cljs.core.get.call(null,inst_35538,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35541__$1 = cljs.core.get.call(null,inst_35538,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35542 = cljs.core.not_empty.call(null,inst_35541__$1);
var state_35573__$1 = (function (){var statearr_35606 = state_35573;
(statearr_35606[(29)] = inst_35539);

(statearr_35606[(24)] = inst_35540);

(statearr_35606[(28)] = inst_35541__$1);

return statearr_35606;
})();
if(cljs.core.truth_(inst_35542)){
var statearr_35607_35668 = state_35573__$1;
(statearr_35607_35668[(1)] = (29));

} else {
var statearr_35608_35669 = state_35573__$1;
(statearr_35608_35669[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (25))){
var inst_35571 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35573__$1,inst_35571);
} else {
if((state_val_35574 === (34))){
var inst_35539 = (state_35573[(29)]);
var inst_35559 = (state_35573[(2)]);
var inst_35560 = cljs.core.not_empty.call(null,inst_35539);
var state_35573__$1 = (function (){var statearr_35609 = state_35573;
(statearr_35609[(30)] = inst_35559);

return statearr_35609;
})();
if(cljs.core.truth_(inst_35560)){
var statearr_35610_35670 = state_35573__$1;
(statearr_35610_35670[(1)] = (35));

} else {
var statearr_35611_35671 = state_35573__$1;
(statearr_35611_35671[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (17))){
var inst_35499 = (state_35573[(23)]);
var state_35573__$1 = state_35573;
var statearr_35612_35672 = state_35573__$1;
(statearr_35612_35672[(2)] = inst_35499);

(statearr_35612_35672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (3))){
var state_35573__$1 = state_35573;
var statearr_35613_35673 = state_35573__$1;
(statearr_35613_35673[(2)] = null);

(statearr_35613_35673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (12))){
var inst_35490 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
var statearr_35614_35674 = state_35573__$1;
(statearr_35614_35674[(2)] = inst_35490);

(statearr_35614_35674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (2))){
var inst_35452 = (state_35573[(20)]);
var inst_35459 = cljs.core.seq.call(null,inst_35452);
var inst_35460 = inst_35459;
var inst_35461 = null;
var inst_35462 = (0);
var inst_35463 = (0);
var state_35573__$1 = (function (){var statearr_35615 = state_35573;
(statearr_35615[(7)] = inst_35460);

(statearr_35615[(8)] = inst_35461);

(statearr_35615[(9)] = inst_35463);

(statearr_35615[(10)] = inst_35462);

return statearr_35615;
})();
var statearr_35616_35675 = state_35573__$1;
(statearr_35616_35675[(2)] = null);

(statearr_35616_35675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (23))){
var inst_35506 = (state_35573[(12)]);
var inst_35510 = (state_35573[(13)]);
var inst_35512 = (state_35573[(14)]);
var inst_35509 = (state_35573[(15)]);
var inst_35505 = (state_35573[(16)]);
var inst_35532 = (state_35573[(19)]);
var inst_35528 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35531 = (function (){var files_not_loaded = inst_35512;
var res = inst_35510;
var res_SINGLEQUOTE_ = inst_35509;
var files_SINGLEQUOTE_ = inst_35506;
var all_files = inst_35505;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35532,inst_35528,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files){
return (function (p__35530){
var map__35617 = p__35530;
var map__35617__$1 = ((cljs.core.seq_QMARK_.call(null,map__35617))?cljs.core.apply.call(null,cljs.core.hash_map,map__35617):map__35617);
var meta_data = cljs.core.get.call(null,map__35617__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35532,inst_35528,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files))
})();
var inst_35532__$1 = cljs.core.group_by.call(null,inst_35531,inst_35512);
var inst_35533 = cljs.core.seq_QMARK_.call(null,inst_35532__$1);
var state_35573__$1 = (function (){var statearr_35618 = state_35573;
(statearr_35618[(31)] = inst_35528);

(statearr_35618[(19)] = inst_35532__$1);

return statearr_35618;
})();
if(inst_35533){
var statearr_35619_35676 = state_35573__$1;
(statearr_35619_35676[(1)] = (26));

} else {
var statearr_35620_35677 = state_35573__$1;
(statearr_35620_35677[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (35))){
var inst_35539 = (state_35573[(29)]);
var inst_35562 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35539);
var inst_35563 = cljs.core.pr_str.call(null,inst_35562);
var inst_35564 = [cljs.core.str("not required: "),cljs.core.str(inst_35563)].join('');
var inst_35565 = figwheel.client.utils.log.call(null,inst_35564);
var state_35573__$1 = state_35573;
var statearr_35621_35678 = state_35573__$1;
(statearr_35621_35678[(2)] = inst_35565);

(statearr_35621_35678[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (19))){
var inst_35506 = (state_35573[(12)]);
var inst_35510 = (state_35573[(13)]);
var inst_35509 = (state_35573[(15)]);
var inst_35505 = (state_35573[(16)]);
var inst_35509__$1 = (state_35573[(2)]);
var inst_35510__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35509__$1);
var inst_35511 = (function (){var res = inst_35510__$1;
var res_SINGLEQUOTE_ = inst_35509__$1;
var files_SINGLEQUOTE_ = inst_35506;
var all_files = inst_35505;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35506,inst_35510,inst_35509,inst_35505,inst_35509__$1,inst_35510__$1,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files){
return (function (p1__35245_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35245_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35506,inst_35510,inst_35509,inst_35505,inst_35509__$1,inst_35510__$1,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files))
})();
var inst_35512 = cljs.core.filter.call(null,inst_35511,inst_35509__$1);
var inst_35513 = cljs.core.not_empty.call(null,inst_35510__$1);
var state_35573__$1 = (function (){var statearr_35622 = state_35573;
(statearr_35622[(13)] = inst_35510__$1);

(statearr_35622[(14)] = inst_35512);

(statearr_35622[(15)] = inst_35509__$1);

return statearr_35622;
})();
if(cljs.core.truth_(inst_35513)){
var statearr_35623_35679 = state_35573__$1;
(statearr_35623_35679[(1)] = (20));

} else {
var statearr_35624_35680 = state_35573__$1;
(statearr_35624_35680[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (11))){
var state_35573__$1 = state_35573;
var statearr_35625_35681 = state_35573__$1;
(statearr_35625_35681[(2)] = null);

(statearr_35625_35681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (9))){
var inst_35492 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
var statearr_35626_35682 = state_35573__$1;
(statearr_35626_35682[(2)] = inst_35492);

(statearr_35626_35682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (5))){
var inst_35463 = (state_35573[(9)]);
var inst_35462 = (state_35573[(10)]);
var inst_35465 = (inst_35463 < inst_35462);
var inst_35466 = inst_35465;
var state_35573__$1 = state_35573;
if(cljs.core.truth_(inst_35466)){
var statearr_35627_35683 = state_35573__$1;
(statearr_35627_35683[(1)] = (7));

} else {
var statearr_35628_35684 = state_35573__$1;
(statearr_35628_35684[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (14))){
var inst_35473 = (state_35573[(26)]);
var inst_35482 = cljs.core.first.call(null,inst_35473);
var inst_35483 = figwheel.client.file_reloading.eval_body.call(null,inst_35482);
var inst_35484 = cljs.core.next.call(null,inst_35473);
var inst_35460 = inst_35484;
var inst_35461 = null;
var inst_35462 = (0);
var inst_35463 = (0);
var state_35573__$1 = (function (){var statearr_35629 = state_35573;
(statearr_35629[(7)] = inst_35460);

(statearr_35629[(8)] = inst_35461);

(statearr_35629[(9)] = inst_35463);

(statearr_35629[(10)] = inst_35462);

(statearr_35629[(32)] = inst_35483);

return statearr_35629;
})();
var statearr_35630_35685 = state_35573__$1;
(statearr_35630_35685[(2)] = null);

(statearr_35630_35685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (26))){
var inst_35532 = (state_35573[(19)]);
var inst_35535 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35532);
var state_35573__$1 = state_35573;
var statearr_35631_35686 = state_35573__$1;
(statearr_35631_35686[(2)] = inst_35535);

(statearr_35631_35686[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (16))){
var inst_35499 = (state_35573[(23)]);
var inst_35501 = (function (){var all_files = inst_35499;
return ((function (all_files,inst_35499,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files){
return (function (p1__35244_SHARP_){
return cljs.core.update_in.call(null,p1__35244_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35499,state_val_35574,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files))
})();
var inst_35502 = cljs.core.map.call(null,inst_35501,inst_35499);
var state_35573__$1 = state_35573;
var statearr_35632_35687 = state_35573__$1;
(statearr_35632_35687[(2)] = inst_35502);

(statearr_35632_35687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (30))){
var state_35573__$1 = state_35573;
var statearr_35633_35688 = state_35573__$1;
(statearr_35633_35688[(2)] = null);

(statearr_35633_35688[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (10))){
var inst_35473 = (state_35573[(26)]);
var inst_35475 = cljs.core.chunked_seq_QMARK_.call(null,inst_35473);
var state_35573__$1 = state_35573;
if(inst_35475){
var statearr_35634_35689 = state_35573__$1;
(statearr_35634_35689[(1)] = (13));

} else {
var statearr_35635_35690 = state_35573__$1;
(statearr_35635_35690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (18))){
var inst_35506 = (state_35573[(12)]);
var inst_35505 = (state_35573[(16)]);
var inst_35505__$1 = (state_35573[(2)]);
var inst_35506__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35505__$1);
var inst_35507 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35506__$1);
var state_35573__$1 = (function (){var statearr_35636 = state_35573;
(statearr_35636[(12)] = inst_35506__$1);

(statearr_35636[(16)] = inst_35505__$1);

return statearr_35636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35573__$1,(19),inst_35507);
} else {
if((state_val_35574 === (37))){
var inst_35568 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
var statearr_35637_35691 = state_35573__$1;
(statearr_35637_35691[(2)] = inst_35568);

(statearr_35637_35691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (8))){
var inst_35460 = (state_35573[(7)]);
var inst_35473 = (state_35573[(26)]);
var inst_35473__$1 = cljs.core.seq.call(null,inst_35460);
var state_35573__$1 = (function (){var statearr_35638 = state_35573;
(statearr_35638[(26)] = inst_35473__$1);

return statearr_35638;
})();
if(inst_35473__$1){
var statearr_35639_35692 = state_35573__$1;
(statearr_35639_35692[(1)] = (10));

} else {
var statearr_35640_35693 = state_35573__$1;
(statearr_35640_35693[(1)] = (11));

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
});})(c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files))
;
return ((function (switch__19198__auto__,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_35644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35644[(0)] = state_machine__19199__auto__);

(statearr_35644[(1)] = (1));

return statearr_35644;
});
var state_machine__19199__auto____1 = (function (state_35573){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_35573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e35645){if((e35645 instanceof Object)){
var ex__19202__auto__ = e35645;
var statearr_35646_35694 = state_35573;
(statearr_35646_35694[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35695 = state_35573;
state_35573 = G__35695;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_35573){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_35573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files))
})();
var state__19256__auto__ = (function (){var statearr_35647 = f__19255__auto__.call(null);
(statearr_35647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_35647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__,map__35448,map__35448__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35449,map__35449__$1,msg,files))
);

return c__19254__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__35698,link){
var map__35700 = p__35698;
var map__35700__$1 = ((cljs.core.seq_QMARK_.call(null,map__35700))?cljs.core.apply.call(null,cljs.core.hash_map,map__35700):map__35700);
var file = cljs.core.get.call(null,map__35700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__35700,map__35700__$1,file){
return (function (p1__35696_SHARP_,p2__35697_SHARP_){
if(cljs.core._EQ_.call(null,p1__35696_SHARP_,p2__35697_SHARP_)){
return p1__35696_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__35700,map__35700__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35704){
var map__35705 = p__35704;
var map__35705__$1 = ((cljs.core.seq_QMARK_.call(null,map__35705))?cljs.core.apply.call(null,cljs.core.hash_map,map__35705):map__35705);
var current_url_length = cljs.core.get.call(null,map__35705__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__35705__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35701_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35701_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__35706){
var map__35708 = p__35706;
var map__35708__$1 = ((cljs.core.seq_QMARK_.call(null,map__35708))?cljs.core.apply.call(null,cljs.core.hash_map,map__35708):map__35708);
var f_data = map__35708__$1;
var request_url = cljs.core.get.call(null,map__35708__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__35708__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__35709,files_msg){
var map__35731 = p__35709;
var map__35731__$1 = ((cljs.core.seq_QMARK_.call(null,map__35731))?cljs.core.apply.call(null,cljs.core.hash_map,map__35731):map__35731);
var opts = map__35731__$1;
var on_cssload = cljs.core.get.call(null,map__35731__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35732_35752 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35733_35753 = null;
var count__35734_35754 = (0);
var i__35735_35755 = (0);
while(true){
if((i__35735_35755 < count__35734_35754)){
var f_35756 = cljs.core._nth.call(null,chunk__35733_35753,i__35735_35755);
figwheel.client.file_reloading.reload_css_file.call(null,f_35756);

var G__35757 = seq__35732_35752;
var G__35758 = chunk__35733_35753;
var G__35759 = count__35734_35754;
var G__35760 = (i__35735_35755 + (1));
seq__35732_35752 = G__35757;
chunk__35733_35753 = G__35758;
count__35734_35754 = G__35759;
i__35735_35755 = G__35760;
continue;
} else {
var temp__4126__auto___35761 = cljs.core.seq.call(null,seq__35732_35752);
if(temp__4126__auto___35761){
var seq__35732_35762__$1 = temp__4126__auto___35761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35732_35762__$1)){
var c__16932__auto___35763 = cljs.core.chunk_first.call(null,seq__35732_35762__$1);
var G__35764 = cljs.core.chunk_rest.call(null,seq__35732_35762__$1);
var G__35765 = c__16932__auto___35763;
var G__35766 = cljs.core.count.call(null,c__16932__auto___35763);
var G__35767 = (0);
seq__35732_35752 = G__35764;
chunk__35733_35753 = G__35765;
count__35734_35754 = G__35766;
i__35735_35755 = G__35767;
continue;
} else {
var f_35768 = cljs.core.first.call(null,seq__35732_35762__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35768);

var G__35769 = cljs.core.next.call(null,seq__35732_35762__$1);
var G__35770 = null;
var G__35771 = (0);
var G__35772 = (0);
seq__35732_35752 = G__35769;
chunk__35733_35753 = G__35770;
count__35734_35754 = G__35771;
i__35735_35755 = G__35772;
continue;
}
} else {
}
}
break;
}

var c__19254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19254__auto__,map__35731,map__35731__$1,opts,on_cssload){
return (function (){
var f__19255__auto__ = (function (){var switch__19198__auto__ = ((function (c__19254__auto__,map__35731,map__35731__$1,opts,on_cssload){
return (function (state_35742){
var state_val_35743 = (state_35742[(1)]);
if((state_val_35743 === (2))){
var inst_35738 = (state_35742[(2)]);
var inst_35739 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35740 = on_cssload.call(null,inst_35739);
var state_35742__$1 = (function (){var statearr_35744 = state_35742;
(statearr_35744[(7)] = inst_35738);

return statearr_35744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35742__$1,inst_35740);
} else {
if((state_val_35743 === (1))){
var inst_35736 = cljs.core.async.timeout.call(null,(100));
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35742__$1,(2),inst_35736);
} else {
return null;
}
}
});})(c__19254__auto__,map__35731,map__35731__$1,opts,on_cssload))
;
return ((function (switch__19198__auto__,c__19254__auto__,map__35731,map__35731__$1,opts,on_cssload){
return (function() {
var state_machine__19199__auto__ = null;
var state_machine__19199__auto____0 = (function (){
var statearr_35748 = [null,null,null,null,null,null,null,null];
(statearr_35748[(0)] = state_machine__19199__auto__);

(statearr_35748[(1)] = (1));

return statearr_35748;
});
var state_machine__19199__auto____1 = (function (state_35742){
while(true){
var ret_value__19200__auto__ = (function (){try{while(true){
var result__19201__auto__ = switch__19198__auto__.call(null,state_35742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19201__auto__;
}
break;
}
}catch (e35749){if((e35749 instanceof Object)){
var ex__19202__auto__ = e35749;
var statearr_35750_35773 = state_35742;
(statearr_35750_35773[(5)] = ex__19202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35774 = state_35742;
state_35742 = G__35774;
continue;
} else {
return ret_value__19200__auto__;
}
break;
}
});
state_machine__19199__auto__ = function(state_35742){
switch(arguments.length){
case 0:
return state_machine__19199__auto____0.call(this);
case 1:
return state_machine__19199__auto____1.call(this,state_35742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19199__auto____0;
state_machine__19199__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19199__auto____1;
return state_machine__19199__auto__;
})()
;})(switch__19198__auto__,c__19254__auto__,map__35731,map__35731__$1,opts,on_cssload))
})();
var state__19256__auto__ = (function (){var statearr_35751 = f__19255__auto__.call(null);
(statearr_35751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19254__auto__);

return statearr_35751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19256__auto__);
});})(c__19254__auto__,map__35731,map__35731__$1,opts,on_cssload))
);

return c__19254__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1428647926560