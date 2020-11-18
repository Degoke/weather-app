webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/button/button */ "./components/button/button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_weather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/weather */ "./components/weather.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Degoke\\D_E_V\\weather-app\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      data = _useState2[0],
      setData = _useState2[1];

  var handleClick = function handleClick() {
    setShow(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    navigator.geolocation.getCurrentPosition( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(position) {
        var lattitude, longitude, res, location;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lattitude = position.coords.latitude;
                longitude = position.coords.longitude;
                _context.next = 4;
                return fetch("https://weather-proxy.freecodecamp.rocks/");

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                location = _context.sent;
                setData(location);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }, [data]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "jsx-1640142311" + " " + 'container',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      className: "jsx-1640142311",
      children: "Weather App"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      className: "jsx-1640142311",
      children: "Welcome, hit show to get current weather"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "show",
      handleClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_weather__WEBPACK_IMPORTED_MODULE_6__["default"], {
      state: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].description,
      src: data.weather[0].icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }, _this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "1489829958",
      children: "*{boz-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcRGVnb2tlXFxEX0VfVlxcd2VhdGhlci1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QitCLEFBR3VDLHNCQUNiLFNBQ0MsVUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXERlZ29rZVxcRF9FX1ZcXHdlYXRoZXItYXBwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4uL2NvbXBvbmVudHMvd2VhdGhlcic7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3codHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oYXN5bmMgKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdHRpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd2VhdGhlci1wcm94eS5mcmVlY29kZWNhbXAucm9ja3MvYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXREYXRhKGxvY2F0aW9uKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9LCBbZGF0YV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGgxPldlYXRoZXIgQXBwPC9oMT5cclxuICAgICAgICAgICAgPHA+V2VsY29tZSwgaGl0IHNob3cgdG8gZ2V0IGN1cnJlbnQgd2VhdGhlcjwvcD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PSdzaG93JyBoYW5kbGVDbGljaz17IGhhbmRsZUNsaWNrIH0vPlxyXG4gICAgICAgICAgICB7c2hvdyA/IDxXZWF0aGVyIHN0YXRlPXtkYXRhLm5hbWV9IGNvdW50cnk9e2RhdGEuc3lzLmNvdW50cnl9IHRlbXBlcmF0dXJlPXtkYXRhLm1haW4udGVtcH0gZGVzY3JpcHRpb249e2RhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gc3JjPXtkYXRhLndlYXRoZXJbMF0uaWNvbn0gLz4gOiBcIlwifVxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAqe1xyXG4gICAgICAgICAgICAgICAgYm96LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjAlIGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyID4gKntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGAgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\user\\\\Desktop\\\\Degoke\\\\D_E_V\\\\weather-app\\\\pages\\\\index.js */"
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "1198376072",
      children: ".container.jsx-1640142311{width:60%;margin:20% auto;text-align:center;padding:2rem;box-shadow:0px 10px 15px 1px rgba(0,0,0,0.75);}.container.jsx-1640142311>*.jsx-1640142311{margin-bottom:1rem;}p.jsx-1640142311{font-size:1.3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcRGVnb2tlXFxEX0VfVlxcd2VhdGhlci1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3dCLEFBRzJCLEFBT1MsQUFHRixVQVRELE9BVXBCLEVBSEEsT0FOc0Isa0JBQ0wsYUFDaUMsOENBQ2xEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcRGVnb2tlXFxEX0VfVlxcd2VhdGhlci1hcHBcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi4vY29tcG9uZW50cy93ZWF0aGVyJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihhc3luYyAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGF0dGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLXByb3h5LmZyZWVjb2RlY2FtcC5yb2Nrcy9gKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldERhdGEobG9jYXRpb24pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0sIFtkYXRhXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8aDE+V2VhdGhlciBBcHA8L2gxPlxyXG4gICAgICAgICAgICA8cD5XZWxjb21lLCBoaXQgc2hvdyB0byBnZXQgY3VycmVudCB3ZWF0aGVyPC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9J3Nob3cnIGhhbmRsZUNsaWNrPXsgaGFuZGxlQ2xpY2sgfS8+XHJcbiAgICAgICAgICAgIHtzaG93ID8gPFdlYXRoZXIgc3RhdGU9e2RhdGEubmFtZX0gY291bnRyeT17ZGF0YS5zeXMuY291bnRyeX0gdGVtcGVyYXR1cmU9e2RhdGEubWFpbi50ZW1wfSBkZXNjcmlwdGlvbj17ZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufSBzcmM9e2RhdGEud2VhdGhlclswXS5pY29ufSAvPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICp7XHJcbiAgICAgICAgICAgICAgICBib3otc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMCUgYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXIgPiAqe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYCB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\user\\\\Desktop\\\\Degoke\\\\D_E_V\\\\weather-app\\\\pages\\\\index.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(Index, "QkVDjDok0sYuFXRdwNsleYj1pjE=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVDbGljayIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJsYXR0aXR1ZGUiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImZldGNoIiwicmVzIiwianNvbiIsImxvY2F0aW9uIiwibmFtZSIsInN5cyIsImNvdW50cnkiLCJtYWluIiwidGVtcCIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBQyxJQUFELENBRmhCO0FBQUEsTUFFVEcsSUFGUztBQUFBLE1BRUhDLE9BRkc7O0FBSWhCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJILFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDSCxHQUZEOztBQUlBSSx5REFBUyxDQUFDLFlBQU07QUFDWkMsYUFBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEI7QUFBQSxrTUFBeUMsaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQy9CQyx5QkFEK0IsR0FDbkJELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkMsUUFERztBQUUvQkMseUJBRitCLEdBRW5CSixRQUFRLENBQUNFLE1BQVQsQ0FBZ0JFLFNBRkc7QUFBQTtBQUFBLHVCQUduQkMsS0FBSyw2Q0FIYzs7QUFBQTtBQUcvQkMsbUJBSCtCO0FBQUE7QUFBQSx1QkFJZEEsR0FBRyxDQUFDQyxJQUFKLEVBSmM7O0FBQUE7QUFJL0JDLHdCQUorQjtBQUt6Q2QsdUJBQU8sQ0FBQ2MsUUFBRCxDQUFQOztBQUx5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF6Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFILEdBVFEsRUFTTixDQUFDZixJQUFELENBVE0sQ0FBVDtBQVdBLHNCQUNJO0FBQUEsd0NBQWUsV0FBZjtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJLHFFQUFDLGlFQUFEO0FBQVEsVUFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQVcsRUFBR0U7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLEVBSUtKLElBQUksZ0JBQUcscUVBQUMsMkRBQUQ7QUFBUyxXQUFLLEVBQUVFLElBQUksQ0FBQ2dCLElBQXJCO0FBQTJCLGFBQU8sRUFBRWhCLElBQUksQ0FBQ2lCLEdBQUwsQ0FBU0MsT0FBN0M7QUFBc0QsaUJBQVcsRUFBRWxCLElBQUksQ0FBQ21CLElBQUwsQ0FBVUMsSUFBN0U7QUFBbUYsaUJBQVcsRUFBRXBCLElBQUksQ0FBQ3FCLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxXQUFoSDtBQUE2SCxTQUFHLEVBQUV0QixJQUFJLENBQUNxQixPQUFMLENBQWEsQ0FBYixFQUFnQkU7QUFBbEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILEdBQWdLLEVBSnpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBbkREOztHQUFNM0IsSzs7S0FBQUEsSztBQXFEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDkwZGY2MzUwNWZiYWIyZGJkMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi4vY29tcG9uZW50cy93ZWF0aGVyJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihhc3luYyAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGF0dGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLXByb3h5LmZyZWVjb2RlY2FtcC5yb2Nrcy9gKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldERhdGEobG9jYXRpb24pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0sIFtkYXRhXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8aDE+V2VhdGhlciBBcHA8L2gxPlxyXG4gICAgICAgICAgICA8cD5XZWxjb21lLCBoaXQgc2hvdyB0byBnZXQgY3VycmVudCB3ZWF0aGVyPC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9J3Nob3cnIGhhbmRsZUNsaWNrPXsgaGFuZGxlQ2xpY2sgfS8+XHJcbiAgICAgICAgICAgIHtzaG93ID8gPFdlYXRoZXIgc3RhdGU9e2RhdGEubmFtZX0gY291bnRyeT17ZGF0YS5zeXMuY291bnRyeX0gdGVtcGVyYXR1cmU9e2RhdGEubWFpbi50ZW1wfSBkZXNjcmlwdGlvbj17ZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufSBzcmM9e2RhdGEud2VhdGhlclswXS5pY29ufSAvPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICp7XHJcbiAgICAgICAgICAgICAgICBib3otc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMCUgYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXIgPiAqe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYCB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=