"use client";
import React, { useEffect } from "react";
import { Avatar } from "../ui/avatar";
import { CardDescription, CardTitle } from "../ui/card";
import { useUserStore } from "@/store/store";
import UserAvatar from "../reusable/UserAvatar";
import { Session } from "next-auth";

type TopProfileInfoProps = {
  userName: string | null ,
  session: Session | null
}
const TopProfileInfo = ({userName, session}: TopProfileInfoProps) => {

  
  const { avatar,setName } = useUserStore();

  useEffect(() => {
    setName(userName);
  }, [userName])
  return (
    <div className="flex gap-4 ml-5">
      <Avatar className="border h-12 w-12">
        <UserAvatar image={avatar}/>
      </Avatar>
      <div className="space-y-1">
        <CardTitle>{userName}</CardTitle>
        <CardDescription>{session?.user?.email}</CardDescription>
      </div>
    </div>
  );
};

export default TopProfileInfo;
