# Custom ProfileMenuItem Component

A customizable ProfileMenuItem component for React applications, built with MUI.

## Features

- Customizable menu items
- Supports icons and text for each menu item
- Customizable styles for menu items
- Handles menu item click events

## Installation

Install the package via npm:

```bash
npm install @7span/phoenix-react-components
```

Or via yarn:
```bash
yarn add @7span/phoenix-react-components
```

## Usage
Here's a basic example of how to use the ProfileMenuItem component in your React application:

```
import { ProfileMenuItem } from "@7span/phoenix-react-components";
import { React, useState } from "react";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menu) => {
    console.log(`Clicked on ${menu.text}`);
    handleClose();
  };

  const menuItems = [
    {
      icon: <AccountCircleIcon />,
      text: "Profile Setting",
      path: "/change-password",
    },
    {
      icon: <LogoutIcon />,
      text: "Logout",
      path: "/login",
      color: "#E93E3A",
    },
  ];

  const menuProps = {
    sx: {
      width: "174px",
      padding: "0px 12px 0px 12px",
      borderRadius: "8px",
      marginTop: "10px",
    },
  };

  const menuItemProps = (index, totalItems) => ({
    sx: {
      width: "150px",
      height: "48px",
      padding: "8px 0px",
      borderBottom: index < totalItems - 1 ? "1px solid" : "none",
      borderColor: "#D4D4D8",
    },
  });

  return (
    <>
      <div>
        <Button onClick={handleClick}>Open Menu</Button>
        <ProfileMenuItem
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          menuItems={menuItems}
          handleMenuItemClick={handleMenuItemClick}
          menuProps={menuProps}
          menuItemProps={menuItemProps}
        />
      </div>
    </>
  );
}

export default App;

```

## Props

| Prop                   | Type      | Default | Description                                           |
|------------------------|-----------|---------|-------------------------------------------------------|
| `anchorEl`             | Element   | `null`  | The DOM element used as the anchor for the menu       |
| `open`                 | Boolean   | `false` | Whether the menu is open                              |
| `handleClose`          | Function  | `null`  | Callback function to handle closing the menu          |
| `menuItems`            | Array     | `[]`    | List of menu items to be displayed                    |
| `handleMenuItemClick`  | Function  | `null`  | Callback function when a menu item is clicked         |
| `menuProps`            | Object    | `{}`    | Additional props to be passed to the Menu component   |



## Customization
You can customize the Side by passing additional props or overriding the default styles:

```
<ProfileMenuItem
  anchorEl={anchorEl}
  open={open}
  handleClose={handleClose}
  menuItems={menuItems}
  handleMenuItemClick={handleMenuItemClick}
  menuProps={{
    PaperProps: {
      sx: {
        backgroundColor: "#f5f5f5",
      },
    },
  }}
/>

```

## Contributing
If you would like to contribute to the project, please follow these steps:
1. Fork the repository
2. Create a new branch (git checkout -b feature/your-feature)
3. Make your changes
4. Commit your changes (git commit -m 'Add some feature')
5. Push to the branch (git push origin feature/your-feature)
6. Open a Pull Request


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
If you have any questions or suggestions, feel free to open an issue or contact me directly at [dev.volisi@gmail.com].


Made with by 7span-Lab-UI
##### This `README.md` file provides comprehensive details about the `ProfileMenuItem` component, including installation instructions, usage examples, prop descriptions, customization options, and the actual component code. Let me know if you need any more adjustments!