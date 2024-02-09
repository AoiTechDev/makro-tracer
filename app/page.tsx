import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import landpageImg from "@/assets/landing-page.png";
import spiral from "@/assets/spiral.png";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <main className="w-full h-screen  grid grid-cols-2 px-24 max-[1300px]:grid-cols-1 items-center">
      <div className="relative w-full flex justify-center items-start gap-5 flex-col">
        {/* <Image
          alt="landpage img"
          fill
          src={spiral}
        /> */}
        <h1 className="text-8xl"><span className="text-[#4176F4]">Nourish</span> Your Body, Delight Your <span className="text-[#4176F4]">Palate</span></h1>
        <p className="text-xl text-balance">Empower Yourself with Comprehensive Meal Tracking: Easily Create, Add and Search for Meals to Stay On Track.</p>
        <Button className="w-[200px] h-[50px] text-xl">Discover</Button>
      </div>
      <div className=" aspect-square relative w-full max-[1300px]:hidden  ">
        <Image
          alt="landpage img"
          fill
          src={landpageImg}
          className=""
        />
      </div>
    </main>
  );
}
