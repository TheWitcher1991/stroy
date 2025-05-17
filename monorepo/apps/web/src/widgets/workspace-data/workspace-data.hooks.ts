import { useUnit } from 'effector-react'

import { workSpaceData } from '~widgets/workspace-data/workspace-data.model'

export const useWorkspaceDataStore = () =>
	useUnit({
		indicators: workSpaceData.$indicators,
		isLoading: workSpaceData.$loading,
		isError: workSpaceData.$error,
	})
