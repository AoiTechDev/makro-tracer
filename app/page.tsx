import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import landpageImg from "@/assets/landing-page.png";
import spiral from "@/assets/spiral.png";
import { Button } from "@/components/ui/button";
import wave from "@/assets/wave.svg";
import Link from "next/link";
export default async function Home() {
  const session = await getServerSession();
  // if (!session) {
  //   redirect("/login");
  // }
  return (
    <div className="h-screen m-auto w-full  ">
      <div className="grid grid-cols-2 px-24 max-[1300px]:grid-cols-1 items-center">
        <div className="relative w-full flex justify-center items-start gap-8 flex-col">
          {/* <Image
          alt="landpage img"
          fill
          src={spiral}
        /> */}
          <h1 className="text-7xl">
            <span className="text-[#4176F4]">Nourish</span> Your Body, Delight
            Your <span className="text-[#4176F4]">Palate</span>
          </h1>
          <p className="text-xl text-balance">
            Empower Yourself with Comprehensive Meal Tracking: Easily Create,
            Add and Search for Meals to Stay On Track.
          </p>
          <Link href={session ? '/dashboard' : '/register'}>
            <Button className="w-[200px] h-[55px] bg-[#4176F4] text-xl">
              Discover
            </Button>
          </Link>
        </div>
        <div className=" aspect-square relative w-full max-[1300px]:hidden  ">
          <Image alt="landpage img" fill src={landpageImg} className="" />
        </div>
      </div>

      <div className="h-screen  mt-32  bg-slate-300 box-border">
        {/* <Image src={wave} alt=''  /> */}
        <h1>What Mealfulness will give you?</h1>
        <div className="grid grid-cols-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
