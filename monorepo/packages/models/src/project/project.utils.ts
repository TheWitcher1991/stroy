import { EnumType } from '@stroy/types'

import { ProjectID } from './project.types'

export const ProjectStatus = {
	ACTIVE: 'ACTIVE',
	FINISHED: 'FINISHED',
} as const

export type ProjectStatus = EnumType<typeof ProjectStatus>

export const ProjectStatusMapper: Record<ProjectStatus, string> = {
	ACTIVE: 'Активный',
	FINISHED: 'Завершен',
}

export const toProjectID = (id: number | string): ProjectID =>
	Number(id) as ProjectID
