import MealsTableBody from "@/components/MealsTableBody/MealsTableBody";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,

  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getServerSession } from "next-auth";

import React from "react";

const page = async () => {
  const session = await getServerSession();

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Meals for Selected Day</CardTitle>
      </CardHeader>
      <CardContent className="max-w-[380px] md:max-w-full overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Meal</TableHead>
              <TableHead>Calories</TableHead>
              <TableHead>Protein (g)</TableHead>
              <TableHead>Carbs (g)</TableHead>
              <TableHead>Fat (g)</TableHead>
              <TableHead>Sugar (g)</TableHead>
            </TableRow>
          </TableHeader>
          <MealsTableBody session={session} />
        </Table>
      </CardContent>
    </Card>
  );
};

export default page;
