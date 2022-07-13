import { useState, useEffect, createContext, } from 'react';
type ScrollContextProps = {
  scrollPosition: number,
};
import SmoothScroll from '../utils/scroll';
export const ScrollPositionContext = createContext({} as ScrollContextProps);
export  const getIsTouchDevice = () => {
	if (typeof window !== 'undefined') {
		const isTablet = window.matchMedia('(pointer: coarse)').matches;
		return ('ontouchstart' in window || isTablet);
	}
	return 0;
};

export const ScrollProvider = ({children}: any) => {
// https://www.pelizzari.com/en
	const [scrollPosition, setPosition] = useState(0);

	useEffect(() => {
		if (typeof window === 'object' && scrollPosition > 0 && !getIsTouchDevice() && navigator.userAgent && navigator.userAgent[0] !== 'Safari') {
			SmoothScroll({ stepSize: 60 });
			// browser code
		}
		function updatePosition() {

			setPosition(window.scrollY);
		}
		window.addEventListener('scroll', updatePosition);
		updatePosition();
		return () => window.removeEventListener('scroll', updatePosition);

	}, []);
	return <ScrollPositionContext.Provider
		value={{
			scrollPosition,
		}}>
		{children}
	</ScrollPositionContext.Provider>;
  
};

export default ScrollProvider;