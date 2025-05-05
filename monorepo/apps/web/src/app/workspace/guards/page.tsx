'use client'

import Guards, { GuardsFetcher } from '~widgets/guards'

import { Group, PageTitle } from '~packages/ui'

export default function GuardsPage() {
	return (
		<Group>
			<PageTitle
				buttonTitle={'Создать гуард'}
				title={'Гуарды'}
				subtitle={'Гуарды используются для контроля доступа к ресурсам'}
			/>
			<Guards />
			<GuardsFetcher />
		</Group>
	)
}
