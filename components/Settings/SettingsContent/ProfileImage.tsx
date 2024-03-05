"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SVGPencil from "./SVGPencil";
import { Card } from "@/components/ui/card";

const ProfileImage = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else {
      setFileUrl(undefined);
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <div className="relative">
        <Label>Profile Picture</Label>
        <Avatar className="border h-48 w-48">
          {file && fileUrl ? (
            <>
              <AvatarImage alt="Avatar image" src={fileUrl} className="object-cover"/>
              <AvatarFallback>JD</AvatarFallback>
            </>
          ) : (
            <>
              <AvatarImage alt="Avatar image" src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </>
          )}
          {/* <AvatarImage alt="Avatar image" src="/placeholder-user.jpg" />
          <AvatarFallback>JD</AvatarFallback> */}
        </Avatar>
        <Popover>
          <PopoverTrigger className="absolute bottom-3 left-0">
            <Card className=" flex px-2 py-1 justify-center items-center gap-1">
              <SVGPencil />
              Edit
            </Card>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-4 max-w-40">
            <Label className="cursor-pointer" htmlFor="profile-image">
              Upload a photo...
            </Label>
            <Label className="cursor-pointer">Remove photo</Label>
            <Input
              type="file"
              id="profile-image"
              className="hidden"
              accept="image/ipeg,image/png,image/webp"
              onChange={handleFileChange}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ProfileImage;
