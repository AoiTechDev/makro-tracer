import ContainerLayout from "@/components/ContainerLayout/ContainerLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return <ContainerLayout>Ingredients</ContainerLayout>;
};

export default page;
