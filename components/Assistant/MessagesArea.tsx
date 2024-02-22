import React from "react";
import { ScrollArea } from "../ui/scroll-area";

const MessagesArea = () => {
  return (
    <ScrollArea className="flex-1 ">
      <div className="p-6 grid gap-4">
        <div className="flex items-center gap-4">
          <img
            alt="Avatar"
            className="rounded-full"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <div className="bg-gray-100 rounded-xl p-4 text-sm rounded-r-[20px]">
            Hi there! How can I assist you today?
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm justify-end">
          <div className="bg-gray-100 rounded-xl p-4 rounded-l-[20px]">
            I'm here to help with any questions you might have.
          </div>
          <img
            alt="Avatar"
            className="rounded-full"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
        </div>
      </div>
    </ScrollArea>
  );
};

export default MessagesArea;
