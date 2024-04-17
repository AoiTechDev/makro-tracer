"use client";
import { Card } from "@/components/ui/card";
import React, { Suspense } from "react";

import ChartContainer from "@/components/Stats/ChartContainer";
import ChartOptions from "@/components/Stats/ChartOptions";

import { letterFrequency } from "@visx/mock-data";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  AnimatedAnnotation,
  Grid,
} from "@visx/xychart";
import { Option, useCalendarStore, useChartOptionsStore } from "@/store/store";
import { getDaysInWeek } from "@/lib/utils";
import { getWeek, getYear } from "date-fns";
import { useProcessWeeklyMealData } from "@/hooks/useProcessWeeklyMealData";

const page = () => {
  const test = ["calories", "protein", "carbs", "fat", "sugar"];

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
{/* 
      <ChartContainer /> */}

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
        />

        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData }) => (
            <div className="p-2 flex flex-col gap-1">
              <span>{accessors.xAccessor(tooltipData?.nearestDatum?.datum)}</span>
             <span> {option} : {accessors.yAccessor(tooltipData?.nearestDatum?.datum)}</span>
            </div>
          )}
        />
        <Grid numTicks={3} columns={false}/>
      </XYChart>
    </Card>
  );
};

export default page;
