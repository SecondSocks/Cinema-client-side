import { useDebounce } from "@/hooks/useDebounce"
import { useState } from "react"

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const debouncedSearch = useDebounce<string>(searchTerm, 500)

  return { searchTerm, debouncedSearch, setSearchTerm }
}
