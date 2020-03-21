webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");






var _jsxFileName = "/Users/gm/Desktop/workFolder/client/pages/dashboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var CarService = /*#__PURE__*/function () {
  function CarService() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CarService);

    this.car = this.car;
  } // getCarsSmall() {
  //     return fetch('http://localhost:4000/user', {
  //         method: 'GET',
  //         mode: 'no-cors',
  //         headers: { 'Content-Type': 'application/json'}
  //         })
  //         .then(res => console.log(res.json, 'res from getsmall'));
  // }


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CarService, [{
    key: "getCarsMedium",
    value: function getCarsMedium() {
      return fetch('https://jsonplaceholder.typicode.com/todos/1').then(function (res) {
        return res.json;
      });
    }
  }, {
    key: "getCarsLarge",
    value: function getCarsLarge() {
      return fetch('https://jsonplaceholder.typicode.com/todos/1').then(function (res) {
        return res.json;
      });
    }
  }]);

  return CarService;
}();

var DataTableTemplatingDemo = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableTemplatingDemo, _React$Component);

  var _super = _createSuper(DataTableTemplatingDemo);

  function DataTableTemplatingDemo() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DataTableTemplatingDemo);

    _this = _super.call(this);
    _this.state = {
      cars: []
    };
    _this.carservice = new CarService();
    _this.brandTemplate = _this.brandTemplate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.colorTemplate = _this.colorTemplate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.actionTemplate = _this.actionTemplate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DataTableTemplatingDemo, [{
    key: "colorTemplate",
    value: function colorTemplate(rowData, column) {
      return __jsx("span", {
        style: {
          color: rowData['color']
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 16
        }
      }, rowData['color']);
    }
  }, {
    key: "brandTemplate",
    value: function brandTemplate(rowData, column) {
      var src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
      return __jsx("img", {
        src: src,
        alt: rowData.brand,
        width: "48px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 16
        }
      });
    }
  }, {
    key: "actionTemplate",
    value: function actionTemplate(rowData, column) {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 16
        }
      }, __jsx(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "button",
        icon: "pi pi-search",
        className: "p-button-success",
        style: {
          marginRight: '.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }), __jsx(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "button",
        icon: "pi pi-pencil",
        className: "p-button-warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('http://localhost:4000/user', {
        method: 'GET',
        // mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({
          cars: data
        });
      }); // console.log(this.state)
    }
  }, {
    key: "render",
    value: function render() {
      var carCount = this.state.cars ? this.state.cars.length : 0;

      var header = __jsx("div", {
        className: "p-clearfix",
        style: {
          'lineHeight': '1.87em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 22
        }
      }, "List of Cars ", __jsx(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        icon: "pi pi-refresh",
        style: {
          'float': 'right'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 98
        }
      }));

      var footer = "There are " + carCount + ' cars'; // var name = this.state.cars.first_name;

      console.log(this.state.cars[0].first_name, 'this is the state'); // console.log(cars,' cars')
      // return (
      //     <ul>
      //       {cars.map(car => (
      //         <li key={item.name}>
      //           {item.name} {item.price}
      //         </li>
      //       ))}
      //     </ul>
      //   );

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "content-section introduction",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "feature-intro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 29
        }
      }, "DataTable - Templating"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 29
        }
      }, "Custom content at header, body and footer sections are supported via templating."))), __jsx("div", {
        className: "content-section implementation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }
      }, __jsx(primereact_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], {
        value: this.state.cars,
        header: header,
        footer: footer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 29
        }
      }, __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "vin",
        header: "Vin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 33
        }
      }, car.first_name), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "year",
        header: "Year",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 33
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "brand",
        header: "Brand",
        body: this.state.cars.first_name,
        style: {
          textAlign: 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 33
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "color",
        header: "Color",
        body: this.colorTemplate,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 33
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        body: this.actionTemplate,
        style: {
          textAlign: 'center',
          width: '8em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 33
        }
      })))));
    }
  }]);

  return DataTableTemplatingDemo;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DataTableTemplatingDemo);

/***/ })

})
//# sourceMappingURL=dashboard.js.af4a981653f331bd7579.hot-update.js.map