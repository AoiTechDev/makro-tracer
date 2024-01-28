import CustomInput from "@/components/CustomInput/CustomInput";
import Form from "@/components/Form/Form";
import RegisterForm from "@/components/Form/RegisterForm/RegisterForm";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect('/')
  }
  return (
    <div className="container flex items-center h-screen w-screen justify-center ">
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-center">
          Create an account
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
