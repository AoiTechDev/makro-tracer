import { Card } from "@/components/ui/card";
import React from "react";

import ChartContainer from "@/components/Stats/ChartContainer";
import ChartOptions from "@/components/Stats/ChartOptions";
const page = () => {
  

  return (
    <Card className="min-h-[400px] flex-1 flex flex-col gap-5 justify-center items-center p-4">
     <ChartOptions/>
     <ChartContainer/>
    </Card>
  );
};

export default page;
