import React from "react";
type CreatedMealsAndIngredientsProps = {
    type: 'full' | 'half';
}
const CreatedMealsAndIngredients = ({type}: CreatedMealsAndIngredientsProps) => {
  return (
    <div className={type === "full" ? "h-full" : 'h-1/2'}>
      <div className="bg-green-500 p-4 rounded-3xl h-full"></div>
    </div>
  );
};

export default CreatedMealsAndIngredients;
