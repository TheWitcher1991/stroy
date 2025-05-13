import { Text } from '@gravity-ui/uikit'
import { ReactNode, useEffect, useState } from 'react'

import { IDocument } from '@stroy/models'

import styles from './index.module.scss'

export const DocumentPreview = ({
	file,
	content_type,
}: Pick<IDocument, 'file' | 'content_type'>) => {
	const [preview, setPreview] = useState<ReactNode | null>(null)
	const [text, setText] = useState<string | null>(null)

	useEffect(() => {
		if (content_type === 'text/plain') {
			fetch(file)
				.then(res => res.text())
				.then(setText)
				.catch(() => setText('Ошибка при загрузке файла'))
		}
	}, [content_type, file])

	useEffect(() => {
		if (content_type.startsWith('image/')) {
			setPreview(<img src={file} alt='Image Preview' />)
		}

		if (content_type === 'application/pdf') {
			setPreview(<iframe src={file} title='PDF Preview' />)
		}

		if (content_type === 'text/plain') {
			setPreview(
				<Text className={styles.previewText}>
					{text ?? 'Загрузка...'}
				</Text>,
			)
		}

		if (content_type.startsWith('video/')) {
			setPreview(<video src={file} controls />)
		}

		if (
			content_type ===
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
			content_type === 'application/msword'
		) {
			return setPreview(
				<iframe
					src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(file)}`}
					title='Document Preview'
				/>,
			)
		}

		if (content_type.startsWith('audio/')) {
			return setPreview(<audio src={file} controls />)
		}
	}, [file, content_type, text])

	return (
		<div className={styles.previewDocument}>
			<Text variant={'header-1'}>Предпросмотр</Text>
			{preview}
		</div>
	)
}
