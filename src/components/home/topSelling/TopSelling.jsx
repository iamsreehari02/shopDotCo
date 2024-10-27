import React from "react";
import Products from "../../products/Products";
import { TITLES } from "../../../constants";
import { topSellingProducts } from "../../utils/mockData";

const TopSelling = () => {
  return (
    <div className="container">
      <Products title={TITLES.TOP_SELLING} products={topSellingProducts} />
    </div>
  );
};

export default TopSelling;
