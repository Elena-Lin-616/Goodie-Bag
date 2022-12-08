import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCandyAsync } from "../store";
import { useNavigate } from "react-router-dom";
function AddCandyForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleQuantityInput = (event) => {
    setQuantity(event.target.value);
  };

  const handleImageUrlInput = (event) => {
    setImageUrl(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addNewCandyAsync({
        name,
        description,
        quantity,
        imageUrl,
      })
    );
    navigate("/candies");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameInput}></input>
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          min={0}
          max={10}
          value={quantity}
          onChange={handleQuantityInput}
        ></input>
      </div>
      <div>
        <label>imageUrl:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={handleImageUrlInput}
        ></input>
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={handleDescriptionInput} />
      </div>
      <button type="submit">Add candy</button>
    </form>
  );
}

export default AddCandyForm;
