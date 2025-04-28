import { Store } from '@tanstack/react-store'

export function createModelListStore<
	T,
	U extends Record<string, any>,
	M extends Record<string, any> = Record<string, any>,
>(initialState: ModelListField<T, U, M>) {
	const store = new Store<ModelListField<T, U, M>>(initialState)

	const actions = {
		setCount(count: number) {
			store.setState(prev => ({
				...prev,
				count,
			}))
		},

		setList(list: T[]) {
			store.setState(prev => ({
				...prev,
				list,
			}))
		},

		setMeta(meta: M) {
			store.setState(prev => ({
				...prev,
				meta,
			}))
		},

		setFilter(filter: Partial<U>) {
			store.setState(prev => ({
				...prev,
				filter: {
					...prev.filter,
					...filter,
				},
			}))
		},

		setLoading(loading: boolean) {
			store.setState(prev => ({
				...prev,
				loading,
			}))
		},

		setChecked(checked: number[]) {
			store.setState(prev => ({
				...prev,
				checked,
			}))
		},

		setFetching(fetching: boolean) {
			store.setState(prev => ({
				...prev,
				fetching,
			}))
		},

		reset() {
			store.setState(() => ({
				...initialState,
				loading: false,
			}))
		},
	}

	return {
		store,
		actions,
	}
}
