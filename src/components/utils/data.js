export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 680 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 3,
  },
};

export const product = [
  {
    id: 1,
    img: "./shoe1.jpg",
    title: "Shozie Stylish Shoes Sneakers For Women",
    price: 300.20,
    rating: 4.9
  },
  {
    id: 2,
    img: "./shoe2.jpg",
    title: "White Sneakers for Men by RED TAPE",
    price: 300.20,
    rating: 5.0
  },
  {
    id: 3,
    img: "./shoe3.jpg",
    title: "YSCROWD Men's Sneakers Comfort",
    price: 320,
    rating: 4.0
  },
  {
    id: 4,
    img: "./shoe4.jpg",
    title: "Shozie Stylish Shoes Sneakers For Women",
    price: 380.50,
    rating: 4.9
  },
  {
    id: 5,
    img:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Vans sneakers",
    price: "$38.99",
    rating: 4,
  },
];

export const event =[
  {img: "./hoodie2.png"},
  {img: "./purepng.png"},
  {img: "./jam2.png"},
  // {img: "./sepatu2.png"},
];


export const promos = [
  {
    name: 'promo1',
    img : './promo1.jpg',
  },
  {
    name: 'promo2',
    img : './promo2.jpg',
  },
  {
    name: 'promo3',
    img : './promo3.jpg',
  },
]
