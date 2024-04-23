"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { countTotalNutrition, formattedDate } from "@/lib/utils";
import { useCalendarStore } from "@/store/store";
import { NutritionAPIResponse } from "@/types/types";

import React from "react";
import { toast } from "sonner";
import AddMealButton from "../../CreateMeal/AddMealButton";
import { createMeal } from "@/actions/meals";

type AddMealToThatDayProps = {
  nutrition: NutritionAPIResponse[];
};

const AddMealToThatDay = ({ nutrition }: AddMealToThatDayProps) => {
  const { date } = useCalendarStore();
  const formattedOriginalDate = formattedDate(date);

  const total = countTotalNutrition(nutrition);
  const createMealWithDate = createMeal.bind(
    null,
    formattedOriginalDate,
    total
  );
  return (
    <form
      action={(data) =>
        createMealWithDate(data).then((res) => toast.success(res.message))
      }
      className="flex gap-4"
    >
      <div className="flex w-full flex-col justify-center items-center gap-6">
        <div className="flex w-full gap-4">
          <Label className="flex justify-center items-center font-bold gap-1">
            <span>Meal</span> <span>Name:</span>{" "}
          </Label>
          <Input required name="mealName" />
        </div>
        <div className="flex justify-around w-full gap-6">
          <AddMealButton text="Add to Calendar" name="calendarBtn" />
          <AddMealButton text="Add as Prepared" name="preparedBtn" />
        </div>
      </div>
    </form>
  );
};

export default AddMealToThatDay;
