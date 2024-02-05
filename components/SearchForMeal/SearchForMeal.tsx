"use client";
import React, { Suspense, useState } from "react";
import { Input } from "../ui/input";
import { createCompletion } from "@/actions/actions";
import { Button } from "../ui/button";
import { Nutrition } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useFormStatus } from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import IngredientsList from "../CreateMealsOrIngredients/IngredientsList/IngredientsList";
import AddMealToThatDay from "./AddMealToThatDay/AddMealToThatDay";
import { Session } from "next-auth";
type FormData = {
  prompt: string;
};
type SearchForMealProps = {
    session: Session;
};
const SearchForMeal = ({session}: SearchForMealProps) => {
  const [nutrition, setNutrition] = useState<Nutrition[]>([]);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async ({ prompt }) => {

    const result = await createCompletion(prompt as string);

    if (result?.error) {
      console.log(result.error);
    } else if (result?.success) {
      setNutrition(result.success);
    }
  });

  return (
    <div>
      {" "}
      <form onSubmit={onSubmit} className="flex gap-4 mt-6">
        {/* <Input {...register("mealName")} name="mealName" /> */}
        <Input {...register("prompt")} name="prompt" />
        <Button className="w-[100px]" type="submit">
          Check
        </Button>
      </form>
      {isSubmitting ? (
        <div className=" w-full flex flex-col gap-4 justify-center items-center">
          <Skeleton className="h-[125px] w-full rounded-xl bg-slate-400" />
        </div>
      ) : (
        <IngredientsList nutrition={nutrition} />
      )}

      {nutrition.length > 0 ? <AddMealToThatDay nutrition={nutrition} session={session}/> : null}
    </div>
  );
};

export default SearchForMeal;
