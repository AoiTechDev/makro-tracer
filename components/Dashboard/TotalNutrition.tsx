"use client";
import React from "react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCalendarStore } from "@/store/store";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";

import { cn, formattedDate } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useTotalNutrition } from "@/hooks/useTotalNutrition";

//TODO refactor this code to be reusable
type TotalNutritionProps = {
  result: GetMealsResponse;
};

const TotalNutrition = ({ result }: TotalNutritionProps) => {
  const { date, setCurrentDate } = useCalendarStore();
  const formattedOriginalDate = formattedDate(date);

  const { totalNutrition } = useTotalNutrition({ result });
  const tableRow = [
    {
      nutrition: "Calories",
      amount: totalNutrition.calories.toFixed(1),
    },
    {
      nutrition: "Protein",
      amount: totalNutrition.protein.toFixed(1),
    },
    {
      nutrition: "Carbohydrates",
      amount: totalNutrition.carbohydrates.toFixed(1),
    },
    {
      nutrition: "Fat",
      amount: totalNutrition.fat.toFixed(1),
    },
    {
      nutrition: "Sugar",
      amount: totalNutrition.sugar.toFixed(1),
    },
  ];

  return (
    <CardContent className="flex flex-col items-center justify-start gap-4 w-full">
      <CardHeader>
        <CardTitle>Total Nutrition</CardTitle>
      </CardHeader>
      <Popover>
        <PopoverTrigger asChild className="max-[1400px]:flex hidden">
          <Button
            variant={"outline"}
            className={cn("w-[240px] pl-3 text-left font-normal")}
          >
            <span>
              {" "}
              {typeof date === "undefined"
                ? "Select Date"
                : formattedOriginalDate}
            </span>
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date: Date | undefined) => setCurrentDate(date)}
            className="rounded-md "
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nutrition</TableHead>
            <TableHead>Amount (g)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableRow.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{row.nutrition}</TableCell>
              <TableCell className="font-medium">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  );
};

export default TotalNutrition;
