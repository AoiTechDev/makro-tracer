import React from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Session } from "next-auth";
import { getMeals } from "@/lib/getMeals/getMeals";
import { useCalendarStore } from "@/store/store";
import MealsTableRow from "./MealsTableRow/MealsTableRow";

type MealsTableBodyProps = {
  session: Session | null;
};
const MealsTableBody = async ({ session }: MealsTableBodyProps) => {
  const result = await getMeals(session?.user?.email ?? "");

  return (
    <TableBody>
      <MealsTableRow result={result} />
    </TableBody>
  );
};

export default MealsTableBody;
