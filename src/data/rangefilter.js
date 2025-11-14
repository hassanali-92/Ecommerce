import { products } from "./product";

const findRange = () => {
  let min = productss[0].price;
  let max = 0;

  products.forEach((product) => {
    if (product.price < min) min = product.price;
    if (product.price > max) max = product.price;
  });

  return { min, max };
};
export const priceRange = findRange();