import { getMeals } from "@/actions/meals";
import CalendarWrapper from "@/components/Dashboard/Calendar/CalendarWrapper";

import React from "react";

const Page = async () => {
  const result = await getMeals();
 
  return (
    <div className="flex flex-col  md:mt-0 w-full lg:w-1/4 order-1 lg:order-2 relative">
      <CalendarWrapper result={result.success} />
    </div>
  );
};

export default Page;
