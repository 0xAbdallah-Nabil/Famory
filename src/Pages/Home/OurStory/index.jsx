import OSImg from "../../../assets/OurStory3.jpg";
function OurStory() {
  return (
    <div
      className="relative bg-[#FFB5CF] bg-auto md:bg-contain sm:p-14 p-3  flex items-center max-h-[500px] min-h-[600px] "
      style={{
        backgroundImage: `url(${OSImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center flex-col items-center  max-w-screen-xl m-auto text-white ">
        <h2 className="text-[80px] font-bold py-9 z-50 text-[#012CAE] ">
          OUR STORY
        </h2>
        {/* text */}
        <p className=" font-bold md:text-[22px] text-[16px] text-center z-50 mt-3 sm:mt-3">
          Famory was born from the warmth of family and the sweetness of shared
          memories.
        </p>
        <p className=" font-bold md:text-[22px] text-[16px] text-center z-50 mt-3 sm:mt-3">
          We believe desserts are more than just treats -
        </p>
        <p className=" font-bold md:text-[22px] text-[16px] text-center z-50 mt-3 sm:mt-3">
          they’re little moments of joy, comfort, and togetherness.
        </p>
        <p className=" font-bold md:text-[22px] text-[16px] text-center z-50 mt-3 sm:mt-3">
          Starting from a small kitchen, we created our signature Crumble
          Cookies and Creamy Puffs to bring that feeling of home to every bite.
        </p>
        <p className=" font-bold md:text-[22px] text-[16px] text-center z-50 mt-3 sm:mt-3 mb-6">
          With every box, we hope to share not just desserts, but stories,
          smiles, and sweet memories that last.
        </p>
      </div>
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    </div>
  );
}

export default OurStory;
