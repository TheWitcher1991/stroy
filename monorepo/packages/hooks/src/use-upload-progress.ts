import { useMemoizedFn } from 'ahooks'
import { useState } from 'react'

import { Nullable } from '@stroy/types'

interface UploadsState {
	progress: Nullable<number>
	uploaded: number
	total: number
}

export const useUploadProgress = () => {
	const [uploads, setUploads] = useState<UploadsState>({
		progress: null,
		uploaded: 0,
		total: 0,
	})

	const clearUploads = useMemoizedFn(() => {
		setUploads({
			progress: null,
			uploaded: 0,
			total: 0,
		})
	})

	return {
		uploads,
		setUploads,
		clearUploads,
	}
}
