import { createEvent, createStore } from 'effector'

import { atom } from '@stroy/toolkit'

export type FinancesTab = '1' | '2' | '3' | '4'

export const financeTab = atom(() => {
	const setTab = createEvent<FinancesTab>()

	const $tab = createStore<FinancesTab>('1')

	$tab.on(setTab, (_, index) => index)

	return {
		$tab,
		setTab,
	}
})
