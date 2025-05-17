import { createQuery } from '@farfetched/core'

import { departmentServiceKeys, IDepartmentIndicator } from '@stroy/models'

import { createCommonRequestFx } from '~packages/fx'

export const workSpaceApi = createQuery({
	effect: createCommonRequestFx<void, IDepartmentIndicator>({
		url: departmentServiceKeys.indicators,
	}),
})
