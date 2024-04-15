import { Meal } from "@/types/types";
import { QueryResult} from "@vercel/postgres";
import { getServerSession } from "next-auth";



export type GetMealsResponse = {
  error?: string;
  success?: QueryResult<Meal>;
};

export async function getMeals(): Promise<GetMealsResponse> {
  const session = await getServerSession();
  try {
    const url = `${process.env.NEXTAUTH_URL}api/getMeals?email=${session?.user?.email}`;
    const data = await fetch(url, {
      method: "GET",
    
    });
   
    return data.json();
  } catch (err) {
    console.error("create meal error", err);
    return { error: "error" };
  }
}
