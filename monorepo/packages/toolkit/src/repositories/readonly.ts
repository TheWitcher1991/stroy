import { prepareRequestParams } from '../fn'
import { AxiosInstance, AxiosResponse } from 'axios'

import { BaseRepository } from './base'

export class ReadonlyRepository<
	LIST_GET,
	GET,
	OPTIONS = Record<string, any>,
> extends BaseRepository {
	constructor(
		readonly http: AxiosInstance,
		readonly URL: string,
	) {
		super(http, URL)
	}

	async all(params?: Partial<OPTIONS>): Promise<AxiosResponse<LIST_GET>> {
		return await this.instance.get<LIST_GET>(`${this.URL}/`, {
			params: prepareRequestParams(params),
		})
	}

	async disabledPagination(): Promise<AxiosResponse<GET[]>> {
		return await this.instance.get(`${this.URL}/`)
	}

	async getById(id: number): Promise<AxiosResponse<GET>> {
		return await this.instance.get<GET>(`${this.URL}/${id}/`)
	}
}
