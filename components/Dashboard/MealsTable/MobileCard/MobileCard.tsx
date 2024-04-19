import { getMeals } from "@/lib/getMeals/getMeals";
import React from "react";
import MobileCardContent from "./MobileCardContent";
import { getServerSession } from "next-auth";

const MobileCard = async () => {
  const result = await getMeals();
  const session = await getServerSession();
  return (
    <div className="w-full space-y-4 ">
      <MobileCardContent result={result} session={session} />
    </div>
  );
};

export default MobileCard;
