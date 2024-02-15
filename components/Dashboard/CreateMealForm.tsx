"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { useCalendarStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { createMeal } from "@/actions/actions";
import { create } from "domain";
import { useFormState } from "react-dom";
type AddMealsFormFields = {
  mealName: string;
  email: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
};
type CreateMealFormProps = {
  session: Session;
};

const CreateMealForm = ({ session }: CreateMealFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<AddMealsFormFields>();

  const { date } = useCalendarStore();

  const formattedOriginalDate = `${date?.getFullYear()}-${String(
    date?.getMonth()! + 1
  ).padStart(2, "0")}-${String(date?.getDate()).padStart(2, "0")}`;

  // const router = useRouter();
  // const onSubmit: SubmitHandler<AddMealsFormFields> = async (data) => {
  //   const response = await fetch("/api/createMeal", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       mealName: data.mealName,
  //       email: session?.user?.email,
  //       calories: data.calories,
  //       protein: data.protein,
  //       carbs: data.carbs,
  //       fat: data.fat,
  //       sugar: data.sugar,
  //       date: formattedOriginalDate,
  //     }),
  //   });

  //   router.refresh();
  // };

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

      <Button className="w-full flex-1">Add Meal</Button>
    </form>
  );
};

export default CreateMealForm;
