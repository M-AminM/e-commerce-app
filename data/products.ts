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
    description:
      "هدفون بی‌سیم پرمیوم با حذف نویز و کیفیت صدای عالی. مناسب برای علاقه‌مندان به موسیقی و حرفه‌ای‌ها.",
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
    description:
      "ساعت هوشمند با امکانات پیشرفته، ردیابی تناسب اندام، اعلان‌ها و عمر باتری طولانی. همیشه متصل بمانید.",
    inStock: true,
    rating: 4.7,
    reviews: 256,
  },
  {
    id: 3,
    name: "کوله‌پشتی لپ‌تاپ",
    price: 79.99,
    image: "/images/products/backpack.jpg",
    category: "مد و پوشاک",
    description:
      "کوله‌پشتی لپ‌تاپ بادوام و جادار با جیب‌های متعدد. عالی برای سفر و رفت‌وآمد روزانه.",
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
    description:
      "قهوه‌ساز برنامه‌پذیر با پارچ حرارتی. هر صبح با قهوه تازه بیدار شوید.",
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
    description:
      "عینک آفتابی شیک با محافظت UV. مناسب برای روزهای آفتابی و فعالیت‌های فضای باز.",
    inStock: true,
    rating: 4.4,
    reviews: 167,
  },
  {
    id: 6,
    name: "ساعت",
    price: 119.99,
    image: "/images/products/sneakers.jpg",
    category: "الکترونیک",
    description:
      "ساعت هوشمند با امکانات پیشرفته و طراحی مدرن. ردیابی سلامت، اعلان‌ها و عمر باتری طولانی.",
    inStock: true,
    rating: 4.8,
    reviews: 421,
  },
  {
    id: 7,
    name: "عطر",
    price: 299.99,
    image: "/images/products/watch.jpg",
    category: "لوازم جانبی",
    description:
      "عطر لوکس با رایحه‌ای ماندگار و جذاب. ترکیبی از نت‌های گرم و تازه برای استفاده روزانه و مهمانی‌ها.",
    inStock: true,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 8,
    name: "کفش اسپرت ",
    price: 89.99,
    image: "/images/products/sneakers-white.jpg",
    category: "مد و پوشاک",
    description:
      "کفش اسپرت کلاسیک که با همه چیز ست می‌شود. راحت و همه‌کاره برای استفاده روزمره.",
    inStock: true,
    rating: 4.5,
    reviews: 312,
  },
  {
    id: 9,
    name: "هدفون بلوتوثی",
    price: 1299.99,
    image: "/images/products/laptop.jpg",
    category: "الکترونیک",
    description:
      "هدفون بلوتوثی با کیفیت صدای عالی و حذف نویز فعال. راحت برای استفاده طولانی مدت و باتری قوی.",
    inStock: true,
    rating: 4.7,
    reviews: 178,
  },
  {
    id: 10,
    name: "ماشین اسباب بازی",
    price: 179.99,
    image: "/images/products/sunglasses-aviator.jpg",
    category: "لوازم جانبی",
    description:
      "ماشین اسباب بازی با کنترل از راه دور و طراحی واقع‌گرایانه. سرگرمی عالی برای کودکان و کلکسیونرها.",
    inStock: true,
    rating: 4.6,
    reviews: 234,
  },
  {
    id: 11,
    name: "گوشی",
    price: 34.99,
    image: "/images/products/plant.jpg",
    category: "الکترونیک",
    description:
      "گوشی هوشمند با دوربین حرفه‌ای، صفحه‌نمایش AMOLED و پردازنده قدرتمند. تجربه‌ای روان و سریع.",
    inStock: true,
    rating: 4.3,
    reviews: 145,
  },
  {
    id: 12,
    name: "عینک آفتابی",
    price: 24.99,
    image: "/images/products/candle.jpg",
    category: "لوازم جانبی",
    description:
      "عینک آفتابی مدرن با لنزهای محافظ در برابر اشعه UV. سبک و راحت برای استفاده روزانه.",
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

  const isShortQuery = searchTerm.length <= 2;

  return products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchTerm);
    const categoryMatch = product.category.toLowerCase().includes(searchTerm);

    if (isShortQuery) {
      return nameMatch || categoryMatch;
    }

    const descriptionMatch = product.description
      .toLowerCase()
      .includes(searchTerm);
    return nameMatch || categoryMatch || descriptionMatch;
  });
};
