import { TextInput } from '@gravity-ui/uikit'

import { ProjectSelect } from '~models/project'
import { TagSelect } from '~models/tag'

import { useCreateDocument } from '@stroy/models'
import { DOCUMENT_FILE_TYPES } from '@stroy/system'
import { ModalProps } from '@stroy/types'

import { Dialog, FileButton, FormSection } from '~packages/ui'

export const DocumentImportModal = ({ open, onClose }: ModalProps) => {
	const req = useCreateDocument()

	const importHandler = async () => {}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={importHandler}
			caption={'Импорт документа'}
			loading={req.isPending}
			size={'s'}
		>
			<FormSection label={'Название'}>
				<TextInput size={'l'} />
			</FormSection>

			<FormSection label={'Проект'}>
				<ProjectSelect />
			</FormSection>

			<FormSection label={'Тег'}>
				<TagSelect />
			</FormSection>

			<FormSection label={'Файл'} withOutMargin={true}>
				<FileButton name={'file'} accept={DOCUMENT_FILE_TYPES} />
			</FormSection>
		</Dialog>
	)
}
