"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
type FormInputsProps = {
  html: string;
  label: string;
  id: string;
  register: string;
};
const FormInputs = ({ html, label, id, register }: FormInputsProps) => {
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
      />
    </div>
  );
};

export default FormInputs;
