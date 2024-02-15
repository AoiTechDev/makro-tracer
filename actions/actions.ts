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
  mealName: z.string(),
  calories: z.number(),
  protein: z.number(),
  fat: z.number(),
  carbs: z.number(),
  sugar: z.number(),

});

export async function createMeal(email:string, date: string, formData: FormData) {

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
    console.log(date)
    const createMeal = await sql`
    INSERT INTO meals (userID, name, calories, protein, carbohydrates, fat, sugar, date)
    VALUES (${user.userid}, ${validatedFields.data.mealName}, ${validatedFields.data.calories}, ${validatedFields.data.protein}, ${validatedFields.data.carbs}, ${validatedFields.data.fat}, ${validatedFields.data.sugar}, ${date})
    `;

    console.log(createMeal)
    revalidatePath('/dashboard');
    return {message: 'Added meal'}
  } catch (err) {
    return { message: "Fai to create meal" };
  }

  // const res = await fetch('/api/createMeal', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     mealName: formData.get('name'),
  //     email: formData.get('email'),
  //     calories: formData.get('calories'),
  //     protein: formData.get('protein'),
  //     carbs: formData.get('carbs'),
  //     fat: formData.get('fat'),
  //     sugar: formData.get('sugar'),
  //     date: new Date().toISOString(),
  //   }),
  // });
}
