import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[100vh]">
      <div className="h-[55vh]">topp</div>
      <div className="h-[45vh] rounded-t-2xl bg-sec flex flex-col p-3 py-7 gap-5 font-bold text-color justify-around items-center">
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
