'use client'

import { useMemo, useState } from 'react'

import { DocumentTab } from '~widgets/document/document-tabs'
import UserDocuments from '~widgets/user/user-documents'
import UserProfile from '~widgets/user/user-profile'
import UserTabs from '~widgets/user/user-tabs'

import { PropsWithUser, userFullName } from '@stroy/models'

import { Group, PageTitle } from '~packages/ui'

export default function User({ user }: PropsWithUser) {
	const [index, setIndex] = useState<DocumentTab>('1')

	const tabsContent = useMemo(() => {
		switch (index) {
			case '1':
				return <UserProfile user={user} />
			case '2':
				return <UserDocuments documents={user.documents} />
			case '3':
				return null
		}
	}, [index, user])

	return (
		<Group>
			<PageTitle title={userFullName(user)} subtitle={user.email} />
			<UserTabs
				index={index}
				setIndex={index => setIndex(index)}
				counter={user.documents.length}
			/>
			{tabsContent}
		</Group>
	)
}
