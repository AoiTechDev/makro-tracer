import CalendarView from "@/components/Calendar/CalendarView";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

const Page = () => {
  return (
    <Card className="flex  flex-1 border-0 gap-6">
      {/* <CalendarView /> */}

      <Card className="flex-1">
        {" "}
        <CardContent>
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>
          {/* <Calendar initialFocus mode="single" /> */}
          <CalendarView/>
        </CardContent>
      </Card>
      <Card className="flex-1">
      <CardContent>
        <CardHeader>
          <CardTitle>Total Nutrition</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nutrition</TableHead>
                <TableHead>Amount (g)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Calories</TableCell>
                <TableCell className="font-medium">1000g</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Protein</TableCell>
                <TableCell className="font-medium">75g</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Carbohydrates</TableCell>
                <TableCell className="font-medium">120g</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Fat</TableCell>
                <TableCell className="font-medium">45g</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sugar</TableCell>
                <TableCell className="font-medium">30g</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </CardContent>
      </Card>

      {/* <CardContent>
        <CardHeader>
          <CardTitle>Select Date</CardTitle>
        </CardHeader>
        <Calendar initialFocus mode="single" />
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-2">
          <div className="text-lg font-semibold">Total Nutrition</div>
          <div className="gap-2">
            <div>Calories: 1050</div>
            <div>Protein: 75g</div>
            <div>Carbohydrates: 120g</div>
            <div>Fat: 45g</div>
            <div>Sugar: 30g</div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default Page;
