import React from "react";

const Sortprice = ({ sort, ha }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-300">Sort:</span>
      <select
        value={sort}
        onChange={ha}
        className="bg-gray-800 text-white px-3 py-1 rounded-lg cursor-pointer"
      >
        <option value="none">Default</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sortprice;
