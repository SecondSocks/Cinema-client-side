'use client'

import { Heading } from "@/components/ui/heading/Heading"
import { themeStore } from '@/store/theme/store'

export function Home() {
  const toggleTheme = themeStore(state => state.toggleTheme)

  return <div>
    <Heading title='Watch movies online' className='text-gray-300 text-xl mb-8' />
    <input 
      type='checkbox'
      onClick={() => toggleTheme()}
    />
  </div>
}
