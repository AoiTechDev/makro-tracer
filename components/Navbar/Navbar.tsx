import { getServerSession } from "next-auth";
import React from "react";
import Logout from "./Logout/Logout";
import Link from "next/link";
import Login from "./Login/Login";
import Register from "./Register/Register";

import Profile from "./Profile/Profile";

const Navbar = async () => {
  const session = await getServerSession();
  console.log(session);

  return (
    <nav className="fixed flex border w-full h-14 items-center justify-end px-6 lg:px-12">
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
