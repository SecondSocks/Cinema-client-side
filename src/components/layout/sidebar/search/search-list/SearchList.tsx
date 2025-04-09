import { CLIENT_URLS } from "@/config/url.config"
import { themeStore } from '@/store/theme/store'
import { IMovie } from "@/types/movie.types"
import cn from 'clsx'
import Image from "next/image"
import Link from "next/link"
import styles from '../../Sidebar.module.scss'

interface Props {
  movies: IMovie[]
}

export function SearchList({ movies }: Readonly<Props>) {
  const theme = themeStore(state => state.theme)

  return <div 
    className={cn(`${styles.list} absolute border rounded-layout w-full animate-fade z-10`, {
      ['border-gray-700 bg-gray-800']: theme === 'dark',
      ['border-gray-500 bg-gray-100']: theme === 'light',
    })}
  >
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
        <span 
          className={cn('ml-3 truncate last:w-[70%]', {
            ['text-white']: theme === 'dark',
            ['text-black/80']: theme === 'light',
          })}
        >{movie.title}</span>
      </Link>
    )) : (
      <div 
        className={cn('text-center my-4', {
          ['text-white']: theme === 'dark',
          ['text-black/80']: theme === 'light',
        })}
      >Movies not found</div>
    )}
  </div>
}

