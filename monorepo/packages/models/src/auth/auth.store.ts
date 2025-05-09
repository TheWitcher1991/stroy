import { UserRole } from '../user'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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

type AccountStore = {
	account: IAccount
	login: (account: Partial<IAccount>) => void
	logout: () => void
}

export const useAccountStore = create<AccountStore>()(
	persist(
		set => ({
			account: ACCOUNT_INITIAL_STATE,
			login: account => set(state => ({ ...state, account })),
			logout: () => set({ account: ACCOUNT_INITIAL_STATE }),
		}),
		{
			name: 'account-storage',
		},
	),
)

export const account = useAccountStore.getState().account

export const logout = useAccountStore.getState().logout

export const login = useAccountStore.getState().login
