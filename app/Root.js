import React from "react";
import { Routes, Route } from "react-router-dom";
import CandiesList from "./components/CandiesList";
import Navbar from "./components/NavBar";
const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Routes>
          <Route path="/candies" element={<CandiesList />} />
        </Routes>
      </main>
    </div>
  );
};

export default Root;
