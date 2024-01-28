import { getServerSession } from "next-auth";
import React from "react";
import Logout from "./Logout/Logout";
import Link from "next/link";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <nav className="fixed flex border w-full h-14 items-center justify-end px-12">
      {!!session && <Logout/>}
      <div className="flex gap-4">
      {!session && <Login/>}
      {!session && <Register/>}
      </div>
      
    </nav>
  );
};

export default Navbar;
