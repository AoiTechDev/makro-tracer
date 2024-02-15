"use client";
import React, { useState } from "react";
import { createCompletion } from "@/actions/actions";
import { Nutrition } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import {  useForm } from "react-hook-form";
import { Session } from "next-auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import IngredientsList from "./IngredientsList/IngredientsList";
import AddMealToThatDay from "./AddMealToThatDay/AddMealToThatDay";
type FormData = {
  prompt: string;
};
type SearchForMealProps = {
  session: Session;
};
const SearchForMeal = ({ session }: SearchForMealProps) => {
  const [nutrition, setNutrition] = useState<Nutrition[]>([]);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async ({ prompt }) => {

    const result = await createCompletion(prompt as string);
    setNutrition([])
    if (result?.error) {
      console.log(result.error);
    } else if (result?.success) {
      setNutrition(result.success);
    }
  });

  
  return (
    <>
      {" "}
      <form onSubmit={onSubmit} className="flex gap-4 mt-6">
        <Input {...register("prompt")} name="prompt" required/>
        <Button disabled={isSubmitting} className="w-[100px]" type="submit">
          {isSubmitting ? "Searching..." : "Search"}
        </Button>
      </form>
      {isSubmitting ? (
        <div className=" w-full my-12 flex flex-col gap-4 justify-center items-center">
          <Skeleton className="h-[50px] w-full rounded-xl bg-slate-200" />
          <Skeleton className="h-[30px] w-full rounded-xl bg-slate-200" />
          <Skeleton className="h-[30px] w-full rounded-xl bg-slate-200" />
        </div>
      ) : (
        <>
          <IngredientsList nutrition={nutrition} />
        </>
      )}

      {(nutrition.length > 0 && !isSubmitting) ? <AddMealToThatDay nutrition={nutrition} session={session} /> : null}
    </>
  );
};

export default SearchForMeal;
