import CreateMealForm from "@/components/CreateMealForm/CreateMealForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Add Meal</CardTitle>
      </CardHeader>
      <CardContent>
        <CreateMealForm session={session} />
      </CardContent>
    </Card>
  );
};

export default page;
