import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex w-full bg-white h-24 text-center font-josefin-sans">
      <div className="hidden lg:flex w-1/3">
        <ul className="flex justify-center gap-7 pt-7 pl-7">
          <li className="nav_title">Home</li>
          <li className="nav_title">Cart</li>
          <li className="nav_title">Orders</li>
          <li className="nav_title">About Us</li>
        </ul>
      </div>
      <div className=" pl-2 lg:w-1/3">
        <Link to="/">
        <h1 className="pt-7 text-2xl">LOGO</h1>
        </Link> 
      </div>
      <div className="nav_right w-1/3">
        <ul className="flex absolute right-2 gap-7 pt-7 sm:right-7">
          <li className="nav_title text-lg pt-1"> <IoIosSearch /> </li>
          <li className="nav_title pt-1"> <FiHeart /> </li>
          <li className="nav_title" ><Link to="/Login">Log In</Link></li>
          <li className="nav_title text-lg pt-1"> <LuMenu /></li>        
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
