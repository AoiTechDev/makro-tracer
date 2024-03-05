import ContainerLayout from "@/components/ContainerLayout/ContainerLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon, LockIcon, UserIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <Card className="w-full p-2 md:p-4 space-y-4">
      <div className="flex gap-4">
        <Avatar className="border h-12 w-12">
          <AvatarImage alt="Avatar image" src="/placeholder-user.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle>John Doe</CardTitle>
          <CardDescription>john@example.com</CardDescription>
        </div>
      </div>
      <div>
        <CardContent className="flex w-full flex-col md:flex-row">
          <div className="flex-1 space-y-6 ">
            <div>
              <Label>Name</Label>
              <div className="flex gap-2">
                <Input />
                <Button>Change</Button>
              </div>
              <Label>Email</Label>
              <div className="flex gap-2">
                <Input />
                <Button>Change</Button>
              </div>
            </div>

            <div className="space-y-4">
              <p>Change your password</p>
              <div>
                <Label>Current Password</Label>
                <div className="flex gap-2">
                  <Input type="password" />
                </div>
                <Label>New Password</Label>
                <div className="flex gap-2">
                  <Input type="password" />
                </div>
                <Label>Confirm New Password</Label>
                <div className="flex gap-2">
                  <Input type="password" />
                </div>
              </div>
              <Button>Change</Button>
            </div>
          </div>

          <div className="flex-1 w-full flex flex-col items-center">
            <div>
              <Label>Profile Picture</Label>
              <Avatar className="border h-48 w-48">
                <AvatarImage alt="Avatar image" src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default page;
