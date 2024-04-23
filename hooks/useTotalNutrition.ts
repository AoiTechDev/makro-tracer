
import { formattedDate } from "@/lib/utils";
import { useCalendarStore } from "@/store/store";
import { MealResponse, Nutrition } from "@/types/types";
import { useEffect, useState } from "react";


  
export const useTotalNutrition = ({result}: {result: MealResponse[] | undefined}) => {

    const [totalNutrition, setTotalNutrition] = useState<Nutrition>({
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
        sugar: 0,
    });
    
    const { date } = useCalendarStore();
    const formattedOriginalDate = formattedDate(date);
    
    useEffect(() => {
        if (result) {
        let total = {
            calories: 0,
            protein: 0,
            carbohydrates: 0,
            fat: 0,
            sugar: 0,
        };
    
        result.forEach((row) => {
            const rowDate = new Date(row.date);
            const formattedRowDate = formattedDate(rowDate);
    
            if (formattedOriginalDate === formattedRowDate) {
            total = {
                calories: total.calories + Number(row.calories),
                protein: total.protein + Number(row.protein),
                carbohydrates: total.carbohydrates + Number(row.carbohydrates),
                fat: total.fat + Number(row.fat),
                sugar: total.sugar + Number(row.sugar),
            };
            }
        });
    
        setTotalNutrition(total);
        }
    }, [result, date]);
    
    return { totalNutrition};
};
