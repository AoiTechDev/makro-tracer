import { z } from "zod";

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must contain at least 8 character(s)'}).max(16, {message: 'Password can not be longer than 16 character(s)'}),
  confirmPassword: z.string().min(8, {message: 'Password must contain at least 8 character(s)'}).max(16).optional(),
});

export const mealSchema = z.object({
  mealName: z.string({
    invalid_type_error: "Meal name must be a string",
    required_error: "Meal name is required",
  }),
  calories: z.number({
    invalid_type_error: "Calories must be a number",
    required_error: "Calories is required",
  }),
  protein: z.number({
    invalid_type_error: "Protein must be a number",
    required_error: "Protein is required",
  }),
  fat: z.number({
    invalid_type_error: "Fat name must be a number",
    required_error: "Fat is required",
  }),
  carbs: z.number({
    invalid_type_error: "Carbohydrates name must be a number",
    required_error: "Carbohydrates is required",
  }),
  sugar: z.number({
    invalid_type_error: "Sugar must be a number",
    required_error: "Sugar is required",
  }),
});