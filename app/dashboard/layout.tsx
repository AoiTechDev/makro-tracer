import MealsTable from "@/components/MealsTable/MealsTable";
import { Card } from "@/components/ui/card";
import React from "react";

const DashboardLayout = ({
  children,
  table,
  calendar,
}: Readonly<{
  children: React.ReactNode;
  calendar: React.ReactNode;
  table: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-around w-full p-2 md:p-4">
      {/* <div className="flex lg:flex-1 gap-6 flex-col lg:flex-row">
        {calendar}
        {children}
      </div>
      <div className="lg:flex-1">{table}</div> */}
      <div className="w-full lg:w-3/4 flex flex-col gap-4 order-2 lg:order-1">
        <div className="flex flex-col lg:flex-row gap-4 ">
          {children}
          <Card className="min-h-[400px] flex-1 bg-red-200 lg:flex justify-center items-center hidden">Existing meals(comming soon)</Card>
        </div>
        {table}
      </div>

     {calendar}
    </div>
  );
};

export default DashboardLayout;
