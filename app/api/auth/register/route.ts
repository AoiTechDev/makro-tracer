import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import {sql} from '@vercel/postgres'
import { v4 as uuidv4 } from 'uuid';
export async function POST(request: Request){
    try{
        const {email,password, confirmPassword} = await request.json();
        console.log(email,password, confirmPassword)

        if(password !== confirmPassword){
            throw new Error('Password do not match')
        }
        const userId = uuidv4();
        const hashedPassword = await hash(password, 10);
       
        const response = await sql`
        INSERT INTO users (userID, email, password)
        VALUES (${userId}, ${email}, ${hashedPassword})
        `;

        
        

    }catch(err){
        console.error('register/route error', err)
    }

    return NextResponse.json({message: 'success'})

}