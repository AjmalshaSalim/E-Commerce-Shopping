import React,{useEffect} from "react";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import BottomFooter from "../components/user/BottomFooter";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="font-josefin-sans text-center py-10 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-3xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default AboutUs;
