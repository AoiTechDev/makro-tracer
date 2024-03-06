'use client'
import React, { useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { CardDescription, CardTitle } from '../ui/card'
import { AvatarProps } from '@/types/types'
import { useAvatarStore } from '@/store/store'


const TopProfileInfo = ({image}: AvatarProps) => {
  
  const {avatar, setAvatar} = useAvatarStore();


  useEffect(() => {
    
    setAvatar(image)
  },[avatar, image])
  return (
    <div className="flex gap-4">
    <Avatar className="border h-12 w-12">
      <AvatarImage alt="Avatar image" src={image} className="object-cover"/>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <div className="space-y-1">
      <CardTitle>John Doe</CardTitle>
      <CardDescription>john@example.com</CardDescription>
    </div>
  </div>
  )
}

export default TopProfileInfo