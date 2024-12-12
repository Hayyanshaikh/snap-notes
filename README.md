## SPADS - Personal Task Management with Local Storage

Welcome to SPADS, your ultimate personal task management system with local storage integration. Below are the features and functionalities this application offers to help you organize your daily tasks and notes effectively while ensuring data persistence.

![enter image description here](https://i.ibb.co/TBXCB6G/Notes.png)
[![SPADS Dashboard](https://i.ibb.co/TBXCB6G/Notes.png)]([https://your-website-link.com](https://stickypads.netlify.app/))


## Features

-   **Notes Section**: The main area for organizing your notes and tasks.
-   **Edit, Delete, and Change Color Options**: Accessible through the three-dot menu at the top right of each note card.
-   **Editable Titles**: Click on any title to switch to edit mode. The title and content are searchable.
-   **Color-Coded Notes**: Multiple colors are supported for categorizing notes (e.g., work, personal, health goals).
-   **Data Persistence with Local Storage**: Tasks and notes are stored locally so that they remain even after a page refresh.

### How to Use:

1.  **Add New Notes**: Click on the `+` button on the left to add a new note.
2.  **Edit/Delete/Change Color**:
    -   To **edit** a note, click on the three-dot menu on the note card and select `Edit`.
    -   To **delete** a note, click on the three-dot menu and select `Delete`.
    -   To **change color**, select `Change Color` from the menu and pick your preferred color.

### Local Storage Integration

In SPADS, local storage is used to persist data across page reloads. This ensures that your tasks and notes are not lost even when you refresh the browser window or navigate away from the app.

-   **Saving Data**: Whenever a note is added, edited, or deleted, the updated state is saved to local storage.
-   **Retrieving Data**: When the app loads, it retrieves the tasks and notes from local storage to display on the screen.
-   **How it Works**:
    -   **Saving**: When a note is modified or added, it’s first updated in the state of the React component, then the entire list of notes is stored in local storage using `localStorage.setItem('notes', JSON.stringify(updatedNotes))`.
    -   **Retrieving**: When the app starts or refreshes, the stored data is loaded with `JSON.parse(localStorage.getItem('notes'))`, which initializes the note state with previously saved tasks and notes.

By integrating local storage in this way, SPADS ensures your task data is always available, providing a seamless user experience across sessions.
