import React from "react";
import { TableBody } from "@/components/ui/table";


import MealsTableRow from "./MealsTableRow";
import { getMeals } from "@/actions/meals";


const MealsTableBody = async () => {
  const result = await getMeals();

  return (
    <TableBody>
      <MealsTableRow result={result.success}  />
    </TableBody>
  );
};

export default MealsTableBody;
