import { format } from 'date-fns'

import { spaced } from './fn'

export const formatDateInRu = (date: string): string => {
	if (!date) return '—'

	return format(new Date(date), 'dd.MM.yyyy')
}

export const formatDateTimeInRu = (date: string): string => {
	if (!date) return '—'

	return format(new Date(date), 'dd.MM.yyyy HH:mm')
}

export const formatDate = (date: string): string => {
	if (!date) return '—'

	return format(new Date(date), 'yyyy-MM-dd')
}

export const formatFileSize = (size: number): string => {
	if (size >= 1024 * 1024 * 1024) {
		return `${(size / (1024 * 1024 * 1024)).toFixed(2)} ГБ`
	} else if (size >= 1024 * 1024) {
		return `${(size / (1024 * 1024)).toFixed(2)} МБ`
	} else if (size >= 1024) {
		return `${(size / 1024).toFixed(2)} КБ`
	}
	return `${size} байт`
}

export const formatBytes = (
	bytes?: number,
	system: 'b' | 'kb' | 'mb' | 'gb' = 'mb',
): string => {
	if (!bytes || bytes === 0) return '0 Б'

	switch (system) {
		case 'b':
			return `${spaced(bytes)} Б`
		case 'kb':
			return `${spaced((bytes / 1024).toFixed(2))} КБ`
		case 'mb':
			return `${spaced((bytes / (1024 * 1024)).toFixed(2))} МБ`
		case 'gb':
			return `${spaced((bytes / (1024 * 1024 * 1024)).toFixed(2))} ГБ`
		default:
			return `${spaced(bytes)} Б`
	}
}
