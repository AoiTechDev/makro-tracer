"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { QueryResultRow } from "@vercel/postgres";
import React, { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { TiPlus } from "react-icons/ti";
import AddMealButton from "../CreateMeal/AddMealButton";
const MealCard = ({ meals }: { meals: QueryResultRow[] | undefined }) => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleExpandCard = (index: number) => {
    if (cardRefs.current[index]?.classList.contains("activeCard")) {
      setTimeout(() => {
        cardRefs.current[index]?.classList.remove("activeCard");
      }, 10);
    }

    cardRefs.current[index]?.classList.add("activeCard");
  };
  const mealList = meals?.map((meal, index) => (
    <Card
      key={meal.mealid}
      className="max-h-[120px] overflow-hidden  relative group"
      ref={(el) => (cardRefs.current[index] = el)}
    >
      <CardHeader className="space-y-0 ">
        <div>{meal.name}</div>
        <span className="opacity-60 text-xs">Created at {meal.date}</span>
      </CardHeader>

      <div className="absolute right-4 top-4 group-hover:flex gap-4 hidden">
        <TiPlus className=" text-xl lg:text-2xl text-green-600 cursor-pointer" />
        <MdEdit className=" text-xl lg:text-2xl text-black cursor-pointer" />
        <MdDelete className=" text-xl lg:text-2xl text-red-600 cursor-pointer" />
        <IoIosArrowDown
          className="text-xl lg:text-2xl text-black cursor-pointer"
          onClick={() => handleExpandCard(index)}
        />
      </div>
    </Card>
  ));
  return <div className="w-full space-y-4 ">{mealList}</div>;
};

export default MealCard;
