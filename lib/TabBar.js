"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import { TabList, TabPanel, TabContext } from "@mui/lab";
// import { Grid, Tab } from "@mui/material";

// const TabBar = ({ tabsData, value, onTabChange }) => {
//   const handleChange = (event, newValue) => {
//     onTabChange(newValue);
//   };

//   return (
//     <Grid container direction="row" justifyContent="flex-start">
//       <TabContext value={value}>
//         <Grid display={"flex"} flexDirection={"column"} item xs={12}>
//           <Grid item>
//             <TabList
//               onChange={handleChange}
//               className="p-4"
//               sx={{
//                 "& .MuiTabs-indicator": {
//                   backgroundColor: "#71717A",
//                 },
//               }}
//             >
//               {tabsData?.map((tab) => (
//                 <Tab
//                   key={tab.value}
//                   label={tab.label}
//                   value={tab.value}
//                   margin={0}
//                   sx={{
//                     border: "1px solid #71717A",
//                     borderRadius: "2px",
//                     height: "40px",
//                     backgroundColor:
//                       value === tab.value ? "#71717A" : "#FFFFFF",
//                     color:
//                       value === tab.value ? "#FFFFFF !important" : "#3F3F46",
//                   }}
//                 />
//               ))}
//             </TabList>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             {tabsData?.map((tab) => (
//               <TabPanel
//                 key={tab.value}
//                 value={tab.value}
//                 sx={{ color: "black", margin: 0, padding: 0 }}
//               ></TabPanel>
//             ))}
//           </Grid>
//         </Grid>
//       </TabContext>
//     </Grid>
//   );
// };

// export default TabBar;

var TabBar = function TabBar(_ref) {
  var tabsData = _ref.tabsData,
    value = _ref.value,
    onTabChange = _ref.onTabChange;
  var handleChange = function handleChange(event, newValue) {
    onTabChange(newValue);
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      borderBottom: 1,
      borderColor: "divider"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Tabs, {
    value: value,
    onChange: handleChange,
    "aria-label": "basic tabs example",
    sx: {
      "& .MuiTabs-indicator": {
        backgroundColor: "#71717A"
      }
    }
  }, tabsData === null || tabsData === void 0 ? void 0 : tabsData.map(function (tab) {
    return /*#__PURE__*/_react["default"].createElement(_material.Tab, {
      key: tab.value,
      label: tab.label,
      value: tab.value,
      sx: {
        border: "1px solid #71717A",
        borderRadius: "2px",
        height: "40px",
        backgroundColor: value === tab.value ? "#71717A" : "#FFFFFF",
        color: value === tab.value ? "#FFFFFF !important" : "#3F3F46",
        "&.Mui-selected": {
          color: "#FFFFFF"
        }
      }
    });
  }))), tabsData === null || tabsData === void 0 ? void 0 : tabsData.map(function (tab) {
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: tab.value,
      role: "tabpanel",
      hidden: value !== tab.value,
      id: "simple-tabpanel-".concat(tab.value),
      "aria-labelledby": "simple-tab-".concat(tab.value),
      sx: {
        p: 3
      }
    }, value === tab.value && tab.content);
  }));
};
var _default = exports["default"] = TabBar;