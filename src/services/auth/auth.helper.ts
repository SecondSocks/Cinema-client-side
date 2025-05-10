'use client'

import { NAMES } from '@/constants/names.constant'
import { IAuthResponse } from '@/types/auth.types'
import Cookies from 'js-cookie'


export const saveToStorage = (data: IAuthResponse) => {
	Cookies.set(NAMES.accessToken, data.accessToken)
	Cookies.set(NAMES.refreshToken, data.refreshToken) 
}

export const getAccessToken = () => {
	return Cookies.get(NAMES.accessToken) ?? null
}

export const getRefreshToken = () => {
	return Cookies.get(NAMES.refreshToken) ?? null
}

export const removeFromStorage = () => {
	Cookies.remove(NAMES.accessToken)
	Cookies.remove(NAMES.refreshToken)
}

//TODO: get user from storage