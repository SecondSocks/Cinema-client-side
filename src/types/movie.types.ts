import { TypeMaterialIconName } from "./icons.types"

export interface IGenre {
  id: string
  name: string
  slug: string
  description: string
  icon: TypeMaterialIconName
}

export interface IActor {
  id: string
  photo: string
  name: string
  countMovies: number
  slug: string
}

export interface IParameters {
  year: number
  country: string
  duration: number
}

export interface IMovie {
  id: string
  poster: string
  bigPoster: string
  title: string
  parameters: IParameters
  genres: IGenre[]
  actors: IActor[]
  countOpened: number
  videoUrl: string
  rating: number
  slug: string
}
