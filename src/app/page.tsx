import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Everything Your{" "}
              <span className="text-amber-200">Dog Deserves</span>
            </h1>
            <p className="text-amber-100 text-lg md:text-xl max-w-lg mb-8 mx-auto md:mx-0">
              Premium food, toys, accessories, and more — curated for K-9
              companions of every breed and every stage of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors shadow-md"
              >
                Shop Now <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/products?category=food"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-amber-700 transition-colors"
              >
                Browse Food
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 text-center">
            <div className="text-[9rem] leading-none select-none drop-shadow-lg">
              🐕
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🚚", label: "Free shipping over $50" },
            { icon: "🛡️", label: "100% safe products" },
            { icon: "🔄", label: "Easy 30-day returns" },
            { icon: "⭐", label: "Vet-recommended brands" },
          ].map((b) => (
            <div key={b.label} className="text-sm text-gray-600">
              <div className="text-2xl mb-1">{b.icon}</div>
              {b.label}
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-2xl p-5 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <span className="text-4xl">{cat.icon}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-amber-700 text-center">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link
            href="/products"
            className="text-amber-700 hover:text-amber-800 font-medium text-sm flex items-center gap-1"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            New to KAIZA? 🐾
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Sign up for our newsletter and get 15% off your first order. Plus
            exclusive deals, training tips, and more.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            action="#"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
