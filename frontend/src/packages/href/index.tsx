import { BASE_ROOT_URL } from '~packages/system'

const href = {
	get root() {
		return BASE_ROOT_URL
	},

	get home() {
		return this.root
	},
}

export default href
