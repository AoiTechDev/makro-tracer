"use client";
import React from "react";
import { Avatar } from "../ui/avatar";
import { CardDescription, CardTitle } from "../ui/card";
import { useUserStore } from "@/store/store";
import UserAvatar from "../reusable/UserAvatar";

const TopProfileInfo = () => {



  const { avatar } = useUserStore();
  return (
    <div className="flex gap-4">
      <Avatar className="border h-12 w-12">
        <UserAvatar image={avatar}/>
      </Avatar>
      <div className="space-y-1">
        <CardTitle>John Doe</CardTitle>
        <CardDescription>john@example.com</CardDescription>
      </div>
    </div>
  );
};

export default TopProfileInfo;
