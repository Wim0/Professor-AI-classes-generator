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

/***/ "./pages/gifts.js":
/*!************************!*\
  !*** ./pages/gifts.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"man\");\n    const [age, setAge] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(30);\n    const [priceMin, setPriceMin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(25);\n    const [priceMax, setPriceMax] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(100);\n    const [hobbies, setHobbies] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n    /*     event.preventDefault();\r\n        try {\r\n          const response = await fetch(\"/api/generate\", {\r\n            method: \"POST\",\r\n            headers: {\r\n              \"Content-Type\": \"application/json\",\r\n            },\r\n            body: JSON.stringify({ animal: animalInput }),\r\n          });\r\n    \r\n          const data = await response.json();\r\n          if (response.status !== 200) {\r\n            throw data.error || new Error(`Request failed with status ${response.status}`);\r\n          }\r\n    \r\n          setResult(data.result);\r\n          setAnimalInput(\"\");\r\n        } catch(error) {\r\n          // Consider implementing your own error handling logic here\r\n          console.error(error);\r\n          alert(error.message);\r\n        } */ }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"OpenAI Quickstart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/dog.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Christmas Gift Generator \\uD83C\\uDF81\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"For who is the gift?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"gender\",\n                                value: gender,\n                                onChange: (e)=>setGender(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"man\",\n                                        children: \"Man\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"woman\",\n                                        children: \"Woman\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Age\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                max: 99,\n                                name: \"age\",\n                                placeholder: \"Enter the age\",\n                                value: age,\n                                onChange: (e)=>setAge(Number.parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Price from\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                name: \"priceMin\",\n                                placeholder: \"Enter the minimum price\",\n                                value: priceMin,\n                                onChange: (e)=>setPriceMin(Number.parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Price to\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                name: \"priceMax\",\n                                placeholder: \"Enter the maximum price\",\n                                value: priceMax,\n                                onChange: (e)=>setPriceMax(Number.parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Hobbies\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"hobbies\",\n                                placeholder: \"Enter the hobbies\",\n                                value: hobbies,\n                                onChange: (e)=>setHobbies(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate gift ideas\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().result),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\danie\\\\Documents\\\\GitHub\\\\openai-quickstart-node\\\\pages\\\\gifts.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"RH2T3+0rRXeDhd1nSce3OSeoYQo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9naWZ0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDSDtBQUNPO0FBQ087QUFFekIsU0FBU0ksT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ssS0FBS0MsT0FBTyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNlLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQTtJQUVwQyxlQUFlaUIsU0FBU0MsS0FBSyxFQUFFO0lBQzdCO0lBd0JGOzswQkFFSTs7a0NBQ0UsUUFBQ0U7Ozs7Ozs7a0NBQ0QsUUFBQ0M7Ozs7Ozs7Ozs7Ozs7OzBCQUdILFFBQUNHLDZEQUFBQTtnQkFBS0MsV0FBV3hCLE9BQU91QixJQUFJOztrQ0FDMUIsUUFBQ0U7a0NBQUc7Ozs7OztrQ0FDSjt3QkFBTVQsVUFBVUE7Ozs7Ozs7Ozs7dUZBR1phLEtBQUs7MEZBQ0xDLENBQU81Qjs7O2tEQUdQLFFBQUNnQzs7a0RBQW1COzs7Ozs7O3dDQUNaSixFQUFBQSw2REFBTTtrREFBUTs7Ozs7Ozs7Ozs7OzBDQUd4QixRQUFDSDswQ0FBTTs7Ozs7OzBDQUNQLFFBQUNRLDZEQUFBQTtnQ0FDQ0MsTUFBSztnQ0FDTEMsS0FBSztnQ0FDTEMsS0FBSztnQ0FDTFQsTUFBSztnQ0FDTFUsYUFBWTtnQ0FDWlQsT0FBTzFCO2dDQUNQMkIsVUFBVSxDQUFDQzs7Ozs7OzswQ0FHTjs7Ozs7OztnQ0FFTEksTUFBSztnQ0FDTEMsS0FBSztnQ0FDTFIsTUFBSztnQ0FDTFU7Z0NBQ0FULE9BQU94QjtnQ0FDUHlCLFVBQVUsQ0FBQ0MsSUFBTXpCLFlBQVlpQzs7Ozs7OzBDQUcvQjs7Ozs7OzswQ0FDQTtnQ0FDRUo7Z0NBQ0FDLEtBQUs7Z0NBQ0xSLE1BQUs7Z0NBQ0xVO2dDQUNBVCxPQUFPdEI7Z0NBQ1B1QixVQUFVLENBQUNDLElBQU12QixZQUFZK0IsT0FBT0M7Ozs7OzswQ0FHdEM7Ozs7Ozs7MENBQ0E7Z0NBQ0VMO2dDQUNBUCxNQUFLO2dDQUNMVSxhQUFZO2dDQUNaVCxPQUFPcEI7Z0NBQ1BxQixVQUFVLENBQUNDLElBQU1yQjs7Ozs7OzBDQUVuQjtnQ0FBT3lCLE1BQUs7Z0NBQVNOOzs7Ozs7Ozs7Ozs7a0NBRXZCLFFBQUNaO3dCQUFJTSxXQUFXeEIsT0FBT2MsTUFBTTtrQ0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QyxDQUFDO0dBbkd1QmIsK0JBQUFBLDZEQUFBQTtLQUFBQSw4QkFBQUEsaUVBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dpZnRzLmpzPzJlNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2dlbmRlciwgc2V0R2VuZGVyXSA9IHVzZVN0YXRlKCdtYW4nKTtcclxuICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoMzApO1xyXG4gIGNvbnN0IFtwcmljZU1pbiwgc2V0UHJpY2VNaW5dID0gdXNlU3RhdGUoMjUpO1xyXG4gIGNvbnN0IFtwcmljZU1heCwgc2V0UHJpY2VNYXhdID0gdXNlU3RhdGUoMTAwKTtcclxuICBjb25zdCBbaG9iYmllcywgc2V0SG9iYmllc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xyXG4gICAgLyogICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFuaW1hbDogYW5pbWFsSW5wdXQgfSksXHJcbiAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBkYXRhLmVycm9yIHx8IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XHJcbiAgICAgICAgICBzZXRBbmltYWxJbnB1dChcIlwiKTtcclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBDb25zaWRlciBpbXBsZW1lbnRpbmcgeW91ciBvd24gZXJyb3IgaGFuZGxpbmcgbG9naWMgaGVyZVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9ICovXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk9wZW5BSSBRdWlja3N0YXJ0PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9kb2cucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgzPkNocmlzdG1hcyBHaWZ0IEdlbmVyYXRvciDwn46BPC9oMz5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgPGxhYmVsPkZvciB3aG8gaXMgdGhlIGdpZnQ/PC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtnZW5kZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hblwiPk1hbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid29tYW5cIj5Xb21hbjwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgPGxhYmVsPkFnZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgbWF4PXs5OX1cclxuICAgICAgICAgICAgbmFtZT1cImFnZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGFnZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXthZ2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWdlKE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8bGFiZWw+UHJpY2UgZnJvbTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgbmFtZT1cInByaWNlTWluXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgbWluaW11bSBwcmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmljZU1pbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZU1pbihOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGxhYmVsPlByaWNlIHRvPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VNYXhcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBtYXhpbXVtIHByaWNlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlTWF4fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlTWF4KE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8bGFiZWw+SG9iYmllczwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaG9iYmllc1wiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGhvYmJpZXNcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aG9iYmllc31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRIb2JiaWVzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgZ2lmdCBpZGVhc1wiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fT57cmVzdWx0fTwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJnZW5kZXIiLCJzZXRHZW5kZXIiLCJhZ2UiLCJzZXRBZ2UiLCJwcmljZU1pbiIsInNldFByaWNlTWluIiwicHJpY2VNYXgiLCJzZXRQcmljZU1heCIsImhvYmJpZXMiLCJzZXRIb2JiaWVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJvblN1Ym1pdCIsImV2ZW50IiwiZGl2IiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJoMyIsImZvcm0iLCJsYWJlbCIsInNlbGVjdCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsInBsYWNlaG9sZGVyIiwiTnVtYmVyIiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/gifts.js\n"));

/***/ })

});