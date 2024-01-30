import { Nutrition } from '@/types/types'
import React from 'react'

type IngredientsListProps = {
    nutrition: Nutrition[]
    }

const IngredientsList = ({nutrition}: IngredientsListProps) => {
  return (
    <div className="flex flex-col w-3/4 gap-4 mt-12 justify-center items-center">
    {nutrition.map((item) => (
      <div className="w-full rounded-xl  p-4 grid grid-cols-3 items-center bg-white ">
        <div className=" flex flex-col justify-center items-center">
          <h2 className="text-2xl">{item.name}</h2>
          <p className="text-muted-foreground">{item.serving_size_g}g</p>
        </div>
        <div>
          <div className="w-[100px] h-[100px] rounded-full  border-2 flex justify-center items-center flex-col">
            <span>{item.calories}</span>
            <span>Cal</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 rounded-2xl gradient font-bold p-4 text-[#dacafb]">
          <span>P: {item.protein_g}g</span>
          <span>F: {item.fat_total_g}g</span>
          <span>C: {item.carbohydrates_total_g}g</span>
          <span>S: {item.sugar_g}g</span>
        </div>
      </div>
    ))}
  </div>
  )
}

export default IngredientsList