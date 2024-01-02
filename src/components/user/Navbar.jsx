import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

const Navbar = ({ cartQty }) => {
  return (
    <div className="flex w-full bg-white h-24 text-center font-josefin-sans border-b">
      <div className="hidden lg:flex w-1/3">
        <ul className="flex justify-center gap-7 pt-7 pl-7 text-lg">
          <li className="nav_title">
            <Link to="/productDetail">Home</Link>
          </li>
          <li className="nav_title">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav_title">Orders</li>
          <li className="nav_title">
            <Link to="/aboutUs">About Us</Link>
          </li>
        </ul>
      </div>
      <div className=" pl-2 lg:w-1/3">
        <Link to="/">
          <h1 className="pt-7 text-4xl font-semibold">LOGO</h1>
        </Link>
      </div>
      <div className="nav_right w-1/3 text-lg">
        <ul className="flex absolute right-2 gap-7 pt-7 sm:right-7">
          <li className="nav_title text-xl pt-1">
            <Link to="/cart">
              <div className=" bg-black text-white rounded-full text-xs font-light absolute top-5 left-5 px-1">
                {cartQty}
              </div>
              <BsCart3 />
            </Link>
          </li>
          <li className="nav_title pt-1">
            {" "}
            <Link to="/wishlist">
              <FiHeart />
            </Link>{" "}
          </li>
          <li className="nav_title">
            <Link to="/Login">Log In</Link>
          </li>
          <li className="nav_title pt-1 text-xl">
            {" "}
            <LuMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
