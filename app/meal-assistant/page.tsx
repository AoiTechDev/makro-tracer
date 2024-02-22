import Chat from "@/components/Assistant/Chat";
import ChatInput from "@/components/Assistant/ChatInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-full  justify-between max-w-[1000px] gap-4 mx-auto pb-2">
      <h1 className="text-center [font-size:_clamp(1.75rem,4vw,4rem)] my-6">
        Your Meal Assistant
      </h1>
      <Chat/>
    </div>
  );
};

export default page;
