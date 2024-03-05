'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { CardDescription, CardTitle } from '../ui/card'

type TopProfileInfoProps = {
  avatar: string | undefined
}
const TopProfileInfo = ({avatar}: TopProfileInfoProps) => {
  return (
    <div className="flex gap-4">
    <Avatar className="border h-12 w-12">
      <AvatarImage alt="Avatar image" src={avatar} className="object-cover"/>
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