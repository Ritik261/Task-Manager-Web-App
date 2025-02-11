# Todo App - MERN Stack

## About the Project
This is a MERN (MongoDB, Express.js, React.js, Node.js) Todo application built using Create React App. It allows users to create, manage, and delete tasks in a todo list.

## Getting Started
To get started with this project, follow these steps:

1. Open the project directory in your terminal.
2. Run `npm start` to start the app in development mode.
3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Available Scripts
In the project directory, you can run several scripts:

### Frontend

- `npm start`: Starts the app in development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency and copies all configuration files and dependencies into the project.

### Backend

- `npm start`: Starts the backend server.
- `npm run test`: Runs the backend tests.
# Configuration Guide

## Setting Up Environment Variables

To configure the backend, follow these steps:

1. **Create a `.env` file** inside the `backend` directory.
2. **Copy and paste the following code** into the `.env` file:

```env
MONGO_URI=Your mongodb URI
JWT_SECRET=a random secret key like - mybirthday4july
```

## Notes:
- Ensure you replace `Your mongodb URI` with your actual **MongoDB connection string**.
- Use your **Gmail address** for `GMAIL_USERNAME`.
- Generate an **App Password** in your Google account settings and use it as `GMAIL_PASSWORD`.
- The `PORT` is set to **8000**, but you can modify it if needed.
- Set a strong **JWT_SECRET** for authentication security.

After setting up the `.env` file, restart your backend server to apply the changes.

