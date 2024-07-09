"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));
var _Visibility = _interopRequireDefault(require("@mui/icons-material/Visibility"));
var _VisibilityOff = _interopRequireDefault(require("@mui/icons-material/VisibilityOff"));
var _PasswordSuggestion = _interopRequireDefault(require("./PasswordSuggestion"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _reactRouterDom = require("react-router-dom");
var _excluded = ["className", "placeholder", "onChange", "type", "errorMessage", "label", "showError", "showPasswordTooltip", "showBottomLabel", "bottomLabelPath", "bottomLabelText", "passwordSuggestions"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var TextFields = function TextFields(props) {
  var className = props.className,
    placeholder = props.placeholder,
    onChange = props.onChange,
    type = props.type,
    errorMessage = props.errorMessage,
    label = props.label,
    showError = props.showError,
    showPasswordTooltip = props.showPasswordTooltip,
    showBottomLabel = props.showBottomLabel,
    bottomLabelPath = props.bottomLabelPath,
    bottomLabelText = props.bottomLabelText,
    passwordSuggestions = props.passwordSuggestions,
    otherProps = _objectWithoutProperties(props, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  var handleClickShowPassword = function handleClickShowPassword() {
    setShowPassword(!showPassword);
  };
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    marginBottom: 3
  }, label && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body",
    component: "div",
    style: {
      marginBottom: "0.5rem"
    }
  }, label, showPasswordTooltip && passwordSuggestions && /*#__PURE__*/_react["default"].createElement(_PasswordSuggestion["default"], {
    suggestions: passwordSuggestions
  })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({
    className: className,
    placeholder: placeholder,
    fullWidth: true,
    onChange: onChange,
    type: type === "password" ? showPassword ? "text" : "password" : type,
    InputProps: {
      endAdornment: type === "password" ? /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        onClick: handleClickShowPassword,
        edge: "end"
      }, showPassword ? /*#__PURE__*/_react["default"].createElement(_Visibility["default"], null) : /*#__PURE__*/_react["default"].createElement(_VisibilityOff["default"], null))) : null
    }
  }, otherProps)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, showError && errorMessage && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    style: {
      fontSize: "14px",
      fontWeight: "400",
      color: "#EF4444",
      padding: "0px 4px"
    }
  }, errorMessage)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, showBottomLabel && bottomLabelPath && bottomLabelText && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    sx: {
      textAlign: "right",
      fontSize: "12px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: bottomLabelPath
  }, bottomLabelText)))));
};
var _default = exports["default"] = TextFields;