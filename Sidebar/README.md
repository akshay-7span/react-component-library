# Custom Sidebar Component

A customizable sidebar component for React applications, built with MUI.

## Features

- Expandable/collapsible sections
- Add new folders dynamically
- Customizable styles
- Optional search functionality
- Integration with React Router

## Installation

Install the package via npm:

```bash
<<<<<<< HEAD
npm install @7span/phoenix-react-ui-sidebar
=======
npm install @7span/phoenix-react-sidebarbar
>>>>>>> 285edab (VS-230 Publish Sidebar component in npm library)
```

Or via yarn:
```bash
<<<<<<< HEAD
yarn add @7span/phoenix-react-ui-sidebar
=======
yarn add @7span/phoenix-react-sidebarbar
>>>>>>> 285edab (VS-230 Publish Sidebar component in npm library)
```

## Usage
Here's a basic example of how to use the custom Sidebar component in your React application:

```
import React from "react";
<<<<<<< HEAD
import Sidebar from "@7span/phoenix-react-ui-sidebar";
=======
import Sidebar from "@7span/phoenix-react-sidebarbar";
>>>>>>> 285edab (VS-230 Publish Sidebar component in npm library)
import { BrowserRouter as Router } from "react-router-dom";

const menuItems = [
  { id: "1", text: "Dashboard", icon: <DashboardIcon /> },
  { id: "2", text: "Settings", icon: <SettingsIcon /> },
];

const folderSections = [
  {
    id: "1",
    menuItemId: "2",
    text: "Settings",
    folderIcon: <FolderIcon />,
    folders: [{ id: "a", name: "Profile" }, { id: "b", name: "Security" }],
  },
];

const App = () => {
  const handleTabClick = (tabId) => {
    console.log(`Tab clicked: ${tabId}`);
  };

  const handleFolderClick = (sectionId, folderId) => {
    console.log(`Folder clicked: Section ${sectionId}, Folder ${folderId}`);
  };

  const handleAddFolder = (sectionId, newFolder) => {
    console.log(`New folder added to Section ${sectionId}:`, newFolder);
  };

  const handleSearch = (searchTerm) => {
    console.log(`Search term: ${searchTerm}`);
  };

  return (
    <Router>
      <Sidebar
        menuItems={menuItems}
        folderSections={folderSections}
        onTabClick={handleTabClick}
        onFolderClick={handleFolderClick}
        onAddFolder={handleAddFolder}
        logo="path/to/your/logo.png"
        showSearch={true}
        onSearch={handleSearch}
      />
    </Router>
  );
};

export default App;

```

## Props

| Prop              | Type      | Default | Description                                             |
|-------------------|-----------|---------|---------------------------------------------------------|
| `menuItems`       | Array     | `[]`    | Array of menu items with `id`, `text`, and `icon`       |
| `folderSections`  | Array     | `[]`    | Array of folder sections with `id`, `menuItemId`, `text`, `folderIcon`, and `folders` |
| `onTabClick`      | Function  | `null`  | Callback function when a tab is clicked                 |
| `onFolderClick`   | Function  | `null`  | Callback function when a folder is clicked              |
| `onAddFolder`     | Function  | `null`  | Callback function when a new folder is added            |
| `customStyles`    | Object    | `{}`    | Custom styles for various parts of the component        |
| `logo`            | String    | `null`  | URL of the logo image                                   |
| `showSearch`      | Boolean   | `false` | Show/hide the search bar                                |
| `onSearch`        | Function  | `null`  | Callback function for search input changes              |


## Customization
You can customize the Side by passing additional props or overriding the default styles:

```
<Sidebar
  menuItems={menuItems}
  folderSections={folderSections}
  onTabClick={handleTabClick}
  onFolderClick={handleFolderClick}
  onAddFolder={handleAddFolder}
  customStyles={{
    container: { backgroundColor: "#f4f4f4" },
    paper: { backgroundColor: "#ffffff" },
    button: { color: "#333" },
    buttonText: { fontSize: "14px" },
    foldersBgColor: "#e0f7fa",
    foldersList: { padding: "16px" },
    foldersHeader: { backgroundColor: "#00796b" },
    folderItem: { padding: "8px 16px" },
    newFolderInput: { margin: "8px 0" },
  }}
  logo="path/to/your/logo.png"
  showSearch={true}
  onSearch={handleSearch}
/>


```

<<<<<<< HEAD
## Images
|Sidebar Open | Sidebar collapse|
|:-:|:-:|
|![Sidebar Image](https://github.com/akshay-7span/react-component-library/blob/VS-230/Sidebar/sidebar.png)|![Sidebar Image](https://github.com/akshay-7span/react-component-library/blob/VS-230/Sidebar/sidebar-collapse.png)


## Author
- Jenish Dadhania

=======
>>>>>>> 285edab (VS-230 Publish Sidebar component in npm library)
## Contributing
If you would like to contribute to the project, please follow these steps:
1. Fork the repository
2. Create a new branch (git checkout -b feature/your-feature)
3. Make your changes
4. Commit your changes (git commit -m 'Add some feature')
5. Push to the branch (git push origin feature/your-feature)
6. Open a Pull Request


## License
<<<<<<< HEAD
This project is licensed under the MIT License
=======
This project is licensed under the MIT License - see the LICENSE file for details.
>>>>>>> 285edab (VS-230 Publish Sidebar component in npm library)

## Contact
If you have any questions or suggestions, feel free to open an issue or contact me directly at [yo@7span.com].


Made with by 7span
##### This `README.md` file provides comprehensive details about the Sidebar component, including installation instructions, usage examples, prop descriptions, customization options, and the actual component code. Let me know if you need any more adjustments!
<<<<<<< HEAD

=======
>>>>>>> 285edab (VS-230 Publish Sidebar component in npm library)
