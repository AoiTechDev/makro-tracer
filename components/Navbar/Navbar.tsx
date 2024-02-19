import { getServerSession } from "next-auth";
import React from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";

import Profile from "./Profile/Profile";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Navbar = async () => {
  const session = await getServerSession();

  return (
    <nav className="fixed  bg-white flex border-b w-full h-16 top-0 items-center z-50 justify-between px-6 ">
      <div className="w-[180px] h-[100px] flex items-center justify-center lg:w-[250px] lg:h-[100px]  ">
        <Image src={logo}  alt="logo" />
      </div>
      {!!session && (
        <div className="flex gap-4">
          <Profile session={session} />
        </div>
      )}
      {!session && (
        <div className="flex gap-4">
          <Login />
          <Register />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
