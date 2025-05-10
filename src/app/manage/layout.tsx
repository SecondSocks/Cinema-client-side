import ManageLayout from '@/components/layout/manage/ManageLayout'
import { NO_INDEX_PAGE } from '@/config/seo.config'
import { Metadata } from 'next'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
}

export default function layout({ children }: Readonly<Props>) {
	return <ManageLayout>{children}</ManageLayout>
}