"use client";
import { Card } from "@/components/ui/card";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import { formattedDate } from "@/lib/utils";
import { useCalendarStore, useResultStore } from "@/store/store";
import { Session } from "next-auth";
import React, { useEffect, useRef } from "react";

type MealsTableRowProps = {
  result: GetMealsResponse;
  session: Session | null;
};

const MobileCardContent = ({ result, session }: MealsTableRowProps) => {
  const { date } = useCalendarStore();

  const { setResult } = useResultStore();
  useEffect(() => {
    setResult({ success: result.success!, error: result.error });
  }, [result]);

  const formattedOriginalDate = formattedDate(date);

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleClick = (index: number) => {
    console.log(cardRefs.current[index]);

    if (cardRefs.current[index]?.classList.contains("activeCard")) {
      setTimeout(() => {
        cardRefs.current[index]?.classList.remove("activeCard");
      }, 10);
    }

    cardRefs.current[index]?.classList.add("activeCard");
  };

  return result.success
    ? result.success.rows.map((row, index) => {
        const rowDate = new Date(row.date);
        const formattedRowDate = formattedDate(rowDate);

        return (
          formattedOriginalDate === formattedRowDate && (
            <Card
              className="space-y-10 p-4 h-14 overflow-hidden"
              key={row.mealid}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => handleClick(index)}
            >
              <div className="flex justify-between">
                <div>{row.name}</div>
                <div>Cal: {row.calories}</div>
              </div>
              <div className="flex flex-col gap-2">
                <span>Protein: {row.protein}</span>
                <span>Carbs: {row.carbohydrates}</span>
                <span>Fat: {row.fat}</span>
                <span> Sugar: {row.sugar}</span>
              </div>
            </Card>
          )
        );
      })
    : null;
};

export default MobileCardContent;
