import { axiosClassic } from "@/api/interceptors"
import { SERVER_URLS } from "@/config/url.config"
import { IMovie } from "@/types/movie.types"

class MovieService {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(SERVER_URLS.MOVIE.BASE, {
      params: searchTerm ? { searchTerm } : {}
    })
  }

  async getMostPopularMovies() {
    const { data: movies } = await axiosClassic.get<IMovie[]>(SERVER_URLS.MOVIE.GET_MOST_POPULAR)

    return movies
  }
}

export const movieService = new MovieService()
