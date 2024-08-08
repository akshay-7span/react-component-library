# Component Usage Guide
To help you effectively use the components in your project, detailed documentation is provided for each component. You can find the README file for each component at the specified path format:

Path to README : `src/components/component-name/README.md`
# Custom React Component
| No | Component     |   Description                                           |
|----|----------|-------------------------------------------------------|
| 1  | `ActionItems`   | `ActionItems` is a React component that renders a customizable `menu` using Material-UI's Menu and MenuItem components. It supports displaying a list of menu items with icons and optional dividers between the items.  |
| 2  | `Header` | `Header` is a responsive React component designed using Material-UI. It features a customizable app bar that includes a logo, search bar, buttons, and an optional profile component. The component adapts to mobile view by providing a drawer menu.       |
| 3  | `ProfileMenuItem`    | A customizable `ProfileMenuItem` component for React applications, built with MUI.|
| 4  | `Quiz`    | The `Quiz` component is a flexible and interactive card component for displaying quiz information. It includes various functionalities such as editing, moving, deleting, and playing a quiz. The component is designed to be customizable and can adapt to different use cases with the help of props.       |
| 5  | `Sidebar`    | A customizable `sidebar` component for React applications, built with MUI.|
| 6  | `TabBar`    | The `TabBar` component is a customizable tab navigation component built with Material-UI. It allows you to switch between different views or sections within a page, providing a clean and user-friendly interface.|
| 7  | `TextFields` | The `TextFields` component is a versatile input field component built with Material-UI. It allows users to input text data and provides various customization options including different types of text inputs (e.g., password, email, number), validation, and styling to create a user-friendly form experience. |
| 8  | `Button` | The `Button` component is a fundamental UI element built with Material-UI. It allows users to trigger actions or events with a single click. The component is highly customizable, offering various styles, sizes, and functionalities such as icons, loading states, and disabled states, ensuring a consistent and responsive user experience. |
| 9  | `CustomizableModal` | The `CustomizableModal` component is a flexible and user-friendly modal dialog built with Material-UI. It allows developers to display important messages or prompts to users with customizable text, actions, and styles. The modal includes options for primary and secondary buttons, making it suitable for confirmation dialogs, alerts, and other interactive user prompts. |
| 10 | `Dropdown` | The `Dropdown` component is a customizable select menu built with Material-UI. It provides users with a dropdown list of options from which they can select a single value. The component supports features such as custom styling, dynamic content rendering from an array of items, and an intuitive interface with open and close functionalities for improved user interaction. |
| 11 | `Loader` | The `Loader` component is a simple and efficient loading indicator built with Material-UI. It uses the CircularProgress component to display a circular spinner, indicating that a task or process is in progress. The loader is centered within the viewport using a Grid container, ensuring it captures user attention and provides a clear visual cue for loading states. |
| 12 | `PasswordSuggestion` | The `PasswordSuggestion` component is an informative tooltip built with Material-UI. It provides users with helpful password guidelines through a styled tooltip that appears when an info icon is clicked. The tooltip lists customizable password suggestions, enhancing user experience by guiding them to create stronger passwords. The component uses Tooltip, IconButton, and InfoIcon from Material-UI, and it is styled for clarity and ease of use.|
| 13 | `DataGrid` | The `DataGrid` component is a powerful and customizable data grid built with Material-UI. It offers advanced features like server-side pagination, row selection, and column grouping. Styled for enhanced visual appeal, the DataGrid component provides a flexible and efficient way to display large sets of data in a tabular format. It is designed to handle various use cases, including those requiring checkbox selection, pagination, and more. |
| 14 | `TextArea` | The `TextArea` component is a customizable multiline input field built with Material-UI. It allows users to enter larger amounts of text and supports various properties such as placeholder text, size, border styling, color, padding, and border radius. This component is ideal for forms and text input areas where extended user input is required.|
| 15 | `Timer` | The `Timer` component is a countdown timer built with Material-UI. It displays the remaining time in a formatted HH:MM:SS format and updates every second. The component accepts a duration prop (in minutes) and a setExamTimeLeft callback to update the remaining time. It is ideal for use cases such as exams, quizzes, or any timed activities. |
| 16 | `InfoCard` | The `InfoCard` component is a visually appealing card built with Material-UI. It displays an image, a count, and descriptive text, making it ideal for showcasing key information or statistics. The component is styled for clarity and impact, with customizable background color, padding, and border properties. The InfoCard is perfect for dashboards, summaries, and any context where highlighting information is essential.|
| 17 | `Dialog` | The `Dialog` component is a customizable modal dialog built with Material-UI. It provides a flexible way to display content in a modal window with options for customizing width, padding, shadows, and border radius. The component includes a close button for user interaction and supports backdrop customization for enhanced visual appeal. Ideal for displaying alerts, messages, or interactive content that requires user attention. |





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

