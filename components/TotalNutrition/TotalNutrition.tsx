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
import { useCalendarStore, useTotalNutritionStore } from "@/store/store";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import { TotalNutritionData } from "@/types/types";
import { formattedDate } from "@/lib/utils";

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

  const { date } = useCalendarStore();
  const formattedOriginalDate = formattedDate(date)

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
        const formattedRowDate = formattedDate(rowDate)

        if(formattedOriginalDate === formattedRowDate){
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
  }, [result.success,date]);

  return (
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
              <TableCell className="font-medium">{totalNutrition.calories.toFixed(1)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Protein</TableCell>
              <TableCell className="font-medium">{totalNutrition.protein.toFixed(1)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Carbohydrates</TableCell>
              <TableCell className="font-medium">{totalNutrition.carbohydrates.toFixed(1)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Fat</TableCell>
              <TableCell className="font-medium">{totalNutrition.fat.toFixed(1)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Sugar</TableCell>
              <TableCell className="font-medium">{totalNutrition.sugar.toFixed(1)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </CardContent>
  );
};

export default TotalNutrition;
