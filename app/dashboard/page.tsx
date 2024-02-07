import CreateMealForm from "@/components/CreateMealForm/CreateMealForm";
import { Card, CardContent} from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchForMeal from "@/components/SearchForMeal/SearchForMeal";




const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <Card className="flex-1 p-4">

      <Tabs defaultValue="Add meal">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Add meal">Add meal</TabsTrigger>
          <TabsTrigger value="Search for meal">Search for meal</TabsTrigger>
        </TabsList>
      <TabsContent value="Add meal">
        <CardContent>
          <CreateMealForm session={session} />
        </CardContent>
      </TabsContent >
      <TabsContent value="Search for meal">
        <CardContent className="">
         <SearchForMeal session={session}/>
        </CardContent>
      </TabsContent>
      </Tabs>
    </Card>
  );
};

export default page;
