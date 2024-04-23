import React from "react";
interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="container flex items-center h-screen w-screen justify-center ">
        <div className="flex flex-col gap-6 w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
