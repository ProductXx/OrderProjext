import React from "react";

const FilterBtn = ({ title, handleActive, active }) => {
  return (
    <div
      onClick={() => handleActive(title)}
      className={`px-7 py-2 rounded-md flex justify-center items-center border border-tertiary ${
        active === title ? "bg-tertiary text-white" : "text-black"
      }`}
    >
      <span>{title}</span>
    </div>
  );
};

export default FilterBtn;
