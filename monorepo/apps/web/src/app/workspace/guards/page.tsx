'use client'

import Guards, { GuardsFetcher } from '~widgets/guards'

import { GuardCreateButton } from '~models/guard'

import { Group, PageTitle } from '~packages/ui'

export default function GuardsPage() {
	return (
		<Group>
			<PageTitle
				title={'Гуарды'}
				subtitle={'Гуарды используются для контроля доступа к ресурсам'}
				action={<GuardCreateButton />}
			/>
			<Guards />
			<GuardsFetcher />
		</Group>
	)
}
