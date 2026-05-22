import { Suspense } from "react";
import ProductsContent from "./ProductsContent";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="text-4xl mb-4 animate-pulse">🐾</div>
          <p className="text-gray-500">Loading products...</p>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
