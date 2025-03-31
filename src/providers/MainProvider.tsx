'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export function MainProvider({ children }: Readonly<{ children: ReactNode }>) {
  return <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
}

