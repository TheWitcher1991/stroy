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
	TextAlignLeft,
} from '@gravity-ui/icons'
import { Alert, Flex, Label, Text } from '@gravity-ui/uikit'

import GuardOperationList from '~features/guard-operation-list'

import { TagLabel } from '~models/tag'

import {
	DocumentStatusMapper,
	PropsWithDocument,
	userFullName,
} from '@stroy/models'
import { formatBytes, formatDateInRu } from '@stroy/toolkit'

import { MetaList, MetaListItem } from '~packages/ui'

export default function DocumentInfo({ document }: PropsWithDocument) {
	return (
		<>
			{document.permissions.length === 0 && (
				<Alert
					theme='danger'
					title='Внимание'
					message='У вас нет прав доступа к документу'
				/>
			)}
			{document.permissions.length > 0 && (
				<Alert
					theme='info'
					title='Права доступа'
					message={
						<GuardOperationList operations={document.permissions} />
					}
				/>
			)}
			<MetaList width={420}>
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
					<Label size={'s'}>{document.project.title}</Label>
				</MetaListItem>
				<MetaListItem icon={Person} title={'Автор'}>
					<Label size={'s'}>{userFullName(document.author)}</Label>
				</MetaListItem>
				<MetaListItem icon={Archive} title={'Статус'}>
					<Label size={'s'}>
						{DocumentStatusMapper[document.status]}
					</Label>
				</MetaListItem>
				<MetaListItem icon={Layers} title={'Тип'}>
					{document.doc_type}
				</MetaListItem>
				<MetaListItem icon={TextAlignLeft} title={'Контент'}>
					{document.content_type}
				</MetaListItem>
				<MetaListItem icon={ScalesUnbalanced} title={'Размер'}>
					{formatBytes(document.size, 'kb')}
				</MetaListItem>
				<MetaListItem icon={Calendar} title={'Создан'}>
					{formatDateInRu(document.created_at)}
				</MetaListItem>
				<MetaListItem icon={Calendar} title={'Обновлен'}>
					{formatDateInRu(document.updated_at)}
				</MetaListItem>
			</MetaList>
		</>
	)
}
