import { Aperture } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

import styles from './index.module.scss'

export default function StroyPlusButton() {
	return (
		<Button view={'action'} className={styles.plusButton} size={'m'}>
			<Icon data={Aperture} size={16} />
			Плюс
		</Button>
	)
}
