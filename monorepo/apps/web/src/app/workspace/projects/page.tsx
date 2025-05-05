'use client'

import Projects, {
	ProjectsFetcher,
	ProjectsPagination,
} from '~widgets/projects'

import { ProjectCreateButton } from '~models/project'

import { Group, PageTitle } from '~packages/ui'

export default function ProjectsPage() {
	return (
		<Group>
			<PageTitle
				title={'Проекты'}
				subtitle={
					'Проекты - это основная сущность системы, которая позволяет организовать работу команд'
				}
				action={<ProjectCreateButton />}
			/>
			<Projects />
			<ProjectsFetcher />
			<ProjectsPagination />
		</Group>
	)
}
