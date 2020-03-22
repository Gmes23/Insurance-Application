webpackHotUpdate("static/development/pages/dashboardx.js",{

/***/ "./node_modules/primereact/button.js":
/*!*******************************************!*\
  !*** ./node_modules/primereact/button.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./components/button/Button.js */ "./node_modules/primereact/components/button/Button.js");

/***/ }),

/***/ "./node_modules/primereact/components/button/Button.js":
/*!*************************************************************!*\
  !*** ./node_modules/primereact/components/button/Button.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip/Tooltip */ "./node_modules/primereact/components/tooltip/Tooltip.js"));

var _ObjectUtils = _interopRequireDefault(__webpack_require__(/*! ../utils/ObjectUtils */ "./node_modules/primereact/components/utils/ObjectUtils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _Tooltip.default({
        target: this.element,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      if (this.props.icon) {
        var className = (0, _classnames.default)(this.props.icon, 'p-c', {
          'p-button-icon-left': this.props.iconPos !== 'right',
          'p-button-icon-right': this.props.iconPos === 'right'
        });
        return _react.default.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var buttonLabel = this.props.label || 'p-btn';
      return _react.default.createElement("span", {
        className: "p-button-text p-c"
      }, buttonLabel);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var className = (0, _classnames.default)('p-button p-component', this.props.className, {
        'p-button-icon-only': this.props.icon && !this.props.label,
        'p-button-text-icon-left': this.props.icon && this.props.label && this.props.iconPos === 'left',
        'p-button-text-icon-right': this.props.icon && this.props.label && this.props.iconPos === 'right',
        'p-button-text-only': !this.props.icon && this.props.label,
        'p-disabled': this.props.disabled
      });
      var icon = this.renderIcon();
      var label = this.renderLabel();

      var buttonProps = _ObjectUtils.default.findDiffKeys(this.props, Button.defaultProps);

      return _react.default.createElement("button", _extends({
        ref: function ref(el) {
          return _this.element = el;
        }
      }, buttonProps, {
        className: className
      }), this.props.iconPos === 'left' && icon, label, this.props.iconPos === 'right' && icon, this.props.children);
    }
  }]);

  return Button;
}(_react.Component);

exports.Button = Button;

_defineProperty(Button, "defaultProps", {
  label: null,
  icon: null,
  iconPos: 'left',
  tooltip: null,
  tooltipOptions: null
});

_defineProperty(Button, "propTypes", {
  label: _propTypes.default.string,
  icon: _propTypes.default.string,
  iconPos: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object
});

/***/ }),

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
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "/Users/gm/Desktop/workFolder/client/pages/dashboardx.js";

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
    _this.onRowEditCancel = _this.onRowEditCancel.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); //  Delete Method 

    _this.actionTemplate = _this.actionTemplate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
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
          lineNumber: 72,
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
          lineNumber: 98,
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
          lineNumber: 120,
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
      var cars = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.state.cars2);

      cars[event.index] = this.clonedCars[event.data.vin];
      delete this.clonedCars[event.data.vin];
      this.setState({
        cars2: cars
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
          lineNumber: 162,
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
          lineNumber: 163,
          columnNumber: 13
        }
      }));
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
          lineNumber: 183,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "content-section introduction",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "feature-intro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 25
        }
      }, "DataTable - Edit"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 25
        }
      }, "Cell and Row editing provides a rapid and user friendly way to manipulate data."))), __jsx("div", {
        className: "content-section implementation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }
      }, __jsx(primereact_growl__WEBPACK_IMPORTED_MODULE_13__["Growl"], {
        ref: function ref(el) {
          return _this8.growl = el;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }
      }), __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
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
          lineNumber: 203,
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
          lineNumber: 204,
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
          lineNumber: 205,
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
          lineNumber: 206,
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
          lineNumber: 207,
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
          lineNumber: 208,
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
          lineNumber: 209,
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
          lineNumber: 210,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "primary_al",
        header: "Auto Liability",
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'primary_al');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "primary_gl",
        header: "General Liability",
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'primary_gl');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        field: "primary_el",
        header: "Primary Liability",
        editor: function editor(props) {
          return _this8.editorForRowEditing(props, 'primary_el');
        },
        style: {
          height: '3.5em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 25
        }
      }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_10__["Column"], {
        body: this.actionTemplate,
        style: {
          textAlign: 'center',
          width: '8em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
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
          lineNumber: 219,
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
//# sourceMappingURL=dashboardx.js.709bd6bfe086090c5209.hot-update.js.map