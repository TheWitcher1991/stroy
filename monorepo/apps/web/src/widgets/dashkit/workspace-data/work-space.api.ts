import { createQuery } from '@farfetched/core'

import { departmentServiceKeys, IDepartmentIndicator } from '@stroy/models'

import { queryFx, requestFx } from '~packages/lib'

export const workSpaceApi = createQuery({
	effect: queryFx<void, IDepartmentIndicator>({
		url: departmentServiceKeys.indicators,
	}),
})
