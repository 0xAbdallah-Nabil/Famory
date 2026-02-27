import ListItem from "./ListItem.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function MobileMenu({ isOpen, setIsMenuOpen }) {
  return (
    <div class={`${isOpen ? "block" : "hidden"} w-full m-[0px] md:hidden`}>
      <ul class="flex flex-col justify-center font-medium   text-[var(--text-primary)]">
        <ListItem
          content="Home"
          onclick={() => setIsMenuOpen(false)}
          className="border-none flex justify-center items-center"
        />
        <ListItem
          content="Our Services"
          onclick={() => setIsMenuOpen(false)}
          className="border-none flex justify-center items-center"
        />
        <div className="active:scale-95 transition-all ease-in-out duration-500  py-2 px-3 rounded-sm bg-[var(--secondary-color)] text-blackntext-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] font-bold cursor-pointer flex justify-center items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
        </div>
      </ul>
    </div>
  );
}
