import { MoviesContainer } from "./movies-container/MoviesContainer"
import { Search } from "./search/Search"

interface Props {
  className: string
}

export function Sidebar({className}: Readonly<Props>) {
  return <div className={className}>
    <Search />
    <MoviesContainer />
  </div>
}
