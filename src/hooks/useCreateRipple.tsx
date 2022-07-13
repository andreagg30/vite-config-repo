import React, {useState} from 'react';

const useCreateRipple = () => {
	const rippleStyleInitialState: any = {
		left: 0,
		top: 0,
		position: 'absolute',
		borderRadius: '50%',
		opacity: 0,
		width: 35,
		height: 35,
		transform: 'translate(-50%, -50%)',
		pointerEvents: 'none',

	};

	const [rippleStyle, setrippleStyle] = useState(rippleStyleInitialState);

	const handleClick = (ev: React.MouseEvent<HTMLDivElement>, during: number, onClick: (ev: React.MouseEvent<HTMLDivElement>) => any, color: string) => {
		ev.stopPropagation();

		const { pageX, pageY, currentTarget } = ev;
  
		const rect = currentTarget.getBoundingClientRect();
  
		const left = pageX - (rect.left + window.scrollX);
		const top = pageY - (rect.top + window.scrollY);
		const size = Math.max(rect.width, rect.height);
  
		setrippleStyle(
			{
				...rippleStyle,
				left,
				top,
				opacity: 1,
				transform: 'translate(-50%, -50%)',
				transition: 'initial',
				backgroundColor: color,
			},
		);

		setTimeout(() => {
			setrippleStyle(
				{
					...rippleStyle,
					opacity: 0,
					transform: `scale(${size / 9})`,
					transition: `all ${during}ms`,
				},
			);
		}, 50);
  
		if (onClick) onClick(ev);
	};


	return {
		rippleStyle,
		handleClick
	};
};

export default useCreateRipple;