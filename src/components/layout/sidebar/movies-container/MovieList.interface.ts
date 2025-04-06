import { IMovie } from "@/types/movie.types"

export interface IMovieList {
  title: string
  link: string
  movies: IMovie[]
}
