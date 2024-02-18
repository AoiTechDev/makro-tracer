import { Option } from "@/store/store";
import { WeeklyMealData } from "@/types/types";
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

type ChartProps = {
  daysInWeek: WeeklyMealData[];
  option: Option;
  currentWeek: string[];
};
const Chart = React.memo(({ daysInWeek, option, currentWeek }: ChartProps) => {
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

  return (
    <>
      <ResponsiveContainer height="80%">
        <LineChart data={chartData(option)} margin={{ top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" fontSize={12} />
          <YAxis dataKey={option} fontSize={12} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={option} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
});

export default Chart;
