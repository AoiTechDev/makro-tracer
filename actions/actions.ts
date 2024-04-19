"use server";
import { z } from "zod";
import { NutritionAPIResponse, Nutrition, Meal } from "@/types/types";
import { NextResponse } from "next/server";
import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";
import { getServerSession } from "next-auth";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";

type NutritionResponse = {
  error?: string;
  success?: NutritionAPIResponse[];
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
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
      return { error: "Failed to fetch data", err };
    });

  return { success: res };
}

const schema = z.object({
  mealName: z.string({
    invalid_type_error: "Meal name must be a string",
    required_error: "Meal name is required",
  }),
  calories: z.number({
    invalid_type_error: "Calories must be a number",
    required_error: "Calories is required",
  }),
  protein: z.number({
    invalid_type_error: "Protein must be a number",
    required_error: "Protein is required",
  }),
  fat: z.number({
    invalid_type_error: "Fat name must be a number",
    required_error: "Fat is required",
  }),
  carbs: z.number({
    invalid_type_error: "Carbohydrates name must be a number",
    required_error: "Carbohydrates is required",
  }),
  sugar: z.number({
    invalid_type_error: "Sugar must be a number",
    required_error: "Sugar is required",
  }),
});

export async function createMeal(
  email: string,
  date: string,
  total: Nutrition | undefined,
  formData: FormData
) {
  const validatedFields = schema.safeParse({
    mealName: formData.get("mealName"),
    calories: total ? total.calories : Number(formData.get("calories")),
    protein: total ? total.protein : Number(formData.get("protein")),
    fat: total ? total.fat : Number(formData.get("fat")),
    carbs: total ? total.carbohydrates : Number(formData.get("carbs")),
    sugar: total ? total.sugar : Number(formData.get("sugar")),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await sql`
  SELECT * FROM users WHERE email=${email}
  `;
  const user = response.rows[0];

  if (formData.has("calendarBtn")) {
    try {
      await sql`
    INSERT INTO meals (userID, name, calories, protein, carbohydrates, fat, sugar, date)
    VALUES (${user.userid}, ${validatedFields.data.mealName}, ${validatedFields.data.calories}, ${validatedFields.data.protein}, ${validatedFields.data.carbs}, ${validatedFields.data.fat}, ${validatedFields.data.sugar}, ${date})
    `;

      revalidatePath("/dashboard");
      return {
        message: `${validatedFields.data.mealName} has been successfully added to calendar.`,
      };
    } catch (err) {
      return { message: "Failed to create meal" };
    }
  } else {
    try {
      await sql`
    INSERT INTO prepared_meals (userID, name, calories, protein, carbohydrates, fat, sugar, date)
    VALUES (${user.userid}, ${validatedFields.data.mealName}, ${validatedFields.data.calories}, ${validatedFields.data.protein}, ${validatedFields.data.carbs}, ${validatedFields.data.fat}, ${validatedFields.data.sugar}, ${date})
    `;

      revalidatePath("/dashboard");
      return {
        message: `${validatedFields.data.mealName} has been successfully added as prepared meal.`,
      };
    } catch (err) {
      return { message: "Failed to prepare meal" };
    }
  }
}

export async function deleteMeal(email: string, mealid: number) {
  try {
    const response = await sql`
    SELECT * FROM users WHERE email=${email}
    `;
    const user = response.rows[0];
    const mealName = await sql`
    SELECT name FROM meals WHERE mealid=${mealid} AND userid=${user.userid}
    `;
    await sql`
    DELETE FROM meals WHERE mealid=${mealid} AND userid=${user.userid}
    `;

    revalidatePath("/dashboard");
    return {
      message: `${mealName.rows[0].name} has been successfully deleted.`,
    };
  } catch (err) {
    return { message: "Failed to delete meal" };
  }
}

export async function getUser() {
  const session = await getServerSession();
  if (!session) {
    return { failure: "Not authenticated" };
  }
  try {
    const response = await sql`
    SELECT * FROM users WHERE email=${session.user?.email!}
    `;
    return { success: response.rows[0] };
  } catch (err) {
    return { failure: "Failed to get user" };
  }
}


//TODO: CREATE TYPE SAFETY RESPONSE
export async function getPreparedMeals() {
  const session = await getServerSession();
  if (!session) {
    return { failure: "Not authenticated" };
  }
  try {
    const user = await getUser();

    const preparedMeals = await sql`
   SELECT * FROM prepared_meals WHERE userid=${user?.success?.userid}
   `

    return { success: preparedMeals.rows };
  } catch (err) {
    return { failure: "Failed to get user" };
  }
}
