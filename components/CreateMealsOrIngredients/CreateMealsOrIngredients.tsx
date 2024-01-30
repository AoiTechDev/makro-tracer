"use client";
import React, { Suspense, useState } from "react";
import { Input } from "../ui/input";
import { createCompletion } from "@/actions/actions";
import { Button } from "../ui/button";
import { Nutrition } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import IngredientsList from "./IngredientsList/IngredientsList";

const CreateMealsOrIngredients = () => {
  const [nutrition, setNutrition] = useState<Nutrition[]>([]);

  async function action(formData: FormData) {
    const prompt = formData.get("prompt");

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const r = await createCompletion(prompt as string);

    const result = await createCompletion(prompt as string);

    if (result?.error) {
      console.log(result.error);
    } else if (result?.success) {
      setNutrition(result.success);
    }
  }

  return (
    <div className="h-full">
      <div className=" p-4 rounded-3xl h-full bg-[#f8f8ff] flex flex-col justify-top items-center">
        <form action={action} className="flex gap-4">
          <Input name="prompt" />
          <Button variant="outline" className="w-[100px]">
            Check
          </Button>
        </form>
       
          <IngredientsList nutrition={nutrition} />
        
      </div>
    </div>
  );
};

export default CreateMealsOrIngredients;
