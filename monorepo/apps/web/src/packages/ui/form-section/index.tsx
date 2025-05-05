import { Text } from '@gravity-ui/uikit'
import { FC, PropsWithChildren } from 'react'

import { Spacing } from '~packages/ui'

interface FormSectionProps extends PropsWithChildren {
	label: string
	withOutMargin?: boolean
}

export const FormSection: FC<FormSectionProps> = ({
	label,
	children,
	withOutMargin,
}) => {
	return (
		<>
			<Text variant={'body-2'} color={'secondary'}>
				{label}
			</Text>
			<Spacing v={'xs'} />
			{children}
			{!withOutMargin && <Spacing />}
		</>
	)
}
