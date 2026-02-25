import PuffSlot from "./PuffSlot";

export default function BoxCard({
  boxIndex,
  box,
  onUpdate,
  onRemove,
  canRemove,
  FLAVORS,
}) {
  const count = box.puffs.length;

  const setCount = (newCount) => {
    const clamped = Math.max(3, Math.min(6, newCount));
    const newPuffs = Array.from(
      { length: clamped },
      (_, i) => box.puffs[i] || "",
    );
    onUpdate({ ...box, puffs: newPuffs });
  };

  const setFlavor = (puffIndex, flavor) => {
    const newPuffs = [...box.puffs];
    newPuffs[puffIndex] = flavor;
    onUpdate({ ...box, puffs: newPuffs });
  };

  // Calculate total price for selected flavours
  const selectedFlavors = box.puffs.filter((f) => f !== "");
  const totalPrice = box.puffs.reduce((sum, flavorName) => {
    const flavorObj = FLAVORS.find((f) => f.name === flavorName);
    return sum + (flavorObj ? flavorObj.price : 0);
  }, 0);

  const allFilled = box.puffs.every((f) => f !== "");

  return (
    <div className="bg-white rounded-2xl border border-[#e8ddd0] overflow-hidden shadow-lg shadow-[rgba(181,129,58,0.07)]">
      {/* Box Header */}
      <div className="bg-gradient-to-br from-[#f9f0e3] to-[#fdf8f2] px-4 py-4 flex items-center justify-between border-b border-[#f0e6d3]">
        <div className="flex items-center gap-2.5">
          <div>
            <div className="font-cormorant font-bold text-lg text-[#3d2b1a] tracking-wide">
              Box {boxIndex + 1}
            </div>
            {allFilled && (
              <div className="text-xs text-[#b5813a] font-cormorant">
                ✓ Complete
              </div>
            )}
            {/* Show total price if any flavour selected */}
            {selectedFlavors.length > 0 && (
              <div className="text-xs text-[#b5813a] font-cormorant mt-1">
                Total: <span className="font-bold">EGP {totalPrice}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Puff counter */}
          <div className="flex items-center gap-2 bg-white border border-[#e8ddd0] rounded-lg px-2.5 py-1.5">
            <button
              type="button"
              onClick={() => setCount(count - 1)}
              disabled={count <= 3}
              className={`w-6 h-6 rounded border-0 font-bold text-base flex items-center justify-center transition-all ${
                count <= 3
                  ? "bg-[#f5f0eb] text-[#c9b8a5] cursor-not-allowed"
                  : "bg-[#e60077] text-white cursor-pointer hover:bg-[#c80060]"
              }`}
            >
              −
            </button>
            <span className="font-cormorant font-bold text-lg text-[#3d2b1a] min-w-[18px] text-center">
              {count}
            </span>
            <button
              type="button"
              onClick={() => setCount(count + 1)}
              disabled={count >= 6}
              className={`w-6 h-6 rounded border-0 font-bold text-base flex items-center justify-center transition-all ${
                count >= 6
                  ? "bg-[#f5f0eb] text-[#c9b8a5] cursor-not-allowed"
                  : "bg-[#e60077] text-white cursor-pointer hover:bg-[#c80060]"
              }`}
            >
              +
            </button>
          </div>

          {canRemove && (
            <button
              type="button"
              onClick={onRemove}
              className="w-8 h-8 rounded border border-[#e60077] bg-[#fbeaf5] text-[#e60077] cursor-pointer text-base flex items-center justify-center hover:bg-[#ffe8eb] transition-colors"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Puff slots */}
      <div className="p-4 flex flex-col gap-2">
        <div className="font-cormorant text-xs text-[#b09a85] mb-1 tracking-widest uppercase">
          Select flavor for each puff
        </div>
        {box.puffs.map((flavor, i) => (
          <PuffSlot
            key={box.id + "-" + i}
            index={i}
            flavor={flavor}
            FLAVORS={FLAVORS}
            onFlavorChange={(f) => setFlavor(i, f)}
          />
        ))}
      </div>
    </div>
  );
}
