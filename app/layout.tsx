import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { OrderProvider } from "@/contexts/OrderContext";

const yekanBakh = localFont({
  src: "./fonts/YekanBakh-Regular.woff",
  variable: "--font-yekan-bakh",
  weight: "400",
});

export const metadata: Metadata = {
  title: "SafeShop - فروشگاه آنلاین شما",
  description: "بهترین محصولات را با بهترین قیمت‌ها خریداری کنید",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${yekanBakh.variable} antialiased bg-gray-50`}
      >
        <AuthProvider>
          <CartProvider>
            <OrderProvider>
              <Header />
              {children}
            </OrderProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
