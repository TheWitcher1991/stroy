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

import { TagLabel } from '~models/tag'

import {
	DocumentStatusMapper,
	PropsWithDocument,
	userFullName,
} from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

import { MetaList, MetaListItem } from '~packages/ui'

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
				{document.tag && (
					<MetaListItem icon={Tag} title={'Тег'}>
						<TagLabel tag={document.tag} />
					</MetaListItem>
				)}

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
				<MetaListItem icon={Layers} title={'Контент'}>
					{document.content_type}
				</MetaListItem>
				<MetaListItem icon={ScalesUnbalanced} title={'Размер'}>
					{document.size} KB
				</MetaListItem>
				<MetaListItem icon={Calendar} title={'Создан'}>
					{formatDateInRu(document.created_at)}
				</MetaListItem>
				<MetaListItem icon={Calendar} title={'Обновлен'}>
					{formatDateInRu(document.updated_at)}
				</MetaListItem>
			</MetaList>
			{document.permissions && (
				<Flex gap={2} alignItems={'center'}>
					<Text variant={'body-2'}>Права доступа:</Text>
					<GuardOperationList operations={document.permissions} />
				</Flex>
			)}
		</>
	)
}
