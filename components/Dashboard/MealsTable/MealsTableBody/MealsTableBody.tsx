import React from "react";
import { TableBody } from "@/components/ui/table";
import { getMeals } from "@/lib/getMeals/getMeals";

import MealsTableRow from "./MealsTableRow/MealsTableRow";


const MealsTableBody = async () => {
  const result = await getMeals();

  return (
    <TableBody>
      <MealsTableRow result={result}  />
    </TableBody>
  );
};

export default MealsTableBody;
