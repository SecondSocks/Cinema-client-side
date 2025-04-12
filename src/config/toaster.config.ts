export const darkToastOptions = {
	duration: 4000,
	style: {
		backgroundColor: 'var(--color-gray-950)',
		color: 'var(--color-white)',
		borderRadius: 'var(--radius-layout)',
		fontSize: '1rem',
		padding: '1rem',
		boxShadow: '0 0 4px rgba(255, 255, 255, 0.2)',
	},
	classNames: {
		title: 'font-bold text-base',
		description: 'text-xs font-normal',
		icon: 'text-2lg pr-5'
	}
}

export const lightToastOptions = {
	duration: 4000,
	style: {
		backgroundColor: 'var(--color-white)',
		color: 'var(--color-gray-950)',
		borderRadius: 'var(--radius-layout)',
		fontSize: '1rem',
		padding: '1rem',
		boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
	},
	classNames: {
		title: 'font-bold text-base',
		description: 'text-xs font-normal',
		icon: 'text-2lg pr-5'
	}
}

