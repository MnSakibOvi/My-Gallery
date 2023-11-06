# My-Gallery Documentation

## Overview
This documentation provides an in-depth overview of the Gallery application's codebase, which is built using React. The application allows users to upload and manage images in a grid layout with the ability to select and delete images.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Dependencies](#dependencies)
3. [App.js](#appjs)
4. [App.css](#appcss)
5. [DraggableImage.js](#draggableimagejs)
6. [Grid.js](#gridjs)
7. [Header.js](#headerjs)
8. [Image.js](#imagejs)
9. [ItemTypes.js](#itemtypesjs)

## Project Structure <a name="project-structure"></a>
The Gallery application's codebase is structured as follows:

- **App.js**: The main entry point of the application.
- **App.css**: The stylesheet for the application.
- **DraggableImage.js**: Component responsible for draggable images.
- **Grid.js**: Component handling the grid layout and image management.
- **Header.js**: Header component with title and action buttons.
- **Image.js**: A reusable component for displaying images.
- **ItemTypes.js**: Constants related to item types for drag-and-drop functionality.

## Dependencies <a name="dependencies"></a>
The Gallery application relies on several dependencies. Below are the key dependencies and their versions:

- **React**: A JavaScript library for building user interfaces.

- **react-dnd**: A set of higher-order components to help with drag-and-drop functionality in React.

- **react-dnd-html5-backend**: A specific backend for the `react-dnd` library that enables HTML5 drag-and-drop support.

Please ensure that you have these dependencies installed with the specified versions to successfully run the Gallery application.

## App.js <a name="appjs"></a>
- **Purpose**: `App.js` serves as the main component for the Gallery application.
- **Functionality**:
  - It manages the count of selected images using the `useState` hook.
  - Provides a function, `onDeleteSelectedImages`, to reset the selected image count when deleting selected images.
- **Components**:
  - Utilizes the `Grid` component to display the images in a grid layout.

## App.css <a name="appcss"></a>
- **Purpose**: `App.css` contains the application's Cascading Style Sheets (CSS) definitions.
- **Functionality**:
  - Defines styles for the entire application, including the layout, fonts, and text alignment.
  - Provides styles for the header, grid, and images.

## DraggableImage.js <a name="draggableimagejs"></a>
- **Purpose**: `DraggableImage.js` defines a component responsible for draggable images within the grid.
- **Functionality**:
  - Utilizes the `useDrag` and `useDrop` hooks from React DnD to enable drag-and-drop functionality.
  - Displays images and checkboxes for image selection.
  - Provides a function, `onToggleSelection`, to toggle image selection.
  - Implements a `moveImage` function for reordering images within the grid.

## Grid.js <a name="gridjs"></a>
- **Purpose**: `Grid.js` is responsible for managing the grid layout and image management in the Gallery application.
- **Functionality**:
  - Manages the state of `images` and `firstImageIndex` using the `useState` hook.
  - Implements `handleImageUpload` to add new images to the grid.
  - Handles image selection and deletion through the `toggleImageSelection` and `onDeleteSelectedImages` functions.
  - Implements the grid layout for displaying images, utilizing the `DraggableImage` component.
  - Provides the ability to reorder images within the grid using the `moveImage` function.

## Header.js <a name="headerjs"></a>
- **Purpose**: `Header.js` defines the header component with the application title and action buttons.
- **Functionality**:
  - Displays the count of selected images.
  - Provides a button to delete selected images, calling the `onDeleteSelectedImages` function when clicked.

## Image.js <a name="imagejs"></a>
- **Purpose**: `Image.js` is a reusable component for displaying images with optional selection checkboxes.
- **Functionality**:
  - Displays images with optional checkboxes for image selection.
  - Provides a function, `onToggleSelection`, for toggling image selection.

## ItemTypes.js <a name="itemtypesjs"></a>
- **Purpose**: `ItemTypes.js` defines constants related to item types for drag-and-drop functionality.
- **Functionality**:
  - Provides a single constant, `IMAGE`, used to identify image items during drag-and-drop operations.
