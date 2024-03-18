/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "reactPlayerWistia";
exports.ids = ["reactPlayerWistia"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-player/lib/players/Wistia.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Wistia.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Wistia_exports = {};\n__export(Wistia_exports, {\n  default: () => Wistia\n});\nmodule.exports = __toCommonJS(Wistia_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"react\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(ssr)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(ssr)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://fast.wistia.com/assets/external/E-v1.js\";\nconst SDK_GLOBAL = \"Wistia\";\nconst PLAYER_ID_PREFIX = \"wistia-player-\";\nclass Wistia extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"playerID\", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);\n    // Proxy methods to prevent listener leaks\n    __publicField(this, \"onPlay\", (...args) => this.props.onPlay(...args));\n    __publicField(this, \"onPause\", (...args) => this.props.onPause(...args));\n    __publicField(this, \"onSeek\", (...args) => this.props.onSeek(...args));\n    __publicField(this, \"onEnded\", (...args) => this.props.onEnded(...args));\n    __publicField(this, \"onPlaybackRateChange\", (...args) => this.props.onPlaybackRateChange(...args));\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"mute\");\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"unmute\");\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url) {\n    const { playing, muted, controls, onReady, config, onError } = this.props;\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Wistia2) => {\n      if (config.customControls) {\n        config.customControls.forEach((control) => Wistia2.defineControl(control));\n      }\n      window._wq = window._wq || [];\n      window._wq.push({\n        id: this.playerID,\n        options: {\n          autoPlay: playing,\n          silentAutoPlay: \"allow\",\n          muted,\n          controlsVisibleOnLoad: controls,\n          fullscreenButton: controls,\n          playbar: controls,\n          playbackRateControl: controls,\n          qualityControl: controls,\n          volumeControl: controls,\n          settingsControl: controls,\n          smallPlayButton: controls,\n          ...config.options\n        },\n        onReady: (player) => {\n          this.player = player;\n          this.unbind();\n          this.player.bind(\"play\", this.onPlay);\n          this.player.bind(\"pause\", this.onPause);\n          this.player.bind(\"seek\", this.onSeek);\n          this.player.bind(\"end\", this.onEnded);\n          this.player.bind(\"playbackratechange\", this.onPlaybackRateChange);\n          onReady();\n        }\n      });\n    }, onError);\n  }\n  unbind() {\n    this.player.unbind(\"play\", this.onPlay);\n    this.player.unbind(\"pause\", this.onPause);\n    this.player.unbind(\"seek\", this.onSeek);\n    this.player.unbind(\"end\", this.onEnded);\n    this.player.unbind(\"playbackratechange\", this.onPlaybackRateChange);\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n    this.unbind();\n    this.callPlayer(\"remove\");\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"time\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"volume\", fraction);\n  }\n  setPlaybackRate(rate) {\n    this.callPlayer(\"playbackRate\", rate);\n  }\n  getDuration() {\n    return this.callPlayer(\"duration\");\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"time\");\n  }\n  getSecondsLoaded() {\n    return null;\n  }\n  render() {\n    const { url } = this.props;\n    const videoID = url && url.match(import_patterns.MATCH_URL_WISTIA)[1];\n    const className = `wistia_embed wistia_async_${videoID}`;\n    const style = {\n      width: \"100%\",\n      height: \"100%\"\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\"div\", { id: this.playerID, key: videoID, className, style });\n  }\n}\n__publicField(Wistia, \"displayName\", \"Wistia\");\n__publicField(Wistia, \"canPlay\", import_patterns.canPlay.wistia);\n__publicField(Wistia, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1dpc3RpYS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSw4QkFBOEI7QUFDdkc7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLG9CQUFPO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFVO0FBQ3JDLHNCQUFzQixtQkFBTyxDQUFDLHNFQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGlCQUFpQixFQUFFLGlDQUFpQztBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQXFEO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsbURBQW1EO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pa25vdy1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvV2lzdGlhLmpzP2UzYTAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIFdpc3RpYV9leHBvcnRzID0ge307XG5fX2V4cG9ydChXaXN0aWFfZXhwb3J0cywge1xuICBkZWZhdWx0OiAoKSA9PiBXaXN0aWFcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoV2lzdGlhX2V4cG9ydHMpO1xudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBpbXBvcnRfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgaW1wb3J0X3BhdHRlcm5zID0gcmVxdWlyZShcIi4uL3BhdHRlcm5zXCIpO1xuY29uc3QgU0RLX1VSTCA9IFwiaHR0cHM6Ly9mYXN0Lndpc3RpYS5jb20vYXNzZXRzL2V4dGVybmFsL0UtdjEuanNcIjtcbmNvbnN0IFNES19HTE9CQUwgPSBcIldpc3RpYVwiO1xuY29uc3QgUExBWUVSX0lEX1BSRUZJWCA9IFwid2lzdGlhLXBsYXllci1cIjtcbmNsYXNzIFdpc3RpYSBleHRlbmRzIGltcG9ydF9yZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJjYWxsUGxheWVyXCIsIGltcG9ydF91dGlscy5jYWxsUGxheWVyKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicGxheWVySURcIiwgdGhpcy5wcm9wcy5jb25maWcucGxheWVySWQgfHwgYCR7UExBWUVSX0lEX1BSRUZJWH0keygwLCBpbXBvcnRfdXRpbHMucmFuZG9tU3RyaW5nKSgpfWApO1xuICAgIC8vIFByb3h5IG1ldGhvZHMgdG8gcHJldmVudCBsaXN0ZW5lciBsZWFrc1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblBsYXlcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25QbGF5KC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25QYXVzZVwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vblBhdXNlKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25TZWVrXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uU2VlayguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uRW5kZWRcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25FbmRlZCguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uUGxheWJhY2tSYXRlQ2hhbmdlXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoXCJtdXRlXCIpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ1bm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKFwidW5tdXRlXCIpO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gIH1cbiAgbG9hZCh1cmwpIHtcbiAgICBjb25zdCB7IHBsYXlpbmcsIG11dGVkLCBjb250cm9scywgb25SZWFkeSwgY29uZmlnLCBvbkVycm9yIH0gPSB0aGlzLnByb3BzO1xuICAgICgwLCBpbXBvcnRfdXRpbHMuZ2V0U0RLKShTREtfVVJMLCBTREtfR0xPQkFMKS50aGVuKChXaXN0aWEyKSA9PiB7XG4gICAgICBpZiAoY29uZmlnLmN1c3RvbUNvbnRyb2xzKSB7XG4gICAgICAgIGNvbmZpZy5jdXN0b21Db250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiBXaXN0aWEyLmRlZmluZUNvbnRyb2woY29udHJvbCkpO1xuICAgICAgfVxuICAgICAgd2luZG93Ll93cSA9IHdpbmRvdy5fd3EgfHwgW107XG4gICAgICB3aW5kb3cuX3dxLnB1c2goe1xuICAgICAgICBpZDogdGhpcy5wbGF5ZXJJRCxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGF1dG9QbGF5OiBwbGF5aW5nLFxuICAgICAgICAgIHNpbGVudEF1dG9QbGF5OiBcImFsbG93XCIsXG4gICAgICAgICAgbXV0ZWQsXG4gICAgICAgICAgY29udHJvbHNWaXNpYmxlT25Mb2FkOiBjb250cm9scyxcbiAgICAgICAgICBmdWxsc2NyZWVuQnV0dG9uOiBjb250cm9scyxcbiAgICAgICAgICBwbGF5YmFyOiBjb250cm9scyxcbiAgICAgICAgICBwbGF5YmFja1JhdGVDb250cm9sOiBjb250cm9scyxcbiAgICAgICAgICBxdWFsaXR5Q29udHJvbDogY29udHJvbHMsXG4gICAgICAgICAgdm9sdW1lQ29udHJvbDogY29udHJvbHMsXG4gICAgICAgICAgc2V0dGluZ3NDb250cm9sOiBjb250cm9scyxcbiAgICAgICAgICBzbWFsbFBsYXlCdXR0b246IGNvbnRyb2xzLFxuICAgICAgICAgIC4uLmNvbmZpZy5vcHRpb25zXG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHk6IChwbGF5ZXIpID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICAgIHRoaXMucGxheWVyLmJpbmQoXCJwbGF5XCIsIHRoaXMub25QbGF5KTtcbiAgICAgICAgICB0aGlzLnBsYXllci5iaW5kKFwicGF1c2VcIiwgdGhpcy5vblBhdXNlKTtcbiAgICAgICAgICB0aGlzLnBsYXllci5iaW5kKFwic2Vla1wiLCB0aGlzLm9uU2Vlayk7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuYmluZChcImVuZFwiLCB0aGlzLm9uRW5kZWQpO1xuICAgICAgICAgIHRoaXMucGxheWVyLmJpbmQoXCJwbGF5YmFja3JhdGVjaGFuZ2VcIiwgdGhpcy5vblBsYXliYWNrUmF0ZUNoYW5nZSk7XG4gICAgICAgICAgb25SZWFkeSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBvbkVycm9yKTtcbiAgfVxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5wbGF5ZXIudW5iaW5kKFwicGxheVwiLCB0aGlzLm9uUGxheSk7XG4gICAgdGhpcy5wbGF5ZXIudW5iaW5kKFwicGF1c2VcIiwgdGhpcy5vblBhdXNlKTtcbiAgICB0aGlzLnBsYXllci51bmJpbmQoXCJzZWVrXCIsIHRoaXMub25TZWVrKTtcbiAgICB0aGlzLnBsYXllci51bmJpbmQoXCJlbmRcIiwgdGhpcy5vbkVuZGVkKTtcbiAgICB0aGlzLnBsYXllci51bmJpbmQoXCJwbGF5YmFja3JhdGVjaGFuZ2VcIiwgdGhpcy5vblBsYXliYWNrUmF0ZUNoYW5nZSk7XG4gIH1cbiAgcGxheSgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwbGF5XCIpO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBhdXNlXCIpO1xuICB9XG4gIHN0b3AoKSB7XG4gICAgdGhpcy51bmJpbmQoKTtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJyZW1vdmVcIik7XG4gIH1cbiAgc2Vla1RvKHNlY29uZHMsIGtlZXBQbGF5aW5nID0gdHJ1ZSkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInRpbWVcIiwgc2Vjb25kcyk7XG4gICAgaWYgKCFrZWVwUGxheWluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuICBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJ2b2x1bWVcIiwgZnJhY3Rpb24pO1xuICB9XG4gIHNldFBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGxheWJhY2tSYXRlXCIsIHJhdGUpO1xuICB9XG4gIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoXCJkdXJhdGlvblwiKTtcbiAgfVxuICBnZXRDdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsUGxheWVyKFwidGltZVwiKTtcbiAgfVxuICBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVybCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2aWRlb0lEID0gdXJsICYmIHVybC5tYXRjaChpbXBvcnRfcGF0dGVybnMuTUFUQ0hfVVJMX1dJU1RJQSlbMV07XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYHdpc3RpYV9lbWJlZCB3aXN0aWFfYXN5bmNfJHt2aWRlb0lEfWA7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgfTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogdGhpcy5wbGF5ZXJJRCwga2V5OiB2aWRlb0lELCBjbGFzc05hbWUsIHN0eWxlIH0pO1xuICB9XG59XG5fX3B1YmxpY0ZpZWxkKFdpc3RpYSwgXCJkaXNwbGF5TmFtZVwiLCBcIldpc3RpYVwiKTtcbl9fcHVibGljRmllbGQoV2lzdGlhLCBcImNhblBsYXlcIiwgaW1wb3J0X3BhdHRlcm5zLmNhblBsYXkud2lzdGlhKTtcbl9fcHVibGljRmllbGQoV2lzdGlhLCBcImxvb3BPbkVuZGVkXCIsIHRydWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-player/lib/players/Wistia.js\n");

/***/ })

};
;