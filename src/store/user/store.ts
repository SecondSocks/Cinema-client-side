import { IUser } from '@/types/user.types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface IUserStore {
	user: IUser | null 
	isAuthenticated: boolean
	login: (data: IUser | null) => void
	logout: () => void
	getUser: () => IUser | null
}

export const userStore = create(
	persist<IUserStore>((set, get) => ({
		user: null,
		isAuthenticated: false,
		login: (data) => set({ user: data, isAuthenticated: true }),
		logout: () => set({ user: null, isAuthenticated: false }),
		getUser: () => get().user
	}), { 
		name: 'user',
		storage: createJSONStorage(() => localStorage) 
	})
)