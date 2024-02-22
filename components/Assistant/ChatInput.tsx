"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import TextareaAutosize from 'react-textarea-autosize';
import { nanoid } from "nanoid";
import { Message } from "@/validators/message";
const ChatInput = () => {

    //TODO: change normal input to resizable area to allow for multi-line input
  const [input, setInput] = useState<string>("");

  const {mutate: sendMessage} = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({messages: [message]}),
      });

      return response.body
    },
    onSuccess: async (stream) => {
        if(!stream) throw new Error("No stream found");

        const reader = stream.getReader()
        const decoder = new TextDecoder();

        let done = false 
        while(!done){
          const {value, done: doneReading} = await reader.read()
          done = doneReading
          const chunkValue = decoder.decode(value)
        console.log(chunkValue)
        
        }
    }
  });

  return (
    <div className=" flex w-full gap-4 px-2 lg:w-3/4 mx-auto">
      <div className=" flex-1">
        <Input
           
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const message: Message = {
                id: nanoid(),
                isUserMessage: true,
                text:input

              }
              sendMessage(message)
            }
          }}
        />
      </div>
      <Button className="h-full rounded-l-none">Send</Button>
    </div>
  );
};

export default ChatInput;
