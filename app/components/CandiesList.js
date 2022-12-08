import React, { useEffect } from "react";
import { fetchAllCandiesAsync } from "../store";
import { useDispatch, useSelector } from "react-redux";
function CandiesList() {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.candies);

  useEffect(() => {
    dispatch(fetchAllCandiesAsync);
  }, []);

  const renderedCandiesList = candies.map((candy) => {
    return (
      <div key={candy.id}>
        <img alt="candy image" src={candy.imageUrl} />
        <h3>Candy name:</h3>
        <p> {candy.name}</p>
        <h3>Description</h3>
        <p>{candy.description}</p>
        <h3>Quantity</h3>
        <p>{candy.quantity}</p>
      </div>
    );
  });
  return <div>{renderedCandiesList}</div>;
}

export default CandiesList;
