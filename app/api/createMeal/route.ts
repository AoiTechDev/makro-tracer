import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: Request) {
  try {
    const { mealName, email, calories, protein, carbs, fat, sugar, date } =
      await request.json();

    const response = await sql`
        SELECT * FROM users WHERE email=${email}
        `;
    const user = response.rows[0];

    const createMeal = await sql`
    INSERT INTO meals (userID, name, calories, protein, carbohydrates, fat, sugar, date)
    VALUES (${user.userid}, ${mealName}, ${calories}, ${protein}, ${carbs}, ${fat}, ${sugar}, ${date})
    `;

 
  } catch (err) {
    console.error("create meal error", err);
  }

  return NextResponse.json({ revalidated: true, message: "success" });
}
