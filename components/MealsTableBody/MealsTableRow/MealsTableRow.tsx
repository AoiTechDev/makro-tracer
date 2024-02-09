"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import { formattedDate } from "@/lib/utils";
import { useCalendarStore, useTotalNutritionStore } from "@/store/store";
import React, { useEffect } from "react";

type MealsTableRowProps = {
  result: GetMealsResponse;
};
//TODO 
//There need to me sql query to fetch just meals for this date, or just for current month or week to not map over every meals couse it might slow down app
const MealsTableRow = ({ result }: MealsTableRowProps) => {
  const { date } = useCalendarStore();

  const formattedOriginalDate = formattedDate(date)
  console.log('################################')
  {
    return result?.success
      ? result.success.rows.map((row) => {
          const rowDate = new Date(row.date);
          const formattedRowDate = formattedDate(rowDate)
         
          console.log(row.mealid)
          return (
            formattedOriginalDate === formattedRowDate && (
              <TableRow  key={row.mealid} className="relative group ">
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>{row.carbohydrates}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.sugar}</TableCell>
                <div className="absolute w-5 h-5 bg-red-400 right-2 top-[50%] -translate-y-[50%] group-hover:block hidden"></div>
              </TableRow>
            )
          );
        })
      : null;
  }
};

export default MealsTableRow;
