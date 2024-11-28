/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import Recipient from "./components/Recipient/Recipient";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Route for Transaction Form */}
          <Route path="/" element={<User />} />

          {/* Route for Transaction Page */}
          <Route path="/recipient" element={<Recipient />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
