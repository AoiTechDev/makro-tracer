"use client";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import ChatMessage from "./ChatMessage";
import { useMessagesStore } from "@/store/store";

const MessagesArea = () => {
  const { messages } = useMessagesStore();

  const inverseMessages = [...messages].reverse();

  return (
    <ScrollArea className="flex-1 ">
      <div className="p-6 flex flex-col-reverse overflow-y-auto gap-4">
        {inverseMessages.map((message) => (
          <ChatMessage
            key={message.id}
            className={`${
              message.isUserMessage ? "self-end" : "self-start"
            } flex  items-center gap-4`}
            isUserMessage={ message.isUserMessage}
          >
            {message.text}
          </ChatMessage>
        ))}
      </div>
    </ScrollArea>
  );
};

export default MessagesArea;
