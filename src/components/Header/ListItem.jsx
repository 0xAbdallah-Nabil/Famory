import { NavLink } from "react-router-dom";
export default function ListItem(props) {
  return (
    <NavLink
      onClick={props.onclick}
      to={
        props.content === "Home"
          ? "/"
          : `/${props.content?.toLowerCase().replace(" ", "-")}`
      }
    >
      <li className={`t active:scale-95 transition-all ease-in-out duration-100 block py-2 px-3 rounded-sm bg-[var(--secondary-color)] text-blackntext-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] border-2 border-primary font-bold cursor-pointer ${props.className}`}>
        {props.content ? props.content : props.name}
      </li>
    </NavLink>
  );
}
