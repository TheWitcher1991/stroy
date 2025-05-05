'use client'

import { Flex, Loader } from '@gravity-ui/uikit'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { href } from '@stroy/href'

export default function Home() {
	const router = useRouter()

	useEffect(() => {
		router.replace(href.login)
	}, [])

	return (
		<Flex justifyContent={'center'} alignItems={'center'} height={'100vh'}>
			<Loader size={'l'} />
		</Flex>
	)
}
