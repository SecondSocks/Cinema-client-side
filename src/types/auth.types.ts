import { NextPage } from 'next'
import { ReactNode } from 'react'
import { IUser } from './user.types'

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthLogin extends ITokens {
	email: string
	password: string
}

export interface IAuthRegister extends ITokens {
	name: string
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}

export type TypeRoles = {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type NextPageAuth<Props=object> = NextPage<Props> & TypeRoles
export type TypeComponentAuthFields = { 
	children: ReactNode
}