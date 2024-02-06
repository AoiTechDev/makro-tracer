"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import { formattedDate } from "@/lib/utils";
import { useCalendarStore, useTotalNutritionStore } from "@/store/store";
import React, { useEffect } from "react";

type MealsTableRowProps = {
  result: GetMealsResponse;
};

const MealsTableRow = ({ result }: MealsTableRowProps) => {
  const { date } = useCalendarStore();

  const formattedOriginalDate = formattedDate(date)
  {
    return result.success
      ? result.success.rows.map((row) => {
          const rowDate = new Date(row.date);
          const formattedRowDate = formattedDate(rowDate)
          return (
            formattedOriginalDate === formattedRowDate && (
              <TableRow className=" ">
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>{row.carbohydrates}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.sugar}</TableCell>
              </TableRow>
            )
          );
        })
      : null;
  }
};

export default MealsTableRow;
