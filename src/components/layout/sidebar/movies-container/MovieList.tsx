import { Heading } from "@/components/ui/heading/Heading";
import { IMovieList } from "./MovieList.interface";
import { MovieItem } from "./MovieItem";
import Link from "next/link";

export function MovieList({ title, link, movies }: Readonly<IMovieList>) {
  return <div className='mt-11 animate-fade'>
    <Heading title={title} className='font-bold text-xl mb-5 text-white capitalize' />
    {movies.map(movie => <MovieItem movie={movie} key={movie.id} />)}
    <Link href={link} className='p-2.5 btn-primary block text-center'>See more</Link>
  </div>
}

