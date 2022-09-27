import styled from 'styled-components';

export interface IconButtonStyledProps {
    bgColor?: string;
}
  
export const IconButtonStyled = styled.button<IconButtonStyledProps>`
    aspect-ratio: 1;
    border-radius: 50%; 
    padding: 2px;
    display: grid;
    place-items: center;
    background-color: ${props => props.bgColor ? props.theme.colors[props.bgColor] : 'transparent'};
    border: none;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
      
`;