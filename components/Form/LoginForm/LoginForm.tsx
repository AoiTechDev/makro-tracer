"use client";
import React from "react";

import { FormFields } from "@/types/types";
import { signIn } from "next-auth/react";

import { SubmitHandler, useForm } from "react-hook-form";

import Form from "../Form";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(response)
    if (!response?.error) {
      router.push("/");
      router.refresh();
    }
  };

  const { handleSubmit, register } = useForm<FormFields>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form buttonText="Login" register={register}/>
    </form>
  );
};

export default LoginForm;
