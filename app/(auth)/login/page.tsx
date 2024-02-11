import LoginForm from "@/components/UserAuthForm/LoginForm/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <>
        <h1 className="text-2xl font-semibold tracking-tight text-center">
          Login
        </h1>
        <LoginForm />
    </>
    
  );
};

export default page;
