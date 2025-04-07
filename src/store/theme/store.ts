import { TypeThemeColors } from '@/config/theme.config'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IThemeStore {
	theme: 'dark' | 'light'
	color?: TypeThemeColors
	toggleTheme: () => void
	setTheme?: (theme: 'dark' | 'light') => void
	setColor?: (color: TypeThemeColors) => void
}

export const themeStore = create(
	persist<IThemeStore>(set => ({
			theme: 'dark',
			color: 'red',
			toggleTheme: () => set(state => ({
				theme: state.theme === 'dark' ? 'light' : 'dark'
			})),
			setTheme: (theme) => set(() => ({
				theme: theme
			})),
			setColor: (color) => set(() => ({
				color: color
			}))
		}), 
		{ name: 'theme' }
	)
)