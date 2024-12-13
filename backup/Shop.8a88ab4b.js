// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("react-refresh/runtime");
var ErrorOverlay = require("react-error-overlay");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"fwKUx":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e0e04e288a88ab4b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hP3vd":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$680c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$680c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _get = require("lodash/get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactHelmet = require("react-helmet");
var _reactRouterDom = require("react-router-dom");
var _errors = require("../Errors/Errors");
var _errorsDefault = parcelHelpers.interopDefault(_errors);
var _shopItem = require("./ShopItem/ShopItem");
var _shopItemDefault = parcelHelpers.interopDefault(_shopItem);
var _utils = require("../../shared/utils");
var _i18N = require("../../shared/i18n");
var _shopScss = require("./Shop.scss");
var _s = $RefreshSig$();
/**
 * Shop
 */ const Shop = ({ page , name  })=>{
    _s();
    const sourceAxios = (0, _react.useRef)();
    const [data, setData] = (0, _react.useState)({});
    const [error, setError] = (0, _react.useState)(undefined);
    const [currentItem, setCurrentItem] = (0, _react.useState)(null);
    const [prevItem, setPrevItem] = (0, _react.useState)(null);
    const [nextItem, setNextItem] = (0, _react.useState)(null);
    const { id  } = (0, _reactRouterDom.useParams)();
    const url = `/${window.LOCALE_VELASCA}/shop/`;
    const location = (0, _reactRouterDom.useLocation)();
    const currentBaseUrl = location.pathname.slice(0, location.pathname.lastIndexOf("/"));
    (0, _react.useEffect)(()=>{
        let isSubscribed = true;
        sourceAxios.current = (0, _axiosDefault.default).CancelToken.source();
        async function getData() {
            try {
                await (0, _axiosDefault.default).get(`${(0, _utils.getApiGet)()}${page}`, {
                    params: {
                        lang: window.LOCALE_VELASCA
                    },
                    headers: {
                        "Cockpit-Token": (0, _utils.getApiToken)()
                    }
                }).then(({ data: dataAxios  })=>{
                    if (isSubscribed) {
                        setData(dataAxios);
                        // add id
                        if (id >= 0) handleChangeItem(dataAxios.entries[0].products.products[id - 1]);
                    }
                });
            } catch (error) {
                setError(error);
            }
        }
        getData();
        return ()=>{
            isSubscribed = false;
            if (sourceAxios.current) sourceAxios.current.cancel();
        };
    }, []);
    (0, _react.useEffect)(()=>{
        if (id >= 0 && Object.keys(data).length > 0) handleChangeItem(products[id - 1]);
        else setCurrentItem(null);
    }, [
        id
    ]);
    const { entries ={} , fields ={}  } = data;
    const { background , products: { products  } = {
        products: []
    }  } = (0, _getDefault.default)(data, "entries[0]", []);
    const currentURL = `https://www.asvelasca.it/${window.LOCALE_VELASCA}/${page}`;
    const handleChangeItem = (currentItem)=>{
        const index = products.indexOf(currentItem);
        const prevProduct = index === 0 ? products.length - 1 : index - 1;
        const nextProduct = index >= products.length - 1 ? 0 : index + 1;
        setCurrentItem(currentItem);
        setPrevItem(products[prevProduct]);
        setNextItem(products[nextProduct]);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Shop",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactHelmet.Helmet), {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("title", {
                        children: `.:: A.S. VELASCA ::. ${name.toUpperCase()}`
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        name: "Description",
                        content: "La terza squadra di Milano"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        name: "Keywords",
                        content: "a.s. velasca, marco de girolamo, karim khideur, loris mandelli, wolfgang natlacen, cl\xe9ment tournus, milano, terza squadra di milano"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:title",
                        content: "A.S. Velasca"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 103,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:url",
                        content: currentURL
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 104,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:image",
                        content: "https://www.asvelasca.it/asvelasca-fb.jpg"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:description",
                        content: "WE ARE ALL BUT A FOOTBALL TEAM"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 106,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:site_name",
                        content: ".:: A.S. Velasca ::."
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "twitter:url",
                        content: currentURL
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "twitter:title",
                        content: ".:: A.S. VELASCA ::."
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "twitter:description",
                        content: "WE ARE ALL BUT A FOOTBALL TEAM"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "twitter:image",
                        content: "https://www.asvelasca.it/asvelasca-fb.jpg"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 113,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("link", {
                        rel: "shortcut icon",
                        href: "https://www.asvelasca.it/velascam.png"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Shop/Shop.js",
                lineNumber: 98,
                columnNumber: 7
            }, undefined),
            background && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDefault.default).Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Shop__imageContainer",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: `${(0, _utils.getServerUrl)()}${background.path}`,
                            alt: background.title || "As Velasca",
                            className: "Shop__image"
                        }, void 0, false, {
                            fileName: "src/components/Shop/Shop.js",
                            lineNumber: 118,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 117,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Shop__overlay"
                    }, void 0, false, {
                        fileName: "src/components/Shop/Shop.js",
                        lineNumber: 120,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Shop/Shop.js",
                lineNumber: 116,
                columnNumber: 22
            }, undefined),
            currentItem ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shopItemDefault.default), {
                item: currentItem,
                handleResetItem: ()=>setCurrentItem(null),
                nextItem: nextItem,
                prevItem: prevItem,
                handleChangeItem: handleChangeItem,
                backUrl: currentBaseUrl
            }, void 0, false, {
                fileName: "src/components/Shop/Shop.js",
                lineNumber: 122,
                columnNumber: 22
            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDefault.default).Fragment, {
                children: products && products.length > 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "Shop__products",
                    children: products.map((product, index)=>{
                        const { image , sizeOnSite , price , name , season , artist , isSoldOut , video , hasVideo  } = product;
                        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: (0, _classnamesDefault.default)("Shop__product", {
                                Shop__bigProduct: sizeOnSite === 2
                            }),
                            onClick: (e)=>{
                                e.preventDefault();
                            },
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                to: `${url}${index + 1}`,
                                children: [
                                    !hasVideo ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                        className: "Shop__productImage",
                                        src: image,
                                        alt: name
                                    }, void 0, false, {
                                        fileName: "src/components/Shop/Shop.js",
                                        lineNumber: 142,
                                        columnNumber: 36
                                    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("video", {
                                        className: "Shop__productImage",
                                        autoPlay: true,
                                        muted: true,
                                        loop: true,
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("source", {
                                            src: video,
                                            type: "video/mp4"
                                        }, void 0, false, {
                                            fileName: "src/components/Shop/Shop.js",
                                            lineNumber: 143,
                                            columnNumber: 27
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Shop/Shop.js",
                                        lineNumber: 142,
                                        columnNumber: 100
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "Shop__productHover",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "Shop__productSeason",
                                                children: season
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/Shop.js",
                                                lineNumber: 146,
                                                columnNumber: 25
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "Shop__productName",
                                                children: name
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/Shop.js",
                                                lineNumber: 147,
                                                columnNumber: 25
                                            }, undefined),
                                            artist && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "Shop__productArtist",
                                                children: artist
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/Shop.js",
                                                lineNumber: 148,
                                                columnNumber: 36
                                            }, undefined),
                                            !isSoldOut ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "Shop__productPrice",
                                                children: `${price} €`
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/Shop.js",
                                                lineNumber: 149,
                                                columnNumber: 39
                                            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "Shop__productSoldOut",
                                                children: (0, _i18N.translate)("soldOut")
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/Shop.js",
                                                lineNumber: 149,
                                                columnNumber: 98
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Shop/Shop.js",
                                        lineNumber: 145,
                                        columnNumber: 23
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Shop/Shop.js",
                                lineNumber: 141,
                                columnNumber: 21
                            }, undefined)
                        }, name, false, {
                            fileName: "src/components/Shop/Shop.js",
                            lineNumber: 136,
                            columnNumber: 18
                        }, undefined);
                    })
                }, void 0, false, {
                    fileName: "src/components/Shop/Shop.js",
                    lineNumber: 123,
                    columnNumber: 47
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Shop/Shop.js",
                lineNumber: 122,
                columnNumber: 202
            }, undefined),
            error && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _errorsDefault.default), {
                message: (0, _getDefault.default)(error, "message"),
                code: (0, _getDefault.default)(error, "response.status")
            }, void 0, false, {
                fileName: "src/components/Shop/Shop.js",
                lineNumber: 156,
                columnNumber: 17
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Shop/Shop.js",
        lineNumber: 97,
        columnNumber: 10
    }, undefined);
};
_s(Shop, "9scLWTDvgSMqhoNrvOJ9sjhDx8k=", false, function() {
    return [
        (0, _reactRouterDom.useParams),
        (0, _reactRouterDom.useLocation)
    ];
});
_c = Shop;
exports.default = Shop;
var _c;
$RefreshReg$(_c, "Shop");

  $parcel$ReactRefreshHelpers$680c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","axios":"jo6P5","classnames":"jocGM","lodash/get":"8UELX","react":"21dqq","react-helmet":"fcX6K","react-router-dom":"cHIiW","../Errors/Errors":"iNc9G","./ShopItem/ShopItem":"3HAL6","../../shared/utils":"3VUNA","../../shared/i18n":"aB5oJ","./Shop.scss":"lREMf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"3HAL6":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b1c2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b1c2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactSelect = require("react-select");
var _reactSelectDefault = parcelHelpers.interopDefault(_reactSelect);
var _reactRouterDom = require("react-router-dom");
var _i18N = require("../../../shared/i18n");
var _shopItemScss = require("./ShopItem.scss");
var _s = $RefreshSig$();
/**
 * ShopItem
 */ const ShopItem = ({ item , handleResetItem , handleChangeItem , prevItem , nextItem , backUrl  })=>{
    _s();
    const { image , price , name , season , description , options , sizes , buttonId , enablePerso , hideShippingPrice , isSoldOut , delivery , fdpPrice , hasVideo , video  } = item;
    const [displayPrice, setDisplayPrice] = (0, _react.useState)("");
    const [isPersonalisable, setIsPersonalisable] = (0, _react.useState)(false);
    const selectOptions = options && options.length > 0 && options.map(({ key , value , price , isPersonalisable  })=>({
            label: value,
            value: key,
            price,
            isPersonalisable
        }));
    const selectSizes = sizes && sizes.length > 0 && sizes.map((size)=>({
            label: size,
            value: size
        }));
    const colourStyles = {
        option: (styles, {})=>({
                ...styles,
                backgroundColor: "#FFF",
                color: "#000",
                cursor: "pointer",
                ":hover": {
                    ...styles[":hover"],
                    backgroundColor: "#ff3e3e",
                    color: "#FFF"
                },
                ":active": {
                    ...styles[":active"],
                    backgroundColor: "#ff3e3e",
                    color: "#FFF"
                }
            })
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "ShopItem",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                to: `/${window.LOCALE_VELASCA}/shop`,
                className: "ShopItem__back",
                children: (0, _i18N.translate)("backToList")
            }, void 0, false, {
                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                lineNumber: 72,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "ShopItem__content",
                children: [
                    !hasVideo ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "ShopItem__image",
                        src: image,
                        alt: name
                    }, void 0, false, {
                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                        lineNumber: 76,
                        columnNumber: 22
                    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("video", {
                        className: "ShopItem__productImage",
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("source", {
                            src: video,
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "src/components/Shop/ShopItem/ShopItem.js",
                            lineNumber: 77,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                        lineNumber: 76,
                        columnNumber: 83
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "ShopItem__product",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "ShopItem__productInfo",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "ShopItem__productName",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, undefined),
                                    !isSoldOut && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "ShopItem__productPrice",
                                        children: [
                                            displayPrice || price,
                                            " €"
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                        lineNumber: 82,
                                        columnNumber: 28
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "ShopItem__productDescription",
                                children: description
                            }, void 0, false, {
                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                lineNumber: 84,
                                columnNumber: 11
                            }, undefined),
                            !isSoldOut ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDefault.default).Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
                                        className: "Shop__Form",
                                        action: "https://www.paypal.com/cgi-bin/webscr",
                                        method: "post",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                name: "cmd",
                                                type: "hidden",
                                                value: "_s-xclick"
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                name: "hosted_button_id",
                                                type: "hidden",
                                                value: buttonId
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, undefined),
                                            selectOptions && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDefault.default).Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                        name: "on0",
                                                        type: "hidden",
                                                        value: "Options"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                        lineNumber: 91,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactSelectDefault.default), {
                                                        options: selectOptions,
                                                        isClearable: false,
                                                        isSearchable: false,
                                                        name: "os0",
                                                        className: "ShopItem__select ShopItem__productOptions",
                                                        styles: colourStyles,
                                                        placeholder: "Select option",
                                                        defaultValue: selectOptions[0],
                                                        onChange: ({ price , isPersonalisable  })=>{
                                                            setDisplayPrice(price);
                                                            setIsPersonalisable(isPersonalisable);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 90,
                                                columnNumber: 35
                                            }, undefined),
                                            selectSizes && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDefault.default).Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                        name: "on0",
                                                        type: "hidden",
                                                        value: "Options"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactSelectDefault.default), {
                                                        options: selectSizes,
                                                        isClearable: false,
                                                        isSearchable: false,
                                                        name: "on1",
                                                        className: "ShopItem__select ShopItem__productSizes",
                                                        styles: colourStyles,
                                                        placeholder: "Select size",
                                                        defaultValue: selectSizes[0]
                                                    }, void 0, false, {
                                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 100,
                                                columnNumber: 33
                                            }, undefined),
                                            enablePerso && isPersonalisable && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "ShopItem__personalization",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        className: "ShopItem__personalizationAlert",
                                                        children: (0, _i18N.translate)("personalize")
                                                    }, void 0, false, {
                                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                        name: "on2",
                                                        type: "hidden",
                                                        value: "(Personalisation)"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                        type: "text",
                                                        name: "os2",
                                                        placeholder: (0, _i18N.translate)("persoPlaceHolder"),
                                                        className: "ShopItem__personalizationInput"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 104,
                                                columnNumber: 53
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                className: "ShopItem__productButton",
                                                name: "submit",
                                                type: "submit",
                                                children: (0, _i18N.translate)("buy")
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: "https://www.paypalobjects.com/it_IT/i/scr/pixel.gif",
                                                alt: "",
                                                width: "1",
                                                height: "1",
                                                border: "0"
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "ShopItem__productDisclaimer",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                children: "payment via credit card / Paypal "
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, undefined),
                                            !hideShippingPrice && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                children: [
                                                    "Shipping and handling: ",
                                                    fdpPrice ? fdpPrice.toString() : "9",
                                                    "€ "
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 117,
                                                columnNumber: 40
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                children: "Shipping worldwide"
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, undefined),
                                            delivery && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                children: delivery
                                            }, void 0, false, {
                                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                                lineNumber: 119,
                                                columnNumber: 30
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                lineNumber: 86,
                                columnNumber: 25
                            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "ShopItem__productSoldOut",
                                children: [
                                    (0, _i18N.translate)("soldOut"),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                lineNumber: 121,
                                columnNumber: 33
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "ShopItem__navigation",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                        href: "#",
                                        onClick: ()=>handleChangeItem(prevItem),
                                        children: "Prev item"
                                    }, void 0, false, {
                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                        href: "#",
                                        onClick: ()=>handleChangeItem(nextItem),
                                        children: "Next item"
                                    }, void 0, false, {
                                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                                lineNumber: 123,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Shop/ShopItem/ShopItem.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Shop/ShopItem/ShopItem.js",
                lineNumber: 75,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Shop/ShopItem/ShopItem.js",
        lineNumber: 71,
        columnNumber: 10
    }, undefined);
};
_s(ShopItem, "Q0jcRJ/2UrucsMc7yitEkxKU1g4=");
_c = ShopItem;
exports.default = ShopItem;
var _c;
$RefreshReg$(_c, "ShopItem");

  $parcel$ReactRefreshHelpers$b1c2.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-select":"2Hkye","react-router-dom":"cHIiW","../../../shared/i18n":"aB5oJ","./ShopItem.scss":"54O39","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"2Hkye":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useStateManager", ()=>(0, _useStateManager7E1E8489EsmJs.u));
parcelHelpers.export(exports, "createFilter", ()=>(0, _select6Efcc53AEsmJs.c));
parcelHelpers.export(exports, "defaultTheme", ()=>(0, _select6Efcc53AEsmJs.d));
parcelHelpers.export(exports, "mergeStyles", ()=>(0, _select6Efcc53AEsmJs.m));
parcelHelpers.export(exports, "components", ()=>(0, _index9F7Dc477EsmJs.c));
parcelHelpers.export(exports, "NonceProvider", ()=>NonceProvider);
var _useStateManager7E1E8489EsmJs = require("./useStateManager-7e1e8489.esm.js");
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _react = require("react");
var _select6Efcc53AEsmJs = require("./Select-6efcc53a.esm.js");
var _react1 = require("@emotion/react");
var _cache = require("@emotion/cache");
var _cacheDefault = parcelHelpers.interopDefault(_cache);
var _index9F7Dc477EsmJs = require("./index-9f7dc477.esm.js");
var _objectSpread2 = require("@babel/runtime/helpers/objectSpread2");
var _slicedToArray = require("@babel/runtime/helpers/slicedToArray");
var _objectWithoutProperties = require("@babel/runtime/helpers/objectWithoutProperties");
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _createClass = require("@babel/runtime/helpers/createClass");
var _inherits = require("@babel/runtime/helpers/inherits");
var _createSuper = require("@babel/runtime/helpers/createSuper");
var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray");
var _memoizeOne = require("memoize-one");
var _taggedTemplateLiteral = require("@babel/runtime/helpers/taggedTemplateLiteral");
var _typeof = require("@babel/runtime/helpers/typeof");
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _reactDom = require("react-dom");
var _dom = require("@floating-ui/dom");
var _useIsomorphicLayoutEffect = require("use-isomorphic-layout-effect");
var StateManagedSelect = /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
    var baseSelectProps = (0, _useStateManager7E1E8489EsmJs.u)(props);
    return /*#__PURE__*/ _react.createElement((0, _select6Efcc53AEsmJs.S), (0, _extendsDefault.default)({
        ref: ref
    }, baseSelectProps));
});
var NonceProvider = function(_ref) {
    var nonce = _ref.nonce, children = _ref.children, cacheKey = _ref.cacheKey;
    var emotionCache = (0, _react.useMemo)(function() {
        return (0, _cacheDefault.default)({
            key: cacheKey,
            nonce: nonce
        });
    }, [
        cacheKey,
        nonce
    ]);
    return /*#__PURE__*/ _react.createElement((0, _react1.CacheProvider), {
        value: emotionCache
    }, children);
};
exports.default = StateManagedSelect;

},{"./useStateManager-7e1e8489.esm.js":"c7sNh","@babel/runtime/helpers/esm/extends":"eZS2K","react":"21dqq","./Select-6efcc53a.esm.js":"wI0Ya","@emotion/react":"9qiaY","@emotion/cache":"3Umtj","./index-9f7dc477.esm.js":"5jyQf","@babel/runtime/helpers/objectSpread2":"e4GxK","@babel/runtime/helpers/slicedToArray":"9YHrs","@babel/runtime/helpers/objectWithoutProperties":"iC3d9","@babel/runtime/helpers/classCallCheck":"g9FEw","@babel/runtime/helpers/createClass":"5hami","@babel/runtime/helpers/inherits":"lLGnP","@babel/runtime/helpers/createSuper":"18Y3H","@babel/runtime/helpers/toConsumableArray":"eHEyK","memoize-one":"ajWd5","@babel/runtime/helpers/taggedTemplateLiteral":"h5MBc","@babel/runtime/helpers/typeof":"kP6oN","@babel/runtime/helpers/defineProperty":"jqgyy","react-dom":"j6uA9","@floating-ui/dom":"1xb7B","use-isomorphic-layout-effect":"6mEgX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7sNh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "u", ()=>useStateManager);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _react = require("react");
var _excluded = [
    "defaultInputValue",
    "defaultMenuIsOpen",
    "defaultValue",
    "inputValue",
    "menuIsOpen",
    "onChange",
    "onInputChange",
    "onMenuClose",
    "onMenuOpen",
    "value"
];
function useStateManager(_ref) {
    var _ref$defaultInputValu = _ref.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref.inputValue, propsMenuIsOpen = _ref.menuIsOpen, propsOnChange = _ref.onChange, propsOnInputChange = _ref.onInputChange, propsOnMenuClose = _ref.onMenuClose, propsOnMenuOpen = _ref.onMenuOpen, propsValue = _ref.value, restSelectProps = (0, _objectWithoutPropertiesDefault.default)(_ref, _excluded);
    var _useState = (0, _react.useState)(propsInputValue !== undefined ? propsInputValue : defaultInputValue), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
    var _useState3 = (0, _react.useState)(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen), _useState4 = (0, _slicedToArrayDefault.default)(_useState3, 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
    var _useState5 = (0, _react.useState)(propsValue !== undefined ? propsValue : defaultValue), _useState6 = (0, _slicedToArrayDefault.default)(_useState5, 2), stateValue = _useState6[0], setStateValue = _useState6[1];
    var onChange = (0, _react.useCallback)(function(value, actionMeta) {
        if (typeof propsOnChange === "function") propsOnChange(value, actionMeta);
        setStateValue(value);
    }, [
        propsOnChange
    ]);
    var onInputChange = (0, _react.useCallback)(function(value, actionMeta) {
        var newValue;
        if (typeof propsOnInputChange === "function") newValue = propsOnInputChange(value, actionMeta);
        setStateInputValue(newValue !== undefined ? newValue : value);
    }, [
        propsOnInputChange
    ]);
    var onMenuOpen = (0, _react.useCallback)(function() {
        if (typeof propsOnMenuOpen === "function") propsOnMenuOpen();
        setStateMenuIsOpen(true);
    }, [
        propsOnMenuOpen
    ]);
    var onMenuClose = (0, _react.useCallback)(function() {
        if (typeof propsOnMenuClose === "function") propsOnMenuClose();
        setStateMenuIsOpen(false);
    }, [
        propsOnMenuClose
    ]);
    var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
    var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
    var value = propsValue !== undefined ? propsValue : stateValue;
    return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, restSelectProps), {}, {
        inputValue: inputValue,
        menuIsOpen: menuIsOpen,
        onChange: onChange,
        onInputChange: onInputChange,
        onMenuClose: onMenuClose,
        onMenuOpen: onMenuOpen,
        value: value
    });
}

},{"@babel/runtime/helpers/esm/objectSpread2":"4wVyh","@babel/runtime/helpers/esm/slicedToArray":"fqkSn","@babel/runtime/helpers/esm/objectWithoutProperties":"839eU","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wVyh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _definePropertyJs = require("./defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            (0, _definePropertyJsDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
exports.default = _objectSpread2;

},{"./defineProperty.js":"aTuf9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTuf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqkSn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHolesJs = require("./arrayWithHoles.js");
var _arrayWithHolesJsDefault = parcelHelpers.interopDefault(_arrayWithHolesJs);
var _iterableToArrayLimitJs = require("./iterableToArrayLimit.js");
var _iterableToArrayLimitJsDefault = parcelHelpers.interopDefault(_iterableToArrayLimitJs);
var _unsupportedIterableToArrayJs = require("./unsupportedIterableToArray.js");
var _unsupportedIterableToArrayJsDefault = parcelHelpers.interopDefault(_unsupportedIterableToArrayJs);
var _nonIterableRestJs = require("./nonIterableRest.js");
var _nonIterableRestJsDefault = parcelHelpers.interopDefault(_nonIterableRestJs);
function _slicedToArray(arr, i) {
    return (0, _arrayWithHolesJsDefault.default)(arr) || (0, _iterableToArrayLimitJsDefault.default)(arr, i) || (0, _unsupportedIterableToArrayJsDefault.default)(arr, i) || (0, _nonIterableRestJsDefault.default)();
}
exports.default = _slicedToArray;

},{"./arrayWithHoles.js":"2i6gA","./iterableToArrayLimit.js":"Jn3c0","./unsupportedIterableToArray.js":"cKNYy","./nonIterableRest.js":"j5tVp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2i6gA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Jn3c0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cKNYy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArrayJs = require("./arrayLikeToArray.js");
var _arrayLikeToArrayJsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayJs);
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, _arrayLikeToArrayJsDefault.default)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, _arrayLikeToArrayJsDefault.default)(o, minLen);
}
exports.default = _unsupportedIterableToArray;

},{"./arrayLikeToArray.js":"27aGs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"27aGs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
exports.default = _arrayLikeToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j5tVp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"839eU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLooseJs = require("./objectWithoutPropertiesLoose.js");
var _objectWithoutPropertiesLooseJsDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLooseJs);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = (0, _objectWithoutPropertiesLooseJsDefault.default)(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./objectWithoutPropertiesLoose.js":"exYYw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exYYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports.default = _objectWithoutPropertiesLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZS2K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"wI0Ya":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "S", ()=>Select);
parcelHelpers.export(exports, "a", ()=>defaultProps);
parcelHelpers.export(exports, "b", ()=>getOptionLabel$1);
parcelHelpers.export(exports, "c", ()=>createFilter);
parcelHelpers.export(exports, "d", ()=>defaultTheme);
parcelHelpers.export(exports, "g", ()=>getOptionValue$1);
parcelHelpers.export(exports, "m", ()=>mergeStyles);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _react = require("react");
var _index9F7Dc477EsmJs = require("./index-9f7dc477.esm.js");
var _react1 = require("@emotion/react");
var _memoizeOne = require("memoize-one");
var _memoizeOneDefault = parcelHelpers.interopDefault(_memoizeOne);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
function _EMOTION_STRINGIFIED_CSS_ERROR__$2() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
// Assistive text to describe visual elements. Hidden for sighted users.
var _ref = {
    name: "1f43avz-a11yText-A11yText",
    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};
var A11yText = function A11yText(props) {
    return (0, _react1.jsx)("span", (0, _extendsDefault.default)({
        css: _ref
    }, props));
};
var defaultAriaLiveMessages = {
    guidance: function guidance(props) {
        var isSearchable = props.isSearchable, isMulti = props.isMulti, isDisabled = props.isDisabled, tabSelectsValue = props.tabSelectsValue, context = props.context;
        switch(context){
            case "menu":
                return "Use Up and Down to choose options".concat(isDisabled ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
            case "input":
                return "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "");
            case "value":
                return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
            default:
                return "";
        }
    },
    onChange: function onChange(props) {
        var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
        switch(action){
            case "deselect-option":
            case "pop-value":
            case "remove-value":
                return "option ".concat(label, ", deselected.");
            case "clear":
                return "All selected options have been cleared.";
            case "initial-input-focus":
                return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
            case "select-option":
                return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
            default:
                return "";
        }
    },
    onFocus: function onFocus(props) {
        var context = props.context, focused = props.focused, options = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected;
        var getArrayIndex = function getArrayIndex(arr, item) {
            return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
        };
        if (context === "value" && selectValue) return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
        if (context === "menu") {
            var disabled = isDisabled ? " disabled" : "";
            var status = "".concat(isSelected ? "selected" : "focused").concat(disabled);
            return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
        }
        return "";
    },
    onFilter: function onFilter(props) {
        var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
        return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
    }
};
var LiveRegion = function LiveRegion(props) {
    var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id = props.id;
    var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options = selectProps.options, screenReaderStatus = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue;
    var ariaLabel = selectProps["aria-label"];
    var ariaLive = selectProps["aria-live"];
    // Update aria live message configuration when prop changes
    var messages = (0, _react.useMemo)(function() {
        return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, defaultAriaLiveMessages), ariaLiveMessages || {});
    }, [
        ariaLiveMessages
    ]);
    // Update aria live selected option when prop changes
    var ariaSelected = (0, _react.useMemo)(function() {
        var message = "";
        if (ariaSelection && messages.onChange) {
            var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
            // select-option when !isMulti does not return option so we assume selected option is value
            var asOption = function asOption(val) {
                return !Array.isArray(val) ? val : null;
            };
            // If there is just one item from the action then get its label
            var selected = removedValue || option || asOption(value);
            var label = selected ? getOptionLabel(selected) : "";
            // If there are multiple items from the action then return an array of labels
            var multiSelected = selectedOptions || removedValues || undefined;
            var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
            var onChangeProps = (0, _objectSpread2Default.default)({
                // multiSelected items are usually items that have already been selected
                // or set by the user as a default value so we assume they are not disabled
                isDisabled: selected && isOptionDisabled(selected, selectValue),
                label: label,
                labels: labels
            }, ariaSelection);
            message = messages.onChange(onChangeProps);
        }
        return message;
    }, [
        ariaSelection,
        messages,
        isOptionDisabled,
        selectValue,
        getOptionLabel
    ]);
    var ariaFocused = (0, _react.useMemo)(function() {
        var focusMsg = "";
        var focused = focusedOption || focusedValue;
        var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
        if (focused && messages.onFocus) {
            var onFocusProps = {
                focused: focused,
                label: getOptionLabel(focused),
                isDisabled: isOptionDisabled(focused, selectValue),
                isSelected: isSelected,
                options: focusableOptions,
                context: focused === focusedOption ? "menu" : "value",
                selectValue: selectValue
            };
            focusMsg = messages.onFocus(onFocusProps);
        }
        return focusMsg;
    }, [
        focusedOption,
        focusedValue,
        getOptionLabel,
        isOptionDisabled,
        messages,
        focusableOptions,
        selectValue
    ]);
    var ariaResults = (0, _react.useMemo)(function() {
        var resultsMsg = "";
        if (menuIsOpen && options.length && messages.onFilter) {
            var resultsMessage = screenReaderStatus({
                count: focusableOptions.length
            });
            resultsMsg = messages.onFilter({
                inputValue: inputValue,
                resultsMessage: resultsMessage
            });
        }
        return resultsMsg;
    }, [
        focusableOptions,
        inputValue,
        menuIsOpen,
        messages,
        options,
        screenReaderStatus
    ]);
    var ariaGuidance = (0, _react.useMemo)(function() {
        var guidanceMsg = "";
        if (messages.guidance) {
            var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
            guidanceMsg = messages.guidance({
                "aria-label": ariaLabel,
                context: context,
                isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
                isMulti: isMulti,
                isSearchable: isSearchable,
                tabSelectsValue: tabSelectsValue
            });
        }
        return guidanceMsg;
    }, [
        ariaLabel,
        focusedOption,
        focusedValue,
        isMulti,
        isOptionDisabled,
        isSearchable,
        menuIsOpen,
        messages,
        selectValue,
        tabSelectsValue
    ]);
    var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
    var ScreenReaderText = (0, _react1.jsx)((0, _react.Fragment), null, (0, _react1.jsx)("span", {
        id: "aria-selection"
    }, ariaSelected), (0, _react1.jsx)("span", {
        id: "aria-context"
    }, ariaContext));
    var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
    return (0, _react1.jsx)((0, _react.Fragment), null, (0, _react1.jsx)(A11yText, {
        id: id
    }, isInitialFocus && ScreenReaderText), (0, _react1.jsx)(A11yText, {
        "aria-live": ariaLive,
        "aria-atomic": "false",
        "aria-relevant": "additions text"
    }, isFocused && !isInitialFocus && ScreenReaderText));
};
var diacritics = [
    {
        base: "A",
        letters: "AⒶＡ\xc0\xc1\xc2ẦẤẪẨ\xc3ĀĂẰẮẴẲȦǠ\xc4ǞẢ\xc5ǺǍȀȂẠẬẶḀĄȺⱯ"
    },
    {
        base: "AA",
        letters: "Ꜳ"
    },
    {
        base: "AE",
        letters: "\xc6ǼǢ"
    },
    {
        base: "AO",
        letters: "Ꜵ"
    },
    {
        base: "AU",
        letters: "Ꜷ"
    },
    {
        base: "AV",
        letters: "ꜸꜺ"
    },
    {
        base: "AY",
        letters: "Ꜽ"
    },
    {
        base: "B",
        letters: "BⒷＢḂḄḆɃƂƁ"
    },
    {
        base: "C",
        letters: "CⒸＣĆĈĊČ\xc7ḈƇȻꜾ"
    },
    {
        base: "D",
        letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
    },
    {
        base: "DZ",
        letters: "ǱǄ"
    },
    {
        base: "Dz",
        letters: "ǲǅ"
    },
    {
        base: "E",
        letters: "EⒺＥ\xc8\xc9\xcaỀẾỄỂẼĒḔḖĔĖ\xcbẺĚȄȆẸỆȨḜĘḘḚƐƎ"
    },
    {
        base: "F",
        letters: "FⒻＦḞƑꝻ"
    },
    {
        base: "G",
        letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
    },
    {
        base: "H",
        letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
    },
    {
        base: "I",
        letters: "IⒾＩ\xcc\xcd\xceĨĪĬİ\xcfḮỈǏȈȊỊĮḬƗ"
    },
    {
        base: "J",
        letters: "JⒿＪĴɈ"
    },
    {
        base: "K",
        letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
    },
    {
        base: "L",
        letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
    },
    {
        base: "LJ",
        letters: "Ǉ"
    },
    {
        base: "Lj",
        letters: "ǈ"
    },
    {
        base: "M",
        letters: "MⓂＭḾṀṂⱮƜ"
    },
    {
        base: "N",
        letters: "NⓃＮǸŃ\xd1ṄŇṆŅṊṈȠƝꞐꞤ"
    },
    {
        base: "NJ",
        letters: "Ǌ"
    },
    {
        base: "Nj",
        letters: "ǋ"
    },
    {
        base: "O",
        letters: "OⓄＯ\xd2\xd3\xd4ỒỐỖỔ\xd5ṌȬṎŌṐṒŎȮȰ\xd6ȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬ\xd8ǾƆƟꝊꝌ"
    },
    {
        base: "OI",
        letters: "Ƣ"
    },
    {
        base: "OO",
        letters: "Ꝏ"
    },
    {
        base: "OU",
        letters: "Ȣ"
    },
    {
        base: "P",
        letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
    },
    {
        base: "Q",
        letters: "QⓆＱꝖꝘɊ"
    },
    {
        base: "R",
        letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
    },
    {
        base: "S",
        letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
    },
    {
        base: "T",
        letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
    },
    {
        base: "TZ",
        letters: "Ꜩ"
    },
    {
        base: "U",
        letters: "UⓊＵ\xd9\xda\xdbŨṸŪṺŬ\xdcǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
    },
    {
        base: "V",
        letters: "VⓋＶṼṾƲꝞɅ"
    },
    {
        base: "VY",
        letters: "Ꝡ"
    },
    {
        base: "W",
        letters: "WⓌＷẀẂŴẆẄẈⱲ"
    },
    {
        base: "X",
        letters: "XⓍＸẊẌ"
    },
    {
        base: "Y",
        letters: "YⓎＹỲ\xddŶỸȲẎŸỶỴƳɎỾ"
    },
    {
        base: "Z",
        letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
    },
    {
        base: "a",
        letters: "aⓐａẚ\xe0\xe1\xe2ầấẫẩ\xe3āăằắẵẳȧǡ\xe4ǟả\xe5ǻǎȁȃạậặḁąⱥɐ"
    },
    {
        base: "aa",
        letters: "ꜳ"
    },
    {
        base: "ae",
        letters: "\xe6ǽǣ"
    },
    {
        base: "ao",
        letters: "ꜵ"
    },
    {
        base: "au",
        letters: "ꜷ"
    },
    {
        base: "av",
        letters: "ꜹꜻ"
    },
    {
        base: "ay",
        letters: "ꜽ"
    },
    {
        base: "b",
        letters: "bⓑｂḃḅḇƀƃɓ"
    },
    {
        base: "c",
        letters: "cⓒｃćĉċč\xe7ḉƈȼꜿↄ"
    },
    {
        base: "d",
        letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
    },
    {
        base: "dz",
        letters: "ǳǆ"
    },
    {
        base: "e",
        letters: "eⓔｅ\xe8\xe9\xeaềếễểẽēḕḗĕė\xebẻěȅȇẹệȩḝęḙḛɇɛǝ"
    },
    {
        base: "f",
        letters: "fⓕｆḟƒꝼ"
    },
    {
        base: "g",
        letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
    },
    {
        base: "h",
        letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
    },
    {
        base: "hv",
        letters: "ƕ"
    },
    {
        base: "i",
        letters: "iⓘｉ\xec\xed\xeeĩīĭ\xefḯỉǐȉȋịįḭɨı"
    },
    {
        base: "j",
        letters: "jⓙｊĵǰɉ"
    },
    {
        base: "k",
        letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
    },
    {
        base: "l",
        letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
    },
    {
        base: "lj",
        letters: "ǉ"
    },
    {
        base: "m",
        letters: "mⓜｍḿṁṃɱɯ"
    },
    {
        base: "n",
        letters: "nⓝｎǹń\xf1ṅňṇņṋṉƞɲŉꞑꞥ"
    },
    {
        base: "nj",
        letters: "ǌ"
    },
    {
        base: "o",
        letters: "oⓞｏ\xf2\xf3\xf4ồốỗổ\xf5ṍȭṏōṑṓŏȯȱ\xf6ȫỏőǒȍȏơờớỡởợọộǫǭ\xf8ǿɔꝋꝍɵ"
    },
    {
        base: "oi",
        letters: "ƣ"
    },
    {
        base: "ou",
        letters: "ȣ"
    },
    {
        base: "oo",
        letters: "ꝏ"
    },
    {
        base: "p",
        letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
    },
    {
        base: "q",
        letters: "qⓠｑɋꝗꝙ"
    },
    {
        base: "r",
        letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
    },
    {
        base: "s",
        letters: "sⓢｓ\xdfśṥŝṡšṧṣṩșşȿꞩꞅẛ"
    },
    {
        base: "t",
        letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
    },
    {
        base: "tz",
        letters: "ꜩ"
    },
    {
        base: "u",
        letters: "uⓤｕ\xf9\xfa\xfbũṹūṻŭ\xfcǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
    },
    {
        base: "v",
        letters: "vⓥｖṽṿʋꝟʌ"
    },
    {
        base: "vy",
        letters: "ꝡ"
    },
    {
        base: "w",
        letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
    },
    {
        base: "x",
        letters: "xⓧｘẋẍ"
    },
    {
        base: "y",
        letters: "yⓨｙỳ\xfdŷỹȳẏ\xffỷẙỵƴɏỿ"
    },
    {
        base: "z",
        letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
    }
];
var anyDiacritic = new RegExp("[" + diacritics.map(function(d) {
    return d.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for(var i = 0; i < diacritics.length; i++){
    var diacritic = diacritics[i];
    for(var j = 0; j < diacritic.letters.length; j++)diacriticToBase[diacritic.letters[j]] = diacritic.base;
}
var stripDiacritics = function stripDiacritics(str) {
    return str.replace(anyDiacritic, function(match) {
        return diacriticToBase[match];
    });
};
var memoizedStripDiacriticsForInput = (0, _memoizeOneDefault.default)(stripDiacritics);
var trimString = function trimString(str) {
    return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify(option) {
    return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter(config) {
    return function(option, rawInput) {
        // eslint-disable-next-line no-underscore-dangle
        if (option.data.__isNew__) return true;
        var _ignoreCase$ignoreAcc = (0, _objectSpread2Default.default)({
            ignoreCase: true,
            ignoreAccents: true,
            stringify: defaultStringify,
            trim: true,
            matchFrom: "any"
        }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify = _ignoreCase$ignoreAcc.stringify, trim = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
        var input = trim ? trimString(rawInput) : rawInput;
        var candidate = trim ? trimString(stringify(option)) : stringify(option);
        if (ignoreCase) {
            input = input.toLowerCase();
            candidate = candidate.toLowerCase();
        }
        if (ignoreAccents) {
            input = memoizedStripDiacriticsForInput(input);
            candidate = stripDiacritics(candidate);
        }
        return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
    };
};
var _excluded = [
    "innerRef"
];
function DummyInput(_ref) {
    var innerRef = _ref.innerRef, props = (0, _objectWithoutPropertiesDefault.default)(_ref, _excluded);
    // Remove animation props not meant for HTML elements
    var filteredProps = (0, _index9F7Dc477EsmJs.r)(props, "onExited", "in", "enter", "exit", "appear");
    return (0, _react1.jsx)("input", (0, _extendsDefault.default)({
        ref: innerRef
    }, filteredProps, {
        css: /*#__PURE__*/ (0, _react1.css)({
            label: "dummyInput",
            // get rid of any default styles
            background: 0,
            border: 0,
            // important! this hides the flashing cursor
            caretColor: "transparent",
            fontSize: "inherit",
            gridArea: "1 / 1 / 2 / 3",
            outline: 0,
            padding: 0,
            // important! without `width` browsers won't allow focus
            width: 1,
            // remove cursor on desktop
            color: "transparent",
            // remove cursor on mobile whilst maintaining "scroll into view" behaviour
            left: -100,
            opacity: 0,
            position: "relative",
            transform: "scale(.01)"
        }, ";label:DummyInput;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
    }));
}
var cancelScroll = function cancelScroll(event) {
    event.preventDefault();
    event.stopPropagation();
};
function useScrollCapture(_ref) {
    var isEnabled = _ref.isEnabled, onBottomArrive = _ref.onBottomArrive, onBottomLeave = _ref.onBottomLeave, onTopArrive = _ref.onTopArrive, onTopLeave = _ref.onTopLeave;
    var isBottom = (0, _react.useRef)(false);
    var isTop = (0, _react.useRef)(false);
    var touchStart = (0, _react.useRef)(0);
    var scrollTarget = (0, _react.useRef)(null);
    var handleEventDelta = (0, _react.useCallback)(function(event, delta) {
        if (scrollTarget.current === null) return;
        var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
        var target = scrollTarget.current;
        var isDeltaPositive = delta > 0;
        var availableScroll = scrollHeight - clientHeight - scrollTop;
        var shouldCancelScroll = false;
        // reset bottom/top flags
        if (availableScroll > delta && isBottom.current) {
            if (onBottomLeave) onBottomLeave(event);
            isBottom.current = false;
        }
        if (isDeltaPositive && isTop.current) {
            if (onTopLeave) onTopLeave(event);
            isTop.current = false;
        }
        // bottom limit
        if (isDeltaPositive && delta > availableScroll) {
            if (onBottomArrive && !isBottom.current) onBottomArrive(event);
            target.scrollTop = scrollHeight;
            shouldCancelScroll = true;
            isBottom.current = true;
        // top limit
        } else if (!isDeltaPositive && -delta > scrollTop) {
            if (onTopArrive && !isTop.current) onTopArrive(event);
            target.scrollTop = 0;
            shouldCancelScroll = true;
            isTop.current = true;
        }
        // cancel scroll
        if (shouldCancelScroll) cancelScroll(event);
    }, [
        onBottomArrive,
        onBottomLeave,
        onTopArrive,
        onTopLeave
    ]);
    var onWheel = (0, _react.useCallback)(function(event) {
        handleEventDelta(event, event.deltaY);
    }, [
        handleEventDelta
    ]);
    var onTouchStart = (0, _react.useCallback)(function(event) {
        // set touch start so we can calculate touchmove delta
        touchStart.current = event.changedTouches[0].clientY;
    }, []);
    var onTouchMove = (0, _react.useCallback)(function(event) {
        var deltaY = touchStart.current - event.changedTouches[0].clientY;
        handleEventDelta(event, deltaY);
    }, [
        handleEventDelta
    ]);
    var startListening = (0, _react.useCallback)(function(el) {
        // bail early if no element is available to attach to
        if (!el) return;
        var notPassive = (0, _index9F7Dc477EsmJs.s) ? {
            passive: false
        } : false;
        el.addEventListener("wheel", onWheel, notPassive);
        el.addEventListener("touchstart", onTouchStart, notPassive);
        el.addEventListener("touchmove", onTouchMove, notPassive);
    }, [
        onTouchMove,
        onTouchStart,
        onWheel
    ]);
    var stopListening = (0, _react.useCallback)(function(el) {
        // bail early if no element is available to detach from
        if (!el) return;
        el.removeEventListener("wheel", onWheel, false);
        el.removeEventListener("touchstart", onTouchStart, false);
        el.removeEventListener("touchmove", onTouchMove, false);
    }, [
        onTouchMove,
        onTouchStart,
        onWheel
    ]);
    (0, _react.useEffect)(function() {
        if (!isEnabled) return;
        var element = scrollTarget.current;
        startListening(element);
        return function() {
            stopListening(element);
        };
    }, [
        isEnabled,
        startListening,
        stopListening
    ]);
    return function(element) {
        scrollTarget.current = element;
    };
}
var STYLE_KEYS = [
    "boxSizing",
    "height",
    "overflow",
    "paddingRight",
    "position"
];
var LOCK_STYLES = {
    boxSizing: "border-box",
    // account for possible declaration `width: 100%;` on body
    overflow: "hidden",
    position: "relative",
    height: "100%"
};
function preventTouchMove(e) {
    e.preventDefault();
}
function allowTouchMove(e) {
    e.stopPropagation();
}
function preventInertiaScroll() {
    var top = this.scrollTop;
    var totalScroll = this.scrollHeight;
    var currentScroll = top + this.offsetHeight;
    if (top === 0) this.scrollTop = 1;
    else if (currentScroll === totalScroll) this.scrollTop = top - 1;
}
// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
    capture: false,
    passive: false
};
function useScrollLock(_ref) {
    var isEnabled = _ref.isEnabled, _ref$accountForScroll = _ref.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
    var originalStyles = (0, _react.useRef)({});
    var scrollTarget = (0, _react.useRef)(null);
    var addScrollLock = (0, _react.useCallback)(function(touchScrollTarget) {
        if (!canUseDOM) return;
        var target = document.body;
        var targetStyle = target && target.style;
        if (accountForScrollbars) // store any styles already applied to the body
        STYLE_KEYS.forEach(function(key) {
            var val = targetStyle && targetStyle[key];
            originalStyles.current[key] = val;
        });
        // apply the lock styles and padding if this is the first scroll lock
        if (accountForScrollbars && activeScrollLocks < 1) {
            var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
            var clientWidth = document.body ? document.body.clientWidth : 0;
            var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
            Object.keys(LOCK_STYLES).forEach(function(key) {
                var val = LOCK_STYLES[key];
                if (targetStyle) targetStyle[key] = val;
            });
            if (targetStyle) targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
        // account for touch devices
        if (target && isTouchDevice()) {
            // Mobile Safari ignores { overflow: hidden } declaration on the body.
            target.addEventListener("touchmove", preventTouchMove, listenerOptions);
            // Allow scroll on provided target
            if (touchScrollTarget) {
                touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
                touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
            }
        }
        // increment active scroll locks
        activeScrollLocks += 1;
    }, [
        accountForScrollbars
    ]);
    var removeScrollLock = (0, _react.useCallback)(function(touchScrollTarget) {
        if (!canUseDOM) return;
        var target = document.body;
        var targetStyle = target && target.style;
        // safely decrement active scroll locks
        activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
        // reapply original body styles, if any
        if (accountForScrollbars && activeScrollLocks < 1) STYLE_KEYS.forEach(function(key) {
            var val = originalStyles.current[key];
            if (targetStyle) targetStyle[key] = val;
        });
        // remove touch listeners
        if (target && isTouchDevice()) {
            target.removeEventListener("touchmove", preventTouchMove, listenerOptions);
            if (touchScrollTarget) {
                touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
                touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
            }
        }
    }, [
        accountForScrollbars
    ]);
    (0, _react.useEffect)(function() {
        if (!isEnabled) return;
        var element = scrollTarget.current;
        addScrollLock(element);
        return function() {
            removeScrollLock(element);
        };
    }, [
        isEnabled,
        addScrollLock,
        removeScrollLock
    ]);
    return function(element) {
        scrollTarget.current = element;
    };
}
function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var blurSelectInput = function blurSelectInput() {
    return document.activeElement && document.activeElement.blur();
};
var _ref2$1 = {
    name: "bp8cua-ScrollManager",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9ICgpID0+XG4gIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcih7XG4gIGNoaWxkcmVuLFxuICBsb2NrRW5hYmxlZCxcbiAgY2FwdHVyZUVuYWJsZWQgPSB0cnVlLFxuICBvbkJvdHRvbUFycml2ZSxcbiAgb25Cb3R0b21MZWF2ZSxcbiAgb25Ub3BBcnJpdmUsXG4gIG9uVG9wTGVhdmUsXG59OiBQcm9wcykge1xuICBjb25zdCBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUsXG4gIH0pO1xuICBjb25zdCBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7IGlzRW5hYmxlZDogbG9ja0VuYWJsZWQgfSk7XG5cbiAgY29uc3QgdGFyZ2V0UmVmOiBSZWZDYWxsYmFjazxIVE1MRWxlbWVudD4gPSAoZWxlbWVudCkgPT4ge1xuICAgIHNldFNjcm9sbENhcHR1cmVUYXJnZXQoZWxlbWVudCk7XG4gICAgc2V0U2Nyb2xsTG9ja1RhcmdldChlbGVtZW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtsb2NrRW5hYmxlZCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtibHVyU2VsZWN0SW5wdXR9XG4gICAgICAgICAgY3NzPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAwLCBib3R0b206IDAsIHJpZ2h0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7Y2hpbGRyZW4odGFyZ2V0UmVmKX1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuIl19 */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
function ScrollManager(_ref) {
    var children = _ref.children, lockEnabled = _ref.lockEnabled, _ref$captureEnabled = _ref.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref.onBottomArrive, onBottomLeave = _ref.onBottomLeave, onTopArrive = _ref.onTopArrive, onTopLeave = _ref.onTopLeave;
    var setScrollCaptureTarget = useScrollCapture({
        isEnabled: captureEnabled,
        onBottomArrive: onBottomArrive,
        onBottomLeave: onBottomLeave,
        onTopArrive: onTopArrive,
        onTopLeave: onTopLeave
    });
    var setScrollLockTarget = useScrollLock({
        isEnabled: lockEnabled
    });
    var targetRef = function targetRef(element) {
        setScrollCaptureTarget(element);
        setScrollLockTarget(element);
    };
    return (0, _react1.jsx)((0, _react.Fragment), null, lockEnabled && (0, _react1.jsx)("div", {
        onClick: blurSelectInput,
        css: _ref2$1
    }), children(targetRef));
}
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref2 = {
    name: "5kkxb2-requiredInput-RequiredInput",
    styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBvbkZvY3VzOiBGb2N1c0V2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0+ID0gKHsgbmFtZSwgb25Gb2N1cyB9KSA9PiAoXG4gIDxpbnB1dFxuICAgIHJlcXVpcmVkXG4gICAgbmFtZT17bmFtZX1cbiAgICB0YWJJbmRleD17LTF9XG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var RequiredInput = function RequiredInput(_ref) {
    var name = _ref.name, onFocus = _ref.onFocus;
    return (0, _react1.jsx)("input", {
        required: true,
        name: name,
        tabIndex: -1,
        onFocus: onFocus,
        css: _ref2,
        value: "",
        onChange: function onChange() {}
    });
};
var formatGroupLabel = function formatGroupLabel(group) {
    return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
    return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
    return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
    return !!option.isDisabled;
};
var defaultStyles = {
    clearIndicator: (0, _index9F7Dc477EsmJs.a),
    container: (0, _index9F7Dc477EsmJs.b),
    control: (0, _index9F7Dc477EsmJs.d),
    dropdownIndicator: (0, _index9F7Dc477EsmJs.e),
    group: (0, _index9F7Dc477EsmJs.g),
    groupHeading: (0, _index9F7Dc477EsmJs.f),
    indicatorsContainer: (0, _index9F7Dc477EsmJs.i),
    indicatorSeparator: (0, _index9F7Dc477EsmJs.h),
    input: (0, _index9F7Dc477EsmJs.j),
    loadingIndicator: (0, _index9F7Dc477EsmJs.l),
    loadingMessage: (0, _index9F7Dc477EsmJs.k),
    menu: (0, _index9F7Dc477EsmJs.m),
    menuList: (0, _index9F7Dc477EsmJs.n),
    menuPortal: (0, _index9F7Dc477EsmJs.o),
    multiValue: (0, _index9F7Dc477EsmJs.p),
    multiValueLabel: (0, _index9F7Dc477EsmJs.q),
    multiValueRemove: (0, _index9F7Dc477EsmJs.t),
    noOptionsMessage: (0, _index9F7Dc477EsmJs.u),
    option: (0, _index9F7Dc477EsmJs.v),
    placeholder: (0, _index9F7Dc477EsmJs.w),
    singleValue: (0, _index9F7Dc477EsmJs.x),
    valueContainer: (0, _index9F7Dc477EsmJs.y)
};
// Merge Utility
// Allows consumers to extend a base Select with additional styles
function mergeStyles(source) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // initialize with source styles
    var styles = (0, _objectSpread2Default.default)({}, source);
    // massage in target styles
    Object.keys(target).forEach(function(keyAsString) {
        var key = keyAsString;
        if (source[key]) styles[key] = function(rsCss, props) {
            return target[key](source[key](rsCss, props), props);
        };
        else styles[key] = target[key];
    });
    return styles;
}
var colors = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
// Used to calculate consistent margin/padding on elements
var baseUnit = 4;
// The minimum height of the control
var controlHeight = 38;
// The amount of space between the control and menu */
var menuGutter = baseUnit * 2;
var spacing = {
    baseUnit: baseUnit,
    controlHeight: controlHeight,
    menuGutter: menuGutter
};
var defaultTheme = {
    borderRadius: borderRadius,
    colors: colors,
    spacing: spacing
};
var defaultProps = {
    "aria-live": "polite",
    backspaceRemovesValue: true,
    blurInputOnSelect: (0, _index9F7Dc477EsmJs.z)(),
    captureMenuScroll: !(0, _index9F7Dc477EsmJs.z)(),
    closeMenuOnSelect: true,
    closeMenuOnScroll: false,
    components: {},
    controlShouldRenderValue: true,
    escapeClearsValue: false,
    filterOption: createFilter(),
    formatGroupLabel: formatGroupLabel,
    getOptionLabel: getOptionLabel$1,
    getOptionValue: getOptionValue$1,
    isDisabled: false,
    isLoading: false,
    isMulti: false,
    isRtl: false,
    isSearchable: true,
    isOptionDisabled: isOptionDisabled,
    loadingMessage: function loadingMessage() {
        return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: false,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: false,
    menuShouldScrollIntoView: !(0, _index9F7Dc477EsmJs.A)(),
    noOptionsMessage: function noOptionsMessage() {
        return "No options";
    },
    openMenuOnFocus: false,
    openMenuOnClick: true,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function screenReaderStatus(_ref) {
        var count = _ref.count;
        return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: true
};
function toCategorizedOption(props, option, selectValue, index) {
    var isDisabled = _isOptionDisabled(props, option, selectValue);
    var isSelected = _isOptionSelected(props, option, selectValue);
    var label = getOptionLabel(props, option);
    var value = getOptionValue(props, option);
    return {
        type: "option",
        data: option,
        isDisabled: isDisabled,
        isSelected: isSelected,
        label: label,
        value: value,
        index: index
    };
}
function buildCategorizedOptions(props, selectValue) {
    return props.options.map(function(groupOrOption, groupOrOptionIndex) {
        if ("options" in groupOrOption) {
            var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
                return toCategorizedOption(props, option, selectValue, optionIndex);
            }).filter(function(categorizedOption) {
                return isFocusable(props, categorizedOption);
            });
            return categorizedOptions.length > 0 ? {
                type: "group",
                data: groupOrOption,
                options: categorizedOptions,
                index: groupOrOptionIndex
            } : undefined;
        }
        var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
        return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
    }).filter((0, _index9F7Dc477EsmJs.G));
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
    return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
        if (categorizedOption.type === "group") optionsAccumulator.push.apply(optionsAccumulator, (0, _toConsumableArrayDefault.default)(categorizedOption.options.map(function(option) {
            return option.data;
        })));
        else optionsAccumulator.push(categorizedOption.data);
        return optionsAccumulator;
    }, []);
}
function buildFocusableOptions(props, selectValue) {
    return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
    var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
    var data = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
    return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
        label: label,
        value: value,
        data: data
    }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
    var focusedValue = state.focusedValue, lastSelectValue = state.selectValue;
    var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
    if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
        if (nextFocusedIndex > -1) // the focused value is still in the selectValue, return it
        return focusedValue;
        else if (lastFocusedIndex < nextSelectValue.length) // the focusedValue is not present in the next selectValue array by
        // reference, so return the new value at the same index
        return nextSelectValue[lastFocusedIndex];
    }
    return null;
}
function getNextFocusedOption(state, options) {
    var lastFocusedOption = state.focusedOption;
    return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}
var getOptionLabel = function getOptionLabel(props, data) {
    return props.getOptionLabel(data);
};
var getOptionValue = function getOptionValue(props, data) {
    return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
    return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
    if (selectValue.indexOf(option) > -1) return true;
    if (typeof props.isOptionSelected === "function") return props.isOptionSelected(option, selectValue);
    var candidate = getOptionValue(props, option);
    return selectValue.some(function(i) {
        return getOptionValue(props, i) === candidate;
    });
}
function _filterOption(props, option, inputValue) {
    return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
    var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
    if (hideSelectedOptions === undefined) return isMulti;
    return hideSelectedOptions;
};
var instanceId = 1;
var Select = /*#__PURE__*/ function(_Component) {
    (0, _inheritsDefault.default)(Select, _Component);
    var _super = (0, _createSuperDefault.default)(Select);
    // Misc. Instance Properties
    // ------------------------------
    // TODO
    // Refs
    // ------------------------------
    // Lifecycle
    // ------------------------------
    function Select(_props) {
        var _this;
        (0, _classCallCheckDefault.default)(this, Select);
        _this = _super.call(this, _props);
        _this.state = {
            ariaSelection: null,
            focusedOption: null,
            focusedValue: null,
            inputIsHidden: false,
            isFocused: false,
            selectValue: [],
            clearFocusValueOnUpdate: false,
            prevWasFocused: false,
            inputIsHiddenAfterUpdate: undefined,
            prevProps: undefined
        };
        _this.blockOptionHover = false;
        _this.isComposing = false;
        _this.commonProps = void 0;
        _this.initialTouchX = 0;
        _this.initialTouchY = 0;
        _this.instancePrefix = "";
        _this.openAfterFocus = false;
        _this.scrollToFocusedOptionOnUpdate = false;
        _this.userIsDragging = void 0;
        _this.controlRef = null;
        _this.getControlRef = function(ref) {
            _this.controlRef = ref;
        };
        _this.focusedOptionRef = null;
        _this.getFocusedOptionRef = function(ref) {
            _this.focusedOptionRef = ref;
        };
        _this.menuListRef = null;
        _this.getMenuListRef = function(ref) {
            _this.menuListRef = ref;
        };
        _this.inputRef = null;
        _this.getInputRef = function(ref) {
            _this.inputRef = ref;
        };
        _this.focus = _this.focusInput;
        _this.blur = _this.blurInput;
        _this.onChange = function(newValue, actionMeta) {
            var _this$props = _this.props, onChange = _this$props.onChange, name = _this$props.name;
            actionMeta.name = name;
            _this.ariaOnChange(newValue, actionMeta);
            onChange(newValue, actionMeta);
        };
        _this.setValue = function(newValue, action, option) {
            var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
            _this.onInputChange("", {
                action: "set-value",
                prevInputValue: inputValue
            });
            if (closeMenuOnSelect) {
                _this.setState({
                    inputIsHiddenAfterUpdate: !isMulti
                });
                _this.onMenuClose();
            }
            // when the select value should change, we should reset focusedValue
            _this.setState({
                clearFocusValueOnUpdate: true
            });
            _this.onChange(newValue, {
                action: action,
                option: option
            });
        };
        _this.selectOption = function(newValue) {
            var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
            var selectValue = _this.state.selectValue;
            var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
            var isDisabled = _this.isOptionDisabled(newValue, selectValue);
            if (deselected) {
                var candidate = _this.getOptionValue(newValue);
                _this.setValue((0, _index9F7Dc477EsmJs.B)(selectValue.filter(function(i) {
                    return _this.getOptionValue(i) !== candidate;
                })), "deselect-option", newValue);
            } else if (!isDisabled) {
                // Select option if option is not disabled
                if (isMulti) _this.setValue((0, _index9F7Dc477EsmJs.B)([].concat((0, _toConsumableArrayDefault.default)(selectValue), [
                    newValue
                ])), "select-option", newValue);
                else _this.setValue((0, _index9F7Dc477EsmJs.C)(newValue), "select-option");
            } else {
                _this.ariaOnChange((0, _index9F7Dc477EsmJs.C)(newValue), {
                    action: "select-option",
                    option: newValue,
                    name: name
                });
                return;
            }
            if (blurInputOnSelect) _this.blurInput();
        };
        _this.removeValue = function(removedValue) {
            var isMulti = _this.props.isMulti;
            var selectValue = _this.state.selectValue;
            var candidate = _this.getOptionValue(removedValue);
            var newValueArray = selectValue.filter(function(i) {
                return _this.getOptionValue(i) !== candidate;
            });
            var newValue = (0, _index9F7Dc477EsmJs.D)(isMulti, newValueArray, newValueArray[0] || null);
            _this.onChange(newValue, {
                action: "remove-value",
                removedValue: removedValue
            });
            _this.focusInput();
        };
        _this.clearValue = function() {
            var selectValue = _this.state.selectValue;
            _this.onChange((0, _index9F7Dc477EsmJs.D)(_this.props.isMulti, [], null), {
                action: "clear",
                removedValues: selectValue
            });
        };
        _this.popValue = function() {
            var isMulti = _this.props.isMulti;
            var selectValue = _this.state.selectValue;
            var lastSelectedValue = selectValue[selectValue.length - 1];
            var newValueArray = selectValue.slice(0, selectValue.length - 1);
            var newValue = (0, _index9F7Dc477EsmJs.D)(isMulti, newValueArray, newValueArray[0] || null);
            _this.onChange(newValue, {
                action: "pop-value",
                removedValue: lastSelectedValue
            });
        };
        _this.getValue = function() {
            return _this.state.selectValue;
        };
        _this.cx = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            return (0, _index9F7Dc477EsmJs.E).apply(void 0, [
                _this.props.classNamePrefix
            ].concat(args));
        };
        _this.getOptionLabel = function(data) {
            return getOptionLabel(_this.props, data);
        };
        _this.getOptionValue = function(data) {
            return getOptionValue(_this.props, data);
        };
        _this.getStyles = function(key, props) {
            var base = defaultStyles[key](props);
            base.boxSizing = "border-box";
            var custom = _this.props.styles[key];
            return custom ? custom(base, props) : base;
        };
        _this.getElementId = function(element) {
            return "".concat(_this.instancePrefix, "-").concat(element);
        };
        _this.getComponents = function() {
            return (0, _index9F7Dc477EsmJs.F)(_this.props);
        };
        _this.buildCategorizedOptions = function() {
            return buildCategorizedOptions(_this.props, _this.state.selectValue);
        };
        _this.getCategorizedOptions = function() {
            return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
        };
        _this.buildFocusableOptions = function() {
            return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
        };
        _this.getFocusableOptions = function() {
            return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
        };
        _this.ariaOnChange = function(value, actionMeta) {
            _this.setState({
                ariaSelection: (0, _objectSpread2Default.default)({
                    value: value
                }, actionMeta)
            });
        };
        _this.onMenuMouseDown = function(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            _this.focusInput();
        };
        _this.onMenuMouseMove = function(event) {
            _this.blockOptionHover = false;
        };
        _this.onControlMouseDown = function(event) {
            // Event captured by dropdown indicator
            if (event.defaultPrevented) return;
            var openMenuOnClick = _this.props.openMenuOnClick;
            if (!_this.state.isFocused) {
                if (openMenuOnClick) _this.openAfterFocus = true;
                _this.focusInput();
            } else if (!_this.props.menuIsOpen) {
                if (openMenuOnClick) _this.openMenu("first");
            } else if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") _this.onMenuClose();
            if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") event.preventDefault();
        };
        _this.onDropdownIndicatorMouseDown = function(event) {
            // ignore mouse events that weren't triggered by the primary button
            if (event && event.type === "mousedown" && event.button !== 0) return;
            if (_this.props.isDisabled) return;
            var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
            _this.focusInput();
            if (menuIsOpen) {
                _this.setState({
                    inputIsHiddenAfterUpdate: !isMulti
                });
                _this.onMenuClose();
            } else _this.openMenu("first");
            event.preventDefault();
        };
        _this.onClearIndicatorMouseDown = function(event) {
            // ignore mouse events that weren't triggered by the primary button
            if (event && event.type === "mousedown" && event.button !== 0) return;
            _this.clearValue();
            event.preventDefault();
            _this.openAfterFocus = false;
            if (event.type === "touchend") _this.focusInput();
            else setTimeout(function() {
                return _this.focusInput();
            });
        };
        _this.onScroll = function(event) {
            if (typeof _this.props.closeMenuOnScroll === "boolean") {
                if (event.target instanceof HTMLElement && (0, _index9F7Dc477EsmJs.H)(event.target)) _this.props.onMenuClose();
            } else if (typeof _this.props.closeMenuOnScroll === "function") {
                if (_this.props.closeMenuOnScroll(event)) _this.props.onMenuClose();
            }
        };
        _this.onCompositionStart = function() {
            _this.isComposing = true;
        };
        _this.onCompositionEnd = function() {
            _this.isComposing = false;
        };
        _this.onTouchStart = function(_ref2) {
            var touches = _ref2.touches;
            var touch = touches && touches.item(0);
            if (!touch) return;
            _this.initialTouchX = touch.clientX;
            _this.initialTouchY = touch.clientY;
            _this.userIsDragging = false;
        };
        _this.onTouchMove = function(_ref3) {
            var touches = _ref3.touches;
            var touch = touches && touches.item(0);
            if (!touch) return;
            var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
            var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
            var moveThreshold = 5;
            _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
        };
        _this.onTouchEnd = function(event) {
            if (_this.userIsDragging) return;
            // close the menu if the user taps outside
            // we're checking on event.target here instead of event.currentTarget, because we want to assert information
            // on events on child elements, not the document (which we've attached this handler to).
            if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) _this.blurInput();
            // reset move vars
            _this.initialTouchX = 0;
            _this.initialTouchY = 0;
        };
        _this.onControlTouchEnd = function(event) {
            if (_this.userIsDragging) return;
            _this.onControlMouseDown(event);
        };
        _this.onClearIndicatorTouchEnd = function(event) {
            if (_this.userIsDragging) return;
            _this.onClearIndicatorMouseDown(event);
        };
        _this.onDropdownIndicatorTouchEnd = function(event) {
            if (_this.userIsDragging) return;
            _this.onDropdownIndicatorMouseDown(event);
        };
        _this.handleInputChange = function(event) {
            var prevInputValue = _this.props.inputValue;
            var inputValue = event.currentTarget.value;
            _this.setState({
                inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange(inputValue, {
                action: "input-change",
                prevInputValue: prevInputValue
            });
            if (!_this.props.menuIsOpen) _this.onMenuOpen();
        };
        _this.onInputFocus = function(event) {
            if (_this.props.onFocus) _this.props.onFocus(event);
            _this.setState({
                inputIsHiddenAfterUpdate: false,
                isFocused: true
            });
            if (_this.openAfterFocus || _this.props.openMenuOnFocus) _this.openMenu("first");
            _this.openAfterFocus = false;
        };
        _this.onInputBlur = function(event) {
            var prevInputValue = _this.props.inputValue;
            if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
                _this.inputRef.focus();
                return;
            }
            if (_this.props.onBlur) _this.props.onBlur(event);
            _this.onInputChange("", {
                action: "input-blur",
                prevInputValue: prevInputValue
            });
            _this.onMenuClose();
            _this.setState({
                focusedValue: null,
                isFocused: false
            });
        };
        _this.onOptionHover = function(focusedOption) {
            if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) return;
            _this.setState({
                focusedOption: focusedOption
            });
        };
        _this.shouldHideSelectedOptions = function() {
            return shouldHideSelectedOptions(_this.props);
        };
        _this.onValueInputFocus = function(e) {
            e.preventDefault();
            e.stopPropagation();
            _this.focus();
        };
        _this.onKeyDown = function(event) {
            var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
            var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
            if (isDisabled) return;
            if (typeof onKeyDown === "function") {
                onKeyDown(event);
                if (event.defaultPrevented) return;
            }
            // Block option hover events when the user has just pressed a key
            _this.blockOptionHover = true;
            switch(event.key){
                case "ArrowLeft":
                    if (!isMulti || inputValue) return;
                    _this.focusValue("previous");
                    break;
                case "ArrowRight":
                    if (!isMulti || inputValue) return;
                    _this.focusValue("next");
                    break;
                case "Delete":
                case "Backspace":
                    if (inputValue) return;
                    if (focusedValue) _this.removeValue(focusedValue);
                    else {
                        if (!backspaceRemovesValue) return;
                        if (isMulti) _this.popValue();
                        else if (isClearable) _this.clearValue();
                    }
                    break;
                case "Tab":
                    if (_this.isComposing) return;
                    if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
                    // option is already selected; it breaks the flow of navigation
                    openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) return;
                    _this.selectOption(focusedOption);
                    break;
                case "Enter":
                    if (event.keyCode === 229) break;
                    if (menuIsOpen) {
                        if (!focusedOption) return;
                        if (_this.isComposing) return;
                        _this.selectOption(focusedOption);
                        break;
                    }
                    return;
                case "Escape":
                    if (menuIsOpen) {
                        _this.setState({
                            inputIsHiddenAfterUpdate: false
                        });
                        _this.onInputChange("", {
                            action: "menu-close",
                            prevInputValue: inputValue
                        });
                        _this.onMenuClose();
                    } else if (isClearable && escapeClearsValue) _this.clearValue();
                    break;
                case " ":
                    // space
                    if (inputValue) return;
                    if (!menuIsOpen) {
                        _this.openMenu("first");
                        break;
                    }
                    if (!focusedOption) return;
                    _this.selectOption(focusedOption);
                    break;
                case "ArrowUp":
                    if (menuIsOpen) _this.focusOption("up");
                    else _this.openMenu("last");
                    break;
                case "ArrowDown":
                    if (menuIsOpen) _this.focusOption("down");
                    else _this.openMenu("first");
                    break;
                case "PageUp":
                    if (!menuIsOpen) return;
                    _this.focusOption("pageup");
                    break;
                case "PageDown":
                    if (!menuIsOpen) return;
                    _this.focusOption("pagedown");
                    break;
                case "Home":
                    if (!menuIsOpen) return;
                    _this.focusOption("first");
                    break;
                case "End":
                    if (!menuIsOpen) return;
                    _this.focusOption("last");
                    break;
                default:
                    return;
            }
            event.preventDefault();
        };
        _this.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
        _this.state.selectValue = (0, _index9F7Dc477EsmJs.I)(_props.value);
        // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
        if (_props.menuIsOpen && _this.state.selectValue.length) {
            var focusableOptions = _this.buildFocusableOptions();
            var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
            _this.state.focusedOption = focusableOptions[optionIndex];
        }
        return _this;
    }
    (0, _createClassDefault.default)(Select, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.startListeningComposition();
                this.startListeningToTouch();
                if (this.props.closeMenuOnScroll && document && document.addEventListener) // Listen to all scroll events, and filter them out inside of 'onScroll'
                document.addEventListener("scroll", this.onScroll, true);
                if (this.props.autoFocus) this.focusInput();
                // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
                if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) (0, _index9F7Dc477EsmJs.J)(this.menuListRef, this.focusedOptionRef);
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
                var isFocused = this.state.isFocused;
                if (// ensure focus is restored correctly when the control becomes enabled
                isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
                isFocused && menuIsOpen && !prevProps.menuIsOpen) this.focusInput();
                if (isFocused && isDisabled && !prevProps.isDisabled) // ensure select state gets blurred in case Select is programmatically disabled while focused
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({
                    isFocused: false
                }, this.onMenuClose);
                else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({
                    isFocused: true
                });
                // scroll the focused option into view if necessary
                if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
                    (0, _index9F7Dc477EsmJs.J)(this.menuListRef, this.focusedOptionRef);
                    this.scrollToFocusedOptionOnUpdate = false;
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.stopListeningComposition();
                this.stopListeningToTouch();
                document.removeEventListener("scroll", this.onScroll, true);
            }
        },
        {
            key: "onMenuOpen",
            value: function onMenuOpen() {
                this.props.onMenuOpen();
            }
        },
        {
            key: "onMenuClose",
            value: function onMenuClose() {
                this.onInputChange("", {
                    action: "menu-close",
                    prevInputValue: this.props.inputValue
                });
                this.props.onMenuClose();
            }
        },
        {
            key: "onInputChange",
            value: function onInputChange(newValue, actionMeta) {
                this.props.onInputChange(newValue, actionMeta);
            }
        },
        {
            key: "focusInput",
            value: function focusInput() {
                if (!this.inputRef) return;
                this.inputRef.focus();
            }
        },
        {
            key: "blurInput",
            value: function blurInput() {
                if (!this.inputRef) return;
                this.inputRef.blur();
            }
        },
        {
            key: "openMenu",
            value: function openMenu(focusOption) {
                var _this2 = this;
                var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
                var focusableOptions = this.buildFocusableOptions();
                var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
                if (!this.props.isMulti) {
                    var selectedIndex = focusableOptions.indexOf(selectValue[0]);
                    if (selectedIndex > -1) openAtIndex = selectedIndex;
                }
                // only scroll if the menu isn't already open
                this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
                this.setState({
                    inputIsHiddenAfterUpdate: false,
                    focusedValue: null,
                    focusedOption: focusableOptions[openAtIndex]
                }, function() {
                    return _this2.onMenuOpen();
                });
            }
        },
        {
            key: "focusValue",
            value: function focusValue(direction) {
                var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
                // Only multiselects support value focusing
                if (!this.props.isMulti) return;
                this.setState({
                    focusedOption: null
                });
                var focusedIndex = selectValue.indexOf(focusedValue);
                if (!focusedValue) focusedIndex = -1;
                var lastIndex = selectValue.length - 1;
                var nextFocus = -1;
                if (!selectValue.length) return;
                switch(direction){
                    case "previous":
                        if (focusedIndex === 0) // don't cycle from the start to the end
                        nextFocus = 0;
                        else if (focusedIndex === -1) // if nothing is focused, focus the last value first
                        nextFocus = lastIndex;
                        else nextFocus = focusedIndex - 1;
                        break;
                    case "next":
                        if (focusedIndex > -1 && focusedIndex < lastIndex) nextFocus = focusedIndex + 1;
                        break;
                }
                this.setState({
                    inputIsHidden: nextFocus !== -1,
                    focusedValue: selectValue[nextFocus]
                });
            }
        },
        {
            key: "focusOption",
            value: function focusOption() {
                var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "first";
                var pageSize = this.props.pageSize;
                var focusedOption = this.state.focusedOption;
                var options = this.getFocusableOptions();
                if (!options.length) return;
                var nextFocus = 0; // handles 'first'
                var focusedIndex = options.indexOf(focusedOption);
                if (!focusedOption) focusedIndex = -1;
                if (direction === "up") nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
                else if (direction === "down") nextFocus = (focusedIndex + 1) % options.length;
                else if (direction === "pageup") {
                    nextFocus = focusedIndex - pageSize;
                    if (nextFocus < 0) nextFocus = 0;
                } else if (direction === "pagedown") {
                    nextFocus = focusedIndex + pageSize;
                    if (nextFocus > options.length - 1) nextFocus = options.length - 1;
                } else if (direction === "last") nextFocus = options.length - 1;
                this.scrollToFocusedOptionOnUpdate = true;
                this.setState({
                    focusedOption: options[nextFocus],
                    focusedValue: null
                });
            }
        },
        {
            key: "getTheme",
            value: // ==============================
            // Getters
            // ==============================
            function getTheme() {
                // Use the default theme if there are no customisations.
                if (!this.props.theme) return defaultTheme;
                // If the theme prop is a function, assume the function
                // knows how to merge the passed-in default theme with
                // its own modifications.
                if (typeof this.props.theme === "function") return this.props.theme(defaultTheme);
                // Otherwise, if a plain theme object was passed in,
                // overlay it with the default theme.
                return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, defaultTheme), this.props.theme);
            }
        },
        {
            key: "getCommonProps",
            value: function getCommonProps() {
                var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getValue = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
                var isMulti = props.isMulti, isRtl = props.isRtl, options = props.options;
                var hasValue = this.hasValue();
                return {
                    clearValue: clearValue,
                    cx: cx,
                    getStyles: getStyles,
                    getValue: getValue,
                    hasValue: hasValue,
                    isMulti: isMulti,
                    isRtl: isRtl,
                    options: options,
                    selectOption: selectOption,
                    selectProps: props,
                    setValue: setValue,
                    theme: this.getTheme()
                };
            }
        },
        {
            key: "hasValue",
            value: function hasValue() {
                var selectValue = this.state.selectValue;
                return selectValue.length > 0;
            }
        },
        {
            key: "hasOptions",
            value: function hasOptions() {
                return !!this.getFocusableOptions().length;
            }
        },
        {
            key: "isClearable",
            value: function isClearable() {
                var _this$props7 = this.props, isClearable = _this$props7.isClearable, isMulti = _this$props7.isMulti;
                // single select, by default, IS NOT clearable
                // multi select, by default, IS clearable
                if (isClearable === undefined) return isMulti;
                return isClearable;
            }
        },
        {
            key: "isOptionDisabled",
            value: function isOptionDisabled(option, selectValue) {
                return _isOptionDisabled(this.props, option, selectValue);
            }
        },
        {
            key: "isOptionSelected",
            value: function isOptionSelected(option, selectValue) {
                return _isOptionSelected(this.props, option, selectValue);
            }
        },
        {
            key: "filterOption",
            value: function filterOption(option, inputValue) {
                return _filterOption(this.props, option, inputValue);
            }
        },
        {
            key: "formatOptionLabel",
            value: function formatOptionLabel(data, context) {
                if (typeof this.props.formatOptionLabel === "function") {
                    var _inputValue = this.props.inputValue;
                    var _selectValue = this.state.selectValue;
                    return this.props.formatOptionLabel(data, {
                        context: context,
                        inputValue: _inputValue,
                        selectValue: _selectValue
                    });
                } else return this.getOptionLabel(data);
            }
        },
        {
            key: "formatGroupLabel",
            value: function formatGroupLabel(data) {
                return this.props.formatGroupLabel(data);
            }
        },
        {
            key: "startListeningComposition",
            value: // ==============================
            // Composition Handlers
            // ==============================
            function startListeningComposition() {
                if (document && document.addEventListener) {
                    document.addEventListener("compositionstart", this.onCompositionStart, false);
                    document.addEventListener("compositionend", this.onCompositionEnd, false);
                }
            }
        },
        {
            key: "stopListeningComposition",
            value: function stopListeningComposition() {
                if (document && document.removeEventListener) {
                    document.removeEventListener("compositionstart", this.onCompositionStart);
                    document.removeEventListener("compositionend", this.onCompositionEnd);
                }
            }
        },
        {
            key: "startListeningToTouch",
            value: // ==============================
            // Touch Handlers
            // ==============================
            function startListeningToTouch() {
                if (document && document.addEventListener) {
                    document.addEventListener("touchstart", this.onTouchStart, false);
                    document.addEventListener("touchmove", this.onTouchMove, false);
                    document.addEventListener("touchend", this.onTouchEnd, false);
                }
            }
        },
        {
            key: "stopListeningToTouch",
            value: function stopListeningToTouch() {
                if (document && document.removeEventListener) {
                    document.removeEventListener("touchstart", this.onTouchStart);
                    document.removeEventListener("touchmove", this.onTouchMove);
                    document.removeEventListener("touchend", this.onTouchEnd);
                }
            }
        },
        {
            key: "renderInput",
            value: // ==============================
            // Renderers
            // ==============================
            function renderInput() {
                var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen, required = _this$props8.required;
                var _this$getComponents = this.getComponents(), Input = _this$getComponents.Input;
                var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
                var commonProps = this.commonProps;
                var id = inputId || this.getElementId("input");
                // aria attributes makes the JSX "noisy", separated for clarity
                var ariaAttributes = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({
                    "aria-autocomplete": "list",
                    "aria-expanded": menuIsOpen,
                    "aria-haspopup": true,
                    "aria-errormessage": this.props["aria-errormessage"],
                    "aria-invalid": this.props["aria-invalid"],
                    "aria-label": this.props["aria-label"],
                    "aria-labelledby": this.props["aria-labelledby"],
                    "aria-required": required,
                    role: "combobox"
                }, menuIsOpen && {
                    "aria-controls": this.getElementId("listbox"),
                    "aria-owns": this.getElementId("listbox")
                }), !isSearchable && {
                    "aria-readonly": true
                }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
                    "aria-describedby": this.getElementId("live-region")
                } : {
                    "aria-describedby": this.getElementId("placeholder")
                });
                if (!isSearchable) // use a dummy input to maintain focus/blur functionality
                return /*#__PURE__*/ _react.createElement(DummyInput, (0, _extendsDefault.default)({
                    id: id,
                    innerRef: this.getInputRef,
                    onBlur: this.onInputBlur,
                    onChange: (0, _index9F7Dc477EsmJs.K),
                    onFocus: this.onInputFocus,
                    disabled: isDisabled,
                    tabIndex: tabIndex,
                    inputMode: "none",
                    form: form,
                    value: ""
                }, ariaAttributes));
                return /*#__PURE__*/ _react.createElement(Input, (0, _extendsDefault.default)({}, commonProps, {
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: "off",
                    id: id,
                    innerRef: this.getInputRef,
                    isDisabled: isDisabled,
                    isHidden: inputIsHidden,
                    onBlur: this.onInputBlur,
                    onChange: this.handleInputChange,
                    onFocus: this.onInputFocus,
                    spellCheck: "false",
                    tabIndex: tabIndex,
                    form: form,
                    type: "text",
                    value: inputValue
                }, ariaAttributes));
            }
        },
        {
            key: "renderPlaceholderOrValue",
            value: function renderPlaceholderOrValue() {
                var _this3 = this;
                var _this$getComponents2 = this.getComponents(), MultiValue = _this$getComponents2.MultiValue, MultiValueContainer = _this$getComponents2.MultiValueContainer, MultiValueLabel = _this$getComponents2.MultiValueLabel, MultiValueRemove = _this$getComponents2.MultiValueRemove, SingleValue = _this$getComponents2.SingleValue, Placeholder = _this$getComponents2.Placeholder;
                var commonProps = this.commonProps;
                var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
                var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
                if (!this.hasValue() || !controlShouldRenderValue) return inputValue ? null : /*#__PURE__*/ _react.createElement(Placeholder, (0, _extendsDefault.default)({}, commonProps, {
                    key: "placeholder",
                    isDisabled: isDisabled,
                    isFocused: isFocused,
                    innerProps: {
                        id: this.getElementId("placeholder")
                    }
                }), placeholder);
                if (isMulti) return selectValue.map(function(opt, index) {
                    var isOptionFocused = opt === focusedValue;
                    var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
                    return /*#__PURE__*/ _react.createElement(MultiValue, (0, _extendsDefault.default)({}, commonProps, {
                        components: {
                            Container: MultiValueContainer,
                            Label: MultiValueLabel,
                            Remove: MultiValueRemove
                        },
                        isFocused: isOptionFocused,
                        isDisabled: isDisabled,
                        key: key,
                        index: index,
                        removeProps: {
                            onClick: function onClick() {
                                return _this3.removeValue(opt);
                            },
                            onTouchEnd: function onTouchEnd() {
                                return _this3.removeValue(opt);
                            },
                            onMouseDown: function onMouseDown(e) {
                                e.preventDefault();
                            }
                        },
                        data: opt
                    }), _this3.formatOptionLabel(opt, "value"));
                });
                if (inputValue) return null;
                var singleValue = selectValue[0];
                return /*#__PURE__*/ _react.createElement(SingleValue, (0, _extendsDefault.default)({}, commonProps, {
                    data: singleValue,
                    isDisabled: isDisabled
                }), this.formatOptionLabel(singleValue, "value"));
            }
        },
        {
            key: "renderClearIndicator",
            value: function renderClearIndicator() {
                var _this$getComponents3 = this.getComponents(), ClearIndicator = _this$getComponents3.ClearIndicator;
                var commonProps = this.commonProps;
                var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
                var isFocused = this.state.isFocused;
                if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) return null;
                var innerProps = {
                    onMouseDown: this.onClearIndicatorMouseDown,
                    onTouchEnd: this.onClearIndicatorTouchEnd,
                    "aria-hidden": "true"
                };
                return /*#__PURE__*/ _react.createElement(ClearIndicator, (0, _extendsDefault.default)({}, commonProps, {
                    innerProps: innerProps,
                    isFocused: isFocused
                }));
            }
        },
        {
            key: "renderLoadingIndicator",
            value: function renderLoadingIndicator() {
                var _this$getComponents4 = this.getComponents(), LoadingIndicator = _this$getComponents4.LoadingIndicator;
                var commonProps = this.commonProps;
                var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
                var isFocused = this.state.isFocused;
                if (!LoadingIndicator || !isLoading) return null;
                var innerProps = {
                    "aria-hidden": "true"
                };
                return /*#__PURE__*/ _react.createElement(LoadingIndicator, (0, _extendsDefault.default)({}, commonProps, {
                    innerProps: innerProps,
                    isDisabled: isDisabled,
                    isFocused: isFocused
                }));
            }
        },
        {
            key: "renderIndicatorSeparator",
            value: function renderIndicatorSeparator() {
                var _this$getComponents5 = this.getComponents(), DropdownIndicator = _this$getComponents5.DropdownIndicator, IndicatorSeparator = _this$getComponents5.IndicatorSeparator;
                // separator doesn't make sense without the dropdown indicator
                if (!DropdownIndicator || !IndicatorSeparator) return null;
                var commonProps = this.commonProps;
                var isDisabled = this.props.isDisabled;
                var isFocused = this.state.isFocused;
                return /*#__PURE__*/ _react.createElement(IndicatorSeparator, (0, _extendsDefault.default)({}, commonProps, {
                    isDisabled: isDisabled,
                    isFocused: isFocused
                }));
            }
        },
        {
            key: "renderDropdownIndicator",
            value: function renderDropdownIndicator() {
                var _this$getComponents6 = this.getComponents(), DropdownIndicator = _this$getComponents6.DropdownIndicator;
                if (!DropdownIndicator) return null;
                var commonProps = this.commonProps;
                var isDisabled = this.props.isDisabled;
                var isFocused = this.state.isFocused;
                var innerProps = {
                    onMouseDown: this.onDropdownIndicatorMouseDown,
                    onTouchEnd: this.onDropdownIndicatorTouchEnd,
                    "aria-hidden": "true"
                };
                return /*#__PURE__*/ _react.createElement(DropdownIndicator, (0, _extendsDefault.default)({}, commonProps, {
                    innerProps: innerProps,
                    isDisabled: isDisabled,
                    isFocused: isFocused
                }));
            }
        },
        {
            key: "renderMenu",
            value: function renderMenu() {
                var _this4 = this;
                var _this$getComponents7 = this.getComponents(), Group = _this$getComponents7.Group, GroupHeading = _this$getComponents7.GroupHeading, Menu = _this$getComponents7.Menu, MenuList = _this$getComponents7.MenuList, MenuPortal = _this$getComponents7.MenuPortal, LoadingMessage = _this$getComponents7.LoadingMessage, NoOptionsMessage = _this$getComponents7.NoOptionsMessage, Option = _this$getComponents7.Option;
                var commonProps = this.commonProps;
                var focusedOption = this.state.focusedOption;
                var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
                if (!menuIsOpen) return null;
                // TODO: Internal Option Type here
                var render = function render(props, id) {
                    var type = props.type, data = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
                    var isFocused = focusedOption === data;
                    var onHover = isDisabled ? undefined : function() {
                        return _this4.onOptionHover(data);
                    };
                    var onSelect = isDisabled ? undefined : function() {
                        return _this4.selectOption(data);
                    };
                    var optionId = "".concat(_this4.getElementId("option"), "-").concat(id);
                    var innerProps = {
                        id: optionId,
                        onClick: onSelect,
                        onMouseMove: onHover,
                        onMouseOver: onHover,
                        tabIndex: -1
                    };
                    return /*#__PURE__*/ _react.createElement(Option, (0, _extendsDefault.default)({}, commonProps, {
                        innerProps: innerProps,
                        data: data,
                        isDisabled: isDisabled,
                        isSelected: isSelected,
                        key: optionId,
                        label: label,
                        type: type,
                        value: value,
                        isFocused: isFocused,
                        innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
                    }), _this4.formatOptionLabel(props.data, "menu"));
                };
                var menuUI;
                if (this.hasOptions()) menuUI = this.getCategorizedOptions().map(function(item) {
                    if (item.type === "group") {
                        var _data = item.data, options = item.options, groupIndex = item.index;
                        var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
                        var headingId = "".concat(groupId, "-heading");
                        return /*#__PURE__*/ _react.createElement(Group, (0, _extendsDefault.default)({}, commonProps, {
                            key: groupId,
                            data: _data,
                            options: options,
                            Heading: GroupHeading,
                            headingProps: {
                                id: headingId,
                                data: item.data
                            },
                            label: _this4.formatGroupLabel(item.data)
                        }), item.options.map(function(option) {
                            return render(option, "".concat(groupIndex, "-").concat(option.index));
                        }));
                    } else if (item.type === "option") return render(item, "".concat(item.index));
                });
                else if (isLoading) {
                    var message = loadingMessage({
                        inputValue: inputValue
                    });
                    if (message === null) return null;
                    menuUI = /*#__PURE__*/ _react.createElement(LoadingMessage, commonProps, message);
                } else {
                    var _message = noOptionsMessage({
                        inputValue: inputValue
                    });
                    if (_message === null) return null;
                    menuUI = /*#__PURE__*/ _react.createElement(NoOptionsMessage, commonProps, _message);
                }
                var menuPlacementProps = {
                    minMenuHeight: minMenuHeight,
                    maxMenuHeight: maxMenuHeight,
                    menuPlacement: menuPlacement,
                    menuPosition: menuPosition,
                    menuShouldScrollIntoView: menuShouldScrollIntoView
                };
                var menuElement = /*#__PURE__*/ _react.createElement((0, _index9F7Dc477EsmJs.M), (0, _extendsDefault.default)({}, commonProps, menuPlacementProps), function(_ref4) {
                    var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
                    return /*#__PURE__*/ _react.createElement(Menu, (0, _extendsDefault.default)({}, commonProps, menuPlacementProps, {
                        innerRef: ref,
                        innerProps: {
                            onMouseDown: _this4.onMenuMouseDown,
                            onMouseMove: _this4.onMenuMouseMove,
                            id: _this4.getElementId("listbox")
                        },
                        isLoading: isLoading,
                        placement: placement
                    }), /*#__PURE__*/ _react.createElement(ScrollManager, {
                        captureEnabled: captureMenuScroll,
                        onTopArrive: onMenuScrollToTop,
                        onBottomArrive: onMenuScrollToBottom,
                        lockEnabled: menuShouldBlockScroll
                    }, function(scrollTargetRef) {
                        return /*#__PURE__*/ _react.createElement(MenuList, (0, _extendsDefault.default)({}, commonProps, {
                            innerRef: function innerRef(instance) {
                                _this4.getMenuListRef(instance);
                                scrollTargetRef(instance);
                            },
                            isLoading: isLoading,
                            maxHeight: maxHeight,
                            focusedOption: focusedOption
                        }), menuUI);
                    }));
                });
                // positioning behaviour is almost identical for portalled and fixed,
                // so we use the same component. the actual portalling logic is forked
                // within the component based on `menuPosition`
                return menuPortalTarget || menuPosition === "fixed" ? /*#__PURE__*/ _react.createElement(MenuPortal, (0, _extendsDefault.default)({}, commonProps, {
                    appendTo: menuPortalTarget,
                    controlElement: this.controlRef,
                    menuPlacement: menuPlacement,
                    menuPosition: menuPosition
                }), menuElement) : menuElement;
            }
        },
        {
            key: "renderFormField",
            value: function renderFormField() {
                var _this5 = this;
                var _this$props13 = this.props, delimiter = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name, required = _this$props13.required;
                var selectValue = this.state.selectValue;
                if (!name || isDisabled) return;
                if (required && !this.hasValue()) return /*#__PURE__*/ _react.createElement(RequiredInput, {
                    name: name,
                    onFocus: this.onValueInputFocus
                });
                if (isMulti) {
                    if (delimiter) {
                        var value = selectValue.map(function(opt) {
                            return _this5.getOptionValue(opt);
                        }).join(delimiter);
                        return /*#__PURE__*/ _react.createElement("input", {
                            name: name,
                            type: "hidden",
                            value: value
                        });
                    } else {
                        var input = selectValue.length > 0 ? selectValue.map(function(opt, i) {
                            return /*#__PURE__*/ _react.createElement("input", {
                                key: "i-".concat(i),
                                name: name,
                                type: "hidden",
                                value: _this5.getOptionValue(opt)
                            });
                        }) : /*#__PURE__*/ _react.createElement("input", {
                            name: name,
                            type: "hidden",
                            value: ""
                        });
                        return /*#__PURE__*/ _react.createElement("div", null, input);
                    }
                } else {
                    var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
                    return /*#__PURE__*/ _react.createElement("input", {
                        name: name,
                        type: "hidden",
                        value: _value
                    });
                }
            }
        },
        {
            key: "renderLiveRegion",
            value: function renderLiveRegion() {
                var commonProps = this.commonProps;
                var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
                var focusableOptions = this.getFocusableOptions();
                return /*#__PURE__*/ _react.createElement(LiveRegion, (0, _extendsDefault.default)({}, commonProps, {
                    id: this.getElementId("live-region"),
                    ariaSelection: ariaSelection,
                    focusedOption: focusedOption,
                    focusedValue: focusedValue,
                    isFocused: isFocused,
                    selectValue: selectValue,
                    focusableOptions: focusableOptions
                }));
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$getComponents8 = this.getComponents(), Control = _this$getComponents8.Control, IndicatorsContainer = _this$getComponents8.IndicatorsContainer, SelectContainer = _this$getComponents8.SelectContainer, ValueContainer = _this$getComponents8.ValueContainer;
                var _this$props14 = this.props, className = _this$props14.className, id = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
                var isFocused = this.state.isFocused;
                var commonProps = this.commonProps = this.getCommonProps();
                return /*#__PURE__*/ _react.createElement(SelectContainer, (0, _extendsDefault.default)({}, commonProps, {
                    className: className,
                    innerProps: {
                        id: id,
                        onKeyDown: this.onKeyDown
                    },
                    isDisabled: isDisabled,
                    isFocused: isFocused
                }), this.renderLiveRegion(), /*#__PURE__*/ _react.createElement(Control, (0, _extendsDefault.default)({}, commonProps, {
                    innerRef: this.getControlRef,
                    innerProps: {
                        onMouseDown: this.onControlMouseDown,
                        onTouchEnd: this.onControlTouchEnd
                    },
                    isDisabled: isDisabled,
                    isFocused: isFocused,
                    menuIsOpen: menuIsOpen
                }), /*#__PURE__*/ _react.createElement(ValueContainer, (0, _extendsDefault.default)({}, commonProps, {
                    isDisabled: isDisabled
                }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/ _react.createElement(IndicatorsContainer, (0, _extendsDefault.default)({}, commonProps, {
                    isDisabled: isDisabled
                }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, state) {
                var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused;
                var options = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
                var selectValue = (0, _index9F7Dc477EsmJs.I)(value);
                var newMenuOptionsState = {};
                if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
                    var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
                    var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
                    var focusedOption = getNextFocusedOption(state, focusableOptions);
                    newMenuOptionsState = {
                        selectValue: selectValue,
                        focusedOption: focusedOption,
                        focusedValue: focusedValue,
                        clearFocusValueOnUpdate: false
                    };
                }
                // some updates should toggle the state of the input visibility
                var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
                    inputIsHidden: inputIsHiddenAfterUpdate,
                    inputIsHiddenAfterUpdate: undefined
                } : {};
                var newAriaSelection = ariaSelection;
                var hasKeptFocus = isFocused && prevWasFocused;
                if (isFocused && !hasKeptFocus) {
                    // If `value` or `defaultValue` props are not empty then announce them
                    // when the Select is initially focused
                    newAriaSelection = {
                        value: (0, _index9F7Dc477EsmJs.D)(isMulti, selectValue, selectValue[0] || null),
                        options: selectValue,
                        action: "initial-input-focus"
                    };
                    hasKeptFocus = !prevWasFocused;
                }
                // If the 'initial-input-focus' action has been set already
                // then reset the ariaSelection to null
                if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") newAriaSelection = null;
                return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, newMenuOptionsState), newInputIsHiddenState), {}, {
                    prevProps: props,
                    ariaSelection: newAriaSelection,
                    prevWasFocused: hasKeptFocus
                });
            }
        }
    ]);
    return Select;
}((0, _react.Component));
Select.defaultProps = defaultProps;

},{"@babel/runtime/helpers/esm/extends":"eZS2K","@babel/runtime/helpers/esm/objectSpread2":"4wVyh","@babel/runtime/helpers/esm/classCallCheck":"6umnT","@babel/runtime/helpers/esm/createClass":"3PET8","@babel/runtime/helpers/esm/inherits":"59VwA","@babel/runtime/helpers/esm/createSuper":"29Q9Y","@babel/runtime/helpers/esm/toConsumableArray":"8dacU","react":"21dqq","./index-9f7dc477.esm.js":"5jyQf","@emotion/react":"9qiaY","memoize-one":"ajWd5","@babel/runtime/helpers/esm/objectWithoutProperties":"839eU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6umnT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PET8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59VwA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOfJs = require("./setPrototypeOf.js");
var _setPrototypeOfJsDefault = parcelHelpers.interopDefault(_setPrototypeOfJs);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) (0, _setPrototypeOfJsDefault.default)(subClass, superClass);
}
exports.default = _inherits;

},{"./setPrototypeOf.js":"kwZO6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwZO6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29Q9Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOfJs = require("./getPrototypeOf.js");
var _getPrototypeOfJsDefault = parcelHelpers.interopDefault(_getPrototypeOfJs);
var _isNativeReflectConstructJs = require("./isNativeReflectConstruct.js");
var _isNativeReflectConstructJsDefault = parcelHelpers.interopDefault(_isNativeReflectConstructJs);
var _possibleConstructorReturnJs = require("./possibleConstructorReturn.js");
var _possibleConstructorReturnJsDefault = parcelHelpers.interopDefault(_possibleConstructorReturnJs);
function _createSuper(Derived) {
    var hasNativeReflectConstruct = (0, _isNativeReflectConstructJsDefault.default)();
    return function _createSuperInternal() {
        var Super = (0, _getPrototypeOfJsDefault.default)(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOfJsDefault.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, _possibleConstructorReturnJsDefault.default)(this, result);
    };
}
exports.default = _createSuper;

},{"./getPrototypeOf.js":"iw1HN","./isNativeReflectConstruct.js":"8ujle","./possibleConstructorReturn.js":"hHCh1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iw1HN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ujle":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
exports.default = _isNativeReflectConstruct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hHCh1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
var _assertThisInitializedJs = require("./assertThisInitialized.js");
var _assertThisInitializedJsDefault = parcelHelpers.interopDefault(_assertThisInitializedJs);
function _possibleConstructorReturn(self, call) {
    if (call && ((0, _typeofJsDefault.default)(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return (0, _assertThisInitializedJsDefault.default)(self);
}
exports.default = _possibleConstructorReturn;

},{"./typeof.js":"6d4v3","./assertThisInitialized.js":"f5PMJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6d4v3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f5PMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dacU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHolesJs = require("./arrayWithoutHoles.js");
var _arrayWithoutHolesJsDefault = parcelHelpers.interopDefault(_arrayWithoutHolesJs);
var _iterableToArrayJs = require("./iterableToArray.js");
var _iterableToArrayJsDefault = parcelHelpers.interopDefault(_iterableToArrayJs);
var _unsupportedIterableToArrayJs = require("./unsupportedIterableToArray.js");
var _unsupportedIterableToArrayJsDefault = parcelHelpers.interopDefault(_unsupportedIterableToArrayJs);
var _nonIterableSpreadJs = require("./nonIterableSpread.js");
var _nonIterableSpreadJsDefault = parcelHelpers.interopDefault(_nonIterableSpreadJs);
function _toConsumableArray(arr) {
    return (0, _arrayWithoutHolesJsDefault.default)(arr) || (0, _iterableToArrayJsDefault.default)(arr) || (0, _unsupportedIterableToArrayJsDefault.default)(arr) || (0, _nonIterableSpreadJsDefault.default)();
}
exports.default = _toConsumableArray;

},{"./arrayWithoutHoles.js":"jaBTl","./iterableToArray.js":"k53F3","./unsupportedIterableToArray.js":"cKNYy","./nonIterableSpread.js":"dsTGr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jaBTl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArrayJs = require("./arrayLikeToArray.js");
var _arrayLikeToArrayJsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayJs);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return (0, _arrayLikeToArrayJsDefault.default)(arr);
}
exports.default = _arrayWithoutHoles;

},{"./arrayLikeToArray.js":"27aGs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k53F3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsTGr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jyQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "A", ()=>isMobileDevice);
parcelHelpers.export(exports, "B", ()=>multiValueAsValue);
parcelHelpers.export(exports, "C", ()=>singleValueAsValue);
parcelHelpers.export(exports, "D", ()=>valueTernary);
parcelHelpers.export(exports, "E", ()=>classNames);
parcelHelpers.export(exports, "F", ()=>defaultComponents);
parcelHelpers.export(exports, "G", ()=>notNullish);
parcelHelpers.export(exports, "H", ()=>isDocumentElement);
parcelHelpers.export(exports, "I", ()=>cleanValue);
parcelHelpers.export(exports, "J", ()=>scrollIntoView);
parcelHelpers.export(exports, "K", ()=>noop);
parcelHelpers.export(exports, "L", ()=>handleInputChange);
parcelHelpers.export(exports, "M", ()=>MenuPlacer);
parcelHelpers.export(exports, "a", ()=>clearIndicatorCSS);
parcelHelpers.export(exports, "b", ()=>containerCSS);
parcelHelpers.export(exports, "c", ()=>components);
parcelHelpers.export(exports, "d", ()=>css$1);
parcelHelpers.export(exports, "e", ()=>dropdownIndicatorCSS);
parcelHelpers.export(exports, "f", ()=>groupHeadingCSS);
parcelHelpers.export(exports, "g", ()=>groupCSS);
parcelHelpers.export(exports, "h", ()=>indicatorSeparatorCSS);
parcelHelpers.export(exports, "i", ()=>indicatorsContainerCSS);
parcelHelpers.export(exports, "j", ()=>inputCSS);
parcelHelpers.export(exports, "k", ()=>loadingMessageCSS);
parcelHelpers.export(exports, "l", ()=>loadingIndicatorCSS);
parcelHelpers.export(exports, "m", ()=>menuCSS);
parcelHelpers.export(exports, "n", ()=>menuListCSS);
parcelHelpers.export(exports, "o", ()=>menuPortalCSS);
parcelHelpers.export(exports, "p", ()=>multiValueCSS);
parcelHelpers.export(exports, "q", ()=>multiValueLabelCSS);
parcelHelpers.export(exports, "r", ()=>removeProps);
parcelHelpers.export(exports, "s", ()=>supportsPassiveEvents);
parcelHelpers.export(exports, "t", ()=>multiValueRemoveCSS);
parcelHelpers.export(exports, "u", ()=>noOptionsMessageCSS);
parcelHelpers.export(exports, "v", ()=>optionCSS);
parcelHelpers.export(exports, "w", ()=>placeholderCSS);
parcelHelpers.export(exports, "x", ()=>css);
parcelHelpers.export(exports, "y", ()=>valueContainerCSS);
parcelHelpers.export(exports, "z", ()=>isTouchCapable);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _react = require("@emotion/react");
var _taggedTemplateLiteral = require("@babel/runtime/helpers/esm/taggedTemplateLiteral");
var _taggedTemplateLiteralDefault = parcelHelpers.interopDefault(_taggedTemplateLiteral);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _react1 = require("react");
var _reactDom = require("react-dom");
var _dom = require("@floating-ui/dom");
var _useIsomorphicLayoutEffect = require("use-isomorphic-layout-effect");
var _useIsomorphicLayoutEffectDefault = parcelHelpers.interopDefault(_useIsomorphicLayoutEffect);
var _excluded$3 = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme"
];
// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// ==============================
// Class Name Prefixer
// ==============================
/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/ function applyPrefixToName(prefix, name) {
    if (!name) return prefix;
    else if (name[0] === "-") return prefix + name;
    else return prefix + "__" + name;
}
function classNames(prefix, state, className) {
    var arr = [
        className
    ];
    if (state && prefix) {
        for(var key in state)if (state.hasOwnProperty(key) && state[key]) arr.push("".concat(applyPrefixToName(prefix, key)));
    }
    return arr.filter(function(i) {
        return i;
    }).map(function(i) {
        return String(i).trim();
    }).join(" ");
}
// ==============================
// Clean Value
// ==============================
var cleanValue = function cleanValue(value) {
    if (isArray(value)) return value.filter(Boolean);
    if ((0, _typeofDefault.default)(value) === "object" && value !== null) return [
        value
    ];
    return [];
};
// ==============================
// Clean Common Props
// ==============================
var cleanCommonProps = function cleanCommonProps(props) {
    //className
    props.className;
    props.clearValue;
    props.cx;
    props.getStyles;
    props.getValue;
    props.hasValue;
    props.isMulti;
    props.isRtl;
    props.options;
    props.selectOption;
    props.selectProps;
    props.setValue;
    props.theme;
    var innerProps = (0, _objectWithoutPropertiesDefault.default)(props, _excluded$3);
    return (0, _objectSpread2Default.default)({}, innerProps);
};
// ==============================
// Handle Input Change
// ==============================
function handleInputChange(inputValue, actionMeta, onInputChange) {
    if (onInputChange) {
        var _newValue = onInputChange(inputValue, actionMeta);
        if (typeof _newValue === "string") return _newValue;
    }
    return inputValue;
}
// ==============================
// Scroll Helpers
// ==============================
function isDocumentElement(el) {
    return [
        document.documentElement,
        document.body,
        window
    ].indexOf(el) > -1;
}
// Normalized Scroll Top
// ------------------------------
function normalizedHeight(el) {
    if (isDocumentElement(el)) return window.innerHeight;
    return el.clientHeight;
}
// Normalized scrollTo & scrollTop
// ------------------------------
function getScrollTop(el) {
    if (isDocumentElement(el)) return window.pageYOffset;
    return el.scrollTop;
}
function scrollTo(el, top) {
    // with a scroll distance, we perform scroll on the element
    if (isDocumentElement(el)) {
        window.scrollTo(0, top);
        return;
    }
    el.scrollTop = top;
}
// Get Scroll Parent
// ------------------------------
function getScrollParent(element) {
    var style = getComputedStyle(element);
    var excludeStaticParent = style.position === "absolute";
    var overflowRx = /(auto|scroll)/;
    if (style.position === "fixed") return document.documentElement;
    for(var parent = element; parent = parent.parentElement;){
        style = getComputedStyle(parent);
        if (excludeStaticParent && style.position === "static") continue;
        if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) return parent;
    }
    return document.documentElement;
}
// Animated Scroll To
// ------------------------------
/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/ function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
    var start = getScrollTop(element);
    var change = to - start;
    var increment = 10;
    var currentTime = 0;
    function animateScroll() {
        currentTime += increment;
        var val = easeOutCubic(currentTime, start, change, duration);
        scrollTo(element, val);
        if (currentTime < duration) window.requestAnimationFrame(animateScroll);
        else callback(element);
    }
    animateScroll();
}
// Scroll Into View
// ------------------------------
function scrollIntoView(menuEl, focusedEl) {
    var menuRect = menuEl.getBoundingClientRect();
    var focusedRect = focusedEl.getBoundingClientRect();
    var overScroll = focusedEl.offsetHeight / 3;
    if (focusedRect.bottom + overScroll > menuRect.bottom) scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
    else if (focusedRect.top - overScroll < menuRect.top) scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
}
// ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect
function getBoundingClientObj(element) {
    var rect = element.getBoundingClientRect();
    return {
        bottom: rect.bottom,
        height: rect.height,
        left: rect.left,
        right: rect.right,
        top: rect.top,
        width: rect.width
    };
}
// ==============================
// Touch Capability Detector
// ==============================
function isTouchCapable() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}
// ==============================
// Mobile Device Detector
// ==============================
function isMobileDevice() {
    try {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    } catch (e) {
        return false;
    }
}
// ==============================
// Passive Event Detector
// ==============================
// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
var passiveOptionAccessed = false;
var options = {
    get passive () {
        return passiveOptionAccessed = true;
    }
};
// check for SSR
var w = typeof window !== "undefined" ? window : {};
if (w.addEventListener && w.removeEventListener) {
    w.addEventListener("p", noop, options);
    w.removeEventListener("p", noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
    return item != null;
}
function isArray(arg) {
    return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
    return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
    return singleValue;
}
function multiValueAsValue(multiValue) {
    return multiValue;
}
var removeProps = function removeProps(propsObj) {
    for(var _len = arguments.length, properties = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)properties[_key - 1] = arguments[_key];
    var propsMap = Object.entries(propsObj).filter(function(_ref) {
        var _ref2 = (0, _slicedToArrayDefault.default)(_ref, 1), key = _ref2[0];
        return !properties.includes(key);
    });
    return propsMap.reduce(function(newProps, _ref3) {
        var _ref4 = (0, _slicedToArrayDefault.default)(_ref3, 2), key = _ref4[0], val = _ref4[1];
        newProps[key] = val;
        return newProps;
    }, {});
};
function getMenuPlacement(_ref) {
    var preferredMaxHeight = _ref.maxHeight, menuEl = _ref.menuEl, minHeight = _ref.minHeight, preferredPlacement = _ref.placement, shouldScroll = _ref.shouldScroll, isFixedPosition = _ref.isFixedPosition, theme = _ref.theme;
    var spacing = theme.spacing;
    var scrollParent = getScrollParent(menuEl);
    var defaultState = {
        placement: "bottom",
        maxHeight: preferredMaxHeight
    };
    // something went wrong, return default state
    if (!menuEl || !menuEl.offsetParent) return defaultState;
    // we can't trust `scrollParent.scrollHeight` --> it may increase when
    // the menu is rendered
    var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
    var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
    var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
    var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
    var scrollTop = getScrollTop(scrollParent);
    var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
    var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
    var viewSpaceAbove = containerTop - marginTop;
    var viewSpaceBelow = viewHeight - menuTop;
    var scrollSpaceAbove = viewSpaceAbove + scrollTop;
    var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
    var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
    var scrollUp = scrollTop + menuTop - marginTop;
    var scrollDuration = 160;
    switch(preferredPlacement){
        case "auto":
        case "bottom":
            // 1: the menu will fit, do nothing
            if (viewSpaceBelow >= menuHeight) return {
                placement: "bottom",
                maxHeight: preferredMaxHeight
            };
            // 2: the menu will fit, if scrolled
            if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
                if (shouldScroll) animatedScrollTo(scrollParent, scrollDown, scrollDuration);
                return {
                    placement: "bottom",
                    maxHeight: preferredMaxHeight
                };
            }
            // 3: the menu will fit, if constrained
            if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
                if (shouldScroll) animatedScrollTo(scrollParent, scrollDown, scrollDuration);
                // we want to provide as much of the menu as possible to the user,
                // so give them whatever is available below rather than the minHeight.
                var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
                return {
                    placement: "bottom",
                    maxHeight: constrainedHeight
                };
            }
            // 4. Forked beviour when there isn't enough space below
            // AUTO: flip the menu, render above
            if (preferredPlacement === "auto" || isFixedPosition) {
                // may need to be constrained after flipping
                var _constrainedHeight = preferredMaxHeight;
                var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
                if (spaceAbove >= minHeight) _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, preferredMaxHeight);
                return {
                    placement: "top",
                    maxHeight: _constrainedHeight
                };
            }
            // BOTTOM: allow browser to increase scrollable area and immediately set scroll
            if (preferredPlacement === "bottom") {
                if (shouldScroll) scrollTo(scrollParent, scrollDown);
                return {
                    placement: "bottom",
                    maxHeight: preferredMaxHeight
                };
            }
            break;
        case "top":
            // 1: the menu will fit, do nothing
            if (viewSpaceAbove >= menuHeight) return {
                placement: "top",
                maxHeight: preferredMaxHeight
            };
            // 2: the menu will fit, if scrolled
            if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
                if (shouldScroll) animatedScrollTo(scrollParent, scrollUp, scrollDuration);
                return {
                    placement: "top",
                    maxHeight: preferredMaxHeight
                };
            }
            // 3: the menu will fit, if constrained
            if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
                var _constrainedHeight2 = preferredMaxHeight;
                // we want to provide as much of the menu as possible to the user,
                // so give them whatever is available below rather than the minHeight.
                if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
                if (shouldScroll) animatedScrollTo(scrollParent, scrollUp, scrollDuration);
                return {
                    placement: "top",
                    maxHeight: _constrainedHeight2
                };
            }
            // 4. not enough space, the browser WILL NOT increase scrollable area when
            // absolutely positioned element rendered above the viewport (only below).
            // Flip the menu, render below
            return {
                placement: "bottom",
                maxHeight: preferredMaxHeight
            };
        default:
            throw new Error('Invalid placement provided "'.concat(preferredPlacement, '".'));
    }
    return defaultState;
}
// Menu Component
// ------------------------------
function alignToControl(placement) {
    var placementToCSSProp = {
        bottom: "top",
        top: "bottom"
    };
    return placement ? placementToCSSProp[placement] : "bottom";
}
var coercePlacement = function coercePlacement(p) {
    return p === "auto" ? "bottom" : p;
};
var menuCSS = function menuCSS(_ref2) {
    var _ref3;
    var placement = _ref2.placement, _ref2$theme = _ref2.theme, borderRadius = _ref2$theme.borderRadius, spacing = _ref2$theme.spacing, colors = _ref2$theme.colors;
    return _ref3 = {
        label: "menu"
    }, (0, _definePropertyDefault.default)(_ref3, alignToControl(placement), "100%"), (0, _definePropertyDefault.default)(_ref3, "backgroundColor", colors.neutral0), (0, _definePropertyDefault.default)(_ref3, "borderRadius", borderRadius), (0, _definePropertyDefault.default)(_ref3, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), (0, _definePropertyDefault.default)(_ref3, "marginBottom", spacing.menuGutter), (0, _definePropertyDefault.default)(_ref3, "marginTop", spacing.menuGutter), (0, _definePropertyDefault.default)(_ref3, "position", "absolute"), (0, _definePropertyDefault.default)(_ref3, "width", "100%"), (0, _definePropertyDefault.default)(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /*#__PURE__*/ (0, _react1.createContext)(null);
// NOTE: internal only
var MenuPlacer = function MenuPlacer(props) {
    var children = props.children, minMenuHeight = props.minMenuHeight, maxMenuHeight = props.maxMenuHeight, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition, menuShouldScrollIntoView = props.menuShouldScrollIntoView, theme = props.theme;
    var _ref4 = (0, _react1.useContext)(PortalPlacementContext) || {}, setPortalPlacement = _ref4.setPortalPlacement;
    var ref = (0, _react1.useRef)(null);
    var _useState = (0, _react1.useState)(maxMenuHeight), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), maxHeight = _useState2[0], setMaxHeight = _useState2[1];
    var _useState3 = (0, _react1.useState)(null), _useState4 = (0, _slicedToArrayDefault.default)(_useState3, 2), placement = _useState4[0], setPlacement = _useState4[1];
    (0, _useIsomorphicLayoutEffectDefault.default)(function() {
        var menuEl = ref.current;
        if (!menuEl) return;
        // DO NOT scroll if position is fixed
        var isFixedPosition = menuPosition === "fixed";
        var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
        var state = getMenuPlacement({
            maxHeight: maxMenuHeight,
            menuEl: menuEl,
            minHeight: minMenuHeight,
            placement: menuPlacement,
            shouldScroll: shouldScroll,
            isFixedPosition: isFixedPosition,
            theme: theme
        });
        setMaxHeight(state.maxHeight);
        setPlacement(state.placement);
        setPortalPlacement === null || setPortalPlacement === void 0 || setPortalPlacement(state.placement);
    }, [
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView,
        minMenuHeight,
        setPortalPlacement,
        theme
    ]);
    return children({
        ref: ref,
        placerProps: (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
            placement: placement || coercePlacement(menuPlacement),
            maxHeight: maxHeight
        })
    });
};
var Menu = function Menu(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerRef = props.innerRef, innerProps = props.innerProps;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("menu", props),
        className: cx({
            menu: true
        }, className),
        ref: innerRef
    }, innerProps), children);
};
// ==============================
// Menu List
// ==============================
var menuListCSS = function menuListCSS(_ref5) {
    var maxHeight = _ref5.maxHeight, baseUnit = _ref5.theme.spacing.baseUnit;
    return {
        maxHeight: maxHeight,
        overflowY: "auto",
        paddingBottom: baseUnit,
        paddingTop: baseUnit,
        position: "relative",
        // required for offset[Height, Top] > keyboard scroll
        WebkitOverflowScrolling: "touch"
    };
};
var MenuList = function MenuList(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("menuList", props),
        className: cx({
            "menu-list": true,
            "menu-list--is-multi": isMulti
        }, className),
        ref: innerRef
    }, innerProps), children);
};
// ==============================
// Menu Notices
// ==============================
var noticeCSS = function noticeCSS(_ref6) {
    var _ref6$theme = _ref6.theme, baseUnit = _ref6$theme.spacing.baseUnit, colors = _ref6$theme.colors;
    return {
        color: colors.neutral40,
        padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
        textAlign: "center"
    };
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("noOptionsMessage", props),
        className: cx({
            "menu-notice": true,
            "menu-notice--no-options": true
        }, className)
    }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
    children: "No options"
};
var LoadingMessage = function LoadingMessage(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("loadingMessage", props),
        className: cx({
            "menu-notice": true,
            "menu-notice--loading": true
        }, className)
    }, innerProps), children);
};
LoadingMessage.defaultProps = {
    children: "Loading..."
};
// ==============================
// Menu Portal
// ==============================
var menuPortalCSS = function menuPortalCSS(_ref7) {
    var rect = _ref7.rect, offset = _ref7.offset, position = _ref7.position;
    return {
        left: rect.left,
        position: position,
        top: offset,
        width: rect.width,
        zIndex: 1
    };
};
var MenuPortal = function MenuPortal(_ref8) {
    var appendTo = _ref8.appendTo, children = _ref8.children, className = _ref8.className, controlElement = _ref8.controlElement, cx = _ref8.cx, innerProps = _ref8.innerProps, menuPlacement = _ref8.menuPlacement, menuPosition = _ref8.menuPosition, getStyles = _ref8.getStyles;
    var menuPortalRef = (0, _react1.useRef)(null);
    var cleanupRef = (0, _react1.useRef)(null);
    var _useState5 = (0, _react1.useState)(coercePlacement(menuPlacement)), _useState6 = (0, _slicedToArrayDefault.default)(_useState5, 2), placement = _useState6[0], setPortalPlacement = _useState6[1];
    var portalPlacementContext = (0, _react1.useMemo)(function() {
        return {
            setPortalPlacement: setPortalPlacement
        };
    }, []);
    var _useState7 = (0, _react1.useState)(null), _useState8 = (0, _slicedToArrayDefault.default)(_useState7, 2), computedPosition = _useState8[0], setComputedPosition = _useState8[1];
    var updateComputedPosition = (0, _react1.useCallback)(function() {
        if (!controlElement) return;
        var rect = getBoundingClientObj(controlElement);
        var scrollDistance = menuPosition === "fixed" ? 0 : window.pageYOffset;
        var offset = rect[placement] + scrollDistance;
        if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) setComputedPosition({
            offset: offset,
            rect: rect
        });
    }, [
        controlElement,
        menuPosition,
        placement,
        computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset,
        computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left,
        computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width
    ]);
    (0, _useIsomorphicLayoutEffectDefault.default)(function() {
        updateComputedPosition();
    }, [
        updateComputedPosition
    ]);
    var runAutoUpdate = (0, _react1.useCallback)(function() {
        if (typeof cleanupRef.current === "function") {
            cleanupRef.current();
            cleanupRef.current = null;
        }
        if (controlElement && menuPortalRef.current) cleanupRef.current = (0, _dom.autoUpdate)(controlElement, menuPortalRef.current, updateComputedPosition, {
            elementResize: "ResizeObserver" in window
        });
    }, [
        controlElement,
        updateComputedPosition
    ]);
    (0, _useIsomorphicLayoutEffectDefault.default)(function() {
        runAutoUpdate();
    }, [
        runAutoUpdate
    ]);
    var setMenuPortalElement = (0, _react1.useCallback)(function(menuPortalElement) {
        menuPortalRef.current = menuPortalElement;
        runAutoUpdate();
    }, [
        runAutoUpdate
    ]);
    // bail early if required elements aren't present
    if (!appendTo && menuPosition !== "fixed" || !computedPosition) return null;
    // same wrapper element whether fixed or portalled
    var menuWrapper = (0, _react.jsx)("div", (0, _extendsDefault.default)({
        ref: setMenuPortalElement,
        css: getStyles("menuPortal", {
            offset: computedPosition.offset,
            position: menuPosition,
            rect: computedPosition.rect
        }),
        className: cx({
            "menu-portal": true
        }, className)
    }, innerProps), children);
    return (0, _react.jsx)(PortalPlacementContext.Provider, {
        value: portalPlacementContext
    }, appendTo ? /*#__PURE__*/ (0, _reactDom.createPortal)(menuWrapper, appendTo) : menuWrapper);
};
var containerCSS = function containerCSS(_ref) {
    var isDisabled = _ref.isDisabled, isRtl = _ref.isRtl;
    return {
        label: "container",
        direction: isRtl ? "rtl" : undefined,
        pointerEvents: isDisabled ? "none" : undefined,
        // cancel mouse events when disabled
        position: "relative"
    };
};
var SelectContainer = function SelectContainer(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("container", props),
        className: cx({
            "--is-disabled": isDisabled,
            "--is-rtl": isRtl
        }, className)
    }, innerProps), children);
};
// ==============================
// Value Container
// ==============================
var valueContainerCSS = function valueContainerCSS(_ref2) {
    var spacing = _ref2.theme.spacing, isMulti = _ref2.isMulti, hasValue = _ref2.hasValue, controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
    return {
        alignItems: "center",
        display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
        flex: 1,
        flexWrap: "wrap",
        padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
        WebkitOverflowScrolling: "touch",
        position: "relative",
        overflow: "hidden"
    };
};
var ValueContainer = function ValueContainer(props) {
    var children = props.children, className = props.className, cx = props.cx, innerProps = props.innerProps, isMulti = props.isMulti, getStyles = props.getStyles, hasValue = props.hasValue;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("valueContainer", props),
        className: cx({
            "value-container": true,
            "value-container--is-multi": isMulti,
            "value-container--has-value": hasValue
        }, className)
    }, innerProps), children);
};
// ==============================
// Indicator Container
// ==============================
var indicatorsContainerCSS = function indicatorsContainerCSS() {
    return {
        alignItems: "center",
        alignSelf: "stretch",
        display: "flex",
        flexShrink: 0
    };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
    var children = props.children, className = props.className, cx = props.cx, innerProps = props.innerProps, getStyles = props.getStyles;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("indicatorsContainer", props),
        className: cx({
            indicators: true
        }, className)
    }, innerProps), children);
};
var _templateObject;
var _excluded$2 = [
    "size"
];
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref2 = {
    name: "tj5bde-Svg",
    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06XG4gIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG5leHBvcnQgY29uc3QgRHJvcGRvd25JbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBEcm9wZG93bkluZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+XG4pID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
    var size = _ref.size, props = (0, _objectWithoutPropertiesDefault.default)(_ref, _excluded$2);
    return (0, _react.jsx)("svg", (0, _extendsDefault.default)({
        height: size,
        width: size,
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        focusable: "false",
        css: _ref2
    }, props));
};
var CrossIcon = function CrossIcon(props) {
    return (0, _react.jsx)(Svg, (0, _extendsDefault.default)({
        size: 20
    }, props), (0, _react.jsx)("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
    }));
};
var DownChevron = function DownChevron(props) {
    return (0, _react.jsx)(Svg, (0, _extendsDefault.default)({
        size: 20
    }, props), (0, _react.jsx)("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
    }));
};
// ==============================
// Dropdown & Clear Buttons
// ==============================
var baseCSS = function baseCSS(_ref3) {
    var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit = _ref3$theme.spacing.baseUnit, colors = _ref3$theme.colors;
    return {
        label: "indicatorContainer",
        color: isFocused ? colors.neutral60 : colors.neutral20,
        display: "flex",
        padding: baseUnit * 2,
        transition: "color 150ms",
        ":hover": {
            color: isFocused ? colors.neutral80 : colors.neutral40
        }
    };
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("dropdownIndicator", props),
        className: cx({
            indicator: true,
            "dropdown-indicator": true
        }, className)
    }, innerProps), children || (0, _react.jsx)(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("clearIndicator", props),
        className: cx({
            indicator: true,
            "clear-indicator": true
        }, className)
    }, innerProps), children || (0, _react.jsx)(CrossIcon, null));
};
// ==============================
// Separator
// ==============================
var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
    var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit = _ref4$theme.spacing.baseUnit, colors = _ref4$theme.colors;
    return {
        label: "indicatorSeparator",
        alignSelf: "stretch",
        backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
        marginBottom: baseUnit * 2,
        marginTop: baseUnit * 2,
        width: 1
    };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
    var className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return (0, _react.jsx)("span", (0, _extendsDefault.default)({}, innerProps, {
        css: getStyles("indicatorSeparator", props),
        className: cx({
            "indicator-separator": true
        }, className)
    }));
};
// ==============================
// Loading
// ==============================
var loadingDotAnimations = (0, _react.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralDefault.default)([
    "\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"
])));
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
    var isFocused = _ref5.isFocused, size = _ref5.size, _ref5$theme = _ref5.theme, colors = _ref5$theme.colors, baseUnit = _ref5$theme.spacing.baseUnit;
    return {
        label: "loadingIndicator",
        color: isFocused ? colors.neutral60 : colors.neutral20,
        display: "flex",
        padding: baseUnit * 2,
        transition: "color 150ms",
        alignSelf: "center",
        fontSize: size,
        lineHeight: 1,
        marginRight: size,
        textAlign: "center",
        verticalAlign: "middle"
    };
};
var LoadingDot = function LoadingDot(_ref6) {
    var delay = _ref6.delay, offset = _ref6.offset;
    return (0, _react.jsx)("span", {
        css: /*#__PURE__*/ (0, _react.css)({
            animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
            backgroundColor: "currentColor",
            borderRadius: "1em",
            display: "inline-block",
            marginLeft: offset ? "1em" : undefined,
            height: "1em",
            verticalAlign: "top",
            width: "1em"
        }, ";label:LoadingDot;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFQSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06XG4gIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG5leHBvcnQgY29uc3QgRHJvcGRvd25JbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBEcm9wZG93bkluZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+XG4pID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */")
    });
};
var LoadingIndicator = function LoadingIndicator(props) {
    var className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, isRtl = props.isRtl;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("loadingIndicator", props),
        className: cx({
            indicator: true,
            "loading-indicator": true
        }, className)
    }, innerProps), (0, _react.jsx)(LoadingDot, {
        delay: 0,
        offset: isRtl
    }), (0, _react.jsx)(LoadingDot, {
        delay: 160,
        offset: true
    }), (0, _react.jsx)(LoadingDot, {
        delay: 320,
        offset: !isRtl
    }));
};
LoadingIndicator.defaultProps = {
    size: 4
};
var css$1 = function css(_ref) {
    var isDisabled = _ref.isDisabled, isFocused = _ref.isFocused, _ref$theme = _ref.theme, colors = _ref$theme.colors, borderRadius = _ref$theme.borderRadius, spacing = _ref$theme.spacing;
    return {
        label: "control",
        alignItems: "center",
        backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
        borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
        borderRadius: borderRadius,
        borderStyle: "solid",
        borderWidth: 1,
        boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
        cursor: "default",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        minHeight: spacing.controlHeight,
        outline: "0 !important",
        position: "relative",
        transition: "all 100ms",
        "&:hover": {
            borderColor: isFocused ? colors.primary : colors.neutral30
        }
    };
};
var Control = function Control(props) {
    var children = props.children, cx = props.cx, getStyles = props.getStyles, className = props.className, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        ref: innerRef,
        css: getStyles("control", props),
        className: cx({
            control: true,
            "control--is-disabled": isDisabled,
            "control--is-focused": isFocused,
            "control--menu-is-open": menuIsOpen
        }, className)
    }, innerProps), children);
};
var _excluded$1 = [
    "data"
];
var groupCSS = function groupCSS(_ref) {
    var spacing = _ref.theme.spacing;
    return {
        paddingBottom: spacing.baseUnit * 2,
        paddingTop: spacing.baseUnit * 2
    };
};
var Group = function Group(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("group", props),
        className: cx({
            group: true
        }, className)
    }, innerProps), (0, _react.jsx)(Heading, (0, _extendsDefault.default)({}, headingProps, {
        selectProps: selectProps,
        theme: theme,
        getStyles: getStyles,
        cx: cx
    }), label), (0, _react.jsx)("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS(_ref2) {
    var spacing = _ref2.theme.spacing;
    return {
        label: "group",
        color: "#999",
        cursor: "default",
        display: "block",
        fontSize: "75%",
        fontWeight: 500,
        marginBottom: "0.25em",
        paddingLeft: spacing.baseUnit * 3,
        paddingRight: spacing.baseUnit * 3,
        textTransform: "uppercase"
    };
};
var GroupHeading = function GroupHeading(props) {
    var getStyles = props.getStyles, cx = props.cx, className = props.className;
    var _cleanCommonProps = cleanCommonProps(props);
    _cleanCommonProps.data;
    var innerProps = (0, _objectWithoutPropertiesDefault.default)(_cleanCommonProps, _excluded$1);
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("groupHeading", props),
        className: cx({
            "group-heading": true
        }, className)
    }, innerProps));
};
var _excluded = [
    "innerRef",
    "isDisabled",
    "isHidden",
    "inputClassName"
];
var inputCSS = function inputCSS(_ref) {
    var isDisabled = _ref.isDisabled, value = _ref.value, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
    return (0, _objectSpread2Default.default)({
        margin: spacing.baseUnit / 2,
        paddingBottom: spacing.baseUnit / 2,
        paddingTop: spacing.baseUnit / 2,
        visibility: isDisabled ? "hidden" : "visible",
        color: colors.neutral80,
        // force css to recompute when value change due to @emotion bug.
        // We can remove it whenever the bug is fixed.
        transform: value ? "translateZ(0)" : ""
    }, containerStyle);
};
var spacingStyle = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
};
var containerStyle = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": (0, _objectSpread2Default.default)({
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre"
    }, spacingStyle)
};
var inputStyle = function inputStyle(isHidden) {
    return (0, _objectSpread2Default.default)({
        label: "input",
        color: "inherit",
        background: 0,
        opacity: isHidden ? 0 : 1,
        width: "100%"
    }, spacingStyle);
};
var Input = function Input(props) {
    var className = props.className, cx = props.cx, getStyles = props.getStyles, value = props.value;
    var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = (0, _objectWithoutPropertiesDefault.default)(_cleanCommonProps, _excluded);
    return (0, _react.jsx)("div", {
        className: cx({
            "input-container": true
        }, className),
        css: getStyles("input", props),
        "data-value": value || ""
    }, (0, _react.jsx)("input", (0, _extendsDefault.default)({
        className: cx({
            input: true
        }, inputClassName),
        ref: innerRef,
        style: inputStyle(isHidden),
        disabled: isDisabled
    }, innerProps)));
};
var multiValueCSS = function multiValueCSS(_ref) {
    var _ref$theme = _ref.theme, spacing = _ref$theme.spacing, borderRadius = _ref$theme.borderRadius, colors = _ref$theme.colors;
    return {
        label: "multiValue",
        backgroundColor: colors.neutral10,
        borderRadius: borderRadius / 2,
        display: "flex",
        margin: spacing.baseUnit / 2,
        minWidth: 0 // resolves flex/text-overflow bug
    };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
    var _ref2$theme = _ref2.theme, borderRadius = _ref2$theme.borderRadius, colors = _ref2$theme.colors, cropWithEllipsis = _ref2.cropWithEllipsis;
    return {
        borderRadius: borderRadius / 2,
        color: colors.neutral80,
        fontSize: "85%",
        overflow: "hidden",
        padding: 3,
        paddingLeft: 6,
        textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? "ellipsis" : undefined,
        whiteSpace: "nowrap"
    };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
    var _ref3$theme = _ref3.theme, spacing = _ref3$theme.spacing, borderRadius = _ref3$theme.borderRadius, colors = _ref3$theme.colors, isFocused = _ref3.isFocused;
    return {
        alignItems: "center",
        borderRadius: borderRadius / 2,
        backgroundColor: isFocused ? colors.dangerLight : undefined,
        display: "flex",
        paddingLeft: spacing.baseUnit,
        paddingRight: spacing.baseUnit,
        ":hover": {
            backgroundColor: colors.dangerLight,
            color: colors.danger
        }
    };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
    var children = _ref4.children, innerProps = _ref4.innerProps;
    return (0, _react.jsx)("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
    var children = _ref5.children, innerProps = _ref5.innerProps;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        role: "button"
    }, innerProps), children || (0, _react.jsx)(CrossIcon, {
        size: 14
    }));
}
var MultiValue = function MultiValue(props) {
    var children = props.children, className = props.className, components = props.components, cx = props.cx, data = props.data, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps = props.removeProps, selectProps = props.selectProps;
    var Container = components.Container, Label = components.Label, Remove = components.Remove;
    return (0, _react.jsx)((0, _react.ClassNames), null, function(_ref6) {
        var css = _ref6.css, emotionCx = _ref6.cx;
        return (0, _react.jsx)(Container, {
            data: data,
            innerProps: (0, _objectSpread2Default.default)({
                className: emotionCx(css(getStyles("multiValue", props)), cx({
                    "multi-value": true,
                    "multi-value--is-disabled": isDisabled
                }, className))
            }, innerProps),
            selectProps: selectProps
        }, (0, _react.jsx)(Label, {
            data: data,
            innerProps: {
                className: emotionCx(css(getStyles("multiValueLabel", props)), cx({
                    "multi-value__label": true
                }, className))
            },
            selectProps: selectProps
        }, children), (0, _react.jsx)(Remove, {
            data: data,
            innerProps: (0, _objectSpread2Default.default)({
                className: emotionCx(css(getStyles("multiValueRemove", props)), cx({
                    "multi-value__remove": true
                }, className)),
                "aria-label": "Remove ".concat(children || "option")
            }, removeProps),
            selectProps: selectProps
        }));
    });
};
var optionCSS = function optionCSS(_ref) {
    var isDisabled = _ref.isDisabled, isFocused = _ref.isFocused, isSelected = _ref.isSelected, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
    return {
        label: "option",
        backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : "transparent",
        color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : "inherit",
        cursor: "default",
        display: "block",
        fontSize: "inherit",
        padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
        width: "100%",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        // provide some affordance on touch devices
        ":active": {
            backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
        }
    };
};
var Option = function Option(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("option", props),
        className: cx({
            option: true,
            "option--is-disabled": isDisabled,
            "option--is-focused": isFocused,
            "option--is-selected": isSelected
        }, className),
        ref: innerRef,
        "aria-disabled": isDisabled
    }, innerProps), children);
};
var placeholderCSS = function placeholderCSS(_ref) {
    var _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
    return {
        label: "placeholder",
        color: colors.neutral50,
        gridArea: "1 / 1 / 2 / 3",
        marginLeft: spacing.baseUnit / 2,
        marginRight: spacing.baseUnit / 2
    };
};
var Placeholder = function Placeholder(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("placeholder", props),
        className: cx({
            placeholder: true
        }, className)
    }, innerProps), children);
};
var css = function css(_ref) {
    var isDisabled = _ref.isDisabled, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
    return {
        label: "singleValue",
        color: isDisabled ? colors.neutral40 : colors.neutral80,
        gridArea: "1 / 1 / 2 / 3",
        marginLeft: spacing.baseUnit / 2,
        marginRight: spacing.baseUnit / 2,
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    };
};
var SingleValue = function SingleValue(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, isDisabled = props.isDisabled, innerProps = props.innerProps;
    return (0, _react.jsx)("div", (0, _extendsDefault.default)({
        css: getStyles("singleValue", props),
        className: cx({
            "single-value": true,
            "single-value--is-disabled": isDisabled
        }, className)
    }, innerProps), children);
};
var components = {
    ClearIndicator: ClearIndicator,
    Control: Control,
    DropdownIndicator: DropdownIndicator,
    DownChevron: DownChevron,
    CrossIcon: CrossIcon,
    Group: Group,
    GroupHeading: GroupHeading,
    IndicatorsContainer: IndicatorsContainer,
    IndicatorSeparator: IndicatorSeparator,
    Input: Input,
    LoadingIndicator: LoadingIndicator,
    Menu: Menu,
    MenuList: MenuList,
    MenuPortal: MenuPortal,
    LoadingMessage: LoadingMessage,
    NoOptionsMessage: NoOptionsMessage,
    MultiValue: MultiValue,
    MultiValueContainer: MultiValueContainer,
    MultiValueLabel: MultiValueLabel,
    MultiValueRemove: MultiValueRemove,
    Option: Option,
    Placeholder: Placeholder,
    SelectContainer: SelectContainer,
    SingleValue: SingleValue,
    ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
    return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, components), props.components);
};

},{"@babel/runtime/helpers/esm/objectSpread2":"4wVyh","@babel/runtime/helpers/esm/extends":"eZS2K","@emotion/react":"9qiaY","@babel/runtime/helpers/esm/taggedTemplateLiteral":"4waQG","@babel/runtime/helpers/esm/objectWithoutProperties":"839eU","@babel/runtime/helpers/esm/slicedToArray":"fqkSn","@babel/runtime/helpers/esm/typeof":"6d4v3","@babel/runtime/helpers/esm/defineProperty":"aTuf9","react":"21dqq","react-dom":"j6uA9","@floating-ui/dom":"1xb7B","use-isomorphic-layout-effect":"6mEgX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qiaY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CacheProvider", ()=>(0, _emotionElementCbed451FBrowserEsmJs.C));
parcelHelpers.export(exports, "ThemeContext", ()=>(0, _emotionElementCbed451FBrowserEsmJs.T));
parcelHelpers.export(exports, "ThemeProvider", ()=>(0, _emotionElementCbed451FBrowserEsmJs.b));
parcelHelpers.export(exports, "__unsafe_useEmotionCache", ()=>(0, _emotionElementCbed451FBrowserEsmJs._));
parcelHelpers.export(exports, "useTheme", ()=>(0, _emotionElementCbed451FBrowserEsmJs.a));
parcelHelpers.export(exports, "withEmotionCache", ()=>(0, _emotionElementCbed451FBrowserEsmJs.w));
parcelHelpers.export(exports, "withTheme", ()=>(0, _emotionElementCbed451FBrowserEsmJs.d));
parcelHelpers.export(exports, "ClassNames", ()=>ClassNames);
parcelHelpers.export(exports, "Global", ()=>Global);
parcelHelpers.export(exports, "createElement", ()=>jsx);
parcelHelpers.export(exports, "css", ()=>css);
parcelHelpers.export(exports, "jsx", ()=>jsx);
parcelHelpers.export(exports, "keyframes", ()=>keyframes);
var _react = require("react");
var _cache = require("@emotion/cache");
var _emotionElementCbed451FBrowserEsmJs = require("./emotion-element-cbed451f.browser.esm.js");
var _extends = require("@babel/runtime/helpers/extends");
var _weakMemoize = require("@emotion/weak-memoize");
var _hoistNonReactStatics = require("hoist-non-react-statics");
var _emotionReactIsolatedHnrsBrowserEsmJs = require("../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js");
var _utils = require("@emotion/utils");
var _serialize = require("@emotion/serialize");
var global = arguments[3];
var pkg = {
    name: "@emotion/react",
    version: "11.9.0",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    browser: {
        "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
        "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
    },
    types: "types/index.d.ts",
    files: [
        "src",
        "dist",
        "jsx-runtime",
        "jsx-dev-runtime",
        "_isolated-hnrs",
        "types/*.d.ts",
        "macro.js",
        "macro.d.ts",
        "macro.js.flow"
    ],
    sideEffects: false,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: {
        "test:typescript": "dtslint types"
    },
    dependencies: {
        "@babel/runtime": "^7.13.10",
        "@emotion/babel-plugin": "^11.7.1",
        "@emotion/cache": "^11.7.1",
        "@emotion/serialize": "^1.0.3",
        "@emotion/utils": "^1.1.0",
        "@emotion/weak-memoize": "^0.2.5",
        "hoist-non-react-statics": "^3.3.1"
    },
    peerDependencies: {
        "@babel/core": "^7.0.0",
        react: ">=16.8.0"
    },
    peerDependenciesMeta: {
        "@babel/core": {
            optional: true
        },
        "@types/react": {
            optional: true
        }
    },
    devDependencies: {
        "@babel/core": "^7.13.10",
        "@emotion/css": "11.9.0",
        "@emotion/css-prettifier": "1.0.1",
        "@emotion/server": "11.4.0",
        "@emotion/styled": "11.8.1",
        "@types/react": "^16.9.11",
        dtslint: "^4.2.1",
        "html-tag-names": "^1.1.2",
        react: "16.14.0",
        "svg-tag-names": "^1.1.1",
        typescript: "^4.5.5"
    },
    repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: {
        access: "public"
    },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
        entrypoints: [
            "./index.js",
            "./jsx-runtime.js",
            "./jsx-dev-runtime.js",
            "./_isolated-hnrs.js"
        ],
        umdName: "emotionReact"
    }
};
var jsx = function jsx(type, props) {
    var args = arguments;
    if (props == null || !(0, _emotionElementCbed451FBrowserEsmJs.h).call(props, "css")) // $FlowFixMe
    return (0, _react.createElement).apply(undefined, args);
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = (0, _emotionElementCbed451FBrowserEsmJs.E);
    createElementArgArray[1] = (0, _emotionElementCbed451FBrowserEsmJs.c)(type, props);
    for(var i = 2; i < argsLength; i++)createElementArgArray[i] = args[i];
     // $FlowFixMe
    return (0, _react.createElement).apply(null, createElementArgArray);
};
var useInsertionEffect = _react["useInsertionEffect"] ? _react["useInsertionEffect"] : (0, _react.useLayoutEffect);
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var Global = /* #__PURE__ */ (0, _emotionElementCbed451FBrowserEsmJs.w)(function(props, cache) {
    if (!warnedAboutCssPropForGlobal && // probably using the custom createElement which
    // means it will be turned into a className prop
    // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
    (props.className || props.css)) {
        console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
        warnedAboutCssPropForGlobal = true;
    }
    var styles = props.styles;
    var serialized = (0, _serialize.serializeStyles)([
        styles
    ], undefined, (0, _react.useContext)((0, _emotionElementCbed451FBrowserEsmJs.T)));
    // but it is based on a constant that will never change at runtime
    // it's effectively like having two implementations and switching them out
    // so it's not actually breaking anything
    var sheetRef = (0, _react.useRef)();
    useInsertionEffect(function() {
        var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675
        var sheet = new cache.sheet.constructor({
            key: key,
            nonce: cache.sheet.nonce,
            container: cache.sheet.container,
            speedy: cache.sheet.isSpeedy
        });
        var rehydrating = false; // $FlowFixMe
        var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
        if (cache.sheet.tags.length) sheet.before = cache.sheet.tags[0];
        if (node !== null) {
            rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s
            node.setAttribute("data-emotion", key);
            sheet.hydrate([
                node
            ]);
        }
        sheetRef.current = [
            sheet,
            rehydrating
        ];
        return function() {
            sheet.flush();
        };
    }, [
        cache
    ]);
    useInsertionEffect(function() {
        var sheetRefCurrent = sheetRef.current;
        var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
        if (rehydrating) {
            sheetRefCurrent[1] = false;
            return;
        }
        if (serialized.next !== undefined) // insert keyframes
        (0, _utils.insertStyles)(cache, serialized.next, true);
        if (sheet.tags.length) {
            // if this doesn't exist then it will be null so the style element will be appended
            var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
            sheet.before = element;
            sheet.flush();
        }
        cache.insert("", serialized, sheet, false);
    }, [
        cache,
        serialized.name
    ]);
    return null;
});
Global.displayName = "EmotionGlobal";
function css() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return (0, _serialize.serializeStyles)(args);
}
var keyframes = function keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name; // $FlowFixMe
    return {
        name: name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
    };
};
var classnames = function classnames(args) {
    var len = args.length;
    var i = 0;
    var cls = "";
    for(; i < len; i++){
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch(typeof arg){
            case "boolean":
                break;
            case "object":
                if (Array.isArray(arg)) toAdd = classnames(arg);
                else {
                    if (arg.styles !== undefined && arg.name !== undefined) console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
                    toAdd = "";
                    for(var k in arg)if (arg[k] && k) {
                        toAdd && (toAdd += " ");
                        toAdd += k;
                    }
                }
                break;
            default:
                toAdd = arg;
        }
        if (toAdd) {
            cls && (cls += " ");
            cls += toAdd;
        }
    }
    return cls;
};
function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = (0, _utils.getRegisteredStyles)(registered, registeredStyles, className);
    if (registeredStyles.length < 2) return className;
    return rawClassName + css(registeredStyles);
}
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serializedArr = _ref.serializedArr;
    var rules = (0, _emotionElementCbed451FBrowserEsmJs.u)(function() {
        for(var i = 0; i < serializedArr.length; i++)var res = (0, _utils.insertStyles)(cache, serializedArr[i], false);
    });
    return null;
};
var ClassNames = /* #__PURE__ */ (0, _emotionElementCbed451FBrowserEsmJs.w)(function(props, cache) {
    var hasRendered = false;
    var serializedArr = [];
    var css = function css() {
        if (hasRendered && true) throw new Error("css can only be used during render");
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var serialized = (0, _serialize.serializeStyles)(args, cache.registered);
        serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`
        (0, _utils.registerStyles)(cache, serialized, false);
        return cache.key + "-" + serialized.name;
    };
    var cx = function cx() {
        if (hasRendered && true) throw new Error("cx can only be used during render");
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        return merge(cache.registered, css, classnames(args));
    };
    var content = {
        css: css,
        cx: cx,
        theme: (0, _react.useContext)((0, _emotionElementCbed451FBrowserEsmJs.T))
    };
    var ele = props.children(content);
    hasRendered = true;
    return /*#__PURE__*/ (0, _react.createElement)((0, _react.Fragment), null, /*#__PURE__*/ (0, _react.createElement)(Insertion, {
        cache: cache,
        serializedArr: serializedArr
    }), ele);
});
ClassNames.displayName = "EmotionClassNames";
var isBrowser = true; // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock
var isJest = typeof jest !== "undefined";
if (isBrowser && !isJest) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = typeof globalThis !== "undefined" ? globalThis // eslint-disable-line no-undef
     : isBrowser ? window : global;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
    if (globalContext[globalKey]) console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
    globalContext[globalKey] = true;
}

},{"react":"21dqq","@emotion/cache":"3Umtj","./emotion-element-cbed451f.browser.esm.js":"2bTfE","@babel/runtime/helpers/extends":"eXyMJ","@emotion/weak-memoize":"iicyL","hoist-non-react-statics":"1GfsB","../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js":"cUsDD","@emotion/utils":"6UI8e","@emotion/serialize":"kS2E2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Umtj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sheet = require("@emotion/sheet");
var _stylis = require("stylis");
var _weakMemoize = require("@emotion/weak-memoize");
var _memoize = require("@emotion/memoize");
var last = function last(arr) {
    return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244
var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;
    while(true){
        previous = character;
        character = (0, _stylis.peek)(); // &\f
        if (previous === 38 && character === 12) points[index] = 1;
        if ((0, _stylis.token)(character)) break;
        (0, _stylis.next)();
    }
    return (0, _stylis.slice)(begin, (0, _stylis.position));
};
var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;
    do switch((0, _stylis.token)(character)){
        case 0:
            // &\f
            if (character === 38 && (0, _stylis.peek)() === 12) // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
            parsed[index] += identifierWithPointTracking((0, _stylis.position) - 1, points, index);
            break;
        case 2:
            parsed[index] += (0, _stylis.delimit)(character);
            break;
        case 4:
            // comma
            if (character === 44) {
                // colon
                parsed[++index] = (0, _stylis.peek)() === 58 ? "&\f" : "";
                points[index] = parsed[index].length;
                break;
            }
        // fallthrough
        default:
            parsed[index] += (0, _stylis.from)(character);
    }
    while (character = (0, _stylis.next)());
    return parsed;
};
var getRules = function getRules(value, points) {
    return (0, _stylis.dealloc)(toRules((0, _stylis.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11
var fixedElements = /* #__PURE__ */ new WeakMap();
var compat = function compat(element) {
    if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) return;
    var value = element.value, parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while(parent.type !== "rule"){
        parent = parent.parent;
        if (!parent) return;
    } // short-circuit for the simplest case
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
     // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
    if (isImplicitRule) return;
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for(var i = 0, k = 0; i < rules.length; i++)for(var j = 0; j < parentRules.length; j++, k++)element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
};
var removeLabel = function removeLabel(element) {
    if (element.type === "decl") {
        var value = element.value;
        if (value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98) {
            // this ignores label
            element["return"] = "";
            element.value = "";
        }
    }
};
var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var isIgnoringComment = function isIgnoringComment(element) {
    return !!element && element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
    return function(element, index, children) {
        if (element.type !== "rule") return;
        var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
        if (unsafePseudoClasses && cache.compat !== true) {
            var prevElement = index > 0 ? children[index - 1] : null;
            if (prevElement && isIgnoringComment(last(prevElement.children))) return;
            unsafePseudoClasses.forEach(function(unsafePseudoClass) {
                console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
            });
        }
    };
};
var isImportRule = function isImportRule(element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
    for(var i = index - 1; i >= 0; i--){
        if (!isImportRule(children[i])) return true;
    }
    return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user
var nullifyElement = function nullifyElement(element) {
    element.type = "";
    element.value = "";
    element["return"] = "";
    element.children = "";
    element.props = "";
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
    if (!isImportRule(element)) return;
    if (element.parent) {
        console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
        nullifyElement(element);
    } else if (isPrependedWithRegularRules(index, children)) {
        console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
        nullifyElement(element);
    }
};
var defaultStylisPlugins = [
    (0, _stylis.prefixer)
];
var createCache = function createCache(options) {
    var key = options.key;
    if (!key) throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
    if (key === "css") {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
        // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
        // note this very very intentionally targets all style elements regardless of the key to ensure
        // that creating a cache works inside of render of a React component
        Array.prototype.forEach.call(ssrStyles, function(node) {
            // we want to only move elements which have a space in the data-emotion attribute value
            // because that indicates that it is an Emotion 11 server-side rendered style elements
            // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
            // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
            // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
            // will not result in the Emotion 10 styles being destroyed
            var dataEmotionAttribute = node.getAttribute("data-emotion");
            if (dataEmotionAttribute.indexOf(" ") === -1) return;
            document.head.appendChild(node);
            node.setAttribute("data-s", "");
        });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
    var inserted = {}; // $FlowFixMe
    var container;
    var nodesToHydrate = [];
    container = options.container || document.head;
    Array.prototype.forEach.call(// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node) {
        var attrib = node.getAttribute("data-emotion").split(" "); // $FlowFixMe
        for(var i = 1; i < attrib.length; i++)inserted[attrib[i]] = true;
        nodesToHydrate.push(node);
    });
    var _insert;
    var omnipresentPlugins = [
        compat,
        removeLabel
    ];
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
        get compat () {
            return cache.compat;
        }
    }), incorrectImportAlarm);
    var currentSheet;
    var finalizingPlugins = [
        (0, _stylis.stringify),
        function(element) {
            if (!element.root) {
                if (element["return"]) currentSheet.insert(element["return"]);
                else if (element.value && element.type !== (0, _stylis.COMMENT)) // insert empty rule in non-production environments
                // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
                currentSheet.insert(element.value + "{}");
            }
        }
    ];
    var serializer = (0, _stylis.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
        return (0, _stylis.serialize)((0, _stylis.compile)(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        if (serialized.map !== undefined) currentSheet = {
            insert: function insert(rule) {
                sheet.insert(rule + serialized.map);
            }
        };
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) cache.inserted[serialized.name] = true;
    };
    var cache = {
        key: key,
        sheet: new (0, _sheet.StyleSheet)({
            key: key,
            container: container,
            nonce: options.nonce,
            speedy: options.speedy,
            prepend: options.prepend,
            insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted: inserted,
        registered: {},
        insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
};
exports.default = createCache;

},{"@emotion/sheet":"1BWeq","stylis":"bMCXt","@emotion/weak-memoize":"iicyL","@emotion/memoize":"WW7h8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1BWeq":[function(require,module,exports) {
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/ // $FlowFixMe
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StyleSheet", ()=>StyleSheet);
function sheetForTag(tag) {
    if (tag.sheet) // $FlowFixMe
    return tag.sheet;
     // this weirdness brought to you by firefox
    /* istanbul ignore next */ for(var i = 0; i < document.styleSheets.length; i++){
        if (document.styleSheets[i].ownerNode === tag) // $FlowFixMe
        return document.styleSheets[i];
    }
}
function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== undefined) tag.setAttribute("nonce", options.nonce);
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
}
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(options) {
        var _this = this;
        this._insertTag = function(tag) {
            var before;
            if (_this.tags.length === 0) {
                if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
                else if (_this.prepend) before = _this.container.firstChild;
                else before = _this.before;
            } else before = _this.tags[_this.tags.length - 1].nextSibling;
            _this.container.insertBefore(tag, before);
            _this.tags.push(tag);
        };
        this.isSpeedy = options.speedy === undefined ? false : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets
        this.key = options.key;
        this.container = options.container;
        this.prepend = options.prepend;
        this.insertionPoint = options.insertionPoint;
        this.before = null;
    }
    var _proto = StyleSheet.prototype;
    _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
        // the max length is how many rules we have per style tag, it's 65000 in speedy mode
        // it's 1 in dev because we insert source maps that map a single rule to a location
        // and you can only have one source map per style tag
        if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) this._insertTag(createStyleElement(this));
        var tag = this.tags[this.tags.length - 1];
        var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
        if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
        this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
        if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
                // this is the ultrafast version, works across browsers
                // the big drawback is that the css won't be editable in devtools
                sheet.insertRule(rule, sheet.cssRules.length);
            } catch (e) {
                if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) console.error('There was a problem inserting the following rule: "' + rule + '"', e);
            }
        } else tag.appendChild(document.createTextNode(rule));
        this.ctr++;
    };
    _proto.flush = function flush() {
        // $FlowFixMe
        this.tags.forEach(function(tag) {
            return tag.parentNode && tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
        this._alreadyInsertedOrderInsensitiveRule = false;
    };
    return StyleSheet;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bMCXt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CHARSET", ()=>f);
parcelHelpers.export(exports, "COMMENT", ()=>c);
parcelHelpers.export(exports, "COUNTER_STYLE", ()=>w);
parcelHelpers.export(exports, "DECLARATION", ()=>t);
parcelHelpers.export(exports, "DOCUMENT", ()=>v);
parcelHelpers.export(exports, "FONT_FACE", ()=>b);
parcelHelpers.export(exports, "FONT_FEATURE_VALUES", ()=>$);
parcelHelpers.export(exports, "IMPORT", ()=>i);
parcelHelpers.export(exports, "KEYFRAMES", ()=>p);
parcelHelpers.export(exports, "MEDIA", ()=>u);
parcelHelpers.export(exports, "MOZ", ()=>r);
parcelHelpers.export(exports, "MS", ()=>e);
parcelHelpers.export(exports, "NAMESPACE", ()=>h);
parcelHelpers.export(exports, "PAGE", ()=>s);
parcelHelpers.export(exports, "RULESET", ()=>n);
parcelHelpers.export(exports, "SUPPORTS", ()=>l);
parcelHelpers.export(exports, "VIEWPORT", ()=>o);
parcelHelpers.export(exports, "WEBKIT", ()=>a);
parcelHelpers.export(exports, "abs", ()=>k);
parcelHelpers.export(exports, "alloc", ()=>U);
parcelHelpers.export(exports, "append", ()=>S);
parcelHelpers.export(exports, "assign", ()=>g);
parcelHelpers.export(exports, "caret", ()=>Q);
parcelHelpers.export(exports, "char", ()=>K);
parcelHelpers.export(exports, "character", ()=>G);
parcelHelpers.export(exports, "characters", ()=>H);
parcelHelpers.export(exports, "charat", ()=>z);
parcelHelpers.export(exports, "column", ()=>D);
parcelHelpers.export(exports, "combine", ()=>q);
parcelHelpers.export(exports, "comment", ()=>se);
parcelHelpers.export(exports, "commenter", ()=>re);
parcelHelpers.export(exports, "compile", ()=>ce);
parcelHelpers.export(exports, "copy", ()=>J);
parcelHelpers.export(exports, "dealloc", ()=>V);
parcelHelpers.export(exports, "declaration", ()=>ue);
parcelHelpers.export(exports, "delimit", ()=>W);
parcelHelpers.export(exports, "delimiter", ()=>ee);
parcelHelpers.export(exports, "escaping", ()=>_);
parcelHelpers.export(exports, "from", ()=>d);
parcelHelpers.export(exports, "hash", ()=>m);
parcelHelpers.export(exports, "identifier", ()=>ae);
parcelHelpers.export(exports, "indexof", ()=>C);
parcelHelpers.export(exports, "length", ()=>E);
parcelHelpers.export(exports, "line", ()=>B);
parcelHelpers.export(exports, "match", ()=>y);
parcelHelpers.export(exports, "middleware", ()=>le);
parcelHelpers.export(exports, "namespace", ()=>pe);
parcelHelpers.export(exports, "next", ()=>N);
parcelHelpers.export(exports, "node", ()=>I);
parcelHelpers.export(exports, "parse", ()=>ne);
parcelHelpers.export(exports, "peek", ()=>P);
parcelHelpers.export(exports, "position", ()=>F);
parcelHelpers.export(exports, "prefix", ()=>ie);
parcelHelpers.export(exports, "prefixer", ()=>he);
parcelHelpers.export(exports, "prev", ()=>L);
parcelHelpers.export(exports, "replace", ()=>j);
parcelHelpers.export(exports, "ruleset", ()=>te);
parcelHelpers.export(exports, "rulesheet", ()=>ve);
parcelHelpers.export(exports, "serialize", ()=>fe);
parcelHelpers.export(exports, "sizeof", ()=>M);
parcelHelpers.export(exports, "slice", ()=>R);
parcelHelpers.export(exports, "stringify", ()=>oe);
parcelHelpers.export(exports, "strlen", ()=>O);
parcelHelpers.export(exports, "substr", ()=>A);
parcelHelpers.export(exports, "token", ()=>T);
parcelHelpers.export(exports, "tokenize", ()=>X);
parcelHelpers.export(exports, "tokenizer", ()=>Z);
parcelHelpers.export(exports, "trim", ()=>x);
parcelHelpers.export(exports, "whitespace", ()=>Y);
var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var c = "comm";
var n = "rule";
var t = "decl";
var s = "@page";
var u = "@media";
var i = "@import";
var f = "@charset";
var o = "@viewport";
var l = "@supports";
var v = "@document";
var h = "@namespace";
var p = "@keyframes";
var b = "@font-face";
var w = "@counter-style";
var $ = "@font-feature-values";
var k = Math.abs;
var d = String.fromCharCode;
var g = Object.assign;
function m(e, r) {
    return (((r << 2 ^ z(e, 0)) << 2 ^ z(e, 1)) << 2 ^ z(e, 2)) << 2 ^ z(e, 3);
}
function x(e) {
    return e.trim();
}
function y(e, r) {
    return (e = r.exec(e)) ? e[0] : e;
}
function j(e, r, a) {
    return e.replace(r, a);
}
function C(e, r) {
    return e.indexOf(r);
}
function z(e, r) {
    return e.charCodeAt(r) | 0;
}
function A(e, r, a) {
    return e.slice(r, a);
}
function O(e) {
    return e.length;
}
function M(e) {
    return e.length;
}
function S(e, r) {
    return r.push(e), e;
}
function q(e, r) {
    return e.map(r).join("");
}
var B = 1;
var D = 1;
var E = 0;
var F = 0;
var G = 0;
var H = "";
function I(e, r, a, c, n, t, s) {
    return {
        value: e,
        root: r,
        parent: a,
        type: c,
        props: n,
        children: t,
        line: B,
        column: D,
        length: s,
        return: ""
    };
}
function J(e, r) {
    return g(I("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, r);
}
function K() {
    return G;
}
function L() {
    G = F > 0 ? z(H, --F) : 0;
    if (D--, G === 10) D = 1, B--;
    return G;
}
function N() {
    G = F < E ? z(H, F++) : 0;
    if (D++, G === 10) D = 1, B++;
    return G;
}
function P() {
    return z(H, F);
}
function Q() {
    return F;
}
function R(e, r) {
    return A(H, e, r);
}
function T(e) {
    switch(e){
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function U(e) {
    return B = D = 1, E = O(H = e), F = 0, [];
}
function V(e) {
    return H = "", e;
}
function W(e) {
    return x(R(F - 1, ee(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function X(e) {
    return V(Z(U(e)));
}
function Y(e) {
    while(G = P())if (G < 33) N();
    else break;
    return T(e) > 2 || T(G) > 3 ? "" : " ";
}
function Z(e) {
    while(N())switch(T(G)){
        case 0:
            S(ae(F - 1), e);
            break;
        case 2:
            S(W(G), e);
            break;
        default:
            S(d(G), e);
    }
    return e;
}
function _(e, r) {
    while(--r && N())if (G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97) break;
    return R(e, Q() + (r < 6 && P() == 32 && N() == 32));
}
function ee(e) {
    while(N())switch(G){
        case e:
            return F;
        case 34:
        case 39:
            if (e !== 34 && e !== 39) ee(G);
            break;
        case 40:
            if (e === 41) ee(e);
            break;
        case 92:
            N();
            break;
    }
    return F;
}
function re(e, r) {
    while(N())if (e + G === 57) break;
    else if (e + G === 84 && P() === 47) break;
    return "/*" + R(r, F - 1) + "*" + d(e === 47 ? e : N());
}
function ae(e) {
    while(!T(P()))N();
    return R(e, F);
}
function ce(e) {
    return V(ne("", null, null, null, [
        ""
    ], e = U(e), 0, [
        0
    ], e));
}
function ne(e, r, a, c, n, t, s, u, i) {
    var f = 0;
    var o = 0;
    var l = s;
    var v = 0;
    var h = 0;
    var p = 0;
    var b = 1;
    var w = 1;
    var $ = 1;
    var k = 0;
    var g = "";
    var m = n;
    var x = t;
    var y = c;
    var z = g;
    while(w)switch(p = k, k = N()){
        case 40:
            if (p != 108 && z.charCodeAt(l - 1) == 58) {
                if (C(z += j(W(k), "&", "&\f"), "&\f") != -1) $ = -1;
                break;
            }
        case 34:
        case 39:
        case 91:
            z += W(k);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            z += Y(p);
            break;
        case 92:
            z += _(Q() - 1, 7);
            continue;
        case 47:
            switch(P()){
                case 42:
                case 47:
                    S(se(re(N(), Q()), r, a), i);
                    break;
                default:
                    z += "/";
            }
            break;
        case 123 * b:
            u[f++] = O(z) * $;
        case 125 * b:
        case 59:
        case 0:
            switch(k){
                case 0:
                case 125:
                    w = 0;
                case 59 + o:
                    if (h > 0 && O(z) - l) S(h > 32 ? ue(z + ";", c, a, l - 1) : ue(j(z, " ", "") + ";", c, a, l - 2), i);
                    break;
                case 59:
                    z += ";";
                default:
                    S(y = te(z, r, a, f, o, n, u, g, m = [], x = [], l), t);
                    if (k === 123) {
                        if (o === 0) ne(z, r, y, y, m, t, l, u, x);
                        else switch(v){
                            case 100:
                            case 109:
                            case 115:
                                ne(e, y, y, c && S(te(e, y, y, 0, 0, n, u, g, n, m = [], l), x), n, x, l, u, c ? m : x);
                                break;
                            default:
                                ne(z, y, y, y, [
                                    ""
                                ], x, 0, u, x);
                        }
                    }
            }
            f = o = h = 0, b = $ = 1, g = z = "", l = s;
            break;
        case 58:
            l = 1 + O(z), h = p;
        default:
            if (b < 1) {
                if (k == 123) --b;
                else if (k == 125 && b++ == 0 && L() == 125) continue;
            }
            switch(z += d(k), k * b){
                case 38:
                    $ = o > 0 ? 1 : (z += "\f", -1);
                    break;
                case 44:
                    u[f++] = (O(z) - 1) * $, $ = 1;
                    break;
                case 64:
                    if (P() === 45) z += W(N());
                    v = P(), o = l = O(g = z += ae(Q())), k++;
                    break;
                case 45:
                    if (p === 45 && O(z) == 2) b = 0;
            }
    }
    return t;
}
function te(e, r, a, c, t, s, u, i, f, o, l) {
    var v = t - 1;
    var h = t === 0 ? s : [
        ""
    ];
    var p = M(h);
    for(var b = 0, w = 0, $ = 0; b < c; ++b)for(var d = 0, g = A(e, v + 1, v = k(w = u[b])), m = e; d < p; ++d)if (m = x(w > 0 ? h[d] + " " + g : j(g, /&\f/g, h[d]))) f[$++] = m;
    return I(e, r, a, t === 0 ? n : i, f, o, l);
}
function se(e, r, a) {
    return I(e, r, a, c, d(K()), A(e, 2, -2), 0);
}
function ue(e, r, a, c) {
    return I(e, r, a, t, A(e, 0, c), A(e, c + 1, -1), c);
}
function ie(c, n) {
    switch(m(c, n)){
        case 5103:
            return a + "print-" + c + c;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return a + c + c;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return a + c + r + c + e + c + c;
        case 6828:
        case 4268:
            return a + c + e + c + c;
        case 6165:
            return a + c + e + "flex-" + c + c;
        case 5187:
            return a + c + j(c, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c;
        case 5443:
            return a + c + e + "flex-item-" + j(c, /flex-|-self/, "") + c;
        case 4675:
            return a + c + e + "flex-line-pack" + j(c, /align-content|flex-|-self/, "") + c;
        case 5548:
            return a + c + e + j(c, "shrink", "negative") + c;
        case 5292:
            return a + c + e + j(c, "basis", "preferred-size") + c;
        case 6060:
            return a + "box-" + j(c, "-grow", "") + a + c + e + j(c, "grow", "positive") + c;
        case 4554:
            return a + j(c, /([^-])(transform)/g, "$1" + a + "$2") + c;
        case 6187:
            return j(j(j(c, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c, "") + c;
        case 5495:
        case 3959:
            return j(c, /(image-set\([^]*)/, a + "$1" + "$`$1");
        case 4968:
            return j(j(c, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c + c;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return j(c, /(.+)-inline(.+)/, a + "$1$2") + c;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (O(c) - 1 - n > 6) switch(z(c, n + 1)){
                case 109:
                    if (z(c, n + 4) !== 45) break;
                case 102:
                    return j(c, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3" + "$1" + r + (z(c, n + 3) == 108 ? "$3" : "$2-$3")) + c;
                case 115:
                    return ~C(c, "stretch") ? ie(j(c, "stretch", "fill-available"), n) + c : c;
            }
            break;
        case 4949:
            if (z(c, n + 1) !== 115) break;
        case 6444:
            switch(z(c, O(c) - 3 - (~C(c, "!important") && 10))){
                case 107:
                    return j(c, ":", ":" + a) + c;
                case 101:
                    return j(c, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z(c, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + a + "$2$3" + "$1" + e + "$2box$3") + c;
            }
            break;
        case 5936:
            switch(z(c, n + 11)){
                case 114:
                    return a + c + e + j(c, /[svh]\w+-[tblr]{2}/, "tb") + c;
                case 108:
                    return a + c + e + j(c, /[svh]\w+-[tblr]{2}/, "tb-rl") + c;
                case 45:
                    return a + c + e + j(c, /[svh]\w+-[tblr]{2}/, "lr") + c;
            }
            return a + c + e + c + c;
    }
    return c;
}
function fe(e, r) {
    var a = "";
    var c = M(e);
    for(var n = 0; n < c; n++)a += r(e[n], n, e, r) || "";
    return a;
}
function oe(e, r, a, s) {
    switch(e.type){
        case i:
        case t:
            return e.return = e.return || e.value;
        case c:
            return "";
        case p:
            return e.return = e.value + "{" + fe(e.children, s) + "}";
        case n:
            e.value = e.props.join(",");
    }
    return O(a = fe(e.children, s)) ? e.return = e.value + "{" + a + "}" : "";
}
function le(e) {
    var r = M(e);
    return function(a, c, n, t) {
        var s = "";
        for(var u = 0; u < r; u++)s += e[u](a, c, n, t) || "";
        return s;
    };
}
function ve(e) {
    return function(r) {
        if (!r.root) {
            if (r = r.return) e(r);
        }
    };
}
function he(c, s, u, i) {
    if (c.length > -1) {
        if (!c.return) switch(c.type){
            case t:
                c.return = ie(c.value, c.length);
                break;
            case p:
                return fe([
                    J(c, {
                        value: j(c.value, "@", "@" + a)
                    })
                ], i);
            case n:
                if (c.length) return q(c.props, function(n) {
                    switch(y(n, /(::plac\w+|:read-\w+)/)){
                        case ":read-only":
                        case ":read-write":
                            return fe([
                                J(c, {
                                    props: [
                                        j(n, /:(read-\w+)/, ":" + r + "$1")
                                    ]
                                })
                            ], i);
                        case "::placeholder":
                            return fe([
                                J(c, {
                                    props: [
                                        j(n, /:(plac\w+)/, ":" + a + "input-$1")
                                    ]
                                }),
                                J(c, {
                                    props: [
                                        j(n, /:(plac\w+)/, ":" + r + "$1")
                                    ]
                                }),
                                J(c, {
                                    props: [
                                        j(n, /:(plac\w+)/, e + "input-$1")
                                    ]
                                })
                            ], i);
                    }
                    return "";
                });
        }
    }
}
function pe(e) {
    switch(e.type){
        case n:
            e.props = e.props.map(function(r) {
                return q(X(r), function(r, a, c) {
                    switch(z(r, 0)){
                        case 12:
                            return A(r, 1, O(r));
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return r;
                        case 58:
                            if (c[++a] === "global") c[a] = "", c[++a] = "\f" + A(c[a], a = 1, -1);
                        case 32:
                            return a === 1 ? "" : r;
                        default:
                            switch(a){
                                case 0:
                                    e = r;
                                    return M(c) > 1 ? "" : r;
                                case a = M(c) - 1:
                                case 2:
                                    return a === 2 ? r + e + e : r + e;
                                default:
                                    return r;
                            }
                    }
                });
            });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iicyL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var weakMemoize = function weakMemoize(func) {
    // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
    var cache = new WeakMap();
    return function(arg) {
        if (cache.has(arg)) // $FlowFixMe
        return cache.get(arg);
        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
    };
};
exports.default = weakMemoize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WW7h8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
exports.default = memoize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2bTfE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "C", ()=>CacheProvider);
parcelHelpers.export(exports, "E", ()=>Emotion);
parcelHelpers.export(exports, "T", ()=>ThemeContext);
parcelHelpers.export(exports, "_", ()=>__unsafe_useEmotionCache);
parcelHelpers.export(exports, "a", ()=>useTheme);
parcelHelpers.export(exports, "b", ()=>ThemeProvider);
parcelHelpers.export(exports, "c", ()=>createEmotionProps);
parcelHelpers.export(exports, "d", ()=>withTheme);
parcelHelpers.export(exports, "h", ()=>hasOwnProperty);
parcelHelpers.export(exports, "u", ()=>useInsertionEffectMaybe);
parcelHelpers.export(exports, "w", ()=>withEmotionCache);
var _react = require("react");
var _cache = require("@emotion/cache");
var _cacheDefault = parcelHelpers.interopDefault(_cache);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _weakMemoize = require("@emotion/weak-memoize");
var _weakMemoizeDefault = parcelHelpers.interopDefault(_weakMemoize);
var _emotionReactIsolatedHnrsBrowserEsmJs = require("../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js");
var _emotionReactIsolatedHnrsBrowserEsmJsDefault = parcelHelpers.interopDefault(_emotionReactIsolatedHnrsBrowserEsmJs);
var _utils = require("@emotion/utils");
var _serialize = require("@emotion/serialize");
var hasOwnProperty = {}.hasOwnProperty;
var EmotionCacheContext = /* #__PURE__ */ (0, _react.createContext)(// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== "undefined" ? /* #__PURE__ */ (0, _cacheDefault.default)({
    key: "css"
}) : null);
EmotionCacheContext.displayName = "EmotionCacheContext";
var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
    return (0, _react.useContext)(EmotionCacheContext);
};
var withEmotionCache = function withEmotionCache(func) {
    // $FlowFixMe
    return /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
        // the cache will never be null in the browser
        var cache = (0, _react.useContext)(EmotionCacheContext);
        return func(props, cache, ref);
    });
};
var ThemeContext = /* #__PURE__ */ (0, _react.createContext)({});
ThemeContext.displayName = "EmotionThemeContext";
var useTheme = function useTheme() {
    return (0, _react.useContext)(ThemeContext);
};
var getTheme = function getTheme(outerTheme, theme) {
    if (typeof theme === "function") {
        var mergedTheme = theme(outerTheme);
        if (mergedTheme == null || typeof mergedTheme !== "object" || Array.isArray(mergedTheme)) throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
        return mergedTheme;
    }
    if (theme == null || typeof theme !== "object" || Array.isArray(theme)) throw new Error("[ThemeProvider] Please make your theme prop a plain object");
    return (0, _extendsDefault.default)({}, outerTheme, theme);
};
var createCacheWithTheme = /* #__PURE__ */ (0, _weakMemoizeDefault.default)(function(outerTheme) {
    return (0, _weakMemoizeDefault.default)(function(theme) {
        return getTheme(outerTheme, theme);
    });
});
var ThemeProvider = function ThemeProvider(props) {
    var theme = (0, _react.useContext)(ThemeContext);
    if (props.theme !== theme) theme = createCacheWithTheme(theme)(props.theme);
    return /*#__PURE__*/ (0, _react.createElement)(ThemeContext.Provider, {
        value: theme
    }, props.children);
};
function withTheme(Component) {
    var componentName = Component.displayName || Component.name || "Component";
    var render = function render(props, ref) {
        var theme = (0, _react.useContext)(ThemeContext);
        return /*#__PURE__*/ (0, _react.createElement)(Component, (0, _extendsDefault.default)({
            theme: theme,
            ref: ref
        }, props));
    }; // $FlowFixMe
    var WithTheme = /*#__PURE__*/ (0, _react.forwardRef)(render);
    WithTheme.displayName = "WithTheme(" + componentName + ")";
    return (0, _emotionReactIsolatedHnrsBrowserEsmJsDefault.default)(WithTheme, Component);
}
var getLastPart = function getLastPart(functionName) {
    // The match may be something like 'Object.createEmotionProps' or
    // 'Loader.prototype.render'
    var parts = functionName.split(".");
    return parts[parts.length - 1];
};
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
    // V8
    var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
    if (match) return getLastPart(match[1]); // Safari / Firefox
    match = /^([A-Za-z0-9$.]+)@/.exec(line);
    if (match) return getLastPart(match[1]);
    return undefined;
};
var internalReactFunctionNames = /* #__PURE__ */ new Set([
    "renderWithHooks",
    "processChild",
    "finishClassComponent",
    "renderToString"
]); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.
var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
    return identifier.replace(/\$/g, "-");
};
var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
    if (!stackTrace) return undefined;
    var lines = stackTrace.split("\n");
    for(var i = 0; i < lines.length; i++){
        var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"
        if (!functionName) continue; // If we reach one of these, we have gone too far and should quit
        if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
        // uppercase letter
        if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
    }
    return undefined;
};
var useInsertionEffect = _react["useInsertionEffect"] ? _react["useInsertionEffect"] : function useInsertionEffect(create) {
    create();
};
function useInsertionEffectMaybe(create) {
    useInsertionEffect(create);
}
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps(type, props) {
    if (typeof props.css === "string" && // check if there is a css declaration
    props.css.indexOf(":") !== -1) throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
    var newProps = {};
    for(var key in props)if (hasOwnProperty.call(props, key)) newProps[key] = props[key];
    newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
    // the label hasn't already been computed
    if (!!props.css && (typeof props.css !== "object" || typeof props.css.name !== "string" || props.css.name.indexOf("-") === -1)) {
        var label = getLabelFromStackTrace(new Error().stack);
        if (label) newProps[labelPropName] = label;
    }
    return newProps;
};
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0, _utils.registerStyles)(cache, serialized, isStringTag);
    var rules = useInsertionEffectMaybe(function() {
        return (0, _utils.insertStyles)(cache, serialized, isStringTag);
    });
    return null;
};
var Emotion = /* #__PURE__ */ withEmotionCache(function(props, cache, ref) {
    var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible
    if (typeof cssProp === "string" && cache.registered[cssProp] !== undefined) cssProp = cache.registered[cssProp];
    var WrappedComponent = props[typePropName];
    var registeredStyles = [
        cssProp
    ];
    var className = "";
    if (typeof props.className === "string") className = (0, _utils.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
    else if (props.className != null) className = props.className + " ";
    var serialized = (0, _serialize.serializeStyles)(registeredStyles, undefined, (0, _react.useContext)(ThemeContext));
    if (serialized.name.indexOf("-") === -1) {
        var labelFromStack = props[labelPropName];
        if (labelFromStack) serialized = (0, _serialize.serializeStyles)([
            serialized,
            "label:" + labelFromStack + ";"
        ]);
    }
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for(var key in props)if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) newProps[key] = props[key];
    newProps.ref = ref;
    newProps.className = className;
    return /*#__PURE__*/ (0, _react.createElement)((0, _react.Fragment), null, /*#__PURE__*/ (0, _react.createElement)(Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof WrappedComponent === "string"
    }), /*#__PURE__*/ (0, _react.createElement)(WrappedComponent, newProps));
});
Emotion.displayName = "EmotionCssPropInternal";

},{"react":"21dqq","@emotion/cache":"3Umtj","@babel/runtime/helpers/esm/extends":"aPc9G","@emotion/weak-memoize":"iicyL","../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js":"cUsDD","@emotion/utils":"6UI8e","@emotion/serialize":"kS2E2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aPc9G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cUsDD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hoistNonReactStatics = require("hoist-non-react-statics");
var _hoistNonReactStaticsDefault = parcelHelpers.interopDefault(_hoistNonReactStatics);
// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks
var hoistNonReactStatics = function(targetComponent, sourceComponent) {
    return (0, _hoistNonReactStaticsDefault.default)(targetComponent, sourceComponent);
};
exports.default = hoistNonReactStatics;

},{"hoist-non-react-statics":"1GfsB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6UI8e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRegisteredStyles", ()=>getRegisteredStyles);
parcelHelpers.export(exports, "insertStyles", ()=>insertStyles);
parcelHelpers.export(exports, "registerStyles", ()=>registerStyles);
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
        if (registered[className] !== undefined) registeredStyles.push(registered[className] + ";");
        else rawClassName += className + " ";
    });
    return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (// class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === undefined) cache.registered[className] = serialized.styles;
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === undefined) {
        var current = serialized;
        do {
            var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
            current = current.next;
        }while (current !== undefined);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kS2E2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializeStyles", ()=>serializeStyles);
var _hash = require("@emotion/hash");
var _hashDefault = parcelHelpers.interopDefault(_hash);
var _unitless = require("@emotion/unitless");
var _unitlessDefault = parcelHelpers.interopDefault(_unitless);
var _memoize = require("@emotion/memoize");
var _memoizeDefault = parcelHelpers.interopDefault(_memoize);
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== "boolean";
};
var processStyleName = /* #__PURE__ */ (0, _memoizeDefault.default)(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
    switch(key){
        case "animation":
        case "animationName":
            if (typeof value === "string") return value.replace(animationRegex, function(match, p1, p2) {
                cursor = {
                    name: p1,
                    styles: p2,
                    next: cursor
                };
                return p1;
            });
    }
    if ((0, _unitlessDefault.default)[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
    return value;
};
var contentValuePattern = /(var|attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
var contentValues = [
    "normal",
    "none",
    "initial",
    "inherit",
    "unset"
];
var oldProcessStyleValue = processStyleValue;
var msPattern = /^-ms-/;
var hyphenPattern = /-(.)/g;
var hyphenatedCache = {};
processStyleValue = function processStyleValue(key, value) {
    if (key === "content") {
        if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === undefined) {
        hyphenatedCache[key] = true;
        console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
            return _char.toUpperCase();
        }) + "?");
    }
    return processed;
};
function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) return "";
    if (interpolation.__emotion_styles !== undefined) {
        if (interpolation.toString() === "NO_COMPONENT_SELECTOR") throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        return interpolation;
    }
    switch(typeof interpolation){
        case "boolean":
            return "";
        case "object":
            if (interpolation.anim === 1) {
                cursor = {
                    name: interpolation.name,
                    styles: interpolation.styles,
                    next: cursor
                };
                return interpolation.name;
            }
            if (interpolation.styles !== undefined) {
                var next = interpolation.next;
                if (next !== undefined) // not the most efficient thing ever but this is a pretty rare case
                // and there will be very few iterations of this generally
                while(next !== undefined){
                    cursor = {
                        name: next.name,
                        styles: next.styles,
                        next: cursor
                    };
                    next = next.next;
                }
                var styles = interpolation.styles + ";";
                if (interpolation.map !== undefined) styles += interpolation.map;
                return styles;
            }
            return createStringFromObject(mergedProps, registered, interpolation);
        case "function":
            if (mergedProps !== undefined) {
                var previousCursor = cursor;
                var result = interpolation(mergedProps);
                cursor = previousCursor;
                return handleInterpolation(mergedProps, registered, result);
            } else console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
            break;
        case "string":
            var matched = [];
            var replaced = interpolation.replace(animationRegex, function(match, p1, p2) {
                var fakeVarName = "animation" + matched.length;
                matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
                return "${" + fakeVarName + "}";
            });
            if (matched.length) console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, [
                "`" + replaced + "`"
            ]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
            break;
    } // finalize string values (regular strings and functions interpolated into css calls)
    if (registered == null) return interpolation;
    var cached = registered[interpolation];
    return cached !== undefined ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) for(var i = 0; i < obj.length; i++)string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    else for(var _key in obj){
        var value = obj[_key];
        if (typeof value !== "object") {
            if (registered != null && registered[value] !== undefined) string += _key + "{" + registered[value] + "}";
            else if (isProcessableValue(value)) string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        } else {
            if (_key === "NO_COMPONENT_SELECTOR" && true) throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
            if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === undefined)) {
                for(var _i = 0; _i < value.length; _i++)if (isProcessableValue(value[_i])) string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            } else {
                var interpolated = handleInterpolation(mergedProps, registered, value);
                switch(_key){
                    case "animation":
                    case "animationName":
                        string += processStyleName(_key) + ":" + interpolated + ";";
                        break;
                    default:
                        if (_key === "undefined") console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                        string += _key + "{" + interpolated + "}";
                }
            }
        }
    }
    return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
// keyframes are stored on the SerializedStyles object as a linked list
var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== undefined) return args[0];
    var stringMode = true;
    var styles = "";
    cursor = undefined;
    var strings = args[0];
    if (strings == null || strings.raw === undefined) {
        stringMode = false;
        styles += handleInterpolation(mergedProps, registered, strings);
    } else {
        if (strings[0] === undefined) console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        styles += strings[0];
    } // we start at 1 since we've already handled the first arg
    for(var i = 1; i < args.length; i++){
        styles += handleInterpolation(mergedProps, registered, args[i]);
        if (stringMode) {
            if (strings[i] === undefined) console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            styles += strings[i];
        }
    }
    var sourceMap;
    styles = styles.replace(sourceMapPattern, function(match) {
        sourceMap = match;
        return "";
    });
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5
    while((match = labelPattern.exec(styles)) !== null)identifierName += "-" + // $FlowFixMe we know it's not null
    match[1];
    var name = (0, _hashDefault.default)(styles) + identifierName;
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
        name: name,
        styles: styles,
        map: sourceMap,
        next: cursor,
        toString: function toString() {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        }
    };
};

},{"@emotion/hash":"h4XqR","@emotion/unitless":"pVndT","@emotion/memoize":"WW7h8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4XqR":[function(require,module,exports) {
/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
exports.default = murmur2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pVndT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
exports.default = unitlessKeys;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXyMJ":[function(require,module,exports) {
function _extends() {
    module.exports = _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"4waQG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
exports.default = _taggedTemplateLiteral;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1xb7B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrow", ()=>(0, _core.arrow));
parcelHelpers.export(exports, "autoPlacement", ()=>(0, _core.autoPlacement));
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _core.detectOverflow));
parcelHelpers.export(exports, "flip", ()=>(0, _core.flip));
parcelHelpers.export(exports, "hide", ()=>(0, _core.hide));
parcelHelpers.export(exports, "inline", ()=>(0, _core.inline));
parcelHelpers.export(exports, "limitShift", ()=>(0, _core.limitShift));
parcelHelpers.export(exports, "offset", ()=>(0, _core.offset));
parcelHelpers.export(exports, "shift", ()=>(0, _core.shift));
parcelHelpers.export(exports, "size", ()=>(0, _core.size));
parcelHelpers.export(exports, "autoUpdate", ()=>autoUpdate);
parcelHelpers.export(exports, "computePosition", ()=>computePosition);
parcelHelpers.export(exports, "getOverflowAncestors", ()=>getOverflowAncestors);
parcelHelpers.export(exports, "platform", ()=>platform);
var _core = require("@floating-ui/core");
function isWindow(value) {
    return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow(node) {
    if (node == null) return window;
    if (!isWindow(node)) {
        const ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeName(node) {
    return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
}
function getUAString() {
    const uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands) return uaData.brands.map((item)=>item.brand + "/" + item.version).join(" ");
    return navigator.userAgent;
}
function isHTMLElement(value) {
    return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
    return value instanceof getWindow(value).Element;
}
function isNode(value) {
    return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
    // Browsers without `ShadowRoot` support
    if (typeof ShadowRoot === "undefined") return false;
    const OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    const { overflow , overflowX , overflowY , display  } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX) && ![
        "inline",
        "contents"
    ].includes(display);
}
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].includes(getNodeName(element));
}
function isContainingBlock(element) {
    // TODO: Try and use feature detection here instead
    const isFirefox = /firefox/i.test(getUAString());
    const css = getComputedStyle(element); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    return css.transform !== "none" || css.perspective !== "none" || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || [
        "transform",
        "perspective"
    ].some((value)=>css.willChange.includes(value)) || [
        "paint",
        "layout",
        "strict",
        "content"
    ].some((value)=>{
        const contain = css.contain;
        return contain != null ? contain.includes(value) : false;
    });
}
function isLayoutViewport() {
    // Not Safari
    return !/^((?!chrome|android).)*safari/i.test(getUAString()); // Feature detection for this fails in various ways
// • Always-visible scrollbar or not
// • Width of <html>, etc.
// const vV = win.visualViewport;
// return vV ? Math.abs(win.innerWidth / vV.scale - vV.width) < 0.5 : true;
}
function isLastTraversableNode(node) {
    return [
        "html",
        "body",
        "#document"
    ].includes(getNodeName(node));
}
const min = Math.min;
const max = Math.max;
const round = Math.round;
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    const clientRect = element.getBoundingClientRect();
    let scaleX = 1;
    let scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
        scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    const win = isElement(element) ? getWindow(element) : window;
    const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
    const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
    const width = clientRect.width / scaleX;
    const height = clientRect.height / scaleY;
    return {
        width,
        height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x,
        y
    };
}
function getDocumentElement(node) {
    return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
    if (isElement(element)) return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
    return {
        scrollLeft: element.pageXOffset,
        scrollTop: element.pageYOffset
    };
}
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function isScaled(element) {
    const rect = getBoundingClientRect(element);
    return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const rect = getBoundingClientRect(element, isOffsetParentAnElement && isScaled(offsetParent), strategy === "fixed");
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
        if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
        if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent, true);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
function getParentNode(node) {
    if (getNodeName(node) === "html") return node;
    return(// @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || (isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node) // fallback
    );
}
function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") return null;
    return element.offsetParent;
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) currentNode = currentNode.host;
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) return currentNode;
        else {
            const parent = currentNode.parentNode;
            currentNode = isShadowRoot(parent) ? parent.host : parent;
        }
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element) {
    const window1 = getWindow(element);
    let offsetParent = getTrueOffsetParent(element);
    while(offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) return window1;
    return offsetParent || getContainingBlock(element) || window1;
}
function getDimensions(element) {
    if (isHTMLElement(element)) return {
        width: element.offsetWidth,
        height: element.offsetHeight
    };
    const rect = getBoundingClientRect(element);
    return {
        width: rect.width,
        height: rect.height
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { rect , offsetParent , strategy  } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) return rect;
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
        if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
        if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent, true);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } // This doesn't appear to be need to be negated.
    // else if (documentElement) {
    //   offsets.x = getWindowScrollBarX(documentElement);
    // }
    }
    return {
        ...rect,
        x: rect.x - scroll.scrollLeft + offsets.x,
        y: rect.y - scroll.scrollTop + offsets.y
    };
}
function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const layoutViewport = isLayoutViewport();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width,
        height,
        x,
        y
    };
}
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
    var _element$ownerDocumen;
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle(body || html).direction === "rtl") x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width,
        height,
        x,
        y
    };
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) // @ts-ignore assume body is always available
    return node.ownerDocument.body;
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
    var _node$ownerDocument;
    if (list === void 0) list = [];
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
    const win = getWindow(scrollableAncestor);
    const target = isBody ? [
        win
    ].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
    const updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(getOverflowAncestors(target));
}
function contains(parent, child) {
    const rootNode = child.getRootNode == null ? void 0 : child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && isShadowRoot(rootNode)) {
        let next = child;
        do {
            // use `===` replace node.isSameNode()
            if (next && parent === next) return true;
             // @ts-ignore: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    }
    return false;
}
function getNearestParentCapableOfEscapingClipping(element, clippingAncestors) {
    let currentNode = element;
    while(currentNode && !isLastTraversableNode(currentNode) && // @ts-expect-error
    !clippingAncestors.includes(currentNode)){
        if (isElement(currentNode) && [
            "absolute",
            "fixed"
        ].includes(getComputedStyle(currentNode).position)) break;
        const parentNode = getParentNode(currentNode);
        currentNode = isShadowRoot(parentNode) ? parentNode.host : parentNode;
    }
    return currentNode;
}
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, false, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    return {
        top,
        left,
        x: left,
        y: top,
        right: left + element.clientWidth,
        bottom: top + element.clientHeight,
        width: element.clientWidth,
        height: element.clientHeight
    };
}
function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
    if (clippingParent === "viewport") return (0, _core.rectToClientRect)(getViewportRect(element, strategy));
    if (isElement(clippingParent)) return getInnerBoundingClientRect(clippingParent, strategy);
    return (0, _core.rectToClientRect)(getDocumentRect(getDocumentElement(element)));
} // A "clipping ancestor" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingAncestors(element) {
    const clippingAncestors = getOverflowAncestors(element);
    const nearestEscapableParent = getNearestParentCapableOfEscapingClipping(element, clippingAncestors);
    let clipperElement = null;
    if (nearestEscapableParent && isHTMLElement(nearestEscapableParent)) {
        const offsetParent = getOffsetParent(nearestEscapableParent);
        if (isOverflowElement(nearestEscapableParent)) clipperElement = nearestEscapableParent;
        else if (isHTMLElement(offsetParent)) clipperElement = offsetParent;
    }
    if (!isElement(clipperElement)) return [];
     // @ts-ignore isElement check ensures we return Array<Element>
    return clippingAncestors.filter((clippingAncestors)=>clipperElement && isElement(clippingAncestors) && contains(clippingAncestors, clipperElement) && getNodeName(clippingAncestors) !== "body");
} // Gets the maximum area that the element is visible in due to any number of
// clipping ancestors
function getClippingRect(_ref) {
    let { element , boundary , rootBoundary , strategy  } = _ref;
    const mainClippingAncestors = boundary === "clippingAncestors" ? getClippingAncestors(element) : [].concat(boundary);
    const clippingAncestors = [
        ...mainClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
const platform = {
    getClippingRect,
    convertOffsetParentRelativeRectToViewportRelativeRect,
    isElement,
    getDimensions,
    getOffsetParent,
    getDocumentElement,
    getElementRects: (_ref)=>{
        let { reference , floating , strategy  } = _ref;
        return {
            reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
            floating: {
                ...getDimensions(floating),
                x: 0,
                y: 0
            }
        };
    },
    getClientRects: (element)=>Array.from(element.getClientRects()),
    isRTL: (element)=>getComputedStyle(element).direction === "rtl"
};
/**
 * Automatically updates the position of the floating element when necessary.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) options = {};
    const { ancestorScroll: _ancestorScroll = true , ancestorResize =true , elementResize =true , animationFrame =false  } = options;
    const ancestorScroll = _ancestorScroll && !animationFrame;
    const ancestors = ancestorScroll || ancestorResize ? [
        ...isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : [],
        ...getOverflowAncestors(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener("scroll", update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener("resize", update);
    });
    let observer = null;
    if (elementResize) {
        let initialUpdate = true;
        observer = new ResizeObserver(()=>{
            if (!initialUpdate) update();
            initialUpdate = false;
        });
        isElement(reference) && !animationFrame && observer.observe(reference);
        if (!isElement(reference) && reference.contextElement && !animationFrame) observer.observe(reference.contextElement);
        observer.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) frameLoop();
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) update();
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _observer;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener("scroll", update);
            ancestorResize && ancestor.removeEventListener("resize", update);
        });
        (_observer = observer) == null || _observer.disconnect();
        observer = null;
        if (animationFrame) cancelAnimationFrame(frameId);
    };
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */ const computePosition = (reference, floating, options)=>(0, _core.computePosition)(reference, floating, {
        platform,
        ...options
    });

},{"@floating-ui/core":"dgWsp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dgWsp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrow", ()=>arrow);
parcelHelpers.export(exports, "autoPlacement", ()=>autoPlacement);
parcelHelpers.export(exports, "computePosition", ()=>computePosition);
parcelHelpers.export(exports, "detectOverflow", ()=>detectOverflow);
parcelHelpers.export(exports, "flip", ()=>flip);
parcelHelpers.export(exports, "hide", ()=>hide);
parcelHelpers.export(exports, "inline", ()=>inline);
parcelHelpers.export(exports, "limitShift", ()=>limitShift);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "rectToClientRect", ()=>rectToClientRect);
parcelHelpers.export(exports, "shift", ()=>shift);
parcelHelpers.export(exports, "size", ()=>size);
function getSide(placement) {
    return placement.split("-")[0];
}
function getAlignment(placement) {
    return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].includes(getSide(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
    return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference , floating  } = _ref;
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const mainAxis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(mainAxis);
    const commonAlign = reference[length] / 2 - floating[length] / 2;
    const side = getSide(placement);
    const isVertical = mainAxis === "x";
    let coords;
    switch(side){
        case "top":
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case "bottom":
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case "right":
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case "left":
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch(getAlignment(placement)){
        case "start":
            coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case "end":
            coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement ="bottom" , strategy ="absolute" , middleware =[] , platform  } = config;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    if (platform == null) console.error([
        "Floating UI: `platform` property was not passed to config. If you",
        "want to use Floating UI on the web, install @floating-ui/dom",
        "instead of the /core package. Otherwise, you can create your own",
        "`platform`: https://floating-ui.com/docs/platform"
    ].join(" "));
    if (middleware.filter((_ref)=>{
        let { name  } = _ref;
        return name === "autoPlacement" || name === "flip";
    }).length > 1) throw new Error([
        "Floating UI: duplicate `flip` and/or `autoPlacement`",
        "middleware detected. This will lead to an infinite loop. Ensure only",
        "one of either has been passed to the `middleware` array."
    ].join(" "));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x , y  } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < middleware.length; i++){
        const { name , fn  } = middleware[i];
        const { x: nextX , y: nextY , data , reset  } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (resetCount > 50) console.warn([
            "Floating UI: The middleware lifecycle appears to be running in an",
            "infinite loop. This is usually caused by a `reset` continually",
            "being returned without a break condition."
        ].join(" "));
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === "object") {
                if (reset.placement) statefulPlacement = reset.placement;
                if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
                    reference,
                    floating,
                    strategy
                }) : reset.rects;
                ({ x , y  } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
            continue;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getSideObjectFromPadding(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    return {
        ...rect,
        top: rect.y,
        left: rect.x,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(middlewareArguments, options) {
    var _await$platform$isEle;
    if (options === void 0) options = {};
    const { x , y , platform , rects , elements , strategy  } = middlewareArguments;
    const { boundary ="clippingAncestors" , rootBoundary ="viewport" , elementContext ="floating" , altBoundary =false , padding =0  } = options;
    const paddingObject = getSideObjectFromPadding(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: elementContext === "floating" ? {
            ...rects.floating,
            x,
            y
        } : rects.reference,
        offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
        strategy
    }) : rects[elementContext]);
    return {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
}
const min = Math.min;
const max = Math.max;
function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
}
/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: "arrow",
        options,
        async fn (middlewareArguments) {
            // Since `element` is required, we don't Partial<> the type
            const { element , padding =0  } = options != null ? options : {};
            const { x , y , placement , rects , platform  } = middlewareArguments;
            if (element == null) {
                console.warn("Floating UI: No `element` was passed to the `arrow` middleware.");
                return {};
            }
            const paddingObject = getSideObjectFromPadding(padding);
            const coords = {
                x,
                y
            };
            const axis = getMainAxisFromPlacement(placement);
            const alignment = getAlignment(placement);
            const length = getLengthFromAxis(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const minProp = axis === "y" ? "top" : "left";
            const maxProp = axis === "y" ? "bottom" : "right";
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
            if (clientSize === 0) clientSize = rects.floating[length];
            const centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds
            const min = paddingObject[minProp];
            const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = within(min, center, max); // Make sure that arrow points at the reference
            const alignmentPadding = alignment === "start" ? paddingObject[minProp] : paddingObject[maxProp];
            const shouldAddOffset = alignmentPadding > 0 && center !== offset && rects.reference[length] <= rects.floating[length];
            const alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
            return {
                [axis]: coords[axis] - alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset
                }
            };
        }
    });
const hash$1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (matched)=>hash$1[matched]);
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) rtl = false;
    const alignment = getAlignment(placement);
    const mainAxis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(mainAxis);
    let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    return {
        main: mainAlignmentSide,
        cross: getOppositePlacement(mainAlignmentSide)
    };
}
const hash = {
    start: "end",
    end: "start"
};
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (matched)=>hash[matched]);
}
const sides = [
    "top",
    "right",
    "bottom",
    "left"
];
const allPlacements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-start", side + "-end"), []);
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>getAlignment(placement) === alignment),
        ...allowedPlacements.filter((placement)=>getAlignment(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>getSide(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
        return true;
    });
}
/**
 * Automatically chooses the `placement` which has the most space available.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) options = {};
    return {
        name: "autoPlacement",
        options,
        async fn (middlewareArguments) {
            var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _placementsSortedByLe;
            const { x , y , rects , middlewareData , placement , platform , elements  } = middlewareArguments;
            const { alignment =null , allowedPlacements =allPlacements , autoAlignment =true , ...detectOverflowOptions } = options;
            const placements = getPlacementList(alignment, autoAlignment, allowedPlacements);
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const currentIndex = (_middlewareData$autoP = (_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.index) != null ? _middlewareData$autoP : 0;
            const currentPlacement = placements[currentIndex];
            if (currentPlacement == null) return {};
            const { main , cross  } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))); // Make `computeCoords` start from the right place
            if (placement !== currentPlacement) return {
                x,
                y,
                reset: {
                    placement: placements[0]
                }
            };
            const currentOverflows = [
                overflow[getSide(currentPlacement)],
                overflow[main],
                overflow[cross]
            ];
            const allOverflows = [
                ...(_middlewareData$autoP3 = (_middlewareData$autoP4 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP4.overflows) != null ? _middlewareData$autoP3 : [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements[currentIndex + 1]; // There are more placements to check
            if (nextPlacement) return {
                data: {
                    index: currentIndex + 1,
                    overflows: allOverflows
                },
                reset: {
                    placement: nextPlacement
                }
            };
            const placementsSortedByLeastOverflow = allOverflows.slice().sort((a, b)=>a.overflows[0] - b.overflows[0]);
            const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find((_ref)=>{
                let { overflows  } = _ref;
                return overflows.every((overflow)=>overflow <= 0);
            })) == null ? void 0 : _placementsSortedByLe.placement;
            const resetPlacement = placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement;
            if (resetPlacement !== placement) return {
                data: {
                    index: currentIndex + 1,
                    overflows: allOverflows
                },
                reset: {
                    placement: resetPlacement
                }
            };
            return {};
        }
    };
};
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
/**
 * Changes the placement of the floating element to one that will fit if the
 * initially specified `placement` does not.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) options = {};
    return {
        name: "flip",
        options,
        async fn (middlewareArguments) {
            var _middlewareData$flip;
            const { placement , middlewareData , rects , initialPlacement , platform , elements  } = middlewareArguments;
            const { mainAxis: checkMainAxis = true , crossAxis: checkCrossAxis = true , fallbackPlacements: specifiedFallbackPlacements , fallbackStrategy ="bestFit" , flipAlignment =true , ...detectOverflowOptions } = options;
            const side = getSide(placement);
            const isBasePlacement = side === initialPlacement;
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                getOppositePlacement(initialPlacement)
            ] : getExpandedPlacements(initialPlacement));
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) overflows.push(overflow[side]);
            if (checkCrossAxis) {
                const { main , cross  } = getAlignmentSides(placement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
                overflows.push(overflow[main], overflow[cross]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ]; // One or more sides is overflowing
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip$, _middlewareData$flip2;
                const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) // Try next placement and re-run the lifecycle
                return {
                    data: {
                        index: nextIndex,
                        overflows: overflowsData
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
                let resetPlacement = "bottom";
                switch(fallbackStrategy){
                    case "bestFit":
                        {
                            var _overflowsData$map$so;
                            const placement1 = (_overflowsData$map$so = overflowsData.map((d)=>[
                                    d,
                                    d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;
                            if (placement1) resetPlacement = placement1;
                            break;
                        }
                    case "initialPlacement":
                        resetPlacement = initialPlacement;
                        break;
                }
                if (placement !== resetPlacement) return {
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return sides.some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(_temp) {
    let { strategy ="referenceHidden" , ...detectOverflowOptions } = _temp === void 0 ? {} : _temp;
    return {
        name: "hide",
        async fn (middlewareArguments) {
            const { rects  } = middlewareArguments;
            switch(strategy){
                case "referenceHidden":
                    {
                        const overflow = await detectOverflow(middlewareArguments, {
                            ...detectOverflowOptions,
                            elementContext: "reference"
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case "escaped":
                    {
                        const overflow1 = await detectOverflow(middlewareArguments, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets1 = getSideOffsets(overflow1, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets1,
                                escaped: isAnySideFullyClipped(offsets1)
                            }
                        };
                    }
                default:
                    return {};
            }
        }
    };
};
async function convertValueToCoords(middlewareArguments, value) {
    const { placement , platform , elements  } = middlewareArguments;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getMainAxisFromPlacement(placement) === "x";
    const mainAxisMulti = [
        "left",
        "top"
    ].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = typeof value === "function" ? value(middlewareArguments) : value; // eslint-disable-next-line prefer-const
    let { mainAxis , crossAxis , alignmentAxis  } = typeof rawValue === "number" ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...rawValue
    };
    if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Displaces the floating element from its reference element.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(value) {
    if (value === void 0) value = 0;
    return {
        name: "offset",
        options: value,
        async fn (middlewareArguments) {
            const { x , y  } = middlewareArguments;
            const diffCoords = await convertValueToCoords(middlewareArguments, value);
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: diffCoords
            };
        }
    };
};
function getCrossAxis(axis) {
    return axis === "x" ? "y" : "x";
}
/**
 * Shifts the floating element in order to keep it in view when it will overflow
 * a clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) options = {};
    return {
        name: "shift",
        options,
        async fn (middlewareArguments) {
            const { x , y , placement  } = middlewareArguments;
            const { mainAxis: checkMainAxis = true , crossAxis: checkCrossAxis = false , limiter ={
                fn: (_ref)=>{
                    let { x , y  } = _ref;
                    return {
                        x,
                        y
                    };
                }
            } , ...detectOverflowOptions } = options;
            const coords = {
                x,
                y
            };
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const mainAxis = getMainAxisFromPlacement(getSide(placement));
            const crossAxis = getCrossAxis(mainAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === "y" ? "top" : "left";
                const maxSide = mainAxis === "y" ? "bottom" : "right";
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = within(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide1 = crossAxis === "y" ? "top" : "left";
                const maxSide1 = crossAxis === "y" ? "bottom" : "right";
                const min1 = crossAxisCoord + overflow[minSide1];
                const max1 = crossAxisCoord - overflow[maxSide1];
                crossAxisCoord = within(min1, crossAxisCoord, max1);
            }
            const limitedCoords = limiter.fn({
                ...middlewareArguments,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) options = {};
    return {
        options,
        fn (middlewareArguments) {
            const { x , y , placement , rects , middlewareData  } = middlewareArguments;
            const { offset =0 , mainAxis: checkMainAxis = true , crossAxis: checkCrossAxis = true  } = options;
            const coords = {
                x,
                y
            };
            const mainAxis = getMainAxisFromPlacement(placement);
            const crossAxis = getCrossAxis(mainAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = typeof offset === "function" ? offset(middlewareArguments) : offset;
            const computedOffset = typeof rawOffset === "number" ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === "y" ? "height" : "width";
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
                else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2, _middlewareData$offse3, _middlewareData$offse4;
                const len1 = mainAxis === "y" ? "width" : "height";
                const isOriginSide = [
                    "top",
                    "left"
                ].includes(getSide(placement));
                const limitMin1 = rects.reference[crossAxis] - rects.floating[len1] + (isOriginSide ? (_middlewareData$offse = (_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) != null ? _middlewareData$offse : 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax1 = rects.reference[crossAxis] + rects.reference[len1] + (isOriginSide ? 0 : (_middlewareData$offse3 = (_middlewareData$offse4 = middlewareData.offset) == null ? void 0 : _middlewareData$offse4[crossAxis]) != null ? _middlewareData$offse3 : 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin1) crossAxisCoord = limitMin1;
                else if (crossAxisCoord > limitMax1) crossAxisCoord = limitMax1;
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data to change the size of the floating element. For instance,
 * prevent it from overflowing its clipping boundary or match the width of the
 * reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) options = {};
    return {
        name: "size",
        options,
        async fn (middlewareArguments) {
            const { placement , rects , platform , elements  } = middlewareArguments;
            const { apply =()=>{} , ...detectOverflowOptions } = options;
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const side = getSide(placement);
            const alignment = getAlignment(placement);
            let heightSide;
            let widthSide;
            if (side === "top" || side === "bottom") {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
            } else {
                widthSide = side;
                heightSide = alignment === "end" ? "top" : "bottom";
            }
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            const dimensions = {
                availableHeight: rects.floating.height - ([
                    "left",
                    "right"
                ].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
                availableWidth: rects.floating.width - ([
                    "top",
                    "bottom"
                ].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
            };
            await apply({
                ...middlewareArguments,
                ...dimensions
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (rects.floating.width !== nextDimensions.width || rects.floating.height !== nextDimensions.height) return {
                reset: {
                    rects: true
                }
            };
            return {};
        }
    };
};
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) options = {};
    return {
        name: "inline",
        options,
        async fn (middlewareArguments) {
            var _await$platform$getCl;
            const { placement , elements , rects , platform , strategy  } = middlewareArguments; // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding =2 , x , y  } = options;
            const fallback = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
                rect: rects.reference,
                offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
                strategy
            }) : rects.reference);
            const clientRects = (_await$platform$getCl = await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) != null ? _await$platform$getCl : [];
            const paddingObject = getSideObjectFromPadding(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                    var _clientRects$find;
                    // Find the first rect in which the point is fully inside
                    return (_clientRects$find = clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom)) != null ? _clientRects$find : fallback;
                } // There are 2 or more connected rects
                if (clientRects.length >= 2) {
                    if (getMainAxisFromPlacement(placement) === "x") {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = getSide(placement) === "top";
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = getSide(placement) === "left";
                    const maxRight = max(...clientRects.map((rect)=>rect.right));
                    const minLeft = min(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top1 = measureRects[0].top;
                    const bottom1 = measureRects[measureRects.length - 1].bottom;
                    const left1 = minLeft;
                    const right1 = maxRight;
                    const width1 = right1 - left1;
                    const height1 = bottom1 - top1;
                    return {
                        top: top1,
                        bottom: bottom1,
                        left: left1,
                        right: right1,
                        width: width1,
                        height: height1,
                        x: left1,
                        y: top1
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) return {
                reset: {
                    rects: resetRects
                }
            };
            return {};
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mEgX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var index = (0, _react.useLayoutEffect);
exports.default = index;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajWd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>memoizeOne);
var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
    if (first === second) return true;
    if (safeIsNaN(first) && safeIsNaN(second)) return true;
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) return false;
    for(var i = 0; i < newInputs.length; i++){
        if (!isEqual(newInputs[i], lastInputs[i])) return false;
    }
    return true;
}
function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) isEqual = areInputsEqual;
    var cache = null;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++)newArgs[_i] = arguments[_i];
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) return cache.lastResult;
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4GxK":[function(require,module,exports) {
var defineProperty = require("./defineProperty.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./defineProperty.js":"jqgyy"}],"jqgyy":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"9YHrs":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles.js");
var iterableToArrayLimit = require("./iterableToArrayLimit.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableRest = require("./nonIterableRest.js");
function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./arrayWithHoles.js":"8WSHz","./iterableToArrayLimit.js":"iJfie","./unsupportedIterableToArray.js":"dNXnI","./nonIterableRest.js":"bt1J4"}],"8WSHz":[function(require,module,exports) {
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"iJfie":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"dNXnI":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./arrayLikeToArray.js":"cZrVa"}],"cZrVa":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"bt1J4":[function(require,module,exports) {
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"iC3d9":[function(require,module,exports) {
var objectWithoutPropertiesLoose = require("./objectWithoutPropertiesLoose.js");
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./objectWithoutPropertiesLoose.js":"61nzC"}],"61nzC":[function(require,module,exports) {
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"g9FEw":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"5hami":[function(require,module,exports) {
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"lLGnP":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf.js");
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./setPrototypeOf.js":"6mbFz"}],"6mbFz":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"18Y3H":[function(require,module,exports) {
var getPrototypeOf = require("./getPrototypeOf.js");
var isNativeReflectConstruct = require("./isNativeReflectConstruct.js");
var possibleConstructorReturn = require("./possibleConstructorReturn.js");
function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return possibleConstructorReturn(this, result);
    };
}
module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./getPrototypeOf.js":"dlU6Z","./isNativeReflectConstruct.js":"9F9kP","./possibleConstructorReturn.js":"8EheS"}],"dlU6Z":[function(require,module,exports) {
function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"9F9kP":[function(require,module,exports) {
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"8EheS":[function(require,module,exports) {
var _typeof = require("./typeof.js")["default"];
var assertThisInitialized = require("./assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./typeof.js":"kP6oN","./assertThisInitialized.js":"7ySIE"}],"kP6oN":[function(require,module,exports) {
function _typeof(obj) {
    "@babel/helpers - typeof";
    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"7ySIE":[function(require,module,exports) {
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"eHEyK":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles.js");
var iterableToArray = require("./iterableToArray.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableSpread = require("./nonIterableSpread.js");
function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./arrayWithoutHoles.js":"jRmxs","./iterableToArray.js":"bvpvT","./unsupportedIterableToArray.js":"dNXnI","./nonIterableSpread.js":"iuDSS"}],"jRmxs":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./arrayLikeToArray.js":"cZrVa"}],"bvpvT":[function(require,module,exports) {
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"iuDSS":[function(require,module,exports) {
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"h5MBc":[function(require,module,exports) {
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"aB5oJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "locales", ()=>locales);
parcelHelpers.export(exports, "translate", ()=>translate);
parcelHelpers.export(exports, "getKey", ()=>getKey);
var _get = require("lodash/get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _wordingJson = require("../translations/en/wording.json");
var _wordingJsonDefault = parcelHelpers.interopDefault(_wordingJson);
var _wordingJson1 = require("../translations/fr/wording.json");
var _wordingJsonDefault1 = parcelHelpers.interopDefault(_wordingJson1);
var _wordingJson2 = require("../translations/cn/wording.json");
var _wordingJsonDefault2 = parcelHelpers.interopDefault(_wordingJson2);
var _wordingJson3 = require("../translations/it/wording.json");
var _wordingJsonDefault3 = parcelHelpers.interopDefault(_wordingJson3);
const locales = [
    "en",
    "fr",
    "it",
    "cn"
];
// Dictionary of translations
const translations = {
    en: (0, _wordingJsonDefault.default),
    fr: (0, _wordingJsonDefault1.default),
    cn: (0, _wordingJsonDefault2.default),
    it: (0, _wordingJsonDefault3.default)
};
const translate = (key)=>{
    const locale = window.LOCALE_VELASCA;
    const localizationFile = translations[locale];
    if (localizationFile && Object.keys(localizationFile).length > 0) return localizationFile[key] || undefined;
    return undefined;
};
const getKey = (path, nextLocale)=>{
    const locale = window.LOCALE_VELASCA;
    const currentLocalizationFile = translations[locale];
    const nextLocalizationFile = translations[nextLocale];
    if (currentLocalizationFile && nextLocalizationFile) {
        const { key: currentKey  } = (0, _getDefault.default)(currentLocalizationFile, "menu", []).find(({ route  })=>route === path) || [];
        if (!currentKey) return "home";
        const { route: newRoute  } = (0, _getDefault.default)(nextLocalizationFile, "menu", []).find(({ key  })=>currentKey === key) || [];
        return newRoute || "";
    }
};

},{"lodash/get":"8UELX","../translations/en/wording.json":"k7AkT","../translations/fr/wording.json":"4l9Gu","../translations/cn/wording.json":"aUNP9","../translations/it/wording.json":"7gae2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k7AkT":[function(require,module,exports) {
module.exports = JSON.parse('{"menu":[{"label":"project","route":"project","key":"project","isPrimary":true,"name":"PROJECT"},{"label":"team","route":"team","key":"team","isPrimary":true,"name":"TEAM"},{"label":"sponsor","route":"sponsor","key":"sponsor","name":"SPONSOR"},{"label":"artists","route":"artists","key":"artists","isPrimary":true,"name":"ARTISTS"},{"label":"results","route":"season","key":"season","name":"SEASON"},{"label":"shop","route":"shop","key":"shop","isPrimary":true,"name":"SHOP"},{"label":"tickets","route":"tickets","key":"tickets","name":"TICKETS"},{"label":"club","route":"club","key":"club","name":"CLUB"},{"label":"press","route":"press","key":"press","name":"PRESS"},{"label":"edition","route":"edition","key":"edition","name":"EDITION"},{"label":"contacts","route":"disclaimer","key":"contacts","name":"CONTACTS"}],"backToList":"Back to products","persoPlaceHolder":"Name and/or Number","personalize":"Customize your jersey","buy":"Order","soldOut":"Sold out"}');

},{}],"4l9Gu":[function(require,module,exports) {
module.exports = JSON.parse('{"menu":[{"label":"project","route":"projet","key":"project","isPrimary":true,"name":"PROJET"},{"label":"equipe","route":"equipe","key":"team","isPrimary":true,"name":"EQUIPE"},{"label":"sponsor","route":"sponsor","key":"sponsor","name":"SPONSOR"},{"label":"artistes","route":"artistes","key":"artists","isPrimary":true,"name":"ARTISTES"},{"label":"r\xe9sultats","route":"saison","key":"season","name":"SAISON"},{"label":"shop","route":"shop","key":"shop","isPrimary":true,"name":"BOUTIQUE"},{"label":"tickets","route":"tickets","key":"tickets","name":"TICKETS"},{"label":"club","route":"club","key":"club","name":"CLUB"},{"label":"presse","route":"presse","key":"press","name":"PRESSE"},{"label":"edition","route":"edition","key":"edition","name":"EDITION"},{"label":"contacts","route":"disclaimer","key":"contacts","name":"CONTACTS"}],"backToList":"Retour aux produits","persoPlaceHolder":"Nom et/ou num\xe9ro","personalize":"Personnalisez votre maillot","buy":"Acheter","soldOut":"Sold out"}');

},{}],"aUNP9":[function(require,module,exports) {
module.exports = JSON.parse('{"menu":[{"label":"主题","route":"project","key":"project","isPrimary":true,"name":"PROJECT"},{"label":"球队","route":"team","key":"team","isPrimary":true,"name":"TEAM"},{"label":"贊助","route":"sponsor","key":"sponsor","name":"SPONSOR"},{"label":"艺术家","route":"artists","key":"artists","isPrimary":true,"name":"ARTISTS"},{"label":"赛季","route":"season","key":"season","name":"SEASON"},{"label":"精品","route":"shop","key":"shop","isPrimary":true,"name":"SHOP"},{"label":"票","route":"tickets","key":"tickets","name":"TICKETS"},{"label":"管理人员","route":"club","key":"club","name":"CLUB"},{"label":"新闻室","route":"press","key":"press","name":"PRESS"},{"label":"联系","route":"disclaimer","key":"contacts","name":"CONTACTS"}],"backToList":"Back to products","persoPlaceHolder":"Name and/or Number","personalize":"Customize your jersey","buy":"Order","soldOut":"Sold out"}');

},{}],"7gae2":[function(require,module,exports) {
module.exports = JSON.parse('{"menu":[{"label":"progetto","route":"progetto","key":"project","isPrimary":true,"name":"PROGETTO"},{"label":"squadra","route":"squadra","key":"team","isPrimary":true,"name":"SQUADRA"},{"label":"sponsor","route":"sponsor","key":"sponsor","name":"SPONSOR"},{"label":"artisti","route":"artisti","key":"artists","isPrimary":true,"name":"ARTISTS"},{"label":"risultati","route":"stagione","key":"season","name":"SEASON"},{"label":"shop","route":"shop","key":"shop","isPrimary":true,"name":"SHOP"},{"label":"tickets","route":"tickets","key":"tickets","name":"TICKETS"},{"label":"societa","route":"societa","key":"club","name":"CLUB"},{"label":"stampa","route":"stampa","key":"press","name":"STAMPA"},{"label":"edizione","route":"edizione","key":"edition","name":"EDIZIONE"},{"label":"contatti","route":"disclaimer","key":"contacts","name":"CONTATTI"}],"backToList":"Torna ai prodo","persoPlaceHolder":"nome e/o numero","personalize":"Personalizza la tua maglia","buy":"Ordina","soldOut":"Sold out"}');

},{}],"54O39":[function() {},{}],"lREMf":[function() {},{}]},["1xC6H","fwKUx"], null, "parcelRequireee92")

//# sourceMappingURL=Shop.8a88ab4b.js.map
