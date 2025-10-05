import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ProfileCard from "./ProfileCard";
// import DateCounter from "./DateCounter";
import FlashCard from "./FlashCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ProfileCard /> */}
    {/* <DateCounter /> */}
    <FlashCard />
  </React.StrictMode>
);
