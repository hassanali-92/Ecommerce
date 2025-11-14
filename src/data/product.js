export const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    category: "Smartphone",
    price: 1500,
    rating: 5,
    image: "https://mymobile.pk/cdn/shop/files/large_apple-iphone-15-pro-max_4.jpg?v=1708206108",
    description: "Apple iPhone 15 Pro with A17 Bionic chip and 256GB storage."
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    category: "Smartphone",
    price: 1200,
    rating: 1,
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-5g.jpg",
    description: "Samsung flagship phone with Snapdragon 8 Gen 2 and 12GB RAM."
  },
  {
    id: 3,
    title: "MacBook Air M2",
    category: "Laptop",
    price: 1300,
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JrIKemAM31mICHoIOBebDms6B9j1NbwjUw&s",
    description: "Apple MacBook Air with M2 chip and 8GB RAM."
  },
  {
    id: 4,
    title: "Dell XPS 13",
    category: "Laptop",
    price: 1100,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/A1CE6jOdoRL.png",
    description: "Dell XPS 13 laptop with Intel i7, 16GB RAM."
  },
  {
    id: 5,
    title: "Apple Watch Series 9",
    category: "Smartwatch",
    price: 400,
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgDIWIRvxDzqsjvEice2unm-3cBVdGcernw&s",
    description: "Apple Watch Series 9 with fitness tracking and ECG."
  },
  {
    id: 6,
    title: "Sony WH-1000XM5",
    category: "Headphones",
    price: 300,
    rating: 5,
    image: "https://games4u.pk/cdn/shop/files/sony_headphone_10.jpg?v=1729879647",
    description: "Sony noise-cancelling wireless headphones."
  },
  {
    id: 7,
    title: "Bose QuietComfort 45",
    category: "Headphones",
    price: 280,
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaqxZgwjZuFNY1Skga8OuKPlBuu-C-dACRA&s",
    description: "Bose over-ear wireless headphones with ANC."
  },
  {
    id: 8,
    title: "iPad Air",
    category: "Tablet",
    price: 600,
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8gU2EZqLof7A3RHfbOJpSMCD_x9t6bdlGw&s",
    description: "Apple iPad Air with M1 chip and 64GB storage."
  },
  {
    id: 9,
    title: "Samsung Galaxy Watch 6",
    category: "Smartwatch",
    price: 350,
    rating: 2,
    image: "https://xcessorieshub.com/wp-content/uploads/2023/07/pametni-sat-samsung-galaxy-watch-6-classic-sm-r950-43mm-blac-75384-sm-r950nzkaeue_1-1.webp",
    description: "Samsung smartwatch with AMOLED display."
  }
];
const findRange = () => {
  let min = products[0].price;
  let max = 0;

  products.forEach((product) => {
    if (product.price < min) min = product.price;
    if (product.price > max) max = product.price;
  });

  return { min, max };
};
export const priceRange = findRange();
