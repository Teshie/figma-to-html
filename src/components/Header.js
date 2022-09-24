import React from "react";
import avatar from "../assets/avatar.png";
import brand from "../assets/brand.png";
import menu from "../assets/menu.png";

const Header = () => {
  return (
    <div className="">
      <div className="p-4 flex flex-col space-y-2">
        <div className="flex justify-between items-center ">
          <img src={menu} alt="j" className="sm:hidden" />
          <img src={brand} alt="j" />
          <img src={avatar} alt="j" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <span>Welcome Roma —</span>
            <span className="text-blue-400">Logout</span>
          </div>
          <div className="flex space-x-2">
            <span>Your balance: </span>
            <span className="text-blue-400">Р 0,00</span>
          </div>
        </div>
      </div>
      <div className="sm:hidden xs:hidden md:flex lg:flex xl:flex  bg-red-500 mt-10 text-white  p-1 m-2 rounded-md hidden justify-around rounded-b">
        <span className="border-r border-gray-200  p-2">Home </span>
        <span className="border-r border-gray-200  p-2">PLAY ALL lottery </span>
        <span className="border-r border-gray-200  p-2">LOTTERY GROUPS </span>
        <span className="border-r border-gray-200  p-2">Promotions </span>
      </div>
    </div>
  );
};

export default Header;
