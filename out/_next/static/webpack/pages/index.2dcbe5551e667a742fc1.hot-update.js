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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);




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
                return fetch("https://weather-proxy.freecodecamp.rocks/api/current?lon=".concat(longitude, "&lat=").concat(lattitude));

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
    className: "jsx-3490441447" + " " + 'container',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      className: "jsx-3490441447",
      children: "Weather App"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      className: "jsx-3490441447",
      children: "Welcome, hit show to get current weather"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "show",
      handleClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_weather__WEBPACK_IMPORTED_MODULE_6__["default"], {
      state: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].description,
      src: data.weather[0].icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }, _this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "1489829958",
      children: "*{boz-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcRGVnb2tlXFxEX0VfVlxcd2VhdGhlci1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QitCLEFBR3VDLHNCQUNiLFNBQ0MsVUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXERlZ29rZVxcRF9FX1ZcXHdlYXRoZXItYXBwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4uL2NvbXBvbmVudHMvd2VhdGhlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihhc3luYyAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGF0dGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLXByb3h5LmZyZWVjb2RlY2FtcC5yb2Nrcy9hcGkvY3VycmVudD9sb249JHtsb25naXR1ZGV9JmxhdD0ke2xhdHRpdHVkZX1gKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldERhdGEobG9jYXRpb24pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0sIFtkYXRhXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8aDE+V2VhdGhlciBBcHA8L2gxPlxyXG4gICAgICAgICAgICA8cD5XZWxjb21lLCBoaXQgc2hvdyB0byBnZXQgY3VycmVudCB3ZWF0aGVyPC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9J3Nob3cnIGhhbmRsZUNsaWNrPXsgaGFuZGxlQ2xpY2sgfS8+XHJcbiAgICAgICAgICAgIHtzaG93ID8gPFdlYXRoZXIgc3RhdGU9e2RhdGEubmFtZX0gY291bnRyeT17ZGF0YS5zeXMuY291bnRyeX0gdGVtcGVyYXR1cmU9e2RhdGEubWFpbi50ZW1wfSBkZXNjcmlwdGlvbj17ZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufSBzcmM9e2RhdGEud2VhdGhlclswXS5pY29ufSAvPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICp7XHJcbiAgICAgICAgICAgICAgICBib3otc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCUgYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXIgPiAqe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYCB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\user\\\\Desktop\\\\Degoke\\\\D_E_V\\\\weather-app\\\\pages\\\\index.js */"
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "24967048",
      children: ".container.jsx-3490441447{width:60%;margin:10% auto;text-align:center;padding:2rem;box-shadow:0px 10px 15px 1px rgba(0,0,0,0.75);}.container.jsx-3490441447>*.jsx-3490441447{margin-bottom:1rem;}p.jsx-3490441447{font-size:1.3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcRGVnb2tlXFxEX0VfVlxcd2VhdGhlci1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3dCLEFBRzJCLEFBT1MsQUFHRixVQVRELE9BVXBCLEVBSEEsT0FOc0Isa0JBQ0wsYUFDaUMsOENBQ2xEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcRGVnb2tlXFxEX0VfVlxcd2VhdGhlci1hcHBcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi4vY29tcG9uZW50cy93ZWF0aGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93KHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGFzeW5jIChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXR0aXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3dlYXRoZXItcHJveHkuZnJlZWNvZGVjYW1wLnJvY2tzL2FwaS9jdXJyZW50P2xvbj0ke2xvbmdpdHVkZX0mbGF0PSR7bGF0dGl0dWRlfWApO1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgc2V0RGF0YShsb2NhdGlvbilcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSwgW2RhdGFdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxoMT5XZWF0aGVyIEFwcDwvaDE+XHJcbiAgICAgICAgICAgIDxwPldlbGNvbWUsIGhpdCBzaG93IHRvIGdldCBjdXJyZW50IHdlYXRoZXI8L3A+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD0nc2hvdycgaGFuZGxlQ2xpY2s9eyBoYW5kbGVDbGljayB9Lz5cclxuICAgICAgICAgICAge3Nob3cgPyA8V2VhdGhlciBzdGF0ZT17ZGF0YS5uYW1lfSBjb3VudHJ5PXtkYXRhLnN5cy5jb3VudHJ5fSB0ZW1wZXJhdHVyZT17ZGF0YS5tYWluLnRlbXB9IGRlc2NyaXB0aW9uPXtkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259IHNyYz17ZGF0YS53ZWF0aGVyWzBdLmljb259IC8+IDogXCJcIn1cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgKntcclxuICAgICAgICAgICAgICAgIGJvei1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lciA+ICp7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgIH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\user\\\\Desktop\\\\Degoke\\\\D_E_V\\\\weather-app\\\\pages\\\\index.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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

/***/ }),

/***/ "next":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVDbGljayIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJsYXR0aXR1ZGUiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImZldGNoIiwicmVzIiwianNvbiIsImxvY2F0aW9uIiwibmFtZSIsInN5cyIsImNvdW50cnkiLCJtYWluIiwidGVtcCIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxLQUFELENBRGhCO0FBQUEsTUFDVEMsSUFEUztBQUFBLE1BQ0hDLE9BREc7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsSUFBRCxDQUZoQjtBQUFBLE1BRVRHLElBRlM7QUFBQSxNQUVIQyxPQUZHOztBQUloQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCSCxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQUkseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGFBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCO0FBQUEsa01BQXlDLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvQkMseUJBRCtCLEdBQ25CRCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JDLFFBREc7QUFFL0JDLHlCQUYrQixHQUVuQkosUUFBUSxDQUFDRSxNQUFULENBQWdCRSxTQUZHO0FBQUE7QUFBQSx1QkFHbkJDLEtBQUssb0VBQTZERCxTQUE3RCxrQkFBOEVILFNBQTlFLEVBSGM7O0FBQUE7QUFHL0JLLG1CQUgrQjtBQUFBO0FBQUEsdUJBSWRBLEdBQUcsQ0FBQ0MsSUFBSixFQUpjOztBQUFBO0FBSS9CQyx3QkFKK0I7QUFLekNkLHVCQUFPLENBQUNjLFFBQUQsQ0FBUDs7QUFMeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBekM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRSCxHQVRRLEVBU04sQ0FBQ2YsSUFBRCxDQVRNLENBQVQ7QUFXQSxzQkFDSTtBQUFBLHdDQUFlLFdBQWY7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSSxxRUFBQyxpRUFBRDtBQUFRLFVBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFXLEVBQUdFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixFQUlLSixJQUFJLGdCQUFHLHFFQUFDLDJEQUFEO0FBQVMsV0FBSyxFQUFFRSxJQUFJLENBQUNnQixJQUFyQjtBQUEyQixhQUFPLEVBQUVoQixJQUFJLENBQUNpQixHQUFMLENBQVNDLE9BQTdDO0FBQXNELGlCQUFXLEVBQUVsQixJQUFJLENBQUNtQixJQUFMLENBQVVDLElBQTdFO0FBQW1GLGlCQUFXLEVBQUVwQixJQUFJLENBQUNxQixPQUFMLENBQWEsQ0FBYixFQUFnQkMsV0FBaEg7QUFBNkgsU0FBRyxFQUFFdEIsSUFBSSxDQUFDcUIsT0FBTCxDQUFhLENBQWIsRUFBZ0JFO0FBQWxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxHQUFnSyxFQUp6SztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdDSCxDQW5ERDs7R0FBTTNCLEs7O0tBQUFBLEs7QUFxRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJkY2JlNTU1MWU2NjdhNzQyZmMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4uL2NvbXBvbmVudHMvd2VhdGhlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihhc3luYyAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGF0dGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLXByb3h5LmZyZWVjb2RlY2FtcC5yb2Nrcy9hcGkvY3VycmVudD9sb249JHtsb25naXR1ZGV9JmxhdD0ke2xhdHRpdHVkZX1gKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldERhdGEobG9jYXRpb24pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0sIFtkYXRhXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8aDE+V2VhdGhlciBBcHA8L2gxPlxyXG4gICAgICAgICAgICA8cD5XZWxjb21lLCBoaXQgc2hvdyB0byBnZXQgY3VycmVudCB3ZWF0aGVyPC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9J3Nob3cnIGhhbmRsZUNsaWNrPXsgaGFuZGxlQ2xpY2sgfS8+XHJcbiAgICAgICAgICAgIHtzaG93ID8gPFdlYXRoZXIgc3RhdGU9e2RhdGEubmFtZX0gY291bnRyeT17ZGF0YS5zeXMuY291bnRyeX0gdGVtcGVyYXR1cmU9e2RhdGEubWFpbi50ZW1wfSBkZXNjcmlwdGlvbj17ZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufSBzcmM9e2RhdGEud2VhdGhlclswXS5pY29ufSAvPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICp7XHJcbiAgICAgICAgICAgICAgICBib3otc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCUgYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXIgPiAqe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYCB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=