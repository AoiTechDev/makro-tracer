import { getMeals } from "@/lib/getMeals/getMeals";
import React from "react";
import MobileCardContent from "./MobileCardContent";

const MobileCard = async () => {
  const result = await getMeals();

  return (
    <div className="w-full space-y-4 ">
      <MobileCardContent result={result}  />
    </div>
  );
};

export default MobileCard;
