"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBowlFood } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
const Navigation = () => {
  const itemsStyles =
    "p-4 rounded-l-xl flex justify-start items-center gap-2 duration-300";
  const [activeItem, setActiveItem] = useState("");

  const sidebarList = [
    {
      icon: <BiSolidDashboard className="text-3xl" />,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <FaBowlFood className="text-3xl" />,
      title: "Ingredients",
      link: "/ingredients",
    },
    {
      icon: <FaBowlFood className="text-3xl" />,
      title: "Meals",
      link: "/meals",
    },
    {
      icon: <RiSettings4Fill className="text-3xl" />,
      title: "Settings",
      link: "/settings",
    },
  ];
  return (
    <ul className="flex flex-col gap-2 [&>li]:cursor-pointer w-full justify-center pl-4  ">
      {sidebarList.map((item) => (
        <Link href={item.link} key={item.title}>
          <li
            className={
              activeItem === item.title
                ? `${itemsStyles} bg-[#f8f8ff] text-[#8a4af2]`
                : `${itemsStyles} bg-transparent text-[#dacafb]`
            }
            onClick={() => setActiveItem(item.title)}
          >
            {item.icon}
            <span className="font-bold">{item.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Navigation;
