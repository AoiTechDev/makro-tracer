import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import React from 'react'

const ProfileImage = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center">
    <div>
      <Label>Profile Picture</Label>
      <Avatar className="border h-48 w-48">
        <AvatarImage alt="Avatar image" src="/placeholder-user.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  </div>
  )
}

export default ProfileImage