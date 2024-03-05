import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { CardDescription, CardTitle } from '../ui/card'

const TopProfileInfo = () => {
  return (
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
  )
}

export default TopProfileInfo