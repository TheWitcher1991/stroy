import {
	Dialog as DialogGravity,
	DialogProps as DialogGravityProps,
} from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

interface DialogProps extends PropsWithChildren {
	open: boolean
	caption?: DialogGravityProps['caption']
	onClose: () => void
	onClickButtonApply: () => void
	size?: DialogGravityProps['size']
	textButtonApply?: DialogGravityProps['textButtonApply']
	textButtonCancel?: DialogGravityProps['textButtonCancel']
	loading?: DialogGravityProps['loading']
	errorText?: DialogGravityProps['errorText']
	propsButtonCancel?: DialogGravityProps['propsButtonCancel']
	propsButtonApply?: DialogGravityProps['propsButtonApply']
}

export function Dialog({
	caption,
	open,
	onClose,
	onClickButtonApply,
	textButtonApply = 'Подтвердить',
	textButtonCancel = 'Отмена',
	loading,
	errorText,
	children,
	size,
	propsButtonCancel = {
		view: 'outlined',
	},
	propsButtonApply,
}: DialogProps) {
	return (
		open && (
			<DialogGravity onClose={onClose} open={open} size={size}>
				<DialogGravity.Header caption={caption} />
				<DialogGravity.Body>
					<>{children}</>
				</DialogGravity.Body>
				<DialogGravity.Footer
					errorText={errorText}
					onClickButtonCancel={onClose}
					onClickButtonApply={onClickButtonApply}
					textButtonApply={textButtonApply}
					textButtonCancel={textButtonCancel}
					propsButtonApply={propsButtonApply}
					propsButtonCancel={propsButtonCancel}
					listenKeyEnter={false}
					preset={'default'}
					showError={true}
					loading={loading}
				/>
			</DialogGravity>
		)
	)
}
