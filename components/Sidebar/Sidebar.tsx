"use client";
import React, { useState } from "react";
import Logout from "../Navbar/Logout/Logout";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBowlFood } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
const Sidebar = () => {
  const itemsStyles = "p-4 rounded-l-xl flex justify-start items-center gap-2 duration-300";
  const [activeItem, setActiveItem] = useState("Dashboard");

  const sidebarList = [
    {
      icon: <BiSolidDashboard className="text-3xl" />,
      title: "Dashboard",
    },
    {
      icon: <FaBowlFood className="text-3xl" />,
      title: "Ingredients",
    },
    {
      icon: <FaBowlFood className="text-3xl" />,
      title: "Meals",
    },
    {
      icon: <RiSettings4Fill className="text-3xl" />,
      title: "Settings",
    },
  ];

  return (
    <div className="hidden gradient lg:flex w-[250px] h-screen flex-col justify-between  text-[#dacafb]">
      <div className="flex flex-col gap-12 justify-center items-center mt-12">
        <h1 className="text-2xl">Macro Tracker</h1>

        <ul className="flex flex-col gap-2 [&>li]:cursor-pointer w-full justify-center pl-4 [&>li>span]:font-bold ">
          {sidebarList.map((item) => (
            <li
              className={
                activeItem === item.title
                ? `${itemsStyles} bg-[#f8f8ff] text-[#8a4af2]`
                : `${itemsStyles} bg-transparent text-[#dacafb]`
              }
              key={item.title}
              onClick={() => setActiveItem(item.title)}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center mb-12">
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
