"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import { formattedDate } from "@/lib/utils";
import { useCalendarStore, useResultStore } from "@/store/store";

import React, { memo, useEffect } from "react";
import DeleteRow from "./DeleteRow";

type MealsTableRowProps = {
  result: GetMealsResponse;
};

const MealsTableRow = memo(({ result }: MealsTableRowProps) => {
  const { date } = useCalendarStore();

  const { setResult } = useResultStore();
  useEffect(() => {
    setResult({ success: result.success!, error: result.error });
  }, [result]);

  const formattedOriginalDate = formattedDate(date);
  {
    return result?.success
      ? result.success.rows.map((row) => {
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
