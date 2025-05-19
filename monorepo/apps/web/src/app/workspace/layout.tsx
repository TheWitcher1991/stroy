'use client'

import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'

import Aside from '~widgets/aside'

import { BusinessProvider } from '~models/business'

import { useSessionExpired } from '@stroy/models'

import { Container } from '~packages/ui'

const Nav = dynamic(() => import('~widgets/nav'))

export default function WorkspaceLayout({
	children,
}: Readonly<PropsWithChildren>) {
	useSessionExpired()

	return (
		<BusinessProvider>
			<Aside>
				<Nav />
				<Container>{children}</Container>
			</Aside>
		</BusinessProvider>
	)
}
