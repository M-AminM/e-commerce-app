"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/images/products/headphones.jpg",
    category: "Electronics",
    description:
      "Premium wireless headphones with active noise cancellation and exceptional sound quality. Perfect for music lovers and professionals alike.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Foldable design",
      "Built-in microphone",
    ],
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
    description:
      "Advanced smartwatch with health tracking, GPS, and water resistance. Stay connected and monitor your fitness goals.",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant up to 50m",
      "7-day battery life",
      "Customizable watch faces",
    ],
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
    description:
      "Durable and stylish laptop backpack with multiple compartments and ergonomic design. Perfect for work and travel.",
    features: [
      'Fits up to 15.6" laptops',
      "Water-resistant material",
      "USB charging port",
      "Anti-theft pocket",
      "Ergonomic design",
    ],
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
    description:
      "Programmable coffee maker with thermal carafe and built-in grinder. Wake up to fresh coffee every morning.",
    features: [
      "Built-in grinder",
      "Programmable timer",
      "12-cup capacity",
      "Thermal carafe",
      "Auto shut-off",
    ],
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
    description:
      "Stylish sunglasses with UV protection. Perfect for sunny days and outdoor activities.",
    features: [
      "UV400 protection",
      "Polarized lenses",
      "Durable frame",
      "Includes case",
      "Lightweight design",
    ],
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
    description:
      "Comfortable running sneakers with excellent cushioning and support. Ideal for athletes and fitness enthusiasts.",
    features: [
      "Breathable mesh upper",
      "Responsive cushioning",
      "Durable rubber outsole",
      "Arch support",
      "Lightweight construction",
    ],
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
    description:
      "Elegant luxury watch with premium materials and precise movement. A timeless accessory for any occasion.",
    features: [
      "Stainless steel case",
      "Sapphire crystal",
      "Automatic movement",
      "Water resistant 100m",
      "Leather strap",
    ],
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
    description:
      "Classic white sneakers that go with everything. Comfortable and versatile for everyday wear.",
    features: [
      "Premium leather upper",
      "Cushioned insole",
      "Non-marking sole",
      "Easy to clean",
      "Versatile style",
    ],
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
    description:
      "High-performance gaming laptop with powerful graphics and fast processor. Perfect for gaming and creative work.",
    features: [
      "NVIDIA RTX graphics",
      "Intel i7 processor",
      "16GB RAM",
      "512GB SSD",
      "144Hz display",
    ],
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
    description:
      "Classic aviator sunglasses with polarized lenses. Timeless style with modern protection.",
    features: [
      "Polarized lenses",
      "Metal frame",
      "UV400 protection",
      "Spring hinges",
      "Includes cleaning cloth",
    ],
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
    description:
      "Beautiful indoor plant to brighten up your space. Easy to care for and air-purifying.",
    features: [
      "Air purifying",
      "Low maintenance",
      "Pet-friendly",
      "Includes decorative pot",
      "Care instructions included",
    ],
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
    description:
      "Luxury scented candle with natural ingredients. Creates a relaxing ambiance in any room.",
    features: [
      "Natural soy wax",
      "40-hour burn time",
      "Lead-free cotton wick",
      "Reusable container",
      "Gift-ready packaging",
    ],
    inStock: true,
    rating: 4.8,
    reviews: 567,
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const productId = parseInt(params.id as string);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link href="/products" className="text-blue-600 hover:text-blue-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link
                href="/products"
                className="text-gray-500 hover:text-gray-700"
              >
                Products
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-white p-8">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-8">
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} out of 5
                </span>
              </div>
            </div>

            <p className="text-4xl font-bold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </p>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-20 rounded-lg border border-gray-300 px-3 py-2 text-center focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full rounded-lg px-6 py-3 text-base font-semibold text-white transition-colors ${
                  product.inStock
                    ? addedToCart
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {addedToCart
                  ? "Added to Cart!"
                  : product.inStock
                  ? "Add to Cart"
                  : "Out of Stock"}
              </button>

              <button
                onClick={() => router.push("/cart")}
                className="w-full rounded-lg border-2 border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Go to Cart
              </button>
            </div>

            {product.inStock && (
              <div className="mt-4 flex items-center text-sm text-green-600">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                In Stock - Ships within 2-3 business days
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
