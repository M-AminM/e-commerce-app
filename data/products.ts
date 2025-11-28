export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/images/products/headphones.jpg",
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation and superior sound quality. Perfect for music lovers and professionals.",
    inStock: true,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image: "/images/products/smartwatch.jpg",
    category: "Electronics",
    description: "Feature-packed smartwatch with fitness tracking, notifications, and long battery life. Stay connected on the go.",
    inStock: true,
    rating: 4.7,
    reviews: 256,
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    image: "/images/products/backpack.jpg",
    category: "Accessories",
    description: "Durable and spacious laptop backpack with multiple compartments. Perfect for travel and daily commute.",
    inStock: true,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 129.99,
    image: "/images/products/coffee-maker.jpg",
    category: "Home",
    description: "Programmable coffee maker with thermal carafe. Wake up to fresh coffee every morning.",
    inStock: true,
    rating: 4.6,
    reviews: 342,
  },
  {
    id: 5,
    name: "Classic Sunglasses",
    price: 149.99,
    image: "/images/products/sunglasses.jpg",
    category: "Accessories",
    description: "Stylish sunglasses with UV protection. Perfect for sunny days and outdoor activities.",
    inStock: true,
    rating: 4.4,
    reviews: 167,
  },
  {
    id: 6,
    name: "Running Sneakers",
    price: 119.99,
    image: "/images/products/sneakers.jpg",
    category: "Fashion",
    description: "Comfortable running sneakers with excellent cushioning and support. Ideal for athletes and fitness enthusiasts.",
    inStock: true,
    rating: 4.8,
    reviews: 421,
  },
  {
    id: 7,
    name: "Luxury Watch",
    price: 299.99,
    image: "/images/products/watch.jpg",
    category: "Accessories",
    description: "Elegant luxury watch with premium materials and precise movement. A timeless accessory for any occasion.",
    inStock: true,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 8,
    name: "White Sneakers",
    price: 89.99,
    image: "/images/products/sneakers-white.jpg",
    category: "Fashion",
    description: "Classic white sneakers that go with everything. Comfortable and versatile for everyday wear.",
    inStock: true,
    rating: 4.5,
    reviews: 312,
  },
  {
    id: 9,
    name: "Gaming Laptop",
    price: 1299.99,
    image: "/images/products/laptop.jpg",
    category: "Electronics",
    description: "High-performance gaming laptop with powerful graphics and fast processor. Perfect for gaming and creative work.",
    inStock: true,
    rating: 4.7,
    reviews: 178,
  },
  {
    id: 10,
    name: "Aviator Sunglasses",
    price: 179.99,
    image: "/images/products/sunglasses-aviator.jpg",
    category: "Accessories",
    description: "Classic aviator sunglasses with polarized lenses. Timeless style with modern protection.",
    inStock: true,
    rating: 4.6,
    reviews: 234,
  },
  {
    id: 11,
    name: "Indoor Plant",
    price: 34.99,
    image: "/images/products/plant.jpg",
    category: "Home",
    description: "Beautiful indoor plant to brighten up your space. Easy to care for and air-purifying.",
    inStock: true,
    rating: 4.3,
    reviews: 145,
  },
  {
    id: 12,
    name: "Scented Candle",
    price: 24.99,
    image: "/images/products/candle.jpg",
    category: "Home",
    description: "Luxury scented candle with natural ingredients. Creates a relaxing ambiance in any room.",
    inStock: true,
    rating: 4.8,
    reviews: 567,
  },
];

export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Accessories",
  "Home",
];

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return products.slice(0, limit);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") {
    return products;
  }
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};
