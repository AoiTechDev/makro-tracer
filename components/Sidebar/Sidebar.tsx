import React from "react";
import Logout from "../Navbar/Logout/Logout";
import Navigation from "./Navigation/Navigation";
import { getServerSession } from "next-auth";
import Register from "../Navbar/Register/Register";
import Login from "../Navbar/Login/Login";

const Sidebar = async () => {
  const session = await getServerSession();

  return (
    <div className="w-[250px] flex-shrink-0 max-[1600px]:w-[50px]">
      <div className="hidden fixed gradient md:flex w-[250px]  flex-shrink-0 h-screen flex-col justify-between  text-[#dacafb] max-[1600px]:w-[60px] z-10 group hover:max-[1600px]:w-[250px]">
        <div className="flex flex-col gap-12 justify-center items-center mt-12 w-full">
          <h1 className="text-2xl max-[1600px]:hidden">Macro Tracker</h1>
          {!!session ? (
            <Navigation />
          ) : (
            <div className="flex flex-col ">
              <Register />
              <Login />
            </div>
          )}
        </div>
        {!!session && (
          <div className="flex justify-center items-center mb-12">
            <Logout />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
