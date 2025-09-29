import OSImg from "../../assets/OurStory3.png"
function OurStory() {
  return (
    <div className="relative bg-[#FFB5CF] bg-auto md:bg-contain" style={{  backgroundImage: `url(${OSImg})`, backgroundSize: "cover" , backgroundRepeat: "no-repeat" , backgroundPosition: "center"}}>
      <div className="flex justify-center flex-col items-center  max-w-screen-xl m-auto text-white ">
        <h2 className="text-2xl font-bold py-9 z-50">OUR STORY</h2>
        <p className=" font-bold text-[18px] text-center z-50">
          Famory is an American inspired cookie company that was founded in
          Mansoura,Mancheko City ,Egypt in 2025.
        </p>
        <p className=" font-bold text-[18px] text-center z-50">We believe in the perfect cookie.</p>
        <p className=" font-bold text-[18px] text-center z-50">
          Wholesomeness in every bite, not too sweet, slightly crunchy on the
          outside and soft & chewy in the middle.
        </p>
        <p className=" font-bold pb-9 text-[17px] text-center z-50">
          You can find Baked products exclusively at Gourmet supermarkets across
          Egypt and you can order boxes of cookies & cookie cups from this
          site, yes you can!
        </p>
      </div>
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    </div>
  );
}

export default OurStory;
