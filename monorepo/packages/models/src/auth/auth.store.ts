import { UserRole } from '../user'
import { createEvent, createStore } from 'effector'
import { persist } from 'effector-storage/local'

import { IAccount } from './auth.types'

const ACCOUNT_INITIAL_STATE: IAccount = {
	access_token: '',
	session_expires: 0,
	access_expires: 0,
	token_type: '',
	role: UserRole.OFFICER,
	user: 0,
	department: 0,
	department_name: '',
}

export const login = createEvent<Partial<IAccount>>()
export const logout = createEvent()

export const $account = createStore<IAccount>(ACCOUNT_INITIAL_STATE)

$account.on(login, (state, payload) => ({ ...state, ...payload }))
$account.reset(logout)

persist({
	store: $account,
	key: 'account-storage',
})
