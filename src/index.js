import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FaClock } from "react-icons/fa";

// CLass component
// import ClockClass from "./ClassComponentLifeCycle/ClockClass";
// import ClockFunction from "./ClassComponentLifeCycle/ClockFunction";
// import WrapperClass from "./ClassComponentLifeCycle/WrapperClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Class component example
// root.render(
//   <React.StrictMode>
//     <ClockClass />
//   </React.StrictMode>
// );

// Function component example
// root.render(
//   <React.StrictMode>
//     <ClockFunction />
//   </React.StrictMode>
// );
// Wrapper component example
// root.render(
//   <React.StrictMode>
//     <WrapperClass />
//   </React.StrictMode>
// );
