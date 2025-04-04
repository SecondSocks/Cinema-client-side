'use client'

import { SkeletonLoader } from '@/components/ui/loaders/SkeletonLoader'
import { Menu } from '../Menu'
import { usePopularGenres } from './usePopularGenres'

export function GenreMenu() {
  const { data, isLoading } = usePopularGenres()

  return isLoading ? (
    <div className='mx-11 mb-6'>
      <SkeletonLoader count={5} className='h-7 mt-6' />
    </div>
  ) : <Menu menu={{ title: 'Popular genres', items: data || [] }} />
}

