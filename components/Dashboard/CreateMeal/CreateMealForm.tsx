"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { useCalendarStore } from "@/store/store";
import { createMeal } from "@/actions/actions";
import { formattedDate } from "@/lib/utils";
import { useFormStatus } from 'react-dom'
import AddMealButton from "./AddMealButton";

type CreateMealFormProps = {
  session: Session;
};

const CreateMealForm = ({ session }: CreateMealFormProps) => {


  const { date } = useCalendarStore();

  const formattedOriginalDate = formattedDate(date)


  const inputData = [
    {
      html: "meal-name",
      label: "Meal Name",
      id: "meal-name",
      register: "mealName",
    },
    {
      html: "calories",
      label: "Calories",
      id: "calories",
      register: "calories",
    },
    {
      html: "protein",
      label: "Protein (g)",
      id: "protein",
      register: "protein",
    },
    {
      html: "sugar",
      label: "Sugar (g)",
      id: "sugar",
      register: "sugar",
    },
    {
      html: "carbs",
      label: "Carbohydrates (g)",
      id: "carbs",
      register: "carbs",
    },
    {
      html: "fat",
      label: "Fat (g)",
      id: "fat",
      register: "fat",
    },
  ];

  const createMealWithDate = createMeal.bind(null, session?.user?.email!, formattedOriginalDate);
  

  return (
    <form className="space-y-4 flex flex-col gap-6" action={createMealWithDate}>
      <div className="grid grid-cols-2 flex-1 gap-2">
        {inputData.map((input) => (
          <div key={input.html} className="space-y-2">
            <Label htmlFor={input.html}>{input.label}</Label>
            <Input
              id={input.id}
              required
              name={
                input.register as
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
        ))}
      </div>

     <AddMealButton/>
    </form>
  );
};

export default CreateMealForm;
