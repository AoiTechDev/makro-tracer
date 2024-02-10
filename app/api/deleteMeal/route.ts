import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function DELETE(request: Request){
    try{
        const {mealid, email} = await request.json();

        const response = await sql`
        SELECT * FROM users WHERE email=${email}
        `;
        const user = response.rows[0];
        
        const deleteMeal = await sql`
        DELETE FROM meals WHERE mealid=${mealid} AND userid=${user.userid}
        `;
    }catch(err){
        console.error("delete meal error", err);
    }

    return NextResponse.json({message: "success"});
}