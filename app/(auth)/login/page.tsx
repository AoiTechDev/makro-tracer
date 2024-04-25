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
        <div>
        <p className="text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </>
    
  );
};

export default page;
