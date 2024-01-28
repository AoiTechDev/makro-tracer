import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {  UseFormRegister } from "react-hook-form";
import { FormFields } from "@/types/types";

type InputProps = {
  text: "Email" | "Password" | "Confirm Password";
  name: string;
  register: UseFormRegister<FormFields>;
};
const CustomInput = ({ text, name, register }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {text === "Email" ? (
        <Label htmlFor="email">{text}</Label>
      ) : (
        <Label>{text}</Label>
      )}
      <Input
        placeholder={text === "Email" ? "name@example.com" : "********"}
        type={text === "Email" ? "email" : "password"}
        {...register(name as "email" | "password" | "confirmPassword")}
        name={name}
      />
    </div>
  );
};

export default CustomInput;
