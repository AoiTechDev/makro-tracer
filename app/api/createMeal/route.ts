import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const {mealName, email, calories, protein, carbs, fat,sugar } = await request.json();

    const response = await sql`
        SELECT * FROM users WHERE email=${email}
        `;
        const user = response.rows[0];

        console.log(user)

    const createMeal = await sql`
    INSERT INTO meals (userID, name, calories, protein, carbohydrates, fat, sugar)
    VALUES (${user.userid}, ${mealName}, ${calories}, ${protein}, ${carbs}, ${fat}, ${sugar})
    `
  } catch (err) {
    console.error("create meal error", err);
  }
  return NextResponse.json({ message: "success" });
}
