import Banner from "./_components/Banner";
import Blog from "./_components/Blog";
import Feature1 from "./_components/Feature1";
import Feature2 from "./_components/Feature2";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Pricing from "./_components/Pricing";
// import ScreenSize from "./_components/ScreenSize";
import Stats from "./_components/Stats";

const page = () => {
  return (
    <div>
      {/* <ScreenSize /> */}
      <Header />
      <Hero />
      <Stats />
      <Feature1 />
      <Feature2 />
      <Pricing />
      <Blog />
      <Banner />
      <Footer />
    </div>
  );
};

export default page;
