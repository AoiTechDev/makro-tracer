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
import Link from "next/link";

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

      <DropdownMenuContent className="w-64">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuGroup className="p-4 flex items-center justify-start gap-2">
          <Avatar>
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <DropdownMenuLabel>
            {session?.user?.email}
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup className="p-2 flex flex-col gap-2">
          <Link href="/dashboard">
            <DropdownMenuItem className="cursor-pointer p-2">
              Dashboard
            </DropdownMenuItem>
          </Link>

          {/* <DropdownMenuItem className="cursor-pointer p-2">
            Settings{" "}
          </DropdownMenuItem> */}
          {/* <DropdownMenuItem className="cursor-pointer p-2">Meals</DropdownMenuItem> */}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-2 border-none">
          <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
