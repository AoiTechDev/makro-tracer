import React from "react";
import Logout from "../Navbar/Logout/Logout";
import Navigation from "./Navigation/Navigation";
import { getServerSession } from "next-auth";
import Register from "../Navbar/Register/Register";
import Login from "../Navbar/Login/Login";

const Sidebar = async () => {
  const session = await getServerSession();

  return (
    <div className="hidden gradient md:flex w-[250px] h-screen flex-col justify-between  text-[#dacafb]">
      <div className="flex flex-col gap-12 justify-center items-center mt-12">
        <h1 className="text-2xl">Macro Tracker</h1>
        {!!session ? (
          <Navigation />
        ) : (
          <div className="flex flex-col ">
            <Register />
            <Login/>
          </div>
        )}
      </div>
      {!!session && <div className="flex justify-center items-center mb-12">
        <Logout />
      </div>}
    </div>
  );
};

export default Sidebar;
