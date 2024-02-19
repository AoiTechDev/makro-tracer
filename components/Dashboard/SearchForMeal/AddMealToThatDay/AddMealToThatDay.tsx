"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { countTotalNutrition, formattedDate } from "@/lib/utils";
import { useCalendarStore } from "@/store/store";
import { Nutrition } from "@/types/types";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type AddMealToThatDayProps = {
  nutrition: Nutrition[];
  session: Session;
};

type FormData = {
  mealName: string;
};

const AddMealToThatDay = ({ nutrition, session }: AddMealToThatDayProps) => {
  const { date } = useCalendarStore();
  const formattedOriginalDate = formattedDate(date)

  const router = useRouter();
  const onSubmit: SubmitHandler<FormData> = async (data) => {

    const total = countTotalNutrition(nutrition);
    const response = await fetch("/api/createMeal", {
      method: "POST",
      body: JSON.stringify({
        mealName: data.mealName,
        email: session?.user?.email,
        calories: total.calories,
        protein: total.protein,
        carbs: total.carbohydrates,
        fat: total.fat,
        sugar: total.sugar,
        date: formattedOriginalDate,
      }),
    });

    router.refresh();
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
      <Label className="flex justify-center items-center font-bold">
        Name:{" "}
      </Label>
      <Input {...register("mealName")} />
      <Button className="w-[100px]" disabled={isSubmitting}>
        {isSubmitting ? "Adding.." : "Add"}
      </Button>
    </form>
  );
};

export default AddMealToThatDay;
