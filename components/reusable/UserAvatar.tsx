'use client'
import Image from "next/image";
import React from "react";
import Placeholder from "@/assets/avatar_placeholder.jpg";
import { AvatarProps } from "@/types/types";
import { getAvatarFromLocalStorage } from "@/lib/utils";
import { useAvatarStore, useChangeAvatarFlagStore } from "@/store/store";

type UserAvatarProps = {
  image?: string;
};

const UserAvatar = ({image}: UserAvatarProps) => {

  const [localAvatar, setLocalAvatar] = React.useState<string | null>(null);
  const {avatar} = useAvatarStore();
  const {changeAvatar} = useChangeAvatarFlagStore();


  React.useEffect(() => {
    const storageAvatar = getAvatarFromLocalStorage();
    setLocalAvatar(storageAvatar);
  }, [changeAvatar]);


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
