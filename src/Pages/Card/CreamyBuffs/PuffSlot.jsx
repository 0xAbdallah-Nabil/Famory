const FLAVORS = [
  "Vanilla",
  "Chocolate",
  "Strawberry",
  "Pistachio",
  "Caramel",
  "Mango",
  "Rose",
  "Lotus",
];
export default function PuffSlot({ index, flavor, onFlavorChange }) {
  return (
    <div
      className={`flex items-center gap-3 p-2.5 rounded-lg border-1.5 transition-all duration-200 ${
        flavor
          ? "bg-[#fdf8f2] border-[#d4a96a]"
          : "bg-[#fafafa] border-[#e8ddd0]"
      }`}
    >
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold font-cormorant flex-shrink-0 ${
          flavor ? "bg-[#b5813a] text-white" : "bg-[#e8ddd0] text-[#b09a85]"
        }`}
      >
        {index + 1}
      </span>
      <select
        value={flavor}
        onChange={(e) => onFlavorChange(e.target.value)}
        className={`flex-1 border-none bg-transparent font-cormorant text-base cursor-pointer outline-none appearance-none ${
          flavor ? "text-[#3d2b1a]" : "text-[#b09a85]"
        }`}
      >
        <option value="">— Select a flavor —</option>
        {FLAVORS.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>
      <span className="text-[#b09a85] text-lg pointer-events-none">▾</span>
    </div>
  );
}
