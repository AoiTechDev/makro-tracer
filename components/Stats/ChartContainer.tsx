"use client";
import React, { useEffect } from "react";

import { formattedDate, getDaysInWeek } from "@/lib/utils";
import { useCalendarStore, useResultStore } from "@/store/store";
import { getWeek, getYear } from "date-fns";
import Chart from "./Chart";
import { WeeklyMealData } from "@/types/types";

const ChartContainer = React.memo(() => {
  const { date } = useCalendarStore();

  const currentWeek = getDaysInWeek(getYear(date!), getWeek(date!));
  const { result } = useResultStore();
  const [daysInWeek, setDaysInWeek] = React.useState<WeeklyMealData[]>([]);

  let newResult: WeeklyMealData[] = [];
  if (result.success) {
    newResult = [...result.success.rows];
  }

    //make it custom hook
  useEffect(() => {
    setDaysInWeek([]);
    currentWeek.map((day) => {
      if (!result.success) return console.log("no data");
      const tempArr: WeeklyMealData[] = [];
      let totalInit = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
        sugar: 0,
        date: new Date(),
      };

      const matchingDay = newResult.filter(
        (row) =>
          formattedDate(new Date(row.date)) === formattedDate(new Date(day))
      );

      if (matchingDay.length > 0) {
        const total: WeeklyMealData = matchingDay.reduce((totalInit, meal) => {
          return {
            calories: totalInit.calories + Number(meal.calories),
            protein: totalInit.protein + Number(meal.protein),
            carbohydrates: totalInit.carbohydrates + Number(meal.carbohydrates),
            fat: totalInit.fat + Number(meal.fat),
            sugar: totalInit.sugar + Number(meal.sugar),
            date: meal.date,
          };
        }, totalInit);

        tempArr.push(total);
      }

      newResult = newResult.filter(
        (row) =>
          formattedDate(new Date(row.date)) !== formattedDate(new Date(day))
      );

      setDaysInWeek((prev) => [...prev, ...tempArr]);
    });
  }, [date, result]);

  
  return (
    <>
      <Chart daysInWeek={daysInWeek} currentWeek={currentWeek} />{" "}
    </>
  );
});

export default ChartContainer;
