'use client'

import { useMount } from 'ahooks'

import Guards, { GuardsFetcher, GuardsFilter } from '~widgets/guards'
import { setBreadcrumbs } from '~widgets/nav'

import { GuardCreateButton } from '~models/guard'

import { generateBreadcrumbs } from '@stroy/toolkit'

import { Group, PageTitle } from '~packages/ui'

export default function GuardsPage() {
	useMount(() => {
		setBreadcrumbs(
			generateBreadcrumbs({
				resource: 'guards',
				variant: 'index',
			}),
		)
	})

	return (
		<Group>
			<PageTitle
				title={'Гуарды'}
				subtitle={'Гуарды используются для контроля доступа к ресурсам'}
				action={<GuardCreateButton />}
			/>
			<GuardsFilter />
			<Guards />
			<GuardsFetcher />
		</Group>
	)
}
