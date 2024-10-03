# React `Comment Widget` with Reply, Edit, and Context API Implementation ###

This project is a simple comment widget built using React and Vite, with TailwindCSS for styling. It uses ContextAPI to manage state for comments and replies, avoiding props drilling for the replyComment feature.

### Features
    Add, edit, and delete comments.
    Reply to comments.
    State management using Context API.

### Getting Started
Follow these instructions to set up the project on your local machine.

### Prerequisites
    Node.js (Ensure you have a version installed that works with Vite)
    Vite
    TailwindCSS

### 1. Create a React Project Using Vite
    npm create vite@latest comment-widget -- --template react
    cd comment-widget
    npm install
### 2. Install TailwindCSS and configure it
    npm install -D tailwindcss postcss autoprefixer
### 3. Implement ContextAPI to Avoid Props Drilling
### 4. start the development server
    npm start
### 5. build your application for production
    npm run build

Now, your project is set up to handle comments and replies efficiently with the help of ContextAPI, avoiding prop drilling issues.
****************
# "Code Walkthrough":

### 1. Setting up the context

1. Create `CommentContext.jsx` in the src folder.
2. CommentProvider is a react component that uses useState to manage comments and provide functions for `edit, delete, add , reply ` to comments.

    ### Functions:
    `handleAddComment`: Adds a new comment to the state and updates local storage.
    `handleEditComment`: Edits an existing comment based on its index.
    `handleDeleteComment`: Deletes a comment by filtering it out of the state using index.
    `handleReply`: Adds a reply to a specific comment.

### 2. CommentBox Component
1. This component displays the comment input box and the list of comments.
2. `useContext(CommentContext)`: This hook allows you to access the context value (comments and functions) provided by the CommentProvider.
3. `State Management`: It maintains the state for the comment input (inputComment), button text (commentBtnText), and the index of the comment being edited (editIndex).
4. `Rendering`: It maps over the comments from the context and renders the PostedComments component for each comment.

###  PostedComments Component
1. This component displays individual comments and provides options to edit, delete, and reply.
2. `Reply Functionality`: It shows buttons to reply, edit, and delete a comment. It also toggles the reply input visibility.
3. `Rendering Replies`: If there are replies, they are displayed below the comment.

### ReplyComments Component
1. This component handles the input for replies to comments.
2. `reply Management`: It allows users to input a reply and sends it to the context for state management.
3. `State Management`: It uses useState to manage the value of the reply input.

### Integrating the Provider
1. Finally, Wrap you entire application(part of it) in the `CommentProvider` to make comments state and functions available throughout you component tree.

