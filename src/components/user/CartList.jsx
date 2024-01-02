import React, { useEffect, useState } from "react";
import ProductImg from "../../assets/BandO2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ListCard = ({ title, description, price }) => {
  const [ProductQty, setProductQty] = useState(1);
  const Increment = () => {
    setProductQty(ProductQty + 1);
  };
  const Decrement = () => {
    if (ProductQty > 1) {
      setProductQty(ProductQty - 1);
    }
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className="w-full flex flex-col md:flex-row border-x border-t rounded-md p-2 md:m-4 shadow-md text-black "
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        {/* Product Image (Left Side) */}
        <div className="md:w-1/4 overflow-hidden h-40">
          <div className="w-48 overflow-hidden">
            <img
              src={ProductImg}
              alt="Product"
              className="w-48 rounded-md hover:scale-105 ease-in-out duration-500"
            />
          </div>
        </div>

        {/* Product Details (Right Side) */}
        <div className="md:w-3/4 mt-4 md:mt-0 md:ml-4 text-left flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold pt-5">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <p className="text-black font-bold">₹ {price * ProductQty}</p>

            <div className="flex pt-2">
              <button className="bg-black text-white px-1" onClick={Decrement}>
                <FaMinus />
              </button>
              <p className="w-10 text-center">{ProductQty}</p>
              <button className="bg-black text-white px-1" onClick={Increment}>
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-black text-white w-full md:w-36 px-2 py-3 text-xs md:mt-0 border border-black">
              REMOVE
            </button>
            <button className="bg-white text-black w-full md:w-36 px-2 py-2 border border-black">
              Checkout
            </button>
          </div>
          {/* Add more details as needed */}
        </div>
      </div>
    </>
  );
};

export default ListCard;
