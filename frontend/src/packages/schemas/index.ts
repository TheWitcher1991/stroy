import { z } from 'zod'

import { DOCUMENT_FILE_TYPES, IMAGE_FILE_TYPES } from '~packages/system'
import { formatFileSize, regexPatterns } from '~packages/utils'

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
	datetime: z.string().datetime(),
	url: z.string().url({
		message: 'Неверный URL',
	}),
	choice: z.string().min(1, {
		message: 'Пожалуйста, выберите',
	}),
	order: z.number().positive().min(1),
	title: z
		.string()
		.min(3, {
			message: 'Должно быть не менее 3 символов',
		})
		.max(255, {
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
	name: z
		.string()
		.min(3, {
			message: 'Должно быть не менее 3 символов',
		})
		.max(50, {
			message: 'Должно быть не более 50 символов',
		}),
	password: z.string().min(8).max(255),
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
