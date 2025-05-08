import { DocumentAction } from '~features/document-action'

import {
	DocumentDeleteButton,
	DocumentDownloadButton,
	DocumentEditButton,
} from '~models/document'

import { PropsWithDocument } from '@stroy/models'

import { Actions } from '~packages/ui'

export default function DocumentActions({ document }: PropsWithDocument) {
	return (
		<Actions>
			<DocumentDownloadButton file={document.file} />
			<DocumentEditButton document={document} />
			<DocumentAction document={document} />
			<DocumentDeleteButton document={document} />
		</Actions>
	)
}
