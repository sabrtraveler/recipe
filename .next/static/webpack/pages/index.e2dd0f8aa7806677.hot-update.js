"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CookieBanner.js":
/*!************************************!*\
  !*** ./components/CookieBanner.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CookieBanner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/CardActions/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import modules\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n//export cookie banner\nfunction CookieBanner() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_2__.Store), state = ref.state, dispatch = ref.dispatch;\n    var cookiesBool = state.cookiesBool;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var handleAccept = function() {\n        dispatch({\n            type: \"ACCEPT_COOKIES\"\n        });\n    };\n    //styling\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            minWidth: 275,\n            position: \"fixed\",\n            bottom: 0,\n            display: cookiesBool ? \"none\" : \"block\",\n            zIndex: 999\n        },\n        __source: {\n            fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    color: \"primary.dark\",\n                    __source: {\n                        fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        \"Recipe Search uses cookies to improve your experience, according to the Privacy Policy. \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                            __source: {\n                                fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                                lineNumber: 38,\n                                columnNumber: 27\n                            },\n                            __self: this\n                        }),\n                        \" By continuing to browse you agree to these conditions.\"\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    padding: \"0rem 1rem 1rem 1rem\"\n                },\n                __source: {\n                    fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"contained\",\n                        onClick: handleAccept,\n                        __source: {\n                            fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"ACCEPT\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"contained\",\n                        __source: {\n                            fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"PRIVACY POLICY\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(CookieBanner, \"HedWEmzADlnhtOEM7d3OXHBnVxs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CookieBanner;\nvar _c;\n$RefreshReg$(_c, \"CookieBanner\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvb2tpZUJhbm5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFnQjtBQUV5QjtBQUNKO0FBQ2M7QUFDQTtBQUNWO0FBQ1E7QUFDWDtBQUNDOztBQUV2QyxFQUFzQjtBQUVQLFFBQVEsQ0FBQ1MsWUFBWSxHQUFHLENBQUM7O0lBQ3RDLEdBQUssQ0FBdUJSLEdBQWlCLEdBQWpCQSxpREFBVSxDQUFDTSwrQ0FBSyxHQUFwQ0csS0FBSyxHQUFlVCxHQUFpQixDQUFyQ1MsS0FBSyxFQUFFQyxRQUFRLEdBQUtWLEdBQWlCLENBQTlCVSxRQUFRO0lBQ3ZCLEdBQUssQ0FBR0MsV0FBVyxHQUFLRixLQUFLLENBQXJCRSxXQUFXO0lBQ25CLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTCxzREFBUztJQUV4QixHQUFLLENBQUNNLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQzFCSCxRQUFRLENBQUMsQ0FBQztZQUFDSSxJQUFJLEVBQUUsQ0FBZ0I7UUFBQyxDQUFDO0lBQ3JDLENBQUM7SUFFSCxFQUFTO0lBRVAsTUFBTSx1RUFDSGIsMERBQUk7UUFDSGMsRUFBRSxFQUFFLENBQUM7WUFDSEMsUUFBUSxFQUFFLEdBQUc7WUFDYkMsUUFBUSxFQUFFLENBQU87WUFDakJDLE1BQU0sRUFBRSxDQUFDO1lBQ1RDLE9BQU8sRUFBRVIsV0FBVyxHQUFHLENBQU0sUUFBRyxDQUFPO1lBQ3ZDUyxNQUFNLEVBQUUsR0FBRztRQUNiLENBQUM7Ozs7Ozs7O2lGQUVBakIsaUVBQVc7Ozs7Ozs7Z0dBQ1RFLGdFQUFVO29CQUFDZ0IsS0FBSyxFQUFDLENBQWM7Ozs7Ozs7O3dCQUFDLENBRWY7NkZBQUNDLENBQUU7Ozs7Ozs7O3dCQUFHLENBRXhCOzs7O2tGQUVEcEIsaUVBQVc7Z0JBQUNhLEVBQUUsRUFBRSxDQUFDO29CQUFDUSxPQUFPLEVBQUUsQ0FBcUI7Z0JBQUMsQ0FBQzs7Ozs7Ozs7eUZBQ2hEbkIsNERBQU07d0JBQUNvQixPQUFPLEVBQUMsQ0FBVzt3QkFBQ0MsT0FBTyxFQUFFWixZQUFZOzs7Ozs7O2tDQUFFLENBRW5EOzt5RkFDQ1QsNERBQU07d0JBQUNvQixPQUFPLEVBQUMsQ0FBVzs7Ozs7OztrQ0FBQyxDQUFjOzs7Ozs7QUFJbEQsQ0FBQztHQXBDdUJoQixZQUFZOztRQUduQkQsa0RBQVM7OztLQUhGQyxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29va2llQmFubmVyLmpzP2FkODYiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgbW9kdWxlc1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi91dGlscy9TdG9yZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vZXhwb3J0IGNvb2tpZSBiYW5uZXJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29va2llQmFubmVyKCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdG9yZSk7XG4gIGNvbnN0IHsgY29va2llc0Jvb2wgfSA9IHN0YXRlO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVBY2NlcHQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkFDQ0VQVF9DT09LSUVTXCIgfSk7XG4gIH07XG5cbi8vc3R5bGluZ1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIHN4PXt7XG4gICAgICAgIG1pbldpZHRoOiAyNzUsXG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgZGlzcGxheTogY29va2llc0Jvb2wgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIixcbiAgICAgICAgekluZGV4OiA5OTksXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5LmRhcmtcIj5cbiAgICAgICAgICBSZWNpcGUgU2VhcmNoIHVzZXMgY29va2llcyB0byBpbXByb3ZlIHlvdXIgZXhwZXJpZW5jZSwgYWNjb3JkaW5nIHRvIHRoZVxuICAgICAgICAgIFByaXZhY3kgUG9saWN5LiA8YnIgLz4gQnkgY29udGludWluZyB0byBicm93c2UgeW91IGFncmVlIHRvIHRoZXNlXG4gICAgICAgICAgY29uZGl0aW9ucy5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBwYWRkaW5nOiBcIjByZW0gMXJlbSAxcmVtIDFyZW1cIiB9fT5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQWNjZXB0fT5cbiAgICAgICAgICBBQ0NFUFRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPlBSSVZBQ1kgUE9MSUNZPC9CdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJTdG9yZSIsInVzZVJvdXRlciIsIkNvb2tpZUJhbm5lciIsInN0YXRlIiwiZGlzcGF0Y2giLCJjb29raWVzQm9vbCIsInJvdXRlciIsImhhbmRsZUFjY2VwdCIsInR5cGUiLCJzeCIsIm1pbldpZHRoIiwicG9zaXRpb24iLCJib3R0b20iLCJkaXNwbGF5IiwiekluZGV4IiwiY29sb3IiLCJiciIsInBhZGRpbmciLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CookieBanner.js\n");

/***/ })

});