import { BASE_ROOT_URL } from '~packages/system'

const href = {
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
}

export default href
