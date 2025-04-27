'use client'

import Projects, {
	ProjectsFetcher,
	ProjectsPagination,
} from '~widgets/projects'

import { Group, PageTitle } from '~packages/ui'

export default function ProjectsPage() {
	return (
		<Group>
			<PageTitle
				buttonTitle={'Создать проект'}
				title={'Проекты'}
				subtitle={
					'Проекты - это основная сущность системы, которая позволяет организовать работу команд'
				}
			/>
			<Projects />
			<ProjectsFetcher />
			<ProjectsPagination />
		</Group>
	)
}
