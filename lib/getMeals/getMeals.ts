import { Meal } from "@/types/types";
import { QueryResult, QueryResultRow} from "@vercel/postgres";



export type GetMealsResponse = {
  error?: string;
  success?: QueryResult<Meal>;
};

export async function getMeals(email: string): Promise<GetMealsResponse> {

  try {
    const url = `${process.env.NEXTAUTH_URL}api/getMeals?email=${email}`;
    const data = await fetch(url, {
      method: "GET",
    
    });
   
    return data.json();
  } catch (err) {
    console.error("create meal error", err);
    return { error: "error" };
  }
}
