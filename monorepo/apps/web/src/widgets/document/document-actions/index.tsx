import { Flex } from '@gravity-ui/uikit'

import { DocumentAction } from '~features/document-action'

import {
	DocumentDeleteButton,
	DocumentDownloadButton,
	DocumentEditButton,
} from '~models/document'

import { PropsWithDocument } from '@stroy/models'

export default function DocumentActions({ document }: PropsWithDocument) {
	return (
		<Flex alignItems={'center'} gap={2}>
			<DocumentDownloadButton document={document} />
			<DocumentEditButton document={document} />
			<DocumentAction document={document} />
			<DocumentDeleteButton document={document.id} />
		</Flex>
	)
}
