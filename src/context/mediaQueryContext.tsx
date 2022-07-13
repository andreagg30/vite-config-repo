import { useState, useEffect, createContext, } from 'react';
type TiendaContextProps = {
  xs: boolean
};

export const MediaQueryContext = createContext({} as TiendaContextProps);

export const MediaQueryProvider = ({children}: any) => {
	const [xs, setxs] = useState(false);
	const xsSize = '(min-width: 800px)'; 

	useEffect(() => {
		const media = window.matchMedia(xsSize);
		if (media.matches !== xs) {
			setxs(media.matches);
		}
		const listener = () => {
			setxs(media.matches);
		};
		media.addEventListener('change', listener);
		return () => media.removeEventListener('change', listener);
	}, [xs, xsSize]);

	return <MediaQueryContext.Provider
		value={{
			xs,
		}}>
		{children}
	</MediaQueryContext.Provider>;
};

export default (MediaQueryProvider);
