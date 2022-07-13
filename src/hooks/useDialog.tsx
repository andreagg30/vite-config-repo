import {
	useState
} from 'react';

const useDialog = () => {
	const [open, setopen] = useState(false);

	const handleOpen = () => {
		setopen(!open);
	};

	return {
		open,
		handleOpen,
		setopen
	};
};

export default useDialog;