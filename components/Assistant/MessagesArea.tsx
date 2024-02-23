"use client";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import ChatMessage from "./ChatMessage";
import { useMessagesStore } from "@/store/store";


const MessagesArea = () => {
  const { messages } = useMessagesStore();

  const inverseMessages = [...messages].reverse();

  
  return (
    <div className="flex-1 flex items-start gap-3 overflow-y-auto  scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <div className="p-4 flex  flex-col-reverse gap-4 flex-grow">
        {inverseMessages.map((message) => (
          <ChatMessage
            key={message.id}
            className={`${
              message.isUserMessage ? "self-end" : "self-start"
            } flex  items-center gap-4`}
            isUserMessage={message.isUserMessage}
          >
            {message.text}
          </ChatMessage>
        ))}
      </div>
    </div>
  );
};

export default MessagesArea;
