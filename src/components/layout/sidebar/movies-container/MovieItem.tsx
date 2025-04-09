import { MaterialIcon } from "@/components/ui/MaterialIcon"
import { CLIENT_URLS } from "@/config/url.config"
import { IMovie } from "@/types/movie.types"
import { getGenresListEach } from "@/utils/getGenresListEach"
import cn from 'clsx'
import Image from "next/image"
import Link from "next/link"
import styles from './MovieList.module.scss'

interface Props {
  movie: IMovie
  theme?: 'dark' | 'light'
}

export function MovieItem({ movie, theme = 'dark' }: Readonly<Props>) {
  return <div className={`mb-4 flex items-stretch ${styles.item}`}>
    <Link href={`${CLIENT_URLS.MOVIE}/${movie.slug}`}>
      <Image
        draggable={false}
        alt={movie.title}
        src={movie.poster}
        width={65}
        height={97}
        priority
        className='rounded-image transition-colors'
      />
    </Link>
    <div className='ml-4 flex flex-col justify-between w-[67%]'>
      <div>
        <div 
          className={cn('text-lg font-medium truncate', {
            ['text-white']: theme === 'dark',
            ['text-black/80']: theme === 'light'
          })}
        >
          {movie.title}
        </div>
        <div className='text-gray-600 text-sm'>
          {movie.genres.map((genre, index) => (
              <Link key={genre.id} href={`${CLIENT_URLS.GENRE}/${genre.slug}`}>
                {getGenresListEach(index, movie.genres.length, genre.name)}
              </Link>
            ))}
        </div>
      </div>

      <div className='flex items-center mb-2'>
        <MaterialIcon name='MdStarRate' className='fill-yellow-400 mr-2 text-lg' />
        <span 
          className={cn('font-medium pt-0.5', {
            ['text-white']: theme === 'dark',
            ['text-black/80']: theme === 'light'
          })}
        >{movie.rating.toFixed(1)}</span>
      </div>
    </div>
  </div>
}

