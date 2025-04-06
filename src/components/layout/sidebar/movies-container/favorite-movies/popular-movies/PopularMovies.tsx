'use client'

import { SkeletonLoader } from "@/components/ui/loaders/SkeletonLoader"
import { usePopularMovies } from "./usePopularMovies"
import { MovieList } from "../../MovieList"
import { CLIENT_URLS } from "@/config/url.config"

export function PopularMovies() {
  const { popularMovies, isLoading } = usePopularMovies()

  return isLoading ? <div className='mt-11'>
      <SkeletonLoader count={3} className='h-28 mb-4' />
    </div> : <MovieList title='Popular movies' link={CLIENT_URLS.TRENDING} movies={popularMovies || []} />
}

