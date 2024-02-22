'use client'
import React, {FC} from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
interface ProvidersProps{
children: React.ReactNode
}
const Provider: FC<ProvidersProps> = ({children}) => {
    const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default Provider 