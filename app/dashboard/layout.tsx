import MealsTable from "@/components/MealsTable/MealsTable";
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
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="flex lg:flex-1 gap-6 flex-col lg:flex-row">
        {calendar}
        {children}
      </div>
      <div className="lg:flex-1">
       {table}
      </div>
    </div>
  );
};

export default DashboardLayout;
