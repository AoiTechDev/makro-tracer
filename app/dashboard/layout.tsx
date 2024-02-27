import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
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
          <Suspense
            fallback={
              <Skeleton className="min-h-[400px] flex-1 flex-shrink-0"></Skeleton>
            }
          >
            {children}
          </Suspense>
          <Suspense
            fallback={
              <Skeleton className="hidden min-h-[400px] flex-1 lg:flex "></Skeleton>
            }
          >
            {stats}
          </Suspense>
        </div>
        <Suspense fallback={<Skeleton className="w-full h-36"></Skeleton>}>
          {table}
        </Suspense>
      </div>
      <Suspense
        fallback={
          <Skeleton className="flex flex-col  md:mt-0 w-full h-[480px] lg:h-[800px] lg:w-1/4 order-1 lg:order-2"></Skeleton>
        }
      >
        {calendar}
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
