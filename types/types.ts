import { schema } from "@/schema/input";
import { z } from "zod";

export type FormFields = z.infer<typeof schema>;

export type Nutrition = {
  name: string;
  calories: number;
  protein_g: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
  sugar_g: number;
  cholesterol_mg: number;
  serving_size_g: number;
};

export type AddMealsFormFields = {
  mealName: string;
  email: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
};

export type TotalNutritionData = {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  sugar: number;
};
export type Meal = {
  name: string;
  protein: number;
  fat: number;
  carbohydrates: number;
  sugar: number;
  calories: number;
  date: Date;
  mealid: number
}
export type WeeklyMealData = {
  protein: number;
  fat: number;
  carbohydrates: number;
  sugar: number;
  calories: number;
  date: Date;
};

export type NutritionInMeal = {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  sugar: number;
}