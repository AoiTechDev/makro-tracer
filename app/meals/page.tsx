import ContainerLayout from "@/components/ContainerLayout/ContainerLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <ContainerLayout>
      <h1 className="[font-size:_clamp(2rem,5vw,3rem)] mt-12">
        <span className="text-[#4176F4]">Prepare</span> your meal
      </h1>
      <p className="mb-12">To track it faster daily</p>
      <div className="max-w-[1600px]  w-full h-screen grid grid-cols-2">
        <div className="bg-white"></div>
        <div className="bg-red-500"></div>
      </div>
    </ContainerLayout>
  );
};

export default Page;
