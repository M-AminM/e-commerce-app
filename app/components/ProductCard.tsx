"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    addToCart({ id, name, price, image });

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="group relative">
      <Link href={`/products/${id}`}>
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            {category && (
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                {category}
              </p>
            )}
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
              {name}
            </h3>
            <p className="text-xl font-bold text-gray-900 mb-3">
              ${digitsEnToFa(price.toFixed(2))}
            </p>

            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isAdding
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isAdding ? (
                <span className="flex items-center justify-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  اضافه شد!
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  افزودن به سبد
                </span>
              )}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
