"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import { formattedDate } from "@/lib/utils";
import { useCalendarStore, useResultStore } from "@/store/store";
import React, { useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";

import { toast } from "sonner";
import { IoIosArrowDown } from "react-icons/io";
import { deleteMeal } from "@/actions/meals";

type MealsTableRowProps = {
  result: GetMealsResponse;
};

const MobileCardContent = ({ result }: MealsTableRowProps) => {
  const { date } = useCalendarStore();

  const { setResult } = useResultStore();
  useEffect(() => {
    setResult({ success: result.success!, error: result.error });
  }, [result]);

  const formattedOriginalDate = formattedDate(date);

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const arrowRefs = useRef<Array<HTMLDivElement | null>>([]);

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

  return result.success
    ? result.success.rows.map((row, index) => {
        const rowDate = new Date(row.date);
        const formattedRowDate = formattedDate(rowDate);

        return (
          formattedOriginalDate === formattedRowDate && (
            <Card
              className="max-h-[90px] overflow-hidden  relative group"
              key={row.mealid}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <CardHeader className="space-y-0 ">
                <div>{row.name}</div>
                <div className="opacity-60 text-sm">
                  <span>Calories</span> {row.calories}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col">
                <div className="flex justify-between">
                  <span>Protein:</span> <span>{row.protein} g</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbs:</span> <span> {row.carbohydrates} g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fat:</span> <span>{row.fat} g</span>
                </div>
                <div className="flex justify-between">
                  <span>Sugar:</span> <span>{row.sugar} g</span>
                </div>
              </CardContent>
              <div className="absolute right-4 top-4 group-hover:flex gap-4 hidden">
                <MdDelete
                  className=" text-xl lg:text-2xl text-red-600 cursor-pointer"
                  onClick={() =>
                    deleteMeal(row.mealid).then((res) =>
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
          )
        );
      })
    : null;
};

export default MobileCardContent;
