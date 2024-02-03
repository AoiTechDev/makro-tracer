import { QueryResult, QueryResultRow} from "@vercel/postgres";



export type GetMealsResponse = {
  error?: string;
  success?: QueryResult<QueryResultRow>;
};

export async function getMeals(email: string): Promise<GetMealsResponse> {

  try {
    const url = `http://localhost:3000/api/getMeals?email=${email}`;
    const data = await fetch(url, {
      method: "GET",
    
    });
   
    return data.json();
  } catch (err) {
    console.error("create meal error", err);
    return { error: "error" };
  }
}
