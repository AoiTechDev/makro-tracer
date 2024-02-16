"use client";
import React, {useEffect} from "react";

import { formattedDate, getDaysInWeek } from "@/lib/utils";
import { useCalendarStore, useResultStore } from "@/store/store";
import { getWeek, getYear } from "date-fns";
import Chart from "./Chart";
import { Meal } from "@/types/types";

const ChartContainer = React.memo(() => {
  const { date } = useCalendarStore();

  const currentWeek = getDaysInWeek(getYear(date!), getWeek(date!));
  const { result } = useResultStore();
  const [daysInWeek, setDaysInWeek] = React.useState<Meal[]>([]);
  // console.log(result.success);
  // console.log(currentWeek);

  let newResult: Meal[] = []
  if(result.success){
    newResult = [...result.success.rows]
  }



  useEffect(() => {
    setDaysInWeek([])
    currentWeek.map((day) => {
      if (!result.success) return console.log("no data");
      const tempArr: Meal [] = []
      
      const matchingDay = newResult.filter((row) => formattedDate(new Date(row.date)) === formattedDate(new Date(day)))
      // console.log(matchingDay)
      if(matchingDay.length > 0){
        matchingDay.forEach(day =>  tempArr.push(day))
       
      } 
      
      
      newResult = newResult.filter((row) => formattedDate(new Date(row.date)) !== formattedDate(new Date(day)))
      
      
      setDaysInWeek(prev =>[...prev, ...tempArr])
    });
  },[date])
  
  console.log(daysInWeek)
  return <>{/* <Chart /> */}</>;
});

export default ChartContainer;
