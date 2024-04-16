import CalendarView from "@/components/Dashboard/CalendarView";
import TotalNutrition from "@/components/Dashboard/TotalNutrition";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getMeals } from "@/lib/getMeals/getMeals";
import { getServerSession } from "next-auth";
import React from "react";

const Page = async () => {
  const session = await getServerSession();
  const result = await getMeals();

  return (
    <div className="flex flex-col   md:mt-0 w-full lg:w-1/4 order-1 lg:order-2">
      <Card className=" w-full ">
        {" "}
        <CardContent className="max-[1200px]:hidden">
          <CardHeader className="flex  items-center">
            <CardTitle>Select Date</CardTitle>
          </CardHeader>

          <CalendarView />
        </CardContent>
        <TotalNutrition result={result} />
      </Card>
    </div>
  );
};

export default Page;
