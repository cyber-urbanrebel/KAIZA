import { Category, categoryColor, categoryEmoji } from "@/data/products";

interface ProductImageProps {
  category: Category;
  name: string;
  className?: string;
}

/**
 * Renders a styled placeholder for a product image using category-specific
 * color and emoji. Used in place of external images.
 */
export default function ProductImage({ category, name, className = "" }: ProductImageProps) {
  const bg = categoryColor[category];
  const icon = categoryEmoji[category];

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 w-full h-full ${className}`}
      style={{ backgroundColor: bg }}
      aria-label={name}
    >
      <span
        className="select-none"
        style={{ fontSize: "4rem", lineHeight: 1 }}
        aria-hidden="true"
      >
        {icon}
      </span>
    </div>
  );
}
