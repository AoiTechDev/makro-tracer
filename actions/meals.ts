"use server";
import { GetMealsResponse, MealResponse, Nutrition } from "@/types/types";
import { mealSchema } from "@/validators/input";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { getUser } from "./users";
import { getServerSession } from "next-auth";


export async function getMeals(): Promise<GetMealsResponse> {
  const session = await getServerSession();
  if (!session) {
    return { failure: "Not authenticated" };
  }

  try {
    const user = await getUser();

    const meals = await sql`
     SELECT * FROM meals WHERE userid=${user?.success?.userid}
     `;

    const mappedMeals = meals.rows.map((row) => ({
      mealid: row.mealid,
      name: row.name,
      calories: parseFloat(row.calories),
      protein: parseFloat(row.protein),
      carbohydrates: parseFloat(row.carbohydrates),
      fat: parseFloat(row.fat),
      sugar: parseFloat(row.sugar),
      date: row.date,
    }));

    return { success: mappedMeals as MealResponse[] };
  } catch (err) {
    return { failure: "Failed to get user" };
  }
}

export async function createMeal(
  date: string,
  total: Nutrition | undefined,
  formData: FormData
) {
  const validatedFields = mealSchema.safeParse({
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

  const user = await getUser();

  if (formData.has("calendarBtn")) {
    try {
      await sql`
      INSERT INTO meals (userID, name, calories, protein, carbohydrates, fat, sugar, date)
      VALUES (${user?.success?.userid}, ${validatedFields.data.mealName}, ${validatedFields.data.calories}, ${validatedFields.data.protein}, ${validatedFields.data.carbs}, ${validatedFields.data.fat}, ${validatedFields.data.sugar}, ${date})
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
      VALUES (${user?.success?.userid}, ${validatedFields.data.mealName}, ${validatedFields.data.calories}, ${validatedFields.data.protein}, ${validatedFields.data.carbs}, ${validatedFields.data.fat}, ${validatedFields.data.sugar}, ${date})
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

export async function deleteMeal(mealid: number) {
  const user = await getUser();
  try {
    const mealName = await sql`
      SELECT name FROM meals WHERE mealid=${mealid} AND userid=${user?.success?.userid}
      `;
    await sql`
      DELETE FROM meals WHERE mealid=${mealid} AND userid=${user?.success?.userid}
      `;

    revalidatePath("/dashboard");
    return {
      message: `${mealName.rows[0].name} has been successfully deleted.`,
    };
  } catch (err) {
    return { message: "Failed to delete meal" };
  }
}
