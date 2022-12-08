import React, { Fragment, useEffect } from "react";
import { fetchAllCandiesAsync } from "../store";
import { useDispatch, useSelector } from "react-redux";
import CandyItem from "./CandyDetail";
import { Link } from "react-router-dom";
function CandiesList() {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.candies);

  useEffect(() => {
    dispatch(fetchAllCandiesAsync());
  }, []);

  const renderedCandiesList = candies.map((candy) => {
    return (
      <div key={candy.id}>
        <Link to={`/candies/${candy.id}`}>
          <h3>Candy: {candy.name}</h3>
        </Link>
      </div>
    );
  });
  return <Fragment>{renderedCandiesList}</Fragment>;
}

export default CandiesList;
