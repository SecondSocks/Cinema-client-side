'use client'

import { genreService } from "@/services/genre.service"
import { useQuery } from "@tanstack/react-query"
import { type IMenuItem } from "../Menu.interface"
import { CLIENT_URLS } from "@/config/url.config"

export function usePopularGenres() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['popular genre menu'],
    queryFn: () => genreService.getAll(),
    select: ({ data }) => data.map(genre => ({
      icon: genre.icon,
      link: CLIENT_URLS.GENRE + genre.slug,
      title: genre.name
    } as IMenuItem)).splice(0, 4)
  })

  if (isError) {
    // Error Toast
  }

  return { data, isLoading }
}
