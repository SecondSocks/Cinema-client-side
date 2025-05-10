import { API_URL } from "@/config/url.config"
import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper'
import { authService } from '@/services/auth/auth.service'
import axios from "axios"
import { errorCatch } from './api.helper'

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

axiosClassic.interceptors.request.use(async config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken?.toString())
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosClassic.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await authService.getNewTokens()

				return axiosClassic.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)