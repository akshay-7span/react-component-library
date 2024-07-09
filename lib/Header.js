"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _Menu = _interopRequireDefault(require("@mui/icons-material/Menu"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Header = function Header(_ref) {
  var logo = _ref.logo,
    _ref$logoPath = _ref.logoPath,
    logoPath = _ref$logoPath === void 0 ? '/' : _ref$logoPath,
    _ref$showSearchBar = _ref.showSearchBar,
    showSearchBar = _ref$showSearchBar === void 0 ? true : _ref$showSearchBar,
    onSearch = _ref.onSearch,
    leftButtonText = _ref.leftButtonText,
    rightButtonText = _ref.rightButtonText,
    _ref$showLeftButton = _ref.showLeftButton,
    showLeftButton = _ref$showLeftButton === void 0 ? true : _ref$showLeftButton,
    _ref$showRightButton = _ref.showRightButton,
    showRightButton = _ref$showRightButton === void 0 ? true : _ref$showRightButton,
    onLeftButtonClick = _ref.onLeftButtonClick,
    onRightButtonClick = _ref.onRightButtonClick,
    _ref$showProfile = _ref.showProfile,
    showProfile = _ref$showProfile === void 0 ? false : _ref$showProfile,
    _ref$ProfileComponent = _ref.ProfileComponent,
    ProfileComponent = _ref$ProfileComponent === void 0 ? null : _ref$ProfileComponent;
  var theme = (0, _material.useTheme)();
  var isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('sm'));
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    mobileOpen = _useState2[0],
    setMobileOpen = _useState2[1];
  var handleSearch = function handleSearch(e) {
    var query = e.target.value;
    if (onSearch) onSearch(query);
  };
  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };
  var drawer = /*#__PURE__*/_react["default"].createElement(_material.List, null, showSearchBar && /*#__PURE__*/_react["default"].createElement(_material.ListItem, null, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    type: "text",
    onChange: handleSearch,
    placeholder: "Search",
    variant: "outlined",
    size: "small",
    fullWidth: true,
    InputProps: {
      startAdornment: /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_Search["default"], {
        color: "action"
      }))
    }
  })), showLeftButton && /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
    button: true,
    onClick: onLeftButtonClick
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: leftButtonText
  })), showRightButton && /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
    button: true,
    onClick: onRightButtonClick
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: rightButtonText
  })), showProfile && ProfileComponent && /*#__PURE__*/_react["default"].createElement(_material.ListItem, null, ProfileComponent));
  return /*#__PURE__*/_react["default"].createElement(_material.AppBar, {
    position: "static",
    elevation: 0,
    sx: {
      borderBottom: '2px solid #D4D4D8',
      backgroundColor: 'white',
      transition: 'all 0.3s ease-in-out'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Toolbar, null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    alignItems: "center",
    justifyContent: "space-between",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: isMobile ? 6 : 3
  }, logo && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    component: _reactRouterDom.Link,
    to: logoPath,
    sx: {
      display: 'inline-block',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)'
      }
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: logo,
    alt: "Logo",
    style: {
      height: 40,
      maxWidth: '100%'
    }
  }))), !isMobile && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 6
  }, showSearchBar && /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    type: "text",
    onChange: handleSearch,
    placeholder: "Search",
    variant: "outlined",
    size: "small",
    fullWidth: true,
    sx: {
      maxWidth: 400,
      margin: '0 auto',
      transition: 'all 0.3s ease-in-out',
      '& .MuiOutlinedInput-root': {
        borderRadius: '20px',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }
      }
    },
    InputProps: {
      startAdornment: /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_Search["default"], {
        color: "action"
      }))
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: isMobile ? 6 : 3,
    container: true,
    justifyContent: "flex-end",
    alignItems: "center",
    spacing: 1
  }, !isMobile ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showLeftButton && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    onClick: onLeftButtonClick,
    sx: {
      height: '38px',
      padding: '8px 16px',
      borderRadius: '12px',
      transition: 'all 0.1s ease-in-out',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }
    }
  }, leftButtonText)), showRightButton && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: onRightButtonClick,
    sx: {
      height: '38px',
      padding: '8px 16px',
      borderRadius: '12px',
      transition: 'all 0.1s ease-in-out',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
      }
    }
  }, rightButtonText)), showProfile && ProfileComponent && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, ProfileComponent)) : /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: handleDrawerToggle,
    sx: {
      ml: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], null))))), /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    onClose: handleDrawerToggle,
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    }
  }, drawer));
};
var _default = exports["default"] = Header;