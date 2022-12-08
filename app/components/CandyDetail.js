import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCandyAsync } from "../store";
import CandyForm from "./CandyForm";
function CandyDetail() {
  const dispatch = useDispatch();
  const candy = useSelector((state) => state.candy);
  const { candyId } = useParams();

  useEffect(() => {
    dispatch(fetchCandyAsync(candyId));
  }, []);

  return (
    <div>
      <img alt="candy image" src={candy.imageUrl} />
      <h3>Candy name:</h3>
      <p> {candy.name}</p>
      <h3>Description</h3>
      <p>{candy.description}</p>
      {/* <h3>Quantity</h3>
      <p>{candy.quantity}</p> */}
      <CandyForm quantity={candy.quantity} candyId={candyId} />
    </div>
  );
}

export default CandyDetail;
