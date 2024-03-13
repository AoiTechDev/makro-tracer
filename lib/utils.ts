import { NutritionAPIResponse, Nutrition } from "@/types/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Resizer from "react-image-file-resizer";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formattedDate(date: Date | undefined) {
  const formattedDate = `${date?.getFullYear()}-${String(
    date?.getMonth()! + 1
  ).padStart(2, "0")}-${String(date?.getDate()).padStart(2, "0")}`;

  return formattedDate;
}

export function getDaysInWeek(year: number, week: number) {
  let date = new Date(year, 0, 1 + (week - 1) * 7);
  date.setDate(date.getDate() + (1 - date.getDay()) - 1);
  let days = [];
  for (let i = 0; i < 7; i++) {
    days.push(formattedDate(new Date(date)));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function countTotalNutrition(
  nutrition: NutritionAPIResponse[]
): Nutrition {
  let total = {
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    sugar: 0,
  };
  nutrition.forEach((item) => {
    total = {
      calories: total.calories + Number(item.calories),
      protein: total.protein + Number(item.protein_g),
      carbohydrates: total.carbohydrates + Number(item.carbohydrates_total_g),
      fat: total.fat + Number(item.fat_total_g),
      sugar: total.sugar + Number(item.sugar_g),
    };
  });
  return total;
}

export const setAvatarInLocalStorage = (avatarUrl: string) => {
  if (localStorage.getItem("avatar")) {
    localStorage.removeItem("avatar");
  }
  localStorage.setItem("avatar", avatarUrl);
};

export const getAvatarFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const avatar = localStorage.getItem("avatar");
    return avatar;
  }
  return null;
};

const acceptedTypes = ["image/jpeg", "image/png", "image/webp"];
export const resizeFile = (type: string, file: File): Promise<File> =>
  new Promise((resolve, reject) => {
    console.log(type);
    Resizer.imageFileResizer(
      file,
      200,
      200,
      "WEBP",
      100,
      0,
      (uri) => {
        resolve(uri as File);
      },
      "file"
    );
  });
