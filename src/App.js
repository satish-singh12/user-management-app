import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Dashboard />
    </>
  );
};

export default App;
