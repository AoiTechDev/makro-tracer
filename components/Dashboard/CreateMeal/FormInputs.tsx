"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
type FormInputsProps = {
  html: string;
  label: string;
  id: string;
  register: string;
};
const FormInputs = ({ html, label, id, register }: FormInputsProps) => {
    const [error, setError] = useState<Record<string, string>>({});
    console.log(error)
  return (
    <div key={html} className="space-y-2">
      <Label htmlFor={html}>{label}</Label>
      <Input
        id={id}
        required
        name={
          register as
            | "mealName"
            | "email"
            | "calories"
            | "protein"
            | "carbs"
            | "fat"
            | "sugar"
        }
        onChange={(e) => {
          const value = e.target.value;
          const name = e.target.name;

          if (name !== "mealName" && isNaN(Number(value))) {
            setError({ ...error, [name]: "This input should be a number" });
          } else if (name === "mealName" && /\d/.test(value)) {
            setError({ ...error, [name]: "This input should be a string" });
          } else {
            setError({ ...error, [name]: "" });
          }
        }}
      />
      {error[register] ? <p className="text-red-500">{error[register]}</p> : null}
    </div>
  );
};

export default FormInputs;
