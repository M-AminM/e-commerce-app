"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import { getProductById } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = getProductById(productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Product not found
            </h2>
            <p className="mt-2 text-gray-600">
              The product you're looking for doesn't exist
            </p>
            <Link
              href="/products"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);

    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-gray-900">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {product.category && (
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                {product.category}
              </p>
            )}

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="mb-6">
              <p className="text-3xl font-bold text-gray-900">
                \${product.price.toFixed(2)}
              </p>
            </div>

            {/* Rating */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-1">
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
              </div>
              <p className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <p className="flex items-center gap-2 text-green-600">
                  <svg
                    className="h-5 w-5"
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
                  In Stock
                </p>
              ) : (
                <p className="flex items-center gap-2 text-red-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Out of Stock
                </p>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-4">
                <label
                  htmlFor="quantity"
                  className="text-sm font-medium text-gray-700"
                >
                  Quantity:
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100 transition-colors"
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
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-20 rounded-lg border border-gray-300 px-3 py-2 text-center focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100 transition-colors"
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

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAdding}
                className={`w-full rounded-lg px-8 py-4 text-base font-semibold transition-colors ${
                  !product.inStock
                    ? "bg-gray-300 cursor-not-allowed"
                    : isAdding
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {!product.inStock ? (
                  "Out of Stock"
                ) : isAdding ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-5 w-5"
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
                    Added to Cart!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </span>
                )}
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <svg
                  className="h-5 w-5 text-green-500"
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
                <span className="text-sm">
                  Free shipping on orders over \$100
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm">30-day return policy</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-sm">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
