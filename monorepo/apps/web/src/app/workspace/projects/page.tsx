'use client'

import { useMount } from 'ahooks'

import { setBreadcrumbs } from '~widgets/nav'
import Projects, {
	ProjectsFetcher,
	ProjectsFilter,
	ProjectsPagination,
} from '~widgets/projects'

import { ProjectCreateButton } from '~models/project'

import { generateBreadcrumbs } from '@stroy/toolkit'

import { Group, PageTitle } from '~packages/ui'

export default function ProjectsPage() {
	useMount(() => {
		setBreadcrumbs(
			generateBreadcrumbs({
				resource: 'projects',
				variant: 'index',
			}),
		)
	})

	return (
		<Group>
			<PageTitle
				title={'Проекты'}
				subtitle={
					'Проекты - это основная сущность системы, которая позволяет организовать работу команд'
				}
				action={<ProjectCreateButton />}
			/>
			<ProjectsFilter />
			<Projects />
			<ProjectsFetcher />
			<ProjectsPagination />
		</Group>
	)
}
