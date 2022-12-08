import React from "react";
import { Routes, Route } from "react-router-dom";
import CandiesList from "./components/CandiesList";
import CandyDetail from "./components/CandyDetail";
import Navbar from "./components/NavBar";
import HomePage from "./pages/Home";
const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/candies" element={<CandiesList />} />
          <Route path="/candies/:candyId" element={<CandyDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default Root;
