import { useState } from "react";
import BoxCard from "./BoxCards.jsx";
import useCart from "../../../hooks/useCart.js";

const createBox = () => ({
  id: Date.now() + Math.random(),
  puffs: ["", "", ""],
});

export default function CreamyPuffsForm({ FLAVORS }) {
  const [boxes, setBoxes] = useState([createBox()]);
  const { handleAddToCart, openCart } = useCart();

  const addBox = () => setBoxes((prev) => [...prev, createBox()]);

  const removeBox = (i) =>
    setBoxes((prev) => prev.filter((_, idx) => idx !== i));

  const updateBox = (i, updated) =>
    setBoxes((prev) => prev.map((b, idx) => (idx === i ? updated : b)));

  const totalPuffs = boxes.reduce((s, b) => s + b.puffs.length, 0);
  const allComplete = boxes.every((b) => b.puffs.every((f) => f !== ""));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allComplete) return;

    boxes.forEach((box, i) => {
      // Count each flavour and calculate total price
      const flavorCounts = box.puffs.reduce((acc, flavorName) => {
        if (!flavorName) return acc;
        acc[flavorName] = (acc[flavorName] || 0) + 1;
        return acc;
      }, {});
      const details = Object.entries(flavorCounts)
        .map(([name, count]) => `${name} x${count}`)
        .join(", ");
      const price = box.puffs.reduce((sum, flavorName) => {
        const flavorObj = FLAVORS.find((f) => f.name === flavorName);
        return sum + (flavorObj ? flavorObj.price : 0);
      }, 0);
      const item = {
        id: `creamy-puffs-box-${i}-${Date.now()}`,
        name: `Creamy Puffs Box (${box.puffs.length} puffs)`,
        details,
        price,
      };
      handleAddToCart(item, 1);
    });

    openCart();
    setBoxes([createBox()]); // reset form after adding to cart
  };

  return (
    <div className="min-h-screen w-[90%] font-cormorant">
      <div className="mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Boxes */}
          <div className="flex flex-col gap-4 mb-5">
            {boxes.map((box, i) => (
              <BoxCard
                key={box.id}
                FLAVORS={FLAVORS}
                boxIndex={i}
                box={box}
                onUpdate={(updated) => updateBox(i, updated)}
                onRemove={() => removeBox(i)}
                canRemove={boxes.length > 1}
              />
            ))}
          </div>

          {/* Add box */}
          <button
            type="button"
            onClick={addBox}
            className="w-full py-3.5 border-2 border-dashed border-[#d4a96a] rounded-xl bg-transparent text-[#b5813a] font-cormorant text-lg font-semibold cursor-pointer mb-5 tracking-wide hover:bg-[#fdf8f2] transition-colors"
          >
            + Add Another Box
          </button>

          {/* Warning if incomplete */}
          {!allComplete && (
            <div className="bg-[#fff8ec] border border-[#f0d090] rounded-xl p-4 mb-4 text-[#a07830] text-base italic">
              ✦ Please select a flavor for every puff before placing your order.
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!allComplete}
            className={`w-full py-4 px-6 border-0 rounded-xl font-cormorant text-2xl font-bold tracking-widest transition-all duration-300 ${
              allComplete
                ? "bg-gradient-to-r from-[#c8923e] to-[#a06828] text-white cursor-pointer shadow-lg hover:shadow-xl hover:from-[#d4a354] hover:to-[#b07841]"
                : "bg-[#e8ddd0] text-[#b09a85] cursor-not-allowed"
            }`}
          >
            Add to Cart — {boxes.length} box{boxes.length > 1 ? "es" : ""},{" "}
            {totalPuffs} puffs
          </button>
        </form>
      </div>
    </div>
  );
}
