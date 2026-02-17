import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Cart from "../Cart/index.jsx";
import Search from "../Search/index.jsx";

import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import useCart from "../../hooks/useCart.js";
import MobileMenu from "./MobileMenu.jsx";
import Button from "./Button.jsx";
import ListItem from "./ListItem.jsx";
import LoginMenu from "./LoginMenu.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart, isCartOpen, closeCart, handleToggleCart } = useCart();

  return (
    <>
      <nav className=" border-1 border-[var(--primary-color)] bg-[var(--secondary-color)] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            to="/"
            className="sm:flex-start flex-center flex items-center rtl:space-x-reverse h-[60px] focus-border-0 border-0"
          >
            <h1 className="not-italic font-[Fedrin_Sambo] font-normal text-[40px] leading-[48px] text-[var(--primary-color)] border-none">
              Famory
            </h1>
          </Link>
          <div className={`m-[0px] max-md:hidden`}>
            <ul className="flex gap-2  font-medium  rounded-lg text-[var(--text-primary)] ">
              <ListItem content="Home" />
              <ListItem content="Our services" />
              {/* <ListItem content="Our Story" /> */}
              {/* <ListItem content="Contact" /> */}
            </ul>
          </div>
          <div className="flex gap-1">
            <div className="relative">
              <Button
                icon={faCartShopping}
                onClick={() => {
                  handleToggleCart();
                  setIsSearchOpen(false);
                }}
                className="active:scale-90"
              />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                  {cart.length}
                </span>
              )}
            </div>
            <Button
              icon={faBars}
              onClick={() => {
                setIsMenuOpen((e) => !e);
                setIsSearchOpen(false);
                closeCart();
              }}
              className="md:hidden active:scale-90"
            />

            <Button
              icon={faMagnifyingGlass}
              onClick={() => {
                setIsSearchOpen((e) => !e);
                closeCart();
              }}
              className="hidden md:flex active:scale-90 "
            />
          </div>
        </div>
      </nav>
      {isSearchOpen && (
        <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      )}
      <MobileMenu isOpen={isMenuOpen} />
      {isCartOpen && <Cart />}
    </>
  );
}
