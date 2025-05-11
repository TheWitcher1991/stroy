import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FinancesTab = '1' | '2' | '3' | '4'

type FinancesTabStore = {
	index: FinancesTab
	setIndex: (index: FinancesTab) => void
}

export const useFinancesTabStore = create<FinancesTabStore>()(
	persist(
		set => ({
			index: '1',
			setIndex: index => set({ index }),
		}),
		{
			name: 'finances-tab-storage',
		},
	),
)
