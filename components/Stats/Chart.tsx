import { Meal, WeeklyMealData } from "@/types/types";
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

  currentWeek: string[];
};
const Chart = React.memo(({daysInWeek,  currentWeek}: ChartProps) => {
  
  const data = currentWeek.map((day, index) => {
  
    return {
      date: day.slice(5),
      calories: daysInWeek[index]?.calories || 0,
    };
  });

  
  return (
    <>
      <ResponsiveContainer height="80%">
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" fontSize={12} />
          <YAxis dataKey="calories" fontSize={12} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="calories" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
});

export default Chart;
