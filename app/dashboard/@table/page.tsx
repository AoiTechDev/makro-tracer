'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCalendarStore } from "@/store/store";
import React from "react";

const page = () => {
  

  
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Meals for Selected Day</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Meal</TableHead>
              <TableHead>Protein (g)</TableHead>
              <TableHead>Carbohydrates (g)</TableHead>
              <TableHead>Fat (g)</TableHead>
              <TableHead>Calories</TableHead>
              <TableHead>Sugar (g)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Breakfast</TableCell>
              <TableCell>20</TableCell>
              <TableCell>30</TableCell>
              <TableCell>10</TableCell>
              <TableCell>250</TableCell>
              <TableCell>5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lunch</TableCell>
              <TableCell>25</TableCell>
              <TableCell>40</TableCell>
              <TableCell>15</TableCell>
              <TableCell>350</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Dinner</TableCell>
              <TableCell>30</TableCell>
              <TableCell>50</TableCell>
              <TableCell>20</TableCell>
              <TableCell>450</TableCell>
              <TableCell>15</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default page;
