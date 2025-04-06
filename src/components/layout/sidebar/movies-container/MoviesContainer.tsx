import { FavoriteMovies } from "./favorite-movies/FavoriteMovies";
import { PopularMovies } from "./favorite-movies/popular-movies/PopularMovies";

export function MoviesContainer() {
  return <div>
    <PopularMovies />
    <FavoriteMovies />
  </div>
}

