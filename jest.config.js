module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Use babel-jest for JS and JSX files
  },
  testEnvironment: "jsdom", // Ensures you are running the tests in the browser-like environment
};
