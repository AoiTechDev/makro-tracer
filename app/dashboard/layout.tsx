import React from "react";

const DashboardLayout = ({
  children,

  calendar,
}: Readonly<{
  children: React.ReactNode;
  calendar: React.ReactNode;
}>) => {
  return (
    <div>
      {children}
      {calendar}
    </div>
  );
};

export default DashboardLayout;
