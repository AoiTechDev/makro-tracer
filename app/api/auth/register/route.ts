import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { v4 as uuidv4 } from "uuid";
export async function POST(request: Request) {
  try {
    const { email, password, confirmPassword } = await request.json();

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Password does not match" },
        { status: 401 }
      );
    }


    const user = await sql`
        SELECT * FROM users WHERE email=${email}
        `;
    if (user.rows[0]) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 401 }
      );
    }
    const userId = uuidv4();
    const hashedPassword = await hash(password, 10);

    const response = await sql`
        INSERT INTO users (userID, email, password)
        VALUES (${userId}, ${email}, ${hashedPassword})
        `;

    return NextResponse.json({ message: "success" });
  } catch (err) {
    console.error("register/route error", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
