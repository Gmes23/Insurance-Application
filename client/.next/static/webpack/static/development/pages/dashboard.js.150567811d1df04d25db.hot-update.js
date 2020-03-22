webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: CarService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primereact_growl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primereact/growl */ "./node_modules/primereact/growl.js");
/* harmony import */ var primereact_growl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primereact_growl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "/Users/gm/Desktop/workFolder/client/pages/dashboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var CarService = /*#__PURE__*/function () {
  function CarService() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CarService);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CarService, [{
    key: "getCarsSmall",
    value: function getCarsSmall() {
      return fetch('http://localhost:4000/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      }); // .then((data) => {console.log(data)});
    }
  }, {
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

var DataTableEditDemo2 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DataTableEditDemo2, _React$Component);

  var _super = _createSuper(DataTableEditDemo2);

  function DataTableEditDemo2() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, DataTableEditDemo2);

    _this = _super.call(this);
    _this.state = {
      cars1: null,
      users: []
    };
    _this.clonedCars = {};
    _this.carservice = new CarService();
    _this.vinEditor = _this.vinEditor.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.yearEditor = _this.yearEditor.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.brandEditor = _this.brandEditor.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.colorEditor = _this.colorEditor.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.requiredValidator = _this.requiredValidator.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.editorForRowEditing = _this.editorForRowEditing.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onRowEditorValidator = _this.onRowEditorValidator.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onRowEditInit = _this.onRowEditInit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onRowEditSave = _this.onRowEditSave.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onRowEditCancel = _this.onRowEditCancel.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); //  Delete Method 

    _this.actionTemplate = _this.actionTemplate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleDelete = _this.handleDelete.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Checks if what type of Liability User has

    _this.checkPrimaryAL = _this.checkPrimaryAL.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.checkPrimaryEL = _this.checkPrimaryEL.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.checkPrimaryGL = _this.checkPrimaryGL.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(DataTableEditDemo2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.carservice.getCarsSmall().then(function (data) {
        return _this2.setState({
          cars1: data
        });
      });
      this.carservice.getCarsSmall().then(function (data) {
        return _this2.setState({
          cars2: data
        });
      });
    }
    /* Cell Editing */

  }, {
    key: "onEditorValueChange",
    value: function onEditorValueChange(props, value) {
      var updatedCars = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(props.value);

      updatedCars[props.rowIndex][props.field] = value;
      this.setState({
        cars1: updatedCars
      });
    }
  }, {
    key: "inputTextEditor",
    value: function inputTextEditor(props, field) {
      var _this3 = this;

      return __jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputText"], {
        type: "text",
        value: props.rowData[field],
        onChange: function onChange(e) {
          return _this3.onEditorValueChange(props, e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 16
        }
      });
    }
  }, {
    key: "vinEditor",
    value: function vinEditor(props) {
      return this.inputTextEditor(props, 'vin');
    }
  }, {
    key: "yearEditor",
    value: function yearEditor(props) {
      return this.inputTextEditor(props, 'year');
    }
  }, {
    key: "brandEditor",
    value: function brandEditor(props) {
      var _this4 = this;

      var brands = [{
        label: 'Audi',
        value: 'Audi'
      }, {
        label: 'BMW',
        value: 'BMW'
      }, {
        label: 'Fiat',
        value: 'Fiat'
      }, {
        label: 'Ford',
        value: 'Ford'
      }, {
        label: 'Honda',
        value: 'Honda'
      }, {
        label: 'Jaguar',
        value: 'Jaguar'
      }, {
        label: 'Mercedes',
        value: 'Mercedes'
      }, {
        label: 'Renault',
        value: 'Renault'
      }, {
        label: 'VW',
        value: 'VW'
      }, {
        label: 'Volvo',
        value: 'Volvo'
      }];
      return __jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], {
        value: props.value[props.rowIndex].brand,
        options: brands,
        onChange: function onChange(e) {
          return _this4.onEditorValueChange(props, e.value);
        },
        style: {
          width: '100%'
        },
        placeholder: "Select a City",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }
      });
    }
  }, {
    key: "colorEditor",
    value: function colorEditor(props) {
      return this.inputTextEditor(props, 'color');
    }
  }, {
    key: "requiredValidator",
    value: function requiredValidator(props) {
      var value = props.rowData[props.field];
      return value && value.length > 0;
    }
    /* Row Editing */

  }, {
    key: "onEditorValueChangeForRowEditing",
    value: function onEditorValueChangeForRowEditing(props, value) {
      var updatedCars = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(props.value);

      updatedCars[props.rowIndex][props.field] = value;
      this.setState({
        cars2: updatedCars
      });
    }
  }, {
    key: "editorForRowEditing",
    value: function editorForRowEditing(props, field) {
      var _this5 = this;

      return __jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputText"], {
        type: "text",
        value: props.rowData[field],
        onChange: function onChange(e) {
          return _this5.onEditorValueChangeForRowEditing(props, e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 16
        }
      });
    }
  }, {
    key: "onRowEditorValidator",
    value: function onRowEditorValidator(rowData) {
      console.log(rowData, 'rowdataonroweditovalidto');
      var value = rowData['first_name'];
      return value.length > 0;
    }
  }, {
    key: "onRowEditInit",
    value: function onRowEditInit(event) {
      this.clonedCars[event.data.vin] = _objectSpread({}, event.data);
    }
  }, {
    key: "onRowEditSave",
    value: function onRowEditSave(event) {
      var _this6 = this;

      if (this.onRowEditorValidator(event.data)) {
        console.log(event.data.id, ' this event data ');
        delete this.clonedCars[event.data.vin];
        fetch('http://localhost:4000/user/' + event.data.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(event.data)
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          return _this6.setState({
            users: data
          });
        });
        this.growl.show({
          severity: 'success',
          summary: 'Success',
          detail: 'Car is updated'
        });
      } else {
        this.growl.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Brand is required'
        });
      }
    }
  }, {
    key: "onRowEditCancel",
    value: function onRowEditCancel(event) {
      var users = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.state.users);

      users[event.index] = this.clonedCars[event.data.vin];
      delete this.clonedCars[event.data.vin];
      this.setState({
        users: users
      });
    } // These handle the Delete method 

  }, {
    key: "actionTemplate",
    value: function actionTemplate(rowData, column) {
      var _this7 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 16
        }
      }, __jsx(primereact_button__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        type: "button",
        icon: "pi pi-times",
        className: "p-button-danger",
        style: {
          marginRight: '.5em'
        },
        onClick: function onClick(e) {
          return _this7.handleDelete(rowData, e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }
      }));
    }
  }, {
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
    } //  Ternary function for liabilities

  }, {
    key: "checkPrimaryAL",
    value: function checkPrimaryAL(rowData, column) {
      console.log(rowData.primary_al, 'rowDAtaeqweq');
      return rowData.primary_al ? __jsx("i", {
        className: "pi pi-check",
        style: {
          'fontSize': '3em',
          'color': 'green'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 38
        }
      }) : __jsx("i", {
        className: "pi pi-times",
        style: {
          'fontSize': '3em',
          'color': 'crimson'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 119
        }
      }); // return <span style={{ color: rowData['color'] }}>{rowData['color']}</span>;
    }
  }, {
    key: "checkPrimaryEL",
    value: function checkPrimaryEL(rowData, column) {
      // var src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
      // return <img src={src} alt={rowData.brand} width="48px" />;
      return rowData.primary_el ? __jsx("i", {
        className: "pi pi-check",
        style: {
          'fontSize': '3em',
          'color': 'green'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 38
        }
      }) : __jsx("i", {
        className: "pi pi-times",
        style: {
          'fontSize': '3em',
          'color': 'crimson'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 119
        }
      });
    }
  }, {
    key: "checkPrimaryGL",
    value: function checkPrimaryGL(rowData, column) {
      // return <img src={src} alt={rowData.brand} width="48px" />;
      return rowData.primary_gl ? __jsx("i", {
        className: "pi pi-check",
        style: {
          'fontSize': '3em',
          'color': 'green'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 38
        }
      }) : __jsx("i", {
        className: "pi pi-times",
        style: {
          'fontSize': '3em',
          'color': 'crimson'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 119
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      console.log(this.state, 'this state');
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "content-section introduction",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "feature-intro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 25
        }
      }, "DataTable - Edit"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 25
        }
      }, "Cell and Row editing provides a rapid and user friendly way to manipulate data."))), __jsx("div", {
        className: "content-section implementation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 17
        }
      }, __jsx(primereact_growl__WEBPACK_IMPORTED_MODULE_13__["Growl"], {
        ref: function ref(el) {
          return _this8.growl = el;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }
      }), __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }
      }, "Applicant Table"), __jsx(primereact_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTable"], {
        value: this.state.cars2,
        editMode: "row",
        rowEditorValidator: this.onRowEditorValidator,
        onRowEditInit: this.onRowEditInit,
        onRowEditSave: this.onRowEditSave,
        onRowEditCancel: this.onRowEditCancel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }
      }, __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "first_name",
        header: "Vin",
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "first_name",
        header: "First Name",
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'first_name');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "last_name",
        header: "Last Name",
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'last_name');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "email_address",
        header: "Email Address",
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'email_address');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "phone_number",
        header: "Phone Number",
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'phone_number');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "effective_date",
        header: "Effective Date",
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'effective_date');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "status",
        header: "Status",
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'status');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "primary_al",
        header: "Auto Liability",
        body: this.checkPrimaryAL,
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'primary_al');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "primary_gl",
        header: "General Liability",
        body: this.checkPrimaryEL,
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'primary_gl');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "primary_el",
        header: "Primary Liability",
        body: this.checkPrimaryGL,
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'primary_el');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        header: "Delete Applicant",
        body: this.actionTemplate,
        style: {
          textAlign: 'center',
          width: '8em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        header: "Edit",
        rowEditor: true,
        style: {
          'width': '70px',
          'textAlign': 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 25
        }
      }))));
    }
  }]);

  return DataTableEditDemo2;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DataTableEditDemo2);

/***/ })

})
//# sourceMappingURL=dashboard.js.150567811d1df04d25db.hot-update.js.map