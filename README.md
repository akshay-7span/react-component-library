# Custom phoenix react Component

`ActionItems` is a React component that renders a customizable `menu` using Material-UI's Menu and MenuItem components. It supports displaying a list of menu items with icons and optional dividers between the items.

`Header` is a responsive React component designed using Material-UI. It features a customizable app bar that includes a logo, search bar, buttons, and an optional profile component. The component adapts to mobile view by providing a drawer menu.

A customizable `ProfileMenuItem` component for React applications, built with MUI.

The `Quiz` component is a flexible and interactive card component for displaying quiz information. It includes various functionalities such as editing, moving, deleting, and playing a quiz. The component is designed to be customizable and can adapt to different use cases with the help of props.

A customizable `sidebar` component for React applications, built with MUI.

The `TabBar` component is a customizable tab navigation component built with Material-UI. It allows you to switch between different views or sections within a page, providing a clean and user-friendly interface.

## Installation

Install the necessary dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

Install the package via npm:

```bash
npm install @7span/phoenix-react-components
```

Or via yarn:
```bash
yarn add @7span/phoenix-react-components
```

## Usage
Here's a basic example of how to use the custom ActionItems component in your React application:

```
import React, { useState } from "react";
import ActionItems from "@7span/phoenix-react-components";
import { Icon1, Icon2 } from "@mui/icons-material"; // Replace with your actual icons

const MyComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const menuItems = [
    {
      name: "Item 1",
      icon: Icon1,
      onClick: () => console.log("Item 1 clicked"),
    },
    {
      name: "Item 2",
      icon: Icon2,
      onClick: () => console.log("Item 2 clicked"),
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Menu</button>
      <ActionItems anchorEl={anchorEl} setAnchorEl={setAnchorEl} menuItems={menuItems} />
    </div>
  );
};

export default MyComponent;


```

## Props

| Prop          | Type     | Default | Description                                           |
|---------------|----------|---------|-------------------------------------------------------|
| `anchorEl`    | object   | `null`  | The DOM element used to set the position of the menu  |
| `setAnchorEl` | function | `null`  | Function to set the anchor element for the menu       |
| `menuItems`   | array    | `[]`    | Array of menu items to be displayed in the menu       |



## Customization
You can customize the styles of the ActionItems component and its elements by modifying the sx prop in the component's JSX.

## Images
| Actions Menu |
|:-:|
|![Action Image](https://github.com/akshay-7span/react-component-library/blob/VS-237/ActionItems/ActionItems.png)|

## Author
- Ajay Zala

## Contributing
If you would like to contribute to the project, please follow these steps:
1. Fork the repository
2. Create a new branch (git checkout -b feature/your-feature)
3. Make your changes
4. Commit your changes (git commit -m 'Add some feature')
5. Push to the branch (git push origin feature/your-feature)
6. Open a Pull Request


## License
This project is licensed under the MIT License

## Contact
If you have any questions or suggestions, feel free to open an issue or contact me directly at [yo@7span.com].


Made with by 7span
##### This `README.md` file provides comprehensive details about the ActionItems component, including installation instructions, usage examples, prop descriptions, customization options, and the actual component code. Let me know if you need any more adjustments!

