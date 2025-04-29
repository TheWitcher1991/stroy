import { useMemo } from 'react'

import { IGuard } from '~models/guard'

export default function useGuardTableData(guards: IGuard[]) {
	return useMemo(() => guards.map(guard => ({})), [guards])
}
