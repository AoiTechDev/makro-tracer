import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import MessagesArea from "../MessagesArea";
import ChatInput from "../ChatInput";
import { RxCross2 } from "react-icons/rx";

type OverlayChatAreaProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const OverlayChatArea = ({setIsOpen}: OverlayChatAreaProps) => {
  return (
    <Card className="fixed bottom-0 lg:bottom-20 right-0 lg:right-3 border bg-white max-w-[400px] h-[100dvh] lg:h-[650px] flex flex-col justify-between pb-2 z-50">
      <CardHeader className="relative">
        <CardTitle>
          <span className=" bg-gradient-to-r from-indigo-500 to-purple-500 inline-block text-transparent bg-clip-text">
            Mealfull
          </span>{" "}
          Assistant
        </CardTitle>
        <CardDescription>Ask for anything!</CardDescription>
        <div
          className="top-5 right-5 w-5 h-5 absolute flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <RxCross2 className="text-6xl" />
        </div>
      </CardHeader>
      <MessagesArea />
      <ChatInput />
    </Card>
  );
};

export default OverlayChatArea;
