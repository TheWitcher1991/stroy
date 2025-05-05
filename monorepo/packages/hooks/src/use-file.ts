'use client'

import { useMemoizedFn } from 'ahooks'
import { ChangeEvent, useEffect, useState } from 'react'

import { fileToBase64 } from '@stroy/toolkit'
import { Nullable } from '@stroy/types'

type FileParams = {
	name: string
	type: string
	size: number
	lastModified: number
}

export const useFile = () => {
	const [file, setCurrentFile] = useState<Nullable<File>>(null)
	const [result, setResult] = useState<string>('')
	const [params, setParams] = useState<Partial<FileParams>>({})

	useEffect(() => {
		setParams({
			name: file?.name,
			type: file?.type,
			size: file?.size,
			lastModified: file?.lastModified,
		})

		fileToBase64(file, data => {
			setResult(data)
		})
	}, [file])

	const setFile = useMemoizedFn((e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()

		if (!e.target.files) return

		const file = e.target?.files[0]

		if (file) {
			setCurrentFile(file)
		}
	})

	const setFiles = useMemoizedFn((files: File[]) => {
		setCurrentFile(files[0])
	})

	return {
		file,
		setFile,
		setFiles,
		setResult,
		params,
		result,
	}
}
