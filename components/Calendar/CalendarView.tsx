"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useCalendarStore } from "@/store/store";



const CalendarView = () => {
  // const [date, setDate] = useState<Date | undefined>(new Date());

  const {setCurrentDate, date} = useCalendarStore();


  return (
    <div className="w-full flex justify-center mt-12">
      <Calendar
        mode="single"
        selected={date}
        onSelect={(date: Date | undefined) => setCurrentDate(date)}
        className="rounded-md "
      />
    </div>
  );
};

export default CalendarView;
