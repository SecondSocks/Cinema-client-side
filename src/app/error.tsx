'use client'

import { ServerError } from '@/components/screen/server-error/ServerError'

interface Props {
	error: Error & { digest?: string}
	reset: () => void
}

export default function GlobalError({ error, reset }: Readonly<Props>) {
	<ServerError error={error} reset={reset} />
}
