import { TagID } from './tag.types'

export const toTagID = (id: number | string): TagID => Number(id) as TagID
