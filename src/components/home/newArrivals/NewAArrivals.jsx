import React from "react";
import Products from "../../products/Products";
import { TITLES } from "../../../constants";
import { newArrivalProducts } from "../../utils/mockData";

const NewArrivals = () => {
  return (
    <div className="container">
      <Products title={TITLES.NEW_ARRIVALS} products={newArrivalProducts} />
    </div>
  );
};

export default NewArrivals;
