import ContainerLayout from "@/components/ContainerLayout/ContainerLayout";
import CreateMealsOrIngredients from "@/components/CreateMealsOrIngredients/CreateMealsOrIngredients";
import CreatedMealsAndIngredients from "@/components/Dashboard/CreatedMealsAndIngredients/CreatedMealsAndIngredients";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    // <ContainerLayout>
      <div className="bg-white w-full h-screen rounded-3xl grid lg:grid-cols-2 p-12 gap-6">
      <CreateMealsOrIngredients />
      <CreatedMealsAndIngredients type='full'/>
      </div>
    // </ContainerLayout>
  );
};

export default page;
