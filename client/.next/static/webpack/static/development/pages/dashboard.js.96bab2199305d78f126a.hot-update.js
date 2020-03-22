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
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");






var _jsxFileName = "/Users/gm/Desktop/workFolder/client/pages/dashboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var CarService = /*#__PURE__*/function () {
  function CarService() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CarService);

    this.car = this.car;
  }

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
      users: []
    };
    _this.carservice = new CarService();
    _this.brandTemplate = _this.brandTemplate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.colorTemplate = _this.colorTemplate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.primaryEL = _this.primaryEL.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.actionTemplate = _this.actionTemplate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.handleDelete = _this.handleDelete.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.handleEdit = _this.handleEdit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DataTableTemplatingDemo, [{
    key: "handleDelete",
    value: function handleDelete(rowData, e) {
      e.preventDefault();
      var userId = rowData.id;
      fetch('http://localhost:4000/user/' + userId, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(this.setState({
        users: rowData
      }));
    }
  }, {
    key: "handleEdit",
    value: function handleEdit(rowData, e) {
      var _this2 = this;

      e.preventDefault();
      var userId = rowData.id;
      fetch('http://localhost:4000/user/' + userId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({
          users: data
        });
      });
    } //  Ternary function for liabilities

  }, {
    key: "colorTemplate",
    value: function colorTemplate(rowData, column) {
      console.log(rowData.primary_al, 'rowDAtaeqweq');
      return rowData.primary_al ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 38
        }
      }, "true") : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 57
        }
      }, " false"); // return <span style={{ color: rowData['color'] }}>{rowData['color']}</span>;
    }
  }, {
    key: "primaryEL",
    value: function primaryEL(rowData, column) {
      // var src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
      // return <img src={src} alt={rowData.brand} width="48px" />;
      return rowData.primary_el ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 38
        }
      }, "true") : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 57
        }
      }, " false");
    }
  }, {
    key: "brandTemplate",
    value: function brandTemplate(rowData, column) {
      // return <img src={src} alt={rowData.brand} width="48px" />;
      return rowData.primary_gl ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 38
        }
      }, "true") : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 57
        }
      }, " false");
    }
  }, {
    key: "actionTemplate",
    value: function actionTemplate(rowData, column) {
      var _this3 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 16
        }
      }, __jsx(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "button",
        icon: "pi pi-times",
        className: "p-button-danger",
        style: {
          marginRight: '.5em'
        },
        onClick: function onClick(e) {
          return _this3.handleDelete(rowData, e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }), __jsx(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "button",
        icon: "pi pi-user-edit",
        className: "p-button-warning",
        onClick: function onClick(e) {
          return _this3.handleEdit(rowData, e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      fetch('http://localhost:4000/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this4.setState({
          users: data
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      //TODO this delete users but re renders the view infinetely
      console.log(prevState.users, 'prevState'); // if (prevState.users !== this.state.users) {
      //     fetch('http://localhost:4000/user', {
      //         method: 'GET',
      //         headers: { 'Content-Type': 'application/json' }
      //     })
      //     .then(response => response.json())
      //     .then(data => this.setState({ users: data }));
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var carCount = this.state.cars ? this.state.cars.length : 0;

      var header = __jsx("div", {
        className: "p-clearfix",
        style: {
          'lineHeight': '1.87em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
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
          lineNumber: 127,
          columnNumber: 98
        }
      }));

      var footer = "There are " + carCount + ' cars';
      console.log(this.state.users, 'this is the state');
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "content-section introduction",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "feature-intro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 25
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 29
        }
      }, "DataBase"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 29
        }
      }, "Custom content at header, body and footer sections are supported via templating."))), __jsx("div", {
        className: "content-section implementation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }
      }, __jsx(primereact_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], {
        value: this.state.users,
        header: header,
        footer: footer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 25
        }
      }, __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "first_name",
        header: "First Name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 29
        }
      }), __jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], {
        value: this.state.value,
        onChange: function onChange(e) {
          return _this5.setState({
            value: e.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 29
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "last_name",
        header: "Last Name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 29
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "email_address",
        header: "Email Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 29
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "phone_number",
        header: "Phone Number",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 29
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "effective_date",
        header: "Effective Date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 29
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "primary_al",
        header: "Auto Liability",
        body: this.colorTemplate,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 29
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "primary_gl ",
        header: "General Liability",
        body: this.brandTemplate,
        style: {
          textAlign: 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 29
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_8__["Column"], {
        field: "primary_el",
        header: "Auto Liability",
        body: this.primaryEL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 29
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
          lineNumber: 160,
          columnNumber: 29
        }
      })))));
    }
  }]);

  return DataTableTemplatingDemo;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DataTableTemplatingDemo);

/***/ })

})
//# sourceMappingURL=dashboard.js.96bab2199305d78f126a.hot-update.js.map