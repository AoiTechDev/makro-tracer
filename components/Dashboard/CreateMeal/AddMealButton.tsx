"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";
const AddMealButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full flex-1">
      {pending ? "Saving..." : "Add Meal"}
    </Button>
  );
};

export default AddMealButton;
