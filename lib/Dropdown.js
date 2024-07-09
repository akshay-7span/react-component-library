"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _KeyboardArrowDown = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowDown"));
var _KeyboardArrowUp = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowUp"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Dropdown = function Dropdown(_ref) {
  var label = _ref.label,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    selectedValue = _ref.selectedValue,
    onChange = _ref.onChange;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      minWidth: 234,
      marginBottom: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    MenuProps: {
      PaperProps: {
        sx: {
          borderRadius: "8px",
          border: "1px solid #A1A1AA",
          marginTop: "8px"
        }
      },
      MenuListProps: {
        sx: {
          padding: 0
        }
      }
    },
    id: "select-".concat(label),
    value: selectedValue,
    onChange: onChange,
    open: open,
    onOpen: function onOpen() {
      return setOpen(true);
    },
    onClose: function onClose() {
      return setOpen(false);
    },
    displayEmpty: true,
    IconComponent: function IconComponent() {
      return open ? /*#__PURE__*/_react["default"].createElement(_KeyboardArrowUp["default"], {
        onClick: function onClick() {
          return setOpen(!open);
        }
      }) : /*#__PURE__*/_react["default"].createElement(_KeyboardArrowDown["default"], {
        onClick: function onClick() {
          return setOpen(!open);
        }
      });
    },
    sx: {
      width: "234px",
      height: "40px",
      padding: "8px 0px",
      borderRadius: "8px",
      border: "1px solid #A1A1AA",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, Array.isArray(items) && items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: index,
      value: item.value
    }, item.label);
  }))));
};
var _default = exports["default"] = Dropdown;