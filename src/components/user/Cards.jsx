// Card.js
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardImg from "../../assets/alexa_card.png";

const Card = () => {
  const initialCardsData = [
    { id: 1, title: "Category 1", description: "Description 1" },
    { id: 2, title: "Category 2", description: "Description 2" },
    { id: 3, title: "Category 3", description: "Description 5" },
    { id: 4, title: "Category 4", description: "Description 6" },
    { id: 5, title: "Category 5", description: "Description 7" },
    { id: 6, title: "Category 6", description: "Description 8" },
    { id: 7, title: "Category 7", description: "Description 9" },
    // Add more cards as needed
  ];

  const [cardsData, setCardsData] = useState(initialCardsData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="cardContainer mx-auto overflow-x-auto font-josefin-sans"
      style={{ overflow: "hidden" }}
    >
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="p-4 shadow-md-right shadow-md-bottom"
            style={{ minWidth: "300px" }}
          >
            <div
              className="shadow-md pb-3  hover:shadow-2 hover:shadow-gray-400"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="mb-4 w-full h-80 overflow-hidden">
                <img
                  src={cardImg}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-left pl-5">
                {card.title}
              </h2>
              <p className="text-gray-600 text-md text-left pl-5">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
