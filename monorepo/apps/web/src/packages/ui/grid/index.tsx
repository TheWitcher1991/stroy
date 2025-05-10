import { CSSProperties, PropsWithChildren } from 'react'

interface GridProps extends PropsWithChildren {
	gap?: CSSProperties['gap']
	grid?: CSSProperties['grid']
	gridTemplateColumns?: CSSProperties['gridTemplateColumns']
	gridTemplateRows?: CSSProperties['gridTemplateRows']
	alignContent?: CSSProperties['alignContent']
}

export const Grid = ({ children, ...rest }: GridProps) => {
	return (
		<div
			style={{
				display: 'grid',
				...rest,
			}}
		>
			{children}
		</div>
	)
}
