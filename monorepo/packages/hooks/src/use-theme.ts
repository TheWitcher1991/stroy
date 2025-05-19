'use client'

import { createEvent, createStore } from 'effector'
import { useUnit } from 'effector-react'
import { persist } from 'effector-storage/local'
import { useCallback } from 'react'

export type Theme = 'dark' | 'light'

export const setTheme = createEvent<Theme>()

export const $theme = createStore<Theme>('dark')

$theme.on(setTheme, (_, payload) => payload)

persist({
	store: $theme,
	key: 'theme-storage',
})

export const useTheme = () => {
	const theme = useUnit($theme)

	const toggleTheme = useCallback(() => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
	}, [theme, setTheme])

	return {
		theme,
		toggleTheme,
		setTheme,
	}
}
