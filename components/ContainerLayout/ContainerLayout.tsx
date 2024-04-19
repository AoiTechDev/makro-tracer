import React from "react";

const ContainerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full h-screen justify-center flex-col items-center p-8 ">
      {children}
    </div>
  );
};

export default ContainerLayout;
