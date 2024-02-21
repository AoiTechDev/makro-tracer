import { getServerSession } from "next-auth";
import Image from "next/image";

import wave from "@/assets/wave.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ButtonWithBorder from "@/components/Buttons/ButtonWithBorder";
import Features from "@/components/Landpage/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Landpage/Hero";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="h-screen m-auto w-full  flex flex-col">
      <Hero session={session}/>

      <div className="flex items-center justify-center flex-col">
        <h2 className=" my-24 [font-size:_clamp(1.75rem,4vw,4rem)]">
          Key{" "}
          <span className="bg-gradient-to-r from-purple-500 to-[#e7836e] inline-block text-transparent bg-clip-text">
            Features
          </span>
        </h2>
        <Features />
      </div>

      <Footer />
    </div>
  );
}
