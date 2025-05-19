import { useUnit } from 'effector-react'

import { $breadcrumbs } from './nav.store'

export const useBreadcrumbs = () => useUnit($breadcrumbs)
