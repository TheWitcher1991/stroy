import { reset } from 'patronum/reset'

import { navigation } from '~packages/navigation'

reset({
	clocK: navigation.$asPath,
	target: [],
})
