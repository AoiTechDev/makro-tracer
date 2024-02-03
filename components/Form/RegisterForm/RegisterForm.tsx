"use client";
import React from "react";
import { FormFields } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/schema/input";
import CustomInput from "@/components/CustomInput/CustomInput";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
    });


    if (response.status === 200) {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (!response?.error) {
        router.push("/");
        router.refresh();
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div>
          <CustomInput register={register} text="Email" name="email" />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div>
          <CustomInput register={register} text="Password" name="password" />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div>
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
        </div>
      </div>

      <Button disabled={isSubmitting}>Register</Button>
    </form>
  );
};

export default RegisterForm;
