webpackHotUpdate("static/development/pages/dashboardx.js",{

/***/ "./pages/dashboardx.js":
/*!*****************************!*\
  !*** ./pages/dashboardx.js ***!
  \*****************************/
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








var _jsxFileName = "/Users/gm/Desktop/workFolder/client/pages/dashboardx.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





 // import {CarService} from '../service/CarService';

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
      cars2: []
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
    _this.onRowEditCancel = _this.onRowEditCancel.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
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
          lineNumber: 67,
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
          lineNumber: 93,
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
          lineNumber: 115,
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
      if (this.onRowEditorValidator(event.data)) {
        console.log(event.data.id, ' this event data ');
        delete this.clonedCars[event.data.vin];
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
      var cars = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.state.cars2);

      cars[event.index] = this.clonedCars[event.data.vin];
      delete this.clonedCars[event.data.vin];
      this.setState({
        cars2: cars
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      console.log(this.state, 'this state');
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "content-section introduction",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "feature-intro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 25
        }
      }, "DataTable - Edit"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 25
        }
      }, "Cell and Row editing provides a rapid and user friendly way to manipulate data."))), __jsx("div", {
        className: "content-section implementation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 17
        }
      }, __jsx(primereact_growl__WEBPACK_IMPORTED_MODULE_13__["Growl"], {
        ref: function ref(el) {
          return _this6.growl = el;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }
      }), __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }
      }, "Row Editing"), __jsx(primereact_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTable"], {
        value: this.state.cars2,
        editMode: "row",
        rowEditorValidator: this.onRowEditorValidator,
        onRowEditInit: this.onRowEditInit,
        onRowEditSave: this.onRowEditSave,
        onRowEditCancel: this.onRowEditCancel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
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
          lineNumber: 172,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "first_name",
        header: "Year",
        editor: function editor(props) {
          return _this6.editorForRowEditing(props, 'first_name');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "brand",
        header: "Brand",
        editor: function editor(props) {
          return _this6.editorForRowEditing(props, 'brand');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "color",
        header: "Color",
        editor: function editor(props) {
          return _this6.editorForRowEditing(props, 'color');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        rowEditor: true,
        style: {
          'width': '70px',
          'textAlign': 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
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
//# sourceMappingURL=dashboardx.js.28ce0220461c7d5595dd.hot-update.js.map