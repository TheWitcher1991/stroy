import { BASE_ROOT_URL } from '@stroy/system'

export const href = {
	get root() {
		return BASE_ROOT_URL
	},

	get home() {
		return this.root
	},

	get login() {
		return `${this.root}login`
	},

	get signup() {
		return `${this.root}signup`
	},

	get workspace() {
		return `${this.root}workspace`
	},

	get profile() {
		return `${this.workspace}/profile`
	},

	get billing() {
		return `${this.workspace}/billing`
	},

	finances: {
		get index() {
			return `${href.workspace}/finances`
		},
		get deposit() {
			return `${this.index}/deposit`
		},
		get closure() {
			return `${this.index}/closure`
		},
		get transactions() {
			return `${this.index}/transactions`
		},
	},

	documents: {
		get index() {
			return `${href.workspace}/documents`
		},
		get create() {
			return `${this.index}/create`
		},
		edit(id: number) {
			return `${this.index}/${id}/edit`
		},
		byId(id?: number) {
			return `${this.index}/${id}`
		},
	},

	tags: {
		get index() {
			return `${href.workspace}/tags`
		},
		get create() {
			return `${this.index}/create`
		},
		edit(id: number) {
			return `${this.index}/${id}/edit`
		},
		byId(id?: number) {
			return `${this.index}/${id}`
		},
	},

	projects: {
		get index() {
			return `${href.workspace}/projects`
		},
		get create() {
			return `${this.index}/create`
		},
		edit(id: number) {
			return `${this.index}/${id}/edit`
		},
		byId(id?: number) {
			return `${this.index}/${id}`
		},
	},

	users: {
		get index() {
			return `${href.workspace}/users`
		},
		get create() {
			return `${this.index}/create`
		},
		edit(id: number) {
			return `${this.index}/${id}/edit`
		},
		byId(id?: number) {
			return `${this.index}/${id}`
		},
	},

	journal: {
		get index() {
			return `${href.workspace}/journal`
		},
		byId(id?: number) {
			return `${this.index}/${id}`
		},
	},

	guards: {
		get index() {
			return `${href.workspace}/guards`
		},
		byId(id?: number) {
			return `${this.index}/${id}`
		},
	},
}
