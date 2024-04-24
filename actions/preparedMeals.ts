'use server'

import { getServerSession } from "next-auth";
import { getUser } from "./users";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { GetMealsResponse, MealResponse } from "@/types/types";

export async function getPreparedMeals(): Promise<GetMealsResponse> {
  const session = await getServerSession();
  if (!session) {
    return { failure: "Not authenticated" };
  }
  try {
    const user = await getUser();

    const preparedMeals = await sql`
     SELECT * FROM prepared_meals WHERE userid=${user?.success?.userid}
     `;

     const mappedPreparedMeals = preparedMeals.rows.map((row) => ({
      mealid: row.mealid,
      name: row.name,
      calories: parseInt(row.calories),
      protein: parseFloat(row.protein),
      carbohydrates: parseFloat(row.carbohydrates),
      fat: parseFloat(row.fat),
      sugar: parseFloat(row.sugar),
      date: row.date,
    }));

    return { success: mappedPreparedMeals as MealResponse[] };
  } catch (err) {
    return { failure: "Failed to get user" };
  }
}

export async function deletePreparedMeal(mealid: number) {
  try {
    const user = await getUser();

    const mealName = await sql`
      SELECT name FROM prepared_meals WHERE mealid=${mealid} AND userid=${user?.success?.userid}
      `;
    await sql`
      DELETE FROM prepared_meals WHERE mealid=${mealid} AND userid=${user?.success?.userid}
      `;

    revalidatePath("/dashboard");
    return {
      message: `${mealName.rows[0].name} has been successfully deleted.`,
    };
  } catch (err) {
    return { message: "Failed to delete meal" };
  }
}

export async function addPreparedToCalendar(
  name: string,
  calories: number,
  protein: number,
  carbohydrates: number,
  fat: number,
  sugar: number,
  date: string
) {
  try {
    const user = await getUser();

    await sql`
      INSERT INTO meals (userID, name, calories, protein, carbohydrates, fat, sugar, date)
      VALUES (${user?.success?.userid}, ${name}, ${calories}, ${protein}, ${carbohydrates}, ${fat}, ${sugar}, ${date})
      `;

    revalidatePath("/dashboard");
    return {
      message: `${name} has been successfully added to calendar.`,
    };
  } catch (err) {
    return { failure: "Failed to add meal" };
  }
}
