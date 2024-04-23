"use client";
import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import CalendarView from "./CalendarView";
import TotalNutrition from "../TotalNutrition";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { MealResponse } from "@/types/types";
gsap.registerPlugin(ScrollTrigger);
const CalendarWrapper = ({
  result,
}: {
  result: MealResponse[] | undefined;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  return (
    <Card ref={cardRef} className="w-full ">
      {" "}
      <CardContent className="max-[1400px]:hidden ">
        <CardHeader className=" items-center">
          <CardTitle>Select Date</CardTitle>
        </CardHeader>

        <CalendarView />
      </CardContent>
      <TotalNutrition result={result} />
    </Card>
  );
};

export default CalendarWrapper;
