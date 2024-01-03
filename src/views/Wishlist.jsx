import React, { useState, useEffect } from "react";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import BottomFooter from "../components/user/BottomFooter";
import ListCard from "../components/user/WishlistList";

const Wishlist = () => {
  const initialCardsData = [
    { id: 1, title: "Category 1", description: "Description 1" },
    { id: 2, title: "Category 2", description: "Description 2" },
    { id: 3, title: "Category 3", description: "Description 5" },
    { id: 4, title: "Category 4", description: "Description 6" },
    { id: 5, title: "Category 5", description: "Description 7" },
    { id: 6, title: "Category 6", description: "Description 8" },
    { id: 7, title: "Category 7", description: "Description 9" },
  ];

  const [cardsData, setCardsData] = useState(initialCardsData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className=" text-center">
        <h1 className=" text-3xl pt-6 font-bold pb-2">My Wishlist</h1>
      </div>
      <div className=" font-josefin-sans text-center bg-white w-full">
        {initialCardsData.length > 0 ? (
          cardsData.map((card) => (
            <ListCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))
        ) : (
          <div>
            <h1 className=" text-4xl pt-20 font-bold pb-5">My Cart</h1>
            <p className=" pb-10 text-wrap px-5">
              You haven't added any items to your cart yet. Start shopping and
              add your items to your cart.
            </p>
          </div>
        )}
      </div>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Wishlist;
