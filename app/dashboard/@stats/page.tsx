"use client";
import { Card } from "@/components/ui/card";
import { useCalendarStore } from "@/store/store";
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
import { getWeek } from "date-fns";
import { getYear } from "date-fns";
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
  const { date } = useCalendarStore();
  function getDaysInWeek(year: number, weekNumber: number) {
    const januaryFirst = new Date(year, 0, 1);

    const januaryFirstDayOfWeek = januaryFirst.getDay()-1;

    const daysToTargetWeek = (weekNumber - 1) * 7 - januaryFirstDayOfWeek;

    const targetWeekStart = new Date(year, 0, 1 + daysToTargetWeek);

    const daysInWeek = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(targetWeekStart);
      currentDate.setDate(targetWeekStart.getDate() + i);
      daysInWeek.push(currentDate);
    }

    return daysInWeek;
  }

  console.log(getDaysInWeek(getYear(date!), getWeek(date!)));
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
          <YAxis fontSize={12} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="calories" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default page;
