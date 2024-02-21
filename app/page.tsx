import { getServerSession } from "next-auth";
import Image from "next/image";
import landpageImg from "@/assets/landing-page.png";
import wave from "@/assets/wave.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ButtonWithBorder from "@/components/Buttons/ButtonWithBorder";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="h-screen m-auto w-full  ">
      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 items-center lg:pl-12 max-[900px]:mt-24 lg:mt-0">
        <div className="relative w-full flex justify-center items-start max-[900px]:items-center  gap-8 flex-col p-4  max-[900px]:text-center">
          <h1 className=" [font-size:_clamp(2rem,5vw,5rem)] text-balance ">
            <span className=" bg-gradient-to-r from-indigo-500 to-purple-500 inline-block text-transparent bg-clip-text">
              Nourish
            </span>{" "}
            Your Body, Delight Your{" "}
            <span className="bg-gradient-to-r from-purple-500 to-[#e7836e] inline-block text-transparent bg-clip-text">
              Palate
            </span>
          </h1>
          <p className="text text-balance">
            Empower Yourself with Comprehensive Meal Tracking: Easily Create,
            Add and Search for Meals to Stay On Track.
          </p>
          <div className="space-x-4">
            <Link href={session ? "/dashboard" : "/register"}>
              <ButtonWithBorder text="Discover" size="lg" />
            </Link>
            <ButtonWithBorder text="Learn more" variant="outline" size="lg" />
          </div>
        </div>
        <div className=" aspect-square relative w-full   ">
          <Image alt="landpage img" fill src={landpageImg} className="" />
        </div>
      </div>
      {/* <div>
        <Image src={wave} alt="wave" className="rotate-180" />
      </div> */}
    </div>
  );
}
