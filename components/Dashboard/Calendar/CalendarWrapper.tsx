"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import CalendarView from "./CalendarView";
import TotalNutrition from "../TotalNutrition";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const CalendarWrapper = ({ result }: { result: GetMealsResponse }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // useLayoutEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: cardRef.current,
  //     pin: cardRef.current,
  //     start: "top top",
  //     // end: '200 300',
  //     markers: true,
  //   });
  // }, []);



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
