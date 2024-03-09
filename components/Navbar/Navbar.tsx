import { getServerSession } from "next-auth";
import React from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";

import Profile from "./Profile/Profile";
import Logo from "./Logo";
import { getAvatarImage } from "@/app/settings/actions";

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <nav className="fixed  bg-white flex border-b w-full h-16 top-0 items-center z-50 justify-between px-6 ">
      <Logo/>
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
