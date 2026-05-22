import Link from "next/link";
import { Dog } from "lucide-react";

const footerLinks = {
  shop: [
    { href: "/products?category=food", label: "Food & Treats" },
    { href: "/products?category=toys", label: "Toys" },
    { href: "/products?category=accessories", label: "Accessories" },
    { href: "/products?category=health", label: "Health & Wellness" },
    { href: "/products?category=grooming", label: "Grooming" },
    { href: "/products?category=training", label: "Training" },
  ],
  help: [
    { href: "#", label: "Shipping & Returns" },
    { href: "#", label: "FAQ" },
    { href: "#", label: "Contact Us" },
    { href: "#", label: "Store Locator" },
  ],
  company: [
    { href: "#", label: "About KAIZA" },
    { href: "#", label: "Our Story" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-2xl text-amber-400 mb-3"
            >
              <Dog className="h-7 w-7" />
              <span>KAIZA</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium K-9 supplies for every dog and every lifestyle. Because
              your best friend deserves the best.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-amber-400 transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-amber-400 transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-amber-400 transition-colors text-sm"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} KAIZA. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
