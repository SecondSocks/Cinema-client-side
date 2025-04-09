'use client'

import { SearchField } from "@/components/ui/fields/SearchField"
import { SearchList } from "./search-list/SearchList"
import { useSearch } from "./useSearch"

export function Search() {
  const { data, isSuccess, handleSearch, searchTerm } = useSearch()

  return <div className='relative'>
    <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
    {isSuccess && <SearchList movies={data || []} />}
  </div>
}

