import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Main from './views/main';

const RouterMain : React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main></Main>} />
				{/* <Route path="/:id" element={<BlogDetails />} /> */}
			</Routes>
		</Router>
	);
};
export default (RouterMain);