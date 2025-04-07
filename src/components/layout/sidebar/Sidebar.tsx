'use client'

import { themeStore } from '@/store/theme/store'
import { MoviesContainer } from "./movies-container/MoviesContainer"
import { Search } from "./search/Search"

interface Props {
  className: string
}

export function Sidebar({className}: Readonly<Props>) {
  const theme = themeStore(state => state.theme)
  
  return <div className={className}>
    <Search theme={theme} />
    <MoviesContainer />
  </div>
}
