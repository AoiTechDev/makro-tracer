
import { AvatarProps, Meal } from "@/types/types";
import { Message } from "@/validators/message";
import { QueryResult } from "@vercel/postgres";
import { nanoid } from "nanoid";
import { Session } from "next-auth";
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

export type Option = 'protein' | 'fat' | 'carbohydrates' | 'sugar' | 'calories';

type ChartOption = {
  option: Option;
  setNutrition: (nutrition: Option) => void;
}
export const useChartOptionsStore = create<ChartOption>((set) => ({
  option: "calories",
  setNutrition: (option: Option) => set({ option }),
}));


type Messages ={
  messages: Message[];
  isMessageUpdating: boolean;
  addMessage: (message: Message) => void;
  removeMessage: (id: string) => void;
  updateMessage: (id: string, updateFn: (prevText: string) => string ) => void;
  setIsMessageUpdating: (isUpdating: boolean) => void;
}
export const useMessagesStore = create<Messages>((set) => ({
  messages: [{
    id: nanoid(),
    isUserMessage: false,
    text: "Hello! I'm your personal nutritionist. I can help you provide nutritional information and recommend meals based on what you eat. What would you like to do?"
  }],
  isMessageUpdating: false,
  addMessage: (message: Message) => set((state) => ({ messages: [...state.messages, message] })),
  removeMessage: (id: string) => set((state) => ({ messages: state.messages.filter((message) => message.id !== id) })),
  updateMessage: (id: string, updateFn: (prevText: string) => string) => set((state) => ({ messages: state.messages.map((message) => message.id === id ? {...message, text: updateFn(message.text)} : message) })),
  setIsMessageUpdating: (isUpdating: boolean) => set({ isMessageUpdating: isUpdating }),
}));

type SessionStore = {
  userSession: Session | null;
  setUserSession: (userSession: Session | null) => void;
}
export const useSessionStore = create<SessionStore>((set) => {
  return {
    userSession: null,
    setUserSession: (userSession: Session | null) => set({ userSession }),
  };
})


type AvatarStore = {
  avatar: string | undefined
  setAvatar: (avatar: string | undefined) => void;
}
export const useAvatarStore = create<AvatarStore>((set) => ({
  avatar: "",
  setAvatar: (avatar: string | undefined) => set({ avatar }),
}));
