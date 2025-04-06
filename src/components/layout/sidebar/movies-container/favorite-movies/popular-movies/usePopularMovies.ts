'use client'

import { movieService } from "@/services/movie.service"
import { useQuery } from "@tanstack/react-query"

export function usePopularMovies() {
  const { data, isLoading } = useQuery({
    queryKey: ['popular movies in sidebar'],
    queryFn: () => movieService.getMostPopularMovies()
  })

  return { popularMovies: data, isLoading }
}
