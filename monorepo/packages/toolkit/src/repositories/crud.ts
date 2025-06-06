import { calcPercent, prepareRequestParams } from '../fn'
import { AxiosInstance, AxiosResponse } from 'axios'

import { OnUploadProgress } from '@stroy/types'

import { BaseRepository } from './base'

export class CrudRepository<
	LIST_GET,
	GET,
	CREATE,
	UPDATE,
	OPTIONS = Record<string, any>,
> extends BaseRepository {
	constructor(
		readonly http: AxiosInstance,
		readonly URL: string,
	) {
		super(http, URL)
	}

	async all(params?: Partial<OPTIONS>): Promise<AxiosResponse<LIST_GET>> {
		return await this.instance.get<LIST_GET>(this.URL, {
			params: prepareRequestParams(params),
		})
	}

	async disabledPagination(): Promise<AxiosResponse<GET[]>> {
		return await this.instance.get(`${this.URL}/`)
	}

	async getById(id: number): Promise<AxiosResponse<GET>> {
		return await this.instance.get<GET>(`${this.URL}/${id}`)
	}

	async create(data: CREATE): Promise<AxiosResponse<GET>> {
		return await this.instance.post<GET>(`${this.URL}/`, data)
	}

	async createFormData(
		data: FormData,
		onUploadProgress?: OnUploadProgress,
	): Promise<AxiosResponse<GET>> {
		return await this.instance.post<GET>(`${this.URL}/`, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			onUploadProgress: progressEvent => {
				onUploadProgress?.(
					calcPercent(progressEvent.loaded, progressEvent.total),
					progressEvent.loaded / 1024 / 1024,
					progressEvent.total / 1024 / 1024,
				)
			},
		})
	}

	async update(
		id: number,
		data: Partial<UPDATE>,
	): Promise<AxiosResponse<GET>> {
		return await this.instance.patch<GET>(`${this.URL}/${id}/`, data)
	}

	async updateFormData(
		id: number,
		data: FormData,
		onUploadProgress?: OnUploadProgress,
	): Promise<AxiosResponse<GET>> {
		return await this.instance.put<GET>(`${this.URL}/${id}/`, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			onUploadProgress: progressEvent => {
				onUploadProgress?.(
					calcPercent(progressEvent.loaded, progressEvent.total),
					progressEvent.loaded / 1024 / 1024,
					progressEvent.total / 1024 / 1024,
				)
			},
		})
	}

	async delete(id: number): Promise<AxiosResponse<any>> {
		return await this.instance.delete(`${this.URL}/${id}/`)
	}
}
