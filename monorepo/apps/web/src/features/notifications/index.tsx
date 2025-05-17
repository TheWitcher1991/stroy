import {
	Notifications as NotificationsComponent,
	NotificationsPopupWrapper,
} from '@gravity-ui/components'
import { Bell } from '@gravity-ui/icons'
import { Button, Icon, Popup } from '@gravity-ui/uikit'
import { useToggle } from 'ahooks'
import { useRef } from 'react'

import styles from './index.module.scss'

export default function Notifications() {
	const ref = useRef(null)

	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<Popup
				open={val}
				anchorRef={ref}
				className={styles.notificationsWrapper}
			>
				<NotificationsPopupWrapper>
					<NotificationsComponent
						title={'Уведомления'}
						notifications={[]}
						isLoading={false}
					/>
				</NotificationsPopupWrapper>
			</Popup>

			<Button view={'outlined'} onClick={toggle} ref={ref}>
				<Icon data={Bell} size={16} />
			</Button>
		</>
	)
}
