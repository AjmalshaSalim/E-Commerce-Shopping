import React, { useState } from "react";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import BottomFooter from "../components/user/BottomFooter";
import Cards from "../components/user/CartList";

const Cart = () => {
  const initialCardsData = [
    { id: 1, title: "Category 1", description: "Description 1", price: 200 },
    { id: 2, title: "Category 2", description: "Description 2", price: 110 },
    { id: 3, title: "Category 3", description: "Description 5", price: 270 },
    { id: 4, title: "Category 4", description: "Description 6", price: 160 },
    { id: 5, title: "Category 5", description: "Description 7", price: 120 },
    { id: 6, title: "Category 6", description: "Description 8", price: 300 },
    { id: 7, title: "Category 7", description: "Description 9", price: 340 },
  ];
  const cartQty = initialCardsData.length;

  const [cardsData, setCardsData] = useState(initialCardsData);
  return (
    <>
      <Navbar cartQty={cartQty} />
      <div className=" text-center">
        <h1 className=" text-3xl pt-6 font-bold pb-2">My Cart</h1>
      </div>
      <div className=" font-josefin-sans text-center bg-white w-full">
        {initialCardsData.length > 0 ? (
          cardsData.map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              description={card.description}
              price={card.price}
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

export default Cart;
