"use client";
import React from "react";

import { Session } from "next-auth";
import { useCalendarStore } from "@/store/store";
import { createMeal } from "@/actions/actions";
import { formattedDate } from "@/lib/utils";
import AddMealButton from "./AddMealButton";
import FormInputs from "./FormInputs";
import { toast } from "sonner";

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
    <form className="space-y-4 flex flex-col gap-6" action={(data) => createMealWithDate(data).then((res) => toast.success(res.message ))} >
      <div className="grid grid-cols-2 flex-1 gap-2">
        {inputData.map((input, index) => (
         <FormInputs key={index} {...input}/>
        ))}
      </div>

     <AddMealButton/>
    </form>
  );
};

export default CreateMealForm;
