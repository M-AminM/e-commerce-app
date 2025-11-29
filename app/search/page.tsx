"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import ProductCard from "@/app/components/ProductCard";
import { searchProducts, categories, Product } from "@/data/products";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("relevance");

  useEffect(() => {
    let filteredResults = searchProducts(query);

    if (selectedCategory !== "All") {
      filteredResults = filteredResults.filter(
        (product) => product.category === selectedCategory
      );
    }

    switch (sortBy) {
      case "price-low":
        filteredResults.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredResults.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredResults.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filteredResults.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setResults(filteredResults);
  }, [query, selectedCategory, sortBy]);
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Search Results
          </h1>
          {query && (
            <p className="text-gray-600">
              Showing {results.length} result{results.length !== 1 ? "s" : ""}{" "}
              for &quot;{query}&quot;
            </p>
          )}
        </div>
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((product) => (
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
        ) : (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              No results found
            </h2>
            <p className="mt-2 text-gray-600">
              {query
                ? `We couldn't find any products matching "${query}"`
                : "Try searching for a product"}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default function SearchPage() {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <Search />
    </Suspense>
  );
}
