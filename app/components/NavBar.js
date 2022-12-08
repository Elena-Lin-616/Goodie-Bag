import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h1>Goodie Bag</h1>
      <Link to="/">Home</Link>
      <Link to="/candies">Candies</Link>
      <Link to="/candies/add-new-candy">Add New Candy</Link>
    </nav>
  );
}
export default Navbar;
