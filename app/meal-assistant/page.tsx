import ChatInput from "@/components/Assistant/ChatInput";
import MessagesArea from "@/components/Assistant/MessagesArea";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col h-full  justify-between max-w-[900px] gap-4 mx-auto pb-2">
      <h1 className="text-center [font-size:_clamp(1.75rem,4vw,4rem)] my-6">
        <span  className=" bg-gradient-to-r from-indigo-500 to-purple-500 inline-block text-transparent bg-clip-text">Mealfull</span> Assistant
      </h1>
      <MessagesArea />
      <ChatInput />
    </div>
  );
};

export default page;
