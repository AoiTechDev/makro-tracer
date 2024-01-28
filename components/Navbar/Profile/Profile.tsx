"use client";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Session } from "next-auth";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logout from "../Logout/Logout";

type ProfileProps = {
  session: Session;
};

const Profile = ({ session }: ProfileProps) => {
  const avatarFallback = `${session?.user?.email
    ?.split("")[0]
    ?.toUpperCase()}${session?.user?.email?.split("")[1]?.toUpperCase()}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="p-2 flex flex-col gap-2">
          <DropdownMenuItem className="cursor-pointer p-2">Day Overview </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer p-2">Ingredients </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer p-2">Meals</DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-2 border-none" ><Logout/></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
