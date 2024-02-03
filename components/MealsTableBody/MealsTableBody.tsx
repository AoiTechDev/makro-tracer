
import React from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Session } from "next-auth";
import { getMeals } from "@/lib/getMeals/getMeals";
import { useCalendarStore } from "@/store/store";

type MealsTableBodyProps = {
  session: Session | null;
};
const MealsTableBody = async ({ session }: MealsTableBodyProps) => {

  const result = await getMeals(session?.user?.email ?? "" );

  
  return (
    <TableBody>
      {result.success
        ? result.success.rows.map((row) => (
            <TableRow>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.carbohydrates}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.sugar}</TableCell>
            </TableRow>
          ))
        : null}
    </TableBody>
  );
};

export default MealsTableBody;
