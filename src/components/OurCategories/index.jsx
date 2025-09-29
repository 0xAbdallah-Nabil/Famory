import Bg from "../../assets/CategoryBg.png";
import CBg from "../../assets/CategoryBackGround.png";
import cookies from "../../assets/cookie-clipart-transparent-background-5.png";
import cookiesCups from "../../assets/muffin-isolated-transparent-background_625492-87628.png";
import "./style.css"
function OurCategories() {
  return (
    <section
      className="py-10 text-center bg-[#012CAE]"
      style={{
        backgroundImage: `url(${CBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl font-bold py-9 text-[#FFB5CF]">
        Our Cat<span className="text-[#012CAE]">egories</span>
      </h2>
      <div className="flex gap-20 max-w-screen-xl m-auto lg:justify-between flex-wrap justify-center">
        <a href="" className="cat flex flex-col justify-center items-center">
          <div className="relative ">
            <img src={Bg} alt="" />
            {/* circle centered */}
            <div className="spin-steps absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FFB5CF] rounded-full">
              <img src={cookies} alt="" />
            </div>
          </div>
          <p className="text-black text-2xl font-bold py-9 capitalize">
            Cookies
          </p>
        </a>
        <a href="" className="cat flex flex-col justify-center items-center">
          <div className="relative ">
            <img src={Bg} alt="" />
            {/* circle centered */}
            <div  className=" spin-steps absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#012CAE] rounded-full">
              <img
                src={cookiesCups}
                alt=""
                className=" absolute top-44 left-[179px] transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] "
              />
            </div>
          </div>
          <p className="text-black text-2xl font-bold py-9 capitalize">
            cookie cups
          </p>
        </a>
      </div>
    </section>
  );
}

export default OurCategories;
