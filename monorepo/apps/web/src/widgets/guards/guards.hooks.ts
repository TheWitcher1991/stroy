import { useStore } from '@tanstack/react-store'

import { guardsStore } from '~widgets/guards/guards.store'

export const useGuardsStore = () => {
	return useStore(guardsStore)
}
