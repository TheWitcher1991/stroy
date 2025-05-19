import { useUnit } from 'effector-react'

import { $breadcrumbs } from '~widgets/nav/nav.store'

export const useBreadcrumbs = () => useUnit($breadcrumbs)
