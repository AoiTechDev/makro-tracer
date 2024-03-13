import React from "react";

const SettingsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="  max-w-4xl mx-auto flex justify-center items-center  mt-16 sm:mt-0 sm:h-screen">
      {children}
    </div>
  );
};

export default SettingsLayout;
