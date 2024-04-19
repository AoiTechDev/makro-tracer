"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { QueryResultRow } from "@vercel/postgres";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const MealCard = ({ meals }: { meals: QueryResultRow[] | undefined }) => {
  const mealList = meals?.map((meal) => (
    <Card
      key={meal.mealid}
      className="max-h-[120px] overflow-hidden cursor-pointer relative group"
    >
      <CardHeader className="space-y-0 ">
        <div>{meal.name}</div>
        <span className="opacity-60 text-xs">Created at {meal.date}</span>
      </CardHeader>

      <div className="absolute right-4 top-4 group-hover:flex gap-4 hidden">
        <MdEdit className="  text-2xl text-black" />
        <MdDelete className=" text-2xl text-red-600" />
      </div>
    </Card>
  ));
  return <div className="w-full space-y-4 ">{mealList}</div>;
};

export default MealCard;
