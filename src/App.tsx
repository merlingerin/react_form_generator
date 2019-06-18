import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Navbar from './views/components/Navbar';

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes />
			</div>
		</Router>
	);
};

export default App;
