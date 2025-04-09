'use client'

import { Heading } from "@/components/ui/heading/Heading"
import { themeStore } from '@/store/theme/store'

export function Home() {
  const theme = themeStore(state => state.theme)

  return <div>
    <Heading 
      title='Watch movies online' 
      className='text-gray-300 text-xl mb-8'
      theme={theme} 
    />
  </div>
}
