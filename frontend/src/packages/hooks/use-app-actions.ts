import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { AppActions } from '~store'

import { useAppDispatch } from '~packages/hooks/use-app-dispatch'

export const useAppActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(AppActions, dispatch), [dispatch])
}
