"use client";
import React from "react";

import { getDaysInWeek } from "@/lib/utils";
import { useCalendarStore, useChartOptionsStore } from "@/store/store";
import { getWeek, getYear } from "date-fns";
import Chart from "./Chart";
import { useProcessWeeklyMealData } from "@/hooks/useProcessWeeklyMealData";

const ChartContainer = React.memo(() => {
  const { option } = useChartOptionsStore();
  const { date } = useCalendarStore();
  const currentWeek = getDaysInWeek(getYear(date!), getWeek(date!));

  const { daysInWeek } = useProcessWeeklyMealData();

  return (
    <>
      <Chart
        daysInWeek={daysInWeek}
        currentWeek={currentWeek}
        option={option}
      />
    </>
  );
});

export default ChartContainer;
