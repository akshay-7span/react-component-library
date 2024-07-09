"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _excluded = ["className", "name", "backgroundColor", "fontColor", "onClick", "width"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var Button = function Button(props) {
  var className = props.className,
    name = props.name,
    _props$backgroundColo = props.backgroundColor,
    backgroundColor = _props$backgroundColo === void 0 ? "#E93E3A" : _props$backgroundColo,
    _props$fontColor = props.fontColor,
    fontColor = _props$fontColor === void 0 ? "#FFFFFF" : _props$fontColor,
    onClick = props.onClick,
    _props$width = props.width,
    width = _props$width === void 0 ? "100%" : _props$width,
    otherProps = _objectWithoutProperties(props, _excluded);
  var buttonStyle = {
    backgroundColor: backgroundColor,
    color: fontColor,
    width: width
  };
  return /*#__PURE__*/React.createElement(_Button["default"], _extends({
    className: className,
    style: buttonStyle,
    onClick: onClick
  }, otherProps), name);
};
var _default = exports["default"] = Button;