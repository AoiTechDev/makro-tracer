"use client";
import React, { useEffect } from "react";

import { Avatar } from "@/components/ui/avatar";
import { Session } from "next-auth";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logout from "../Logout/Logout";
import Link from "next/link";
import { useSessionStore, useUserStore } from "@/store/store";

import UserAvatar from "@/components/reusable/UserAvatar";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/app/settings/actions";

type ProfileProps = {
  session: Session;
};

const Profile = ({ session }: ProfileProps) => {
  const { userSession, setUserSession } = useSessionStore();
  useEffect(() => {
    setUserSession(session);
  }, [userSession]);

  const { name, avatar, setName, setAvatar } = useUserStore();

  
  useQuery({
    queryKey: ["user", avatar],
    queryFn: async () => {
      const result = await getUserInfo();
      setAvatar(result?.success?.avatar);

      return result;
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar className="border">
          <UserAvatar image={avatar} />
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup className="p-4 flex items-center justify-start gap-2">
          <Avatar className="border">
            <UserAvatar image={avatar} />
          </Avatar>
          <DropdownMenuLabel>
            {name ? name : session?.user?.email}
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup className="p-2 flex flex-col gap-2">
          <Link href="/dashboard">
            <DropdownMenuItem className="cursor-pointer p-2">
              Dashboard
            </DropdownMenuItem>
          </Link>
          <Link className="block lg:hidden" href="/meal-assistant">
            <DropdownMenuItem className="cursor-pointer p-2">
              Meal Assistant
            </DropdownMenuItem>
          </Link>
          <Link href="/settings">
            <DropdownMenuItem className="cursor-pointer p-2">
              Settings
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
