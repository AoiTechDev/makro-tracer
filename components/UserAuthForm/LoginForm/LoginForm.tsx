"use client";
import React, { useState } from "react";

import { FormFields } from "@/types/types";
import { signIn } from "next-auth/react";

import { SubmitHandler, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/reusable/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/validators/input";
import { getAvatarImage } from "@/app/settings/actions";

import { setAvatarInLocalStorage } from "@/lib/utils";

const LoginForm = () => {

  // const {avatar, setAvatar} = useAvatarStore();

  // React.useEffect(() => {

  // }, [avatar])



  const router = useRouter();
  const [signInError, setSignInError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.error) {
      if (response.status === 401) {
        setSignInError("Invalid credentials. Please try again." );
      }
    } else {

      const userAvatar = await getAvatarImage();
      
      await setAvatarInLocalStorage(userAvatar.success?.url);
      router.push("/");
      router.refresh();
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

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
      {signInError ? <span className="text-red-500">{signInError}</span> : null}
      </div>
      <Button disabled={isSubmitting}>{isSubmitting ? "Logging in..." : 'Login'}</Button>
    </form>
  );
};

export default LoginForm;
