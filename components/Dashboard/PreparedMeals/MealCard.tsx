import { QueryResultRow } from "@vercel/postgres";
import React from "react";
import MealCardContent from "./MealCardContent";


const MealCard = ({ meals }: { meals: QueryResultRow[] | undefined }) => {
  const mealList = meals?.map((meal, index) => (
    <MealCardContent meal={meal} index={index} key={meal.mealid}/>
  ));
  return <div className="w-full space-y-4 ">{mealList}</div>;
};

export default MealCard;
