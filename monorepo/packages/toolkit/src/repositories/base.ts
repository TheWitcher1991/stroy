import { AxiosInstance } from 'axios'

export class BaseRepository {
	constructor(
		readonly http: AxiosInstance,
		readonly URL: string,
	) {
		this.http = http
		this.URL = URL
	}

	get instance() {
		return this.http
	}
}
