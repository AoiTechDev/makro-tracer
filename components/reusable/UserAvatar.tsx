"use client";
import Image from "next/image";
import React from "react";
import Placeholder from "@/assets/avatar_placeholder.jpg";

type UserAvatarProps = {
  image?: string;
};

const UserAvatar = ({ image }: UserAvatarProps) => {
  return (
    <>
      <Image
        alt="avatar image"
        src={image || Placeholder}
        className="aspect-square h-full w-full object-cover"
        fill
        priority
      />
    </>
  );
};

export default UserAvatar;
