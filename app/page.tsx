import { getServerSession } from "next-auth";
import Image from "next/image";
import landpageImg from "@/assets/landing-page.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="h-screen m-auto w-full  ">
      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 items-center lg:pl-12 max-[900px]:mt-24 lg:mt-0">
        <div className="relative w-full flex justify-center items-start max-[900px]:items-center  gap-8 flex-col p-4  max-[900px]:text-center">
       
          <h1 className=" [font-size:_clamp(2rem,5vw,5rem)] text-balance ">
            <span className="text-[#4176F4]">Nourish</span> Your Body, Delight
            Your <span className="text-[#4176F4]">Palate</span>
          </h1>
          <p className="text text-balance">
            Empower Yourself with Comprehensive Meal Tracking: Easily Create,
            Add and Search for Meals to Stay On Track.
          </p>
          <Link href={session ? '/dashboard' : '/register'}>
            <Button className="w-[200px] h-[55px] bg-[#4176F4] text-xl">
              Discover
            </Button>
          </Link>
        </div>
        <div className=" aspect-square relative w-full   ">
          <Image alt="landpage img" fill src={landpageImg} className="" />
        </div>
      </div>

     
    </div>
  );
}
