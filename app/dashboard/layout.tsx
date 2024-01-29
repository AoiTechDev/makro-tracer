import React from "react";

const DashboardLayout = ({
  children,

  calendar,
}: Readonly<{
  children: React.ReactNode;
  calendar: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full h-screen justify-center items-center p-8 bg-[#f8f8ff] gap-6">
      {children}
      {calendar}
    </div>
  );
};

export default DashboardLayout;
