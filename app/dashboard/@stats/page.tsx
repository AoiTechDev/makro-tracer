"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Brush,
  AreaChart,
  Area,
  Label,
  LabelList,
  ResponsiveContainer,
} from "recharts";
const page = () => {
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
      calories: 9800,
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

  return (
    <Card className="min-h-[400px] flex-1 flex justify-center items-center p-4">
      <ResponsiveContainer height="80%">
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={12} />
          <YAxis  fontSize={12}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="calories" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default page;
