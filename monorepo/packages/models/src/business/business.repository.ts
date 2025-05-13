import { http } from '../request'
import { AxiosResponse } from 'axios'

import { ListResponse } from '@stroy/types'

import { businessServiceKeys } from './business.config'
import {
	IDeposit,
	IPayment,
	ISubscription,
	IWallet,
	PaymentConfirmResponse,
	SubscribeResponse,
	UsePayments,
} from './business.types'

export class BusinessRepository {
	static async payments(
		params: Partial<UsePayments>,
	): Promise<AxiosResponse<ListResponse<IPayment>>> {
		return await http.get(`${businessServiceKeys.payments}/`, { params })
	}

	static async payment(id: number): Promise<AxiosResponse<IPayment>> {
		return await http.get(`${businessServiceKeys.payments}/${id}/`)
	}

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

	static async subscribe(): Promise<AxiosResponse<SubscribeResponse>> {
		return await http.post(`${businessServiceKeys.subscribe}/`)
	}

	static async unsubscribe(): Promise<AxiosResponse> {
		return await http.post(`${businessServiceKeys.unsubscribe}/`)
	}

	static async renew(): Promise<AxiosResponse> {
		return await http.post(`${businessServiceKeys.renew}/`)
	}
}
