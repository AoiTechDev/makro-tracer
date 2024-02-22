import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Provider from "@/components/Providers/Provider";
export const metadata: Metadata = {
  title: "MealFulness",
  description:
    "With this application, you can effortlessly monitor the nutritional composition of your meals on a daily basis. Moreover, it seamlessly integrates with an external API to provide you with detailed nutritional information for specific foods. Additionally, you have the option to customize your own ingredients and meals, making them reusable for future reference and sparing you the need to recreate and input meal information on a daily basis.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Navbar />
          <main className=" w-full">{children}</main>
          <Toaster />
        </body>
      </Provider>
    </html>
  );
}
