'use client'

import { ThemeSwitcher } from '@/components/ui/switcher/ThemeSwitcher'
import { themeStore } from '@/store/theme/store'
import { MoviesContainer } from "./movies-container/MoviesContainer"
import { Search } from "./search/Search"

interface Props {
  className: string
}

export function Sidebar({className}: Readonly<Props>) {
  const theme = themeStore(state => state.theme)

  return <div className={`${className} flex flex-col justify-between`}>
    <div>
      <Search />
      <MoviesContainer />
    </div>
    <ThemeSwitcher theme={theme} />
  </div>
}
