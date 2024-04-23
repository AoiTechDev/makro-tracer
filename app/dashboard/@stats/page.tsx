"use client";
import { Card } from "@/components/ui/card";
import React from "react";

import ChartOptions from "@/components/Stats/ChartOptions";

import {
  AnimatedAxis,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  Grid,
} from "@visx/xychart";

import { Option, useCalendarStore, useChartOptionsStore } from "@/store/store";
import { getDaysInWeek } from "@/lib/utils";
import { getWeek, getYear } from "date-fns";
import { useProcessWeeklyMealData } from "@/hooks/useProcessWeeklyMealData";

const page = () => {
  const { option } = useChartOptionsStore();
  const { date } = useCalendarStore();
  const currentWeek = getDaysInWeek(getYear(date!), getWeek(date!));

  const { daysInWeek } = useProcessWeeklyMealData();

  const chartData = (option: Option) => {
    const data = currentWeek.map((day) => {
      const dayData = daysInWeek?.find(
        (date) => date.date && day === date.date.toString()
      );
      return {
        date: day.slice(5),
        [option]: dayData ? dayData[option] : 0,
      };
    });

    return data;
  };

  const accessors = {
    xAccessor: (d: any) => d.date,
    yAccessor: (d: any) => d[option],
  };

  return (
    <Card className=" min-h-[400px] flex-1 flex flex-col gap-5 justify-center items-center lg:p-4 pt-2">
      <ChartOptions />

      <XYChart
        height={350}
        xScale={{ type: "band" }}
        yScale={{ type: "linear" }}
      >
        <AnimatedAxis orientation="bottom" />
        <AnimatedAxis orientation="left" />
        <AnimatedLineSeries
          dataKey="date"
          data={chartData(option)}
          {...accessors}
          stroke="#6366F1"
        />

        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData }) => (
            <div className="p-2 flex flex-col gap-1">
              <span>
                {accessors.xAccessor(tooltipData?.nearestDatum?.datum)}
              </span>
              <span>
                {" "}
                {option} :{" "}
                {accessors.yAccessor(tooltipData?.nearestDatum?.datum)}
              </span>
            </div>
          )}
        />
        <Grid numTicks={3} columns={false} strokeDasharray="6" />
      </XYChart>
    </Card>
  );
};

export default page;
