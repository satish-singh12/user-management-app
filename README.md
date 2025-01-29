
# Application for User Dashboard Management

The User Management App is a simple React-based application that allows users to add, edit, delete, and view users with pagination support. It is built using modern React features and uses a mock API for handling user data.

---

## Table of Contents

- [Application for User Dashboard Management](#application-for-user-dashboard-management)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Features](#features)
  - [Development Setup](#development-setup)
    - [Tech Stack](#tech-stack)
    - [DevDependencies](#devdependencies)
- [API Integration](#api-integration)
    - [API Functions (Located in utils/fetchDataApi.js)](#api-functions-located-in-utilsfetchdataapijs)
- [Available Scripts](#available-scripts)
  - [Getting Started with Create React App](#getting-started-with-create-react-app)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Deployment](#deployment)
  - [License](#license)

---

## Getting Started

### Features
- Add new users with first name, last name, email, and department.
- Edit existing user details.
- Delete users from the list.
- Paginated user display.
- Form validation with error handling.
- Testing Setup: Jest testing configuration, tests for PaginationComponent, UserInputComponent, and UsersDisplayComponent
- Notifications using react-hot-toast.
- Responsive UI for better usability on different devices.

## Development Setup

### Tech Stack
- **Frontend**: React 19, React Hooks
- **Styling**: CSS3
- **API Calls**: Axios
- **Notifications**: react-hot-toast

### DevDependencies

The following development dependencies are used in this project for setting up Babel, Jest, and Testing Libraries:

```json
"devDependencies": {
  "@babel/core": "^7.26.7",
  "@babel/preset-env": "^7.26.7",
  "@babel/preset-react": "^7.26.3",
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/react": "^16.2.0",
  "@testing-library/user-event": "^14.6.1",
  "babel-jest": "^29.7.0",
  "identity-obj-proxy": "^3.0.0",
  "jest": "^27.5.1"
}

# Project Structure

```
user-management-app/
├── src/
│   ├── components/
│   │   ├── UserInputComponent.js
│   │   ├── UsersDisplayComponent.js
│   │   ├── PaginationComponent.js
│   │   └── __tests__/
│   │       ├── UserInputComponent.test.js
│   │       ├── UsersDisplayComponent.test.js
│   │       └── PaginationComponent.test.js
│   ├── pages/
│   │   └── Dashboard.js
│   ├── utils/
│   │   └── fetchDataApi.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── reportWebVitals.js
├── babel.config.js
├── jest.config.js
├── package.json
├── README.md
└── setupTests.js

```

---

# Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/satish-singh12/user-management-app.git
   cd user-management-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the app in your browser at:
   ```bash
   http://localhost:3000
   ```

# API Integration

This app uses a mock API from https://jsonplaceholder.typicode.com/users to fetch, add, update, and delete users.

### API Functions (Located in utils/fetchDataApi.js)

```bash
export const getDataApi = () => apiCall("get", baseURL);
export const postDataApi = (formData) => apiCall("post", baseURL, formData);
export const putDataApi = (formData) => apiCall("put", `${baseURL}/${formData.id}`, formData);
export const deleteDataApi = (id) => apiCall("delete", `${baseURL}/${id}`);
```

# Available Scripts

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Deployment

To deploy the app, you can build it and host it using a static site service like Vercel, Netlify, or GitHub Pages:

```bash
npm run build
```

Then upload the build/ directory to your hosting provider.


## License

This project is licensed under the ISC License.

---

**Author**: Sateesh Singh