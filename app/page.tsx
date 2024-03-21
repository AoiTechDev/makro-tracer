import { getServerSession } from "next-auth";
import Image from "next/image";

import wave from "@/assets/wave.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ButtonWithBorder from "@/components/Buttons/ButtonWithBorder";
import Features from "@/components/Landpage/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Landpage/Hero";
import Preview from "@/components/Landpage/Preview";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="h-screen     flex flex-col mx-auto max-w-screen-xl px-2.5 md:px-20">
      <Hero session={session} />

      <Preview />
      <Features />

      <Footer />
    </div>
  );
}
