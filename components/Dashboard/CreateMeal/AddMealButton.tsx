"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";
const AddMealButton = ({
  text,
  name
}: {
  text: string;
  name: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full flex-1" name={name} >
      {pending ? "Saving..." :  text}
    </Button>
  );
};

export default AddMealButton;
