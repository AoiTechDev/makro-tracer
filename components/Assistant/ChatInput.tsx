"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import TextareaAutosize from "react-textarea-autosize";
import { nanoid } from "nanoid";
import { Message } from "@/validators/message";
import { useMessagesStore } from "@/store/store";
import { CornerDownLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";
const ChatInput = () => {
  //TODO: change normal input to resizable area to allow for multi-line input
  const [input, setInput] = useState<string>("");
  const InputRef = React.useRef<HTMLInputElement | null>(null);
  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating,
  } = useMessagesStore();
  const { mutate: sendMessage, isPending } = useMutation({
    
    mutationFn: async (message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [message] }),
      });

      if(!response.ok){
        throw new Error('Failed to send message')
      }
      return response.body;
    },
    onMutate(message){
      addMessage(message)
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream found");

      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: '',
      };

      addMessage(responseMessage);
      setIsMessageUpdating(true)

      const reader = stream.getReader();
      const decoder = new TextDecoder();

      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, (prevText) => prevText + chunkValue);
      }

      setIsMessageUpdating(false)
      setInput('')

      setTimeout(() => {
        InputRef.current?.focus();
        
      }, 10)
    },

    onError(_, message){
      toast.error('Something went wrong, please try again');
      removeMessage(message.id);
      InputRef.current?.focus();
    }
  });

  return (
    <div className=" flex w-full gap-4 px-2  mx-auto">
      <div className=" flex-1 relative">
        <Input
          placeholder="Type a message..."
          ref={InputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const message: Message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };
              sendMessage(message);
            }
          }}
        />
        <div className="absolute inset-y-0 right-0 flex py-2.5 pr-2.5">
          <kbd className="inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-grey-300">
            {isPending ? <Loader2 className="w-3 h-3 animate-spin"/> : <CornerDownLeft className="w-3 h-3"/>}
          </kbd>
        </div>
      </div>
      {/* <Button className="h-full rounded-md">Send</Button> */}
    </div>
  );
};

export default ChatInput;
