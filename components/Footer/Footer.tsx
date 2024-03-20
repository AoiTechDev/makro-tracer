import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="w-full   flex justify-center items-center flex-col mt-12 ">
      <Separator className="w-full" />

      <div className="flex justify-between items-center py-6 w-full text-sm opacity-60 flex-col gap-6 lg:gap-0 lg:flex-row">
        <div>
          <p> &copy;{new Date().getFullYear()} Mealfulness. All Right Reserved.</p>
        </div>
       <ul className="flex gap-4">
        <li>Term of Service</li>
        <li>Privacy Policy</li>
       </ul>
      </div>
    </footer>
  );
};

export default Footer;
