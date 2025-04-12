import { TypeThemeColors } from '@/config/theme.config'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IThemeStore {
	theme: 'dark' | 'light'
	color?: TypeThemeColors
	hasHydrated: boolean 
	toggleTheme: () => void
	setTheme: (theme: 'dark' | 'light') => void
	setColor?: (color: TypeThemeColors) => void
	setHasHydrated: (state: boolean) => void
}

export const themeStore = create(
	persist<IThemeStore>(set => ({
			theme: 'dark',
			color: 'red',
			hasHydrated: false,
			toggleTheme: () => set(state => ({
				theme: state.theme === 'dark' ? 'light' : 'dark'
			})),
			setTheme: theme => set({ theme: theme }),
			setColor: color => set({ color: color }),
			setHasHydrated: hydrated => set({ hasHydrated: hydrated }),
		}), 
		{ 
			name: 'theme',
			onRehydrateStorage: () => (state) => { state?.setHasHydrated(true) } 
		}
	)
)