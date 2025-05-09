import { ArrowRightFromSquare } from '@gravity-ui/icons'
import { FooterItem } from '@gravity-ui/navigation'

import { useLogout } from '@stroy/models'

export default function useFooter() {
	const logout = useLogout()

	return (
		<FooterItem
			compact={false}
			item={{
				id: 'logout',
				title: 'Выход',
				icon: ArrowRightFromSquare,
				onItemClick: async () => await logout(),
			}}
		/>
	)
}
