import { sample } from 'effector'
import { createGate } from 'effector-react'

import { setBreadcrumbs } from '~widgets/nav'

import { IDepartmentIndicator } from '@stroy/models'
import { atom } from '@stroy/toolkit'

import { workSpaceApi } from './work-space.api'

export const workSpaceData = atom(() => {
	const WorkSpaceGate = createGate()

	const $indicators: EStore<IDepartmentIndicator> = workSpaceApi.$data
	const $loading = workSpaceApi.$pending
	const $error = workSpaceApi.$error.map(Boolean)

	sample({
		clock: WorkSpaceGate.open,
		target: workSpaceApi.start,
	})

	WorkSpaceGate.open.watch(() =>
		setBreadcrumbs([{ text: 'Дашборд', href: '/' }]),
	)

	return {
		WorkSpaceGate,
		$indicators,
		$loading,
		$error,
	}
})
