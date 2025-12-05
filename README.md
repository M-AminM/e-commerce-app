# SafeShop - فروشگاه آنلاین

یک پروژه فروشگاه آنلاین کامل که با Next.js 16، React 19، TypeScript و Tailwind CSS ساخته شده است.

## درباره پروژه

SafeShop یک پلتفرم تجارت الکترونیک مدرن است که امکانات زیر را ارائه می‌دهد:
- مشاهده و جستجوی محصولات
- مدیریت سبد خرید
- احراز هویت کاربران
- فرآیند تسویه حساب و پرداخت
- مدیریت سفارشات
- پروفایل کاربری

## تکنولوژی‌های استفاده شده

### Frontend
- **Next.js 16** - React Framework با قابلیت Server-Side Rendering
- **React 19** - کتابخانه UI
- **TypeScript** - برای Type Safety
- **Tailwind CSS 4** - برای استایل‌دهی

### ویژگی‌های پروژه
- **فونت فارسی**: استفاده از فونت یکان‌باخ
- **RTL Support**: پشتیبانی کامل از راست به چپ
- **Context API**: برای مدیریت وضعیت (State Management)
- **Responsive Design**: طراحی واکنش‌گرا برای موبایل و دسکتاپ
- **Image Optimization**: بهینه‌سازی تصاویر با Next.js Image

## ساختار پروژه

```
e-commerce-app/
├── app/                      # App Router pages and components
│   ├── auth/                # صفحات احراز هویت (ورود/ثبت‌نام)
│   ├── cart/                # صفحه سبد خرید
│   ├── checkout/            # صفحه تسویه حساب
│   ├── components/          # کامپوننت‌های قابل استفاده مجدد
│   │   ├── Header.tsx       # هدر و منوی اصلی
│   │   └── ProductCard.tsx  # کارت نمایش محصول
│   ├── products/            # صفحات محصولات
│   │   └── [id]/           # صفحه جزئیات محصول
│   ├── profile/             # صفحه پروفایل کاربر
│   ├── search/              # صفحه جستجو
│   ├── fonts/              # فایل‌های فونت
│   ├── globals.css         # استایل‌های سراسری
│   ├── layout.tsx          # Root Layout
│   └── page.tsx            # صفحه اصلی
├── contexts/                # Context Providers
│   ├── AuthContext.tsx     # مدیریت احراز هویت
│   ├── CartContext.tsx     # مدیریت سبد خرید
│   └── OrderContext.tsx    # مدیریت سفارشات
├── data/                    # داده‌های استاتیک
│   └── products.ts         # لیست محصولات
├── lib/                     # توابع کمکی
│   └── numberFormatter.ts  # فرمت‌دهی اعداد
├── public/                  # فایل‌های استاتیک
│   └── images/             # تصاویر محصولات
├── types/                   # TypeScript type definitions
└── package.json
```

## ویژگی‌های اصلی

### 1. مدیریت محصولات
- نمایش محصولات با کارت‌های جذاب
- دسته‌بندی محصولات (الکترونیک، مد و پوشاک، لوازم جانبی، خانه و آشپزخانه)
- جستجو در نام، دسته‌بندی و توضیحات محصولات
- فیلتر کردن بر اساس دسته‌بندی
- نمایش جزئیات کامل محصول (قیمت، توضیحات، امتیاز، نظرات)

### 2. سبد خرید (Cart Management)
- افزودن محصولات به سبد خرید
- تغییر تعداد محصولات
- حذف محصولات از سبد
- محاسبه خودکار:
  - جمع جزء (Subtotal)
  - هزینه ارسال (رایگان برای خرید بالای $100)
  - مالیات (10%)
  - جمع کل
- ذخیره سبد خرید در localStorage
- نمایش تعداد اقلام در هدر

### 3. احراز هویت (Authentication)
- ثبت‌نام کاربر جدید
- ورود کاربر
- خروج از حساب کاربری
- ذخیره اطلاعات کاربر در localStorage
- محافظت از صفحات خصوصی

### 4. فرآیند خرید (Checkout)
- فرم اطلاعات ارسال
- فرم اطلاعات پرداخت
- خلاصه سفارش
- تایید نهایی خرید

### 5. مدیریت سفارشات
- مشاهده تاریخچه سفارشات
- جزئیات هر سفارش
- وضعیت سفارش
- ذخیره سفارشات در localStorage

### 6. پروفایل کاربری
- نمایش اطلاعات کاربر
- مشاهده سفارشات
- آمار خریدهای کاربر

## نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 20 یا بالاتر
- npm یا yarn یا pnpm

### مراحل نصب

1. کلون کردن پروژه:
```bash
git clone https://github.com/M-AminM/e-commerce-app.git
cd e-commerce-app
```

2. نصب وابستگی‌ها:
```bash
npm install
```

3. اجرای سرور توسعه:
```bash
npm run dev
```

4. مشاهده پروژه:
باز کردن مرورگر و رفتن به آدرس [http://localhost:3000](http://localhost:3000)

## اسکریپت‌های موجود

- `npm run dev` - اجرای سرور توسعه
- `npm run build` - ساخت نسخه production
- `npm run start` - اجرای نسخه production
- `npm run lint` - بررسی کد با ESLint

## Context API

پروژه از Context API برای مدیریت وضعیت استفاده می‌کند:

### AuthContext
- مدیریت وضعیت احراز هویت کاربر
- توابع: `login`, `signup`, `logout`
- نگهداری اطلاعات کاربر جاری

### CartContext
- مدیریت سبد خرید
- توابع: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`, `getTotalPrice`
- ذخیره‌سازی خودکار در localStorage

### OrderContext
- مدیریت سفارشات
- توابع: `createOrder`, `getOrderById`, `getUserOrders`
- ذخیره‌سازی سفارشات

## داده‌های محصولات

محصولات در فایل `data/products.ts` به صورت استاتیک تعریف شده‌اند و شامل:
- 12 محصول نمونه
- 4 دسته‌بندی
- توابع کمکی برای جستجو و فیلتر کردن

### ساختار محصول (Product Interface)
```typescript
interface Product {
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
```

## طراحی واکنش‌گرا (Responsive Design)

- **Mobile First**: طراحی اولیه برای موبایل
- **Breakpoints**: استفاده از breakpoint های Tailwind (sm, md, lg)
- **Grid System**: استفاده از CSS Grid برای لیست محصولات
- **Flexible Layouts**: استفاده از Flexbox

## بهینه‌سازی‌ها

- **Image Optimization**: استفاده از Next.js Image component
- **Font Optimization**: بارگذاری بهینه فونت‌ها با next/font
- **Code Splitting**: تقسیم خودکار کد توسط Next.js
- **Static Generation**: تولید صفحات استاتیک برای بهبود سرعت

## محدودیت‌ها و نکات

- این پروژه برای اهداف آموزشی و نمایشی است
- اطلاعات در localStorage ذخیره می‌شوند (بدون backend واقعی)
- پرداخت به صورت شبیه‌سازی شده است (بدون integration با درگاه پرداخت)
- تصاویر محصولات از placeholder استفاده می‌کنند

## توسعه‌های آینده

- اتصال به Backend واقعی (REST API یا GraphQL)
- پیاده‌سازی پرداخت واقعی
- افزودن پنل ادمین
- امکان نظردهی و رتبه‌دهی به محصولات
- سیستم علاقه‌مندی‌ها (Wishlist)
- مقایسه محصولات
- فیلترهای پیشرفته (قیمت، رتبه، ...)

## نویسنده

**Mohammad Amin Mohammadi**

پروژه دانشگاهی - دانشگاه [نام دانشگاه]

## لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.
