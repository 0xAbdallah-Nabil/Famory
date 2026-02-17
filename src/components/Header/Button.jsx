import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`hover:scale-105 flex transition-all ease-in-out duration-500  items-center justify-center p-2 w-10 h-10 text-sm rounded-lg  focus:outline-none  hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] text-[var(--primary-color)] cursor-pointer ${props.className} `}
    >
      <FontAwesomeIcon icon={props.icon} className="text-2xl" />
    </button>
  );
}
