"use client";
import React, { Suspense, useState } from "react";
import { Input } from "../ui/input";
import { createCompletion } from "@/actions/actions";
import { Button } from "../ui/button";
import { Nutrition } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import IngredientsList from "./IngredientsList/IngredientsList";
import { useFormStatus } from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  prompt: string;
};

const CreateMealsOrIngredients = () => {
  const [nutrition, setNutrition] = useState<Nutrition[]>([]);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async ({ prompt }) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // const r = await createCompletion(prompt as string);
    const result = await createCompletion(prompt as string);

    if (result?.error) {
      console.log(result.error);
    } else if (result?.success) {
      setNutrition(result.success);
    }
  });
  return (
    <div className="h-full">
      <div className=" p-4 rounded-3xl h-full bg-[#f8f8ff] flex flex-col justify-top items-center">
        <form onSubmit={onSubmit} className="flex gap-4">
          <Input {...register("prompt")} name="prompt" />
          <Button
            variant="outline"
            className="w-[100px]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Checking..." : "Check"}
          </Button>
        </form>

        {isSubmitting ? (
          <div className="mt-12  w-full flex flex-col gap-4 justify-center items-center">
            <Skeleton className="h-[125px] w-full rounded-xl bg-slate-400" />
            <Skeleton className="h-[125px] w-full rounded-xl bg-slate-400" />
            <Skeleton className="h-[125px] w-full rounded-xl bg-slate-400" />
          </div>
        ) : (
          <IngredientsList nutrition={nutrition} />
        )}
      </div>
    </div>
  );
};

export default CreateMealsOrIngredients;
