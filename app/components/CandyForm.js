import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCandyAsync, deleteCandyAsync } from "../store";
import { useNavigate } from "react-router-dom";
function CandyForm({ quantity, candyId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);

  useEffect(() => {
    setUpdatedQuantity(quantity);
  }, [quantity]);

  const handleIncrement = (event) => {
    event.preventDefault();
    setUpdatedQuantity((prev) => prev + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setUpdatedQuantity((prev) => prev - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(updatedQuantity);
    dispatch(updateCandyAsync({ candyId, quantity: updatedQuantity }));
  };

  const handleDeleteCandy = (event) => {
    event.preventDefault();
    dispatch(deleteCandyAsync(candyId));
    navigate("/candies");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Quantity</h3>
        <input placeholder={updatedQuantity} />
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDeleteCandy}>Delete</button>
    </>
  );
}

export default CandyForm;
