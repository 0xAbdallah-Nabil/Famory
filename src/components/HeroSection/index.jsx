import HeroImage from "../../assets/HeroSection.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
export default function HeroSection() {
  return (
    <>
      <div className="relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[90vh]">
        <img src={HeroImage} className="w-full h-full object-cover" />
        {/* {over lay} */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
        <ul className="absolute top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 flex-col">
          <Link
            name="Instagram"
            icon={faInstagram}
            href="https://www.instagram.com/famory_bakery?igsh=M3Z5ZGR3ZXVqODMx"
          />
          <Link
            name="Whatsapp"
            icon={faWhatsapp}
            href="https://wa.me/+201096098475"
          />
          <Link
            name="TikTok"
            icon={faTiktok}
            href="https://www.tiktok.com/@famory.bakery?_r=1&_d=eff7f04713kdi8&sec_uid=MS4wLjABAAAAVJtKSdL8b4EadFAl_g-OWxl-Aq2hsHj1dMAYhnlvr12vv79U7AGbnnEK1kjWdYfd&share_author_id=7532246674430657544&sharer_language=en&source=h5_m&u_code=df1m8flg20fc17&item_author_type=2&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=AFB32637-C202-4227-A54A-346481DF6FAD&user_id=6883071922428036098&sec_user_id=MS4wLjABAAAAr8mq_PENiv2s7UQnZFuc-xKwp83LUEGk2Txi_PXXRwtPT9yJlSJa8L6df37nG1ch&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1233"
          />
          <Link
            name="Contact Us"
            icon={faHeadphones}
            href="abdallahnabil2003@gmail.com"
          />
        </ul>
      </div>
    </>
  );
}

export function Link(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="hover:scale-120 social-link text-[#FFB5CF] rounded-full  bg-white  border-2 w-[250px] flex justify-end items-center gap-3 relative left-[-110px] hover:left-0 transition-all ease-in-out duration-500"
    >
      <li className=" rounded-full p-2.5">
        <span className="text-black font-bold absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2">
          {props.name}
        </span>
        <FontAwesomeIcon
          icon={props.icon}
          className="social-icon hover:animate-bounce"
        />
      </li>
    </a>
  );
}
