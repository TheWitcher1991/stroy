import { format } from 'date-fns'

export const formatDateInRu = (date: string): string => {
	if (!date) return '—'

	return format(new Date(date), 'dd.MM.yyyy')
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
