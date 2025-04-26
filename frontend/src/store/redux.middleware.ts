import { isRejectedWithValue } from '@reduxjs/toolkit'
import { Middleware, MiddlewareAPI } from 'redux'

export const AppMiddlewares = []

export const RTKQueryErrorLoggerMiddleware: Middleware =
	(api: MiddlewareAPI) => next => action => {
		if (isRejectedWithValue(action)) {
			console.error(action.error, 'RTK Query Error')
		}

		return next(action)
	}
