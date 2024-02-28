import React from "react";
import Stars from "./Stars";

type OverlayButtonProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
const OverlayButton = ({setIsOpen}: OverlayButtonProps) => {
  return (
    <div
      className="fixed bottom-3 right-3 w-12 h-12 rounded-full hidden md:flex justify-center items-center p-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 overlay-circle hover:scale-110 duration-200"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <button className="rounded-full w-full h-full flex bg-white justify-center items-center ">
        <Stars />
      </button>
    </div>
  );
};

export default OverlayButton;
