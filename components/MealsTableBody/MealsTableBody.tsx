import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { QueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";
import { getMeals } from "@/lib/getMeals/getMeals";
// import { getMeals } from "@/actions/actions";

type MealsTableBodyProps = {
  session: Session | null;
};
const MealsTableBody = async ({ session }: MealsTableBodyProps) => {
  //   const result = await getMeals(session?.user?.email ?? "");

const result  = await getMeals(session?.user?.email ?? "");


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
