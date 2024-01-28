import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function  Home() {
  const session = await getServerSession();
  if (!session) {
    redirect('/login')
  }
  return (
    <main className=" flex justify-center items-center w-screen h-screen">
     Home page
    </main>
  );
}
