"use server";
import { z } from "zod";
import { Nutrition } from "@/types/types";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

type NutritionResponse = {
  error?: string;
  success?: Nutrition[];
};

export async function createCompletion(
  prompt: string
): Promise<NutritionResponse> {
  if (!prompt) {
    return { error: "prompt is required" };
  }

  const res = await fetch(
    `https://api.api-ninjas.com/v1/nutrition?query=${prompt}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.NINJA_API_KEY || "",
      },
    }
  ).then((res) => {
    return res.json();
  });

  return { success: res };
}

const schema = z.object({
  mealName: z.string({
    invalid_type_error: 'Meal name must be a string',
    required_error: 'Meal name is required',
  }),
  calories: z.number({
    invalid_type_error: 'Calories must be a number',
    required_error: 'Calories is required',
  }),
  protein: z.number({
    invalid_type_error: 'Protein must be a number',
    required_error: 'Protein is required',
  }),
  fat: z.number({
    invalid_type_error: 'Fat name must be a number',
    required_error: 'Fat is required',
  }),
  carbs: z.number({
    invalid_type_error: 'Carbohydrates name must be a number',
    required_error: 'Carbohydrates is required',
  }),
  sugar: z.number({
    invalid_type_error: 'Sugar must be a number',
    required_error: 'Sugar is required',
  }),
});

export async function createMeal(
  email: string,
  date: string,
  formData: FormData
) {
  const validatedFields = schema.safeParse({
    mealName: formData.get("mealName"),
    calories: Number(formData.get("calories")),
    protein: Number(formData.get("protein")),
    fat: Number(formData.get("fat")),
    carbs: Number(formData.get("carbs")),
    sugar: Number(formData.get("sugar")),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await sql`
    SELECT * FROM users WHERE email=${email}
    `;
    const user = response.rows[0];
    await sql`
    INSERT INTO meals (userID, name, calories, protein, carbohydrates, fat, sugar, date)
    VALUES (${user.userid}, ${validatedFields.data.mealName}, ${validatedFields.data.calories}, ${validatedFields.data.protein}, ${validatedFields.data.carbs}, ${validatedFields.data.fat}, ${validatedFields.data.sugar}, ${date})
    `;

    revalidatePath("/dashboard");
    return { message: "Added meal" };
  } catch (err) {
    return { message: "Fai to create meal" };
  }
}


export async function deleteMeal(email: string, mealid: number) {
  try {
    const response = await sql`
    SELECT * FROM users WHERE email=${email}
    `;
    const user = response.rows[0];
    await sql`
    DELETE FROM meals WHERE mealid=${mealid} AND userid=${user.userid}
    `;

    revalidatePath("/dashboard");
    return { message: "Deleted meal" };
  } catch (err) {
    return { message: "Failed to delete meal" };
  }
}