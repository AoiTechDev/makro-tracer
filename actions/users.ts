"use server";

import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

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
