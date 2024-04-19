import ContainerLayout from "@/components/ContainerLayout/ContainerLayout";
import CreateMealForm from "@/components/Dashboard/CreateMeal/CreateMealForm";
import SearchForMeal from "@/components/Dashboard/SearchForMeal/SearchForMeal";
import { CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <ContainerLayout>
      <h1 className="[font-size:_clamp(2rem,5vw,3rem)] mt-12">
        <span className="text-[#4176F4]">Prepare</span> your meal
      </h1>
      <p className="mb-12">To track it faster daily</p>
      <div className="max-w-[1600px]  w-full h-screen grid grid-cols-2">
        <div className="flex w-full flex-1 justify-center items-center ">
          <Tabs defaultValue="Add meal" className="w-full min-h-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Add meal">Add meal</TabsTrigger>
              <TabsTrigger value="Search for meal">Search for meal</TabsTrigger>
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
          </Tabs>
        </div>
        <div className=" flex-1"></div>
      </div>
    </ContainerLayout>
  );
};

export default Page;
