import React from "react";
import { Button } from "../ui/button";

type ButtonWithBorderProps = {
  text: string;
 
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
    size: "sm" | "lg"
};
const ButtonWithBorder = ({
  text,
 
  variant,
  size
}: ButtonWithBorderProps) => {

    const dim = size === 'sm' ? 'h-[45px] w-[120px]' : 'h-[55px] w-[200px]'
  return (
    <Button variant={variant} className={`${!variant && 'bg-black hover:bg-transparent transition-all relative duration-200 gradient-button'} ${dim} text-${size}`}>
      {" "}
      {text}
    </Button>
  );
};

export default ButtonWithBorder;
