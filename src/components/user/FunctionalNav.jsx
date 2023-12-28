import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import { MdSort } from "react-icons/md";

const FunctionalNav = () => {
  return (
    <div className="bg-white text-white p-4 font-josefin-sans border">
      <div className="flex flex-col lg:flex-row items-center ">
        {/* Filter options */}
        <div className="mb-4 lg:mb-0 text-black pr-5">
          <label className="mr-2 absolute pt-1 pl-1">
            <BiFilterAlt />
          </label>
          <select className=" px-5 py-1 outline-none text-sm border">
            <option value="category1"> Filter by: </option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>

        {/* Sort options */}
        <div className=" text-black">
          <label className="mr-2 absolute pt-1 pl-1">
            <MdSort />
          </label>
          <select className=" px-5 py-1 outline-none text-sm border">
            <option value="priceLowToHigh">Sort by:</option>
            <option value="priceLowToHigh">Price Low to High</option>
            <option value="priceHighToLow">Price High to Low</option>
            <option value="latest">Latest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FunctionalNav;
