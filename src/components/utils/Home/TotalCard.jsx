import React from "react";
import { RiShirtFill } from "react-icons/ri";

const TotalCard = () => {
  return (
    <div className="p-3 shadow rounded-md flex flex-col space-y-3">
      {/* Title */}
      <h1 className="text-xl text-tertiary font-semibold">Total Products</h1>
      {/* Data and Icon */}
      <div className="flex justify-between items-center">
        {/* Num */}
        <h1 className="text-5xl font-bold text-secondary">100</h1>
        {/* icon */}
        <RiShirtFill className="text-5xl text-secondary" />
      </div>
    </div>
  );
};

export default TotalCard;
