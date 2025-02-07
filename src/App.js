import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import './App.css';
import CoursePage from './course';

const App = () => {
	return (
		<HashRouter basename="/">
			<div className="App">
				<Routes>
					<Route path="*" element={<CoursePage />} />
					<Route path="/shpinoza" element={<CoursePage />} />
				</Routes>
			</div>
		</HashRouter>
	);
};

export default App;
