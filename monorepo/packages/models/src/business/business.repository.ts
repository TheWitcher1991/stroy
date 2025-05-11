import { http } from '../request'
import { AxiosResponse } from 'axios'

import { businessServiceKeys } from './business.config'
import {
	IDeposit,
	ISubscription,
	IWallet,
	PaymentConfirmResponse,
} from './business.types'

export class BusinessRepository {
	static async deposit(
		data: IDeposit,
	): Promise<AxiosResponse<PaymentConfirmResponse>> {
		return await http.post(`${businessServiceKeys.deposit}/`, data)
	}

	static async wallet(): Promise<AxiosResponse<IWallet>> {
		return await http.get(`${businessServiceKeys.wallet}/`)
	}

	static async subscription(): Promise<AxiosResponse<ISubscription>> {
		return await http.get(`${businessServiceKeys.subscription}/`)
	}
}
