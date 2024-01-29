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
      <div className=" p-4 rounded-3xl h-full bg-[#f8f8ff]">
        <form action={action} className="flex gap-4">
          <Input name="prompt" />
          <Button variant="outline" className="w-[100px]">Check</Button>
        </form>

        <div className="flex flex-col w-full gap-4 mt-12 ">
          {nutrition.map((item) => (
            <div className="w-full rounded-xl  p-4 grid grid-cols-3 items-center bg-white ">
                <div className=" flex flex-col justify-center items-center">
                    <h2 className="text-2xl">{item.name}</h2>
                    <p className="text-muted-foreground">{item.serving_size_g}g</p>
                </div>
              <div>
                <div className="w-[100px] h-[100px] rounded-full  border-2 flex justify-center items-center flex-col">
                    
                    <span>{item.calories}</span>
                    <span>Cal</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 rounded-2xl gradient font-bold p-4 text-[#dacafb]">
                    <span>P: {item.protein_g}g</span>
                    <span>F: {item.fat_total_g}g</span>
                    <span>C: {item.carbohydrates_total_g}g</span>
                    <span>S: {item.sugar_g}g</span>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateMealsOrIngredients;
