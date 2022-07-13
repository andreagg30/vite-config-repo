import {
	useState, useEffect
} from 'react';

const useMediaQuery = (size: number) => {
	const [matches, setmatches] = useState(false);


	useEffect(() => {
		const media = window.matchMedia(`(min-width: ${size}px)`);
		if (media.matches !== matches) {
			setmatches(media.matches);
		}
		const listener = () => {
			setmatches(media.matches);
		};
		media.addEventListener('change', listener);
		return () => media.removeEventListener('change', listener);
	}, [matches, size]);

	return {
		matches
	};
};

export default useMediaQuery;