import { CLIENT_URLS } from "@/config/url.config"
import { IMovie } from "@/types/movie.types"
import Image from "next/image"
import Link from "next/link"
import styles from '../../Sidebar.module.scss'

interface Props {
  movies: IMovie[]
}

export function SearchList({ movies }: Readonly<Props>) {
  return <div className={`${styles.list} absolute border border-gray-700 rounded-layout bg-gray-800 w-full animate-fade z-10`}>
    {movies.length ? movies.map(movie => (
      <Link
        href={`${CLIENT_URLS.MOVIE}/${movie.slug}`}
        key={movie.id}
        className='flex items-center py-3 px-4 relative after:absolute after:-right-0.5 after:h-0 after:w-0.5 after:bg-transparent after:content-[""] after:top-[28%] hover:after:bg-primary hover:after:h-2/5'
      >
        <Image
          src={movie.poster}
          alt={movie.title}
          width={50}
          height={50}
          objectFit='center'
          objectPosition='top'
          draggable={false}
          className='rounded-image'
        />
        <span className='ml-3 text-white truncate last:w-[70%]'>{movie.title}</span>
      </Link>
    )) : <div className='text-white text-center my-4'>Movies not found</div>}
  </div>
}

