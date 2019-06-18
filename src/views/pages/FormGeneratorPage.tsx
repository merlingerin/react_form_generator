import React from 'react';
import ConfigForm from '../containers/ConfigForm/ConfigForm';
import FormGenerator from '../containers/FormGenerator';
import Tabs from '../layouts/Tabs/Tabs';

const tabs = {
	json: () => <ConfigForm />,
	result: () => <FormGenerator />,
};

export default () => {
	return (
		<div className="container">
			<h3>Form generator</h3>
			<Tabs tabs={tabs} />
		</div>
	);
};
