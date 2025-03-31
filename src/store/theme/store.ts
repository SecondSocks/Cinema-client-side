import { createStore } from 'zustand'

//TODO: create store for theme with localstorage
export const store = createStore(set => {
	return {
		theme: 'light',
		toggleTheme: () => set(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
	}
})