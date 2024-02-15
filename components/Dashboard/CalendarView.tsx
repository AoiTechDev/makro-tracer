"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useCalendarStore } from "@/store/store";



const CalendarView = () => {

  const {setCurrentDate, date} = useCalendarStore();


  return (
    <div className="w-full flex justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={(date: Date | undefined) => setCurrentDate(date)}
        className="rounded-md  "
      />
    </div>
  );
};

export default CalendarView;
