import { useMemo, useState } from "react";
import useCart from "../../../hooks/useCart.js";
import ProductCard from "../ProductCard.jsx";

const TABS = {
  classic: {
    label: "Classic · 4 pcs",
    title: "Family Cinnamon Rolls",
    sub: "Perfect for sharing, 4 delicious pieces",
  },
  mini: {
    label: "Mini · 9 pcs",
    title: "Mini Cinnamon Box",
    sub: "Bite-sized delights, 9 mini rolls",
  },
};

export default function Cinnabon({ PRODUCTS }) {
  const products = PRODUCTS || { classic: [], mini: [] };
  const { handleAddToCart, openCart } = useCart();
  const [tab, setTab] = useState("classic");
  const [quantities, setQuantities] = useState({});

  const setQty = (id, value) =>
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, value) }));

  const cartItems = useMemo(
    () =>
      [...products.classic, ...products.mini]
        .filter((p) => quantities[p.id] > 0)
        .map((p) => ({
          ...p,
          quantity: quantities[p.id],
          total: quantities[p.id] * p.price,
        })),
    [products, quantities]
  );
  const totalPrice = cartItems.reduce((sum, i) => sum + i.total, 0);
  const hasItems = cartItems.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    cartItems.forEach((item) => handleAddToCart(item, item.quantity));
    openCart();
    setQuantities({});
  };

  return (
    <div className="w-full">
      {/* Segmented tabs */}
      <div role="tablist" className="mx-auto mb-8 flex w-fit rounded-full bg-sand/60 p-1">
        {Object.entries(TABS).map(([key, t]) => (
          <button
            key={key}
            role="tab"
            type="button"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              tab === key ? "bg-primary text-white shadow-md" : "text-cocoa hover:text-primary"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <header className="mb-6 text-center">
          <h3 className="text-2xl text-primary">{TABS[tab].title}</h3>
          <p className="mt-1 italic text-cocoa/70">{TABS[tab].sub}</p>
        </header>

        <div className="grid gap-4">
          {products[tab].map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={quantities[product.id] || 0}
              onChange={(q) => setQty(product.id, q)}
            />
          ))}
        </div>

        {/* Sticky action bar */}
        <div className="sticky bottom-4 z-10 mt-8">
          <button
            type="submit"
            disabled={!hasItems}
            className={`w-full rounded-full py-4 font-display transition ${
              hasItems
                ? "bg-primary text-white shadow-lift hover:bg-primary-dark active:scale-[0.98]"
                : "cursor-not-allowed bg-sand text-cocoa/40"
            }`}
          >
            {hasItems ? `Add to cart · ${totalPrice} EGP` : "Select items to continue"}
          </button>
        </div>
      </form>
    </div>
  );
}