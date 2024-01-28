"use client";
import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import { Button } from "../ui/button";
import { UseFormRegister, useForm } from "react-hook-form";
import { FormFields } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/schema/input";

type FormProps = {
  buttonText: "Login" | "Register";
  register: UseFormRegister<FormFields>;
};


const Form = ({ buttonText, register }: FormProps) => {
  const {
   

    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        <CustomInput register={register} text="Email" name="email" />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <CustomInput register={register} text="Password" name="password" />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        {buttonText === "Register" ? (
          <>
            <CustomInput
              register={register}
              text="Confirm Password"
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </>
        ) : null}
      </div>

      <Button>{buttonText}</Button>
    </>
  );
};

export default Form;
