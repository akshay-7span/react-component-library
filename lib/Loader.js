"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _material = require("@mui/material");
var Loader = function Loader() {
  return /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    justifyContent: "center",
    alignItems: "center",
    className: "h-screen"
  }, /*#__PURE__*/React.createElement(_material.CircularProgress, {
    disableShrink: true
  }));
};
var _default = exports["default"] = Loader;