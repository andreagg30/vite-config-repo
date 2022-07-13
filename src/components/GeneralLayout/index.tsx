import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/index';

type Props = {
  children: JSX.Element | JSX.Element[],
};
const GeneralLayout : React.FC<Props> = ({ children } : Props) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
};
export default (GeneralLayout);