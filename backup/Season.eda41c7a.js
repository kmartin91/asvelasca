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

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"8pFWf":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "28de55a5eda41c7a";
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

},{}],"76dFd":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$479f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$479f.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _get = require("lodash/get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _reactHelmet = require("react-helmet");
var _jsBase64 = require("js-base64");
var _utils = require("../../shared/utils");
var _toggle = require("../Toggle/Toggle");
var _toggleDefault = parcelHelpers.interopDefault(_toggle);
var _ladder = require("../Ladder/Ladder");
var _ladderDefault = parcelHelpers.interopDefault(_ladder);
var _results = require("../Results/Results");
var _resultsDefault = parcelHelpers.interopDefault(_results);
var _seasonScss = require("./Season.scss");
var _s = $RefreshSig$();
const PAGE_TEAM_DETAILS = "https://www.tuttocampo.it/api/1.0/GetTeamDetails.php";
/**
 * Season
 */ const Season = ({ page , name  })=>{
    _s();
    const sourceAxios = (0, _react.useRef)();
    const [data, setData] = (0, _react.useState)({});
    const [error, setError] = (0, _react.useState)(undefined);
    const [selectedYear, setSelectedYear] = (0, _react.useState)((0, _utils.getCurrentYear)());
    const [teamDetails, setTeamDetails] = (0, _react.useState)({});
    const tabs = [
        {
            title: "Ladder",
            content: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _ladderDefault.default), {
                selectedYear: selectedYear
            }, void 0, false, {
                fileName: "src/components/Season/Season.js",
                lineNumber: 29,
                columnNumber: 14
            }, undefined)
        },
        {
            title: "Results",
            content: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _resultsDefault.default), {
                selectedYear: selectedYear
            }, void 0, false, {
                fileName: "src/components/Season/Season.js",
                lineNumber: 32,
                columnNumber: 14
            }, undefined)
        }
    ];
    const getClubInformation = (0, _react.useCallback)((isSubscribed)=>{
        sourceAxios.current = (0, _axiosDefault.default).CancelToken.source();
        const formData = new FormData();
        formData.append("token", (0, _utils.getTutoCampiToken)());
        formData.append("year", selectedYear || (0, _utils.getCurrentYear)());
        try {
            (0, _axiosDefault.default).post(PAGE_TEAM_DETAILS, formData, {
                cancelToken: sourceAxios.current.token
            }).then(({ data: dataAxios  })=>{
                if (isSubscribed) {
                    const decodedData = JSON.parse((0, _jsBase64.Base64).decode(dataAxios));
                    setTeamDetails(decodedData);
                }
            });
        } catch (error) {
            setError(error);
        }
    }, []);
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
                    if (isSubscribed) setData(dataAxios);
                });
            } catch (error) {
                setError(error);
            }
        }
        getData();
        getClubInformation(isSubscribed);
        return ()=>{
            isSubscribed = false;
            if (sourceAxios.current) sourceAxios.current.cancel();
        };
    }, []);
    const { entries ={} , fields ={}  } = data;
    const { background , content  } = (0, _getDefault.default)(data, "entries[0]", []);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Season",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactHelmet.Helmet), {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("title", {
                    children: `.:: A.S. VELASCA ::. ${name.toUpperCase()}`
                }, void 0, false, {
                    fileName: "src/components/Season/Season.js",
                    lineNumber: 96,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Season/Season.js",
                lineNumber: 95,
                columnNumber: 7
            }, undefined),
            background && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDefault.default).Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Season__imageContainer",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: `${(0, _utils.getServerUrl)()}${background.path}`,
                            alt: background.title || "As Velasca",
                            className: "Season__image"
                        }, void 0, false, {
                            fileName: "src/components/Season/Season.js",
                            lineNumber: 100,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Season/Season.js",
                        lineNumber: 99,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Season__overlay"
                    }, void 0, false, {
                        fileName: "src/components/Season/Season.js",
                        lineNumber: 102,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Season/Season.js",
                lineNumber: 98,
                columnNumber: 22
            }, undefined),
            tabs && tabs.length && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Season__content",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                        className: "Season__year",
                        defaultValue: (0, _utils.getCurrentYear)(),
                        onChange: (e)=>setSelectedYear(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                value: "2018-19",
                                children: "2018-19"
                            }, void 0, false, {
                                fileName: "src/components/Season/Season.js",
                                lineNumber: 107,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                value: "2019-20",
                                children: "2019-20"
                            }, void 0, false, {
                                fileName: "src/components/Season/Season.js",
                                lineNumber: 108,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                value: "2020-21",
                                children: "2020-21"
                            }, void 0, false, {
                                fileName: "src/components/Season/Season.js",
                                lineNumber: 109,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                value: "2021-22",
                                children: "2021-22"
                            }, void 0, false, {
                                fileName: "src/components/Season/Season.js",
                                lineNumber: 110,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                value: "2022-23",
                                children: "2022-23"
                            }, void 0, false, {
                                fileName: "src/components/Season/Season.js",
                                lineNumber: 111,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                value: "2023-24",
                                children: "2023-24"
                            }, void 0, false, {
                                fileName: "src/components/Season/Season.js",
                                lineNumber: 112,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Season/Season.js",
                        lineNumber: 106,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _toggleDefault.default), {
                        className: "Season__tabs",
                        tabs: tabs,
                        selectedYear: selectedYear
                    }, void 0, false, {
                        fileName: "src/components/Season/Season.js",
                        lineNumber: 114,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Season/Season.js",
                lineNumber: 105,
                columnNumber: 31
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Season__links",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                    href: "https://tuttocampo.it",
                    className: "Season__link",
                    target: "_blank",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            className: "Season__linkTitle",
                            children: "With courtesy of"
                        }, void 0, false, {
                            fileName: "src/components/Season/Season.js",
                            lineNumber: 119,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: "https://www.tuttocampo.it/Web/Images/title.png",
                            className: "Season__imageTutto",
                            alt: "TuttoCampo"
                        }, void 0, false, {
                            fileName: "src/components/Season/Season.js",
                            lineNumber: 120,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Season/Season.js",
                    lineNumber: 118,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Season/Season.js",
                lineNumber: 117,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Season/Season.js",
        lineNumber: 94,
        columnNumber: 10
    }, undefined);
};
_s(Season, "84j8YlolKMP5Q918gsiV6oq6YVM=");
_c = Season;
exports.default = Season;
var _c;
$RefreshReg$(_c, "Season");

  $parcel$ReactRefreshHelpers$479f.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","axios":"jo6P5","lodash/get":"8UELX","react-helmet":"fcX6K","js-base64":"9GjXb","../../shared/utils":"3VUNA","../Toggle/Toggle":"3yFTt","../Ladder/Ladder":"j3Izm","../Results/Results":"falpC","./Season.scss":"ebWqb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"9GjXb":[function(require,module,exports) {
/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// makecjs:CUT //
parcelHelpers.export(exports, "version", ()=>version);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "atob", ()=>_atob);
parcelHelpers.export(exports, "atobPolyfill", ()=>atobPolyfill);
parcelHelpers.export(exports, "btoa", ()=>_btoa);
parcelHelpers.export(exports, "btoaPolyfill", ()=>btoaPolyfill);
parcelHelpers.export(exports, "fromBase64", ()=>decode);
parcelHelpers.export(exports, "toBase64", ()=>encode);
parcelHelpers.export(exports, "utob", ()=>utob);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "encodeURI", ()=>encodeURI);
parcelHelpers.export(exports, "encodeURL", ()=>encodeURI);
parcelHelpers.export(exports, "btou", ()=>btou);
parcelHelpers.export(exports, "decode", ()=>decode);
parcelHelpers.export(exports, "isValid", ()=>isValid);
parcelHelpers.export(exports, "fromUint8Array", ()=>fromUint8Array);
parcelHelpers.export(exports, "toUint8Array", ()=>toUint8Array);
parcelHelpers.export(exports, "extendString", ()=>extendString);
parcelHelpers.export(exports, "extendUint8Array", ()=>extendUint8Array);
parcelHelpers.export(exports, "extendBuiltins", ()=>extendBuiltins);
// and finally,
parcelHelpers.export(exports, "Base64", ()=>gBase64);
var Buffer = require("buffer").Buffer;
const version = "3.7.2";
/**
 * @deprecated use lowercase `version`.
 */ const VERSION = version;
const _hasatob = typeof atob === "function";
const _hasbtoa = typeof btoa === "function";
const _hasBuffer = typeof Buffer === "function";
const _TD = typeof TextDecoder === "function" ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === "function" ? new TextEncoder() : undefined;
const b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const b64chs = Array.prototype.slice.call(b64ch);
const b64tab = ((a)=>{
    let tab = {};
    a.forEach((c, i)=>tab[c] = i);
    return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it, fn = (x)=>x)=>new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
const _mkUriSafe = (src)=>src.replace(/=/g, "").replace(/[+\/]/g, (m0)=>m0 == "+" ? "-" : "_");
const _tidyB64 = (s)=>s.replace(/[^A-Za-z0-9\+\/]/g, "");
/**
 * polyfill version of `btoa`
 */ const btoaPolyfill = (bin)=>{
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = "";
    const pad = bin.length % 3;
    for(let i = 0; i < bin.length;){
        if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255) throw new TypeError("invalid character found");
        u32 = c0 << 16 | c1 << 8 | c2;
        asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */ const _btoa = _hasbtoa ? (bin)=>btoa(bin) : _hasBuffer ? (bin)=>Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
const _fromUint8Array = _hasBuffer ? (u8a)=>Buffer.from(u8a).toString("base64") : (u8a)=>{
    // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
    const maxargs = 0x1000;
    let strs = [];
    for(let i = 0, l = u8a.length; i < l; i += maxargs)strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
    return _btoa(strs.join(""));
};
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */ const fromUint8Array = (u8a, urlsafe = false)=>urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = (c)=>{
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c : cc < 0x800 ? _fromCC(0xc0 | cc >>> 6) + _fromCC(0x80 | cc & 0x3f) : _fromCC(0xe0 | cc >>> 12 & 0x0f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
    } else {
        var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
        return _fromCC(0xf0 | cc >>> 18 & 0x07) + _fromCC(0x80 | cc >>> 12 & 0x3f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
    }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */ const utob = (u)=>u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer ? (s)=>Buffer.from(s, "utf8").toString("base64") : _TE ? (s)=>_fromUint8Array(_TE.encode(s)) : (s)=>_btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */ const encode = (src, urlsafe = false)=>urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */ const encodeURI = (src)=>encode(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = (cccc)=>{
    switch(cccc.length){
        case 4:
            var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3), offset = cp - 0x10000;
            return _fromCC((offset >>> 10) + 0xD800) + _fromCC((offset & 0x3FF) + 0xDC00);
        case 3:
            return _fromCC((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));
        default:
            return _fromCC((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
    }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */ const btou = (b)=>b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */ const atobPolyfill = (asc)=>{
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, "");
    if (!b64re.test(asc)) throw new TypeError("malformed base64.");
    asc += "==".slice(2 - (asc.length & 3));
    let u24, bin = "", r1, r2;
    for(let i = 0; i < asc.length;){
        u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */ const _atob = _hasatob ? (asc)=>atob(_tidyB64(asc)) : _hasBuffer ? (asc)=>Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
//
const _toUint8Array = _hasBuffer ? (a)=>_U8Afrom(Buffer.from(a, "base64")) : (a)=>_U8Afrom(_atob(a), (c)=>c.charCodeAt(0));
/**
 * converts a Base64 string to a Uint8Array.
 */ const toUint8Array = (a)=>_toUint8Array(_unURI(a));
//
const _decode = _hasBuffer ? (a)=>Buffer.from(a, "base64").toString("utf8") : _TD ? (a)=>_TD.decode(_toUint8Array(a)) : (a)=>btou(_atob(a));
const _unURI = (a)=>_tidyB64(a.replace(/[-_]/g, (m0)=>m0 == "-" ? "+" : "/"));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */ const decode = (src)=>_decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */ const isValid = (src)=>{
    if (typeof src !== "string") return false;
    const s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = (v)=>{
    return {
        value: v,
        enumerable: false,
        writable: true,
        configurable: true
    };
};
/**
 * extend String.prototype with relevant methods
 */ const extendString = function() {
    const _add = (name, body)=>Object.defineProperty(String.prototype, name, _noEnum(body));
    _add("fromBase64", function() {
        return decode(this);
    });
    _add("toBase64", function(urlsafe) {
        return encode(this, urlsafe);
    });
    _add("toBase64URI", function() {
        return encode(this, true);
    });
    _add("toBase64URL", function() {
        return encode(this, true);
    });
    _add("toUint8Array", function() {
        return toUint8Array(this);
    });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */ const extendUint8Array = function() {
    const _add = (name, body)=>Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add("toBase64", function(urlsafe) {
        return fromUint8Array(this, urlsafe);
    });
    _add("toBase64URI", function() {
        return fromUint8Array(this, true);
    });
    _add("toBase64URL", function() {
        return fromUint8Array(this, true);
    });
};
/**
 * extend Builtin prototypes with relevant methods
 */ const extendBuiltins = ()=>{
    extendString();
    extendUint8Array();
};
const gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode: encode,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins
};

},{"buffer":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3yFTt":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1d6c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1d6c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _toggleScss = require("./Toggle.scss");
var _s = $RefreshSig$();
const Toggle = ({ tabs , className , selectedYear  })=>{
    _s();
    const [currentTab, setCurrentTab] = (0, _react.useState)(0);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: (0, _classnamesDefault.default)("Toggle", className),
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Toggle__Header",
                children: tabs && tabs.map(({ title  }, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: (0, _classnamesDefault.default)("Toggle__HeaderButton", {
                            Toggle__HeaderButton_Active: index === currentTab
                        }),
                        onClick: ()=>setCurrentTab(index),
                        children: title
                    }, `${index}-toggleheader`, false, {
                        fileName: "src/components/Toggle/Toggle.js",
                        lineNumber: 14,
                        columnNumber: 20
                    }, undefined))
            }, void 0, false, {
                fileName: "src/components/Toggle/Toggle.js",
                lineNumber: 11,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Toggle__Content",
                children: tabs && tabs.map(({ content  }, index)=>{
                    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: (0, _classnamesDefault.default)("Toggle__ContentChildren", {
                            Toggle__ContentChildre_Show: index === currentTab
                        }),
                        children: content
                    }, `${index}-togglecontent`, false, {
                        fileName: "src/components/Toggle/Toggle.js",
                        lineNumber: 25,
                        columnNumber: 16
                    }, undefined);
                })
            }, void 0, false, {
                fileName: "src/components/Toggle/Toggle.js",
                lineNumber: 21,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Toggle/Toggle.js",
        lineNumber: 10,
        columnNumber: 10
    }, undefined);
};
_s(Toggle, "7u0Gkg0v2ndXEokaGVtyUM5AeKo=");
_c = Toggle;
exports.default = Toggle;
var _c;
$RefreshReg$(_c, "Toggle");

  $parcel$ReactRefreshHelpers$1d6c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","classnames":"jocGM","./Toggle.scss":"1iDMD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"jocGM":[function(require,module,exports) {
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

},{}],"1iDMD":[function() {},{}],"j3Izm":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$e06c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$e06c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _reactHelmet = require("react-helmet");
var _get = require("lodash/get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _jsBase64 = require("js-base64");
var _utils = require("../../shared/utils");
var _ladderScss = require("./Ladder.scss");
var _s = $RefreshSig$();
/**
 * Ladder
 */ const Ladder = ({ selectedYear  })=>{
    _s();
    const sourceAxios = (0, _react.useRef)();
    const [ladderData, setLadderData] = (0, _react.useState)([]);
    const [error, setError] = (0, _react.useState)(undefined);
    const page = "https://www.tuttocampo.it/api/1.0/GetRanking.php";
    const getData = (0, _react.useCallback)((isSubscribed)=>{
        sourceAxios.current = (0, _axiosDefault.default).CancelToken.source();
        const formData = new FormData();
        formData.append("token", (0, _utils.getTutoCampiToken)());
        formData.append("year", selectedYear || (0, _utils.getCurrentYear)());
        try {
            (0, _axiosDefault.default).post(page, formData, {
                cancelToken: sourceAxios.current.token
            }).then(({ data: dataAxios  })=>{
                if (isSubscribed) {
                    const decodedData = JSON.parse((0, _jsBase64.Base64).decode(dataAxios));
                    setLadderData(decodedData);
                }
            });
        } catch (error) {
            setError(error);
        }
    });
    (0, _react.useEffect)(()=>{
        let isSubscribed = true;
        getData(isSubscribed);
        return ()=>{
            isSubscribed = false;
            if (sourceAxios.current) sourceAxios.current.cancel();
        };
    }, [
        selectedYear
    ]);
    const sortedLadderData = ladderData ? ladderData.sort((a, b)=>{
        if (parseInt((0, _getDefault.default)(a, "p"), 10) !== parseInt((0, _getDefault.default)(b, "p"), 10)) return parseInt((0, _getDefault.default)(b, "p"), 10) - parseInt((0, _getDefault.default)(a, "p"), 10);
        return parseInt((0, _getDefault.default)(b, "gd"), 10) - parseInt((0, _getDefault.default)(a, "gd"), 10);
    }) : [];
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Ladder",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Ladder__header Ladder__row Ladder__stylised",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Ladder__teamRank Ladder__item Ladder__item_borderLess",
                        children: "Pos"
                    }, void 0, false, {
                        fileName: "src/components/Ladder/Ladder.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Ladder__teamName Ladder__item",
                        children: "Club"
                    }, void 0, false, {
                        fileName: "src/components/Ladder/Ladder.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Ladder__win Ladder__item",
                        children: "W"
                    }, void 0, false, {
                        fileName: "src/components/Ladder/Ladder.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Ladder__draw Ladder__item",
                        children: "D"
                    }, void 0, false, {
                        fileName: "src/components/Ladder/Ladder.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Ladder__lose Ladder__item",
                        children: "L"
                    }, void 0, false, {
                        fileName: "src/components/Ladder/Ladder.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Ladder__gs Ladder__item",
                        children: "Scored"
                    }, void 0, false, {
                        fileName: "src/components/Ladder/Ladder.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Ladder__gt Ladder__item",
                        children: "Taken"
                    }, void 0, false, {
                        fileName: "src/components/Ladder/Ladder.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Ladder__gd Ladder__item",
                        children: "Diff"
                    }, void 0, false, {
                        fileName: "src/components/Ladder/Ladder.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Ladder__points Ladder__item",
                        children: "Points"
                    }, void 0, false, {
                        fileName: "src/components/Ladder/Ladder.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Ladder/Ladder.js",
                lineNumber: 58,
                columnNumber: 7
            }, undefined),
            sortedLadderData.map(({ it: teamId , t: teamName , p: points , m: playedMatchs , w: win , l: lose , d: draw , gs: goalScored , ga: goalTaken , gd: goalDifference  }, index)=>{
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: (0, _classnamesDefault.default)("Ladder__row", {
                        Ladder__row_velasca: teamName === "Velasca"
                    }),
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Ladder__teamRank Ladder__item Ladder__item_borderLess Ladder__stylised",
                            children: index + 1
                        }, void 0, false, {
                            fileName: "src/components/Ladder/Ladder.js",
                            lineNumber: 85,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Ladder__teamName Ladder__stylised Ladder__item",
                            children: teamName
                        }, void 0, false, {
                            fileName: "src/components/Ladder/Ladder.js",
                            lineNumber: 88,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Ladder__win Ladder__item",
                            children: win
                        }, void 0, false, {
                            fileName: "src/components/Ladder/Ladder.js",
                            lineNumber: 89,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Ladder__draw Ladder__item",
                            children: draw
                        }, void 0, false, {
                            fileName: "src/components/Ladder/Ladder.js",
                            lineNumber: 90,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Ladder__lose Ladder__item",
                            children: lose
                        }, void 0, false, {
                            fileName: "src/components/Ladder/Ladder.js",
                            lineNumber: 91,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Ladder__gs Ladder__item",
                            children: goalScored
                        }, void 0, false, {
                            fileName: "src/components/Ladder/Ladder.js",
                            lineNumber: 92,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Ladder__gt Ladder__item",
                            children: goalTaken
                        }, void 0, false, {
                            fileName: "src/components/Ladder/Ladder.js",
                            lineNumber: 93,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Ladder__gd Ladder__item",
                            children: goalDifference
                        }, void 0, false, {
                            fileName: "src/components/Ladder/Ladder.js",
                            lineNumber: 94,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Ladder__points Ladder__item Ladder__item_alt",
                            children: points
                        }, void 0, false, {
                            fileName: "src/components/Ladder/Ladder.js",
                            lineNumber: 95,
                            columnNumber: 15
                        }, undefined)
                    ]
                }, teamId, true, {
                    fileName: "src/components/Ladder/Ladder.js",
                    lineNumber: 82,
                    columnNumber: 14
                }, undefined);
            })
        ]
    }, void 0, true, {
        fileName: "src/components/Ladder/Ladder.js",
        lineNumber: 57,
        columnNumber: 10
    }, undefined);
};
_s(Ladder, "BfZKDybKITdUiiROPFp3EZY6+b8=");
_c = Ladder;
exports.default = Ladder;
var _c;
$RefreshReg$(_c, "Ladder");

  $parcel$ReactRefreshHelpers$e06c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","axios":"jo6P5","classnames":"jocGM","react-helmet":"fcX6K","lodash/get":"8UELX","js-base64":"9GjXb","../../shared/utils":"3VUNA","./Ladder.scss":"bVsdp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"bVsdp":[function() {},{}],"falpC":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d1ac = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d1ac.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _dayjs = require("dayjs");
var _dayjsDefault = parcelHelpers.interopDefault(_dayjs);
var _zhCn = require("dayjs/locale/zh-cn");
var _zhCnDefault = parcelHelpers.interopDefault(_zhCn);
var _it = require("dayjs/locale/it");
var _itDefault = parcelHelpers.interopDefault(_it);
var _en = require("dayjs/locale/en");
var _enDefault = parcelHelpers.interopDefault(_en);
var _fr = require("dayjs/locale/fr");
var _frDefault = parcelHelpers.interopDefault(_fr);
var _localizedFormat = require("dayjs/plugin/localizedFormat");
var _localizedFormatDefault = parcelHelpers.interopDefault(_localizedFormat);
var _customParseFormat = require("dayjs/plugin/customParseFormat");
var _customParseFormatDefault = parcelHelpers.interopDefault(_customParseFormat);
var _get = require("lodash/get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _jsBase64 = require("js-base64");
var _utils = require("../../shared/utils");
var _resultsScss = require("./Results.scss");
var _s = $RefreshSig$();
(0, _dayjsDefault.default).extend((0, _localizedFormatDefault.default));
(0, _dayjsDefault.default).extend((0, _customParseFormatDefault.default));
// dayjs.locale(window.LOCALE_VELASCA);
/**
 * Results
 */ const Results = ({ selectedYear  })=>{
    _s();
    const sourceAxios = (0, _react.useRef)();
    const [resultData, setResultData] = (0, _react.useState)([]);
    const [error, setError] = (0, _react.useState)(undefined);
    const page = "https://www.tuttocampo.it/api/1.0/GetResults.php";
    const getData = (0, _react.useCallback)((isSubscribed)=>{
        sourceAxios.current = (0, _axiosDefault.default).CancelToken.source();
        const formData = new FormData();
        formData.append("token", (0, _utils.getTutoCampiToken)());
        formData.append("all", "0");
        formData.append("year", selectedYear || (0, _utils.getCurrentYear)());
        try {
            (0, _axiosDefault.default).post(page, formData, {
                cancelToken: sourceAxios.current.token
            }).then(({ data: dataAxios  })=>{
                const decodedData = JSON.parse((0, _jsBase64.Base64).decode(dataAxios));
                setResultData(decodedData);
            });
        } catch (error) {
            setError(error);
        }
    });
    (0, _react.useEffect)(()=>{
        let isSubscribed = true;
        getData(isSubscribed);
        return ()=>{
            isSubscribed = false;
            if (sourceAxios.current) sourceAxios.current.cancel();
        };
    }, [
        selectedYear
    ]);
    const groupedResultatData = resultData.reduce((acc, resultat)=>{
        const date = (0, _dayjsDefault.default)(resultat.d, "DD-MM-YY HH:mm");
        const monthYearKey = date.format("MM-YYYY");
        return {
            ...acc,
            [monthYearKey]: [
                ...acc[monthYearKey] || [],
                resultat
            ]
        };
    }, {});
    const sortedData = Object.keys(groupedResultatData).sort((a, b)=>(0, _dayjsDefault.default)(a, "MM-YYYY").diff((0, _dayjsDefault.default)(b, "MM-YYYY")));
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Results",
        children: groupedResultatData && Object.keys(groupedResultatData).length >= 1 && Object.keys(groupedResultatData).map((key)=>{
            const matches = (0, _getDefault.default)(groupedResultatData, key, []);
            return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Results__month",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Results__month__title",
                        children: (0, _dayjsDefault.default)(key, "MM-YYYY").locale(window.LOCALE_VELASCA).format("MMMM YYYY")
                    }, void 0, false, {
                        fileName: "src/components/Results/Results.js",
                        lineNumber: 73,
                        columnNumber: 15
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Results__month__matches",
                        children: matches.map((match)=>{
                            const { ht: homeTeam , at: awayTeam , hg: homeGoal , ag: awayGoal , d: date , iht , iat  } = match;
                            return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "Results__row",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "Results__row__date",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "Results__row__date__container",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    className: "Results__row__date__day",
                                                    children: (0, _dayjsDefault.default)(date, "DD-MM-YY HH:mm").locale(window.LOCALE_VELASCA).format("DD MMM")
                                                }, void 0, false, {
                                                    fileName: "src/components/Results/Results.js",
                                                    lineNumber: 90,
                                                    columnNumber: 27
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    className: "Results__row__date__time",
                                                    children: (0, _dayjsDefault.default)(date, "DD-MM-YY HH:mm").locale(window.LOCALE_VELASCA).format("HH:mm")
                                                }, void 0, false, {
                                                    fileName: "src/components/Results/Results.js",
                                                    lineNumber: 93,
                                                    columnNumber: 27
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/Results/Results.js",
                                            lineNumber: 89,
                                            columnNumber: 25
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Results/Results.js",
                                        lineNumber: 88,
                                        columnNumber: 23
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "Results__row__result",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "Results__row__team",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                        className: "Results__row__teamName",
                                                        children: homeTeam
                                                    }, void 0, false, {
                                                        fileName: "src/components/Results/Results.js",
                                                        lineNumber: 100,
                                                        columnNumber: 27
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                        className: "Results__row__teamName__abv",
                                                        children: homeTeam.slice(0, 3)
                                                    }, void 0, false, {
                                                        fileName: "src/components/Results/Results.js",
                                                        lineNumber: 101,
                                                        columnNumber: 27
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                        src: `https://content-s3.tuttocampo.it/Teams/40/${iht}.png?v=1`,
                                                        alt: homeTeam
                                                    }, void 0, false, {
                                                        fileName: "src/components/Results/Results.js",
                                                        lineNumber: 104,
                                                        columnNumber: 27
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Results/Results.js",
                                                lineNumber: 99,
                                                columnNumber: 25
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "Results__row__score",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        className: (0, _classnamesDefault.default)("Results__scoreItem", {
                                                            Results__scoreItem_win: homeGoal > awayGoal,
                                                            Results__scoreItem_draw: !homeGoal || homeGoal === awayGoal,
                                                            Results__scoreItem_lose: homeGoal < awayGoal
                                                        }),
                                                        children: homeGoal || "X"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Results/Results.js",
                                                        lineNumber: 107,
                                                        columnNumber: 27
                                                    }, undefined),
                                                    "-",
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        className: (0, _classnamesDefault.default)("Results__scoreItem", {
                                                            Results__scoreItem_win: homeGoal < awayGoal,
                                                            Results__scoreItem_draw: !awayGoal || homeGoal === awayGoal,
                                                            Results__scoreItem_lose: homeGoal > awayGoal
                                                        }),
                                                        children: awayGoal || "X"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Results/Results.js",
                                                        lineNumber: 115,
                                                        columnNumber: 27
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Results/Results.js",
                                                lineNumber: 106,
                                                columnNumber: 25
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "Results__row__team Results__row__team_away",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                        src: `https://content-s3.tuttocampo.it/Teams/40/${iat}.png?v=1`,
                                                        alt: awayTeam
                                                    }, void 0, false, {
                                                        fileName: "src/components/Results/Results.js",
                                                        lineNumber: 124,
                                                        columnNumber: 27
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                        className: "Results__row__teamName",
                                                        children: awayTeam
                                                    }, void 0, false, {
                                                        fileName: "src/components/Results/Results.js",
                                                        lineNumber: 125,
                                                        columnNumber: 27
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                        className: "Results__row__teamName__abv",
                                                        children: awayTeam.slice(0, 3)
                                                    }, void 0, false, {
                                                        fileName: "src/components/Results/Results.js",
                                                        lineNumber: 126,
                                                        columnNumber: 27
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Results/Results.js",
                                                lineNumber: 123,
                                                columnNumber: 25
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Results/Results.js",
                                        lineNumber: 98,
                                        columnNumber: 23
                                    }, undefined)
                                ]
                            }, `${homeTeam}-vs-${awayTeam}`, true, {
                                fileName: "src/components/Results/Results.js",
                                lineNumber: 87,
                                columnNumber: 20
                            }, undefined);
                        })
                    }, void 0, false, {
                        fileName: "src/components/Results/Results.js",
                        lineNumber: 76,
                        columnNumber: 15
                    }, undefined)
                ]
            }, key, true, {
                fileName: "src/components/Results/Results.js",
                lineNumber: 72,
                columnNumber: 14
            }, undefined);
        })
    }, void 0, false, {
        fileName: "src/components/Results/Results.js",
        lineNumber: 69,
        columnNumber: 10
    }, undefined);
};
_s(Results, "e3vfi5bcTLOytvl8lPI4sDO1wQc=");
_c = Results;
exports.default = Results;
var _c;
$RefreshReg$(_c, "Results");

  $parcel$ReactRefreshHelpers$d1ac.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","axios":"jo6P5","dayjs":"NJZFB","dayjs/locale/zh-cn":"5SYdV","dayjs/locale/it":"eKb2B","dayjs/locale/en":"jjEh4","dayjs/locale/fr":"5z8o8","dayjs/plugin/localizedFormat":"kXF87","dayjs/plugin/customParseFormat":"dmrpe","lodash/get":"8UELX","classnames":"jocGM","js-base64":"9GjXb","../../shared/utils":"3VUNA","./Results.scss":"fUo3x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"NJZFB":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: c,
                y: h,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: f
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = function(t) {
        return t instanceof b;
    }, S = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, w = function(t, e) {
        if (p(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new b(n);
    }, O = v;
    O.l = S, O.i = p, O.w = function(t, e) {
        return w(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var b = function() {
        function M(t) {
            this.$L = S(t.locale, null, !0), this.parse(t);
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (O.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.$x = t.x || {}, this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return O;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = w(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return w(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < w(t);
        }, m.$g = function(t, e, n) {
            return O.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!O.u(e) || e, f = O.p(t), l = function(t, e) {
                var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(f){
                case h:
                    return r ? l(1, 0) : l(31, 11);
                case c:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = O.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === c || o === h) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[O.p(t)]();
        }, m.add = function(r, f) {
            var d, l = this;
            r = Number(r);
            var $ = O.p(f), y = function(t) {
                var e = w(l);
                return O.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === c) return this.set(c, this.$M + r);
            if ($ === h) return this.set(h, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return O.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = O.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, d = function(t) {
                return O.s(s % 12 || 12, t, "0");
            }, $ = f || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            };
            return r.replace(y, function(t, r) {
                return r || function(t) {
                    switch(t){
                        case "YY":
                            return String(e.$y).slice(-2);
                        case "YYYY":
                            return O.s(e.$y, 4, "0");
                        case "M":
                            return a + 1;
                        case "MM":
                            return O.s(a + 1, 2, "0");
                        case "MMM":
                            return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                            return h(c, a);
                        case "D":
                            return e.$D;
                        case "DD":
                            return O.s(e.$D, 2, "0");
                        case "d":
                            return String(e.$W);
                        case "dd":
                            return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                            return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                            return o[e.$W];
                        case "H":
                            return String(s);
                        case "HH":
                            return O.s(s, 2, "0");
                        case "h":
                            return d(1);
                        case "hh":
                            return d(2);
                        case "a":
                            return $(s, u, !0);
                        case "A":
                            return $(s, u, !1);
                        case "m":
                            return String(u);
                        case "mm":
                            return O.s(u, 2, "0");
                        case "s":
                            return String(e.$s);
                        case "ss":
                            return O.s(e.$s, 2, "0");
                        case "SSS":
                            return O.s(e.$ms, 3, "0");
                        case "Z":
                            return i;
                    }
                    return null;
                }(t) || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = this, M = O.p(d), m = w(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
                return O.m(y, m);
            };
            switch(M){
                case h:
                    $ = D() / 12;
                    break;
                case c:
                    $ = D();
                    break;
                case f:
                    $ = D() / 3;
                    break;
                case o:
                    $ = (g - v) / 6048e5;
                    break;
                case a:
                    $ = (g - v) / 864e5;
                    break;
                case u:
                    $ = g / n;
                    break;
                case s:
                    $ = g / e;
                    break;
                case i:
                    $ = g / t;
                    break;
                default:
                    $ = g;
            }
            return l ? $ : O.a($);
        }, m.daysInMonth = function() {
            return this.endOf(c).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = S(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return O.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), _ = b.prototype;
    return w.prototype = _, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            c
        ],
        [
            "$y",
            h
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        _[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), w.extend = function(t, e) {
        return t.$i || (t(e, b, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t) {
        return w(1e3 * t);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
});

},{}],"5SYdV":[function(require,module,exports) {
!function(e, _) {
    module.exports = _(require("dayjs"));
}(this, function(e) {
    "use strict";
    function _(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var t = _(e), d = {
        name: "zh-cn",
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        ordinal: function(e, _) {
            return "W" === _ ? e + "周" : e + "日";
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日Ah点mm分",
            LLLL: "YYYY年M月D日ddddAh点mm分",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
        },
        relativeTime: {
            future: "%s内",
            past: "%s前",
            s: "几秒",
            m: "1 分钟",
            mm: "%d 分钟",
            h: "1 小时",
            hh: "%d 小时",
            d: "1 天",
            dd: "%d 天",
            M: "1 个月",
            MM: "%d 个月",
            y: "1 年",
            yy: "%d 年"
        },
        meridiem: function(e, _) {
            var t = 100 * e + _;
            return t < 600 ? "凌晨" : t < 900 ? "早上" : t < 1100 ? "上午" : t < 1300 ? "中午" : t < 1800 ? "下午" : "晚上";
        }
    };
    return t.default.locale(d, null, !0), d;
});

},{"dayjs":"NJZFB"}],"eKb2B":[function(require,module,exports) {
!function(e, o) {
    module.exports = o(require("dayjs"));
}(this, function(e) {
    "use strict";
    function o(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var t = o(e), n = {
        name: "it",
        weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        weekStart: 1,
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        relativeTime: {
            future: "tra %s",
            past: "%s fa",
            s: "qualche secondo",
            m: "un minuto",
            mm: "%d minuti",
            h: "un' ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        ordinal: function(e) {
            return e + "\xba";
        }
    };
    return t.default.locale(n, null, !0), n;
});

},{"dayjs":"NJZFB"}],"jjEh4":[function(require,module,exports) {
!function(e, n) {
    module.exports = n();
}(this, function() {
    "use strict";
    return {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(e) {
            var n = [
                "th",
                "st",
                "nd",
                "rd"
            ], t = e % 100;
            return "[" + e + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
        }
    };
});

},{}],"5z8o8":[function(require,module,exports) {
!function(e, n) {
    module.exports = n(require("dayjs"));
}(this, function(e) {
    "use strict";
    function n(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var t = n(e), i = {
        name: "fr",
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
        monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
        weekStart: 1,
        yearStart: 4,
        formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinal: function(e) {
            return "" + e + (1 === e ? "er" : "");
        }
    };
    return t.default.locale(i, null, !0), i;
});

},{"dayjs":"NJZFB"}],"kXF87":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    var e = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    return function(t, o, n) {
        var r = o.prototype, i = r.format;
        n.en.formats = e, r.format = function(t) {
            void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
            var o = this.$locale().formats, n = function(t, o) {
                return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, n, r) {
                    var i = r && r.toUpperCase();
                    return n || o[r] || e[r] || o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, o) {
                        return t || o.slice(1);
                    });
                });
            }(t, void 0 === o ? {} : o);
            return i.call(this, n);
        };
    };
});

},{}],"dmrpe":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    var e = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, r = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, o = {}, s = function(e) {
        return (e = +e) + (e > 68 ? 1900 : 2e3);
    };
    var a = function(e) {
        return function(t) {
            this[e] = +t;
        };
    }, f = [
        /[+-]\d\d:?(\d\d)?|Z/,
        function(e) {
            (this.zone || (this.zone = {})).offset = function(e) {
                if (!e) return 0;
                if ("Z" === e) return 0;
                var t = e.match(/([+-]|\d\d)/g), n = 60 * t[1] + (+t[2] || 0);
                return 0 === n ? 0 : "+" === t[0] ? -n : n;
            }(e);
        }
    ], h = function(e) {
        var t = o[e];
        return t && (t.indexOf ? t : t.s.concat(t.f));
    }, u = function(e, t) {
        var n, r = o.meridiem;
        if (r) {
            for(var i = 1; i <= 24; i += 1)if (e.indexOf(r(i, 0, t)) > -1) {
                n = i > 12;
                break;
            }
        } else n = e === (t ? "pm" : "PM");
        return n;
    }, d = {
        A: [
            i,
            function(e) {
                this.afternoon = u(e, !1);
            }
        ],
        a: [
            i,
            function(e) {
                this.afternoon = u(e, !0);
            }
        ],
        S: [
            /\d/,
            function(e) {
                this.milliseconds = 100 * +e;
            }
        ],
        SS: [
            n,
            function(e) {
                this.milliseconds = 10 * +e;
            }
        ],
        SSS: [
            /\d{3}/,
            function(e) {
                this.milliseconds = +e;
            }
        ],
        s: [
            r,
            a("seconds")
        ],
        ss: [
            r,
            a("seconds")
        ],
        m: [
            r,
            a("minutes")
        ],
        mm: [
            r,
            a("minutes")
        ],
        H: [
            r,
            a("hours")
        ],
        h: [
            r,
            a("hours")
        ],
        HH: [
            r,
            a("hours")
        ],
        hh: [
            r,
            a("hours")
        ],
        D: [
            r,
            a("day")
        ],
        DD: [
            n,
            a("day")
        ],
        Do: [
            i,
            function(e) {
                var t = o.ordinal, n = e.match(/\d+/);
                if (this.day = n[0], t) for(var r = 1; r <= 31; r += 1)t(r).replace(/\[|\]/g, "") === e && (this.day = r);
            }
        ],
        M: [
            r,
            a("month")
        ],
        MM: [
            n,
            a("month")
        ],
        MMM: [
            i,
            function(e) {
                var t = h("months"), n = (h("monthsShort") || t.map(function(e) {
                    return e.slice(0, 3);
                })).indexOf(e) + 1;
                if (n < 1) throw new Error;
                this.month = n % 12 || n;
            }
        ],
        MMMM: [
            i,
            function(e) {
                var t = h("months").indexOf(e) + 1;
                if (t < 1) throw new Error;
                this.month = t % 12 || t;
            }
        ],
        Y: [
            /[+-]?\d+/,
            a("year")
        ],
        YY: [
            n,
            function(e) {
                this.year = s(e);
            }
        ],
        YYYY: [
            /\d{4}/,
            a("year")
        ],
        Z: f,
        ZZ: f
    };
    function c(n) {
        var r, i;
        r = n, i = o && o.formats;
        for(var s = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, n, r) {
            var o = r && r.toUpperCase();
            return n || i[r] || e[r] || i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, n) {
                return t || n.slice(1);
            });
        })).match(t), a = s.length, f = 0; f < a; f += 1){
            var h = s[f], u = d[h], c = u && u[0], l = u && u[1];
            s[f] = l ? {
                regex: c,
                parser: l
            } : h.replace(/^\[|\]$/g, "");
        }
        return function(e) {
            for(var t = {}, n = 0, r = 0; n < a; n += 1){
                var i = s[n];
                if ("string" == typeof i) r += i.length;
                else {
                    var o = i.regex, f = i.parser, h = e.slice(r), u = o.exec(h)[0];
                    f.call(t, u), e = e.replace(u, "");
                }
            }
            return function(e) {
                var t = e.afternoon;
                if (void 0 !== t) {
                    var n = e.hours;
                    t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0), delete e.afternoon;
                }
            }(t), t;
        };
    }
    return function(e, t, n) {
        n.p.customParseFormat = !0, e && e.parseTwoDigitYear && (s = e.parseTwoDigitYear);
        var r = t.prototype, i = r.parse;
        r.parse = function(e) {
            var t = e.date, r = e.utc, s = e.args;
            this.$u = r;
            var a = s[1];
            if ("string" == typeof a) {
                var f = !0 === s[2], h = !0 === s[3], u = f || h, d = s[2];
                h && (d = s[2]), o = this.$locale(), !f && d && (o = n.Ls[d]), this.$d = function(e, t, n) {
                    try {
                        if ([
                            "x",
                            "X"
                        ].indexOf(t) > -1) return new Date(("X" === t ? 1e3 : 1) * e);
                        var r = c(t)(e), i = r.year, o = r.month, s = r.day, a = r.hours, f = r.minutes, h = r.seconds, u = r.milliseconds, d = r.zone, l = new Date, m = s || (i || o ? 1 : l.getDate()), M = i || l.getFullYear(), Y = 0;
                        i && !o || (Y = o > 0 ? o - 1 : l.getMonth());
                        var p = a || 0, v = f || 0, D = h || 0, g = u || 0;
                        return d ? new Date(Date.UTC(M, Y, m, p, v, D, g + 60 * d.offset * 1e3)) : n ? new Date(Date.UTC(M, Y, m, p, v, D, g)) : new Date(M, Y, m, p, v, D, g);
                    } catch (e1) {
                        return new Date("");
                    }
                }(t, a, r), this.init(), d && !0 !== d && (this.$L = this.locale(d).$L), u && t != this.format(a) && (this.$d = new Date("")), o = {};
            } else if (a instanceof Array) for(var l = a.length, m = 1; m <= l; m += 1){
                s[1] = a[m - 1];
                var M = n.apply(this, s);
                if (M.isValid()) {
                    this.$d = M.$d, this.$L = M.$L, this.init();
                    break;
                }
                m === l && (this.$d = new Date(""));
            }
            else i.call(this, e);
        };
    };
});

},{}],"fUo3x":[function() {},{}],"ebWqb":[function() {},{}]},["1xC6H","8pFWf"], null, "parcelRequireee92")

//# sourceMappingURL=Season.eda41c7a.js.map
