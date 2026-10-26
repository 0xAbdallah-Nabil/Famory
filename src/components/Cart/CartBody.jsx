import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useCart from "../../hooks/useCart.js";

export default function CartBody() {
  const { cart, handleRemove } = useCart();

  return (
    <ul data-lenis-prevent className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4">
      {cart.map((item) => {
        const lineTotal = item.total ?? item.price * item.quantity;
        return (
          <li
            key={item.id}
            className="flex gap-3 rounded-2xl bg-white p-3 shadow-card ring-1 ring-primary/5"
          >
            {item.image && (
              <img
                src={item.image}
                alt=""
                className="h-16 w-16 shrink-0 rounded-xl object-cover"
              />
            )}

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm leading-snug text-cocoa">{item.name}</h3>
                <button
                  type="button"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => handleRemove(item.id)}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-cocoa/40 transition hover:bg-red-50 hover:text-red-500 active:scale-90"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>

              {item.details && (
                <p className="mt-0.5 line-clamp-2 text-xs text-cocoa/60">{item.details}</p>
              )}

              <div className="mt-2 flex items-center justify-between">
                <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-bold text-primary">
                  × {item.quantity}
                </span>
                <span className="font-display text-sm text-primary">EGP {lineTotal}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}