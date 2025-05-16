import { useUnit } from 'effector-react'

import { $store } from '~widgets/projects/projects.store'

export const useProjectsStore = () => useUnit($store)
