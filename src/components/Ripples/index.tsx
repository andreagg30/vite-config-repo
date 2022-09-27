import React, {CSSProperties} from 'react';
import {useCreateRipple} from 'hooks';

type Props = {
	children: JSX.Element | JSX.Element[],
	style?: React.CSSProperties,
	onClick?: (ev?: React.MouseEvent<HTMLDivElement>) => void;
	margin?: string,
	minWidth?: string,
	width?: string,
	circular?: boolean,
	disabled?: boolean,
	className?: string,
};


const CreateRipples : React.FC<Props> = ({ children, onClick, margin, style, minWidth,width, disabled, circular, className, ...props } : Props) => {
	const boxStyle: CSSProperties = {
		borderRadius: circular ? '30px' : '4px',
		...style,
		position: 'relative',
		display: 'inline-flex',
		overflow: 'hidden',
		cursor: 'pointer',
		margin: margin,
		minWidth: minWidth,
		width: width,
	};
	const {
		handleClick,
		rippleStyle
	} = useCreateRipple();

	return (
		<div
			className={className}
			{...props}
			style={boxStyle}
			onClick={disabled ? undefined : (ev)=>handleClick(ev, 600, ()=>{
				if(onClick){
					onClick(ev);
				}
			}, 'rgba(0, 0, 0, .3)')}
		>
			{children}
			{
				!disabled && <s style={rippleStyle} />
			}
			
		</div>
	);
};
export default (CreateRipples);