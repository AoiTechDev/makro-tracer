import CustomInput from "@/components/CustomInput/CustomInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

const page = () => {
  return (
    <div className="container flex items-center h-screen w-screen justify-center ">
      <div className="flex flex-col gap-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold tracking-tight text-center">
          Create an account
        </h1>
        <div className="flex flex-col gap-2">
          <CustomInput text="Email" />
          <CustomInput text="Password" />
          <CustomInput text="Confirm Password" />
        </div>

        <Button>Register</Button>
      </div>
    </div>
  );
};

export default page;
