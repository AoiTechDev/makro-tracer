import { GetMealsResponse } from "@/lib/getMeals/getMeals";
import { Meal } from "@/types/types";
import { QueryResult } from "@vercel/postgres";
import { create } from "zustand";

type CurrentCalendarDate = {
  date: Date | undefined;
  setCurrentDate: (date: Date | undefined) => void;
};

export const useCalendarStore = create<CurrentCalendarDate>((set) => ({
  date: new Date(),
  setCurrentDate: (date: Date | undefined) => set({ date }),
}));

type TotalNutrition = {
  total: {
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    sugar: number;
  };
  setTotal: (total: {
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    sugar: number;
  }) => void;
};
export const useTotalNutritionStore = create<TotalNutrition>((set) => ({
  total: {
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    sugar: 0,
  },
  setTotal: (total: {
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    sugar: number;
  }) => set({ total }),
}));

type Result = {
  result: {
    error?: string | undefined; 
    success: QueryResult<Meal> | undefined;
  };
  setResult: (result: {
    error?: string | undefined;
    success: QueryResult<Meal>;
  }) => void;
};
export const useResultStore = create<Result>((set) => ({
  result: {
    error: "",
    success: undefined as QueryResult<Meal> | undefined, 
  },
  setResult: (result: Result['result']) => set({ result }), 
}));


type ChartOption = {
  option: string;
  setNutrition: (nutrition: string) => void;
}
export const useChartOptionsStore = create<ChartOption>((set) => ({
  option: "",
  setNutrition: (option: string) => set({ option }),
}));
