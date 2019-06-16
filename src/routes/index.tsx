import React from 'react';
import { Route } from 'react-router-dom';
import FormGeneratorPage from '../views/pages/FormGeneratorPage';
import AboutPage from '../views/pages/AboutPage';

export default (): JSX.Element => (
	<>
		<Route exact path="/" component={FormGeneratorPage} />
		<Route path="/about" component={AboutPage} />
	</>
);
