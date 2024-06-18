"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Tooltip = _interopRequireWildcard(require("@mui/material/Tooltip"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Info = _interopRequireDefault(require("@mui/icons-material/Info"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _styles = require("@mui/material/styles");
var _excluded = ["className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var CustomTooltip = (0, _styles.styled)(function (_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(function (_ref2) {
  var theme = _ref2.theme;
  return _defineProperty(_defineProperty({}, "& .".concat(_Tooltip.tooltipClasses.tooltip), {
    backgroundColor: "#FEF3E7",
    color: "rgba(0, 0, 0, 0.87)",
    width: "237px",
    height: "auto",
    fontSize: theme.typography.pxToRem(14),
    border: "1px solid #dadde9",
    borderRadius: "12px",
    boxShadow: theme.shadows[20],
    textAlign: "left"
  }), "& .dotted-line", {
    borderTop: "1.5px dashed rgba(0, 0, 0, 0.5)",
    opacity: 0.4,
    margin: "0px 0",
    padding: "4px 16px",
    borderSpacing: "10px 0"
  });
});
var PasswordSuggestion = function PasswordSuggestion(_ref4) {
  var suggestions = _ref4.suggestions;
  return /*#__PURE__*/_react["default"].createElement(CustomTooltip, {
    title: /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      padding: "0.5rem 0.5rem 0.25rem 0.5rem"
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body1",
      component: "p",
      gutterBottom: true
    }, "Passwords must contain:"), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      className: "dotted-line"
    }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2",
      component: "ul",
      sx: {
        textAlign: "left"
      }
    }, suggestions.map(function (suggestion, index) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: index
      }, suggestion);
    }))),
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], null, /*#__PURE__*/_react["default"].createElement(_Info["default"], {
    sx: {
      height: "18px",
      width: "18px"
    }
  })));
};
var _default = exports["default"] = PasswordSuggestion;