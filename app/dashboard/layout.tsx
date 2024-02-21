import { Card } from "@/components/ui/card";
import React from "react";

const DashboardLayout = ({
  children,
  table,
  calendar,
  stats,
}: Readonly<{
  children: React.ReactNode;
  calendar: React.ReactNode;
  table: React.ReactNode;
  stats: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-around w-full p-2 md:p-4 mt-16">
      <div className="w-full lg:w-3/4 flex flex-col gap-4 order-2 lg:order-1">
        <div className="flex flex-col lg:flex-row gap-4 ">
          {children}
         {stats}
        </div>
        {table}
      </div>

      {calendar}
    </div>
  );
};

export default DashboardLayout;
