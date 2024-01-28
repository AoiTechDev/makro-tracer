import CustomInput from "@/components/CustomInput/CustomInput";
import Form from "@/components/Form/Form";
import LoginForm from "@/components/Form/LoginForm/LoginForm";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {

  return (
    <div className="container flex items-center h-screen w-screen justify-center ">
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-center">
          Login
        </h1>
      <LoginForm />
      </div>
    </div>
  );
};

export default page;
