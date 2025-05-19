import { Select } from '@gravity-ui/uikit'

import { useIam } from '@stroy/models'

export default function DepartmentButton() {
	const iam = useIam()

	return (
		<Select
			value={[iam.department_name]}
			options={[
				{
					content: iam.department_name,
					value: iam.department_name,
				},
			]}
			title={'Выберите рабочее пространство'}
		/>
	)
}
