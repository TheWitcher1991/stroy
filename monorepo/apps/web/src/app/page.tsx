'use client'

import { Flex, Loader } from '@gravity-ui/uikit'
import { useRouter } from 'next/navigation'
import { match } from 'ts-pattern'

import { href } from '@stroy/href'
import { useCheckAuth } from '@stroy/models'

export default function Home() {
	const router = useRouter()
	const isAuth = useCheckAuth()

	match(isAuth)
		.with(true, () => router.replace(href.workspace))
		.with(false, () => router.replace(href.login))
		.exhaustive()

	return (
		<Flex justifyContent='center' alignItems='center' height='100vh'>
			<Loader size='l' />
		</Flex>
	)
}
