"use client";
import React from "react";

import { FormFields } from "@/types/types";
import { signIn } from "next-auth/react";

import { SubmitHandler, useForm } from "react-hook-form";

import Form from "../Form";

const LoginForm = () => {
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  };

  const {
    handleSubmit,
  } = useForm<FormFields>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form buttonText="Login" />
    </form>
  );
};

export default LoginForm;
