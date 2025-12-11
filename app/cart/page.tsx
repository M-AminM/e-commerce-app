"use client";

import { useCart } from "@/contexts/CartContext";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              سبد خرید شما خالی است
            </h2>
            <p className="mt-2 text-gray-600">
              برای افزودن محصولات به سبد خرید، خرید کنید
            </p>
            <Link
              href="/products"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              ادامه خرید
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">سبد خرید</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="relative h-60 sm:h-32 w-full sm:w-32 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-base sm:text-lg font-bold text-gray-900">
                          ${digitsEnToFa(item.price.toFixed(2))}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors h-fit"
                        aria-label="Remove item"
                      >
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
                      </button>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor={`quantity-${item.id}`}
                          className="text-sm font-medium text-gray-700 whitespace-nowrap"
                        >
                          تعداد:
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100 transition-colors text-gray-800"
                            aria-label="Decrease quantity"
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
                          <div className="relative">
                            <input
                              type="number"
                              id={`quantity-${item.id}`}
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  parseInt(e.target.value) || 1
                                )
                              }
                              className="opacity-0 absolute"
                            />
                            <div className="text-gray-800 w-16 rounded-lg border border-gray-300 px-3 py-2 text-center">
                              {digitsEnToFa(item.quantity.toString())}
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100 transition-colors text-gray-800"
                            aria-label="Increase quantity"
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
                      <p className="text-base sm:text-lg font-semibold text-gray-900 sm:ml-auto">
                        جمع جزء: $
                        {digitsEnToFa((item.price * item.quantity).toFixed(2))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 lg:sticky lg:top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                خلاصه سفارش
              </h2>

              <div className="space-y-3 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-gray-600">
                  <span>جمع جزء</span>
                  <span>${digitsEnToFa(subtotal.toFixed(2))}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>هزینه ارسال</span>
                  <span>
                    {shipping === 0
                      ? "رایگان"
                      : `$${digitsEnToFa(shipping.toFixed(2))}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>مالیات (10%)</span>
                  <span>${digitsEnToFa(tax.toFixed(2))}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-lg font-bold text-gray-900">
                <span>جمع کل</span>
                <span>${digitsEnToFa(total.toFixed(2))}</span>
              </div>

              {subtotal < 100 && (
                <p className="mt-4 text-sm text-gray-600">
                  ${digitsEnToFa((100 - subtotal).toFixed(2))} بیشتر اضافه کنید
                  تا ارسال رایگان شود!
                </p>
              )}

              <Link
                href="/checkout"
                className="mt-6 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                ادامه به پرداخت
              </Link>

              <Link
                href="/products"
                className="mt-3 block w-full rounded-lg border border-gray-300 px-6 py-3 text-center text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ادامه خرید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
