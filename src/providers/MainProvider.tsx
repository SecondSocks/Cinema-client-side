'use client'

import { MaterialIcon } from '@/components/ui/MaterialIcon'
import { darkToastOptions, lightToastOptions } from '@/config/toaster.config'
import { themeStore } from '@/store/theme/store'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export function MainProvider({ children }: Readonly<{ children: ReactNode }>) {
  const { theme } = themeStore()

  return <QueryClientProvider client={queryClient}>
    {children}
    <Toaster 
      expand
      visibleToasts={5}
      position='bottom-right'
      theme={theme}
      richColors={true}
      closeButton={true}
      icons={{
        success: <MaterialIcon name='MdCheckBox' />,
        error: <MaterialIcon name='MdError' />,
        warning: <MaterialIcon name='MdWarning' />,
        info: <MaterialIcon name='MdInfo' />
      }}
      toastOptions={theme === 'dark' ? darkToastOptions : lightToastOptions}
    />
  </QueryClientProvider>
}

