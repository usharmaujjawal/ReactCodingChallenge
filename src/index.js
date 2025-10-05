import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ProfileCard from "./ProfileCard";
import DateCounter from "./DateCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ProfileCard /> */}
    <DateCounter />
  </React.StrictMode>
);
