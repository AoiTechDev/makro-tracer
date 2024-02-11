import { getServerSession } from "next-auth";
import React from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";

import Profile from "./Profile/Profile";

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <nav className="fixed  bg-white flex border-b w-full h-16 top-0 items-center justify-end px-6 lg:px-12">
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
