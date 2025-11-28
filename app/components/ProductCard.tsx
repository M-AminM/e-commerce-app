import Link from "next/link";
import Image from "next/image";

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
  return (
    <Link href={`/products/${id}`} className="group">
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
          <p className="text-xl font-bold text-gray-900">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
