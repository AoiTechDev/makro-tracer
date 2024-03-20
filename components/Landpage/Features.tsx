'use client'
import React, { useRef } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import chatbot from "@/assets/chatbot.svg";
import nutrition from "@/assets/nutrition.webp";
import prepare from "@/assets/prepare.jpg";
import calendar from "@/assets/calendar.jpg";
import stats from "@/assets/stats.webp";
import Image from "next/image";
import { motion, useInView  } from "framer-motion"

const Features = () => {

  const ref = useRef(null)
  const isInView = useInView(ref,{
    margin: "-100px",
    once: true
  })
  return (
    <div  className="flex items-center justify-center flex-col  relative">
       <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-10 -z-10  overflow-hidden blur-3xl sm:left-10 sm:top-52"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  sm:left-[calc(50%-15rem)] sm:w-[72.1875rem]"
          />
        </div>
      <motion.h2 ref={ref}
      initial={{opacity: 0, y: 50}}
      animate={isInView ? {opacity: 1, y: -20} : {opacity: 0, y: 50}}
      transition={{duration: 0.3}}
      viewport={{once: true, amount: 0.5}}
      className=" mb-12 mt-24 [font-size:_clamp(1.75rem,4vw,4rem)]">
        Key{" "}
        <span className="bg-gradient-to-r from-purple-500 to-[#e7836e] inline-block text-transparent bg-clip-text">
          Features
        </span>
      </motion.h2>
      <BentoGrid className="max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2 " : ""}
            index={i}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Features;
const SvgHeader = ({ src }: any) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <Image src={src} alt="ai" className=" object-scale-down" />
  </div>
);

const items = [
  {
    title: "Meal Calendar Management",
    description:
      "Effortlessly track your daily meals by adding them to your personalized calendar for easy reference and analysis.",
    header: <SvgHeader src={calendar} />,
  },
  {
    title: "Nutrition Lookup",
    description:
      "Access a vast database of nutrition information through our API, empowering you to make informed dietary choices.",
    header: <SvgHeader src={nutrition} />,
  },
  {
    title: "Custom Meal Preparation",
    description:
      "Craft your own meals with ease and save them for future use, making meal planning simpler and more efficient.",
    header: <SvgHeader src={prepare} />,
  },
  {
    title: "Weekly Nutrition Overview",
    description:
      "Visualize your weekly nutrition intake with interactive charts, enabling you to monitor your dietary habits and progress over time.",
    header: <SvgHeader src={stats} />,
  },
  {
    title: "AI Meal Assistance",
    description:
      "Receive personalized meal suggestions and assistance from our AI, streamlining your meal planning process and ensuring optimal nutrition.",
    header: <SvgHeader src={chatbot} />,
  },
];
