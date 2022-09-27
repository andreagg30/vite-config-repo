import React from 'react';
import {RipplesButtons} from 'components';
import {IconButtonStyled} from './styled';



type Props = {
  children: JSX.Element | JSX.Element[],
  style?: React.CSSProperties,
  onClick?: VoidFunction,
  className?: string,
  bgColor?: string,
};

const IconButton : React.FC<Props> = ({ style, className, children, onClick, bgColor } : Props) => {

	const styleIcon: React.CSSProperties = {
		borderRadius: '50%', 
		padding: '2px',
		placeItems: 'center',
		backgroundColor: 'transparent',
		border: 'none',
		textAlign: 'center',
		...style,
	};

	return (
		<RipplesButtons style={styleIcon} onClick={onClick}>
			<IconButtonStyled bgColor={bgColor} className={className}>
				{children}
			</IconButtonStyled>
		</RipplesButtons>
	);
};
export default (IconButton);



