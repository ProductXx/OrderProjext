import React from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import TotalCard from "../utils/Home/TotalCard";
import Chart from "../utils/Home/Chart";
const Home = () => {
  return (
    <div className="h-[100vh]">
      <div className="h-[65vh] px-3">
        {/* Navbar Acc Name and Setting */}
        <div className="w-full flex justify-between items-center py-5">
          {/* Acc Name */}
          <h1 className="font-bold">Hello, Customer</h1>
          {/* Setting */}
          <Link to={"/setting"}>
            <IoSettingsOutline className="text-secondary text-4xl" />
          </Link>
        </div>
        {/* Total Products Card */}
        <div className="grid grid-cols-2 gap-3">
          {/* Total Products */}
          <TotalCard />
          <TotalCard />
        </div>
        {/* Revenue Chart */}
        <div className="my-5 flex flex-col gap-5">
          <h1 className="text-xl text-tertiary font-semibold">Revenue Chart</h1>
          <Chart />
        </div>
      </div>
      <div className="h-[35vh] rounded-t-2xl bg-sec flex flex-col p-3 py-7 gap-5 font-bold text-color justify-around items-center">
        {/* litmited and auciton sell  */}
        <div className=" grid grid-cols-2 gap-3 h-full ">
          <Link
            to={"/limited-time-sell"}
            className=" col-span-1 bg-primary h-full rounded-xl shadow-lg flex items-center p-5 "
          >
            <p>Litmited Time Sell</p>
          </Link>
          <Link
            to={"/auction-sell"}
            className=" col-span-1 bg-primary h-full rounded-xl shadow-lg flex items-center p-5 "
          >
            <p>Auction Sell</p>
          </Link>
        </div>
        {/* let's start  */}
        <Link
          to={"#"}
          className="bg-primary rounded-xl shadow-lg flex items-center text-4xl h-full w-full"
        >
          Let's Thrift
        </Link>
      </div>
    </div>
  );
};

export default Home;
