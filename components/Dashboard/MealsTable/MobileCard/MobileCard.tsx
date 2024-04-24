import { getMeals } from "@/actions/meals";
import React from "react";
import MobileCardContent from "./MobileCardContent";

const MobileCard = async () => {
  const result = await getMeals();

  return (
    <div className="w-full space-y-4 ">
      <MobileCardContent result={result.success}  />
    </div>
  );
};

export default MobileCard;
