import React  from 'react';
import {GeneralLayout} from 'components';
import './styles/App.css';
import RouterMain from './router';
const App : React.FC = () => {
	return (
		<GeneralLayout>
			<RouterMain></RouterMain>
		</GeneralLayout>
	);
};

export default App;
