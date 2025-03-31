# CollabTool

CollabTool is a collaboration tool built with React and Vite. It includes features for user registration, login, task management, and more.

## Features

- **Landing Page**: Introduction to the tool with a call-to-action button.
- **User Authentication**: Register and login functionality with local storage.
- **Dashboard**: Manage tasks with add, edit, and delete functionality.
- **Responsive Design**: Fully responsive design using Tailwind CSS.
- **Third-Party Login**: Options to login with Google and Microsoft accounts.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling.
- **Tailwind CSS**: Utility-first CSS framework.
- **React Router**: Declarative routing for React applications.
- **Local Storage**: Browser storage for user data.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd collab_tool
npm install
```

## Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/collab_tool
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Preview the production build locally.

### `npm run lint`

Runs ESLint to check for linting errors.

## License

This project is licensed under the MIT License.
