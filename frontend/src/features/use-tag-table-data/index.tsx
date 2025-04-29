import { useMemo } from 'react'

import { ITag } from '~models/tag'

export default function useTagTableData(tags: ITag[]) {
	return useMemo(() => tags.map(tag => ({})), [tags])
}
