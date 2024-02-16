"use client";
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formattedDate, getDaysInWeek } from "@/lib/utils";
import { useCalendarStore, useResultStore } from "@/store/store";
import { getWeek, getYear } from "date-fns";
import Chart from "./Chart";

const ChartContainer = () => {
  const { date } = useCalendarStore();
  const data = [
    {
      name: "Monday",
      calories: 2400,
    },
    {
      name: "Thursday",
      calories: 1398,
    },
    {
      name: "Wednesday",
      calories: 3800,
    },
    {
      name: "Thursday",
      calories: 3908,
    },
    {
      name: "Friday",
      calories: 4800,
    },
    {
      name: "Saturday",
      calories: 3800,
    },
    {
      name: "Sunday",
      calories: 4300,
    },
  ];

  const currentWeek = getDaysInWeek(getYear(date!), getWeek(date!));
  const {result} = useResultStore();
console.log(result)
  return (
    <>
      <Chart/>
    </>
  );
};

export default ChartContainer;
