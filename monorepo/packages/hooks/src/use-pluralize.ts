import { useCallback } from 'react'

export function usePluralize() {
	return useCallback(
		(count: number, one: string, few: string, many: string): string => {
			const mod10 = count % 10
			const mod100 = count % 100

			if (mod100 >= 11 && mod100 <= 14) {
				return `${count} ${many}`
			}
			if (mod10 === 1) {
				return `${count} ${one}`
			}
			if (mod10 >= 2 && mod10 <= 4) {
				return `${count} ${few}`
			}
			return `${count} ${many}`
		},
		[],
	)
}
