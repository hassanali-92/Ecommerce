import { products as DBProducts, priceRange } from "./product";

export const getVisibleProducts = (
  selectedCategories = [],
  selectedRating = 0,
  priceRangeFilter = { min: priceRange.min, max: priceRange.max },
  sortOption = "none" // 👈 new param
) => {
  let products = [...DBProducts];

  // ✅ Rating Filter
  if (selectedRating > 0) {
    products = products.filter((product) => product.rating >= selectedRating);
  }

  // ✅ Category Filter
  if (selectedCategories.length > 0) {
    products = products.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  // ✅ Price Range Filter
  products = products.filter(
    (product) =>
      product.price >= priceRangeFilter.min &&
      product.price <= priceRangeFilter.max
  );

  // ✅ Sorting Logic
  if (sortOption === "priceLowToHigh") {
    products.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighToLow") {
    products.sort((a, b) => b.price - a.price);
  }

  return products;
};
