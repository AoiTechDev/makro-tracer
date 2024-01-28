"use client";
import React from "react";
import { FormFields } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../Form";

const RegisterForm = () => {
  const { handleSubmit } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
    });

    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form buttonText='Register' />
    </form>
  );
};

export default RegisterForm;
