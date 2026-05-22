"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { Star, ShoppingCart, ArrowLeft, Check, Tag } from "lucide-react";
import { getProductById, getProductsByCategory, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(id);
  if (!product) notFound();

  const { addItem, toggleCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const categoryLabel = categories.find((c) => c.id === product.category);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    toggleCart();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-amber-700 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href="/products"
          className="hover:text-amber-700 transition-colors"
        >
          Products
        </Link>
        <span>/</span>
        <Link
          href={`/products?category=${product.category}`}
          className="hover:text-amber-700 transition-colors"
        >
          {categoryLabel?.label}
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium line-clamp-1">
          {product.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Image */}
        <div className="h-96 lg:h-[500px] rounded-2xl overflow-hidden">
          <ProductImage
            category={product.category}
            name={product.name}
          />
        </div>

        {/* Details */}
        <div>
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full">
              {categoryLabel?.icon} {categoryLabel?.label}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} out of 5 ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold text-gray-900 mb-5">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Stock status */}
          <div className="flex items-center gap-2 mb-6">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                product.inStock ? "bg-green-500" : "bg-red-400"
              }`}
            />
            <span className="text-sm font-medium text-gray-700">
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Quantity + Add to Cart */}
          {product.inStock && (
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-gray-600 hover:bg-gray-100 transition-colors font-semibold"
                >
                  −
                </button>
                <span className="px-4 py-2.5 text-gray-900 font-semibold min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-gray-600 hover:bg-gray-100 transition-colors font-semibold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 font-semibold py-2.5 px-6 rounded-xl transition-colors ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-amber-600 hover:bg-amber-700 text-white"
                }`}
              >
                {added ? (
                  <>
                    <Check className="h-5 w-5" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" /> Add to Cart
                  </>
                )}
              </button>
            </div>
          )}

          {/* Back link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-amber-700 transition-colors mt-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
