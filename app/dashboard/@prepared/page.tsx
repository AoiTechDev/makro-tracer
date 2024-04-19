import { getPreparedMeals } from "@/actions/actions";
import MealCard from "@/components/Dashboard/PreparedMeals/MealCard";
import { Card } from "@/components/ui/card";
import React from "react";

const page = async () => {
  const preparedMeals = await getPreparedMeals();

  return (
    <Card className="max-h-[400px] w-full flex-1  flex justify-center items-start overflow-y-auto p-4 ">
      <MealCard meals={preparedMeals.success} />
    </Card>
  );
};

export default page;
