import Consumed from "@/components/Dashboard/Consumed/Consumed";
import CreatedMealsAndIngredients from "@/components/Dashboard/CreatedMealsAndIngredients/CreatedMealsAndIngredients";
import Total from "@/components/Dashboard/Total/Total";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

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
  <form className="space-y-4">
    <div className="space-y-2">   
      <Label htmlFor="meal-name">Meal Name</Label>
      <Input id="meal-name" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="protein">Protein (g)</Label>
      <Input id="protein" required type="number" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="carbs">Carbohydrates (g)</Label>
      <Input id="carbs" required type="number" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="fat">Fat (g)</Label>
      <Input id="fat" required type="number" />
    </div>
    <Button className="w-full" type="submit">
      Add Meal
    </Button>
  </form>
</CardContent>
</Card>
  );
};

export default page;
