
import CreateMealForm from "@/components/CreateMealForm/CreateMealForm";
import Consumed from "@/components/Dashboard/Consumed/Consumed";
import CreatedMealsAndIngredients from "@/components/Dashboard/CreatedMealsAndIngredients/CreatedMealsAndIngredients";
import Total from "@/components/Dashboard/Total/Total";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TableCell, TableRow } from "@/components/ui/table";
import { getMeals } from "@/lib/getMeals/getMeals";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";


const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }


  return (
    // <Card className="flex flex-1 ">

    //   asd
    // </Card>

    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Add Meal</CardTitle>
      </CardHeader>
      <CardContent>
          <CreateMealForm session={session }/>
      </CardContent>
      
    </Card>
  );
};

export default page;
