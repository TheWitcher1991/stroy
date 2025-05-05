import { useQuery } from '@tanstack/react-query'

import { departmentServiceKeys } from './department.config'
import { DepartmentRepository } from './department.repository'
import { IDepartmentIndicator } from './department.types'

export const useDepartmentIndicators = () => {
	const { isLoading, data, isError } = useQuery({
		queryKey: [departmentServiceKeys.indicators],
		queryFn: () => DepartmentRepository.getIndicators(),
	})

	return {
		isLoading,
		isError,
		indicators: data?.data as IDepartmentIndicator,
	}
}
