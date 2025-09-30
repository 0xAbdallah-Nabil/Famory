import Header from "../../components/Header/index.jsx";
import HeroSection from "../../components/HeroSection/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import OurStory from "../../components/OurStory/index.jsx";
import OurCategories from "../../components/OurCategories/index.jsx";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurCategories />
      <OurStory />
      <Footer />
    </>
  );
}
export default Home;
