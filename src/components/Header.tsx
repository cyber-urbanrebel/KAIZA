"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Search, Menu, X, Dog } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/products", label: "All Products" },
  { href: "/products?category=food", label: "Food & Treats" },
  { href: "/products?category=toys", label: "Toys" },
  { href: "/products?category=accessories", label: "Accessories" },
  { href: "/products?category=health", label: "Health" },
  { href: "/products?category=grooming", label: "Grooming" },
];

export default function Header() {
  const { itemCount, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-2xl text-amber-700 hover:text-amber-800 transition-colors"
          >
            <Dog className="h-7 w-7" />
            <span>KAIZA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-amber-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/products"
              aria-label="Search products"
              className="hidden sm:flex text-gray-500 hover:text-amber-700 transition-colors"
            >
              <Search className="h-5 w-5" />
            </Link>

            <button
              onClick={toggleCart}
              aria-label={`Shopping cart, ${itemCount} items`}
              className="relative flex items-center text-gray-500 hover:text-amber-700 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-gray-500 hover:text-amber-700 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden py-3 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2 text-sm font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
