import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Nutrition } from "@/types/types";
import React from "react";

type IngredientsListProps = {
  nutrition: Nutrition[];
};

const IngredientsList = ({ nutrition }: IngredientsListProps) => {
  return nutrition.length > 0 ? (
    <div className="flex flex-col w-full gap-4 mt-12 lg:mb-6 lg:mt-6 justify-center items-center">
     

      <Table  className="overflow-y-scroll">
        <TableHeader>
          <TableRow>
            <TableHead>Meal</TableHead>
            <TableHead>Calories</TableHead>
            <TableHead>Protein (g)</TableHead>
            <TableHead>Carbohydrates (g)</TableHead>
            <TableHead>Fat (g)</TableHead>
            <TableHead>Sugar (g)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {nutrition.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.calories}</TableCell>
              <TableCell>{item.protein_g}</TableCell>
              <TableCell>{item.carbohydrates_total_g}</TableCell>
              <TableCell>{item.fat_total_g}</TableCell>
              <TableCell>{item.sugar_g}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ) : null;
};

export default IngredientsList;
