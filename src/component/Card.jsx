import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="w-full  overflow-hidden  bg-white">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
