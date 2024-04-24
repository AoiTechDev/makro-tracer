"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import { formattedDate } from "@/lib/utils";
import { useCalendarStore, useResultStore } from "@/store/store";

import React, { memo, useEffect } from "react";
import DeleteRow from "./DeleteRow";
import { MealResponse } from "@/types/types";

const MealsTableRow = memo(({ result }: { result: MealResponse[] | undefined }) => {
  const { date } = useCalendarStore();

  const { setResult } = useResultStore();

  useEffect(() => {
    setResult(result!);
  }, [result]);

  const formattedOriginalDate = formattedDate(date);
  {
    return result
      ? result.map((row) => {
          const rowDate = new Date(row.date);
          const formattedRowDate = formattedDate(rowDate);

          return (
            formattedOriginalDate === formattedRowDate && (
              <TableRow key={row.mealid} className="relative group ">
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>{row.carbohydrates}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.sugar}</TableCell>
                <TableCell>
                  {" "}
                  <DeleteRow
                    mealid={row.mealid}
                    className="absolute  top-[50%] -translate-y-[50%] group-hover:block hidden cursor-pointer "
                  />
                </TableCell>
              </TableRow>
            )
          );
        })
      : null;
  }
});

export default MealsTableRow;
