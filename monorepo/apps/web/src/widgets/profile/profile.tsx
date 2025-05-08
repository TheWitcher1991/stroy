'use client'

import { useMemo, useState } from 'react'

import { ProfileTabs } from '~widgets/profile/index'
import ProfileAccountForm from '~widgets/profile/profile-account-form'
import ProfileDepartmentForm from '~widgets/profile/profile-department-form'
import { ProfileTab } from '~widgets/profile/profile-tabs'

import { PropsWithUser } from '@stroy/models'

export default function Profile({ user }: PropsWithUser) {
	const [index, setIndex] = useState<ProfileTab>('1')

	const tabsContent = useMemo(() => {
		switch (index) {
			case '1':
				return <ProfileAccountForm user={user} />
			case '2':
				return <ProfileDepartmentForm />
		}
	}, [index, user])

	return (
		<>
			<ProfileTabs index={index} setIndex={index => setIndex(index)} />
			{tabsContent}
		</>
	)
}
