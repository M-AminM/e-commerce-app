"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products, categories } from "@/data/products";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts =
    selectedCategory === "همه"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">تمام محصولات</h1>
          <p className="mt-2 text-gray-600">
            مجموعه‌ای از {digitsEnToFa(products.length)} محصول شگفت‌انگیز ما را
            مرور کنید
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700">
              مرتب‌سازی:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-gray-800 rounded-lg border border-gray-300 bg-white py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="featured">ویژه</option>
              <option value="name">نام (الف-ی)</option>
              <option value="price-low">قیمت (کم به زیاد)</option>
              <option value="price-high">قیمت (زیاد به کم)</option>
              <option value="rating">امتیاز</option>
            </select>
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600">
          نمایش {digitsEnToFa(sortedProducts.length)} محصول
        </div>

        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedProducts.map((product) => (
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
          <div className="flex flex-col items-center justify-center py-16">
            <svg
              className="h-16 w-16 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <p className="text-lg font-medium text-gray-900">محصولی یافت نشد</p>
            <p className="mt-1 text-sm text-gray-600">
              دسته‌بندی دیگری را انتخاب کنید
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
