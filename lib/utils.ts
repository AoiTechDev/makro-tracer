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

export function getDaysInWeek(year: number, weekNumber: number) {
  const januaryFirst = new Date(year, 0, 1);

  const januaryFirstDayOfWeek = januaryFirst.getDay()-1;

  const daysToTargetWeek = (weekNumber - 1) * 7 - januaryFirstDayOfWeek;

  const targetWeekStart = new Date(year, 0, 1 + daysToTargetWeek);

  const daysInWeek = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(targetWeekStart);
    currentDate.setDate(targetWeekStart.getDate() + i);
    daysInWeek.push(formattedDate(currentDate));
  }

  return daysInWeek;
}