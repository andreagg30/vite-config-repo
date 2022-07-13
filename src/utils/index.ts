import { FACEBOOK_LINK } from 'constants/contents';

export  const getIsTouchDevice = () => {
	if (typeof window !== 'undefined') {
		const isTablet = window.matchMedia('(pointer: coarse)').matches;
		return ('ontouchstart' in window || isTablet);
	}
	return 0;
};

export const baseColor = '#970F0F';

export const initialState = {
	userInfo: {},
	primaryColor: '#970F0F',
	icon: '/grupoPanamaH.png',
	backgroundImg: '',
	cDescripcion: '',
	loading: true,
	back: false,
	surveytoken: null,
};

export const goToDescargarFactura = () => {
	window.open('https://facturacion.grupopanama.mx/FACTURAS/');
};

export const goToFacebook = () => {
	window.open(FACEBOOK_LINK);
};

export const goToInstagram = () => {
	window.open('https://www.instagram.com/cayenna_rest/');
};

export const donwnloadContacto = () => {
	const linkSource = './catalogo.pdf';
	const fileName = 'catalogo.pdf';
	const downloadLink = document.createElement('a');

	downloadLink.href = linkSource;
	downloadLink.download = fileName;
	downloadLink.dispatchEvent(
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window
		})
	);
};