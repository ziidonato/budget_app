/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./styles/Login.module.scss":
/*!**********************************!*\
  !*** ./styles/Login.module.scss ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Login_main__dfO91\",\n\t\"login_form\": \"Login_login_form___I__4\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTG9naW4ubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3R5bGVzL0xvZ2luLm1vZHVsZS5zY3NzP2ZjYTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkxvZ2luX21haW5fX2RmTzkxXCIsXG5cdFwibG9naW5fZm9ybVwiOiBcIkxvZ2luX2xvZ2luX2Zvcm1fX19JX180XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Login.module.scss\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Login.module.scss */ \"./styles/Login.module.scss\");\n/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Login = ()=>{\n    const { 0: username , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        setError(\"\");\n        const success = await fetch(\"/api/transactions\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                username,\n                password\n            })\n        });\n        if (success.status === 200) {\n            window.location.href = \"/dashboard\";\n        } else {\n            setError(\"Invalid username or password\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().login_form),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"username\",\n                            children: \"Username\"\n                        }, void 0, false, {\n                            fileName: \"/home/zii/coding/budget_app/frontend/pages/login.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"username\",\n                            value: username,\n                            onChange: (e)=>setEmail(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/zii/coding/budget_app/frontend/pages/login.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zii/coding/budget_app/frontend/pages/login.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"/home/zii/coding/budget_app/frontend/pages/login.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"password\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/zii/coding/budget_app/frontend/pages/login.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zii/coding/budget_app/frontend/pages/login.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/home/zii/coding/budget_app/frontend/pages/login.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/zii/coding/budget_app/frontend/pages/login.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/zii/coding/budget_app/frontend/pages/login.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBQ0s7QUFFaEQsTUFBTUUsS0FBSyxHQUFHLElBQU07SUFDbEIsTUFBTSxLQUFDQyxRQUFRLE1BQUVDLFFBQVEsTUFBSUosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDekMsTUFBTSxLQUFDSyxRQUFRLE1BQUVDLFdBQVcsTUFBSU4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDNUMsTUFBTSxLQUFDTyxLQUFLLE1BQUVDLFFBQVEsTUFBSVIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxLQUFDUyxPQUFPLE1BQUVDLFVBQVUsTUFBSVYsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFN0MsTUFBTVcsWUFBWSxHQUFHLE9BQU9DLENBQW1DLEdBQUs7UUFDbEVBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1FBQ2xCSCxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2hCRixRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ1osTUFBTU0sT0FBTyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTtZQUM3Q0MsTUFBTSxFQUFFLE1BQU07WUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFBRWhCLFFBQVE7Z0JBQUVFLFFBQVE7YUFBRSxDQUFDO1NBQzdDLENBQUM7UUFDSixJQUFJUyxPQUFPLENBQUNNLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDMUJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsWUFBWTtTQUNwQyxNQUFNO1lBQ0xmLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQztTQUN6QztLQUNGO0lBR0QscUJBQ0UsOERBQUNnQixLQUFHO1FBQUNDLFNBQVMsRUFBRXhCLHVFQUFXO2tCQUN6Qiw0RUFBQzBCLE1BQUk7WUFBQ0YsU0FBUyxFQUFFeEIsNkVBQWlCO1lBQUU0QixRQUFRLEVBQUVsQixZQUFZOzs4QkFDMUQsOERBQUNhLEtBQUc7O3NDQUNGLDhEQUFDTSxPQUFLOzRCQUFDQyxPQUFPLEVBQUMsVUFBVTtzQ0FBQyxVQUFROzs7OztxQ0FBUTtzQ0FDMUMsOERBQUNDLE9BQUs7NEJBQ0pDLElBQUksRUFBQyxNQUFNOzRCQUNYQyxFQUFFLEVBQUMsVUFBVTs0QkFDYkMsS0FBSyxFQUFFaEMsUUFBUTs0QkFDZmlDLFFBQVEsRUFBRXhCLENBQUFBLENBQUMsR0FBSVIsUUFBUSxDQUFDUSxDQUFDLENBQUN5QixNQUFNLENBQUNGLEtBQUssQ0FBQzs7Ozs7cUNBQ3ZDOzs7Ozs7NkJBQ0U7OEJBQ0osOERBQUNYLEtBQUc7O3NDQUNKLDhEQUFDTSxPQUFLOzRCQUFDQyxPQUFPLEVBQUMsVUFBVTtzQ0FBQyxVQUFROzs7OztxQ0FBUTtzQ0FDMUMsOERBQUNDLE9BQUs7NEJBQ0pDLElBQUksRUFBQyxVQUFVOzRCQUNmQyxFQUFFLEVBQUMsVUFBVTs0QkFDYkMsS0FBSyxFQUFFOUIsUUFBUTs0QkFDZitCLFFBQVEsRUFBRXhCLENBQUFBLENBQUMsR0FBSU4sV0FBVyxDQUFDTSxDQUFDLENBQUN5QixNQUFNLENBQUNGLEtBQUssQ0FBQzs7Ozs7cUNBQzFDOzs7Ozs7NkJBQ0k7OEJBQ04sOERBQUNHLFFBQU07b0JBQUNMLElBQUksRUFBQyxRQUFROzhCQUFDLE9BQUs7Ozs7OzZCQUFTOzs7Ozs7cUJBQy9COzs7OztpQkFDSCxDQUNQO0NBQ0Y7QUFFRCxpRUFBZS9CLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xvZ2luLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIFxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgc2V0RXJyb3IoJycpXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IGZldGNoKCcvYXBpL3RyYW5zYWN0aW9ucycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxuICAgICAgfSk7XG4gICAgaWYgKHN1Y2Nlc3Muc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kYXNoYm9hcmQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKCdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJylcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2Zvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiTG9naW4iLCJ1c2VybmFtZSIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN1Y2Nlc3MiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImZvcm0iLCJsb2dpbl9mb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();