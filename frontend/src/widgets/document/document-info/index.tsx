import {
	Archive,
	ArrowRotateLeft,
	Calendar,
	Cube,
	FileText,
	Layers,
	Person,
	ScalesUnbalanced,
	Tag,
} from '@gravity-ui/icons'
import { Flex, Label, Text } from '@gravity-ui/uikit'

import GuardOperationList from '~features/guard-operation-list'

import { DocumentStatusMapper, PropsWithDocument } from '~models/document'
import { userFullName } from '~models/user'

import { MetaList, MetaListItem } from '~packages/ui'
import { formatDateInRu } from '~packages/utils'

export default function DocumentInfo({ document }: PropsWithDocument) {
	return (
		<>
			<MetaList width={400}>
				<MetaListItem icon={FileText} title={'ID'}>
					{document.doc_number}
				</MetaListItem>
				<MetaListItem icon={ArrowRotateLeft} title={'Версия'}>
					v{document.version_number}
				</MetaListItem>
				<MetaListItem icon={Tag} title={'Тег'}>
					<Label>{document.tag?.title}</Label>
				</MetaListItem>
				<MetaListItem icon={Cube} title={'Проект'}>
					<Label>{document.project.title}</Label>
				</MetaListItem>
				<MetaListItem icon={Person} title={'Автор'}>
					<Label>{userFullName(document.author)}</Label>
				</MetaListItem>
				<MetaListItem icon={Archive} title={'Статус'}>
					<Label>{DocumentStatusMapper[document.status]}</Label>
				</MetaListItem>
				<MetaListItem icon={Layers} title={'Тип'}>
					{document.doc_type}
				</MetaListItem>
				<MetaListItem icon={ScalesUnbalanced} title={'Размер'}>
					{document.size_in_bytes} KB
				</MetaListItem>
				<MetaListItem icon={Calendar} title={'Создан'}>
					{formatDateInRu(document.created_at)}
				</MetaListItem>
				<MetaListItem icon={Calendar} title={'Обновлен'}>
					{formatDateInRu(document.updated_at)}
				</MetaListItem>
			</MetaList>
			<Flex gap={2} alignItems={'center'}>
				<Text variant={'body-2'}>Права доступа:</Text>
				<GuardOperationList operations={document.permissions} />
			</Flex>
		</>
	)
}
