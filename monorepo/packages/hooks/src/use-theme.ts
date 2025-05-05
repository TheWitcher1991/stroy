'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'dark' | 'light'

type ThemeStore = {
	theme: Theme
	setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>()(
	persist(
		set => ({
			theme: 'dark',
			setTheme: theme => {
				set({ theme })
			},
		}),
		{
			name: 'theme-storage',
		},
	),
)

export const useTheme = () => {
	const { theme, setTheme } = useThemeStore()

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
	}

	return {
		theme,
		toggleTheme,
		setTheme,
	}
}
