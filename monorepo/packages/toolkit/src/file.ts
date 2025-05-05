import { Nullable } from '@stroy/types'

export const getVideoDurationInSeconds = async (
	file: Nullable<File>,
): Promise<number> => {
	if (!file) return 0

	return new Promise<number>((resolve, reject) => {
		const video = document.createElement('video')
		video.preload = 'metadata'
		video.onloadedmetadata = () => {
			URL.revokeObjectURL(video.src)
			const duration = Math.floor(video.duration)
			resolve(Number.isFinite(duration) ? duration : 0)
		}
		video.onerror = () => reject(new Error('Failed to load video metadata'))
		video.src = URL.createObjectURL(file)
	})
}

export function image64ToImage(base64: string) {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.src = base64
		img.onload = () => {
			resolve(img)
		}
		img.onerror = () => {
			reject(img)
		}
	})
}

export function cropImage(
	image,
	x: number,
	y: number,
	newWidth: number,
	newHeight: number,
) {
	const canvas = document.createElement('canvas')
	canvas.width = newWidth
	canvas.height = newHeight
	const ctx = canvas.getContext('2d')

	if (!ctx) return undefined

	ctx.drawImage(image, x, y, newWidth, newHeight, 0, 0, newWidth, newHeight)
	return canvas.toDataURL('image/jpeg')
}

export async function cropImage64(
	base64: string,
	x: number,
	y: number,
	newWidth: number,
	newHeight: number,
) {
	const img = await image64ToImage(base64)
	return cropImage(img, x, y, newWidth, newHeight)
}

export const getRandomFileName = () => {
	return Math.random().toString(36).substring(2, 15)
}

export async function imageSrcToFile(
	imageSrc,
	fileName = getRandomFileName(),
	mimeType = 'image/png',
): Promise<File> {
	if (imageSrc.startsWith('data:')) {
		const base64Response = await fetch(imageSrc)
		const blob = await base64Response.blob()
		return new File([blob], fileName, { type: mimeType })
	} else {
		const response = await fetch(imageSrc)
		const blob = await response.blob()
		return new File([blob], fileName, { type: blob.type })
	}
}

export const fileToBase64 = (
	file: Nullable<File>,
	callback: (data: string) => void,
) => {
	if (!file) {
		return
	}

	const reader = new FileReader()
	reader.onload = () => {
		return callback(reader.result as string)
	}
	reader.readAsDataURL(file)
}
