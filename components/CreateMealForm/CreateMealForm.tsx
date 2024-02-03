"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { useCalendarStore } from "@/store/store";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

type AddMealsFormFields = {
  mealName: string;
  email: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
};
type CreateMealFormProps = {
  session: Session;
};

const CreateMealForm = ({ session }: CreateMealFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<AddMealsFormFields>();

  const { date } = useCalendarStore();

  const formattedOriginalDate = `${date?.getFullYear()}-${String(date?.getMonth()! + 1).padStart(2, '0')}-${String(date?.getDate()).padStart(2, '0')}`;
  
  console.log(formattedOriginalDate)
  const router = useRouter();
  const onSubmit: SubmitHandler<AddMealsFormFields> = async (data) => {
    const response = await fetch("/api/createMeal", {
      method: "POST",
      body: JSON.stringify({
        mealName: data.mealName,
        email: session?.user?.email,
        calories: data.calories,
        protein: data.protein,
        carbs: data.carbs,
        fat: data.fat,
        sugar: data.sugar,
        date: formattedOriginalDate,
      }),
      // next: { tags: ["meal"] },
      // cache: "no-cache",
    });

    router.refresh()
  };
  

  return (
    <form
      className="space-y-4 flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-1 gap-6">
        <div className="gap-4 flex-1">
          <div className="space-y-2">
            <Label htmlFor="meal-name">Meal Name</Label>
            <Input id="meal-name" required {...register("mealName")} />
          </div>
          <div className="space-y-2  ">
            <Label htmlFor="calories">Calories</Label>
            <Input id="calories" required {...register("calories")} />
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="protein">Protein (g)</Label>
            <Input
              id="protein"
              required
              type="number"
              {...register("protein")}
            />
          </div>
        </div>

        <div className=" gap-4 flex-1">
          <div className="space-y-2">
            <Label htmlFor="sugar">Sugar (g)</Label>
            <Input id="sugar" required type="number" {...register("sugar")} />
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="carbs">Carbohydrates (g)</Label>
            <Input id="carbs" required type="number" {...register("carbs")} />
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="fat">Fat (g)</Label>
            <Input id="fat" required type="number" {...register("fat")} />
          </div>
        </div>
      </div>
      <Button className="w-full flex-1" >
        Add Meal
      </Button>
    </form>
  );
};

export default CreateMealForm;
