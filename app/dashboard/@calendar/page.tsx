import CalendarView from "@/components/Calendar/CalendarView";
import TotalNutrition from "@/components/TotalNutrition/TotalNutrition";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getMeals } from "@/lib/getMeals/getMeals";
import { getServerSession } from "next-auth";
import React from "react";

const Page = async () => {
  const session = await getServerSession();
  const result = await getMeals(session?.user?.email ?? "");
  
  return (
    <Card className="flex  flex-col md:flex-row flex-1 border-0 gap-6 mt-14 md:mt-0">
      <Card className="flex-1">
        {" "}
        <CardContent>
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>

          <CalendarView />
        </CardContent>
      </Card>
      <Card className="flex-1">
        <TotalNutrition result={result} />
      </Card>
    </Card>
  );
};

export default Page;
