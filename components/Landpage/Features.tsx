import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const Features = () => {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};

export default Features;
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Meal Calendar Management",
    description:
      "Effortlessly track your daily meals by adding them to your personalized calendar for easy reference and analysis.",
    header: <Skeleton />,
  },
  {
    title: "Nutrition Lookup",
    description:
      "Access a vast database of nutrition information through our API, empowering you to make informed dietary choices.",
    header: <Skeleton />,
  },
  {
    title: "Custom Meal Preparation",
    description:
      "Craft your own meals with ease and save them for future use, making meal planning simpler and more efficient.",
    header: <Skeleton />,
  },
  {
    title: "Weekly Nutrition Overview",
    description:
      "Visualize your weekly nutrition intake with interactive charts, enabling you to monitor your dietary habits and progress over time.",
    header: <Skeleton />,
  },
  {
    title: "AI Meal Assistance",
    description:
      "Receive personalized meal suggestions and assistance from our AI, streamlining your meal planning process and ensuring optimal nutrition.",
    header: <Skeleton />,
  },
];
