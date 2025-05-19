import { attach, createStore } from 'effector'
import { createGate } from 'effector-react'
import type { NextRouter } from 'next/router'
import type { ParsedUrlQuery } from 'node:querystring'
import { reshape } from 'patronum'

import { atom } from '@stroy/toolkit'

export const navigation = atom(() => {
	const RouterGate = createGate<{ router: NextRouter }>()

	const $router = createStore<NextRouter | null>(null, {
		serialize: 'ignore',
	})

	$router.on(RouterGate.state, (_, { router }) => router)
	$router.reset(RouterGate.close)

	const { $query, $asPath } = reshape({
		source: $router,
		shape: {
			$query: router => router?.query,
			$asPath: router => router?.asPath,
		},
	})

	const pushFx = attach({
		source: $router,
		effect: (router, url: string) => router?.push(url),
	})

	const pushQueryFx = attach({
		source: $router,
		effect: (router, query: ParsedUrlQuery | null) => {
			if (router) {
				const { page, ...routerQuery } = router.query

				router?.push({ query: { ...routerQuery, ...query } })
			}
		},
	})

	return {
		RouterGate,
		$router,
		$query,
		$asPath,
		pushFx,
		pushQueryFx,
	}
})
