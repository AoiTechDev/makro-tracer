import React from "react";
import { TableBody} from "@/components/ui/table";
import { Session } from "next-auth";
import { getMeals } from "@/lib/getMeals/getMeals";

import MealsTableRow from "./MealsTableRow/MealsTableRow";

type MealsTableBodyProps = {
  session: Session | null;
};
const MealsTableBody = async ({ session }: MealsTableBodyProps) => {
  const result = await getMeals();

  return (
    <TableBody>
     
        <MealsTableRow result={result} session={session} />
     
    </TableBody>
  );
};

export default MealsTableBody;
