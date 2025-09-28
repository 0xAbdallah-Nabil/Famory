import HeroImage from "../../assets/HeroSection.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
export default function HeroSection() {
  return (
    <>
      <div className="relative overflow-hidden h-[600px]">
        <img src={HeroImage} className="w-full h-full object-cover" />
        {/* {over lay} */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
        <ul className="absolute top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 flex-col">
          <Link name="Instagram" icon={faInstagram} />
          <Link name="Facebook" icon={faFacebook} />
          <Link name="TikTok" icon={faTiktok} />
          <Link name="Contact Us" icon={faHeadphones} />
        </ul>
      </div>
    </>
  );
}

function Link(props) {
  return (
    <li className="text-[#FFB5CF] rounded-full  bg-white  border-2 w-[250px] flex justify-end items-center gap-3 relative left-[-110px] hover:left-0 transition-all ease-in-out duration-500">
      <a href="" className="border-black  border-2 rounded-full p-2.5">
        <span className="text-black font-bold absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2">
          {props.name}
        </span>
        <FontAwesomeIcon icon={props.icon} />
      </a>
    </li>
  );
}
