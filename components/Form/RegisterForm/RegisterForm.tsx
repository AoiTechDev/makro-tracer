"use client";
import React from "react";
import { FormFields } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/schema/input";

const RegisterForm = () => {
  const { handleSubmit, register } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
    });

    console.log(response);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Form buttonText="Register" register={register} />
    </form>
  );
};

export default RegisterForm;
