import { errorCatch, getContentType } from '@/api/api.helper'
import { axiosClassic } from '@/api/interceptors'
import { SERVER_URLS } from '@/config/url.config'
import { NAMES } from '@/constants/names.constant'
import { IAuthLogin, IAuthRegister, IAuthResponse } from '@/types/auth.types'
import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'sonner'
import { removeFromStorage, saveToStorage } from './auth.helper'

class AuthService {
	async register(data: IAuthRegister): Promise<IAuthResponse> {
		const response = await axiosClassic<IAuthResponse>({
			url: SERVER_URLS.AUTH.REGISTER,
			method: 'POST',
			data
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	}

	async login(data: IAuthLogin) {
		const response = await axiosClassic<IAuthResponse>({
			url: SERVER_URLS.AUTH.LOGIN,
			method: 'POST',
			data
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	}

	async logout() {
		removeFromStorage()
	}

	async checkAuth() {
		try {
			const response = await this.getNewTokens()
			return response
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toast.error('Logout', {
					description: 'Your auth token has expired, you will be logged out'
				})
				this.logout()
			}

			return error
		}
	}

	async getNewTokens() {
		const refreshToken = Cookies.get(NAMES.refreshToken)

		const response = await axios.post<string, { data: IAuthResponse }>(
			SERVER_URLS.AUTH.ACCESS_TOKEN,
			{ refreshToken },
			{
				headers: getContentType()
			}
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	}
}

export const authService = new AuthService()