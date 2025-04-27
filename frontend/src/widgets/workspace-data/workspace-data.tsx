import { Flex } from '@gravity-ui/uikit'

import { ValueCard } from '~packages/ui'

export default function WorkspaceData() {
	return (
		<Flex gap={4} justifyContent={'space-between'} alignItems={'center'}>
			<ValueCard value={0} title={'Документов'} />
			<ValueCard value={'0 KB'} title={'Общий размер'} />
			<ValueCard value={0} title={'Тегов'} />
			<ValueCard value={0} title={'Проектов'} />
		</Flex>
	)
}
