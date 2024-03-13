"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom';

const ChangeButton = () => {
    const { pending } = useFormStatus();
  return (
    <Button disabled={pending}  >
    {pending ? "Saving..." : "Change"}
  </Button>
  )
}

export default ChangeButton