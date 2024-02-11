import CreateMealForm from "@/components/Dashboard/CreateMealForm/CreateMealForm";
import { Card, CardContent } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchForMeal from "@/components/Dashboard/SearchForMeal/SearchForMeal";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <Card className="min-h-[400px] flex-1 ">
      <Tabs  defaultValue="Add meal">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-2">
          <TabsTrigger value="Add meal">Add meal</TabsTrigger>
          <TabsTrigger value="Search for meal">Search for meal</TabsTrigger>
          <TabsTrigger className="flex lg:hidden" value="Existing Meals">Existing Meals</TabsTrigger>
        </TabsList>
        <TabsContent value="Add meal">
          <CardContent>
            <CreateMealForm session={session} />
          </CardContent>
        </TabsContent>
        <TabsContent value="Search for meal">
          <CardContent className="">
            <SearchForMeal session={session} />
          </CardContent>
        </TabsContent>
        <TabsContent className="flex lg:hidden" value="Existing Meals">
          <Card className="min-h-[400px] flex-1 bg-red-200 flex justify-center items-center">
            Existing meals(comming soon)
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default page;
