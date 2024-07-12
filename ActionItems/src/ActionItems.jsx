import React from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

const getDividerStyle = () => ({
  marginLeft: 2,
  marginRight: 2,
  padding: 0,
});

const ActionItems = ({ anchorEl, setAnchorEl, menuItems }) => {
  if (!menuItems || !Array.isArray(menuItems) || menuItems.length === 0) {
    return null;
  }
  const lastIndex = menuItems.length - 1;
  const menuComponents = menuItems
    .map((item, index) => [
      <MenuItem
        key={index}
        onClick={() => {
          item.onClick();
          setAnchorEl(null);
        }}>
        <ListItemIcon>
          {React.createElement(item.icon, {
            fontSize: "small",
            className: item.iconClass,
          })}
        </ListItemIcon>
        <ListItemText className={item.textClass}>{item.name}</ListItemText>
      </MenuItem>,
      index < lastIndex ? (
        <Divider key={`divider-${index}`} sx={getDividerStyle()} />
      ) : null,
    ])
    .filter(Boolean);

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
      {menuComponents}
    </Menu>
  );
};

export default ActionItems;
