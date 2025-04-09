import { Heading } from "@/components/ui/heading/Heading"
import { themeStore } from '@/store/theme/store'
import Link from "next/link"
import { MovieItem } from "./MovieItem"
import { IMovieList } from "./MovieList.interface"

export function MovieList({ title, link, movies }: Readonly<IMovieList>) {
  const theme = themeStore(state => state.theme)

  return <div className='mt-11 animate-fade'>
    <Heading 
      title={title} 
      className='font-bold text-xl mb-5 capitalize'
      theme={theme}
    />
    {movies.map(movie => <MovieItem movie={movie} key={movie.id} theme={theme} />)}
    <Link href={link} className='p-2.5 btn-primary block text-center'>See more</Link>
  </div>
}

