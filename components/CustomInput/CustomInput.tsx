import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type InputProps = {
  text: "Email" | "Password" | "Confirm Password";
};
const CustomInput = ({ text }: InputProps) => {
  return (
    <>
      {text === "Email" ? (
        <Label htmlFor="email">{text}</Label>
      ) : (
        <Label>{text}</Label>
      )}
      <Input
        placeholder={text === "Email" ? "name@example.com" : "********"}
        type={text === "Email" ? "email" : "password"}
      />
    </>
  );
};

export default CustomInput;
