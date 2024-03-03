import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NutritionAPIResponse } from "@/types/types";
import React from "react";

type IngredientsListProps = {
  nutrition: NutritionAPIResponse[];
};

const IngredientsList = ({ nutrition }: IngredientsListProps) => {
  return nutrition.length > 0 ? (
     

      <Table  className=" my-12">
        <TableHeader>
          <TableRow className="">
            <TableHead>Meal</TableHead>
            <TableHead>Serving Size</TableHead>
            <TableHead>Calories</TableHead>
            <TableHead>Protein</TableHead>
            <TableHead>Carbs</TableHead>
            <TableHead>Fat</TableHead>
            <TableHead>Sugar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {nutrition.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.serving_size_g} <span className="opacity-50">g</span></TableCell>
              <TableCell>{item.calories}</TableCell>
              <TableCell>{item.protein_g}</TableCell>
              <TableCell>{item.carbohydrates_total_g}</TableCell>
              <TableCell>{item.fat_total_g}</TableCell>
              <TableCell>{item.sugar_g}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  ) : null;
};

export default IngredientsList;
