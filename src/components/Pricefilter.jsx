import React from "react";
import { priceRange } from "../data/product";

const Pricefilter = ({ price, HandlePriceRange }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <label className="font-semibold">
        Price: ${price.min} - ${price.max}
      </label>
      <input
        type="range"
        min={price.min}
        max={priceRange.max}
        value={price.max}
        onChange={HandlePriceRange}
        className="w-full"
      />
    </div>
  );
};

export default Pricefilter;
