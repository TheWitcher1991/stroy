import { z } from 'zod'

import { DOCUMENT_FILE_TYPES, IMAGE_FILE_TYPES } from '@stroy/system'

import { formatFileSize } from './format'
import { regexPatterns } from './regex'

export const buildFileShape = (
	fileUploads: string[],
	video_upload_size_md: number = 10,
) => {
	return z
		.instanceof(File, {
			message: 'Пожалуйста, выберите файл',
		})
		.refine(file => fileUploads.includes(file.type), {
			message: `Неверный тип файла. Разрешены: ${fileUploads.join(', ')}`,
		})
		.refine(file => file.size <= video_upload_size_md * 1024 * 1024, {
			message: `Размер файла не должен превышать ${formatFileSize(video_upload_size_md)} МБ`,
		})
}

export const zShape = {
	id: z.number().positive().min(1),
	indicator: z.number().positive().min(1),
	image: buildFileShape(IMAGE_FILE_TYPES, 5),
	document: buildFileShape(DOCUMENT_FILE_TYPES, 2000),
	ids: z.number().positive().array(),
	uuid: z.string().uuid(),
	date: z.string().date('Неверный формат даты'),
	datetime: z.string().datetime({
		message: 'Неверный формат даты',
	}),
	url: z.string().url({
		message: 'Неверный URL',
	}),
	choice: z.string().min(1, {
		message: 'Пожалуйста, выберите',
	}),
	order: z.number().positive().min(1),
	color: z.string().min(7).max(7).startsWith('#'),
	title: z
		.string()
		.min(3, {
			message: 'Должно быть не менее 3 символов',
		})
		.max(255, {
			message: 'Должно быть не более 255 символов',
		}),
	name: z
		.string()
		.min(3, {
			message: 'Должно быть не менее 3 символов',
		})
		.max(64, {
			message: 'Должно быть не более 255 символов',
		}),
	description: z
		.string()
		.min(10, {
			message: 'Должно быть не менее 10 символов',
		})
		.max(3000, {
			message: 'Должно быть не более 3000 символов',
		}),
	telegram: z.string().min(2).max(50).startsWith('@'),
	email: z
		.string()
		.email({
			message: 'Неверный email',
		})
		.min(2)
		.max(50),
	password: z
		.string()
		.min(8, {
			message: 'Должно быть не менее 8 символов',
		})
		.max(255, {
			message: 'Должно быть не более 255 символов',
		}),
	decimal: z
		.string()
		.regex(regexPatterns.decimal.value, regexPatterns.decimal.message),
	phone: z
		.string()
		.regex(
			regexPatterns.russianPhone.value,
			regexPatterns.russianPhone.message,
		),
	telegramUrl: z
		.string()
		.regex(
			regexPatterns.telegramUrl.value,
			regexPatterns.telegramUrl.message,
		),
}

export const MediaMetaSchema = z.object({
	duration: z.number().positive(),
})

export const FileMetaSchema = z.object({
	url: z.string().url(),
	name: z.string().min(3).max(255),
})
