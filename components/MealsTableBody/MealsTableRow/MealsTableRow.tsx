"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import { useCalendarStore, useTotalNutritionStore } from "@/store/store";
import React, { useEffect } from "react";

type MealsTableRowProps = {
  result: GetMealsResponse;
};

const MealsTableRow = ({ result }: MealsTableRowProps) => {
  const { date } = useCalendarStore();

  const formattedOriginalDate = `${date?.getFullYear()}-${String(
    date?.getMonth()! + 1
  ).padStart(2, "0")}-${String(date?.getDate()).padStart(2, "0")}`;

  {
    return result.success
      ? result.success.rows.map((row) => {
          const rowDate = new Date(row.date);
          const formattedRowDate = `${rowDate.getFullYear()}-${String(
            rowDate.getMonth() + 1
          ).padStart(2, "0")}-${String(rowDate.getDate()).padStart(2, "0")}`;

          return (
            formattedOriginalDate === formattedRowDate && (
              <TableRow>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>{row.carbohydrates}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.sugar}</TableCell>
              </TableRow>
            )
          );
        })
      : null;
  }
};

export default MealsTableRow;
