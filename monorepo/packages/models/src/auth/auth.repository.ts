import { http } from '../request'
import { AxiosResponse } from 'axios'

import { authServiceKeys } from './auth.config'
import { IAccount, ILogin, ISignup } from './auth.types'

export class AuthRepository {
	static async login(data: ILogin): Promise<AxiosResponse<IAccount>> {
		return await http.post(`${authServiceKeys.login}/`, data)
	}

	static async signup(data: ISignup): Promise<AxiosResponse> {
		return await http.post(`${authServiceKeys.signup}/`, data)
	}

	static async refresh(): Promise<
		AxiosResponse<Pick<IAccount, 'access_token' | 'access_expires'>>
	> {
		return await http.post(`${authServiceKeys.refresh}/`)
	}

	static async logout() {
		return await http.post(`${authServiceKeys.logout}/`)
	}
}
