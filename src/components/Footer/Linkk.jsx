import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function LinkK(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="hover:scale-120 hover:scale-120 social-link text-[var(--primary-color)] rounded-full    border-2   items-center gap-3 relative  transition-all ease-in-out duration-500"
    >
      <li className=" rounded-full p-2.5">
        <span className="text-black font-bold absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 ">
          {props.name}
        </span>
        <FontAwesomeIcon icon={props.icon} className="text-2xl" />
      </li>
    </a>
  );
}
export default LinkK;
