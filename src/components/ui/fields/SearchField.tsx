import { themeStore } from '@/store/theme/store'
import cn from 'clsx'
import { ChangeEvent } from "react"
import { MaterialIcon } from "../MaterialIcon"

interface Props {
  searchTerm: string
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export function SearchField({ searchTerm, handleSearch }: Readonly<Props>) {
  const theme = themeStore(state => state.theme)

  return <div 
    className={cn('rounded-3xl border  px-3 py-2 flex items-center transition-colors', {
      ['border-gray-700 focus-within:border-gray-600']: theme === 'dark',
      ['border-gray-900 focus-within:border-gray-800']: theme === 'light'
    })}
  >
    <MaterialIcon 
      name='MdSearch' 
      className={cn('mr-2 text-3xl transition-colors', {
        ['fill-gray-600 focus-within:fill-gray-500']: theme === 'dark',
        ['fill-black/80 focus-within:fill-gray-600']: theme === 'light'
      })} 
    />
    <input
      placeholder='Search'
      value={searchTerm}
      onChange={handleSearch}
      className={cn('block w-full bg-transparent outline-none', {
        ['text-white placeholder:text-gray-600']: theme === 'dark',
        ['text-black/80 placeholder:text-gray-800']: theme === 'light',
      })}
    />
  </div>
}

