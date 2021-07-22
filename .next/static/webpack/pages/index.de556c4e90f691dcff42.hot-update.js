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
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_MainGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/MainGrid */ "./src/components/MainGrid/index.js");
/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Box */ "./src/components/Box/index.js");
/* harmony import */ var _src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/lib/AlurakutCommons */ "./src/lib/AlurakutCommons.js");
/* harmony import */ var _src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/ProfileRelations */ "./src/components/ProfileRelations/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\Jezebel\\Desktop\\alurakut\\pages\\index.js",
    _s = $RefreshSig$();







function ProfileSidebar(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__.AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__.ProfileRelationsBoxWrapper, {
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]),
      _React$useState2 = (0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState, 2),
      comunidades = _React$useState2[0],
      setComunidades = _React$useState2[1]; // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];
  // const comunidades = ['Alurakut'];


  var pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho'];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]),
      _React$useState4 = (0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState3, 2),
      seguidores = _React$useState4[0],
      setSeguidores = _React$useState4[1]; // 0 - Pegar o array de dados do github 


  react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(function () {
    // GET
    fetch('https://api.github.com/users/peas/followers').then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    }).then(function (respostaCompleta) {
      setSeguidores(respostaCompleta);
    }); // API GraphQL

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '7f7590695431ea76f84616a4b4d32d',
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
  }, []);
  console.log('seguidores antes do return', seguidores); // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__.AlurakutMenu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainGrid__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileArea",
        style: {
          gridArea: 'profileArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSidebar, {
          githubUser: usuarioAleatorio
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "welcomeArea",
        style: {
          gridArea: 'welcomeArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title",
            children: "Bem vindo(a)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__.OrkutNostalgicIconSet, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "subTitle",
            children: "O que voc\xEA deseja fazer?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
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
              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(comunidade)
              }).then( /*#__PURE__*/function () {
                var _ref = (0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(response) {
                  var dados, comunidade, comunidadesAtualizadas;
                  return C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return response.json();

                        case 2:
                          dados = _context.sent;
                          console.log(dados.registroCriado);
                          comunidade = dados.registroCriado;
                          comunidadesAtualizadas = [].concat((0,C_Users_Jezebel_Desktop_alurakut_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(comunidades), [comunidade]);
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
                lineNumber: 158,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque uma URL para usarmos de capa",
                name: "image",
                "aria-label": "Coloque uma URL para usarmos de capa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              children: "Criar comunidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileRelationsArea",
        style: {
          gridArea: 'profileRelationsArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileRelationsBox, {
          title: "Seguidores",
          items: seguidores
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Comunidades (", comunidades.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
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
                    lineNumber: 190,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 21
                }, _this)
              }, itemAtual.id, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Pessoas da comunidade (", pessoasFavoritas.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
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
                    lineNumber: 208,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 21
                }, _this)
              }, itemAtual, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "ixl0YlLT0sKZ8Sjwte0IgI6K018=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVTaWRlYmFyIiwicHJvcHJpZWRhZGVzIiwiZ2l0aHViVXNlciIsImJvcmRlclJhZGl1cyIsIlByb2ZpbGVSZWxhdGlvbnNCb3giLCJ0aXRsZSIsIml0ZW1zIiwibGVuZ3RoIiwiSG9tZSIsInByb3BzIiwidXN1YXJpb0FsZWF0b3JpbyIsIlJlYWN0IiwiY29tdW5pZGFkZXMiLCJzZXRDb211bmlkYWRlcyIsInBlc3NvYXNGYXZvcml0YXMiLCJzZWd1aWRvcmVzIiwic2V0U2VndWlkb3JlcyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2aWRvciIsImpzb24iLCJyZXNwb3N0YUNvbXBsZXRhIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJjb211bmlkYWRlc1ZpbmRhc0RvRGF0byIsImRhdGEiLCJhbGxDb21tdW5pdGllcyIsImNvbnNvbGUiLCJsb2ciLCJncmlkQXJlYSIsImhhbmRsZUNyaWFDb211bmlkYWRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGFkb3NEb0Zvcm0iLCJGb3JtRGF0YSIsInRhcmdldCIsImdldCIsImNvbXVuaWRhZGUiLCJpbWFnZVVybCIsImNyZWF0b3JTbHVnIiwiZGFkb3MiLCJyZWdpc3Ryb0NyaWFkbyIsImNvbXVuaWRhZGVzQXR1YWxpemFkYXMiLCJzbGljZSIsIm1hcCIsIml0ZW1BdHVhbCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEyRTtBQUM1RDtBQUNmLGlDQUFpQyxvRkFBZ0I7QUFDakQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y2RTtBQUNKO0FBQ3NCO0FBQ2xCO0FBQzlEO0FBQ2YsU0FBUyxxRkFBaUIsU0FBUyxtRkFBZSxTQUFTLDhGQUEwQixTQUFTLHFGQUFpQjtBQUMvRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxZQUF4QixFQUFzQztBQUNwQyxzQkFDRSw4REFBQyx3REFBRDtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLCtCQUF3QkEsWUFBWSxDQUFDQyxVQUFyQyxTQUFSO0FBQStELFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FB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LENBQUNpQyxLQUFqQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixFQUE0QkMsR0FBNUIsQ0FBZ0MsVUFBQ0MsU0FBRCxFQUFlO0FBQzlDLGtDQUNFO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxtQkFBWUEsU0FBWixDQUFQO0FBQUEsMENBQ0U7QUFBSyx1QkFBRywrQkFBd0JBLFNBQXhCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUEsOEJBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBU0EsU0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBUUQsYUFUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQThHRDs7R0EzS3VCekMsSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZTU1NmM0ZTkwZjY5MWRjZmY0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBNYWluR3JpZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYWluR3JpZCdcbmltcG9ydCBCb3ggZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQm94J1xuaW1wb3J0IHsgQWx1cmFrdXRNZW51LCBBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQsIE9ya3V0Tm9zdGFsZ2ljSWNvblNldCB9IGZyb20gJy4uL3NyYy9saWIvQWx1cmFrdXRDb21tb25zJztcbmltcG9ydCB7IFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZVJlbGF0aW9ucyc7XG5cbmZ1bmN0aW9uIFByb2ZpbGVTaWRlYmFyKHByb3ByaWVkYWRlcykge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJhc2lkZVwiPlxuICAgICAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwcm9wcmllZGFkZXMuZ2l0aHViVXNlcn0ucG5nYH0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnOHB4JyB9fSAvPlxuICAgICAgPGhyIC8+XG5cbiAgICAgIDxwPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJib3hMaW5rXCIgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb3ByaWVkYWRlcy5naXRodWJVc2VyfWB9PlxuICAgICAgICAgIEB7cHJvcHJpZWRhZGVzLmdpdGh1YlVzZXJ9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvcD5cbiAgICAgIDxociAvPlxuXG4gICAgICA8QWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0IC8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gUHJvZmlsZVJlbGF0aW9uc0JveChwcm9wcmllZGFkZXMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxuICAgICAgICB7cHJvcHJpZWRhZGVzLnRpdGxlfSAoe3Byb3ByaWVkYWRlcy5pdGVtcy5sZW5ndGh9KVxuICAgICAgPC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAgey8qIHtzZWd1aWRvcmVzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbH0+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHtpdGVtQXR1YWx9LnBuZ2B9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtQXR1YWwuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1BdHVhbC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICB9KX0gKi99XG4gICAgICA8L3VsPlxuICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCB1c3VhcmlvQWxlYXRvcmlvID0gcHJvcHMuZ2l0aHViVXNlcjtcbiAgY29uc3QgW2NvbXVuaWRhZGVzLCBzZXRDb211bmlkYWRlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IGNvbXVuaWRhZGVzID0gY29tdW5pZGFkZXNbMF07XG4gIC8vIGNvbnN0IGFsdGVyYWRvckRlQ29tdW5pZGFkZXMvc2V0Q29tdW5pZGFkZXMgPSBjb211bmlkYWRlc1sxXTtcbiAgLy8gY29uc3QgY29tdW5pZGFkZXMgPSBbJ0FsdXJha3V0J107XG4gIGNvbnN0IHBlc3NvYXNGYXZvcml0YXMgPSBbXG4gICAgJ2p1dW5lZ3JlaXJvcycsXG4gICAgJ29tYXJpb3NvdXRvJyxcbiAgICAncGVhcycsXG4gICAgJ3JhZmFiYWxsZXJpbmknLFxuICAgICdtYXJjb2JydW5vZGV2JyxcbiAgICAnZmVsaXBlZmlhbGhvJyxcbiAgXVxuICBjb25zdCBbc2VndWlkb3Jlcywgc2V0U2VndWlkb3Jlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIC8vIDAgLSBQZWdhciBvIGFycmF5IGRlIGRhZG9zIGRvIGdpdGh1YiBcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgIC8vIEdFVFxuICAgIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3BlYXMvZm9sbG93ZXJzJylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9zdGFEb1NlcnZpZG9yKSB7XG4gICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZpZG9yLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3Bvc3RhQ29tcGxldGEpIHtcbiAgICAgIHNldFNlZ3VpZG9yZXMocmVzcG9zdGFDb21wbGV0YSk7XG4gICAgfSlcblxuXG4gICAgLy8gQVBJIEdyYXBoUUxcbiAgICBmZXRjaCgnaHR0cHM6Ly9ncmFwaHFsLmRhdG9jbXMuY29tLycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICc3Zjc1OTA2OTU0MzFlYTc2Zjg0NjE2YTRiNGQzMmQnLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJxdWVyeVwiOiBgcXVlcnkge1xuICAgICAgICBhbGxDb21tdW5pdGllcyB7XG4gICAgICAgICAgaWQgXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBpbWFnZVVybFxuICAgICAgICAgIGNyZWF0b3JTbHVnXG4gICAgICAgIH1cbiAgICAgIH1gIH0pXG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gUGVnYSBvIHJldG9ybm8gZG8gcmVzcG9uc2UuanNvbigpIGUgasOhIHJldG9ybmFcbiAgICAudGhlbigocmVzcG9zdGFDb21wbGV0YSkgPT4ge1xuICAgICAgY29uc3QgY29tdW5pZGFkZXNWaW5kYXNEb0RhdG8gPSByZXNwb3N0YUNvbXBsZXRhLmRhdGEuYWxsQ29tbXVuaXRpZXM7XG4gICAgICBjb25zb2xlLmxvZyhjb211bmlkYWRlc1ZpbmRhc0RvRGF0bylcbiAgICAgIHNldENvbXVuaWRhZGVzKGNvbXVuaWRhZGVzVmluZGFzRG9EYXRvKVxuICAgIH0pXG4gICAgLy8gLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLy8gICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgLy8gfSlcblxuICB9LCBbXSlcblxuICBjb25zb2xlLmxvZygnc2VndWlkb3JlcyBhbnRlcyBkbyByZXR1cm4nLCBzZWd1aWRvcmVzKTtcblxuICAvLyAxIC0gQ3JpYXIgdW0gYm94IHF1ZSB2YWkgdGVyIHVtIG1hcCwgYmFzZWFkbyBub3MgaXRlbXMgZG8gYXJyYXlcbiAgLy8gcXVlIHBlZ2Ftb3MgZG8gR2l0SHViXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFsdXJha3V0TWVudSAvPlxuICAgICAgPE1haW5HcmlkPlxuICAgICAgICB7LyogPEJveCBzdHlsZT1cImdyaWQtYXJlYTogcHJvZmlsZUFyZWE7XCI+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVBcmVhXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICdwcm9maWxlQXJlYScgfX0+XG4gICAgICAgICAgPFByb2ZpbGVTaWRlYmFyIGdpdGh1YlVzZXI9e3VzdWFyaW9BbGVhdG9yaW99IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVBcmVhXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICd3ZWxjb21lQXJlYScgfX0+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICBCZW0gdmluZG8oYSkgXG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICA8T3JrdXROb3N0YWxnaWNJY29uU2V0IC8+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+TyBxdWUgdm9jw6ogZGVzZWphIGZhemVyPzwvaDI+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZnVuY3Rpb24gaGFuZGxlQ3JpYUNvbXVuaWRhZGUoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYWRvc0RvRm9ybSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FtcG86ICcsIGRhZG9zRG9Gb3JtLmdldCgndGl0bGUnKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybS5nZXQoJ2ltYWdlJykpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tdW5pZGFkZSA9IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYWRvc0RvRm9ybS5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgICAgICAgICBpbWFnZVVybDogZGFkb3NEb0Zvcm0uZ2V0KCdpbWFnZScpLFxuICAgICAgICAgICAgICAgICAgY3JlYXRvclNsdWc6IHVzdWFyaW9BbGVhdG9yaW8sXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmV0Y2goJy9hcGkvY29tdW5pZGFkZXMnLCB7XG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb211bmlkYWRlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkYWRvcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhZG9zLnJlZ2lzdHJvQ3JpYWRvKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXVuaWRhZGUgPSBkYWRvcy5yZWdpc3Ryb0NyaWFkbztcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXVuaWRhZGVzQXR1YWxpemFkYXMgPSBbLi4uY29tdW5pZGFkZXMsIGNvbXVuaWRhZGVdO1xuICAgICAgICAgICAgICAgICAgc2V0Q29tdW5pZGFkZXMoY29tdW5pZGFkZXNBdHVhbGl6YWRhcylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YWwgdmFpIHNlciBvIG5vbWUgZGEgc3VhIGNvbXVuaWRhZGU/XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBzdWEgY29tdW5pZGFkZT9cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbG9xdWUgdW1hIFVSTCBwYXJhIHVzYXJtb3MgZGUgY2FwYVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvbG9xdWUgdW1hIFVSTCBwYXJhIHVzYXJtb3MgZGUgY2FwYVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICBDcmlhciBjb211bmlkYWRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlUmVsYXRpb25zQXJlYVwiIHN0eWxlPXt7IGdyaWRBcmVhOiAncHJvZmlsZVJlbGF0aW9uc0FyZWEnIH19PlxuICAgICAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94IHRpdGxlPVwiU2VndWlkb3Jlc1wiIGl0ZW1zPXtzZWd1aWRvcmVzfSAvPlxuICAgICAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XG4gICAgICAgICAgICAgIENvbXVuaWRhZGVzICh7Y29tdW5pZGFkZXMubGVuZ3RofSlcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtjb211bmlkYWRlcy5zbGljZSgwLDYpLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvY29tbXVuaXRpZXMvJHtpdGVtQXR1YWwuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1BdHVhbC5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XG4gICAgICAgICAgICAgIFBlc3NvYXMgZGEgY29tdW5pZGFkZSAoe3Blc3NvYXNGYXZvcml0YXMubGVuZ3RofSlcbiAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3Blc3NvYXNGYXZvcml0YXMuc2xpY2UoMCw2KS5tYXAoKGl0ZW1BdHVhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtQXR1YWx9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3VzZXJzLyR7aXRlbUF0dWFsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aXRlbUF0dWFsfS5wbmdgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluR3JpZD5cbiAgICA8Lz5cbiAgKVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XG4gIGNvbnN0IGNvb2tpZXMgPSBub29raWVzLmdldChjdHgpO1xuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuVVNFUl9UT0tFTjtcbiAgY29uc3QgZGVjb2RlZFRva2VuID0gand0LmRlY29kZSh0b2tlbik7XG4gIGNvbnN0IGdpdGh1YlVzZXIgPSBkZWNvZGVkVG9rZW4/LmdpdGh1YlVzZXI7XG5cbiAgaWYgKCFnaXRodWJVc2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiAnL2xvZ2luJyxcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgLy8gY29uc3QgZm9sbG93ZXJzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtnaXRodWJVc2VyfS9mb2xsb3dlcnNgKVxuICAvLyAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gIC8vICAgLnRoZW4oZm9sbG93ZXJzID0+IGZvbGxvd2Vycy5tYXAoKGZvbGxvd2VyKSA9PiAoe1xuICAvLyAgICAgaWQ6IGZvbGxvd2VyLmlkLFxuICAvLyAgICAgbmFtZTogZm9sbG93ZXIubG9naW4sXG4gIC8vICAgICBpbWFnZTogZm9sbG93ZXIuYXZhdGFyX3VybCxcbiAgLy8gICB9KSkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGdpdGh1YlVzZXIsXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==