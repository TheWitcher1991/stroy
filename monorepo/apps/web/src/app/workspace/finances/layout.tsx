'use client'

import { PropsWithChildren } from 'react'

import Wallet from '~widgets/wallet'

import FinancesTabs from '~features/finances-tabs'

import { Group } from '~packages/ui'

export default function FinancesLayout({
	children,
}: Readonly<PropsWithChildren>) {
	return (
		<Group>
			<Wallet />
			<FinancesTabs />
			{children}
		</Group>
	)
}
