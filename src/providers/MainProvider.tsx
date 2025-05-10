'use client'

import { MaterialIcon } from '@/components/ui/MaterialIcon'
import { darkToastOptions, lightToastOptions } from '@/config/toaster.config'
import { themeStore } from '@/store/theme/store'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import AuthProvider from './AuthProviders/AuthProvider'
import { ThemeGate } from './ThemeGate'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

interface Props {
  children: ReactNode
}

export default function MainProvider({ children }: Readonly<Props>) {
  const theme = themeStore(state => state.theme)

  return <ThemeGate>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>
      <Toaster 
        expand
        visibleToasts={5}
        position='top-center'
        theme={theme}
        richColors={true}
        closeButton={true}
        icons={{
          success: <MaterialIcon name='MdCheckCircle' />,
          error: <MaterialIcon name='MdError' />,
          warning: <MaterialIcon name='MdWarning' />,
          info: <MaterialIcon name='MdInfo' />
        }}
        toastOptions={theme === 'dark' ? darkToastOptions : lightToastOptions}
      />
    </QueryClientProvider>
  </ThemeGate>
}

