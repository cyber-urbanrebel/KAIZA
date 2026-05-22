import Link from "next/link";
import { CheckCircle, ArrowRight, Home } from "lucide-react";

export default function OrderConfirmationPage() {
  const orderNumber = `KZ-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10">
        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />

        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          Order Confirmed! 🐾
        </h1>

        <p className="text-gray-600 text-lg mb-2">
          Thank you for shopping with <span className="font-bold text-amber-700">KAIZA</span>!
        </p>
        <p className="text-gray-500 text-sm mb-6">
          Your order <span className="font-semibold text-gray-900">{orderNumber}</span> has been placed
          successfully. A confirmation email will be sent to you shortly.
        </p>

        <div className="bg-amber-50 rounded-2xl p-6 mb-8 text-left">
          <h2 className="font-bold text-gray-900 mb-3">What happens next?</h2>
          <ul className="space-y-3">
            {[
              { icon: "📧", text: "You'll receive an email confirmation within 5 minutes" },
              { icon: "📦", text: "Your order will be packed and dispatched within 1-2 business days" },
              { icon: "🚚", text: "Estimated delivery: 3-7 business days" },
              { icon: "🐕", text: "Your furry friend will love their new goodies!" },
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-xl leading-none mt-0.5">{step.icon}</span>
                {step.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Keep Shopping <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
