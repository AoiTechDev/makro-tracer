import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden gradient lg:flex w-[250px] h-screen flex-col justify-between  ">
      <div className="flex flex-col gap-12 justify-center items-center mt-12">
        <h1>Macro Tracker</h1>
        <div>
          <ul>
            <li>Daily Overview</li>
            <li>Ingredients</li>
            <li>Meals</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mb-12">Logout</div>
    </div>
  );
};

export default Sidebar;
