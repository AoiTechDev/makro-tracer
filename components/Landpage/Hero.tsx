"use client";
import React from "react";
import ButtonWithBorder from "../Buttons/ButtonWithBorder";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import landpageImg from "@/assets/landing-page.png";
import { motion } from "framer-motion";

type HeroProps = {
  session: Session | null;
};
const Hero = ({ session }: HeroProps) => {
  return (
    <div className="grid grid-cols-2 max-[900px]:grid-cols-1 items-center lg:pl-12 max-[900px]:mt-24 lg:mt-0">
      <div className="relative w-full flex justify-center items-start max-[900px]:items-center  gap-8 flex-col p-4  max-[900px]:text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=" [font-size:_clamp(2rem,5vw,5rem)] text-balance "
        >
          <span className=" bg-gradient-to-r from-indigo-500 to-purple-500 inline-block text-transparent bg-clip-text">
            Nourish
          </span>{" "}
          Your Body, Delight Your{" "}
          <span className="bg-gradient-to-r from-purple-500 to-[#e7836e] inline-block text-transparent bg-clip-text">
            Palate
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text text-balance"
        >
          Empower Yourself with Comprehensive Meal Tracking: Easily Create, Add
          and Search for Meals to Stay On Track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 md:space-x-4"                
        >
          <Link href={session ? "/dashboard" : "/register"}>
            <ButtonWithBorder text="Discover" size="lg" />
          </Link>

          <ButtonWithBorder text="Learn more" variant="outline" size="lg" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" aspect-square relative w-full   "
      >
        <Image alt="landpage img" fill src={landpageImg} className="" />
      </motion.div>
    </div>
  );
};

export default Hero;
