export interface Product {
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

export const products: Product[] = [
  {
    id: 1,
    name: "هدفون بی‌سیم",
    price: 99.99,
    image: "/images/products/headphones.jpg",
    category: "الکترونیک",
    description: "هدفون بی‌سیم پرمیوم با حذف نویز و کیفیت صدای عالی. مناسب برای علاقه‌مندان به موسیقی و حرفه‌ای‌ها.",
    inStock: true,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "ساعت هوشمند",
    price: 249.99,
    image: "/images/products/smartwatch.jpg",
    category: "الکترونیک",
    description: "ساعت هوشمند با امکانات پیشرفته، ردیابی تناسب اندام، اعلان‌ها و عمر باتری طولانی. همیشه متصل بمانید.",
    inStock: true,
    rating: 4.7,
    reviews: 256,
  },
  {
    id: 3,
    name: "کوله‌پشتی لپ‌تاپ",
    price: 79.99,
    image: "/images/products/backpack.jpg",
    category: "لوازم جانبی",
    description: "کوله‌پشتی لپ‌تاپ بادوام و جادار با جیب‌های متعدد. عالی برای سفر و رفت‌وآمد روزانه.",
    inStock: true,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: 4,
    name: "قهوه‌ساز",
    price: 129.99,
    image: "/images/products/coffee-maker.jpg",
    category: "خانه و آشپزخانه",
    description: "قهوه‌ساز برنامه‌پذیر با پارچ حرارتی. هر صبح با قهوه تازه بیدار شوید.",
    inStock: true,
    rating: 4.6,
    reviews: 342,
  },
  {
    id: 5,
    name: "عینک آفتابی کلاسیک",
    price: 149.99,
    image: "/images/products/sunglasses.jpg",
    category: "لوازم جانبی",
    description: "عینک آفتابی شیک با محافظت UV. مناسب برای روزهای آفتابی و فعالیت‌های فضای باز.",
    inStock: true,
    rating: 4.4,
    reviews: 167,
  },
  {
    id: 6,
    name: "کفش ورزشی دویدن",
    price: 119.99,
    image: "/images/products/sneakers.jpg",
    category: "مد و پوشاک",
    description: "کفش ورزشی راحت با کوشن‌بندی و پشتیبانی عالی. ایده‌آل برای ورزشکاران و علاقه‌مندان به تناسب اندام.",
    inStock: true,
    rating: 4.8,
    reviews: 421,
  },
  {
    id: 7,
    name: "ساعت لوکس",
    price: 299.99,
    image: "/images/products/watch.jpg",
    category: "لوازم جانبی",
    description: "ساعت لوکس شیک با مواد درجه یک و حرکت دقیق. یک اکسسوری بی‌زمان برای هر مناسبتی.",
    inStock: true,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 8,
    name: "کفش اسپرت سفید",
    price: 89.99,
    image: "/images/products/sneakers-white.jpg",
    category: "مد و پوشاک",
    description: "کفش اسپرت سفید کلاسیک که با همه چیز ست می‌شود. راحت و همه‌کاره برای استفاده روزمره.",
    inStock: true,
    rating: 4.5,
    reviews: 312,
  },
  {
    id: 9,
    name: "لپ‌تاپ گیمینگ",
    price: 1299.99,
    image: "/images/products/laptop.jpg",
    category: "الکترونیک",
    description: "لپ‌تاپ گیمینگ با کارایی بالا، گرافیک قدرتمند و پردازنده سریع. مناسب برای بازی و کارهای خلاقانه.",
    inStock: true,
    rating: 4.7,
    reviews: 178,
  },
  {
    id: 10,
    name: "عینک آفتابی خلبانی",
    price: 179.99,
    image: "/images/products/sunglasses-aviator.jpg",
    category: "لوازم جانبی",
    description: "عینک آفتابی خلبانی کلاسیک با لنزهای پلاریزه. استایل بی‌زمان با محافظت مدرن.",
    inStock: true,
    rating: 4.6,
    reviews: 234,
  },
  {
    id: 11,
    name: "گیاه آپارتمانی",
    price: 34.99,
    image: "/images/products/plant.jpg",
    category: "خانه و آشپزخانه",
    description: "گیاه زیبای آپارتمانی برای روشن کردن فضای شما. نگهداری آسان و تصفیه‌کننده هوا.",
    inStock: true,
    rating: 4.3,
    reviews: 145,
  },
  {
    id: 12,
    name: "شمع معطر",
    price: 24.99,
    image: "/images/products/candle.jpg",
    category: "خانه و آشپزخانه",
    description: "شمع معطر لوکس با مواد طبیعی. فضایی آرامش‌بخش در هر اتاقی ایجاد می‌کند.",
    inStock: true,
    rating: 4.8,
    reviews: 567,
  },
];

export const categories = [
  "همه",
  "الکترونیک",
  "مد و پوشاک",
  "لوازم جانبی",
  "خانه و آشپزخانه",
];

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return products.slice(0, limit);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "همه" || category === "All") {
    return products;
  }
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase().trim();

  if (!searchTerm) {
    return products;
  }

  // For short queries (1-2 characters), only search in name and category
  // This prevents too many irrelevant results from description matches
  const isShortQuery = searchTerm.length <= 2;

  return products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchTerm);
    const categoryMatch = product.category.toLowerCase().includes(searchTerm);

    if (isShortQuery) {
      return nameMatch || categoryMatch;
    }

    const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
    return nameMatch || categoryMatch || descriptionMatch;
  });
};
