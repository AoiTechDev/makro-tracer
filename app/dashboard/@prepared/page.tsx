import { getPreparedMeals } from "@/actions/preparedMeals";
import MealCard from "@/components/Dashboard/PreparedMeals/MealCard";
import { Card, CardHeader } from "@/components/ui/card";
import { GetMealsResponse } from "@/types/types";
import React from "react";

const page = async () => {
  const preparedMeals = await getPreparedMeals();

  return (
    <Card className="min-h-[400px] w-full flex-1  flex-col flex  justify-start items-start overflow-auto p-4 ">
      <CardHeader className="text-2xl font-bold py-4 px-2">
        Your Prepared Meals
      </CardHeader>
      {preparedMeals.success?.length !== 0 ? (
        <MealCard meals={preparedMeals.success} />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <span>You do not have prepared meals yet.</span>
        </div>
      )}
    </Card>
  );
};

export default page;
