export default function ProductCard({ product, quantity, onChange }) {
  const subtotal = quantity * product.price;

  return (
    <article
      className={`w-full rounded-card border-2 bg-cream/60 p-5 transition duration-300 hover:shadow-card ${
  quantity > 0 ? "border-primary bg-primary-soft/40" : "border-sand/70"
}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-base leading-snug">{product.name}</h4>
          {product.pieces && (
            <p className="mt-1 text-sm text-cocoa/70">{product.pieces}</p>
          )}
        </div>
        <p className="whitespace-nowrap font-display text-primary">{product.price} EGP</p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <StepBtn label={`Decrease ${product.name}`} onClick={() => onChange(quantity - 1)}>−</StepBtn>
          <input
            type="number"
            inputMode="numeric"
            min="0"
            aria-label={`${product.name} quantity`}
            value={quantity}
            onChange={(e) => onChange(parseInt(e.target.value) || 0)}
            className="h-10 w-16 rounded-xl border-2 border-sand text-center text-lg font-bold focus:border-primary focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
          />
          <StepBtn label={`Increase ${product.name}`} onClick={() => onChange(quantity + 1)}>+</StepBtn>
        </div>

        {quantity > 0 && (
          <p className="text-right text-sm text-primary">
            Subtotal <span className="block font-display text-lg">{subtotal} EGP</span>
          </p>
        )}
      </div>
    </article>
  );
}

function StepBtn({ label, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="h-10 w-10 rounded-full bg-primary text-xl font-bold text-white shadow-md transition hover:bg-primary-dark active:scale-90"
    >
      {children}
    </button>
  );
}