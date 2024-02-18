"use client";
import React, { useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Option, useChartOptionsStore } from "@/store/store";

type NutritionType = {
    value: Option;
    label: string;
}
const nutrition: NutritionType [] = [
  {
    value: "calories",
    label: "Calories",
  },
  {
    value: "protein",
    label: "Protein",
  },
  {
    value: "carbohydrates",
    label: "Carbohydrates",
  },
  {
    value: "fat",
    label: "Fat",
  },
  {
    value: "sugar",
    label: "Sugar",
  },
];

const ChartOptions = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<Option>("calories");

  //make it custom hook
  const {option, setNutrition} = useChartOptionsStore();

  useEffect(() => {
    setNutrition(value);
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"

        >
          {value
            ? nutrition.find((nutrition) => nutrition.value === value)?.label
            : "Select nutrition..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No nutrition found.</CommandEmpty>
          <CommandGroup >
            {nutrition.map((nutrition) => (
            <CommandItem
                key={nutrition.value}
                value={nutrition.value}
                onSelect={(currentValue: string) => {
                    setValue(currentValue === value ? "calories" : currentValue as Option);
                    setOpen(false);
                }}
            >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === nutrition.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {nutrition.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ChartOptions;
