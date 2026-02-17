import HeroSection from "./HeroSection/index.jsx";
import OurStory from "./OurStory/index.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);
  return (
    <>
      <HeroSection />
      {/* <OurCategories /> */}
      <OurStory />

    </>
  );
}
export default Home;
