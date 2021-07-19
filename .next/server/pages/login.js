(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginScreen; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Jezebel\\Desktop\\alurakut\\pages\\login.js";
 // Hook do NextJS



function LoginScreen() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const [githubUser, setGithubUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('Jezebel1990');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    style: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "loginScreen",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "logoArea",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "https://alurakut.vercel.app/logo.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Conecte-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 14
          }, this), " aos seus amigos e familiares usando recados e mensagens instant\xE2neas"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Conhe\xE7a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 14
          }, this), " novas pessoas atrav\xE9s de amigos de seus amigos e comunidades"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Compartilhe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 14
          }, this), " seus v\xEDdeos, fotos e paix\xF5es em um s\xF3 lugar"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "formArea",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "box",
          onSubmit: infosDoEvento => {
            infosDoEvento.preventDefault(); // alert('Alguém clicou no botão!')

            console.log('Usuário: ', githubUser);
            fetch('https://alurakut.vercel.app/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                githubUser: githubUser
              })
            }).then(async respostaDoServer => {
              const dadosDaResposta = await respostaDoServer.json();
              const token = dadosDaResposta.token;
              nookies__WEBPACK_IMPORTED_MODULE_3___default().set(null, 'USER_TOKEN', token, {
                path: '/',
                maxAge: 86400 * 7
              });
              router.push('/');
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Acesse agora mesmo com seu usu\xE1rio do ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "GitHub"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 53
            }, this), "!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Usu\xE1rio",
            value: githubUser,
            onChange: evento => {
              setGithubUser(evento.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), githubUser.length === 0 ? 'Preencha o campo' : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
          className: "box",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Ainda n\xE3o \xE9 membro? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 35
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "ENTRAR J\xC1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: "footerArea",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["\xA9 2021 alura.com.br - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Sobre o Orkut.br"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 35
          }, this), " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Centro de seguran\xE7a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 70
          }, this), " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Privacidade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 108
          }, this), " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Termos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 138
          }, this), " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Contato"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 163
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkxvZ2luU2NyZWVuIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2l0aHViVXNlciIsInNldEdpdGh1YlVzZXIiLCJSZWFjdCIsImRpc3BsYXkiLCJmbGV4IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5mb3NEb0V2ZW50byIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2ZXIiLCJkYWRvc0RhUmVzcG9zdGEiLCJqc29uIiwidG9rZW4iLCJub29raWVzIiwicGF0aCIsIm1heEFnZSIsInB1c2giLCJldmVudG8iLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU0sQ0FBQ0MsVUFBRCxFQUFhQyxhQUFiLElBQThCQyxxREFBQSxDQUFlLGFBQWYsQ0FBcEM7QUFFQSxzQkFDRTtBQUFNLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMsVUFBSSxFQUFFLENBQXpCO0FBQTRCQyxnQkFBVSxFQUFFLFFBQXhDO0FBQWtEQyxvQkFBYyxFQUFFO0FBQWxFLEtBQWI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJB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QkFDMkQ7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRDNELHNCQUNpRztBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEakcsc0JBQytIO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUQvSCxzQkFDd0o7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRHhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0VELEM7Ozs7Ozs7Ozs7O0FDakZELHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gSG9vayBkbyBOZXh0SlNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luU2NyZWVuKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtnaXRodWJVc2VyLCBzZXRHaXRodWJVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKCdKZXplYmVsMTk5MCcpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4OiAxLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luU2NyZWVuXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibG9nb0FyZWFcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9hbHVyYWt1dC52ZXJjZWwuYXBwL2xvZ28uc3ZnXCIgLz5cclxuXHJcbiAgICAgICAgICA8cD48c3Ryb25nPkNvbmVjdGUtc2U8L3N0cm9uZz4gYW9zIHNldXMgYW1pZ29zIGUgZmFtaWxpYXJlcyB1c2FuZG8gcmVjYWRvcyBlIG1lbnNhZ2VucyBpbnN0YW50w6JuZWFzPC9wPlxyXG4gICAgICAgICAgPHA+PHN0cm9uZz5Db25oZcOnYTwvc3Ryb25nPiBub3ZhcyBwZXNzb2FzIGF0cmF2w6lzIGRlIGFtaWdvcyBkZSBzZXVzIGFtaWdvcyBlIGNvbXVuaWRhZGVzPC9wPlxyXG4gICAgICAgICAgPHA+PHN0cm9uZz5Db21wYXJ0aWxoZTwvc3Ryb25nPiBzZXVzIHbDrWRlb3MsIGZvdG9zIGUgcGFpeMO1ZXMgZW0gdW0gc8OzIGx1Z2FyPC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9ybUFyZWFcIj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImJveFwiIG9uU3VibWl0PXsoaW5mb3NEb0V2ZW50bykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoJ0FsZ3XDqW0gY2xpY291IG5vIGJvdMOjbyEnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzdcOhcmlvOiAnLCBnaXRodWJVc2VyKVxyXG4gICAgICAgICAgICAgICAgZmV0Y2goJ2h0dHBzOi8vYWx1cmFrdXQudmVyY2VsLmFwcC9hcGkvbG9naW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBnaXRodWJVc2VyOiBnaXRodWJVc2VyIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYWRvc0RhUmVzcG9zdGEgPSBhd2FpdCByZXNwb3N0YURvU2VydmVyLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gZGFkb3NEYVJlc3Bvc3RhLnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vb2tpZXMuc2V0KG51bGwsICdVU0VSX1RPS0VOJywgdG9rZW4sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhBZ2U6IDg2NDAwICogNyBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgQWNlc3NlIGFnb3JhIG1lc21vIGNvbSBzZXUgdXN1w6FyaW8gZG8gPHN0cm9uZz5HaXRIdWI8L3N0cm9uZz4hXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc3XDoXJpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z2l0aHViVXNlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnRvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2l0aHViVXNlcihldmVudG8udGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2dpdGh1YlVzZXIubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/ICdQcmVlbmNoYSBvIGNhbXBvJ1xyXG4gICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEFpbmRhIG7Do28gw6kgbWVtYnJvPyA8YnIgLz5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICBFTlRSQVIgSsOBXHJcbiAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyQXJlYVwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIMKpIDIwMjEgYWx1cmEuY29tLmJyIC0gPGEgaHJlZj1cIi9cIj5Tb2JyZSBvIE9ya3V0LmJyPC9hPiAtIDxhIGhyZWY9XCIvXCI+Q2VudHJvIGRlIHNlZ3VyYW7Dp2E8L2E+IC0gPGEgaHJlZj1cIi9cIj5Qcml2YWNpZGFkZTwvYT4gLSA8YSBocmVmPVwiL1wiPlRlcm1vczwvYT4gLSA8YSBocmVmPVwiL1wiPkNvbnRhdG88L2E+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufSAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=