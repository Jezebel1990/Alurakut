self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_MainGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/MainGrid */ "./src/components/MainGrid/index.js");
/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Box */ "./src/components/Box/index.js");
/* harmony import */ var _src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/lib/AlurakutCommons */ "./src/lib/AlurakutCommons.js");
/* harmony import */ var _src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/ProfileRelations */ "./src/components/ProfileRelations/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\Jezebel\\Desktop\\alurakut\\pages\\index.js",
    _s = $RefreshSig$();







function ProfileSidebar(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
    as: "aside",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "https://github.com/".concat(propriedades.githubUser, ".png"),
      style: {
        borderRadius: '8px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "boxLink",
        href: "https://github.com/".concat(propriedades.githubUser),
        children: ["@", propriedades.githubUser]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_9__.AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = ProfileSidebar;

function ProfileRelationsBox(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_10__.ProfileRelationsBoxWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "smallTitle",
      children: [propriedades.title, " (", propriedades.items.length, ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_c2 = ProfileRelationsBox;
var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var usuarioAleatorio = props.githubUser;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default().useState([]),
      _React$useState2 = (0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.default)(_React$useState, 2),
      comunidades = _React$useState2[0],
      setComunidades = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default().useState([]),
      _React$useState4 = (0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.default)(_React$useState3, 2),
      depoimentos = _React$useState4[0],
      setDepoimentos = _React$useState4[1]; // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];
  // const comunidades = ['Alurakut'];


  var pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho'];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_6___default().useState([]),
      _React$useState6 = (0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.default)(_React$useState5, 2),
      seguidores = _React$useState6[0],
      setSeguidores = _React$useState6[1]; // 0 - Pegar o array de dados do github 


  react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(function () {
    // GET
    fetch('https://api.github.com/users/peas/followers').then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    }).then(function (respostaCompleta) {
      setSeguidores(respostaCompleta);
    }); // API GraphQL

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': 'e975bdb02237c2ec6cad2f85b4f691',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "query": "query {\n        allCommunities {\n          id \n          title\n          imageUrl\n          creatorSlug\n        }\n      }"
      })
    }).then(function (response) {
      return response.json();
    }) // Pega o retorno do response.json() e já retorna
    .then(function (respostaCompleta) {
      var comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesVindasDoDato);
      setComunidades(comunidadesVindasDoDato);
    }); // .then(function (response) {
    //   return response.json()
    // })
  }, []); // API GraphQL

  fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Authorization': 'e975bdb02237c2ec6cad2f85b4f691',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "query": "query {\n    allComments {\n      id \n      text\n      name\n      creatorSlug\n      }\n  }"
    })
  }).then(function (response) {
    return response.json();
  }) // Pega o retorno do response.json() e já retorna
  .then(function (respostaCompleta) {
    var depoimentosVindasDoDato = respostaCompleta.data.allComments;
    console.log(depoimentosVindasDoDato);
    setDepoimentos(depoimentosVindasDoDato);
  }); // .then(function (response) {
  //   return response.json()
  // })
  // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_9__.AlurakutMenu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainGrid__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileArea",
        style: {
          gridArea: 'profileArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSidebar, {
          githubUser: usuarioAleatorio
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "welcomeArea",
        style: {
          gridArea: 'welcomeArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title",
            children: "Bem-vindo(a), Jezebel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_9__.OrkutNostalgicIconSet, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "subTitle",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "Comunidades"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 38
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            onSubmit: function handleCriaComunidade(e) {
              e.preventDefault();
              var dadosDoForm = new FormData(e.target);
              console.log('Campo: ', dadosDoForm.get('title'));
              console.log('Campo: ', dadosDoForm.get('image'));
              var comunidade = {
                title: dadosDoForm.get('title'),
                imageUrl: dadosDoForm.get('image'),
                creatorSlug: usuarioAleatorio
              };
              fetch('/api/communities', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(comunidade)
              }).then( /*#__PURE__*/function () {
                var _ref = (0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(response) {
                  var dados, comunidade, comunidadesAtualizadas;
                  return C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return response.json();

                        case 2:
                          dados = _context.sent;
                          console.log(dados.registroCriado);
                          comunidade = dados.registroCriado;
                          comunidadesAtualizadas = [].concat((0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(comunidades), [comunidade]);
                          setComunidades(comunidadesAtualizadas);

                        case 7:
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
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Qual vai ser o nome da sua comunidade?",
                name: "title",
                "aria-label": "Qual vai ser o nome da sua comunidade?",
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque uma URL para usarmos de capa",
                name: "image",
                "aria-label": "Coloque uma URL para usarmos de capa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              children: "Criar comunidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "subTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "Depoimentos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              onSubmit: function handleCriaDepoimentos(e) {
                var _depoimento;

                e.preventDefault();
                var dadosDoForm = new FormData(e.target);
                console.log('Campo: ', dadosDoForm.get('text'));
                console.log('Campo: ', dadosDoForm.get('name'));
                var depoimento = (_depoimento = {
                  title: dadosDoForm.get('text')
                }, (0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_depoimento, "title", dadosDoForm.get('name')), (0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_depoimento, "creatorSlug", usuarioAleatorio), _depoimento);
                fetch('/api/comments', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(depoimento)
                }).then( /*#__PURE__*/function () {
                  var _ref2 = (0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(response) {
                    var dados, depoimento, depoimentosAtualizados;
                    return C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return response.json();

                          case 2:
                            dados = _context2.sent;
                            console.log(dados.registroCriado);
                            depoimento = dados.registroCriado;
                            depoimentosAtualizados = [].concat((0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(depoimentos), [depoimento]);
                            setComunidades(depoimentosAtualizados);

                          case 7:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  placeholder: "Escreva aqui seu depoimento",
                  name: "title",
                  "aria-label": "Escreva aqui seu depoimento",
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  placeholder: "Qual seu nome?",
                  name: "name",
                  "aria-label": "Qual seu nome"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                children: "Criar depoimento"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_10__.ProfileRelationsBoxWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "smallTitle",
              children: ["Meus depoimentos (", depoimentos.length, ")"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: depoimentos.map(function (itemAtual) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "/comments/".concat(itemAtual.id),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: itemAtual.text
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 272,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: itemAtual.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 273,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 19
                  }, _this)
                }, itemAtual.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileRelationsArea",
        style: {
          gridArea: 'profileRelationsArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_10__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Minhas Comunidades (", comunidades.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: comunidades.slice(0, 6).map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "/communities/".concat(itemAtual.id),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: itemAtual.imageUrl
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 21
                }, _this)
              }, itemAtual.id, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_10__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Meus Amigos (", pessoasFavoritas.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: pessoasFavoritas.slice(0, 6).map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "/users/".concat(itemAtual),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "https://github.com/".concat(itemAtual, ".png")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 315,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 313,
                  columnNumber: 21
                }, _this)
              }, itemAtual, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "VkLYj054OsHm/JqADm0Agq1HVJo=");

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "ProfileSidebar");
$RefreshReg$(_c2, "ProfileRelationsBox");
$RefreshReg$(_c3, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVTaWRlYmFyIiwicHJvcHJpZWRhZGVzIiwiZ2l0aHViVXNlciIsImJvcmRlclJhZGl1cyIsIlByb2ZpbGVSZWxhdGlvbnNCb3giLCJ0aXRsZSIsIml0ZW1zIiwibGVuZ3RoIiwiSG9tZSIsInByb3BzIiwidXN1YXJpb0FsZWF0b3JpbyIsIlJlYWN0IiwiY29tdW5pZGFkZXMiLCJzZXRDb211bmlkYWRlcyIsImRlcG9pbWVudG9zIiwic2V0RGVwb2ltZW50b3MiLCJwZXNzb2FzRmF2b3JpdGFzIiwic2VndWlkb3JlcyIsInNldFNlZ3VpZG9yZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2Vydmlkb3IiLCJqc29uIiwicmVzcG9zdGFDb21wbGV0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29tdW5pZGFkZXNWaW5kYXNEb0RhdG8iLCJkYXRhIiwiYWxsQ29tbXVuaXRpZXMiLCJjb25zb2xlIiwibG9nIiwiZGVwb2ltZW50b3NWaW5kYXNEb0RhdG8iLCJhbGxDb21tZW50cyIsImdyaWRBcmVhIiwiaGFuZGxlQ3JpYUNvbXVuaWRhZGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYWRvc0RvRm9ybSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZ2V0IiwiY29tdW5pZGFkZSIsImltYWdlVXJsIiwiY3JlYXRvclNsdWciLCJkYWRvcyIsInJlZ2lzdHJvQ3JpYWRvIiwiY29tdW5pZGFkZXNBdHVhbGl6YWRhcyIsImhhbmRsZUNyaWFEZXBvaW1lbnRvcyIsImRlcG9pbWVudG8iLCJkZXBvaW1lbnRvc0F0dWFsaXphZG9zIiwibWFwIiwiaXRlbUF0dWFsIiwiaWQiLCJ0ZXh0IiwibmFtZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEyRTtBQUM1RDtBQUNmLGlDQUFpQyxvRkFBZ0I7QUFDakQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y2RTtBQUNKO0FBQ3NCO0FBQ2xCO0FBQzlEO0FBQ2YsU0FBUyxxRkFBaUIsU0FBUyxtRkFBZSxTQUFTLDhGQUEwQixTQUFTLHFGQUFpQjtBQUMvRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLFlBQXhCLEVBQXNDO0FBQ3BDLHNCQUNFLDhEQUFDLHdEQUFEO0FBQUssTUFBRSxFQUFD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QUssdUJBQUcsK0JBQXdCQSxTQUF4QjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFBLDhCQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNBLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVFELGFBVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUE4TEQ7O0dBdFJ1Qi9DLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2Q5Njk4NjU2MWJjMTIyYWE5MTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG5vb2tpZXMgZnJvbSAnbm9va2llcyc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgTWFpbkdyaWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTWFpbkdyaWQnXG5pbXBvcnQgQm94IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0JveCdcbmltcG9ydCB7IEFsdXJha3V0TWVudSwgQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0LCBPcmt1dE5vc3RhbGdpY0ljb25TZXQgfSBmcm9tICcuLi9zcmMvbGliL0FsdXJha3V0Q29tbW9ucyc7XG5pbXBvcnQgeyBQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlciB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVSZWxhdGlvbnMnO1xuXG5mdW5jdGlvbiBQcm9maWxlU2lkZWJhcihwcm9wcmllZGFkZXMpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwiYXNpZGVcIj5cbiAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHJpZWRhZGVzLmdpdGh1YlVzZXJ9LnBuZ2B9IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzhweCcgfX0gLz5cbiAgICAgIDxociAvPlxuXG4gICAgICA8cD5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYm94TGlua1wiIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwcm9wcmllZGFkZXMuZ2l0aHViVXNlcn1gfT5cbiAgICAgICAgICBAe3Byb3ByaWVkYWRlcy5naXRodWJVc2VyfVxuICAgICAgICA8L2E+XG4gICAgICA8L3A+XG4gICAgICA8aHIgLz5cblxuICAgICAgPEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCAvPlxuICAgIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIFByb2ZpbGVSZWxhdGlvbnNCb3gocHJvcHJpZWRhZGVzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cbiAgICAgICAge3Byb3ByaWVkYWRlcy50aXRsZX0gKHtwcm9wcmllZGFkZXMuaXRlbXMubGVuZ3RofSlcbiAgICAgIDwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgIHsvKiB7c2VndWlkb3Jlcy5tYXAoKGl0ZW1BdHVhbCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtQXR1YWx9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aXRlbUF0dWFsfS5wbmdgfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbUF0dWFsLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWwudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9ICovfVxuICAgICAgPC91bD5cbiAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgdXN1YXJpb0FsZWF0b3JpbyA9IHByb3BzLmdpdGh1YlVzZXI7XG4gIGNvbnN0IFtjb211bmlkYWRlcywgc2V0Q29tdW5pZGFkZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGVwb2ltZW50b3MsIHNldERlcG9pbWVudG9zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgY29tdW5pZGFkZXMgPSBjb211bmlkYWRlc1swXTtcbiAgLy8gY29uc3QgYWx0ZXJhZG9yRGVDb211bmlkYWRlcy9zZXRDb211bmlkYWRlcyA9IGNvbXVuaWRhZGVzWzFdO1xuICAvLyBjb25zdCBjb211bmlkYWRlcyA9IFsnQWx1cmFrdXQnXTtcbiAgY29uc3QgcGVzc29hc0Zhdm9yaXRhcyA9IFtcbiAgICAnanV1bmVncmVpcm9zJyxcbiAgICAnb21hcmlvc291dG8nLFxuICAgICdwZWFzJyxcbiAgICAncmFmYWJhbGxlcmluaScsXG4gICAgJ21hcmNvYnJ1bm9kZXYnLFxuICAgICdmZWxpcGVmaWFsaG8nLFxuICBdXG4gIGNvbnN0IFtzZWd1aWRvcmVzLCBzZXRTZWd1aWRvcmVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgLy8gMCAtIFBlZ2FyIG8gYXJyYXkgZGUgZGFkb3MgZG8gZ2l0aHViIFxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgLy8gR0VUXG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvcGVhcy9mb2xsb3dlcnMnKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb3N0YURvU2Vydmlkb3IpIHtcbiAgICAgIHJldHVybiByZXNwb3N0YURvU2Vydmlkb3IuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9zdGFDb21wbGV0YSkge1xuICAgICAgc2V0U2VndWlkb3JlcyhyZXNwb3N0YUNvbXBsZXRhKTtcbiAgICB9KVxuXG5cbiAgICAvLyBBUEkgR3JhcGhRTFxuICAgIGZldGNoKCdodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20vJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJ2U5NzViZGIwMjIzN2MyZWM2Y2FkMmY4NWI0ZjY5MScsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcInF1ZXJ5XCI6IGBxdWVyeSB7XG4gICAgICAgIGFsbENvbW11bml0aWVzIHtcbiAgICAgICAgICBpZCBcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGltYWdlVXJsXG4gICAgICAgICAgY3JlYXRvclNsdWdcbiAgICAgICAgfVxuICAgICAgfWAgfSlcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBQZWdhIG8gcmV0b3JubyBkbyByZXNwb25zZS5qc29uKCkgZSBqw6EgcmV0b3JuYVxuICAgIC50aGVuKChyZXNwb3N0YUNvbXBsZXRhKSA9PiB7XG4gICAgICBjb25zdCBjb211bmlkYWRlc1ZpbmRhc0RvRGF0byA9IHJlc3Bvc3RhQ29tcGxldGEuZGF0YS5hbGxDb21tdW5pdGllcztcbiAgICAgIGNvbnNvbGUubG9nKGNvbXVuaWRhZGVzVmluZGFzRG9EYXRvKVxuICAgICAgc2V0Q29tdW5pZGFkZXMoY29tdW5pZGFkZXNWaW5kYXNEb0RhdG8pXG4gICAgfSlcbiAgICAvLyAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvLyAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAvLyB9KVxuXG4gIH0sIFtdKVxuXG4vLyBBUEkgR3JhcGhRTFxuZmV0Y2goJ2h0dHBzOi8vZ3JhcGhxbC5kYXRvY21zLmNvbS8nLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOiB7XG4gICAgJ0F1dGhvcml6YXRpb24nOiAnZTk3NWJkYjAyMjM3YzJlYzZjYWQyZjg1YjRmNjkxJyxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0sXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJxdWVyeVwiOiBgcXVlcnkge1xuICAgIGFsbENvbW1lbnRzIHtcbiAgICAgIGlkIFxuICAgICAgdGV4dFxuICAgICAgbmFtZVxuICAgICAgY3JlYXRvclNsdWdcbiAgICAgIH1cbiAgfWAgfSlcbn0pXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBQZWdhIG8gcmV0b3JubyBkbyByZXNwb25zZS5qc29uKCkgZSBqw6EgcmV0b3JuYVxuICAudGhlbigocmVzcG9zdGFDb21wbGV0YSkgPT4ge1xuICAgY29uc3QgZGVwb2ltZW50b3NWaW5kYXNEb0RhdG8gPSByZXNwb3N0YUNvbXBsZXRhLmRhdGEuYWxsQ29tbWVudHM7XG4gICBjb25zb2xlLmxvZyhkZXBvaW1lbnRvc1ZpbmRhc0RvRGF0bylcbiAgc2V0RGVwb2ltZW50b3MoZGVwb2ltZW50b3NWaW5kYXNEb0RhdG8pXG59KVxuLy8gLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgIHJldHVybiByZXNwb25zZS5qc29uKClcbi8vIH0pXG5cblxuICAvLyAxIC0gQ3JpYXIgdW0gYm94IHF1ZSB2YWkgdGVyIHVtIG1hcCwgYmFzZWFkbyBub3MgaXRlbXMgZG8gYXJyYXlcbiAgLy8gcXVlIHBlZ2Ftb3MgZG8gR2l0SHViXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFsdXJha3V0TWVudSAvPlxuICAgICAgPE1haW5HcmlkPlxuICAgICAgICB7LyogPEJveCBzdHlsZT1cImdyaWQtYXJlYTogcHJvZmlsZUFyZWE7XCI+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVBcmVhXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICdwcm9maWxlQXJlYScgfX0+XG4gICAgICAgICAgPFByb2ZpbGVTaWRlYmFyIGdpdGh1YlVzZXI9e3VzdWFyaW9BbGVhdG9yaW99IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVBcmVhXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICd3ZWxjb21lQXJlYScgfX0+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICBCZW0tdmluZG8oYSksIEplemViZWxcbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxPcmt1dE5vc3RhbGdpY0ljb25TZXQgLz5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViVGl0bGVcIj48Yj5Db211bmlkYWRlczwvYj48L2gyPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Z1bmN0aW9uIGhhbmRsZUNyaWFDb211bmlkYWRlKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGFkb3NEb0Zvcm0gPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybS5nZXQoJ3RpdGxlJykpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm0uZ2V0KCdpbWFnZScpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXVuaWRhZGUgPSB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogZGFkb3NEb0Zvcm0uZ2V0KCd0aXRsZScpLFxuICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhZG9zRG9Gb3JtLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgIGNyZWF0b3JTbHVnOiB1c3VhcmlvQWxlYXRvcmlvLFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZldGNoKCcvYXBpL2NvbW11bml0aWVzJywge1xuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tdW5pZGFkZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGFkb3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYWRvcy5yZWdpc3Ryb0NyaWFkbyk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb211bmlkYWRlID0gZGFkb3MucmVnaXN0cm9DcmlhZG87XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb211bmlkYWRlc0F0dWFsaXphZGFzID0gWy4uLmNvbXVuaWRhZGVzLCBjb211bmlkYWRlXTtcbiAgICAgICAgICAgICAgICAgIHNldENvbXVuaWRhZGVzKGNvbXVuaWRhZGVzQXR1YWxpemFkYXMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFsIHZhaSBzZXIgbyBub21lIGRhIHN1YSBjb211bmlkYWRlP1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlF1YWwgdmFpIHNlciBvIG5vbWUgZGEgc3VhIGNvbXVuaWRhZGU/XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb2xvcXVlIHVtYSBVUkwgcGFyYSB1c2FybW9zIGRlIGNhcGFcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDb2xvcXVlIHVtYSBVUkwgcGFyYSB1c2FybW9zIGRlIGNhcGFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgQ3JpYXIgY29tdW5pZGFkZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L0JveD5cblxuXG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJUaXRsZVwiPlxuICAgICAgICAgICAgICA8Yj5EZXBvaW1lbnRvczwvYj5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Z1bmN0aW9uIGhhbmRsZUNyaWFEZXBvaW1lbnRvcyhlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhZG9zRG9Gb3JtID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm0uZ2V0KCd0ZXh0JykpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm0uZ2V0KCduYW1lJykpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwb2ltZW50byA9IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYWRvc0RvRm9ybS5nZXQoJ3RleHQnKSxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYWRvc0RvRm9ybS5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgIGNyZWF0b3JTbHVnOiB1c3VhcmlvQWxlYXRvcmlvLFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZldGNoKCcvYXBpL2NvbW1lbnRzJywge1xuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGVwb2ltZW50bylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGFkb3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYWRvcy5yZWdpc3Ryb0NyaWFkbyk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkZXBvaW1lbnRvID0gZGFkb3MucmVnaXN0cm9DcmlhZG87XG4gICAgICAgICAgICAgICAgICBjb25zdCBkZXBvaW1lbnRvc0F0dWFsaXphZG9zID0gWy4uLmRlcG9pbWVudG9zLCBkZXBvaW1lbnRvXTtcbiAgICAgICAgICAgICAgICAgIHNldENvbXVuaWRhZGVzKGRlcG9pbWVudG9zQXR1YWxpemFkb3MpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFc2NyZXZhIGFxdWkgc2V1IGRlcG9pbWVudG9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFc2NyZXZhIGFxdWkgc2V1IGRlcG9pbWVudG9cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YWwgc2V1IG5vbWU/XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJRdWFsIHNldSBub21lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgIENyaWFyIGRlcG9pbWVudG9cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XG4gICAgICAgICAgICAgIE1ldXMgZGVwb2ltZW50b3MgKHtkZXBvaW1lbnRvcy5sZW5ndGh9KVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2RlcG9pbWVudG9zLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbC5pZH0+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvY29tbWVudHMvJHtpdGVtQXR1YWwuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWwudGV4dH08L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWwubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgICAgXG4gICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVSZWxhdGlvbnNBcmVhXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICdwcm9maWxlUmVsYXRpb25zQXJlYScgfX0+XG4gICAgICAgICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxuICAgICAgICAgICAgICBNaW5oYXMgQ29tdW5pZGFkZXMgKHtjb211bmlkYWRlcy5sZW5ndGh9KVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2NvbXVuaWRhZGVzLnNsaWNlKDAsNikubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9jb21tdW5pdGllcy8ke2l0ZW1BdHVhbC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbUF0dWFsLmltYWdlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWwudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICAgICAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cbiAgICAgICAgICAgICAgTWV1cyBBbWlnb3MgKHtwZXNzb2FzRmF2b3JpdGFzLmxlbmd0aH0pXG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtwZXNzb2FzRmF2b3JpdGFzLnNsaWNlKDAsNikubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC91c2Vycy8ke2l0ZW1BdHVhbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l0ZW1BdHVhbH0ucG5nYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluR3JpZD5cbiAgICA8Lz5cbiAgKVxufVxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcbiAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGN0eCk7XG4gIGNvbnN0IHRva2VuID0gY29va2llcy5VU0VSX1RPS0VOO1xuICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3QuZGVjb2RlKHRva2VuKTtcbiAgY29uc3QgZ2l0aHViVXNlciA9IGRlY29kZWRUb2tlbj8uZ2l0aHViVXNlcjtcblxuICBpZiAoIWdpdGh1YlVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICAvLyBjb25zdCBmb2xsb3dlcnMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke2dpdGh1YlVzZXJ9L2ZvbGxvd2Vyc2ApXG4gIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAudGhlbihmb2xsb3dlcnMgPT4gZm9sbG93ZXJzLm1hcCgoZm9sbG93ZXIpID0+ICh7XG4gIC8vICAgICBpZDogZm9sbG93ZXIuaWQsXG4gIC8vICAgICBuYW1lOiBmb2xsb3dlci5sb2dpbixcbiAgLy8gICAgIGltYWdlOiBmb2xsb3dlci5hdmF0YXJfdXJsLFxuICAvLyAgIH0pKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZ2l0aHViVXNlcixcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=