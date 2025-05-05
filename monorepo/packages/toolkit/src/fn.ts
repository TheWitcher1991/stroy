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
