"use client";
import React from "react";


import { useCalendarStore } from "@/store/store";

import { formattedDate } from "@/lib/utils";
import AddMealButton from "./AddMealButton";
import FormInputs from "./FormInputs";
import { toast } from "sonner";
import { createMeal } from "@/actions/meals";


const CreateMealForm = () => {
  const { date } = useCalendarStore();

  const formattedOriginalDate = formattedDate(date);

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

  const createMealWithDate = createMeal.bind(
    null,

    formattedOriginalDate,
    undefined
  );
  return (
    <form
      className="space-y-4 flex flex-col gap-6"
      action={(data) => {
        return createMealWithDate(data).then((res) =>
          toast.success(res.message)
        );
      }}
    >
      <div className="grid grid-cols-2 flex-1 gap-2">
        {inputData.map((input, index) => (
          <FormInputs key={index} {...input} />
        ))}
      </div>

      <div className="flex gap-6">
        <AddMealButton text="Add to Calendar" name="calendarBtn" />
        <AddMealButton text="Add as Prepared" name="preparedBtn" />
      </div>
    </form>
  );
};

export default CreateMealForm;
