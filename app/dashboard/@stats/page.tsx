import { Card } from "@/components/ui/card";
import React from "react";

import ChartContainer from "@/components/Stats/ChartContainer";
const page = () => {
  

  return (
    <Card className="min-h-[400px] flex-1 flex justify-center items-center p-4">
     <ChartContainer/>
    </Card>
  );
};

export default page;
