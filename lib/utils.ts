import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formattedDate(date: Date | undefined) {
  const formattedDate = `${date?.getFullYear()}-${String(
    date?.getMonth()! + 1
  ).padStart(2, "0")}-${String(date?.getDate()).padStart(2, "0")}`;

  return formattedDate;
}


export function getDaysInWeek( year:number, week:number) {
  let date = new Date(year, 0, (1 + (week - 1) * 7)); 
  date.setDate(date.getDate() + (1 - date.getDay())-1); 
  let days = [];
  for (let i = 0; i < 7; i++) {
    days.push(formattedDate(new Date(date)));
    date.setDate(date.getDate() + 1);
  }
  return days
}