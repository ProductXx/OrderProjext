import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Nav = () => {
  const location = useLocation();
  const pageTitle = location?.pathname?.replace(/[-/]/g, " ");
  return (
    <div className="h-[20vh] w-full bg-sec rounded-b-2xl flex flex-col justify-between p-5">
      <Link to={-1}>
        <IoIosArrowBack className="text-3xl text-white" />
      </Link>
      <div className="flex justify-between text-2xl">
        <p className="text-white font-bold uppercase">{pageTitle}</p>
        <p>icon</p>
      </div>
    </div>
  );
};

export default Nav;
