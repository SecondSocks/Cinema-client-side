'use client'

import { Menu } from '../Menu'
import { usePopularGenres } from './usePopularGenres'

export function GenreMenu() {
  const { data, isLoading } = usePopularGenres()

  return isLoading ? <div>Loading...</div> : <Menu menu={{ title: 'Popular genres', items: data || [] }} />
}

