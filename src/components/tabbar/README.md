# Custom Quiz  Component

The `TabBar` component is a customizable tab navigation component built with Material-UI. It allows you to switch between different views or sections within a page, providing a clean and user-friendly interface.
## Features

- Customizable tabs with dynamic content
- Smooth transitions between tabs
- Fully responsive and integrates seamlessly with Material-UI's styling system

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
Here's a basic example of how to use the custom Sidebar component in your React application:

```
import React, { useState } from "react";
import TabBar from "@7span/phoenix-react-components";

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (newValue) => {
    setCurrentTab(newValue);
  };

  const tabsData = [
    { value: 0, label: "Tab 1", content: <div>Content for Tab 1</div> },
    { value: 1, label: "Tab 2", content: <div>Content for Tab 2</div> },
    { value: 2, label: "Tab 3", content: <div>Content for Tab 3</div> },
  ];

  return (
    <TabBar tabsData={tabsData} value={currentTab} onTabChange={handleTabChange} />
  );
};

export default App;

```

## Props
| Prop          | Type     | Default | Description                                                                 |
|---------------|----------|---------|-----------------------------------------------------------------------------|
| `tabsData`    | array    | `[]`    | An array of tab data objects. Each object should have `value`, `label`, and `content`. |
| `value`       | number   | `0`     | The currently selected tab value.                                           |
| `onTabChange` | function | `null`  | Callback function triggered when a tab is changed.                          |


## Customization
You can customize the styles of the Tab-Bar component as:

```
import React, { useState } from "react";
import { TabBar } from "@7span/phoenix-react-ui-tabbar";

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (newValue) => {
    setCurrentTab(newValue);
  };

  const tabsData = [
    { value: 0, label: "Tab 1", content: <div>Content for Tab 1</div> },
    { value: 1, label: "Tab 2", content: <div>Content for Tab 2</div> },
    { value: 2, label: "Tab 3", content: <div>Content for Tab 3</div> },
  ];

  const tabStyles = {
    minHeight: "40px",
    padding: "10px 16px",
    border: "1px solid #E5E7EB",
    borderRadius: "4px",
    marginRight: "2px",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "none",
  };

  const getTabColor = (value, currentTab) => (value === currentTab ? "#000000" : "#000");
  const getTabBackgroundColor = (value, currentTab) => (value === currentTab ? "#428df5" : "#FFFFFF");

  return (
    <TabBar
      tabsData={tabsData}
      value={currentTab}
      onTabChange={handleTabChange}
      tabStyles={tabStyles}
      getTabColor={getTabColor}
      getTabBackgroundColor={getTabBackgroundColor}
      indicatorStyles={{
        display: "none",
      }}
    />
  );
};

export default App;

```

## Images
|Sidebar Open|
|:-:|
|![Quiz Card Image](https://github.com/akshay-7span/react-component-library/blob/VS-238/Quiz/cover_img.png)|


## Author
- Krushna Mistry

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
##### This `README.md` file provides comprehensive details about the `Quiz Card` component, including installation instructions, usage examples, prop descriptions, customization options, and the actual component code. Let me know if you need any more adjustments!