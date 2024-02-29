import { formattedDate, getDaysInWeek } from "@/lib/utils";
import { useCalendarStore, useResultStore } from "@/store/store";
import React, { useEffect } from "react";
import { getWeek, getYear } from "date-fns";
import { WeeklyMealData } from "@/types/types";


export const useProcessWeeklyMealData = () => {
    const { date } = useCalendarStore();
    const { result } = useResultStore();
    const currentWeek = getDaysInWeek(getYear(date!), getWeek(date!));
    const [daysInWeek, setDaysInWeek] = React.useState<WeeklyMealData[]>([]);

    
  let newResult: WeeklyMealData[] = [];
  if (result.success) {
    newResult = [...result.success.rows];
  }

    useEffect(() => {
        setDaysInWeek([]);
        currentWeek.map((day) => {
          if (!result.success) return 
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

      return {daysInWeek};
}