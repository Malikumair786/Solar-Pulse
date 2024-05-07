import React from "react";

// Card component accepting label and value as props
const Card = ({ label, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border-black border-2 mx-2">
      <div className="font-bold text-gray-700">{label}</div>
      <div className="border-t-2 border-gray-500 mt-2 pt-2 text-gray-600 text-center">
        {value}
      </div>
    </div>
  );
};

export default Card;
