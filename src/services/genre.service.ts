import { axiosClassic } from "@/api/interceptors"
import { SERVER_URLS } from "@/config/url.config"
import { IGenre } from "@/types/movie.types"

class GenreService {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(SERVER_URLS.GENRE.BASE, {
      params: searchTerm ? { searchTerm } : {}
    })
  }
}

export const genreService = new GenreService()
