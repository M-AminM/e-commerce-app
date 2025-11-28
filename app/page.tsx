import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

const featuredProducts = getFeaturedProducts(8);

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to SafeShop
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl">
              Discover amazing products at unbeatable prices. Shop the latest
              trends in electronics, fashion, and home essentials.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/products"
                className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-md hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/products"
                className="rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-200">
            Featured Products
          </h2>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg
                  className="h-8 w-8"
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
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Quality Products
              </h3>
              <p className="mt-2 text-gray-600">
                Hand-picked items of the highest quality
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Best Prices
              </h3>
              <p className="mt-2 text-gray-600">
                Competitive pricing on all products
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Fast Delivery
              </h3>
              <p className="mt-2 text-gray-600">
                Quick shipping to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
