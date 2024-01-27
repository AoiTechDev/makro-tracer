"use client";
import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormFields } from "@/types/types";

type FormProps = {
  buttonText: "Login" | "Register";
};

const Form = ({ buttonText }: FormProps) => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <CustomInput register={register} text="Email" name="email" />
        <CustomInput register={register} text="Password" name="password" />
        {buttonText === "Register" ? (
          <CustomInput register={register} text="Confirm Password" name="confirmPassword" />
        ) : null}
      </div>

      <Button>{buttonText}</Button>
    </form>
  );
};

export default Form;
