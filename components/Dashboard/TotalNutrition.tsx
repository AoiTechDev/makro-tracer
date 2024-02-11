"use client";
import React, { useEffect, useState } from "react";
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
import { TotalNutritionData } from "@/types/types";
import { cn, formattedDate } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";


//TODO refactor this code to be reusable
type TotalNutritionProps = {
  result: GetMealsResponse;
};

const TotalNutrition = ({ result }: TotalNutritionProps) => {
  const [totalNutrition, setTotalNutrition] = useState<TotalNutritionData>({
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    sugar: 0,
  });

  const { date, setCurrentDate } = useCalendarStore();
  const formattedOriginalDate = formattedDate(date);

  useEffect(() => {
    if (result.success) {
      let total = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
        sugar: 0,
      };

      result.success.rows.forEach((row) => {
        const rowDate = new Date(row.date);
        const formattedRowDate = formattedDate(rowDate);

        if (formattedOriginalDate === formattedRowDate) {
          total = {
            calories: total.calories + Number(row.calories),
            protein: total.protein + Number(row.protein),
            carbohydrates: total.carbohydrates + Number(row.carbohydrates),
            fat: total.fat + Number(row.fat),
            sugar: total.sugar + Number(row.sugar),
          };
        }
      });

      setTotalNutrition(total);
    }
  }, [result.success, date]);


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
    }
  ]

  return (
    <CardContent className="flex flex-col items-center justify-start gap-4">
      <CardHeader>
        <CardTitle>Total Nutrition</CardTitle>

       
      </CardHeader>
      <Popover >
          <PopoverTrigger asChild className="max-[1400px]:flex hidden">
            <Button
              variant={"outline"}
              className={cn("w-[240px] pl-3 text-left font-normal")}
            >
             
              <span> {typeof date === 'undefined' ? "Select Date"  : formattedOriginalDate}</span>
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
