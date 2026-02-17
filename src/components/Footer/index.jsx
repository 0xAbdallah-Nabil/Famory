import {
  faWhatsapp,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LinkK from "./Linkk.jsx";
export default function Footer() {
  return (
    <footer className="border-gray-200 bg-[var(--secondary-color)] m-[0px] ">
      <div class="gap-11 max-w-screen-xl flex sm:felx-col flex-wrap items-center sm:justify-between justify-center mx-auto p-2 border-b-2 border-black">
        <Link to="/" class="flex items-center rtl:space-x-reverse h-[60px] ">
          <h1 className="not-italic font-[Fedrin_Sambo] font-normal text-[40px] leading-[48px] text-[var(--primary-color)] border-none">
            Famory
          </h1>
        </Link>
        <ul className="flex gap-4">
          <LinkK
            icon={faInstagram}
            href="https://www.instagram.com/famory_bakery?igsh=M3Z5ZGR3ZXVqODMx"
          />
          <LinkK icon={faWhatsapp} href="https://wa.me/+201096098475" />
          <LinkK
            icon={faTiktok}
            href="https://www.tiktok.com/@famory.bakery?_r=1&_d=eff7f04713kdi8&sec_uid=MS4wLjABAAAAVJtKSdL8b4EadFAl_g-OWxl-Aq2hsHj1dMAYhnlvr12vv79U7AGbnnEK1kjWdYfd&share_author_id=7532246674430657544&sharer_language=en&source=h5_m&u_code=df1m8flg20fc17&item_author_type=2&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=AFB32637-C202-4227-A54A-346481DF6FAD&user_id=6883071922428036098&sec_user_id=MS4wLjABAAAAr8mq_PENiv2s7UQnZFuc-xKwp83LUEGk2Txi_PXXRwtPT9yJlSJa8L6df37nG1ch&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1233"
          />
          <LinkK icon={faHeadphones} href="abdallahnabil2003@gmail.com" />
        </ul>
      </div>
      <div className=" max-w-screen-xl text-[var(--text-primary)] flex gap-5 sm:felx-col flex-wrap items-center sm:justify-between justify-center mx-auto py-8">
        <span class="text-sm  sm:text-center">
          © 2025{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Famory TM
          </a>
          . All Rights Reserved.
        </span>
        <span class="text-sm  sm:text-center ">
          Powerd by Abdallah Nabil
        </span>
      </div>
    </footer>
  );
}
