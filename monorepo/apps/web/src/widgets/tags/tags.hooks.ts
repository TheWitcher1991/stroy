import { useStore } from '@tanstack/react-store'

import { tagsStore } from '~widgets/tags/tags.store'

export const useTagsStore = () => {
	return useStore(tagsStore)
}
