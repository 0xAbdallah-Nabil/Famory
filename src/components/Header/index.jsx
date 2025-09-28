import { useState } from "react";
import Logo from "../..//assets/Logo-Removing-BackGround.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav class="border-gray-200 bg-[#012CAE] m-[0px]">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="#" class="flex items-center rtl:space-x-reverse h-[60px] ">
            <h1 className="Famory">Famory</h1>
          </a>

          <div class={`${isOpen ? "hidden" : "block"}  m-[0px]`}>
            <ul class="flex gap-2  font-medium  rounded-lg text-[#FFB5CF] ">
              <ListItem content="Home" />
              <ListItem content="Our Products" />
              <ListItem content="Our Story" />
              <ListItem content="Contact" />
            </ul>
          </div>
          <div className="flex gap-1">
            <Button
              icon={faBars}
              onClick={() => setIsOpen((e) => !e)}
              className="md:hidden"
            />
            <Button icon={faCartShopping} />
            <Button icon={faUser} />
            <Button icon={faMagnifyingGlass} />
          </div>
        </div>
      </nav>
      <div class={`${isOpen ? "block" : "hidden"} w-full m-[0px]`}>
        <ul class="flex flex-col font-medium   text-[#FFB5CF] dark:bg-gray-800 dark:border-gray-700">
          <ListItem content="Home" />
          <ListItem content="Our Products" />
          <ListItem content="Our Story" />
          <ListItem content="Contact" />
        </ul>
      </div>
    </>
  );
}
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      class="hover:scale-105 transition-all ease-in-out duration-500 inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg  focus:outline-none  focus:ring-2 focus:ring-gray-200 hover:bg-[#FFB5CF] hover:text-black text-[#FFB5CF]"
    >
      <span class="sr-only ">Open main menu</span>

      <FontAwesomeIcon icon={props.icon} className="text-2xl" />
    </button>
  );
}

function ListItem(props) {
  return (
    <li>
      <a
        href="#"
        class="transition-all ease-in-out duration-500 hover:scale-105 block py-2 px-3 text-[#FFB5CF] rounded-sm hover:bg-[#FFB5CF] hover:text-black "
      >
        {props.content}
      </a>
    </li>
  );
}
