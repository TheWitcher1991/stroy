'use client'

import { FileArrowUp } from '@gravity-ui/icons'
import { Button, Flex, Icon, Text, useFileInput } from '@gravity-ui/uikit'
import { useCallback, useMemo, useState } from 'react'
import { FieldPath, UseFormRegister } from 'react-hook-form'

interface FileButtonProps<T = any> {
	buttonText?: string
	name: string
	required?: boolean
	errorMessage?: string
	onChange?: (file: File) => void
	loading?: boolean
	accept?: string[]
	register?: UseFormRegister<T>
}

export function FileButton<T = any>({
	name,
	errorMessage,
	buttonText,
	onChange,
	required,
	loading,
	accept,
	register,
}: FileButtonProps<T>) {
	const [text, setText] = useState<string>(buttonText || 'Загрузить файл')

	const onUpdate = useCallback(
		(files: File[]) => {
			onChange?.(files[0])
			setText(files[0].name)
		},
		[onChange],
	)
	const { controlProps, triggerProps } = useFileInput({ onUpdate })

	const buttonStyle = useMemo(
		() => ({
			border: `1px solid ${!errorMessage ? 'transparent' : 'var(--g-color-text-danger)'}`,
			color: !errorMessage
				? 'var(--g-color-text-primary)'
				: 'var(--g-color-text-danger)',
		}),
		[errorMessage],
	)

	return (
		<>
			<Flex direction={'column'}>
				<Button
					width={'auto'}
					style={buttonStyle}
					size={'l'}
					view={errorMessage ? 'outlined-danger' : 'normal'}
					{...triggerProps}
				>
					<Icon data={FileArrowUp} size={18} />
					{text}
				</Button>
				{errorMessage && <Text color={'danger'}>{errorMessage}</Text>}
				<input
					ref={register?.(name as FieldPath<T>)?.ref}
					name={name}
					id={name}
					required={required || false}
					disabled={loading || false}
					hidden={true}
					type='file'
					accept={accept?.join(',')}
					multiple={false}
					{...controlProps}
				/>
			</Flex>
		</>
	)
}
