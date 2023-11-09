# Todos FireBase V1.0.1

![npm](https://img.shields.io/badge/react-18-blue)
![npm](https://img.shields.io/badge/next-14.0.1-purple)
![npm](https://img.shields.io/badge/firebase-10.5.2-orange)
![npm](https://img.shields.io/badge/firebase-auth-red)

# Project Title: Todo App - A Next.js Task Manager

# Description:

TodoApp is a user-friendly web application built using Next.js that aims to streamline task management with style and simplicity. With Google Authentication powered by Firebase Auth, users can effortlessly sign in and dive into a seamless task management experience.

### Key Features:

- **User Authentication**: Enjoy a secure and personalized experience by signing in with your Google account, thanks to Firebase Auth integration.

- **Effortless Task Management**: Create, mark tasks as done, and delete items with a user-friendly interface that keeps things simple and efficient.

- **Impressive Animations**: The app doesn't just handle tasks; it impresses users with visually appealing animations that elevate the user experience.

- **Intuitive UX Design**: A thoughtfully crafted user interface ensures that task management is straightforward and enjoyable.

#### Why Todo App?

In a world where time is of the essence, managing your tasks efficiently is vital. SimpleToDo simplifies the process by providing a user-centric design, smooth animations, and the convenience of Google authentication. The project is an ode to the beauty of simplicity, offering a straightforward yet aesthetically pleasing task management experience. User feedback is highly valued, and we believe that the words of our users truly define the worth of this app.

Join us on this journey to make task management a breeze while enjoying a visually engaging and satisfying user experience.

# Installation

**Step 1: Clone the Project**

```bash
git clone https://github.com/nishansanjuka/todos-firebase.git
```
**Step 2: Navigate to the Project Directory**

```bash
cd todos-firebase
```
**Step 3: Install Dependencies**
```bash
npm install
```
This command will read the `package.json` file and install all the necessary packages.

**Step 4: Set Up Firebase Configuration**

If you haven't already configured Firebase, you need to set up your Firebase project and add the Firebase configuration to your Next.js project. Follow the Firebase documentation [firebase docs](https://firebase.google.com/docs/) for instructions on setting up Firebase and obtaining your Firebase configuration object.

**Step 5: Set Up .env.local File**
To set the environment variables, create a file named `.env.local` in the project derectory and fill with your own firebase credentials:

### ENVIRONMENT VARIABLES

```javascript
    NEXT_PUBLIC_FIREBASE_API_KEY=api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=auth_domain
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=storage_bucket
    NEXT_PUBLIC_FIREBASE_APP_ID=app_id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=measurement_id
```

**Step 6: Start the Development Server**

```bash
npm run dev
```
This command will start the Next.js development server, and your project will be available at `http://localhost:3000`. You can access your web app from a web browser to see the results.

These steps will guide you from cloning the repository to running your Next.js project with Firebase authentication. Make sure to replace placeholder values with your actual project-specific information.


**Build the Application**

To build the Next.js application, run the following command

```bash
npm run build
```
This command will create a production-ready build of your application.

**Start the Production Server**

```bash
npm start
```
Your project will be available at http://localhost:3000 in a production environment.

## Firebase Security Rules
**If you want litle more secure way, add firebase security rules**

```yml
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{userId}/{document=**} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

# Dependencies.

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.<br/>
  ![npm](https://img.shields.io/badge/npm-18-red)

- [Next.js](https://nextjs.org/): A React framework for building server-rendered React applications.<br/>
  ![npm](https://img.shields.io/badge/npm-14.0.1-purple)

- [Firebase](https://www.npmjs.com/package/firebase): A platform for building web and mobile applicationss.<br/>
    ![npm](https://img.shields.io/badge/npm-10.5.2-orange)


- [encoding](https://www.npmjs.com/package/encoding): A JavaScript library for character encoding and decoding.<br/>
    ![npm](https://img.shields.io/badge/npm-0.1.13-blue)

- [Luxon](https://www.npmjs.com/package/luxon): A library for handling dates and times in JavaScript.<br/>
  ![npm](https://img.shields.io/badge/npm-3.4.3-rose)

- [react-hook-form](https://react-hook-form.com/): Performant, flexible, and extensible forms with easy-to-use validation.<br/>
  ![npm](https://img.shields.io/badge/npm-7.48.2-purple)

- [react-icons](https://www.npmjs.com/package/react-icons): A collection of React icons and icon components.<br/>
  ![npm](https://img.shields.io/badge/npm-4.11.0-black)

- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner): A library for adding loading spinners to your React application.<br/>
  ![npm](https://img.shields.io/badge/npm-5.4.5-black)

- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton): Create loading skeleton screens in React applications.<br/>
  ![npm](https://img.shields.io/badge/npm-3.3.1-black)

## SnapShots

![SignUp](./screenshots/Screenshot%202023-11-06%20235202.png)
![homr](./screenshots/Screenshot%202023-11-06%20231951.png)
![load](./screenshots/Screenshot%202023-11-06%20234258.png)
![todos](./screenshots/Screenshot%202023-11-06%20235101.png)
![mobile](./screenshots/Screenshot%202023-11-06%20235138.png)
