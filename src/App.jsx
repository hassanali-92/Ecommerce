import { useState } from "react";
import CategriesFilter from "./components/CategriesFilter";
import Products from "./components/Products";
import { getVisibleProducts } from "./data/producted-filter";
import RatingFilter from "./components/Rating-filter";
import { priceRange } from "./data/product";
import Pricefilter from "./components/Pricefilter";
import Sortprice from "./components/Sortprice";

function App() {
  const [selectedCat, setSelectedCat] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortOption, setSortOption] = useState("none");
  const [price, setPrice] = useState({
    min: priceRange.min,
    max: priceRange.max,
  });

  // Category Change
  const onChangeCat = (category, isChecked) => {
    if (isChecked) {
      setSelectedCat([...selectedCat, category]);
    } else {
      setSelectedCat(selectedCat.filter((cat) => cat !== category));
    }
  };

  // Rating change
  const onChangeRatingHandler = (rating) => {
    setSelectedRating(Number(rating));
  };

  // Price change
  const onPriceChange = (e) => {
    setPrice((prev) => ({
      ...prev,
      max: Number(e.target.value),
    }));
  };

  // Sorting change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filter products
  let filterProducts = getVisibleProducts(
    selectedCat,
    selectedRating,
    price,
    sortOption
  );

  

  // Clear filters
  const clearAll = () => {
    setSelectedCat([]);
    setSelectedRating(0);
    setPrice({ min: priceRange.min, max: priceRange.max });
    setSortOption("none");
  };

  const removeCategory = (cat) => {
    setSelectedCat((prev) => prev.filter((c) => c !== cat));
  };
  const removeRating = () => setSelectedRating(0);
  const removePrice = () =>
    setPrice({ min: priceRange.min, max: priceRange.max });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* 🔥 Modern Filter Navbar */}
      <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm mb-6 px-5 py-4 flex flex-wrap justify-between items-center gap-4">

        {/* Active Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-gray-700">Filters:</span>

          {selectedCat.map((cat) => (
            <div
              key={cat}
              className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full border border-blue-300"
            >
              {cat}
              <button
                onClick={() => removeCategory(cat)}
                className="text-blue-600 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))}

          {selectedRating > 0 && (
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full border border-green-300">
              Rating: {selectedRating}
              <button
                onClick={removeRating}
                className="text-green-600 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          )}

          {price.max !== priceRange.max && (
            <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full border border-yellow-300">
              Up to ${price.max}
              <button
                onClick={removePrice}
                className="text-yellow-600 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          )}

          {(selectedCat.length > 0 ||
            selectedRating > 0 ||
            price.max !== priceRange.max) && (
            <button
              onClick={clearAll}
              className="ml-2 text-red-600 font-medium hover:text-red-700"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Sort */}
        <Sortprice sort={sortOption} ha={handleSortChange} />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-4">

        {/* Sidebar */}
        <div className="col-span-12 md:col-span-3 space-y-4">

          <div className="bg-white rounded-lg shadow p-4">
            <CategriesFilter
              selectedCat={selectedCat}
              onChangeCat={onChangeCat}
            />
          </div>

          <Pricefilter price={price} HandlePriceRange={onPriceChange} />

          <div className="bg-white rounded-lg shadow p-4">
            <RatingFilter
              onChangeRating={onChangeRatingHandler}
              selectedRating={selectedRating}
            />
          </div>
        </div>

        {/* Products */}
        <div className="col-span-12 md:col-span-9 bg-white rounded-lg shadow p-4">
          <Products products={filterProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
