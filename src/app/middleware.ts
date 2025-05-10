'use server'

import { CLIENT_URLS } from '@/config/url.config'
import { NAMES } from '@/constants/names.constant'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	const { url, cookies } = request

	const refreshToken = cookies.get(NAMES.refreshToken)?.value

	const isAuthPage = url.includes('/auth')
	
	if (isAuthPage && refreshToken)
		return NextResponse.redirect(new URL(CLIENT_URLS.HOME, url))

	if (isAuthPage) return NextResponse.next()


	if (!refreshToken) return NextResponse.redirect(new URL('/auth', url))

	return NextResponse.next()
	
}

export const config = {
	matcher: ['/manage/:path*', '/auth/:path*']
}