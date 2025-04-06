import { ChangeEvent } from "react"
import { MaterialIcon } from "../MaterialIcon"

interface Props {
  searchTerm: string
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export function SearchField({ searchTerm, handleSearch }: Readonly<Props>) {
  return <div className='rounded-3xl border border-gray-700 px-3 py-2 flex items-center transition-colors focus-within:border-gray-600'>
    <MaterialIcon name='MdSearch' className='fill-gray-600 mr-2 text-3xl transition-colors focus-within:fill-gray-500' />
    <input
      placeholder='Search'
      value={searchTerm}
      onChange={handleSearch}
      className='text-white placeholder:text-gray-600 block w-full bg-transparent outline-none'
    />
  </div>
}

