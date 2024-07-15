# Custom Quiz  Component

The `Quiz` component is a flexible and interactive card component for displaying quiz information. It includes various functionalities such as editing, moving, deleting, and playing a quiz. The component is designed to be customizable and can adapt to different use cases with the help of props.


## Features

- Displays quiz details including title, plays, questions, status, and folder name.
- Allows editing, moving, deleting, and playing the quiz through menu actions.
- Customizable menu items and action components.
- Responsive design with hover and click interactions.

## Installation

Install the necessary dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Install the package via npm:

```bash
npm install @7span/phoenix-react-ui-quizcard
```

Or via yarn:
```bash
yarn add @7span/phoenix-react-ui-quizcard
```

## Usage
Here's a basic example of how to use the custom Sidebar component in your React application:

```
import React from "react";
import Quiz from " @7span/phoenix-react-ui-quizcard";
import MoveQuizModelComponent from "./MoveQuizModelComponent"; // Your custom move quiz modal component
import ActionItemsComponent from "./ActionItemsComponent"; // Your custom action items component

const App = () => {
  const handleDoubleClick = (id) => {
    console.log("Quiz double-clicked:", id);
  };

  const handleDelete = (id) => {
    console.log("Quiz deleted:", id);
  };

  const handleEdit = (id) => {
    console.log("Quiz edited:", id);
  };

  const handleMove = (id) => {
    console.log("Quiz moved:", id);
  };

  const handlePlay = (id) => {
    console.log("Quiz played:", id);
  };

  const menuItems = [
    {
      name: "Custom Action",
      onClick: () => console.log("Custom action triggered"),
    },
  ];

  return (
    <Quiz
      title="Sample Quiz"
      plays={10}
      questions={5}
      status="DRAFT"
      id={1}
      folderName="Sample Folder"
      coverImage="path/to/cover/image.jpg"
      onDoubleClick={handleDoubleClick}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onMove={handleMove}
      onPlay={handlePlay}
      menuItems={menuItems}
      MoveQuizModelComponent={MoveQuizModelComponent}
      ActionItemsComponent={ActionItemsComponent}
    />
  );
};

export default App;

```

## Props
| Prop                      | Type     | Default | Description                                                      |
|---------------------------|----------|---------|------------------------------------------------------------------|
| `title`                   | string   | `null`  | The title of the quiz.                                           |
| `plays`                   | number   | `0`     | The number of times the quiz has been played.                    |
| `questions`               | number   | `0`     | The number of questions in the quiz.                             |
| `status`                  | string   | `null`  | The status of the quiz (e.g., DRAFT).                            |
| `id`                      | number   | `null`  | The unique identifier of the quiz.                               |
| `folderName`              | string   | `null`  | The name of the folder containing the quiz.                      |
| `coverImage`              | string   | `null`  | The URL of the cover image for the quiz.                         |
| `onDoubleClick`           | function | `null`  | Callback function triggered on double-clicking the quiz card.    |
| `onDelete`                | function | `null`  | Callback function triggered on deleting the quiz.                |
| `onEdit`                  | function | `null`  | Callback function triggered on editing the quiz.                 |
| `onMove`                  | function | `null`  | Callback function triggered on moving the quiz.                  |
| `onPlay`                  | function | `null`  | Callback function triggered on playing the quiz.                 |
| `menuItems`               | array    | `null`  | Custom menu items to display in the action menu.                 |
| `MoveQuizModelComponent`  | element  | `null`  | Custom component for handling the move quiz modal.               |
| `ActionItemsComponent`    | element  | `null`  | Custom component for displaying action items in the menu.        |




## Customization
You can customize the styles of the ActionItems component and its elements by modifying the sx prop in the component's JSX.

## Images
|Quiz Card|
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

