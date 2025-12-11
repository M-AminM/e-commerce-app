"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useOrder } from "@/contexts/OrderContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const { getUserOrders, loading: ordersLoading } = useOrder();
  const userOrders = getUserOrders();

  useEffect(() => {
    if (!loading && !user) {
      redirect("/auth/signin?callbackUrl=/profile");
    }
  }, [user, loading]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">در حال بارگذاری...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    await logout();
    redirect("/");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">پروفایل من</h1>
          <p className="mt-2 text-gray-600">مدیریت اطلاعات حساب کاربری</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {user.name}
                </h2>
                <p className="text-gray-600 mt-1">{user.email}</p>
                <button
                  onClick={handleSignOut}
                  className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
                >
                  خروج از حساب
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                اطلاعات حساب
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    نام
                  </label>
                  <input
                    type="text"
                    value={user.name}
                    readOnly
                    className="text-gray-800 w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    readOnly
                    className="text-gray-800 w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                تاریخچه سفارشات
              </h3>
              {ordersLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-2 text-gray-600">در حال بارگذاری...</p>
                </div>
              ) : userOrders.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <p>هنوز سفارشی ندارید</p>
                  <p className="text-sm mt-1">
                    برای مشاهده تاریخچه سفارشات خود، خرید کنید
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {userOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            سفارش #{order.id}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(order.createdAt).toLocaleDateString(
                              "fa-IR",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            order.status === "delivered"
                              ? "bg-green-100 text-green-800"
                              : order.status === "shipped"
                              ? "bg-blue-100 text-blue-800"
                              : order.status === "processing"
                              ? "bg-yellow-100 text-yellow-800"
                              : order.status === "cancelled"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {order.status === "delivered"
                            ? "تحویل شده"
                            : order.status === "shipped"
                            ? "ارسال شده"
                            : order.status === "processing"
                            ? "در حال پردازش"
                            : order.status === "cancelled"
                            ? "لغو شده"
                            : "در انتظار"}
                        </span>
                      </div>

                      <div className="space-y-2 mb-3">
                        {order.items.slice(0, 2).map((item) => (
                          <div key={item.id} className="flex gap-3">
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded bg-gray-100">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                تعداد: {digitsEnToFa(item.quantity)} × $
                                {digitsEnToFa(item.price.toFixed(2))}
                              </p>
                            </div>
                          </div>
                        ))}
                        {order.items.length > 2 && (
                          <p className="text-xs text-gray-500">
                            و {digitsEnToFa(order.items.length - 2)} محصول دیگر
                          </p>
                        )}
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                        <p className="text-sm font-semibold text-gray-900">
                          مجموع: ${digitsEnToFa(order.total.toFixed(2))}
                        </p>
                        <Link
                          href={`/products`}
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          خرید مجدد
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                آدرس ذخیره شده
              </h3>
              {user.savedAddress ? (
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-gray-400 ml-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {user.savedAddress.firstName}{" "}
                          {user.savedAddress.lastName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-gray-400 ml-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="text-sm text-gray-600">
                        <p>{user.savedAddress.address}</p>
                        <p>
                          {user.savedAddress.city}, {user.savedAddress.state}{" "}
                          {user.savedAddress.zip}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-gray-400 ml-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <p className="text-sm text-gray-600">
                        {user.savedAddress.phone}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-gray-500">
                    این آدرس به‌طور خودکار در سفارش بعدی شما استفاده می‌شود
                  </p>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>آدرس ذخیره شده‌ای ندارید</p>
                  <p className="text-sm mt-1">
                    برای ذخیره آدرس در سفارشات آینده، در هنگام پرداخت آدرس اضافه
                    کنید
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
