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
return cljs.core.reduce.call(null,(function (p1__31688_SHARP_,p2__31689_SHARP_){
var and__16133__auto__ = p1__31688_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__31689_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__31691_SHARP_,p2__31690_SHARP_){
return [cljs.core.str(p2__31690_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31692){
var map__31693 = p__31692;
var map__31693__$1 = ((cljs.core.seq_QMARK_.call(null,map__31693))?cljs.core.apply.call(null,cljs.core.hash_map,map__31693):map__31693);
var file = cljs.core.get.call(null,map__31693__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31694){
var map__31695 = p__31694;
var map__31695__$1 = ((cljs.core.seq_QMARK_.call(null,map__31695))?cljs.core.apply.call(null,cljs.core.hash_map,map__31695):map__31695);
var namespace = cljs.core.get.call(null,map__31695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e31696){if((e31696 instanceof Error)){
var e = e31696;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31696;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__31697,callback){
var map__31699 = p__31697;
var map__31699__$1 = ((cljs.core.seq_QMARK_.call(null,map__31699))?cljs.core.apply.call(null,cljs.core.hash_map,map__31699):map__31699);
var file_msg = map__31699__$1;
var request_url = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31699,map__31699__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31699,map__31699__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__31700){
var map__31702 = p__31700;
var map__31702__$1 = ((cljs.core.seq_QMARK_.call(null,map__31702))?cljs.core.apply.call(null,cljs.core.hash_map,map__31702):map__31702);
var file_msg = map__31702__$1;
var meta_data = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__31703,callback){
var map__31705 = p__31703;
var map__31705__$1 = ((cljs.core.seq_QMARK_.call(null,map__31705))?cljs.core.apply.call(null,cljs.core.hash_map,map__31705):map__31705);
var file_msg = map__31705__$1;
var namespace = cljs.core.get.call(null,map__31705__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31705__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__19569__auto___31792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto___31792,out){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto___31792,out){
return (function (state_31774){
var state_val_31775 = (state_31774[(1)]);
if((state_val_31775 === (7))){
var inst_31758 = (state_31774[(7)]);
var inst_31764 = (state_31774[(2)]);
var inst_31765 = cljs.core.async.put_BANG_.call(null,out,inst_31764);
var inst_31754 = inst_31758;
var state_31774__$1 = (function (){var statearr_31776 = state_31774;
(statearr_31776[(8)] = inst_31754);

(statearr_31776[(9)] = inst_31765);

return statearr_31776;
})();
var statearr_31777_31793 = state_31774__$1;
(statearr_31777_31793[(2)] = null);

(statearr_31777_31793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (6))){
var inst_31770 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31778_31794 = state_31774__$1;
(statearr_31778_31794[(2)] = inst_31770);

(statearr_31778_31794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (5))){
var inst_31768 = cljs.core.async.close_BANG_.call(null,out);
var state_31774__$1 = state_31774;
var statearr_31779_31795 = state_31774__$1;
(statearr_31779_31795[(2)] = inst_31768);

(statearr_31779_31795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (4))){
var inst_31757 = (state_31774[(10)]);
var inst_31762 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31757);
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31774__$1,(7),inst_31762);
} else {
if((state_val_31775 === (3))){
var inst_31772 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31774__$1,inst_31772);
} else {
if((state_val_31775 === (2))){
var inst_31754 = (state_31774[(8)]);
var inst_31757 = (state_31774[(10)]);
var inst_31757__$1 = cljs.core.nth.call(null,inst_31754,(0),null);
var inst_31758 = cljs.core.nthnext.call(null,inst_31754,(1));
var inst_31759 = (inst_31757__$1 == null);
var inst_31760 = cljs.core.not.call(null,inst_31759);
var state_31774__$1 = (function (){var statearr_31780 = state_31774;
(statearr_31780[(7)] = inst_31758);

(statearr_31780[(10)] = inst_31757__$1);

return statearr_31780;
})();
if(inst_31760){
var statearr_31781_31796 = state_31774__$1;
(statearr_31781_31796[(1)] = (4));

} else {
var statearr_31782_31797 = state_31774__$1;
(statearr_31782_31797[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (1))){
var inst_31752 = cljs.core.nth.call(null,files,(0),null);
var inst_31753 = cljs.core.nthnext.call(null,files,(1));
var inst_31754 = files;
var state_31774__$1 = (function (){var statearr_31783 = state_31774;
(statearr_31783[(11)] = inst_31752);

(statearr_31783[(8)] = inst_31754);

(statearr_31783[(12)] = inst_31753);

return statearr_31783;
})();
var statearr_31784_31798 = state_31774__$1;
(statearr_31784_31798[(2)] = null);

(statearr_31784_31798[(1)] = (2));


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
});})(c__19569__auto___31792,out))
;
return ((function (switch__19513__auto__,c__19569__auto___31792,out){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_31788 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31788[(0)] = state_machine__19514__auto__);

(statearr_31788[(1)] = (1));

return statearr_31788;
});
var state_machine__19514__auto____1 = (function (state_31774){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_31774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e31789){if((e31789 instanceof Object)){
var ex__19517__auto__ = e31789;
var statearr_31790_31799 = state_31774;
(statearr_31790_31799[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31800 = state_31774;
state_31774 = G__31800;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_31774){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_31774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto___31792,out))
})();
var state__19571__auto__ = (function (){var statearr_31791 = f__19570__auto__.call(null);
(statearr_31791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto___31792);

return statearr_31791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto___31792,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__31801,p__31802){
var map__31805 = p__31801;
var map__31805__$1 = ((cljs.core.seq_QMARK_.call(null,map__31805))?cljs.core.apply.call(null,cljs.core.hash_map,map__31805):map__31805);
var opts = map__31805__$1;
var url_rewriter = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31806 = p__31802;
var map__31806__$1 = ((cljs.core.seq_QMARK_.call(null,map__31806))?cljs.core.apply.call(null,cljs.core.hash_map,map__31806):map__31806);
var file_msg = map__31806__$1;
var file = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__31807){
var map__31810 = p__31807;
var map__31810__$1 = ((cljs.core.seq_QMARK_.call(null,map__31810))?cljs.core.apply.call(null,cljs.core.hash_map,map__31810):map__31810);
var file = cljs.core.get.call(null,map__31810__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31810__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e31811){var e = e31811;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__31816,p__31817){
var map__32018 = p__31816;
var map__32018__$1 = ((cljs.core.seq_QMARK_.call(null,map__32018))?cljs.core.apply.call(null,cljs.core.hash_map,map__32018):map__32018);
var opts = map__32018__$1;
var load_unchanged_files = cljs.core.get.call(null,map__32018__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__32018__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__32018__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__32019 = p__31817;
var map__32019__$1 = ((cljs.core.seq_QMARK_.call(null,map__32019))?cljs.core.apply.call(null,cljs.core.hash_map,map__32019):map__32019);
var msg = map__32019__$1;
var files = cljs.core.get.call(null,map__32019__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files){
return (function (state_32143){
var state_val_32144 = (state_32143[(1)]);
if((state_val_32144 === (7))){
var inst_32032 = (state_32143[(7)]);
var inst_32033 = (state_32143[(8)]);
var inst_32030 = (state_32143[(9)]);
var inst_32031 = (state_32143[(10)]);
var inst_32038 = cljs.core._nth.call(null,inst_32031,inst_32033);
var inst_32039 = figwheel.client.file_reloading.eval_body.call(null,inst_32038);
var inst_32040 = (inst_32033 + (1));
var tmp32145 = inst_32032;
var tmp32146 = inst_32030;
var tmp32147 = inst_32031;
var inst_32030__$1 = tmp32146;
var inst_32031__$1 = tmp32147;
var inst_32032__$1 = tmp32145;
var inst_32033__$1 = inst_32040;
var state_32143__$1 = (function (){var statearr_32148 = state_32143;
(statearr_32148[(7)] = inst_32032__$1);

(statearr_32148[(8)] = inst_32033__$1);

(statearr_32148[(9)] = inst_32030__$1);

(statearr_32148[(11)] = inst_32039);

(statearr_32148[(10)] = inst_32031__$1);

return statearr_32148;
})();
var statearr_32149_32218 = state_32143__$1;
(statearr_32149_32218[(2)] = null);

(statearr_32149_32218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (20))){
var inst_32082 = (state_32143[(12)]);
var inst_32079 = (state_32143[(13)]);
var inst_32075 = (state_32143[(14)]);
var inst_32076 = (state_32143[(15)]);
var inst_32080 = (state_32143[(16)]);
var inst_32085 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32087 = (function (){var files_not_loaded = inst_32082;
var res = inst_32080;
var res_SINGLEQUOTE_ = inst_32079;
var files_SINGLEQUOTE_ = inst_32076;
var all_files = inst_32075;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32082,inst_32079,inst_32075,inst_32076,inst_32080,inst_32085,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files){
return (function (p__32086){
var map__32150 = p__32086;
var map__32150__$1 = ((cljs.core.seq_QMARK_.call(null,map__32150))?cljs.core.apply.call(null,cljs.core.hash_map,map__32150):map__32150);
var file = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32082,inst_32079,inst_32075,inst_32076,inst_32080,inst_32085,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files))
})();
var inst_32088 = cljs.core.map.call(null,inst_32087,inst_32080);
var inst_32089 = cljs.core.pr_str.call(null,inst_32088);
var inst_32090 = figwheel.client.utils.log.call(null,inst_32089);
var inst_32091 = (function (){var files_not_loaded = inst_32082;
var res = inst_32080;
var res_SINGLEQUOTE_ = inst_32079;
var files_SINGLEQUOTE_ = inst_32076;
var all_files = inst_32075;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32082,inst_32079,inst_32075,inst_32076,inst_32080,inst_32085,inst_32087,inst_32088,inst_32089,inst_32090,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32082,inst_32079,inst_32075,inst_32076,inst_32080,inst_32085,inst_32087,inst_32088,inst_32089,inst_32090,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files))
})();
var inst_32092 = setTimeout(inst_32091,(10));
var state_32143__$1 = (function (){var statearr_32151 = state_32143;
(statearr_32151[(17)] = inst_32090);

(statearr_32151[(18)] = inst_32085);

return statearr_32151;
})();
var statearr_32152_32219 = state_32143__$1;
(statearr_32152_32219[(2)] = inst_32092);

(statearr_32152_32219[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (27))){
var inst_32102 = (state_32143[(19)]);
var state_32143__$1 = state_32143;
var statearr_32153_32220 = state_32143__$1;
(statearr_32153_32220[(2)] = inst_32102);

(statearr_32153_32220[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (1))){
var inst_32022 = (state_32143[(20)]);
var inst_32020 = before_jsload.call(null,files);
var inst_32021 = (function (){return ((function (inst_32022,inst_32020,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files){
return (function (p1__31812_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31812_SHARP_);
});
;})(inst_32022,inst_32020,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files))
})();
var inst_32022__$1 = cljs.core.filter.call(null,inst_32021,files);
var inst_32023 = cljs.core.not_empty.call(null,inst_32022__$1);
var state_32143__$1 = (function (){var statearr_32154 = state_32143;
(statearr_32154[(21)] = inst_32020);

(statearr_32154[(20)] = inst_32022__$1);

return statearr_32154;
})();
if(cljs.core.truth_(inst_32023)){
var statearr_32155_32221 = state_32143__$1;
(statearr_32155_32221[(1)] = (2));

} else {
var statearr_32156_32222 = state_32143__$1;
(statearr_32156_32222[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (24))){
var state_32143__$1 = state_32143;
var statearr_32157_32223 = state_32143__$1;
(statearr_32157_32223[(2)] = null);

(statearr_32157_32223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (4))){
var inst_32067 = (state_32143[(2)]);
var inst_32068 = (function (){return ((function (inst_32067,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files){
return (function (p1__31813_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31813_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31813_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_32067,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files))
})();
var inst_32069 = cljs.core.filter.call(null,inst_32068,files);
var state_32143__$1 = (function (){var statearr_32158 = state_32143;
(statearr_32158[(22)] = inst_32069);

(statearr_32158[(23)] = inst_32067);

return statearr_32158;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_32159_32224 = state_32143__$1;
(statearr_32159_32224[(1)] = (16));

} else {
var statearr_32160_32225 = state_32143__$1;
(statearr_32160_32225[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (15))){
var inst_32057 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32161_32226 = state_32143__$1;
(statearr_32161_32226[(2)] = inst_32057);

(statearr_32161_32226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (21))){
var state_32143__$1 = state_32143;
var statearr_32162_32227 = state_32143__$1;
(statearr_32162_32227[(2)] = null);

(statearr_32162_32227[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (31))){
var inst_32110 = (state_32143[(24)]);
var inst_32120 = (state_32143[(2)]);
var inst_32121 = cljs.core.not_empty.call(null,inst_32110);
var state_32143__$1 = (function (){var statearr_32163 = state_32143;
(statearr_32163[(25)] = inst_32120);

return statearr_32163;
})();
if(cljs.core.truth_(inst_32121)){
var statearr_32164_32228 = state_32143__$1;
(statearr_32164_32228[(1)] = (32));

} else {
var statearr_32165_32229 = state_32143__$1;
(statearr_32165_32229[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (32))){
var inst_32110 = (state_32143[(24)]);
var inst_32123 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32110);
var inst_32124 = cljs.core.pr_str.call(null,inst_32123);
var inst_32125 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_32124)].join('');
var inst_32126 = figwheel.client.utils.log.call(null,inst_32125);
var state_32143__$1 = state_32143;
var statearr_32166_32230 = state_32143__$1;
(statearr_32166_32230[(2)] = inst_32126);

(statearr_32166_32230[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (33))){
var state_32143__$1 = state_32143;
var statearr_32167_32231 = state_32143__$1;
(statearr_32167_32231[(2)] = null);

(statearr_32167_32231[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (13))){
var inst_32043 = (state_32143[(26)]);
var inst_32047 = cljs.core.chunk_first.call(null,inst_32043);
var inst_32048 = cljs.core.chunk_rest.call(null,inst_32043);
var inst_32049 = cljs.core.count.call(null,inst_32047);
var inst_32030 = inst_32048;
var inst_32031 = inst_32047;
var inst_32032 = inst_32049;
var inst_32033 = (0);
var state_32143__$1 = (function (){var statearr_32168 = state_32143;
(statearr_32168[(7)] = inst_32032);

(statearr_32168[(8)] = inst_32033);

(statearr_32168[(9)] = inst_32030);

(statearr_32168[(10)] = inst_32031);

return statearr_32168;
})();
var statearr_32169_32232 = state_32143__$1;
(statearr_32169_32232[(2)] = null);

(statearr_32169_32232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (22))){
var inst_32082 = (state_32143[(12)]);
var inst_32095 = (state_32143[(2)]);
var inst_32096 = cljs.core.not_empty.call(null,inst_32082);
var state_32143__$1 = (function (){var statearr_32170 = state_32143;
(statearr_32170[(27)] = inst_32095);

return statearr_32170;
})();
if(cljs.core.truth_(inst_32096)){
var statearr_32171_32233 = state_32143__$1;
(statearr_32171_32233[(1)] = (23));

} else {
var statearr_32172_32234 = state_32143__$1;
(statearr_32172_32234[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (36))){
var state_32143__$1 = state_32143;
var statearr_32173_32235 = state_32143__$1;
(statearr_32173_32235[(2)] = null);

(statearr_32173_32235[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (29))){
var inst_32111 = (state_32143[(28)]);
var inst_32114 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32111);
var inst_32115 = cljs.core.pr_str.call(null,inst_32114);
var inst_32116 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32115)].join('');
var inst_32117 = figwheel.client.utils.log.call(null,inst_32116);
var state_32143__$1 = state_32143;
var statearr_32174_32236 = state_32143__$1;
(statearr_32174_32236[(2)] = inst_32117);

(statearr_32174_32236[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (6))){
var inst_32064 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32175_32237 = state_32143__$1;
(statearr_32175_32237[(2)] = inst_32064);

(statearr_32175_32237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (28))){
var inst_32111 = (state_32143[(28)]);
var inst_32108 = (state_32143[(2)]);
var inst_32109 = cljs.core.get.call(null,inst_32108,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32110 = cljs.core.get.call(null,inst_32108,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_32111__$1 = cljs.core.get.call(null,inst_32108,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32112 = cljs.core.not_empty.call(null,inst_32111__$1);
var state_32143__$1 = (function (){var statearr_32176 = state_32143;
(statearr_32176[(29)] = inst_32109);

(statearr_32176[(28)] = inst_32111__$1);

(statearr_32176[(24)] = inst_32110);

return statearr_32176;
})();
if(cljs.core.truth_(inst_32112)){
var statearr_32177_32238 = state_32143__$1;
(statearr_32177_32238[(1)] = (29));

} else {
var statearr_32178_32239 = state_32143__$1;
(statearr_32178_32239[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (25))){
var inst_32141 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32143__$1,inst_32141);
} else {
if((state_val_32144 === (34))){
var inst_32109 = (state_32143[(29)]);
var inst_32129 = (state_32143[(2)]);
var inst_32130 = cljs.core.not_empty.call(null,inst_32109);
var state_32143__$1 = (function (){var statearr_32179 = state_32143;
(statearr_32179[(30)] = inst_32129);

return statearr_32179;
})();
if(cljs.core.truth_(inst_32130)){
var statearr_32180_32240 = state_32143__$1;
(statearr_32180_32240[(1)] = (35));

} else {
var statearr_32181_32241 = state_32143__$1;
(statearr_32181_32241[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (17))){
var inst_32069 = (state_32143[(22)]);
var state_32143__$1 = state_32143;
var statearr_32182_32242 = state_32143__$1;
(statearr_32182_32242[(2)] = inst_32069);

(statearr_32182_32242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (3))){
var state_32143__$1 = state_32143;
var statearr_32183_32243 = state_32143__$1;
(statearr_32183_32243[(2)] = null);

(statearr_32183_32243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (12))){
var inst_32060 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32184_32244 = state_32143__$1;
(statearr_32184_32244[(2)] = inst_32060);

(statearr_32184_32244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (2))){
var inst_32022 = (state_32143[(20)]);
var inst_32029 = cljs.core.seq.call(null,inst_32022);
var inst_32030 = inst_32029;
var inst_32031 = null;
var inst_32032 = (0);
var inst_32033 = (0);
var state_32143__$1 = (function (){var statearr_32185 = state_32143;
(statearr_32185[(7)] = inst_32032);

(statearr_32185[(8)] = inst_32033);

(statearr_32185[(9)] = inst_32030);

(statearr_32185[(10)] = inst_32031);

return statearr_32185;
})();
var statearr_32186_32245 = state_32143__$1;
(statearr_32186_32245[(2)] = null);

(statearr_32186_32245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (23))){
var inst_32082 = (state_32143[(12)]);
var inst_32079 = (state_32143[(13)]);
var inst_32075 = (state_32143[(14)]);
var inst_32076 = (state_32143[(15)]);
var inst_32080 = (state_32143[(16)]);
var inst_32102 = (state_32143[(19)]);
var inst_32098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32101 = (function (){var files_not_loaded = inst_32082;
var res = inst_32080;
var res_SINGLEQUOTE_ = inst_32079;
var files_SINGLEQUOTE_ = inst_32076;
var all_files = inst_32075;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32082,inst_32079,inst_32075,inst_32076,inst_32080,inst_32102,inst_32098,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files){
return (function (p__32100){
var map__32187 = p__32100;
var map__32187__$1 = ((cljs.core.seq_QMARK_.call(null,map__32187))?cljs.core.apply.call(null,cljs.core.hash_map,map__32187):map__32187);
var meta_data = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32082,inst_32079,inst_32075,inst_32076,inst_32080,inst_32102,inst_32098,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files))
})();
var inst_32102__$1 = cljs.core.group_by.call(null,inst_32101,inst_32082);
var inst_32103 = cljs.core.seq_QMARK_.call(null,inst_32102__$1);
var state_32143__$1 = (function (){var statearr_32188 = state_32143;
(statearr_32188[(31)] = inst_32098);

(statearr_32188[(19)] = inst_32102__$1);

return statearr_32188;
})();
if(inst_32103){
var statearr_32189_32246 = state_32143__$1;
(statearr_32189_32246[(1)] = (26));

} else {
var statearr_32190_32247 = state_32143__$1;
(statearr_32190_32247[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (35))){
var inst_32109 = (state_32143[(29)]);
var inst_32132 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32109);
var inst_32133 = cljs.core.pr_str.call(null,inst_32132);
var inst_32134 = [cljs.core.str("not required: "),cljs.core.str(inst_32133)].join('');
var inst_32135 = figwheel.client.utils.log.call(null,inst_32134);
var state_32143__$1 = state_32143;
var statearr_32191_32248 = state_32143__$1;
(statearr_32191_32248[(2)] = inst_32135);

(statearr_32191_32248[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (19))){
var inst_32079 = (state_32143[(13)]);
var inst_32075 = (state_32143[(14)]);
var inst_32076 = (state_32143[(15)]);
var inst_32080 = (state_32143[(16)]);
var inst_32079__$1 = (state_32143[(2)]);
var inst_32080__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32079__$1);
var inst_32081 = (function (){var res = inst_32080__$1;
var res_SINGLEQUOTE_ = inst_32079__$1;
var files_SINGLEQUOTE_ = inst_32076;
var all_files = inst_32075;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32079,inst_32075,inst_32076,inst_32080,inst_32079__$1,inst_32080__$1,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files){
return (function (p1__31815_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31815_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32079,inst_32075,inst_32076,inst_32080,inst_32079__$1,inst_32080__$1,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files))
})();
var inst_32082 = cljs.core.filter.call(null,inst_32081,inst_32079__$1);
var inst_32083 = cljs.core.not_empty.call(null,inst_32080__$1);
var state_32143__$1 = (function (){var statearr_32192 = state_32143;
(statearr_32192[(12)] = inst_32082);

(statearr_32192[(13)] = inst_32079__$1);

(statearr_32192[(16)] = inst_32080__$1);

return statearr_32192;
})();
if(cljs.core.truth_(inst_32083)){
var statearr_32193_32249 = state_32143__$1;
(statearr_32193_32249[(1)] = (20));

} else {
var statearr_32194_32250 = state_32143__$1;
(statearr_32194_32250[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (11))){
var state_32143__$1 = state_32143;
var statearr_32195_32251 = state_32143__$1;
(statearr_32195_32251[(2)] = null);

(statearr_32195_32251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (9))){
var inst_32062 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32196_32252 = state_32143__$1;
(statearr_32196_32252[(2)] = inst_32062);

(statearr_32196_32252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (5))){
var inst_32032 = (state_32143[(7)]);
var inst_32033 = (state_32143[(8)]);
var inst_32035 = (inst_32033 < inst_32032);
var inst_32036 = inst_32035;
var state_32143__$1 = state_32143;
if(cljs.core.truth_(inst_32036)){
var statearr_32197_32253 = state_32143__$1;
(statearr_32197_32253[(1)] = (7));

} else {
var statearr_32198_32254 = state_32143__$1;
(statearr_32198_32254[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (14))){
var inst_32043 = (state_32143[(26)]);
var inst_32052 = cljs.core.first.call(null,inst_32043);
var inst_32053 = figwheel.client.file_reloading.eval_body.call(null,inst_32052);
var inst_32054 = cljs.core.next.call(null,inst_32043);
var inst_32030 = inst_32054;
var inst_32031 = null;
var inst_32032 = (0);
var inst_32033 = (0);
var state_32143__$1 = (function (){var statearr_32199 = state_32143;
(statearr_32199[(7)] = inst_32032);

(statearr_32199[(8)] = inst_32033);

(statearr_32199[(9)] = inst_32030);

(statearr_32199[(10)] = inst_32031);

(statearr_32199[(32)] = inst_32053);

return statearr_32199;
})();
var statearr_32200_32255 = state_32143__$1;
(statearr_32200_32255[(2)] = null);

(statearr_32200_32255[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (26))){
var inst_32102 = (state_32143[(19)]);
var inst_32105 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32102);
var state_32143__$1 = state_32143;
var statearr_32201_32256 = state_32143__$1;
(statearr_32201_32256[(2)] = inst_32105);

(statearr_32201_32256[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (16))){
var inst_32069 = (state_32143[(22)]);
var inst_32071 = (function (){var all_files = inst_32069;
return ((function (all_files,inst_32069,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files){
return (function (p1__31814_SHARP_){
return cljs.core.update_in.call(null,p1__31814_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_32069,state_val_32144,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files))
})();
var inst_32072 = cljs.core.map.call(null,inst_32071,inst_32069);
var state_32143__$1 = state_32143;
var statearr_32202_32257 = state_32143__$1;
(statearr_32202_32257[(2)] = inst_32072);

(statearr_32202_32257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (30))){
var state_32143__$1 = state_32143;
var statearr_32203_32258 = state_32143__$1;
(statearr_32203_32258[(2)] = null);

(statearr_32203_32258[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (10))){
var inst_32043 = (state_32143[(26)]);
var inst_32045 = cljs.core.chunked_seq_QMARK_.call(null,inst_32043);
var state_32143__$1 = state_32143;
if(inst_32045){
var statearr_32204_32259 = state_32143__$1;
(statearr_32204_32259[(1)] = (13));

} else {
var statearr_32205_32260 = state_32143__$1;
(statearr_32205_32260[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (18))){
var inst_32075 = (state_32143[(14)]);
var inst_32076 = (state_32143[(15)]);
var inst_32075__$1 = (state_32143[(2)]);
var inst_32076__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_32075__$1);
var inst_32077 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32076__$1);
var state_32143__$1 = (function (){var statearr_32206 = state_32143;
(statearr_32206[(14)] = inst_32075__$1);

(statearr_32206[(15)] = inst_32076__$1);

return statearr_32206;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32143__$1,(19),inst_32077);
} else {
if((state_val_32144 === (37))){
var inst_32138 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32207_32261 = state_32143__$1;
(statearr_32207_32261[(2)] = inst_32138);

(statearr_32207_32261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (8))){
var inst_32043 = (state_32143[(26)]);
var inst_32030 = (state_32143[(9)]);
var inst_32043__$1 = cljs.core.seq.call(null,inst_32030);
var state_32143__$1 = (function (){var statearr_32208 = state_32143;
(statearr_32208[(26)] = inst_32043__$1);

return statearr_32208;
})();
if(inst_32043__$1){
var statearr_32209_32262 = state_32143__$1;
(statearr_32209_32262[(1)] = (10));

} else {
var statearr_32210_32263 = state_32143__$1;
(statearr_32210_32263[(1)] = (11));

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
});})(c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files))
;
return ((function (switch__19513__auto__,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_32214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32214[(0)] = state_machine__19514__auto__);

(statearr_32214[(1)] = (1));

return statearr_32214;
});
var state_machine__19514__auto____1 = (function (state_32143){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_32143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e32215){if((e32215 instanceof Object)){
var ex__19517__auto__ = e32215;
var statearr_32216_32264 = state_32143;
(statearr_32216_32264[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32265 = state_32143;
state_32143 = G__32265;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_32143){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_32143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files))
})();
var state__19571__auto__ = (function (){var statearr_32217 = f__19570__auto__.call(null);
(statearr_32217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_32217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__,map__32018,map__32018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32019,map__32019__$1,msg,files))
);

return c__19569__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__32268,link){
var map__32270 = p__32268;
var map__32270__$1 = ((cljs.core.seq_QMARK_.call(null,map__32270))?cljs.core.apply.call(null,cljs.core.hash_map,map__32270):map__32270);
var file = cljs.core.get.call(null,map__32270__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__32270,map__32270__$1,file){
return (function (p1__32266_SHARP_,p2__32267_SHARP_){
if(cljs.core._EQ_.call(null,p1__32266_SHARP_,p2__32267_SHARP_)){
return p1__32266_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__32270,map__32270__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32274){
var map__32275 = p__32274;
var map__32275__$1 = ((cljs.core.seq_QMARK_.call(null,map__32275))?cljs.core.apply.call(null,cljs.core.hash_map,map__32275):map__32275);
var current_url_length = cljs.core.get.call(null,map__32275__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__32275__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32271_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32271_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__32276){
var map__32278 = p__32276;
var map__32278__$1 = ((cljs.core.seq_QMARK_.call(null,map__32278))?cljs.core.apply.call(null,cljs.core.hash_map,map__32278):map__32278);
var f_data = map__32278__$1;
var request_url = cljs.core.get.call(null,map__32278__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__32278__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__32279,files_msg){
var map__32301 = p__32279;
var map__32301__$1 = ((cljs.core.seq_QMARK_.call(null,map__32301))?cljs.core.apply.call(null,cljs.core.hash_map,map__32301):map__32301);
var opts = map__32301__$1;
var on_cssload = cljs.core.get.call(null,map__32301__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32302_32322 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32303_32323 = null;
var count__32304_32324 = (0);
var i__32305_32325 = (0);
while(true){
if((i__32305_32325 < count__32304_32324)){
var f_32326 = cljs.core._nth.call(null,chunk__32303_32323,i__32305_32325);
figwheel.client.file_reloading.reload_css_file.call(null,f_32326);

var G__32327 = seq__32302_32322;
var G__32328 = chunk__32303_32323;
var G__32329 = count__32304_32324;
var G__32330 = (i__32305_32325 + (1));
seq__32302_32322 = G__32327;
chunk__32303_32323 = G__32328;
count__32304_32324 = G__32329;
i__32305_32325 = G__32330;
continue;
} else {
var temp__4126__auto___32331 = cljs.core.seq.call(null,seq__32302_32322);
if(temp__4126__auto___32331){
var seq__32302_32332__$1 = temp__4126__auto___32331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32302_32332__$1)){
var c__16932__auto___32333 = cljs.core.chunk_first.call(null,seq__32302_32332__$1);
var G__32334 = cljs.core.chunk_rest.call(null,seq__32302_32332__$1);
var G__32335 = c__16932__auto___32333;
var G__32336 = cljs.core.count.call(null,c__16932__auto___32333);
var G__32337 = (0);
seq__32302_32322 = G__32334;
chunk__32303_32323 = G__32335;
count__32304_32324 = G__32336;
i__32305_32325 = G__32337;
continue;
} else {
var f_32338 = cljs.core.first.call(null,seq__32302_32332__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32338);

var G__32339 = cljs.core.next.call(null,seq__32302_32332__$1);
var G__32340 = null;
var G__32341 = (0);
var G__32342 = (0);
seq__32302_32322 = G__32339;
chunk__32303_32323 = G__32340;
count__32304_32324 = G__32341;
i__32305_32325 = G__32342;
continue;
}
} else {
}
}
break;
}

var c__19569__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19569__auto__,map__32301,map__32301__$1,opts,on_cssload){
return (function (){
var f__19570__auto__ = (function (){var switch__19513__auto__ = ((function (c__19569__auto__,map__32301,map__32301__$1,opts,on_cssload){
return (function (state_32312){
var state_val_32313 = (state_32312[(1)]);
if((state_val_32313 === (2))){
var inst_32308 = (state_32312[(2)]);
var inst_32309 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_32310 = on_cssload.call(null,inst_32309);
var state_32312__$1 = (function (){var statearr_32314 = state_32312;
(statearr_32314[(7)] = inst_32308);

return statearr_32314;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32312__$1,inst_32310);
} else {
if((state_val_32313 === (1))){
var inst_32306 = cljs.core.async.timeout.call(null,(100));
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32312__$1,(2),inst_32306);
} else {
return null;
}
}
});})(c__19569__auto__,map__32301,map__32301__$1,opts,on_cssload))
;
return ((function (switch__19513__auto__,c__19569__auto__,map__32301,map__32301__$1,opts,on_cssload){
return (function() {
var state_machine__19514__auto__ = null;
var state_machine__19514__auto____0 = (function (){
var statearr_32318 = [null,null,null,null,null,null,null,null];
(statearr_32318[(0)] = state_machine__19514__auto__);

(statearr_32318[(1)] = (1));

return statearr_32318;
});
var state_machine__19514__auto____1 = (function (state_32312){
while(true){
var ret_value__19515__auto__ = (function (){try{while(true){
var result__19516__auto__ = switch__19513__auto__.call(null,state_32312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19516__auto__;
}
break;
}
}catch (e32319){if((e32319 instanceof Object)){
var ex__19517__auto__ = e32319;
var statearr_32320_32343 = state_32312;
(statearr_32320_32343[(5)] = ex__19517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32344 = state_32312;
state_32312 = G__32344;
continue;
} else {
return ret_value__19515__auto__;
}
break;
}
});
state_machine__19514__auto__ = function(state_32312){
switch(arguments.length){
case 0:
return state_machine__19514__auto____0.call(this);
case 1:
return state_machine__19514__auto____1.call(this,state_32312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19514__auto____0;
state_machine__19514__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19514__auto____1;
return state_machine__19514__auto__;
})()
;})(switch__19513__auto__,c__19569__auto__,map__32301,map__32301__$1,opts,on_cssload))
})();
var state__19571__auto__ = (function (){var statearr_32321 = f__19570__auto__.call(null);
(statearr_32321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19569__auto__);

return statearr_32321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19571__auto__);
});})(c__19569__auto__,map__32301,map__32301__$1,opts,on_cssload))
);

return c__19569__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1428378452469