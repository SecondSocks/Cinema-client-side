'use client'

import { useDebounce } from "@/hooks/useDebounce"
import { movieService } from "@/services/movie.service"
import { useQuery } from "@tanstack/react-query"
import { ChangeEvent, useState } from "react"

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const debouncedSearch = useDebounce<string>(searchTerm, 500)

  const { data, isSuccess } = useQuery({
    queryKey: ['search movie list', debouncedSearch],
    queryFn: () => movieService.getAll(debouncedSearch),
    select: ({ data }) => data,
    enabled: !!debouncedSearch
  })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return { isSuccess, handleSearch, data, searchTerm }
}
