'use client'

import { Flex, Loader } from '@gravity-ui/uikit'
import { useRouter } from 'next/navigation'

import { href } from '@stroy/href'
import { useCheckAuth } from '@stroy/models'

export default function Home() {
	const router = useRouter()
	const isAuth = useCheckAuth()

	if (isAuth) {
		router.replace(href.workspace)
	} else {
		router.replace(href.login)
	}

	return (
		<Flex justifyContent={'center'} alignItems={'center'} height={'100vh'}>
			<Loader size={'l'} />
		</Flex>
	)
}
