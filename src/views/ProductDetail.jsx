// ProductDetailPage.js
import React, { useState, useEffect } from "react";
import productImage1 from "../assets/BandO1.jpg";
import productImage2 from "../assets/BandO2.jpg";
import productImage3 from "../assets/BandO1.jpg";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import BottomFooter from "../components/user/BottomFooter";
import RelatedProducts from "../components/user/RelatedProducts";

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(productImage1);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row font-josefin-sans">
        {/* Left side */}
        <div className="lg:w-1/2 p-4">
          <div className="w-full h-96 overflow-hidden">
            <img
              src={currentImage}
              alt="Product"
              className="h-auto lg: object-contain m-auto w-80"
            />
          </div>
          <div className="flex mt-4 justify-center">
            <img
              src={productImage1}
              alt="Thumbnail 1"
              className="w-1/6 cursor-pointer border-4 border-white max-h-26"
              onClick={() => handleThumbnailClick(productImage1)}
            />
            <img
              src={productImage2}
              alt="Thumbnail 2"
              className="w-1/6 cursor-pointer border-4 border-white max-h-26"
              onClick={() => handleThumbnailClick(productImage2)}
            />
            <img
              src={productImage3}
              alt="Thumbnail 3"
              className="w-1/6 cursor-pointer border-4 border-white max-h-26"
              onClick={() => handleThumbnailClick(productImage3)}
            />
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2 p-4">
          <div className=" h-4/6">
            <h1 className="text-3xl mb-4 pt-10">
              Samsung GS-31 Headphone Bluetooth
            </h1>
            <p className="text-gray-600 mb-4 text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget nisl a nibh posuere rhoncus. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ratione atque optio perferendis
              nobis voluptate quaerat accusantium sequi, labore dolore quo sint
              voluptatibus corrupti error aperiam fugit maiores voluptatum eius
              debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dolore voluptas at cum magnam ut reprehenderit illum blanditiis,
              repellendus in accusamus?
            </p>
          </div>
          <div className="">
            <p className="text-lg font-bold mb-5">Offer Price : ₹299.00</p>
            <div className="flex space-x-4">
              <button className="bg-black text-white w-36 px-2 py-2 border border-black">
                Buy Now
              </button>
              <button className="bg-white text-black w-36 px-2 py-2 border border-black">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default ProductDetail;
