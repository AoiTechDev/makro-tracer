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
    <div className="flex flex-col w-full gap-4 mt-12 justify-center items-center">
      {/* {nutrition.map((item) => (
        <div
          key={item.name}
          className="w-full rounded-xl p-2 lg:p-4 lg:grid grid-cols-2 items-center bg-white flex flex-col gap-4"
        >
          <div className="flex lg:block justify-around w-full">
            <div className=" flex flex-col justify-center items-center">
              <h2 className="text-lg lg:text-2xl">{item.name}</h2>
              <p className="text-muted-foreground">{item.serving_size_g}g</p>
            </div>

            <div className="w-[100px] h-[100px] rounded-full  border-2 flex justify-center items-center flex-col">
              <span>{item.calories}</span>
              <span>Cal</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 rounded-2xl gradient font-bold p-4 text-[#dacafb] text-sm w-full">
            <span>P: {item.protein_g}g</span>
            <span>F: {item.fat_total_g}g</span>
            <span>C: {item.carbohydrates_total_g}g</span>
            <span>S: {item.sugar_g}g</span>
          </div>
        </div>
      ))} */}

      <Table>
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
