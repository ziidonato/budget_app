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

/***/ "./styles/Components.module.scss":
/*!***************************************!*\
  !*** ./styles/Components.module.scss ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"portal\": \"Components_portal__3AV6c\",\n\t\"nav\": \"Components_nav__luvyW\",\n\t\"navItem\": \"Components_navItem__4h3C_\",\n\t\"form\": \"Components_form__NKpws\",\n\t\"formItem\": \"Components_formItem__JNoHc\",\n\t\"label\": \"Components_label__aFcOQ\",\n\t\"input\": \"Components_input__1cswY\",\n\t\"button\": \"Components_button__kV6vA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuc2Nzcz8yMDE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvcnRhbFwiOiBcIkNvbXBvbmVudHNfcG9ydGFsX18zQVY2Y1wiLFxuXHRcIm5hdlwiOiBcIkNvbXBvbmVudHNfbmF2X19sdXZ5V1wiLFxuXHRcIm5hdkl0ZW1cIjogXCJDb21wb25lbnRzX25hdkl0ZW1fXzRoM0NfXCIsXG5cdFwiZm9ybVwiOiBcIkNvbXBvbmVudHNfZm9ybV9fTktwd3NcIixcblx0XCJmb3JtSXRlbVwiOiBcIkNvbXBvbmVudHNfZm9ybUl0ZW1fX0pOb0hjXCIsXG5cdFwibGFiZWxcIjogXCJDb21wb25lbnRzX2xhYmVsX19hRmNPUVwiLFxuXHRcImlucHV0XCI6IFwiQ29tcG9uZW50c19pbnB1dF9fMWNzd1lcIixcblx0XCJidXR0b25cIjogXCJDb21wb25lbnRzX2J1dHRvbl9fa1Y2dkFcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Components.module.scss\n");

/***/ }),

/***/ "./components/Login.tsx":
/*!******************************!*\
  !*** ./components/Login.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/Components.module.scss */ \"./styles/Components.module.scss\");\n/* harmony import */ var styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Login = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(username, password);\n        setLoading(true);\n        fetch(\"/api/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username,\n                password\n            })\n        }).then((res)=>{\n            if (res.status === 200) {\n                router.push(\"/dashboard\");\n            } else {\n                setError(\"Invalid username or password\");\n                setLoading(false);\n            }\n        });\n    };\n    const handleUsernameChange = (e)=>{\n        setUsername(e.target.value);\n    };\n    const handlePasswordChange = (e)=>{\n        setPassword(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formItem),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"username\",\n                            className: (styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            children: \"Username\"\n                        }, void 0, false, {\n                            fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"text\",\n                            name: \"username\",\n                            placeholder: \"username\",\n                            onChange: handleUsernameChange\n                        }, void 0, false, {\n                            fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formItem),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            className: (styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"password\",\n                            name: \"password\",\n                            placeholder: \"password\",\n                            onChange: handlePasswordChange\n                        }, void 0, false, {\n                            fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, undefined),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-red-500\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 23\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formItem),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (styles_Components_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        onClick: handleSubmit,\n                        children: loading ? \"Loading...\" : \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/zii/hdd/js/budget_app/frontend/components/Login.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQW9COzs7OztxQ0FDaEM7Ozs7Ozs2QkFDQTtnQkFDTHRCLEtBQUssa0JBQUksOERBQUN1QixLQUFHO29CQUFDQyxTQUFTLEVBQUMsY0FBYzs4QkFBRXhCLEtBQUs7Ozs7OzZCQUFPOzhCQUNyRCw4REFBQ3VCLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWhDLCtFQUFlOzhCQUMzQiw0RUFBQzBDLFFBQU07d0JBQUNWLFNBQVMsRUFBRWhDLDZFQUFhO3dCQUFFMkMsT0FBTyxFQUFFL0IsWUFBWTtrQ0FDbERGLE9BQU8sR0FBRyxZQUFZLEdBQUcsT0FBTzs7Ozs7aUNBQzVCOzs7Ozs2QkFDUDs7Ozs7O3FCQUNKOzs7OztpQkFDSixDQUNQO0NBQ0Y7QUFFRCxpRUFBZVQsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9Mb2dpbi50c3g/N2FlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgSXJvblNlc3Npb25TU1IgfSBmcm9tICdsaWIvSXJvblNlc3Npb24nXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvbG9naW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lLHBhc3N3b3JkfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKCdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJylcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVVzZXJuYW1lQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVc2VybmFtZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSXRlbX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ0xvZ2luJ31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInN0eWxlcyIsIkxvZ2luIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJwdXNoIiwiaGFuZGxlVXNlcm5hbWVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImZvcm1JdGVtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Login.tsx\n");

/***/ }),

/***/ "./lib/IronSession.ts":
/*!****************************!*\
  !*** ./lib/IronSession.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BACKEND_URL\": () => (/* binding */ BACKEND_URL),\n/* harmony export */   \"IronSessionRoute\": () => (/* binding */ IronSessionRoute),\n/* harmony export */   \"IronSessionSSR\": () => (/* binding */ IronSessionSSR),\n/* harmony export */   \"checkIfLoggedIn\": () => (/* binding */ checkIfLoggedIn)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst sessionOptions = {\n    cookieName: \"session\",\n    password: \"GkMHmgXpXnHwWSMpxQROG6rZ1WwNbWBX\",\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n};\nconst BACKEND_URL = \"http://localhost:8000\";\nconst IronSessionRoute = (handler)=>{\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(handler, sessionOptions);\n};\nfunction IronSessionSSR(handler) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionSsr)(handler, sessionOptions);\n}\nconst checkIfLoggedIn = async (context)=>{\n    const { token  } = context.req.session;\n    if (token) {\n        return true;\n    } else {\n        return false;\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvSXJvblNlc3Npb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0Y7QUFTaEYsTUFBTUUsY0FBYyxHQUFHO0lBQ25CQyxVQUFVLEVBQUUsU0FBUztJQUNyQkMsUUFBUSxFQUFFLGtDQUFrQztJQUM1Q0MsYUFBYSxFQUFFO1FBQ1hDLE1BQU0sRUFBRUMsYUFiSCxLQWE0QixZQUFZO0tBQ2hEO0NBQ0o7QUFFTSxNQUFNQyxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFFNUMsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ0MsT0FBdUIsR0FBSztJQUN6RCxPQUFPViwwRUFBdUIsQ0FBQ1UsT0FBTyxFQUFFUixjQUFjLENBQUMsQ0FBQztDQUMzRDtBQUVNLFNBQVNTLGNBQWMsQ0FHNUJELE9BRXVFLEVBQ3ZFO0lBQ0EsT0FBT1QscUVBQWtCLENBQUNTLE9BQU8sRUFBRVIsY0FBYyxDQUFDLENBQUM7Q0FDcEQ7QUFFTSxNQUFNVSxlQUFlLEdBQUcsT0FBT0MsT0FBa0MsR0FBSztJQUMzRSxNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHRCxPQUFPLENBQUNFLEdBQUcsQ0FBQ0MsT0FBTztJQUNuQyxJQUFJRixLQUFLLEVBQUU7UUFDUCxPQUFPLElBQUksQ0FBQztLQUNmLE1BQU07UUFDSCxPQUFPLEtBQUssQ0FBQztLQUNoQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9saWIvSXJvblNlc3Npb24udHM/Mjk4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSwgd2l0aElyb25TZXNzaW9uU3NyIH0gZnJvbSAnaXJvbi1zZXNzaW9uL25leHQnO1xuaW1wb3J0IHsgXG4gICAgTmV4dEFwaUhhbmRsZXIsIFxuICAgIEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQsIFxuICAgIEdldFNlcnZlclNpZGVQcm9wc1Jlc3VsdCxcbiAgICBOZXh0QXBpUmVxdWVzdCxcbiAgICBOZXh0QXBpUmVzcG9uc2Vcbn0gZnJvbSAnbmV4dCc7XG5cbmNvbnN0IHNlc3Npb25PcHRpb25zID0ge1xuICAgIGNvb2tpZU5hbWU6ICdzZXNzaW9uJyxcbiAgICBwYXNzd29yZDogXCJHa01IbWdYcFhuSHdXU01weFFST0c2cloxV3dOYldCWFwiLFxuICAgIGNvb2tpZU9wdGlvbnM6IHtcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQkFDS0VORF9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiO1xuXG5leHBvcnQgY29uc3QgSXJvblNlc3Npb25Sb3V0ZSA9IChoYW5kbGVyOiBOZXh0QXBpSGFuZGxlcikgPT4ge1xuICAgIHJldHVybiB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZShoYW5kbGVyLCBzZXNzaW9uT3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJcm9uU2Vzc2lvblNTUjxcbiAgUCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9ID0geyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sXG4+KFxuICBoYW5kbGVyOiAoXG4gICAgY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCxcbiAgKSA9PiBHZXRTZXJ2ZXJTaWRlUHJvcHNSZXN1bHQ8UD4gfCBQcm9taXNlPEdldFNlcnZlclNpZGVQcm9wc1Jlc3VsdDxQPj4sXG4pIHtcbiAgcmV0dXJuIHdpdGhJcm9uU2Vzc2lvblNzcihoYW5kbGVyLCBzZXNzaW9uT3B0aW9ucyk7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0lmTG9nZ2VkSW4gPSBhc3luYyAoY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IHRva2VuIH0gPSBjb250ZXh0LnJlcS5zZXNzaW9uO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJ3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSIsIndpdGhJcm9uU2Vzc2lvblNzciIsInNlc3Npb25PcHRpb25zIiwiY29va2llTmFtZSIsInBhc3N3b3JkIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSIsInByb2Nlc3MiLCJCQUNLRU5EX1VSTCIsIklyb25TZXNzaW9uUm91dGUiLCJoYW5kbGVyIiwiSXJvblNlc3Npb25TU1IiLCJjaGVja0lmTG9nZ2VkSW4iLCJjb250ZXh0IiwidG9rZW4iLCJyZXEiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/IronSession.ts\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Login */ \"./components/Login.tsx\");\n/* harmony import */ var lib_IronSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/IronSession */ \"./lib/IronSession.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_IronSession__WEBPACK_IMPORTED_MODULE_3__]);\nlib_IronSession__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst login = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/zii/hdd/js/budget_app/frontend/pages/login.tsx\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\nconst getServerSideProps = (0,lib_IronSession__WEBPACK_IMPORTED_MODULE_3__.IronSessionSSR)(async (ctx)=>{\n    const loggedIn = await (0,lib_IronSession__WEBPACK_IMPORTED_MODULE_3__.checkIfLoggedIn)(ctx);\n    if (loggedIn) {\n        return {\n            redirect: {\n                destination: \"/dashboard\",\n                permanent: false\n            }\n        };\n    } else {\n        return {\n            props: {}\n        };\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNXO0FBQzZCO0FBSWpFLE1BQU1JLEtBQUssR0FBRyxDQUFDQyxLQUFZLEdBQUs7SUFDNUIscUJBQ0k7a0JBQ0ksNEVBQUNKLHdEQUFLOzs7O3FCQUFHO3FCQUNWLENBQ047Q0FDSjtBQUVNLE1BQU1LLGtCQUFrQixHQUFHSiwrREFBYyxDQUM1QyxPQUFPSyxHQUFHLEdBQUs7SUFDWCxNQUFNQyxRQUFRLEdBQUcsTUFBTUwsZ0VBQWUsQ0FBQ0ksR0FBRyxDQUFDO0lBQzNDLElBQUlDLFFBQVEsRUFBRTtRQUNWLE9BQU87WUFDSEMsUUFBUSxFQUFFO2dCQUNOQyxXQUFXLEVBQUUsWUFBWTtnQkFDekJDLFNBQVMsRUFBRSxLQUFLO2FBQ25CO1NBQ0o7S0FDSixNQUFNO1FBQ0gsT0FBTztZQUNITixLQUFLLEVBQUUsRUFBRTtTQUNaO0tBQ0o7Q0FDSixDQUNKO0FBRUQsaUVBQWVELEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMb2dpbiBmcm9tIFwiY29tcG9uZW50cy9Mb2dpblwiXG5pbXBvcnQgeyBJcm9uU2Vzc2lvblNTUiwgY2hlY2tJZkxvZ2dlZEluIH0gZnJvbSAnbGliL0lyb25TZXNzaW9uJ1xuXG50eXBlIFByb3BzID0ge31cblxuY29uc3QgbG9naW4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxMb2dpbiAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBJcm9uU2Vzc2lvblNTUihcbiAgICBhc3luYyAoY3R4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvZ2dlZEluID0gYXdhaXQgY2hlY2tJZkxvZ2dlZEluKGN0eCk7XG4gICAgICAgIGlmIChsb2dnZWRJbikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9kYXNoYm9hcmQnLFxuICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcm9wczoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbilcblxuZXhwb3J0IGRlZmF1bHQgbG9naW4iXSwibmFtZXMiOlsiUmVhY3QiLCJMb2dpbiIsIklyb25TZXNzaW9uU1NSIiwiY2hlY2tJZkxvZ2dlZEluIiwibG9naW4iLCJwcm9wcyIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImxvZ2dlZEluIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("iron-session");;

/***/ }),

/***/ "./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(req, \"session\", getPropertyDescriptorForReqSession(session));\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(context.req, context.res, sessionOptions);\n    Object.defineProperty(context.req, \"session\", getPropertyDescriptorForReqSession(session));\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9pcm9uLXNlc3Npb24vbmV4dC9kaXN0L2luZGV4Lm1qcz9mYjZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG5leHQvaW5kZXgudHNcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSBcImlyb24tc2Vzc2lvblwiO1xuXG4vLyBzcmMvZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbi50c1xuZnVuY3Rpb24gZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRLZXlzID0gT2JqZWN0LmtleXMoc2Vzc2lvbik7XG4gICAgICBjdXJyZW50S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgc2Vzc2lvbltrZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHNlc3Npb25ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbi8vIG5leHQvaW5kZXgudHNcbmZ1bmN0aW9uIHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlKGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIG5leHRBcGlIYW5kbGVyV3JhcHBlZFdpdGhJcm9uU2Vzc2lvbihyZXEsIHJlcykge1xuICAgIGxldCBzZXNzaW9uT3B0aW9ucztcbiAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzZXNzaW9uT3B0aW9ucyA9IGF3YWl0IG9wdGlvbnMocmVxLCByZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXNzaW9uT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRJcm9uU2Vzc2lvbihyZXEsIHJlcywgc2Vzc2lvbk9wdGlvbnMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXEsIFwic2Vzc2lvblwiLCBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pKTtcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XG4gIH07XG59XG5mdW5jdGlvbiB3aXRoSXJvblNlc3Npb25Tc3IoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEdldFNlcnZlclNpZGVQcm9wc0hhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2Vzc2lvbk9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBhd2FpdCBvcHRpb25zKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcywgc2Vzc2lvbk9wdGlvbnMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb250ZXh0LnJlcSwgXCJzZXNzaW9uXCIsIGdldFByb3BlcnR5RGVzY3JpcHRvckZvclJlcVNlc3Npb24oc2Vzc2lvbikpO1xuICAgIHJldHVybiBoYW5kbGVyKGNvbnRleHQpO1xuICB9O1xufVxuZXhwb3J0IHtcbiAgd2l0aElyb25TZXNzaW9uQXBpUm91dGUsXG4gIHdpdGhJcm9uU2Vzc2lvblNzclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/iron-session/next/dist/index.mjs\n");

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