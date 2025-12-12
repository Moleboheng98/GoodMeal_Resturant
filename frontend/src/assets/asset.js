// src/assets/asset.js

import food1 from './bananacaramel.jpg'
import food2 from './beer.webp'
import food3 from './BurgerChips.jpg'
import food4 from './champane.png'       
import food5 from './chickenrice.webp'
import food6 from './choccheesecake.jpg'
import food7 from './choctart.jpg'
import food8 from './fishveggies.jpg'
import food9 from './justburger.avif'
import food10 from './lemonscones.jpg'
import food11 from './orangejuice.jpg'
import food12 from './Ricebeef.jpg'       
import food13 from './steakveggies.jpeg'
import food14 from './toniclemon.jpg'
import food15 from './vegantiramasu.webp'
import food16 from './watermelonfrizzy.jpg'
import food17 from './wine.jpg'

// Categories
export const categoryItem = [
  { category_title: "All" },
  { category_title: "Rice" },
  { category_title: "Dessert" },
  { category_title: "Burger" },
  { category_title: "Drinks" }, // consistent plural
]

// Products
export const product = [
  {
    _id: "a",
    name: "Special Fried Rice With Chicken",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: food5,
    category: "Rice",
    date: 1716634345448,
  },
  {
    _id: "ab",
    name: "Freshly Baked Chocolate Cheesecake",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: food6,
    category: "Dessert",
    date: 1716621345448,
  },
  {
    _id: "ac",
    name: "Delicious Stir Fry Veggie with Steak",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    image: food12,
    category: "Rice",
    date: 1716234545448,
  },
  {
    _id: "ad",
    name: "Glass of Graciously Aged Wine",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 110,
    image: food17,
    category: "Drinks",
    date: 1716621345448,
  },
  {
    _id: "ae",
    name: "Grilled Fish with Veggies",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 130,
    image: food8,
    category: "Rice",
    date: 1716622345448,
  },
  {
    _id: "af",
    name: "Double Cheese Burger with Fries",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 140,
    image: food3,
    category: "Burger",
    date: 1716623423448,
  },
  {
    _id: "ag",
    name: "Just Burger with Cheese",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: food9,
    category: "Burger",
    date: 1716621542448,
  },
  {
    _id: "ah",
    name: "Vegan Tiramisu Dessert",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 140,
    image: food15,
    category: "Dessert",
    date: 1716622345448,
  },
  {
    _id: "ai",
    name: "Caramel Banana Dessert",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: food1,
    category: "Dessert",
    date: 1716621235448,
  },
  {
    _id: "aj",
    name: "Chocolate Tart Dessert",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 110,
    image: food7,
    category: "Dessert",
    date: 1716622235448,
  },
  {
    _id: "ak",
    name: "Lemon Scones",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 120,
    image: food10,
    category: "Dessert",
    date: 1716623345448,
  },
  {
    _id: "al",
    name: "Assorted Beer",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 150,
    image: food2,
    category: "Drinks",
    date: 1716624445448,
  },
  {
    _id: "am",
    name: "Champagne Glass with Sauce",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 130,
    image: food4,
    category: "Drinks",
    date: 1716625545448,
  },
  {
    _id: "an",
    name: "Orange Juice",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160,
    image: food11,
    category: "Drinks",
    date: 1716626645448,
  },
  {
    _id: "cd",
    name: "Watermelon Frizzy Drink",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160,
    image: food16,
    category: "Drinks",
    date: 1716626645448,
  },
  {
    _id: "de",
    name: "Tonic Lemon Drink",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160,
    image: food14,
    category: "Drinks",
    date: 1716626645448,
  },
  {
    _id: "ef",
    name: "Steak with Fried Veggies",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160,
    image: food13,
    category: "Rice",
    date: 1716626645448,
  },
]