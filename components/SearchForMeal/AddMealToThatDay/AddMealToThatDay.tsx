"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import { useCalendarStore } from "@/store/store";
import { Nutrition } from "@/types/types";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type AddMealToThatDayProps = {
  nutrition: Nutrition[];
  session: Session;
};
type TotalNutritionProps = {
  result: GetMealsResponse;
};

type TotalNutritionData = {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  sugar: number;
};

type FormData = {
  mealName: string;
};
type AddMealsFormFields = {
  mealName: string;
  email: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
};
const AddMealToThatDay = ({ nutrition, session }: AddMealToThatDayProps) => {
  const [totalNutrition, setTotalNutrition] = useState<TotalNutritionData>({
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    sugar: 0,
  });
  const { date } = useCalendarStore();
  const formattedOriginalDate = `${date?.getFullYear()}-${String(
    date?.getMonth()! + 1
  ).padStart(2, "0")}-${String(date?.getDate()).padStart(2, "0")}`;


  const router = useRouter();
  const onSubmit: SubmitHandler<FormData> = async (data) => {

    let total = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
        sugar: 0,
      };
      nutrition.forEach((item) => {
        total = {
          calories: total.calories + Number(item.calories),
          protein: total.protein + Number(item.protein_g),
          carbohydrates: total.carbohydrates + Number(item.carbohydrates_total_g),
          fat: total.fat + Number(item.fat_total_g),
          sugar: total.sugar + Number(item.sugar_g),
        };
      });
    //   setTotalNutrition(total);

    console.log(total)
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
    <form   onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
      <Label className="flex justify-center items-center font-bold">Name: </Label>
      <Input {...register('mealName')}/>
      <Button className="w-[100px]" disabled={isSubmitting}>{isSubmitting ? 'Adding..' : 'Add'}</Button>
    </form>
  );
};

export default AddMealToThatDay;
