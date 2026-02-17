import "./style.css";
import tiktokImg1 from "../../assets/Card1.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";
function Videos() {
  return (
    <section className="flex flex-col  justify-center items-center">
      <h2 className="res text-[2.5rem] font-bold py-9 z-50 text-[#012CAE] capitalize">
        See our story come to life on TikTok
      </h2>
      <div className="grid justify-items-center mb-10">
        <Card
          src={tiktokImg1}
          href="https://www.tiktok.com/@famory.bakery/video/7559988096373181716?_d=eff7f04713kdi8&_r=1&enable_checksum=1&item_author_type=2&sec_uid=MS4wLjABAAAAVJtKSdL8b4EadFAl_g-OWxl-Aq2hsHj1dMAYhnlvr12vv79U7AGbnnEK1kjWdYfd&sec_user_id=MS4wLjABAAAAr8mq_PENiv2s7UQnZFuc-xKwp83LUEGk2Txi_PXXRwtPT9yJlSJa8L6df37nG1ch&share_app_id=1233&share_author_id=7532246674430657544&share_link_id=AFB32637-C202-4227-A54A-346481DF6FAD&sharer_language=en&social_share_type=5&source=h5_m&tt_from=copy&u_code=df1m8flg20fc17&ug_btm=b6880%2Cb5836&user_id=6883071922428036098"
        />
      </div>
    </section>
  );
}

function Overlay() {
  return (
    <div className="overlay  absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:scale-110 cursor-pointer transition-all ease-in-out duration-500">
      <FaRegCirclePlay className="w-[40px] h-[40px] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
function Card({ src, href }) {
  return (
    <div className="card relative w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt="" className="w-full h-full " />
        <Overlay />
      </a>
    </div>
  );
}
export default Videos;
