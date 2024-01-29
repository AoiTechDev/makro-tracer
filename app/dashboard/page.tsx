import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return <div className="bg-white w-3/4 h-full rounded-3xl"></div>;
};

export default page;
