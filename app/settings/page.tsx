import SettingsContent from "@/components/Settings/SettingsContent/SettingsContent";
import TopProfileInfo from "@/components/Settings/TopProfileInfo";

import { Card } from "@/components/ui/card";

import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <Card className="w-full p-2 md:p-4 space-y-4">
      <TopProfileInfo />

      <SettingsContent />
    </Card>
  );
};

export default page;
