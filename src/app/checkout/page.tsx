"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { CreditCard, Lock, ChevronDown, ChevronUp } from "lucide-react";
import ProductImage from "@/components/ProductImage";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "US",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.includes("@")) e.email = "Valid email is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.zip.trim()) e.zip = "ZIP code is required";
    if (!form.cardName.trim()) e.cardName = "Name on card is required";
    if (form.cardNumber.replace(/\s/g, "").length < 16)
      e.cardNumber = "Valid card number is required";
    if (!form.expiry.match(/^\d{2}\/\d{2}$/))
      e.expiry = "Expiry in MM/YY format";
    if (form.cvv.length < 3) e.cvv = "Valid CVV is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    // Simulate processing
    await new Promise((r) => setTimeout(r, 1200));
    clearCart();
    router.push("/order-confirmation");
  };

  const formatCardNumber = (val: string) => {
    return val
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatExpiry = (val: string) => {
    const clean = val.replace(/\D/g, "").slice(0, 4);
    if (clean.length >= 3) return `${clean.slice(0, 2)}/${clean.slice(2)}`;
    return clean;
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-xl text-gray-600 mb-6">
          Your cart is empty. Nothing to checkout!
        </p>
        <Link
          href="/products"
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 space-y-8"
          noValidate
        >
          {/* Contact */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="First Name"
                value={form.firstName}
                onChange={(v) => update("firstName", v)}
                error={errors.firstName}
              />
              <Field
                label="Last Name"
                value={form.lastName}
                onChange={(v) => update("lastName", v)}
                error={errors.lastName}
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
                className="sm:col-span-2"
              />
              <Field
                label="Phone (optional)"
                type="tel"
                value={form.phone}
                onChange={(v) => update("phone", v)}
                className="sm:col-span-2"
              />
            </div>
          </section>

          {/* Shipping */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Street Address"
                value={form.address}
                onChange={(v) => update("address", v)}
                error={errors.address}
                className="sm:col-span-2"
              />
              <Field
                label="City"
                value={form.city}
                onChange={(v) => update("city", v)}
                error={errors.city}
              />
              <Field
                label="State / Province"
                value={form.state}
                onChange={(v) => update("state", v)}
              />
              <Field
                label="ZIP / Postal Code"
                value={form.zip}
                onChange={(v) => update("zip", v)}
                error={errors.zip}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="ZA">South Africa</option>
                  <option value="NG">Nigeria</option>
                </select>
              </div>
            </div>
          </section>

          {/* Payment */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-amber-600" />
              Payment Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Name on Card"
                value={form.cardName}
                onChange={(v) => update("cardName", v)}
                error={errors.cardName}
                className="sm:col-span-2"
              />
              <Field
                label="Card Number"
                value={form.cardNumber}
                onChange={(v) => update("cardNumber", formatCardNumber(v))}
                error={errors.cardNumber}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="sm:col-span-2"
              />
              <Field
                label="Expiry Date"
                value={form.expiry}
                onChange={(v) => update("expiry", formatExpiry(v))}
                error={errors.expiry}
                placeholder="MM/YY"
                maxLength={5}
              />
              <Field
                label="CVV"
                value={form.cvv}
                onChange={(v) => update("cvv", v.replace(/\D/g, "").slice(0, 4))}
                error={errors.cvv}
                placeholder="123"
                maxLength={4}
              />
            </div>
            <p className="flex items-center gap-1.5 text-xs text-gray-500 mt-4">
              <Lock className="h-3.5 w-3.5" />
              Your payment info is encrypted and secure
            </p>
          </section>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-bold py-4 rounded-xl transition-colors text-lg"
          >
            {submitting ? "Processing..." : `Place Order · $${total.toFixed(2)}`}
          </button>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            {/* Mobile toggle */}
            <button
              className="lg:hidden w-full flex items-center justify-between p-5 font-semibold text-gray-900"
              onClick={() => setShowOrderSummary(!showOrderSummary)}
            >
              <span>Order Summary ({items.reduce((a, i) => a + i.quantity, 0)} items)</span>
              {showOrderSummary ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            <div
              className={`lg:block ${showOrderSummary ? "block" : "hidden"}`}
            >
              <div className="px-5 pt-5 pb-2 hidden lg:block">
                <h2 className="font-bold text-gray-900 text-lg">
                  Order Summary
                </h2>
              </div>

              <ul className="divide-y divide-gray-100 px-5 max-h-80 overflow-y-auto">
                {items.map(({ product, quantity }) => (
                  <li
                    key={product.id}
                    className="flex items-center gap-3 py-3"
                  >
                    <div className="relative h-14 w-14 flex-shrink-0 rounded-lg overflow-hidden">
                      <ProductImage category={product.category} name={product.name} />
                      <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">
                        {product.name}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="px-5 py-4 border-t border-gray-100 space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  maxLength,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
          error
            ? "border-red-400 bg-red-50"
            : "border-gray-300 bg-white"
        }`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
