export const THEMES = {
	dark: {
		bg: 'bg-gray-900',
		fg: '#fefefe',
		colors: {
			red: '#e30b13',
			blue: '#5de5e1',
			yellow: '#ffea81',
			pink :'#ff6786',
			purple: '#b180eb'
		}
	},
	light: {
		bg: 'bg-white/90',
		fg: '#020202',
		colors: {
			red: '#e30b13',
			blue: '#0068ff',
			pink: '#d075ff',
			purple: '#6f34ff',
			yellow: '#fbdb3a'
		}
	}
}

export type TypeTheme = typeof THEMES.dark
export type TypeThemeColors = keyof typeof THEMES.dark.colors