import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import {
	AppMiddlewares,
	RTKQueryErrorLoggerMiddleware,
} from '~store/redux.middleware'
import { RootReducer } from '~store/redux.reducers'

export const makeStore = () => {
	const store = configureStore({
		reducer: RootReducer,
		devTools: process.env.NODE_ENV !== 'production',
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware()
				.concat(RTKQueryErrorLoggerMiddleware)
				.concat(AppMiddlewares),
	})

	setupListeners(store.dispatch)
	return store
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
