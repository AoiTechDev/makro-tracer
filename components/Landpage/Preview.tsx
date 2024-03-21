"use client";
import Image from "next/image";
import React from "react";
import preview from "@/assets/dashboard-preview.png";
import { motion } from "framer-motion";
const Preview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="mx-auto max-w-6xl px-6 lg:px-8 my-12 sm:my-24"
    >
      <div className="mt-16 flow-root sm:mt-24">
        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <Image
            src={preview}
            width={1905}
            height={917}
            alt="product preview"
            quality={100}
            className="rounded-md bg-white p-2 sm:p-8  shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preview;
