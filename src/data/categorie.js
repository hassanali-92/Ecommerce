export const categories = [
  { id: 1, title: "Smartphone", image: "https://m.media-amazon.com/images/I/71vZypjNkPS._AC_SL1500_.jpg" },
  { id: 2, title: "Laptop", image: "https://m.media-amazon.com/images/I/61jCXMZP6SL._AC_SL1500_.jpg" },
  { id: 3, title: "Smartwatch", image: "https://m.media-amazon.com/images/I/61kJcGgfQSL._AC_SL1500_.jpg" },
  { id: 4, title: "Headphones", image: "https://m.media-amazon.com/images/I/71ZslmMNGhL._AC_SL1500_.jpg" },
  { id: 5, title: "Tablet", image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1500_.jpg" },
];

// Export only titles for filter
export const categoryTitles = categories.map((cat) => cat.title);
