import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
   
      <div className="bg-white w-full h-screen rounded-3xl grid lg:grid-cols-2 lg:p-12 gap-6">
    
      </div>

  );
};

export default page;
