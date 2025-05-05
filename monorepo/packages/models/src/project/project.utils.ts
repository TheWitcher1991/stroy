import { EnumType } from '@stroy/types'

export const ProjectStatus = {
	ACTIVE: 'ACTIVE',
	FINISHED: 'FINISHED',
} as const

export type ProjectStatus = EnumType<typeof ProjectStatus>

export const ProjectStatusMapper: Record<ProjectStatus, string> = {
	ACTIVE: 'Активный',
	FINISHED: 'Завершен',
}
