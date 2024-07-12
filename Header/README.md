# Custom Header Component

Header is a responsive React component designed using Material-UI. It features a customizable app bar that includes a logo, search bar, buttons, and an optional profile component. The component adapts to mobile view by providing a drawer menu.


## Features

- Responsive layout with support for mobile devices
- Logo with a clickable link
- Optional search bar
- Configurable left and right buttons
- Optional profile component
- Mobile drawer for easy navigation on smaller screens
## Installation

Install the package via npm:

```bash
npm install @7span/phoenix-react-ui-header
```

Or via yarn:
```bash
yarn add @7span/phoenix-react-ui-header
```

## Usage
Here's a basic example of how to use the custom Sidebar component in your React application:

```
import React from 'react';
import Header from '@7span/phoenix-react-ui-header';
import { Avatar } from '@mui/material';

const ProfileComponent = () => (
  <Avatar alt="User Name" src="/path/to/profile/picture.jpg" />
);

const App = () => {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  const handleLeftButtonClick = () => {
    console.log('Left button clicked');
  };

  const handleRightButtonClick = () => {
    console.log('Right button clicked');
  };

  return (
    <Header
      logo="path/to/your/logo.png"
      logoPath="/"
      showSearchBar={true}
      onSearch={handleSearch}
      leftButtonText="Left Button"
      rightButtonText="Right Button"
      showLeftButton={true}
      showRightButton={true}
      onLeftButtonClick={handleLeftButtonClick}
      onRightButtonClick={handleRightButtonClick}
      showProfile={true}
      ProfileComponent={<ProfileComponent />}
    />
  );
};

export default App;

```

## Props

| Prop                | Type      | Default | Description                                           |
|---------------------|-----------|---------|-------------------------------------------------------|
| `logo`              | string    | `null`  | Path to the logo image                                |
| `logoPath`          | string    | `/`     | Path to navigate to when the logo is clicked          |
| `showSearchBar`     | boolean   | `true`  | Whether to display the search bar                     |
| `onSearch`          | function  | `null`  | Function to handle search input changes               |
| `leftButtonText`    | string    | `null`  | Text for the left button                              |
| `rightButtonText`   | string    | `null`  | Text for the right button                             |
| `showLeftButton`    | boolean   | `true`  | Whether to display the left button                    |
| `showRightButton`   | boolean   | `true`  | Whether to display the right button                   |
| `onLeftButtonClick` | function  | `null`  | Function to handle left button clicks                 |
| `onRightButtonClick`| function  | `null`  | Function to handle right button clicks                |
| `showProfile`       | boolean   | `false` | Whether to display the profile component              |
| `ProfileComponent`  | element   | `null`  | Custom profile component to be displayed              |


## Customization
You can customize the styles of the Header component and its elements by modifying the sx prop in the component's JSX.

## Images
| Header Image |
|:-:|
|![Sidebar Image](https://github.com/akshay-7span/react-component-library/blob/VS-237/Header/Header.png)


## Author
- Jenish Dadhania

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
##### This `README.md` file provides comprehensive details about the Header component, including installation instructions, usage examples, prop descriptions, customization options, and the actual component code. Let me know if you need any more adjustments!

