import React from "react";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import BottomFooter from "../components/user/BottomFooter";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className=" font-josefin-sans text-center py-52 bg-gray-200">
        <h1 className=" text-4xl font-bold">About Us</h1>
      </div>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default AboutUs;
