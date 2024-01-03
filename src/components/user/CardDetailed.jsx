// Card.js
import React from 'react';
import cardImg from '../../assets/BotCard.png';
import { Link } from 'react-router-dom';

const CardDetailed = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Product 1',
      category: 'category',
      description: 'Description 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eos.',
      price: 245,
    },
    {
      id: 2,
      title: 'Product 2',
      category: 'category',
      description: 'Description 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eos.',
      price: 245,
    },
    {
      id: 3,
      title: 'Product 3',
      category: 'category',
      description: 'Description 5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eos.',
      price: 245,
    },
    {
      id: 4,
      title: 'Product 4',
      category: 'category',
      description: 'Description 6 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eos.',
      price: 245,
    },
    {
      id: 5,
      title: 'Product 5',
      category: 'category',
      description: 'Description 7',
      price: 245,
    },
    {
      id: 6,
      title: 'Product 6',
      category: 'category',
      description: 'Description 8',
      price: 245,
    },
    {
      id: 7,
      title: 'Product 7',
      category: 'category',
      description: 'Description 9',
      price: 245,
    },
    {
      id: 8,
      title: 'Product 8',
      category: 'category',
      description: 'Description 10',
      price: 245,
    },
    // Add more cards as needed
  ];

  return (
    <div className="cardContainer mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-josefin-sans">
      {cardsData.map (card => (
        <Link to="/productDetail">
        <div key={card.id} className="p-4 shadow-md-right shadow-md-bottom">
          <div className=" shadow-lg pb-3 hover:shadow-2 hover:shadow-gray-400">
            <div className="mb-4 w-full h-80 overflow-hidden">
              <img
                src={cardImg}
                alt={card.title}
                className="w-full h-full object-cover hover:scale-125 ease-in-out duration-500"
              />
            </div>
            <div className="flex min-h-16 max-h-16 overflow-hidden">
              <div className="w-2/3">
                <h2 className="text-xl font-semibold text-left pl-5">
                  {card.title}
                </h2>
                <h2 className="text-left pl-5 capitalize pb-1 text-gray-600 text-md">
                  {card.category}
                </h2>
              </div>
              <div className="w-1/3 text-md pr-1">
                <p className="text-cyan-900">Price : ₹ {card.price}</p>
                <p className="text-green-800">20% Off</p>
              </div>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default CardDetailed;
