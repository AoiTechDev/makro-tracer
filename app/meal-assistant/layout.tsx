import React from "react";

const AiLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-full h-[100dvh] pt-16">{children}</div>;
};

export default AiLayout;
