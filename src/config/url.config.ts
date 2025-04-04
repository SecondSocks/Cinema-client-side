export const API_URL = `${process.env.APP_SERVER_URL}`

export const SERVER_URLS = {
  ACTOR: {
    BASE: `${API_URL}/actor`,
    GET_BY_SLUG: `${API_URL}/actor/by-slug`,
  },
  AUTH: {
    BASE: `${API_URL}/auth`,
    REGISTER: `${API_URL}/auth/register`,
    LOGIN: `${API_URL}/auth/login`,
    ACCESS_TOKEN: `${API_URL}/auth/login/access-token`,
  },
  FILE: {
    BASE: `${API_URL}/files`
  },
  GENRE: {
    BASE: `${API_URL}/genre`,
    GET_BY_SLUG: `${API_URL}/genre/by-slug`,
    GET_COLLECTIONS: `${API_URL}/genre/collections`
  },
  MOVIE: {
    BASE: `${API_URL}/movie`,
    GET_BY_SLUG: `${API_URL}/movie/by-slug`,
    GET_BY_ACTOR: `${API_URL}/movie/by-actor`,
    GET_BY_GENRES: `${API_URL}/movie/by-genres`,
    GET_MOST_POPULAR: `${API_URL}/movie/most-popular`,
    UPDATE_COUNT_OPENED: `${API_URL}/movie/update-count-opened`,
  },
  RATING: {
    BASE: `${API_URL}/rating`,
    SET_RATING: `${API_URL}/rating/set-rating`,
  },
  TELEGRAM: {
    BASE: `${API_URL}/telegram`
  },
  USER: {
    BASE: `${API_URL}/user`,
    PROFILE: `${API_URL}/user/profile`,
    GET_FAVORITES: `${API_URL}/user/favorites`,
    TOGGLE_FAVORITE: `${API_URL}/user/toggle-favorite`,
    COUNT_USERS: `${API_URL}/user/count`,
  }
}

export const CLIENT_URLS = {
  HOME: '/',
  MOVIE: '/movie',
  ACTOR: '/actor',
  GENRE: '/genre',
  ADMIN: '/manage'
}
