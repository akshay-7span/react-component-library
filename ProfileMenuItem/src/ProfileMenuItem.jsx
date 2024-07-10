import { Menu, MenuItem, ListItemIcon, ListItemText, Box } from "@mui/material";

const ProfileMenuItem = ({
  anchorEl,
  open,
  handleClose,
  menuItems,
  handleMenuItemClick,
  menuProps,
}) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{ "aria-labelledby": "basic-button" }}
      sx={{
        elevation: 0,
        sx: {
          overflow: "visible",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            margin: "0px 1px",
          },
        },
      }}
      {...menuProps}
    >
      {menuItems.map((menu, index) => (
        <MenuItem
          key={index}
          onClick={() => handleMenuItemClick(menu)}
          sx={{
            py: 1,
            margin: "0px 6px",
            borderBottom:
              index < menuItems.length - 1 ? "1px solid #E5E7EB" : "none",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 36,
              color: menu.color || "#18181B",
            }}
          >
            {menu.icon}
          </ListItemIcon>
          <ListItemText
            primary={menu.text}
            sx={{
              "& .MuiTypography-root": {
                fontSize: "14px",
                fontWeight: 500,
                color: menu.color || "#18181B",
              },
            }}
          />
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ProfileMenuItem;
