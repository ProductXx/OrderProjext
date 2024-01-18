import React from "react";

const Setting = () => {
  return (
    <div className="">
      {/* Personal */}
      <div className="flex flex-col gap-5 px-5 mt-5">
        <h1 className="text-lg  font-semibold text-[#01010150]">Personal</h1>
        <div className="space-y-3">
          <div className="flex justify-between">
            <p className="text-sm text-[#1e1e1e]">Account Detail</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-[#1e1e1e]">Change Password</p>
          </div>
        </div>
        {/* About */}
        <h1 className="text-lg  font-semibold text-[#01010150]">About</h1>
        <div className="space-y-3">
          <div className="flex justify-between">
            <p className="text-sm text-[#1e1e1e]">Term of Use</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-[#1e1e1e]">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
