"use client";
import { addPreparedToCalendar, deletePreparedMeal } from "@/actions/actions";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formattedDate } from "@/lib/utils";
import { QueryResultRow } from "@vercel/postgres";
import React, { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { toast } from "sonner";

const MealCardContent = ({
  meal,
  index,
}: {
  meal: QueryResultRow;
  index: number;
}) => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleExpandCard = (index: number) => {
    if (cardRefs.current[index]?.classList.contains("activeCard")) {
      setTimeout(() => {
        cardRefs.current[index]?.classList.remove("activeCard");
        arrowRefs.current[index]?.classList.remove("activeCardRotateArrow");
      }, 10);
    }

    cardRefs.current[index]?.classList.add("activeCard");
    arrowRefs.current[index]?.classList.add("activeCardRotateArrow");
  };
  const arrowRefs = useRef<Array<HTMLDivElement | null>>([]);
  return (
    <Card
      key={meal.mealid}
      className="max-h-[90px] overflow-hidden  relative group"
      ref={(el) => (cardRefs.current[index] = el)}
    >
      <CardHeader className="space-y-0 ">
        <div>{meal.name}</div>
        <span className="opacity-60 text-xs">Created at {meal.date}</span>
      </CardHeader>

      <CardContent className="flex flex-col">
        <span>Calories: {meal.calories}</span>
        <span>Protein: {meal.protein}</span>
        <span>Carbs: {meal.carbohydrates}</span>
        <span>Fat: {meal.fat}</span>
        <span>Sugar: {meal.sugar}</span>
      </CardContent>
      <div className="absolute right-4 top-4 group-hover:flex gap-4 hidden">
        <TiPlus
          className=" text-xl lg:text-2xl text-green-600 cursor-pointer"
          onClick={() =>
            addPreparedToCalendar(
              meal.name,
              meal.calories,
              meal.protein,
              meal.carbohydrates,
              meal.fat,
              meal.sugar,
              formattedDate(new Date())
            ).then((res) => toast.success(res.message))
          }
        />
        {/* <MdEdit className=" text-xl lg:text-2xl text-black cursor-pointer" /> */}
        <MdDelete
          className=" text-xl lg:text-2xl text-red-600 cursor-pointer"
          onClick={() =>
            deletePreparedMeal(meal.mealid).then((res) =>
              toast.success(res.message)
            )
          }
        />
        <div
          ref={(el) => (arrowRefs.current[index] = el)}
          onClick={() => handleExpandCard(index)}
        >
          <IoIosArrowDown
            className={`text-xl lg:text-2xl text-black cursor-pointer }`}
          />
        </div>
      </div>
    </Card>
  );
};

export default MealCardContent;
