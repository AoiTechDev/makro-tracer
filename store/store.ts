import { create } from "zustand";

type CurrentCalendarDate = {
    date: Date | undefined;
    setCurrentDate: (date: Date | undefined) => void;
}

export const useCalendarStore = create<CurrentCalendarDate>((set) => ({
    date: new Date(),
    setCurrentDate: (date: Date | undefined) => set({ date }),
}))