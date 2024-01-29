import { schema } from "@/schema/input";
import { z } from "zod";

export type FormFields = z.infer<typeof schema>;

export type Nutrition = {
  name: string;
  calories: number;
  protein_g: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
  sugar_g: number;
  cholesterol_mg: number;
  serving_size_g: number;
};

