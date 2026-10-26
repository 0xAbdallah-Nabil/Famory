import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/index.jsx";
import Search from "../Search/index.jsx";
import useCart from "../../hooks/useCart.js";

const iconBtn =
  "grid h-11 w-11 place-items-center rounded-full text-primary transition hover:bg-primary-soft active:scale-90";

const navLink = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-bold transition ${
    isActive ? "bg-primary text-white" : "text-cocoa hover:bg-primary-soft"
  }`;

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart, isCartOpen, closeCart, handleToggleCart } = useCart();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-primary/10 bg-cream/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2">
          <Link to="/" aria-label="Famory home">
            <span className="font-brand text-4xl leading-none text-primary">FAMORY</span>
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            <NavLink to="/" end className={navLink}>Home</NavLink>
            <NavLink to="/our-services" className={navLink}>Our Services</NavLink>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Search"
              className={iconBtn}
              onClick={() => { setIsSearchOpen((v) => !v); closeCart(); }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

            <button
              type="button"
              aria-label={`Cart, ${cart.length} items`}
              className={`${iconBtn} relative`}
              onClick={() => { handleToggleCart(); setIsSearchOpen(false); }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              {cart.length > 0 && (
                <span className="absolute right-0 top-0 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-white ring-2 ring-cream">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {isSearchOpen && <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />}
      {isCartOpen && <Cart />}
    </>
  );
}