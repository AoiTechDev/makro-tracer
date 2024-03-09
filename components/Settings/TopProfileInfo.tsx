"use client";
import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CardDescription, CardTitle } from "../ui/card";
import { AvatarProps } from "@/types/types";
import { useAvatarStore } from "@/store/store";
import Image from "next/image";
import UserAvatar from "../reusable/UserAvatar";

const TopProfileInfo = () => {

  
  const { avatar } = useAvatarStore();

  // useEffect(() => {
  //   setAvatar(image);
  // }, [avatar, image]);


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
