import React from "react";

const SettingsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" mt-16  max-w-4xl mx-auto flex justify-center items-center  ">
      {children}
    </div>
  );
};

export default SettingsLayout;
