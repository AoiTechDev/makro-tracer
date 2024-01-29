"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
const CalendarView = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="w-full flex justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md "
      />
    </div>
  );
};

export default CalendarView;
