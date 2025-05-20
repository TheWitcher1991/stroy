import { createQuery } from '@farfetched/core'

import { departmentServiceKeys, IDepartmentIndicator } from '@stroy/models'

import { requestFx } from '~packages/lib'

export const workSpaceApi = createQuery({
	effect: requestFx<void, IDepartmentIndicator>({
		url: departmentServiceKeys.indicators,
	}),
})
