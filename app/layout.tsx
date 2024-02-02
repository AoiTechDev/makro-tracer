import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //TODO

  //make a navbar and logout button client component

  return (
    <html lang="en">
      <body>
       
          <main className="md:flex">
            <Navbar />
            <Sidebar />
            {children}
          </main>
      </body>
    </html>
  );
}
