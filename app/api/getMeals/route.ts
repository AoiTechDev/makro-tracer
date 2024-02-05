import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get("email");
    const getUserID = await sql`
            SELECT * FROM users WHERE email=${email}
            `;
    const user = getUserID.rows[0];
    const response = await sql`
                SELECT * FROM meals WHERE userID=${user.userid}
            `;

    
    return NextResponse.json({  success: response });
  } catch (err) {
    console.error("create meal error", err);
    return NextResponse.json({  error: err });
  }
}
