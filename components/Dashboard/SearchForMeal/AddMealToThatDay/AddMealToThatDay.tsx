"use client";
import { createMeal } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { countTotalNutrition, formattedDate } from "@/lib/utils";
import { useCalendarStore } from "@/store/store";
import { Nutrition } from "@/types/types";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import AddMealButton from "../../CreateMeal/AddMealButton";

type AddMealToThatDayProps = {
  nutrition: Nutrition[];
  session: Session;
};

type FormData = {
  mealName: string;
};

const AddMealToThatDay = ({ nutrition, session }: AddMealToThatDayProps) => {
  const { date } = useCalendarStore();
  const formattedOriginalDate = formattedDate(date)


  const total = countTotalNutrition(nutrition);
  const createMealWithDate = createMeal.bind(null, session?.user?.email!, formattedOriginalDate, total);
  return (
    <form action={(data) => createMealWithDate(data).then((res) => toast.success(res.message ))} className="flex gap-4">
      <Label className="flex justify-center items-center font-bold">
        Name:{" "}
      </Label>
      <Input required name="mealName"/>
      <AddMealButton/>
    </form>
  );
};

export default AddMealToThatDay;
