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

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"cfJLO":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0aee20a79e5d0a80";
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

},{}],"j2H6t":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$f471 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$f471.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _app = require("../App/App");
var _appDefault = parcelHelpers.interopDefault(_app);
/**
 * Layout
 */ const Layout = ({ component: Component , ...rest })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Route), {
        ...rest,
        render: (matchProps)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _appDefault.default), {
                component: Component,
                ...matchProps,
                ...rest
            }, void 0, false, void 0, void 0)
    }, void 0, false, {
        fileName: "src/components/Layout/Layout.js",
        lineNumber: 12,
        columnNumber: 7
    }, undefined);
_c = Layout;
exports.default = Layout;
var _c;
$RefreshReg$(_c, "Layout");

  $parcel$ReactRefreshHelpers$f471.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"cHIiW","../App/App":"gL2as","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gL2as":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$06f8 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$06f8.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _reactHelmet = require("react-helmet");
var _header = require("../Header/Header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _mobileMenu = require("../Menu/MobileMenu/MobileMenu");
var _mobileMenuDefault = parcelHelpers.interopDefault(_mobileMenu);
var _i18N = require("../../shared/i18n");
var _appScss = require("./App.scss");
const App = ({ component: Component , ...props })=>{
    const { match , withoutFooter , withoutHeader , noOverFlow  } = props;
    const { params  } = match;
    const { locale  } = params;
    window.LOCALE_VELASCA = locale || "en";
    const menu = (0, _i18N.translate)("menu") || [];
    const currentURL = `https://www.asvelasca.it/${window.LOCALE_VELASCA}`;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: (0, _classnamesDefault.default)("App", {
            App_noOverFlow: noOverFlow
        }),
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactHelmet.Helmet), {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("html", {
                        lang: window.LOCALE_VELASCA
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("title", {
                        children: ".:: A.S. VELASCA ::."
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        meta: true,
                        charset: "UTF-8"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        name: "Description",
                        content: "La terza squadra di Milano"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        name: "Keywords",
                        content: "a.s. velasca, marco de girolamo, karim khideur, loris mandelli, wolfgang natlacen, cl\xe9ment tournus, milano, terza squadra di milano"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:title",
                        content: "A.S. Velasca"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:url",
                        content: currentURL
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:image",
                        content: "https://www.asvelasca.it/asvelasca-fb.jpg"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:description",
                        content: "WE ARE ALL BUT A FOOTBALL TEAM"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "og:site_name",
                        content: ".:: A.S. Velasca ::."
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "twitter:url",
                        content: currentURL
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "twitter:title",
                        content: ".:: A.S. VELASCA ::."
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "twitter:description",
                        content: "WE ARE ALL BUT A FOOTBALL TEAM"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("meta", {
                        property: "twitter:image",
                        content: "https://www.asvelasca.it/asvelasca-fb.jpg"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 51,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("link", {
                        rel: "shortcut icon",
                        href: "https://www.asvelasca.it/velascam.png"
                    }, void 0, false, {
                        fileName: "src/components/App/App.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/App/App.js",
                lineNumber: 32,
                columnNumber: 7
            }, undefined),
            !withoutHeader && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _headerDefault.default), {}, void 0, false, {
                fileName: "src/components/App/App.js",
                lineNumber: 54,
                columnNumber: 26
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Component, {
                ...props,
                className: "App__content"
            }, void 0, false, {
                fileName: "src/components/App/App.js",
                lineNumber: 55,
                columnNumber: 7
            }, undefined),
            !withoutFooter && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "App__Footer"
            }, void 0, false, {
                fileName: "src/components/App/App.js",
                lineNumber: 56,
                columnNumber: 26
            }, undefined),
            !withoutHeader && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _mobileMenuDefault.default), {
                links: menu
            }, void 0, false, {
                fileName: "src/components/App/App.js",
                lineNumber: 57,
                columnNumber: 26
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/App/App.js",
        lineNumber: 29,
        columnNumber: 10
    }, undefined);
};
_c = App;
exports.default = App;
var _c;
$RefreshReg$(_c, "App");

  $parcel$ReactRefreshHelpers$06f8.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","classnames":"jocGM","react-helmet":"fcX6K","../Header/Header":"8iwn3","../Menu/MobileMenu/MobileMenu":"4FXm1","../../shared/i18n":"aB5oJ","./App.scss":"hD9zU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"jocGM":[function(require,module,exports) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    var nativeCodeString = "[native code]";
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") classes.push(arg);
            else if (Array.isArray(arg)) {
                if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                }
            } else if (argType === "object") {
                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                    classes.push(arg.toString());
                    continue;
                }
                for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
            }
        }
        return classes.join(" ");
    }
    if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"8iwn3":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a077 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a077.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _langSelector = require("../LangSelector/LangSelector");
var _langSelectorDefault = parcelHelpers.interopDefault(_langSelector);
var _social = require("../Social/Social");
var _socialDefault = parcelHelpers.interopDefault(_social);
var _menu = require("../Menu/Menu");
var _menuDefault = parcelHelpers.interopDefault(_menu);
var _headerScss = require("./Header.scss");
/**
 * Header
 */ const Header = (props)=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Header",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuDefault.default), {}, void 0, false, {
                fileName: "src/components/Header/Header.js",
                lineNumber: 13,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _langSelectorDefault.default), {}, void 0, false, {
                fileName: "src/components/Header/Header.js",
                lineNumber: 14,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _socialDefault.default), {}, void 0, false, {
                fileName: "src/components/Header/Header.js",
                lineNumber: 15,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Header/Header.js",
        lineNumber: 12,
        columnNumber: 10
    }, undefined);
};
_c = Header;
exports.default = Header;
var _c;
$RefreshReg$(_c, "Header");

  $parcel$ReactRefreshHelpers$a077.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../LangSelector/LangSelector":"gq8ES","../Social/Social":"9IgNM","../Menu/Menu":"kAp4N","./Header.scss":"1AYao","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gq8ES":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ff58 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ff58.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _i18N = require("../../shared/i18n");
var _langSelectorScss = require("./LangSelector.scss");
const setLocaleGlobale = (locale)=>{
    window.LOCALE_VELASCA = locale;
};
const getRoute = (nextLocale)=>{
    const lastPart = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
    return (0, _i18N.getKey)(lastPart, nextLocale);
};
/**
 * LangSelector
 */ const LangSelector = (props)=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
        className: "LangSelector",
        children: (0, _i18N.locales) && (0, _i18N.locales).filter((locale)=>locale !== window.LOCALE_VELASCA).map((locale)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                className: "LangSelector__item",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                    className: "LangSelector__link",
                    href: `/${locale}/${getRoute(locale)}`,
                    onClick: (locale)=>setLocaleGlobale(locale),
                    children: locale
                }, void 0, false, {
                    fileName: "src/components/LangSelector/LangSelector.js",
                    lineNumber: 20,
                    columnNumber: 15
                }, undefined)
            }, locale, false, {
                fileName: "src/components/LangSelector/LangSelector.js",
                lineNumber: 19,
                columnNumber: 92
            }, undefined))
    }, void 0, false, {
        fileName: "src/components/LangSelector/LangSelector.js",
        lineNumber: 18,
        columnNumber: 10
    }, undefined);
};
_c = LangSelector;
exports.default = LangSelector;
var _c;
$RefreshReg$(_c, "LangSelector");

  $parcel$ReactRefreshHelpers$ff58.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../../shared/i18n":"aB5oJ","./LangSelector.scss":"eeADO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"aB5oJ":[function(require,module,exports) {
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

},{}],"eeADO":[function() {},{}],"9IgNM":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$0ede = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$0ede.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _socialScss = require("./Social.scss");
/**
 * Social
 */ const Social = (props)=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Social",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Social__Item",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                    className: "Social__link",
                    rel: "noopener",
                    href: "https://instagram.com/asvelasca/",
                    target: "_blank",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        src: "https://www.asvelasca.it/images/btns/instagram.png",
                        alt: "Velasca Instragam"
                    }, void 0, false, {
                        fileName: "src/components/Social/Social.js",
                        lineNumber: 12,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Social/Social.js",
                    lineNumber: 11,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Social/Social.js",
                lineNumber: 10,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Social__Item",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                    className: "Social__link",
                    rel: "noopener",
                    href: "https://www.facebook.com/ASVelasca",
                    target: "_blank",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        src: "https://www.asvelasca.it/images/btns/facebook.png",
                        alt: "Velasca Facebook"
                    }, void 0, false, {
                        fileName: "src/components/Social/Social.js",
                        lineNumber: 18,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Social/Social.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Social/Social.js",
                lineNumber: 16,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Social__Item",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                    className: "Social__link",
                    rel: "noopener",
                    href: "https://twitter.com/asvelasca",
                    target: "_blank",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        src: "https://www.asvelasca.it/images/btns/twitter.png",
                        alt: "Velasca Twitter"
                    }, void 0, false, {
                        fileName: "src/components/Social/Social.js",
                        lineNumber: 24,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Social/Social.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Social/Social.js",
                lineNumber: 22,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Social/Social.js",
        lineNumber: 9,
        columnNumber: 10
    }, undefined);
};
_c = Social;
exports.default = Social;
var _c;
$RefreshReg$(_c, "Social");

  $parcel$ReactRefreshHelpers$0ede.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","./Social.scss":"hV2X1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"hV2X1":[function() {},{}],"kAp4N":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$c2ee = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$c2ee.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _i18N = require("../../shared/i18n");
var _menuList = require("./MenuList/MenuList");
var _menuListDefault = parcelHelpers.interopDefault(_menuList);
var _mobileMenu = require("./MobileMenu/MobileMenu");
var _mobileMenuDefault = parcelHelpers.interopDefault(_mobileMenu);
var _logoPng = require("../../shared/images/logo.png");
var _logoPngDefault = parcelHelpers.interopDefault(_logoPng);
var _menuScss = require("./Menu.scss");
var _s = $RefreshSig$();
/**
 * Menu
 */ const Menu = (props)=>{
    _s();
    const [isMobileOpen, setIsMobileOpen] = (0, _react.useState)(false);
    const menu = (0, _i18N.translate)("menu") || [];
    const mid = parseInt(menu.length / 2);
    const menuOne = menu && menu.slice(0, mid);
    const menuTwo = menu && menu.slice(mid);
    const menuRest = menu.filter(({ isPrimary  })=>!isPrimary);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: (0, _classnamesDefault.default)("Menu"),
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuListDefault.default), {
                links: menuOne,
                handleOpenMobileMenu: ()=>setIsMobileOpen(!isMobileOpen),
                isMobileOpen: isMobileOpen
            }, void 0, false, {
                fileName: "src/components/Menu/Menu.js",
                lineNumber: 23,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                className: "Menu__Logo",
                href: `/${window.LOCALE_VELASCA}/home`,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    src: (0, _logoPngDefault.default),
                    alt: "AS Velasca"
                }, void 0, false, {
                    fileName: "src/components/Menu/Menu.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Menu/Menu.js",
                lineNumber: 24,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuListDefault.default), {
                links: menuTwo,
                handleOpenMobileMenu: ()=>{},
                isAlternate: true,
                withoutMore: true
            }, void 0, false, {
                fileName: "src/components/Menu/Menu.js",
                lineNumber: 27,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Menu/Menu.js",
        lineNumber: 22,
        columnNumber: 10
    }, undefined);
};
_s(Menu, "LiIloRE//64pZUw6JXlDJhnOTqQ=");
_c = Menu;
exports.default = Menu;
var _c;
$RefreshReg$(_c, "Menu");

  $parcel$ReactRefreshHelpers$c2ee.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","classnames":"jocGM","../../shared/i18n":"aB5oJ","./MenuList/MenuList":"3QgnB","./MobileMenu/MobileMenu":"4FXm1","../../shared/images/logo.png":"1oIXa","./Menu.scss":"8BduL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"3QgnB":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$3dd1 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3dd1.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _utils = require("../../../shared/utils");
var _menuListScss = require("./MenuList.scss");
/**
 * MenuList
 */ const MenuList = ({ links , isAlternate , withoutMore , handleOpenMobileMenu , isMobileOpen , ...rest })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
        className: (0, _classnamesDefault.default)("MenuList", {
            MenuList_alternate: isAlternate
        }),
        children: [
            links && links.map(({ route , label , isPrimary  })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                    className: (0, _classnamesDefault.default)("MenuList__LinkContainer", {
                        MenuList__LinkContainerPrimary: isPrimary
                    }),
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                        className: (0, _classnamesDefault.default)("MenuList__Link", {
                            MenuList__PrimaryLink: isPrimary
                        }),
                        href: (0, _utils.getRouteWithLocale)(route),
                        children: label
                    }, void 0, false, {
                        fileName: "src/components/Menu/MenuList/MenuList.js",
                        lineNumber: 28,
                        columnNumber: 11
                    }, undefined)
                }, label, false, {
                    fileName: "src/components/Menu/MenuList/MenuList.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, undefined)),
            !withoutMore && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                className: "MenuList__LinkContainerMore MenuList__LinkContainerPrimary",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                    className: (0, _classnamesDefault.default)("MenuList__Link", "MenuList__PrimaryLink"),
                    onClick: handleOpenMobileMenu,
                    children: isMobileOpen ? "X" : "More"
                }, void 0, false, {
                    fileName: "src/components/Menu/MenuList/MenuList.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Menu/MenuList/MenuList.js",
                lineNumber: 34,
                columnNumber: 22
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Menu/MenuList/MenuList.js",
        lineNumber: 18,
        columnNumber: 7
    }, undefined);
_c = MenuList;
exports.default = MenuList;
var _c;
$RefreshReg$(_c, "MenuList");

  $parcel$ReactRefreshHelpers$3dd1.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"cHIiW","classnames":"jocGM","../../../shared/utils":"3VUNA","./MenuList.scss":"no7Sd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"no7Sd":[function() {},{}],"4FXm1":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$920d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$920d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _utils = require("../../../shared/utils");
var _mobileMenuAccordion = require("./MobileMenuAccordion/MobileMenuAccordion");
var _mobileMenuAccordionDefault = parcelHelpers.interopDefault(_mobileMenuAccordion);
var _mobileMenuScss = require("./MobileMenu.scss");
var _s = $RefreshSig$();
/**
 * MobileMenu
 */ const MobileMenu = ({ links , withoutMore  })=>{
    _s();
    const [isMobileOpen, setIsMobileOpen] = (0, _react.useState)(false);
    const menuRest = links && links.filter(({ isPrimary  })=>!isPrimary);
    const menuShow = links && links.filter(({ isPrimary  })=>isPrimary);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "MobileMenu",
        children: [
            menuShow && menuShow.map(({ route , label  })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                    className: "MobileMenu__LinkContainer",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                        className: "MobileMenu__Link",
                        to: (0, _utils.getRouteWithLocale)(route),
                        children: label
                    }, void 0, false, {
                        fileName: "src/components/Menu/MobileMenu/MobileMenu.js",
                        lineNumber: 28,
                        columnNumber: 13
                    }, undefined)
                }, label, false, {
                    fileName: "src/components/Menu/MobileMenu/MobileMenu.js",
                    lineNumber: 27,
                    columnNumber: 11
                }, undefined)),
            !withoutMore && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                className: "MobileMenu__LinkContainerMore",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                    className: "MobileMenu__Link",
                    onClick: ()=>setIsMobileOpen(!isMobileOpen),
                    children: isMobileOpen ? "X" : "More"
                }, void 0, false, {
                    fileName: "src/components/Menu/MobileMenu/MobileMenu.js",
                    lineNumber: 34,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Menu/MobileMenu/MobileMenu.js",
                lineNumber: 33,
                columnNumber: 24
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _mobileMenuAccordionDefault.default), {
                links: menuRest,
                closeMenu: ()=>setIsMobileOpen(!isMobileOpen),
                isMobileOpen: isMobileOpen
            }, void 0, false, {
                fileName: "src/components/Menu/MobileMenu/MobileMenu.js",
                lineNumber: 38,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Menu/MobileMenu/MobileMenu.js",
        lineNumber: 23,
        columnNumber: 10
    }, undefined);
};
_s(MobileMenu, "LiIloRE//64pZUw6JXlDJhnOTqQ=");
_c = MobileMenu;
exports.default = MobileMenu;
var _c;
$RefreshReg$(_c, "MobileMenu");

  $parcel$ReactRefreshHelpers$920d.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"cHIiW","classnames":"jocGM","../../../shared/utils":"3VUNA","./MobileMenuAccordion/MobileMenuAccordion":"41LLk","./MobileMenu.scss":"kbzBo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"41LLk":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$85e7 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$85e7.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _utils = require("../../../../shared/utils");
var _mobileMenuAccordionScss = require("./MobileMenuAccordion.scss");
/**
 * MobileMenu
 */ const MobileMenuAccordion = ({ links , isMobileOpen , closeMenu  })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: (0, _classnamesDefault.default)("MobileMenuAccordion", {
            "is-open": isMobileOpen
        }),
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
            className: "MobileMenuAccordion__Links",
            children: links && links.map(({ route , label , isPrimary  })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                    className: "MobileMenuAccordion__LinkContainer",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                        className: "MobileMenuAccordion__Link",
                        onClick: closeMenu,
                        href: (0, _utils.getRouteWithLocale)(route),
                        children: label
                    }, void 0, false, {
                        fileName: "src/components/Menu/MobileMenu/MobileMenuAccordion/MobileMenuAccordion.js",
                        lineNumber: 24,
                        columnNumber: 15
                    }, undefined)
                }, label, false, {
                    fileName: "src/components/Menu/MobileMenu/MobileMenuAccordion/MobileMenuAccordion.js",
                    lineNumber: 23,
                    columnNumber: 13
                }, undefined))
        }, void 0, false, {
            fileName: "src/components/Menu/MobileMenu/MobileMenuAccordion/MobileMenuAccordion.js",
            lineNumber: 18,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/Menu/MobileMenu/MobileMenuAccordion/MobileMenuAccordion.js",
        lineNumber: 15,
        columnNumber: 10
    }, undefined);
};
_c = MobileMenuAccordion;
exports.default = MobileMenuAccordion;
var _c;
$RefreshReg$(_c, "MobileMenuAccordion");

  $parcel$ReactRefreshHelpers$85e7.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","classnames":"jocGM","../../../../shared/utils":"3VUNA","./MobileMenuAccordion.scss":"6rAnA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"6rAnA":[function() {},{}],"kbzBo":[function() {},{}],"1oIXa":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("Wbeex") + "logo.55e612d1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8BduL":[function() {},{}],"1AYao":[function() {},{}],"hD9zU":[function() {},{}]},["1xC6H","cfJLO"], null, "parcelRequireee92")

//# sourceMappingURL=Layout.9e5d0a80.js.map
