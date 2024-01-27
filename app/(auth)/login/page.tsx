import CustomInput from "@/components/CustomInput/CustomInput";
import Form from "@/components/Form/Form";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="container flex items-center h-screen w-screen justify-center ">
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-center">
          Login
        </h1>
       <Form buttonText="Login"/>
      </div>
    </div>
  );
};

export default page;
