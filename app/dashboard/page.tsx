import Consumed from "@/components/Dashboard/Consumed/Consumed";
import CreatedMealsAndIngredients from "@/components/Dashboard/CreatedMealsAndIngredients/CreatedMealsAndIngredients";
import Total from "@/components/Dashboard/Total/Total";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="bg-white w-3/4 h-full rounded-3xl grid grid-cols-2 p-12 gap-6">
      <div className="col-span-1 h-full flex flex-col gap-6">
        <Total />
        <CreatedMealsAndIngredients />
      </div>
      <Consumed />
    </div>
  );
};

export default page;
