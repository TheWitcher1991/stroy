export const prepareRequestParams = <T extends Record<string, any>>(
	params?: T,
): Record<string, any> | undefined => {
	if (!params) return undefined

	return params
		? Object.fromEntries(
				Object.entries(params).map(([key, value]) =>
					Array.isArray(value)
						? [key, value.join(',')]
						: [key, value],
				),
			)
		: {}
}

export const calcPercent = (a: number, b: number) => {
	return Math.round((a * 100) / (b || 1))
}

export const spaced = (val?: number | string): string => {
	if (!val) return '—'

	if (Number(val) < 10000) {
		return val.toString()
	}

	return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const splitId = (id?: number): string[] => {
	if (!id) return []

	return id.toString().split('')
}
