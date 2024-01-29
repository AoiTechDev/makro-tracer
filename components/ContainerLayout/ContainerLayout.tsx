import React from "react";

const ContainerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full h-screen justify-center items-center p-8 bg-[#f8f8ff]">
      {children}
    </div>
  );
};

export default ContainerLayout;
