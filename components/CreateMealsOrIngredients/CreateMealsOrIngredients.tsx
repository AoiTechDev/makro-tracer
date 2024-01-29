"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { createCompletion } from "@/actions/actions";
import { Button } from "../ui/button";
import { Nutrition } from "@/types/types";

const CreateMealsOrIngredients = () => {
  const [nutrition, setNutrition] = useState<Nutrition[]>([]);
  async function action(formData: FormData) {
    const prompt = formData.get("prompt");

    const result = await createCompletion(prompt as string);

    if (result?.error) {
      console.log(result.error);
    } else if (result?.success) {
      setNutrition(result.success);
    }
  }
  console.log(nutrition[0]);
  return (
    <div className="h-full">
      <div className="border p-4 rounded-3xl h-full">
        <form action={action}>
          <Input name="prompt" />
          <Button variant="outline">Add</Button>
        </form>

        <ul>
            {nutrition.map((item) => (
                <ul>
                    <li>Name: {item.name}</li>
                    <li>Amount: {item.serving_size_g}</li>
                    <li>Calories: {item.calories}</li>
                    <li>Protein: {item.protein_g}</li>
                    <li>Fat: {item.fat_total_g}</li>
                    <li>Carbs: {item.carbohydrates_total_g}</li>
                    <li>Sugar: {item.sugar_g}</li>
                </ul>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateMealsOrIngredients;
